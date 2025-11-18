import ReactDOM from 'react-dom';

export const Modal = ({ children, isClosed }) => {
    return ReactDOM.createPortal(
        <div
          className='fixed inset-0 z-[9999] bg-gray-400/30 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto'
          onClick={isClosed}
        >
            <div
              className='bg-white p-6 rounded shadow-lg w-full max-w-md flex flex-col max-h-[90vh] overflow-y-auto'
              onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-end">
                    <p className="text-right rounded cursor-pointer bg-gray-300 px-2 py-1" onClick={isClosed}>X</p>
                </div>

                {children}
            </div>
        </div>,
        document.body
    );
};

