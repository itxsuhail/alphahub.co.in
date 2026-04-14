function scrollToForm() {
    document.getElementById("form-section").scrollIntoView();
  }
  const data = {
  name: document.getElementById("name").value,
  phone: document.getElementById("phone").value
};
  document.getElementById("leadForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Request submitted!");
  });
