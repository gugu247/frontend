const allpr = document.getElementById('allpr');
const inp = document.getElementById('inp');
const category = document.getElementById('category');

//const API_URL = "http://127.0.0.1:8000";


async function renderProducts(){
    console.log(`${API_URL}/all-projects`)
    const response = await fetch(`${API_URL}/all-projects`);

    if (!response.ok) {
        throw new Error("Не удалось загрузить projects");
    }

    const projects = await response.json();
    const items = projects.map(mapProject)
    console.log(items,typeof items)



    allpr.innerHTML = ''

    if(items.length===0){
        allpr.innerHTML = '<p>Нет результата</p>'
        return
    }
    console.log(items)
    items.forEach(product => {
        console.log(123)
        const card = document.createElement('div');
        card.id = `${product.id}`
        card.className = 'card'

        card.innerHTML= `
            <h1>${product.id}</h1>
            <h1>${product.title}</h1>
            <h2>${product.end_time}</h2>
            <h2>${product.status}</h2>
            <button class="butdone" id="${product.id}">Выполнен</button>
        `;
        allpr.appendChild(card);
    });
    
    const butdones = [...document.querySelectorAll('.butdone')];
    const allcards = [...document.querySelectorAll('.card')];


    butdones.forEach(function(but){
        but.onclick = donepr;
        console.log(butdones.indexOf(but));

        function donepr(){
            allcards.forEach(function(cardProject){
                if(but.id == cardProject.id){
                    cardProject.remove()
                    console.log(cardProject);
                };
            });
        };
    });
    
    console.log(allcards);
    allcards.forEach(function(pr){
      pr.onclick = function(){
        console.log(typeof pr.id)
        console.log(pr.id)
        sessionStorage.setItem('bebeb',pr.id)
        window.location.href = '../product/product.html'

      }
    });


};
renderProducts();


//const projectcard = [...document.querySelectorAll('.card')];
//console.log(projectcard);
//projectcard.forEach(function(pr){
//  console.log('jhrfoerfoego')
//  pr.onclick = function(){
//    window.location.href = '../product/product.html'
//  }
//});