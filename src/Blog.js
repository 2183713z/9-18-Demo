import React, { PropTypes } from 'react'
import { getMd } from './utils/helpers'
import marked from 'marked'
import hljs from 'highlight.js'
class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      data:'',
      wait:true
    }
  }
  componentDidMount(){
    let add = this.props.params.title;
    getMd(add)
      .then( (data) => {
        // console.log(data.getJson);
        this.setState({
          data:data.getMd,
          wait:false
        })
        console.log(this.state.data);
      })
  }
  render () {
    marked.setOptions({
      highlight: function (code){
        return hljs.highlightAuto(code).value;
      }
  });

    let content=this.state.wait ? '请稍等':marked(this.state.data)
    return(
      <div>
        {/*{this.props.params.title=='a' ? '我是A页面' :
          this.props.params.title=='b' ? '我是B页面' :
          this.props.params.title=='c' ? '我是C页面' :
          this.props.params.title=='d' ? '我是D页面' :
          this.props.params.title=='e' ? '我是E页面' : '您访问的页面没有内容'
        }*/}

        <div dangerouslySetInnerHTML={{__html:content}} />
      </div>
    )
  }
}

export default Blog;
