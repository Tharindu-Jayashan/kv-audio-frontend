import { useState } from "react";

export default function ImageSlider(props) {

  const images = props.images
  console.log(images)
  const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className="w-full h-full flex flex-col items-center">

            <img src={selectedImage} className="w-full h-[450px] object-cover"/>

            <div className="w-full h-[150px] flex justify-center mt-[20px]">
                {
                    images.map((image, index)=>{
                        return(
                            <img key={index} src={image} className={`w-[100px] h-[100px] object-cover cursor-pointer ${image == selectedImage && "border-4 border-accent"}`} onClick={()=>{setSelectedImage(image)}}></img>
                        )
                    })
                }
            </div>

        </div>


    );
}