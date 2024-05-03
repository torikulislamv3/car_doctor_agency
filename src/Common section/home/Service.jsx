import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res=> res.json())
        .then(data=>{
            setServices(data);
        })
    },[])
    return (
        <div className="mx-10">
            <div className="text-center">
                <h1 className="text-[#FF3811] font-bold text-[25px] mb-2">
                    Service
                </h1>
                <h3 className="text-[#151515] font-bold text-[35px] mb-2">
                Our Service Area
                </h3>
                <p className="text-[#737373] mb-2">
                The majority have suffered alteration in some form, by injected humour, or randomised <br />
                 words which do not look even slightly believable. 
                </p>
            </div>
           <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-3">
           {
                        services.map(service=> <ServicesCard
                        key={service._id} service={service}>

                        </ServicesCard>)
                    }
           </div>
        </div>
    );
};

export default Service;