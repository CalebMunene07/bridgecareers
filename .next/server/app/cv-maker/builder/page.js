(()=>{var a={};a.id=1851,a.ids=[1851],a.modules={3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},8128:a=>{"use strict";a.exports=require("next/dist/server/runtime-reacts.external.js")},8729:(a,b,c)=>{"use strict";c.d(b,{CvBuilderLoader:()=>d});let d=(0,c(77943).registerClientReference)(function(){throw Error("Attempted to call CvBuilderLoader() from the server but CvBuilderLoader is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/classicmster/Documents/Projects/bridgecareers/src/components/cv/cv-builder-loader.tsx","CvBuilderLoader")},10117:(a,b)=>{"use strict";function c(a){return a.split("/").map(a=>encodeURIComponent(a)).join("/")}Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"encodeURIPath",{enumerable:!0,get:function(){return c}})},10846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},12518:a=>{"use strict";a.exports=require("mongodb")},16056:(a,b,c)=>{"use strict";c.d(b,{a:()=>j,r:()=>i});var d=c(91986),e=c(20903),f=c(31211);let g="pricing";async function h(){return(await (0,e.Lf)()).collection(e._f.content)}let i=(0,d.cache)(async()=>{try{let a=await (await h()).findOne({key:g}),b=a?.value??{};return{...f.qS,...b,visaTypes:b.visaTypes?.length?b.visaTypes:f.qS.visaTypes,routeFees:{...f.qS.routeFees,...b.routeFees},paymentMethods:b.paymentMethods?.length?b.paymentMethods:f.qS.paymentMethods}}catch(a){if(a instanceof e.$J)return f.qS;throw a}});async function j(a,b){await (await h()).updateOne({key:g},{$set:{key:g,value:a,updatedAt:new Date,updatedBy:b}},{upsert:!0})}},19121:a=>{"use strict";a.exports=require("next/dist/server/app-render/action-async-storage.external.js")},19378:(a,b,c)=>{"use strict";c.d(b,{CvBuilderLoader:()=>f});var d=c(48249),e=c(39973);let f=c.n(e)()(async()=>{},{loadableGenerated:{modules:["components/cv/cv-builder-loader.tsx -> @/components/cv/cv-builder"]},ssr:!1,loading:()=>(0,d.jsx)("div",{className:"flex min-h-[60vh] items-center justify-center text-slate-500",role:"status",children:"Loading CV maker…"})})},21820:a=>{"use strict";a.exports=require("os")},22715:(a,b,c)=>{"use strict";c.r(b),c.d(b,{__next_app__:()=>r,handler:()=>t,routeModule:()=>s});var d=c(21635),e=c(86315),f=c(1020),g=c(61287),h={};for(let a in g)0>["default","__next_app__","routeModule","handler"].indexOf(a)&&(h[a]=()=>g[a]);c.d(b,h);let i=(0,d.p)(()=>Promise.resolve().then(c.bind(c,95185))),j=(0,d.p)(()=>Promise.resolve().then(c.t.bind(c,95547,23))),k=(0,d.p)(()=>Promise.resolve().then(c.bind(c,8979))),l=(0,d.p)(()=>Promise.resolve().then(c.t.bind(c,45270,23))),m=(0,d.p)(()=>Promise.resolve().then(c.t.bind(c,28193,23))),n=(0,d.p)(()=>Promise.resolve().then(c.t.bind(c,95547,23))),o=(0,d.p)(()=>Promise.resolve().then(c.t.bind(c,95547,23))),p={children:["",{children:["cv-maker",{children:["builder",{children:["__PAGE__",{},{page:[(0,d.p)(()=>Promise.resolve().then(c.bind(c,45988))),"/home/classicmster/Documents/Projects/bridgecareers/src/app/cv-maker/builder/page.tsx"]}]},{"global-error":[o,"next/dist/client/components/builtin/global-error.js"]},[]]},{"global-error":[n,"next/dist/client/components/builtin/global-error.js"],metadata:{icon:[async a=>(await (0,d.p)(()=>Promise.resolve().then(c.bind(c,70440)))()).default(a),async a=>(await (0,d.p)(()=>Promise.resolve().then(c.bind(c,78162)))()).default(a)],apple:[async a=>(await (0,d.p)(()=>Promise.resolve().then(c.bind(c,94650)))()).default(a)],openGraph:[],twitter:[],manifest:"/manifest.webmanifest"}},[]]},{layout:[i,"/home/classicmster/Documents/Projects/bridgecareers/src/app/layout.tsx"],"global-error":[j,"next/dist/client/components/builtin/global-error.js"],"not-found":[k,"/home/classicmster/Documents/Projects/bridgecareers/src/app/not-found.tsx"],forbidden:[l,"next/dist/client/components/builtin/forbidden.js"],unauthorized:[m,"next/dist/client/components/builtin/unauthorized.js"],metadata:{icon:[async a=>(await (0,d.p)(()=>Promise.resolve().then(c.bind(c,70440)))()).default(a),async a=>(await (0,d.p)(()=>Promise.resolve().then(c.bind(c,78162)))()).default(a)],apple:[async a=>(await (0,d.p)(()=>Promise.resolve().then(c.bind(c,94650)))()).default(a)],openGraph:[],twitter:[],manifest:"/manifest.webmanifest"}},[]]}.children,q=(0,e.H)({tree:p,page:"/cv-maker/builder/page",pathname:"/cv-maker/builder",require:c,loadChunk:()=>Promise.resolve(),interopDefault:f.T}),r=q.__next_app__,s=q.routeModule,t=q.handler},28354:a=>{"use strict";a.exports=require("util")},29021:a=>{"use strict";a.exports=require("fs")},29294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},31211:(a,b,c)=>{"use strict";c.d(b,{A_:()=>i,HW:()=>k,J4:()=>g,NU:()=>l,aO:()=>f,dR:()=>h,qS:()=>e,wk:()=>j});var d=c(44359);let e={visaFees:[{label:"Processing fee",amount:50}],visaTypes:[{name:"Work visa",employment:!0},{name:"Skilled worker visa",employment:!0},{name:"Seasonal work visa",employment:!0},{name:"Care visa",employment:!0},{name:"Student visa",employment:!1}],routeFees:{sameCountry:15,sameContinent:25,europeNorthAmerica:45,other:60},processingTime:"15 – 20 business days",cvDownloadFee:50,paymentMethods:[{id:"Card",label:"Visa card",note:"Credit / Debit",mark:"VISA \xb7 MC \xb7 AMEX"},{id:"Skrill",label:"Skrill",note:"",mark:"SKRILL"},{id:"Neteller",label:"Neteller",note:"",mark:"NETELLER"}],paymentInstructions:""},f=a=>a.visaTypes.map(a=>a.name),g=(a,b)=>a.visaTypes.find(a=>a.name===b)?.employment??!0;function h(a){return`USD ${a.toFixed(2)}`}function i(a){return a.reduce((a,b)=>a+b.amount,0)}function j(a,b,c){if(!b||!c)return 0;if(b===c)return a.sameCountry;let e=(0,d.i8)(b)?.continent,f=(0,d.i8)(c)?.continent;return e&&e===f?a.sameContinent:"Europe"===e&&"North America"===f||"North America"===e&&"Europe"===f?a.europeNorthAmerica:a.other}let k="{same} within one country \xb7 {continent} within one continent \xb7 {euna} between Europe and North America \xb7 {other} other international routes";function l(a){return[...a.visaFees.map(a=>a.label),...a.visaTypes.map(a=>a.name),a.processingTime,...a.paymentMethods.flatMap(a=>[a.label,a.note]),a.paymentInstructions].filter(Boolean)}},31421:a=>{"use strict";a.exports=require("node:child_process")},33873:a=>{"use strict";a.exports=require("path")},37067:a=>{"use strict";a.exports=require("node:http")},38522:a=>{"use strict";a.exports=require("node:zlib")},39973:(a,b,c)=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{enumerable:!0,get:function(){return e}});let d=c(40399)._(c(80061));function e(a,b){let c={};"function"==typeof a&&(c.loader=a);let e={...c,...b};return(0,d.default)({...e,modules:e.loadableGenerated?.modules})}("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&&void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},40610:a=>{"use strict";a.exports=require("node:dns")},41025:a=>{"use strict";a.exports=require("next/dist/server/app-render/dynamic-access-async-storage.external.js")},41692:a=>{"use strict";a.exports=require("node:tls")},42651:(a,b,c)=>{Promise.resolve().then(c.bind(c,8729))},44359:(a,b,c)=>{"use strict";c.d(b,{i8:()=>h,pd:()=>f});let d={AF:"Africa",AS:"Asia",EU:"Europe",NA:"North America",SA:"South America",OC:"Oceania"},e=`Afghanistan|93|AS
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
Zimbabwe|263|AF`.split("\n").map(a=>{let[b,c,e]=a.split("|");return{name:b,dial:`+${c}`,continent:d[e]}}),f=e.map(a=>a.name),g=new Map(e.map(a=>[a.name,a]));function h(a){return g.get(a)}e.map(a=>({value:a.name,label:`${a.name} (${a.dial})`}))},44708:a=>{"use strict";a.exports=require("node:https")},45988:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>m,metadata:()=>l});var d=c(5735),e=c(8729),f=c(99555);let g=["CV maker","Load example","Clear","Your draft saves automatically in this browser.","CV sections","Personal","Experience","Education","Skills","Languages & certificates","Design","Move up","Move down","Remove","Full name","Job title","e.g. Registered Nurse","Email","Phone","Location","City, country","LinkedIn or website","Profile summary","Two or three sentences about who you are, your strengths and what you're looking for.","New position","Employer","Start","End","I currently work here","Achievements and responsibilities","One point per line. Start with an action word and include numbers where you can.","+ Add position","New qualification","Qualification","School or college","Details (optional)","+ Add qualification","Add a skill","e.g. Customer service","Add","Remove {name}","Add 5–10 skills that match the jobs you want.","Languages","Language","Level","Remove language","+ Add language","Certifications","New certification","Name","Issued by","Year","+ Add certification","Template","Modern","Classic","Minimal","Accent colour","Finished?","Download your CV as a PDF (choose “Save as PDF” in the print dialog), or send it straight to our consultants.","Download PDF","Building your CV is free. Downloading it as a PDF costs {price}, or you can send it to our consultants for free.","Buy the PDF download","Email for the payment link","Payment method","Visa card","Skrill","Neteller","Get my CV for {price}","No payment is taken here. We'll email you a secure payment link, then an unlock code once payment is confirmed.","Email for your receipt and unlock code","You'll pay securely on Paystack by card or mobile money. Your download unlocks as soon as the payment is confirmed.","Already paid? Enter your unlock code","Checking…","Unlock download","Downloading your CV costs {price}. Use “Get my CV” in the CV maker to buy the PDF download.","I agree to share my CV with Bridge Careers Global so consultants can contact me about suitable jobs, as described in the","privacy policy","Sending…","Send my CV to Bridge","Back to editing","Preview CV","Native","Fluent","Advanced","Intermediate","Basic","Profile","Contact","Your Name","Present","Improve with AI","Write it for me","Thinking…","Suggestion (check it's accurate before using it)","Use this","Dismiss","Dictate","Listening… tap to stop","Stop dictation","Dictate with your voice","Microphone access was blocked.","Couldn't hear that. Try again."];var h=c(82019),i=c(31211),j=c(16056),k=c(64459);let l=(0,c(47264).b0)("/cv-maker/builder","Create your CV | Bridge Careers Global","Build a professional CV in minutes and download it as a PDF.");async function m(){let[a,b,c]=await Promise.all([(0,k.lW)(),(0,k.JK)(),(0,j.r)()]),l="en"===b?{}:Object.fromEntries([...g,...(0,i.NU)(c),"Payment instructions"].map(b=>[b,a(b)]));return(0,d.jsx)("div",{className:"bg-slate-50 print:bg-white",children:(0,d.jsx)(e.CvBuilderLoader,{aiEnabled:await (0,f.ak)(),labels:l,onlinePayment:await (0,h.mI)(),pricing:{cvDownloadFee:c.cvDownloadFee,paymentMethods:c.paymentMethods,paymentInstructions:c.paymentInstructions}})})}},46060:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external.js")},48161:a=>{"use strict";a.exports=require("node:os")},51455:a=>{"use strict";a.exports=require("node:fs/promises")},55511:a=>{"use strict";a.exports=require("crypto")},57075:a=>{"use strict";a.exports=require("node:stream")},57975:a=>{"use strict";a.exports=require("node:util")},63033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},66958:(a,b,c)=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"BailoutToCSR",{enumerable:!0,get:function(){return e}});let d=c(49306);function e({reason:a,children:b}){throw Object.defineProperty(new d.BailoutToCSRError(a),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0})}},73024:a=>{"use strict";a.exports=require("node:fs")},73136:a=>{"use strict";a.exports=require("node:url")},76760:a=>{"use strict";a.exports=require("node:path")},77030:a=>{"use strict";a.exports=require("node:net")},77598:a=>{"use strict";a.exports=require("node:crypto")},78474:a=>{"use strict";a.exports=require("node:events")},79443:(a,b,c)=>{Promise.resolve().then(c.bind(c,19378))},80061:(a,b,c)=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{enumerable:!0,get:function(){return j}});let d=c(48249),e=c(67484),f=c(66958),g=c(85264);function h(a){return{default:a&&"default"in a?a.default:a}}let i={loader:()=>Promise.resolve(h(()=>null)),loading:null,ssr:!0},j=function(a){let b={...i,...a},c=(0,e.lazy)(()=>b.loader().then(h)),j=b.loading;function k(a){let h=j?(0,d.jsx)(j,{isLoading:!0,pastDelay:!0,error:null}):null,i=!b.ssr||!!b.loading,k=i?e.Suspense:e.Fragment,l=b.ssr?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(g.PreloadChunks,{moduleIds:b.modules}),(0,d.jsx)(c,{...a})]}):(0,d.jsx)(f.BailoutToCSR,{reason:"next/dynamic",children:(0,d.jsx)(c,{...a})});return(0,d.jsx)(k,{...i?{fallback:h}:{},children:l})}return k.displayName="LoadableComponent",k}},82019:(a,b,c)=>{"use strict";c.d(b,{Il:()=>n,MT:()=>i,NQ:()=>g,X3:()=>o,lk:()=>m,mI:()=>h,pV:()=>k,up:()=>j});var d=c(77598),e=c(65573),f=c(19508);async function g(){let a=await (0,f.mt)(),b=a.paystackSecretKey;if(!b)return null;let c=(a.paystackCurrency||"KES").toUpperCase(),d="USD"===c?1:Number(a.paystackUsdRate);return!Number.isFinite(d)||d<=0?(console.warn(`[paystack] set "1 USD equals" in Admin → Settings to charge in ${c}; online payment is off until then.`),null):{secret:b,currency:c,rate:d,siteUrl:(a.siteUrl??"").replace(/\/+$/,"")}}async function h(){return await g()!==null}function i(a,b){return Math.round(a*b.rate*100)}function j(a,b){return`${b} ${(a/100).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}`}async function k(a){if(a.siteUrl)return a.siteUrl;let b=await (0,e.b3)(),c=b.get("x-forwarded-host")||b.get("host")||"localhost:3000",d=b.get("x-forwarded-proto")||(c.startsWith("localhost")?"http":"https");return`${d}://${c}`}async function l(a,b,c){let d=await fetch(`https://api.paystack.co${b}`,{...c,headers:{Authorization:`Bearer ${a.secret}`,"Content-Type":"application/json",...c?.headers},cache:"no-store"}),e=await d.json().catch(()=>null);if(!d.ok||!e?.status||!e.data)throw Error(`Paystack ${b}: ${e?.message??d.statusText}`);return e.data}async function m(a,b){return(await l(a,"/transaction/initialize",{method:"POST",body:JSON.stringify({email:b.email,amount:b.amountMinor,currency:a.currency,reference:b.reference,callback_url:b.callbackUrl,metadata:b.metadata})})).authorization_url}async function n(a,b){let c=await l(a,`/transaction/verify/${encodeURIComponent(b)}`);return{status:c.status,amount:c.amount,currency:c.currency,id:c.id,channel:c.channel,paidAt:c.paid_at}}function o(a,b,c){if(!b)return!1;let e=(0,d.createHmac)("sha512",c).update(a).digest(),f=Buffer.from(b,"hex");return f.length===e.length&&(0,d.timingSafeEqual)(f,e)}},83610:(a,b,c)=>{"use strict";c.r(b),c.d(b,{"403a8544f082351d609ec52459c6b1e1df026a4323":()=>d.PL,"40693d58d2e0b93e6b0b902db59e613a1eafcc8ada":()=>d.xS,"60190cb9224a8517a522f620c2725fcbb024e02fe9":()=>d.LM,"603c45854880d25345d47842aa5b73772771620552":()=>d.cr,"6054078831706a8aaa2e1259d6d942d0c734a48094":()=>d.y$,"605e549c788ab5347a9e80720101693350a826706c":()=>d.Q6,"60790e10de21513730898ba029b2913ccbe39f66d3":()=>p,"607ebfc1e44b77b81581a690316dd9c31bf8e2ce9a":()=>d.Rg,"60a56b0d46e3209d522eaf5fc2761e27fcb339283d":()=>d.IB,"60bdb15f56a4fa31cd36c422327b60eebdcb3e3e85":()=>d.AH,"60e22a79373d7690cf84f50ac4f73675f83f72e5e4":()=>d.Mk,"70e568d0f65c75588ec2dc63f1bb9db5171e7d03ab":()=>d.fY});var d=c(21920),e=c(95349),f=c(38630),g=c(36042),h=c(83404),i=c(2816),j=c(35444),k=c(89337);let l=`You help job seekers improve the wording of their CV.
Rules:
- Use only facts present in the input. Never invent employers, dates, numbers, qualifications or achievements.
- Plain, confident, professional language. No buzzwords, no first person ("I"), no emojis, no markdown.
- Reply with the rewritten text only, nothing else.`;async function m(){let a=await (0,g.b3)(),b=a.get("x-forwarded-for")?.split(",")[0].trim()||a.get("x-real-ip")||"unknown",c=(await (0,i.Lf)()).collection(i._f.aiUsage);return await c.createIndex({createdAt:1},{expireAfterSeconds:3600}).catch(()=>{}),!(await c.countDocuments({key:`ip:${b}`,createdAt:{$gte:new Date(Date.now()-36e5)}})>=20)&&(await c.insertOne({key:`ip:${b}`,createdAt:new Date}),!0)}function n(a,b=3e3){return"string"==typeof a?a.trim().slice(0,b):""}let o={en:"English",fr:"French",pt:"Portuguese",sw:"Swahili"};async function p(a,b){let[c,d]=await Promise.all([(0,j.lW)(),(0,j.JK)()]),e=await q(a,b,o[d]??"English");return e.ok?e:{ok:!1,message:c(e.message)}}async function q(a,b,c){let d;if(!await (0,h.ak)())return{ok:!1,message:"AI help isn't available right now."};let e=n(b.text),g=n(b.title,120),i=n(b.role,120),j=(b.skills??[]).map(a=>n(a,60)).filter(Boolean).slice(0,20),k=(b.roles??[]).map(a=>n(a,120)).filter(Boolean).slice(0,10);if("summary"===a){if(!e&&!g&&0===k.length)return{ok:!1,message:"Add your job title or some experience first, so there's something to work from."};d=e?`Rewrite this CV profile summary as 2-3 clear sentences.

Target job title: ${g||"not given"}
Skills: ${j.join(", ")||"not given"}

Current summary:
${e}`:`Write a 2-3 sentence CV profile summary from these details only.

Target job title: ${g||"not given"}
Previous roles: ${k.join("; ")||"not given"}
Skills: ${j.join(", ")||"not given"}`}else{if(!e)return{ok:!1,message:"Write a few notes about this job first, then ask AI to polish them."};d=`Rewrite these notes as 3-5 strong CV bullet points for the role "${i||"this job"}". Start each with an action verb. Keep any numbers that are given. Put each bullet on its own line with no bullet symbols.

Notes:
${e}`}try{if(!await m())return{ok:!1,message:"You've used AI help a lot in the last hour. Please try again later."};let{text:b}=await (0,f.Df)({model:await (0,h.yY)("cv"),instructions:`${l}
- Write the result in ${c}.`,prompt:d,maxOutputTokens:400}),e=b.split("\n").map(a=>a.replace(/^\s*(?:[-*•]|\d+[.)])\s*/,"").trim()).filter(Boolean).join("bullets"===a?"\n":" ").replace(/^"|"$/g,"");return e?{ok:!0,text:e}:{ok:!1,message:"The AI didn't return anything. Please try again."}}catch(a){return console.error("[cv-ai] generation failed",a),{ok:!1,message:"AI help is temporarily unavailable. Please try again."}}}(0,k.D)([p]),(0,e.A)(p,"60790e10de21513730898ba029b2913ccbe39f66d3",null)},85264:(a,b,c)=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"PreloadChunks",{enumerable:!0,get:function(){return i}});let d=c(48249),e=c(74429),f=c(29294),g=c(10117),h=c(44217);function i({moduleIds:a}){let b=f.workAsyncStorage.getStore();if(void 0===b)return null;let c=[];if(b.reactLoadableManifest&&a){let d=b.reactLoadableManifest;for(let b of a){if(!d[b])continue;let a=d[b].files;c.push(...a)}}if(0===c.length)return null;let j=(0,h.getAssetTokenQuery)();return(0,d.jsx)(d.Fragment,{children:c.map(a=>{let c=`${b.assetPrefix}/_next/${(0,g.encodeURIPath)(a)}${j}`;return a.endsWith(".css")?(0,d.jsx)("link",{precedence:"dynamic",href:c,rel:"stylesheet",as:"style",nonce:b.nonce},a):((0,e.preload)(c,{as:"script",fetchPriority:"low",nonce:b.nonce}),null)})})}},91043:a=>{"use strict";a.exports=require("@aws-sdk/client-s3")}};var b=require("../../../webpack-runtime.js");b.C(a);var c=b.X(0,[2970,5592,5573,2047,3167,396,4340,3793,3030,1920],()=>b(b.s=22715));module.exports=c})();