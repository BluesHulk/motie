import React, {
    Component
  } from "react";
  import { connect } from "react-redux";
  import   './index.scss';
  import {Link} from 'react-router-dom';
  class BannerC extends Component {
    
    render() {
        return ( 
        <div className="advertising">

          {this.bannerItem()}
        </div>
        
        );
    }
    bannerItem(){
        return  this.props.banner3Img.map((item,index)=>
                   <Link to={`/book/${item.id}`}  key={index} className="shelf-box three">
                       <img alt="" src={item.imgUrl} />
                   </Link>
                    
        )

    }
    componentDidMount(){
        console.log( this.props.banner3Img)
    }
  
  
  }
  
    const mapStateToProps = (state, ownProps) => { //遍历所有的store获取
        return {
            banner3Img:state.banner3Img
        }
    }
    const mapDispatchToProps = (dispatch) => { //改变store内数据的事件
        return {
          
        }
    }
  
  export default connect(mapStateToProps,mapDispatchToProps)(BannerC);