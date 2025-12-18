class DiagramClientSideEvents   {
    constructor (){
    };
     enableToolbarItems(selectedItems) {
        var toolbarContainer = document.getElementsByClassName('db-toolbar-container')[0];
        var toolbarClassName = 'db-toolbar-container';
        if (toolbarContainer.classList.contains('db-undo')) {
            toolbarClassName += ' db-undo';
        }
        if (toolbarContainer.classList.contains('db-redo')) {
            toolbarClassName += ' db-redo';
        }
        toolbarContainer.className = toolbarClassName;
        if (selectedItems.length === 1) {
            toolbarContainer.className = toolbarContainer.className + ' db-select';
            if (selectedItems[0] instanceof ej.diagrams.Node) {
                if (selectedItems[0].children) {
                    if (selectedItems[0].children.length > 2) {
                        toolbarContainer.className = toolbarContainer.className + ' db-select db-double db-multiple db-node db-group';
                    }
                    else {
                        toolbarContainer.className = toolbarContainer.className + ' db-select db-double db-node db-group';
                    }
                }
                else {
                    toolbarContainer.className = toolbarContainer.className + ' db-select db-node';
                }
            }
        }
        else if (selectedItems.length === 2) {
            toolbarContainer.className = toolbarContainer.className + ' db-select db-double';
        }
        else if (selectedItems.length > 2) {
            toolbarContainer.className = toolbarContainer.className + ' db-select db-double db-multiple';
        }
        if (selectedItems.length > 1) {
            var isNodeExist = false;
            for (var i = 0; i < selectedItems.length; i++) {
                if (selectedItems[i] instanceof ej.diagrams.Node) {
                    toolbarContainer.className = toolbarContainer.className + ' db-select db-node';
                    break;
                }
            }
        }
    };
    
   selectionChange  (args)
    {
        var diagrams = diagram.ej2_instances[0];
        var toolbarObj = document.getElementById('toolbarObj').ej2_instances[0];
        {
            if(args.state === 'Changed'){
                var selectedItems = diagrams.selectedItems.nodes;
                selectedItems = selectedItems.concat(diagrams.selectedItems.connectors);
                this.enableToolbarItems(selectedItems);
                if(args.newValue.length>0 && args.newValue[0] instanceof ej.diagrams.Connector){
                    diagrams.selectedItems = { constraints: ej.diagrams.SelectorConstraints.All };
                    toolbarObj.hideItem(5,true);
                }
                else{
                    if(diagrams.selectedItems.nodes.length > 0 &&
                        diagrams.selectedItems.nodes[0].id.indexOf('Clock') != -1)
                    {
                        toolbarObj.hideItem(5,false);
                    }
                    else
                    {
                        toolbarObj.hideItem(5,true);
                    }
                    diagrams.selectedItems = { constraints: ej.diagrams.SelectorConstraints.All & ~ej.diagrams.SelectorConstraints.Rotate & ~ej.diagrams.SelectorConstraints.ResizeAll };
                }
            }
        }
    };
    historyChange (args)
    {
        var toolbarContainer = document.getElementsByClassName('db-toolbar-container')[0];
        var diagrams = diagram.ej2_instances[0];
        toolbarContainer.classList.remove('db-undo');
        toolbarContainer.classList.remove('db-redo');
        if (diagrams.historyManager.undoStack.length > 0) {
            toolbarContainer.classList.add('db-undo');
        }
        if (diagrams.historyManager.redoStack.length > 0) {
            toolbarContainer.classList.add('db-redo');
        }
    };
    
};
module.exports = DiagramClientSideEvents;
