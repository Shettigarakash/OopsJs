let car={
    name : 'maruti 800',
    speed : 80,
    color : 'white',

    run :function(){
        console.log("Car is Running")
    }
}

function GeneralCar(givenName,givenSpeed,givenColor){
    this.name=givenName;
    this.speed=givenSpeed;
    this.color=givenColor;

    this.run=function(){
        console.log(`${this.name} car is running`)
    }
}

car1=new GeneralCar('Nissan',150,'blue')
car2=new GeneralCar('Alt',90,'red')
console.log(car1);


