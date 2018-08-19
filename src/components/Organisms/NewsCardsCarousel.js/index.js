import React from 'react'
import Slider from 'react-slick'
import {
    Container,
    Paragraph,
    HeadingSecondary
} from '../../Atoms'
import { 
    Main,
    NewsCardsContainer,
    MainTextContainer,
    SmallView,
    LargeView,
} from './styles'
import NewsCard from './NewsCard'
import { 
    CAROUSEL_SETTINGS_SMALL,
    CAROUSEL_SETTINGS_LARGE,
    API_DATA,
} from './constants'
import Button from '../../library/Button'

class NewsCardsCarousel extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Main style={ this.props.backgroundimg ? { backgroundImage: `url(${this.props.backgroundimg})`, backgroundSize:`cover` } : null }>
                <Container { ...this.props }>
                    <MainTextContainer>
                        <HeadingSecondary>What we've been up to</HeadingSecondary>
                        <Paragraph>Intel, updates, company news and beyond, the Zopa blog has the latest.</Paragraph>
                        <Button>View more articles.</Button>
                    </MainTextContainer>
                    <NewsCardsContainer>
                        <LargeView>
                            <Slider { ...CAROUSEL_SETTINGS_LARGE }>
                                { API_DATA.map((item) => <NewsCard key={ item.id } data={ item } />) }
                            </Slider>
                        </LargeView>
                        <SmallView>
                            <Slider { ...CAROUSEL_SETTINGS_SMALL }>
                                { API_DATA.map((item) => <NewsCard key={ item.id } data={ item } />) }
                            </Slider>
                        </SmallView>
                    </NewsCardsContainer>
                </Container>
            </Main>
        )
    }
}

export default NewsCardsCarousel