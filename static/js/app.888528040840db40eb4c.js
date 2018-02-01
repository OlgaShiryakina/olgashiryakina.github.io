webpackJsonp([1],[,function(e,t,n){"use strict";function o(e){n(97)}var r=n(41),a=n(98),s=n(0),i=o,c=s(r.a,a.a,!1,i,null,null);t.a=c.exports},,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var o=n(3),r=n.n(o),a=n(2),s=n(70),i=n(73),c=n(94),l=n(111),d=n(114);n(117),n(118),n(119),n(120),n(121);t.a={name:"app",components:{Greet:s.a,training:i.a,wordBook:c.a,addWord:l.a,Languages:d.a},data:function(){return{showGreet:!0,nav:[{name:"training",icon:"home"},{name:"wordBook",icon:"book"},{name:"addWord",icon:"file-text-o"},{name:"language",icon:"adjust"}]}},computed:r()({},Object(a.b)({locales:"getAvailableLocales",currentTheme:"getCurrentTheme",currentComponent:"getCurrentComponent"}),{locale:function(){return this.$i18n.locale()}}),methods:{changeComponent:function(e){this.$store.dispatch("setCurrentComponent",e)},addNew:function(){this.$store.dispatch("setOldComponent","main"),this.changeComponent("addWord")}},created:function(){var e=JSON.parse(window.localStorage.getItem("lang")),t=this;clearTimeout(this._delayRunTimer),this._delayRunTimer=setTimeout(function(){e?t.$i18n.set(e):t.$i18n.set(t.locales[0]),t.showGreet=!1},1500);var n=JSON.parse(window.localStorage.getItem("wordBook"));n&&this.$store.dispatch("setWordBook",n);var o=JSON.parse(window.localStorage.getItem("currentTheme"));o&&this.$store.dispatch("setCurrentTheme",o)}}},,,,,,,,function(e,t,n){"use strict";t.a={name:"greet",data:function(){return{}},created:function(){},methods:{}}},function(e,t,n){"use strict";var o=n(12),r=n.n(o),a=n(36),s=n.n(a),i=n(3),c=n.n(i),l=n(2),d=n(39),u=n.n(d);t.a={data:function(){return{answer:"",counter:0,popupCounter:!1,popupDeleteWord:!1,trainFolder:1,taskWord:"",help:!1,wordRedactor:!1}},directives:{ClickOutside:u.a},computed:c()({},Object(l.b)({wordBook:"getWordBook"}),{foldersLength:function(){var e=this,t=[],n=!0,o=!1,r=void 0;try{for(var a,i=s()(this.wordBook.folders);!(n=(a=i.next()).done);n=!0){var c=a.value;!function(n){var o=n.id,r=e.wordBook.words.filter(function(e){if(e.folder===o)return!0});t.push(r.length)}(c)}}catch(e){o=!0,r=e}finally{try{!n&&i.return&&i.return()}finally{if(o)throw r}}return t},collection:function(){var e=this;return this.wordBook.words.filter(function(t){if(t.folder===e.trainFolder)return!0})}}),created:function(){var e=JSON.parse(window.localStorage.getItem("counter"));e&&(this.counter=e);var t=JSON.parse(window.localStorage.getItem("trainFolder"));this.trainFolder=t||1,this.checkTrainFolder(),this.wordBook.words.length&&this.setTask()},methods:{clearCounter:function(){this.counter=0,this.popupCounter=!1},checkTrainFolder:function(){var e=this,t=this.wordBook.folders.findIndex(function(t,n){return t.id===e.trainFolder});if(!this.foldersLength[t])for(var n in this.wordBook.folders)if(this.foldersLength[n])return this.trainFolder=this.wordBook.folders[n].id,window.localStorage.setItem("trainFolder",r()(this.trainFolder)),!1},setTrainFolder:function(){window.localStorage.setItem("trainFolder",r()(this.trainFolder)),this.setTask()},setTask:function(){var e=Math.floor(Math.random()*this.collection.length);this.taskWord=JSON.parse(r()(this.collection[e])),this.help=!1},hide:function(){this.wordRedactor=!1},addWord:function(){this.$store.dispatch("setCurrentComponent","addWord")},editWord:function(){this.$store.dispatch("setNewWord",this.taskWord),this.addWord()},deleteWord:function(){var e=this;this.wordBook.words=this.wordBook.words.filter(function(t){if(t.en!==e.taskWord.en)return!0}),this.$store.dispatch("setWordBook",this.wordBook),this.checkTrainFolder(),this.setTask(),this.popupDeleteWord=!1},showHint:function(){this.help=!this.help,this.$refs.input.focus()}},watch:{counter:function(e){window.localStorage.setItem("counter",r()(e))},answer:function(e){if(e){var t=this;clearTimeout(this._delayRunTimer),this._delayRunTimer=setTimeout(function(){e.toLowerCase().replace(/[\s{2}]+/g," ")===t.taskWord.en&&(t.setTask(),t.answer="",t.counter++)},700)}}}}},,,,,function(e,t,n){"use strict";var o=n(3),r=n.n(o),a=n(2),s=(n(96),n(99),n(24),n(100),n(101)),i=n(104),c=n(107);t.a={data:function(){return{component:"folders",folderId:"",showFolder:""}},components:{folders:s.a,Folder:i.a,newFolder:c.a},computed:r()({},Object(a.b)({wordBook:"getWordBook"})),created:function(){},methods:{openFolder:function(e){this.folderId=e,this.component="folder"}}}},function(e,t,n){"use strict";function o(){return"fa-"+(a++).toString(16)}var r={};t.a={name:"icon",props:{name:{type:String,validator:function(e){return e?e in r||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'+e+'".\nPlesase make sure you have imported this icon before using it.'),!1):(console.warn('Invalid prop: prop "name" is required.'),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(e){return"horizontal"===e||"vertical"===e}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var e=this.scale;return e=void 0===e?1:Number(e),isNaN(e)||e<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):e*this.outerScale},klass:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse}},icon:function(){return this.name?r[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var e=this.icon,t=e.width,n=e.height;return Math.max(t,n)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var e=this.icon.raw,t={};return e=e.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,function(e,n){var r=o();return t[n]=r,' id="'+r+'"'}),e=e.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(e,n,o,r){var a=n||r;return a&&t[a]?"#"+t[a]:e}),e}},mounted:function(){var e=this;if(!this.icon){this.$children.forEach(function(t){t.outerScale=e.normalizedScale});var t=0,n=0;this.$children.forEach(function(e){t=Math.max(t,e.width),n=Math.max(n,e.height)}),this.childrenWidth=t,this.childrenHeight=n,this.$children.forEach(function(e){e.x=(t-e.width)/2,e.y=(n-e.height)/2})}},register:function(e){for(var t in e){var n=e[t];n.paths||(n.paths=[]),n.d&&n.paths.push({d:n.d}),n.polygons||(n.polygons=[]),n.points&&n.polygons.push({points:n.points}),r[t]=n}},icons:r};var a=870711},function(e,t,n){"use strict";var o=n(36),r=n.n(o),a=n(3),s=n.n(a),i=n(2);n(24);t.a={data:function(){return{}},computed:s()({},Object(i.b)({wordBook:"getWordBook"}),{foldersLength:function(){var e=this,t=[],n=!0,o=!1,a=void 0;try{for(var s,i=r()(this.wordBook.folders);!(n=(s=i.next()).done);n=!0){var c=s.value;!function(n){var o=n.id,r=e.wordBook.words.filter(function(e){if(e.folder===o)return!0});t.push(r.length)}(c)}}catch(e){o=!0,a=e}finally{try{!n&&i.return&&i.return()}finally{if(o)throw a}}return t}}),methods:{openFolder:function(e){this.$emit("setId",e)}}}},function(e,t,n){"use strict";var o=n(12),r=n.n(o),a=n(3),s=n.n(a),i=n(2),c=n(39),l=n.n(c);n(24);t.a={props:["id"],data:function(){return{rename:!1,opened:!1,deleteNote:!1,newName:"",showMessages:!1,openIndex:""}},directives:{ClickOutside:l.a},computed:s()({},Object(i.b)({wordBook:"getWordBook",newWord:"getNewWord"}),{removable:function(){var e=this.id;if(e){return this.wordBook.folders.find(function(t){return t.id===e}).removable}return!1},title:function(){if(0===this.id)return"All";var e=this.id;return this.wordBook.folders.find(function(t){return t.id===e}).name},collection:function(){var e=[];if(0===this.id)e=this.wordBook.words;else{var t=this;e=this.wordBook.words.filter(function(e){if(e.folder===t.id)return e})}return e.sort(this.sortBy)}}),methods:{sortBy:function(e,t){return e.en.replace(/[^A-Za-zА-Яа-яЁё]/g,""),t.en.replace(/[^A-Za-zА-Яа-яЁё]/g,""),e.en>t.en?1:e.en<t.en?-1:0},cancelEdit:function(){this.rename=!1,this.newName="",this.showMessages=!1},saveNewName:function(){var e=this;if(this.newName){var t=this.id;this.wordBook.folders=this.wordBook.folders.map(function(n){return n.id===t&&(n.name=e.newName),n}),this.$store.dispatch("setWordBook",this.wordBook),this.cancelEdit()}else this.showMessages=!0},hide:function(){this.opened=!1},deleteFolder:function(){var e=this;this.collection.length&&(this.wordBook.words=this.wordBook.words.filter(function(t){if(t.folder!==e.id)return t})),this.wordBook.folders=this.wordBook.folders.filter(function(t){if(t.id!==e.id)return t}),this.$store.dispatch("setWordBook",this.wordBook),this.$emit("closeFolder")},openNav:function(e){this.openIndex=this.openIndex===e?"":e},editWord:function(e){var t=JSON.parse(r()(e));this.$store.dispatch("setNewWord",t),this.$store.dispatch("setCurrentComponent","addWord")},deleteWord:function(e){this.wordBook.words=this.wordBook.words.filter(function(t){if(t.en!==e)return!0}),this.$store.dispatch("setWordBook",this.wordBook)}}}},function(e,t,n){"use strict";var o=n(3),r=n.n(o),a=n(2);t.a={data:function(){return{folderName:"",popupMessage:!1,showMessages:!1}},mounted:function(){this.$refs.input.focus()},computed:r()({},Object(a.b)({wordBook:"getWordBook"}),{folderId:function(){var e=this.wordBook.folders.length-1;return this.wordBook.folders[e].id+1}}),methods:{addFolder:function(){this.wordBook.folders.push({name:this.folderName,removable:!0,id:this.folderId}),this.$store.dispatch("setWordBook",this.wordBook),this.folderName="",this.showMessages=!1},addNew:function(){if(this.folderName){this.addFolder(),this.popupMessage=!0;var e=this;this._delayRunTimer=setTimeout(function(){e.popupMessage=!1},1500)}else this.showMessages=!0},addAndGo:function(){if(this.folderName){var e=this.folderId;this.addFolder(),this.$emit("setId",e)}else this.showMessages=!0}}}},function(e,t,n){"use strict";var o=n(3),r=n.n(o),a=n(2);t.a={data:function(){return{oldWord:"",showMessages:!1,popupMessage:!1}},computed:r()({},Object(a.b)({wordBook:"getWordBook",newWord:"getNewWord"}),{exist:function(){var e=this.newWord.en.toLowerCase();return this.wordBook.words.some(function(t){return t.en===e})}}),created:function(){this.oldWord=this.newWord.en},methods:{clear:function(){this.newWord.en="",this.newWord.ru="",this.newWord.folder="",""!==this.oldWord&&this.$store.dispatch("setNewWord",this.newWord),this.oldWord=""},checkForm:function(e){if(""!==this.newWord.en&&""!==this.newWord.ru&&""!==this.newWord.folder){"keep"===e?this.keep():"replace"===e&&this.replace(),this.setWords(),this.popupMessage=!0;var t=this;this._delayRunTimer=setTimeout(function(){t.popupMessage=!1},1500),this.showMessages=!1}else this.showMessages=!0},keep:function(){this.wordBook.words.push({en:this.newWord.en.toLowerCase(),ru:this.newWord.ru.toLowerCase(),folder:this.newWord.folder})},replace:function(){var e=this,t=this.oldWord?this.oldWord:this.newWord.en.toLowerCase();this.wordBook.words=this.wordBook.words.map(function(n){return n.en===t?{en:e.newWord.en.toLowerCase(),ru:e.newWord.ru.toLowerCase(),folder:e.newWord.folder}:n})},setWords:function(){this.$store.dispatch("setWordBook",this.wordBook),this.clear()}}}},function(e,t,n){"use strict";var o=n(12),r=n.n(o),a=n(3),s=n.n(a),i=n(2);t.a={data:function(){return{storage:"",currentLocale:"",selectedTheme:""}},computed:s()({},Object(i.b)({locales:"getAvailableLocales",currentTheme:"getCurrentTheme",themes:"getThemes"})),created:function(){this.currentLocale=this.$i18n.locale(),this.storage=JSON.parse(window.localStorage.getItem("lang")),this.selectedTheme=JSON.parse(r()(this.currentTheme))},methods:{changeLocale:function(){this.$i18n.set(this.currentLocale),this.storage=JSON.parse(r()(this.currentLocale)),window.localStorage.setItem("lang",r()(this.currentLocale))},saveTheme:function(){this.$store.dispatch("setCurrentTheme",this.selectedTheme)}}}},function(e,t,n){"use strict";t.a={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js PWA"}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(14),r=n(52),a=n(123),s=n(128),i=n(1);o.a.component("icon",i.a),o.a.config.productionTip=!1,new o.a({el:"#app",router:a.a,store:s.a,template:"<App/>",components:{App:r.a}}).$mount("#app")},,,,function(e,t,n){"use strict";function o(e){n(53),n(55)}var r=n(26),a=n(122),s=n(0),i=o,c=s(r.a,a.a,!1,i,"data-v-7f2dee82",null);t.a=c.exports},function(e,t){},,function(e,t){},,,,,,,,,,,,,,,function(e,t,n){"use strict";function o(e){n(71)}var r=n(34),a=n(72),s=n(0),i=o,c=s(r.a,a.a,!1,i,"data-v-9647bb1e",null);t.a=c.exports},function(e,t){},function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"greet"},[n("div",{staticClass:"greet-container"},[n("div",{staticClass:"greet-content"},[e._v("freedom to")]),e._v(" "),n("div",{staticClass:"greet-content"},[e._v("learn")]),e._v(" "),n("div",{staticClass:"greet-content"},[e._v("English")])])])}],a={render:o,staticRenderFns:r};t.a=a},function(e,t,n){"use strict";function o(e){n(74)}var r=n(35),a=n(93),s=n(0),i=o,c=s(r.a,a.a,!1,i,"data-v-5a92714e",null);t.a=c.exports},function(e,t){},,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"training"},[e.wordBook.words.length?[n("div",{staticClass:"training-nav"},[n("label",[e._v("\n        "+e._s(e.$t("Folder"))+":\n        "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.trainFolder,expression:"trainFolder"}],on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.trainFolder=t.target.multiple?n:n[0]},function(t){e.setTrainFolder()}]}},e._l(e.wordBook.folders,function(t,o){return e.foldersLength[o]?n("option",{key:o,domProps:{value:t.id}},[e._v(e._s(e.$t(t.name)))]):e._e()}))]),e._v(" "),n("a",{staticClass:"counter",on:{click:function(t){t.preventDefault(),e.popupCounter=!0}}},[e._v(e._s(e.$t("counter"))+" "+e._s(e.counter))])]),e._v(" "),n("div",{staticClass:"training-task"},[n("div",{staticClass:"training-task-word"},[e.help?[e._v(e._s(e.taskWord.en))]:[e._v(e._s(e.taskWord.ru))]],2),e._v(" "),n("div",{staticClass:"dropdown"},[n("a",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.hide,expression:"hide"}],staticClass:"navButton",on:{click:function(t){t.preventDefault(),e.wordRedactor=!0}}},[n("span")]),e._v(" "),e.wordRedactor?n("div",{staticClass:"dropdown-container"},[n("a",{on:{click:function(t){t.preventDefault(),e.editWord()}}},[e._v(e._s(e.$t("edit")))]),e._v(" "),n("a",{on:{click:function(t){t.preventDefault(),e.popupDeleteWord=!0}}},[e._v(e._s(e.$t("delete")))])]):e._e()])]),e._v(" "),n("div",{staticClass:"training-input"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.answer,expression:"answer",modifiers:{trim:!0}}],ref:"input",attrs:{type:"text"},domProps:{value:e.answer},on:{input:function(t){t.target.composing||(e.answer=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}}),e._v(" "),n("a",{staticClass:"button",on:{click:function(t){t.preventDefault(),e.showHint()}}},[e._v("?")])]),e._v(" "),n("transition",{attrs:{mode:"out-in",name:"fade","enter-active-class":"fadeIn","leave-active-class":"fadeOut"}},[e.popupCounter?n("div",{staticClass:"popup"},[n("div",{staticClass:"popup-wrap"},[n("div",{staticClass:"popup-container"},[n("a",{staticClass:"popup-close",on:{click:function(t){t.preventDefault(),e.popupCounter=!1}}}),e._v(" "),n("div",{staticClass:"popup-content"},[n("h4",[e._v(e._s(e.$t("Reset the counter?")))]),e._v(" "),n("a",{staticClass:"button",on:{click:function(t){t.preventDefault(),e.clearCounter()}}},[e._v(e._s(e.$t("reset")))]),e._v(" "),n("a",{staticClass:"button",on:{click:function(t){t.preventDefault(),e.popupCounter=!1}}},[e._v(e._s(e.$t("cancel")))])])])])]):e._e(),e._v(" "),e.popupDeleteWord?n("div",{staticClass:"popup"},[n("div",{staticClass:"popup-wrap"},[n("div",{staticClass:"popup-container"},[n("a",{staticClass:"popup-close",on:{click:function(t){t.preventDefault(),e.popupDeleteWord=!1}}}),e._v(" "),n("div",{staticClass:"popup-content"},[n("h4",[e._v(e._s(e.$t("Confirm the removal of the word"))+" "+e._s(e.taskWord.en)+" ")]),e._v(" "),n("a",{staticClass:"button",on:{click:function(t){t.preventDefault(),e.deleteWord()}}},[e._v(e._s(e.$t("delete")))]),e._v(" "),n("a",{staticClass:"button",on:{click:function(t){t.preventDefault(),e.popupDeleteWord=!1}}},[e._v(e._s(e.$t("cancel")))])])])])]):e._e()])]:e.wordBook.words.length?e._e():[n("div",{staticClass:"training-empty"},[n("div",{staticClass:"title-container"},[n("h3",[e._v(e._s(e.$t("You have no words to train")))])]),e._v(" "),n("a",{staticClass:"button",on:{click:function(t){t.preventDefault(),e.addWord(t)}}},[e._v(e._s(e.$t("add word")))])])]],2)},r=[],a={render:o,staticRenderFns:r};t.a=a},function(e,t,n){"use strict";function o(e){n(95)}var r=n(40),a=n(110),s=n(0),i=o,c=s(r.a,a.a,!1,i,"data-v-1d6782d0",null);t.a=c.exports},function(e,t){},,function(e,t){},function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{class:e.klass,style:e.style,attrs:{version:"1.1",role:e.label?"img":"presentation","aria-label":e.label,x:e.x,y:e.y,width:e.width,height:e.height,viewBox:e.box}},[e._t("default",[e.icon&&e.icon.paths?e._l(e.icon.paths,function(t,o){return n("path",e._b({key:"path-"+o},"path",t,!1))}):e._e(),e._v(" "),e.icon&&e.icon.polygons?e._l(e.icon.polygons,function(t,o){return n("polygon",e._b({key:"polygon-"+o},"polygon",t,!1))}):e._e(),e._v("\b\n    "),e.icon&&e.icon.raw?[n("g",{domProps:{innerHTML:e._s(e.raw)}})]:e._e()])],2)},r=[],a={render:o,staticRenderFns:r};t.a=a},,,function(e,t,n){"use strict";function o(e){n(102)}var r=n(42),a=n(103),s=n(0),i=o,c=s(r.a,a.a,!1,i,"data-v-5ed5c472",null);t.a=c.exports},function(e,t){},function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"list"},[e._l(e.wordBook.folders,function(t,o){return n("li",{key:o},[n("a",{on:{click:function(n){n.preventDefault(),e.openFolder(t.id)}}},[n("div",{staticClass:"icon"},[n("icon",{attrs:{name:"folder-o",scale:"2"}}),e._v(" "),e.foldersLength[o]>0?n("span",[e._v(e._s(e.foldersLength[o]))]):e._e()],1),e._v(" "),n("div",{staticClass:"name"},[e._v(e._s(e.$t(t.name)))])])])}),e._v(" "),n("li",[n("a",{on:{click:function(t){t.preventDefault(),e.openFolder(0)}}},[n("div",{staticClass:"icon"},[n("icon",{attrs:{name:"folder-o",scale:"2"}}),e._v(" "),n("span",[e._v(e._s(e.wordBook.words.length))])],1),e._v(" "),n("div",{staticClass:"name"},[e._v(e._s(e.$t("All")))])])])],2)},r=[],a={render:o,staticRenderFns:r};t.a=a},function(e,t,n){"use strict";function o(e){n(105)}var r=n(43),a=n(106),s=n(0),i=o,c=s(r.a,a.a,!1,i,"data-v-8a9f6ff2",null);t.a=c.exports},function(e,t){},function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"folder"},[n("div",[n("div",{staticClass:"title-container"},[n("icon",{attrs:{name:"folder-o",scale:"2"}}),e._v(" "),n("h3",[e._v(e._s(e.$t(e.title)))]),e._v(" "),e.removable?n("div",{staticClass:"dropdown"},[n("a",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.hide,expression:"hide"}],staticClass:"navButton",on:{click:function(t){t.preventDefault(),e.opened=!0}}},[n("span")]),e._v(" "),e.opened?n("div",{staticClass:"dropdown-container"},[n("a",{on:{click:function(t){t.preventDefault(),e.rename=!0}}},[e._v(e._s(e.$t("Rename the folder")))]),e._v(" "),n("a",{on:{click:function(t){t.preventDefault(),e.deleteNote=!0,e.rename=!1,e.showMessages=!1}}},[e._v(e._s(e.$t("Delete the folder")))])]):e._e()]):e._e()],1),e._v(" "),e.rename?n("div",{staticClass:"folder-rename"},[n("span",[e._v(e._s(e.$t("New name of folder")))]),e._v(" "),n("div",{staticClass:"folder-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newName,expression:"newName"}],attrs:{type:"text"},domProps:{value:e.newName},on:{input:function(t){t.target.composing||(e.newName=t.target.value)}}}),e._v(" "),n("transition",{attrs:{mode:"out-in",name:"fade","enter-active-class":"fadeIn","leave-active-class":"fadeOut"}},[!e.newName&&e.showMessages?n("div",{staticClass:"error"},[e._v(e._s(e.$t("The field is not filled")))]):e._e()])],1),e._v(" "),n("a",{staticClass:"button",on:{click:function(t){t.preventDefault(),e.saveNewName(t)}}},[e._v(e._s(e.$t("save")))]),e._v(" "),n("a",{staticClass:"button",on:{click:function(t){t.preventDefault(),e.cancelEdit(t)}}},[e._v(e._s(e.$t("cancel")))])]):e._e()]),e._v(" "),e.collection.length?n("ul",{staticClass:"list"},e._l(e.collection,function(t,o){return n("li",{key:o},[n("div",{staticClass:"list-content"},[n("strong",[e._v(e._s(t.en))]),e._v(" -\n        "),n("span",[e._v(e._s(t.ru))]),e._v(" "),n("a",{staticClass:"navButton",class:{opened:e.openIndex===o},on:{click:function(t){t.preventDefault(),e.openNav(o)}}},[n("span")])]),e._v(" "),e.openIndex===o?n("div",{staticClass:"list-buttons"},[n("a",{staticClass:"button",on:{click:function(n){n.preventDefault(),e.deleteWord(t.en)}}},[e._v(e._s(e.$t("delete")))]),e._v(" "),n("a",{staticClass:"button",on:{click:function(n){n.preventDefault(),e.editWord(t)}}},[e._v(e._s(e.$t("edit")))])]):e._e()])})):n("div",{staticClass:"emptyFolder"},[e._v(e._s(e.$t("This folder is empty")))]),e._v(" "),n("transition",{attrs:{mode:"out-in",name:"fade","enter-active-class":"fadeIn","leave-active-class":"fadeOut"}},[e.deleteNote?n("div",{staticClass:"popup"},[n("div",{staticClass:"popup-wrap"},[n("div",{staticClass:"popup-container"},[n("a",{staticClass:"popup-close",on:{click:function(t){t.preventDefault(),e.deleteNote=!1}}}),e._v(" "),n("div",{staticClass:"popup-content"},[n("h4",[e.collection.length?[e._v(e._s(e.$t("The folder will be deleted with all words what contains in this folder")))]:[e._v(e._s(e.$t("Confirm removal")))]],2),e._v(" "),n("a",{staticClass:"button",on:{click:function(t){t.preventDefault(),e.deleteFolder(t)}}},[e._v(e._s(e.$t("delete")))]),e._v(" "),n("a",{staticClass:"button",on:{click:function(t){t.preventDefault(),e.deleteNote=!1}}},[e._v(e._s(e.$t("cancel")))])])])])]):e._e()])],1)},r=[],a={render:o,staticRenderFns:r};t.a=a},function(e,t,n){"use strict";function o(e){n(108)}var r=n(44),a=n(109),s=n(0),i=o,c=s(r.a,a.a,!1,i,"data-v-6f78d4d5",null);t.a=c.exports},function(e,t){},function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[n("div",{staticClass:"title-container"},[n("h3",[e._v(e._s(e.$t("New folder")))])]),e._v(" "),n("p",[e._v(e._s(e.$t("Enter the title")))]),e._v(" "),n("div",{staticClass:"input"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.folderName,expression:"folderName",modifiers:{trim:!0}}],ref:"input",attrs:{type:"text"},domProps:{value:e.folderName},on:{keyup:function(t){if(!("button"in t)&&13!==t.keyCode)return null;e.addAndGo()},input:function(t){t.target.composing||(e.folderName=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}}),e._v(" "),n("transition",{attrs:{mode:"out-in",name:"fade","enter-active-class":"fadeIn","leave-active-class":"fadeOut"}},[!e.folderName&&e.showMessages?n("div",{staticClass:"error"},[e._v(e._s(e.$t("The field is not filled")))]):e._e()])],1),e._v(" "),n("div",[n("a",{staticClass:"button",on:{click:function(t){t.preventDefault(),e.addNew(t)}}},[e._v(e._s(e.$t("add")))]),e._v(" "),n("a",{staticClass:"button",on:{click:function(t){t.preventDefault(),e.addAndGo(t)}}},[e._v(e._s(e.$t("add and go")))])]),e._v(" "),n("transition",{attrs:{mode:"out-in",name:"fade","enter-active-class":"fadeIn","leave-active-class":"fadeOut"}},[e.popupMessage?n("div",{staticClass:"popup"},[n("div",{staticClass:"popup-wrap"},[n("div",{staticClass:"popup-container"},[n("a",{staticClass:"popup-close",on:{click:function(t){t.preventDefault(),e.popupMessage=!1}}}),e._v(" "),n("div",{staticClass:"popup-content"},[n("h4",[e._v(e._s(e.$t("New folder added")))])])])])]):e._e()])],1)},r=[],a={render:o,staticRenderFns:r};t.a=a},function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wordBook"},[n("div",{staticClass:"wordBook-nav"},[n("a",{staticClass:"button",class:{active:"folders"===e.component},on:{click:function(t){t.preventDefault(),e.component="folders"}}},[n("icon",{attrs:{name:"folder-open-o",scale:"1"}}),e._v("\n      "+e._s(e.$t("folders"))+"\n    ")],1),e._v(" "),n("a",{staticClass:"button",class:{active:"newFolder"===e.component},on:{click:function(t){t.preventDefault(),e.component="newFolder"}}},[n("icon",{attrs:{name:"folder",scale:"1"}}),e._v("\n      "+e._s(e.$t("new folder"))+"\n    ")],1)]),e._v(" "),n("transition",{attrs:{mode:"out-in",name:"fade","enter-active-class":"fadeIn","leave-active-class":"fadeOut"}},["folders"===e.component?n("folders",{on:{setId:e.openFolder}}):"folder"===e.component?n("folder",{attrs:{id:e.folderId},on:{closeFolder:function(t){e.component="folders"}}}):e._e(),e._v(" "),"newFolder"===e.component?n("new-folder",{on:{setId:e.openFolder}}):e._e()],1)],1)},r=[],a={render:o,staticRenderFns:r};t.a=a},function(e,t,n){"use strict";function o(e){n(112)}var r=n(45),a=n(113),s=n(0),i=o,c=s(r.a,a.a,!1,i,"data-v-e030a246",null);t.a=c.exports},function(e,t){},function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"addWord"},[n("div",{staticClass:"title-container"},[""!==e.oldWord||e.exist?n("h3",[e._v(e._s(e.$t("Editing")))]):n("h3",[e._v(e._s(e.$t("New word")))])]),e._v(" "),n("div",[e._v(e._s(e.$t("Word")))]),e._v(" "),n("div",{staticClass:"addWord-input"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.newWord.en,expression:"newWord.en",modifiers:{trim:!0}}],attrs:{type:"text"},domProps:{value:e.newWord.en},on:{input:function(t){t.target.composing||e.$set(e.newWord,"en",t.target.value.trim())},blur:function(t){e.$forceUpdate()}}}),e._v(" "),n("transition",{attrs:{mode:"out-in",name:"fade","enter-active-class":"fadeIn","leave-active-class":"fadeOut"}},[""===e.oldWord&&e.exist?n("div",{staticClass:"error"},[e._v(e._s(e.$t("This word already exists")))]):!e.newWord.en&&e.showMessages?n("div",{staticClass:"error"},[e._v(e._s(e.$t("The field is not filled")))]):e._e()])],1),e._v(" "),n("div",[e._v(e._s(e.$t("Transfer")))]),e._v(" "),n("div",{staticClass:"addWord-input"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.newWord.ru,expression:"newWord.ru",modifiers:{trim:!0}}],attrs:{type:"text"},domProps:{value:e.newWord.ru},on:{input:function(t){t.target.composing||e.$set(e.newWord,"ru",t.target.value.trim())},blur:function(t){e.$forceUpdate()}}}),e._v(" "),n("transition",{attrs:{mode:"out-in",name:"fade","enter-active-class":"fadeIn","leave-active-class":"fadeOut"}},[!e.newWord.ru&&e.showMessages?n("div",{staticClass:"error"},[e._v(e._s(e.$t("The field is not filled")))]):e._e()])],1),e._v(" "),n("div",[e._v(e._s(e.$t("Folder")))]),e._v(" "),n("div",{staticClass:"addWord-input"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.newWord.folder,expression:"newWord.folder"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.newWord,"folder",t.target.multiple?n:n[0])}}},e._l(e.wordBook.folders,function(t,o){return n("option",{key:o,domProps:{value:t.id}},[e._v(e._s(e.$t(t.name)))])})),e._v(" "),n("transition",{attrs:{mode:"out-in",name:"fade","enter-active-class":"fadeIn","leave-active-class":"fadeOut"}},[!e.newWord.folder&&e.showMessages?n("div",{staticClass:"error"},[e._v(e._s(e.$t("Select folder")))]):e._e()])],1),e._v(" "),""!==e.oldWord||e.exist?n("a",{staticClass:"button",on:{click:function(t){t.preventDefault(),e.checkForm("replace")}}},[e._v(e._s(e.$t("replace")))]):n("a",{staticClass:"button",on:{click:function(t){t.preventDefault(),e.checkForm("keep")}}},[e._v(e._s(e.$t("keep")))]),e._v(" "),n("a",{staticClass:"button",on:{click:function(t){t.preventDefault(),e.clear()}}},[e._v(e._s(e.$t("clear")))]),e._v(" "),n("transition",{attrs:{mode:"out-in",name:"fade","enter-active-class":"fadeIn","leave-active-class":"fadeOut"}},[e.popupMessage?n("div",{staticClass:"popup"},[n("div",{staticClass:"popup-wrap"},[n("div",{staticClass:"popup-container"},[n("a",{staticClass:"popup-close",on:{click:function(t){t.preventDefault(),e.deleteNote=!1}}}),e._v(" "),n("div",{staticClass:"popup-content"},[n("h3",[e._v(e._s(e.$t("Saved")))])])])])]):e._e()])],1)},r=[],a={render:o,staticRenderFns:r};t.a=a},function(e,t,n){"use strict";function o(e){n(115)}var r=n(46),a=n(116),s=n(0),i=o,c=s(r.a,a.a,!1,i,"data-v-01d1f85d",null);t.a=c.exports},function(e,t){},function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"languages"},[n("h3",[e._v(e._s(e.$t("Language of interface")))]),e._v(" "),e._l(e.locales,function(t,o){return n("label",{key:o},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.currentLocale,expression:"currentLocale"}],attrs:{type:"radio",name:"lang"},domProps:{value:t,checked:e._q(e.currentLocale,t)},on:{change:function(n){e.currentLocale=t}}}),e._v(" "),n("span",[e._v(e._s(e.$t(t)))])])}),e._v(" "),e.currentLocale!==e.storage?n("div",{staticClass:"buttons"},[n("a",{staticClass:"button",on:{click:function(t){t.preventDefault(),e.changeLocale(t)}}},[e._v(e._s(e.$t("keep")))])]):e._e(),e._v(" "),n("h3",[e._v(e._s(e.$t("Themes")))]),e._v(" "),e._l(e.themes,function(t){return n("label",{key:t.class},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedTheme,expression:"selectedTheme"}],attrs:{type:"radio",name:"theme"},domProps:{value:t.class,checked:e._q(e.selectedTheme,t.class)},on:{change:[function(n){e.selectedTheme=t.class},function(t){e.saveTheme()}]}}),e._v(" "),n("span",[e._v(e._s(e.$t(t.name)))])])})],2)},r=[],a={render:o,staticRenderFns:r};t.a=a},,,,,,function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.currentTheme,attrs:{id:"app"}},[n("main",{staticClass:"main"},[n("transition",{attrs:{mode:"out-in",name:"fade","enter-active-class":"fadeIn","leave-active-class":"fadeOut"}},[e.showGreet?n("greet"):n("div",[n("header",{staticClass:"header"},e._l(e.nav,function(t,o){return n("a",{key:o,class:{active:t.name===e.currentComponent},on:{click:function(n){n.preventDefault(),e.changeComponent(t.name)}}},[n("icon",{attrs:{name:t.icon}})],1)})),e._v(" "),n("transition",{attrs:{mode:"out-in",name:"fade","enter-active-class":"fadeIn","leave-active-class":"fadeOut"}},["training"===e.currentComponent?n("training"):"language"===e.currentComponent?n("languages"):"wordBook"===e.currentComponent?n("word-book"):"addWord"===e.currentComponent?n("add-word"):e._e()],1)],1)],1)],1)])},r=[],a={render:o,staticRenderFns:r};t.a=a},function(e,t,n){"use strict";var o=n(14),r=n(124),a=n(125);o.a.use(r.a),t.a=new r.a({routes:[{path:"/",name:"Hello",component:a.a}],mode:"history"})},,function(e,t,n){"use strict";function o(e){n(126)}var r=n(47),a=n(127),s=n(0),i=o,c=s(r.a,a.a,!1,i,null,null);t.a=c.exports},function(e,t){},function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._v(" "),n("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),n("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),e._v(" "),n("li",[n("a",{attrs:{href:"http://chat.vuejs.org/",target:"_blank",rel:"noopener"}},[e._v("Vue Community Chat")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),e._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank",rel:"noopener"}},[e._v("Docs for This Template")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),e._v(" "),n("li",[n("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),e._v(" "),n("li",[n("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],a={render:o,staticRenderFns:r};t.a=a},function(e,t,n){"use strict";var o=n(129),r=n.n(o),a=n(12),s=n.n(a),i=n(14),c=n(2),l=n(133);i.a.use(c.a);var d={ru:{"Language of interface":"Язык интерфейса",keep:"сохранить",ru:"Русский",ua:"Украинский","New word":"Новое слово",Editing:"Редактирование",Word:"Слово","This word already exists":"Это слово уже существует","The field is not filled":"Поле не заполнено",Transfer:"Перевод",Folder:"Папка","Select folder":"Выберите папку",replace:"заменить",Main:"Основное",Learned:"Выученные",All:"Все","Reset the counter?":"Сбросить счетчик?",reset:"сбросить",edit:"редактировать",delete:"удалить","Confirm the removal of the word":"Подтвердите удаление слова",clear:"очистить","You have no words to train":"У вас нет слов для тренировки","add word":"добавить слово","new folder":"новая папка","New folder":"Новая папка",folders:"папки","Enter the title":"Введите название","New folder added":"Новая папка добавлена",add:"добавить","add and go":"добавить и перейти",counter:"счетчик","Rename the folder":"Переименовать папку","Delete the folder":"Удалить папку","New name of folder":"Новое имя папки","This folder is empty":"Эта папка пуста","The folder will be deleted with all words what contains in this folder":"Папка будет удалена со всеми словами, которые содержатся в этой папке","Confirm removal":"Подтвердить удаление",save:"сохранить",cancel:"отмена",Saved:"Сохранено",Themes:"Темы"},ua:{"Language of interface":"Мова інтерфейсу",keep:"зберегти",ru:"Російська",ua:"Українська","New word":"Нове слово",Editing:"Редагування",Word:"Слово","This word already exists":"Це слово вже існує","The field is not filled":"Поле не заповнене",Transfer:"Переклад",Folder:"Папка","Select folder":"Виберіть папку",replace:"замінити",Main:"Основне",Learned:"Вивчені",All:"Усі","Reset the counter?":"Скинути лічильник?",reset:"скинути",edit:"редагувати",delete:"видалити","Confirm the removal of the word":"Підтвердіть видалення слова",clear:"очистити","You have no words to train":"У вас немає слів для тренування","add word":"додати слово","new folder":"нова папка","New folder":"Нова папка",folders:"папки","Enter the title":"Введіть назву","New folder added":"Нова папка додана",add:"додати","add and go":"додати і перейти",counter:"лічильник","Rename the folder":"Перейменувати папку","Delete the folder":"Видалити папку","New name of folder":"Нове ім'я папки","This folder is empty":"Ця папка порожня","The folder will be deleted with all words what contains in this folder":"Папка буде видалена з усіма словами, що містяться в цій папці","Confirm removal":"Підтвердьте видалення",save:"зберегти",cancel:"скасувати",Saved:"Збережено",Themes:"Теми"}},u=[],f={availableLocales:u,currentComponent:"training",currentTheme:"theme0",themes:[{name:"Indian Red",class:"theme0"},{name:"Red",class:"theme1"},{name:"Blue",class:"theme2"},{name:"Light Blue",class:"theme3"},{name:"Green",class:"theme4"},{name:"Light Green",class:"theme5"},{name:"Brown",class:"theme6"}],wordBook:{folders:[{name:"Main",removable:!1,id:1},{name:"Learned",removable:!1,id:2}],words:[{en:"stream",ru:"поток",folder:1},{en:"integrate",ru:"интегрировать",folder:1},{en:"apple",ru:"яблоко",folder:1}]},newWord:{en:"",ru:"",folder:""}},v={getAvailableLocales:function(e){return e.availableLocales},getCurrentComponent:function(e){return e.currentComponent},getCurrentTheme:function(e){return e.currentTheme},getThemes:function(e){return e.themes},getWordBook:function(e){return e.wordBook},getNewWord:function(e){return e.newWord}},h={setCurrentComponent:function(e,t){(0,e.commit)("set",{type:"currentComponent",data:t})},setCurrentTheme:function(e,t){(0,e.commit)("set",{type:"currentTheme",data:t}),window.localStorage.setItem("currentTheme",s()(t))},setWordBook:function(e,t){(0,e.commit)("set",{type:"wordBook",data:t}),window.localStorage.setItem("wordBook",s()(t))},setNewWord:function(e,t){(0,e.commit)("set",{type:"newWord",data:t})}},p={set:function(e,t){var n=t.type,o=t.data;e[n]=o}},m=new c.a.Store({state:f,actions:h,getters:v,mutations:p});i.a.use(l.a.plugin,m),r()(d).forEach(function(e){u.push(e),i.a.i18n.add(e,d[e])}),t.a=m}],[48]);
//# sourceMappingURL=app.888528040840db40eb4c.js.map