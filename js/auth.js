const AUTH_API_URL = 'http://127.0.0.1:8000';
const ACCESS_TOKEN_KEY = 'bebebe';

function getAccessToken(){
    return sessionStorage.getItem(ACCESS_TOKEN_KEY);
}

function saveAccessToken(token){
    return sessionStorage.setItem(ACCESS_TOKEN_KEY, token);
}

function removeAccessToken(){
    return sessionStorage.removeItem(ACCESS_TOKEN_KEY)
}

function redirectToLogin(){
    window.location.href = '../login/login.html';
}

async function apiFetch(path, options={}){  //ПРИ ИСТЕЧЕНИИ ЖИЗНИ ТОКЕНА ВЫКИДЫВАЕТ ОБРАТНО В ЛОГИН. ПРОВЕРКА ЖИЗНИ ТОКЕНА
    const token = getAccessToken();
    const headers = new Headers(options.headers || {})
    if(token){
        headers.set('Authorization',`Bearer ${token}`)
    }

    const response = await fetch(`${AUTH_API_URL}${path}`, {
        ...options,
        headers,
    })

    if(response.status === 401){
        clearAccessToken();
        redirectToLogin();
        throw new Error('BAD');
    }
}


function logout(){
    removeAccessToken();
    redirectToLogin();
}