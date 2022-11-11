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
        padding: 10px;
    }
`

const SearchBar = (props) => {
    return (
        <Wrapper>
            <Headline>Search Games</Headline>
            <form>
                <Field>
                    <input onChange={props.handleChange} value={props.search} type="text" name="search" placeholder="Search Games"/>
                </Field>
            </form>
        </Wrapper>
    )
}

export default SearchBar