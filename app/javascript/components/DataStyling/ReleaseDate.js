import React from 'react';
import styled from 'styled-components'

const Date = styled.div`

`

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const ReleaseDate = (props) => {
    const date = props.date

    const prettyDate = () => {
        var dateArr = date.split("-");
        var month = months[parseInt(dateArr[1], 10) - 1];
        var year = dateArr[0];
        var day = parseInt(dateArr[2], 10);
        
        return `${month} ${day}, ${year}`
    }

    return (
        <Date>Released: {prettyDate()}</Date>
    )
}

export default ReleaseDate;