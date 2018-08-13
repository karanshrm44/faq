import React from 'react';
import './FaqListCard.css';

const FaqListCard = (props) => {
    

    return(
        <div className="faqs_list_item">
            <ul>
                <li>{props.item}</li>
            </ul>
        </div>
    )

}

export default FaqListCard;