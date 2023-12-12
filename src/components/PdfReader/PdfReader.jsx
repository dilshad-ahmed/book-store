import React from "react";
import book1 from "../../assets/pdf/pdf1.pdf";

const PdfReader = () => {
  return (
    <div className="container py-10">
      <iframe
        src={book1}
        className="w-full sm:w-[70%] mx-auto h-[500px]"
      ></iframe>{" "}
    </div>
  );
};

export default PdfReader;
