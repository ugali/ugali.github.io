const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonObject){
      const prophets = jsonObject['prophets'];
      //console.log(prophets);
      for(let i=0; i <= prophets.length; i++){
          console.log(prophets[i].name);4
          const card = document.createElement('section');
          const h2 = document.createElement('h2');
          const p1 = document.createElement('P');
          const p2 = document.createElement('P');
          const image = document.createElement('img');
          p1.textContent = `Date of Birth: ${prophets[i].birthdate}`;
          p2.textContent = `Place of Birth: ${prophets[i].birthplace}`;
          image.setAttribute('src',prophets[i].imageurl);
          h2.textContent = prophets[i].name +' '+prophets[i].lastname;
         
          card.appendChild(image);
          card.appendChild(h2);
          card.appendChild(p1);
          card.appendChild(p2); 
          document.querySelector('div.cards').appendChild(card);
      }
    })


