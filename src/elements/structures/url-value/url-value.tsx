import React from "react";
import {useSelector} from "react-redux";
import {Store} from "../../../types";


const UrlValue: React.FC = () => {
    const imageType = useSelector((store: Store.State) => store.imageType);
    const imageWidth = useSelector((store: Store.State) => store.imageWidth);
    const imageHeight = useSelector((store: Store.State) => store.imageHeight);
    return(
        <div>
            <p>This is Url value</p>
            <p>{imageWidth}</p>
            <p>{imageHeight}</p>
            <p>{imageType}</p>
        </div>
    );
}

export default UrlValue;