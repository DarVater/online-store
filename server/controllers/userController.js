const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

const generateJwt = (id, email, role) => {
    return jwt.sign(
            { id, email, role },
            process.env.SECRET_KEY,
            { expiresIn: '24h' }
        )
}

class UserController{
    async registration(req, res, next) {
        const {email, password, choseRole} = req.body
        const role = choseRole || ''
        if  (!email || !password) {
            return next(ApiError.bedRequest('Некорректный email или password'))
        }
        const candidate = await User.findOne({where: {email}})
        if  (candidate) {
            return next(ApiError.bedRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email,role, password: hashPassword})
        await Basket.create({userId: user.id})
        const token = generateJwt(user.id, email, user.role)
        return  res.json({token})
    }
    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан не верный пароль'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})

    }
    async check(req, res, next) {
        const token = generateJwt(req.id, req.email, req.role)
        return res.json({token})

    }
}

module.exports = new UserController()