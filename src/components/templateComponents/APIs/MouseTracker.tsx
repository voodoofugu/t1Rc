import React, { useState, useEffect, useRef } from "react";

interface RotatingElementProps {
  children: React.ReactNode;
  intensity?: number; // Регулирует степень вращения
}

const RotatingElement: React.FC<RotatingElementProps> = ({
  children,
  intensity = 20,
}) => {
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });
  const elementRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: MouseEvent) => {
    const element = elementRef.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2; // Центрирование x
      const y = event.clientY - rect.top - rect.height / 2; // Центрирование y

      const rotateX = (y / rect.height) * intensity * -1;
      const rotateY = (x / rect.width) * intensity;

      setRotation({ rotateX, rotateY });
    }
  };

  useEffect(() => {
    const element = elementRef.current;

    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      style={{
        perspective: 1000, // Добавляет глубину 3D
        transformStyle: "preserve-3d",
      }}
    >
      <div
        style={{
          transform: `rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)`,
          transition: "transform 0.1s ease-out", // Добавляет плавность
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default RotatingElement;
