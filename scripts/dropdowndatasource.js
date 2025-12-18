class DropDownDataSources {
    constructor() {
    };
    getFileMenuItems ()
    {
            var items = [
                { text: 'New', iconCss: 'sf-icon-New' },
                { text: 'Open', iconCss: 'sf-icon-Open' },
                { separator: true },
                { text: 'Save', iconCss: 'sf-icon-Save' },
                { separator: true },
                { text: 'Export', iconCss: 'sf-icon-Export',
                    items:[
                        {text:'JPG'},{text:'PNG'},{text:'SVG'}
                    ] },
                { text: 'Print', iconCss: 'sf-icon-Print' },
        
            ]
            return items;
    };
    getEditMenuItems ()
    {
        var items = [
            { text: 'Cut', iconCss: 'sf-icon-cut' },
            { text: 'Copy', iconCss: 'sf-icon-copy' },
            { text: 'Paste', iconCss: 'sf-icon-paste' },
            { separator: true },
            { text: 'Rotate',iconCss:'sf-icon-rotate', items:[
                { text: 'Rotate Right 90', iconCss: 'sf-icon-rotate-clockwise' },
                { text: 'Rotate Left 90', iconCss: 'sf-icon-rotate-counter-clockwise' },
            ]},
            { text: 'Delete', iconCss: 'sf-icon-delete' },
            { separator: true },
        ]
        return items;
    };
   getDesignMenuItems ()
    {
        var items = [
            { text: 'Orientation',iconCss: 'sf-icon-page_orientation',
            items:[
                { text: 'Landscape', iconCss: 'sf-icon-check-tick' },
                { text: 'Portrait', iconCss: '' }
            ]    
            },
            { text: 'Size', iconCss: 'em-icons e-copy',
            items:this.paperList1()
            },
        ]
        return items;
    };
    getToolsMenuItems ()
    {
        var items1 = [
            { text: 'Selection Tool',iconCss: 'sf-icon-pointer' },
            { text: 'Pan Tool', iconCss: 'sf-icon-Pan tb-icons' },
            // { separator: true },
            // { text: 'Connector Tool',iconCss:'sf-icon-orthogonal_line',items:[
            //     {text:'Straight',iconCss: 'sf-icon-straight_line'},
            //     {text:'Orthogonal',iconCss: 'sf-icon-orthogonal_line'},
            //     {text:'Bezier',iconCss: 'sf-icon-bezier'},
            // ] }
        ]
        return items1;
    };
    getSelectMenuItems ()
    {
        var items = [
            { text: 'Select All', iconCss: 'em-icons e-cut' },
            { text: 'Select All Nodes', iconCss: 'em-icons e-copy' },
            { text: 'Select All Connectors', iconCss: 'em-icons e-paste' },
            { text: 'Deselect All', iconCss: 'em-icons e-paste' }
        ]
        return items;
    };
    getViewMenuItems ()
    {
        var items = [
            { text: 'Show Lines',iconCss: 'sf-icon-check-tick'},
            { text: 'Snap To Grid',iconCss : 'sf-icon-check-tick'},
            { text: 'Snap To Object',iconCss : 'sf-icon-check-tick'},
            { text: 'Show Ruler',iconCss: 'sf-icon-check-tick'},
            { text: 'Show Page Breaks',iconCss: ''},
            { text: 'Show Multiple page',iconCss: ''},
            { separator: true },
            { text: 'Fit To Width'},
            { text: 'Fit To Page'},
        ]
        return items;
    };
    paperList ()
    {
        var paperList = [
            { text: 'Letter (8.5 in x 11 in)', value: 'Letter' }, { text: 'Legal (8.5 in x 14 in)', value: 'Legal' },
            { text: 'Tabloid (279 mm x 432 mm)', value: 'Tabloid' }, { text: 'A3 (297 mm x 420 mm)', value: 'A3' },
            { text: 'A4 (210 mm x 297 mm)', value: 'A4' }, { text: 'A5 (148 mm x 210 mm)', value: 'A5' },
            { text: 'A6 (105 mm x 148 mm)', value: 'A6' }, { text: 'Custom', value: 'Custom' },
        ];
        return paperList;
    };
    paperList1 ()
    {
        var paperList1 = [
            { text: 'Letter (8.5 in x 11 in)', value: 'Letter',iconCss:'sf-icon-check-tick' }, { text: 'Legal (8.5 in x 14 in)', value: 'Legal' },
            { text: 'Tabloid (279 mm x 432 mm)', value: 'Tabloid' }, { text: 'A3 (297 mm x 420 mm)', value: 'A3' },
            { text: 'A4 (210 mm x 297 mm)', value: 'A4' }, { text: 'A5 (148 mm x 210 mm)', value: 'A5' },
            { text: 'A6 (105 mm x 148 mm)', value: 'A6' },
        ];
        return paperList1;
    };
    fileFormats ()
    {
        var fileFormats = [
            { text: 'JPG', value: 'JPG' }, { text: 'PNG', value: 'PNG' },
            { text: 'SVG', value: 'SVG' }
        ];
        return fileFormats;
    };
    diagramRegions ()
    {
        var diagramRegions = [
            { text: 'Content', value: 'Content' }, { text: 'PageSettings', value: 'PageSettings' }
        ];
        return diagramRegions;
    };
    borderStyles ()
    {
        var borderStyles = [
            { text: '', value: '', className: 'ddl-svg-style ddl_linestyle_none' },
            { text: '1,2', value: '1,2', className: 'ddl-svg-style ddl_linestyle_one_two' },
            { text: '3,3', value: '3,3', className: 'ddl-svg-style ddl_linestyle_three_three' },
            { text: '5,3', value: '5,3', className: 'ddl-svg-style ddl_linestyle_five_three' },
            { text: '4,4,1', value: '4,4,1', className: 'ddl-svg-style ddl_linestyle_four_four_one' }
        ];
        return borderStyles;
    };
    gradientDirections ()
    {
        var gradientDirections = [
            { text: 'BottomToTop', value: 'BottomToTop' }, { text: 'TopToBottom', value: 'TopToBottom' },
            { text: 'RightToLeft', value: 'RightToLeft' }, { text: 'LeftToRight', value: 'LeftToRight' }
        ];
        return gradientDirections;
    };
    lineTypes ()
    {
        var lineTypes = [
            { text: 'Straight', value: 'Straight' }, { text: 'Orthogonal', value: 'Orthogonal' },
            { text: 'Bezier', value: 'Bezier' }
        ];
        return lineTypes;
    };
    decoratorList ()
    {
        var decoratorList = [
            { text: 'None', value: 'None' },
            { text: 'Arrow', value: 'Arrow' },
            { text: 'Diamond', value: 'Diamond' },
            { text: 'OpenArrow', value: 'OpenArrow' },
            { text: 'Circle', value: 'Circle' },
            { text: 'Square', value: 'Square' },
            { text: 'Fletch', value: 'Fletch' },
            { text: 'OpenFetch', value: 'OpenFetch' },
            { text: 'IndentedArrow', value: 'IndentedArrow' },
            { text: 'OutdentedArrow', value: 'OutdentedArrow' },
            { text: 'DoubleArrow', value: 'DoubleArrow' }
        ];
        return decoratorList;
    };
    fontFamilyList ()
    {
        var fontFamilyList = [
            { text: 'Arial', value: 'Arial' },
            { text: 'Aharoni', value: 'Aharoni' },
            { text: 'Bell MT', value: 'Bell MT' },
            { text: 'Fantasy', value: 'Fantasy' },
            { text: 'Times New Roman', value: 'Times New Roman' },
            { text: 'Segoe UI', value: 'Segoe UI' },
            { text: 'Verdana', value: 'Verdana' },
        ];
        return fontFamilyList;
    };
    textPositionDataSource ()
    {
        var textPosition = [
            { text: 'TopLeft', value: 'TopLeft' }, { text: 'TopCenter', value: 'TopCenter' },
            { text: 'TopRight', value: 'TopRight' }, { text: 'MiddleLeft', value: 'MiddleLeft' },
            { text: 'Center', value: 'Center' }, { text: 'MiddleRight', value: 'MiddleRight' },
            { text: 'BottomLeft', value: 'BottomLeft' }, { text: 'BottomCenter', value: 'BottomCenter' },
            { text: 'BottomRight', value: 'BottomRight' },
        ];
        return textPosition;
    };
    toolbarItems ()
    {
        let items = [
            { prefixIcon: 'sf-icon-pan', tooltipText: 'Pan Tool',cssClass:'tb-item-start'},
            { prefixIcon: 'sf-icon-pointer', tooltipText: 'Select Tool',cssClass:'tb-item-middle tb-item-selected'},
            { separator: true },
            { tooltipText: 'Change Connector Type',template: '<button id="conTypeBtn" style="width:100%;"></button>',cssClass:'tb-item-middle'},
            { type: 'Separator' },
            {
                template: ' <div class="db-text-container" style="margin-left:10px;"><div class="db-text-input"><input id="numeric" type="text" style="margin-left:10px;" /></div></div>', visible: false, tooltipText: 'Signal Duration(ms)'
            },
            {
                cssClass: 'tb-item-end tb-zoom-dropdown-btn', template: '<button id="btnZoomIncrement"></button>',align:'Right'
            },
        ];
        return items;
    };

};
module.exports = DropDownDataSources;