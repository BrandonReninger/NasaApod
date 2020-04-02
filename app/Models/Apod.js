export default class Apod {
    constructor(data) {
        this.hdurl = data.hdurl || data.url || ''
        this.explanation = data.explanation || ''
        this.date = data.date || ''
    }

    get Template() {
        return /*html*/ `<div>
        <img class="img-fluid" src="${this.hdurl}">
        <p>${this.explanation}</p>
        <p>${this.date}</p>
        </div>
        `
    }

}