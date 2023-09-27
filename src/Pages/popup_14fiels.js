import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PopupComponent(){
    const showToastMessage = () => {
        toast.success(' Files Downloaded successfully !', {
            position: toast.POSITION.BOTTOM_LEFT
        });
    };
    const failTostMessage=()=>{
        toast.error('file extraction failed', {
            position: toast.POSITION.BOTTOM_LEFT
        });
    }
  return (
    <div>
      <button onClick={showToastMessage}>sucess Notify!</button>
      <button onClick={failTostMessage}>fail notification</button>
      <ToastContainer />
    </div>
  );
}

export default PopupComponent;
