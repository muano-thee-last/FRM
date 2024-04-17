// Open the admin login popup
function openAdminPopup() {
    document.getElementById("adminPopup").style.display = "block";
  }
  
  // Close the admin login popup
  function closeAdminPopup() {
    document.getElementById("adminPopup").style.display = "none";
  }
  

function logIn(){
    fetch('http://localhost:5000/auth/google')
        .then(response => {
            // Check if response status is a success (2xx)
            if (response.ok) {
                // Redirect to the returned URL
                window.location.href = response.url;
            } else {
                // Handle error, if needed
                console.error('Failed to fetch Google authentication endpoint:', response.statusText);
            }
        })
        .catch(error => {
            // Handle fetch error, if any
            console.error('Error fetching Google authentication endpoint:', error);
        });
}

