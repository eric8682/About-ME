document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".profile-button");
    const profile = document.querySelector(".profile");
    const startText = document.querySelector(".start");
  
    button.addEventListener("click", (e) => {
      e.preventDefault();
  
      
      profile.classList.add("slide-down");
      startText.classList.add("slide-down");
      const welcome = document.createElement("p");
      welcome.textContent = "Welcome";
      welcome.className = "welcome-text";
      document.body.appendChild(welcome);
  
      setTimeout(() => {
        window.location.href = "about.html";
      }, 3000);
    });
  });