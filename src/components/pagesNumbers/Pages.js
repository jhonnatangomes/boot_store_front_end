import styled from 'styled-components';
import { getProducts } from '../../services/dataApi';

export default function Pages({ totalPages, currentPage, setCurrentPage }) {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    function handleClick(e) {
        const clickedPageNumber = Number(e.target.innerHTML);

        if (clickedPageNumber === currentPage) return;

        setCurrentPage(clickedPageNumber);
        window.scrollTo(0, 0);
    }

    return (
        <PageNumberContainer>
            <span>Páginas</span>
            {pages.map((page) => (
                <PageNumber key={Number(page)} onClick={handleClick}>
                    {page}
                </PageNumber>
            ))}
        </PageNumberContainer>
    );
}

const PageNumberContainer = styled.div`
    font-size: 16px;
    width: 100%;
    margin: 10px 20px 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    span {
        margin-right: 20px;
    }
`;

const PageNumber = styled.button`
    color: #023997;
    text-decoration: underline;
    border: none;
    background-color: transparent;
    margin-right: 10px;
    cursor: pointer;

    :hover {
        filter: brightness(1.5);
    }
`;
