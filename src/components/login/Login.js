import { useHistory } from 'react-router';
import { useState, useContext } from 'react';
import UserContext from '../../contexts/UserContext';

import routes from '../../routes/routes';

import FormContainer from '../containers/FormContainer';
import FormTitle from '../inputsAndForms/FormTitle';
import FakeLink from '../FakeLink';
import FormStyle from '../inputsAndForms/FormStyle';
import InputLabel from '../inputsAndForms/InputLabel';
import InputStyle from '../inputsAndForms/InputStyle';
import FormButton from '../buttons/FormButton';

import { getServerStatus } from '../../services/dataApi';

export default function SignUp() {
	const history = useHistory();
	const [loading, setLoading] = useState(false);
	const [inputs, setInputs] = useState({
		email: '',
		password: '',
	});

	function inputModifier(field, newValue) {
		if (loading) return;

		inputs[field] = newValue;
		setInputs({ ...inputs });
	}

	function formSubmit(event) {
		event.preventDefault();

		if (loading) return;

		setLoading(true);

		getServerStatus().then(() => {
			console.log('hey');
			setLoading(false);
		});
	}

	return (
		<FormContainer>
			<FormTitle>Acesse sua conta</FormTitle>

			<FormStyle onSubmit={formSubmit}>
				<InputLabel htmlFor='email'>E-mail</InputLabel>

				<InputStyle
					name='email'
					value={inputs.email}
					onChange={event =>
						inputModifier('email', event.target.value)
					}
					placeholder='Ex: joao@email.com'
					type='email'
					required={true}
					$loading={loading}
				/>

				<InputLabel htmlFor='password'>Senha</InputLabel>

				<InputStyle
					name='password'
					value={inputs.password}
					onChange={event =>
						inputModifier('password', event.target.value)
					}
					placeholder='Senha'
					type='password'
					required={true}
					$loading={loading}
				/>

				<FormButton type='submit' $loading={loading}>
					Entrar
				</FormButton>
			</FormStyle>

			<FakeLink to={routes.signUp} $loading={loading}>
				Não tem conta? Cadastre-se!
			</FakeLink>
		</FormContainer>
	);
}
