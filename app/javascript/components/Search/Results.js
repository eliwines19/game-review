import React from 'react'

const Results = (props) => {
    console.log(props.attributes)

    return (
        <div className="resultsWrapper">
            <div className="imageWrapper">
                <img />
            </div>
            <div className="contentWrapper">
                <div className="title"></div>
                <div className="releaseDate"></div>
                <div className="avgScore"></div>
            </div>
        </div>
    )
}

export default Results