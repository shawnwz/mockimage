import React from "react";
import {useSelector} from "react-redux";
import {Store} from "../../../types";
import {Button, Box, Snackbar, SnackbarOrigin} from "@mui/material";
import {CopyToClipboard} from "react-copy-to-clipboard";
import SupportMe from '../../../components/support-me/support-me'
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';

export interface State extends SnackbarOrigin {
    open: boolean;
}
const Image: React.FC = () => {
    const [state, setState] = React.useState<State>({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal, open } = state;

    const handleClick = (newState: SnackbarOrigin) => {
        setState({ open: true, ...newState });
    };


    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setState({ ...state, open: false });
    };

    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    const copied = () => {
        handleClick({
            vertical: 'top',
            horizontal: 'center',
        })
    }

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
                    onCopy={copied}
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
            <Snackbar
                open={open}
                autoHideDuration={1000}
                onClose={handleClose}
                anchorOrigin={{ vertical, horizontal }}
                key={vertical + horizontal}
                action={action}
            >
                <Alert onClose={handleClose} variant="filled" severity="success" sx={{ width: '100%' }}>
                    Copied to Clipboard!
                </Alert>
            </Snackbar>
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
    let apiUrl = process.env["API_URL"] || 'http://localhost/'
    let rawurl = apiUrl
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