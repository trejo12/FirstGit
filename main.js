var viewInstance = new Vue({
    el : '#app',
    data : {
        title : 'Điện thoại Samsung'
    },
    methods :{
        say : function(text)
        {
            return 'hello ' + text;
        }
    }
});
console.log(viewInstance)

