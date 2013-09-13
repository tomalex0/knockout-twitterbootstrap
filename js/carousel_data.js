var carouselModal = function(items) {
    var me = this;
    me.items = ko.observableArray(items);
    me.currentPage = ko.observable(0);
    me.carouselList = ko.computed(function () {

        var items = this.items(),
            result = [];
        for (var i = 0; i < items.length; i += 3) {
            var row = [];
            for (var j = 0; j < 3; ++j) {
                if (items[i + j]) {
                    row.push(items[i + j]);
                }
            }
            result.push(row);
        }
        return result;

    },me);

    me.addItem = function(item,pageNo) {
        me.currentPage(pageNo);
        me.items.push(item);

    }.bind(me);

};

/*
 carouselModlnit.addItem({
     title : "Example headline",
     desc : "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",
     btnText : "Sign up today"
 },1);
 carouselModlnit.items.remove(carouselModlnit.items()[3])
*/


var carouselData = [{
    title : "Example headline",
    btnText : "Sign up today"
},{
    title : "Another example headline.",
    btnText : "Learn more"
},{
    title : "One more for good measure.",
    btnText : "Browse gallery"
},{
    title : "One more for good measure.",
    btnText : "Browse gallery"
}];


var carouselModlnit =  new carouselModal(carouselData,0);
ko.applyBindings(carouselModlnit);
