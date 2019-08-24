/* eslint-disable no-unused-vars */
function getPeople() {
  const ul = document.createElement('ul');

  fetch('https://swapi.co/api/people')
    .then((resp) => resp.json())
    .then((people) => {
      people.results.forEach((person) => {
        const li = document.createElement('li');
        li.innerHTML = `
                <section>
                    <header>
                        <a href="https://en.wikipedia.org/wiki/${person.name}" target="_blank">
                            <h1>${person.name}</h1>
                        </a>
                    </header>
                    <summary>
                        <p>Eye color: ${person.eye_color}</p>
                        <p>Hair color: ${person.hair_color}</p>
                    </summary>
                </section>`;
        ul.appendChild(li);
      });

      document.body.appendChild(ul);
    });
}
