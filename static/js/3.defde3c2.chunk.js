(this.webpackJsonpReactSocialNetwork=this.webpackJsonpReactSocialNetwork||[]).push([[3],{400:function(e,a,s){e.exports={dialogs:"Dialogs_dialogs__1iKbW",dialogsItems:"Dialogs_dialogsItems__3Q0RQ",messages:"Dialogs_messages__3dwf2",message:"Dialogs_message__1LrPy",button:"Dialogs_button__1m-Z1"}},401:function(e,a,s){e.exports={item:"DialogItem_item__2gidc",userName:"DialogItem_userName__BFVC6"}},402:function(e,a,s){"use strict";s.r(a);var t=s(0),m=s.n(t),n=s(400),i=s.n(n),l=s(401),o=s.n(l),g=s(12),c=s(26),d=s.n(c);var r=e=>m.a.createElement("div",{className:o.a.item},m.a.createElement("img",{src:d.a,alt:""}),m.a.createElement("div",{className:o.a.userName},m.a.createElement(g.b,{to:"/dialogs/"+e.id},e.name)));var u=e=>m.a.createElement("div",{className:i.a.message},e.message),_=s(14),b=s(162),E=s(68);const v=Object(E.a)(50);var p=Object(b.a)({form:"dialog-add-message-form"})(e=>m.a.createElement("form",{onSubmit:e.handleSubmit,onKeyDown:a=>((e,a)=>{"Enter"===e.key&&!1===e.shiftKey&&(e.preventDefault(),a())})(a,e.handleSubmit)},m.a.createElement("div",null,Object(_.c)("Enter your message","newMessageBody",[E.b,v],_.b,{height:"70px",width:"80%",margin:"20px 0 5px 0"})),m.a.createElement("div",null,m.a.createElement("button",{className:i.a.button},"Send"))));var N=e=>{let a=e.dialogsPage,s=a.dialogs.map(e=>m.a.createElement(r,{name:e.name,key:e.id,id:e.id})),t=a.messages.map(e=>m.a.createElement(u,{message:e.message,key:e.id}));return m.a.createElement("div",{className:i.a.dialogs},m.a.createElement("div",{className:i.a.dialogsItems},s),m.a.createElement("div",{className:i.a.messages},m.a.createElement("div",{className:i.a.message},t),m.a.createElement(p,{onSubmit:a=>{e.sendMessage(a.newMessageBody),a.newMessageBody=""}})))},f=s(161),w=s(9),y=s(85),h=s(8);a.default=Object(h.d)(Object(w.b)(e=>({dialogsPage:e.dialogsPage}),{sendMessage:f.a.sendMessage}),y.a)(N)}}]);
//# sourceMappingURL=3.defde3c2.chunk.js.map