import React, { useState } from 'react';
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
  position: "absolute",
  bottom: 85,
  left: -7
};

const rightButtonStyle = {
  position: "absolute",
  bottom: 85,
  left: 717
};

class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showLeftScroll: false,
      showRightScroll: true
    }
    this.scrollListener = this.scrollListener.bind(this);
  }

  cardStyle(array, index) {
    if (index === 0) {
      return "first";
    } else if (index === array.length - 1) {
      return "last";
    } else {
      return "middle";
    }
  };

  scrollListener() {
    const myCarousel = document.getElementById("carousel");
    const maxScrollLeft = myCarousel.scrollWidth - myCarousel.clientWidth;
    if (myCarousel.scrollLeft < 5) {
      this.setState({showLeftScroll: false, showRightScroll: true});
    } else if (myCarousel.scrollLeft > maxScrollLeft - 5) {
      this.setState({showLeftScroll: true, showRightScroll: false});
    } else {
      this.setState({showLeftScroll: true, showRightScroll: true});
    }
  }

  componentDidMount() {
    document.getElementById("carousel").addEventListener('scroll', this.scrollListener);
  }

  render() {
    return (
      <div style={{position: "relative", padding: "0 20px"}}>
        <div className="carousel" id="carousel" style={carouselStyle}>
          {this.props.dishes && this.props.dishes.map((dish, index) => {
            return (
              <Card className={this.cardStyle(this.props.dishes, index)}>
                <CardContent
                changeDish={this.props.changeDish}
                dish={dish}
                key={index}
                image={dish.picture}
                name={dish.name}
                reviews={dish.reviews.length}/>
              </Card>
            );
          })}
        </div>
        {this.state.showLeftScroll && <ScrollButton style={leftButtonStyle} elementId={"carousel"} direction={'left'} ammount={750}/>}
        {this.state.showRightScroll && <ScrollButton style={rightButtonStyle} elementId={"carousel"} direction={'right'} ammount={750}/>}
      </div>
    );
  }
};

export default Carousel;