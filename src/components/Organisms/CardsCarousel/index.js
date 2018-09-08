import React from 'react'
import { 
  HeadingSecondary,
  Paragraph
} from '../../Atoms'
import Carousel from '../../Molecules/Carousel'
import {
  Main,
  CardsContainer,
  MainTextContainer,
  Container,
  SmallView,
  LargeView,
} from './styles'
import Card from './Card'
import {
  CAROUSEL_SETTINGS_SMALL,
  CAROUSEL_SETTINGS_LARGE,
} from './constants'
import Button from '../../Molecules/Button'

class CardsCarousel extends React.Component {
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
            <HeadingSecondary textColor={this.props.textColor}>
              {this.props.heading || 'Recent News'}
            </HeadingSecondary>
            <Paragraph textColor={this.props.textColor}>
              {this.props.content || 'Content.'}
            </Paragraph>
            <Button to="/" white>
              Read more articles
            </Button>
          </MainTextContainer>
          <CardsContainer>
            <LargeView>
              <Carousel lightBubbles {...CAROUSEL_SETTINGS_LARGE}>
                {this.props.posts
                  ? this.props.posts.map(item => (
                      <Card key={item.node.id} data={item.node} />
                    ))
                  : null}
              </Carousel>
            </LargeView>
            <SmallView>
              <Carousel lightBubbles {...CAROUSEL_SETTINGS_SMALL}>
                {this.props.posts
                  ? this.props.posts.map(item => (
                      <Card key={item.node.id} data={item.node} />
                    ))
                  : null}
              </Carousel>
            </SmallView>
          </CardsContainer>
        </Container>
      </Main>
    )
  }
}

export default CardsCarousel
