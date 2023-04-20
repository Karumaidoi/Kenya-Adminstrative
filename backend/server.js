const express = require("express")
const kenyAdmin = require("kenya-administrative-divisions");
const cors = require("cors");
const app = express();

// This is the function Read and return Data 
const loadData = async (req,  res) => {
   // Making actual request from the Package
    var data = await kenyAdmin.getCounties().then((data) => {
        console.log(data);
        return data; 
    });

    // Returning the Response Json
    return res.status(200).json({
        status: 'success',
        data: {
          data
        }
      });
}


// Configuring our Router
const router = express.Router();
router.get('/getData', loadData);

// Secure our Request from CORS Errors
app.use(cors());

// Using our Router finally
app.use('/', router);


// Making the Server Port
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});