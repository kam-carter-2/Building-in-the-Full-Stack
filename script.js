```javascript
// Show and hide the company story
const storyButton = document.getElementById("storyButton");
const storyMessage = document.getElementById("storyMessage");

storyButton.addEventListener("click", function () {
    storyMessage.classList.toggle("hidden");

    if (storyMessage.classList.contains("hidden")) {
        storyButton.textContent = "Learn More";
    } else {
        storyButton.textContent = "Hide Story";
    }
});


// Handle the contact form
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    formMessage.textContent =
        `Thanks, ${name}! Your message has been received.`;

    contactForm.reset();
});


// Back to top button
const topButton = document.getElementById("topButton");

topButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
```
