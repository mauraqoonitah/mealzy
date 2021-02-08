import './search-bar.js';

function main() {


    const baseUrl = "https://www.themealdb.com/api/json/v1/1";

    //----------------------
    const getCategory = () => {
        // membuat instance dari XMLHttpRequest
        const xhr = new XMLHttpRequest();

        //menetapkan callback jika response sukses dan error
        xhr.onload = function() {
            const responseJson = JSON.parse(this.responseText);
            if (responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderAllCategories(responseJson.categories);
            }
        }

        xhr.onerror = function() {
            showResponseMessage();
        }

        // Membuat GET request dan menetapkan target URL
        xhr.open("GET", `${baseUrl}/categories.php`);
        // Mengirimkan request
        xhr.send();
    };

    const renderAllCategories = (categories) => {
        const listCategoryElement = document.querySelector("#listCategories");
        listCategoryElement.innerHTML = "";

        categories.forEach(meal => {
            listCategoryElement.innerHTML += `
            <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
                <div class="card-body">
                    <div class="hov">
                        <img class= "img-fluid contain card-title" src=" ${meal.strCategoryThumb}">
                             <div class="middle">
                                <div class="text">
                                    <a>${meal.strCategory}</a>
                                </div>
                             </div>
                             
                    </div>
                </div>
            <div>
            `;
        });

    };

    getCategory();



    //----------------------------------


}
export default main;