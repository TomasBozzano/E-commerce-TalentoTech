export const Modal = ({ children, isClosed }) => {
    return (
        <div className='fixed inset-0 bg-gray-400/30 backdrop-blur-sm flex items-center justify-center' onClick={isClosed}>
            <div className='bg-white p-6 rounded shadow-lg w-96 flex flex-col' onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-end">
                    <p className="text-right rounded cursor-pointer bg-gray-300 px-2 py-1" onClick={isClosed}>X</p>
                </div>
                {children}
            </div>
        </div>
    )
}
