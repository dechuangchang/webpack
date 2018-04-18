import App from './index/main.js';
import '../less/index.less';
import { createStore } from 'redux';
import reducer from './reducers/counter';
const store = createStore(reducer);
store.subscribe(() => { console.log('state', store.getState()) });

const render = () => {
    ReactDom.render(
        <App
            value={store.getState()}
            oUn={()=>{
                store.dispatch({
                    type: 'UN'
                })
            }}
            oIn={()=>{
                store.dispatch({
                    type: 'IN'
                })
            }}
        />,
        document.getElementById('root')
    )
}
render()
store.subscribe(render)
