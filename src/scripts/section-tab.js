class SectionTab extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#listCategories").value;
    }


    render() {
        this.innerHTML = `
        <div id="tab-container" class="tab-container">
            <div class="tab">
                <button id="tabButtonElement" class="tablinks" onclick="openTab(event, 'Category')">Meal Categories</button>
                <button id="tabButtonElement" class="tablinks" onclick="openTab(event, 'Random')">Random Meal</button>
                <button id="tabButtonElement" class="tablinks" onclick="openTab(event, 'Area')">Meal by Area</button>
            </div>
        
            <div  class="text-center">   
                <div id="Category" class="tabcontent">
                    <h3>Meal Categories</h3>
                        <div id="listCategories" class="row"> </div>
                </div>
      

                <div id="Random" class="tabcontent">
                     <div id="randomMeal" class="row"> </div>
                     
                    
                </div>

            <div id="Area" class="tabcontent">
                <p>We get meals categorize by areas</p>
                <h5 class="font-italic">choose your area: </h5> 
                    <div id="areaMeals" class="row"> </div>
            </div>
     
        </div>

        
        `;

        this.querySelector("#tabButtonElement").addEventListener("click", this._clickEvent);

    }


}



customElements.define("section-tab", SectionTab);