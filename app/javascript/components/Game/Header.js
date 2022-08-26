import React from 'react'

const Header = (props) => {
    const { avg_score, description, image_url, title } = props.attributes

    console.log(avg_score)
    console.log(description)
    console.log(image_url)
    console.log(title)

    return (
        <div className="wrapper">
            <h1> <img src={image_url} /> </h1>
            <div>
                <div className="totalReviews"></div>
                <div className="starRating"></div>
                <div className="totalOutOf">{avg_score} out of 5</div>
            </div>
        </div>
    )
}

export default Header