"use strict";(self.webpackChunkurbanstyle=self.webpackChunkurbanstyle||[]).push([[573],{440:(e,s,n)=>{n.d(s,{Z:()=>t});var a=n(184);const t=e=>{let{label:s,...n}=e;return(0,a.jsxs)("div",{className:"group",children:[(0,a.jsx)("input",{className:"form-input",...n}),(0,a.jsx)("label",{className:"".concat(n.value.length?"shrink":""," form-input-label"),children:s})]})}},9573:(e,s,n)=>{n.r(s),n.d(s,{default:()=>S});var a,t,r,i=n(5764),l=n(168),d=n(2978);const c=d.ZP.div(a||(a=(0,l.Z)(["\n  margin: 0px auto 50px auto;\n  width: 40%;\n  display: flex;\n  flex-direction: column;\n  direction:rtl;\n\n  @media (max-width: 768px) {\n    margin: 0px auto 50px auto;\n    width: 80%;\n  }\n"]))),o=d.ZP.form(t||(t=(0,l.Z)(["\n  min-width: 200px;\n  button {\n    margin-top: 30px;\n    margin-left: auto;\n  }\n  span {\n    color: red;\n    display: block;\n    margin-top: 15px;\n  }\n  @media (max-width: 768px) {\n    min-width: 90%;\n\n    button {\n      margin-top: 30px;\n      width: 100%;\n    }\n  }\n"]))),m=(0,d.ZP)(i.CardElement)(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border: 1px solid #ccc;\n  height: 50px;\n  padding: 10px;\n  margin-top: 5px;\n"])));var h=n(9859),x=n(5012),u=n(2791),p=n(1876),j=n(2630),g=n(3855),f=n(9687),v=n(440),y=n(184);const N={firstName:"",lastName:"",phone:"",address:""},b=()=>{const[e,s]=(0,u.useState)(N),{firstName:n,lastName:a,phone:t,address:r}=e,i=(0,g.v9)(p.T),[l,d]=(0,u.useState)(!1),c=(0,g.I0)(),o=n=>{const{name:a,value:t}=n.target;s({...e,[a]:t})},{cartTotal:m}=(0,u.useContext)(x.A);return(0,y.jsxs)("div",{className:"address-form-container",children:[(0,y.jsxs)("div",{className:"checkout-summary",children:[(0,y.jsx)("h5",{className:"summary-heading",children:"\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u062e\u0631\u06cc\u062f"}),(0,y.jsxs)("ul",{className:"list-group",children:[(0,y.jsxs)("li",{className:"list-group-item",children:["\u0645\u062d\u0635\u0648\u0644\u0627\u062a",(0,y.jsxs)("span",{children:[(0,y.jsx)("span",{children:m}),(0,y.jsx)("span",{children:"\u062a\u0648\u0645\u0627\u0646"})]})]}),(0,y.jsxs)("li",{className:"list-group-item",children:["\u0647\u0632\u06cc\u0646\u0647 \u062d\u0645\u0644 \u0648 \u0646\u0642\u0644",(0,y.jsxs)("span",{children:[(0,y.jsx)("span",{children:m?150:0}),(0,y.jsx)("span",{children:"\u062a\u0648\u0645\u0627\u0646"})]})]}),(0,y.jsxs)("li",{className:"list-group-item",children:[(0,y.jsx)("div",{children:(0,y.jsx)("strong",{children:"\u0645\u0628\u0644\u063a \u06a9\u0644"})}),(0,y.jsx)("span",{children:(0,y.jsxs)("strong",{children:[(0,y.jsx)("span",{children:m+(m?150:0)}),(0,y.jsx)("span",{children:"\u062a\u0648\u0645\u0627\u0646"})]})})]})]})]}),(0,y.jsxs)("div",{className:"address-form",children:[(0,y.jsx)("h5",{className:"billing-heading",children:"\u0646\u0634\u0627\u0646\u06cc \u062a\u062d\u0648\u06cc\u0644 \u06af\u06cc\u0631\u0646\u062f\u0647"}),(0,y.jsx)("div",{className:"mb-4",children:l?(0,y.jsxs)("div",{className:"currentAddressContainer",children:[(0,y.jsx)("h3",{children:"\u0622\u062f\u0631\u0633 \u0641\u0639\u0644\u06cc"}),(0,y.jsx)("div",{className:"currentAddress",children:i?(0,y.jsxs)("div",{className:"currentAddresss",children:[(0,y.jsx)("span",{children:i.firstName})," ",(0,y.jsx)("span",{children:i.lastName}),(0,y.jsx)("span",{children:i.address})," ",(0,y.jsxs)("span",{children:[" ",i.phone]})]}):"\u0647\u06cc\u0686 \u0622\u062f\u0631\u0633\u06cc \u0627\u0636\u0627\u0641\u0647 \u0646\u0634\u062f"}),(0,y.jsx)(h.Z,{onClick:()=>{d(!1),c((0,f.V)({...N}))},children:"\u0648\u06cc\u0631\u0627\u06cc\u0634 \u0622\u062f\u0631\u0633"})]}):(0,y.jsxs)("form",{onSubmit:async s=>{s.preventDefault(),c((0,f.V)({...e})),d(!0)},children:[(0,y.jsx)(v.Z,{label:"\u0646\u0627\u0645",type:"text",name:"firstName",value:n,onChange:o,required:!0}),(0,y.jsx)(v.Z,{label:"\u0646\u0627\u0645 \u062e\u0627\u0646\u0648\u0627\u062f\u06af\u06cc",name:"lastName",type:"text",value:a,onChange:o,required:!0}),(0,y.jsx)(v.Z,{label:"\u0646\u0634\u0627\u0646\u06cc",name:"address",type:"address",value:r,onChange:o,required:!0}),(0,y.jsx)(v.Z,{label:"\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644",name:"phone",type:"phone",value:t,onChange:o,required:!0}),(0,y.jsx)(h.Z,{children:"\u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0646 \u0622\u062f\u0631\u0633"})]})})]})]})};var Z=n(6641),C=n(4917),w=n(7689);const S=()=>{const e=(0,w.s0)(),s=(0,i.useStripe)(),n=(0,i.useElements)(),{cartTotal:a,updateCartItemsReducer:t,cartItems:r}=(0,u.useContext)(x.A),{addTransactionToOrders:l}=(0,u.useContext)(Z.y),d=(0,g.v9)(p.H),f=(0,g.v9)(p.T),[v,N]=(0,u.useState)(!1),[S,T]=(0,u.useState)(null),[k,I]=(0,u.useState)(!1),A=[{color:"red",message:"\u0633\u0628\u062f \u062e\u0627\u0644\u06cc \u0627\u0633\u062a \u0644\u0637\u0641\u0627 \u0645\u0648\u0627\u0631\u062f \u0631\u0627 \u0628\u0647 \u0633\u0628\u062f \u062e\u0631\u06cc\u062f \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u062f"},{color:"red",message:"\u0644\u0637\u0641\u0627 \u0622\u062f\u0631\u0633 \u062a\u062d\u0648\u06cc\u0644 \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f"},{color:"red",message:"\u067e\u0631\u062f\u0627\u062e\u062a \u0646\u0627\u0645\u0648\u0641\u0642. \u0644\u0637\u0641\u0627 \u062f\u0648\u0628\u0627\u0631\u0647 \u062a\u0644\u0627\u0634 \u06a9\u0646\u06cc\u062f."},{color:"red",message:"\u062c\u0632\u0626\u06cc\u0627\u062a \u06a9\u0627\u0631\u062a \u067e\u06cc\u062f\u0627 \u0646\u0634\u062f. \u0644\u0637\u0641\u0627 \u062c\u0632\u0626\u06cc\u0627\u062a \u0645\u0639\u062a\u0628\u0631 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f."},{color:"green",message:"\u067e\u0631\u062f\u0627\u062e\u062a \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u0627\u0646\u062c\u0627\u0645 \u0634\u062f. \u0627\u0632 \u0634\u0645\u0627 \u0628\u0627\u0628\u062a \u062e\u0631\u06cc\u062f \u0627\u0632 \u0645\u0627 \u0645\u0645\u0646\u0648\u0646\u06cc\u0645. \u062f\u0631 \u062d\u0627\u0644 \u062a\u063a\u06cc\u06cc\u0631 \u0645\u0633\u06cc\u0631 \u0628\u0647 \u0635\u0641\u062d\u0647 \u0633\u0641\u0627\u0631\u0634\u0627\u062a..."}],q=()=>{setTimeout((()=>{N(!1),T(null)}),5e3)};return(0,y.jsxs)(u.Fragment,{children:[(0,y.jsx)(b,{}),(0,y.jsxs)(c,{children:[(0,y.jsxs)(o,{onSubmit:async c=>{if(c.preventDefault(),0===a)return N(!0),T(A[0]),void q();if(!f)return N(!0),T(A[1]),void q();if(I(!0),s&&n)try{const c=await fetch("/.netlify/functions/create-payment-intent",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:100*(a+(a?150:0))})}).then((e=>(console.log(e),e.json()))),o=n.getElement(i.CardElement),{paymentIntent:{client_secret:m}}=c,h=await s.confirmCardPayment(m,{payment_method:{card:o,billing_details:{name:d.displayName,email:d.email}}});if(h.error)"Your card number is incomplete."===h.error.message?T(A[3]):T(A[2]),N(!0),q();else if("succeeded"===h.paymentIntent.status){const s={id:h.paymentIntent.id,items:r,amount:a+(a?150:0),date:"".concat(new Date),address:f};l(s),N(!0),T(A[4]),setTimeout((()=>{e("/orders")}),5e3),q(),t([])}I(!1)}catch(S){N(!0),T(A[3]),I(!1),q()}},children:[(0,y.jsx)("h3",{children:"\u067e\u0631\u062f\u0627\u062e\u062a \u06a9\u0627\u0631\u062a \u0627\u0639\u062a\u0628\u0627\u0631\u06cc:"}),(0,y.jsx)(m,{}),k?(0,y.jsx)(h.Z,{disabled:k,children:(0,y.jsx)(C.Z,{})}):(0,y.jsx)(h.Z,{disabled:k,children:"\u0627\u0644\u0627\u0646 \u067e\u0631\u062f\u0627\u062e\u062a \u06a9\u0646"})]}),v&&(0,y.jsx)(j.Z,{color:S.color,message:S.message})]})]})}}}]);
//# sourceMappingURL=573.01e267bd.chunk.js.map