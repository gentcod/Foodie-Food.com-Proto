//Query selector for theme toggle
const toggleBall = document.querySelector('.theme__toggle-ball');
const navIcon = document.querySelector('.header-nav-cont');
const navigation = document.querySelector('.header-nav');

//Query selector for all elements with style change when theme is changed
const themeChange = document.querySelectorAll('body, .header-menu, .header-nav, .info, .headtitle-btn, .section-col, .section-what, .section-what-frame, .section-what-heading, .section-body-ext-2, .section-body-ext-3, .section-body-ext-label-text, .section-body-ext-label-text--big')

//Event listner function for when the toggle ball is clicked, it toggles a class on and off when an a click event occurs
toggleBall.addEventListener('click', () => {

    //Iterator function for the array of elemts to undergo style change
    themeChange.forEach(change => {
        change.classList.toggle('active')
    })
    toggleBall.classList.toggle('active');
})

navIcon.addEventListener('click', function(e) {
    e.preventDefault();
    // console.log(navigation.classList)

    navigation.classList.toggle('hidden');
})