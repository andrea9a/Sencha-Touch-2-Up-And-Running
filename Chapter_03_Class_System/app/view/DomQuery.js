Ext.define('Chapter3ClassSystem.view.DomQuery', {
    extend: 'Chapter3ClassSystem.view.DemoPanel',
    xtype: 'domquerydemo',

    config: {
        html: '<div class="outerDiv">Outer DIV<div id="someDiv" class="innerDiv">Inner DIV</div></div>'
    },

    getPrefix: function () {
        return 'Ext.DomQuery';
    },
    
    getInstructions: function () {
        return '';
    },
    
    getFunctions: function () {
        return [ 'select', 'selectNode' ];
    },

    selectDemo: function () {
        var divs = Ext.DomQuery.select('DIV');
        console.log('All the DIV elements in this page:');
        console.dir(divs);
        this.showTitleText('Number of DIVs', divs.length);
    },

    selectNodeDemo: function () {
        var div = Ext.DomQuery.selectNode('#someDiv');
        console.log('Found DIV element');
        console.dir(div);
        this.showTitleText("Contents of the DIV found", div.innerHTML);
    }
});


