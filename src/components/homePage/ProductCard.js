import styled from "styled-components";
import { useHistory } from "react-router";

export default function ProductCard({ product }) {
    const { uuid, name, description, price, color_id, image_url, category_id } =
        product;
    const history = useHistory();
    return (
        <Card onClick={() => history.push(`/produtos/${uuid}`)}>
            <ImgContainer>
                <img src={image_url} alt=""></img>
            </ImgContainer>
            <NameAndPrice>
                <Name>{name}</Name>
                <Price>
                    R$ <Bold>{price.replace(".", ",")}</Bold>
                </Price>
            </NameAndPrice>
        </Card>
    );
}

const Card = styled.div`
    width: 250px;
    height: 465px;
    border-radius: 5px;
    padding: 20px;
    border: 1px solid lightgray;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    cursor: pointer;
`;

const ImgContainer = styled.div`
    width: 244px;
    height: 271px;

    img {
        width: 244px;
        height: 251px;
        object-fit: cover;
    }
`;

const NameAndPrice = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    margin-top: 25px;
    width: 100%;
`;

const Name = styled.span`
    font-size: 17px;
    width: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
`;

const Price = styled.span`
    font-size: 20px;
`;

const Bold = styled.span`
    font-weight: bold;
`;
