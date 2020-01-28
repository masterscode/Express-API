const express = require("express"); 
const app = express();
const port = process.env.PORT || 3000;
const bookRouter = express.Router();

//======API CONFIGS HERE======================
app.use('/API', bookRouter)


//=============================================
//MODEL

const model = [
  {name:'efe', occupation:'engr', school:'none', maritalStatus:'none'},
  {name:'efe', occupation:'engr', school:'none', maritalStatus:'none'},
  {name:'efe', occupation:'engr', school:'none', maritalStatus:'none'},
  {name:'efe', occupation:'engr', school:'none', maritalStatus:'none'},
  {name:'efe', occupation:'engr', school:'none', maritalStatus:'none'}
]



//==========================
bookRouter.route('/books')
.get((req, res)=>{
  let {queryString} = req.params;
  console.log(queryString)
  let response  = model;
  res.json(response);
});

bookRouter.route('/books/:query')
.get((req,res)=>{
  let {query} = req.params
  console.log(query);
})





app.get("/", (req, res) => {
  res.send("welcome  to my api app");
});

app.listen(port, () => console.log(`running on port ${port}`));
