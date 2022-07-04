import { Link } from "react-router-dom";
import { ProductsContainer, MainProductsContainer, MenuItemContainer, MenuItem } from "./StyledComponents";
import Item from "./Item";
import React from 'react';

const ItemList = ({ items }) => {
    return (
        <MainProductsContainer>
            {
                items.length > 0
                ?    <MenuItemContainer>
                        <Link to="/category/1" className='Link'><MenuItem>Todo</MenuItem></Link>
                        <Link to="/category/1" className='Link'><MenuItem>Destilados</MenuItem></Link>
                        `<Link to="/category/1" MenuItem></Link>`
                    </MenuItemContainer>
                : <></>
            }
            <ProductsContainer>
            {
                items.length > 0
                ? items.map((item) => <Item key={item.id} item={item} />)
                : <div className="loader-container">
                    <div className="loader"></div>
                    <div className="loader2"></div>
                  </div>
            }
            </ProductsContainer>
        </MainProductsContainer>
    );
}

export default ItemList;