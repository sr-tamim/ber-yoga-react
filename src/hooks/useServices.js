import { useEffect, useState } from "react";


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