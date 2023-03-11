import React from "react";

export const PersonCard = (props) => {
    const { firstName, lastName, age, hairColor } = props.data;
    return (
        <div>
            <h1>
                {lastName}, {firstName}
            </h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    );
};

export default PersonCard;
