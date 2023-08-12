const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true,"Email is required"],
      lowercase: true,
      unique:true,
      match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
      trim: true
    },
    passwordHash: {
      type: String,
      required: [true,"Password is required"]

    }
  },
  {
   
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;