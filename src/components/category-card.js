import React from "react";
import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";


export default function CategoryCard({category}) {
    return (
        <Card>    
            <Link to={`/${category.name}`}  className="ui basic button green">{category.name}</Link>
        </Card>
    );
}

CategoryCard.propTypes = {
    category: React.PropTypes.object.isRequired
};