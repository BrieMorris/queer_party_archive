// import React from "react";
// import { Link } from "react-router-dom"
// import { useState } from "react";
// import axios from "axios";

// //! I will NOT be using this page - just using the code as a reference
// //Material UI dialog box 
// import Button from '@mui/material/Button';

//     // import { ViewMyListPageButton, UploadPageButton } from '../RouteButtons/RouteButtons';




// function UploadPage() {
//     //State variable for file uploads 
//     const [files, setFiles] = useState(null)

//     //storing the url of the preview 
//     const [previewUrls, setPreviewUrls] = useState(null);
//     const [isFileUploaded, setIsFileUploaded] = useState(false);
//     // const [ progress, setProgress ] = useState({ started: false, pc: 0 }); 
//     // const [ msg, setMsg ] = useState(null); 

//     const [Description, setDescription] = useState('');
//     const [houseNumber, setHouseNumber] = useState('');
//     const [streetAddress, setStreetAddress] = useState('');
//     const [city, setCity] = useState('');
//     const [state, setState] = useState('');
//     const [zipcode, setZipCode] = useState('');
//     const [country, setCountry] = useState('');
//     const [price, setPrice] = useState(Number['']);
//     const [rating, setRating] = useState(Number['']);
//     const [individualSelection, setIndividualSelecton] = useState('');



//     const fileChangedHandler = (event) => {
//         const selectedFiles = event.target.files;
//         let newFilesArray = [...files]; // Create a copy of the current files array
//         let newPreviewUrlsArray = [...previewUrls]; // Create a copy of the current preview URLs array

//         // Loop through all selected files
//         for (let i = 0; i < selectedFiles.length; i++) {
//             newFilesArray.push(selectedFiles[i]); // Add the file to the new files array

//             // Read the file for preview
//             const reader = new FileReader();
//             reader.onload = () => {
//                 newPreviewUrlsArray.push(reader.result); // Add the data URL to the new preview URLs array
//             };
//             reader.readAsDataURL(selectedFiles[i]);
//         }

//         // Update state with the new arrays
//         setFiles(newFilesArray);
//         setPreviewUrls(newPreviewUrlsArray);
//         setIsFileUploaded(true);
//     };

//     const goToNextPreview = () => {
//         setCurrentPreviewIndex((prevIndex) => (prevIndex + 1) % files.length); // Go to the next preview, loop back to the first after the last
//     };

//     const goToPreviousPreview = () => {
//         setCurrentPreviewIndex((prevIndex) => (prevIndex - 1 + files.length) % files.length); // Go to the previous preview, loop back to the last after the first
//     };

//     const handleCancelUpload = () => {
//         //  cancel the file upload and reset state variables
//         setFile(null);
//         setPreviewUrl(null);
//         setIsFileUploaded(false);
//     };

//     const handleChangeFile = () => {
//         setFile('');
//     }


//     const handleChangeFor = (value) => {
//         console.log('event happened');
//         setDescription('');
//         setHouseNumber(Number(value));
//         setStreetAddress('');
//         setCity('');
//         setState('');
//         setZipCode(Number(value));
//         setCountry('');
//         setPrice(Number(value));
//         setRating(Number(value));
//         setIndividualSelecton('');
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log('action was dispatched')
//         dispatch({
//             type: 'SEND_POST_SERVER', payload: files, Description, houseNumber, streetAddress,
//             city, state, zipcode, country, price, rating, individualSelection
//         });
//         setFiles(null);
//         setDescription('');
//         setHouseNumber(''); 
//         setStreetAddress(''); 
//         setCity(''); 
//         setState(''); 
//         setZipCode(''); 
//         setCountry(''); 
//         setPrice('');
//         setRating('');
//         setIndividualSelecton('');
//     };




//     return (
//         <>

//             <ViewMyListPageButton />
//             <UploadPageButton />

//             <h1> Upload files </h1>

//             <div className="upload-container">
//                 {!isFileUploaded && (
//                     <>
//                         <input type="file" onChange={fileChangedHandler} multiple /> {/* Allow multiple files to be selected */}
//                     </>
//                 )}
//                 {isFileUploaded && previewUrls.length > 0 && ( // Check if there are any previews
//                     <div className="image-preview">
//                         <img src={previewUrls[currentPreviewIndex]} alt="Preview" /> {/* Show the current preview */}
//                         <button className="button-left" onClick={goToPreviousPreview}>Left</button>
//                         <button className="button-right" onClick={goToNextPreview}>Right</button>
//                         <button className="plus-button" onClick={handleChangeFile}>+</button>
//                         <button className="cancel-button" onClick={handleCancelUpload}>X</button>
//                     </div>
//                 )}
//                 {/* <button onClick={handleChangeFile}>Upload File</button> */}
//             </div>

//             <div className="formContainer"> 

//             <form>


//                 <input
//                     type="text"
//                     style={{ width: '100px', height: '30px' }}
//                     placeholder="Description"
//                     Value={Description}
//                     onChange={(event) => handleChangeFor(event.target.value)}
//                 />
//                 <input
//                     type="number"
//                     style={{ width: '100px', height: '30px' }}
//                     placeholder="House Number"
//                     value={houseNumber || ''}
//                     onChange={(event) => handleChangeFor(event.target.value)}
//                 />
//                 <input
//                     type="text"
//                     style={{ width: '100px', height: '30px' }}
//                     placeholder="Street Address"
//                     value={streetAddress || ''}
//                     onChange={(event) => handleChangeFor(event.target.value)}
//                 />
//                 <input
//                     type="text"
//                     style={{ width: '100px', height: '30px' }}
//                     placeholder="City"
//                     value={city || ''}
//                     onChange={(event) => handleChangeFor(event.target.value)}
//                 />
//                 <input
//                     type="text"
//                     style={{ width: '100px', height: '30px' }}
//                     placeholder="State"
//                     value={state || ''}
//                     onChange={(event) => handleChangeFor(event.target.value)}
//                 />
//                 <input
//                     type="number"
//                     style={{ width: '100px', height: '30px' }}
//                     placeholder="Zipcode"
//                     value={zipcode || ''}
//                     onChange={(event) => handleChangeFor(event.target.value)}
//                 />
//                 <input
//                     type="text"
//                     style={{ width: '100px', height: '30px' }}
//                     placeholder="Country"
//                     value={country || ''}
//                     onChange={(event) => handleChangeFor(event.target.value)}
//                 />

//                 <input
//                     type="number"
//                     style={{ width: '100px', height: '30px' }}
//                     placeholder="Price"
//                     value={price || ''}
//                     onChange={(event) => handleChangeFor(event.target.value)}
//                 />

//                 <input
//                     type="number"
//                     style={{ width: '100px', height: '30px' }}
//                     min={1} max={10}
//                     placeholder="rating: 1-10"
//                     value={rating || ''}
//                     onChange={(event) => handleChangeFor(event.target.value)}
//                 />
//                 <input
//                     type="text"
//                     style={{ width: '100px', height: '30px' }}
//                     placeholder="Solo or Group"
//                     value={individualSelection || ''}
//                     onChange={(event) => handleChangeFor(event.target.value)}
//                 />


//                 <Button
//                     onClick={handleSubmit}
//                     component={Link}
//                     to={"/UploadSuccessfulPage"}
//                     variant="contained"
//                     color="primary"
//                 > Upload </Button>

//             </form>

//             </div> 





//         </>
//     );
// };
// // 
// export default UploadPage; 