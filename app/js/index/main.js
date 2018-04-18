import '../../less/index.less';
class App extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {

    }
    render() {

        return (
            <div>
                <i className="iconfont icon-customs-clearance"></i>
                <div>{this.props.value}</div>
                <button onClick={this.props.oIn}>in</button>
                <button onClick={this.props.oUn}>un</button>
            </div>
        )
    }
}
// export default hot(module)(App)
export default App
