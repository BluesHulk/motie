import React, {
    Component
  } from "react";
  import { connect } from "react-redux";
  import   './index.scss';
  class Logs extends Component {
    
    render() {
        return ( 
               <div  className="header-bg">
                        <div  className="logozone">
                            <div  className="wrap1200 logo">
                                <a  href="/" className="fl">
                                    <div  className="logoImage"></div>
                                </a>
                                <div  className="searchbox">
                                    <div className="searchbox-inner">
                                            <input type="text"  placeholder="找书" className="searchinput"/> 
                                            <button  className="searchbtn"><i className="search-icon"></i></button>
                                    </div> 
                                </div>
                                <a  href="/people/bookshelf" className="mybookshelf fr">
                                    <i></i>我的书架
                                </a>
                            </div> 
                        </div>
                </div>
        
        );
    }
  
    componentDidMount(){
      
    }
  
  
  }
  
    const mapStateToProps = (state, ownProps) => { //遍历所有的store获取
        return {
            bannerList:state.bannerList 
        }
    }
    const mapDispatchToProps = (dispatch) => { //改变store内数据的事件
        return {
          
        }
    }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Logs);