const express = require("express"); 
const app = express();
const port = process.env.PORT || 3000;
const bookRouter = express.Router();

//======API CONFIGS HERE======================
app.use('/api', bookRouter)


//=============================================

bookRouter.route('/books')
.get((req, res)=>{
  let response  = {hello: 'welcome to my api'}
  res.json(response);
});


app.get("/", (req, res) => {
  console.log (req);
  res.send("welcome   app");
});

app.listen(port, () => console.log(`running on port ${port}`));
