class baseObject{
    constructor(public width:number, public length:number){ }
    calculSize(){this.width*this.length};
};

var rectangl = new baseObject(5,2);
console.log(rectangl.calculSize());