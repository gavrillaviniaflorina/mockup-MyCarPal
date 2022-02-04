export default class Masina {


    constructor(id, marca, model, an, tip, putere) {

        this.id = id;
        this.marca = marca;
        this.model = model;
        this.an = an;
        this.tip = tip;
        this.putere = putere;

    }

    definition = () => {
        let text = "";

        text += "Id-ul masinii este " + this.id + "\n";
        text += "Marca masinii este " + this.marca + "\n";
        text += "Modelul masinii este " + this.model + "\n";
        text += "Anul masinii este " + this.an + "\n";
        text += "Tipul masinii este " + this.tip + "\n";
        text += "Puterea masinii este " + this.putere + "\n";
        return text;
    }




}