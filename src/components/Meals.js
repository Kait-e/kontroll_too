import { useState, useEffect } from 'react';
import MealItem from './MealItem';

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
            {meals.map((meal) => (
                <MealItem key={meal.id} meal={meal} />
            ))}
        </ul>
    )
}

export default Meals;