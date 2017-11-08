const
    mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs'),
    planSchema = new mongoose.Schema({
        title: { type: String },
        place: { type: String },
        ID_user: { type: String },
        ID_event: { type: String },
        timeStart: { type: String },
        timeEnd: { type: String },
        dateStart: { type: String },
        dateEnd: { type: String },
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
    }, {timestamps: true})

const Plan = mongoose.model('Plan', planSchema)
module.exports = Plan