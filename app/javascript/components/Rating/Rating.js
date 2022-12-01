import React from 'react';

const Rating = (props) => {

    const score = Math.round(props.score)

    const showStars = () => {
        return [...Array(score)].map((e, i) => <span key={i}>&#11088;</span>)
    }

    if (score) {
        return showStars()
    } else {
        return <div>No Ratings Yet</div>
    }

};

export default Rating;