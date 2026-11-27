"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1370],{283:(e,a,r)=>{r.d(a,{i8:()=>s,ne:()=>o,pd:()=>n});let t={AF:"Africa",AS:"Asia",EU:"Europe",NA:"North America",SA:"South America",OC:"Oceania"},i=`Afghanistan|93|AS
Albania|355|EU
Algeria|213|AF
Andorra|376|EU
Angola|244|AF
Antigua and Barbuda|1 268|NA
Argentina|54|SA
Armenia|374|AS
Australia|61|OC
Austria|43|EU
Azerbaijan|994|AS
Bahamas|1 242|NA
Bahrain|973|AS
Bangladesh|880|AS
Barbados|1 246|NA
Belarus|375|EU
Belgium|32|EU
Belize|501|NA
Benin|229|AF
Bhutan|975|AS
Bolivia|591|SA
Bosnia and Herzegovina|387|EU
Botswana|267|AF
Brazil|55|SA
Brunei|673|AS
Bulgaria|359|EU
Burkina Faso|226|AF
Burundi|257|AF
Cambodia|855|AS
Cameroon|237|AF
Canada|1|NA
Cape Verde|238|AF
Central African Republic|236|AF
Chad|235|AF
Chile|56|SA
China|86|AS
Colombia|57|SA
Comoros|269|AF
Congo|242|AF
Costa Rica|506|NA
C\xf4te d’Ivoire|225|AF
Croatia|385|EU
Cuba|53|NA
Cyprus|357|EU
Czechia|420|EU
Democratic Republic of the Congo|243|AF
Denmark|45|EU
Djibouti|253|AF
Dominica|1 767|NA
Dominican Republic|1 809|NA
Ecuador|593|SA
Egypt|20|AF
El Salvador|503|NA
Equatorial Guinea|240|AF
Eritrea|291|AF
Estonia|372|EU
Eswatini|268|AF
Ethiopia|251|AF
Fiji|679|OC
Finland|358|EU
France|33|EU
Gabon|241|AF
Gambia|220|AF
Georgia|995|AS
Germany|49|EU
Ghana|233|AF
Greece|30|EU
Grenada|1 473|NA
Guatemala|502|NA
Guinea|224|AF
Guinea-Bissau|245|AF
Guyana|592|SA
Haiti|509|NA
Honduras|504|NA
Hong Kong|852|AS
Hungary|36|EU
Iceland|354|EU
India|91|AS
Indonesia|62|AS
Iran|98|AS
Iraq|964|AS
Ireland|353|EU
Israel|972|AS
Italy|39|EU
Jamaica|1 876|NA
Japan|81|AS
Jordan|962|AS
Kazakhstan|7|AS
Kenya|254|AF
Kiribati|686|OC
Kosovo|383|EU
Kuwait|965|AS
Kyrgyzstan|996|AS
Laos|856|AS
Latvia|371|EU
Lebanon|961|AS
Lesotho|266|AF
Liberia|231|AF
Libya|218|AF
Liechtenstein|423|EU
Lithuania|370|EU
Luxembourg|352|EU
Madagascar|261|AF
Malawi|265|AF
Malaysia|60|AS
Maldives|960|AS
Mali|223|AF
Malta|356|EU
Marshall Islands|692|OC
Mauritania|222|AF
Mauritius|230|AF
Mexico|52|NA
Micronesia|691|OC
Moldova|373|EU
Monaco|377|EU
Mongolia|976|AS
Montenegro|382|EU
Morocco|212|AF
Mozambique|258|AF
Myanmar|95|AS
Namibia|264|AF
Nauru|674|OC
Nepal|977|AS
Netherlands|31|EU
New Zealand|64|OC
Nicaragua|505|NA
Niger|227|AF
Nigeria|234|AF
North Korea|850|AS
North Macedonia|389|EU
Norway|47|EU
Oman|968|AS
Pakistan|92|AS
Palau|680|OC
Palestine|970|AS
Panama|507|NA
Papua New Guinea|675|OC
Paraguay|595|SA
Peru|51|SA
Philippines|63|AS
Poland|48|EU
Portugal|351|EU
Qatar|974|AS
Romania|40|EU
Russia|7|EU
Rwanda|250|AF
Saint Kitts and Nevis|1 869|NA
Saint Lucia|1 758|NA
Saint Vincent and the Grenadines|1 784|NA
Samoa|685|OC
San Marino|378|EU
S\xe3o Tom\xe9 and Pr\xedncipe|239|AF
Saudi Arabia|966|AS
Senegal|221|AF
Serbia|381|EU
Seychelles|248|AF
Sierra Leone|232|AF
Singapore|65|AS
Slovakia|421|EU
Slovenia|386|EU
Solomon Islands|677|OC
Somalia|252|AF
South Africa|27|AF
South Korea|82|AS
South Sudan|211|AF
Spain|34|EU
Sri Lanka|94|AS
Sudan|249|AF
Suriname|597|SA
Sweden|46|EU
Switzerland|41|EU
Syria|963|AS
Taiwan|886|AS
Tajikistan|992|AS
Tanzania|255|AF
Thailand|66|AS
Timor-Leste|670|AS
Togo|228|AF
Tonga|676|OC
Trinidad and Tobago|1 868|NA
Tunisia|216|AF
Turkey|90|EU
Turkmenistan|993|AS
Tuvalu|688|OC
Uganda|256|AF
Ukraine|380|EU
United Arab Emirates|971|AS
United Kingdom|44|EU
United States|1|NA
Uruguay|598|SA
Uzbekistan|998|AS
Vanuatu|678|OC
Vatican City|379|EU
Venezuela|58|SA
Vietnam|84|AS
Yemen|967|AS
Zambia|260|AF
Zimbabwe|263|AF`.split("\n").map(e=>{let[a,r,i]=e.split("|");return{name:a,dial:`+${r}`,continent:t[i]}}),n=i.map(e=>e.name),l=new Map(i.map(e=>[e.name,e]));function s(e){return l.get(e)}let o=i.map(e=>({value:e.name,label:`${e.name} (${e.dial})`}))},1286:(e,a,r)=>{r.d(a,{EO:()=>c,Ju:()=>l,Jy:()=>d,KS:()=>n,Le:()=>u,SP:()=>s,Xy:()=>t,gx:()=>o,w6:()=>m});let t=[{id:"text",label:"Short text"},{id:"textarea",label:"Long text"},{id:"email",label:"Email"},{id:"tel",label:"Phone"},{id:"number",label:"Number"},{id:"date",label:"Date"},{id:"select",label:"Dropdown"},{id:"file",label:"File upload"},{id:"section",label:"Section heading"}],i=[{id:"visa",title:"Visa application",description:"The five-step application at /visa-application.",page:"/visa-application",inbox:"visa",sections:[{id:"personal",label:"Step 1 \xb7 Personal information"},{id:"travel",label:"Step 2 \xb7 Travel information"},{id:"documents",label:"Step 3 \xb7 Supporting documents"}],fields:[{key:"firstName",label:"First name",required:!0,section:"personal"},{key:"middleName",label:"Middle name",required:!1,section:"personal"},{key:"lastName",label:"Last name",required:!0,section:"personal"},{key:"birthDate",label:"Date of birth",required:!0,section:"personal"},{key:"gender",label:"Gender",required:!0,section:"personal"},{key:"nationality",label:"Nationality",required:!0,section:"personal"},{key:"passport",label:"Passport number",required:!0,section:"personal"},{key:"issueDate",label:"Date of issue",required:!0,section:"personal"},{key:"expiryDate",label:"Date of expiry",required:!0,section:"personal"},{key:"issuePlace",label:"Place of issue",required:!0,section:"personal"},{key:"authority",label:"Issuing authority",required:!0,section:"personal"},{key:"email",label:"Email address",required:!0,section:"personal"},{key:"phone",label:"Phone number (with country code)",required:!0,section:"personal"},{key:"address1",label:"Address line 1",required:!0,section:"personal"},{key:"address2",label:"Address line 2",required:!1,section:"personal"},{key:"city",label:"City",required:!0,section:"personal"},{key:"province",label:"State / Province",required:!0,section:"personal"},{key:"postal",label:"Postal / Zip code",required:!0,section:"personal"},{key:"homeCountry",label:"Country (address)",required:!0,section:"personal"},{key:"originCountry",label:"Departure country",required:!0,section:"travel"},{key:"country",label:"Destination country",required:!0,core:!0,section:"travel"},{key:"job",label:"Available job role",required:!0,core:!0,section:"travel"},{key:"visaType",label:"Visa type",required:!0,core:!0,section:"travel"},{key:"startDate",label:"Preferred start date",required:!1,section:"travel"},{key:"applicants",label:"Number of applicants",required:!0,section:"travel"},{key:"employment",label:"Current employment status (not asked for student visas)",required:!0,section:"travel"},{key:"occupation",label:"Occupation (not asked for student visas)",required:!0,section:"travel"},{key:"employer",label:"Employer / Company name (not asked for student visas)",required:!1,section:"travel"},{key:"income",label:"Monthly income (not asked for student visas)",required:!1,section:"travel"},{key:"doc_passport",label:"Passport bio page",required:!0,section:"documents"},{key:"doc_cv",label:"Curriculum vitae / resume",required:!0,section:"documents"},{key:"doc_certificates",label:"Relevant certificates",required:!1,section:"documents"},{key:"doc_photo",label:"Passport-sized photograph",required:!0,section:"documents"},{key:"paymentMethod",label:"Payment method",required:!0,core:!0}]},{id:"ticket",title:"Air ticket booking",description:"The booking request at /air-ticket-booking.",page:"/air-ticket-booking",inbox:"tickets",fields:[{key:"from",label:"Departure country",required:!0,core:!0},{key:"to",label:"Destination",required:!0,core:!0},{key:"departDate",label:"Departure date",required:!0},{key:"returnDate",label:"Return date",required:!1},{key:"passengers",label:"Passengers",required:!0},{key:"travelClass",label:"Travel class",required:!0},{key:"email",label:"Email address",required:!0},{key:"passportFile",label:"Travelling passport (bio page)",required:!0},{key:"notes",label:"Additional notes",required:!1}]},{id:"application",title:"Job application",description:"The “Apply for this job” form on every job page.",page:"/jobs",inbox:"applications",fields:[{key:"name",label:"Full name",required:!0},{key:"email",label:"Email",required:!0},{key:"phone",label:"Phone",required:!0},{key:"location",label:"Current location",required:!1},{key:"cv",label:"CV (PDF or Word, max 4 MB)",required:!0},{key:"message",label:"Cover note",required:!1}]},{id:"contact",title:"Contact us",description:"The message form at /contact-us.",page:"/contact-us",inbox:"messages",fields:[{key:"name",label:"Full name",required:!0},{key:"email",label:"Email",required:!0},{key:"phone",label:"Phone",required:!1},{key:"country",label:"Country",required:!1},{key:"topic",label:"I am…",required:!1},{key:"message",label:"Message",required:!0}]},{id:"staff",title:"Request staff",description:"The employer form at /employers/request-staff.",page:"/employers/request-staff",inbox:"requests",fields:[{key:"name",label:"Your name",required:!0},{key:"company",label:"Company",required:!0},{key:"email",label:"Work email",required:!0},{key:"phone",label:"Phone",required:!1},{key:"service",label:"Service",required:!1},{key:"industry",label:"Industry",required:!1},{key:"role",label:"Role(s) you're hiring for",required:!0},{key:"headcount",label:"Number of people",required:!1},{key:"start",label:"Ideal start date",required:!1},{key:"details",label:"Tell us more",required:!0}]}];function n(e){return i.find(a=>a.id===e)}function l(e,a){let r={};for(let t of e.fields){let e=a.fields[t.key]??{};r[t.key]={shown:t.core||!e.hidden,required:e.required??t.required}}return{fields:r,custom:a.custom}}function s(e,a){return e.fields[a]?.shown??!0}function o(e,a){let r=e.fields[a];return r?r.shown&&r.required:e.custom.some(e=>e.key===a&&e.required)}function d(e,a){return void 0===a?e.custom:e.custom.filter(e=>e.section===a)}let c=["email","name","firstName","lastName"],u=["application/pdf","image/jpeg","image/png","image/webp","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],m=".pdf,.jpg,.jpeg,.png,.webp,.doc,.docx"},1643:(e,a,r)=>{r.d(a,{D0:()=>o,Lc:()=>p,Ld:()=>h,Qj:()=>x,f6:()=>A,fs:()=>m,fz:()=>s,ks:()=>c,l6:()=>u,s$:()=>y,xo:()=>b,z3:()=>g});var t=r(5155),i=r(2664),n=r(4725),l=r(1286);function s(e){return(a,r)=>{let t=e[a]??a;return r?t.replace(/\{(\w+)\}/g,(e,a)=>a in r?String(r[a]):e):t}}function o({id:e,label:a,required:r,error:i,hint:n,className:l="",children:s}){return(0,t.jsxs)("div",{className:l,children:[(0,t.jsxs)("label",{htmlFor:e,className:"text-sm font-medium text-slate-800",children:[a,r&&(0,t.jsx)("span",{className:"text-brand",children:" *"})]}),s,n&&!i&&(0,t.jsx)("p",{className:"mt-1.5 text-xs text-slate-500",children:n}),i&&(0,t.jsx)("p",{id:`${e}-error`,className:"mt-1.5 text-sm text-red-600",children:i})]})}function d(e,a){return{id:e,name:e,"aria-invalid":!!a||void 0,"aria-describedby":a?`${e}-error`:void 0,className:`${i.v} ${a?"border-red-500":""}`}}function c({type:e="text",placeholder:a,autoComplete:r,min:i,max:n,...l}){return(0,t.jsx)("input",{...d(l.id,l.error),type:e,value:l.value,placeholder:a,autoComplete:r,min:i,max:n,onChange:e=>l.onChange(e.target.value)})}function u({options:e,placeholder:a,...r}){return(0,t.jsxs)("select",{...d(r.id,r.error),value:r.value,onChange:e=>r.onChange(e.target.value),children:[void 0!==a&&(0,t.jsx)("option",{value:"",children:a}),e.map(e=>{let a="string"==typeof e?{value:e,label:e}:e;return(0,t.jsx)("option",{value:a.value,children:a.label},a.value)})]})}function m(e){return(0,t.jsx)("textarea",{...d(e.id,e.error),rows:4,value:e.value,placeholder:e.placeholder,onChange:a=>e.onChange(a.target.value)})}function p({icon:e,title:a,text:r}){return(0,t.jsxs)("div",{className:"flex items-start gap-4 border-b border-slate-100 pb-5",children:[(0,t.jsx)("span",{className:"flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand",children:e}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:"text-xl font-bold text-brand-dark",children:a}),r&&(0,t.jsx)("p",{className:"mt-1 text-sm text-slate-600",children:r})]})]})}function b({label:e,value:a,strong:r}){return(0,t.jsxs)("div",{className:"flex items-baseline justify-between gap-4 py-2 text-sm",children:[(0,t.jsx)("dt",{className:"text-slate-500",children:e}),(0,t.jsx)("dd",{className:`text-right ${r?"text-base font-bold text-brand-dark":"font-semibold text-slate-800"}`,children:a})]})}async function h(e,a=2e3,r=.85){if(!e.type.startsWith("image/")||e.size<614400)return e;try{let t=await createImageBitmap(e),i=Math.min(1,a/Math.max(t.width,t.height)),n=document.createElement("canvas");n.width=Math.round(t.width*i),n.height=Math.round(t.height*i),n.getContext("2d")?.drawImage(t,0,0,n.width,n.height);let l=await new Promise(e=>n.toBlob(e,"image/jpeg",r));if(!l||l.size>=e.size)return e;return new File([l],e.name.replace(/\.\w+$/,"")+".jpg",{type:"image/jpeg"})}catch{return e}}function g(e){return e>1048576?`${(e/1024/1024).toFixed(1)} MB`:`${Math.max(1,Math.round(e/1024))} KB`}function y({id:e,label:a,required:r,file:i,error:l,hint:s,accept:o,onPick:d,L:c}){return(0,t.jsxs)("div",{className:"sm:col-span-2",children:[(0,t.jsxs)("p",{className:"text-sm font-medium text-slate-800",children:[a,r&&(0,t.jsx)("span",{className:"text-brand",children:" *"})]}),(0,t.jsxs)("div",{className:`mt-1.5 flex flex-wrap items-center gap-3 rounded-xl border-2 border-dashed p-4 ${l?"border-red-300 bg-red-50/40":i?"border-brand/40 bg-brand/5":"border-slate-200"}`,children:[(0,t.jsx)(n.I,{name:i?"check":"file",className:`h-6 w-6 shrink-0 ${i?"text-brand":"text-slate-400"}`}),(0,t.jsx)("p",{className:"min-w-0 flex-1 truncate text-sm text-slate-600",children:i?`${i.name} \xb7 ${g(i.size)}`:s||c("PDF, JPG or PNG")}),i&&!r&&(0,t.jsx)("button",{type:"button",onClick:()=>d(void 0),className:"rounded-lg px-3 py-2 text-sm text-slate-600 hover:text-red-600",children:c("Remove")}),(0,t.jsxs)("label",{htmlFor:e,className:"cursor-pointer rounded-lg bg-white px-3.5 py-2 text-sm font-semibold text-brand ring-1 ring-brand/40 focus-within:ring-2 focus-within:ring-brand hover:bg-brand/5",children:[c(i?"Replace file":"Choose file"),(0,t.jsx)("input",{id:e,type:"file",accept:o,className:"sr-only","aria-invalid":!!l||void 0,"aria-describedby":l?`${e}-error`:void 0,onChange:e=>{d(e.target.files?.[0]),e.target.value=""}})]})]}),l&&(0,t.jsx)("p",{id:`${e}-error`,className:"mt-1.5 text-sm text-red-600",children:l})]})}function A({fields:e,values:a,onChange:r,files:n,onFile:s,errors:d,L:p}){return 0===e.length?null:(0,t.jsx)("div",{className:"grid gap-4 sm:grid-cols-2",children:e.map(e=>{let b=e.hint?p(e.hint):void 0;if("section"===e.type)return(0,t.jsx)(i.w,{title:p(e.label),text:b},e.key);if("file"===e.type)return(0,t.jsx)(y,{id:e.key,label:p(e.label),required:e.required,file:n[e.key],error:d[e.key],hint:b,accept:l.w6,onPick:a=>s(e.key,a),L:p},e.key);let h={id:e.key,value:a[e.key]??"",onChange:r(e.key),error:d[e.key]};return(0,t.jsx)(o,{id:e.key,label:p(e.label),required:e.required,error:d[e.key],hint:b,className:"textarea"===e.type?"sm:col-span-2":"",children:"select"===e.type?(0,t.jsx)(u,{...h,placeholder:p("Select…"),options:e.options.map(e=>({value:e,label:p(e)}))}):"textarea"===e.type?(0,t.jsx)(m,{...h}):(0,t.jsx)(c,{...h,type:e.type})},e.key)})})}function x({text:e,L:a}){return e.trim()?(0,t.jsxs)("div",{className:"rounded-xl p-4 ring-1 ring-slate-200",children:[(0,t.jsx)("p",{className:"text-sm font-bold text-brand-dark",children:a("Payment instructions")}),(0,t.jsx)("p",{className:"mt-1 whitespace-pre-line text-sm text-slate-700",children:a(e)})]}):null}},2551:(e,a,r)=>{r.d(a,{$p:()=>c,A_:()=>s,HW:()=>d,J4:()=>n,aO:()=>i,dR:()=>l,wk:()=>o});var t=r(283);let i=e=>e.visaTypes.map(e=>e.name),n=(e,a)=>e.visaTypes.find(e=>e.name===a)?.employment??!0;function l(e){return`USD ${e.toFixed(2)}`}function s(e){return e.reduce((e,a)=>e+a.amount,0)}function o(e,a,r){if(!a||!r)return 0;if(a===r)return e.sameCountry;let i=(0,t.i8)(a)?.continent,n=(0,t.i8)(r)?.continent;return i&&i===n?e.sameContinent:"Europe"===i&&"North America"===n||"North America"===i&&"Europe"===n?e.europeNorthAmerica:e.other}let d="{same} within one country \xb7 {continent} within one continent \xb7 {euna} between Europe and North America \xb7 {other} other international routes";function c(e){let a=e=>`USD ${Number.isInteger(e)?e:e.toFixed(2)}`;return{same:a(e.sameCountry),continent:a(e.sameContinent),euna:a(e.europeNorthAmerica),other:a(e.other)}}},2664:(e,a,r)=>{r.d(a,{Form:()=>l,v:()=>n,w:()=>s});var t=r(5155),i=r(2115);let n="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";function l({action:e,fields:a,submitLabel:r,hidden:o,ui:d={submitted:"Submitted",sending:"Sending…",select:"Select…"}}){let[c,u,m]=(0,i.useActionState)(e,{ok:!1,message:""});return((0,i.useEffect)(()=>{c.ok&&c.redirect&&window.location.assign(c.redirect)},[c.ok,c.redirect]),c.ok)?(0,t.jsxs)("div",{role:"status",className:"rounded-2xl bg-emerald-50 p-8 text-emerald-900 ring-1 ring-emerald-200",children:[(0,t.jsx)("p",{className:"text-lg font-semibold",children:d.submitted}),(0,t.jsx)("p",{className:"mt-2",children:c.message}),c.redirect&&(0,t.jsx)("a",{href:c.redirect,className:"mt-4 inline-block rounded-full bg-brand px-6 py-2.5 font-semibold text-white hover:bg-brand-dark",children:d.pay??"Continue to payment"})]}):(0,t.jsxs)("form",{action:u,className:"grid gap-5 sm:grid-cols-2",noValidate:!0,children:[o&&Object.entries(o).map(([e,a])=>(0,t.jsx)("input",{type:"hidden",name:e,value:a},e)),a.map(e=>{if("section"===e.type)return(0,t.jsx)(s,{title:e.label,text:e.hint},e.name);let a=`f-${e.name}`,r=c.errors?.[e.name],i={id:a,name:e.name,required:e.required,placeholder:e.placeholder,defaultValue:e.defaultValue,"aria-invalid":!!r||void 0,"aria-describedby":r?`${a}-error`:e.hint?`${a}-hint`:void 0,className:`${n} ${r?"border-red-500":""}`};return(0,t.jsxs)("div",{className:e.full||"textarea"===e.type?"sm:col-span-2":"",children:[(0,t.jsxs)("label",{htmlFor:a,className:"text-sm font-medium text-slate-800",children:[e.label,e.required&&(0,t.jsx)("span",{className:"text-red-600",children:" *"})]}),"textarea"===e.type?(0,t.jsx)("textarea",{rows:5,...i}):"select"===e.type?(0,t.jsxs)("select",{...i,children:[(0,t.jsx)("option",{value:"",children:d.select}),e.options?.map(e=>{let a="string"==typeof e?{value:e,label:e}:e;return(0,t.jsx)("option",{value:a.value,children:a.label},a.value)})]}):"file"===e.type?(0,t.jsx)("input",{...i,defaultValue:void 0,type:"file",accept:e.accept,className:`${i.className} file:mr-3 file:rounded-md file:border-0 file:bg-brand/10 file:px-3 file:py-1 file:text-sm file:font-semibold file:text-brand`}):(0,t.jsx)("input",{type:e.type??"text",...i}),e.hint&&!r&&(0,t.jsx)("p",{id:`${a}-hint`,className:"mt-1.5 text-xs text-slate-500",children:e.hint}),r&&(0,t.jsx)("p",{id:`${a}-error`,className:"mt-1.5 text-sm text-red-600",children:r})]},e.name)}),(0,t.jsxs)("div",{className:"sm:col-span-2",children:[c.message&&!c.ok&&(0,t.jsx)("p",{role:"alert",className:"mb-4 text-sm font-medium text-red-600",children:c.message}),(0,t.jsx)("button",{type:"submit",disabled:m,className:"w-full rounded-full bg-brand px-8 py-3 font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-60 sm:w-auto",children:m?d.sending:r})]})]})}function s({title:e,text:a}){return(0,t.jsxs)("div",{className:"border-b border-slate-200 pb-2 pt-3 sm:col-span-2",children:[(0,t.jsx)("h3",{className:"text-lg font-bold text-brand-dark",children:e}),a&&(0,t.jsx)("p",{className:"mt-1 text-sm text-slate-600",children:a})]})}},4718:(e,a,r)=>{r.d(a,{D8:()=>p,Fe:()=>n,He:()=>c,KX:()=>b,Tf:()=>o,U_:()=>u,XJ:()=>s,cA:()=>l,dR:()=>t.dR,hR:()=>m,j7:()=>d,uC:()=>i});var t=r(2551);let i={Canada:["Caregiving","Welding","CNA","Nursing","Cleaning","Farm work","Receptionist","Supermarket attendant","Cruise ship jobs"],"United States":["Caregiving","Welding","CNA","Nursing","Cleaning","Farm work","Receptionist","Supermarket attendant","Cruise ship jobs"],"United Kingdom":["Caregiving","Welding","CNA","Nursing","Cleaning","Farm work","Receptionist","Supermarket attendant","Cruise ship jobs"],Germany:["Au pair","Cleaning","Housekeeping","Waiter/waitress","Farm work","Nursing"],Luxembourg:["Caregiving","Cleaning","Welding","Driving","Nursing","Housekeeping","Waiter/waitress"],Netherlands:["Au pair","Cleaning","Housekeeping","Waiter/waitress","Farm work","Nursing"],Finland:["Caregiving","Cleaning","Housekeeping","Nursing","Farm work","Welding"],Turkey:["Nanny","Cleaning","Housekeeping","Farm work","Driving","Riders","Factory work","Welding"],Australia:["Farming","Teaching","Caregiving","Nursing","Driving","Construction","Clinical medicine"],"New Zealand":["Farming","Teaching","Caregiving","Nursing","Driving","Construction","Hospitality"]},n=Object.keys(i),l=["employment","occupation","employer","income"],s=["1","2","3","4+"],o=["Female","Male","Non-binary","Prefer not to say"],d=["Employed","Self-employed","Student","Between roles","Retired"],c=["Economy","Premium economy","Business"],u=[{key:"passport",label:"Passport bio page",required:!0},{key:"cv",label:"Curriculum vitae / resume",required:!0},{key:"certificates",label:"Relevant certificates",required:!1},{key:"photo",label:"Passport-sized photograph",required:!0}],m=4194304,p=["application/pdf","image/jpeg","image/png","image/webp"],b=".pdf,.jpg,.jpeg,.png,.webp"},4725:(e,a,r)=>{r.d(a,{I:()=>n});var t=r(5155);let i={cv:"M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6",compass:"M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM15.5 8.5l-2 5-5 2 2-5z",send:"M21 3 10 14M21 3l-7 18-4-7-7-4z",clock:"M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2",users:"M16 20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 20v-2a4 4 0 0 0-3-3.9M16 2.1a4 4 0 0 1 0 7.8",briefcase:"M3 7h18v13H3zM8 7V4h8v3M3 13h18",layers:"M12 3 2 8l10 5 10-5zM2 13l10 5 10-5M2 18l10 5 10-5",academic:"M12 4 2 9l10 5 10-5zM6 11v5c3 2 9 2 12 0v-5",heart:"M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 0 0-7.1 7.1L12 21.5l8.8-8.8a5 5 0 0 0 0-7.1z",cog:"M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1",globe:"M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3z",shield:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4",spark:"M13 2 4 14h7l-1 8 9-12h-7z",handshake:"M11 17l2 2a1.4 1.4 0 0 0 2-2M14 16l2.5 2.5a1.4 1.4 0 0 0 2-2L15 13M3 11l6-6 4 2 2-1 6 6M3 11l3 3M21 12l-3 3",search:"M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM20 20l-4-4",chart:"M3 21h18M6 17V11M11 17V7M16 17v-4M21 3l-6 6-3-3-5 5",target:"M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 12h.01",check:"M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM8 12l3 3 5-6",map:"M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",chat:"M21 12a8 8 0 0 1-11.8 7L4 20l1.1-4.4A8 8 0 1 1 21 12zM8 11h.01M12 11h.01M16 11h.01",rocket:"M5 15c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1zM12 15l-3-3a22 22 0 0 1 2-4A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2zM9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5",phone:"M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z",plane:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",card:"M3 5h18v14H3zM3 10h18M7 15h4",user:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",upload:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12",file:"M14 3H6v18h12V7zM14 3v4h4M9 13l2 2 4-4"};function n({name:e,className:a="h-6 w-6"}){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round",className:a,"aria-hidden":"true",children:(0,t.jsx)("path",{d:i[e]})})}},9339:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0});var t={callServer:function(){return n.callServer},createServerReference:function(){return s.createServerReference},findSourceMapURL:function(){return l.findSourceMapURL}};for(var i in t)Object.defineProperty(a,i,{enumerable:!0,get:t[i]});let n=r(7304),l=r(4060),s=r(7197)}}]);