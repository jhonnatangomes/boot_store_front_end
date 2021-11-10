import styled from 'styled-components';

import { useHistory } from 'react-router-dom';
import routes from '../../routes/routes';

export default function Logo() {
	const history = useHistory();

	return <LogoStyle onClick={() => history.push(routes.home)}>BS</LogoStyle>;
}

const LogoStyle = styled.div`
	font-family: 'Mochiy Pop P One', sans-serif;
	font-size: 40px;
	color: #fff232;
	margin: 0 20px;
	cursor: pointer;
`;
