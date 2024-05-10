import footer from "../componets/footer.js";

document.getElementById("footer").innerHTML = footer()

const getData = () => {
    fetch("http://localhost:3000/new-menu")
        .then((res) => res.json())
        .then((Feedback_data) => {
            Customers_Feedback_ui(Feedback_data);
        })
}

const Customers_Feedback_ui = (Feedback_data) => {
    document.querySelector(".menu-page").innerHTML = "";

    Feedback_data.map((ele) => {
        let name = document.createElement("h4")
        name.innerHTML = ele.name
        let price = document.createElement("p")
        price.innerHTML = `₹${ele.Price}`;
        let img = document.createElement("img")
        img.src = ele.image
        let order = document.createElement("button");
        order.classList.add("order-now-btn");
        order.innerHTML = "Order Now";

        let div = document.createElement("div")
        div.append(img, name, price, order)
        document.querySelector(".menu-page").append(div)

        order.addEventListener("click", () => {
            fetch("http://localhost:3000/order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(ele)
            });
        });
    })
}
getData()