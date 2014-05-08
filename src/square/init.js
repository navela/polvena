define(['./draw', './raphael'], function (Raphael) {

    /**
     * init the object
     */
    function init(){

        var paper = Raphael("paper1", 500,500);
        draw(paper);
    }


});
