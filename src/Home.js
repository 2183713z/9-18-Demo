import React, { PropTypes } from 'react'

import { hashHistory } from 'react-router';

class Home extends React.Component {
  handleClick(){
    hashHistory.push('work');
  }
  render () {
    let styles={
      h1:{
        color:'#E91E63',
        textAlign:'center'
      },
      title:{
        textAlign:'center',
        fontSize:'2em',
        color:'#FF6D00'
      },
      box1:{
        width:'30%',
        height:'30%',
        float:'left',

      },
      img:{
        width:'100%',
        paddingRight:'10%'
      },
      p:{
        color:'#333',
        width:'70%',
        marginLeft:'30%',
        textIndent:'40',
      },
      body:{
        width:'100%',
        height:'700px',
        backgroundColor:'#eee'
      },
      h2:{
        textAlign:'center',
        fontSize:'8em',
        color:'#A7FFEB',
        textShadow:'-4px 4px #64ffda,-8px 8px 4px #1DE9B6,-10px 10px #00BFA5,-14px 14px #00bfa5'
      }
    }
    return(
      <div className="jumbotron" style={styles.body}>
        <h1 style={styles.h1}>欢迎光临</h1>
        <p style={styles.title}>Here is Susans Concer</p>
        <div style={styles.box1}>
          <img style={styles.img} src='https://github.com/2183713z/express-mongoose/raw/master/doc/images/small.jpg' />
        </div>
        <p style={styles.p}>我叫孔令敬，一名大四的学生，所学专业是计算机科学与技术。我的理念是：在年轻的季节我甘愿吃苦受累，
        希望通过自己富有激情、积极主动的努力实现自身价值并在工作中做出最大的贡作为初学。本人热爱学习，工作态度严谨认真，责任心强
        ,有很好的团队合作能力。小小的心中怀揣一份美好的梦想，只希望能给我一个释放、展示自己的平台。我是一个爱
        </p>
        <p><a className="btn btn-primary btn-lg" role="button" onClick={this.handleClick.bind(this)}>我的工作</a></p>
        <h2 style={styles.h2}>谢谢</h2>
      </div>
    )
  }
}

export default Home;
