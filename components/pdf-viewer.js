import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import workerSrc from "../pdf-worker";
import { debounce } from '../helpers';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';


pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function PDFViewer() {

  const [width, setWidth] = useState(900);
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handleResize = debounce(() => {
    if (window.innerWidth > 600) {
      setWidth(window.innerWidth - 15)
    } else {
      setWidth(window.innerWidth)
    }
  }, 1000);


  useEffect(() => {
    // setWidth(window.innerWidth);
    if (window.innerWidth > 600) {
      setWidth(window.innerWidth - 15)
    } else {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  

  return (
    <div>
      <Document
        file="./portfolio_valdespino_online_2023.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        externalLinkTarget="_blank">
        {Array.from({ length: numPages }, (_, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            renderAnnotationLayer={true}
            renderTextLayer={true}
            renderMode="svg"
            width={width}
          />
        ))}
      </Document>
    </div>
  );
}
