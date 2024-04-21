import React, { Component } from 'react';

class CameraPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            started: false
        };
        this.videoRef = React.createRef();
    }

    componentDidMount() {
        if (this.props.start && !this.state.started) {
            // Access the user's camera stream
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(stream => {
                    // Assign the camera stream to the video element
                    this.videoRef.current.srcObject = stream;
                    this.setState({ started: true });
                })
                .catch(error => {
                    console.error('Error accessing camera:', error);
                });
        }
    }

    render() {
        return (
            <div>
                {/* Display the webcam feed */}
                <video ref={this.videoRef} autoPlay />
            </div>
        );
    }
}

export default CameraPreview;
