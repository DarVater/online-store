import {makeAutoObservable} from "mobx";

export default class DeviceStore{
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильник'},
            {id: 2, name: 'Смартфоны'},
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
        ]

        this._devices = [
            {id: 1, name: "Iphone 12 pro", price: 35000, rating: 5, Img: 'http://localhost:5000/95ccd4d0-dfb8-4b3c-abbf-a38906c77eb1.jpg'},
            {id: 2, name: "Iphone 12 pro", price: 35000, rating: 5, Img: 'http://localhost:5000/95ccd4d0-dfb8-4b3c-abbf-a38906c77eb1.jpg'},
            {id: 3, name: "Iphone 12 pro", price: 35000, rating: 5, Img: 'http://localhost:5000/95ccd4d0-dfb8-4b3c-abbf-a38906c77eb1.jpg'},
            {id: 4, name: "Iphone 12 pro", price: 35000, rating: 5, Img: 'http://localhost:5000/95ccd4d0-dfb8-4b3c-abbf-a38906c77eb1.jpg'},
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }


    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }

}