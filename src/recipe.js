import React from 'react'
import style from './recipes.module.css'
const Recipe =({title,calories,image,ingredients}) =>{
    return(
        <div className={style.recipes}>
            <h1 className={style.heading}>
                {title}
            </h1>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>
                {calories}
            </p>
            <img src={image} alt="" className={style.image}></img>
        </div>
    )
}

export default Recipe