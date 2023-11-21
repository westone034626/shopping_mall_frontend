const continents = [
    {
        "_id": 1,
        "name": "Africa"
    },
    {
        "_id": 2,
        "name": "Europe"
    },
    {
        "_id": 3,
        "name": "Asia"
    },
    {
        "_id": 4,
        "name": "North America"
    },
    {
        "_id": 5,
        "name": "South America"
    },
    {
        "_id": 6,
        "name": "Australia"
    },
    {
        "_id": 7,
        "name": "Antarctica"
    }
];

const prices = [
    {
        "_id": 0,
        "name": "모두",
        "array": []
    },
    {
        "_id": 1,
        "name": "0 ~ 199,000원",
        "array": [0, 199000]
    },
    {
        "_id": 2,
        "name": "200,000 ~ 249,000원",
        "array": [200000, 249000]
    },
    {
        "_id": 3,
        "name": "250,000 ~ 279,000원",
        "array": [250000, 279000]
    },
    {
        "_id": 4,
        "name": "280000 ~ 299,000원",
        "array": [280000, 299000]
    },
    {
        "_id": 5,
        "name": "300,000원 이상",
        "array": [300000, 150000000]
    }
];

const filterData = {
    continents,
    prices,
};

export default filterData;
