// Functionality for Nav Menu Toggle
let navMenu = document.querySelectorAll('.nav-menu .dropdown-list');
let navMenuContent = document.querySelectorAll('.nav-menu-contents .content-box');

// Add a data-index attribute to each li and content box for easy matching
navMenu.forEach((e, index) => {
    e.setAttribute('data-index', index);
    navMenuContent[index].setAttribute('data-index', index);
    e.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the click event from bubbling up to the document
        toggleContentBoxes();
        setTimeout(() => {
            document.querySelector(`.content-box[data-index="${index}"]`).classList.add('show');
        }, 10); // slight delay to trigger transition
        toggleActiveClass(e);
    });
});

function toggleContentBoxes() {
    navMenuContent.forEach(box => {
        box.classList.remove('show');
    });
}

function toggleActiveClass(activeElement) {
    navMenu.forEach(e => {
        e.classList.remove('active');
    });
    activeElement.classList.add('active');
}

// Add event listener to the document to hide active elements when clicking outside
document.addEventListener('click', () => {
    navMenu.forEach(e => {
        e.classList.remove('active');
    });
    toggleContentBoxes();
});

// Initially hide all content boxes
toggleContentBoxes();

// ---------------------------------------------------------

// Functionality for Nav Menu Toggle
let menuBtn = document.querySelector('.nav-menu ul .fa-bars');
let navMenu2 = document.querySelector('.nav-menu-2');

menuBtn.addEventListener('click', () => {
    if (navMenu2.style.opacity == '1') {
        navMenu2.style.height = '0';
        navMenu2.style.opacity = '0';
        navMenu2.style.zIndex = '-10';

    } else {
        navMenu2.style.opacity = '1';
        navMenu2.style.zIndex = '10';
        navMenu2.style.height = 'auto';
    }
})


let aboutUs = document.getElementById('about-us');
let aboutUsContent = document.getElementById('about-us-content');

aboutUs.addEventListener('click', () => {
    if (aboutUsContent.style.display == 'block') {
        aboutUsContent.style.display = 'none';
    } else {
        aboutUsContent.style.display = 'block';
    }
})

let companies = document.getElementById('companies');
let companiesContent = document.getElementById('companies-content');

companies.addEventListener('click', () => {
    if (companiesContent.style.display == 'block') {
        companiesContent.style.display = 'none';
    } else {
        companiesContent.style.display = 'block';
    }
})

let research = document.getElementById('research');
let researchContent = document.getElementById('research-content');

research.addEventListener('click', () => {
    if (researchContent.style.display == 'block') {
        researchContent.style.display = 'none';
    } else {
        researchContent.style.display = 'block';
    }
})


// ------------------------------------------------------------------------------------------------------------------------------


// functionality for input dropdown
let input_1 = document.getElementById('input-1');
let input_2 = document.getElementById('input-2');

let icon_1 = document.getElementById('icon-1');
let icon_2 = document.getElementById('icon-2');

let dropdown_1 = document.getElementById('dropdown-content-1');
let dropdown_2 = document.getElementById('dropdown-content-2');

input_1.addEventListener('focus', () => {
    dropdown_1.style.zIndex = '1';
    dropdown_1.style.opacity = '1';
    icon_1.classList.remove('fa-angle-down');
    icon_1.classList.add('fa-angle-up');
});

input_1.addEventListener('blur', () => {
    dropdown_1.style.zIndex = '-1';
    dropdown_1.style.opacity = '0';
    icon_1.classList.remove('fa-angle-up');
    icon_1.classList.add('fa-angle-down');
});

input_2.addEventListener('focus', () => {
    dropdown_2.style.zIndex = '1';
    dropdown_2.style.opacity = '1';
    icon_2.classList.remove('fa-angle-down');
    icon_2.classList.add('fa-angle-up');
});

input_2.addEventListener('blur', () => {
    dropdown_2.style.zIndex = '-1';
    dropdown_2.style.opacity = '0';
    icon_2.classList.remove('fa-angle-up');
    icon_2.classList.add('fa-angle-down');
});


let options_1 = dropdown_1.getElementsByTagName('h6');
for (let option of options_1) {
    option.addEventListener('mousedown', () => {
        input_1.value = option.innerText;
        dropdown_1.style.zIndex = '-1';
        dropdown_1.style.opacity = '0';
    });
}

let options_2 = dropdown_2.getElementsByTagName('h6');
for (let option of options_2) {
    option.addEventListener('mousedown', () => {
        input_2.value = option.innerText;
        dropdown_2.style.zIndex = '-1';
        dropdown_2.style.opacity = '0';
    });
}


// ------------------------------------------------------------------------------------------------------------------------------



// Functionality For Back To Top Button
let backToTopBtn = document.getElementById('back-to-top');

backToTopBtn.addEventListener('click', () => {
    window.scrollTo(0,0);
})


// ------------------------------------------------------------------------------------------------------------------------------



