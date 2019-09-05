class Temp {
    constructor(location){
        this.location = location;
        this.api = `2c01c770760ee9c36f108a01bf7cd08a`;
        this.url = `api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${this.api}`;
    }


    async findWeather (){
       const response = await fetch(this.url);
       const data = await response.json();
       return data;
        
    }
}
