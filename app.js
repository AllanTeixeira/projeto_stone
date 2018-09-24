
const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection');
     
   
// Cria uma constante do Express
const app = express();

// importando as rotas
const Routes = require('./routes/rotas');



// configurações
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: '123',
  port: '3306',
  database: 'stone'
}, 'single'));
app.use(express.urlencoded({extended: false}));

// usando routes
app.use('/',Routes);

// onde vão estar os meu arquivos estáticos 
app.use(express.static(path.join(__dirname, 'public')));

// start o server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});

