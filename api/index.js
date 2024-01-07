const express = require('express');

const dotenv = require('dotenv');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

const authPost = require('./routes/posts');
const authPostTrend = require('./routes/postsTrends');
const authPostEnt = require('./routes/postsEntertainments');
const authPostTrav = require('./routes/postsTravels');
const authPostInfo = require('./routes/postsInfos');
const authPostKpop = require('./routes/postsKpop');
const authCat = require('./routes/categories');
dotenv.config();
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, '/images')));

// //by gpt
// // Serve static files from the React build directory
// app.use(express.static(path.join(__dirname, 'frontend/public')));

// // Handle requests to your React app
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'frontend/public', 'index.html'));
// });

const app = express();
app.use(
  cors({
    origin: ['https://deetsauce.vercel.app'],
    methods: ['POST', 'GET'],
    credentials: true,
  })
);

mongoose
  .connect(process.env.CONNECT_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log('Connected to MongoDb'))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, callb) => {
    callb(null, 'images');
  },
  filename: (req, file, callb) => {
    callb(null, file.png);
  },
});
const upload = multer({ storage: storage });
app.post('/upload', upload.single('file'), (req, res) => {
  res.status(200).json('File has been uploaded');
});

app.use('/postsTrending', authPostTrend);
app.use('/postsEntertainment', authPostEnt);
app.use('/postsTravel', authPostTrav);
app.use('/postsInformation', authPostInfo);
app.use('/postsKpop', authPostKpop);
app.use('/category', authCat);
app.listen('5000', () => {
  console.log('Shing Mae backend is running nanana');
});
