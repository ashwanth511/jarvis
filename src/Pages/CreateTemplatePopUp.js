import React, { useState } from 'react';
import starttraining from './themes/starttraining.svg';
import { Button } from '@mui/material';

function CreateTemplatePopUp({ handleClose, handleCreateTemplate }) {
  const [templateName, setTemplateName] = useState('');
  const [foldername, setFoldername] = useState('');

  const handleTemplateNameChange = (e) => {
    setTemplateName(e.target.value);
  };

  const handleTemplateDescriptionChange = (e) => {
    setFoldername(e.target.value);
  };

  const handleSubmit = () => {
    handleCreateTemplate(templateName, foldername);
    handleClose();
  };

  return (
    <div>
      <div style={{ borderRadius: '8px', border: '1px solid rgba(34, 34, 34, 0.30)', background: '#101213', backdropFilter: 'blur', marginTop: '10%', width: '40%', marginLeft: '30%' }}>
        <div>
          <h2 style={{ color: 'white' }}>Create Template</h2>
          <div> <label style={{ color: 'white' }}>Template Name</label></div>
          <input
            type="text"
            value={templateName}
            onChange={handleTemplateNameChange}
            placeholder='name of the template'
            style={{ width: '80%', padding: '24px 30px', marginBottom: '10px', borderRadius: '4px', background:'#17191A', border: '1px solid #ccc',marginLeft:'5%'}}
          />
        </div>
        <div>
          <div>
            <div> <label style={{ color: 'white',marginLeft:'20%'}}>Folder Name</label> </div>
          </div>
          <input
            type="text"
            value={foldername}
            onChange={handleTemplateDescriptionChange}
            placeholder='name of the folder'
            style={{ width: '80%', padding: '24px 30px', background:'#17191A', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' ,marginLeft:'5%'}}
          />
        </div>
        <div style={{marginLeft:'30%'}}>
          <Button onClick={handleSubmit}><img src={starttraining} alt="Start Training"/></Button>
        </div>
      </div>
    </div>
  );
}

export default CreateTemplatePopUp;