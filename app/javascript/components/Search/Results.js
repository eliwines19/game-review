import React from 'react'
import styled from 'styled-components'

const ResultsWrapper = styled.div`
    background-color: #F1F3F4;
    color: #000000;
    width: 100%;
    margin: 10px 0;
`
const InfoWrapper = styled.div`
    padding: 20px;
`

const Results = (props) => {
    return (
        <ResultsWrapper>
            <div className="imageWrapper">
                <img />
            </div>
            <InfoWrapper>
                <div className="title">{props.attributes.title}</div>
                <div className="releaseDate">{props.attributes.release_date}</div>
                <div className="avgScore">{props.attributes.avg_score}</div>
            </InfoWrapper>
        </ResultsWrapper>
    )
}

export default Results