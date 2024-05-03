import { FaArrowRight } from "react-icons/fa";

const ServicesCard = ({service}) => {
    const {title, img, price} = service;
    return (
       <div className="mx-0 mx-auto">
         <div className="p-5 w-96 shadow-xl rounded-lg border">
        <figure><img className="rounded-lg mb-2" src={img} alt="loading.." /></figure>
        <div>
          <h2 className="mb-2 text-[#444444] font-bold text-[22px]">{title}</h2>
         <div className="flex justify-between">
         <p className="font-semibold text-[20px] text-[#FF3811]">Price : ${price}</p>

         <FaArrowRight className="text-[#FF3811]" />
         </div>
        </div>
      </div>
       </div>
    );
};

export default ServicesCard;