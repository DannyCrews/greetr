(function(global, $) {

    //function constructor
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }

    Greetr.prototype = {};

    Greetr.init = function(firstName, lastName, language) {

        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';


    }

    // set prototype of returned object
    Greetr.init.prototype = Greetr.prototype;

    // attach greetr to the global object
    global.Greetr = global.G$ = Greetr;


})(window, jQuery);