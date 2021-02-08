class SearchBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    //ada button,berarti harus punya event ketika ditekan
    // maka sediakan setter agar fungsi event mudah diterapkan dr luar class searchbar

    set clickEvent(event) {
            this._clickEvent = event;
            this.render();
        }
        // agar mudah mendapatkan nilai value dari elemen input yg trdpt pd serchbar
        // mengembalikan nilai value dari elemen input
    get value() {
        return this.querySelector("#search-input").value;
    }
    render() {
        this.innerHTML = `
       
        <div class="container">
            <div class="row mt-3 justify-content-center">
                <div class="col-md-4">
                    <h5 class="text-center"> search meal </h5>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="what do you want to eat today" id="search-input">
                        <div class="input-group-append">
                            <button class="btn btn-success type="button" id="search-button">search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      

      
       `;
        //menerapkan fungsi this._clickEvent pada elemen button
        this.querySelector("#search-button").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);