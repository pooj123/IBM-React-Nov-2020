function Spinner() {
    var count = 0;
    up = function() {
        count = count + 1; 
        return count;
    }
    down = function(){
        count = count - 1; 
        return count;
    }

    return {
        up: up,
        down: down,
    }
}
var s = Spinner();
s.up();
s.up();
s.up();
s.down();
s.down();
s.down();
