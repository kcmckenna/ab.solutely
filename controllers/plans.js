const Plan = require('../models/Plan.js')
const signToken = require('../serverAuth.js').signToken

module.exports = {
    // List all events/plans
    index: (req, res) => {
        Plan.find({}, (err, plans) => {
            res.json(plans)
        })
    },

    // Get one Event/Plan
    show: (req, res) => {
        console.log("Current Event:")
        console.log(req.plan)
        Plan.findById(req.params.id, (err, user) => {
            res.json(plan)
        })
    },

    // Create a new Event/Plan

}