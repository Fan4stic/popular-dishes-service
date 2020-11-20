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
      popularFoods: {},
      currentDish: {picture: sampleDishes[0].picture, name: 'stuff', reviews: []}
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.setCurrentDish = this.setCurrentDish.bind(this);
  }

  toggleModal() {
    this.setState({modalShown: !this.state.modalShown});
  }

  setCurrentDish(dish) {
    this.setState({currentDish: dish, modalShown: true})
    console.log(this.state.currentDish);
  }

  getPopularFoods() {
    axios.get('/api/restaurants/popular-items/10')
      .then((response) => {
        console.log(response.data);
        this.setState({popularFoods: response.data});
      })
      .catch((error) => {
        console.log(error);
      })
  }

  componentDidMount() {
    this.getPopularFoods();
  }

  render() {
    return(
      <div>
        <div style={titleStyle}>Popular Dishes</div>
        <Carousel dishes={sampleDishes} changeDish={this.setCurrentDish}/>
        <Modal dish={this.state.currentDish} shown={this.state.modalShown} toggle={this.toggleModal}/>
      </div>
    )
  }
};

export default PopularDishes;