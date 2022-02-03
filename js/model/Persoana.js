export default class Persoana {
    constructor(id, nume, email, parola) {
        this.id = id;
        this.nume = nume;
        this.email = email;
        this.parola = parola;
    }


    definition = () => {
        let text = "";
        text += "Id-ul persoanei este " + this.id + "\n";
        text += "Numele persoanei este " + this.nume + "\n";
        text += "Email-ul persoanei este " + this.email + "\n";
        text += "Parola persoanei este " + this.parola + "\n";
        return text;
    }
}