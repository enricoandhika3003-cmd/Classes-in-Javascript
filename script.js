class Profile {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    age() {
        let date = new Date();
        return date.getFullYear()-this.year
    }
}

const profile1 = new Profile("Bienve", 2023);
document.getElementById("profile1").innerHTML =
    "Account by the name of: " + profile1.name + ", was created on: " + profile1.year + ". The account has been active for a total of: " + profile1.age() + " years";

const profile2 = new Profile("Enrico", 2021);
document.getElementById("profile2").innerHTML =
    "Account by the name of: " + profile2.name + ", was created on: " + profile2.year + ". The account has been active for a total of: " + profile2.age() + " years";
