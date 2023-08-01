
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/social_network_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(express.json());


const usersRoutes = require('./routes/users');
const thoughtsRoutes = require('./routes/thoughts');


app.use('/api/users', usersRoutes);
app.use('/api/thoughts', thoughtsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
