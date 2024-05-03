const About = () => {
    return (
<div className="mx-10 mb-5">

    <div className="hero min-h-screen interFont">
  <div className="hero-content flex-col lg:flex-row">

<div className="relative">

<img src="https://i.postimg.cc/KcQynwgt/person.jpg" className="w-3/4 rounded-lg shadow-2xl" />



<img src="https://i.postimg.cc/KYt64H2k/parts.jpg" className="w-2/3 rounded-lg shadow-2xl absolute right-20 top-1/2 border-8" />

</div>
    
   
    
    <div className="mt-20">
      <h3 className="text-[#FF3811] font-bold text-[20px] mb-5">About Us</h3>
      <p className="text-[#151515] font-bold text-[35px] mb-5">
      We are qualified <br />
       & of experience <br/>
        in this field
      </p>
      <p className="text-[#737373] mb-2">
      There are many variations of passages of Lorem Ipsum 
       available, but the majority have suffered alteration in some 
        form, by injected humour, or randomised words which do not  look even slightly believable. 
      </p>

      <p className="text-[#737373] mb-5">
      the majority have suffered alteration in some form, by injected 
       humour, or randomised words which do not look even slightly 
       believable. 
      </p>

      <button className="font-semibold text-[#FFFFFF] border bg-[#FF3811] p-2 rounded-lg hover:bg-green-500">Get More Info</button>
    </div>
  </div>
</div>
</div>
    );
};

export default About;