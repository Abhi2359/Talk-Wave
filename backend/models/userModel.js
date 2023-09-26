const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userModel = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true,unique:true },
    password: { type: String, required: true },
    
    pic: {
      type: String,
     
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  { timestamps: true }
);
 
userModel.methods.matchPassword = async function (enteredPassword){
return await bcrypt.compare(enteredPassword,this.password)
}

userModel.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
  } catch (error) {
    return next(error);
  }
 
});

const User = mongoose.model("User", userModel);
module.exports = User;
