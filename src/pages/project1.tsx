import React, { useState } from "react";
import "../pages/project1css.css";
import InputFileUpload from "./Fileupload";

export default function Project1(){
    const [backgroundImage, setBackgroundImage] = useState("");
    const [ec2Response, setEc2Response] = useState("");
    const [heading, setHeading] = useState("");
    const phrases = [
        "This image says...",
        "The image speaks...",
        "Interpreting the visual...",
        "From the image's perspective...",
        "Decoding the image...",
        "What the image tells us...",
        "The image suggests...",
        "Through the image's lens...",
        "Translating the visual...",
        "The visual narrative..."
    ];

// When setting the EC2 response, also set a random heading


    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) {
            console.error("No file provided.");
            return;
        }

        const reader = new FileReader();

        reader.onload = async (event) => {
            if (event.target && event.target.result) {
                const imgUrl = event.target.result;
                setBackgroundImage(imgUrl as string);
            } else {
                console.error("Failed to read the file content.");
                return;
            }
        };

        reader.onerror = (error) => {
            console.error("Error reading the file:", error);
            return;
        };

        reader.readAsDataURL(file);

        // Send the image to EC2
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('/predict', {  // Proxy will handle the URL conversion
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`Server error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            setEc2Response(data.result || "No response from EC2");
            setHeading(phrases[Math.floor(Math.random() * phrases.length)]);
        } catch (error) {
            console.error("There was an error sending the image:", error);
        }
    };



    return(
        <>
            <div className="wrapper">
                <div className="container main">
                    <div className="vertical-align">
                        <div className="row">
                            <div
                                className="col-md-6 side-imag"
                                style={{ backgroundImage: `url(${backgroundImage})` }}
                            >
                            </div>
                            <div className="col-md-6">
                                <div className="response-content">
                                    <h3>{heading}</h3>
                                    <p>{ec2Response}</p>
                                </div>
                            </div>
                        </div>


                        <div className="upload-btn-wrapper">
                            <InputFileUpload onChange={handleImageUpload} />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
