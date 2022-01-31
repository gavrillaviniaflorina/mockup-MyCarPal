export default class Inchiriere {


    constructor(id, idMasina, idPersoana, perioada) {
        this.id = id;
        this.idMasina = idMasina;
        this.idPersoana = idPersoana;
        this.perioada = perioada;
    }

    definition = () => {
        let text = "";
        text += "ID-ul inchirierii este " + this.id + "\n";
        text += "ID-ul masinii inchiriiate este " + this.idMasina + "\n";
        text += "ID-ul persoanei care a inchiriat " + this.idPersoana + "\n";
        text += "Perioada inchirierii este " + this.perioada + "\n";
        return text;
    }

}