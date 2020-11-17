import React from 'react';
import ReactDOM from 'react-dom';
import PopularDishes from './components/popular_dishes.jsx';

const App = () => {
  return (
    <div>
      <PopularDishes />
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));