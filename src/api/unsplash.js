import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4ed048f2528ee253f8325f84a898224fa37304de49edfe2f6310d492b56f9f1c'
    }
});