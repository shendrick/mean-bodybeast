'use strict';

// Articles routes use articles controller
var rounds = require('../controllers/rounds');
var authorization = require('../../../../server/routes/middlewares/authorization');

// Article authorization helpers
var hasAuthorization = function(req, res, next) {
    if (req.round.user.id !== req.user.id) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

module.exports = function(Rounds, app) {

    app.get('/rounds', rounds.mine);
    app.post('/rounds', authorization.requiresLogin, rounds.create);
    app.get('/rounds/:roundId', rounds.show);
    app.put('/rounds/:roundId', authorization.requiresLogin, hasAuthorization, rounds.update);
    app.del('/rounds/:roundId', authorization.requiresLogin, hasAuthorization, rounds.destroy);

    // Finish with setting up the articleId param
    app.param('roundId', rounds.round);

};