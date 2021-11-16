import statusCode from '../services/statusCodes';
import { postProduct } from '../services/dataApi';

const samePassword = (password, passwordCheck) => password === passwordCheck;

const signUpErrors = receivedStatusCode => {
	switch (receivedStatusCode) {
		case statusCode.badRequest:
			return 'Preencha todos os campos corretamente';

		case statusCode.conflict:
			return 'Este e-mail já está em uso';

		default:
			return 'Houve um erro ao realizar o cadastro. Por favor, tente novamente.';
	}
};

const loginErrors = receivedStatusCode => {
	switch (receivedStatusCode) {
		case statusCode.badRequest:
			return 'Preencha todos os campos corretamente';

		case statusCode.notFound:
			return 'A senha ou o e-mail fornecido está errado';

		default:
			return 'Houve um erro ao realizar o login. Por favor, tente novamente.';
	}
};

const saveUserOnLocalStorage = user =>
	localStorage.setItem('boot_store_user', JSON.stringify(user));

const loadUserFromLocalStorage = () =>
	JSON.parse(localStorage.getItem('boot_store_user'));

const deleteUserOnLocalStorage = () =>
	localStorage.removeItem('boot_store_user');

const insertLocalStorageInCart = token => {
	const cartLocalStorage = JSON.parse(localStorage.getItem('cart'));

	if (!cartLocalStorage || cartLocalStorage.length === 0) return;

	cartLocalStorage.forEach(product => {
		const promise = postProduct(token, {
			uuid: product.id,
			quantity: product.productQuantity,
		});
		promise.catch(err => console.log(err.response));
	});
};

const headersConfig = token => {
	return {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
};

const formatDate = date => {
	date = new Date(date);
	const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
	return date.toLocaleDateString('pt-BR', options);
};

export {
	samePassword,
	signUpErrors,
	loginErrors,
	saveUserOnLocalStorage,
	loadUserFromLocalStorage,
	deleteUserOnLocalStorage,
	headersConfig,
	insertLocalStorageInCart,
	formatDate,
};
