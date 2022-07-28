import { useState } from "react";
import { storage } from "./firebase";
import "./styles.css";

function FileUpload() {
  const [progress, setProgress] = useState(0);
  const [disabled, setDisabled] = useState("disabled");

    var perc ="Upload";
  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);

  };
  function fff() {
    setDisabled("enabled")
    document.querySelector("button").disabled=false
    };
  const uploadFiles = (file) => {
    //
    const uploadTask = storage.ref(`files/${file.name}`).put(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog =(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        storage
          .ref("files")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
  };
  if (progress >0 && progress<100){
    perc="uploading"
  }
  if (progress===100){
    perc="Upload done"
  }

  return (
    <div className="container--upload">
      <form onSubmit={formHandler}>
        <input type="file" onChange={fff} className="custom-file-input" />
        <button type="submit" disabled className={disabled}>Upload</button>
      </form>
      <h3>{perc} {progress}%</h3>
      <progress value={progress} max="100"></progress>
      <br/>

    </div>
  );
}

export default FileUpload;
