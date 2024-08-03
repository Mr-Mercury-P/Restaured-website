document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const modal = document.getElementById('loginModal');
    const closeBtn = document.querySelector('.close');

    const openModal = () => {
        modal.style.display = 'block';
    };

    const closeModal = () => {
        modal.style.display = 'none';
    };

    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });

    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            closeModal();
        }
    });

    const slides = document.querySelector('.slides');
    let index = 0;

    const nextSlide = () => {
        index = (index + 1) % slides.children.length;
        slides.style.transform = `translateX(-${index * 100}%)`;
    };

    setInterval(nextSlide, 3000);

    const retrieveCredentials = (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const message = document.getElementById('message');
        message.textContent = 'Nigga bend over!';
    };

    const loginForm = document.querySelector('form');
    loginForm.addEventListener('submit', retrieveCredentials);
});
