import React, { Component } from 'react';
import ReactDom from 'react-dom';
import '../../less/index.less';
import src from '../../img/1.jpg';

class App extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        $('#jk').css({
            color:'red'
        })
    }
    render() {
        console.log(1)
        return (
            <div>
                <div id='jk'>4334</div>
                00  00 00
                <div className='jpg row'></div>
               <img style={{width:'100px'}} src={src} /> 
            </div>
        )
    }
}
// export default hot(module)(App)
export default App
