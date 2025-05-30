
import { FaPhoneAlt } from 'react-icons/fa';

const FloatingCallButton = () => {
  return (
    <a
      href="tel:+998901234567"
      className="fixed bottom-6 right-6 z-50 animate-bounce"
      aria-label="Call Us"
    >
      <div className="w-16 h-16 bg-[#386d63] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
      <FaPhoneAlt size={24} color="white" />
      </div>
    </a>
  );
};

export default FloatingCallButton;
