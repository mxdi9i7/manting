var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/myproject', ['menu']);
var menuCollection = db.collection('menu');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	partials: {
  		header: '../views/partials/header',
  		footer: '../views/partials/footer',
  		slider: '../views/partials/slider',
  		story: '../views/partials/story',
  		menuHot: '../views/partials/menuHot',
  		menu: '../views/partials/menu',
  		gallery: '../views/partials/menu',
  		reservation: '../views/partials/reservation',
  		maps: '../views/partials/maps'
  	}
  });
});
/* GET home page. */
router.get('/menu', function(req, res, next) {

  res.render('menu', { 
  	partials: {
  		header: '../views/partials/header',
  		footer: '../views/partials/footer',
  		reservation: '../views/partials/reservation',
  		menuHot: '../views/partials/menuHot',
  		menu: '../views/partials/menu',
  	}
  });
});

router.get('/reservation', function(req, res, next) {

  res.render('reservation', { 
  	partials: {
  		header: '../views/partials/header',
  		footer: '../views/partials/footer',
  		reservation: '../views/partials/reservation',
  	}
  });
});

router.get('/about', function(req, res, next) {

  res.render('about', { 
  	partials: {
  		header: '../views/partials/header',
  		footer: '../views/partials/footer',
  		story: '../views/partials/story',
  	}
  });
});
router.get('/gallery', function(req, res, next) {

  res.render('gallery', { 
  	partials: {
  		header: '../views/partials/header',
  		footer: '../views/partials/footer',
  		gallery: '../views/partials/gallery',
  	}
  });
});
router.get('/contact', function(req, res, next) {

  res.render('contact', { 
    partials: {
      header: '../views/partials/header',
      footer: '../views/partials/footer',
      maps: '../views/partials/maps',
    }
  });
});

module.exports = router;
