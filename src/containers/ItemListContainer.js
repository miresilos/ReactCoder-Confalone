import react, { Component}  from 'react';
import ReactDOM  from 'react-dom';

const ItemListContainer = (props) => {
    return (
        <div>
            {props.greeting}
        </div>
    );
}

export default ItemListContainer;