define(['./move', './raphael'], function (Raphael) {

    /**
     * move the object
     */
    function move(paper){


        var square = paper.rect(20,30,100,12).attr(
            {fill: "green"}
        );
        square.click(function(evt){
            square.animate({fill: "blue", transform: "s2.0"}, 1000, "linear");
        });
    


    }

});

