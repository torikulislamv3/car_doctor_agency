const Banner = () => {
    return (
        <div className="mx-10">
            <div className="carousel w-full rounded-md h-[450px] ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.postimg.cc/4xg9vnMF/5.jpg" className="w-full h-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 z-10">
      <a href="#slide4" className=" hover:bg-orange-800 btn btn-circle mr-5">❮</a> 
      <a href="#slide2" className="btn btn-circle hover:bg-orange-800">❯</a>

      
    </div>
    <div className="absolute pl-12 pt-10  w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
     <p className="text-[50px] text-[#FFFFFF] font-bold mb-4 items-center">
     Affordable <br />
      Price For Car <br />
       Servicing
     </p>
     <p className="text-[#FFFFFF]">
     There are many variations of passages of  available, but <br />
      the majority have suffered alteration in some form
     </p>
     <div className="mt-3">
      <button className="bg-[#FF3811] p-2 rounded-lg text-[16px] font-semibold text-[#FFFFFF] hover:bg-slate-900 mr-4">Discover More</button>
      <button className="bg-transparent border p-2 rounded-lg text-[16px] font-semibold text-[#FFFFFF] hover:bg-purple-900">Latest Project</button>
     </div>
    </div>

  </div> 


  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.postimg.cc/DZ9Z2M3Y/1.jpg" className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 z-10">
      <a href="#slide1" className="btn btn-circle hover:bg-orange-800 mr-5">❮</a> 
      <a href="#slide3" className="btn btn-circle hover:bg-orange-800">❯</a>
    </div>
    <div className="absolute pl-12 pt-10  w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
     <p className="text-[50px] text-[#FFFFFF] font-bold mb-4 items-center">
     Affordable <br />
      Price For Car <br />
       Servicing
     </p>
     <p className="text-[#FFFFFF]">
     There are many variations of passages of  available, but <br />
      the majority have suffered alteration in some form
     </p>
     <div className="mt-3">
      <button className="bg-[#FF3811] p-2 rounded-lg text-[16px] font-semibold text-[#FFFFFF] hover:bg-slate-900 mr-4">Discover More</button>
      <button className="bg-transparent border p-2 rounded-lg text-[16px] font-semibold text-[#FFFFFF] hover:bg-purple-900">Latest Project</button>
     </div>
    </div>
    
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.postimg.cc/ZYNnf4rk/2.jpg" className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 z-10">
      <a href="#slide2" className="btn btn-circle hover:bg-orange-800 mr-5">❮</a> 
      <a href="#slide4" className="btn btn-circle hover:bg-orange-800">❯</a>
    </div>
    <div className="absolute pl-12 pt-10  w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
     <p className="text-[50px] text-[#FFFFFF] font-bold mb-4 items-center">
     Affordable <br />
      Price For Car <br />
       Servicing
     </p>
     <p className="text-[#FFFFFF]">
     There are many variations of passages of  available, but <br />
      the majority have suffered alteration in some form
     </p>
     <div className="mt-3">
      <button className="bg-[#FF3811] p-2 rounded-lg text-[16px] font-semibold text-[#FFFFFF] hover:bg-slate-900 mr-4">Discover More</button>
      <button className="bg-transparent border p-2 rounded-lg text-[16px] font-semibold text-[#FFFFFF] hover:bg-purple-900">Latest Project</button>
     </div>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.postimg.cc/XYsYZJ05/4.jpg" className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 z-10">
      <a href="#slide3" className="btn btn-circle hover:bg-orange-800 mr-5">❮</a> 
      <a href="#slide1" className="btn btn-circle hover:bg-orange-800">❯</a>
    </div>
    <div className="absolute pl-12 pt-10  w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
     <p className="text-[50px] text-[#FFFFFF] font-bold mb-4 items-center">
     Affordable <br />
      Price For Car <br />
       Servicing
     </p>
     <p className="text-[#FFFFFF]">
     There are many variations of passages of  available, but <br />
      the majority have suffered alteration in some form
     </p>
     <div className="mt-3">
      <button className="bg-[#FF3811] p-2 rounded-lg text-[16px] font-semibold text-[#FFFFFF] hover:bg-slate-900 mr-4">Discover More</button>
      <button className="bg-transparent border p-2 rounded-lg text-[16px] font-semibold text-[#FFFFFF] hover:bg-purple-900">Latest Project</button>
     </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;