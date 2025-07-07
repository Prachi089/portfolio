import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    // Dynamically import the Vanta.net effect to avoid Vite issues with require()
    import("vanta/src/vanta.net").then((NET) => {
      if (!vantaEffect && vantaRef.current) {
        const effect = NET.default({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          minHeight: 200,
          minWidth: 200,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xffd700,           // golden sparkles
          backgroundColor: 0x0d0d0d, // dark spacey background
          points: 15.0,
          maxDistance: 20.0,
          spacing: 18.0,
        });
        setVantaEffect(effect);
      }
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="w-full h-screen fixed top-0 left-0 -z-10"
    />
  );
};

export default VantaBackground;
