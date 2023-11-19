import React from 'react';

const continents = [
    { key: 1, value: 'Africa' },
    { key: 2, value: 'Europe' },
    { key: 3, value: 'Asia' },
    { key: 4, value: 'North America' },
    { key: 5, value: 'South America' },
    { key: 6, value: 'Australia' },
    { key: 7, value: 'Antarctica' },
];

const UploadProductPage = () => {
    const handleChange = () => { };
    const product = {};
    return (
        <section>
            <div className='text-center m-7'>
                <h1>예상 상품 업로드</h1>
            </div>

            <form className='mt-6'>
                <div className='mt-4'>
                    <label htmlFor='title'>이름</label>

                    <input
                        id='title'
                        name='title'
                        onChange={handleChange}
                        value={product.title}
                        className='w-full px-4 py-2 mt-2 bg-white border rounded-md'
                    />
                </div>

                <div className='mt-4'>
                    <label htmlFor='description'>설명</label>

                    <input
                        id='description'
                        name='description'
                        onChange={handleChange}
                        value={product.description}
                        className='w-full px-4 py-2 mt-2 bg-white border rounded-md'
                    />
                </div>

                <div className='mt-4'>
                    <label htmlFor='price'>가격</label>

                    <input
                        id='price'
                        name='price'
                        onChange={handleChange}
                        value={product.price}
                        type={'number'}
                        className='w-full px-4 py-2 mt-2 bg-white border rounded-md'
                    />
                </div>

                <div className='mt-4'>
                    <label htmlFor='continents'>지역</label>

                    <select
                        id='continents'
                        name='continents'
                        onChange={handleChange}
                        value={product.continents}
                        className='w-full px-4 py-2 mt-2 bg-white border rounded-md'
                    >
                        {continents.map(item => (
                            <option
                                key={item.key}
                                value={item.key}
                            >
                                {item.value}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='mt-4'>
                    <button
                        type={'submit'}
                        className='w-full px-4 py-2 text-white duration-200 transform bg-black rounded-md hover:bg-gray-700'
                    >
                        생성하기
                    </button>
                </div>
            </form>
        </section>
    );
};

export default UploadProductPage;