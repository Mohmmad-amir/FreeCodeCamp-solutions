/*
TODO: certificate name: Data Visualization
TODO: course name: Data Visualization with D3
 */


/*
no.1
name: Add Document Elements with D3
*/
d3.select("body").append("h1").text("Learning D3")

/*
no.2
name: Select a Group of Elements with D3
*/
d3.selectAll("li").text('list item')

/*
no.3
name: Work with Data in D3
*/
const dataset = [12, 31, 22, 17, 25, 18, 29, 14]
// Add your code below this line
d3.select("body").selectAll('h2').data(dataset).enter().append('h2').text('New Title')
// Add your code above this line

/*
no.4
name: Work with Dynamic Data in D3
*/

d3.select("body").selectAll("h2")
    .data(dataset)
    .enter()
    .append("h2")
    // Add your code below this line

    .text((d) => d + " USD");

// Add your code above this line

/*
no.5
name: Add Inline Styling to Elements
*/
d3.select("body").selectAll("h2")
    .data(dataset)
    .enter()
    .append("h2")
    .text((d) => (d + " USD"))
    // Add your code below this line

    .style("font-family", "verdana")

// Add your code above this line

//no.6
//name:Change Styles Based on Data
d3.select("body").selectAll("h2")
    .data(dataset)
    .enter()
    .append("h2")
    .text((d) => (d + " USD"))
    // Add your code below this line

    .style("color", d => d < 20 ? "red" : "green")

// Add your code above this line

//no.7
//name : Add Classes with D3
d3.select("body").selectAll("div")
    .data(dataset)
    .enter()
    .append("div")
    // Add your code below this line

    .attr("class", "bar")

// Add your code above this line


// no.8
// name :Update the Height of an Element Dynamically
d3.select("body").selectAll("div")
    .data(dataset)
    .enter()
    .append("div")
    .attr("class", "bar")
    // Add your code below this line

    .style("height", d => d + "px")

// Add your code above this line

//no.9
//name : Change the Presentation of a Bar Chart
/* Add your code below this line */
// add margin 2px inside of style tag
// margin:2px;

/* Add your code above this line */

d3.select("body").selectAll("div")
    .data(dataset)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", (d) => (d * 10 + "px")) // Change this line


//no.10
//name : Learn About SVG in D3
const w = 500;
const h = 100;

const svg = d3.select("body")
    // Add your code below this line
    .append("svg").attr("height", h).attr("width", w)


    // Add your code above this line


    //no.11
    //name: Display Shapes with SVG

    // Add your code below this line

    .append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 25)
    .attr("height", 100)


// Add your code above this line

//no.12
//name : Create a Bar for Each Data Point in the Set
// Add your code below this line
d3.select("svg").selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
// Add your code above this line
//no.13
//name:Dynamically Set the Coordinates for Each Bar
// Add your code below this line
return i * 30

// Add your code above this line

//no.14
//name: Dynamically Change the Height of Each Bar
// Add your code below this line
return d * 3

// Add your code above this line

//no.15
//name: Invert SVG Elements

return h - d * 3

    // Add your code above this line

    //no.16
    //name : Change the Color of an SVG Element
    // Add your code below this line
    .attr("fill", "navy");
// Add your code above this line

//no.17
//name :Add Labels to D3 Elements
// Add your code below this line
       .append("text")
    .text((d) => d)
    .attr("x", (d, i) => i * 30)
    .attr("y", (d, i) => h - (3 * d) - 3)
    // Add your code above this line

    //no.18
    //name :Style D3 Labels
    // Add your code below this line
    .attr("font-size", "25px")
    .attr("fill", "red");
// Add your code above this line

//no.19
//name : Add a Hover Effect to a D3 Element
// Add your code below this line
        .attr("class", "bar")
    // Add your code above this line

    //no.20
    //name :Add a Tooltip to a D3 Element
    // Add your code below this line
    .append("title")
    .text(d => d);
// Add your code above this line

//no.21
//name :Create a Scatterplot with SVG Circles
// Add your code below this line

      .data(dataset)
    .enter()
    .append("circle")
    // Add your code above this line

    //no.22
    //name :Add Attributes to the Circle Elements
    // Add your code below this line

    .attr("cx", (d) => d[0])
    .attr("cy", (d) => h - d[1])
    .attr("r", (d) => 5)
    // Add your code above this line

    //no.23
    //name : Add Labels to Scatter Plot Circles
    // Add your code below this line
    .text((d) => (d[0] + ", " + d[1]))
    .attr("x", (d) => (d[0] + 5))
    .attr("y", (d) => (h - d[1]));
// Add your code above this line

//no.24
//name :Create a Linear Scale with D3
// Add your code below this line
const scale = d3.scaleLinear() // Create the scale here
const output = scale(50); // Call the scale with an argument here

// Add your code above this line

//no.25
//name :Set a Domain and a Range on a Scale
// Add your code below this line
scale.domain([250, 500]);
scale.range([10, 150]);
// Add your code above this line

//no.26
//name :Use the d3.max and d3.min Functions to Find Minimum and Maximum Values in a Dataset
// Add your code below this line
const output = d3.max(positionData, (d) => d[2]); // Change this line
// Add your code above this line

//no.27
//name : Use Dynamic Scales
// Add your code below this line
const yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, (d) => d[1])])
    .range([w - padding, padding]);
// Add your code above this line

//no.28
//name :Use a Pre-Defined Scale to Place Elements



       // Add your code below this line
       .attr("cx", (d) => xScale(d[0]))
    .attr("cy", (d) => yScale(d[1]))
    .attr('r', 5);

       // Add your code above this line


       // Add your code below this line
       
       .attr("x", (d) => xScale(d[0] + 10))
    .attr("y", (d) => yScale(d[1]))

// Add your code above this line




//no.29
//name : Add Axes to a Visualization

// Add your code below this line
const yAxis = d3.axisLeft(yScale);
// Add your code above this line

// Add your code below this line
svg.append("g")
    .attr("transform", "translate(" + padding + ", 0)")
    .call(yAxis);
// Add your code above this line
