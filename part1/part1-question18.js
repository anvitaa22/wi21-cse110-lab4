function printObject(){
    let statistics = {
        redCars: 21,
        blueCars: 45,
        greenCars: 12,
        raceCars:5,
        blackCars:40,
        rareCars: 2
    };

    for (let stats in statistics){
        if(stats.charAt(0) == 'r' || statistics[stats]%2 != 0){
            console.log(statistics[stats]);
        }
    }
}

printObject();