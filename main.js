function getPeople() {

    const ul = document.createElement('ul');

    fetch('https://swapi.co/api/people')
        .then(resp => resp.json())
        .then(people => {

            people.results.forEach(person => {
                const li = document.createElement('li');
                li.innerHTML = `<a 
                href="https://en.wikipedia.org/wiki/${person.name}"
                target="_blank">${person.name}</a>`;
                ul.appendChild(li);
            });

            document.body.appendChild(ul);
        });

}