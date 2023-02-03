import React from 'react';

const Modal = () => {
    return (
        <div>
            {/* The button to open modal */}
            {/* <label htmlFor="my-modal-3" className="btn">open modal</label> */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold"> Hey!</h3>
                    <p className="py-4"> Blogs coming soon</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;