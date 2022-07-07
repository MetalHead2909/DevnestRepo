if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("PolarisPhoneConfirmTypes",["keyMirror"],(function(a,b,c,d,e,f,g){"use strict";a=c("keyMirror")({add:null,confirm:null});g.USAGE=a}),98);
__d("PolarisProfilePageUtils",["filterNulls"],(function(a,b,c,d,e,f,g){"use strict";var h=/^[^.:/?#]+:\/+/;function a(a){if((a==null?void 0:a.length)===0||a==null)return[];a=c("filterNulls")(a.map(function(a){return a!=null&&(a==null?void 0:a.url)!=null&&(a==null?void 0:a.url)!==""&&(a==null?void 0:a.lynx_url)!=null&&(a==null?void 0:a.lynx_url)!==""?{title:a.title,lynx_url:a.lynx_url,url:a.url}:null}));return a}function i(a){a=a.replace(h,"");return a.replace(/\/$/,"")}function b(a){if(a==null||a.length===0)return"";var b=i(a[0]);return a.length===1?b:b+" + "+String(a.length-1)}g.getFilterBioLinks=a;g.getLinkForDisplay=i;g.getMultipleLinksStringForEditPage=b}),98);
__d("PolarisPhoneConfirmActions",["PolarisAPI","PolarisNavigationUtils","PolarisPhoneConfirmActionTypes","PolarisSettingsActions","PolarisrunPromise","Polarisunexpected","Promise"],(function(a,b,c,d,e,f,g){"use strict";function h(a,c){c({type:d("PolarisPhoneConfirmActionTypes").PHONE_CONFIRM_SMS_CODE_REQUESTED});return new(b("Promise"))(function(b,e){d("PolarisAPI").phoneConfirmSendSmsCode(a).then(function(a){return b(a)})["catch"](function(a){c({type:d("PolarisPhoneConfirmActionTypes").PHONE_CONFIRM_SMS_CODE_SEND_FAILED,toast:{text:d("PolarisSettingsActions").TWO_FACTOR_GENERIC_ERROR}})})})}function i(a){return function(b){b({type:d("PolarisPhoneConfirmActionTypes").UPDATE_PHONE_NUMBER,phoneNumber:a})}}function j(a){return function(b){b({type:d("PolarisPhoneConfirmActionTypes").UPDATE_RETURN_URL,returnUrl:a})}}function a(a){return function(b){return c("PolarisrunPromise")(h(a,b).then(function(a){if(a.phone_number_valid&&!a.rate_limited)b({type:d("PolarisPhoneConfirmActionTypes").PHONE_CONFIRM_SMS_CODE_SENT});else if(a.rate_limited)b({type:d("PolarisPhoneConfirmActionTypes").PHONE_CONFIRM_SMS_CODE_SEND_FAILED,toast:{text:d("PolarisSettingsActions").CODE_SEND_RATE_LIMIT_GENERIC_ERROR}});else{b({type:d("PolarisPhoneConfirmActionTypes").PHONE_CONFIRM_SMS_CODE_SEND_FAILED,toast:{text:((a=a.errors)==null?void 0:a.phone_number)||d("PolarisSettingsActions").TWO_FACTOR_GENERIC_ERROR}})}}))}}function e(a,e){return function(f){f(i(a));e!==null&&e!==void 0&&f(j(e));if(a==null||a===""){f({type:d("PolarisPhoneConfirmActionTypes").PHONE_CONFIRM_SMS_CODE_SEND_FAILED,toast:{text:d("PolarisSettingsActions").TWO_FACTOR_GENERIC_ERROR}});c("Polarisunexpected")("tried to confirm phone number without phone number");return b("Promise").resolve()}return c("PolarisrunPromise")(h(a,f).then(function(a){a.phone_number_valid?f({type:d("PolarisPhoneConfirmActionTypes").PHONE_CONFIRM_SMS_CODE_SENT}):f({type:d("PolarisPhoneConfirmActionTypes").PHONE_CONFIRM_SMS_CODE_SEND_FAILED,toast:{text:d("PolarisSettingsActions").TWO_FACTOR_GENERIC_ERROR}})}))}}function f(){return function(a){a({type:d("PolarisPhoneConfirmActionTypes").SHOW_PHONE_FORM})}}function k(a,b,e){return function(f,g){f({type:d("PolarisPhoneConfirmActionTypes").PHONE_CONFIRM_SMS_CODE_SUBMITTED});return c("PolarisrunPromise")(d("PolarisAPI").phoneConfirmVerifySmsCode(a,b).then(function(a){if(a.verified)f({type:d("PolarisPhoneConfirmActionTypes").PHONE_CONFIRM_SMS_CODE_VERIFY_SUCCESS}),d("PolarisNavigationUtils").openURL(e);else{f({type:d("PolarisPhoneConfirmActionTypes").PHONE_CONFIRM_SMS_CODE_VERIFY_FAILED,toast:{text:((a=a.errors)==null?void 0:a.verification_code)||d("PolarisSettingsActions").TWO_FACTOR_GENERIC_ERROR}})}})["catch"](function(a){f({type:d("PolarisPhoneConfirmActionTypes").PHONE_CONFIRM_SMS_CODE_VERIFY_FAILED,toast:{text:d("PolarisSettingsActions").TWO_FACTOR_GENERIC_ERROR}})}))}}function l(a){return function(b){b({type:d("PolarisPhoneConfirmActionTypes").INITIALIZE_FORM,showPhoneForm:!!a})}}g.updatePhoneNumber=i;g.updateReturnUrl=j;g.requestConfirmationCode=a;g.initiateConfirmationPage=e;g.showPhoneForm=f;g.submitConfirmationCode=k;g.initializeForm=l}),98);