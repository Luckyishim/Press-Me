import React, { useEffect, useState } from "react";

const StarPage = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        // Generate 200 stars with bigger size and random pulse
        const tempStars = Array.from({ length: 200 }, () => ({
            top: Math.random() * 100 + "vh",
            left: Math.random() * 100 + "vw",
            size: Math.random() * 3 + 2 + "px", // 2px to 5px
            opacity: Math.random() * 0.8 + 0.2, // opacity 0.2 to 1
            pulseDuration: Math.random() * 2 + 1 + "s", // 1s to 3s
        }));
        setStars(tempStars);
    }, []);

    const handlePress = () => {
        window.location.href = "/Flowers.html"; // Redirect to HTML page in public
    };

    return (
        <div className="relative w-screen h-screen bg-black overflow-hidden flex items-center justify-center">
            {stars.map((star, index) => (
                <div
                    key={index}
                    className="absolute bg-white rounded-full"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: star.size,
                        height: star.size,
                        opacity: star.opacity,
                        animation: `pulse ${star.pulseDuration} infinite alternate`,
                    }}
                ></div>
            ))}

            <button
                onClick={handlePress}
                class="relative cursor-pointer py-4 px-8 text-center font-barlow inline-flex justify-center text-base uppercase text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-white focus:outline-offset-4 overflow-hidden"
            >
                <span class="relative z-20"> Press It</span>

                <span
                    class="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"
                ></span>

                <span
                    class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"
                ></span>
                <span
                    class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"
                ></span>
                <span
                    class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"
                ></span>
                <span
                    class="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"
                ></span>
            </button>


            {/* Inline CSS for pulse animation */}
            <style>
                {`
          @keyframes pulse {
            from { opacity: 0.2; transform: scale(0.8); }
            to { opacity: 1; transform: scale(1.2); }
          }
        `}
            </style>
        </div>
    );
};

export default StarPage;
