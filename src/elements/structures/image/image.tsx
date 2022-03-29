import React from "react";
const Image: React.FC = () => {
    return(
        <div style={{
            marginTop:"5em"
        }}>
            <img src={imgUrl} alt={imgUrl}></img>
        </div>
    );
}

const imgUrl = 'http://localhost:8080/api/img/350x500/jpg/grey/white?text=hello%20world&size=12'


export default Image;