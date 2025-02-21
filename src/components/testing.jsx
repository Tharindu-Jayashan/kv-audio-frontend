import { useState } from "react";
import meadiaUpload from "../utils/mediaUpload";

export default function Testing() {

    const [file, setFile] = useState(null);

    function uploadFile(){
        
        meadiaUpload(file)
                        .then((url)=>{
                            console.log(url)
                        })
    }

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <input type="file" multiple onChange={(e)=>{setFile(e.target.files[0])}}/>
            <button onClick={uploadFile} className="w-[200px] h-[50px] bg-blue-500 text-white rounded-lg">Upload</button>
            
        </div>
    );
}