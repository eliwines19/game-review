import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    font-family: 'Roboto Mono', serif;
    color: #F1F3F4;
    margin: 40px 0 0 0;
`
const Headline = styled.div`
    margin: 10px 0 0 0;
    font-size: 15px;
`
const Field = styled.div`

    input {
        width: 80%;
        padding: 10px;
    }
`
const SubmitBtn = styled.button`
    padding: 10px;
    margin: 0 0 0 5px;
`

const Search = () => {
    return (
        <Wrapper>
            <form>
                <Headline>Search Our Library Of Games!</Headline>
                <Field>
                    <input type="text" name="search" placeholder="Search"/>
                    <SubmitBtn>Search</SubmitBtn>
                </Field>
            </form>
        </Wrapper>
    )
}

export default Search