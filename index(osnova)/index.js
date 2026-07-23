const allpr = document.getElementById('allpr');
const inp = document.getElementById('inp');
const category = document.getElementById('category');



function renderProducts(items){
    allpr.innerHTML = ''

    if(items.length===0){
        allpr.innerHTML = '<p>Нет результата</p>'
        return
    }

    items.forEach(function(product){
        const card = document.createElement('div');
        card.id = `${product.id}`
        card.className = 'card'

        card.innerHTML= `
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
};

renderProducts(window.spproj);