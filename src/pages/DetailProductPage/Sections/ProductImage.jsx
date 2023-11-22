import React from 'react';
import ImageGallery from 'react-image-gallery';
import { attachServerDomain } from '../../../utils';

const ProductImage = ({ product }) => {
    const images = product.images.map(image => ({
        thumbnail: attachServerDomain(image),
        original: attachServerDomain(image)
    }));

    return (
        <ImageGallery items={images} />
    );
};

export default ProductImage;