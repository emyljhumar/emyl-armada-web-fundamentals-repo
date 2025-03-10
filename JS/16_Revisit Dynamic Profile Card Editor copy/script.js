function updateProfile() {
  const nameInput = document.getElementById("nameInput").value;
  const bioInput = document.getElementById("bioInput").value;
  const imageInput = document.getElementById("imageInput").value;
  const bgColorInput = document.getElementById("bgColorInput").value;

  
  document.getElementById("profileName").textContent = nameInput || "John Doe";

  
  document.getElementById("profileBio").textContent = bioInput || "This is my bio.";

  
  const profileImage = document.getElementById("profileImage");
  profileImage.setAttribute("src", imageInput || "default.jpg");

  
  document.getElementById("profileCard").style.backgroundColor = bgColorInput;
}


document.getElementById("updateProfile").addEventListener("click", updateProfile);