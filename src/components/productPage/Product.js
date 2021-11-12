import { getProductInfo } from '../../services/dataApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ProductInfo from './ProductInfo';
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
        <PageContainer>
            {productInfo ? (
                <ProductContainer>
                    <ProductInfo info={productInfo}></ProductInfo>
                </ProductContainer>
            ) : (
                'Carregando'
            )}
        </PageContainer>
    );
}

const PageContainer = styled.div`
    min-height: calc(100vh - var(--header-height) - 1px);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ProductContainer = styled.div`
    height: 600px;
    border: 1px solid lightgray;
    padding: 27px;
    border-radius: 5px;
    background-color: rgb(239, 239, 239);
`;
