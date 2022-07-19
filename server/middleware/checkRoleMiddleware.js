const jwt = require('jsonwebtoken')

module.exports = function (role) {
    return function (req, res, next) {
        const NOT_LOGIN = "Не авторизован"
        const NOT_ALLOWED = "Нет доступа"
        if (req.method === 'OPTIONS') {
            next()
        }
        try {
            const token = req.headers.authorization.split(" ")[1]
            if (!token) {
                return res.status(401).json({message: NOT_LOGIN})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            console.log(decoded)
            console.log(decoded.role)
            console.log(111111)
            console.log( role)
            if (decoded.role !== role) {
                return res.status(403).json({message: NOT_ALLOWED})
            }
            req.user = decoded
            next()
        } catch (e) {
            res.status(401).json({message: NOT_LOGIN})
        }
    }
}