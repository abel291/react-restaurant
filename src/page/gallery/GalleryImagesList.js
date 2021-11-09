import FsLightbox from "fslightbox-react"
import { useState } from "react"
const GalleryImagesList = ({ title, images }) => {
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 0,
    })
    const openLightboxOnSlide = (number) => {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number + 1,
        })
    }

    return (
        <div className="py-content">
            <div className="text-center">
                <h3 className="title-section text-red">{title}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4 mt-9 lg:mt-16">
                {images.map((image) => (
                    <div
                        key={image.id}
                        className="cursor-pointer relative rounded overflow-hidden shadow-md galleries-image-hover"
                        onClick={() => openLightboxOnSlide(image.id)}
                    >
                        <img src={image.img} alt={image.slug} className="object-cover w-full md:h-64  " />
                        <div className=" absolute inset-x-0 opacity-0 p-5 ">
                            <div className="text-white font-primary text-2xl">{title}</div>
                        </div>
                    </div>
                ))}
            </div>
            <FsLightbox
                toggler={lightboxController.toggler}
                sources={images.map((image) => image.img)}
                slide={lightboxController.slide}
            />
        </div>
    )
}

export default GalleryImagesList
