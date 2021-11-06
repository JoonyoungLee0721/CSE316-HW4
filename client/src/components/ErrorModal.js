/*
    This modal is shown when the user asks to delete a list. Note 
    that before this is shown a list has to be marked for deletion,
    which means its id has to be known so that we can retrieve its
    information and display its name in this modal. If the user presses
    confirm, it will be deleted.
    
    @author McKilla Gorilla
*/
function ErrorModal(err) {
    function handleCloseModal(event) {
        let modal = document.getElementById("error-modal");
        modal.classList.remove("is-visible");
    }
    return (
        <div
            className="modal"
            id="error-modal"
            data-animation="slideInOutLeft">
            <div className="modal-dialog">
                <header className="dialog-header">
                    {err}
                </header>
                <div id="container">
                    <button
                        id="dialog-button"
                        className="modal-button"
                        onClick={handleCloseModal}
                    >Ok</button>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;