'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Article Schema
 */
var RoundSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    activePhase: {
        type: Number
    },
    schedule: {
        type: Number
    },
    activeWeek: {
        type: Number
    },
    date: {
        type: Date
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

/**
 * Validations
 */
/*RoundSchema.path('schedule').validate(function(schedule) {
    return schedule.length;
}, 'Schedule cannot be blank');*/

/**
 * Statics
 */
RoundSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('user', 'name username').exec(cb);
};

mongoose.model('Round', RoundSchema);
