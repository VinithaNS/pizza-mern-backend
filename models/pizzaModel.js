const mongoose=require('mongoose')

const pizzaSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require:true
        },
      varients: [],
      prices: [],
        category: {
            type: String,
            require
        },
        image: {
            type: String,
            require
        },
        desc:
        {
            type: String,
            require
        },
    },
    {
      timestamps: true, //add date
    }
  );
  
const pizzaModel = mongoose.model('pizzas', pizzaSchema);
module.exports=pizzaModel;