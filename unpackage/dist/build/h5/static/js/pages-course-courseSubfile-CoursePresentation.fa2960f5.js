(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-course-courseSubfile-CoursePresentation"],{"17c3":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{attrs:{id:"CoursePresentation"}},[n("v-uni-view",{staticClass:"AppAllExplain"},[n("v-uni-text",[e._v(e._s(e.msg))])],1),n("v-uni-view",{staticClass:"coursePresentationHeader"},[n("v-uni-view",{staticClass:"courseImageBox"},[n("v-uni-image",{attrs:{src:e.imageBaseUrl+e.courseInfo.CoursePicURL}})],1)],1),n("v-uni-view",{staticClass:"coursePresentationBody"},[n("v-uni-view",{staticClass:"navList"},[n("v-uni-view",{staticClass:"navBox",class:{navActive:1===e.showCard},on:{click:function(t){t=e.$handleEvent(t),e.switchoverCard(1)}}},[n("v-uni-text",[e._v("课程概述")])],1),n("v-uni-view",{staticClass:"navBox",class:{navActive:2===e.showCard},on:{click:function(t){t=e.$handleEvent(t),e.switchoverCard(2)}}},[n("v-uni-text",[e._v("课程目录")])],1)],1),n("v-uni-view",{staticClass:"presentationContentBox"},[1===e.showCard?n("v-uni-view",{staticClass:"overviewBox"},[n("v-uni-navigator",{attrs:{url:"CourseAdvertise?CourseID="+e.courseID,"hover-class":"navigator-hover","open-type":"navigate"}},[n("v-uni-view",{staticClass:"overviewTitle"},[n("v-uni-text",[e._v(e._s(e.courseInfo.Summary))])],1),n("v-uni-view",{staticClass:"overviewImage"},[n("v-uni-image",{attrs:{src:e.imageBaseUrl+e.courseInfo.RecommendPicUrl}})],1)],1)],1):e._e(),2===e.showCard?n("v-uni-view",{staticClass:"courseCatalogue"},[n("uni-collapse",e._l(e.catalogueList,function(t,a){return n("uni-collapse-item",{key:a,staticStyle:{"font-size":"14px !important"},attrs:{title:a+1+"."+t.ChapterTitle}},[n("v-uni-navigator",{attrs:{url:"CourseVideo?CourseID="+e.courseID,"hover-class":"navigator-hover","open-type":"navigate"}},e._l(t.son,function(o,i){return void 0===t.son[a].son?n("v-uni-view",{key:i,staticStyle:{padding:"30upx"}},[e._v(e._s(o.ChapterTitle))]):e._e()}),1),e._l(t.son,function(o,i){return void 0!==t.son[a].son?n("uni-collapse-item",{key:i,attrs:{title:o.ChapterTitle}},[n("v-uni-navigator",{attrs:{url:"CourseVideo?CourseID="+e.courseID,"hover-class":"navigator-hover","open-type":"navigate"}},e._l(o.son,function(t,a){return n("v-uni-view",{key:a,staticStyle:{padding:"30upx"}},[e._v(e._s(t.ChapterTitle))])}),1)],1):e._e()})],2)}),1)],1):e._e()],1)],1)],1)},o=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})},2542:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n("e474")),o=s(n("318a")),i=s(n("a05e"));function s(e){return e&&e.__esModule?e:{default:e}}var r={components:{uniCollapse:o.default,uniCollapseItem:a.default},data:function(){return{msg:"课程介绍页面",showCard:2,imageBaseUrl:i.default.imageBaseUrl,courseID:"",courseInfo:{},catalogueList:[]}},onLoad:function(e){uni.showLoading({title:"加载中...",mask:!0,success:function(){},fail:function(){},complete:function(){}}),this.courseID=e.CourseID},onReady:function(){uni.hideLoading({}),this.mainIndex()},methods:{mainIndex:function(){this.getCoursePresentationByCourseID(),this.getCourseCatalogueListDataByCourseID()},getCoursePresentationByCourseID:function(){var e=this;this.$jsFn.apiFn.course.APIGetCoursePresentationByCourseID({CourseID:e.courseID}).then(function(t){console.log("获取课程简介通过课程ID",t),e.courseInfo=e.requestCallBackArrange("获取课程简介通过课程ID",t)})},getCourseCatalogueListDataByCourseID:function(){var e=this;this.$jsFn.apiFn.course.APIGetCourseCatalogueByCourseID({CourseID:e.courseID}).then(function(t){console.log("获取课程目录通过课程ID",t),e.catalogueList=e.requestCallBackArrange("获取课程目录通过课程ID",t)})},requestCallBackArrange:function(e,t){if(null!==t[0])uni.showToast({title:e+"错误",icon:"none",duration:2e3});else{if(200===t[1].statusCode&&200===t[1].data.code)return uni.showToast({title:e+t[1].data.message,icon:"none",duration:2e3}),t[1].data.data;uni.showToast({title:e+t[1].data.message,icon:"none",duration:2e3})}return[]},switchoverCard:function(e){this.showCard=e}}};t.default=r},"49fc":function(e,t,n){"use strict";var a=n("b811"),o=n.n(a);o.a},"7e5d":function(e,t,n){"use strict";n.r(t);var a=n("2542"),o=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);t["default"]=o.a},b811:function(e,t,n){var a=n("cd85");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=n("4f06").default;o("03d51d92",a,!0,{sourceMap:!1,shadowMode:!1})},cd85:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,"/*\n* 主导入函数配置\n* 创建于2019/07/02\n*/\n/***********************************************\n * 变量 函数 全局 兼容\n **********************************************/\n/*\n* publicFiles(可移植性公用文件)\n* */\n/*\n* 基础样式配置【public】\n* 创建于2019/07/02\n*/\n/*距离设置归零*/*[data-v-48bae38a]{padding:0;margin:0}\n/*清除列表格式*/li[data-v-48bae38a]{list-style-type:none}\n/*清除a标签的下划线*/a[data-v-48bae38a]{text-decoration:none}\n/*图片垂直居中*/img[data-v-48bae38a]{vertical-align:middle}\n/*页面or界面最顶部说明*/.AppAllExplain[data-v-48bae38a]{color:red;font-weight:700;text-align:center;display:none}\n/* 主色调：深天蓝DeepSkyBlue */\n/* 黑色调 */\n/* 字体颜色 */\n/* 背景色调 */\n/*\n* 浏览器兼容配置\n* 创建于2019/07/04\n*/\n/* 背景 start */\n/* 背景 end */\n/* 边框 start */\n/* 边框 end */\n/* 旋转 */\n/* 垂直居中 */.flex-direction[data-v-48bae38a]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}\n/*\n* privateFiles(不可移植性私有定制文件)\n* */\n/***********************************************\n * 各模块业务\n **********************************************/#CoursePresentation[data-v-48bae38a]{background:#f6f9f9}#CoursePresentation .coursePresentationHeader[data-v-48bae38a]{background:#fff;padding-bottom:%?36?%;margin-bottom:%?22?%}#CoursePresentation .coursePresentationHeader .courseImageBox[data-v-48bae38a]{width:100%;height:%?400?%}#CoursePresentation .coursePresentationHeader .courseImageBox>uni-image[data-v-48bae38a]{width:100%;height:100%}#CoursePresentation .coursePresentationBody[data-v-48bae38a]{background:#fff\n  /*.joinCourseBtn{\n            display: inline-block;\n            position: fixed;\n            bottom: 40upx;\n            right: 10upx;\n            padding: 28upx 50upx;\n            background: rgb(35, 184, 255);\n            color: #fff;\n            font-size: 14px;\n            .border-radius(5px);\n        }*/}#CoursePresentation .coursePresentationBody .navList[data-v-48bae38a]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}#CoursePresentation .coursePresentationBody .navList .navBox[data-v-48bae38a]{font-size:16px;padding:%?20?% %?40?%;border-bottom:6px solid rgba(0,0,0,0)}#CoursePresentation .coursePresentationBody .navList .navBox.navActive[data-v-48bae38a]{color:#23b8ff;border-color:#23b8ff}#CoursePresentation .coursePresentationBody .presentationContentBox .overviewBox .overviewTitle[data-v-48bae38a]{color:#7c8080;padding:%?20?%;line-height:26px;font-size:14px;text-indent:2em}#CoursePresentation .coursePresentationBody .presentationContentBox .overviewBox .overviewImage[data-v-48bae38a]{width:100%}#CoursePresentation .coursePresentationBody .presentationContentBox .overviewBox .overviewImage>uni-image[data-v-48bae38a]{width:100%}",""])},f683:function(e,t,n){"use strict";n.r(t);var a=n("17c3"),o=n("7e5d");for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);n("49fc");var s=n("2877"),r=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,"48bae38a",null);t["default"]=r.exports}}]);