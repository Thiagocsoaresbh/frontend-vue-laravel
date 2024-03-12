// Function to store the token in localStorage after login
export function storeToken(token) {
    localStorage.setItem('token', token);
}

// Function to set the access token in each Axios request
export function setAuthorizationHeader(api) {
    const token = localStorage.getItem('token');

    if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common['Authorization'];
    }
}

// Function to remove the token from localStorage after logout
export function removeToken() {
    localStorage.removeItem('token');
}
