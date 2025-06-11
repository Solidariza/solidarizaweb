interface TextMainProps {
  className?: string;
  children?: React.ReactNode;
}

const TextMain = ({
  children = "As melhores receitas para todas as ocasiões",
  className,
}: TextMainProps) => {
  return (
    <h1 className={`text-4xl text-gray-dark text-nowrap ${className}`}>
      {children}
    </h1>
  );
};

export default TextMain;
