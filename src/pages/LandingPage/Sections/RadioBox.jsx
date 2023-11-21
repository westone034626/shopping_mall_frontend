import React from 'react';

const RadioBox = ({
    prices,
    checkedPrice,
    onFilters
}) => {
    const isAlreadyChecked = (clickedPrice) => {
        return checkedPrice.toString() === clickedPrice.toString();
    };

    const handleClick = (clickedPrice) => {
        const alreadyChecked = isAlreadyChecked(clickedPrice);

        if (!alreadyChecked) {
            onFilters(clickedPrice);
        }
    };

    return (
        <div className='p-2 mb-3 bg-gray-100 rounded-md'>
            {prices.map(price => (
                <div key={price._id}>
                    <input
                        type='radio'
                        onChange={() => handleClick(price.array)}
                        checked={isAlreadyChecked(price.array)}
                    />

                    {" "}

                    <label>{price.name}</label>
                </div>
            ))}
        </div>
    );
};

export default RadioBox;