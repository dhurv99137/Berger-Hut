
import footer from "../componets/footer.js";

document.getElementById("footer").innerHTML = footer()


const getData = () => {
    fetch("http://localhost:3000/order")
        .then((res) => res.json())
        .then((Feedback_data) => {
            Customers_Feedback_ui(Feedback_data);
        });
};

const Customers_Feedback_ui = (Feedback_data) => {
    document.querySelector(".cart-page").innerHTML = "";

    Feedback_data.forEach((ele, index) => {
        let name = document.createElement("td");
        name.innerHTML = ele.name;

        let img1 = document.createElement("td");
        let img = document.createElement("img");
        img.src = ele.image;
        img1.append(img);

        let price = document.createElement("td");
        price.innerHTML = `₹${ele.Price}`;

        let td1 = document.createElement("td");
        let addBtn = document.createElement("button");
        addBtn.textContent = "+";
        addBtn.classList.add("quantity-btn");
        addBtn.addEventListener("click", () => handleQty("+", index, Feedback_data));
        let removeBtn = document.createElement("button");

        let qty = document.createElement("span");
        qty.innerHTML = "1",ele.qty;
        qty.classList.add("quantity-span");

        removeBtn.textContent = "-";
        removeBtn.classList.add("quantity-btn");
        removeBtn.addEventListener("click", () => handleQty("-", index, Feedback_data));
        td1.append(removeBtn, qty, addBtn);

        let div = document.createElement("tr");
        div.append(name, img1, td1, price);
        document.querySelector(".cart-page").append(div);
    });
};

const handleQty = (operation, index, Feedback_data) => {
 
    Customers_Feedback_ui(Feedback_data);   
};

getData();
