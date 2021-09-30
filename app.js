var  app = new Vue({
    el: '#app',
    data:{
        message: 'Vue.js Events',
        count:0

    },
    methods: {
        counterup: function(){
            this.count += 1;
        },

        counterdn: function(){
            this.count -= 1;
        }
    }
})
/*
Notes:
Class and Style Bindings
all methods in Vue Js Are stored in "methods"

*/