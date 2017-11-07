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
    create: (req, res) => {
        Plan.create(req.body, (err, plan) => {
            if(err) return res.json({success: false, code: err.code})
            // event/plan is created
            res.json({success: true, message: "Event created."})
        })
    },

    // Update an existing Event/Plan
    update: (req, res) => {
        Plan.findById(req.params.id, (err, plan) => {
            Object.assign(plan, req.body)
            plan.save((err, updatedPlan) => {
                res.json({success: true, message: "Event Updated", plan})
            })
        })
    },

    // Delete an existing Event/Plan
    destroy: (req, res) => {
        Plan.findByIdAndRemove(req.params.id, (err, plan) => {
            res.json({success: true, message: "Event deleted.", plan})
        })
    },

    authenticate: (req, res) => {
        Plan.findOne({email: req.body.email}, (err, plan) => {
            if(!plan || plan.validPassword(req.body.password)) {
                return res.json({success: false, message: "Invalid credentials"})
            }

            const token = signToken(plan)
            res.json({success: true, message: "Token Attached.", token})
        })
    }

}