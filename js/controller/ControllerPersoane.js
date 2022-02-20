import Persoana from "../model/Persoana.js";

export default class ControllerPersoane {
    constructor() {
        this.list = [];
        this.load();

    }

    load = () => {
        let people = JSON.parse(localStorage.getItem("persoane"));

        people.forEach(element => {
            this.list.push(new Persoana(element.id, element.nume, element.email, element.parola));
        });

    }

    afisare = () => {


        for (let i = 0; i < this.list.length; i++) {
            console.log(this.list[i].definition());
        }

    }

    add = (persoana) => {
        this.list.push(persoana);
        this.save();
    }

    save = () => {

        localStorage.removeItem("persoane");

        localStorage.setItem("persoane", JSON.stringify(this.list));


    }

    delete = (persoana) => {

        this.list.pop(persoana);

        this.save();
    }

    findPozById = (id) => {
        for (let i = 0; i < this.list.length; i++) {
            if (id === this.list[i].id) {

                return i;
            }
        }

        return -1;
    }


    update = (persoana) => {
        let position = this.findPozById(persoana.id);
        if (position != -1) {
            if (persoana.nume != "" && persoana.nume) {
                this.list[position].nume = persoana.nume;
            }
            if (persoana.email != "" && persoana.email) {
                this.list[position].model = persoana.model;
            }
            if (persoana.parola != "" && persoana.parola) {
                this.list[position].parola = persoana.parola;
            }
            this.save();
        }
    }



    searchPerson = (email, passoword) => {

        for (let i = 0; i < this.list.length; i++) {
            if (email == this.list[i].email && passoword == this.list[i].parola) {
                return this.list[i];
            }
        }

        return -1;

    }

}