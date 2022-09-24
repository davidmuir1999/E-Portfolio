function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible"

    emailjs
        .sendForm(
            "service_a32uvxl",
            "template_i552roh",
            event.target,
            "dSlgm8_3vYYWH9niU"
        ).then(() => {
            loading.classList.remove("modal__overal--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overal--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me at davidmuir1999@gmail.com"
            );
        })
}

let isModalOpen = false;
function toggleModal(){
    if (isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}
