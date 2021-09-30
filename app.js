var  app = new Vue({
    el: '#app',
    data:{
        message: 'URL Shortner Using Vue JS',
        url:"csptech.com",
        cleanURl: ''

    },
    methods: {
        shortner: function(){
            this.cleanURl = this.url.replace(/^https?:\/\//, '').replace(/\/$/, '')
        }
    }
})
/*
Notes:
Class and Style Bindings
all methods in Vue Js Are stored in "methods"

*/