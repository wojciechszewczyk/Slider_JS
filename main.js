const slideList = [{
        img: "images/img1.jpg",
        text: 'Winter'
    },
    {
        img: "images/img2.jpg",
        text: 'Spring'
    },
    {
        img: "images/img3.jpg",
        text: 'Summer'
    },
    {
        img: "images/img4.jpg",
        text: 'Autumn'
    }
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')];

const time = 5000;
let active = 0;

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = () => {
    active++
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
}

let intervals = setInterval(changeSlide, time);

const keyChangeSlide = (e) => {
    switch (e.keyCode) {
        case 37:
            clearInterval(intervals);
            if (active > 0) {
                active--;
            } else if (active === 0) {
                active = slideList.length - 1;
            };
            image.src = slideList[active].img;
            h1.textContent = slideList[active].text;
            changeDot();
            intervals = setInterval(changeSlide, time);
            break;
        case 39:
            clearInterval(intervals);
            if (active < slideList.length - 1) {
                active++
            } else if (active === slideList.length - 1) {
                active = 0;
            }
            image.src = slideList[active].img;
            h1.textContent = slideList[active].text;
            changeDot();
            intervals = setInterval(changeSlide, time);
            break;
    }
}

window.addEventListener("keydown", keyChangeSlide);