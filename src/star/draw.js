define(['./draw', './raphael'], function (Raphael) {

    /**
     * draw the object
     */
    function draw(paper){
		var star = paper.path("M10,100L120,120L120,40Z")
		star.attr({"stroke-width": 4, fill: "blue"});
    }

});

