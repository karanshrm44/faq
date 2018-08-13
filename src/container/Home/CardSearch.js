import React from 'react';

const CardSearch = (props)=> {

    return(
        <div>
    
        <p className="faq_question_layout" onClick={()=>this.handleClick(this.props.index)} >
        {props.item.ques}
        </p>
    </div>
    )
}

export default CardSearch;