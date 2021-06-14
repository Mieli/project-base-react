/**
 * A função authenticated é responsável por fazer a chamado ao serivor passando as credenciais de acesso  
 * 
 * 
 * @author Mieli
 * @param credential (credenciais de acesso)
 * @returns TRUE / FALSE 
 */
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


/**
 * A função getCurrentUser obtem o usuário que realizou ou login, os dados do usuário esta no localStorage  
 * 
 * 
 * @author Mieli
 * @param 
 * @returns usuário do localStorage 
 */
export function getCurrentUser(){
    const localStorage = window.localStorage;
    const currentUser = localStorage.getItem("CURRENT_USER");
    return convertStringToObject(currentUser);
}


/**
 * A função convertObjectToString converte um objeto em string para armazenar no localStorage 
 * 
 * 
 * @author Mieli
 * @param object
 * @returns uma string  / ""
 */
function convertObjectToString(object){
    if(object){
        return JSON.stringify(object);
    }
    return "";
}


/**
 * A função convertStringToObject converte uma string em objeto 
 * 
 * 
 * @author Mieli
 * @param string
 * @returns um objeto  / null
 */
function convertStringToObject(string){
    if(string){
        return JSON.parse(string);
    }
    return null;
}

