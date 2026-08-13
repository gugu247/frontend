const API_URL = "http://127.0.0.1:8000";

function mapProject(product) {
    return {
        id: product.id,
        title: product.title,
        description: product.description,
        tasks: product.tasks,
        peoples: product.peoples,
        end_time: product.end_time,
        status: product.status
    };
}

// TODO: mapPeople, mapTask

function mapPeople{
    return {

    }
}


async function getProjects() {
    console.log(`${API_URL}/all-projects`)
    const response = await fetch(`${API_URL}/all-projects`);

    if (!response.ok) {
        throw new Error("Не удалось загрузить projects");
    }

    const projects = await response.json();
    const list = projects.map(mapProject)
    console.log(list,typeof list)
    return list;
}

async function getProject(proj_id) {
    console.log(`${API_URL}/projects/${proj_id}`)
    const response = await fetch(`${API_URL}/projects/${proj_id}`);

    if (!response.ok) {
        throw new Error("Project не найден");
    }

    const product = await response.json();
    return mapProject(product);
}

// async function buyProduct(proj_id) {
//     const response = await fetch($`{API_URL}`/projects/$`{proj_id}`/buy, {
//         method: "POST",
//     });

//     if (!response.ok) {
//         const error = await response.json();
//         throw new Error(error.detail || "Не удалось купить товар");
//     }

//     const product = await response.json();
//     return mapProject(product);
// }


async function createProject(){
    const response = await fetch($`{API_URL}`/projects, {
        method: "POST",
    });

    if(!response.ok){
        throw new Error('Project не создан')
    }

    const product = await response.json();
    return mapProject(product);
}

async function deleteProject(proj_id){
    const response = await fetch($`{API_URL}`/projects/proj_id, {
        method: "DELETE",
    });

    if(!response.ok){
        throw new Error('Project не удалён')
    }

    const product = await response.json();
    return mapProject(product);
}
