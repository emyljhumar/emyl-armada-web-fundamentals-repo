document.getElementById("show-notification").addEventListener("click", function() {
  const container = document.getElementById("notification-container");
  const notification = document.createElement("div");
  notification.classList.add("notification");
  
  notification.innerHTML = `
      You have a new message! 
      <button class="close-btn">&times;</button>
  `;
  
  const closeButton = notification.querySelector(".close-btn");
  closeButton.addEventListener("click", function() {
      container.removeChild(notification);
  });
  
  container.insertBefore(notification, container.firstChild);
  
  setTimeout(() => {
      if (container.contains(notification)) {
          container.removeChild(notification);
      }
  }, 5000);
});