import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getUser} from '../actions/index';
const mapStateToProps = (state, ownProps) => {
    console.log(state)
    return {
        data: state.user
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({getUser},dispatch)
}
@connect(mapStateToProps, mapDispatchToProps)

class User extends React.Component {
    constructor(props) {
        super(props);
       
    }
    componentWillMount(){

    }
    componentDidMount() {
       

    }
    render() {
        let {data,getUser} = this.props;
        return (
            <div>
                <p>{data.content}</p>
                <button onClick={getUser}>getuser</button>
            </div>
        )
    }
}
export default User
