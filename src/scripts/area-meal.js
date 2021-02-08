function area() {

    const baseUrl = "https://www.themealdb.com/api/json/v1/1";

    const getArea = () => {
        fetch(`${baseUrl}/list.php?a=list`)
            .then(response => {
                return response.json();
            })

        .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message);

                } else {
                    renderArea(responseJson.meals);
                }
            })
            .catch(error => {
                showResponseMessage(error);
            })
    };

    const renderArea = (meals) => {
        const areaElement = document.querySelector("#areaMeals");
        areaElement.innerHTML = "";

        meals.forEach(meal => {
            areaElement.innerHTML += `
           <div class="object-center col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
                <div class="card-body ">
                <a href="">
                <h5 class="text-success"> ${meal.strArea}</h5>
                </a>
                </div>
            </div>
         
        
            
            `;
        });


    };

    getArea();

}
export default area;