import Inchiriere from "../model/Inchiriere.js";


export default class ControllerInchirieri {


    constructor() {
        this.list = [];
        this.load();
    }

    load = () => {

        let inch = JSON.parse(localStorage.getItem("inchirieri"));

        inch.forEach(element => {
            this.list.push(new Inchiriere(element.id, element.idMasina, element.idPersoana, element.perioada));
        });


    }

    afisare = () => {


        for (let i = 0; i < this.list.length; i++) {

            console.log(this.list[i].definition());

        }

    }

    save = () => {
        localStorage.removeItem("inchirieri");
        localStorage.setItem("inchirieri", JSON.stringify(this.list));
    }

    add = (inchiriere) => {
        this.list.push(inchiriere);
        this.save();

    }

    delete = (inchiriere) => {
        this.list.pop(inchiriere);
        this.save();
    }

    findPozBtId = (id) => {

        for (let i = 0; i < this.list.length; i++) {
            if (id == this.list[i].id) {
                return i;
            }


        }
        return -1;
    }

    update = (inchiriere) => {


        let position = this.findPozBtId(inchiriere.id);


        if (position != -1) {
            console.log("avem");
            if (inchiriere.idMasina != "" && inchiriere.idMasina) {
                this.list[position].idMasina = inchiriere.idMasina;
            }
            if (inchiriere.idPersoana != "" && inchiriere.idPersoana) {
                this.list[position].idPersoana = inchiriere.idPersoana;
            }

            if (inchiriere.perioada != "" && inchiriere.perioada) {
                this.list[position].perioada = inchiriere.perioada;
            }

            this.save();
        }
    }


}