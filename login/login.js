const loginbut = document.getElementById('but')
const login = document.getElementById('logininp')
const pass = document.getElementById('passwordinp')
const warn = document.getElementById('warn')

loginbut.onclick = function(){
    if(!(login.value || pass.value)){
        console.log(login, pass)
        console.log('ahahahah')
        warn.textContent = 'None'
    }if(login.value !== '' && pass.value !== ''){
        console.log(login.value, pass)
        console.log('NOOOOOOOOO')
        warn.textContent = 'NICE'
    }
}