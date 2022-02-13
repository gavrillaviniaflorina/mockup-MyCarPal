import Home from "./Home.js";
import Filter from "./ResultFilter.js";
import Login from "./Login.js";
import ControllerMasini from "../controller/ControllerMasini.js";
import Car from "./Car.js";

class AllCars {
    constructor() {
        this.containerRoot = document.querySelector(".container");
        this.container = document.createElement("div");
        this.container.classList = "all-cars-here";


        this.containerRoot.innerHTML = ``;
        this.containerRoot.appendChild(this.container);

        this.createHeader();
        this.createAside();
        this.createMain();
        this.createButtons();
        this.handlerClickCar();


        this.btnHome = document.querySelector(".home-button");
        this.btnHome.addEventListener("click", this.handlerReturnHome);


        this.btnFilter = document.querySelector(".find");
        this.btnFilter.addEventListener("click", this.handleFilter);

        this.btnLogin = document.querySelector(".user-login");
        this.btnLogin.addEventListener("click", this.handlerLogin);
    }

    createHeader = () => {
        let header = document.createElement("header");
        header.classList = "header-all-cars";
        header.innerHTML = `
        <h3>MyCarPal</h3>
        <section class="settings">

            <svg class="home-button" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 122.88 114.45">
            <path d="M110.8 107.88v4.48c0 1.16-.94 2.09-2.09 2.09h-95.1a2.09 2.09 0 01-2.09-2.09V58.9c-2.34.9-4.53.92-6.35.3a7.521 7.521 0 01-3.5-2.45A7.721 7.721 0 01.06 52.8c-.26-2.31.43-4.92 2.4-7.37.1-.12.21-.24.34-.34L59.85.55c.74-.68 1.88-.75 2.7-.11l57.19 44.46c.09.07.17.14.25.23 2.65 2.85 3.31 6.01 2.67 8.68a8.035 8.035 0 01-1.82 3.48c-.87.98-1.98 1.74-3.24 2.19-2 .72-4.38.7-6.79-.44v48.84h-.01zM5.57 48.23c-1.11 1.45-1.5 2.9-1.37 4.12.08.7.33 1.32.73 1.82.39.49.92.86 1.56 1.08 1.09.37 2.5.27 4.11-.49l49.79-37.88c.77-.59 1.82-.56 2.55.01l48.37 37.6c.02.02.04.04.07.05 1.77 1.28 3.47 1.48 4.79 1.01a3.72 3.72 0 001.55-1.05c.42-.47.72-1.03.87-1.66.33-1.38-.07-3.08-1.55-4.74L61.27 4.74 5.57 48.23zM29.6 75.49h26.7c1.04 0 1.89.83 1.89 1.85v20.89c0 1.02-.85 1.85-1.89 1.85H29.6c-1.04 0-1.89-.83-1.89-1.85V77.34a1.88 1.88 0 011.89-1.85zm38.13-1.84H92.8c1.12 0 2.03.94 2.03 2.1v34.52h11.78v-53.7c0-.14.01-.27.04-.4L61.64 21.18 15.63 56.19c.05.17.07.35.07.54v53.53h50V75.74c0-1.16.91-2.09 2.03-2.09zm23.04 4.19h-21v32.38h21V77.84zM54.41 89.63H44.5v6.75h9.91v-6.75zm-13.61 0h-9.31v6.75h9.31v-6.75zm-9.31-3.7h9.31v-6.74h-9.31v6.74zm13.01 0h9.91v-6.74H44.5v6.74zm16.38-49.6c3.55 0 6.43 2.88 6.43 6.43s-2.88 6.43-6.43 6.43-6.43-2.88-6.43-6.43c0-3.56 2.88-6.43 6.43-6.43z" />
          </svg>

            <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 117.033 122.88">
            <path d="M75.828 108.589c-.381 2.005-1.053 3.845-2.021 5.521-1 1.729-2.309 3.279-3.926 4.648-1.617 1.367-3.381 2.397-5.283 3.086-1.906.689-3.934 1.035-6.076 1.035-2.143 0-4.17-.346-6.077-1.035-1.903-.688-3.665-1.719-5.282-3.086-1.618-1.369-2.927-2.92-3.927-4.648-.998-1.728-1.682-3.63-2.054-5.706a1.87 1.87 0 011.51-2.169c.032-.005.329-.034.329-.036h31.001a1.876 1.876 0 011.806 2.39zM68.398 6.868c1.521.397 2.998.879 4.43 1.444a40.563 40.563 0 016.076 3.007c.076.047.15.097.223.148a40.545 40.545 0 015.189 3.772 39.769 39.769 0 014.67 4.754l.012.013H89a39.921 39.921 0 013.787 5.462 41.416 41.416 0 012.867 6.056l.004-.001a36.914 36.914 0 011.834 6.622 39.61 39.61 0 01.607 6.984c0 4.714 0 7.257.002 7.566.01 2.417.023 4.779.041 7.085v.024a52.96 52.96 0 00.404 6.279 49.763 49.763 0 001.115 6.014l.004-.001a30.951 30.951 0 001.967 5.493 35.459 35.459 0 003.086 5.311l.006-.004c1.195 1.697 2.691 3.373 4.488 5.027 1.855 1.709 4.01 3.383 6.461 5.023a3.065 3.065 0 01-1.707 5.612v.01H3.076a3.076 3.076 0 01-1.591-5.708c2.491-1.686 4.63-3.354 6.416-5.008 1.777-1.646 3.265-3.33 4.462-5.055.036-.051.072-.1.11-.148a36.903 36.903 0 002.967-5.173 32.764 32.764 0 002.037-5.635c.475-1.84.837-3.779 1.088-5.812a51.86 51.86 0 00.378-6.337V45.129c0-2.34.21-4.671.629-6.987a36.974 36.974 0 011.849-6.655 41.921 41.921 0 012.905-6.096 40.698 40.698 0 013.828-5.496l.017-.02-.004-.004a39.926 39.926 0 0110.151-8.663 38.778 38.778 0 016.128-2.971 38.48 38.48 0 014.529-1.405c.529-1.851 1.437-3.349 2.722-4.496C53.471.752 55.81-.025 58.712 0c2.875.025 5.194.821 6.952 2.391 1.289 1.151 2.201 2.643 2.734 4.477zm2.196 7.162a33.159 33.159 0 00-5.203-1.577 3.076 3.076 0 01-2.656-2.677c-.166-1.341-.551-2.281-1.154-2.819-.605-.541-1.578-.817-2.917-.829-1.33-.012-2.291.246-2.882.774-.6.536-.98 1.485-1.14 2.85h-.003a3.067 3.067 0 01-2.484 2.667 32.579 32.579 0 00-10.69 4.051 33.815 33.815 0 00-8.589 7.341l-.004-.003a34.614 34.614 0 00-3.234 4.659 35.731 35.731 0 00-2.473 5.207 30.78 30.78 0 00-1.56 5.55 33.06 33.06 0 00-.509 5.906v14.564c0 2.412-.143 4.774-.427 7.083a51.535 51.535 0 01-1.256 6.605c-.01.047-.021.095-.033.142a38.888 38.888 0 01-2.389 6.549 43.177 43.177 0 01-3.461 6.046 3.175 3.175 0 01-.121.189c-1.408 2.026-3.192 4.039-5.352 6.039l-.078.071H105.031c-2.111-1.946-3.887-3.942-5.328-5.989l.004-.004-.004-.008a41.698 41.698 0 01-3.621-6.231 37.238 37.238 0 01-2.375-6.575l.002-.001-.002-.011a55.496 55.496 0 01-1.264-6.771 59.853 59.853 0 01-.428-6.992v-.007c-.018-2.278-.031-4.656-.041-7.133a3586.95 3586.95 0 01-.025-7.566c0-2.024-.17-3.992-.512-5.902a30.791 30.791 0 00-1.521-5.517l.004-.001-.004-.011a35.351 35.351 0 00-2.439-5.178 33.89 33.89 0 00-3.211-4.622l.002-.001a33.559 33.559 0 00-3.939-3.997 34.562 34.562 0 00-4.393-3.207 2.896 2.896 0 01-.203-.113 34.452 34.452 0 00-5.139-2.551z"/>
          </svg>
            <svg  class="user-login" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 452.979 452.979">
            <path d="M437.979 433.724l-419.29.565.566-418.723c.011-8.284-.495-15-8.78-15C2.193.566 0 6.716 0 15v422.979c0 8.284 6.716 15 15 15h422.979c8.284 0 14.434-2.192 14.434-10.476s-6.15-8.79-14.434-8.78z"/><path d="M56.998 405.981h78.927c5.523 0 10-4.477 10-10v-82.833c0-5.523-4.477-10-10-10H56.998c-5.523 0-10 4.477-10 10v82.833c0 5.523 4.477 10 10 10zm10-82.833h58.927v62.833H66.998v-62.833zM179.147 405.981h78.927c5.522 0 10-4.477 10-10v-215.6c0-5.523-4.478-10-10-10h-78.927c-5.523 0-10 4.477-10 10v215.6c0 5.523 4.477 10 10 10zm10-215.599h58.927v195.6h-58.927v-195.6zM305.054 405.981h78.928c5.522 0 10-4.477 10-10V49.161c0-5.523-4.478-10-10-10h-78.928c-5.522 0-10 4.477-10 10v346.82c0 5.523 4.478 10 10 10zm10-346.82h58.928v326.82h-58.928V59.161z"/>
          </svg>

            <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 478.703 478.703">
            <path d="M454.2 189.101l-33.6-5.7c-3.5-11.3-8-22.2-13.5-32.6l19.8-27.7c8.4-11.8 7.1-27.9-3.2-38.1l-29.8-29.8c-5.6-5.6-13-8.7-20.9-8.7-6.2 0-12.1 1.9-17.1 5.5l-27.8 19.8c-10.8-5.7-22.1-10.4-33.8-13.9l-5.6-33.2a29.54 29.54 0 00-29.2-24.7h-42.1c-14.5 0-26.8 10.4-29.2 24.7l-5.8 34c-11.2 3.5-22.1 8.1-32.5 13.7l-27.5-19.8c-5-3.6-11-5.5-17.2-5.5-7.9 0-15.4 3.1-20.9 8.7l-29.9 29.8c-10.2 10.2-11.6 26.3-3.2 38.1l20 28.1c-5.5 10.5-9.9 21.4-13.3 32.7l-33.2 5.6a29.54 29.54 0 00-24.7 29.2v42.1c0 14.5 10.4 26.8 24.7 29.2l34 5.8c3.5 11.2 8.1 22.1 13.7 32.5l-19.7 27.4c-8.4 11.8-7.1 27.9 3.2 38.1l29.8 29.8c5.6 5.6 13 8.7 20.9 8.7 6.2 0 12.1-1.9 17.1-5.5l28.1-20c10.1 5.3 20.7 9.6 31.6 13l5.6 33.6a29.54 29.54 0 0029.2 24.7h42.2c14.5 0 26.8-10.4 29.2-24.7l5.7-33.6c11.3-3.5 22.2-8 32.6-13.5l27.7 19.8c5 3.6 11 5.5 17.2 5.5 7.9 0 15.3-3.1 20.9-8.7l29.8-29.8c10.2-10.2 11.6-26.3 3.2-38.1l-19.8-27.8c5.5-10.5 10.1-21.4 13.5-32.6l33.6-5.6a29.54 29.54 0 0024.7-29.2v-42.1c.2-14.5-10.2-26.8-24.5-29.2zm-2.3 71.3c0 1.3-.9 2.4-2.2 2.6l-42 7c-5.3.9-9.5 4.8-10.8 9.9-3.8 14.7-9.6 28.8-17.4 41.9-2.7 4.6-2.5 10.3.6 14.7l24.7 34.8c.7 1 .6 2.5-.3 3.4l-29.8 29.8c-.7.7-1.4.8-1.9.8-.6 0-1.1-.2-1.5-.5l-34.7-24.7c-4.3-3.1-10.1-3.3-14.7-.6-13.1 7.8-27.2 13.6-41.9 17.4-5.2 1.3-9.1 5.6-9.9 10.8l-7.1 42c-.2 1.3-1.3 2.2-2.6 2.2h-42.1c-1.3 0-2.4-.9-2.6-2.2l-7-42c-.9-5.3-4.8-9.5-9.9-10.8-14.3-3.7-28.1-9.4-41-16.8-2.1-1.2-4.5-1.8-6.8-1.8-2.7 0-5.5.8-7.8 2.5l-35 24.9c-.5.3-1 .5-1.5.5-.4 0-1.2-.1-1.9-.8l-29.8-29.8c-.9-.9-1-2.3-.3-3.4l24.6-34.5c3.1-4.4 3.3-10.2.6-14.8-7.8-13-13.8-27.1-17.6-41.8-1.4-5.1-5.6-9-10.8-9.9l-42.3-7.2c-1.3-.2-2.2-1.3-2.2-2.6v-42.1c0-1.3.9-2.4 2.2-2.6l41.7-7c5.3-.9 9.6-4.8 10.9-10 3.7-14.7 9.4-28.9 17.1-42 2.7-4.6 2.4-10.3-.7-14.6l-24.9-35c-.7-1-.6-2.5.3-3.4l29.8-29.8c.7-.7 1.4-.8 1.9-.8.6 0 1.1.2 1.5.5l34.5 24.6c4.4 3.1 10.2 3.3 14.8.6 13-7.8 27.1-13.8 41.8-17.6 5.1-1.4 9-5.6 9.9-10.8l7.2-42.3c.2-1.3 1.3-2.2 2.6-2.2h42.1c1.3 0 2.4.9 2.6 2.2l7 41.7c.9 5.3 4.8 9.6 10 10.9 15.1 3.8 29.5 9.7 42.9 17.6 4.6 2.7 10.3 2.5 14.7-.6l34.5-24.8c.5-.3 1-.5 1.5-.5.4 0 1.2.1 1.9.8l29.8 29.8c.9.9 1 2.3.3 3.4l-24.7 34.7c-3.1 4.3-3.3 10.1-.6 14.7 7.8 13.1 13.6 27.2 17.4 41.9 1.3 5.2 5.6 9.1 10.8 9.9l42 7.1c1.3.2 2.2 1.3 2.2 2.6v42.1h-.1z"/><path d="M239.4 136.001c-57 0-103.3 46.3-103.3 103.3s46.3 103.3 103.3 103.3 103.3-46.3 103.3-103.3-46.3-103.3-103.3-103.3zm0 179.6c-42.1 0-76.3-34.2-76.3-76.3s34.2-76.3 76.3-76.3 76.3 34.2 76.3 76.3-34.2 76.3-76.3 76.3z"/>
          </svg>
        </section>

        <section class="searching-bar">
            <input class="search">
            <button>Search</button>
        </section>
        `;



        this.container.appendChild(header);


    }
    createAside = () => {
        let aside = document.createElement("aside");
        aside.classList.add("aside-all-cars");

        aside.innerHTML = `
    


        <ul>
        <article>
            <label for="type">Type</label>
            <select id="type" class="type">
   
    <option> </option>
    <option>motorina</option>
    <option>benzina</option>
    <option>hibrid</option>
   
</select>
        </article>
        <article class="power-bar">
        <section class="labels">
        <label  for="power">Power</label>
        </section>
        
        <input type="range" id="power" name="power" min="0" max="100" class="power" value="90" step="10">
          
            </article>
        <article>
            <label for="brand" type>Brand</label>
            <select id="brand" class="brands">
    <optgroup label="brand">
       
    </optgroup>
</select>
        </article>

    </ul>
    <button class="find">Find</button>
</section>




        `;

        this.container.appendChild(aside);
        this.populateBrands();
        this.populateTypesForBrand();
    }

