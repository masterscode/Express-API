const mongo = require("../config/db-connect");

const schema = new mongo.Schema({
  name: {type:String, required: true},
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Course = mongo.model("Course", schema);

// const course = new Course({
//   name: "Node",
//   author: "Emmanuel",
//   tags: ["backend", 'javascript'],
//   isPublished: false,
// });

// course
//   .save()
//   .then((doc) => console.log("successful:", doc))
//   .catch((error) => console.error(error));

Course.find({author:'emmanuel'})
//   .limit(1)
.sort()
// .select({name:1, author:1})
  .then((docs) => console.log(docs))
  .catch((error) => console.error(error));



