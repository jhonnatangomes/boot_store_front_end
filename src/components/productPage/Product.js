import { getProductInfo } from '../../services/dataApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';

export default function Product() {
    const [productInfo, setProductInfo] = useState(null);
    const { productId: uuid } = useParams();
    console.log(productInfo);
    useEffect(() => {
        const promise = getProductInfo(uuid);
        promise
            .then((res) => {
                setProductInfo(res.data);
            })
            .catch((err) => {
                if (
                    err.response.status === 400 ||
                    err.response.status === 404
                ) {
                    alert('Produto não encontrado');
                } else {
                    alert('Um erro inesperado ocorreu');
                    console.log(err.response);
                }
            });
    }, []);

    return (
        <ProductContainer>
            <div>Product</div>
        </ProductContainer>
    );
}

const ProductContainer = styled.div`
    min-height: calc(100vh - var(--header-height) - 1px);
    text-align: center;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding-top: 45px;
`;
