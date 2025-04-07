import Image from "next/image";
import Link from "next/link";

const WhatsappButton = () => {
  return (
    <Link
      href="https://wa.me/6281995038670"
      target="_blank"
      rel="noopener noreferrer"
      className="z-10 fixed bottom-4 right-4 text-white p-1 transition-all"
    >
      <Image
        src="/assets/icon/WA.png"
        alt="WhatsApp"
        width={50}
        height={50}
        className="w-12 h-12"
      />
    </Link>
  );
};

export default WhatsappButton;
