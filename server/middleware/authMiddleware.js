const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    const NOT_LOGIN = "Не авторизован"
    if (req.method === 'OPTIONS') {
        next()
    }
    try {
        const token = req.headers.authorization.split(" ")[1]
        if (!token) {
            return res.status(401).json({message: NOT_LOGIN})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded
        next()
    } catch (e) {
        res.status(401).json({message: NOT_LOGIN})
    }
}