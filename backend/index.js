const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// DB Connection
mongoose.connect('mongodb+srv://anujsamdariya18:anuj@cluster0.q732qum.mongodb.net/savvyshop?retryWrites=true&w=majority&appName=Cluster0')

// API creation
app.get('/', (req, res) => {
  res.send('Welcome to my API');
})

// Image storage engine
const storage = multer.diskStorage(
  {
    destination: './upload/images', 
    filename: (req, file, cb) => {
      return cb(null, `${file.fieldname}_${Date.now()}_${path.extname(file.originalname)}`)
    }
  }
)

const upload = multer({storage: storage})

// Creating uload endpoint for images
app.use('/images', express.static('upload/images'))
app.post('/upload', upload.single('product'), (req, res) => {
  res.json({
    success: 1, 
    imageUrl: `http://localhost:${port}/images/${req.file.filename}`
  })
})

const port = 4000;

app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is running on port ${port}...`);
  } else {
    console.log(`ERROR: ${error}`)
  }
})
