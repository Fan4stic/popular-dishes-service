import React, { useState } from 'react';
import Carousel from './carousel.jsx';
import Reviews from './reviews/reviews.jsx';
import Modal from './modal.jsx';
const axios = require('axios');
const sampleDishes = require('../sample_data/sample_dishes.js');
const sampleReviews = require('../sample_data/sample_reviews.js');

const titleStyle = {
  fontFamily: 'Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif',
  fontSize: 20,
  fontWeight: 700,
  color: '#2b273c',
  paddingLeft: '20px',
  paddingBottom: '20px'
};

class PopularDishes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShown: false,
      dishes: [],
      currentDish: {picture: '', name: '', reviews: []}
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.setCurrentDish = this.setCurrentDish.bind(this);
  }

  toggleModal() {
    document.body.classList.remove('hiddenScroll');
    this.setState({modalShown: !this.state.modalShown});
  }

  setCurrentDish(dish) {
    document.body.classList.add('hiddenScroll');
    this.setState({currentDish: dish, modalShown: true});
  }

  getPopularFoods() {
    axios.get('/api/restaurants/10/popular-items/')
      .then((response) => {
        //console.log(window.location);
        console.log(response.data);
        this.setState({dishes: response.data});
      })
      .catch((error) => {
        console.log(error);
      })
  }

  componentDidMount() {
    this.getPopularFoods();
  }

  render() {
    if (this.state.dishes.length) {
      return (
        <div>
          <div style={titleStyle}>Popular Dishes</div>
          <Carousel dishes={this.state.dishes} changeDish={this.setCurrentDish}/>
          <Modal dish={this.state.currentDish} shown={this.state.modalShown} toggle={this.toggleModal}/>
        </div>
      );
    }
    return (
      <div></div>
    );
  }
};

export default PopularDishes;