const loginButton = document.getElementById('login-button')
const loginInput = document.getElementById('logininp')
const passwordInput = document.getElementById('passwordinp')
const loginForm = document.getElementById('login-form')

//const warn = document.getElementById('warn')
//
//loginbut.onclick = function(){
//    if(!(login.value || pass.value)){
//        console.log(login, pass)
//        console.log('ahahahah')
//        warn.textContent = 'None'
//    }if(login.value !== '' && pass.value !== ''){
//        console.log(login.value, pass)
//        console.log('NOOOOOOOOO')
//        warn.textContent = 'NICE'
//    }
//}

loginForm.addEventListener('submit', async function (event){ //БЕРЕМ ФОРМУ, ЗАПИСЫВАЕМ ЕЕ В BODY, КИДАЕМ ЗАПРОС
    event.preventDefault();
    const body = new URLSearchParms{};
    body.set('username', loginInput.value.trim());
    body.set('password', passwordInput.value);
    try{
        const response = await fetch(`${AUTH_API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlendcoded',
            },
            body,
        });
    }

    const data = await response.json();
    if(!response.ok){
        throw new Error(data.detail || 'НЕ УДАЛОСЬ ВОЙТИ')
    }
    saveAccessToken(data.access_token);
    window.location.href = '../index(osnova)/index.html';
})