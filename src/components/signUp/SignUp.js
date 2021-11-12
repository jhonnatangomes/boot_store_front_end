import { useState } from 'react';

import routes from '../../routes/routes';

import FormContainer from '../containers/FormContainer';
import FormTitle from '../inputsAndForms/FormTitle';
import FakeLink from '../FakeLink';
import FormStyle from '../inputsAndForms/FormStyle';
import InputLabel from '../inputsAndForms/InputLabel';
import InputStyle from '../inputsAndForms/InputStyle';
import FormButton from '../buttons/FormButton';

import {
	samePassword,
	signUpErrors,
	resetInputsValues,
} from '../../helpers/helpers';

export default function SignUp() {
	const [loading, setLoading] = useState(false);
	const [inputs, setInputs] = useState({
		name: {
			value: '',
		},
		email: {
			value: '',
		},
		password: {
			value: '',
		},
		passwordCheck: {
			value: '',
		},
		avatarUrl: {
			value: '',
		},
	});

	function inputModifier(field, newValue) {
		inputs[field].value = newValue;
		setInputs({ ...inputs });
	}

	function formSubmit(event) {
		setLoading(true);

		event.preventDefault();

		setLoading(false);
	}

	return (
		<FormContainer>
			<FormTitle>Crie seu cadastro</FormTitle>

			<FormStyle onSubmit={formSubmit}>
				<InputLabel htmlFor='name'>Nome</InputLabel>

				<InputStyle
					name='name'
					value={inputs.name.value}
					onChange={
						loading
							? null
							: event => inputModifier('name', event.target.value)
					}
					placeholder='Nome'
					loading={loading}
					type='text'
					required={true}
				/>

				<InputLabel htmlFor='email'>E-mail</InputLabel>

				<InputStyle
					name='email'
					value={inputs.email.value}
					onChange={
						loading
							? null
							: event =>
									inputModifier('email', event.target.value)
					}
					placeholder='Ex: joao@email.com'
					loading={loading}
					type='email'
					required={true}
				/>

				<InputLabel htmlFor='password'>Senha</InputLabel>

				<InputStyle
					name='password'
					value={inputs.password.value}
					onChange={
						loading
							? null
							: event =>
									inputModifier(
										'password',
										event.target.value
									)
					}
					placeholder='Senha'
					loading={loading}
					type='password'
					required={true}
				/>

				<InputLabel htmlFor='passwordCheck'>
					Confirme a senha
				</InputLabel>

				<InputStyle
					name='passwordCheck'
					value={inputs.passwordCheck.value}
					onChange={
						loading
							? null
							: event =>
									inputModifier(
										'passwordCheck',
										event.target.value
									)
					}
					placeholder='Repita a senha'
					loading={loading}
					type='password'
					required={true}
				/>

				<InputLabel htmlFor='avatar'>
					Foto de perfil (opcional)
				</InputLabel>

				<InputStyle
					name='avatar'
					value={inputs.avatarUrl.value}
					onChange={
						loading
							? null
							: event =>
									inputModifier(
										'avatarUrl',
										event.target.value
									)
					}
					placeholder='Url da foto'
					loading={loading}
					type='url'
				/>

				<FormButton type='submit' loading={loading}>
					Cadastrar
				</FormButton>
			</FormStyle>

			<FakeLink to={routes.login} loading={loading}>
				Já tem uma conta? Entre agora!
			</FakeLink>
		</FormContainer>
	);
}
