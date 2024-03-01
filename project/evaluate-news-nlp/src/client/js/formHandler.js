import { checkForName } from "./nameChecker";
import parameters from "./reponseMapping";

function handleSubmit(event) {
  event.preventDefault();

  let response;
  const loader = document.getElementById("loader");
  const content = document.querySelector("main");
  const existingUl = document.querySelector("ul");

  if (existingUl) {
    existingUl.remove();
  }
  const ul = document.createElement("ul");

  let formText = document.getElementById("name").value;

  const inputValidated = checkForName(formText);

  if (inputValidated) {
    content.style.opacity = 0.5;
    loader.classList.remove("hidden");
    fetch("http://localhost:8081/test", {
      method: "POST",
      body: JSON.stringify({ formText }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        content.style.opacity = 1;
        loader.classList.add("hidden");
        response = res;
        const responseItems = [
          parameters.score_tag[response.data.score_tag],
          parameters.subjectivity[response.data.subjectivity],
          parameters.irony[response.data.irony],
          response.data.confidence,
        ];

        for (let i = 0; i < responseItems.length; i++) {
          let li = document.createElement("li");
          li.appendChild(document.createTextNode(responseItems[i]));
          ul.appendChild(li);
        }
        const finalResult = document.getElementById("results");

        finalResult.appendChild(ul);
      })
      .catch((error) => {
        alert(error);
        console.error("Error:", error);
      });
  } else {
    alert("Please enter a valid url");
  }
}

export { handleSubmit };
