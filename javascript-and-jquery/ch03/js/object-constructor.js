var hotel = new Object();

hotel.name = "Park";
hotel.rooms = 120;
hotel.booked = 77;
hotel.checkAvailability = function() {
    return this.rooms - this.booked;
};

var elname = document.getElementById("hotelnName");
elname.textContent = hotel.name;

var elrooms = document.getElementById("rooms");
elrooms.textContent = hote.checkAvailability();

