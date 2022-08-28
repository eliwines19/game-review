import React from 'react'

const ReviewForm = (props) => {
    return (
        <div className="wrapper">
            <form onSubmit={props.handleSubmit}>
                <div>Have some thoughts about {props.attributes.title}?, Share here!</div>
                <div className="field">
                    <input onChange={props.handleChange} value={props.review.title} type="text" name="title" placeholder="Great Game!"/>
                </div>
                <div className="field">
                    <textarea onChange={props.handleChange} value={props.review.description} rows="5" cols="60" name="description" placeholder="What I learned in boating school is..."></textarea>
                </div>
                <div className="field">
                    <div className="rating-container">
                        <div className="rating-title-text">Rate this Game</div>
                        [Star rating goes here]
                    </div>
                </div>
                <button type="submit">Submit your review</button>
            </form>
        </div>
    )
}

export default ReviewForm