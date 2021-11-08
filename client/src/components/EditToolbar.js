import { useContext } from 'react'
import { GlobalStoreContext } from '../store'
import Button from '@mui/material/Button';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import CloseIcon from '@mui/icons-material/HighlightOff';

/*
    This toolbar is a functional React component that
    manages the undo/redo/close buttons.
    
    @author McKilla Gorilla
*/
function EditToolbar() {
    const { store } = useContext(GlobalStoreContext);

    function handleUndo() {
        store.undo();
    }
    function handleRedo() {
        store.redo();
    }
    function handleClose() {
        store.closeCurrentList();

    }
    let open = false;
    let currentList=store.currentList;
    if (currentList){
        open=true;
    }
    return (
        <div id="edit-toolbar">
            <Button 
                id='undo-button'
                onClick={handleUndo}
                variant="contained"
                disabled={!open||(!store.canUndo()||store.isItemEditActive)}>
                    <UndoIcon />
            </Button>
            <Button 
                id='redo-button'
                onClick={handleRedo}
                variant="contained"
                disabled={!open||(!store.canRedo()||store.isItemEditActive)}>
                    <RedoIcon />
            </Button>
            <Button 
                id='close-button'
                onClick={handleClose}
                variant="contained"
                disabled={!open||store.isItemEditActive}>
                    <CloseIcon />
            </Button>
        </div>
    )
}

export default EditToolbar;