import React, {
  Component
} from "react";
import { connect } from "react-redux";
// import styles from  './index.scss';
import   './index.scss';
import { HomeDataInit , RecentUpdate , RecentUpdateFree , RecentUpdateFreeVip } from '../../store/actionCreators';
import Header from '../../components/header';
import Logs from '../../components/logs';
import MinNav from '../../components/minNav';
import Container from '../../components/container';
class Home extends Component {
  
  render() {
      return ( 
        <div id="home">
           <Header></Header>
           <Logs></Logs>
           <MinNav></MinNav>
           <Container></Container>
        </div>
      
      );
  }

  componentDidMount(){
      //这是图片轮播的数据接口
      this.props.HomeDataInit();
      //最近更新的数据
      this.props.RecentUpdate();
      this.props.RecentUpdateFree();
      this.props.RecentUpdateFreeVip();
  }


}

  const mapStateToProps = (state, ownProps) => { //遍历所有的store获取
      return {
          // bannerList:state.bannerList,
          // pushList:state.pushList
      }
  }
  const mapDispatchToProps = (dispatch) => { //改变store内数据的事件
      return {
        HomeDataInit(){
              dispatch(HomeDataInit())
        },
        RecentUpdate(){
          dispatch(RecentUpdate())
        },
        RecentUpdateFree(){
          dispatch(RecentUpdateFree())
        },
        RecentUpdateFreeVip(){
          dispatch(RecentUpdateFreeVip())
        }
      }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Home);