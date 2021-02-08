function random() {

    const baseUrl = "https://www.themealdb.com/api/json/v1/1";

    const getRandom = () => {
        fetch(`${baseUrl}/random.php`)
            .then(response => {
                return response.json();
            })

        .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message);

                } else {
                    renderRandom(responseJson.meals);
                }
            })
            .catch(error => {
                showResponseMessage(error);
            })
    };

    const renderRandom = (meals) => {
        const randomElement = document.querySelector("#randomMeal");
        randomElement.innerHTML = "";

        meals.forEach(meal => {
            randomElement.innerHTML += `
            <div class="object-center col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
              
                <div class="card-body ">
                    <h5 class="font-italic">We choose one of our best</h5> 
                    <h5 class="text-success"> ${meal.strCategory} menu</h5>
                        <br>
                    <img class= "img-fluid contain" src=" ${meal.strMealThumb}"> 
                        <br>
                    <h2 class="pt-2"> ${meal.strMeal}  </h2>
                        <br>
                    <p class="font-italic"> #${meal.strTags}</p>            
                </div>
            </div>
            <div class="mx-auto " style="">
                <p class="font-weight-bold"> How to make it: </p>
                <p class="px-5 text-justify"> ${meal.strInstructions}  </p>
                <p><a href=${meal.strYoutube} target="_blank"> video how to make it</a></p>
            </div>
            
            
            `;
        });


    };

    getRandom();

}
export default random;