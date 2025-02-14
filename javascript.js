
//nav-bar to be displayed in mobile 
const menuIcon=document.getElementById('menu-icon');
const navLinks=document.getElementById('nav-links');

menuIcon.addEventListener('click', ()=>
{
  navLinks.classList.toggle('active');
});
//search bar 
function showSuggestions() {
  document.getElementById('suggestionsList').style.display = 'block';
}

function filterSuggestions(event) {
  const filter = event.target.value.toLowerCase();
  const listItems = document.querySelectorAll('.suggestion-item');
 
  listItems.forEach(item => {
    if (item.textContent.toLowerCase().includes(filter)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

function performSearch() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const listItems = document.querySelectorAll('.suggestion-item');

  listItems.forEach(item => {
    if (item.textContent.toLowerCase() === searchTerm) {
      window.location.href = item.href;
    }
  });
}

// Optional: Allow pressing Enter to trigger search
document.getElementById('searchInput').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    performSearch();
  }
});





// Get the modal and buttons
var modal = document.getElementById("loginModal");
var loginBtn = document.getElementById("loginBtn");
var closeBtn = document.getElementById("closeBtn");
var form = document.getElementById("loginForm");

// Show the modal when the "Login" button is clicked
loginBtn.onclick = function() {
    modal.style.display = "block";
}

// Close the modal when the "X" button is clicked
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close the modal if the user clicks outside of the modal content
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Form submission (for now, just a simple alert)
form.addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from submitting
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Example validation (you can replace this with real logic)
    if (username === "muc" && password === "12345") {
        alert("Login successful!");
        modal.style.display = "none"; // Close the modal on successful login
    } else {
        document.getElementById('error-message').textContent = "Invalid username or password!";
        document.getElementById('error-message').style.display = "block";
    }
});


//js for contact from submission
document.getElementById('contact-form').addEventListener('submit',function(event){
  event.preventDefault(); //prevents the default form from submitting
  alert('Submitted Successfully')
});






//automatic image slider
let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}   
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
