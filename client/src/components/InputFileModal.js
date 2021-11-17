import React, { useState } from "react";
import axios from "axios";
import "../styles/DeleteModal.css";

function InputFileModal({ setShowInputFileModal }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    const formData = new FormData();

    formData.append("userfile", selectedFile, selectedFile.name);

    axios
      .post("api/uploadfile", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="page">
      <div className="modalback">
        <div className="modalview">
          <div className="headarea ">Upload Image</div>
          <div className="checkdelete">
            <input type="file" onChange={handleFileChange} />
          </div>
          <div className="">
            <button
              className="cancel"
              onClick={() => setShowInputFileModal(false)}
            >
              CANCEL
            </button>
            <button className="delete">UPLOAD</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputFileModal;
