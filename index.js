
import chalk from 'chalk';
import  axios  from 'axios';
import  dotenv  from 'dotenv';

dotenv.config();

const query = process.argv.slice(2);
const URL = `http://api.weatherapi.com/v1/current.json?key=${process.env.KEY} &q=${query}&aqi=no`;


const getWeather = async () => {
    try { const response = await axios.get(URL);
        console.log('Location : ',chalk.blue.bgRed.bold(response.data.location.name));
        console.log('Temperature in Celcius :' ,chalk.blue.bgRed.bold(response.data.current.temp_c));
        console.log('Temperature in Fahrenheit : ',chalk.blue.bgRed.bold(response.data.current.temp_f));
        console.log('Weather condition : ', chalk.blue.bgRed.bold(response.data.current.condition.text));
    }
    catch (err) {
        console.log(err.message);
    }
    
    
}

getWeather();