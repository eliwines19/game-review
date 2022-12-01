import React from 'react'
import { Link } from 'react-router-dom'
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
`

const BackButton = (props) => {

    const link = () => {
        if (props.link) {
            return <Link to="">&larr;Back</Link>
        } else {
            return <Link to={"/"}>&larr;Back</Link>
        }
    }

    return (
        <BackButtonWrapper>
            {link()}
        </BackButtonWrapper>
    )
}

export default BackButton