function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}

Robot.prototype.maker = function() {
    this.maker = this.owner + " is the maker";
};

