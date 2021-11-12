import statusCode from '../services/statusCodes';

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

export { samePassword, signUpErrors, loginErrors };
