(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3be56178"],{6062:function(t,e,a){"use strict";var n=a("6d61"),i=a("6566");t.exports=n("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},ee0a:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"fill-height",staticStyle:{background:"#fffff"},attrs:{fluid:""}},[a("v-navigation-drawer",{staticStyle:{"z-index":"11"},attrs:{app:"",dark:"",fixed:"","disable-resize-watcher":"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",{staticClass:"pb-2 pt-2 justify-center"},[a("v-list-item-avatar",[a("v-icon",{staticClass:"white--text",attrs:{large:""}},[t._v("mdi-account-circle")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Signed in as")]),a("v-list-item-subtitle",[t._v(t._s(t.user_name))])],1)],1),a("v-divider"),a("v-list-item-group",{attrs:{color:"blue"},model:{value:t.item,callback:function(e){t.item=e},expression:"item"}},t._l(t.listitems,(function(e){return a("v-list-item",{key:e.key,staticClass:"justify-center",attrs:{link:""},on:{click:function(a){t.component=e.display,t.drawer=!t.drawer}}},[a("v-list-item-avatar",[a("v-icon",{staticClass:"blue--text"},[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))]),a("v-list-item-subtitle",[t._v(t._s(e.subtitle))])],1)],1)})),1),a("v-divider"),"admin"===t.user_role?a("v-list-item",{staticClass:"pb-2 pt-2 justify-center",on:{click:t.changepage}},[a("v-list-item-avatar",[a("v-icon",{staticClass:"white--text",attrs:{large:""}},[t._v("mdi-shield-account")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Admin view")]),a("v-list-item-subtitle",[t._v("Switch to Admin view")])],1)],1):t._e()],1),a("v-navigation-drawer",{staticStyle:{"z-index":"11"},attrs:{right:"",app:"",dark:"",fixed:"","disable-resize-watcher":"",clipped:""},model:{value:t.que,callback:function(e){t.que=e},expression:"que"}},[a("queview")],1),a("v-app-bar",{staticStyle:{position:"sticky",top:"0","max-height":"50px",left:"0","z-index":"10"},attrs:{app:"",dense:"",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),a("v-toolbar-title",[t._v("Reception")]),a("v-spacer"),a("v-btn",{staticClass:"mr-5",attrs:{small:"",depressed:""},on:{click:function(e){t.que=!t.que}}},[a("v-icon",[t._v("mdi-clipboard-list")]),t._v("Que ")],1),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"mr-5",attrs:{small:"",icon:"",right:""},on:{click:t.logout}},"v-btn",i,!1),n),[a("v-icon",[t._v("mdi-logout")])],1)]}}])},[a("span",[t._v("logout")])])],1),a("keep-alive",[a("v-main",{staticClass:"pt-0 mt-0"},[a(t.component,{tag:"component"})],1)],1)],1)},i=[],s=(a("c740"),a("b0c0"),a("f4e3")),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{attrs:{justify:"center"}},[a("v-col",{staticClass:"ma-5",attrs:{cols:"12",lg:"6",xl:"4",md:"8",sm:"8","align-self":"center"}},[a("v-form",{ref:"form",staticStyle:{border:"1px solid","border-radius":"5px"}},[a("v-container",[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-account-circle",label:"Patient name",rules:[function(t){return!!t||"Name is required"}]},model:{value:t.send.patient_name,callback:function(e){t.$set(t.send,"patient_name",e)},expression:"send.patient_name"}})],1),a("v-col",{attrs:{cols:"6",sm:"3"}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-numeric",label:"Patient age",rules:[function(t){return!!t||"Age is required"}]},model:{value:t.send.patient_age,callback:function(e){t.$set(t.send,"patient_age",e)},expression:"send.patient_age"}})],1),a("v-col",{attrs:{cols:"6",sm:"3"}},[a("v-select",{attrs:{"prepend-icon":"mdi-gender-male-female-variant","item-text":"text","item-value":"value",items:t.gender,label:"Gender",rules:[function(t){return!!t||"Gender is required"}]},model:{value:t.send.patient_gender,callback:function(e){t.$set(t.send,"patient_gender",e)},expression:"send.patient_gender"}})],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",[a("v-text-field",{attrs:{"prepend-icon":"mdi-home-circle",label:"User address"},model:{value:t.send.patient_address,callback:function(e){t.$set(t.send,"patient_address",e)},expression:"send.patient_address"}})],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-email",label:"Email-Id"},model:{value:t.send.patient_email,callback:function(e){t.$set(t.send,"patient_email",e)},expression:"send.patient_email"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-phone-in-talk",label:"Phone number",rules:[function(t){return!!t||"Phone number is required"}]},model:{value:t.send.patient_phoneno,callback:function(e){t.$set(t.send,"patient_phoneno",e)},expression:"send.patient_phoneno"}})],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-briefcase",label:"Occupation"},model:{value:t.send.patient_occupation,callback:function(e){t.$set(t.send,"patient_occupation",e)},expression:"send.patient_occupation"}})],1),a("v-col",{attrs:{cols:"6",sm:"4"}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-water",label:"Blood group"},model:{value:t.send.patient_blood_group,callback:function(e){t.$set(t.send,"patient_blood_group",e)},expression:"send.patient_blood_group"}})],1),a("v-col",{attrs:{cols:"6",sm:"4"}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-human",label:"Marital status"},model:{value:t.send.patient_maritalstatus,callback:function(e){t.$set(t.send,"patient_maritalstatus",e)},expression:"send.patient_maritalstatus"}})],1)],1),a("v-row",[a("v-col",{staticClass:"text-right"},[a("v-btn",{attrs:{block:"",color:"primary"},on:{click:this.submitaddnewuserform}},[t._v("Submit")])],1)],1)],1)],1)],1)],1),a("dialog-box",{attrs:{dialogmessage:t.dialogdata}})],1)},r=[],l=a("51e0"),d={name:"adduser",components:{"dialog-box":l["a"]},data:function(){return{dialogsuccess:!1,send:{patient_name:"",patient_age:"",patient_gender:"",patient_occupation:"",patient_address:"",patient_maritalstatus:"",patient_blood_group:"",patient_phoneno:"",patient_email:""},dialogdata:{show:!1,type:"",title:"",message:"",buttontext:""},gender:[{text:"Male",value:"male"},{text:"Female",value:"female"},{text:"Others",value:"others"}]}},methods:{submitaddnewuserform:function(){var t=this;this.$axios.post("/patient/create",this.send).then((function(e){if(e.data.success){for(var a in t.dialogdata.title="Success",t.dialogdata.message="Created new user "+t.send.patient_name,t.dialogdata.buttontext="Ok",t.dialogdata.type="success",t.dialogdata.show=!0,t.send)t.send[a]="";t.$refs.form.resetValidation()}e.data.error&&(t.dialogdata.title="Error",t.dialogdata.message=e.data.error,t.dialogdata.buttontext="Ok",t.dialogdata.type="warning",t.dialogdata.show=!0)})).catch((function(e){t.dialogdata.title="Error",t.dialogdata.message=e,t.dialogdata.buttontext="Ok",t.dialogdata.type="warning",t.dialogdata.show=!0}))}}},c=d,u=a("2877"),p=a("6544"),m=a.n(p),g=a("8336"),v=a("62ad"),f=a("a523"),_=a("4bd4"),h=a("0fd9"),b=a("b974"),x=a("8654"),k=Object(u["a"])(c,o,r,!1,null,null,null),w=k.exports;m()(k,{VBtn:g["a"],VCol:v["a"],VContainer:f["a"],VForm:_["a"],VRow:h["a"],VSelect:b["a"],VTextField:x["a"]});var y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{attrs:{justify:"center"}},[a("v-col",{staticClass:"ma-5",attrs:{cols:"12",xl:"4",lg:"8",md:"10",sm:"8"}},[a("v-card",{attrs:{elevation:"5"}},[a("v-form",{staticClass:"ma-2"},[a("v-container",[a("v-row",{attrs:{justify:"center"}},[a("v-col",{staticClass:"mt-5",attrs:{cols:"12",sm:"6",md:"6"}},[a("v-autocomplete",{attrs:{clearable:"",items:t.names,outlined:"",dense:"","prepend-icon":"mdi-account-circle",label:"Patient's name"},on:{change:t.submitsearch,keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitsearch(e)}},model:{value:t.search.patient_name,callback:function(e){t.$set(t.search,"patient_name",e)},expression:"search.patient_name"}})],1),a("v-col",{staticClass:"mt-5",attrs:{cols:"9",sm:"5",md:"5"}},[a("v-autocomplete",{attrs:{clearable:"",outlined:"",dense:"",items:t.phone,"prepend-icon":"mdi-phone-in-talk",label:"Phone number"},on:{change:t.submitsearch,keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitsearch(e)}},model:{value:t.search.patient_phoneno,callback:function(e){t.$set(t.search,"patient_phoneno",e)},expression:"search.patient_phoneno"}})],1)],1)],1)],1)],1)],1)],1),a("v-row",{attrs:{id:"resultpane",justify:"center"}},[a("v-col",{staticClass:"ma-5",attrs:{cols:"12",xl:"4",lg:"8",md:"10",sm:"8"}},[a("edit-patinet",{attrs:{fetch:t.fetched},on:{clearfetch:t.resetfetch}})],1)],1),a("dialog-box",{attrs:{dialogmessage:t.dialogdata}})],1)},C=[],V=(a("d81d"),a("d3b7"),a("ac1f"),a("6062"),a("3ca3"),a("841c"),a("ddb0"),a("2909")),$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.fetched,"sort-by":"",search:t.search},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-container",{staticClass:"pa-0"},[a("v-row",{staticClass:"pa-2",attrs:{justify:"space-around",dense:""}},[a("v-col",{attrs:{cols:"12",sm:"3","align-self":"center"}},[a("h3",[t._v("Patients")])]),a("v-col",{attrs:{cols:"12",sm:"6","align-self":"center"}},[a("v-text-field",{staticClass:"pb-5",attrs:{"append-icon":"mdi-filter",label:"Filter","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-col",{attrs:{cols:"12",sm:"3","align-self":"center"}},[a("v-row",{attrs:{justify:"center"}},[a("v-btn",{staticClass:"ml-2 primary",attrs:{small:""},on:{click:function(e){t.addnewpatientdialog=!0}}},[a("v-icon",{attrs:{color:"white"}},[t._v("mdi-plus-circle")]),t._v("Add new ")],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var n=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{large:""},on:{click:function(e){return t.editItem(n)}}},[t._v("mdi-pencil")])]}},{key:"item.changepassword",fn:function(e){var n=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{large:""},on:{click:function(e){return t.tokenGenerate(n)}}},[t._v("mdi-hospital-box")])]}}])}),a("v-dialog",{attrs:{"max-width":"650px"},model:{value:t.addnewpatientdialog,callback:function(e){t.addnewpatientdialog=e},expression:"addnewpatientdialog"}},[a("v-card",[a("v-card-title",{staticClass:"primary lighten-2 justify-center"},[a("span",{staticClass:"headline"},[t._v("Add new patient's data")])]),a("v-card-text",[a("v-form",{ref:"addnewform",staticStyle:{"border-radius":"5px"}},[a("v-container",[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{dense:"",outlined:"","prepend-icon":"mdi-account-circle",label:"Patient name",rules:[function(t){return!!t||"Name is required"}]},model:{value:t.send.patient_name,callback:function(e){t.$set(t.send,"patient_name",e)},expression:"send.patient_name"}})],1),a("v-col",{attrs:{cols:"6",sm:"3"}},[a("v-text-field",{attrs:{dense:"",outlined:"","prepend-icon":"mdi-numeric",label:"Age",rules:[function(t){return!!t||"Age is required"}]},model:{value:t.send.patient_age,callback:function(e){t.$set(t.send,"patient_age",e)},expression:"send.patient_age"}})],1),a("v-col",{attrs:{cols:"6",sm:"3"}},[a("v-autocomplete",{attrs:{dense:"",outlined:"","prepend-icon":"mdi-gender-male-female-variant","item-text":"text","item-value":"value",items:t.gender,label:"Gender",rules:[function(t){return!!t||"Gender is required"}]},model:{value:t.send.patient_gender,callback:function(e){t.$set(t.send,"patient_gender",e)},expression:"send.patient_gender"}})],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",[a("v-text-field",{attrs:{dense:"",outlined:"","prepend-icon":"mdi-home-circle",label:"User address"},model:{value:t.send.patient_address,callback:function(e){t.$set(t.send,"patient_address",e)},expression:"send.patient_address"}})],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{dense:"",outlined:"","prepend-icon":"mdi-email",label:"Email-Id"},model:{value:t.send.patient_email,callback:function(e){t.$set(t.send,"patient_email",e)},expression:"send.patient_email"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{dense:"",outlined:"","prepend-icon":"mdi-phone-in-talk",label:"Phone number",rules:[function(t){return!!t||"Phone number is required"}]},model:{value:t.send.patient_phoneno,callback:function(e){t.$set(t.send,"patient_phoneno",e)},expression:"send.patient_phoneno"}})],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-text-field",{attrs:{dense:"",outlined:"","prepend-icon":"mdi-briefcase",label:"Occupation"},model:{value:t.send.patient_occupation,callback:function(e){t.$set(t.send,"patient_occupation",e)},expression:"send.patient_occupation"}})],1),a("v-col",{attrs:{cols:"6",sm:"4"}},[a("v-text-field",{attrs:{dense:"",outlined:"","prepend-icon":"mdi-water",label:"Blood group"},model:{value:t.send.patient_blood_group,callback:function(e){t.$set(t.send,"patient_blood_group",e)},expression:"send.patient_blood_group"}})],1),a("v-col",{attrs:{cols:"6",sm:"4"}},[a("v-text-field",{attrs:{dense:"",outlined:"","prepend-icon":"mdi-human",label:"Marital status"},model:{value:t.send.patient_maritalstatus,callback:function(e){t.$set(t.send,"patient_maritalstatus",e)},expression:"send.patient_maritalstatus"}})],1)],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"secondary darken-1",text:""},on:{click:function(e){t.addnewpatientdialog=!1,t.$refs.addnewform.resetValidation(),t.$refs.addnewform.reset()}}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"primary darken-1"},on:{click:t.submitaddnewuserform}},[t._v("Submit")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"600px"},model:{value:t.editdialog,callback:function(e){t.editdialog=e},expression:"editdialog"}},[a("v-card",[a("v-card-title",{staticClass:"primary lighten-2 justify-center"},[a("span",{staticClass:"headline"},[t._v("Edit Patient's data")])]),a("v-card-text",[a("v-container",[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-account-circle",label:"Patient name",rules:[function(t){return!!t||"Name is required"}]},model:{value:t.singleform.patient_name,callback:function(e){t.$set(t.singleform,"patient_name",e)},expression:"singleform.patient_name"}})],1),a("v-col",{attrs:{cols:"6",sm:"3"}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-numeric",label:"Patient age",rules:[function(t){return!!t||"Age is required"}]},model:{value:t.singleform.patient_age,callback:function(e){t.$set(t.singleform,"patient_age",e)},expression:"singleform.patient_age"}})],1),a("v-col",{attrs:{cols:"6",sm:"3"}},[a("v-select",{attrs:{"prepend-icon":"mdi-gender-male-female-variant","item-text":"text","item-value":"value",items:t.gender,label:"Gender",rules:[function(t){return!!t||"Gender is required"}]},model:{value:t.singleform.patient_gender,callback:function(e){t.$set(t.singleform,"patient_gender",e)},expression:"singleform.patient_gender"}})],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",[a("v-text-field",{attrs:{"prepend-icon":"mdi-home-circle",label:"User address"},model:{value:t.singleform.patient_address,callback:function(e){t.$set(t.singleform,"patient_address",e)},expression:"singleform.patient_address"}})],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-email",label:"Email-Id"},model:{value:t.singleform.patient_email,callback:function(e){t.$set(t.singleform,"patient_email",e)},expression:"singleform.patient_email"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-phone-in-talk",label:"Phone number",rules:[function(t){return!!t||"Phone number is required"}]},model:{value:t.singleform.patient_phoneno,callback:function(e){t.$set(t.singleform,"patient_phoneno",e)},expression:"singleform.patient_phoneno"}})],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-briefcase",label:"Occupation"},model:{value:t.singleform.patient_occupation,callback:function(e){t.$set(t.singleform,"patient_occupation",e)},expression:"singleform.patient_occupation"}})],1),a("v-col",{attrs:{cols:"6",sm:"4"}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-water",label:"Blood group"},model:{value:t.singleform.patient_blood_group,callback:function(e){t.$set(t.singleform,"patient_blood_group",e)},expression:"singleform.patient_blood_group"}})],1),a("v-col",{attrs:{cols:"6",sm:"4"}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-human",label:"Marital status"},model:{value:t.singleform.patient_maritalstatus,callback:function(e){t.$set(t.singleform,"patient_maritalstatus",e)},expression:"singleform.patient_maritalstatus"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"secondary darken-1"},on:{click:function(e){t.editdialog=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"primary darken-1"},on:{click:function(e){t.editdialog=!1,t.confirmedit=!0}}},[t._v("Edit")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"600px"},model:{value:t.tokendialog,callback:function(e){t.tokendialog=e},expression:"tokendialog"}},[a("v-card",[a("v-card-title",{staticClass:"primary lighten-2 justify-center"},[a("span",{staticClass:"headline"},[t._v("Generate token for "+t._s(t.singleform.patient_name))])]),a("v-card-text",[a("v-container",[a("v-form",{ref:"form"},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{readonly:"","prepend-icon":"mdi-account-circle",label:"Patient name"},model:{value:t.singleform.patient_name,callback:function(e){t.$set(t.singleform,"patient_name",e)},expression:"singleform.patient_name"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-select",{attrs:{"prepend-icon":"mdi-doctor","item-text":"text","item-value":"value",items:t.doctors,label:"Doctor",rules:[function(t){return!!t||"Select visiting doctor"}]},model:{value:t.visiting_doctor,callback:function(e){t.visiting_doctor=e},expression:"visiting_doctor"}})],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",[a("v-text-field",{attrs:{"prepend-icon":"mdi-clipboard-pulse",label:"Complaint",rules:[function(t){return!!t||"Complaint is required"}]},model:{value:t.complaint,callback:function(e){t.complaint=e},expression:"complaint"}})],1)],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"secondary darken-1",text:""},on:{click:function(e){t.tokendialog=!1,t.$refs.form.resetValidation()}}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"primary darken-1"},on:{click:[function(e){t.tokendialog=!1},t.submitToken]}},[t._v("Submit")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"600px"},model:{value:t.confirmedit,callback:function(e){t.confirmedit=e},expression:"confirmedit"}},[a("v-card",[a("v-card-title",{staticClass:"headline warning"},[a("span",[t._v("Do you really want to change data?")])]),a("v-card-text",{staticClass:"pt-6"},[a("strong",[t._v("Do not change data without the concern of the respective person")])]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"secondary darken-1",text:""},on:{click:function(e){t.confirmedit=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"primary darken-1"},on:{click:[function(e){t.confirmedit=!1},t.submitedit]}},[t._v("Confirm")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"600px"},model:{value:t.deletedialog,callback:function(e){t.deletedialog=e},expression:"deletedialog"}}),a("v-dialog",{attrs:{"max-width":"600px"},model:{value:t.confirmdelete,callback:function(e){t.confirmdelete=e},expression:"confirmdelete"}}),a("dialog-box",{attrs:{dialogmessage:t.dialogdata}})],1)},q=[],j={components:{"dialog-box":l["a"]},props:{fetch:{type:Array}},data:function(){return{search:"",addnewpatientdialog:!1,editdialog:!1,deletedialog:!1,tokendialog:!1,confirmedit:!1,confirmdelete:!1,confirmchangepass:!1,headers:[{text:"Name",align:"start",sortable:!0,value:"patient_name"},{text:"Age",value:"patient_age"},{text:"Phone",value:"patient_phoneno"},{text:"Actions",value:"actions",sortable:!1},{text:"Token",value:"changepassword",sortable:!1}],send:{patient_name:"",patient_age:"",patient_gender:"",patient_occupation:"",patient_address:"",patient_maritalstatus:"",patient_blood_group:"",patient_phoneno:"",patient_email:""},singleform:{patient_id:"",patient_name:"",patient_age:"",patient_gender:"",patient_occupation:"",patient_address:"",patient_maritalstatus:"",patient_blood_group:"",patient_phoneno:"",patient_email:""},dialogdata:{show:!1,type:"",title:"",message:"",buttontext:""},gender:[{text:"Male",value:"male"},{text:"Female",value:"female"},{text:"Others",value:"others"}],doctors:[],complaint:"",visiting_doctor:""}},watch:{dialog:function(t){t||this.close()}},created:function(){var t=this;this.$axios.post("/user/getdoctor",this.singleform).then((function(e){console.log(e.data),e.data.success?e.data.success.map((function(e){t.doctors.push({text:e.user_name,value:e.user_name})})):(t.dialogdata.title="Error",t.dialogdata.message="No doctors found in database",t.dialogdata.buttontext="Ok",t.dialogdata.type="warning",t.dialogdata.show=!0)}))},computed:{fetched:function(){return this.fetch}},methods:{editItem:function(t){console.log(t),this.singleform.patient_id=t._id,this.singleform.patient_name=t.patient_name,this.singleform.patient_age=t.patient_age,this.singleform.patient_gender=t.patient_gender,this.singleform.patient_occupation=t.patient_occupation,this.singleform.patient_address=t.patient_address,this.singleform.patient_maritalstatus=t.patient_maritalstatus,this.singleform.patient_blood_group=t.patient_blood_group,this.singleform.patient_phoneno=t.patient_phoneno,this.singleform.patient_email=t.patient_email,this.editdialog=!0},deleteItem:function(){},tokenGenerate:function(t){this.tokendialog=!0,this.singleform.patient_id=t._id,this.singleform.patient_name=t.patient_name,this.singleform.patient_age=t.patient_age,this.singleform.patient_gender=t.patient_gender,this.singleform.patient_occupation=t.patient_occupation,this.singleform.patient_address=t.patient_address,this.singleform.patient_maritalstatus=t.patient_maritalstatus,this.singleform.patient_blood_group=t.patient_blood_group,this.singleform.patient_phoneno=t.patient_phoneno,this.singleform.patient_email=t.patient_email},submitedit:function(){var t=this;this.$axios.post("/patient/changedata",this.singleform).then((function(e){if(e.data.success)for(var a in t.dialogdata.title="Success",t.dialogdata.message="Edited "+t.singleform.patient_name+"'s data",t.dialogdata.buttontext="Ok",t.dialogdata.type="success",t.dialogdata.show=!0,t.$emit("clearfetch"),t.singleform)t.singleform[a]="";e.data.error&&(t.dialogdata.title="Error",t.dialogdata.message=e.data.error,t.dialogdata.buttontext="Ok",t.dialogdata.type="warning",t.dialogdata.show=!0)})).catch((function(e){t.dialogdata.title="Error",t.dialogdata.message=e,t.dialogdata.buttontext="Ok",t.dialogdata.type="warning",t.dialogdata.show=!0}))},submitToken:function(){var t=this;console.log("asdasd"),this.$axios.post("/que/add",{patient_id:this.singleform.patient_id,patient_name:this.singleform.patient_name,visiting_doctor:this.visiting_doctor,complaint:this.complaint}).then((function(e){e.data.success&&(t.dialogdata.title="Success",t.dialogdata.message=e.data.success,t.dialogdata.buttontext="Ok",t.dialogdata.type="success",t.dialogdata.show=!0),e.data.error&&(t.dialogdata.title="Error",t.dialogdata.message=e.data.error,t.dialogdata.buttontext="Ok",t.dialogdata.type="warning",t.dialogdata.show=!0)}))},submitaddnewuserform:function(){var t=this;this.$refs.addnewform.validate()&&this.$axios.post("/patient/create",this.send).then((function(e){if(e.data.success){for(var a in t.addnewpatientdialog=!1,t.dialogdata.title="Success",t.dialogdata.message="Created new user "+t.send.patient_name,t.dialogdata.buttontext="Ok",t.dialogdata.type="success",t.dialogdata.show=!0,t.send)t.send[a]="";t.$refs.addnewform.resetValidation(),t.$emit("clearfetch")}e.data.error&&(t.addnewpatientdialog=!1,t.dialogdata.title="Error",t.dialogdata.message=e.data.error,t.dialogdata.buttontext="Ok",t.dialogdata.type="warning",t.dialogdata.show=!0)})).catch((function(e){t.addnewpatientdialog=!1,t.dialogdata.title="Error",t.dialogdata.message=e,t.dialogdata.buttontext="Ok",t.dialogdata.type="warning",t.dialogdata.show=!0}))}}},O=j,S=a("c6a6"),E=a("b0af"),A=a("99d9"),T=a("8fea"),P=a("169a"),I=a("132d"),G=a("2fa4"),B=Object(u["a"])(O,$,q,!1,null,null,null),D=B.exports;m()(B,{VAutocomplete:S["a"],VBtn:g["a"],VCard:E["a"],VCardActions:A["a"],VCardText:A["c"],VCardTitle:A["d"],VCol:v["a"],VContainer:f["a"],VDataTable:T["a"],VDialog:P["a"],VForm:_["a"],VIcon:I["a"],VRow:h["a"],VSelect:b["a"],VSpacer:G["a"],VTextField:x["a"]});var F={name:"addeditpatientform",components:{"edit-patinet":D,"dialog-box":l["a"]},data:function(){return{search:{patient_name:void 0,patient_phoneno:void 0},fetched:[],dialogdata:{show:!1,type:"",title:"",message:"",buttontext:""}}},methods:{submitsearch:function(){var t=this;this.$axios.post("/patient/getdata",this.search).then((function(e){e.data.success&&(t.fetched=e.data.success,console.log(t.fetched)),e.data.error&&(t.dialogdata.title="Error",t.dialogdata.message=e.data.error,t.dialogdata.buttontext="Ok",t.dialogdata.type="warning",t.dialogdata.show=!0)})).catch((function(t){console.log(t)}))},resetfetch:function(){var t=this;this.$axios.post("/patient/getdata",this.search).then((function(e){e.data.success&&(t.fetched=e.data.success,console.log(t.fetched)),e.data.error&&(t.dialogdata.title="Error",t.dialogdata.message=e.data.error,t.dialogdata.buttontext="Ok",t.dialogdata.type="warning",t.dialogdata.show=!0)})).catch((function(t){console.log(t)}))}},computed:{phone:function(){return Object(V["a"])(new Set(this.fetched.map((function(t){return t.patient_phoneno}))))},names:function(){return Object(V["a"])(new Set(this.fetched.map((function(t){return t.patient_name}))))}},created:function(){var t=this;this.$axios.post("/patient/getdata",this.search).then((function(e){e.data.success&&(t.fetched=e.data.success,console.log(t.fetched)),e.data.error&&(t.dialogdata.title="Error",t.dialogdata.message=e.data.error,t.dialogdata.buttontext="Ok",t.dialogdata.type="warning",t.dialogdata.show=!0)})).catch((function(t){console.log(t)}))}},L=F,N=Object(u["a"])(L,y,C,!1,null,null,null),R=N.exports;m()(N,{VAutocomplete:S["a"],VCard:E["a"],VCol:v["a"],VContainer:f["a"],VForm:_["a"],VRow:h["a"]});var M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"pa-0"},[a("v-toolbar",{attrs:{dark:""}},[a("v-toolbar-title",[t._v("Que")]),a("v-spacer"),a("span",[t._v("Refresh")]),a("v-btn",{attrs:{icon:""},on:{click:t.refresh}},[a("v-icon",[t._v("mdi-refresh")])],1)],1),a("v-list",{directives:[{name:"show",rawName:"v-show",value:t.attendingque.length>0,expression:"attendingque.length>0"}]},[a("v-row",{staticClass:"dark justify-center"},[a("h3",[t._v("Attending")])]),t._l(t.attendingque,(function(e,n){return a("v-list-item",{key:n},[a("v-row",[a("v-col",{staticClass:"pa-0 pt-1 pb-1"},[a("v-card",{attrs:{dark:""}},[a("span",[t._v("Token no: "+t._s(e.token_no))]),a("v-card-title",[t._v(t._s(e.patient_name))]),a("v-card-text",[t._v("Visiting doctor: "+t._s(e.visiting_doctor))]),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"green",attrs:{small:""},on:{click:function(a){return t.checkout(e)}}},[t._v("checkout")])],1)],1)],1)],1)],1)}))],2),a("v-divider"),t.waitingque.length>0?a("v-list",[a("v-row",{staticClass:"dark justify-center"},[a("h3",[t._v("Waiting")])]),t._l(t.waitingque,(function(e,n){return a("v-list-item",{key:n},[a("v-row",[a("v-col",{staticClass:"pa-0 pt-1 pb-1"},[a("v-card",{attrs:{dark:""}},[a("span",[t._v("Token no: "+t._s(e.token_no))]),a("v-card-title",[t._v(t._s(e.patient_name))]),a("v-card-text",[t._v("To visit doctor: "+t._s(e.visiting_doctor))]),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"green",attrs:{small:""},on:{click:function(a){return t.letin(e)}}},[t._v("let in")]),a("v-btn",{staticClass:"red",attrs:{small:"",right:""},on:{click:function(a){return t.left(e)}}},[t._v("left")])],1)],1)],1)],1)],1)}))],2):t._e(),a("dialog-box",{attrs:{dialogmessage:t.dialogdata}})],1)},z=[],U=(a("c975"),a("a434"),{components:{"dialog-box":l["a"]},data:function(){return{fetchedque:[],attendingque:[],waitingque:[],dialogdata:{show:!1,type:"",title:"",message:"",buttontext:""}}},methods:{refresh:function(){var t=this;this.fetchedque=[],this.attendingque=[],this.waitingque=[],this.$axios.post("/que/get").then((function(e){e.data.success.length>0?e.data.success.map((function(e){"waiting"===e.quetype&&t.waitingque.push(e),"attending"===e.quetype&&t.attendingque.push(e)})):(t.waitingque=[],t.attendingque=[])}))},letin:function(t){var e=this;this.$axios.post("/que/letinside",{patient_id:t.patient_id}).then((function(a){if(a.data.success){var n=e.waitingque.indexOf(t);n>-1&&e.waitingque.splice(n,1),e.attendingque.push(t)}}))},checkout:function(t){var e=this;this.$axios.post("/que/delete",{patient_id:t.patient_id}).then((function(a){if(a.data.success){var n=e.attendingque.indexOf(t);n>-1&&e.attendingque.splice(n,1),e.dialogdata.title="Success",e.dialogdata.message="Removed patient "+t.patient_name+" from que",e.dialogdata.buttontext="Ok",e.dialogdata.type="success",e.dialogdata.show=!0}}))},left:function(t){var e=this;this.$axios.post("/que/delete",{patient_id:t.patient_id}).then((function(a){if(a.data.success){var n=e.waitingque.indexOf(t);n>-1&&e.waitingque.splice(n,1),e.dialogdata.title="Success",e.dialogdata.message="Removed patient "+t.patient_name+" from que",e.dialogdata.buttontext="Ok",e.dialogdata.type="success",e.dialogdata.show=!0}}))}}}),J=U,Q=a("ce7e"),W=a("8860"),H=a("da13"),K=a("71d9"),X=a("2a7f"),Y=Object(u["a"])(J,M,z,!1,null,null,null),Z=Y.exports;m()(Y,{VBtn:g["a"],VCard:E["a"],VCardActions:A["a"],VCardText:A["c"],VCardTitle:A["d"],VCol:v["a"],VContainer:f["a"],VDivider:Q["a"],VIcon:I["a"],VList:W["a"],VListItem:H["a"],VRow:h["a"],VSpacer:G["a"],VToolbar:K["a"],VToolbarTitle:X["a"]});var tt=new s["a"],et={components:{addpatient:w,patient_token_and_edit:R,queview:Z},data:function(){return{drawer:!1,que:!1,user_name:"",user_role:"",item:0,component:"patient_token_and_edit",listitems:[{key:"1",icon:"mdi-clipboard-plus",title:"Patient token",subtitle:"search, generate token",display:"patient_token_and_edit"}]}},beforeCreate:function(){var t=this,e=["admin","doctor","reception"];this.$axios.post("/user/verify",{token:tt.get("token")}).then((function(a){a.data.success&&(-1!==e.findIndex((function(t){return t===a.data.role}))?(t.user_name=a.data.name,t.user_role=a.data.role):alert("Permission denied")),a.data.error&&alert(a.data.error)})).catch((function(t){alert(t)}))},methods:{changepage:function(){this.$router.push("admin").catch((function(t){}))},logout:function(){this.$router.push("/logout")}}},at=et,nt=a("7496"),it=a("40dc"),st=a("5bc1"),ot=a("8270"),rt=a("5d23"),lt=a("1baa"),dt=a("f6c4"),ct=a("f774"),ut=a("3a2f"),pt=Object(u["a"])(at,n,i,!1,null,null,null);e["default"]=pt.exports;m()(pt,{VApp:nt["a"],VAppBar:it["a"],VAppBarNavIcon:st["a"],VBtn:g["a"],VDivider:Q["a"],VIcon:I["a"],VListItem:H["a"],VListItemAvatar:ot["a"],VListItemContent:rt["a"],VListItemGroup:lt["a"],VListItemSubtitle:rt["b"],VListItemTitle:rt["c"],VMain:dt["a"],VNavigationDrawer:ct["a"],VSpacer:G["a"],VToolbarTitle:X["a"],VTooltip:ut["a"]})}}]);
//# sourceMappingURL=chunk-3be56178.dd3156f7.js.map