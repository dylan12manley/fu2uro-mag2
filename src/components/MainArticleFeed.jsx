import React from "react";
import { Card, Row, Col } from 'react-bootstrap';
import tyler from './../../images/tyler.jpg';
import "./../../styles/mainArticlesFeed.css"

const fullArticlesList = [
  {
    title: 'First Story Title',
    author: 'First Author',
    publishDate: 'March 3rd, 2020',
    articleTeaser: 'This is a story teaser. It could be a brief description of the article or a just the first couple senteneces.',
    mainImage: tyler
  },
  {
    title: 'Seccond Story Title',
    author: 'Seccond Author',
    publishDate: 'March 2nd, 2020',
    articleTeaser: 'This is a story teaser. It could be a brief description of the article or a just the first couple senteneces.',
    mainImage: tyler
  },
  {
    title: 'Third Story Title',
    author: 'Third Author',
    publishDate: 'March 3rd, 2020',
    articleTeaser: 'This is a story teaser. It could be a brief description of the article or a just the first couple senteneces.',
    mainImage: tyler
  },
  {
    title: 'Fourth Story Title',
    author: 'Fourth Author',
    publishDate: 'March 2nd, 2020',
    articleTeaser: 'This is a story teaser. It could be a brief description of the article or a just the first couple senteneces.',
    mainImage: tyler
  }
]

function MainArticleFeed(){
  return (
  <>
  <div>
  <div className="articleFeed">

  <div className="articlesAvailableDiv">
  <h1 style={{fontSize: "40px", fontWeight:"700", paddingLeft: "7.5%"}}>Complete News Feed </h1>
  {fullArticlesList.map((article, index) =>
    <Card className="cardClass">
    <div className='cardHeader'>
    <Row>
      <Col><h5 className='cardTitle'>{article.title}</h5></Col>
      <Col>
        <h6 className='cardTitleB'>{article.author}
        <span className='publishDate'>{article.publishDate}</span></h6>
      </Col>
    </Row>
    </div>
      <Card.Img className="cardImg" src={article.mainImage} alt="The article's main image." />
      <Card.ImgOverlay>
        <Card.Text>
          <div className="articleSubtitle" >
          <p>{article.articleTeaser}</p>
          </div>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  )
}
  </div>
  </div>
  </div>
  </>
);
}

export default MainArticleFeed;
