import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

export default function Login() {
	const { setUser } = useContext(UserContext);
	return <div onClick={() => setUser('teste')}>Login</div>;
}
