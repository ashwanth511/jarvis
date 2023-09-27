import React,{useState} from 'react'
import {styles } from  './themes/Homepage.css';
import loadinggif from './themes/animation_llex0zgw_small.gif'
const Loadingprocess = () => {
    const [isLoading, setIsLoading] = useState(true);
     
  return (
 <div>
  <div className='loadpopuppage'></div>
            {isLoading ? (
        <div className='loadingprocess' style={{height:'10px',marginTop:'10px'}}>
          <img src={loadinggif} alt='loading' />
          Process is loading...
        </div>
      ) : null}
        </div>
  )
}

export default Loadingprocess;