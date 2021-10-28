import axios from 'axios';

const API = axios.create({ baseURL: 'https://mdl-server.vercel.app/' });
// const API = axios.create({ baseURL: 'http://localhost:27017/' });

API.interceptors.request.use((req) => {
	if (sessionStorage.getItem('profile')) {
		req.headers.Authorization = `Bearer ${JSON.parse(
			sessionStorage.getItem('profile')
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
