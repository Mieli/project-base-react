
export async function authenticated(credential) {
    let result = false;
    let response = null;
    try {
        response = await fetch('/api/v1/authenticate', {
            headers: { "Content-type": "application/json" },
            method: "POST",
            body: JSON.stringify(credential)
        })
        if (response.status === 401) {
            return result;
        } else if (response.status === 200) {
            const data = await response.json()
            const localStorage = window.localStorage;
            localStorage.setItem("CURRENT_USER", convertObjectToString(data));
            result = true
        }
    } catch (err) {
        console.log(err);
    }
    return result;
}

export function getCurrentUser(){
    const localStorage = window.localStorage;
    const currentUser = localStorage.getItem("CURRENT_USER");
    return convertStringToObject(currentUser);
}

function convertObjectToString(object){
    if(object){
        return JSON.stringify(object);
    }
    return null;
}

function convertStringToObject(string){
    if(string){
        return JSON.parse(string);
    }
    return "";
}

