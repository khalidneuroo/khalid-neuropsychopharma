document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "1";
});

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {
        const url = this.href;

        if (!url || url.startsWith("#") || url.startsWith("javascript:")) return;

        e.preventDefault();
        document.body.classList.add("fade-out");

        setTimeout(() => {
            window.location.href = url;
        }, 600);
    });
});
