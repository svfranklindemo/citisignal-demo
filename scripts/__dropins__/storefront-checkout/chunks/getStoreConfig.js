import{FetchGraphQL as se}from"@dropins/tools/fetch-graphql.js";import{events as oe}from"@dropins/tools/event-bus.js";import{Component as ae,options as H,isValidElement as ne,createContext as E}from"@dropins/tools/preact.js";import{useMemo as $,useContext as m,useState as P,useEffect as G,useReducer as le}from"@dropins/tools/preact-hooks.js";import{jsx as C}from"@dropins/tools/preact-jsx-runtime.js";const U=e=>{throw e instanceof DOMException&&e.name==="AbortError"||oe.emit("error",{source:"checkout",type:"network",error:e}),e};var ue=Symbol.for("preact-signals");function M(){if(v>1)v--;else{for(var e,i=!1;S!==void 0;){var t=S;for(S=void 0,w++;t!==void 0;){var r=t.o;if(t.o=void 0,t.f&=-3,!(8&t.f)&&Q(t))try{t.c()}catch(o){i||(e=o,i=!0)}t=r}}if(w=0,v--,i)throw e}}var n=void 0,S=void 0,v=0,w=0,O=0;function B(e){if(n!==void 0){var i=e.n;if(i===void 0||i.t!==n)return i={i:0,S:e,p:n.s,n:void 0,t:n,e:void 0,x:void 0,r:i},n.s!==void 0&&(n.s.n=i),n.s=i,e.n=i,32&n.f&&e.S(i),i;if(i.i===-1)return i.i=0,i.n!==void 0&&(i.n.p=i.p,i.p!==void 0&&(i.p.n=i.n),i.p=n.s,i.n=void 0,n.s.n=i,n.s=i),i}}function u(e){this.v=e,this.i=0,this.n=void 0,this.t=void 0}u.prototype.brand=ue;u.prototype.h=function(){return!0};u.prototype.S=function(e){this.t!==e&&e.e===void 0&&(e.x=this.t,this.t!==void 0&&(this.t.e=e),this.t=e)};u.prototype.U=function(e){if(this.t!==void 0){var i=e.e,t=e.x;i!==void 0&&(i.x=t,e.e=void 0),t!==void 0&&(t.e=i,e.x=void 0),e===this.t&&(this.t=t)}};u.prototype.subscribe=function(e){var i=this;return I(function(){var t=i.value,r=n;n=void 0;try{e(t)}finally{n=r}})};u.prototype.valueOf=function(){return this.value};u.prototype.toString=function(){return this.value+""};u.prototype.toJSON=function(){return this.value};u.prototype.peek=function(){var e=n;n=void 0;try{return this.value}finally{n=e}};Object.defineProperty(u.prototype,"value",{get:function(){var e=B(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(w>100)throw new Error("Cycle detected");this.v=e,this.i++,O++,v++;try{for(var i=this.t;i!==void 0;i=i.x)i.t.N()}finally{M()}}}});function _(e){return new u(e)}function Q(e){for(var i=e.s;i!==void 0;i=i.n)if(i.S.i!==i.i||!i.S.h()||i.S.i!==i.i)return!0;return!1}function X(e){for(var i=e.s;i!==void 0;i=i.n){var t=i.S.n;if(t!==void 0&&(i.r=t),i.S.n=i,i.i=-1,i.n===void 0){e.s=i;break}}}function W(e){for(var i=e.s,t=void 0;i!==void 0;){var r=i.p;i.i===-1?(i.S.U(i),r!==void 0&&(r.n=i.n),i.n!==void 0&&(i.n.p=r)):t=i,i.S.n=i.r,i.r!==void 0&&(i.r=void 0),i=r}e.s=t}function y(e){u.call(this,void 0),this.x=e,this.s=void 0,this.g=O-1,this.f=4}(y.prototype=new u).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===O))return!0;if(this.g=O,this.f|=1,this.i>0&&!Q(this))return this.f&=-2,!0;var e=n;try{X(this),n=this;var i=this.x();(16&this.f||this.v!==i||this.i===0)&&(this.v=i,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return n=e,W(this),this.f&=-2,!0};y.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var i=this.s;i!==void 0;i=i.n)i.S.S(i)}u.prototype.S.call(this,e)};y.prototype.U=function(e){if(this.t!==void 0&&(u.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var i=this.s;i!==void 0;i=i.n)i.S.U(i)}};y.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(y.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=B(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function fe(e){return new y(e)}function Y(e){var i=e.u;if(e.u=void 0,typeof i=="function"){v++;var t=n;n=void 0;try{i()}catch(r){throw e.f&=-2,e.f|=8,L(e),r}finally{n=t,M()}}}function L(e){for(var i=e.s;i!==void 0;i=i.n)i.S.U(i);e.x=void 0,e.s=void 0,Y(e)}function de(e){if(n!==this)throw new Error("Out-of-order effect");W(this),n=e,this.f&=-2,8&this.f&&L(this),M()}function D(e){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}D.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var i=this.x();typeof i=="function"&&(this.u=i)}finally{e()}};D.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Y(this),X(this),v++;var e=n;return n=this,de.bind(this,e)};D.prototype.N=function(){2&this.f||(this.f|=2,this.o=S,S=this)};D.prototype.d=function(){this.f|=8,1&this.f||L(this)};function I(e){var i=new D(e);try{i.c()}catch(t){throw i.d(),t}return i.d.bind(i)}var A;function g(e,i){H[e]=i.bind(null,H[e]||function(){})}function R(e){A&&A(),A=e&&e.S()}function Z(e){var i=this,t=e.data,r=pe(t);r.value=t;var o=$(function(){for(var s=i.__v;s=s.__;)if(s.__c){s.__c.__$f|=4;break}return i.__$u.c=function(){var a;!ne(o.peek())&&((a=i.base)==null?void 0:a.nodeType)===3?i.base.data=o.peek():(i.__$f|=1,i.setState({}))},fe(function(){var a=r.value.value;return a===0?0:a===!0?"":a||""})},[]);return o.value}Z.displayName="_st";Object.defineProperties(u.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Z},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});g("__b",function(e,i){if(typeof i.type=="string"){var t,r=i.props;for(var o in r)if(o!=="children"){var s=r[o];s instanceof u&&(t||(i.__np=t={}),t[o]=s,r[o]=s.peek())}}e(i)});g("__r",function(e,i){R();var t,r=i.__c;r&&(r.__$f&=-2,(t=r.__$u)===void 0&&(r.__$u=t=function(o){var s;return I(function(){s=this}),s.c=function(){r.__$f|=1,r.setState({})},s}())),R(t),e(i)});g("__e",function(e,i,t,r){R(),e(i,t,r)});g("diffed",function(e,i){R();var t;if(typeof i.type=="string"&&(t=i.__e)){var r=i.__np,o=i.props;if(r){var s=t.U;if(s)for(var a in s){var f=s[a];f!==void 0&&!(a in r)&&(f.d(),s[a]=void 0)}else t.U=s={};for(var p in r){var h=s[p],T=r[p];h===void 0?(h=ce(t,p,T,o),s[p]=h):h.o(T,o)}}}e(i)});function ce(e,i,t,r){var o=i in e&&e.ownerSVGElement===void 0,s=_(t);return{o:function(a,f){s.value=a,r=f},d:I(function(){var a=s.value.value;r[i]!==a&&(r[i]=a,o?e[i]=a:a?e.setAttribute(i,a):e.removeAttribute(i))})}}g("unmount",function(e,i){if(typeof i.type=="string"){var t=i.__e;if(t){var r=t.U;if(r){t.U=void 0;for(var o in r){var s=r[o];s&&s.d()}}}}else{var a=i.__c;if(a){var f=a.__$u;f&&(a.__$u=void 0,f.d())}}e(i)});g("__h",function(e,i,t,r){(r<3||r===9)&&(i.__$f|=2),e(i,t,r)});ae.prototype.shouldComponentUpdate=function(e,i){var t=this.__$u;if(!(t&&t.s!==void 0||4&this.__$f)||3&this.__$f)return!0;for(var r in i)return!0;for(var o in e)if(o!=="__source"&&e[o]!==this.props[o])return!0;for(var s in this.props)if(!(s in e))return!0;return!1};function pe(e){return $(function(){return _(e)},[])}const he=_({pending:!1,data:void 0}),ve=_(null);I(()=>{ve.value||(he.value={data:null,pending:!1})});const _e=_({checked:!0,setByUser:!1}),ye=_({pending:!1,data:void 0});I(()=>{var e;(e=ye.value.data)!=null&&e.virtual&&(_e.value={checked:!1,setByUser:!1})});const ge=e=>e?e.filter(Boolean).filter(t=>(t==null?void 0:t.label)&&(t==null?void 0:t.value)).map(t=>({text:t.label,value:t.value})):[],Te=e=>e?e.filter(Boolean).filter(i=>(i==null?void 0:i.name)&&(i==null?void 0:i.value)):[],Se=e=>e?e.filter(Boolean).map(t=>({code:t.code,defaultValue:t.default_value||void 0,frontendInput:t.frontend_input||void 0,isDisabled:!1,isRequired:t.is_required,label:t.label||void 0,multilineCount:t.multiline_count||void 0,options:ge(t.options),sortOrder:t.sort_order||void 0,validateRules:Te(t.validate_rules)})):[],xe=e=>e==null;var d=(e=>(e.Boolean="BOOLEAN",e.Date="DATE",e.Datetime="DATETIME",e.File="FILE",e.Gallery="GALLERY",e.Hidden="HIDDEN",e.Image="IMAGE",e.MediaImage="MEDIA_IMAGE",e.Multiline="MULTILINE",e.Multiselect="MULTISELECT",e.Price="PRICE",e.Select="SELECT",e.Text="TEXT",e.Textarea="TEXTAREA",e.Undefined="UNDEFINED",e.Weight="WEIGHT",e))(d||{}),Ee=(e=>(e.InStock="IN_STOCK",e.OutOfStock="OUT_OF_STOCK",e))(Ee||{}),b=(e=>(e.DisplayExcludingTax="DISPLAY_EXCLUDING_TAX",e.DisplayIncludingTax="DISPLAY_INCLUDING_TAX",e.DisplayTypeBoth="DISPLAY_TYPE_BOTH",e))(b||{}),me=(e=>(e.DateRangeMax="DATE_RANGE_MAX",e.DateRangeMin="DATE_RANGE_MIN",e.FileExtensions="FILE_EXTENSIONS",e.InputValidation="INPUT_VALIDATION",e.MaxFileSize="MAX_FILE_SIZE",e.MaxImageHeight="MAX_IMAGE_HEIGHT",e.MaxImageWidth="MAX_IMAGE_WIDTH",e.MaxTextLength="MAX_TEXT_LENGTH",e.MinTextLength="MIN_TEXT_LENGTH",e))(me||{}),c=(e=>(e[e.ExcludingTax=1]="ExcludingTax",e[e.IncludingTax=2]="IncludingTax",e[e.IncludingAndExcludingTax=3]="IncludingAndExcludingTax",e))(c||{}),x=(e=>(e[e.Rows=0]="Rows",e[e.Quantity=1]="Quantity",e))(x||{});const Ce=e=>{if(e)return e.filter(i=>!!i).filter(i=>{const{two_letter_abbreviation:t,full_name_locale:r}=i;return!!t&&!!r}).map(i=>{const{two_letter_abbreviation:t,full_name_locale:r}=i;return{value:t,label:r}})},j=E(void 0);function Qe({children:e}){const[i,t]=P({});return G(()=>{Ge().then(r=>t({fields:r}))},[]),C(j.Provider,{value:i,children:e})}function Xe(){const e=m(j);if(e!==void 0)return e;throw new Error("useAddressFormFields must be used within an AddressFormFieldsProvider")}var De=(e=>(e.EMPTY="EMPTY",e.IN_PROGRESS="IN_PROGRESS",e.INIT="INIT",e.LOADING="LOADING",e.COMPLETE="COMPLETE",e))(De||{}),Ie=(e=>(e[e.CART_UPDATED=0]="CART_UPDATED",e[e.ORDER_PLACED=1]="ORDER_PLACED",e[e.USER_AUTHENTICATED=2]="USER_AUTHENTICATED",e[e.USER_UNAUTHENTICATED=3]="USER_UNAUTHENTICATED",e[e.USER_SIGN_OUT=4]="USER_SIGN_OUT",e))(Ie||{});const be=(e,i)=>{const t=o=>{const s=o!==void 0,a=o==null?void 0:o.items,f=a!==void 0&&a.length>0;return s?s&&!f?"EMPTY":"IN_PROGRESS":"INIT"};let r=e;switch(e){case"INIT":i.type===0&&(r=t(i.payload));break;case"IN_PROGRESS":i.type===1&&(r="COMPLETE"),i.type===2&&(r="LOADING"),i.type===4&&(r="LOADING"),i.type===0&&(r=t(i.payload));break;case"EMPTY":case"LOADING":i.type===3&&(r="EMPTY"),i.type===0&&(r=t(i.payload))}return r},z=E(void 0),We=({children:e})=>{const[i,t]=le(be,"INIT"),r={state:i,dispatch:t};return C(z.Provider,{value:r,children:e})};function Ye(){const e=m(z);if(e!==void 0)return e;throw new Error("useCheckoutState must be used within a CheckoutStateProvider")}const K=E(void 0);function Ze({children:e}){const[i,t]=P({});return G(()=>{Me().then(r=>t({countries:r}))},[]),C(K.Provider,{value:i,children:e})}function je(){const e=m(K);if(e!==void 0)return e;throw new Error("useCountries must be used within a CountriesProvider")}const J=E({});function ze({children:e,services:i}){return C(J.Provider,{value:i,children:e})}function Ke(){const e=m(J);if(e!==void 0)return e;throw new Error("useServices must be used within a ServicesProvider")}const Oe="US",Re=10,l={defaultCountry:Oe,countriesWithRequiredRegion:[],displayStateIfOptional:!1,countriesWithOptionalZipCode:[],isGuestCheckoutEnabled:!1,isOnePageCheckoutEnabled:!1,taxCartDisplay:{shoppingCartDisplayPrice:c.ExcludingTax,shoppingCartDisplayShipping:c.ExcludingTax,shoppingCartDisplaySubtotal:c.ExcludingTax,shoppingCartDisplayGiftWrapping:c.ExcludingTax,shoppingCartDisplayGrandTotal:!1,shoppingCartDisplayFullSummary:!1,shoppingCartDisplayZeroTax:!1},cartSummaryMaxItems:Re,cartSummaryTotalDisplay:x.Quantity},V=E(void 0),Je=({children:e})=>{const[i,t]=P();return G(()=>{Fe().then(r=>{t(r)}).catch(()=>{console.error("Failed to fetch store config"),t(l)})},[]),C(V.Provider,{value:{config:i},children:e})};function Ve(){const e=m(V);if(e!==void 0)return e;throw new Error("useStore must be used within a StoreProvider")}function Ae(e){return e===0?x.Rows:x.Quantity}function N(e){return e===1?c.ExcludingTax:e===2?c.IncludingTax:e===3?c.IncludingAndExcludingTax:c.ExcludingTax}function Ne(e){switch(e){case b.DisplayExcludingTax:return c.ExcludingTax;case b.DisplayIncludingTax:return c.IncludingTax;case b.DisplayTypeBoth:return c.IncludingAndExcludingTax}}function we(e){if(!e)return l;const{default_country:i,countries_with_required_region:t,display_state_if_optional:r,optional_zip_countries:o,is_guest_checkout_enabled:s,is_one_page_checkout_enabled:a,shopping_cart_display_price:f,shopping_cart_display_shipping:p,shopping_cart_display_subtotal:h,shopping_cart_display_tax_gift_wrapping:T,shopping_cart_display_grand_total:ee,shopping_cart_display_full_summary:ie,shopping_cart_display_zero_tax:te,max_items_in_order_summary:re,cart_summary_display_quantity:k}=e;return{defaultCountry:i||l.defaultCountry,countriesWithRequiredRegion:(t==null?void 0:t.split(","))||l.countriesWithRequiredRegion,displayStateIfOptional:r||l.displayStateIfOptional,countriesWithOptionalZipCode:(o==null?void 0:o.split(","))||l.countriesWithOptionalZipCode,isGuestCheckoutEnabled:s||l.isGuestCheckoutEnabled,isOnePageCheckoutEnabled:a||l.isOnePageCheckoutEnabled,taxCartDisplay:{shoppingCartDisplayPrice:f?N(f):l.taxCartDisplay.shoppingCartDisplayPrice,shoppingCartDisplayShipping:p?N(p):l.taxCartDisplay.shoppingCartDisplayShipping,shoppingCartDisplaySubtotal:h?N(h):l.taxCartDisplay.shoppingCartDisplaySubtotal,shoppingCartDisplayGiftWrapping:T?Ne(T):l.taxCartDisplay.shoppingCartDisplayGiftWrapping,shoppingCartDisplayGrandTotal:ee||l.taxCartDisplay.shoppingCartDisplayGrandTotal,shoppingCartDisplayFullSummary:ie||l.taxCartDisplay.shoppingCartDisplayFullSummary,shoppingCartDisplayZeroTax:te||l.taxCartDisplay.shoppingCartDisplayZeroTax},cartSummaryMaxItems:re||l.cartSummaryMaxItems,cartSummaryTotalDisplay:xe(k)?l.cartSummaryTotalDisplay:Ae(k)}}const{setEndpoint:ei,setFetchGraphQlHeader:ii,removeFetchGraphQlHeader:ti,setFetchGraphQlHeaders:ri,fetchGraphQl:F,getConfig:si}=new se().getMethods(),Pe=`
  query fetchAddressFormFields {
    attributesForm(formCode: "customer_register_address") {
      items {
        frontend_input
        code
        label
        default_value
        is_required
        options {
          label
          value
          is_default
        }
        ... on CustomerAttributeMetadata {
          multiline_count
          sort_order
          validate_rules {
            name
            value
          }
        }
      }
      errors {
        message
        type
      }
    }
  }
`,q=e=>{if(!(!e||e.length===0))throw Error(e.map(i=>i.message).join(" "))},Ge=async()=>F(Pe,{method:"GET",cache:"no-cache"}).then(({data:e,errors:i})=>(q(i),Se(e.attributesForm.items))).catch(U),oi=[{frontendInput:d.Text,code:"firstname",label:"First Name",isRequired:!0,isDisabled:!1,options:[],validateRules:[],sortOrder:10},{frontendInput:d.Text,code:"lastname",label:"Last Name",isRequired:!0,isDisabled:!1,options:[],validateRules:[],sortOrder:20},{frontendInput:d.Text,code:"company",label:"Company",isRequired:!1,isDisabled:!1,options:[],validateRules:[],sortOrder:30},{frontendInput:d.Multiline,code:"street",label:"Street Address",isRequired:!0,isDisabled:!1,options:[],validateRules:[],sortOrder:40},{frontendInput:d.Text,code:"city",label:"City",isRequired:!0,isDisabled:!1,options:[],validateRules:[],sortOrder:50},{frontendInput:d.Select,code:"country_id",label:"Country",isRequired:!0,isDisabled:!1,options:[{text:"United States",value:"US"},{text:"Spain",value:"ES"},{text:"France",value:"FR"}],validateRules:[],sortOrder:60},{frontendInput:d.Text,code:"region",label:"State/Province",isRequired:!1,isDisabled:!1,options:[],validateRules:[],sortOrder:70},{frontendInput:d.Hidden,code:"region_id",label:"State/Province",isRequired:!1,isDisabled:!1,options:[],validateRules:[],sortOrder:80},{frontendInput:d.Text,code:"postcode",label:"Zip/Postal Code",isRequired:!1,isDisabled:!1,options:[],validateRules:[],sortOrder:90},{frontendInput:d.Text,code:"telephone",label:"Phone Number",isRequired:!0,isDisabled:!1,options:[],validateRules:[],sortOrder:100},{frontendInput:d.Text,code:"vat_id",label:"VAT Number",isRequired:!1,isDisabled:!1,options:[],validateRules:[],sortOrder:110}],Ue=`
query getCountries {
    countries {
      two_letter_abbreviation
      full_name_locale
    }
}`,Me=async()=>F(Ue,{method:"GET",cache:"no-cache"}).then(({data:e,errors:i})=>(i&&q(i),Ce(e.countries))).catch(U),Le=`
  query getStoreConfig {
    storeConfig {
      cart_summary_display_quantity
      countries_with_required_region
      default_country
      display_state_if_optional
      is_guest_checkout_enabled
      is_one_page_checkout_enabled
      locale
      max_items_in_order_summary
      optional_zip_countries
      shopping_cart_display_full_summary
      shopping_cart_display_grand_total
      shopping_cart_display_price
      shopping_cart_display_shipping
      shopping_cart_display_subtotal
      shopping_cart_display_tax_gift_wrapping
      shopping_cart_display_zero_tax
      store_code
    }
  }
`,Fe=async()=>F(Le,{method:"GET",cache:"no-cache"}).then(({data:e,errors:i})=>(q(i),we(e==null?void 0:e.storeConfig))).catch(U);export{Qe as A,d as B,Ze as C,je as D,Ke as E,Ee as P,ze as S,x as T,me as V,ii as a,ri as b,Ge as c,oi as d,Me as e,F as f,si as g,Fe as h,ye as i,_e as j,_ as k,he as l,Ve as m,ve as n,U as o,q as p,Je as q,ti as r,ei as s,We as t,Xe as u,xe as v,Ye as w,Ie as x,De as y,c as z};
//# sourceMappingURL=getStoreConfig.js.map