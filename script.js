// JavaScript to change menu style when scrolling
window.onscroll = function() {
    changeNavbarStyle();
  };
  
  function changeNavbarStyle() {
    const navbar = document.getElementById("navbar");
    
    // Check if the page has been scrolled down
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled"); // Add scrolled class when scrolled down
    } else {
      navbar.classList.remove("scrolled"); // Remove scrolled class when at the top
    }
  }
  