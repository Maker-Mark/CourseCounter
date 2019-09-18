const express = require("express");
const app = express();
const db = require("./db");
const User = require("./User");

//If you make a GET request to THIS endpoint, "/home", then execute the homeMsg() function
app.get("/home", (req, res) => {
  res.send("Hey, this worked");
});

// Bring the connected DB in! We invoke it here.
db();

app.get("/new", async (req, res) => {
  try {
    let user = await new User({ name: "Matt" });
    await user.save();
    res.send("Added a user via a GET request. DON'T DO THIS!!");
  } catch (error) {
    console.error(error.message);
  }
});

const PORT = 9001;
app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
