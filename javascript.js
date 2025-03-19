// JavaScript to toggle the navigation menu
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
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




const loginModal = document.getElementById("loginModal");
        const openLoginBtn = document.getElementById("openLoginBtn");
        const closeBtn = document.getElementById("closeBtn");
        const loginForm = document.getElementById("loginForm");
        const userIcon = document.getElementById("userIcon");
        const userInfo = document.getElementById("userInfo");
        const userNameSpan = document.getElementById("userName");

        // Open Modal
        openLoginBtn.addEventListener("click", () => {
            loginModal.style.display = "block";
        });

        // Close Modal
        closeBtn.addEventListener("click", () => {
            loginModal.style.display = "none";
        });

        // Handle Login
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (username && password) {
                loginModal.style.display = "none"; // Hide modal
                openLoginBtn.style.display = "none"; // Hide login button
                userIcon.style.display = "flex"; // Show user icon
                userIcon.textContent = username.charAt(0).toUpperCase(); // Set first letter as icon
                userNameSpan.textContent = username; // Set username in info panel
            } else {
                document.getElementById("error-message").textContent = "Invalid username or password!";
            }
        });

        // Toggle User Info Dropdown
        userIcon.addEventListener("click", () => {
            userInfo.style.display = userInfo.style.display === "block" ? "none" : "block";
        });

        // Close User Info Dropdown if clicked outside
        window.addEventListener("click", (event) => {
            if (event.target !== userIcon && event.target !== userInfo) {
                userInfo.style.display = "none";
            }
        });