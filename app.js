import ControllerInchirieri from "./js/controller/ControllerInchirieri.js";

import ControllerMasini from "./js/controller/ControllerMasini.js";
import ControllerPersoane from "./js/controller/ControllerPersoane.js";
import Inchiriere from "./js/model/Inchiriere.js";
import Masina from "./js/model/Masina.js";
import Persoana from "./js/model/Persoana.js";


window.localStorage.setItem("persoane", JSON.stringify([]));




// let masina1 = new Masina(1, "renault", "simbol", 2012, "benzina");
// let masina2 = new Masina(2, "citroen", "C3", 2020, "benzina");
// let masina3 = new Masina(3, "dacia", "duster", 2014, "motorina");
// let masina4 = new Masina(4, "Opel", "Astra", 2008, "motorina");
// let masina5 = new Masina(5, "dacia", "spring", 2021, "electrica");

let p1 = new Persoana(1, "ana", "email", 12);
console.log(p1.definition());
let controllerPers = new ControllerPersoane();

controllerPers.afisare();