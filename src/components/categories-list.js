import React from "react";
import { Card} from "semantic-ui-react";
import CategoryCard from "./category-card";

export default function CategoriesList({categories}){
    const categoriesList = () => {
        return categories.map(cat => {
            return (
                <CategoryCard key={cat.name} category={cat}/>
            );
        });
    };

    return (
        <Card.Group>
            { categoriesList() }
        </Card.Group>
    );
}