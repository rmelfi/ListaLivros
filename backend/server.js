var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');

var jwt    		= require('jsonwebtoken'); 
var config 		= require('./config'); 
var User   		= require('./models/user'); 
var Product   	= require('./models/product'); 

var port = process.env.PORT || 8080; 
mongoose.connect(config.database); 
app.set('superSecret', config.secret); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.listen(port);

console.log('Olah! Este projeto esta em http://localhost:' + port);

var apiRoutes = express.Router(); 

apiRoutes.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
  next();
});


apiRoutes.get('/', function(req, res) {
  res.json({ message: 'Olah! Este projeto esta em http://localhost:' + port });
});

apiRoutes.get('/start', function(req, res) {

  mongoose.connection.db.dropDatabase();
  
  var newUser = new User({ 
    name: 'Rogerio Melfi', 
    password: 'password',
    email: 'rmelfi@gmail.com' 
  });

  newUser.save(function(err) {
    if (err) throw err;
    console.log('User saved successfully');
  });
  
  
  var newProduct = new Product({ 
    title: 'Iracema', 
    author: 'José de Alencar',
	pictureUri: 'http://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=4082644&qld=90&l=430&a=-1',
	resume: 'Ceará, século XVII. Você está prestes a conhecer umas das histórias de amor mais aclamadas da literatura brasileira. O herói branco, europeu, apaixona-se pela linda Iracema, a virgem dos lábios de mel.'
  });
  
  newProduct.save();

  newProduct = new Product({ 
	title: 'Memórias póstumas de Brás Cubas', 
    author: 'Machado de Assis',
	pictureUri: 'http://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=4054515&qld=90&l=430&a=-1',
	resume: 'Obra publicada em 1881, conta a história daquele que é considerado o maior hipócrita da literatura brasileira: Brás Cubas, personagem tipicamente burguês, sem objetivos e bastante contraditório que resolve escrever sua história depois de morto, tornando-se o primeiro autor defunto da humanidade. '
  });

  newProduct.save();
  
  newProduct = new Product({ 
	title: 'O cortiço', 
    author: 'Aluísio Azevedo',
	pictureUri: 'http://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=4880402&qld=90&l=430&a=-1',
	resume: 'Ele foi publicado em 1890, e é um romance com características do movimento Naturalista. É uma das obras mais importantes desse movimento, pois denuncia que, diante de um ambiente degradado, as pessoas ás vezes comportam-se como animais.'
  });

  newProduct.save();
  
  newProduct = new Product({ 
	title: 'A relíquia', 
    author: 'Eça de Queirós',
	pictureUri: 'http://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=8315647&qld=90&l=430&a=-1',
	resume: 'Teodorico, protagonista, preocupa-se em enganar Titi, sua tia beata e rica, ao se fingir comprometido com a fé e a religião católica, tendo como objetivo a herança.'
  });

  newProduct.save();

  newProduct = new Product({ 
	title: 'Minha vida de menina', 
    author: 'Helena Morley',
	pictureUri: 'http://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=9341796&qld=90&l=430&a=-1',
	resume: 'Aclamado por escritores como Carlos Drummond de Andrade e João Guimarães Rosa, Minha vida de menina é o diário de uma garota de província do final do século XIX. Publicado pela primeira vez em 1942, antecipa a voga das histórias do cotidiano e dos relatos confessionais de adolescentes ao traçar um retrato vivo e bem-humorado da vida em Diamantina entre 1893 e 1895.'
  });

  newProduct.save();
  
  newProduct = new Product({ 
	title: 'Vidas secas', 
    author: 'Graciliano Ramos',
	pictureUri: 'http://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=8931725&qld=90&l=430&a=-1',
	resume: 'Em ´Vidas Secas´, o autor se mostra mais humano, sentimental e compreensivo, acompanhando o pobre vaqueiro Fabiano e sua família com simpatia e uma compaixão indisfarçáveis.'
  });

  newProduct.save();
  
  newProduct = new Product({ 
	title: 'Claro enigma', 
    author: 'Carlos Drummond de Andrade',
	pictureUri: 'http://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=4039793&qld=90&l=430&a=-1',
	resume: 'Os poemas reunidos neste volume ocupam uma posição singular na obra de Drummond.'
  });

  newProduct.save();
  
  newProduct = new Product({ 
	title: 'Sagarana', 
    author: 'João Guimarães Rosa',
	pictureUri: 'http://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=9358335&qld=90&l=430&a=-1',
	resume: 'Apresentando a paisagem e o homem de sua terra numa linguagem já então exclusiva, através de contos como “O burrinho pedrês”, “Duelo”, “A hora e vez de Augusto Matraga”, Guimarães Rosa fez deste livro a semente de uma obra cujo sentido e alcance ainda estão por ser inteiramente decifrados.'
  });

  newProduct.save();
  
  newProduct = new Product({ 
	title: 'Mayombe', 
    author: 'Pepetela',
	pictureUri: 'http://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=4591802&qld=90&l=430&a=-1',
	resume: 'Publicado originalmente em 1980, Mayombe foi escrito durante a participação de Pepetela na guerra de libertação de Angola, e retrata o cotidiano dos guerrilheiros do MPLA (Movimento Popular de Libertação de Angola) em luta contra as tropas portuguesas.'
  });

  newProduct.save();
  
  console.log('Start!!!');
  res.json({ success: true });
  
});


apiRoutes.options('/token', function(req, res) {
        res.json({success: true});
});


apiRoutes.options('/products', function(req, res) {
        res.json({success: true});
});

apiRoutes.post('/token', function(req, res) {
	
  User.findOne({
    email: req.body.email
  }, function(err, user) {

    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Authentication failed.' });
    } else if (user) {

      if (user.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed.' });
      } else {

        var token = jwt.sign(user, app.get('superSecret'), {
          expiresIn: 60 
        });

        res.json({
          success: true,
          message: 'Bem vindo!',
          token: token
        });
      }   

    }

  });
});

apiRoutes.use(function(req, res, next) {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  
  if (token) {

    jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token. ' + token });    
      } else {
        req.decoded = decoded;    
        next();
      }
    });

  } else {


    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });
    
  }
});


apiRoutes.get('/products', function(req, res) {
  Product.find({}, function(err, products) {
    res.json({ success: true, products: products});
  });
});   

app.use('/api', apiRoutes);
