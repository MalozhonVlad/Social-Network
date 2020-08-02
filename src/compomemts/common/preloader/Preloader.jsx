import preloader from "../../../assets/images/preloader.gif";
import React from "react";
import styles from "./preloader.module.css";

let Preloader = (props) => {
    return (
        <div>
            <img src={preloader}/>
        </div>
    );
}

export default Preloader;