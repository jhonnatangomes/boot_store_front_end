import styled from "styled-components";
import { getProducts } from "../../services/dataApi";

export default function Pages({ numPages, setProducts }) {
    const pages = [];

    for (let i = 0; i < Number(numPages) / 16; i++) {
        pages.push(i + 1);
    }

    function handleClick(e) {
        const promise = getProducts(e.target.textContent);
        promise.then((res) => {
            setProducts(res.data.products);
            window.scrollTo(0, 0);
        });
    }

    return (
        <PagesContainer>
            {pages.map((page) => (
                <Page key={Number(page)} onClick={handleClick}>
                    {page}
                </Page>
            ))}
        </PagesContainer>
    );
}

const PagesContainer = styled.div`
    margin-top: 10px;
    display: flex;
`;

const Page = styled.div`
    width: 50px;
    height: 50px;
    border: 1px solid lightgray;
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;
