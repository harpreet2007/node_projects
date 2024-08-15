const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8000;

//Serving static files
app.use(express.static('public'));
//setup our views
app.set('view engine', 'ejs');
app.set('view ', './view');

// router handler
app.get('/',(req,res) =>{
  res.render('home');
});



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});