const slides = document.querySelectorAll('.offer__slide')
const prev = document.querySelector('.offer__slider-prev')
const next = document.querySelector('.offer__slider-next')
const current = document.querySelector('#current')
const total = document.querySelector('#total')
total.innerHTML = slides.length

// Slider
let slideIndex = 1
function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    slides.forEach(slide => slide.classList.add('hide'))
    slides[slideIndex - 1].classList.remove('hide')
    slides[slideIndex - 1].classList.add('fade')
    current.innerHTML = slideIndex
}
showSlides(slideIndex)
next.onclick = () => {
    slideIndex++
    showSlides(slideIndex)
}
prev.onclick = () => {
    slideIndex--
    showSlides(slideIndex)
}
// Slider


// TAB
const tabheader__items = document.querySelectorAll('.tabheader__item')
const tabcontents = document.querySelectorAll('.tabcontent')

tabheader__items.forEach(tabheader__item => {
    tabheader__item.onclick = () => {
        tabheader__items.forEach(el => {
            el.classList.remove('tabheader__item_active')
        })
        tabheader__item.classList.add('tabheader__item_active')
        tabcontents.forEach(tabcontent => {
            tabcontent.classList.remove('fade', 'tabcontent-block')
            if (tabheader__item.getAttribute('data') === tabcontent.getAttribute('data')) {
                tabcontent.classList.add('tabcontent-block', 'fade')
            }
        })
    }
});
// TAB

// Modal
const modal = document.querySelector('.modal')
const modalContent = document.querySelector('.modal__content')
const modalOpeners = document.querySelectorAll('[data-modal]')
const modalClosers = document.querySelectorAll('[data-close]')

modalOpeners.forEach(opener => {
    opener.onclick = () => {
        modal.classList.add('modal-active')
        modalContent.classList.add('modal__content_active')
    }
})
modalClosers.forEach(closer => {
    closer.onclick = () => {
        modal.classList.remove('modal-active')
        modalContent.classList.remove('modal__content_active')
    }
})
// Modal


// Calorie counter

let gens = document.querySelectorAll('#gender .calculating__choose-item')
let inputs = document.querySelectorAll('.calculating__choose_medium input')
let actBtns = document.querySelectorAll('.calculating__choose_big [data-act]')
let resultView = document.querySelector('.calculating__result span')

let userData = {
    gender: "woman",
}

gens.forEach(btn => {
    btn.onclick = () => {
        gens.forEach(el => el.classList.remove('calculating__choose-item_active'))
        btn.classList.add('calculating__choose-item_active')

        let g = btn.getAttribute('data-g')

        userData.gender = g
    }
})

inputs.forEach(inp => {
    inp.onkeyup = () => {
        let key = inp.id
        let val = inp.value

        userData[key] = val
    }
})

actBtns.forEach(btn => {
    btn.onclick = () => {
        actBtns.forEach(el => el.classList.remove('calculating__choose-item_active'))
        btn.classList.add('calculating__choose-item_active')

        let activeCount = btn.getAttribute('data-act')

        let { active, gender, weight, height, age } = userData

        active = activeCount

        if (gender === 'woman') {
            let res = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;
            resultView.innerHTML = Math.round(res * active)
        } else {
            let res = 66.5 + 13.75 * weight + 5.003 * height - 6.775 * age
            resultView.innerHTML = Math.round(res * active)
        }
    }
})

// Calorie counter


// Timer

let deadline = "2023-02-18 18:30"

function remainingDate(endTime) {
    let t = Date.parse(endTime) - Date.parse(new Date()),
        days = Math.floor((t / 1000) / 60 / 60 / 24),
        hours = Math.floor(((t / 1000) / 60 / 60) % 24),
        minutes = Math.floor(((t / 1000) / 60) % 60),
        seconds = Math.floor((t / 1000) % 60);

    return {
        t,
        days,
        hours,
        minutes,
        seconds
    }
}


function setTime(endTime, selector) {
    let t = document.querySelector(selector),
        days = t.querySelector('#days'),
        hours = t.querySelector('#hours'),
        minutes = t.querySelector('#minutes'),
        seconds = t.querySelector('#seconds'),
        updateTime = setInterval(showTime, 1000);

    function showTime() {
        let t = remainingDate(endTime)
        days.innerHTML = t.days
        hours.innerHTML = t.hours
        minutes.innerHTML = t.minutes
        seconds.innerHTML = t.seconds

        if (t.t <= 0) {
            clearInterval(updateTime)
        }
    }
}

setTime(deadline, '.timer')

// Timer

// onscrollend

let deliveryLink = document.querySelector('.header__links [data-delivery]')
let sectionTwoLink = document.querySelector('.header__links [data-section-two]')
let offer = document.querySelector('.offer')
let order = document.querySelector('.order')

function scrollAndShow(link, place) {
    link.onclick = () => {
        place.scrollIntoView({
            block: "center",
            inline: "nearest",
            behavior: "smooth"
        })
    }
}

scrollAndShow(deliveryLink, offer)
scrollAndShow(sectionTwoLink, order)

// onscrollend