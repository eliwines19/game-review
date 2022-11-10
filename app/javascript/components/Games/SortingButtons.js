import React from 'react'
import styled from 'styled-components'

const SortingButtonsWrapper = styled.div`
    text-align: left;
    margin: 30px 0 20px 0;

    span:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`
const Label = styled.div`
    display: inline-block;
    font-size: 20px;
    color: #F1F3F4;
    margin: 0 30px 0 0;
`
const Filter = styled.span`
    font-size: 20px;
    color: #F1F3F4;
    margin: 0 30px 0 0;
`

const SortingButtons = (props) => {

    return (
        <>
            <SortingButtonsWrapper>
                <Label>Sort By: </Label>
                <Filter onClick={props.handleClick} id="release_date">Release Date</Filter>
                <Filter onClick={props.handleClick} id="avg_score">Score</Filter>
            </SortingButtonsWrapper>
        </>
    )
}

export default SortingButtons