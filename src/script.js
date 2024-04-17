// Open the admin login popup
function openAdminPopup() {
    document.getElementById("adminPopup").style.display = "block";
  }
  
  // Close the admin login popup
  function closeAdminPopup() {
    document.getElementById("adminPopup").style.display = "none";
  }

const response = await fetch('http://localhost:5000/');