import styled from 'styled-components';
import Product from './Product';

export default function Cart() {
    return (
        <PageContainer>
            <CartContainer>
                <ProductsContainer>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </ProductsContainer>
                <PriceContainer>
                    <div>
                        <span>Total</span>
                    </div>
                    <div>
                        <span>R$ 6000,00</span>
                    </div>
                </PriceContainer>
                <ButtonsContainer>
                    <div>
                        <button>Adicionar produtos</button>
                        <button>Finalizar Compra</button>
                    </div>
                </ButtonsContainer>
            </CartContainer>
        </PageContainer>
    );
}

const PageContainer = styled.div`
    height: calc(99vh - var(--header-height));
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CartContainer = styled.div`
    height: 600px;
    border: 1px solid lightgray;
    padding: 27px;
    border-radius: 5px;
    background-color: rgb(239, 239, 239);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ProductsContainer = styled.div`
    width: 450px;
    height: 80%;
    padding: 20px;
    overflow: auto;

    & > div:not(:last-child) {
        margin-bottom: 10px;
    }
`;

const PriceContainer = styled.div`
    width: 450px;
    height: 10%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    span {
        font-size: 22px;
        line-height: 20px;
    }

    div:last-child span {
        font-weight: bold;
    }
`;

const ButtonsContainer = styled.div`
    width: 450px;
    height: 10%;
    position: relative;

    div {
        position: absolute;
        bottom: 0;
        right: 0;
        height: 80%;
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    button {
        width: 200px;
        height: 100%;
        background-color: green;
        border: none;
        border-radius: 10px;
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        color: white;
        font-weight: bold;
        cursor: pointer;
    }
`;
