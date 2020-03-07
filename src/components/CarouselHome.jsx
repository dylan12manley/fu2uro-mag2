import React from 'react'
import Carousel  from 'react-bootstrap/Carousel';
import futuro1 from './../assets/images/Futuro1.jpg'
import futuro2 from './../assets/images/Futuro2.jpg'
import futuro3 from './../assets/images/Futuro3.jpg'
import futuro4 from './../assets/images/Futuro4.jpg'
import "./../styles/carousel1.css"

const featuredArticles = [
  {
    title: 'First Article Title',
    author: 'First Author',
    publishDate: 'March 3rd, 2020',
    articleTeaser: 'This is a story teaser. It could be a brief description of the article or a just the first couple senteneces.',
    mainImage: futuro1
  },
  {
    title: 'Seccond Article Title',
    author: 'Seccond Author',
    publishDate: 'March 2nd, 2020',
    articleTeaser: 'This is a story teaser. It could be a brief description of the article or a just the first couple senteneces.',
    mainImage: futuro2
  },
  {
    title: 'Third Article Title',
    author: 'Third Author',
    publishDate: 'March 2nd, 2020',
    articleTeaser: 'This is a story teaser. It could be a brief description of the article or a just the first couple senteneces.',
    mainImage: futuro3
  },
  {
    title: 'Fourth Article Title',
    author: 'Fourth Author',
    publishDate: 'March 2nd, 2020',
    articleTeaser: 'This is a story teaser. It could be a brief description of the article or a just the first couple senteneces.',
    mainImage: futuro4
  }
]

function  CarouselHome(){
  return (
    <>
    <div id='carouselBody'>
    <Carousel>
    {featuredArticles.map((article, index) =>
      <Carousel.Item>
      <div className='carouselImg'>
        <img
          className="d-block w-100 carouselImg"
          src={article.mainImage}
          alt="an image of a article"
        />
      </div>
        <Carousel.Caption>
          <div className='carouselBody'>
            <h1>{article.title}</h1>
            <h3>{article.author}</h3>
            <p>{article.publishDate}</p>
            <p>{article.articleTeaser}</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    )};
    </Carousel>
    </div>
    </>
  );
}

export default CarouselHome
