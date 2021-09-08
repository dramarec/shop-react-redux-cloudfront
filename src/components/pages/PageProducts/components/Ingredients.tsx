import React from 'react'
import { Typography } from '@material-ui/core'
// import { Product__Ingredients } from 'models/Product'

interface IProp {
    // ingredients: Product__Ingredients;
    ingredients: string[];
}

const Ingredients = ({ ingredients }: IProp) => {
    return (
        <div>
            <Typography gutterBottom variant="h5" component="h6">
                Ингредиенты
            </Typography>
            {ingredients.map((el: string) => (
                <Typography key={el} component="h6">
                    {el}
                </Typography>
            ))}
        </div>
    )
}

export default Ingredients
