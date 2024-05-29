import { checkForName } from './nameChecker';
import parameters from './responseMapping';
import { ResponseData } from './types';

function handleSubmit(event: Event) {
  event.preventDefault();

  let response: { data: ResponseData };
  const loader = document.getElementById('loader');
  const content = document.querySelector('main');
  const existingUl = document.querySelector('ul');

  if (existingUl) {
    existingUl.remove();
  }
  const ul = document.createElement('ul');

  const formText = (document.getElementById('name') as HTMLInputElement).value;

  const inputValidated = checkForName(formText);

  if (inputValidated) {
    content!.style.opacity = '0.5';

    loader!.classList.remove('hidden');

    return fetch('http://localhost:8081/test', {
      method: 'POST',
      body: JSON.stringify({ formText }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((res) => {
        loader!.classList.add('hidden');
        content!.style.removeProperty('opacity');
        response = res;
        console.log(response.data);

        const responseItems = [
          parameters.score_tag[response.data.score_tag] || 'Unknown score tag',
          parameters.subjectivity[response.data.subjectivity] ||
            'Unknown subjectivity',
          parameters.irony[response.data.irony] || 'Unknown irony',
          response.data.confidence || 'Unknown confidence',
        ];

        for (let i = 0; i < responseItems.length; i++) {
          const li = document.createElement('li');
          li.appendChild(document.createTextNode(responseItems[i].toString()));
          ul.appendChild(li);
        }
        const finalResult = document.getElementById('results');

        finalResult!.appendChild(ul);
      })
      .catch((error) => {
        alert(error);
        console.error('Error:', error);
      });
  } else {
    alert('Please enter a valid url');
  }
}

export { handleSubmit };
