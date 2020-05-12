import React, { Component } from 'react';

import './Style.less';

const li = [
  {
    "id": "1.1",
    "text": "Below is a selection about Guinness World Records."
  },
  {
    "id": "2.1",
    "text": "Top 6 Unusual Guinness World Records"
  },
  {
    "id": "3.1",
    "text": "Fastest 100 m running on all fours"
  },
  {
    "id": "4.1",
    "text": "The 2008 Guinness World Records Day was, according to CWR, their biggest day of record-breaking ever, with more than 290,000 people taking part in record attempts in 15 different countries."
  },
  {
    "id": "4.2",
    "text": "Kenichi Ito's record attempt was part of this special day."
  },
  {
    "id": "4.3",
    "text": "He is just another example of Japanese with \"super powers\"."
  },
  {
    "id": "4.4",
    "text": "His \"super power\" is to run with great speed on all fours."
  },
  {
    "id": "4.5",
    "text": "Kenichi Ito ran 100 m on all fours in 18.58 seconds."
  },
  {
    "id": "4.6",
    "text": "The Japanese set this record at Setagaya Kuritsu Sogo Undojyo, Tokyo, in 2008."
  },
  {
    "id": "5.1",
    "text": "Most people inside a soap bubble"
  },
  {
    "id": "6.1",
    "text": "The Discovery Science Center in Santa Ana, Califonia celebrated this year the 15th anniversary of the Bubble Festival."
  },
  {
    "id": "6.2",
    "text": "A bubble's math principles and science were presented and demonstrated at the three-week-long exhibition."
  },
  {
    "id": "6.3",
    "text": "The intriguing Bubble Show was also part of the program."
  },
  {
    "id": "6.4",
    "text": "Fan Yang and Deni Yang impressed the audience with their awesome skills for bubble making."
  },
  {
    "id": "6.5",
    "text": "The Yang family cooperated with the Discovery Science Center to set a new Guinness World Record for most people inside a soap bubble and they succeeded."
  },
  {
    "id": "7.1",
    "text": "The family that has been working with soap bubbles for 27 years created a huge soap bubble and got 118 people inside it."
  },
  {
    "id": "7.2",
    "text": "The record was set on April 4, 2011."
  },
  {
    "id": "8.1",
    "text": "Longest ears on a dog"
  },
  {
    "id": "9.1",
    "text": "A bloodhound from Illinois has the longest ears ever measured a dog."
  },
  {
    "id": "9.2",
    "text": "The right ear is 13.75 inches long and the left one 13.5 inches."
  },
  {
    "id": "9.3",
    "text": "The dog named Tigger earned this title in 2004 and is owned by Christina and Bryan Flessner."
  },
  {
    "id": "10.1",
    "text": "Mr. Jeffries is the previous record holder of this title."
  },
  {
    "id": "10.2",
    "text": "Each of his ears measured approximately 11.5 inches long."
  },
  {
    "id": "10.3",
    "text": "His grandfather used to hold this amazing world record, but when he died Mr. Jeffries took over."
  },
  {
    "id": "11.1",
    "text": "Most living generations"
  },
  {
    "id": "12.1",
    "text": "Did you ever wonder what is the Guinness World Record for most living generations in one family?"
  },
  {
    "id": "12.2",
    "text": "Seven is the answer."
  },
  {
    "id": "13.1",
    "text": "The ultimate authority on record-breaking mentions on the website that the youngest great-great-great-great grandparent of this family was Augusta Bung \"aged 109 years 97 days, followed by her daughter aged 89, her granddaughter aged 70, her great grand-daughter aged 52, her great-great grand-daughter aged 33 and her great-great-great granddaughter aged 15 on the birth of her great-great-great-great grandson on January 21, 1989\"."
  },
  {
    "id": "14.1",
    "text": "Most T-shirts worn at once"
  },
  {
    "id": "15.1",
    "text": "Believe it or not, there is a record also for this category."
  },
  {
    "id": "15.2",
    "text": "Krunoslav Budiseli set a new world record on May 22, 2010 for wearing 245 T-shirts at the same time."
  },
  {
    "id": "15.3",
    "text": "The man from Croatia was officially recognized as the new record holder by Guinness World Records after he managed to put on 245 different T-shirts in less than two hours."
  },
  {
    "id": "15.4",
    "text": "The T-shirts weighed 68 KG and Budiseli said he began struggling around T-shirt No. 120."
  },
  {
    "id": "15.5",
    "text": "He dethroned the Swedish Guinness record holder who wore 238 T-shirts."
  },
  {
    "id": "16.1",
    "text": "Heaviest pumpkin"
  },
  {
    "id": "17.1",
    "text": "Guinness World Records confirmed on October 9. 2010 that a gigantic pumpkin grown in Wisconsin was officially the world's heaviest."
  },
  {
    "id": "17.2",
    "text": "It weighed 1,810 pounds 8 ounces and was unveiled by Chris Stevens at the Stillwater Harvest Festival in Minnesota."
  },
  {
    "id": "17.3",
    "text": "Stevens' pumpkin was 85 pounds heavier than the previous record, another huge pumpkin grown in Ohio."
  },
  {
    "id": "17.4",
    "text": "The proud farmer said his secret is a precise mixture of rain, cow manure, good soil, sea grass and fish emulsion."
  },
  {
    "id": "17.5",
    "text": "Some of the world's heaviest pumpkins, including the record holder, were on public display at the Bronx Botanical Gardens in New York for a dozen days."
  }
]

class Sentence extends Component {

  editSent(id) {
    this.props.history.push({ pathname: '/article/edit', state: { sId: id } })
    //this.props.history.push(`/article/edit/${id}`)
  }

  render() {
    return (
      <div className="sent">
        <ul className="sent-list">
          {
            li.map((item, index) => (
              <li key={index} onClick={() => this.editSent(item.id)}>{item.text}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Sentence;

