const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

userSchema.methods.getName = function() {
  return this.name;
};

module.exports = mongoose.model("user1", userSchema);
