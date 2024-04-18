const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name:{
        type: String,
        required: true
    },
    test :{
      type:String,
      default:"none"

     
    },
    LastDonationDate:{
      type:Date,
     
  },
    role: {
        type: String,
        required: [true, "role is required"],
        enum: ["user","admin", "hospital"],
      },
      
      email: {
        type: String,
        required: function () {
          if (this.role === "user" || this.role === "admin") {
            return true;
          }
          return false;
        },
      },
      dateOfLastDonation:{
        type:Date
      },
      nationalId:{
        type:String,
        required:true,
        min:14,
        max:14
      },
      password: {
        type: String,
        required: [true, "password is requied"],
      },

     city: {
        type: String,
        required: [true, "city is required"],
        enum: ["cairo","alex", "aswan","luxor"],
      },
      

  }
  
    
);
const User = mongoose.model("User", userSchema);
module.exports = User;