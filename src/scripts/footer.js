document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('interested-email');
    const submitButton = document.getElementById('interested-submit');
    const emailForm = document.getElementById('interest-form');
    const originalPlaceholder = emailInput.placeholder;

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        const emailValue = emailInput.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailPattern.test(emailValue)) {
            emailInput.style.boxShadow = '0 0 0 5px #008bc4';
            submitButton.style.boxShadow = '5px 0 0 0 #008bc4, 0 5px 0 0 #008bc4, 0 -5px 0 0 #008bc4, 5px 5px 0 0 #008bc4, 5px -5px 0 0 #008bc4';
            emailInput.value = '';
            emailInput.placeholder = 'Submitted!';
            emailInput.disabled = true;
            submitButton.disabled = true;

            var duration = 3 * 1000;
            var animationEnd = Date.now() + duration;
            var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

            function randomInRange(min, max) {
                return Math.random() * (max - min) + min;
            }

            var interval = setInterval(function() {
            var timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            var particleCount = 100 * (timeLeft / duration);

            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
            }, 250);

            const formData = new FormData(emailForm);

            fetch(emailForm.action, {
                method: emailForm.method,
                body: formData,
            }).then(response => {
                if (!response.ok) {
                    console.error('Form submission failed:', response);
                }
                setTimeout(() => {
                    emailInput.style.boxShadow = 'none';
                    submitButton.style.boxShadow = 'none';
                    emailInput.placeholder = originalPlaceholder;
                    emailInput.disabled = false;
                    submitButton.disabled = false;
                }, 3000);
            }).catch(error => {
                console.error('Form submission error:', error);
            });
        } else {
            emailInput.style.boxShadow = '0 0 0 5px red';
            submitButton.style.boxShadow = '5px 0 0 0 red, 0 5px 0 0 red, 0 -5px 0 0 red, 5px 5px 0 0 red, 5px -5px 0 0 red';
            let flashes = 0;
            const interval = setInterval(() => {
                const boxShadowValue = flashes % 2 === 0 ? '0 0 0 5px red' : 'none';
                const submitButtonBoxShadowValue = flashes % 2 === 0 ? '5px 0 0 0 red, 0 5px 0 0 red, 0 -5px 0 0 red, 5px 5px 0 0 red, 5px -5px 0 0 red' : 'none';
                emailInput.style.boxShadow = boxShadowValue;
                submitButton.style.boxShadow = submitButtonBoxShadowValue;
                flashes++;
                if (flashes === 6) {
                    clearInterval(interval);
                    emailInput.style.boxShadow = 'none';
                    submitButton.style.boxShadow = 'none';
                }
            }, 100);
        }
    });
});