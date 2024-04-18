const mongoose = require("mongoose");
const bloodStorageSchema = new mongoose.Schema({
    bloodGroup: {
        type: String,
        required: [true, "blood group is require"],
        enum: ["O", "AB", "A", "B"],
      },
      testDone:{
        type:String
      },
      quantity: {
        type: Number,
        require: [true, "blood quanity is require"],
      },
      donar: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        },

       
        expireyDate:{
          type:Date,
          default: new Date(2025, 11, 3)
      },
        chronicDiseases:{
            type:String,
            required:true
        }

        

})



module.exports = mongoose.model("BloodStorage", bloodStorageSchema);