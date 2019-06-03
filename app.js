var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose')

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

var campgrounds = [
  {name: "Rock Camp", image: "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
  {name: "Caipirinha Camp", image: "https://images.unsplash.com/photo-1455496231601-e6195da1f841?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1395&q=80"},
  {name: "Mozitos Camp", image: "https://images.unsplash.com/photo-1557474295-714ea5fc2557?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1375&q=80"},
  {name: "Rock Camp", image: "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
  {name: "Caipirinha Camp", image: "https://images.unsplash.com/photo-1455496231601-e6195da1f841?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1395&q=80"},
  {name: "Mozitos Camp", image: "https://images.unsplash.com/photo-1557474295-714ea5fc2557?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1375&q=80"},
  {name: "Rock Camp", image: "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
  {name: "Caipirinha Camp", image: "https://images.unsplash.com/photo-1455496231601-e6195da1f841?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1395&q=80"},
  {name: "Mozitos Camp", image: "https://images.unsplash.com/photo-1557474295-714ea5fc2557?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1375&q=80"}
];

app.get('/', (req, res) => {
    res.render("landing");
  });
  
app.get('/campgrounds', (req, res) => {
  res.render("campgrounds", {campgrounds: campgrounds});
});

app.post('/campgrounds', (req, res)=> {
  //pegar os dados do formulario e adicionar no array de campgrounds
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name:name, image:image}
  campgrounds.push(newCampground);
  //redirecionar para a landing
  res.redirect("/campgrounds"); 
});

app.get("/campgrounds/new", (req, res) => {
  res.render("new.ejs")
});

  app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
  });