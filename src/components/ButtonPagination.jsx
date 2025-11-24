import { IoMdArrowRoundForward, IoMdArrowRoundBack } from 'react-icons/io';

export const ButtonPagination = ({ onClickPrevious, onClickNext, namePrevious, nameNext, namePosition, page, totalPages }) => {
  return (
    <>
      <button onClick={onClickPrevious} 
      className={`bg-gray-200 border border-gray-300 rounded-full p-2 flex items-center justify-center hover:opacity-80 ${page === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      disabled={page === 1}>
        <IoMdArrowRoundBack />
      </button>
      <p className="">{namePosition}</p>
      <button onClick={onClickNext}
        className={`bg-gray-200 border border-gray-300 rounded-full p-2 flex items-center justify-center hover:opacity-80 ${page === totalPages ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        disabled={page === totalPages}>
        <IoMdArrowRoundForward />
      </button>
    </>
  )
}
