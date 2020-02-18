import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


// const Nav = styled.nav`
//     border: 5px;
//     text-align: center; 
//     `
const Li = styled.li`
    display: inline;
    padding: 5px;
    background-color: orangered;
    border-radius: 5px;
    &:hover{
        color-adjust: white;
    }
    `
const NavBar = () => (
    <nav>
        <ul>
            <Li>
                <Link to="/">Home</Link>
            </Li>
            <Li>
                <Link to="/about">About</Link>
            </Li>
            <Li>
                <Link to="/articles-list">Articles</Link>
            </Li>
        </ul>
    </nav>
);

export default NavBar;