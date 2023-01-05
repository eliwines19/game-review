import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavWrapper = styled.div`
    font-size: 25px;
    text-align: left;
`
const NavLinkWrapper = styled.div`

    a {
        padding: 3px;
        background-color: #151716;
        text-decoration: none;
        color: #F0F3F4;
        transition: 0.3s;
    }

    a:hover {
        background-color: #F0F3F4;
        color: #151716;
    }
`

const Navbar = () => {
    return (
        <NavWrapper>
            <NavLinkWrapper>
                <Link to={`/games/search`}>Search</Link>
            </NavLinkWrapper>
        </NavWrapper>
    )
}

export default Navbar