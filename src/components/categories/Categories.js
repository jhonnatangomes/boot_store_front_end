import { useParams } from 'react-router-dom';

export default function Categories() {
	const { categoryName } = useParams();

	return <div>{categoryName}</div>;
}
