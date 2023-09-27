import React, { useState } from 'react';

const FileUpload = ({ onFilesSelect }) => {
  const handleFileSelect = (event) => {
    const selectedFiles = Array.from(event.target.files);
    onFilesSelect(selectedFiles);
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileSelect} />
    </div>
  );
};

export default FileUpload;
