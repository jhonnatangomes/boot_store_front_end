import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

import routes from '../../routes/routes';

export default function Login() {
	const { setUser } = useContext(UserContext);
	const history = useHistory();

	return (
		<>
			<div onClick={() => setUser('teste')}>Login</div>
			<div onClick={() => history.push(routes.signUp)}>cadastrar</div>
		</>
	);
}
