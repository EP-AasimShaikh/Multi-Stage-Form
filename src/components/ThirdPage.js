import React, { useEffect, useState,useRef } from 'react';
import lookup from '../apis/lookup';
let file = [];
let token = null;
const ThirdPage = (props) => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const { handleSubmit, previousPage, nextPage, partyId, reset } = props

  const [documentHash, setdocumentHash] = useState("")

 
  const handleChange = async (event) => {
    file = event.target.files[0];
    
    console.log("file:", file);
    const base64 = await convertBase64(file);
    setdocumentHash(base64);
    window.arr.push({
      fileName: file.name,
      fileType: file.type,
      base64: base64
    });
    console.log("array",window.arr);

  }
   console.log("setdocumentHash: ", documentHash);

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      if (file.size > 200000) {
        alert("Select file less than <200kb ");
        ref1.current.value = "";
        ref2.current.value = "";
        ref3.current.value = "";

      }
      else if (file && file.type.match('image.*') || file.type === 'application/pdf') {
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
          reject(error);
        };
      }
      else {
        console.log("select an image");
        alert('Please select file of type image and pdf only');
        ref1.current.value = "";
        ref2.current.value = "";
        ref3.current.value = "";
      }

    });
  };


  const handleFileSubmit = async (event) => {
    event.preventDefault()
    
    if (file.size > 200000) {
      alert("Select file less than <200kb ");
      file = null;
    }
    
    else if (file && file.type.match('image.*') || file.type === 'application/pdf') {
      alert("File uploaded.");
    }
    else {
      alert("Please select file of type image and pdf only");
      file = [];
    }


  }

  return (
    <div className="ui  form container" style={{ position: "relative", margin: "80px", marginLeft: "50px" }}>
      <div className='ui  segment'>
      <h2 className="ui center aligned teal  header">Upload Document</h2>
        <form onSubmit={handleSubmit} >
          <h3>ID Proof</h3>
          <div className='inline fields'>
            <div className='field'>
              <input type="file" onChange={handleChange} ref={ref1}  />
              <button className='ui primary button' onClick={handleFileSubmit}>Upload</button>
            </div>
          </div>
          <hr></hr>
          <h3>Address Proof</h3>
          <div className='inline fields'>
            <div className='field'>
              <input type="file" onChange={handleChange} ref={ref2} />
              <button className='ui primary button' onClick={handleFileSubmit}>Upload</button>
            </div>
          </div>
          <hr></hr>
          <h3>Bank Cheque</h3>
          <div className='inline fields'>
            <div className='field'>
              <input type="file" onChange={handleChange} ref={ref3} />
              <button className='ui primary button' onClick={handleFileSubmit}>Upload</button>
            </div>
          </div>
          <hr></hr>
          <br></br>
          <button type="button" className="ui primary button" onClick={previousPage}>
            Previous
          </button>
          <button onClick={reset} className="ui primary  floated button" type="reset" >Reset</button>

          <button type="button" className="ui primary right floated button" onClick={nextPage}>Next</button>
        </form>


      </div>

    </div>
  );
}

export default ThirdPage;