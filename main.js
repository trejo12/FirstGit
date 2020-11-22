var app1 = new Vue({
    el: '#app-1',
    data: {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  });

var app2 = new Vue({
    el: '#app-2',
    data: {
      seen: true
    }
  });

var app3 = new Vue({
    el: '#app-3',
    data: {
       index : "alo alo",
       seen : true ,
       a: 1
    },
    created: function () {
        console.log('a is: ' + this.a)
      }
  });

var app =new Vue({
    el : '#app',
    
    data : {
        title : 'google đây',
        target  : "_blank",
        url : 'https://mail.google.com/mail/u/1/#inbox',
        money : 12000,
        text : "btn",
    },
    methods : {
        format(){
        // var number = this.money;
           return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(this.money);
        }
    },
});
var app5 = new Vue({
    el: '#app-5',
    data: {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
});

/////////////////////////////
// Vue.component('todo-item', {
//     props: ['todo'],
//     template: '<li>{{ todo.text }}</li>'
//   })
  
  var app6 = new Vue({
    el: '#app-6',
    data: {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    },
    components:{
        'todo-item': {
        props: ['todo'],
        template: '<li>{{ todo.text }}</li>'
        }
    }
  });

/////////////////////////////////
var app7 = new Vue({
    el: '#app-7',
    data: {
      myGlobal: 'Hi there'
    },
    components: {
      'child' : {
        template: `<p>{{ text }}</p>`,
        data: function() {
            return {
            text: this.$root.myGlobal
          }
        }
      }
    }
  });

  var app8 = new Vue({
    el : '#app-8',
    data :{
        counter :  0,
    },
    methods : {
        handleClick(number){
             this.counter += number;
        }
    }
  });

  var app9 = new Vue({
    el: '#app-9',
    data: {
      message: 'người đông bến đợi thuyền xuôi ngược',
      time : '',
    },
    computed: {
        reversedMessage: function () {
        return this.message.split(' ').reverse().join(' ')
      },
      now: function () {
        return Date.now();
      }
    }
  })