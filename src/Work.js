import React, { PropTypes } from 'react';
import Card from './components/Card';
import {getJson} from './utils/helpers'
import Bg from './image/home1.jpg';

// let cardData = [
//   {title:'第一天',desc:'第一天描述',img:Bg,url:'a'},
//   {title:'第二天',desc:'第二天描述',img:Bg,url:'b'},
//   {title:'第三天',desc:'第三天描述',img:Bg,url:'c'},
//   {title:'第四天',desc:'第四天描述',img:Bg,url:'d'},
//   {title:'第五天',desc:'第五天描述',img:Bg,url:'e'}
// ]

class Work extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      wait:true
    }
  }
  componentDidMount(){
    getJson()
      .then( (data) => {
        // console.log(data.getJson);
        this.setState({
          data:data.getJson,
          wait:false
        })
      })
  }
  render () {
    let cards=this.state.data.map( (item,i) =><Card {...item} key={i}/>)
    return(
      <div className="container-fluid">
        <div className="row" style={{marginTop:'20px'}}>
          {/*{cardData.map( (item,i) => <Card {...item} key={i} /> )}*/}
          {this.state.wait ? '请稍等' : cards}
        </div>
      </div>
    )
  }
}

export default Work;
