import React from "react";

const ClubItem = ({whatsappLink, imageLink, clubName}) => {

    return <div className="clubItemContainer">
        <img className="clubImage" src={imageLink} alt="clubImage" />
        <a target="external" href={whatsappLink} className="clubName">{ clubName }</a>
    </div>
}

export default ClubItem;