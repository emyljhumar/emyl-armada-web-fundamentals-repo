
function updateName() {
  let name = document.getElementById("nameInput")
  let profileName = document.getElementById("profileName")
  name = name.value
  profileName.innerText = name;
}

function updateBio() {
  let bio = document.getElementById("bioInput");
  let profileBio = document.getElementById("profileBio")
  bio = bio.value
  profileBio.innerText = bio;
}

function updateImage() {
  let imageUrl = document.getElementById("imageInput").value;
  let profileImage = document.getElementById("profileImage");
  profileImage.setAttribute("src", imageUrl)
}

function updateBackgroundColor() {
  let color = document.getElementById("bgColorInput").value;
  document.getElementById("profileCard").style.backgroundColor = color;
}