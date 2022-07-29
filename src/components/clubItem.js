import React from "react";

const ClubItem = ({whatsappLink, imageLink, clubName}) => {

    return <a target="external" href={whatsappLink} className="clubWrapper" >
        <div className="clubItemContainer">
            <img className="clubImage" src={imageLink} alt="clubImage" />
            <p className="clubName" >{ clubName }</p>
        </div>
    </a>
}

export default ClubItem;