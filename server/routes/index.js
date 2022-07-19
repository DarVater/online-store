const Router = require('express')
const router = new Router()
const deviceRouter = require('./deviseRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const deviseRouter = require('./deviseRouter')

router.use('/user', userRouter)
router.use('/type', deviseRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)

module.exports = router