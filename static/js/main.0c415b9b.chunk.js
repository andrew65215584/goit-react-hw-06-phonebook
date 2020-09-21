(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{21:function(e,t,a){e.exports={title:"filter_title__2gUFS",input:"filter_input__3sfZb"}},25:function(e,t,a){e.exports=a(39)},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),o=a.n(r),l=a(7),i=a(4),s=a(1),u=a(22),m=a(42),b=a(9),f=a.n(b),O=a(5),j=Object(O.b)("phonebook/GET_FORM_VALUE"),E=Object(O.b)("phonebook/DELETE_CONTACT"),p=Object(O.b)("phonebook/GET_FILTER_VALUE"),d=Object(O.b)("phonebook/SET_FILTERED_ARR"),v=Object(O.b)("phonebook/SET_LOCAL_DATA"),_=Object(O.b)("phonebook/SET_NOTIFY"),N=Object(O.b)("phonebook/REMOVE_FILTERED_ARR");var y={getFormValue:j,setNotify:_},h=Object(l.b)((function(e){return{items:e.contacts.items}}),y)((function(e){var t=e.getFormValue,a=e.items,r=e.setNotify,o=Object(n.useState)({name:"",number:""}),l=Object(u.a)(o,2),b=l[0],O=l[1],j=function(e){var t=e.target,a=t.name,n=t.value;O((function(e){return Object(s.a)(Object(s.a)({},e),{},Object(i.a)({},a,n))}))};return c.a.createElement("form",{className:f.a.form,onSubmit:function(e){e.preventDefault();var n=e.target;if(""!==b.name&&""!==b.number){var c=e.target.elements,o=!0;a.map((function(e){return e.name===c[0].value?o=!1:""})),o?t({name:c[0].value,number:c[1].value,id:Object(m.a)()}):r(!0),n.reset()}}},c.a.createElement("label",{className:f.a.label},"Name:",c.a.createElement("input",{className:f.a.input,type:"text",name:"name",onChange:j})),c.a.createElement("label",{className:f.a.label},"Phone:",c.a.createElement("input",{className:f.a.input,type:"tel",name:"number",onChange:j})),c.a.createElement("button",{className:f.a.button,type:"submit"},"Add contact"))})),g=(a(35),a(43)),F=a(41);var T=Object(l.b)((function(e){return{value:e.contacts.filteredItems?e.contacts.filteredItems:e.contacts.items}}),{deleteContact:E,removeFilteredArr:N})((function(e){var t=e.value,a=e.deleteContact,n=e.removeFilteredArr;return c.a.createElement(g.a,{component:"ul",className:"list"},t.map((function(e){return c.a.createElement(F.a,{key:e.id,timeout:250,classNames:"adddelete",unmountOnExit:!0},c.a.createElement("li",{className:"item",key:e.id},c.a.createElement("div",{className:"wrapper"},c.a.createElement("span",null,e.name),c.a.createElement("span",null,": ",e.number)),c.a.createElement("button",{className:"button",onClick:function(){return t=e.id,a(t),void n();var t}},"Delete")))})))})),k=a(21),A=a.n(k),C=function(e){return e.contacts.filter};var L={getFilterValue:p,setFilteredArr:d,removeFilteredArr:N},x=Object(l.b)((function(e){return{filter:C(e)}}),L)((function(e){var t=e.filter,a=e.getFilterValue,n=e.setFilteredArr,r=e.removeFilteredArr;return c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{className:A.a.input,type:"text",name:"filter",value:t,onChange:function(e){var t=e.target.value;a(t),n(t),""===t&&r()}}))})),I=(a(36),function(){return c.a.createElement("div",{className:"notify"},"This contact is already in exist!")});a(37);var S,R={setLocalData:v,setNotify:_},w=Object(l.b)((function(e){return{value:e.contacts.items,filter:e.contacts.filter,notify:e.contacts.setNotify}}),R)((function(e){var t=e.value,a=e.setLocalData,r=e.notify,o=e.setNotify;return Object(n.useEffect)((function(){var e=localStorage.getItem("items"),t=JSON.parse(e);t&&a(t)}),[a]),Object(n.useEffect)((function(){localStorage.setItem("items",JSON.stringify(t))}),[t]),c.a.createElement(c.a.Fragment,null,c.a.createElement(F.a,{in:r,timeout:2e3,classNames:"notify",unmountOnExit:!0,onEntered:function(){return o(!1)}},c.a.createElement(I,null)),c.a.createElement(F.a,{in:!0,appear:!0,timeout:2e3,classNames:"op",unmountOnExit:!0},c.a.createElement("h2",{className:"title"},"Phonebook")),c.a.createElement(h,null),c.a.createElement(F.a,{in:t.length>=1,timeout:300,unmountOnExit:!0,classNames:"title-contacts"},c.a.createElement("h2",{className:"title-contacts"},"Contacts")),c.a.createElement(F.a,{in:t.length>=2,timeout:300,unmountOnExit:!0,classNames:"filter"},c.a.createElement(x,null)),c.a.createElement(T,null))})),D=a(18),V=Object(O.c)({contacts:{items:[],filter:""}},(S={},Object(i.a)(S,j,(function(e,t){var a=t.payload;return Object(s.a)(Object(s.a)({},e),{},{contacts:Object(s.a)(Object(s.a)({},e.contacts),{},{items:[].concat(Object(D.a)(e.contacts.items),[a])})})})),Object(i.a)(S,E,(function(e,t){var a=t.payload;return Object(s.a)(Object(s.a)({},e),{},{contacts:Object(s.a)(Object(s.a)({},e.contacts),{},{items:e.contacts.items.filter((function(e){return e.id!==a}))})})})),Object(i.a)(S,p,(function(e,t){var a=t.payload;return Object(s.a)(Object(s.a)({},e),{},{contacts:Object(s.a)(Object(s.a)({},e.contacts),{},{filter:a})})})),Object(i.a)(S,d,(function(e,t){t.payload;return Object(s.a)(Object(s.a)({},e),{},{contacts:Object(s.a)(Object(s.a)({},e.contacts),{},{filteredItems:e.contacts.items.filter((function(t){return t.name.toLowerCase().includes(e.contacts.filter.toLowerCase())}))})})})),Object(i.a)(S,v,(function(e,t){var a=t.payload;return Object(s.a)(Object(s.a)({},e),{},{contacts:Object(s.a)(Object(s.a)({},e.contacts),{},{items:Object(D.a)(a)})})})),Object(i.a)(S,_,(function(e,t){var a=t.payload;return Object(s.a)(Object(s.a)({},e),{},{contacts:Object(s.a)(Object(s.a)({},e.contacts),{},{setNotify:a})})})),Object(i.a)(S,N,(function(e,t){t.payload;return Object(s.a)(Object(s.a)({},e),{},{contacts:Object(s.a)(Object(s.a)({},e.contacts),{},{filteredItems:null})})})),S)),J=Object(O.a)({reducer:V,devTools:!1});a(38);o.a.render(c.a.createElement(l.a,{store:J},c.a.createElement(w,null)),document.getElementById("root"))},9:function(e,t,a){e.exports={form:"form_form__2E0wn",label:"form_label__1TncP",input:"form_input__14q_4",button:"form_button__1TSiV"}}},[[25,1,2]]]);
//# sourceMappingURL=main.0c415b9b.chunk.js.map