/**
 * File Name: footer.js
 * File Location: src/scripts/footer.js
 * Date Created: July 5th, 2024
 * Date Modified: July 25th, 2024
 * Purpose: Provides functionality to the footer.
 */

document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('interested-email');
    const submitButton = document.getElementById('interested-submit');
    const emailForm = document.getElementById('interest-form');
    const originalPlaceholder = emailInput.placeholder;

    // Triggers when submit is pressed
    submitButton.addEventListener('click', function(event) {
        // Prevents default submission process
        event.preventDefault();
    
        // Sets email value and creates email recognition pattern
        const emailValue = emailInput.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Checks if the entered text is a valid email address
        if (emailPattern.test(emailValue)) {
            // Sets correct email styling
            emailInput.style.boxShadow = '0 0 0 5px #008bc4';
            submitButton.style.boxShadow = '5px 0 0 0 #008bc4, 0 5px 0 0 #008bc4, 0 -5px 0 0 #008bc4, 5px 5px 0 0 #008bc4, 5px -5px 0 0 #008bc4';
            emailInput.value = '';
            emailInput.placeholder = 'Submitted!';
            emailInput.disabled = true;
            submitButton.disabled = true;

            // Triggers confetti
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

            // Creates a form data variable
            const formData = new FormData(emailForm);
            formData.append(emailInput.name, emailValue);

            // Submits form payload to endpoint url
            fetch(emailForm.action, {
                method: emailForm.method,
                body: formData,
            }).then(response => {
                if (!response.ok) {
                    console.error('Form submission failed:', response);
                }
            }).catch(error => {
                console.error('Form submission error:', error);
            });

            setTimeout(() => {
                // Returns the submission field to normal after some time
                emailInput.style.boxShadow = 'none';
                submitButton.style.boxShadow = 'none';
                emailInput.placeholder = originalPlaceholder;
                emailInput.disabled = false;
                submitButton.disabled = false;
            }, 3000);
        } else {
            // Flashes red around the submission field
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
                    // Returns the submission field to normal
                    clearInterval(interval);
                    emailInput.style.boxShadow = 'none';
                    submitButton.style.boxShadow = 'none';
                }
            }, 100);
        }
    });
});