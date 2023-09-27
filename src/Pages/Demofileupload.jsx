import React, { useState } from 'react';
import axios from 'axios';

const FileUploadComponent = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [uploadInProgress, setUploadInProgress] = useState(false);
  const uploadFiles = async () => {

    if (uploadInProgress) {
      alert("upload is in Progress")
      return;
    }

    setUploadInProgress(true); 
    const formData = new FormData();
    selectedFiles.forEach(file => {
      formData.append('files', file);
    });
    formData.append('template', selectedTemplate);

    try {
      const response = await axios.post('http://localhost:8000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      // Handle success or update UI
    } catch (error) {
      console.error(error);
      // Handle error or update UI
    }
    finally{
      setUploadInProgress(false  );
    }
  };

  const handleFileChange = event => {
    const files = event.target.files;
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleTemplateChange = event => {
    const template = event.target.files[0];
    setSelectedTemplate(template);
  };

  const handleSubmit = event => {
    event.preventDefault();
    uploadFiles();
  };

  return (
    <div>
      <h1>File Upload Component</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fileInput">Select Files:</label>
          <input
            type="file"
            id="fileInput"
            name="files"
            multiple
            onChange={handleFileChange}
          />
        </div>
        <div>
          <label htmlFor="templateInput">Select Template:</label>
          <input
            type="file"
            id="templateInput"
            name="template"
            onChange={handleTemplateChange}
          />
        </div>
        <button type="submit">Upload Files</button>
      </form>
    </div>
  );
};

export default FileUploadComponent;
