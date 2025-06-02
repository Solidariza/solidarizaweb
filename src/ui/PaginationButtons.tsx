interface PaginationButtonsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationButtons = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationButtonsProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="mt-8 justify-between space-x-2 text-2xl font-lato font-bold">
      {pages.map((page) => (
        <button
          key={page}
          className={`w-12 h-12 rounded-full cursor-pointer transition-all ease-in-out duration-500 group
            hover:scale-115 hover:mx-2 hover:-translate-x-1 ${
              currentPage === page
                ? `bg-blue-primary text-white`
                : `bg-white text-gray-dark`
            }`}
          onClick={() => onPageChange(page)}
        >
          <span className="group-hover:opacity-75">{page}</span>
        </button>
      ))}
      <button
        className="w-fit h-fit bg-blue-primary rounded-md p-1 cursor-pointer transition-all ease-in-out duration-500 
        group hover:scale-115 hover:mx-4"
      >
        <span className="text-white group-hover:opacity-75">
          Outras receitas
        </span>
      </button>
    </div>
  );
};

export default PaginationButtons;
