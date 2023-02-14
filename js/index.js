let slides = document.querySelectorAll('.offer__slide')
let prev = document.querySelector('.offer__slider-prev')
let next = document.querySelector('.offer__slider-next')
let current = document.querySelector('#current')
let total = document.querySelector('#total')

// Slider
let index = -1
let currentNum = 0
next.onclick = () => {
    slides.forEach(el => {
        el.style.display = 'none'; el.classList.remove('fade')
    })
    if (index < slides.length - 1) {
        currentNum++
        current.innerHTML = currentNum
        index++
        slides[index].style.display = 'block'; slides[index].classList.add('fade')
    } else {
        currentNum = 1
        current.innerHTML = currentNum
        index = 0
        slides[index].style.display = 'block'; slides[index].classList.add('fade')
    }
}
prev.onclick = () => {
    slides.forEach(el => {
        el.style.display = 'none'; el.classList.remove('fade')
    })
    if (index < 1) {
        currentNum = total.innerHTML
        current.innerHTML = currentNum
        index = slides.length - 1
        slides[index].style.display = 'block'; slides[index].classList.add('fade')
    } else {
        currentNum--
        current.innerHTML = currentNum
        index--
        slides[index].style.display = 'block'; slides[index].classList.add('fade')
    }
}
// Slider


// Teacher's slider

// let slideIndex = 1
// function showSlides(n) {
//     if(n > slides.length) {
//         slideIndex = 1
//     }
//     if(n < 1) {
//         slideIndex = slides.length
//     }
//     slides.forEach(slide => slide.classList.add('hide'))
//     slides[slideIndex -1].classList.remove('hide')
//     slides[slideIndex -1].classList.add('fade')
// }
// showSlides(slideIndex)
// let current = document.querySelector('#current')
// let total = document.querySelector('#total')
// console.log(+current.innerHTML);
// next.onclick = () => {
//     slideIndex++
//     if(+current.innerHTML < +total.innerHTML) {
//         +current.innerHTML++
//     } else {
//         current.innerHTML = 4
//     }
//     showSlides(slideIndex)
// }
// prev.onclick = () => {
//     if(+current.innerHTML > 1) {
//         +current.innerHTML--
//     } else {
//         current.innerHTML = 1
//     }
//     slideIndex--
//     showSlides(slideIndex)
// }

// Teacher's slider


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
//Modal