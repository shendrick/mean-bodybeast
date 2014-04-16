'use strict';

// The Package is past automatically as first parameter
module.exports = function(Bodybeast, app, auth, database) {

    app.get('/bodybeast/example/anyone', function (req,res,next) {
      res.send('Anyone can access this');
    });

    app.get('/bodybeast/example/auth',auth.requiresLogin, function (req,res,next) {
      res.send('Only authenticated users can access this');
    });

    app.get('/bodybeast/example/admin',auth.requiresAdmin, function (req,res,next) {
      res.send('Only users with Admin role can access this');
    });    

    app.get('/bodybeast/example/render', function (req,res,next) {
      Bodybeast.render('index', {package:'bodybeast'}, function (err, html) {
        //Rendering a view from the Package server/views
        res.send(html);
      })
    })
};