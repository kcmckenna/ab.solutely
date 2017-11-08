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
