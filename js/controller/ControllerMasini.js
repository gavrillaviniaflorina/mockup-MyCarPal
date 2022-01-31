import Masina from "../model/Masina.js";

export default class ControllerMasini {

    constructor() {
        this.list = [];
        this.load();
    }

    load = () => {
        let cars = JSON.parse(localStorage.getItem("masini"));

        cars.forEach(element => {

            this.list.push(new Masina(element.id, element.marca, element.model, element.an, element.tip)); //sau {element}.{element}...

        });



    }

    afisare = () => {


        for (let i = 0; i < this.list.length; i++) {
            console.log(this.list[i].definition());
        }

    }

    //CRUD CREATE READ UPDATE DELETE

    add = (masina) => {
        this.list.push(masina);
        this.save();
    }


    save = () => {

        localStorage.removeItem("masini");

        localStorage.setItem("masini", JSON.stringify(this.list));


    }


    delete = (masina) => {

        this.list.pop(masina);

        this.save();
    }


    update = (masina) => {
        let position = this.findPozById(masina.id);
        if (position != -1) {
            if (masina.marca != "" && masina.marca) {
                this.list[position].marca = masina.marca;
            }
            if (masina.model != "" && masina.model) {
                this.list[position].model = masina.model;
            }
            if (masina.an != "" && masina.an) {
                this.list[position].an = masina.an;
            }
            if (masina.tip != "" && masina.tip) {
                this.list[position].tip = masina.tip;
            }





            this.save();
        }




    }

    //fiindById masina
    findPozById = (id) => {
        for (let i = 0; i < this.list.length; i++) {
            if (id === this.list[i].id) {

                return i;
            }
        }

        return -1;
    }


}