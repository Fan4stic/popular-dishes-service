const express = require('express');
const compression = require('compression');
const Api = require('../db/api');
const db = require('../db/index');
const path = require('path');

const app = express();


app.use(compression());
// Serve up index.html
app.use(express.static(__dirname + '/../client/dist'));

// Send 10 popular items for a given restaurant id with their corresponding reviews
app.get('/api/restaurants/:id/popular-items', async (req, res) => {
  try {
    // Get restaurant Id
    //const restaurantId = req.url.slice(31);
    const restaurantId = req.params.id;

    const bigQuery = `
    SET SESSION group_concat_max_len = 100000;
    SELECT a.* FROM (SELECT i.*, CONCAT(
      '[',
      GROUP_CONCAT(
        JSON_OBJECT(
          'name', u.name,
          'avatar', u.picture,
          'friends', u.friends,
          'ratings', u.ratings,
          'rating', r.rating,
          'review', r.review,
          'date', r.date
        )
      ),
      ']'
    ) as reviews,
    SUM(r.rating) as num_stars
    FROM items i
    JOIN reviews r on r.item_id=i.id
    JOIN users u on u.id=r.user_id
    WHERE i.restaurant_id=${restaurantId}
    GROUP BY i.id) a ORDER BY a.num_stars DESC LIMIT 10;
    `;

    const data = (await db.customQuery(bigQuery))[1].map(itemData => {
      return {...itemData, reviews: JSON.parse(itemData.reviews)};
    });

    res.json(data);
  } catch (error) {
    console.log(error);
    res.sendStatus(404);
  }
});

app.listen(4000, () => {
  console.log('listening on port 4000');
});
