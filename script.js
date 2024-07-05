let slideIndex = 0;
let investorSlideIndex = 0;
let slideInterval;
let investorSlideInterval;

document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
    slideInterval = setInterval(() => plusSlides(1), 5000); // Change slide every 5 seconds

    showInvestorSlides(investorSlideIndex);
    investorSlideInterval = setInterval(() => plusInvestorSlides(1), 5000); // Change investor slide every 5 seconds

    document.querySelector('.prev').addEventListener('click', () => {
        clearInterval(slideInterval); // Stop auto-slide on manual navigation
        plusSlides(-1);
        slideInterval = setInterval(() => plusSlides(1), 5000); // Restart auto-slide after manual navigation
    });

    document.querySelector('.next').addEventListener('click', () => {
        clearInterval(slideInterval);
        plusSlides(1);
        slideInterval = setInterval(() => plusSlides(1), 5000);
    });

    document.querySelector('.investor-prev').addEventListener('click', () => {
        clearInterval(investorSlideInterval); // Stop auto-slide on manual navigation
        plusInvestorSlides(-1);
        investorSlideInterval = setInterval(() => plusInvestorSlides(1), 5000); // Restart auto-slide after manual navigation
    });

    document.querySelector('.investor-next').addEventListener('click', () => {
        clearInterval(investorSlideInterval);
        plusInvestorSlides(1);
        investorSlideInterval = setInterval(() => plusInvestorSlides(1), 5000);
    });

    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.querySelectorAll('.slide');
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
}

function plusInvestorSlides(n) {
    showInvestorSlides(investorSlideIndex += n);
}

function showInvestorSlides(n) {
    let slides = document.querySelectorAll('.investor-slide');
    if (n >= slides.length) {
        investorSlideIndex = 0;
    }
    if (n < 0) {
        investorSlideIndex = slides.length - 1;
    }
    slides.forEach((slide, index) => {
        slide.style.display = (index === investorSlideIndex) ? 'block' : 'none';
    });
}

