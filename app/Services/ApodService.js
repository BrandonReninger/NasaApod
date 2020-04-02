import store from "../store.js";
import Apod from "../Models/Apod.js"


// @ts-ignore
let _api = axios.create({
    baseURL: 'https://api.nasa.gov/planetary/apod?api_key=ZF5WwLwyqmP84QX6KuW2aEzGBcH513aiDEf8yiOh',
    timeout: 15000
})



class ApodService {
    constructor() {
        this.getApod()
    }

    getApod() {
        _api.get()
            .then(res => {
                console.log(res.data)
                let rawData = res.data
                let apod = new Apod(rawData)
                store.commit("apod", apod)
            }).catch(err => console.error(err))
    }
}


const Apodservice = new ApodService();
export default Apodservice;