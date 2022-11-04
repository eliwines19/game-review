import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    
`
const Headline = styled.div`

`
const Field = styled.div`

`
const SubmitBtn = styled.button`

`

const Search = () => {
    return (
        <Wrapper>
            <form>
                <Headline>Search Our Library Of Games!</Headline>
                <Field>
                    <input type="text" name="search" placeholder="Search"/>
                </Field>
                <SubmitBtn>Search</SubmitBtn>
            </form>
        </Wrapper>
    )
}

export default Search