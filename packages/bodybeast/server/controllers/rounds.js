'use strict';

/**
 * Module dependencies.
 */

require('../models/round');

var mongoose = require('mongoose'),
    Round = mongoose.model('Round'),
    _ = require('lodash');


/**
 * Find round by id
 */
exports.round = function(req, res, next, id) {
    Round.load(id, function(err, round) {
        if (err) return next(err);
        if (!round) return next(new Error('Failed to load round ' + id));
        req.round = round;
        next();
    });
};

/**
 * Create an round
 */
exports.create = function(req, res) {
    var round = new Round(req.body);
    round.user = req.user;

    round.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                round: round
            });
        } else {
            res.jsonp(round);
        }
    });
};

/**
 * Update an round
 */
exports.update = function(req, res) {
    var round = req.round;

    round = _.extend(round, req.body);

    round.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                round: round
            });
        } else {
            res.jsonp(round);
        }
    });
};

/**
 * Delete an round
 */
exports.destroy = function(req, res) {
    var round = req.round;

    round.remove(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                round: round
            });
        } else {
            res.jsonp(round);
        }
    });
};

/**
 * Show an round
 */
exports.show = function(req, res) {
    res.jsonp(req.round);
};

/**
 * List of Rounds
 */
/*
 exports.all = function(req, res) {
 var query = {};
 if (req.params.category) {
 query.categories = {
 $in: [req.params.category]
 };
 }

 Round.find(query).sort('-created').exec(function(err, rounds) {
 if (err) {
 res.render('error', {
 status: 500
 });
 } else {
 res.jsonp(rounds);
 }
 });
 };
 */



/**
 * List of User Rounds
 */
exports.mine = function(req, res) {
    var query = {};
    if (req.params.category) {
        query.categories = {
            $in: [req.params.category]
        };
    }

    query.user = req.session.passport.user;

    Round.find(query).sort('-created').exec(function(err, rounds) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(rounds);
        }
    });
};
