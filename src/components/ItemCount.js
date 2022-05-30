import { Button } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { ProductAmountContainer, ProductAmount } from './StyledComponents';
import React from 'react'

const ItemCount = ({stock = 0, initial = 1, onAdd}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const decrease = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }

    return (
        <ProductAmountContainer>
        <Button variant="text" onClick={increment}><Add /></Button>
        <ProductAmount>{count}</ProductAmount>
        <Button variant="text" onClick={decrease}><Remove /></Button>
        {
            stock
            ? <Button variant="contained" color="primary" onClick={() => onAdd(count)}>Add to Cart</Button>
            : <Button variant="contained" disabled>Add to Cart</Button>
        }
        
        </ProductAmountContainer>
    );
}

export default ItemCount;