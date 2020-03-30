import axios from 'axios';

//Sprawdzanie czy użytkownik posiada token
const setAuthToken = token => {
    //Przypisanie tokenu
    if(token) axios.defaults.headers.common['authentication-token'] = token;
    //Usunięcie tokenu
    else delete axios.defaults.headers.common['authentication-token'];
}

export default setAuthToken;