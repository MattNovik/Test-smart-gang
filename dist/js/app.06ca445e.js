(function(e){function t(t){for(var a,i,n=t[0],c=t[1],o=t[2],b=0,d=[];b<n.length;b++)i=n[b],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(d.length)d.shift()();return l.push.apply(l,o||[]),r()}function r(){for(var e,t=0;t<l.length;t++){for(var r=l[t],a=!0,n=1;n<r.length;n++){var c=r[n];0!==s[c]&&(a=!1)}a&&(l.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},s={app:0},l=[];function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/test-smart-gang/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=t,n=n.slice();for(var o=0;o<n.length;o++)t(n[o]);var u=c;l.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("7a23"),s=(r("fce9"),Object(a["e"])("header",null,null,-1)),l={class:"container"},i=Object(a["e"])("footer",null,null,-1);function n(e,t,r,n,c,o){var u=Object(a["k"])("Beer"),b=Object(a["k"])("Profile");return Object(a["i"])(),Object(a["d"])(a["a"],null,[s,Object(a["e"])("main",null,[Object(a["e"])("div",l,[Object(a["g"])(u),Object(a["g"])(b)])]),i],64)}r("b0c0");var c={key:0,class:"loading"},o={class:"profile"},u=Object(a["e"])("span",{class:"preloader"},[Object(a["e"])("span",{class:"preloader__center"})],-1),b=["src"],d={class:"profile__image"},p=["src"],h={class:"profile__info"},m={class:"profile__name"},f={class:"profile__email"},j=Object(a["f"])("Email:"),O=["href"],_={class:"profile__number"},v=Object(a["f"])("Phone:"),g=["href"],y={class:"profile__date-of-birth"},B=Object(a["f"])("Date of Birth: "),S={class:"profile__add-info"},w={class:"profile__gender"},N={class:"profile__social-number"},I={class:"profile__work"},k={class:"progile__work-title"},P={class:"profile__work-skill"},C={class:"profile__address"},T={class:"profile__address-city"},L={class:"profile__address-country"},M={class:"profile__address-state"},x={class:"profile__address-street-adress"},q={class:"profile__address-street-name"},A={class:"profile__address-zip-code"},D={class:"profile__credit-card"},Z={class:"profile__subcription"},z={class:"profile__subcription-plan"},J={class:"profile__subcription-payment"},Y={class:"profile__subcription-status"},E={class:"profile__subcription-term"};function G(e,t,r,s,l,i){return Object(a["i"])(),Object(a["d"])(a["a"],null,[e.loading?(Object(a["i"])(),Object(a["d"])("div",c,"Loading...")):Object(a["c"])("",!0),Object(a["e"])("div",o,[u,Object(a["e"])("button",{class:"profile__menu",onClick:t[0]||(t[0]=function(){return i.open&&i.open.apply(i,arguments)})},[Object(a["e"])("img",{src:"".concat(l.avatar),width:"400",height:"400"},null,8,b)]),Object(a["e"])("div",d,[Object(a["e"])("img",{src:"".concat(l.avatar),width:"400",height:"400"},null,8,p)]),Object(a["e"])("div",h,[Object(a["e"])("p",m,Object(a["l"])(i.name),1),Object(a["e"])("p",f,[j,Object(a["e"])("a",{href:"".concat(i.emailTo)},Object(a["l"])(l.email),9,O)]),Object(a["e"])("p",_,[v,Object(a["e"])("a",{href:"".concat(i.phoneTo)},Object(a["l"])(l.phoneNumber),9,g)]),Object(a["e"])("p",y,[B,Object(a["e"])("p",null,Object(a["l"])(i.dateBirth),1)]),Object(a["e"])("div",S,[Object(a["e"])("p",w,Object(a["l"])(l.gender),1),Object(a["e"])("p",N,Object(a["l"])(l.socialInsurance),1),Object(a["e"])("div",I,[Object(a["e"])("p",k,Object(a["l"])(l.employmentTitle),1),Object(a["e"])("p",P,Object(a["l"])(l.employmentSkill),1)]),Object(a["e"])("div",C,[Object(a["e"])("p",T,Object(a["l"])(l.addressCity),1),Object(a["e"])("p",L,Object(a["l"])(l.addressCountry),1),Object(a["e"])("p",M,Object(a["l"])(l.addressState),1),Object(a["e"])("p",x,Object(a["l"])(l.addressStreetAdress),1),Object(a["e"])("p",q,Object(a["l"])(l.addressStreetName),1),Object(a["e"])("p",A,Object(a["l"])(l.addressZipCode),1)]),Object(a["e"])("p",D,Object(a["l"])(l.creditCard),1),Object(a["e"])("div",Z,[Object(a["e"])("p",z,Object(a["l"])(l.subscriptionPlan),1),Object(a["e"])("p",J,Object(a["l"])(l.subscriptionPayment),1),Object(a["e"])("p",Y,Object(a["l"])(l.subscriptionStatus),1),Object(a["e"])("p",E,Object(a["l"])(l.subscriptionTerm),1)])])])])],64)}r("ac1f"),r("1276"),r("a9e3"),r("5319"),r("d3b7");var H=r("bc3a"),F=r.n(H),K={name:"Profile",data:function(){return{firstName:null,lastName:null,dateBirthBefore:null,email:null,gender:null,creditCard:null,addressCity:null,addressCountry:null,addressState:null,addressStreetAdress:null,addressStreetName:null,addressZipCode:null,employmentSkill:null,employmentTitle:null,phoneNumber:null,socialInsurance:null,subscriptionPlan:null,subscriptionPayment:null,subscriptionStatus:null,subscriptionTerm:null,userName:null,errored:!1,avatar:null}},computed:{name:function(){return this.firstName+" "+this.lastName},dateBirth:function(){var e=String(this.dateBirthBefore).split("-").reverse(),t=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];return e[0]+" "+t[Number(e[1])-1]+" "+e[2]},emailTo:function(){return"mailto:"+this.email},phoneTo:function(){return"tel:"+String(this.phoneNumber).replace(/\D/g,"")}},methods:{open:function(e){e.preventDefault();var t=document.querySelector(".profile");t.classList.toggle("open")}},mounted:function(){var e=this;F.a.get("https://random-data-api.com/api/users/random_user").then((function(t){return e.firstName=t.data.first_name,e.lastName=t.data.last_name,e.email=t.data.email,e.dateBirthBefore=t.data.date_of_birth,e.gender=t.data.gender,e.addressCity=t.data.address.city,e.addressCountry=t.data.address.country,e.addressState=t.data.address.state,e.addressStreetAdress=t.data.address.street_address,e.addressStreetName=t.data.address.street_name,e.addressZipCode=t.data.address.zip_code,e.employmentSkill=t.data.employment.key_skill,e.employmentTitle=t.data.employment.title,e.phoneNumber=t.data.phone_number,e.socialInsurance=t.data.social_insurance_number,e.subscriptionPlan=t.data.subscription.plan,e.subscriptionPayment=t.data.subscription.payment_method,e.subscriptionStatus=t.data.subscription.status,e.subscriptionTerm=t.data.subscription.term,e.userName=t.data.username,e.avatar=t.data.avatar,e.creditCard=t.data.credit_card.cc_number})).catch((function(t){console.log(t),e.errored=!0})).finally((function(){var e=document.querySelector(".profile");e.classList.add("loaded")}))}},Q=r("6b0d"),R=r.n(Q);const U=R()(K,[["render",G]]);var V=U,W={class:"beer"},X=Object(a["e"])("img",{src:"img/beer-bar.jpg",width:"500",height:"500"},null,-1),$={class:"beer__previous"},ee=Object(a["e"])("h2",null,"Last 3 beers",-1),te={class:"beer__previous-list"},re=["src"],ae={class:"beer__container"},se={class:"beer__wrapper"},le=Object(a["e"])("span",{class:"preloader"},[Object(a["e"])("span",{class:"preloader__center"})],-1),ie={class:"beer__image"},ne=["src"],ce={class:"beer__info"},oe={class:"beer__name"},ue={class:"beer__info-list"},be={class:"beer__item-info"},de=Object(a["f"])("Alcohol: "),pe={class:"beer__item-info"},he=Object(a["f"])("Blg: "),me={class:"beer__item-info"},fe=Object(a["f"])("Brand: "),je={class:"beer__item-info"},Oe=Object(a["f"])("Hop: "),_e={class:"beer__item-info"},ve=Object(a["f"])("Ibu: "),ge={class:"beer__item-info"},ye=Object(a["f"])("Malts: "),Be={class:"beer__item-info"},Se=Object(a["f"])("Yeast: ");function we(e,t,r,s,l,i){return Object(a["i"])(),Object(a["d"])("div",W,[X,Object(a["e"])("div",$,[ee,Object(a["e"])("ul",te,[(Object(a["i"])(!0),Object(a["d"])(a["a"],null,Object(a["j"])(l.previousBeer,(function(e,r){return Object(a["i"])(),Object(a["d"])("li",{onClick:t[0]||(t[0]=function(){return i.show&&i.show.apply(i,arguments)})},[Object(a["e"])("img",{src:"".concat(e.image),width:"100",height:"200",class:Object(a["h"])("".concat(r))},null,10,re)])})),256))])]),Object(a["e"])("div",ae,[Object(a["e"])("h1",null,Object(a["l"])(l.title),1),Object(a["e"])("div",se,[le,Object(a["e"])("div",ie,[Object(a["e"])("img",{src:"".concat(l.beerImage),width:"150",height:"400"},null,8,ne)]),Object(a["e"])("div",ce,[Object(a["e"])("p",oe,Object(a["l"])(l.beerName),1),Object(a["e"])("ul",ue,[Object(a["e"])("li",be,[de,Object(a["e"])("span",null,Object(a["l"])(l.alcohol),1)]),Object(a["e"])("li",pe,[he,Object(a["e"])("span",null,Object(a["l"])(l.blg),1)]),Object(a["e"])("li",me,[fe,Object(a["e"])("span",null,Object(a["l"])(l.brand),1)]),Object(a["e"])("li",je,[Oe,Object(a["e"])("span",null,Object(a["l"])(l.hop),1)]),Object(a["e"])("li",_e,[ve,Object(a["e"])("span",null,Object(a["l"])(l.ibu),1)]),Object(a["e"])("li",ge,[ye,Object(a["e"])("span",null,Object(a["l"])(l.malts),1)]),Object(a["e"])("li",Be,[Se,Object(a["e"])("span",null,Object(a["l"])(l.yeast),1)])])])]),Object(a["e"])("button",{class:"beer__change",onClick:t[1]||(t[1]=function(){return i.change&&i.change.apply(i,arguments)})},Object(a["l"])(l.buttonTitle),1)])])}r("fb6a");var Ne={name:"Beer",data:function(){return{beerName:null,alcohol:null,blg:null,brand:null,hop:null,ibu:null,malts:null,yeast:null,errored:!1,beerImage:null,title:null,buttonTitle:"Get beer!",previousBeer:[],previousBeerItem:{}}},methods:{change:function(e){var t=this;e.preventDefault();var r=document.querySelector(".beer__wrapper"),a=document.querySelector(".beer__previous");0!==this.previousBeer.length&&(a.classList.contains("visible")||a.classList.add("visible")),this.previousBeerItem.image=this.beerImage,this.previousBeerItem.name=this.beerName,this.previousBeerItem.alcohol=this.alcohol,this.previousBeerItem.blg=this.blg,this.previousBeerItem.brand=this.brand,this.previousBeerItem.hop=this.hop,this.previousBeerItem.ibu=this.ibu,this.previousBeerItem.malts=this.malts,this.previousBeerItem.yeast=this.yeast;var s={};Object.assign(s,this.previousBeerItem),this.previousBeer.push(s),console.log(this.previousBeer),r.classList.contains("visible")||r.classList.add("visible"),this.previousBeer.length<=4?console.log(this.previousBeer.length):this.previousBeer=this.previousBeer.slice(this.previousBeer.length-4,this.previousBeer.length),this.title="Your beer for today!",this.buttonTitle="New Beer!",F.a.get("https://random-data-api.com/api/beer/random_beer").then((function(e){return t.beerName=e.data.name,t.alcohol=e.data.alcohol,t.blg=e.data.blg,t.brand=e.data.brand,t.hop=e.data.hop,t.ibu=e.data.ibu,t.malts=e.data.malts,t.yeast=e.data.yeast})).catch((function(e){console.log(e),t.errored=!0})).finally((function(){return t.loading=!1})),F.a.get("https://api.punkapi.com/v2/beers").then((function(e){return t.beerImage=e.data[Math.floor(Math.random()*(e.data.length-1))+1].image_url})).catch((function(e){console.log(e),t.errored=!0})).finally((function(){t.loading=!1;var e=document.querySelector(".beer__wrapper");e.classList.add("loaded")}))},show:function(e){e.preventDefault();var t=e.target.classList.value;this.beerImage=this.previousBeer[t].image,this.beerName=this.previousBeer[t].name,this.alcohol=this.previousBeer[t].alcohol,this.blg=this.previousBeer[t].alcohol,this.brand=this.previousBeer[t].brand,this.hop=this.previousBeer[t].hop,this.ibu=this.previousBeer[t].ibu,this.malts=this.previousBeer[t].malts,this.yeast=this.previousBeer[t].yeast}}};const Ie=R()(Ne,[["render",we]]);var ke=Ie,Pe={name:"App",components:{Profile:V,Beer:ke}};const Ce=R()(Pe,[["render",n]]);var Te=Ce;Object(a["b"])(Te).mount("#app")},fce9:function(e,t,r){}});
//# sourceMappingURL=app.06ca445e.js.map