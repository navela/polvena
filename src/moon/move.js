define(['./move'], function (forOwn) {

    /**
     * move the object
     */
    function move(x, y) {
        var vals = [];
        for(var i = 0; i < vals.length; i += 1){
            vals.push(x);
            vals.push(y);
        }
        return vals;
    }

    return move;

});
