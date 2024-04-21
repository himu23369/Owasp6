// // frontend/src/App.js
// import React from 'react';
// import axios from 'axios';
// import ImageUpload from './ImageUpload';
// // import { useState } from "react";
// import './App.css';

// class App extends React.Component {
//     captureImage = () => {
//         axios.post('http://localhost:5000/monitor')
//             // .then(response => {
//             //     console.log(response);
//             // })
//             .catch(error => {
//                 console.error('Error capturing image:', error);
//             });
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Face Recognition Capture</h1>
//                 <button onClick={this.captureImage}>Capture Image</button>
//                 <ImageUpload/>
//             </div>
//         );
//     }
// }

// export default App;


import React from 'react';
import axios from 'axios';
import ImageUpload from './ImageUpload';
import './App.css';

class App extends React.Component {

    captureImage = () => {
        axios.post('http://localhost:5000/monitor')
            .catch(error => {
                console.error('Error capturing image:', error);
            });
    }

    render() {
        return (
            <div>
                <h1>Face Recognition Capture</h1>
                <button onClick={this.captureImage}>Capture Image</button>
                {/* <Webcam /> */}
                <ImageUpload />
            </div>
        );
    }
}

export default App;

