import React from "react";
//import {Button} from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Image from "../image/image"
const Home: React.FC = () => {
    const [format, setFormat] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setFormat(event.target.value as string);
    };

    return(
    <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        style={{
            marginTop: "5em"
        }}
    >
        <div>
            <TextField
                id="outlined-number"
                label="Width"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                defaultValue={200}
            />
            <TextField
                id="outlined-number"
                label="Height"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                defaultValue={200}
            />

            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">Format</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={format}
                    label="Format"
                    onChange={handleChange}
                    defaultValue={'jpg'}
                >
                    {/*<MenuItem value="">*/}
                    {/*    <em>None</em>*/}
                    {/*</MenuItem>*/}
                    <MenuItem value={'jpg'}>JPG</MenuItem>
                    <MenuItem value={'png'}>PNG</MenuItem>
                    <MenuItem value={'gif'}>GIF</MenuItem>
                </Select>
                <FormHelperText>jpg, png, gif</FormHelperText>
            </FormControl>

            <TextField
                id="outlined-required"
                label="Background Color"
                defaultValue="Grey"
            />
            <TextField
                id="outlined-required"
                label="Text Color"
                defaultValue="Black"
            />

            <TextField
                id="filled-helperText"
                label="Text"
                defaultValue="Hello World"
                helperText="text display on the image"
                variant="filled"
            />

            <TextField
                id="filled-number"
                label="TextSize"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="filled"
                defaultValue={10}
            />
        </div>
        <div>
            <Image></Image>
        </div>
    </Box>
    );
}

export default Home;