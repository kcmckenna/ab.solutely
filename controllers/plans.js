const Plan = require('../models/Plan.js')
const signToken = require('../serverAuth.js').signToken

module.exports = {
    // List all Plans
    index: (req, res) => {
        Plan.find({user: req.params.id}).populate('user').exec((err, plans) => {
            if (err) return res.json({success: false, message: "No Plans!", err})
            res.json(plans)
        })
    },

    // Get one Plan
    show: (req, res) => {
        console.log("Current Event:")
        console.log(req.plan)
            Plan.findById(req.params.id).populate('user').exec((err, plan) => {
                if(err) return res.json({success: false, message: "Plans Not Found", err})
                res.json(plan)
        })
    },

    // Create a new Plan
    create: (req, res) => {
        console.log(req.body)
        var newPlan = new Plan(req.body)
        console.log("new" + newPlan)
        newPlan.user = req.params.id
        newPlan.save((err, plan) => {
            console.log("start")
            if(err) return res.json({success: false, message: "Plan not made", code: err.code})
            console.log("middle")
            // Event/Plan is created
            res.json({success: true, message: "Plan made!"})
            console.log("end")
        })
    },

    // Update an existing Plan
    update: (req, res) => {
        Plan.findById(req.params.id, (err, updatedPlan) => {
            Object.assign(plan, req.body)
            plan.save((err, updatedPlan) => {
                if(err) return res.json({success: false, message: "Plan not updated"})
                res.json({success: true, message: "Plans have changed!", updatedPlan})
            })
        })
    },

    // Delete an existing Plan
    destroy: (req, res) => {
        Plan.findByIdAndRemove(req.params.id, (err, deletedPlan) => {
            if(err) return res.json({success: false, message: "Plan not deleted"})
            res.json({success: true, message: "Plans are cancelled!", deletedPlan: deletedPlan})
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