import React, { useState } from 'react'
import styled from 'styled-components'

const SortingButtonsWrapper = styled.div`
    color: #F1F3F4;
    text-align: left;
    margin: 20px 0;
    background: #F1F3F4;
    width: 100px;

    button:hover {
        cursor: pointer;
    }
`
const Button = styled.button`
    padding: 5px 0;
    width: 100%;
    background: #F1F3F4;
    font-size: 15px;
`

const SortingButtons = (props) => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    const dropdown = () => {
        if (open) {
            return (
                <div>
                    <Button onClick={props.handleClick} id="release_date">Release Date</Button>
                    <Button onClick={props.handleClick} id="avg_score">Score</Button>
                </div>
            )
        }
    }


    return (
        <SortingButtonsWrapper>
            <Button onClick={handleOpen} className="sort-by">Sort Games</Button>
            {dropdown()}
        </SortingButtonsWrapper>
    )
}

export default SortingButtons