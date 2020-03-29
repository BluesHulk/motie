import React ,{
    Component
} from 'react';

import { connect } from "react-redux";
import   './index.scss';

class FixdNav extends Component {

}

const mapStateToProps = (state, ownProps) => { //遍历所有的store获取
    return {
        bannerList:state.bannerList 
    }
}
const mapDispatchToProps = (dispatch) => { //改变store内数据的事件
    return {
      homeInit(){
            dispatch(homeInit())
      },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FixdNav);