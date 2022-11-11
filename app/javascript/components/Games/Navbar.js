import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color: #F1F3F4;

    div:hover {
        cursor: pointer;
        background-color: #F1F3F4;

        a {
            color: #141617;
        }
    }
`
const NavLinkWrapper = styled.div`
    transition: 0.3s;
    border: 1px solid #141617;
    padding: 10px 5px;
    margin: 2px 0;
    background-color: #141617;

    a {
        font-size: 20px;
        text-decoration: none;
        color: #F1F3F4;
    }
`

const Navbar = () => {
    return (
        <NavWrapper>
            <NavLinkWrapper>
                <Link to={`/games/search`}>Find Games</Link>
            </NavLinkWrapper>
        </NavWrapper>
    )
}

export default Navbar