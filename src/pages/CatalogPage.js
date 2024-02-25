import { CarsCard } from "components/CarsCard/CarsCard";
import React, { useEffect, useState } from "react";
import { selectAdverts } from "../redux/cars/selectors";
import {  useDispatch, useSelector } from "react-redux";
import { fetchAdverts } from "../redux/cars/operations";
import styled from "styled-components";
import { HiArrowLongLeft } from "react-icons/hi2";

const ListContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 274px);
    gap: 50px 29px;
    margin: 0 auto;   
    padding-top: 70px;
`;

const BtnLoadMore = styled.button`
    width: 274px;
    height: 44px;
    margin: 0 auto; 
    background: transparent;
    color: ${p => p.theme.colors.main};
    font-size: 16px;
    line-height: 1.2;
    border-radius: ${p => p.theme.radius.m};
    border-color: ${p => p.theme.colors.main};
`

export default function CatalogPage() {
    const adverts = useSelector(selectAdverts);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [hasMorePages, setHasMorePages] = useState(true);
    const [allAdverts, setAllAdverts] = useState([]);

    
   

    
    const loadMoreAdverts = () => {
        dispatch(fetchAdverts({ page: currentPage + 1, limit: 12 }));
        setCurrentPage(prevPage => prevPage + 1);
      };
    
      useEffect(() => {
        dispatch(fetchAdverts({ page: currentPage, limit: 12 }));
      }, [dispatch, currentPage]);
    

      const handleGoBack = () => {
        if (currentPage > 1) {
          setCurrentPage(prevPage => prevPage - 1);
          setAllAdverts(prevAdverts => prevAdverts.slice(0, -12)); 
          setHasMorePages(true); 
        }
      };
    return <div>
        <button type="button" onClick={handleGoBack}>
        <HiArrowLongLeft />
        </button>

<ListContainer>
            {adverts.map((advert) => (
                <li key={advert.id}>
                    <CarsCard advert={advert}/>
                </li>
            ))}
           {adverts.length > 0 && (
        <BtnLoadMore type="button" onClick={loadMoreAdverts}>
          Load more
        </BtnLoadMore>
      )}
        </ListContainer>
    </div>
}

