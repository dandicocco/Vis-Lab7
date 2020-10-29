

d3.json('airports.json', d3.autoType).then(data=>{ 
    
    console.log('data', data); // simply call the update function with the supplied data
    
    update(data, type, sort);

    d3.select(".sort-button").on("click", () =>{
        sort = !sort;
        update(data, type, sort);
    });

    d3.select("#group-by").on("change", (e) => {
            type = e.target.value;
            update(data, type, sort);
    });

  

})

// (Later) Handling the type change

// (Later) Handling the sorting direction change


