import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./style.scss";

function ProductImage({ product }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (product) {
      let newImages = [];
      console.log("chay de");
      product.map((item) => {
        newImages.push({
          original: item.url,
          thumbnail: item.url,
        });
      });
      setImages(newImages);
    }
  }, [product]);

  return (
    <div>
      <ImageGallery items={images} infinite showPlayButton={false} useBrowserFullscreen={false} />
    </div>
  );
}

export default ProductImage;
