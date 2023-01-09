import "./ImageUpload.css";
import React, { useState } from "react";
import storage from "../firebase";
import axios from "../axios";

const ImageUpload = ({ username }) => {
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [caption, setCaption] = useState("");
    const [url, setUrl] = useState("");
    const handleChange = (e) => {
        if (e.target.file[0]) {
            setImage(e.target.file[0]);
        }
    };
    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (err) => {
                console.log(err);
            },
            () => {
                storage
                    .ref("image")
                    .child(image.name)
                    .getDownloadURL()
                    .then((url) => {
                        setUrl(url);
                        axios.post("/upload", {
                            caption: caption,
                            user: username,
                            image: url,
                        });
                        setProgress(0);
                        setCaption("");
                        setImage(null);
                    });
            }
        );
    };

    return (
        <div className="imageUpload">
            <progress
                className="imageUpload_progress"
                value={progress}
                max="100"
            />
            <input
                type="text"
                placeholder="Enter a caption"
                className="imageUpload_input"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
            />
            <input className="imageUpload_file" type='file' onChange={handleChange}/>
            <button className="imageUpload_button" onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default ImageUpload;
