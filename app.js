var  app = new Vue({
    el: '#app',
    data:{
        message: 'hello I am Chethan S Poojary',
        title: "you hover me on"+ new Date(),
        url: "http://vuejs.org/images/logo.png",
        isActive: true,
    }
})
/*
Notes:
Class and Style Bindings
v-bind :' use to add dyanamic data attribute, class amd images and so on
** shortcut for v-bind :src="" **
*/