import ControllerMasini from "./js/controller/ControllerMasini.js";
import Home from "./js/view/Home.js";


let home = new Home();

let controller = new ControllerMasini();

let list = controller.allBrands();

for (let i = 0; i < list.length; i++) {
    console.log(list[i]);

}