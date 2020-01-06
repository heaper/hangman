import React, {useEffect} from 'react';

function Modal({
    children
}) {

    useEffect(() => {
        document.body.classList.add('has-modal');

        return () => {
            document.body.classList.remove('has-modal');
        };
    }, []);

    return (
        <div className="modal">
            <div className="modal__backdrop"></div>
            <section className="modal__window">
                {children}
            </section>
        </div>
    );
}

export default Modal;