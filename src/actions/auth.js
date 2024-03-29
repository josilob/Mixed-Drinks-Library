import * as api from '../api/api';

export const signin = async (formData, history) => {
	try {
		const { data } = await api.signIn(formData);
		sessionStorage.setItem('profile', JSON.stringify({ data }.data));

		history.push('/');
		return data;
	} catch (err) {
		console.log(err.message);
	}
};

export const signup = async (formData, history) => {
	try {
		const { data } = await await api.signUp(formData);
		sessionStorage.setItem('profile', JSON.stringify({ data }.data));
		history.push('/');

		return data;
	} catch (err) {
		console.log(err.message);
	}
};
