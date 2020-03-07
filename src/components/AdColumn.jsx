import React from "react"
import Image from 'react-bootstrap/Image'
import dior from './../../images/dior.jpg'
import keene from './../../images/keene.jpg'
import arTecHouse from './../../images/artechouse.png'
import taschen from './../../images/Taschen.png'
import monotoneBar1 from './../../images/monoLine1.png'
import "./../../styles/adColumn.css"

const adList = [
  {
    title: 'ad number 2',
    url: 'https://www.keane-eyes.com/',
    img: keene,
    id: 1
  },
  {
    title: 'ad number 3',
    url: 'https://www.dior.com/en_us',
    img: taschen,
    id: 2
  },
  {
    title: 'ad number 1',
    url: 'https://www.dior.com/en_us',
    img: dior,
    id: 3
  },
  {
    title: 'ad number 4',
    url: 'https://www.keane-eyes.com/',
    img: arTecHouse,
    id: 4
  }
]

function AdColumn(){
  return (
  <>
  <div className="adColumnBody">
    {adList.map((ad, index) =>
      <a href={ad.url}>
        <Image src={ad.img}/>
      </a>
  )}
  </div>
  </>
);
}

export default AdColumn;
