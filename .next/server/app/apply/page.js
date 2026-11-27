"use strict";(()=>{var a={};a.id=8385,a.ids=[8385],a.modules={3295:a=>{a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},5977:(a,b,c)=>{c.r(b),c.d(b,{__next_app__:()=>q,handler:()=>s,routeModule:()=>r});var d=c(21635),e=c(86315),f=c(1020),g=c(61287),h={};for(let a in g)0>["default","__next_app__","routeModule","handler"].indexOf(a)&&(h[a]=()=>g[a]);c.d(b,h);let i=(0,d.p)(()=>Promise.resolve().then(c.bind(c,95185))),j=(0,d.p)(()=>Promise.resolve().then(c.t.bind(c,95547,23))),k=(0,d.p)(()=>Promise.resolve().then(c.bind(c,8979))),l=(0,d.p)(()=>Promise.resolve().then(c.t.bind(c,45270,23))),m=(0,d.p)(()=>Promise.resolve().then(c.t.bind(c,28193,23))),n=(0,d.p)(()=>Promise.resolve().then(c.t.bind(c,95547,23))),o={children:["",{children:["apply",{children:["__PAGE__",{},{page:[(0,d.p)(()=>Promise.resolve().then(c.bind(c,38997))),"/home/classicmster/Documents/Projects/bridgecareers/src/app/apply/page.tsx"]}]},{"global-error":[n,"next/dist/client/components/builtin/global-error.js"],metadata:{icon:[async a=>(await (0,d.p)(()=>Promise.resolve().then(c.bind(c,70440)))()).default(a),async a=>(await (0,d.p)(()=>Promise.resolve().then(c.bind(c,78162)))()).default(a)],apple:[async a=>(await (0,d.p)(()=>Promise.resolve().then(c.bind(c,94650)))()).default(a)],openGraph:[],twitter:[],manifest:"/manifest.webmanifest"}},[]]},{layout:[i,"/home/classicmster/Documents/Projects/bridgecareers/src/app/layout.tsx"],"global-error":[j,"next/dist/client/components/builtin/global-error.js"],"not-found":[k,"/home/classicmster/Documents/Projects/bridgecareers/src/app/not-found.tsx"],forbidden:[l,"next/dist/client/components/builtin/forbidden.js"],unauthorized:[m,"next/dist/client/components/builtin/unauthorized.js"],metadata:{icon:[async a=>(await (0,d.p)(()=>Promise.resolve().then(c.bind(c,70440)))()).default(a),async a=>(await (0,d.p)(()=>Promise.resolve().then(c.bind(c,78162)))()).default(a)],apple:[async a=>(await (0,d.p)(()=>Promise.resolve().then(c.bind(c,94650)))()).default(a)],openGraph:[],twitter:[],manifest:"/manifest.webmanifest"}},[]]}.children,p=(0,e.H)({tree:o,page:"/apply/page",pathname:"/apply",require:c,loadChunk:()=>Promise.resolve(),interopDefault:f.T}),q=p.__next_app__,r=p.routeModule,s=p.handler},8128:a=>{a.exports=require("next/dist/server/runtime-reacts.external.js")},9589:(a,b,c)=>{c.r(b),c.d(b,{"403a8544f082351d609ec52459c6b1e1df026a4323":()=>d.PL,"40693d58d2e0b93e6b0b902db59e613a1eafcc8ada":()=>d.xS,"60190cb9224a8517a522f620c2725fcbb024e02fe9":()=>d.LM,"603c45854880d25345d47842aa5b73772771620552":()=>d.cr,"6054078831706a8aaa2e1259d6d942d0c734a48094":()=>d.y$,"605e549c788ab5347a9e80720101693350a826706c":()=>d.Q6,"607ebfc1e44b77b81581a690316dd9c31bf8e2ce9a":()=>d.Rg,"60a56b0d46e3209d522eaf5fc2761e27fcb339283d":()=>d.IB,"60bdb15f56a4fa31cd36c422327b60eebdcb3e3e85":()=>d.AH,"60e22a79373d7690cf84f50ac4f73675f83f72e5e4":()=>d.Mk,"70e568d0f65c75588ec2dc63f1bb9db5171e7d03ab":()=>d.fY});var d=c(21920)},10846:a=>{a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},12518:a=>{a.exports=require("mongodb")},19121:a=>{a.exports=require("next/dist/server/app-render/action-async-storage.external.js")},21820:a=>{a.exports=require("os")},28354:a=>{a.exports=require("util")},29021:a=>{a.exports=require("fs")},29294:a=>{a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},31211:(a,b,c)=>{c.d(b,{A_:()=>i,HW:()=>k,J4:()=>g,NU:()=>l,aO:()=>f,dR:()=>h,qS:()=>e,wk:()=>j});var d=c(44359);let e={visaFees:[{label:"Processing fee",amount:50}],visaTypes:[{name:"Work visa",employment:!0},{name:"Skilled worker visa",employment:!0},{name:"Seasonal work visa",employment:!0},{name:"Care visa",employment:!0},{name:"Student visa",employment:!1}],routeFees:{sameCountry:15,sameContinent:25,europeNorthAmerica:45,other:60},processingTime:"15 – 20 business days",cvDownloadFee:50,paymentMethods:[{id:"Card",label:"Visa card",note:"Credit / Debit",mark:"VISA \xb7 MC \xb7 AMEX"},{id:"Skrill",label:"Skrill",note:"",mark:"SKRILL"},{id:"Neteller",label:"Neteller",note:"",mark:"NETELLER"}],paymentInstructions:""},f=a=>a.visaTypes.map(a=>a.name),g=(a,b)=>a.visaTypes.find(a=>a.name===b)?.employment??!0;function h(a){return`USD ${a.toFixed(2)}`}function i(a){return a.reduce((a,b)=>a+b.amount,0)}function j(a,b,c){if(!b||!c)return 0;if(b===c)return a.sameCountry;let e=(0,d.i8)(b)?.continent,f=(0,d.i8)(c)?.continent;return e&&e===f?a.sameContinent:"Europe"===e&&"North America"===f||"North America"===e&&"Europe"===f?a.europeNorthAmerica:a.other}let k="{same} within one country \xb7 {continent} within one continent \xb7 {euna} between Europe and North America \xb7 {other} other international routes";function l(a){return[...a.visaFees.map(a=>a.label),...a.visaTypes.map(a=>a.name),a.processingTime,...a.paymentMethods.flatMap(a=>[a.label,a.note]),a.paymentInstructions].filter(Boolean)}},31421:a=>{a.exports=require("node:child_process")},33873:a=>{a.exports=require("path")},37067:a=>{a.exports=require("node:http")},38522:a=>{a.exports=require("node:zlib")},38997:(a,b,c)=>{c.r(b),c.d(b,{default:()=>m,metadata:()=>l});var d=c(5735),e=c(63059),f=c.n(e),g=c(76840),h=c(70621),i=c(47264),j=c(64459),k=c(74700);let l=(0,i.b0)("/apply","Apply online | Bridge Careers Global","Visa and travel applications you can complete online with Bridge Careers Global.");async function m(){let[a,b]=await Promise.all([(0,h.nw)(),(0,j.lW)()]),c=[{href:"/visa-application",title:"Work visa application",text:"Apply for a work visa with a role in your destination country.",price:""},...a.map(a=>({href:`/apply/${a.slug}`,title:a.title,text:a.intro,price:a.fees.length>0?(0,k.dR)((0,h.A_)(a)):""})),{href:"/air-ticket-booking",title:"Air ticket booking",text:"Share your route and we'll compare flight options for you.",price:""}];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(g.W,{eyebrow:"Apply online",title:"Applications",text:"Choose the service you need and complete the form online.",crumbs:[{label:"Apply",href:"/apply"}]}),(0,d.jsx)("section",{className:"bg-muted py-12 sm:py-16",children:(0,d.jsx)("ul",{className:"mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8",children:c.map(a=>(0,d.jsx)("li",{children:(0,d.jsxs)(f(),{href:a.href,className:"flex h-full flex-col rounded-2xl bg-white p-6 ring-1 ring-slate-200 transition-shadow hover:shadow-lg hover:ring-brand",children:[(0,d.jsx)("h2",{className:"text-lg font-bold text-brand-dark",children:b(a.title)}),a.text&&(0,d.jsx)("p",{className:"mt-2 line-clamp-3 flex-1 text-sm text-slate-600",children:b(a.text)}),(0,d.jsxs)("p",{className:"mt-4 flex items-center justify-between text-sm font-semibold text-brand",children:[b("Apply now")," →",a.price&&(0,d.jsx)("span",{className:"text-slate-700",children:a.price})]})]})},a.href))})})]})}},40610:a=>{a.exports=require("node:dns")},41025:a=>{a.exports=require("next/dist/server/app-render/dynamic-access-async-storage.external.js")},41692:a=>{a.exports=require("node:tls")},44359:(a,b,c)=>{c.d(b,{i8:()=>h,pd:()=>f});let d={AF:"Africa",AS:"Asia",EU:"Europe",NA:"North America",SA:"South America",OC:"Oceania"},e=`Afghanistan|93|AS
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
Zimbabwe|263|AF`.split("\n").map(a=>{let[b,c,e]=a.split("|");return{name:b,dial:`+${c}`,continent:d[e]}}),f=e.map(a=>a.name),g=new Map(e.map(a=>[a.name,a]));function h(a){return g.get(a)}e.map(a=>({value:a.name,label:`${a.name} (${a.dial})`}))},44708:a=>{a.exports=require("node:https")},46060:a=>{a.exports=require("next/dist/shared/lib/no-fallback-error.external.js")},48161:a=>{a.exports=require("node:os")},51455:a=>{a.exports=require("node:fs/promises")},55511:a=>{a.exports=require("crypto")},57075:a=>{a.exports=require("node:stream")},57975:a=>{a.exports=require("node:util")},63033:a=>{a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},73024:a=>{a.exports=require("node:fs")},73136:a=>{a.exports=require("node:url")},74700:(a,b,c)=>{c.d(b,{D8:()=>m,He:()=>j,Tf:()=>h,U_:()=>k,XJ:()=>g,cA:()=>f,dR:()=>d.dR,hR:()=>l,j7:()=>i,uC:()=>e});var d=c(31211);let e={Canada:["Caregiving","Welding","CNA","Nursing","Cleaning","Farm work","Receptionist","Supermarket attendant","Cruise ship jobs"],"United States":["Caregiving","Welding","CNA","Nursing","Cleaning","Farm work","Receptionist","Supermarket attendant","Cruise ship jobs"],"United Kingdom":["Caregiving","Welding","CNA","Nursing","Cleaning","Farm work","Receptionist","Supermarket attendant","Cruise ship jobs"],Germany:["Au pair","Cleaning","Housekeeping","Waiter/waitress","Farm work","Nursing"],Luxembourg:["Caregiving","Cleaning","Welding","Driving","Nursing","Housekeeping","Waiter/waitress"],Netherlands:["Au pair","Cleaning","Housekeeping","Waiter/waitress","Farm work","Nursing"],Finland:["Caregiving","Cleaning","Housekeeping","Nursing","Farm work","Welding"],Turkey:["Nanny","Cleaning","Housekeeping","Farm work","Driving","Riders","Factory work","Welding"],Australia:["Farming","Teaching","Caregiving","Nursing","Driving","Construction","Clinical medicine"],"New Zealand":["Farming","Teaching","Caregiving","Nursing","Driving","Construction","Hospitality"]};Object.keys(e);let f=["employment","occupation","employer","income"],g=["1","2","3","4+"],h=["Female","Male","Non-binary","Prefer not to say"],i=["Employed","Self-employed","Student","Between roles","Retired"],j=["Economy","Premium economy","Business"],k=[{key:"passport",label:"Passport bio page",required:!0},{key:"cv",label:"Curriculum vitae / resume",required:!0},{key:"certificates",label:"Relevant certificates",required:!1},{key:"photo",label:"Passport-sized photograph",required:!0}],l=4194304,m=["application/pdf","image/jpeg","image/png","image/webp"]},76760:a=>{a.exports=require("node:path")},76840:(a,b,c)=>{c.d(b,{W:()=>h});var d=c(5735),e=c(63059),f=c.n(e),g=c(64459);async function h({eyebrow:a,title:b,text:c,crumbs:e,children:i}){let j=await (0,g.lW)();return(0,d.jsxs)("section",{className:"relative overflow-hidden bg-brand-dark text-white",children:[(0,d.jsx)("div",{className:"absolute inset-0 opacity-25",style:{background:"radial-gradient(circle at 85% 10%, var(--accent) 0, transparent 30%), radial-gradient(circle at 0% 100%, color-mix(in srgb, var(--brand) 60%, #ffffff) 0, transparent 40%)"},"aria-hidden":"true"}),(0,d.jsxs)("div",{className:"relative mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8",children:[e&&(0,d.jsx)("nav",{"aria-label":j("Breadcrumb"),className:"mb-6 text-sm text-slate-300",children:(0,d.jsxs)("ol",{className:"flex flex-wrap items-center gap-2",children:[(0,d.jsx)("li",{children:(0,d.jsx)(f(),{href:"/",className:"hover:text-white",children:j("Home")})}),e.map(a=>(0,d.jsxs)("li",{className:"flex items-center gap-2",children:[(0,d.jsx)("span",{"aria-hidden":"true",children:"/"}),(0,d.jsx)(f(),{href:a.href,className:"hover:text-white",children:j(a.label)})]},a.href))]})}),a&&(0,d.jsx)("p",{className:"text-sm font-semibold uppercase tracking-widest text-accent",children:j(a)}),(0,d.jsx)("h1",{className:"mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl",children:j(b)}),c&&(0,d.jsx)("p",{className:"mt-5 max-w-2xl text-lg text-slate-200",children:j(c)}),i]})]})}},77030:a=>{a.exports=require("node:net")},77598:a=>{a.exports=require("node:crypto")},78474:a=>{a.exports=require("node:events")},91043:a=>{a.exports=require("@aws-sdk/client-s3")}};var b=require("../../webpack-runtime.js");b.C(a);var c=b.X(0,[2970,5592,5573,2047,3167,396,4340,3793,3030,1920],()=>b(b.s=5977));module.exports=c})();