import React, { Component } from 'react';
import FaqListCard from './FaqListCard';
import FaqContent from './FaqList';
import Card from './Card';
import leftArrow from '../left-arrow.png';
import CardSearch from './CardSearch';
import './Home.css';

class Home extends Component {
 constructor() {   
   
    super()
    this.state={
        value:true,
        indexValue:'',
        faqsShow:false,
        inputName:'',
        TempList:[...FaqContent],
        nofaqFound:'',
        expi:true
    }
    

 }
 

 afterhandleChange(){
    if(this.state.inputName.length !==0)
    {
    var newLists = FaqContent.map(item=>{
        return item.content;
    })

    console.log(newLists);
    
    var newList =FaqContent.filter(question=>{
      return  question.content.ques.toLowerCase().includes(this.state.inputName.toLowerCase())
    })

    

    if(newList.length>0)
    {   
        this.setState({
        
            TempList:[...newList],
            nofaqFound:''
        })
    }
    else 
    {
     this.setState({
        TempList:[],
        nofaqFound:'No Faq Found'
         
       })
     
    }
    }

    else 
    {
        this.setState({
            TempList:[...FaqContent]
        })
    }
}

 handleChange=(e)=>{
   
    this.setState({
      inputName:e.target.value,
   },()=>this.afterhandleChange())

 }


  handleProps=(keys)=>{
    console.log(keys);
    this.setState((prevState)=>{
        return{ 
        indexValue:keys,
        value:!prevState.value,
        faqsShow:!prevState.faqsShow
        }
    })
  }


  handleBackArrow=()=>{
      this.setState((prevState)=>{
          return {
              value:!prevState.value,
              faqsShow:!prevState.faqsShow
          }
      })
  }

  render() {
     let faqList ={ list:[]} // otherWise faqListContent will Show error

     var faqQuestion = this.state.TempList.map((item,index)=>{
        return <Card key={index} index={index} item={item} handle={(keys)=>this.handleProps(keys)}/>
      })

    
   

     if(this.state.faqsShow)       //At initial Stage it return Undefined faqList
     faqList = this.state.TempList.find((val,index)=>{
               return index === this.state.indexValue;
      })
    
     
     var faqListContent = faqList.list.map((item,index)=>{
         return <FaqListCard key={index} item={item} />
     })

      if(this.state.value)
      {
          var faq = (
              <div className="faq_layout_width">
                  <div className="faq_searchbar">
                    <input type="text" value={this.state.inputName} onChange={this.handleChange} 
                    placeholder="Search"/>
                 </div>
                {  this.state.nofaqFound?
                        <p className="faq_not_found">
                        {this.state.nofaqFound}
                        </p>:
                        <div className="faq_layout_question">
                            {faqQuestion}
                        </div>
                 }
                
                
              </div>
          )
      }
      else 
      {   
        faq = (
          <div>
            <div className="faqs_header">
               <img onClick={this.handleBackArrow} src={leftArrow} alt="backArrow" /> 
            </div> 
               <div className="faqs_layout_width">
                    <div className="faqs_layout_title"> 
                        <h3>{faqList.type} :</h3>
                    </div>
                    <b>{faqList.content.ques}</b> 
                    <div className="faqs_content_list">
                        {faqListContent}
                    </div>
               </div> 
          </div>
             )

      }

      return(
          <div className="faq_layout">
               {faq}
                
          </div>
            )
  }

}

export default Home;