import React from 'react'
import styled from 'styled-components'
import * as variable from '../../variables'
import Link from '../../Molecules/Link'

const Wrapper = styled.div`
    padding: 0;
    width: 100%;
    padding: 0 0.5em;

    @media (min-width: ${variable.BREAK_PHONE}) {
        width: 100%;
        margin: 0;
    }
`

const Main = styled.div`
    border-radius: 5px;
    overflow: hidden;
    width: 100%;

    @media (min-width: ${variable.BREAK_PHONE}) {
        width: auto;
    }
`

const TextContainer = styled.div`
    color: ${variable.BRAND_PRIMARY};
    padding: 1em;
    width: 100%;
`

const Title = styled.h3`
    margin-bottom: 0.5em;
    line-height: 1.3em;
`

const TextLink = styled(Link)`
    color: ${variable.BRAND_PRIMARY}!important;

    &:hover,
    &:focus,
    &:active {
        color: blue;
        text-decoration: underline;
    }
`

const Details = styled.div`
    font-size: 0.875em;
    line-height: 1.5em;

    &+& {
        margin-bottom: 1em;
    }
`

const NewsCard = props => (
    props.data ? (
        <Wrapper>
            <Main>
                <TextContainer>
                    <Details><time>{ props.data.createdAt }</time></Details>
                    <Title>
                        <TextLink to={ '/news/' + props.data.slug }>
                            { props.data.title }
                        </TextLink>
                    </Title>
                    <p>{props.data.excerpt}</p>
                </TextContainer>
            </Main>
        </Wrapper>
    ) : (null)
)

export default NewsCard
