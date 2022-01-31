export default class ControllerPersoane {
    constructor() {
        this.list = [];

    }

    load = () => {
        let people = JSON.parse(localStorage.getItem("people"));

    }
}