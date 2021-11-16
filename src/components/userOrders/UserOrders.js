import PageContentContainer from '../containers/PageContentContainer';
import { OrderHistoryContainer } from './UserOrdersStyles';
import HistoryCard from './HistoryCard';

import UserContext from '../../contexts/UserContext';
import { useContext, useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
import routes from '../../routes/routes';

import { getHistory } from '../../services/dataApi';

export default function UserOrders() {
	const { user } = useContext(UserContext);
	const history = useHistory();
	const [orderHistory, setOrderHistory] = useState([]);

	useEffect(() => {
		if (!user) return history.push(routes.home);

		getHistory(user.token)
			.then(response => setOrderHistory(response.data))
			.catch(error => console.log(error));
	}, [user]);

	return (
		<PageContentContainer>
			<OrderHistoryContainer>
				<h2>Histórico de compras</h2>
				{orderHistory.map((product, i) => (
					<HistoryCard product={product} key={i} />
				))}
			</OrderHistoryContainer>
		</PageContentContainer>
	);
}
