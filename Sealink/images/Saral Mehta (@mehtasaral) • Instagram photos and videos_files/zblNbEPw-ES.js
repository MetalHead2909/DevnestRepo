if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("PolarisErrorRetrySection",["cx","PolarisGenericStrings","joinClasses","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");a=function(a){var b=a.className,e=a.errorText,f=a.onRetry;babelHelpers.objectWithoutPropertiesLoose(a,["className","errorText","onRetry"]);return i.jsx("div",{className:c("joinClasses")(b,"_abrb"),children:i.jsxs("button",{"aria-label":d("PolarisGenericStrings").RETRY_TEXT,className:"_abrc",onClick:f,tabIndex:"0",children:[i.jsx("div",{className:"_abrd _9_4y"}),i.jsx("div",{className:"_abre",children:(a=e)!=null?a:d("PolarisGenericStrings").FAILED_TO_LOAD_TEXT})]})})};g["default"]=a}),98);