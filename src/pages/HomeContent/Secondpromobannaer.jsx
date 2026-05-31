import React from "react";

export default function Secondpromobannaer() {
  return (
    <div className="bg-white pt-6 pb-4">
      
      {/* FULL WIDTH CONTAINER */}
      <div className="w-full px-3 md:px-6">
        
        {/* RESPONSIVE BANNER */}
        <div className="w-full h-[250px] sm:h-[320px] md:h-[420px] lg:h-[520px] overflow-hidden">
          <img
            src="https://yselti.pk/images/6-health.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  );
}