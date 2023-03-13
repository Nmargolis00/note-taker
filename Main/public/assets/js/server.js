const express = require('express');
const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./htmlRoutes');


const app = express();
const PORT = process.env.PORT || 3001;

//read json files
app.use(express.json());
//read URL
app.use(express.urlencoded({extended: true}));
//search and use files in public folder
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//GET Route for Home Page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

// GET Route for Notes Page
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname,'/public/notes.html')));


// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: http://localhost:${PORT}`));
