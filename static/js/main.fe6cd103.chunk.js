(this.webpackJsonpReactSocialNetwork=this.webpackJsonpReactSocialNetwork||[]).push([[0],{133:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(28),s=a(0),r=a.n(s),o=a(12);let l=e=>({isAuth:e.auth.isAuth});const c=e=>{class t extends r.a.Component{render(){return this.props.isAuth?r.a.createElement(e,this.props):r.a.createElement(n.a,{to:"/login"})}}return Object(o.connect)(l)(t)}},134:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var n=a(10);let s={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrew"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your girlfriend?"},{id:3,message:"See you"},{id:4,message:"I study in MIREA"},{id:5,message:"Where is your car"}]};const r=e=>({type:"SEND-MESSAGE",newMessageBody:e});t.a=(e=s,t)=>{switch(t.type){case"SEND-MESSAGE":let a=t.newMessageBody;return Object(n.a)({},e,{messages:[...e.messages,{id:7,message:a}]});default:return e}}},141:function(e,t,a){e.exports=a.p+"static/media/preloader.efd317d8.svg"},143:function(e,t,a){e.exports=a.p+"static/media/reactIcon.580ffd26.png"},17:function(e,t,a){e.exports={nav:"Navbar_nav__3q2WL",list:"Navbar_list__1sMwt",friends:"Navbar_friends__2V8Ze",item:"Navbar_item__2oMa_",activeLink:"Navbar_activeLink__1sAdL"}},170:function(e,t,a){e.exports=a(327)},175:function(e,t,a){},176:function(e,t,a){},29:function(e,t,a){e.exports={user:"Users_user__2qA9G",photo:"Users_photo__3muwv",fol:"Users_fol__1f0qC",discription:"Users_discription__HYdxH",name:"Users_name__21Ohc",follow:"Users_follow__3Oihd",unfollow:"Users_unfollow__3w5bA"}},327:function(e,t,a){"use strict";a.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=a(0),s=a.n(n),r=a(71),o=a.n(r),l=(a(175),a(176),a(17)),c=a.n(l),i=a(15);var u=()=>s.a.createElement("nav",{className:c.a.nav},s.a.createElement("div",{className:c.a.list},s.a.createElement("div",{className:c.a.item},s.a.createElement(i.b,{to:"/profile",activeClassName:c.a.activeLink},"Profile")),s.a.createElement("div",{className:"".concat(c.a.item," ").concat(c.a.active)},s.a.createElement(i.b,{to:"/dialogs",activeClassName:c.a.activeLink},"Messages")),s.a.createElement("div",{className:c.a.item},s.a.createElement(i.b,{to:"/users",activeClassName:c.a.activeLink},"Users")),s.a.createElement("div",{className:c.a.item},s.a.createElement("div",null,"News")),s.a.createElement("div",{className:c.a.item},s.a.createElement("div",null,"Music")),s.a.createElement("div",{className:c.a.item},s.a.createElement(i.b,{to:"/settings",activeClassName:c.a.activeLink},"Settings"))),s.a.createElement("div",{className:c.a.friends},"friends")),m=a(28),p=a(12),d=a(7),f=a.n(d),E=a(16),g=a(10);const _=a(140).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"48080886-eec4-4752-8391-b5f4271f9163"}}),h={getUsers:(e=1,t=10)=>_.get("users?page=".concat(e,"&count=").concat(t)).then(e=>e.data),unFollow:e=>_.delete("follow/".concat(e)),Follow:e=>_.post("follow/".concat(e)),getProfile:e=>v.getProfile(e)},v={getProfile:e=>_.get("profile/"+e),getStatus:e=>_.get("profile/status/"+e),updateStatus:e=>_.put("profile/status/",{status:e}),savePhoto(e){const t=new FormData;return t.append("image",e),_.put("profile/photo/",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:e=>_.put("profile",e)},b={me:()=>_.get("auth/me"),login:(e,t,a=!1,n=null)=>_.post("auth/login",{email:e,password:t,rememberMe:a,captcha:n}),logout:()=>_.delete("auth/login")},S={getCaptchaUrl:()=>_.get("security/get-captcha-url")},P=(e,t,a,n)=>e.map(e=>e[a]===t?Object(g.a)({},e,{},n):e);let w={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,folowingInProgress:[2,3]};const N=e=>({type:"FOLLOW",userId:e}),O=e=>({type:"UNFOLLOW",userId:e}),y=e=>({type:"SET_CURRENT_PAGE",currentPage:e}),k=e=>({type:"TOHGLE_IS_FETCHING",isFetching:e}),C=(e,t)=>({type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}),I=function(){var e=Object(E.a)(f.a.mark((function e(t,a,n,s){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(C(!0,a)),e.next=3,n(a);case 3:0===e.sent.data.resultCode&&t(s(a)),t(C(!1,a));case 6:case"end":return e.stop()}}),e)})));return function(t,a,n,s){return e.apply(this,arguments)}}();var T=(e=w,t)=>{switch(t.type){case"FOLLOW":return Object(g.a)({},e,{users:P(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(g.a)({},e,{users:P(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(g.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(g.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(g.a)({},e,{totalUsersCount:t.count});case"TOHGLE_IS_FETCHING":return Object(g.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(g.a)({},e,{folowingInProgress:t.isFetching?[...e.folowingInProgress,t.userId]:e.folowingInProgress.filter(e=>e!==t.userId)});default:return e}},j=a(58),U=a(141),A=a.n(U);var L=e=>s.a.createElement("div",{style:{backgroundColor:"#95acc2"}},s.a.createElement("img",{src:A.a,alt:""})),x=a(41),F=a(42),M=a.n(F),B=a(57),R=a.n(B);var D=({totalItemsCount:e,pageSize:t,currentPage:a,onPageChanged:r,portionSize:o=10})=>{let l=Math.ceil(e/t),c=[];for(let n=1;n<=l;n++)c.push(n);let i=Math.ceil(l/o),u=Object(n.useState)(1),m=Object(x.a)(u,2),p=m[0],d=m[1],f=(p-1)*o+1,E=p*o;return s.a.createElement("div",{className:R()(M.a.paginator)},p>1&&s.a.createElement("button",{className:M.a.button,onClick:()=>{d(p-1)}},"PREV"),c.filter(e=>e>=f&&e<=E).map(e=>s.a.createElement("span",{className:R()({[M.a.selectedPage]:a===e},M.a.pageNumber),key:e,onClick:t=>{r(e)}},e)),i>p&&s.a.createElement("button",{className:M.a.button,onClick:()=>{d(p+1)}},"NEXT"))},z=a(29),H=a.n(z),G=a(45),V=a.n(G);var W=({user:e,folowingInProgress:t,unfollow:a,follow:n})=>s.a.createElement("div",{className:H.a.user},s.a.createElement("div",{className:H.a.photo},s.a.createElement(i.b,{to:"profile/"+e.id},s.a.createElement("img",{src:null!=e.photos.small?e.photos.small:V.a,className:H.a.photo,alt:""}))),s.a.createElement("div",{className:H.a.fol},e.followed?s.a.createElement("button",{disabled:t.some(t=>t===e.id),className:H.a.unfollow,onClick:()=>{a(e.id)}},"Unfollow"):s.a.createElement("button",{disabled:t.some(t=>t===e.id),className:H.a.follow,onClick:()=>{n(e.id)}},"Follow")),s.a.createElement("div",{className:H.a.discription},s.a.createElement("div",{className:H.a.name},e.name),s.a.createElement("div",null,e.status)));var J=e=>{let t=e.currentPage,a=e.totalUsersCount,n=e.pageSize,r=e.onPageChanged,o=e.isFetching,l=e.users,c=Object(j.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","isFetching","users"]);return s.a.createElement("div",null,s.a.createElement(D,{currentPage:t,onPageChanged:r,pageSize:n,totalItemsCount:a}),s.a.createElement("div",null,o?s.a.createElement(L,null):null,l.map(e=>s.a.createElement(W,{user:e,folowingInProgress:c.folowingInProgress,unfollow:c.unfollow,follow:c.follow,key:e.id}))))},K=a(5),X=a(142);const Z=Object(X.a)(e=>e.usersPage.users,e=>e.filter(e=>!0)),q=e=>e.usersPage.pageSize,Y=e=>e.usersPage.totalUsersCount,Q=e=>e.usersPage.currentPage,$=e=>e.usersPage.isFetching,ee=e=>e.usersPage.folowingInProgress;class te extends s.a.Component{constructor(...e){super(...e),this.onPageChanged=e=>{const t=this.props.pageSize;this.props.getUsers(e,t)}}componentDidMount(){const e=this.props,t=e.currentPage,a=e.pageSize;this.props.getUsers(t,a)}render(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(J,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,folowingInProgress:this.props.folowingInProgress,isFetching:this.props.isFetching}))}}var ae=Object(K.compose)(Object(p.connect)(e=>({users:Z(e),pageSize:q(e),totalUsersCount:Y(e),currentPage:Q(e),isFetching:$(e),folowingInProgress:ee(e)}),{follow:e=>function(){var t=Object(E.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:I(a,e,h.Follow.bind(h),N);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),unfollow:e=>function(){var t=Object(E.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:I(a,e,h.unFollow.bind(h),O);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),setCurrentPage:y,toggleFollowingProgress:C,getUsers:(e,t)=>function(){var a=Object(E.a)(f.a.mark((function a(n){var s;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(k(!0)),n(y(e)),a.next=4,h.getUsers(e,t);case 4:s=a.sent,n(k(!1)),n({type:"SET_USERS",users:s.items}),n({type:"SET_TOTAL_USERS_COUNT",count:s.totalCount});case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}))(te),ne=a(9),se=a.n(ne);var re=e=>{let t=Object(n.useState)(!1),a=Object(x.a)(t,2),r=a[0],o=a[1],l=Object(n.useState)(e.status),c=Object(x.a)(l,2),i=c[0],u=c[1];Object(n.useEffect)(()=>{u(e.status)},[e.status]);return s.a.createElement("div",null,!r&&s.a.createElement("div",null,s.a.createElement("span",{className:se.a.status,onDoubleClick:()=>{o(!0)}},e.status||"----")),r&&s.a.createElement("div",null,s.a.createElement("input",{onChange:e=>{u(e.currentTarget.value)},autoFocus:!0,onBlur:()=>{o(!1),e.updateStatus(i)},value:i})))},oe=a(40),le=a.n(oe),ce=a(135),ie=a(50),ue=a.n(ie);const me=({input:e,meta:{touched:t,error:a},children:n})=>{const r=t&&a;return s.a.createElement("div",{className:le.a.formControl+" "+(r?le.a.error:"")},s.a.createElement("div",null,n),r&&s.a.createElement("span",null,a))},pe=e=>{const t=e.input,a=(e.meta,e.child,Object(j.a)(e,["input","meta","child"]));return s.a.createElement(me,e,s.a.createElement("textarea",Object.assign({},t,a)))},de=e=>{const t=e.input,a=(e.meta,e.child,Object(j.a)(e,["input","meta","child"]));return s.a.createElement(me,e,s.a.createElement("input",Object.assign({},t,a)))},fe=(e,t,a,n,r={},o="",l=[])=>s.a.createElement("div",{className:l[0]},s.a.createElement("div",{className:l[1]},s.a.createElement(ce.a,Object.assign({placeholder:e,name:t,validate:a,component:n},r))),s.a.createElement("div",{className:l[2]},o));var Ee=a(136);var ge=Object(Ee.a)({form:"edit-profile"})(({profile:e,handleSubmit:t,error:a,status:n,updateStatus:r})=>s.a.createElement("form",{className:se.a.form,onSubmit:t},s.a.createElement("span",{className:se.a.info},s.a.createElement("div",{className:se.a.name},fe("Full name","fullName",[],de)),s.a.createElement(re,{status:n,updateStatus:r}),s.a.createElement("div",null,s.a.createElement("div",null,"About me:"),fe("About me","aboutMe",[],pe)),s.a.createElement("div",null,s.a.createElement("div",null,"Looking for a job:")," ",fe("","lookingForAJob",[],de,{type:"checkbox"})),s.a.createElement("div",null,s.a.createElement("div",null,"My professional skills:"),fe("My professional skills","lookingForAJobDescription",[],pe)),s.a.createElement("div",null,s.a.createElement("button",{className:se.a.save},"save")),a&&s.a.createElement("div",{className:le.a.formSummaryError},a)),s.a.createElement("div",null,"My contacts: ",Object.keys(e.contacts).map(e=>s.a.createElement("div",{key:e,className:se.a.contact},s.a.createElement("div",{className:se.a.contactsEdit},s.a.createElement("div",{className:se.a.contactKey},e,":"),s.a.createElement("div",{className:se.a.contactValue},fe("http://"+e+".com","contacts."+e,[],de))))))));const _e=({profile:e,isOwner:t,goToEditMode:a,status:n,updateStatus:r})=>s.a.createElement("span",{className:se.a.form},s.a.createElement("span",{className:se.a.info},s.a.createElement("div",{className:se.a.name},e.fullName),s.a.createElement(re,{status:n,updateStatus:r}),s.a.createElement("span",{className:se.a.contacts},s.a.createElement("div",{className:se.a.contactsMenuName,onClick:()=>{document.getElementById("contacts").style.display="block"},onDoubleClick:()=>{document.getElementById("contacts").style.display="none"}},"My contacts"),s.a.createElement("div",{id:"contacts",className:se.a.contactsMenu},Object.keys(e.contacts).map(t=>s.a.createElement(he,{key:t,contactTitle:t,contactValue:e.contacts[t]}))))),s.a.createElement("span",{className:se.a.description},s.a.createElement("div",null,s.a.createElement("div",null,"\u2022About me: "),s.a.createElement("span",{className:se.a.tab},e.aboutMe)),s.a.createElement("div",null,s.a.createElement("span",null,"\u2022Looking for a job:")," ",e.lookingForAJob?"yes":"no"),e.lookingForAJob&&s.a.createElement("div",null,s.a.createElement("div",null,"\u2022My professional skills:")," ",s.a.createElement("span",{className:se.a.tab},e.lookingForAJobDescription)),t&&s.a.createElement("div",null,s.a.createElement("button",{className:se.a.edit,onClick:a},"Edit info")))),he=({contactTitle:e,contactValue:t})=>t?s.a.createElement("div",null,e,": ",s.a.createElement("a",{className:se.a.contactsLink,href:t},t)):null;var ve=({profile:e,status:t,updateStatus:a,isOwner:r,savePhoto:o,saveProfile:l})=>{let c=Object(n.useState)(!1),i=Object(x.a)(c,2),u=i[0],m=i[1];return s.a.createElement("div",{className:se.a.discriptionBlock},s.a.createElement("div",{className:se.a.photo},r&&s.a.createElement("input",{id:"upl",type:"file",className:se.a.button,onChange:e=>{e.target.files.length&&o(e.target.files[0])}}),s.a.createElement("label",{htmlFor:"upl"},s.a.createElement("img",{src:e.photos.large||V.a,className:se.a.mainPhoto,alt:""}))),s.a.createElement("div",{className:se.a.discription},u?s.a.createElement(ge,{initialValues:e,profile:e,onSubmit:e=>{l(e).then(()=>{m(!1)})},status:t,updateStatus:a}):s.a.createElement(_e,{goToEditMode:()=>{m(!0)},profile:e,isOwner:r,status:t,updateStatus:a})))},be=a(59),Se=a.n(be),Pe=a(51),we=a.n(Pe);var Ne=e=>s.a.createElement("div",{className:we.a.item},s.a.createElement("img",{className:we.a.img,src:V.a,alt:""}),s.a.createElement("div",{className:we.a.mes},e.message),s.a.createElement("span",{className:we.a.likes,onClick:()=>{e.addLikes(e.id)}},s.a.createElement("span",{className:we.a.count},e.likesCount+" "),"likes")),Oe=a(92),ye=a.n(Oe),ke=a(131);const Ce=e=>{if(!e)return"Field is required"},Ie=(Te=50,e=>{if(e.length>Te)return"Max length is ".concat(Te," symbols")});var Te;const je=a.n(ke)()({form:"profileAddPostForm"})(e=>s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement("div",null,s.a.createElement(ye.a,{className:Se.a.area,cols:"25",rows:"4",component:pe,name:"newPostText",placeholder:"Enter your post",validate:[Ce,Ie]})),s.a.createElement("div",null,s.a.createElement("button",{className:Se.a.button},"Add post"))));var Ue=s.a.memo(e=>{let t=e.posts.map(t=>s.a.createElement(Ne,{message:t.message,likesCount:t.likesCount,key:t.id,id:t.id,profile:e.profile,addLikes:e.addLikes}));return s.a.createElement("div",{className:Se.a.postsBlock},s.a.createElement("h3",null,"My posts"),s.a.createElement(je,{onSubmit:t=>{e.addPost(t.newPostText),t.newPostText=" "}}),s.a.createElement("div",{className:Se.a.posts},t))}),Ae=a(32);let Le={posts:[{id:1,message:"It is my first post",likesCount:12},{id:2,message:"It is my website",likesCount:1},{id:3,message:"Hi, how are you?",likesCount:21},{id:4,message:"I want to become a developer",likesCount:11},{id:5,message:"Say me about you",likesCount:1}],profile:null,status:""};const xe=e=>({type:"SET_STATUS",status:e}),Fe=e=>function(){var t=Object(E.a)(f.a.mark((function t(a){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.getProfile(e);case 2:n=t.sent,a({type:"SET_USER_PROFILE",profile:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();var Me=(e=Le,t)=>{switch(t.type){case"ADD-POST":{let a={id:6,message:t.newPostText,likesCount:0};return Object(g.a)({},e,{posts:[...e.posts,a]})}case"SET_STATUS":return Object(g.a)({},e,{status:t.status});case"SET_USER_PROFILE":return Object(g.a)({},e,{profile:t.profile});case"SAVE_PHOTO_SUCCESS":return Object(g.a)({},e,{profile:Object(g.a)({},e.profile,{photos:t.photos})});case"DELETE_POST":return Object(g.a)({},e,{posts:e.posts.filter(e=>e.id!==t.postId)});case"ADD_LIKES":return Object(g.a)({},e,{posts:e.posts.map(e=>e.id===t.postId?Object(g.a)({},e,{likesCount:e.likesCount+1}):e)});default:return e}};var Be=Object(p.connect)(e=>({posts:e.profilePage.posts,newPostText:e.profilePage.newPostText,profile:e.profilePage.profile}),e=>({addPost:t=>{e((e=>({type:"ADD-POST",newPostText:e}))(t))},addLikes:t=>{e({type:"ADD_LIKES",postId:t})}}))(Ue);var Re=e=>e.profile?s.a.createElement("div",null,s.a.createElement(ve,{isOwner:e.isOwner,savePhoto:e.savePhoto,profile:e.profile,status:e.status,saveProfile:e.saveProfile,updateStatus:e.updateStatus}),s.a.createElement(Be,null)):s.a.createElement(L,null),De=a(133);class ze extends s.a.Component{refreshProfile(){let e=this.props.match.params.userId;e||(e=this.props.authorizedUserId,e||this.props.history.push("/login")),this.props.getUserProfile(e),this.props.getStatus(e)}componentDidMount(){this.refreshProfile()}componentDidUpdate(e){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}render(){return s.a.createElement("div",null,s.a.createElement(Re,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto})))}}var He=Object(K.compose)(Object(p.connect)(e=>({profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}),{getUserProfile:Fe,getStatus:e=>function(){var t=Object(E.a)(f.a.mark((function t(a){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.getStatus(e);case 2:n=t.sent,a(xe(n.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),updateStatus:e=>function(){var t=Object(E.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.updateStatus(e);case 2:0===t.sent.data.resultCode&&a(xe(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),savePhoto:e=>function(){var t=Object(E.a)(f.a.mark((function t(a){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.savePhoto(e);case 2:n=t.sent,a({type:"SAVE_PHOTO_SUCCESS",photos:n.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),saveProfile:e=>function(){var t=Object(E.a)(f.a.mark((function t(a,n){var s,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=n().auth.id,t.next=3,v.saveProfile(e);case 3:if(0!==(r=t.sent).data.resultCode){t.next=8;break}a(Fe(s)),t.next=10;break;case 8:return a(Object(Ae.a)("edit-profile",{_error:r.data.messages[0]})),t.abrupt("return",Promise.reject(r.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}),m.g,De.a)(ze),Ge=a(33),Ve=a.n(Ge),We=a(143),Je=a.n(We);var Ke=e=>s.a.createElement("div",{className:Ve.a.header},s.a.createElement(i.b,{to:"/profile/",activeClassName:Ve.a.activeLink},s.a.createElement("img",{src:Je.a,alt:""})),s.a.createElement(m.a,{to:"/login"}),s.a.createElement("div",{className:Ve.a.loginBlock},e.isAuth?s.a.createElement("div",null,s.a.createElement(i.b,{to:"/profile",className:Ve.a.userName},e.login),s.a.createElement("div",{className:Ve.a.logout},s.a.createElement("button",{onClick:e.logout,className:Ve.a.button},"log out"))):s.a.createElement("div",{className:Ve.a.login},s.a.createElement(i.b,{to:"login"},"Log in"))));let Xe={id:null,email:null,login:null,isAuth:!1,captchaUrl:null};const Ze=(e,t,a,n)=>({type:"auth/SET_USER_DATA",payload:{id:e,email:t,login:a,isAuth:n}}),qe=e=>({type:"GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}),Ye=()=>function(){var e=Object(E.a)(f.a.mark((function e(t){var a,n,s,r,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.me();case 2:0===(a=e.sent).data.resultCode&&(n=a.data.data,s=n.id,r=n.email,o=n.login,t(Ze(s,r,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Qe=()=>function(){var e=Object(E.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.getCaptchaUrl();case 2:a=e.sent,n=a.data.url,t(qe(n));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var $e=(e=Xe,t)=>{switch(t.type){case"auth/SET_USER_DATA":case"GET_CAPTCHA_URL_SUCCESS":return Object(g.a)({},e,{},t.payload);default:return e}};class et extends s.a.Component{render(){return s.a.createElement(Ke,this.props)}}var tt=Object(p.connect)(e=>({isAuth:e.auth.isAuth,login:e.auth.login}),{logout:()=>function(){var e=Object(E.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.logout();case 2:0===e.sent.data.resultCode&&t(Ze(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})(et);const at=Object(Ee.a)({form:"login"})(({handleSubmit:e,error:t,captchaUrl:a})=>s.a.createElement("form",{onSubmit:e},fe("Email","email",[Ce],de),fe("Password","password",[Ce],de,{type:"password"}),fe(null,"rememberMe",[],de,{type:"checkbox"},"remember me",[ue.a.s1,ue.a.s2,ue.a.s3]),a&&s.a.createElement("img",{src:a,alt:""}),a&&fe("Symbols from image","captcha",[Ce],de,{}),t&&s.a.createElement("div",{className:le.a.formSummaryError},t),s.a.createElement("div",null,s.a.createElement("button",{className:ue.a.button},"Log In"))));var nt=Object(p.connect)(e=>({isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}),{login:(e,t,a,n)=>function(){var s=Object(E.a)(f.a.mark((function s(r){var o,l;return f.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,b.login(e,t,a,n);case 2:0===(o=s.sent).data.resultCode?r(Ye()):(10===o.data.resultCode&&r(Qe()),l=o.data.messages.length>0?o.data.messages[0]:"Some error",r(Object(Ae.a)("login",{_error:l})));case 4:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()})(e=>e.isAuth?s.a.createElement(m.a,{to:"/profile"}):s.a.createElement("div",null,s.a.createElement("h2",null,"LOG IN"),s.a.createElement(at,{onSubmit:t=>{e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl})));let st={initialized:!1};var rt=(e=st,t)=>{switch(t.type){case"INITIALIZED_SUCCESS":return Object(g.a)({},e,{initialized:!0});default:return e}},ot=a(134);let lt={};var ct=(e=lt,t)=>e,it=a(144),ut=a(137);let mt={blackThemeButton:!1,sideStyle:"side"};var pt=(e=mt,t)=>{switch(t.type){case"PRESS_BLACK_THEME_BUTTON":return Object(g.a)({},e,{blackThemeButton:!e.blackThemeButton,sideStyle:t.styleArray[0]});default:return e}};let dt=Object(K.combineReducers)({profilePage:Me,dialogsPage:ot.a,sidebar:ct,usersPage:T,auth:$e,form:ut.a,app:rt,settings:pt});const ft=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||K.compose,Et=Object(K.createStore)(dt,ft(Object(K.applyMiddleware)(it.a)));window._store_=Et;var gt=Et;var _t=a(60),ht=a.n(_t);var vt=e=>s.a.createElement("div",{className:ht.a.settings},s.a.createElement("span",{className:ht.a.label},"Night theme"),s.a.createElement("span",{onClick:()=>{e.blackThemeButton?e.onBlackThemeButton(["side"]):e.onBlackThemeButton(["sideBlack"])},className:R()({[ht.a.switchOn]:e.blackThemeButton},ht.a.button)}));var bt=Object(p.connect)(e=>({blackThemeButton:e.settings.blackThemeButton,buttonStyle:e.settings.buttonStyle}),e=>({onBlackThemeButton:t=>{e((e=>({type:"PRESS_BLACK_THEME_BUTTON",styleArray:e}))(t))}}))(vt);const St=s.a.lazy(()=>a.e(3).then(a.bind(null,330)));class Pt extends s.a.Component{componentDidMount(){this.props.initializeApp()}render(){return s.a.createElement("div",{className:"appWrapper"},s.a.createElement("div",{className:this.props.sideStyle}),s.a.createElement("div",{className:"head"},s.a.createElement(tt,null)),s.a.createElement("div",{className:"nav"},s.a.createElement(u,null)),s.a.createElement("div",{className:"appWrapperContent"},s.a.createElement(m.d,null," //dopolnenie",s.a.createElement(m.b,{path:"/dialogs",render:(e=St,t=>s.a.createElement(s.a.Suspense,{fallback:s.a.createElement("div",null,"Loading...")},s.a.createElement(e,t)))}),s.a.createElement(m.b,{path:"/profile/:userId?",render:()=>s.a.createElement(He,null)}),s.a.createElement(m.b,{path:"/users",render:()=>s.a.createElement(ae,null)}),s.a.createElement(m.b,{exact:!0,path:"/login",render:()=>s.a.createElement(nt,null)}),s.a.createElement(m.b,{exact:!0,path:"/settings",render:()=>s.a.createElement(bt,null)}),s.a.createElement(m.b,{path:"*",render:()=>s.a.createElement("h1",null,"404 NOT FOUND")}))));var e}}let wt=Object(K.compose)(m.g,Object(p.connect)(e=>({initialized:e.app.initialized,sideStyle:e.settings.sideStyle}),{initializeApp:()=>e=>{e(Ye()).then(()=>{e({type:"INITIALIZED_SUCCESS"})})}}))(Pt);var Nt=e=>s.a.createElement(i.a,null,s.a.createElement(p.Provider,{store:gt},s.a.createElement(wt,null)));o.a.render(s.a.createElement(Nt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})},33:function(e,t,a){e.exports={header:"Header_header__2S7ee",loginBlock:"Header_loginBlock__349YX",userName:"Header_userName__TVQeU",logout:"Header_logout__1U7Jq",login:"Header_login__2ZaXp",button:"Header_button__3AOAn"}},40:function(e,t,a){e.exports={formControl:"FormsControls_formControl__KJHG6",error:"FormsControls_error__2iS7F",formSummaryError:"FormsControls_formSummaryError__2Z5fj"}},42:function(e,t,a){e.exports={paginator:"Paginator_paginator__sV1Wk",pageNumber:"Paginator_pageNumber__2hAk5",selectedPage:"Paginator_selectedPage__to5Hh",button:"Paginator_button__28PL3"}},45:function(e,t,a){e.exports=a.p+"static/media/user.8b1dbb1f.png"},50:function(e,t,a){e.exports={button:"Login_button__y-y6T",s1:"Login_s1__1Mhuj",s2:"Login_s2__13kQf",s3:"Login_s3__A7rbK"}},51:function(e,t,a){e.exports={item:"Post_item__FKWLk",img:"Post_img__21o-o",mes:"Post_mes__td-LE",likes:"Post_likes__LVZOU",count:"Post_count__vNeRN"}},59:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__PVv8X",posts:"MyPosts_posts__1_mZ_",button:"MyPosts_button__1Fkxg",area:"MyPosts_area__lk7I7"}},60:function(e,t,a){e.exports={settings:"Settings_settings__yplet",button:"Settings_button__2fj6E",switchOn:"Settings_switchOn__1Q9dc",label:"Settings_label__3_dls"}},9:function(e,t,a){e.exports={discriptionBlock:"ProfileInfo_discriptionBlock__nHaqE",photo:"ProfileInfo_photo__2mVUa",mainPhoto:"ProfileInfo_mainPhoto__2Jymk",button:"ProfileInfo_button__3nRMG",form:"ProfileInfo_form__35zYX",info:"ProfileInfo_info__1r8Ls",description:"ProfileInfo_description__1GUTd",contacts:"ProfileInfo_contacts__1Z3we",contactsEdit:"ProfileInfo_contactsEdit__2K0eB",contactKey:"ProfileInfo_contactKey__zdFv_",contactValue:"ProfileInfo_contactValue__3S9p6",contactsLink:"ProfileInfo_contactsLink__JvaC6",contactsMenu:"ProfileInfo_contactsMenu__1PsEm",contactsMenuName:"ProfileInfo_contactsMenuName__2mjW2",name:"ProfileInfo_name__3zy0Q",status:"ProfileInfo_status__3WJYX",tab:"ProfileInfo_tab__1dA_n",save:"ProfileInfo_save__3ye6s",edit:"ProfileInfo_edit__ccIe6"}}},[[170,1,2]]]);
//# sourceMappingURL=main.fe6cd103.chunk.js.map