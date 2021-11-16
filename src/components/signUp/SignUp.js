import { useState } from 'react';
import { useHistory } from 'react-router';

import routes from '../../routes/routes';

import FormContainer from '../containers/FormContainer';
import FormTitle from '../inputsAndForms/FormTitle';
import FakeLink from '../FakeLink';
import FormStyle from '../inputsAndForms/FormStyle';
import InputLabel from '../inputsAndForms/InputLabel';
import InputStyle from '../inputsAndForms/InputStyle';
import FormButton from '../buttons/FormButton';

import { postSignUp } from '../../services/dataApi';

import { samePassword, signUpErrors } from '../../helpers/helpers';

export default function SignUp() {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: '',
        passwordCheck: '',
        avatarUrl: '',
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

        if (!samePassword(inputs.password, inputs.passwordCheck)) {
            inputModifier('password', '');
            inputModifier('passwordCheck', '');
            setLoading(false);

            alert(
                'As senhas inseridas não conferem. Por favor, insira as senhas novamente.'
            );
            return;
        }

        let requestBody = { ...inputs };
        delete requestBody.passwordCheck;

        if (requestBody.avatarUrl.length === 0) {
            delete requestBody.avatarUrl;
        }

        postSignUp(requestBody)
            .then((response) => {
                alert('Usuário cadastrado com sucesso.');

                history.push(routes.login);
            })
            .catch((error) => {
                const text = signUpErrors(error.response.status);
                alert(text);
                setLoading(false);
            });
    }

    return (
        <FormContainer>
            <FormTitle>Crie seu cadastro</FormTitle>

            <FormStyle onSubmit={formSubmit}>
                <InputLabel htmlFor="name">Nome</InputLabel>

                <InputStyle
                    name="name"
                    value={inputs.name}
                    onChange={(event) =>
                        inputModifier('name', event.target.value)
                    }
                    placeholder="Nome"
                    type="text"
                    required={true}
                    $loading={loading}
                />

                <InputLabel htmlFor="email">E-mail</InputLabel>

                <InputStyle
                    name="email"
                    value={inputs.email}
                    onChange={(event) =>
                        inputModifier('email', event.target.value)
                    }
                    placeholder="Ex: joao@email.com"
                    type="email"
                    required={true}
                    $loading={loading}
                />

                <InputLabel htmlFor="password">Senha</InputLabel>

                <InputStyle
                    name="password"
                    value={inputs.password}
                    onChange={(event) =>
                        inputModifier('password', event.target.value)
                    }
                    placeholder="Senha"
                    type="password"
                    required={true}
                    $loading={loading}
                />

                <InputLabel htmlFor="passwordCheck">
                    Confirme a senha
                </InputLabel>

                <InputStyle
                    name="passwordCheck"
                    value={inputs.passwordCheck}
                    onChange={(event) =>
                        inputModifier('passwordCheck', event.target.value)
                    }
                    placeholder="Repita a senha"
                    type="password"
                    required={true}
                    $loading={loading}
                />

                <InputLabel htmlFor="avatar">
                    Foto de perfil (opcional)
                </InputLabel>

                <InputStyle
                    name="avatar"
                    value={inputs.avatarUrl}
                    onChange={(event) =>
                        inputModifier('avatarUrl', event.target.value)
                    }
                    placeholder="Url da foto"
                    type="url"
                    $loading={loading}
                />

                <FormButton type="submit" $loading={loading}>
                    Cadastrar
                </FormButton>
            </FormStyle>

            <FakeLink to={routes.login} $loading={loading}>
                Já tem uma conta? Entre agora!
            </FakeLink>
        </FormContainer>
    );
}
