
import footer from "../componets/footer.js";

document.getElementById("footer").innerHTML = footer()


const Berger_Hut_server = (add_menu ) => {
    try {
      fetch("http://localhost:3000/new-menu", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(add_menu )
      });
      getData()
    } catch (error) {
     console.log(error,message);
    }
 }

const add_menu_form = (e) => {
    e.preventDefault()

    let add_menu = {
        name: document.getElementById("Food-name").value,
        Price: document.getElementById("Food-price").value,
        image: document.getElementById("Food-img").value
    }
    Berger_Hut_server(add_menu)
}

document.getElementById("new-menu-add-form").addEventListener("submit", add_menu_form)