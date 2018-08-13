import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    
  
    handleClick(keys){
        this.props.handle(keys);
    }
    render() {
    return(
        <div>
            {this.props.item.type}
            <p className="faq_question_layout" onClick={()=>this.handleClick(this.props.index)} >
            {this.props.item.content.ques}
            </p>
        </div>
    )
}
}

export default Card;