    createMain = () => {
        let main = document.createElement("main");
        main.classList = "main-all-cars";



        this.container.appendChild(main);
        this.populateCars();
    }

    createButtons = () => {

        let buttons = document.createElement("div");
        buttons.classList = 'buttons';
        buttons.innerHTML = `
        <button>1</button>
        <button>2</button>
        <button>3</button>
        `;

        this.container.appendChild(buttons);
    }

    populateTypesForBrand = () => {
        let brands = document.querySelector(".brands");

        brands.addEventListener("click", (e) => {


            let target = e.target;

            let brand = target.value;

            let controllerMasini = new ControllerMasini();
            let foundTypes = controllerMasini.typesForABrand(brand);


            let select = document.querySelector(".type");


            let child = select.firstChild;

            while (select.firstChild) {

                select.removeChild(select.firstChild);


            }




            for (let i = 0; i < foundTypes.length; i++) {

                let op = document.createElement("option");
                op.innerHTML = `${foundTypes[i]}`;

                select.appendChild(op);
            }

        })





    }

    populateCars = () => {
        let contollerMasini = new ControllerMasini();
        let list = contollerMasini.list;

        let main = document.querySelector(".main-all-cars");

        for (let i = 0; i < list.length; i++) {
            let car = document.createElement("article");

            car.classList = "car";

            car.innerHTML = ` 
            <h3>${list[i].marca} ${list[i].model}</h3>
           
            <?xml version="1.0" encoding="iso-8859-1"?>
    
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 471.701 471.701" style="enable-background:new 0 0 471.701 471.701;" xml:space="preserve">
    <g>
    <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
    c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
    l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
    C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
    s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
    c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
    C444.801,187.101,434.001,213.101,414.401,232.701z"/>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    </svg>
    
            <img src="../img/popular-car.png">
            <p>${list[i].tip}</p>
    
            <button class="offer">Get offer</button>
    
    
        `



            main.appendChild(car);


        }


    }

    populateBrands = () => {
        let controllerMasini = new ControllerMasini();

        let brands = controllerMasini.allBrands();

        let select = document.querySelector(".brands");








        for (let i = 0; i < brands.length; i++) {

            let op = document.createElement("option");
            op.innerHTML = `${brands[i]}`;

            select.appendChild(op);

        }
    }


    handlerReturnHome = (e) => {
        new Home();
    }



    handlerLogin = (e) => {
        new Login();
    }

    handleFilter = (e) => {

        let type = document.querySelector(".type");

        let brand = document.querySelector(".brands");


        console.log(type.value);
        console.log(brand.value);

        new Filter(brand.value, type.value);
    }

    handlerClickCar = () => {

        let main = document.querySelector(".main-all-cars");

        main.addEventListener("click", (e) => {


            let target = e.target;

            if (target.tagName == "BUTTON") {

                let parent = target.parentNode;


                let need = parent.firstElementChild.textContent;
                console.log(need);

                let arr = need.split(' ');

                let marca = arr[0];
                let model = arr[1];
                console.log(marca);
                console.log(model);
                let controller = new ControllerMasini();

                new Car(controller.findId(marca, model));
            }
        })
    }




}



export default AllCars;