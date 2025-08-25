// Check if user is logged in
function checkLogin() {
  const loggedInUser = localStorage.getItem('loggedInUser');
  return loggedInUser !== null;
}

// Get elements
const form = document.getElementById('feedbackForm');
const ratingOptions = document.querySelectorAll('.rating-option');
const typeOptions = document.querySelectorAll('.type-option');
const thankYouModal = document.getElementById('thankYouModal');
const loginRequiredModal = document.getElementById('loginRequiredModal');
const goToLoginBtn = document.getElementById('goToLoginBtn');
const cancelLoginBtn = document.getElementById('cancelLoginBtn');
let selectedRating = null;
let selectedType = null;

// Rating selection
ratingOptions.forEach(option => {
  option.addEventListener('click', () => {
    selectedRating = option.getAttribute('data-value');
    ratingOptions.forEach(opt => opt.classList.remove('selected'));
    option.classList.add('selected');
  });
});

// Type selection
typeOptions.forEach(option => {
  option.addEventListener('click', () => {
    selectedType = option.getAttribute('data-value');
    typeOptions.forEach(opt => opt.classList.remove('selected'));
    option.classList.add('selected');
  });
});

// Form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Check if user is logged in
  if (!checkLogin()) {
    loginRequiredModal.style.display = 'block';
    return;
  }
  
  const feedbackText = document.getElementById('feedbackText').value.trim();

  if (!selectedRating) {
    alert('Please select a rating.');
    return;
  }
  
  if (!selectedType) {
    alert('Please select a feedback type.');
    return;
  }

  // Get existing feedbacks from localStorage
  let feedbacks = [];
  const storedFeedbacks = localStorage.getItem('feedbacks');
  if (storedFeedbacks) {
    feedbacks = JSON.parse(storedFeedbacks);
  }

  // Add new feedback - only store the username, not full user details
  const loggedInUser = localStorage.getItem('loggedInUser');
  let username = "Anonymous";
  
  // Extract just the username if user data is stored as JSON
  if (loggedInUser) {
    try {
      const userData = JSON.parse(loggedInUser);
      username = userData.username || "Anonymous";
    } catch (e) {
      // If it's not JSON, use the stored value directly
      username = loggedInUser;
    }
  }
  
  // Get the emoji for the selected rating
  const ratingEmoji = getEmojiForRating(selectedRating);
  
  feedbacks.push({
    rating: selectedRating,
    emoji: ratingEmoji, // Store the emoji
    type: selectedType,
    text: feedbackText,
    date: new Date().toLocaleString(),
    user: username  // Only storing the username
  });

  // Save back to localStorage
  localStorage.setItem('feedbacks', JSON.stringify(feedbacks));

  // Show thank you modal
  thankYouModal.style.display = 'block';

  // Reset form
  form.reset();
  ratingOptions.forEach(opt => opt.classList.remove('selected'));
  typeOptions.forEach(opt => opt.classList.remove('selected'));
  selectedRating = null;
  selectedType = null;

  // Update feedback list immediately
  displayFeedbacks();
  updateStorageInfo();
  
  // Scroll to the submitted feedbacks section
  document.querySelector('.submitted-feedbacks-container').scrollIntoView({ 
    behavior: 'smooth' 
  });
});

// Function to get emoji for rating value
function getEmojiForRating(rating) {
  const emojis = {
    "1": "😠",
    "2": "😕",
    "3": "😐",
    "4": "🙂",
    "5": "😍"
  };
  return emojis[rating] || "❓";
}

// Redirect to login page
goToLoginBtn.addEventListener('click', () => {
  // Store the current page to return after login
  localStorage.setItem('redirectAfterLogin', window.location.href);
  window.location.href = 'login.html';
});

// Cancel login
cancelLoginBtn.addEventListener('click', () => {
  loginRequiredModal.style.display = 'none';
});

// Close modals
document.getElementById('closeModal').addEventListener('click', () => {
  thankYouModal.style.display = 'none';
});

document.getElementById('closeLoginModal').addEventListener('click', () => {
  loginRequiredModal.style.display = 'none';
});

// Display feedbacks from localStorage
function displayFeedbacks() {
  const feedbackList = document.getElementById('feedbackList');
  feedbackList.innerHTML = '';

  const storedFeedbacks = localStorage.getItem('feedbacks');
  if (!storedFeedbacks) {
    feedbackList.innerHTML = '<li>No feedback submitted yet.</li>';
    return;
  }

  const feedbacks = JSON.parse(storedFeedbacks);
  
  // Sort by date, newest first
  feedbacks.sort((a, b) => new Date(b.date) - new Date(a.date));

  feedbacks.forEach(fb => {
    const li = document.createElement('li');
    
    // Use the stored emoji instead of stars
    li.innerHTML = `
      <div class="feedback-header">
        <div class="feedback-username">${fb.user || 'Anonymous'}</div>
        <div class="feedback-rating">${fb.emoji || getEmojiForRating(fb.rating)}</div>
      </div>
      <div class="feedback-comment">${fb.text}</div>
      <div class="feedback-date">${fb.date}</div>
    `;
    feedbackList.appendChild(li);
  });
}

// Show storage information
function updateStorageInfo() {
  const storageInfo = document.getElementById('storageInfo');
  const storedFeedbacks = localStorage.getItem('feedbacks');
  let feedbackCount = 0;
  
  if (storedFeedbacks) {
    feedbackCount = JSON.parse(storedFeedbacks).length;
  }
  
  const storageInfoText = `
    <div class="storage-info">
      <strong>Storage Information:</strong> 
      Your feedback is stored locally in your browser's storage. 
      Currently storing ${feedbackCount} feedback entries.
    </div>
  `;
  
  storageInfo.innerHTML = storageInfoText;
}

// Load feedbacks when page loads
window.onload = function() {
  displayFeedbacks();
  updateStorageInfo();
  
  // Close modals if clicked outside
  window.addEventListener('click', (e) => {
    if (e.target === thankYouModal) {
      thankYouModal.style.display = 'none';
    }
    if (e.target === loginRequiredModal) {
      loginRequiredModal.style.display = 'none';
    }
  });
  
  // Check if user just logged in (redirected from login page)
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('login') === 'success') {
    alert('Login successful! You can now submit feedback.');
  }
};