const confirmButton = document.querySelector(".ok");

export class Modal {
  static hide() {
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".message").textContent = "";
  }

  static display(message = "") {
    document.querySelector(".message").textContent = message;
    document.querySelector(".modal").style.display = "flex";
  }
}

confirmButton.addEventListener("click", Modal.hide);
