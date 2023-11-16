const slider = document.querySelector('.sliderContainer')
const sliderItem = document.querySelectorAll('.sliderItem')
const btnLeft = document.querySelector('.js-left')
const btnRight = document.querySelector('.js-right')
const sliderCount = document.querySelector('.sliderCount')
const sliderCountCurrent = sliderCount.querySelector('.current')
const sliderCountTotal = sliderCount.querySelector('.total')
const sliderImg = document.querySelectorAll('.sliderImg')

const images = ['img/Nikason.png', 'img/Nikason2.png', 'img/Nikason3.png', 'img/Nikason4.png', 'img/Nikason5.png', 'img/PUBG.png', 'img/PUBG2.png', 'img/PUBG3.png', 'img/PUBG4.png', 'img/37_1.jpg', 'img/23.jpg', 'img/PUBG5.png', 'img/PUBG6.png', 'img/Simada.png', 'img/Simada2.png', 'img/Simada3.png', 'img/Simada4.png', 'img/Simada5.png', 'img/Simada6.png', 'img/Simada7.png']

sliderImg.forEach((el, i) => {
    el.src = images[i]
});

let active = false
let downX = 0
let moveX = 0
let currentSlide = Math.round(slider.scrollLeft / sliderItem[0].clientWidth) + 1
sliderCountTotal.textContent = sliderItem.length
sliderCountCurrent.textContent = currentSlide
slider.addEventListener('scroll', (e) => {
    e.preventDefault()
    e.stopPropagation()
    currentSlide = Math.round(slider.scrollLeft / sliderItem[0].clientWidth) + 1
    sliderCountCurrent.textContent = currentSlide
})
const move = (direction) => {
    if (direction === 'left') {
        if (slider.scrollLeft < sliderItem[0].clientWidth) {
            slider.scrollLeft = slider.scrollWidth
            return
        }
        slider.scrollLeft = slider.scrollLeft - sliderItem[0].clientWidth
    }
    if (direction === 'right') {
        if (Math.floor(slider.scrollLeft / 10) === Math.floor((slider.scrollWidth - sliderItem[0].clientWidth) / 10)) {
            slider.scrollLeft = 0
            return
        }
        slider.scrollLeft = sliderItem[0].clientWidth + slider.scrollLeft
    }
}
// click
btnLeft.addEventListener('click', () => move('left'))
btnRight.addEventListener('click', () => move('right'))
// swipe
slider.addEventListener('mousedown', (e) => {
    e.preventDefault()
    active = true
    downX = e.pageX

})
slider.addEventListener('mouseup', () => {
    active = false
})
slider.addEventListener('mouseleave', () => {
    active = false
})
slider.addEventListener('mousemove', (e) => {
    if (!active) {
        return
    }
    moveX = e.pageX
    if (downX < moveX) {
        move('left')
    }
    if (downX > moveX) {
        move('right')
    }
})