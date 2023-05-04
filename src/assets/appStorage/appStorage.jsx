// updateLocal LocalStorage 
export const setLocalStorage = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value))
}

// getLocal LocalStorage 
export const getLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

// removeLocal LocalStorage 
export const removeLocalStorage = (key) => {
    localStorage.removeItem(key)
}
