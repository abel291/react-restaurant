import { useRef } from "react"

const Images = ({ img, images }) => {
    const imgRef = useRef(null)

    const handleclick = (image) => {
        console.log(image)
        imgRef.current.src = image
    }
    return (
        <div>
            <div className="w-full flex justify-center">
                <img ref={imgRef} src={img} alt="img actual" className="max-h-[500px] max-w-full " />
            </div>

            <div className="flex justify-center items-center space-x-5 mt-5">
                {images.map((image, index) => (
                    <div
                        key={index}
                        onClick={() => handleclick(image.path)}
                        className="cursor-pointer rounded-xl border border-gray-200 p-3"
                    >
                        <img className="w-16 h-1w-16 " src={image.path} alt={image.alt} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Images