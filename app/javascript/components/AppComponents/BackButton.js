import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const BackButtonWrapper = styled.div`
    margin: 10px;

    a {
        padding: 5px;
        border-radius: 10%;
        background: black;
        color: #F1F3F4;
        text-decoration: none;
    }

    a:hover {
        cursor: pointer;
    }
`

const BackButton = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(-1);
    };

    return (
        <BackButtonWrapper>
            <a onClick={handleClick}>&larr;Back</a>
        </BackButtonWrapper>
    )
}

export default BackButton