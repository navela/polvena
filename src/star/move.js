define(['./move', './raphael'], function (Raphael) {

    /**
     * move the object
     */
    function move(paper){

        var star = paper.circle(100,100,40).attr({fill: "red"}); 
        paper.text(100,100, "CLICKME").attr({"font-size": 22});
        star.click(function(evt){
            star.animate({fill: "blue", transform: "s2.0"}, 1000, "linear");
        });
    

    }

});

