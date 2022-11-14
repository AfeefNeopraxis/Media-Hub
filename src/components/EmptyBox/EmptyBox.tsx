    import React from "react";
    import { Form } from "react-router-dom";
    import Center from "../Common/Center";
    import Button from '../Common/Button'
    import Cube from '../../images/Cube.png'

    const EmptyBox = () => {
    return (
        <Center>
        <>
        <div className="vertical-content">
        <img src={Cube} alt='empty cube'/>
        <p>Start by adding media assets<br/> Click <b>Upload assets</b> to upload your data</p>
        <Button label="upload assets"/>
        </div>
        </>
        </Center>
    );
    };

    export default EmptyBox;
