import { Link } from 'react-router-dom';
export default function(){
    console.log(this.props)
    return(
        <div className='router1'>
            <p>page1</p>
            <Link to="/router2">router2</Link>
            
        </div>
    )
}