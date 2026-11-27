"use strict";exports.id=7371,exports.ids=[7371],exports.modules={9589:(a,b,c)=>{c.r(b),c.d(b,{"403a8544f082351d609ec52459c6b1e1df026a4323":()=>d.PL,"40693d58d2e0b93e6b0b902db59e613a1eafcc8ada":()=>d.xS,"60190cb9224a8517a522f620c2725fcbb024e02fe9":()=>d.LM,"603c45854880d25345d47842aa5b73772771620552":()=>d.cr,"6054078831706a8aaa2e1259d6d942d0c734a48094":()=>d.y$,"605e549c788ab5347a9e80720101693350a826706c":()=>d.Q6,"607ebfc1e44b77b81581a690316dd9c31bf8e2ce9a":()=>d.Rg,"60a56b0d46e3209d522eaf5fc2761e27fcb339283d":()=>d.IB,"60bdb15f56a4fa31cd36c422327b60eebdcb3e3e85":()=>d.AH,"60e22a79373d7690cf84f50ac4f73675f83f72e5e4":()=>d.Mk,"70e568d0f65c75588ec2dc63f1bb9db5171e7d03ab":()=>d.fY});var d=c(21920)},31211:(a,b,c)=>{c.d(b,{A_:()=>i,HW:()=>k,J4:()=>g,NU:()=>l,aO:()=>f,dR:()=>h,qS:()=>e,wk:()=>j});var d=c(44359);let e={visaFees:[{label:"Processing fee",amount:50}],visaTypes:[{name:"Work visa",employment:!0},{name:"Skilled worker visa",employment:!0},{name:"Seasonal work visa",employment:!0},{name:"Care visa",employment:!0},{name:"Student visa",employment:!1}],routeFees:{sameCountry:15,sameContinent:25,europeNorthAmerica:45,other:60},processingTime:"15 – 20 business days",cvDownloadFee:50,paymentMethods:[{id:"Card",label:"Visa card",note:"Credit / Debit",mark:"VISA \xb7 MC \xb7 AMEX"},{id:"Skrill",label:"Skrill",note:"",mark:"SKRILL"},{id:"Neteller",label:"Neteller",note:"",mark:"NETELLER"}],paymentInstructions:""},f=a=>a.visaTypes.map(a=>a.name),g=(a,b)=>a.visaTypes.find(a=>a.name===b)?.employment??!0;function h(a){return`USD ${a.toFixed(2)}`}function i(a){return a.reduce((a,b)=>a+b.amount,0)}function j(a,b,c){if(!b||!c)return 0;if(b===c)return a.sameCountry;let e=(0,d.i8)(b)?.continent,f=(0,d.i8)(c)?.continent;return e&&e===f?a.sameContinent:"Europe"===e&&"North America"===f||"North America"===e&&"Europe"===f?a.europeNorthAmerica:a.other}let k="{same} within one country \xb7 {continent} within one continent \xb7 {euna} between Europe and North America \xb7 {other} other international routes";function l(a){return[...a.visaFees.map(a=>a.label),...a.visaTypes.map(a=>a.name),a.processingTime,...a.paymentMethods.flatMap(a=>[a.label,a.note]),a.paymentInstructions].filter(Boolean)}},34318:(a,b,c)=>{c.d(b,{B:()=>j});var d=c(44359),e=c(64459),f=c(31211),g=c(16056),h=c(74700);let i=["We restored the details you saved earlier.","Please upload this document.","This field is required.","Enter a valid email address.","Your passport has expired.","The expiry date must be after the issue date.","Your documents are too large together. Please upload files under 4 MB in total.","Your progress has been saved in this browser. Documents need to be added again when you return.","We couldn't save your progress in this browser.","Upload a PDF, JPG, PNG or WebP file.","Application received","Explore more roles","Book your air ticket","Your next move","Visa application","Fill in your details and build your application with confidence.","Save & exit","Step {n} of {total}: {label}","Personal information","Please provide your details as they appear on your passport.","Full name","First name","Middle name","Last name","Date of birth","Gender","Select gender","Nationality","Select nationality","Passport number","Enter passport number","Date of issue","Date of expiry","Place of issue","City or country","Issuing authority","e.g. Department of Immigration","Contact details","Email address","Phone number","Country code","Code","Enter phone number","Current address","Address line 1","Address line 2","City","State / Province","Postal / Zip code","Country","Select country","Employment information","Current employment status","Select employment status","Occupation","Enter your occupation","Employer / Company name","Enter employer name","Monthly income (USD)","Enter monthly income","Travel information","Tell us where you want to go and the role you’re moving toward.","Choose a destination and role","Your available roles update automatically based on the destination you select.","Departure country","Select departure country","Destination country","Available job role","Visa type","Preferred start date","Number of applicants","Air ticket booking fee","Select an origin","This route-based booking service fee is for {from} to {to}. It excludes the airline ticket price and updates when either country changes.","your departure country","Selected destination","Selected role","Typical processing","Roles available in {country}","Supporting documents","Upload clear copies so our team can review your route with confidence.","optional","PDF, JPG or PNG","Replace file","Choose file","Remove","Files are stored securely and only used to prepare your application.","Photos are resized automatically. Total size: {size} of 4 MB.","Review application","Check the details below before moving to payment.","Applicant details","Edit","Passport expires","Employment status","Travel plan","From","Destination","Role","Not provided","Applicants","Documents","Payment","Choose how you'd like to pay your visa application and air ticket booking fees.","Payment method","No payment is taken on this page. After our team reviews your application, we'll email you a secure link to pay {total} with your chosen method.","Back","Sending…","Submit application","Continue to payment","Submit and pay","You'll pay your visa application and air ticket booking fees securely on Paystack right after you submit.","No card details are entered on this site. When you submit, you'll be taken to Paystack to pay {total} by card or mobile money.","Save & continue","Application summary","Preferred role","Processing time","Fee breakdown","Select origin","Total amount","Paid later via a secure link from our team","Need a hand?","Our team can help you prepare the right documents.","Talk to an advisor","Request received","Tell us about your journey","We will use these details to prepare a booking request.","Select destination","Departure date","Return date","Leave empty for a one-way ticket.","Passengers","Travel class","Additional notes","Preferred airlines, flexible dates, baggage needs…","Request flight options","Select…","Payment instructions","Upload a PDF, Word, JPG, PNG or WebP file.","Your files are too large together. Please upload files under 4 MB in total.","Travelling passport (bio page)","Please upload a file under 4 MB.","Booking estimate","To","Trip","Return","One way","Booking service fee","Airline fare, taxes, baggage, seat charges and any applicable booking fees will be quoted after we review your route and travel preferences.","What happens next?","We review your request, compare available options and contact you before any ticket purchase is made."];async function j(a=[]){let[b,c,k]=await Promise.all([(0,e.lW)(),(0,e.JK)(),(0,g.r)()]);return"en"===c?{}:Object.fromEntries([...new Set([...i,...d.pd,...Object.keys(h.uC),...Object.values(h.uC).flat(),...h.Tf,...h.j7,...h.He,...h.U_.map(a=>a.label),...(0,f.NU)(k),f.HW,...a])].map(a=>[a,b(a)]))}},36717:(a,b,c)=>{c.d(b,{D0:()=>i,Lc:()=>n,Ld:()=>p,Qj:()=>t,f6:()=>s,fs:()=>m,fz:()=>h,ks:()=>k,l6:()=>l,s$:()=>r,xo:()=>o,z3:()=>q});var d=c(48249),e=c(77968),f=c(29457),g=c(68244);function h(a){return(b,c)=>{let d=a[b]??b;return c?d.replace(/\{(\w+)\}/g,(a,b)=>b in c?String(c[b]):a):d}}function i({id:a,label:b,required:c,error:e,hint:f,className:g="",children:h}){return(0,d.jsxs)("div",{className:g,children:[(0,d.jsxs)("label",{htmlFor:a,className:"text-sm font-medium text-slate-800",children:[b,c&&(0,d.jsx)("span",{className:"text-brand",children:" *"})]}),h,f&&!e&&(0,d.jsx)("p",{className:"mt-1.5 text-xs text-slate-500",children:f}),e&&(0,d.jsx)("p",{id:`${a}-error`,className:"mt-1.5 text-sm text-red-600",children:e})]})}function j(a,b){return{id:a,name:a,"aria-invalid":!!b||void 0,"aria-describedby":b?`${a}-error`:void 0,className:`${e.v} ${b?"border-red-500":""}`}}function k({type:a="text",placeholder:b,autoComplete:c,min:e,max:f,...g}){return(0,d.jsx)("input",{...j(g.id,g.error),type:a,value:g.value,placeholder:b,autoComplete:c,min:e,max:f,onChange:a=>g.onChange(a.target.value)})}function l({options:a,placeholder:b,...c}){return(0,d.jsxs)("select",{...j(c.id,c.error),value:c.value,onChange:a=>c.onChange(a.target.value),children:[void 0!==b&&(0,d.jsx)("option",{value:"",children:b}),a.map(a=>{let b="string"==typeof a?{value:a,label:a}:a;return(0,d.jsx)("option",{value:b.value,children:b.label},b.value)})]})}function m(a){return(0,d.jsx)("textarea",{...j(a.id,a.error),rows:4,value:a.value,placeholder:a.placeholder,onChange:b=>a.onChange(b.target.value)})}function n({icon:a,title:b,text:c}){return(0,d.jsxs)("div",{className:"flex items-start gap-4 border-b border-slate-100 pb-5",children:[(0,d.jsx)("span",{className:"flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand",children:a}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{className:"text-xl font-bold text-brand-dark",children:b}),c&&(0,d.jsx)("p",{className:"mt-1 text-sm text-slate-600",children:c})]})]})}function o({label:a,value:b,strong:c}){return(0,d.jsxs)("div",{className:"flex items-baseline justify-between gap-4 py-2 text-sm",children:[(0,d.jsx)("dt",{className:"text-slate-500",children:a}),(0,d.jsx)("dd",{className:`text-right ${c?"text-base font-bold text-brand-dark":"font-semibold text-slate-800"}`,children:b})]})}async function p(a,b=2e3,c=.85){if(!a.type.startsWith("image/")||a.size<614400)return a;try{let d=await createImageBitmap(a),e=Math.min(1,b/Math.max(d.width,d.height)),f=document.createElement("canvas");f.width=Math.round(d.width*e),f.height=Math.round(d.height*e),f.getContext("2d")?.drawImage(d,0,0,f.width,f.height);let g=await new Promise(a=>f.toBlob(a,"image/jpeg",c));if(!g||g.size>=a.size)return a;return new File([g],a.name.replace(/\.\w+$/,"")+".jpg",{type:"image/jpeg"})}catch{return a}}function q(a){return a>1048576?`${(a/1024/1024).toFixed(1)} MB`:`${Math.max(1,Math.round(a/1024))} KB`}function r({id:a,label:b,required:c,file:e,error:g,hint:h,accept:i,onPick:j,L:k}){return(0,d.jsxs)("div",{className:"sm:col-span-2",children:[(0,d.jsxs)("p",{className:"text-sm font-medium text-slate-800",children:[b,c&&(0,d.jsx)("span",{className:"text-brand",children:" *"})]}),(0,d.jsxs)("div",{className:`mt-1.5 flex flex-wrap items-center gap-3 rounded-xl border-2 border-dashed p-4 ${g?"border-red-300 bg-red-50/40":e?"border-brand/40 bg-brand/5":"border-slate-200"}`,children:[(0,d.jsx)(f.I,{name:e?"check":"file",className:`h-6 w-6 shrink-0 ${e?"text-brand":"text-slate-400"}`}),(0,d.jsx)("p",{className:"min-w-0 flex-1 truncate text-sm text-slate-600",children:e?`${e.name} \xb7 ${q(e.size)}`:h||k("PDF, JPG or PNG")}),e&&!c&&(0,d.jsx)("button",{type:"button",onClick:()=>j(void 0),className:"rounded-lg px-3 py-2 text-sm text-slate-600 hover:text-red-600",children:k("Remove")}),(0,d.jsxs)("label",{htmlFor:a,className:"cursor-pointer rounded-lg bg-white px-3.5 py-2 text-sm font-semibold text-brand ring-1 ring-brand/40 focus-within:ring-2 focus-within:ring-brand hover:bg-brand/5",children:[k(e?"Replace file":"Choose file"),(0,d.jsx)("input",{id:a,type:"file",accept:i,className:"sr-only","aria-invalid":!!g||void 0,"aria-describedby":g?`${a}-error`:void 0,onChange:a=>{j(a.target.files?.[0]),a.target.value=""}})]})]}),g&&(0,d.jsx)("p",{id:`${a}-error`,className:"mt-1.5 text-sm text-red-600",children:g})]})}function s({fields:a,values:b,onChange:c,files:f,onFile:h,errors:j,L:n}){return 0===a.length?null:(0,d.jsx)("div",{className:"grid gap-4 sm:grid-cols-2",children:a.map(a=>{let o=a.hint?n(a.hint):void 0;if("section"===a.type)return(0,d.jsx)(e.w,{title:n(a.label),text:o},a.key);if("file"===a.type)return(0,d.jsx)(r,{id:a.key,label:n(a.label),required:a.required,file:f[a.key],error:j[a.key],hint:o,accept:g.w6,onPick:b=>h(a.key,b),L:n},a.key);let p={id:a.key,value:b[a.key]??"",onChange:c(a.key),error:j[a.key]};return(0,d.jsx)(i,{id:a.key,label:n(a.label),required:a.required,error:j[a.key],hint:o,className:"textarea"===a.type?"sm:col-span-2":"",children:"select"===a.type?(0,d.jsx)(l,{...p,placeholder:n("Select…"),options:a.options.map(a=>({value:a,label:n(a)}))}):"textarea"===a.type?(0,d.jsx)(m,{...p}):(0,d.jsx)(k,{...p,type:a.type})},a.key)})})}function t({text:a,L:b}){return a.trim()?(0,d.jsxs)("div",{className:"rounded-xl p-4 ring-1 ring-slate-200",children:[(0,d.jsx)("p",{className:"text-sm font-bold text-brand-dark",children:b("Payment instructions")}),(0,d.jsx)("p",{className:"mt-1 whitespace-pre-line text-sm text-slate-700",children:b(a)})]}):null}},44359:(a,b,c)=>{c.d(b,{i8:()=>h,pd:()=>f});let d={AF:"Africa",AS:"Asia",EU:"Europe",NA:"North America",SA:"South America",OC:"Oceania"},e=`Afghanistan|93|AS
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
Zimbabwe|263|AF`.split("\n").map(a=>{let[b,c,e]=a.split("|");return{name:b,dial:`+${c}`,continent:d[e]}}),f=e.map(a=>a.name),g=new Map(e.map(a=>[a.name,a]));function h(a){return g.get(a)}e.map(a=>({value:a.name,label:`${a.name} (${a.dial})`}))},50810:(a,b,c)=>{c.d(b,{D8:()=>n,Fe:()=>f,He:()=>k,KX:()=>o,Tf:()=>i,U_:()=>l,XJ:()=>h,cA:()=>g,dR:()=>d.dR,hR:()=>m,j7:()=>j,uC:()=>e});var d=c(53781);let e={Canada:["Caregiving","Welding","CNA","Nursing","Cleaning","Farm work","Receptionist","Supermarket attendant","Cruise ship jobs"],"United States":["Caregiving","Welding","CNA","Nursing","Cleaning","Farm work","Receptionist","Supermarket attendant","Cruise ship jobs"],"United Kingdom":["Caregiving","Welding","CNA","Nursing","Cleaning","Farm work","Receptionist","Supermarket attendant","Cruise ship jobs"],Germany:["Au pair","Cleaning","Housekeeping","Waiter/waitress","Farm work","Nursing"],Luxembourg:["Caregiving","Cleaning","Welding","Driving","Nursing","Housekeeping","Waiter/waitress"],Netherlands:["Au pair","Cleaning","Housekeeping","Waiter/waitress","Farm work","Nursing"],Finland:["Caregiving","Cleaning","Housekeeping","Nursing","Farm work","Welding"],Turkey:["Nanny","Cleaning","Housekeeping","Farm work","Driving","Riders","Factory work","Welding"],Australia:["Farming","Teaching","Caregiving","Nursing","Driving","Construction","Clinical medicine"],"New Zealand":["Farming","Teaching","Caregiving","Nursing","Driving","Construction","Hospitality"]},f=Object.keys(e),g=["employment","occupation","employer","income"],h=["1","2","3","4+"],i=["Female","Male","Non-binary","Prefer not to say"],j=["Employed","Self-employed","Student","Between roles","Retired"],k=["Economy","Premium economy","Business"],l=[{key:"passport",label:"Passport bio page",required:!0},{key:"cv",label:"Curriculum vitae / resume",required:!0},{key:"certificates",label:"Relevant certificates",required:!1},{key:"photo",label:"Passport-sized photograph",required:!0}],m=4194304,n=["application/pdf","image/jpeg","image/png","image/webp"],o=".pdf,.jpg,.jpeg,.png,.webp"},53781:(a,b,c)=>{c.d(b,{$p:()=>k,A_:()=>h,HW:()=>j,J4:()=>f,aO:()=>e,dR:()=>g,wk:()=>i});var d=c(62477);let e=a=>a.visaTypes.map(a=>a.name),f=(a,b)=>a.visaTypes.find(a=>a.name===b)?.employment??!0;function g(a){return`USD ${a.toFixed(2)}`}function h(a){return a.reduce((a,b)=>a+b.amount,0)}function i(a,b,c){if(!b||!c)return 0;if(b===c)return a.sameCountry;let e=(0,d.i8)(b)?.continent,f=(0,d.i8)(c)?.continent;return e&&e===f?a.sameContinent:"Europe"===e&&"North America"===f||"North America"===e&&"Europe"===f?a.europeNorthAmerica:a.other}let j="{same} within one country \xb7 {continent} within one continent \xb7 {euna} between Europe and North America \xb7 {other} other international routes";function k(a){let b=a=>`USD ${Number.isInteger(a)?a:a.toFixed(2)}`;return{same:b(a.sameCountry),continent:b(a.sameContinent),euna:b(a.europeNorthAmerica),other:b(a.other)}}},62477:(a,b,c)=>{c.d(b,{i8:()=>h,ne:()=>i,pd:()=>f});let d={AF:"Africa",AS:"Asia",EU:"Europe",NA:"North America",SA:"South America",OC:"Oceania"},e=`Afghanistan|93|AS
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
Zimbabwe|263|AF`.split("\n").map(a=>{let[b,c,e]=a.split("|");return{name:b,dial:`+${c}`,continent:d[e]}}),f=e.map(a=>a.name),g=new Map(e.map(a=>[a.name,a]));function h(a){return g.get(a)}let i=e.map(a=>({value:a.name,label:`${a.name} (${a.dial})`}))},68244:(a,b,c)=>{c.d(b,{EO:()=>k,Ju:()=>g,Jy:()=>j,KS:()=>f,Le:()=>l,SP:()=>h,Xy:()=>d,gx:()=>i,w6:()=>m});let d=[{id:"text",label:"Short text"},{id:"textarea",label:"Long text"},{id:"email",label:"Email"},{id:"tel",label:"Phone"},{id:"number",label:"Number"},{id:"date",label:"Date"},{id:"select",label:"Dropdown"},{id:"file",label:"File upload"},{id:"section",label:"Section heading"}],e=[{id:"visa",title:"Visa application",description:"The five-step application at /visa-application.",page:"/visa-application",inbox:"visa",sections:[{id:"personal",label:"Step 1 \xb7 Personal information"},{id:"travel",label:"Step 2 \xb7 Travel information"},{id:"documents",label:"Step 3 \xb7 Supporting documents"}],fields:[{key:"firstName",label:"First name",required:!0,section:"personal"},{key:"middleName",label:"Middle name",required:!1,section:"personal"},{key:"lastName",label:"Last name",required:!0,section:"personal"},{key:"birthDate",label:"Date of birth",required:!0,section:"personal"},{key:"gender",label:"Gender",required:!0,section:"personal"},{key:"nationality",label:"Nationality",required:!0,section:"personal"},{key:"passport",label:"Passport number",required:!0,section:"personal"},{key:"issueDate",label:"Date of issue",required:!0,section:"personal"},{key:"expiryDate",label:"Date of expiry",required:!0,section:"personal"},{key:"issuePlace",label:"Place of issue",required:!0,section:"personal"},{key:"authority",label:"Issuing authority",required:!0,section:"personal"},{key:"email",label:"Email address",required:!0,section:"personal"},{key:"phone",label:"Phone number (with country code)",required:!0,section:"personal"},{key:"address1",label:"Address line 1",required:!0,section:"personal"},{key:"address2",label:"Address line 2",required:!1,section:"personal"},{key:"city",label:"City",required:!0,section:"personal"},{key:"province",label:"State / Province",required:!0,section:"personal"},{key:"postal",label:"Postal / Zip code",required:!0,section:"personal"},{key:"homeCountry",label:"Country (address)",required:!0,section:"personal"},{key:"originCountry",label:"Departure country",required:!0,section:"travel"},{key:"country",label:"Destination country",required:!0,core:!0,section:"travel"},{key:"job",label:"Available job role",required:!0,core:!0,section:"travel"},{key:"visaType",label:"Visa type",required:!0,core:!0,section:"travel"},{key:"startDate",label:"Preferred start date",required:!1,section:"travel"},{key:"applicants",label:"Number of applicants",required:!0,section:"travel"},{key:"employment",label:"Current employment status (not asked for student visas)",required:!0,section:"travel"},{key:"occupation",label:"Occupation (not asked for student visas)",required:!0,section:"travel"},{key:"employer",label:"Employer / Company name (not asked for student visas)",required:!1,section:"travel"},{key:"income",label:"Monthly income (not asked for student visas)",required:!1,section:"travel"},{key:"doc_passport",label:"Passport bio page",required:!0,section:"documents"},{key:"doc_cv",label:"Curriculum vitae / resume",required:!0,section:"documents"},{key:"doc_certificates",label:"Relevant certificates",required:!1,section:"documents"},{key:"doc_photo",label:"Passport-sized photograph",required:!0,section:"documents"},{key:"paymentMethod",label:"Payment method",required:!0,core:!0}]},{id:"ticket",title:"Air ticket booking",description:"The booking request at /air-ticket-booking.",page:"/air-ticket-booking",inbox:"tickets",fields:[{key:"from",label:"Departure country",required:!0,core:!0},{key:"to",label:"Destination",required:!0,core:!0},{key:"departDate",label:"Departure date",required:!0},{key:"returnDate",label:"Return date",required:!1},{key:"passengers",label:"Passengers",required:!0},{key:"travelClass",label:"Travel class",required:!0},{key:"email",label:"Email address",required:!0},{key:"passportFile",label:"Travelling passport (bio page)",required:!0},{key:"notes",label:"Additional notes",required:!1}]},{id:"application",title:"Job application",description:"The “Apply for this job” form on every job page.",page:"/jobs",inbox:"applications",fields:[{key:"name",label:"Full name",required:!0},{key:"email",label:"Email",required:!0},{key:"phone",label:"Phone",required:!0},{key:"location",label:"Current location",required:!1},{key:"cv",label:"CV (PDF or Word, max 4 MB)",required:!0},{key:"message",label:"Cover note",required:!1}]},{id:"contact",title:"Contact us",description:"The message form at /contact-us.",page:"/contact-us",inbox:"messages",fields:[{key:"name",label:"Full name",required:!0},{key:"email",label:"Email",required:!0},{key:"phone",label:"Phone",required:!1},{key:"country",label:"Country",required:!1},{key:"topic",label:"I am…",required:!1},{key:"message",label:"Message",required:!0}]},{id:"staff",title:"Request staff",description:"The employer form at /employers/request-staff.",page:"/employers/request-staff",inbox:"requests",fields:[{key:"name",label:"Your name",required:!0},{key:"company",label:"Company",required:!0},{key:"email",label:"Work email",required:!0},{key:"phone",label:"Phone",required:!1},{key:"service",label:"Service",required:!1},{key:"industry",label:"Industry",required:!1},{key:"role",label:"Role(s) you're hiring for",required:!0},{key:"headcount",label:"Number of people",required:!1},{key:"start",label:"Ideal start date",required:!1},{key:"details",label:"Tell us more",required:!0}]}];function f(a){return e.find(b=>b.id===a)}function g(a,b){let c={};for(let d of a.fields){let a=b.fields[d.key]??{};c[d.key]={shown:d.core||!a.hidden,required:a.required??d.required}}return{fields:c,custom:b.custom}}function h(a,b){return a.fields[b]?.shown??!0}function i(a,b){let c=a.fields[b];return c?c.shown&&c.required:a.custom.some(a=>a.key===b&&a.required)}function j(a,b){return void 0===b?a.custom:a.custom.filter(a=>a.section===b)}let k=["email","name","firstName","lastName"],l=["application/pdf","image/jpeg","image/png","image/webp","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],m=".pdf,.jpg,.jpeg,.png,.webp,.doc,.docx"},74700:(a,b,c)=>{c.d(b,{D8:()=>m,He:()=>j,Tf:()=>h,U_:()=>k,XJ:()=>g,cA:()=>f,dR:()=>d.dR,hR:()=>l,j7:()=>i,uC:()=>e});var d=c(31211);let e={Canada:["Caregiving","Welding","CNA","Nursing","Cleaning","Farm work","Receptionist","Supermarket attendant","Cruise ship jobs"],"United States":["Caregiving","Welding","CNA","Nursing","Cleaning","Farm work","Receptionist","Supermarket attendant","Cruise ship jobs"],"United Kingdom":["Caregiving","Welding","CNA","Nursing","Cleaning","Farm work","Receptionist","Supermarket attendant","Cruise ship jobs"],Germany:["Au pair","Cleaning","Housekeeping","Waiter/waitress","Farm work","Nursing"],Luxembourg:["Caregiving","Cleaning","Welding","Driving","Nursing","Housekeeping","Waiter/waitress"],Netherlands:["Au pair","Cleaning","Housekeeping","Waiter/waitress","Farm work","Nursing"],Finland:["Caregiving","Cleaning","Housekeeping","Nursing","Farm work","Welding"],Turkey:["Nanny","Cleaning","Housekeeping","Farm work","Driving","Riders","Factory work","Welding"],Australia:["Farming","Teaching","Caregiving","Nursing","Driving","Construction","Clinical medicine"],"New Zealand":["Farming","Teaching","Caregiving","Nursing","Driving","Construction","Hospitality"]};Object.keys(e);let f=["employment","occupation","employer","income"],g=["1","2","3","4+"],h=["Female","Male","Non-binary","Prefer not to say"],i=["Employed","Self-employed","Student","Between roles","Retired"],j=["Economy","Premium economy","Business"],k=[{key:"passport",label:"Passport bio page",required:!0},{key:"cv",label:"Curriculum vitae / resume",required:!0},{key:"certificates",label:"Relevant certificates",required:!1},{key:"photo",label:"Passport-sized photograph",required:!0}],l=4194304,m=["application/pdf","image/jpeg","image/png","image/webp"]}};