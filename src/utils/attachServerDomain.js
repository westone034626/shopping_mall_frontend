const attachServerDomain = (endpoint) => {
    return `${import.meta.env.VITE_SERVER_URL}/${endpoint}`;
};

export default attachServerDomain;