

d3.json('airports.json', d3.autoType).then(data=>{ 
    
    console.log('data', data);
    
    var margin = {top: 50, right: 50, bottom: 50, left: 50};
    var width = 600 - margin.left - margin.right,
        height = 600 - margin.top - margin.bottom

    const svg = d3.select(".chart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    
  

})

// (Later) Handling the type change

// (Later) Handling the sorting direction change


