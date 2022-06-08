import logo from '../Assets/logo.png';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";
import { AppBar } from "@material-ui/core";
import { Wrapper, Left, Center, Right, MenuItem } from './StyledComponents';
import BurgerMenu from './BurgerMenu';
import SearchForm from './SearchForm';
import React from 'react'

const Navbar = () => {
    return (
        <AppBar position='relative' className='AppBar'>
            <Wrapper>
                <Left>
                    <BurgerMenu />
                    {/* <Link to="/" className='Link'><p id="order-now">PEDIR YA</p></Link> */}
                    <Link to="/category/1" className='Link'><MenuItem>Destilados</MenuItem></Link> {/* Enlaces temporales... Reposicionar y cambiar en un futuro */}
                    <Link to="/category/2" className='Link'><MenuItem>Work In Progress</MenuItem></Link> {/* Enlaces temporales... Reposicionar y cambiar en un futuro */}
                </Left>
                <Center>
                    <Link to="/" className='Link'><img src={logo} width="30%" alt='Logo' /></Link>
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