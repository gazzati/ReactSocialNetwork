(this.webpackJsonpReactSocialNetwork=this.webpackJsonpReactSocialNetwork||[]).push([[3],{336:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__1iKbW",dialogsItems:"Dialogs_dialogsItems__3Q0RQ",messages:"Dialogs_messages__3dwf2",message:"Dialogs_message__1LrPy",area:"Dialogs_area__1ABK-",button:"Dialogs_button__1m-Z1"}},337:function(e,a,t){e.exports={item:"DialogItem_item__2gidc",dialog:"DialogItem_dialog__1nwIt"}},338:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),o=t(336),i=t.n(o),l=t(337),m=t.n(l),c=t(16),r=t(50),g=t.n(r),d=function(e){return s.a.createElement("div",{className:m.a.item},s.a.createElement("img",{src:g.a,alt:""}),s.a.createElement("div",{className:m.a.dialog},s.a.createElement(c.b,{to:"/dialogs/"+e.id},e.name)))},u=function(e){return s.a.createElement("div",{className:i.a.message},e.message)},_=t(136),f=t.n(_),E=t(140),b=t.n(E)()({form:"dialogAddMessageForm"})((function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit,onKeyDown:function(a){return function(e,a){"Enter"===e.key&&!1===e.shiftKey&&(e.preventDefault(),a())}(a,e.handleSubmit)}},s.a.createElement("div",null,s.a.createElement(f.a,{className:i.a.area,cols:"25",rows:"4",component:"textarea",name:"newMessageBody",placeholder:"Enter your message"})),s.a.createElement("div",null,s.a.createElement("button",{className:i.a.button},"Send")))})),p=function(e){var a=e.dialogsPage,t=a.dialogs.map((function(e){return s.a.createElement(d,{name:e.name,key:e.id,id:e.id})})),n=a.messages.map((function(e){return s.a.createElement(u,{message:e.message,key:e.id})}));return s.a.createElement("div",{className:i.a.dialogs},s.a.createElement("div",{className:i.a.dialogsItems},t),s.a.createElement("div",{className:i.a.messages},s.a.createElement("div",{className:i.a.message},n),s.a.createElement(b,{onSubmit:function(a){e.sendMessage(a.newMessageBody),a.newMessageBody=""}})))},v=t(143),w=t(12),N=t(142),y=t(6);a.default=Object(y.compose)(Object(w.connect)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(a){e(Object(v.b)(a))}}})),N.a)(p)}}]);
//# sourceMappingURL=3.bd94e033.chunk.js.map