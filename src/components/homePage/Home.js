import styled from "styled-components";
import { getProducts } from "../../services/dataApi";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import Pages from "./Pages";

export default function Home() {
    const [products, setProducts] = useState(null);
    const [count, setCount] = useState(0);
    console.log(products);

    useEffect(() => {
        const promise = getProducts();
        promise
            .then((res) => {
                setProducts(res.data.products);
                setCount(res.data.count);
            })
            .catch((err) => {
                alert("Ocorreu um erro interno");
                console.log(err.response);
            });
    }, []);

    return (
        <HomeContainer>
            {products ? (
                <>
                    <ProductsGrid>
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </ProductsGrid>
                    {products.length ? (
                        <Pages numPages={count} setProducts={setProducts} />
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
