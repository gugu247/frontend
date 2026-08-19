async function renderTask(proj_id,task_id){
    const url = "http://127.0.0.1:8000";
    console.log(proj_id,task_id)
    const response = await fetch(`${url}/tasks/${proj_id}/${task_id}`);
    if(!response.ok){
        throw new Error('Task не найден');
    }
    const resptask = await response.json();
    const ta = mapTask(resptask);
    console.log(ta);

    const titletask = document.getElementById('titletask');
    const descrtask = document.getElementById('describetask');
    const statustask = document.getElementById('statustask');
    const prioritytask = document.getElementById('prioritytask');
    const endtimetask = document.getElementById('end_timetask');

    titletask.textContent = `${ta.title}`;
    descrtask.textContent = `${ta.description}`;
    statustask.textContent = `Status: ${ta.status}`;
    prioritytask.textContent = `Priority: ${ta.priority}`;
    endtimetask.textContent = `${ta.end_time}`;
}
const idproj = sessionStorage.getItem('bebeb')
const idtask = sessionStorage.getItem('ugabuga')
renderTask(idproj,idtask)


const buttonbacktask = document.getElementById('buttonbacktask')
buttonbacktask.onclick = function(){
    console.log('bebe')
    window.location.href = '../product/product.html'
}