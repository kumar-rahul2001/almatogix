// const hamburger = document.querySelector(".hamburger");
// const navLink = document.querySelector(".nav__link");

// hamburger.addEventListener("click", () => {
//   navLink.classList.toggle("hide");
// });

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  const closeIcon = document.querySelector(".close-icon");
  const navItems = document.querySelector(".navbar-nav");
  const resMenu = document.querySelector(".res-menu");

  // Initially hide the res-menu
  resMenu.style.display = "none";

  // Initially, hide the close icon
  closeIcon.style.display = "none";

  // Add click event listener to toggle icons and nav items
  hamburgerIcon.addEventListener("click", function () {
    hamburgerIcon.style.display = "none";
    closeIcon.style.display = "block";
    // navItems.style.display = "block";
    resMenu.style.display = "block";
  });

  closeIcon.addEventListener("click", function () {
    closeIcon.style.display = "none";
    hamburgerIcon.style.display = "block";
    // navItems.style.display = "none";
    resMenu.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  const closeIcon = document.querySelector(".close-icon");
  // Get the menu items
  const menuItems = document.querySelectorAll(".res-menu .nav-link");

  // Add click event listener to each menu item
  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Hide the .res-menu div
      document.querySelector(".res-menu").style.display = "none";
      closeIcon.style.display = "none";
      hamburgerIcon.style.display = "block";
    });
  });

  // Add click event listener to the call button
  document.getElementById("callButton2").addEventListener("click", function () {
    // You can add the functionality for the call button here
    // For now, let's just log a message
    console.log("Call button clicked");
  });
});

document.getElementById("callButton1").addEventListener("click", function () {
  const phoneNumber = "+919142901293"; // Change this to your desired phone number
  window.location.href = "tel:" + phoneNumber;
});
document.getElementById("callButton2").addEventListener("click", function () {
  const phoneNumber = "+919142901293"; // Change this to your desired phone number
  window.location.href = "tel:" + phoneNumber;
});
document.getElementById("callButton3").addEventListener("click", function () {
  const phoneNumber = "+919142901293"; // Change this to your desired phone number
  window.location.href = "tel:" + phoneNumber;
});
document.getElementById("callButton4").addEventListener("click", function () {
  const phoneNumber = "+919142901293"; // Change this to your desired phone number
  window.location.href = "tel:" + phoneNumber;
});
document.getElementById("callButton5").addEventListener("click", function () {
  const phoneNumber = "+919142901293"; // Change this to your desired phone number
  window.location.href = "tel:" + phoneNumber;
});
