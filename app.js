var  app = new Vue({
    el: '#app',
    data:{
        message: 'Simple Todos List',
        todos : [
            {text: 'Learn Vue', id: 1},
            {text: "Like the video", id: 2},
            {text: "do some youga", id: 3}
        ],
        count:10
    }
})
/*
Notes:
Class and Style Bindings
v-bind :' use to add dyanamic data attribute, class amd images and so on
** shortcut for v-bind :src="" **
*/