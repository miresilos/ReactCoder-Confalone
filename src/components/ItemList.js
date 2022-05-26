import Item from "./Item";
import React from 'react'

const ItemList = ({ items }) => {
    return (
        <>
            <div className="productList-body">
                {
                    items.length > 0
                    ? items.map((item) => <Item key={item.id} item={item} />)
                    : <p>Cargando...</p>
                }
            </div>
        </>
    );
}

export default ItemList;