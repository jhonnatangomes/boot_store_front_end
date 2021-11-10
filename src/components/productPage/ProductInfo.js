import styled from 'styled-components';

export default function ProductInfo({ info }) {
    const { name, description, image_url, category, price, color } = info;
    return (
        <ProductInfoContainer>
            <ImageContainer>
                <img src={image_url} alt={''}></img>
            </ImageContainer>
            <VerticalSeparator></VerticalSeparator>
            <InfoContainer>
                <ProductName>{name}</ProductName>
                <OtherInfo>{description}</OtherInfo>
                <HorizontalSeparator></HorizontalSeparator>
                <OtherInfo>Categoria: {category}</OtherInfo>
                <HorizontalSeparator></HorizontalSeparator>
                <OtherInfo>Cor: {color}</OtherInfo>
                <HorizontalSeparator></HorizontalSeparator>
                <Price>Preço: R$ {price.replace('.', ',')}</Price>
                <Button>Adicionar ao carrinho</Button>
            </InfoContainer>
        </ProductInfoContainer>
    );
}

const ProductInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;

const ImageContainer = styled.div`
    width: 450px;
    height: 450px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const VerticalSeparator = styled.div`
    width: 0px;
    height: 450px;
    border: 1px solid lightgrey;
`;

const HorizontalSeparator = styled.div`
    width: 450px;
    height: 0px;
    border-bottom: 1px solid lightgrey;
    margin-bottom: 20px;
`;

const InfoContainer = styled.div`
    width: 450px;
    height: 450px;
    text-align: left;
`;

const ProductName = styled.p`
    height: 40px;
    font-size: 20px;
    line-height: 22px;
    margin-bottom: 20px;
    font-weight: bold;
    border-bottom: 1px solid lightgrey;
`;

const OtherInfo = styled.p`
    font-size: 17px;
    line-height: 19px;
    margin-bottom: 20px;
`;

const Price = styled.p`
    font-weight: bold;
    margin-top: 60px;
    font-size: 20px;
    line-height: 21px;
`;

const Button = styled.button`
    width: 250px;
    height: 70px;
    background-color: green;
    border: none;
    border-radius: 10px;
    margin-top: 55px;
    margin-left: 100px;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    color: white;
    font-weight: bold;
    cursor: pointer;
`;