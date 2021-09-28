var  app = new Vue({
    el: '#app',
    data:{
        message: 'hello I am Chethan S Poojary',
        intro: '<h1>Ya I am Learning <strong>Vue</strong></h1>',
        view1: false,
        view2: true,
    }
})
/*
Notes:
v-text = display data text
v-html = insert complete html tags and text into a DOM
v-show = this like show and hide functionality in Jquery
v-if = if true it will show if false it will hide it
v-else there no need to write conditionalEnd

v-once = this render data once if we update data ofter that it will won't change it

v-clock : with this we can make loading functionality

*/