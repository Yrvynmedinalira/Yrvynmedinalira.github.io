const requestURL = 'https://yrvynmedinalira.github.io/FinalProject/data/rental.json';
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            console.table(jsonObject); // temporary checking for valid response and data parsing
            const mario = jsonObject['mario'];
            for (let i = 0; i < mario.length; i++) {
                let card = document.createElement('section');
                let h1 = document.createElement('h1');
                
                let image = document.createElement('img');
                h1.textContent = mario[i].rentaltype;                
                image.setAttribute('src', "images/" + rental[i].photo);
                image.setAttribute('alt', rental[i].rentaltype);
                card.appendChild(h1);                
                card.appendChild(image);
                document.querySelector('div.cards').appendChild(card);
            }
        });