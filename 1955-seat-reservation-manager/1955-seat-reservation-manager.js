/**
 * @param {number} n
 */
var SeatManager = function(n) {
    this.min = 0;
    this.seats = [];
    for(let i =0;i<n;i++){
        this.seats.push(false);
    }
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function() {
    while(this.seats[this.min]){
        this.min++;
    }
    this.seats[this.min] = true;
    return this.min+1;
};

/** 
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function(seatNumber) {
    this.seats[seatNumber-1] = false;
    this.min = seatNumber-1<this.min?seatNumber-1:this.min;
};

/** 
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */