import styled from "styled-components";
import { getProducts } from "../../services/dataApi";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import Pages from "./Pages";

export default function Home() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const promise = getProducts();
        promise
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                alert("Ocorreu um erro interno");
                console.log(err.response);
            });
    }, []);

    return (
        <HomeContainer>
            {data ? (
                <>
                    <ProductsGrid>
                        {data.products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </ProductsGrid>
                    {data.products.length ? (
                        <Pages numPages={data.count} setData={setData} />
                    ) : (
                        ""
                    )}
                </>
            ) : (
                "Carregando"
            )}
        </HomeContainer>
    );
}

const HomeContainer = styled.div`
    margin: 30px;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const ProductsGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 1200px;

    & > div {
        margin: 20px 0;
    }
`;
