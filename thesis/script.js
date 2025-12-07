document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
    const dots = document.querySelectorAll(".dot");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${100 * (i - index)}%)`;
        });
        dots.forEach(dot => dot.classList.remove("active"));
        if(dots[index]) dots[index].classList.add("active");
    }

    if (nextBtn && prevBtn && slides.length > 0) {
        nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        });

        prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        });

        dots.forEach((dot, i) => {
            dot.addEventListener("click", () => {
                currentIndex = i;
                showSlide(currentIndex);
            });
        });

        showSlide(currentIndex);
    }

    // ===== Корзина =====
    const removeButtons = document.querySelectorAll(".remove-btn");
    removeButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const item = e.target.closest(".cart-item");
            item.remove();
            updateCartTotal();
        });
    });

    function updateCartTotal() {
        const cartItems = document.querySelectorAll(".cart-item");
        let total = 0;
        cartItems.forEach(item => {
            const priceText = item.querySelector(".cart-info p").innerText;
            const price = parseFloat(priceText.replace(/\D/g, ""));
            total += price;
        });
        const totalElement = document.querySelector(".cart-total h5");
        if(totalElement) totalElement.innerText = `Итого: ${total} ₽`;
    }

    updateCartTotal();
});