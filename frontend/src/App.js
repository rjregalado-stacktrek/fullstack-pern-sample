import React from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [files, setFiles] = useState([]);
//   const [selectedFile, setSelectedFile] = useState(null);

//   useEffect(() => {
//     fetchFiles();
//   }, []);

//   const fetchFiles = () => {
//     axios
//       .get('http://localhost:3000/files')
//       .then((response) => {
//         setFiles(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching files:', error);
//       });
//   };

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleFileUpload = () => {
//     if (selectedFile) {
//       const formData = new FormData();
//       formData.append('file', selectedFile);

//       axios
//         .post('http://localhost:3000/upload', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         })
//         .then((response) => {
//           console.log('File uploaded successfully:', response.data);
//           setSelectedFile(null);
//           fetchFiles(); // Refresh the file list
//         })
//         .catch((error) => {
//           console.error('Error uploading file:', error);
//         });
//     }
//   };

//   return (
//   <div className="container mx-auto py-8">
//     <h1 className="text-2xl font-bold mb-4 text-blue">Uploaded Files</h1>
//     <ul>
//       {files.map((file) => (
//         <li key={file.id} className="mb-2">
//           <a
//             href={`http://localhost:3000/files/${file.id}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-500 underline"
//           >
//             {file.name}
//           </a>
//         </li>
//       ))}
//     </ul>

//     <h2 className="text-xl font-bold mt-8 mb-4 text-blue">Upload a File</h2>
//     <input type="file" onChange={handleFileChange} className="mb-4" />
//     <button
//       onClick={handleFileUpload}
//       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//     >
//       Upload
//     </button>
//   </div>
// );

// };

// export default App;


// import React, { Fragment } from 'react';
// import './App.css';

// import InputProduct from '../src/components/PostProduct';
// //import ListProducts from './components/ListProducts';
// import ConstructionSite1 from './ConstructionSite1';

// function App() {
//   return (
//   <Fragment>
//     <div className='className="container mx-auto p-4'>
//       <InputProduct/>
//       <ConstructionSite1 />
//     </div>
//   </Fragment>
    
//   );
// }

// export default App;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [products, setProducts] = useState([]);
//   const [newProduct, setNewProduct] = useState({
//     name: '',
//     price: '',
//     quantity: '',
//     image: '',
//   });

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/products');
//       setProducts(response.data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   const createProduct = async () => {
//     try {
//       await axios.post('http://localhost:5000/products', newProduct);
//       fetchProducts();
//       setNewProduct({
//         name: '',
//         price: '',
//         quantity: '',
//         image: '',
//       });
//     } catch (error) {
//       console.error('Error creating product:', error);
//     }
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setNewProduct((prevProduct) => ({
//       ...prevProduct,
//       [name]: value,
//     }));
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Product List</h1>
//       <div className="mb-4">
//         <h2 className="text-lg font-bold mb-2">Create New Product</h2>
//         <div>
//           <input
//             type="text"
//             name="name"
//             value={newProduct.name}
//             placeholder="Name"
//             onChange={handleInputChange}
//             className="border border-gray-300 px-2 py-1 rounded"
//           />
//         </div>
//         <div>
//           <input
//             type="number"
//             name="price"
//             value={newProduct.price}
//             placeholder="Price"
//             onChange={handleInputChange}
//             className="border border-gray-300 px-2 py-1 rounded"
//           />
//         </div>
//         <div>
//           <input
//             type="number"
//             name="quantity"
//             value={newProduct.quantity}
//             placeholder="Quantity"
//             onChange={handleInputChange}
//             className="border border-gray-300 px-2 py-1 rounded"
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             name="image"
//             value={newProduct.image}
//             placeholder="Image URL"
//             onChange={handleInputChange}
//             className="border border-gray-300 px-2 py-1 rounded"
//           />
//         </div>
//         <button
//           onClick={createProduct}
//           className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
//         >
//           Add Product
//         </button>
//       </div>
//       <div>
//         <h2 className="text-lg font-bold mb-2">Product List</h2>
//         <ul>
//           {products.map((product) => (
//             <li key={product.id}>
//               <h3>{product.name}</h3>
//               <p>Price: ${product.price}</p>
//               <p>Quantity: {product.quantity}</p>
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-48"
//               />
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default App;

