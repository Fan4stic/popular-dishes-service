import React from 'react';
import Card from'./card.jsx';
import CardContent from './card_content.jsx';
import ScrollButton from './scroll_button.jsx'
import '../styles/styles.css';

const arrow = require('../styles/arrow.js');


const carouselStyle = {
  display: "flex",
  flexDirection: "row",
  height: 200,
  width: 725,
  overflow: "scroll"
};

const leftButtonStyle = {
  position: "relative",
  bottom: 125,
  left: -25
};

const rightButtonStyle = {
  position: "relative",
  bottom: 160,
  left: 695
};

const Carousel = ({ dishes, changeDish }) => {

  const cardStyle = (array, index) => {
    if (index === 0) {
      return "first";
    } else if (index === array.length - 1) {
      return "last";
    } else {
      return "middle";
    }
  };

  return (
    <div style={{"position": "relative", padding: "0 20px"}}>
      <div className="carousel" id="carousel" style={carouselStyle}>
        {dishes && dishes.map((dish, index) => {
          return (
            <Card className={cardStyle(dishes, index)}>
              <CardContent
              changeDish={changeDish}
              dish={dish}
              key={index}
              image={dish.picture}
              name={dish.name}
              reviews={dish.reviews.length}/>
            </Card>
          );
        })}
      </div>
      <ScrollButton style={leftButtonStyle} elementId={"carousel"} direction={'left'} ammount={750}/>
      <ScrollButton style={rightButtonStyle} elementId={"carousel"} direction={'right'} ammount={750}/>
    </div>
  );
};

export default Carousel;