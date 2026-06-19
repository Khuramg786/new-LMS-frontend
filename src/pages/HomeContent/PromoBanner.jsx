import React from "react";

export default function PromoBanner() {
  return (
    <div className="pt-6 pb-4">
      {/* FULL WIDTH CONTAINER */}
      <div className="w-full px-3 md:px-6">
        
        {/* BANNER CONTAINER */}
        {/* h-auto lagane se mobile par image ki apni ratio barkarar rahegi aur image kategi nahi */}
        <div className="w-full h-auto md:h-auto lg:h-[530px] overflow-hidden rounded-lg">
          <img
            src="https://ik.imagekit.io/b6iqka2sz/bussine%20develpoermtne%20kdalkdsjfa%20.jpg"
            alt="Promotion Banner"
            // mobile par object-contain taake image poori dikhe, desktop par object-cover takke fill ho
            className="w-full h-full object-contain md:object-cover"
          />
        </div>

      </div>
    </div>
  );
}