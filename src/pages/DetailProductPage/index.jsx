import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axiosInstance } from '../../utils';
import ProductImage from './Sections/ProductImage';
import ProductInfo from './Sections/ProductInfo';

const DetailProductPage = () => {
    const [product, setProduct] = useState();
    const { productId: id } = useParams() || {};

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axiosInstance.get(`/products/${id}?type=single`);

                setProduct(response.data[0]);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) return null;

    return (
        <section>
            {/* 타이틀 */}
            <div className='text-center'>
                <h1 className='text-2xl p-4'>
                    {product.title}
                </h1>
            </div>

            {/* 부가정보 */}
            <div className='flex gap-4'>
                {/* 상세 이미지 */}
                <div className='w-1/2'>
                    <ProductImage product={product} />
                </div>

                {/* 상세 정보 */}
                <div className='w-1/2'>
                    <ProductInfo product={product} />
                </div>
            </div>
        </section>
    );
};

export default DetailProductPage;