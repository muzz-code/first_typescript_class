var Automobile = /** @class */ (function () {
    function Automobile(n, t, a) {
        this.name = n;
        this.type = t;
        this.age = a;
    }
    Automobile.prototype.speed = function () {
        return "this " + this.name + " sport " + this.type + " is moving at a speed of " + this.speed + " km";
    };
    return Automobile;
}());
var car = new Automobile("ferrari", "car", 100);
