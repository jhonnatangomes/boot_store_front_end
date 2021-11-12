import styled from 'styled-components';

export default function Product() {
    return (
        <ProductContainer>
            <ProductImage></ProductImage>
            <ProductName>
                <span>
                    Um produto com nome muito grande OMG que nome gigante cara.
                    Quantas linhas? Será que 4 dá? jajhsjashjahjshajshjah
                    ajshajshash
                </span>
            </ProductName>
            <Price>
                <Counter>
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                </Counter>
                <span>R$ 1500,00</span>
            </Price>
        </ProductContainer>
    );
}

const ProductContainer = styled.div`
    display: flex;
    text-align: justify;
    text-justify: inter-word;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`;

const ProductImage = styled.div`
    width: 80px;
    height: 80px;
    background-color: black;
`;

const ProductName = styled.div`
    max-width: 200px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 5;

    span {
        font-size: 16px;
    }
`;

const Price = styled.div`
    max-width: 135px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    & > span {
        font-size: 16px;
        font-weight: bold;
    }
`;

const Counter = styled.div`
    max-width: 135px;
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid lightgray;
    background-color: white;

    button {
        height: 20px;
        border: none;
        outline: none;
        background-color: inherit;
        border: 1px solid lightgray;
        cursor: pointer;
    }
`;
