import axios from 'axios';

const API = axios.create({ baseURL: 'https://mdl-server.herokuapp.com/' });

API.interceptors.request.use((req) => {
	if (localStorage.getItem('profile')) {
		req.headers.Authorization = `Bearer ${JSON.parse(
			localStorage.getItem('profile')
		)}`;
	}
	return req;
});

// export const fetchDrinks = () => API.get('/drinks');
// export const createDrink = (newDrink) => API.drink('/drinks', newDrink);
// export const deleteDrink = (id) => API.delete(`/drinks/${id}`);
// export const likeDrink = (id) => API.patch(`/drinks/${id}/likeDrink`);

export const signIn = (formData) => API.post('/user/login', formData);
export const signUp = (formData) => API.post('/user/register', formData);
