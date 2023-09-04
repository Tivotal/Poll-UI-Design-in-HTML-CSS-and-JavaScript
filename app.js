/* Created by Tivotal */

let options = document.querySelectorAll("label");

for (let i = 0; i < options.length; i++) {
  options[i].addEventListener("click", () => {
    //removing active class from all items before adding active
    //class to clicked item
    for (let k = 0; k < options.length; k++) {
      options[k].classList.remove("active");
    }
    //adding active class to clicked item
    options[i].classList.add("active");
    for (let j = 0; j < options.length; j++) {
      options[j].classList.add("activeAll");
    }
  });
}
