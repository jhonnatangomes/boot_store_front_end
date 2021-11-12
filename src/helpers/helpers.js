import statusCode from '../services/statusCodes';

const samePassword = (password, passwordCheck) => password === passwordCheck;

const signUpErrors = receivedStatusCode => {
	switch (receivedStatusCode) {
		case statusCode.badRequest:
			return 'Email ou senha inválido';

		case statusCode.conflict:
			return 'Este e-mail já está em uso';

		default:
			return 'Houve um erro ao realizar o cadastro. Por favor, tente novamente.';
	}
};

const resetInputsValues = inputs =>
	inputs.map(inp => {
		inp.value = '';
		return inp;
	});

export { samePassword, signUpErrors, resetInputsValues };
