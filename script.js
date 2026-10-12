
document.addEventListener("DOMContentLoaded", function () {
    // Calculate the ticket total dynamically.
    const quantityInput = document.getElementById("quantity");
    const totalPrice = document.getElementById("total-price");

    function updateTotal() {
        if (!quantityInput || !totalPrice) return;

        const price = Number(quantityInput.dataset.ticketPrice);
        const maxTickets = Number(quantityInput.dataset.maxTickets);
        let quantity = Number.parseInt(quantityInput.value, 10);

        if (!Number.isFinite(quantity)) {
            quantity = 1;
        }

        quantity = Math.max(1, Math.min(quantity, maxTickets));
        quantityInput.value = quantity;

        totalPrice.textContent = (price * quantity).toLocaleString(
            "en-IN",
            {
                style: "currency",
                currency: "INR",
                minimumFractionDigits: 2
            }
        );
    }

    if (quantityInput && totalPrice) {
        quantityInput.addEventListener("input", updateTotal);
        quantityInput.addEventListener("change", updateTotal);
        updateTotal();
    }

    // Confirm important form actions.
    document.querySelectorAll("form[data-confirm]").forEach(function (form) {
        form.addEventListener("submit", function (event) {
            const message = form.dataset.confirm;

            if (!window.confirm(message)) {
                event.preventDefault();
            }
        });
    });

    // Copy the booking reference.
    document.querySelectorAll("[data-copy]").forEach(function (button) {
        button.addEventListener("click", async function () {
            const text = button.dataset.copy;

            try {
                await navigator.clipboard.writeText(text);
                button.textContent = "Copied!";
            } catch (error) {
                window.prompt("Copy your booking ID:", text);
            }
        });
    });
});