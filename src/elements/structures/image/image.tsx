import React from "react";
import {useSelector} from "react-redux";
import {Store} from "../../../types";
import {Button, Box} from "@mui/material";
import {CopyToClipboard} from "react-copy-to-clipboard";
import SupportMe from '../../../components/support-me/support-me'

const Image: React.FC = () => {
    return(
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            <div>
                <p>{GetImageUrl()}</p>
                <CopyToClipboard
                    text={GetImageUrl()}
                    onCopy={() => alert("Copied")}
                >
                    <Button variant="outlined">Copy to clipboard</Button>
                </CopyToClipboard>
            </div>
            <div>
                <SupportMe></SupportMe>
            </div>
            <div
                style={{
                    marginTop:"5em"
                }}>
                <img src={GetImageUrl()} alt={imgUrl}></img>

            </div>
        </Box>

    );
}
function GetImageUrl() {
    //const baseUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080999/api/img/';
    const imageType = useSelector((store: Store.State) => store.imageType);
    const imageWidth = useSelector((store: Store.State) => store.imageWidth);
    const imageHeight = useSelector((store: Store.State) => store.imageHeight);
    const bgColor = useSelector((store: Store.State) => store.bgColor);
    const textColor = useSelector((store: Store.State) => store.textColor);
    const text = useSelector((store: Store.State) => store.text);
    const textSize = useSelector((store: Store.State) => store.textSize);
    let rawurl = 'http://localhost:8080/api/img/'
        .concat(imageWidth.toString())
        .concat('x')
        .concat(imageHeight.toString())
        .concat('/')
        .concat(imageType)
        .concat('/')
        .concat(bgColor)
        .concat('/')
        .concat(textColor)
        .concat('?text=')
        .concat(encodeURIComponent(text))
        .concat('&size=')
        .concat(textSize.toString())
    return rawurl.replace(/([^:]\/)\/+/g, "$1");
}

const imgUrl = 'http://localhost:8080/api/img/350x500/jpg/grey/white?text=hello%20world&size=12'


export default Image;