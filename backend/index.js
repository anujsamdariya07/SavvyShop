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
mongoose
  .connect(
    'mongodb+srv://anujsamdariya18:anuj@cluster0.q732qum.mongodb.net/savvyshop?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(() => {
    console.log('Connected to MongoDB');
  });

// API creation
app.get('/', (req, res) => {
  res.send('Welcome to my API');
});

// Image storage engine
const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}_${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

// Creating upload endpoint for images
app.use('/images', express.static('upload/images'));
app.post('/upload', upload.single('product'), (req, res) => {
  res.json({
    success: 1,
    imageUrl: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

// Schema for creating products
const Product = mongoose.model('Product', {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  key: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  newPrice: {
    type: Number,
    required: true,
  },
  oldPrice: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  availible: {
    type: Boolean,
    default: true,
  },
});

app.post('/addproduct', async (req, res) => {
  let products = await Product.find({});
  let id;

  if (products.length > 0) {
    let lastProduct = products.slice(-1)[0];
    id = lastProduct.id + 1;
  } else {
    id = 1;
  }

  const { name, image, category, newPrice, oldPrice } = req.body;

  const product = new Product({
    id: id,
    name: name,
    image: image,
    category: category,
    newPrice: newPrice,
    oldPrice: oldPrice,
  });
  console.log(product);

  await product.save();
  console.log('Saved');

  res.json({
    success: true,
    name: name,
  });
});

// Creating API for deleting product

app.post('/removeproduct', async (req, res) => {
  const { id, name } = req.body;

  await Product.findOneAndDelete({
    id: id,
  });
  console.log('Removed');
  res.json({
    success: true,
    msg: 'Deleted',
    name: name,
  });
});

// Creating API for getting all products
app.get('/allproducts', async (req, res) => {
  let products = await Product.find({});
  console.log('All Products Fetched');
  res.send(products);
});

const port = 4000;

app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is running on port ${port}...`);
  } else {
    console.log(`ERROR: ${error}`);
  }
});
