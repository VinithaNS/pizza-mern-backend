const express =require('express');

const mongoose =require ('mongoose');

const cors =require ('cors');

const dotenv =require ('dotenv');
const pizzasRoute = require('./routes/pizzaRoutes.js');
const pizzaModel = require("./models/pizzaModel.js");
const userRoute = require('./routes/userRoute.js');
const orderRoute = require('./routes/orderRoute.js');
const app = express();
dotenv.config();


app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.log(error.message);
});
app.use('/api/pizzas', pizzasRoute);
app.use('/api/users/', userRoute);
app.use('/api/orders/', orderRoute);
app.get("/", (req, res) => {
    res.send("Server is Running");
});

if(process.env.NODE_ENV === 'production')
 {
     app.use('/' , express.static('client/build'))

     app.get("*", (req, res) => {

          res.sendFile(path.join(__dirname, 'client/build/index.html'))
       
     });
 }

const PORT = process.env.PORT ||5000;
app.listen(PORT, () => console.log(`Server Running Successfully On PORT ${PORT}`));