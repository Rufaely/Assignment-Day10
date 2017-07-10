let bankAccounts :{money:number,deposit(number)}={
    money:2000, deposit(value) {
        this.money += value;
    }
};
let mySelf:{name:String,bankAccounts,hobbies:[String]}={
    name:"Rufael", bankAccounts:bankAccounts,hobbies:["swiming", "basketball"]
};
mySelf.bankAccounts.deposit(3000);
console.log(mySelf);