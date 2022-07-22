const uuid = require('uuid')
const path = require('path')
const {Device, DeviceInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class DeviceController{
    async create(req, res, next) {
        try {
            const {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"


            const device = await Device.create({
                name,
                price,
                brandId,
                typeId,
                img: fileName
            })
            if (info) {
                const inf = JSON.parse(info)
                inf.forEach(i =>
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    }),
                )
            }
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            return res.json(device)
        } catch (e) {
            next(ApiError.bedRequest(e.message))
        }

    }
    async getAll(req, res) {
        const {brandId, typeId, limit, page} = req.query
        const pg = page || 1
        const lim = limit || 9

        let offset = pg * lim - lim

        let devices;
        let query_where = {}

        if (brandId ) query_where["brandId"] = brandId
        if (typeId ) query_where["typeId"] = typeId

        if (query_where) {
            devices = await  Device.findAndCountAll(
                {
                    where:query_where,
                    lim,
                    offset
                }
            )
        }

        return res.json(devices)
    }

    async getOne(req, res, next) {
        const {id} = req.params
        if  (id === 'undefined') {
            return next(ApiError.bedRequest('Не указан id'))
        }
        const device = await Device.findOne(
            {
                where: {id},
                include: [{model: DeviceInfo, as: 'info'}]
            }
        )
        return res.json(device)
    }
}

module.exports = new DeviceController()