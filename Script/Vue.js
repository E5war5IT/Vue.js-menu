const vue_about = Vue.component('vue-about-li', {
    template: '<li><href-about v-once /></li>'
});

const href_about = Vue.component('href-about', {
    data: function(){
     return { 
      vue_about: 'About',
      TitleAbout: 'Vue.js',
      seen: true,
      title: 'About',
     }
    },
    template: '<a href="#" id="about"  v-if="seen" v-bind:title="title" v-once>{{vue_about}}</a>'
});

const Vue_Template_About = new Vue({
    el: '#navigator' ,
    data: {},
    components: {
        'component-1':  vue_about,
        'component-2': href_about,
    },
});


const vue_market = Vue.component('vue-market-li-ul', {
    template: '<href-market v-once />'
});

const href_market = Vue.component('href-market', {
    data: function(){
     return { 
      vue_market: 'Market',
      market:  'Market',
      TitleMarket: 'Vue.js',
      seen: true,
      title: 'Market',
      Shops: 'Лавки',
      CreateYourOwnShop: 'Создать свою лавку',
     }
    },
    template:
    `<li><a href="#" id="market" v-bind:title="market" >{{vue_market}}</a>
      <ul class="ssubmenuu">
        <li><a href="#" v-bind:title="Shops">{{Shops}}</a></li>
        <li><a href="#" v-bind:title="CreateYourOwnShop">{{CreateYourOwnShop}}</a></li>
      </ul>
    </li>`
});

const Vue_Template_Market = new Vue({
    el: '#navigator' ,
    data: {},
    components: {
        'component-1':  vue_market,
        'component-2': href_market,
    },
});