import { useEffect, useState } from "react";

// custom hook for fetching services data from json file
const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./servicesData.json')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])
    return services;
};

export default useServices;