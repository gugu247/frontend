const allpr = document.getElementById('allpr');
const inp = document.getElementById('inp');
const category = document.getElementById('category');

//const API_URL = "http://127.0.0.1:8000";
//sessionStorage.setItem('qwerty',API_URL)

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
//        card.id = `${product.id}`
        card.className = 'card'

        card.innerHTML= `
            <div class='cardbut' id=${product.id}>
                <h1>${product.id}</h1>
                <h1>${product.title}</h1>
                <h2>${product.end_time}</h2>
                <h2>${product.status}</h2>
            </div>
            <button class="butdone" id="${product.id}">Выполнен</button>
        `;
        allpr.appendChild(card);
    });
    
    const butdones = [...document.querySelectorAll('.butdone')];
    const allcards = [...document.querySelectorAll('.card')];

    const cardbebe = [...document.querySelectorAll('.cardbut')]
    console.log(cardbebe)

    butdones.forEach(function(but){
        console.log(butdones.indexOf(but));

        but.onclick = function donepr(){
            cardbebe.forEach(function(cardProject){
                if(but.id == cardProject.id){
                    cardProject.remove();
                    console.log(cardProject);
                };
            });
            but.innerHTML = `
                <h1>ВСЕ КЛАССНО</h1>
            `
        };
    });
    
    console.log(allcards);

    const cardbuts = [...document.querySelectorAll('.cardbut')]
    console.log(cardbuts)
    cardbuts.forEach(function(pr){
      pr.onclick = function(){
        console.log(typeof pr.id)
        console.log(pr.id)
        sessionStorage.setItem('bebeb',pr.id)
//        sessionStorage.setItem('qwerty',API_URL)
        window.location.href = '../product/product.html'

      }
    });

    const buttoncreatepr = document.getElementById('buttoncreatepr')

    buttoncreatepr.onclick = async function(){
        const titlecreatepr = document.getElementById('titlecreatepr').value
        const describecreatepr = document.getElementById('describecreatepr').value
        const statuscreatepr = document.getElementById('statuscreatepr').value
        const end_timecreatepr = document.getElementById('end_timecreatepr').value
        console.log(titlecreatepr)

        const projectcreate = await fetch(`${API_URL}/projects`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'title': titlecreatepr,
                'description': describecreatepr,
                'tasks': 'ugabuga',
                'peoples': 'bebee',
                'status': statuscreatepr,
                'end_time': end_timecreatepr,
            })
            });
    }


};
renderProducts();



const signin = document.getElementById('signin')
const signup = document.getElementById('signup')

signin.onclick = function(){
    window.location.href = '../login/login.html'
}

signup.onclick = function(){
    window.location.href = '../register/register.html'
}

//const projectcard = [...document.querySelectorAll('.card')];
//console.log(projectcard);
//projectcard.forEach(function(pr){
//  console.log('jhrfoerfoego')
//  pr.onclick = function(){
//    window.location.href = '../product/product.html'
//  }
//});