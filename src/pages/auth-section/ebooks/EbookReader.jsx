import React, { useState } from 'react';

import ebook from '../../../assets/html ebook.pdf'
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import ReusableNavbar from "../../../layout/navbar/auth-navs/ReusableNavbar.jsx";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const EbookReader = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const changePage = (offset) => {
        setPageNumber((prevPageNumber) => prevPageNumber + offset);
    };

    const previousPage = () => {
        changePage(-1);
    };

    const nextPage = () => {
        changePage(1);
    };
    return (

        <div>
            <ReusableNavbar/>
            <iframe src={ebook} width="100%" height="1000px" />
        </div>
        // <div>
        //     <nav>
        //         <button disabled={pageNumber <= 1} onClick={previousPage}>
        //             Previous
        //         </button>
        //         <button disabled={pageNumber >= numPages} onClick={nextPage}>
        //             Next
        //         </button>
        //     </nav>
        //
        //     <div>
        //         <Document
        //             file="path/to/your/pdf/file.pdf"
        //             onLoadSuccess={onDocumentLoadSuccess}
        //         >
        //             <Page pageNumber={pageNumber} />
        //         </Document>
        //     </div>
        //
        //     <p>
        //         Page {pageNumber} of {numPages}
        //     </p>
        // </div>
    );
};

export default EbookReader;