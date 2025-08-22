import { useEffect } from "react";
import Image from "next/image";

export default function SuccessScreen({ isVisible, onClose, autoCloseTime = 2500 }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, autoCloseTime);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose, autoCloseTime]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <Image
        alt="Success Animation"
        src="/Assets/SuccessAnimation.gif"
        width={300}
        height={100}
        unoptimized
      />
    </div>
  );
}