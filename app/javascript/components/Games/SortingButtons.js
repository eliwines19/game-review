import React from 'react'
import styled from 'styled-components'

const SortingButtonsWrapper = styled.div`
    color: #F1F3F4;
`


const SortingButtons = (props) => {
    return (
        <SortingButtonsWrapper>
            <div className="sort-by">Sort By:</div>
            <button onClick={props.handleClick} id="release_date" className="sort-by-release-date-button">Release date</button>
        </SortingButtonsWrapper>
    )
}

export default SortingButtons