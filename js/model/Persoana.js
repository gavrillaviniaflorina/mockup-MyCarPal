export default class Persoana {
    constructor(id, nume, prenume, email) {
        this.id = id;
        this.nume = nume;
    }


    definition = () => {
        let text = "";
        text += "Id-ul persoanei este " + this.id + "\n";
        text += "Numele persoanei este " + this.nume + "\n";
        return text;
    }
}