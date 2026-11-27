(()=>{var a={};a.id=4877,a.ids=[4877],a.modules={3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},8128:a=>{"use strict";a.exports=require("next/dist/server/runtime-reacts.external.js")},10846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},12518:a=>{"use strict";a.exports=require("mongodb")},13173:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>j});var d=c(5735),e=c(63059),f=c.n(e),g=c(5620),h=c(16056),i=c(71384);async function j(){return await (0,g.ZT)(),(0,d.jsxs)("div",{className:"mx-auto max-w-4xl",children:[(0,d.jsx)(f(),{href:"/admin/forms",className:"text-sm text-slate-500 hover:text-brand",children:"← Forms"}),(0,d.jsx)("h1",{className:"mt-2 text-2xl font-bold text-brand-dark",children:"Pricing & payment"}),(0,d.jsx)("p",{className:"mt-1 text-sm text-slate-500",children:"Prices and payment details for the visa, air ticket and CV forms. Fees for forms you create are set on each form. No payment is taken on the site; your team sends a payment link. Past submissions keep the prices they were quoted."}),(0,d.jsx)("div",{className:"mt-6",children:(0,d.jsx)(i.PricingEditor,{pricing:await (0,h.r)()})})]})}},16056:(a,b,c)=>{"use strict";c.d(b,{a:()=>j,r:()=>i});var d=c(91986),e=c(20903),f=c(31211);let g="pricing";async function h(){return(await (0,e.Lf)()).collection(e._f.content)}let i=(0,d.cache)(async()=>{try{let a=await (await h()).findOne({key:g}),b=a?.value??{};return{...f.qS,...b,visaTypes:b.visaTypes?.length?b.visaTypes:f.qS.visaTypes,routeFees:{...f.qS.routeFees,...b.routeFees},paymentMethods:b.paymentMethods?.length?b.paymentMethods:f.qS.paymentMethods}}catch(a){if(a instanceof e.$J)return f.qS;throw a}});async function j(a,b){await (await h()).updateOne({key:g},{$set:{key:g,value:a,updatedAt:new Date,updatedBy:b}},{upsert:!0})}},19121:a=>{"use strict";a.exports=require("next/dist/server/app-render/action-async-storage.external.js")},21820:a=>{"use strict";a.exports=require("os")},28354:a=>{"use strict";a.exports=require("util")},29021:a=>{"use strict";a.exports=require("fs")},29294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},31421:a=>{"use strict";a.exports=require("node:child_process")},33873:a=>{"use strict";a.exports=require("path")},37067:a=>{"use strict";a.exports=require("node:http")},38522:a=>{"use strict";a.exports=require("node:zlib")},40610:a=>{"use strict";a.exports=require("node:dns")},41025:a=>{"use strict";a.exports=require("next/dist/server/app-render/dynamic-access-async-storage.external.js")},41692:a=>{"use strict";a.exports=require("node:tls")},44708:a=>{"use strict";a.exports=require("node:https")},46060:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external.js")},46557:(a,b,c)=>{"use strict";c.r(b),c.d(b,{__next_app__:()=>u,handler:()=>w,routeModule:()=>v});var d=c(21635),e=c(86315),f=c(1020),g=c(61287),h={};for(let a in g)0>["default","__next_app__","routeModule","handler"].indexOf(a)&&(h[a]=()=>g[a]);c.d(b,h);let i=(0,d.p)(()=>Promise.resolve().then(c.bind(c,95185))),j=(0,d.p)(()=>Promise.resolve().then(c.t.bind(c,95547,23))),k=(0,d.p)(()=>Promise.resolve().then(c.bind(c,8979))),l=(0,d.p)(()=>Promise.resolve().then(c.t.bind(c,45270,23))),m=(0,d.p)(()=>Promise.resolve().then(c.t.bind(c,28193,23))),n=(0,d.p)(()=>Promise.resolve().then(c.t.bind(c,95547,23))),o=(0,d.p)(()=>Promise.resolve().then(c.bind(c,38915))),p=(0,d.p)(()=>Promise.resolve().then(c.t.bind(c,95547,23))),q=(0,d.p)(()=>Promise.resolve().then(c.t.bind(c,95547,23))),r=(0,d.p)(()=>Promise.resolve().then(c.t.bind(c,95547,23))),s={children:["",{children:["admin",{children:["(panel)",{children:["forms",{children:["pricing",{children:["__PAGE__",{},{page:[(0,d.p)(()=>Promise.resolve().then(c.bind(c,13173))),"/home/classicmster/Documents/Projects/bridgecareers/src/app/admin/(panel)/forms/pricing/page.tsx"]}]},{"global-error":[r,"next/dist/client/components/builtin/global-error.js"]},[]]},{"global-error":[q,"next/dist/client/components/builtin/global-error.js"]},[]]},{layout:[o,"/home/classicmster/Documents/Projects/bridgecareers/src/app/admin/(panel)/layout.tsx"],"global-error":[p,"next/dist/client/components/builtin/global-error.js"]},[]]},{"global-error":[n,"next/dist/client/components/builtin/global-error.js"],metadata:{icon:[async a=>(await (0,d.p)(()=>Promise.resolve().then(c.bind(c,70440)))()).default(a),async a=>(await (0,d.p)(()=>Promise.resolve().then(c.bind(c,78162)))()).default(a)],apple:[async a=>(await (0,d.p)(()=>Promise.resolve().then(c.bind(c,94650)))()).default(a)],openGraph:[],twitter:[],manifest:"/manifest.webmanifest"}},[]]},{layout:[i,"/home/classicmster/Documents/Projects/bridgecareers/src/app/layout.tsx"],"global-error":[j,"next/dist/client/components/builtin/global-error.js"],"not-found":[k,"/home/classicmster/Documents/Projects/bridgecareers/src/app/not-found.tsx"],forbidden:[l,"next/dist/client/components/builtin/forbidden.js"],unauthorized:[m,"next/dist/client/components/builtin/unauthorized.js"],metadata:{icon:[async a=>(await (0,d.p)(()=>Promise.resolve().then(c.bind(c,70440)))()).default(a),async a=>(await (0,d.p)(()=>Promise.resolve().then(c.bind(c,78162)))()).default(a)],apple:[async a=>(await (0,d.p)(()=>Promise.resolve().then(c.bind(c,94650)))()).default(a)],openGraph:[],twitter:[],manifest:"/manifest.webmanifest"}},[]]}.children,t=(0,e.H)({tree:s,page:"/admin/(panel)/forms/pricing/page",pathname:"/admin/forms/pricing",require:c,loadChunk:()=>Promise.resolve(),interopDefault:f.T}),u=t.__next_app__,v=t.routeModule,w=t.handler},48161:a=>{"use strict";a.exports=require("node:os")},51455:a=>{"use strict";a.exports=require("node:fs/promises")},53781:(a,b,c)=>{"use strict";c.d(b,{$p:()=>k,A_:()=>h,HW:()=>j,J4:()=>f,aO:()=>e,dR:()=>g,wk:()=>i});var d=c(62477);let e=a=>a.visaTypes.map(a=>a.name),f=(a,b)=>a.visaTypes.find(a=>a.name===b)?.employment??!0;function g(a){return`USD ${a.toFixed(2)}`}function h(a){return a.reduce((a,b)=>a+b.amount,0)}function i(a,b,c){if(!b||!c)return 0;if(b===c)return a.sameCountry;let e=(0,d.i8)(b)?.continent,f=(0,d.i8)(c)?.continent;return e&&e===f?a.sameContinent:"Europe"===e&&"North America"===f||"North America"===e&&"Europe"===f?a.europeNorthAmerica:a.other}let j="{same} within one country \xb7 {continent} within one continent \xb7 {euna} between Europe and North America \xb7 {other} other international routes";function k(a){let b=a=>`USD ${Number.isInteger(a)?a:a.toFixed(2)}`;return{same:b(a.sameCountry),continent:b(a.sameContinent),euna:b(a.europeNorthAmerica),other:b(a.other)}}},55511:a=>{"use strict";a.exports=require("crypto")},57075:a=>{"use strict";a.exports=require("node:stream")},57975:a=>{"use strict";a.exports=require("node:util")},62477:(a,b,c)=>{"use strict";c.d(b,{i8:()=>h,ne:()=>i,pd:()=>f});let d={AF:"Africa",AS:"Asia",EU:"Europe",NA:"North America",SA:"South America",OC:"Oceania"},e=`Afghanistan|93|AS
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
Zimbabwe|263|AF`.split("\n").map(a=>{let[b,c,e]=a.split("|");return{name:b,dial:`+${c}`,continent:d[e]}}),f=e.map(a=>a.name),g=new Map(e.map(a=>[a.name,a]));function h(a){return g.get(a)}let i=e.map(a=>({value:a.name,label:`${a.name} (${a.dial})`}))},63033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},71384:(a,b,c)=>{"use strict";c.d(b,{PricingEditor:()=>d});let d=(0,c(77943).registerClientReference)(function(){throw Error("Attempted to call PricingEditor() from the server but PricingEditor is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/classicmster/Documents/Projects/bridgecareers/src/app/admin/(panel)/forms/pricing/pricing-editor.tsx","PricingEditor")},73024:a=>{"use strict";a.exports=require("node:fs")},73136:a=>{"use strict";a.exports=require("node:url")},76760:a=>{"use strict";a.exports=require("node:path")},77030:a=>{"use strict";a.exports=require("node:net")},77474:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,23318,23)),Promise.resolve().then(c.bind(c,71384))},77598:a=>{"use strict";a.exports=require("node:crypto")},78474:a=>{"use strict";a.exports=require("node:events")},86039:(a,b,c)=>{"use strict";c.d(b,{PricingEditor:()=>m});var d=c(48249),e=c(67484),f=c(99829);let g=(0,f.createServerReference)("6089032090658cac0b3c34835c5504e7f760d3fcf4",f.callServer,void 0,f.findSourceMapURL,"savePricingAction");var h=c(53781),i=c(84400);let j=0,k=a=>({...a,row:j++}),l=[{key:"sameCountry",label:"Within one country"},{key:"sameContinent",label:"Within one continent"},{key:"europeNorthAmerica",label:"Between Europe and North America"},{key:"other",label:"Any other international route"}];function m({pricing:a}){let[b,c,f]=(0,e.useActionState)(g,{ok:!1,message:""}),[j,n]=(0,e.useState)(()=>a.visaFees.map(a=>k({label:a.label,amount:String(a.amount)}))),[o,p]=(0,e.useState)(()=>a.visaTypes.map(a=>k({name:a.name,employment:a.employment}))),[q,r]=(0,e.useState)(()=>Object.fromEntries(l.map(b=>[b.key,String(a.routeFees[b.key])]))),[s,t]=(0,e.useState)(String(a.cvDownloadFee)),[u,v]=(0,e.useState)(a.processingTime),[w,x]=(0,e.useState)(()=>a.paymentMethods.map(k)),[y,z]=(0,e.useState)(a.paymentInstructions),A=a=>b.errors?.[a]?(0,d.jsx)("p",{className:"mt-2 text-xs text-red-600",children:b.errors[a]}):null,B=JSON.stringify({visaFees:j.map(({label:a,amount:b})=>({label:a,amount:b})),visaTypes:o.map(({name:a,employment:b})=>({name:a,employment:b})),routeFees:q,cvDownloadFee:s,processingTime:u,paymentMethods:w.map(({id:a,label:b,note:c,mark:d})=>({id:a,label:b,note:c,mark:d})),paymentInstructions:y}),C=(0,h.A_)(j.map(a=>({label:a.label,amount:Number(a.amount)||0})));return(0,d.jsxs)("form",{action:c,className:"space-y-6",children:[(0,d.jsx)("input",{type:"hidden",name:"pricing",value:B}),(0,d.jsxs)("section",{className:"rounded-2xl bg-white p-6 ring-1 ring-slate-200",children:[(0,d.jsx)("h2",{className:"font-bold text-brand-dark",children:"Visa application fees"}),(0,d.jsx)("p",{className:"mt-1 text-sm text-slate-500",children:"Fixed fees in USD on every visa application. The air ticket booking fee for the route is added on top."}),(0,d.jsxs)("div",{className:"mt-4 space-y-2",children:[j.map(a=>(0,d.jsxs)("div",{className:"flex gap-2",children:[(0,d.jsx)("input",{"aria-label":"Fee name",value:a.label,onChange:b=>n(c=>c.map(c=>c.row===a.row?{...c,label:b.target.value}:c)),placeholder:"e.g. Processing fee",className:i.hF}),(0,d.jsx)("input",{"aria-label":"Amount in USD",type:"number",min:"0",step:"0.01",value:a.amount,onChange:b=>n(c=>c.map(c=>c.row===a.row?{...c,amount:b.target.value}:c)),placeholder:"USD",className:`${i.hF} w-32 shrink-0`}),(0,d.jsx)("button",{type:"button",onClick:()=>n(b=>b.filter(b=>b.row!==a.row)),className:"shrink-0 rounded-md px-2 text-sm font-medium text-red-600 hover:bg-red-50",children:"Remove"})]},a.row)),(0,d.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-3 pt-1",children:[(0,d.jsx)("button",{type:"button",onClick:()=>n(a=>[...a,k({label:"",amount:""})]),className:"rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-brand ring-1 ring-brand hover:bg-brand hover:text-white",children:"+ Add fee"}),(0,d.jsxs)("p",{className:"text-sm font-semibold text-brand-dark",children:["Visa fees total: USD ",C.toFixed(2)]})]}),A("visaFees")]}),(0,d.jsxs)("label",{className:"mt-5 block text-sm font-medium",children:["Typical processing time",(0,d.jsx)("input",{value:u,onChange:a=>v(a.target.value),placeholder:"e.g. 15 – 20 business days",className:`${i.hF} mt-1`})]})]}),(0,d.jsxs)("section",{className:"rounded-2xl bg-white p-6 ring-1 ring-slate-200",children:[(0,d.jsx)("h2",{className:"font-bold text-brand-dark",children:"Visa types"}),(0,d.jsx)("p",{className:"mt-1 text-sm text-slate-500",children:'The choices in the "Visa type" dropdown on the visa application form. The first one is selected by default. Untick "Asks employment details" for types where applicants shouldn\'t be asked about their job, such as a student visa. Past applications keep the type they were submitted with.'}),(0,d.jsxs)("div",{className:"mt-4 space-y-2",children:[o.map((a,b)=>(0,d.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,d.jsx)("input",{"aria-label":"Visa type",value:a.name,onChange:b=>p(c=>c.map(c=>c.row===a.row?{...c,name:b.target.value}:c)),placeholder:"e.g. Work visa",className:`${i.hF} min-w-48 flex-1`}),(0,d.jsxs)("label",{className:"flex shrink-0 items-center gap-2 text-sm text-slate-700",children:[(0,d.jsx)("input",{type:"checkbox",checked:a.employment,onChange:b=>p(c=>c.map(c=>c.row===a.row?{...c,employment:b.target.checked}:c))}),"Asks employment details"]}),(0,d.jsx)("button",{type:"button",disabled:0===b,"aria-label":"Move up",onClick:()=>p(a=>a.map((c,d)=>d===b-1?a[b]:d===b?a[b-1]:c)),className:"shrink-0 rounded-md px-2 text-sm font-medium text-slate-600 hover:bg-slate-100 disabled:opacity-30",children:"↑"}),(0,d.jsx)("button",{type:"button",disabled:b===o.length-1,"aria-label":"Move down",onClick:()=>p(a=>a.map((c,d)=>d===b+1?a[b]:d===b?a[b+1]:c)),className:"shrink-0 rounded-md px-2 text-sm font-medium text-slate-600 hover:bg-slate-100 disabled:opacity-30",children:"↓"}),(0,d.jsx)("button",{type:"button",onClick:()=>p(b=>b.filter(b=>b.row!==a.row)),className:"shrink-0 rounded-md px-2 text-sm font-medium text-red-600 hover:bg-red-50",children:"Remove"})]},a.row)),(0,d.jsx)("button",{type:"button",onClick:()=>p(a=>[...a,k({name:"",employment:!0})]),className:"rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-brand ring-1 ring-brand hover:bg-brand hover:text-white",children:"+ Add visa type"}),A("visaTypes")]})]}),(0,d.jsxs)("section",{className:"rounded-2xl bg-white p-6 ring-1 ring-slate-200",children:[(0,d.jsx)("h2",{className:"font-bold text-brand-dark",children:"Air ticket booking fees"}),(0,d.jsx)("p",{className:"mt-1 text-sm text-slate-500",children:"Service fee in USD by route, quoted on the air ticket form and added to visa applications. The airline fare is quoted separately."}),(0,d.jsx)("div",{className:"mt-4 grid gap-3 sm:grid-cols-2",children:l.map(a=>(0,d.jsxs)("label",{className:"text-sm font-medium",children:[a.label,(0,d.jsx)("input",{type:"number",min:"0",step:"0.01",value:q[a.key],onChange:b=>r(c=>({...c,[a.key]:b.target.value})),className:`${i.hF} mt-1`})]},a.key))}),A("routeFees")]}),(0,d.jsxs)("section",{className:"rounded-2xl bg-white p-6 ring-1 ring-slate-200",children:[(0,d.jsx)("h2",{className:"font-bold text-brand-dark",children:"CV maker"}),(0,d.jsxs)("label",{className:"mt-3 block max-w-xs text-sm font-medium",children:["PDF download price (USD)",(0,d.jsx)("input",{type:"number",min:"0",step:"0.01",value:s,onChange:a=>t(a.target.value),className:`${i.hF} mt-1`})]}),A("cvDownloadFee")]}),(0,d.jsxs)("section",{className:"rounded-2xl bg-white p-6 ring-1 ring-slate-200",children:[(0,d.jsx)("h2",{className:"font-bold text-brand-dark",children:"Payment methods"}),(0,d.jsx)("p",{className:"mt-1 text-sm text-slate-500",children:"The choices applicants pick from on the visa form, CV download and your own forms."}),(0,d.jsxs)("div",{className:"mt-4 space-y-2",children:[w.map(a=>(0,d.jsxs)("div",{className:"grid gap-2 sm:grid-cols-[1fr_1fr_160px_auto]",children:[(0,d.jsx)("input",{"aria-label":"Name",value:a.label,onChange:b=>x(c=>c.map(c=>c.row===a.row?{...c,label:b.target.value}:c)),placeholder:"Name, e.g. Bank transfer",className:i.hF}),(0,d.jsx)("input",{"aria-label":"Note",value:a.note,onChange:b=>x(c=>c.map(c=>c.row===a.row?{...c,note:b.target.value}:c)),placeholder:"Note (optional)",className:i.hF}),(0,d.jsx)("input",{"aria-label":"Badge",value:a.mark,onChange:b=>x(c=>c.map(c=>c.row===a.row?{...c,mark:b.target.value}:c)),placeholder:"Badge, e.g. SWIFT",className:i.hF}),(0,d.jsx)("button",{type:"button",onClick:()=>x(b=>b.filter(b=>b.row!==a.row)),className:"rounded-md px-2 text-sm font-medium text-red-600 hover:bg-red-50",children:"Remove"})]},a.row)),(0,d.jsx)("button",{type:"button",onClick:()=>x(a=>[...a,k({id:"",label:"",note:"",mark:""})]),className:"rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-brand ring-1 ring-brand hover:bg-brand hover:text-white",children:"+ Add payment method"}),A("paymentMethods")]})]}),(0,d.jsxs)("section",{className:"rounded-2xl bg-white p-6 ring-1 ring-slate-200",children:[(0,d.jsx)("h2",{className:"font-bold text-brand-dark",children:"Payment instructions"}),(0,d.jsx)("p",{className:"mt-1 text-sm text-slate-500",children:"Shown on the visa payment step, the air ticket form, the CV download and your own forms (unless a form has its own). For example bank details or how payment links work. Leave empty to hide."}),(0,d.jsx)("textarea",{rows:6,value:y,onChange:a=>z(a.target.value),placeholder:"After we review your application we'll email you a secure payment link.\nBank transfer: Bridge Careers Global, account 0000000, reference = your full name.",className:`${i.hF} mt-3`})]}),(0,d.jsxs)("div",{className:"flex items-center gap-4",children:[(0,d.jsx)("button",{type:"submit",disabled:f,className:"rounded-full bg-brand px-8 py-2.5 font-semibold text-white hover:bg-brand-dark disabled:opacity-60",children:f?"Saving…":"Save pricing"}),(0,d.jsx)(i.nW,{state:b})]})]})}},91043:a=>{"use strict";a.exports=require("@aws-sdk/client-s3")},95626:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,2116,23)),Promise.resolve().then(c.bind(c,86039))}};var b=require("../../../../../webpack-runtime.js");b.C(a);var c=b.X(0,[2970,5592,5573,2047,3167,396,5851,1890,8916,4340,3793,3030,1920,5185,1547,5953,9803,4400,4926],()=>b(b.s=46557));module.exports=c})();