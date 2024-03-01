import { checkForName } from "./js/nameChecker";
import { handleSubmit } from "./js/formHandler";

import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";
import "./styles/resets.scss";

document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("btn");

  submitButton.addEventListener("click", (e) => {
    handleSubmit(e);
  });
});
