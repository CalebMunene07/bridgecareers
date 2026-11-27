(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4877],{283:(e,a,t)=>{"use strict";t.d(a,{i8:()=>o,ne:()=>l,pd:()=>r});let n={AF:"Africa",AS:"Asia",EU:"Europe",NA:"North America",SA:"South America",OC:"Oceania"},i=`Afghanistan|93|AS
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
Zimbabwe|263|AF`.split("\n").map(e=>{let[a,t,i]=e.split("|");return{name:a,dial:`+${t}`,continent:n[i]}}),r=i.map(e=>e.name),s=new Map(i.map(e=>[e.name,e]));function o(e){return s.get(e)}let l=i.map(e=>({value:e.name,label:`${e.name} (${e.dial})`}))},1912:(e,a,t)=>{"use strict";t.d(a,{PricingEditor:()=>u});var n=t(5155),i=t(2115),r=t(9339);let s=(0,r.createServerReference)("6089032090658cac0b3c34835c5504e7f760d3fcf4",r.callServer,void 0,r.findSourceMapURL,"savePricingAction");var o=t(2551),l=t(6480);let m=0,d=e=>({...e,row:m++}),c=[{key:"sameCountry",label:"Within one country"},{key:"sameContinent",label:"Within one continent"},{key:"europeNorthAmerica",label:"Between Europe and North America"},{key:"other",label:"Any other international route"}];function u({pricing:e}){let[a,t,r]=(0,i.useActionState)(s,{ok:!1,message:""}),[m,p]=(0,i.useState)(()=>e.visaFees.map(e=>d({label:e.label,amount:String(e.amount)}))),[h,A]=(0,i.useState)(()=>e.visaTypes.map(e=>d({name:e.name,employment:e.employment}))),[b,x]=(0,i.useState)(()=>Object.fromEntries(c.map(a=>[a.key,String(e.routeFees[a.key])]))),[g,S]=(0,i.useState)(String(e.cvDownloadFee)),[N,y]=(0,i.useState)(e.processingTime),[v,f]=(0,i.useState)(()=>e.paymentMethods.map(d)),[F,w]=(0,i.useState)(e.paymentInstructions),k=e=>a.errors?.[e]?(0,n.jsx)("p",{className:"mt-2 text-xs text-red-600",children:a.errors[e]}):null,E=JSON.stringify({visaFees:m.map(({label:e,amount:a})=>({label:e,amount:a})),visaTypes:h.map(({name:e,employment:a})=>({name:e,employment:a})),routeFees:b,cvDownloadFee:g,processingTime:N,paymentMethods:v.map(({id:e,label:a,note:t,mark:n})=>({id:e,label:a,note:t,mark:n})),paymentInstructions:F}),C=(0,o.A_)(m.map(e=>({label:e.label,amount:Number(e.amount)||0})));return(0,n.jsxs)("form",{action:t,className:"space-y-6",children:[(0,n.jsx)("input",{type:"hidden",name:"pricing",value:E}),(0,n.jsxs)("section",{className:"rounded-2xl bg-white p-6 ring-1 ring-slate-200",children:[(0,n.jsx)("h2",{className:"font-bold text-brand-dark",children:"Visa application fees"}),(0,n.jsx)("p",{className:"mt-1 text-sm text-slate-500",children:"Fixed fees in USD on every visa application. The air ticket booking fee for the route is added on top."}),(0,n.jsxs)("div",{className:"mt-4 space-y-2",children:[m.map(e=>(0,n.jsxs)("div",{className:"flex gap-2",children:[(0,n.jsx)("input",{"aria-label":"Fee name",value:e.label,onChange:a=>p(t=>t.map(t=>t.row===e.row?{...t,label:a.target.value}:t)),placeholder:"e.g. Processing fee",className:l.hF}),(0,n.jsx)("input",{"aria-label":"Amount in USD",type:"number",min:"0",step:"0.01",value:e.amount,onChange:a=>p(t=>t.map(t=>t.row===e.row?{...t,amount:a.target.value}:t)),placeholder:"USD",className:`${l.hF} w-32 shrink-0`}),(0,n.jsx)("button",{type:"button",onClick:()=>p(a=>a.filter(a=>a.row!==e.row)),className:"shrink-0 rounded-md px-2 text-sm font-medium text-red-600 hover:bg-red-50",children:"Remove"})]},e.row)),(0,n.jsxs)("div",{className:"flex flex-wrap items-center justify-between gap-3 pt-1",children:[(0,n.jsx)("button",{type:"button",onClick:()=>p(e=>[...e,d({label:"",amount:""})]),className:"rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-brand ring-1 ring-brand hover:bg-brand hover:text-white",children:"+ Add fee"}),(0,n.jsxs)("p",{className:"text-sm font-semibold text-brand-dark",children:["Visa fees total: USD ",C.toFixed(2)]})]}),k("visaFees")]}),(0,n.jsxs)("label",{className:"mt-5 block text-sm font-medium",children:["Typical processing time",(0,n.jsx)("input",{value:N,onChange:e=>y(e.target.value),placeholder:"e.g. 15 – 20 business days",className:`${l.hF} mt-1`})]})]}),(0,n.jsxs)("section",{className:"rounded-2xl bg-white p-6 ring-1 ring-slate-200",children:[(0,n.jsx)("h2",{className:"font-bold text-brand-dark",children:"Visa types"}),(0,n.jsx)("p",{className:"mt-1 text-sm text-slate-500",children:'The choices in the "Visa type" dropdown on the visa application form. The first one is selected by default. Untick "Asks employment details" for types where applicants shouldn\'t be asked about their job, such as a student visa. Past applications keep the type they were submitted with.'}),(0,n.jsxs)("div",{className:"mt-4 space-y-2",children:[h.map((e,a)=>(0,n.jsxs)("div",{className:"flex flex-wrap items-center gap-2",children:[(0,n.jsx)("input",{"aria-label":"Visa type",value:e.name,onChange:a=>A(t=>t.map(t=>t.row===e.row?{...t,name:a.target.value}:t)),placeholder:"e.g. Work visa",className:`${l.hF} min-w-48 flex-1`}),(0,n.jsxs)("label",{className:"flex shrink-0 items-center gap-2 text-sm text-slate-700",children:[(0,n.jsx)("input",{type:"checkbox",checked:e.employment,onChange:a=>A(t=>t.map(t=>t.row===e.row?{...t,employment:a.target.checked}:t))}),"Asks employment details"]}),(0,n.jsx)("button",{type:"button",disabled:0===a,"aria-label":"Move up",onClick:()=>A(e=>e.map((t,n)=>n===a-1?e[a]:n===a?e[a-1]:t)),className:"shrink-0 rounded-md px-2 text-sm font-medium text-slate-600 hover:bg-slate-100 disabled:opacity-30",children:"↑"}),(0,n.jsx)("button",{type:"button",disabled:a===h.length-1,"aria-label":"Move down",onClick:()=>A(e=>e.map((t,n)=>n===a+1?e[a]:n===a?e[a+1]:t)),className:"shrink-0 rounded-md px-2 text-sm font-medium text-slate-600 hover:bg-slate-100 disabled:opacity-30",children:"↓"}),(0,n.jsx)("button",{type:"button",onClick:()=>A(a=>a.filter(a=>a.row!==e.row)),className:"shrink-0 rounded-md px-2 text-sm font-medium text-red-600 hover:bg-red-50",children:"Remove"})]},e.row)),(0,n.jsx)("button",{type:"button",onClick:()=>A(e=>[...e,d({name:"",employment:!0})]),className:"rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-brand ring-1 ring-brand hover:bg-brand hover:text-white",children:"+ Add visa type"}),k("visaTypes")]})]}),(0,n.jsxs)("section",{className:"rounded-2xl bg-white p-6 ring-1 ring-slate-200",children:[(0,n.jsx)("h2",{className:"font-bold text-brand-dark",children:"Air ticket booking fees"}),(0,n.jsx)("p",{className:"mt-1 text-sm text-slate-500",children:"Service fee in USD by route, quoted on the air ticket form and added to visa applications. The airline fare is quoted separately."}),(0,n.jsx)("div",{className:"mt-4 grid gap-3 sm:grid-cols-2",children:c.map(e=>(0,n.jsxs)("label",{className:"text-sm font-medium",children:[e.label,(0,n.jsx)("input",{type:"number",min:"0",step:"0.01",value:b[e.key],onChange:a=>x(t=>({...t,[e.key]:a.target.value})),className:`${l.hF} mt-1`})]},e.key))}),k("routeFees")]}),(0,n.jsxs)("section",{className:"rounded-2xl bg-white p-6 ring-1 ring-slate-200",children:[(0,n.jsx)("h2",{className:"font-bold text-brand-dark",children:"CV maker"}),(0,n.jsxs)("label",{className:"mt-3 block max-w-xs text-sm font-medium",children:["PDF download price (USD)",(0,n.jsx)("input",{type:"number",min:"0",step:"0.01",value:g,onChange:e=>S(e.target.value),className:`${l.hF} mt-1`})]}),k("cvDownloadFee")]}),(0,n.jsxs)("section",{className:"rounded-2xl bg-white p-6 ring-1 ring-slate-200",children:[(0,n.jsx)("h2",{className:"font-bold text-brand-dark",children:"Payment methods"}),(0,n.jsx)("p",{className:"mt-1 text-sm text-slate-500",children:"The choices applicants pick from on the visa form, CV download and your own forms."}),(0,n.jsxs)("div",{className:"mt-4 space-y-2",children:[v.map(e=>(0,n.jsxs)("div",{className:"grid gap-2 sm:grid-cols-[1fr_1fr_160px_auto]",children:[(0,n.jsx)("input",{"aria-label":"Name",value:e.label,onChange:a=>f(t=>t.map(t=>t.row===e.row?{...t,label:a.target.value}:t)),placeholder:"Name, e.g. Bank transfer",className:l.hF}),(0,n.jsx)("input",{"aria-label":"Note",value:e.note,onChange:a=>f(t=>t.map(t=>t.row===e.row?{...t,note:a.target.value}:t)),placeholder:"Note (optional)",className:l.hF}),(0,n.jsx)("input",{"aria-label":"Badge",value:e.mark,onChange:a=>f(t=>t.map(t=>t.row===e.row?{...t,mark:a.target.value}:t)),placeholder:"Badge, e.g. SWIFT",className:l.hF}),(0,n.jsx)("button",{type:"button",onClick:()=>f(a=>a.filter(a=>a.row!==e.row)),className:"rounded-md px-2 text-sm font-medium text-red-600 hover:bg-red-50",children:"Remove"})]},e.row)),(0,n.jsx)("button",{type:"button",onClick:()=>f(e=>[...e,d({id:"",label:"",note:"",mark:""})]),className:"rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-brand ring-1 ring-brand hover:bg-brand hover:text-white",children:"+ Add payment method"}),k("paymentMethods")]})]}),(0,n.jsxs)("section",{className:"rounded-2xl bg-white p-6 ring-1 ring-slate-200",children:[(0,n.jsx)("h2",{className:"font-bold text-brand-dark",children:"Payment instructions"}),(0,n.jsx)("p",{className:"mt-1 text-sm text-slate-500",children:"Shown on the visa payment step, the air ticket form, the CV download and your own forms (unless a form has its own). For example bank details or how payment links work. Leave empty to hide."}),(0,n.jsx)("textarea",{rows:6,value:F,onChange:e=>w(e.target.value),placeholder:"After we review your application we'll email you a secure payment link.\nBank transfer: Bridge Careers Global, account 0000000, reference = your full name.",className:`${l.hF} mt-3`})]}),(0,n.jsxs)("div",{className:"flex items-center gap-4",children:[(0,n.jsx)("button",{type:"submit",disabled:r,className:"rounded-full bg-brand px-8 py-2.5 font-semibold text-white hover:bg-brand-dark disabled:opacity-60",children:r?"Saving…":"Save pricing"}),(0,n.jsx)(l.nW,{state:a})]})]})}},2551:(e,a,t)=>{"use strict";t.d(a,{$p:()=>d,A_:()=>o,HW:()=>m,J4:()=>r,aO:()=>i,dR:()=>s,wk:()=>l});var n=t(283);let i=e=>e.visaTypes.map(e=>e.name),r=(e,a)=>e.visaTypes.find(e=>e.name===a)?.employment??!0;function s(e){return`USD ${e.toFixed(2)}`}function o(e){return e.reduce((e,a)=>e+a.amount,0)}function l(e,a,t){if(!a||!t)return 0;if(a===t)return e.sameCountry;let i=(0,n.i8)(a)?.continent,r=(0,n.i8)(t)?.continent;return i&&i===r?e.sameContinent:"Europe"===i&&"North America"===r||"North America"===i&&"Europe"===r?e.europeNorthAmerica:e.other}let m="{same} within one country \xb7 {continent} within one continent \xb7 {euna} between Europe and North America \xb7 {other} other international routes";function d(e){let a=e=>`USD ${Number.isInteger(e)?e:e.toFixed(2)}`;return{same:a(e.sameCountry),continent:a(e.sameContinent),euna:a(e.europeNorthAmerica),other:a(e.other)}}},5206:(e,a,t)=>{Promise.resolve().then(t.t.bind(t,8500,23)),Promise.resolve().then(t.bind(t,1912))}},e=>{e.O(0,[8500,7458,8441,3794,7358],()=>e(e.s=5206)),_N_E=e.O()}]);