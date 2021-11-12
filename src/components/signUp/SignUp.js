import { useState } from 'react';

import routes from '../../routes/routes';

import FormContainer from '../containers/FormContainer';
import FormTitle from '../inputsAndForms/FormTitle';
import CustomForm from '../inputsAndForms/CustomForm';
import FakeLink from '../FakeLink';

export default function SignUp() {
	const [loading, setLoading] = useState(false);
	const [inputs, setInputs] = useState([
		{
			field: 'name',
			label: 'Nome',
			type: 'text',
			value: '',
			placeholder: 'Nome',
			required: true,
		},
		{
			field: 'email',
			label: 'E-mail',
			type: 'email',
			value: '',
			placeholder: 'Digite seu e-mail',
			required: true,
		},
		{
			field: 'password',
			label: 'Senha',
			type: 'password',
			value: '',
			placeholder: 'Senha',
			required: true,
		},
		{
			field: 'passwordCheck',
			label: 'Confirmação de senha',
			type: 'password',
			value: '',
			placeholder: 'Confirme a senha',
			required: true,
		},
		{
			field: 'avatarUrl',
			label: 'Foto de perfil (opcional)',
			type: 'url',
			value: '',
			placeholder: 'Insira uma url para sua foto',
		},
	]);

	function formSubmit(event) {
		setLoading(true);

		event.preventDefault();

		setLoading(false);
	}

	return (
		<FormContainer>
			<FormTitle>Crie seu cadastro</FormTitle>
			<CustomForm
				formInfos={inputs}
				formSubmit={formSubmit}
				saveInputsState={setInputs}
				loading={loading}
				buttonText='Cadastrar'
			/>

			<FakeLink to={routes.login} loading={loading}>
				Já tem uma conta? Entre agora!
			</FakeLink>
		</FormContainer>
	);
}
