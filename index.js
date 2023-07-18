// template_3k17k8t
// service_eeiwsah
// UUrUu0JM2_VwYFmPI

let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1/20;
function toggleContrast() {
    contrastToggle = !contrastToggle    
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else [
        document.body.classList.remove("dark-theme")
    ]
}

function contact(event) {
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');``    
    event.preventDefault();
    loading.classList += " modal__overlay--visible";
    emailjs
        .sendForm(
            'service_eeiwsah',
            'template_3k17k8t',
            event.target,
            'UUrUu0JM2_VwYFmPI'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
            console.log('thisworked1')
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavaliable please contact me direclty at: mrrogertan@gmail.com"
            )
        })
     console.log("it worked");

    console.log('hi');
    setTimeout(() => {
        
    }, 1000);
}



function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        document.body.classList.remove("modal--open");
        
    }
    else {
        isModalOpen = true
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        document.body.classList += " modal--open";
    }
}


function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i %2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}
