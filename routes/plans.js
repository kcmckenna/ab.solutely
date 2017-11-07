const
    express = require('express'),
    plansRouter = new express.Router(),
    plansCtrl = require('../controllers/plans.js'),
    verifyToken = require('../serverAuth.js').verifyToken

plansRouter.route('/')
    .get(plansCtrl.index)
    .post(plansCtrl.create)

plansRouter.post('/authenticate', plansCtrl.authenticate)

plansRouter.use(verifyToken)
plansRouter.route('/:id')
    .get(plansCtrl.show)
    .patch(plansCtrl.update)
    .delete(plansCtrl.destroy)

module.exports = plansRouter


// albumsRouter.route('/:id')
// .post((req, res) => {
//     Plans.findById(req.params.id).populate('user').exec ((err, plans) => {
//         if(err) return res.json({success: false, message: "invalid plan", err})
//         res.json(plan)
//     })
// })