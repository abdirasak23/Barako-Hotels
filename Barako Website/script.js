document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active"); 
            } else {
                entry.target.classList.remove("active"); 
            }
        });
    }, { threshold: 0.3 }); 

    // Select multiple elements
    const targets = document.querySelectorAll(".second, .third, .second2, .third2, .forth, .first, .onebedroom, .twobedroom");

    targets.forEach(target => observer.observe(target)); 
});
