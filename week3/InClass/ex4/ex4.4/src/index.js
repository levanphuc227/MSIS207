import React from 'react';
import ReactDOM from 'react-dom/client';
import { Avatar, Card } from 'antd';

import "antd/dist/antd.min.css" ;

const { Meta } = Card;

const card = {
  title: 'Elon Musk',
  description: 'Elon Reeve Musk FRS is a business magnate, industrial designer, and engineer. He is the founder, CEO, CTO, and chief designer of SpaceX',
  avatar: 'http://www.gstatic.com/tv/thumb/persons/487130/487130_v9_bb.jpg',
  cover: 'https://static01.nyt.com/images/2022/10/29/business/00JPpro-musk-print/pro-musk-1-videoSixteenByNine3000.jpg'
}

const element = (
  <>

    
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="" src={card["cover"]} />}
    >
      <Avatar size="small"   src={card["avatar"]}>
      </Avatar>
      <Meta title={card["title"]} description={card['description']} />
    </Card>
  </>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
