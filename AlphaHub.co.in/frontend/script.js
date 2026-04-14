function scrollToForm() {
    document.getElementById("form-section").scrollIntoView();
  }
  
  document.getElementById("leadForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Request submitted!");
  });