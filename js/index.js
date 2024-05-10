import footer from "../componets/footer.js";

 document.getElementById("footer").innerHTML=footer()

const getData = () => {
    fetch("http://localhost:3000/Feedback")
        .then((res) => res.json())
        .then((Feedback_data) => {
            Customers_Feedback_ui(Feedback_data);
        })
}

const Customers_Feedback_ui = (Feedback_data) => {
    document.querySelector(".swiper-wrapper").innerHTML = "";
    Feedback_data.map((ele) => {
        let name = document.createElement("h4")
        name.innerHTML = ele.name
        let review = document.createElement("p")
        review.innerHTML = ele.Feedback
        let img = document.createElement("img")
        img.src = ele.img

        let div = document.createElement("div")
        div.append(img, review, name)
        div.setAttribute("class", "swiper-slide")
        console.log(div);
        document.querySelector(".swiper-wrapper").append(div)
    })
}

const Berger_Hut_server = (Feedback_data) => {
    try {
        fetch("http://localhost:3000/Feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Feedback_data)
        });
        getData()
    } catch (error) {
        console.log(error, message);
    }
}

const Customers_Feedback_FormData = (e) => {
    e.preventDefault();

    let Feedback_data = {
        name: document.getElementById("Customers-name").value,
        Feedback: document.getElementById("Customers-Feedback").value,
        img: document.getElementById("Customers-img").value
    };
    e.target.reset();
    Berger_Hut_server(Feedback_data)
    getData()
}

document.getElementById("Feedback-form").addEventListener("submit", Customers_Feedback_FormData);

getData()


// slaider js 

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
