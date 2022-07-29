import React from "react";
import { useParams } from "react-router-dom";

const LinksPage = () => {

    const { link } = useParams();

    return <div className="linkPage">
        <p id="link" >{link}</p>
    </div>

}

export default LinksPage