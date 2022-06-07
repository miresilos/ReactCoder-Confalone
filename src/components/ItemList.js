import Item from "./Item";
import { ProductsContainer } from "./StyledComponents";
import React from 'react'


const ItemList = ({ items }) => {
    return (
        <ProductsContainer>
        {
            items.length > 0
            ? items.map((item) => <Item key={item.id} item={item} />)
            : <p>Cargando...</p>
        }
        </ProductsContainer>
    );
}

export default ItemList;