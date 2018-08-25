import React from 'react'
import Carousel from '../../Molecules/Carousel'
import {
  Main,
  NewsCardsContainer,
  MainTextContainer,
  MainHeading,
  MainParagraph,
  Container,
  SmallView,
  LargeView,
} from './styles'
import NewsCard from './NewsCard'
import {
  CAROUSEL_SETTINGS_SMALL,
  CAROUSEL_SETTINGS_LARGE,
} from './constants'
import Button from '../../Molecules/Button'

class NewsCardsCarousel extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Main
        style={
          this.props.backgroundimg
            ? {
                backgroundImage: `url(${this.props.backgroundimg})`,
                backgroundSize: `cover`,
              }
            : null
        }
      >
        <Container {...this.props}>
          <MainTextContainer>
            <MainHeading>
              {this.props.heading || 'See More'}
            </MainHeading>
            <MainParagraph>
              {this.props.content || 'More articles.'}
            </MainParagraph>
            <Button to="/" white>
              Read more articles
            </Button>
          </MainTextContainer>
          <NewsCardsContainer>
            <LargeView>
              <Carousel lightBubbles {...CAROUSEL_SETTINGS_LARGE}>
                {this.props.posts
                  ? this.props.posts.map(item => (
                      <NewsCard key={item.node.id} data={item.node} />
                    ))
                  : null}
              </Carousel>
            </LargeView>
            <SmallView>
              <Carousel lightBubbles {...CAROUSEL_SETTINGS_SMALL}>
                {this.props.posts
                  ? this.props.posts.map(item => (
                      <NewsCard key={item.node.id} data={item.node} />
                    ))
                  : null}
              </Carousel>
            </SmallView>
          </NewsCardsContainer>
        </Container>
      </Main>
    )
  }
}

export default NewsCardsCarousel
