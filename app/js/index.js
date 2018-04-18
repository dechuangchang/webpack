import App from './index/main.js';
import '../less/index.less';
import { createStore } from 'redux';
import reducer from './reducers/counter';
const store = createStore(reducer);

import {oUN,oIN} from './actions/index'

const render = () => {
    ReactDom.render(
        <App
            value={store.getState()}
            oUn={()=>{
                store.dispatch(oUN())
            }}
            oIn={()=>{
                store.dispatch(oIN())
            }}
        />,
        document.getElementById('root')
    )
}
render()
store.subscribe(render)
