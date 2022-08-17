$.ajax({
    type:'get',
    url: 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian',
    success: function(respoonse)
    {
        for(var i=0;i<respoonse.meals.length;i++)
        {
            var newitem=`<div class='col-md-3 m-2'>
                <p>${respoonse.meals[i].strMeal}</p>
                <img src=${respoonse.meals[i].strMealThumb} class='img-fluid'/>
                <p>${respoonse.meals[i].idMeal}</p>
            </div>`

            $('#my-items').append(newitem);
            console.log(respoonse);
        }
    },
    erroe:function(error){
        console.log(error);
    }
})