interface LineProps {
  className?: string;
}

const Line: React.FC<LineProps> = ({ className }) => {
  return (
    <div className={`border-t border-white opacity-50 ${className}`} />
  );
};

export default Line;