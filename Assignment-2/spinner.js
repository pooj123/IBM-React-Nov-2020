function Spinner() {
    var count = 0;
    this.up = function() {
        count = count + 1; 
        return count;
    }
    this.down = function(){
        count = count - 1; 
        return count;
    }
}
var s = new spinner();
s.up();
s.up();
s.up();
s.down();
s.down();
s.down();
