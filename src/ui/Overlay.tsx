interface OverlayProps {
  closeMenu?: () => void;
}

const Overlay = ({ closeMenu }: OverlayProps) => {
  return (
    <div
      {...(closeMenu && { onClick: closeMenu })}
      className="w-screen absolute left-full top-0 bottom-0 bg-black opacity-50 transition-opacity duration-300 
        ease-in-out"
    />
  );
};

export default Overlay;
