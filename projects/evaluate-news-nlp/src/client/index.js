import { checkForName } from "./js/nameChecker";
import { handleSubmit } from "./js/formHandler";
import myImage from "../assets/images/nlp_img.png";

import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";
import "./styles/resets.scss";

document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("btn");
  const imgContainer = document.querySelector(".header__logo");

  const imgElement = document.createElement("img");

  imgElement.src = myImage;
  imgElement.setAttribute(
    "alt",
    "A CPU with Natural Language Proccesing initials"
  );
  imgContainer.appendChild(imgElement);

  submitButton.addEventListener("click", (e) => {
    handleSubmit(e);
  });
});
