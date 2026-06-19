import React from "react";

export default function Secondpromobannaer() {
  return (
    <div className="bg-white pt-6 pb-4">
      
      {/* FULL WIDTH CONTAINER */}
      <div className="w-full px-3 md:px-6">
        
        {/* RESPONSIVE BANNER CONTAINER */}
        <div className="w-full h-auto sm:h-[320px] md:h-[420px] lg:h-[520px] overflow-hidden">
          
          {/* Comment tag se bahar nikal diya hai taake bug na aaye */}
          <img
            src="https://ik.imagekit.io/b6iqka2sz/level%201%206%20health%20blcum.jpg"
            alt="Health Promo Banner"
            className="w-full h-full object-contain sm:object-cover"
          />
          
        </div>

      </div>
    </div>
  );
}