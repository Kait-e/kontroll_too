import { useState, useEffect } from 'react';

const Meals = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/meals")
        .then((response) => {
            return response.json()
        })
        .then((responsedata) => {
            setMeals(responsedata)
        });
 },  []);
       
 
 console.log(meals)
    
    
       return (
        <ul id="meals">
            <h2>create list of meals, using fetch data from backend</h2>
        </ul>
    )
}

export default Meals;