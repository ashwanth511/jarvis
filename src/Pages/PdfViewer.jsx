
 
import React, { useState, useEffect } from 'react';
import pdfExtractor from 'pdf-extractor';

const PdfViewer = ({ pdfPath, pageNumber, x, y, width, height }) => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    pdfExtractor.extractImage(pdfPath, { x, y, width, height })
      .then(imageData => setImageData(imageData));
  }, [pdfPath, pageNumber, x, y, width, height]);

  if (!imageData) {
    return null;
  }

  return (
    <img src={imageData} />
  );
};

 

export default PdfViewer;
 
 

 
