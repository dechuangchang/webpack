import '../../less/index.less';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { oUN, oIN } from '../actions/index'
class App extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {

    }
    render() {
        console.log(this.props)
        let { oIN, oUN } = this.props
        return (
            <div>
                <i className="iconfont icon-customs-clearance"></i>
                <div>{this.props.num}</div>
                <button onClick={e => oIN('oIN')}>in</button>
                <button onClick={e => oUN('oUN')}>un</button>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        num: state.counter
    }
}
// const mapDispatchToProps = (dispatch, ownProps) => {

//     return bindActionCreators({oUN, oIN},dispatch)
// }
export default connect(mapStateToProps, {oUN, oIN})(App)
