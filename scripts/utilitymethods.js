var DiagramClientSideEvent = require("./events.js")
var  DiagramClientSideEvents = new DiagramClientSideEvent();

var PageSettings = (function () {
    function PageSettings() {
      this.pageWidth = 1056;
      this.pageHeight = 816;
      this.backgroundColor = '#ffffff';
      this.isPortrait = false;
      this.isLandscape = true;
      this.paperSize = 'Letter';
      this.pageBreaks = false;
    }
    return PageSettings;
  }());
  
var pageSettings = new PageSettings();

var PrintSettings = (function () {
    function PrintSettings() {
        this.m_region = 'PageSettings';
        this.m_pageWidth = 0;
        this.m_pageHeight = 0;
        this.m_isPortrait = true;
        this.m_isLandscape = false;
        this.m_multiplePage = false;
        this.m_paperSize = 'Letter';
    }
    Object.defineProperty(PrintSettings.prototype, "region", {
        get: function () {
            return this.m_region;
        },
        set: function (region) {
            this.m_region = region;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrintSettings.prototype, "pageWidth", {
        get: function () {
            return this.m_pageWidth;
        },
        set: function (pageWidth) {
            this.m_pageWidth = pageWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrintSettings.prototype, "pageHeight", {
        get: function () {
            return this.m_pageHeight;
        },
        set: function (pageHeight) {
            this.m_pageHeight = pageHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrintSettings.prototype, "isPortrait", {
        get: function () {
            return this.m_isPortrait;
        },
        set: function (isPortrait) {
            this.m_isPortrait = isPortrait;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrintSettings.prototype, "isLandscape", {
        get: function () {
            return this.m_isLandscape;
        },
        set: function (isLandscape) {
            this.m_isLandscape = isLandscape;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrintSettings.prototype, "multiplePage", {
        get: function () {
            return this.m_multiplePage;
        },
        set: function (multiplePage) {
            this.m_multiplePage = multiplePage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrintSettings.prototype, "paperSize", {
        get: function () {
            return this.m_paperSize;
        },
        set: function (paperSize) {
            this.m_paperSize = paperSize;
            document.getElementById('printCustomSize').style.display = 'none';
            document.getElementById('printOrientation').style.display = 'none';
            if (paperSize === 'Custom') {
                document.getElementById('printCustomSize').style.display = '';
            }
            else {
                document.getElementById('printOrientation').style.display = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    return PrintSettings;
}());

var printSettings = new PrintSettings();

class UtilityMethods {
    constructor () {
    };
    PaperSize   () {
        function PaperSize() {
        }
        return PaperSize;
    };
    toolbarClick (args)
    {
        let item = args.item.tooltipText;
        switch(item)
        {
            case 'Zoom In(Ctrl + +)':
                diagram.ej2_instances[0].zoomTo({ type: 'ZoomIn', zoomFactor: 0.2 });
                zoomCurrentValue.content = diagram.ej2_instances[0].scrollSettings.currentZoom = (diagram.ej2_instances[0].scrollSettings.currentZoom * 100).toFixed() + '%';
                break;
            case 'Zoom Out(Ctrl + -)':
                diagram.ej2_instances[0].zoomTo({ type: 'ZoomOut', zoomFactor: 0.2 });
                zoomCurrentValue.content = diagram.ej2_instances[0].scrollSettings.currentZoom = (diagram.ej2_instances[0].scrollSettings.currentZoom * 100).toFixed() + '%';
                break;
            case 'Lock':
                lockObject();
                break;
            case 'Cut':
                diagram.ej2_instances[0].cut();
                break;
            case 'Copy':
                diagram.ej2_instances[0].copy();
                break;
            case 'Paste':
                diagram.ej2_instances[0].paste();
                break;
            case'Delete':
                 diagram.ej2_instances[0].remove();
                break;
            case 'Select Tool':
                diagram.ej2_instances[0].clearSelection();
                diagram.ej2_instances[0].tool = ej.diagrams.DiagramTools.Default;
                break;
            case 'Text Tool':
                diagram.ej2_instances[0].selectedItems.userHandles = [];
                diagram.ej2_instances[0].drawingObject = { shape: { type: 'Text' }, };
                diagram.ej2_instances[0].tool = ej.diagrams.DiagramTools;
                break;
            case 'Pan Tool':
                diagram.ej2_instances[0].clearSelection()
                diagram.ej2_instances[0].tool = ej.diagrams.DiagramTools.ZoomPan;
                break;
            case 'Rotate Clockwise':
                diagram.ej2_instances[0].rotate(diagram.ej2_instances[0].selectedItems,90);
                break;
            case 'Rotate Counter-clockwise':
                diagram.ej2_instances[0].rotate(diagram.ej2_instances[0].selectedItems,-90);
                break;
            case 'Bring To Front':
                diagram.ej2_instances[0].bringToFront();
                break;
            case 'Send To Back':
                diagram.ej2_instances[0].sendToBack();
                break;
            case 'Bring Forward':
                diagram.ej2_instances[0].moveForward();
                break;
            case 'Send Backward':
                diagram.ej2_instances[0].sendBackward();
                break;
            case 'Align Left':
            case 'Align Right':
            case 'Align Top':
            case 'Align Bottom':
            case 'Align Middle':
            case 'Align Center':
                var alignType = item.replace('Align', '');
                var alignType1 = alignType.charAt(0).toUpperCase() + alignType.slice(1);
                diagram.ej2_instances[0].align(alignType1.trim());
                break;
            case 'Distribute Objects Horizontally':
                diagram.ej2_instances[0].distribute('RightToLeft');
                break;
            case 'Distribute Objects Vertically':
                diagram.ej2_instances[0].distribute('BottomToTop');
                break;
             case 'Group':
                diagram.ej2_instances[0].group();
                args.item.prefixIcon = 'sf-icon-ungroup';
                args.item.tooltipText = 'UnGroup';
                break;
            case 'UnGroup':
                diagram.ej2_instances[0].unGroup();
                args.item.prefixIcon = 'sf-icon-group';
                args.item.tooltipText = 'Group';
                break;
            case 'Fill Color':
                var objColor = diagram.ej2_instances[0].selectedItems.nodes[0]? 'nodeFillColor':'lineColor'
                this.showColorPicker(objColor,'tb-item-stroke');
                break;
            case 'Font Color':
                this.showColorPicker('textColor','tb-item-stroke');
                break;
            case 'New Diagram':
                diagram.ej2_instances[0].clear();
                DiagramClientSideEvents.historyChange();
                break;
            case 'Export Diagram':
                exportDialog.ej2_instances[0].show();
                break;
            case 'Save Diagram':
                this.download(diagram.ej2_instances[0].saveDiagram());
                break;
            case 'Open Diagram':
                document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click();
                break;
            case 'Flip Vertical':
                flipObjects(item);
                break;
            case 'Flip Horizontal':
                flipObjects(item);
                break;
        }
        if (item === 'Select Tool' || item === 'Pan Tool' || item === 'Text Tool' || item === 'Draw Connectors') {
            if (args.item.cssClass.indexOf('tb-item-selected') === -1) {
                this.removeSelectedToolbarItem();
                args.item.cssClass += ' tb-item-selected';
            }
        }
        diagram.ej2_instances[0].dataBind();
     };
    menuClick (args)
    {
        var buttonElement = document.getElementsByClassName('e-btn-hover')[0];
        if (buttonElement) {
            buttonElement.classList.remove('e-btn-hover');
        }
        var option = args.item.text;
        switch(option)
        {
            case 'New':
                diagram.ej2_instances[0].clear();
                DiagramClientSideEvents.historyChange();
                break;
            case 'Save':
                this.download(diagram.ej2_instances[0].saveDiagram());
                break;
            case 'Print':
                this.btnPrintClick();
                break;
            case 'Export':
                exportDialog.ej2_instances[0].show();
                break;
            case 'Open':
                document.getElementsByClassName('e-file-select-wrap')[0].querySelector('button').click();
                break;
            case 'Undo':
                diagram.ej2_instances[0].undo();
                break;
            case 'Redo':
                diagram.ej2_instances[0].redo();
                break;
            case 'Cut':
                diagram.ej2_instances[0].cut();
                break;
            case 'Copy':
                diagram.ej2_instances[0].copy();
                break;
            case 'Paste':
                diagram.ej2_instances[0].paste();
                break;
            case 'Rotate Right 90':
                diagram.ej2_instances[0].rotate(diagram.ej2_instances[0].selectedItems,90);
                break;
            case 'Rotate Left 90':
                diagram.ej2_instances[0].rotate(diagram.ej2_instances[0].selectedItems,-90);
                break;
            case 'Flip Vertical':
                flipObjects(option);
                break;
            case 'Flip Horizontal':
                flipObjects(option);
                break;
            case 'Delete':
                diagram.ej2_instances[0].remove();
            case 'Send To Back':
                diagram.ej2_instances[0].sendToBack();
                break;
            case 'Bring To Front':
                diagram.ej2_instances[0].bringToFront();
                break;
            case 'Send Backward':
                diagram.ej2_instances[0].sendBackward();
                break;
            case 'Bring Forward':
                diagram.ej2_instances[0].moveForward();
                break;
            case 'Landscape':
                args.item.parentObj.items[1].iconCss = '';
                args.item.iconCss = 'sf-icon-check-tick';
                diagram.ej2_instances[0].pageSettings.orientation = 'Landscape';
                break;
            case 'Portrait':
                args.item.parentObj.items[0].iconCss = '';
                args.item.iconCss = 'sf-icon-check-tick';
                diagram.ej2_instances[0].pageSettings.orientation = 'Portrait';
                break;
            case 'Letter (8.5 in x 11 in)':
            case 'Legal (8.5 in x 14 in)':
            case 'A3 (297 mm x 420 mm)':
            case 'A4 (210 mm x 297 mm)':
            case 'A5 (148 mm x 210 mm)':
            case 'A6 (105 mm x 148 mm)':
            case 'Tabloid (279 mm x 432 mm)':
                this.paperListChange(args)
                this.updateSelection(args.item)
                break;
            case 'Select All':
                diagram.ej2_instances[0].clearSelection();
                diagram.ej2_instances[0].selectAll();
                break;
            case 'Select All Nodes':
                diagram.ej2_instances[0].clearSelection();
                diagram.ej2_instances[0].select(diagram.ej2_instances[0].nodes);
                break;
            case 'Select All Connectors':
                diagram.ej2_instances[0].clearSelection();
                diagram.ej2_instances[0].select(diagram.ej2_instances[0].connectors);
                break;
            case 'Deselect All':
                diagram.ej2_instances[0].clearSelection();
                break;
            case 'Selection Tool':
                diagram.ej2_instances[0].tool = ej.diagrams.DiagramTools.Default;
                this.removeSelectedToolbarItem();
                break;
            case 'Pan Tool':
                diagram.ej2_instances[0].clearSelection();
                diagram.ej2_instances[0].tool = ej.diagrams.DiagramTools.ZoomPan;
                this.removeSelectedToolbarItem();
                break;
            case 'Orthogonal':
                diagram.ej2_instances[0].clearSelection();
                diagram.ej2_instances[0].drawingObject.sourceID = '';
                diagram.ej2_instances[0].tool = ej.diagrams.DiagramTools.ContinuousDraw;
                diagram.ej2_instances[0].selectedItems.userHandles = [];
                diagram.ej2_instances[0].drawingObject.type = 'Orthogonal';
                this.removeSelectedToolbarItem();
                break;
            case 'Straight':
                diagram.ej2_instances[0].clearSelection();
                diagram.ej2_instances[0].drawingObject.sourceID = '';
                diagram.ej2_instances[0].tool = ej.diagrams.DiagramTools.ContinuousDraw;
                diagram.ej2_instances[0].selectedItems.userHandles = [];
                diagram.ej2_instances[0].drawingObject.type = 'Straight';
                this.removeSelectedToolbarItem();
                break;
            case 'Bezier':
                diagram.ej2_instances[0].clearSelection();
                diagram.ej2_instances[0].drawingObject.sourceID = '';
                diagram.ej2_instances[0].tool = ej.diagrams.DiagramTools.ContinuousDraw;
                diagram.ej2_instances[0].selectedItems.userHandles = [];
                diagram.ej2_instances[0].drawingObject.type = 'Bezier';
                this.removeSelectedToolbarItem();
                break;
            case 'Show Lines':
                diagram.ej2_instances[0].snapSettings.constraints = diagram.ej2_instances[0].snapSettings.constraints ^ ej.diagrams.SnapConstraints.ShowLines;
                args.item.iconCss = args.item.iconCss ? '' : 'sf-icon-check-tick';
                break;
            case 'Snap To Grid':
                diagram.ej2_instances[0].snapSettings.constraints = diagram.ej2_instances[0].snapSettings.constraints ^ ej.diagrams.SnapConstraints.SnapToLines;
                args.item.iconCss = args.item.iconCss ? '' : 'sf-icon-check-tick';
                break;
            case 'Snap To Object':
                diagram.ej2_instances[0].snapSettings.constraints = diagram.ej2_instances[0].snapSettings.constraints ^ ej.diagrams.SnapConstraints.SnapToObject;
                args.item.iconCss = args.item.iconCss ? '' : 'sf-icon-check-tick';
                break;
            case 'Show Ruler':
                args.item.iconCss = args.item.iconCss ? '' : 'sf-icon-check-tick';
                diagram.ej2_instances[0].rulerSettings.showRulers = !diagram.ej2_instances[0].rulerSettings.showRulers;
                break;
            case 'Show Page Breaks':
                args.item.iconCss = args.item.iconCss ? '' : 'sf-icon-check-tick';
                diagram.ej2_instances[0].pageSettings.showPageBreaks = !diagram.ej2_instances[0].pageSettings.showPageBreaks;
                break;
            case 'Show Multiple page':
                args.item.iconCss = args.item.iconCss ? '' : 'sf-icon-check-tick';
                diagram.ej2_instances[0].pageSettings.multiplePage = ! diagram.ej2_instances[0].pageSettings.multiplePage;
                break;
            case 'Fit To Width':
                diagram.ej2_instances[0].fitToPage({mode:'Width'});
                break;
            case 'Fit To Page':
                diagram.ej2_instances[0].fitToPage({ mode: 'Page', region: 'Content'});
                break;
        }
        if (option === 'Pan Tool') {
            var toolbarObj = document.getElementById('toolbarObj').ej2_instances[0];
            if (toolbarObj.items[3].cssClass.indexOf('tb-item-selected') === -1) {
                toolbarObj.items[3].cssClass += ' tb-item-selected';
            }
        }
       else if (option === 'Selection Tool') {
        var toolbarObj = document.getElementById('toolbarObj').ej2_instances[0];
            if (toolbarObj.items[4].cssClass.indexOf('tb-item-selected') === -1) {
                toolbarObj.items[4].cssClass += ' tb-item-selected';
            }
        }
        
        diagram.ej2_instances[0].dataBind();
    };
   onClickDisable (args)
    {
        if(args === false)
        {
            var toolbarObj = document.getElementById('toolbarObj').ej2_instances[0];
            for(var i=8;i<29;i++)
            {
                if(toolbarObj.items[i].type !=='Separator'){
                    if(i<=17)
                    {
                    toolbarObj.items[i].template = '<div></div>';
                    }
                    else if(i>17){
                    toolbarObj.items[i].template = '';
                    }
                }
            }
        }
        else{
            var toolbarObj = document.getElementById('toolbarObj').ej2_instances[0];
            for(var i=8;i<29;i++)
            {
                if(toolbarObj.items[i].type !=='Separator'){
                toolbarObj.items[i].template = '<div></div>';
                }
               
            }
        }
    };
    download (data)
    {
        if (window.navigator.msSaveBlob) {
            var blob = new Blob([data], { type: 'data:text/json;charset=utf-8,' });
            window.navigator.msSaveOrOpenBlob(blob, 'Diagram.json');
        }
        else {
            var dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(data);
            var a = document.createElement('a');
            a.href = dataStr;
            a.download = document.getElementById('diagramName').innerHTML+'.json';
            document.body.appendChild(a);
            a.click();
            a.remove();
        }
    };
    updateSelection (item)
    {
        for(var i=0;i<item.parentObj.items.length;i++)
        {
            if(item.text === item.parentObj.items[i].text){
                item.parentObj.items[i].iconCss = 'sf-icon-check-tick';
            }
            else{
                item.parentObj.items[i].iconCss = '';
            }
        }
    };
    onConnectorSelect(args) {
        diagram.ej2_instances[0].clearSelection();
        diagram.ej2_instances[0].drawingObject.sourceID = '';
        diagram.ej2_instances[0].drawingObject.type = args.item.text;
        diagram.ej2_instances[0].drawingObject.shape = { type: 'Bpmn', sequence: 'Normal' };
        diagram.ej2_instances[0].tool = ej.diagrams.DiagramTools.ContinuousDraw;
        diagram.ej2_instances[0].selectedItems.userHandles = [];
        diagram.ej2_instances[0].dataBind();
        this.removeSelectedToolbarItem();
        document.getElementById('conTypeBtn').classList.add('tb-item-selected');
    }

    onOrderSelect (args)
    {
        let text = args.item.text;
        switch(text)
        {
            case'Bring Forward':
                diagram.ej2_instances[0].moveForward();
                break;
            case'Bring To Front':
                diagram.ej2_instances[0].bringToFront();
                break;
            case'Send Backward':
                diagram.ej2_instances[0].sendBackward();
                break;
            case'Send To Back':
                diagram.ej2_instances[0].sendToBack();
                break;
        }
    };
    removeSelectedToolbarItem ()
    {
        var toolbarObj = document.getElementById('toolbarObj').ej2_instances[0];
        for (var i = 0; i < toolbarObj.items.length; i++) {
            var item = toolbarObj.items[i];
            if (item.cssClass.indexOf('tb-item-selected') !== -1) {
                item.cssClass = item.cssClass.replace(' tb-item-selected', '');
            }
        }
        toolbarObj.dataBind();
        document.getElementById('conTypeBtn').classList.remove('tb-item-selected');
    };
    getPaperSize (args)
    {
        const paperSize = {};
        switch (args) {
            case 'Letter':
                paperSize.pageWidth = 816;
                paperSize.pageHeight = 1056;
                break;
            case 'Legal':
                paperSize.pageWidth = 816;
                paperSize.pageHeight = 1344;
                break;
            case 'Tabloid':
                paperSize.pageWidth = 1056;
                paperSize.pageHeight = 1632;
                break;
            case 'A0':
                paperSize.pageWidth = 3179;
                paperSize.pageHeight = 4494;
                break;
             case 'A1':
                paperSize.pageWidth = 2245;
                paperSize.pageHeight = 3179;
                break;
             case 'A2':
                paperSize.pageWidth = 1587;
                paperSize.pageHeight = 2245;
                break;
            case 'A3':
                paperSize.pageWidth = 1122;
                paperSize.pageHeight = 1587;
                break;
            case 'A4':
                paperSize.pageWidth = 793;
                paperSize.pageHeight = 1122;
                break;
            case 'A5':
                paperSize.pageWidth = 559;
                paperSize.pageHeight = 793;
                break;
            case 'A6':
                paperSize.pageWidth = 396;
                paperSize.pageHeight = 559;
                break;
        }
        return paperSize
    };
    paperListChange (args)
    {
        var value = args.item.value;
        var paperSize = this.getPaperSize(value);
        var pageWidth = paperSize.pageWidth;
        var pageHeight = paperSize.pageHeight;
        if (pageWidth && pageHeight) {
            if (diagram.ej2_instances[0].pageSettings.orientation === 'Portrait') {
                if (pageWidth > pageHeight) {
                    var temp = pageWidth;
                    pageWidth = pageHeight;
                    pageHeight = temp;
                }
            }
            else {
                if (pageHeight > pageWidth) {
                    var temp = pageHeight;
                    pageHeight = pageWidth;
                    pageWidth = temp;
                }
            }
            diagram.ej2_instances[0].pageSettings.width = pageWidth;
            diagram.ej2_instances[0].pageSettings.height = pageHeight;
        }
        else{
            diagram.ej2_instances[0].pageSettings.width = 1460;
            diagram.ej2_instances[0].pageSettings.height = 600;
        }
        this.updatePaperSelection(designContextMenu.ej2_instances[0].items[1],args.item.value);
        diagram.ej2_instances[0].dataBind();
    };
    pageOrientationChange (args)
    {
        if (args.target) {
            var target = args.target;
            var items = designContextMenu.items;
            switch (target.id) {
                case 'pagePortrait':
                    diagram.ej2_instances[0].pageSettings.isPortrait = true;
                    diagram.ej2_instances[0].pageSettings.isLandscape = false;
                    diagram.ej2_instances[0].pageSettings.orientation = 'Portrait';
                    items[0].items[0].iconCss = '';
                    items[0].items[1].iconCss = 'sf-icon-check-tick';
                    break;
                case 'pageLandscape':
                    diagram.ej2_instances[0].pageSettings.isPortrait = false;
                    diagram.ej2_instances[0].pageSettings.isLandscape = true;
                    diagram.ej2_instances[0].pageSettings.orientation = 'Landscape';
                    items[0].items[0].iconCss = 'sf-icon-check-tick';
                    items[0].items[1].iconCss = '';
                    break;
            }
            diagram.ej2_instances[0].dataBind();
        }
    };
    pageDimensionChange (args)
    {
        if (args.event) {
            var pageWidth = Number(diagram.ej2_instances[0].pageSettings.width);
            var pageHeight = Number(diagram.ej2_instances[0].pageSettings.height);
            var target = args.event.target;
            if (target.tagName.toLowerCase() === 'span') {
                target = target.parentElement.children[0];
            }
            if (target.id === 'pageWidth') {
                pageWidth = Number(target.value.replace(/,/g, ''));
            }
            else {
                pageHeight = Number(target.value.replace(/,/g, ''));
            }
            if (pageWidth && pageHeight) {
                if (pageWidth > pageHeight) {
                    diagram.ej2_instances[0].pageSettings.isPortrait = false;
                    diagram.ej2_instances[0].pageSettings.isLandscape = true;
                    diagram.ej2_instances[0].pageSettings.orientation = 'Landscape';
                }
                else {
                    diagram.ej2_instances[0].pageSettings.isPortrait = true;
                    diagram.ej2_instances[0].pageSettings.isLandscape = false;
                    diagram.ej2_instances[0].pageSettings.orientation = 'Portrait';
                }
                 diagram.ej2_instances[0].pageSettings.width = pageWidth;
                 diagram.ej2_instances[0].pageSettings.height = pageHeight;
                diagram.ej2_instances[0].dataBind();
            }
        }
    };
    pageBackgroundChange1 (args) 
    {
        if (args.currentValue) {
            diagram.ej2_instances[0].pageSettings.background = {
                color: args.currentValue.rgba
            };
            diagram.ej2_instances[0].dataBind();
        }
    };
    pageBreaksChange (args)
    {
        if (args.event) {
            diagram.ej2_instances[0].pageSettings.showPageBreaks = args.checked;
            diagram.ej2_instances[0].dataBind();
            var items = btnViewMenu.items;
            items[4].iconCss = items[4].iconCss ? '' : 'sf-icon-check-tick';
        }
    };
    updatePaperSelection (items,value)
    {
        for( var i=0;i<items.items.length;i++)
        {
         if(value === items.items[i].value){
             items.items[i].iconCss = 'sf-icon-check-tick';
         }
         else{
             items.items[i].iconCss = '';
         }
        }
    };
    updateTextAlign (textAlign)
    {
        var toolbarTextSubAlignment = document.getElementById('toolbarTextSubAlignment');
        if (toolbarTextSubAlignment) {
            toolbarTextSubAlignment = toolbarTextSubAlignment.ej2_instances[0];
        }
        if (toolbarTextSubAlignment) {
            for (var i = 0; i < toolbarTextSubAlignment.items.length; i++) {
                toolbarTextSubAlignment.items[i].cssClass = toolbarTextSubAlignment.items[i].cssClass.replace(' tb-item-selected', '');
            }
            var index = textAlign === 'Left' ? 0 : (textAlign === 'Center' ? 1 : 2);
            toolbarTextSubAlignment.items[index].cssClass = toolbarTextSubAlignment.items[index].cssClass + ' tb-item-selected';
        }
    };
    updateTextProperties (propertyName, propertyValue, annotation)
    {
        switch (propertyName) {
            case 'bold':
                annotation.bold = !annotation.bold;
                this.updateToolbarState('toolbarTextStyle', annotation.bold, 0);
                break;
            case 'italic':
                annotation.italic = !annotation.italic;
                this.updateToolbarState('toolbarTextStyle', annotation.italic, 1);
                break;
            case 'underline':
                textProperties.textDecoration = !textProperties.textDecoration;
                annotation.textDecoration = annotation.textDecoration === 'None' || !annotation.textDecoration ? 'Underline' : 'None';
                this.updateToolbarState('toolbarTextStyle',annotation.textDecoration!=='None', 2);
                break;
            case 'aligntextleft':
            case 'aligntextright':
            case 'aligntextcenter':
                annotation.textAlign = propertyValue.toString().replace('AlignText', '');
                this.updateTextAlign(annotation.textAlign);
                break;
        }
    };
    updateTextFontProperties (propertyName, annotation)
    {
        switch (propertyName) {
            case 'fontfamily':
                annotation.fontFamily = textProperties.fontFamily.value;
                break;
            case 'fontsize':
                annotation.fontSize = textProperties.fontSize.value;
                break;
            case 'fontcolor':
                annotation.color = this.getColor(textProperties.fontColor.value);
                break;
            case 'opacity':
                annotation.opacity = textProperties.opacity.value / 100;
                document.getElementById("textOpacityText").value = textProperties.opacity.value + '%';
                break;
        }
    };
    updateHorVertAlign (horizontalAlignment, verticalAlignment)
    {
        var toolbarHorVerAlignment = document.getElementById('toolbarTextAlignment');
        if (toolbarHorVerAlignment) {
            toolbarHorVerAlignment = toolbarHorVerAlignment.ej2_instances[0];
        }
        if (toolbarHorVerAlignment) {
            for (var i = 0; i < toolbarHorVerAlignment.items.length; i++) {
                toolbarHorVerAlignment.items[i].cssClass = toolbarHorVerAlignment.items[i].cssClass.replace(' tb-item-selected', '');
            }
            var index = horizontalAlignment === 'Right' ? 0 : (horizontalAlignment === 'Center' ? 1 : 2);
            toolbarHorVerAlignment.items[index].cssClass = toolbarHorVerAlignment.items[index].cssClass + ' tb-item-selected';
            index = verticalAlignment === 'Bottom' ? 3 : (verticalAlignment === 'Center' ? 4 : 5);
            toolbarHorVerAlignment.items[index].cssClass = toolbarHorVerAlignment.items[index].cssClass + ' tb-item-selected';
        }
    };
   getPosition (offset)
    {
        if (offset.x === 0 && offset.y === 0) {
            return 'TopLeft';
        }
        else if (offset.x === 0.5 && offset.y === 0) {
            return 'TopCenter';
        }
        else if (offset.x === 1 && offset.y === 0) {
            return 'TopRight';
        }
        else if (offset.x === 0 && offset.y === 0.5) {
            return 'MiddleLeft';
        }
        else if (offset.x === 1 && offset.y === 0.5) {
            return 'MiddleRight';
        }
        else if (offset.x === 0 && offset.y === 1) {
            return 'BottomLeft';
        }
        else if (offset.x === 0.5 && offset.y === 1) {
            return 'BottomCenter';
        }
        else if (offset.x === 1 && offset.y === 1) {
            return 'BottomRight';
        }
        else {
            return 'Center';
        }
    };
   getHexColor (colorStr)
    {
        var a = document.createElement('div');
        a.style.color = colorStr;
        var colors = window.getComputedStyle(document.body.appendChild(a)).color.match(/\d+/g).map(function (a) {
            return parseInt(a, 10);
        });
        document.body.removeChild(a);
        return (colors.length >= 3) ? '#' + (((1 << 24) + (colors[0] << 16) + (colors[1] << 8) + colors[2]).toString(16).substr(1)) : '';
    };
    getColor (colorName)
    {
        if (window.navigator.msSaveBlob && colorName.length === 9) {
            return colorName.substring(0, 7);
        }
        return colorName;
    };
    getOffset (position)
    {
        switch (position.toLowerCase()) {
            case 'topleft':
                return { x: 0, y: 0 };
            case 'topcenter':
                return { x: 0.5, y: 0 };
            case 'topright':
                return { x: 1, y: 0 };
            case 'middleleft':
                return { x: 0, y: 0.5 };
            default:
                return { x: 0.5, y: 0.5 };
            case 'middleright':
                return { x: 1, y: 0.5 };
            case 'bottomleft':
                return { x: 0, y: 1 };
            case 'bottomcenter':
                return { x: 0.5, y: 1 };
            case 'bottomright':
                return { x: 1, y: 1 };
        }
    }
    updateToolbarState (toolbarName, isSelected, index)
    {
        var toolbarTextStyle = document.getElementById(toolbarName);
        if (toolbarTextStyle) {
            toolbarTextStyle = toolbarTextStyle.ej2_instances[0];
        }
        if (toolbarTextStyle) {
            var cssClass = toolbarTextStyle.items[index].cssClass;
            toolbarTextStyle.items[index].cssClass = isSelected ? cssClass + ' tb-item-selected' : cssClass.replace(' tb-item-selected', '');
            toolbarTextStyle.dataBind();
        }
    };
    applyNodeStyle (propertyName, node, value)
    {
        var addInfo = node.addInfo || {};
        switch (propertyName) {
            case 'fillcolor':
                node.style.fill = this.getColor(value);
                if (value && value.checked) {
                    NodeProperties.prototype.getGradient(node);
                }
                break;
            case 'strokecolor':
                node.style.strokeColor = this.getColor(nodeProperties.strokeColor.value);
                break;
            case 'strokewidth':
                node.style.strokeWidth = nodeProperties.strokeWidth.value;
                break;
            case 'strokestyle':
                node.style.strokeDashArray = nodeProperties.strokeStyle.value;
                break;
            case 'opacity':
                node.style.opacity = nodeProperties.opacity.value / 100;
                document.getElementById("nodeOpacitySliderText").value = nodeProperties.opacity.value + '%';
                break;
            case 'gradient':
                if (value && value.value === 'Solid') {
                    node.style.gradient.type = 'None';
                }
                else {
                    NodeProperties.prototype.getGradient(node);
                }
                break;
            case 'gradientdirection':
            case 'gradientcolor':
                NodeProperties.prototype.getGradient(node);
                break;
        }
    };
    toolbarInsertClick (args)
    {
        if (diagram.ej2_instances[0].selectedItems.nodes.length > 0) {
                    document.getElementById('hyperlink').value = '';
                    document.getElementById('hyperlinkText').value = '';
                    if (diagram.ej2_instances[0].selectedItems.nodes[0].annotations.length > 0) {
                        var annotation = diagram.ej2_instances[0].selectedItems.nodes[0].annotations[0];
                        if (annotation.hyperlink.link || annotation.content) {
                            document.getElementById('hyperlink').value = annotation.hyperlink.link;
                            document.getElementById('hyperlinkText').value = annotation.hyperlink.content || annotation.content;
                        }
                    }
                    hyperlinkDialog.show();
        }
    };
    aspectRatioClick (args)
    {
    var isAspect = true;
    if(document.getElementById('aspectRatioBtn').classList.contains('e-active'))
    {
        isAspect = true;
        aspectRatioBtn.iconCss =  'sf-icon-lock'
    }
    else{
        isAspect = false;
        aspectRatioBtn.iconCss = 'sf-icon-unlock';
    }
        PropertyChange.prototype.nodePropertyChange({propertyName: 'aspectRatio', propertyValue: isAspect}); 
    };
    getDialogButtons (dialogType)
    {
        var buttons= [];
        switch (dialogType) {
            case 'export':
                buttons.push({
                    click: this.btnExportClick.bind(this), buttonModel: { content: 'Export', cssClass: 'e-flat e-db-primary', isPrimary: true }
                });
                break;
            case 'print':
                buttons.push({
                    click: this.btnPrintClick.bind(this),
                    buttonModel: { content: 'Print', cssClass: 'e-flat e-db-primary', isPrimary: true }
                });
                break;
            case 'hyperlink':
                buttons.push({
                    click: this.btnHyperLink.bind(this),
                    buttonModel: { content: 'Apply', cssClass: 'e-flat e-db-primary', isPrimary: true }
                });
                break; 
        }
        buttons.push({
            click: this.btnCancelClick.bind(this),
            buttonModel: { content: 'Cancel', cssClass: 'e-flat', isPrimary: true }
        });
        return buttons;
    };
    btnHyperLink ()
    {
        var node = diagram.ej2_instances[0].selectedItems.nodes[0];
    if (node.annotations.length > 0) {
        node.annotations[0].hyperlink.link = document.getElementById('hyperlink').value;
        node.annotations[0].hyperlink.content = document.getElementById('hyperlinkText').value;
        this.applyToolTipforHyperlink(node);
        diagram.ej2_instances[0].dataBind();
    } else {
        var annotation = {
            hyperlink: {
                content: document.getElementById('hyperlinkText').value,
                link: document.getElementById('hyperlink').value
            }
        };
        diagram.ej2_instances[0].addLabels(node, [annotation]);
        this.applyToolTipforHyperlink(node);
        diagram.ej2_instances[0].dataBind();
    }
    hyperlinkDialog.hide();
    };
    applyToolTipforHyperlink (node)
    {
        node.constraints = ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.InheritTooltip | ej.diagrams.NodeConstraints.Tooltip;
        node.tooltip = {
            content: node.annotations[0].hyperlink.link, relativeMode: 'Object',
            position: 'TopCenter', showTipPointer: true,
        };
    };
    btnPrintClick ()
    {
        var pageWidth = printSettings.pageWidth;
        var pageHeight = printSettings.pageHeight;
        var paperSize = this.getPaperSize(printSettings.paperSize);
        if (paperSize.pageHeight && paperSize.pageWidth) {
            pageWidth = paperSize.pageWidth;
            pageHeight = paperSize.pageHeight;
        }
        if (pageSettings.isPortrait) {
            if (pageWidth > pageHeight) {
                var temp = pageWidth;
                pageWidth = pageHeight;
                pageHeight = temp;
            }
        } else {
            if (pageHeight > pageWidth) {
                var temp1 = pageHeight;
                pageHeight = pageWidth;
                pageWidth = temp1;
            }
        }
        diagram.ej2_instances[0].print({
            region: printRegionDropdown.value, pageHeight: pageHeight, pageWidth: pageWidth,
            multiplePage: printMultiplePage.checked,
            pageOrientation:printPortrait.checked ? 'Portrait' : 'Landscape'
        });

    };
    btnExportClick ()
    {
        diagram.ej2_instances[0].exportDiagram({
            fileName: document.getElementById("exportfileName").value,
            format: exportFormat.value,
            region: exportRegion.value
        });
        exportDialog.ej2_instances[0].hide();
    };
    btnCancelClick (args)
    {
        var ss = args.target;
        var key = ss.offsetParent.id;
        switch (key) {
            case 'exportDialog':
                exportDialog.ej2_instances[0].hide();
                break;
            case 'hyperlinkDialog':
                hyperlinkDialoge.j2_instances[0].hide();
                break;
        }
    };
    hideMenuBar ()
    {
        var expandcollapseicon = document.getElementById('btnHideMenubar');
        var button1 = expandcollapseicon.ej2_instances[0];
        if (button1.iconCss.indexOf('sf-icon-chevron-up') > -1) {
            button1.iconCss = 'sf-icon-chevron-down';
        } else {
            button1.iconCss = 'sf-icon-chevron-up';
        }
        UtilityMethods.hideElements('hide-menubar', diagram.ej2_instances[0]);
    };
    hideElements (elementType, diagram)
    {
        var diagramContainer = document.getElementsByClassName('diagrambuilder-container')[0];
        if (diagramContainer.classList.contains(elementType)) {
                diagramContainer.classList.remove(elementType);
        }
        else {
            diagramContainer.classList.add(elementType);
        }
        if (diagram) {
            diagram.updateViewPort();
        }
    };
    showColorPicker (propertyName, toolbarName)
    {
            var fillElement =
                document.getElementById(propertyName).parentElement.getElementsByClassName('e-dropdown-btn')[0];
            fillElement.click();
            var popupElement = document.getElementById(fillElement.id + '-popup');
            var bounds = document.getElementsByClassName(toolbarName)[0].getBoundingClientRect();
            popupElement.style.left = bounds.left + 'px';
            popupElement.style.top = (bounds.top + 40) + 'px';
    };
   
};
module.exports = UtilityMethods;