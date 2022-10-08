const btn = document.getElementById('menu_btn');
const overlay = document.getElementById('overlay');
const mobileMenu = document.getElementById('mobile_menu');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;

window.addEventListener('scroll', scrollPage);

btn.addEventListener('click', function () {
    btn.classList.toggle('active');
    overlay.classList.toggle('overlay_show');
    document.body.classList.toggle('stop-scroll');
    mobileMenu.classList.toggle('show_menu');

    window.onclick = function (e) {
        if (e.target === overlay) {
            btn.classList.toggle('active');
            overlay.classList.toggle('overlay_show');
            document.body.classList.toggle('stop-scroll');
            mobileMenu.classList.toggle('show_menu');
        }
    }
});

function scrollPage() {
    const scrollPos = window.scrollY;

    if (scrollPos > 150 && !scrollStarted) {
        countUp();
        scrollStarted = true;
    } else if (scrollPos < 100 && scrollStarted) {
        reset();
        scrollStarted = false;
    }
}

function countUp() {
    counters.forEach(counter => {
        counter.innerText = '0';

        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');

            const cur = +counter.innerText;

            const increment = target / 100;

            if (cur < target) {
                // Round up and set counter value
                counter.innerText = `${Math.ceil(cur + increment)}`
                setTimeout(updateCounter, 25);
            } else {
                counter.innerText = target
            }
        };

        updateCounter();
    })
}

function reset() {
    counters.forEach(counter => counter.innerHTML = '0');
}