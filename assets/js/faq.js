const questions = document.querySelectorAll("section#faq .faq-item");

questions.forEach(element => {
    element.addEventListener("click", (event) => {

        const target = event.target;

        if (target.classList.contains("open")) {
            target.classList.remove("open");
        } else {
            element.classList.add("open");
        }

    
    });
});