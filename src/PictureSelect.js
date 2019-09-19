import React, { Component } from 'react';
import './index.css';
export default class PictureSelect extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state={
            value:this.props.value,
            pictures:this.props.pictures,
            s:0,
            arr:this.props.value,
            checked:false,
        }
    }
    componentDidMount(){
        const {value} = this.state;
        this.setState({
          s:value.length
        })
    }
    
    allChange=()=>{
      
        const{pictures,arr,checked}=this.state
        let arrs=[];
        pictures.forEach((item,index)=>{
            const s=index+1+""
            arrs.push(s)
        })
        if(arr.length===pictures.length){
          arrs=[]
        }
        this.setState({arr:arrs,checked:!checked,s:arrs.length})
        console.log("arrs",arrs);
    }

    on=(e)=>{
      const {arr}=this.state;
      const id=e.target.id+"";
      
    if(arr.indexOf(id)===-1){
      arr.push(id)
      console.log("asd",arr);
      this.setState({
        s:arr.length
      })
    }else{
     arr.splice( arr.indexOf(id),1)
     console.log("asdasd",arr);
     this.setState({
      s:arr.length
    })
    }
    this.setState({
      arr
    },()=>{
      const {pictures,arr}=this.state
      if(arr.length===pictures.length){
        this.setState({
          checked:true
        })
      }else{
        this.setState({
          checked:false
        })
      }
    })
    }

    render() {
     const   {pictures,arr,s}=this.state
        return (
            <div>
                <div><label><input type="checkbox" checked={this.state.checked} onChange={this.allChange.bind(this)} className="allCheck"/>已选中{s}个文件</label></div>
                {
                    pictures.map((item,index)=>{
                        let flag=false;
                        const num=index+1+""
                        if(arr.indexOf(num)!==-1){
                            flag=true
                        }
                        return(
                            <div key={"div"+index} className="imgList">
                                <input id={index+1} checked={flag} onChange={this.on.bind(this)} type="checkbox" className="check"/>
                                <img src={item.url} alt=""/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

