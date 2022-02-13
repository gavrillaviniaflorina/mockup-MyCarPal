import Masina from "../model/Masina.js";

export default class ControllerMasini {

    constructor() {
        this.list = [];
        this.load();
    }

    load = () => {
        let cars = JSON.parse(localStorage.getItem("masini"));

        cars.forEach(element => {

            this.list.push(new Masina(element.id, element.marca, element.model, element.an, element.tip, element.putere)); //sau {element}.{element}...

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
        //{tip:"benzina"}

    update = (masina) => {

        let position = this.findPozById(masina.id);
        console.log(masina.tip);
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
                console.log("aici");
                this.list[position].tip = masina.tip;
            }
            if (masina.putere != "" && masina.putere) {
                this.list[position].putere = masina.putere;
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



    allBrands = () => {

        let brands = [];
        for (let i = 0; i < this.list.length; i++) {

            if (!brands.includes(this.list[i].marca)) {
                brands.push(this.list[i].marca);

            }
        }

        return brands;
    }


    allPowers = () => {
        let powers = [];

        for (let i = 0; i < this.list.length; i++) {
            if (!powers.includes(this.list[i].putere)) {
                powers.push(this.list[i].putere);
            }
        }
        return powers;
    }


    typesForABrand = (brand) => {

        let types = [];
        for (let i = 0; i < this.list.length; i++) {
            if (!types.includes(this.list[i].tip) && this.list[i].marca === brand) {
                types.push(this.list[i].tip);
            }
        }

        return types;

    }


    filterMasini = (brand, type) => {

        let resultList = [];
        for (let i = 0; i < this.list.length; i++) {

            if (this.list[i].marca === brand && this.list[i].tip == type) {


                resultList.push(this.list[i]);

            }
        }

        return resultList;

    }

    findId = (marca, model) => {

        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].marca == marca && this.list[i].model == model) {

                return this.list[i].id;
            }


        }

        return -1;

    }

    getCarById = (id) => {

        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].id == id) {

                return this.list[i];
            }

        }

        return null;

    }

    popular = () => {

        let result = [];
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].noUsers > 50) {
                result.push(this.list[i]);

            }
        }
        return result;
    }


}