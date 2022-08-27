import React from 'react'

const Header = (props) => {
    const { avg_score, description, image_url, title } = props.attributes
    const total = props.reviews.length

    const displayTotal = () => {
        if (total == 1) {
            return <div className="totalReviews">{total} review</div>
        } else {
            return <div className="totalReviews">{total} reviews</div>
        }
    }

    return (
        <div className="wrapper">
            <h1><img src={image_url} alt={title}/>{title}</h1>
            <div>
                {displayTotal()}
                <div className="starRating"></div>
                <div className="totalOutOf">{avg_score} out of 5</div>
            </div>
        </div>
    )
}

export default Header