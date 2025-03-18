interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    item: any; 
  }
  
  const Modal: React.FC<ModalProps> = ({ isOpen, onClose, item }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-md max-w-3xl w-full">
          <button className="text-black text-2xl font-bold float-right" onClick={onClose}>
            ✖️
          </button>
          <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
          <img src={item.detailedImage} alt={item.title} className="w-full rounded-md mb-4" />
          <p className="text-gray-600">{item.fullDescription}</p>
        </div>
      </div>
    );
  };
  
  export default Modal;
  