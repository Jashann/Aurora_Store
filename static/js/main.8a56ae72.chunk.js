(this.webpackJsonpaurora=this.webpackJsonpaurora||[]).push([[0],{29:function(e,t,a){e.exports=a.p+"static/media/logo.434a2f53.png"},42:function(e,t,a){},49:function(e,t,a){e.exports=a(76)},54:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(30),r=a.n(c),o=(a(54),a(4)),s=a(26),l=a.n(s);a(55),a(57),a(77);l.a.initializeApp({apiKey:"AIzaSyBr8LjoxLy4HVMsPGKGQ51SENxww_UMYnQ",authDomain:"aurora-store-a408a.firebaseapp.com",databaseURL:"https://aurora-store-a408a.firebaseio.com",projectId:"aurora-store-a408a",storageBucket:"aurora-store-a408a.appspot.com",messagingSenderId:"805013228349",appId:"1:805013228349:web:2bf44071b59c28b6a25354",measurementId:"G-W73TFHG51X"}),l.a.analytics();var m=l.a.auth(),u=l.a.firestore(),p=new l.a.auth.GoogleAuthProvider,d=function(){function e(){var e=document.querySelector(".messages"),t=e.querySelector(".message");e.style.display="none",t&&t.remove()}return{showMessage:function(t,a){var n=document.querySelector(".messages");n.style.display="block";var i=document.createElement("div");i.className="message d-flex py-2 px-2",i.innerHTML="".concat(t,'\n        <div class="close-btn">\n          <ion-icon name="close-circle-outline"></ion-icon>\n        </div>'),n.prepend(i);var c=document.querySelector("#signInLink");c.style.display="none",n.classList.contains("pb-2")&&n.classList.remove("pb-2"),"Sign in"===a&&(c.style.display="flex",n.classList.add("pb-2")),window.scrollTo(0,0),d.initaliseEventListeners(),setTimeout(e,7e3)},hideMessage:e,initaliseEventListeners:function(t){document.querySelector(".message .close-btn").addEventListener("click",(function(){e()}))}}}(),h=function(){m.signInWithPopup(p).then((function(e){return d.showMessage("[Google], Signed in")})).catch((function(e){return d.showMessage(e.message)}))},g=function(e,t,a){m.createUserWithEmailAndPassword(e,t).then((function(e){b(),a(e)})).catch((function(e){d.showMessage(e.message),a(!1)}))};function b(){m.currentUser.sendEmailVerification().then((function(){d.showMessage("Verfication email sent to the provided email")})).catch((function(e){return d.showMessage(e.errorMessage)}))}function f(e){var t=m.currentUser;m.signOut().then((function(){!1!==e&&d.showMessage("[Sign out] ".concat(t.email," is signed out"))})).catch((function(e){return console.log(e)}))}var E=a(34),j="",v=function(e,t,a){u.collection("users").doc(e).get().then((function(e){e.exists?(a&&console.log("[Get User Data (DB)]",e.data()),t(e.data())):(a&&console.log("[Get User Data (DB)]","User cannot be found in Database"),t(null))})).catch((function(e){console.log("[Get User Data (DB)]",e),t("error")}))},k=function(e,t,a){u.collection("users").doc(e).onSnapshot((function(e){e.exists?(a&&console.log("[Get User Data (DB)]",e.data()),t(e.data())):(a&&console.log("[Get User Data (DB)]","User cannot be found in Database"),t(null))}))},y=function(e){u.collection("users").doc(j).update(e).then((function(){console.log("Product updated")})).catch((function(e){console.error("Error updating a product",e)}))},S=function(e,t){v(j,(function(a){if(a&&"error"!==a){var n=a.products.cart,i=n[t];"add"===e&&(i+=1),"remove"===e&&(i-=1),"delete"===e&&(i=-999),n[t]=i,i<=0&&delete n[t];var c=0;Object.values(n).forEach((function(e){return c+=e})),y({products:{cart:n,total:c}})}}),!1)},w=a(6),O=a(23),N=Object(O.b)({name:"user",initialState:{authenticated:!1,user:null},reducers:{setUser:function(e,t){e.authenticated=t.payload.authenticated,e.user=t.payload.user}}}),x=N.reducer,$=N.actions.setUser,C=function(e){return e.user},L=Object(O.b)({name:"data",initialState:{category:[{name:"Hats",img:"https://i.ibb.co/7J3styf/hat.jpg"},{name:"shoes",img:"https://i.ibb.co/BqbDzCQ/shoe.jpg"},{name:"Women",img:" https://i.ibb.co/2YtD6Fy/women-clothing.jpg"},{name:"Men",img:"https://i.ibb.co/NFcPrKM/men-clothing.jpg"}],products:{hats:[{id:"hat1",name:"Puma Hat",price:"$19",img:"https://i.ibb.co/4W6Xdqs/4-min.jpg"},{id:"hat2",name:"Nike Hat",price:"$29",img:"https://i.ibb.co/Ws857m5/2-min.jpg"},{id:"hat3",name:"Addidas Hat",price:"$25",img:"https://i.ibb.co/4YJW3PX/1-min.jpg"},{id:"hat4",name:"Addidas Premiun Hat",price:"$35",img:"https://i.ibb.co/h2FZ8mw/3-min.jpg"},{id:"hat5",name:"Limited Edition",price:"$50",img:"https://i.ibb.co/K2n1Pf9/5.jpg"},{id:"hat6",name:"Editor's Choice",price:"$49",img:"https://i.ibb.co/kyqkNf3/6.jpg"},{id:"hat7",name:"Sunshine",price:"$42",img:"https://i.ibb.co/f9nhDbz/7.jpg"},{id:"hat8",name:"Premiun Guard",price:"$39",img:"https://i.ibb.co/tcLFRpT/8.jpg"},{id:"hat9",name:"Sun Protectiom",price:"$35",img:"https://i.ibb.co/5W1qwBs/9.jpg"}],women:[{id:"cloth1",name:"Long Black Coat",price:"$89",img:"https://i.ibb.co/0J4RF0k/long-black-coat.jpg"},{id:"cloth2",name:"Stylish Dress",price:"$109",img:"https://i.ibb.co/QfFBL8W/stylish-dress.jpg"},{id:"cloth3",name:"Black Leather Jacket",price:"$99",img:"https://i.ibb.co/TmQ86W7/black-leather.jpg"},{id:"cloth4",name:"Black Hoodie",price:"$69",img:"https://i.ibb.co/pbkCYJG/black-hoodie.jpg"},{id:"cloth5",name:"Blue Denim Jacket",price:"$79",img:" https://i.ibb.co/Q6VRp8S/blue-denim-jacket.jpg"},{id:"cloth6",name:"White Knit Sweater",price:"$89",img:"https://i.ibb.co/8rXP8MZ/white-knit-sweater.jpg"},{id:"cloth7",name:"Brown Coat",price:"$81",img:" https://i.ibb.co/d4mFNJp/brown-coat.jpg"},{id:"cloth8",name:"Limited Edition Sweater",price:"$75",img:"https://i.ibb.co/x8qSLg2/sweater.jpg"}],shoes:[{id:"shoe1",name:"Nike Limited Edition",price:"$89",img:"https://i.ibb.co/gDY837v/nike-1.jpg"},{id:"shoe2",name:"Special Limited Edition",price:"$79",img:"https://i.ibb.co/khL16bF/1.jpg"},{id:"shoe3",name:"X Limited Edition",price:"$49",img:"https://i.ibb.co/4jSGT1W/3.jpg"},{id:"shoe4",name:"Nike Premium ",price:"$59",img:"https://i.ibb.co/zmDnL0V/nike-2.jpg"},{id:"shoe5",name:"All Star Comfy",price:"$99",img:"https://i.ibb.co/LnnhgS6/all-star.jpg"},{id:"shoe6",name:"Comfy Leather Shoe",price:"$87",img:"https://i.ibb.co/L58RGTQ/leather.jpg"},{id:"shoe7",name:"Nike Comfy",price:"$59",img:"https://i.ibb.co/dWZmY8t/nike-3.jpg"}],men:[{id:"men1",name:"Black Jacket",price:"$89",img:"https://i.ibb.co/RhGNkDV/black-jacket.jpg"},{id:"men2",name:"Black Leather Jacket",price:"$99",img:"https://i.ibb.co/T26f0mV/black-leather-jacket.jpg"},{id:"men3",name:"Denim Jacket",price:"$69",img:"https://i.ibb.co/xX0gdt2/denim-jacket.jpg"},{id:"men4",name:"Long Black Blazer",price:"$99",img:"https://i.ibb.co/xJ6KYDJ/long-black-blazer.jpg"},{id:"men5",name:"Long Coat",price:"$89",img:"https://i.ibb.co/rxtPFzy/long-coat.jpg"},{id:"men6",name:"Wool Jacket",price:"$119",img:"https://i.ibb.co/vk2rcm7/wool-jacket.jpg"},{id:"men7",name:"White Hoodie",price:"$59",img:"https://i.ibb.co/vm3SQhD/white-hoodie.jpg"},{id:"men8",name:"White Crew T-shirt",price:"$25",img:"https://i.ibb.co/0Gr3Dfn/white-crew-neck-t-sh-r-X3iy.jpg"},{id:"men9",name:"Outcast T-shirt",price:"$19",img:"https://i.ibb.co/qxZWSSk/outcast-tshirt.jpg"}]}}}).reducer,D=function(e){return e.data},A=a(25);var P=function(e){var t=e.component,a=e.authenticated,n=Object(A.a)(e,["component","authenticated"]);return i.a.createElement(o.b,Object.assign({},n,{render:function(e){return!0===a?i.a.createElement(t,e):i.a.createElement(o.a,{to:{pathname:"/Aurora_Store/sign-in",state:{from:e.location}}})}}))};var B=function(e){var t=e.component,a=e.authenticated,n=Object(A.a)(e,["component","authenticated"]);return i.a.createElement(o.b,Object.assign({},n,{render:function(e){return!1===a?i.a.createElement(t,e):i.a.createElement(o.a,{to:"/Aurora_Store"})}}))};a(65),a(66);function W(e){var t=e.name,a=e.img,n=Object(o.g)();return i.a.createElement("div",{className:"showcase-grid-item",onClick:function(){return n.push("/Aurora_Store/shop/".concat(t))}},i.a.createElement("img",{className:"showcase-grid-item-img",src:a,alt:t}),i.a.createElement("div",{className:"showcase-grid-item-content"},i.a.createElement("div",{id:"text",className:"flex-center"},t," ",i.a.createElement("ion-icon",{name:"arrow-forward-circle-outline"})," ")))}var J={category:[{name:"Hats",img:"https://i.ibb.co/7J3styf/hat.jpg"},{name:"shoes",img:"https://i.ibb.co/BqbDzCQ/shoe.jpg"},{name:"Women",img:" https://i.ibb.co/2YtD6Fy/women-clothing.jpg"},{name:"Men",img:"https://i.ibb.co/NFcPrKM/men-clothing.jpg"}],products:{hats:[{id:"hat1",name:"Puma Hat",price:"$19",img:"https://i.ibb.co/4W6Xdqs/4-min.jpg"},{id:"hat2",name:"Nike Hat",price:"$29",img:"https://i.ibb.co/Ws857m5/2-min.jpg"},{id:"hat3",name:"Addidas Hat",price:"$25",img:"https://i.ibb.co/4YJW3PX/1-min.jpg"},{id:"hat4",name:"Addidas Premiun Hat",price:"$35",img:"https://i.ibb.co/h2FZ8mw/3-min.jpg"},{id:"hat5",name:"Limited Edition",price:"$50",img:"https://i.ibb.co/K2n1Pf9/5.jpg"},{id:"hat6",name:"Editor's Choice",price:"$49",img:"https://i.ibb.co/kyqkNf3/6.jpg"},{id:"hat7",name:"Sunshine",price:"$42",img:"https://i.ibb.co/f9nhDbz/7.jpg"},{id:"hat8",name:"Premiun Guard",price:"$39",img:"https://i.ibb.co/tcLFRpT/8.jpg"},{id:"hat9",name:"Sun Protectiom",price:"$35",img:"https://i.ibb.co/5W1qwBs/9.jpg"}],women:[{id:"cloth1",name:"Long Black Coat",price:"$89",img:"https://i.ibb.co/0J4RF0k/long-black-coat.jpg"},{id:"cloth2",name:"Stylish Dress",price:"$109",img:"https://i.ibb.co/QfFBL8W/stylish-dress.jpg"},{id:"cloth3",name:"Black Leather Jacket",price:"$99",img:"https://i.ibb.co/TmQ86W7/black-leather.jpg"},{id:"cloth4",name:"Black Hoodie",price:"$69",img:"https://i.ibb.co/pbkCYJG/black-hoodie.jpg"},{id:"cloth5",name:"Blue Denim Jacket",price:"$79",img:" https://i.ibb.co/Q6VRp8S/blue-denim-jacket.jpg"},{id:"cloth6",name:"White Knit Sweater",price:"$89",img:"https://i.ibb.co/8rXP8MZ/white-knit-sweater.jpg"},{id:"cloth7",name:"Brown Coat",price:"$81",img:" https://i.ibb.co/d4mFNJp/brown-coat.jpg"},{id:"cloth8",name:"Limited Edition Sweater",price:"$75",img:"https://i.ibb.co/x8qSLg2/sweater.jpg"}],shoes:[{id:"shoe1",name:"Nike Limited Edition",price:"$89",img:"https://i.ibb.co/gDY837v/nike-1.jpg"},{id:"shoe2",name:"Special Limited Edition",price:"$79",img:"https://i.ibb.co/khL16bF/1.jpg"},{id:"shoe3",name:"X Limited Edition",price:"$49",img:"https://i.ibb.co/4jSGT1W/3.jpg"},{id:"shoe4",name:"Nike Premium ",price:"$59",img:"https://i.ibb.co/zmDnL0V/nike-2.jpg"},{id:"shoe5",name:"All Star Comfy",price:"$99",img:"https://i.ibb.co/LnnhgS6/all-star.jpg"},{id:"shoe6",name:"Comfy Leather Shoe",price:"$87",img:"https://i.ibb.co/L58RGTQ/leather.jpg"},{id:"shoe7",name:"Nike Comfy",price:"$59",img:"https://i.ibb.co/dWZmY8t/nike-3.jpg"}],men:[{id:"men1",name:"Black Jacket",price:"$89",img:"https://i.ibb.co/RhGNkDV/black-jacket.jpg"},{id:"men2",name:"Black Leather Jacket",price:"$99",img:"https://i.ibb.co/T26f0mV/black-leather-jacket.jpg"},{id:"men3",name:"Denim Jacket",price:"$69",img:"https://i.ibb.co/xX0gdt2/denim-jacket.jpg"},{id:"men4",name:"Long Black Blazer",price:"$99",img:"https://i.ibb.co/xJ6KYDJ/long-black-blazer.jpg"},{id:"men5",name:"Long Coat",price:"$89",img:"https://i.ibb.co/rxtPFzy/long-coat.jpg"},{id:"men6",name:"Wool Jacket",price:"$119",img:"https://i.ibb.co/vk2rcm7/wool-jacket.jpg"},{id:"men7",name:"White Hoodie",price:"$59",img:"https://i.ibb.co/vm3SQhD/white-hoodie.jpg"},{id:"men8",name:"White Crew T-shirt",price:"$25",img:"https://i.ibb.co/0Gr3Dfn/white-crew-neck-t-sh-r-X3iy.jpg"},{id:"men9",name:"Outcast T-shirt",price:"$19",img:"https://i.ibb.co/qxZWSSk/outcast-tshirt.jpg"}]}},_=function(e){e.history;return i.a.createElement("div",{className:"showcase-grid mt-4 mx-3"},J.category.map((function(e){return i.a.createElement(W,{key:e.name,name:e.name,img:e.img})})))};var M=function(){return i.a.createElement(_,null)},q=a(20),G=a(21),U=a(28),T=a(24),H=a(22),F=a(14),I=a(15);function z(){var e=Object(F.a)(["\n  border: none;\n  height: 40px;\n  width: 100%;\n  color: #333;\n  background: #e8f0fe;\n  padding: 0px 19px;\n  display: block;\n  border-radius: 100px;\n  font-family: Quicksand;\n  font-size: 1.05rem;\n  transition: 0.1s;\n  &:focus {\n    outline: none;\n  }\n  &:hover {\n    opacity: 0.9;\n    transform: scale(1.01);\n  }\n"]);return z=function(){return e},e}function Q(){var e=Object(F.a)(["\n  padding-left: 7px;\n"]);return Q=function(){return e},e}function R(){var e=Object(F.a)(["\n  margin: 1.4rem 0;\n  & > * {\n    display: block;\n  }\n"]);return R=function(){return e},e}var Y=I.b.div(R()),V=I.b.label(Q()),X=I.b.input(z()),K=function(e){Object(T.a)(a,e);var t=Object(H.a)(a);function a(){return Object(q.a)(this,a),t.apply(this,arguments)}return Object(G.a)(a,[{key:"render",value:function(){var e=this.props,t=e.children,a=Object(A.a)(e,["children"]);return i.a.createElement(Y,null,i.a.createElement(V,null," ",t," "),i.a.createElement(X,Object.assign({required:!0,autoComplete:"false"},a)))}}]),a}(i.a.Component),Z=a(2);function ee(){var e=Object(F.a)(["\n      background: #44c3ff;\n    "]);return ee=function(){return e},e}function te(){var e=Object(F.a)(["\n      background: #6ddba4;\n    "]);return te=function(){return e},e}function ae(){var e=Object(F.a)(["\n  border: none;\n  height: 40px;\n  background: #c3c3c329;\n  padding: 0px 19px;\n  display: block;\n  border-radius: 100px;\n  width: 100%;\n  color: #333;\n  font-family: Quicksand;\n  font-size: 1.05rem;\n  transition: 0.1s;\n  font-weight: 700;\n  cursor: pointer;\n  &:focus {\n    outline: none;\n  }\n  &:hover {\n    opacity: 0.9;\n    transform: scale(1.01);\n  }\n  ","\n  ","\n"]);return ae=function(){return e},e}var ne=I.b.button(ae(),(function(e){return e.primary&&Object(I.a)(te())}),(function(e){return e.secondary&&Object(I.a)(ee())})),ie=function(e){Object(T.a)(a,e);var t=Object(H.a)(a);function a(){var e;return Object(q.a)(this,a),(e=t.call(this)).state={email:""},e.handleChange=e.handleChange.bind(Object(U.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(U.a)(e)),e}return Object(G.a)(a,[{key:"handleChange",value:function(e){var t=e.target.value;this.setState({email:t})}},{key:"handleSubmit",value:function(e){var t;e.preventDefault(),t=this.state.email,m.sendPasswordResetEmail(t).then((function(){d.showMessage("Password reset instructions sent to the provided email.")})).catch((function(e){d.showMessage(e.message)}))}},{key:"render",value:function(){return i.a.createElement("form",{onSubmit:this.handleSubmit,id:"reset-password",className:"my-3 p-3"},i.a.createElement(K,{onChange:this.handleChange,value:this.state.email,type:"email"},"Email:"),i.a.createElement(ne,{primary:!0,className:"btn btn-primary"},"Reset Password"),i.a.createElement("div",{className:"mt-3"},i.a.createElement(Z.b,{className:"text-primary",to:"/Aurora_Store/sign-in"},"Go to Sign Page")))}}]),a}(i.a.Component),ce=a(7),re=(a(42),function(){var e=Object(n.useState)(""),t=Object(ce.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(ce.a)(r,2),l=s[0],u=s[1],p=function(e){var t=e.target,a=t.name,n=t.value;"email"===a&&c(n),"password"===a&&u(n)},g=Object(o.h)().path;return i.a.createElement("div",{className:"px-3 sign-in"},i.a.createElement("h2",null,"Sign In"),i.a.createElement("span",null,"I already have an account"),i.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(e,t){m.signInWithEmailAndPassword(e,t).then((function(e){e.user.emailVerified?console.log("[Email and Password]","Signed in"):b()})).catch((function(e){return d.showMessage(e.message)}))}(a,l)},autoComplete:"off",className:"my-2"},i.a.createElement(K,{onChange:p,type:"email",name:"email"},"Email/Username:"),i.a.createElement(K,{onChange:p,type:"password",name:"password"},"Password"),i.a.createElement("div",{className:"d-flex mb-1"},i.a.createElement(ne,{primary:!0,type:"submit"},"Sign In"),i.a.createElement(ne,{secondary:!0,onClick:h,type:"button",className:"ml-1"},"Sign in with Google")),i.a.createElement(Z.b,{className:"text-primary",to:g+"/reset-password"},"Forget Password?"),i.a.createElement("br",null),i.a.createElement(Z.b,{className:"text-primary font-2",to:"/Aurora_Store/sign-up"},"Don't have account? Sign Up Now!")))}),oe=a(38),se=a.n(oe),le=a(48),me=function(){var e=Object(o.g)(),t=Object(n.useState)(""),a=Object(ce.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(""),l=Object(ce.a)(s,2),m=l[0],u=l[1],p=Object(n.useState)(""),h=Object(ce.a)(p,2),b=h[0],f=h[1],E=function(){var t=Object(le.a)(se.a.mark((function t(a){return se.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),m===b?g(c,m,(function(t){t&&e.push("/Aurora_Store/sign-in")})):d.showMessage("Passwords don't match"),r(""),u(""),f("");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(e){var t=e.target,a=t.name,n=t.value;"email"===a&&r(n),"password"===a&&u(n),"confirm_password"===a&&f(n)};return i.a.createElement("div",{className:"px-3 sign-in"},i.a.createElement("h2",null,"Sign Up"),i.a.createElement("span",null,"I don't have an acoount"),i.a.createElement("form",{onSubmit:E,autoComplete:"false",className:"my-2"},i.a.createElement(K,{onChange:j,name:"email",type:"email"},"Email"),i.a.createElement(K,{onChange:j,name:"password",type:"password"},"Password"),i.a.createElement(K,{onChange:j,name:"confirm_password",type:"password"},"Confirm Password"),i.a.createElement(ne,{primary:!0,type:"submit"},"Sign Up"),i.a.createElement("br",null),i.a.createElement(Z.b,{className:"text-primary font-2",to:"/Aurora_Store/sign-in"},"Go To Sign In Page!")))},ue=a(32);a(68);function pe(e){var t=e.img,a=e.name,n=e.price,c=Object(w.c)(C);if(c.authenticated){var r=JSON.parse(c.user);r.email}return i.a.createElement("div",{className:"product"},i.a.createElement("div",{className:"product-main",style:{background:"url(".concat(t,") no-repeat center center/cover")}},i.a.createElement("button",{onClick:function(e){if(c.authenticated){var t=e.target.parentElement.parentElement.querySelector(".product-name").textContent;!function(e,t,a){v(j,(function(e){if(e&&"error"!==e){var n,i=e.products.cart;i.hasOwnProperty(a)?(i[a]+=1,n=i):n=Object(E.a)(Object(E.a)({},i),t);var c=0;Object.values(n).forEach((function(e){return c+=e})),y({products:{cart:n,total:c}})}}))}(0,Object(ue.a)({},t,1),t)}else d.showMessage("You need to be signed to add product in cart","Sign in")},className:"btn-cart"},"Add to Cart ",i.a.createElement("ion-icon",{name:"cart-outline"})," ")),i.a.createElement("div",{className:"product-info"},i.a.createElement("span",{className:"product-name"},a)," : \xa0",i.a.createElement("span",{className:"product-price"},n)))}a(69);function de(e){var t=e.category,a=e.products,n=e.max,c=Object(o.g)();return i.a.createElement("div",{className:"products"},i.a.createElement("h2",{className:"products-category",onClick:function(){return c.push("/Aurora_Store/shop/"+t)}},"#",t,void 0!==n?i.a.createElement("ion-icon",{name:"arrow-forward-circle-outline"}):null),i.a.createElement("div",{className:"products-container"},a.map((function(e,t){var a=e.name,c=e.img,r=e.id,o=e.price;return void 0===n||n>t?i.a.createElement(pe,{key:r,name:a,img:c,id:r,price:o}):null}))))}a(70);function he(e){var t=e.product,a=t.name,n=t.price,c=t.img,r=t.quantity,o=function(e){var t=e.target.name,a=e.target.parentElement.parentElement.parentElement.querySelector(".product-name").textContent;t.includes("add")&&S("add",a),t.includes("remove")&&S("remove",a)};return i.a.createElement("div",{className:"cart-item"},i.a.createElement("span",null,i.a.createElement("img",{src:c,alt:"product"})),i.a.createElement("span",{className:"product-name"},a),i.a.createElement("span",{className:"flex-center"},i.a.createElement("span",{className:"icon-span"},i.a.createElement("ion-icon",{onClick:o,name:"remove-circle-outline"})),i.a.createElement("span",{className:"quantity"},r),i.a.createElement("span",{className:"icon-span"},i.a.createElement("ion-icon",{onClick:o,name:"add-circle-outline"}))),i.a.createElement("span",null,n,"$"),i.a.createElement("span",null,i.a.createElement("ion-icon",{onClick:function(e){!function(e){S("delete",e)}(e.target.parentElement.parentElement.querySelector(".product-name").textContent)},name:"close-outline"})))}var ge=function(){var e=Object(n.useState)(null),t=Object(ce.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),o=Object(ce.a)(r,2),s=o[0],l=o[1],m=Object(w.c)(C),u="";function p(e,t){return e.name<t.name?-1:e.name>t.name?1:0}return Object(n.useEffect)((function(){if(m.authenticated){var e=JSON.parse(m.user);""!==(u=e.email)&&m.authenticated&&null===a&&k(u,(function(e){!function(e){var t=Object.keys(e),a=Object.values(e),n=Object.entries(J.products),i=[],r=0;t.forEach((function(e,t){n.forEach((function(n){n[1].forEach((function(n){if(n.name===e){n.quantity=a[t];var c=n.price.slice(1);r+=Number(c)*n.quantity,i.push(n)}}))}))})),l(r);var o=i.sort(p);c(o)}(e.products.cart)}))}})),i.a.createElement("div",{className:"container cart-items mx-3 mb-5"},i.a.createElement("div",{className:"cart-header"},i.a.createElement("span",{className:"product-img"},"Product"),i.a.createElement("span",null,"Description"),i.a.createElement("span",null,"Quantity"),i.a.createElement("span",null,"Price"),i.a.createElement("span",null,"Remove")),a?a.map((function(e){return i.a.createElement(he,{key:e.id,product:e})})):null,i.a.createElement("div",{className:"d-flex"},i.a.createElement(ne,{primary:!0,className:"mt-2 mb-1"},"Pay Now ",s?":  $".concat(s):null)))};function be(){var e=Object(w.c)(D),t=Object(o.h)(),a=t.params.category,n=t.params.category.toLowerCase();return i.a.createElement(de,{category:a,products:e.products[n]})}a(71);function fe(){var e=Object(n.useState)(null),t=Object(ce.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),o=Object(ce.a)(r,2),s=o[0],l=o[1],m=[],u=Object(w.c)(D);a||c(u);return s&&Object.entries(a.products).forEach((function(e){return e[1].forEach((function(e){var t=e.name.toLowerCase(),a=s.toLowerCase();t.includes(a)&&m.push(e)}))})),i.a.createElement("div",{className:"search-form-container p-3 "},i.a.createElement("form",{className:"d-flex flex-center"},i.a.createElement("input",{type:"text",placeholder:"Enter a product name: Nike Hat",className:"font-1",onChange:function(e){return l(e.target.value)}}),i.a.createElement("button",{id:"search-btn",className:"flex-center",type:"submit"},i.a.createElement("ion-icon",{name:"search-outline"}))),m&&s.length>0?i.a.createElement(de,{category:"Filtered Products",products:m}):null)}var Ee=a(29),je=a.n(Ee),ve=(a(72),a(73),function(){var e=Object(o.g)(),t=Object(n.useState)(0),a=Object(ce.a)(t,2),c=a[0],r=a[1],s=Object(w.c)(C),l=s.authenticated,m=JSON.parse(s.user);return m&&k(m.email,(function(e){r(e.products.total)})),l?i.a.createElement("div",{onClick:function(){return e.push("/Aurora_Store/cart")},id:"cart-icon-container",className:"flex-center"},i.a.createElement("ion-icon",{name:"cart-outline"})," ",i.a.createElement("span",null,"(",c,")")):null});function ke(){document.querySelector("#side-nav").classList.toggle("open"),document.body.classList.toggle("open")}var ye=function(e){var t=e.authenticated;return i.a.createElement("header",null,i.a.createElement("nav",{className:"header"},i.a.createElement("div",{className:"header-container"},i.a.createElement(Z.b,{to:"/",className:"header-logo"},i.a.createElement("img",{src:je.a,alt:""})),i.a.createElement(ve,{authenticated:t}),i.a.createElement("div",{onClick:ke,id:"menu-icon"},i.a.createElement("ion-icon",{name:"menu-outline",size:"large"})))),i.a.createElement("ul",{id:"side-nav",className:"side-nav"},i.a.createElement("li",{onClick:ke},i.a.createElement(Z.b,{to:"/Aurora_Store"},i.a.createElement("img",{src:je.a,alt:"logo"}))),i.a.createElement("li",{onClick:ke},i.a.createElement(Z.b,{to:"/Aurora_Store/"},i.a.createElement("ion-icon",{name:"home-outline"})," ",i.a.createElement("span",null,"Home"))),i.a.createElement("li",{onClick:ke},i.a.createElement(Z.b,{to:"/Aurora_Store/shop"},i.a.createElement("span",null," ",i.a.createElement("ion-icon",{name:"pricetag-outline"})," Shop"))),i.a.createElement("li",{onClick:ke},i.a.createElement(Z.b,{to:"/Aurora_Store/search"},i.a.createElement("ion-icon",{name:"search-outline"}),i.a.createElement("span",null,"Search"))),i.a.createElement("li",{onClick:ke},t?i.a.createElement(Z.b,{onClick:f,to:"/Aurora_Store"},i.a.createElement("ion-icon",{name:"log-out-outline"}),i.a.createElement("span",null,"Sign Out")):i.a.createElement(Z.b,{to:"/Aurora_Store/sign-in"},i.a.createElement("ion-icon",{name:"log-in-outline"}),i.a.createElement("span",null,"Sign In"))),i.a.createElement("li",{onClick:ke},t?i.a.createElement(Z.b,{to:"/Aurora_Store/cart"},i.a.createElement("ion-icon",{name:"cart-outline"}),i.a.createElement("span",null,"Cart")):i.a.createElement("a",{href:".",onClick:function(e){e.preventDefault(),d.showMessage("You need to be signed to go to Cart","Sign in")}},i.a.createElement("ion-icon",{name:"cart-outline"}),i.a.createElement("span",null,"Cart")))))},Se=(a(74),function(){var e=Object(o.g)();return i.a.createElement("div",{style:{display:"block"},className:"messages"},i.a.createElement("div",{id:"signInLink",className:"container flex-center"},i.a.createElement(ne,{primary:!0,type:"submit",className:"btn btn-secondary",onClick:function(){e.push("/Aurora_Store/sign-in"),d.hideMessage()}},"Sign In")))});a(75);function we(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"container"},i.a.createElement(Z.b,{className:"logo",to:"/Aurora_Store"},i.a.createElement("img",{src:je.a,alt:"logo"})),i.a.createElement("div",{className:"font-2"}," \xa9 All Rights Reserved "),i.a.createElement("div",{className:"social-media"},i.a.createElement("a",{className:"icon-container d-flex flex-center",target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/profile.php?id=100041474625043"},i.a.createElement("ion-icon",{name:"logo-facebook"})),i.a.createElement("a",{className:"icon-container d-flex flex-center",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Jashann"},i.a.createElement("ion-icon",{name:"logo-github"})),i.a.createElement("a",{className:"icon-container d-flex flex-center",target:"_blank",rel:"noopener noreferrer",href:"mailto:jashangill3592@gmail.com?subject=I want to be connected to you"},i.a.createElement("ion-icon",{name:"mail-outline"})))))}var Oe=function(){var e=Object(w.c)(D).products,t=e.hats,a=e.men,c=e.women,r=e.shoes,s=Object(w.b)();Object(n.useEffect)((function(){var e;e=function(e){if(e){var t=e.email;n={email:t,products:{total:0,cart:{}}},j=a=t,v(a,(function(e){e||"error"===e?console.log("[Set User (DB)]","The user is already in Database"):u.collection("users").doc(a).set(n).then((function(){return console.log("[Set User (DB)]","The user is stored into Database")})).catch((function(e){return console.log("[Set User (DB)]",e.message)}))})),s($({authenticated:!0,user:JSON.stringify(e)}))}else s($({authenticated:!1,user:null}));var a,n},m.onAuthStateChanged((function(t){t?t.emailVerified?(console.log("[AUTH]","User is currently logged in"),e(t)):f(!1):(console.log("[AUTH]","User is currently logged out"),e(null))}))}));var l=Object(w.c)(C);return i.a.createElement("div",{className:"App"},i.a.createElement(ye,{authenticated:l.authenticated}),i.a.createElement(Se,null),i.a.createElement(o.d,null,i.a.createElement(o.b,{path:"/Aurora_Store/",exact:!0},i.a.createElement(M,null)),i.a.createElement(o.b,{exact:!0,path:"/Aurora_Store/shop/:category"},i.a.createElement(be,null)),i.a.createElement(o.b,{path:"/Aurora_Store/shop",exact:!0},i.a.createElement(de,{category:"Hats",products:t,max:5}),";",i.a.createElement(de,{category:"shoes",products:r,max:5}),";",i.a.createElement(de,{category:"Women",products:c,max:5}),";",i.a.createElement(de,{category:"Men",products:a,max:5}),";"),i.a.createElement(o.b,{path:"/Aurora_Store/search",exact:!0},i.a.createElement(fe,null)),i.a.createElement(B,{path:"/Aurora_Store/sign-in",exact:!0,authenticated:l.authenticated,component:re}),i.a.createElement(B,{path:"/Aurora_Store/sign-up",exact:!0,authenticated:l.authenticated,component:me}),i.a.createElement(B,{path:"/Aurora_Store/sign-in/reset-password",exact:!0,authenticated:l.authenticated,component:ie}),i.a.createElement(P,{path:"/Aurora_Store/cart",exact:!0,authenticated:l.authenticated,component:ge}),i.a.createElement(o.a,{to:"/Aurora_Store"})),i.a.createElement(we,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ne=Object(O.a)({reducer:{user:x,data:L}}),xe=function(e){Object(T.a)(a,e);var t=Object(H.a)(a);function a(){return Object(q.a)(this,a),t.apply(this,arguments)}return Object(G.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),a}(n.Component),$e=Object(o.i)(xe);r.a.render(i.a.createElement(w.a,{store:Ne},i.a.createElement(Z.a,null,i.a.createElement($e,null,i.a.createElement(i.a.StrictMode,null,i.a.createElement(Oe,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.8a56ae72.chunk.js.map