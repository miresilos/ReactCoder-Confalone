import logo from '../Assets/logo.png';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";
import { AppBar } from "@material-ui/core";
import { Wrapper, Left, Center, Right } from './StyledComponents';
import BurgerMenu from './BurgerMenu';
import SearchForm from './SearchForm';
import React from 'react'

const Navbar = () => {

    return (
        <AppBar position='relative' className='AppBar'>
            <Wrapper>
                <Left>
                    <BurgerMenu />
                    <Link to="/category/1" className='Link'><p id="order-now">PEDIR AHORA</p></Link>
                </Left>
                <Center>
                    <Link to="/" className='Link'><img src={logo} alt='Logo' width= '30%' /></Link>
                </Center>
                <Right>
                    <SearchForm />
                    <Link to="/cart" className='Link'><CartWidget /></Link>
                </Right>
            </Wrapper>
        </AppBar>
    );
}

export default Navbar;