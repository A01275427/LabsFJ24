const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');
const session = require('express-session');
const csrf = require('csurf');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(session({
  secret: 'mi string secreto para motocicletas, debe ser un string aleatorio muy largo, no como éste', 
  resave: false,
  saveUninitialized: false,
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));

const fileStorage = multer.diskStorage({
  destination: (request, file, callback) => {
      callback(null, 'public/uploads'); 
  },
  filename: (request, file, callback) => {
      callback(null, new Date().getTime() + '-' + file.originalname);
  },
});

app.use(multer({ storage: fileStorage }).single('image'));

const csrfProtection = csrf();
app.use(csrfProtection); 

app.use((request, response, next) => {
  response.locals.csrfToken = request.csrfToken();
  console.log('Middleware de sesión activado!');
  next();
});

app.post('/upload', (request, response, next) => {
    console.log(request.file); 
    response.redirect('/uploads');
});

const rutaIndex = require('./routes/index.routes');
app.use('/users', rutaIndex);


app.use((request, response, next) => {
  response.status(404);
  response.sendFile(path.join(__dirname, 'views', 'mensaje.ejs'));
});

app.listen(3000, () => {
  console.log('El servidor está funcionando en el puerto 3000!');
});
