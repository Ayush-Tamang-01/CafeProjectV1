
// const menuList = document.getElementById("menuList")
// const menuIcon = document.getElementById("menuTab")
// const crossIcon = document.getElementById("crossIcon")

// if(menuIcon){
//         menuIcon.addEventListener("click", ()=>{
//         menuIcon.classList.toggle("hidden")
//         crossIcon.classList.toggle("hidden")
//         menuList.classList.toggle("hidden")
//     })
// }

// if(crossIcon){
//     crossIcon.addEventListener("click", ()=>{
//         menuIcon.classList.toggle("hidden")
//         crossIcon.classList.toggle("hidden")
//         menuList.classList.toggle("hidden")
//     })
// }

const contactForm = document.querySelector("#contactForm")

const contact = document.getElementById("contact");

contact.addEventListener("input", () => {
    contact.value = contact.value.replace(/[^0-9]/g, "");
});

contactForm.addEventListener("submit", function(e){
    e.preventDefault(); 

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const message = document.getElementById("message").value.trim();

    if (fullname.length < 3) {
      alert("Full Name must be at least 3 characters long.");
      return;
    }

    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/ ;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    if (contact.length !== 10) {
      alert("Contact number must be exactly 10 digits.");
      return;
    }

    if (message.length < 10) {
      alert("Message must be at least 10 characters long.");
      return;
    }
    
    alert(`Welcome ${fullname}.Form Submitted Successfully!`);
    contactForm.submit();

});



