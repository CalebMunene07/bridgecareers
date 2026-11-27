"use strict";exports.id=5953,exports.ids=[5953],exports.modules={24384:(a,b,c)=>{c.d(b,{U5:()=>l,bu:()=>j,jc:()=>m,u_:()=>k});var d=c(77598),e=c(91043),f=c(12518),g=c(19508);let h={"application/pdf":"pdf","application/msword":"doc","application/vnd.openxmlformats-officedocument.wordprocessingml.document":"docx","image/jpeg":"jpg","image/png":"png","image/webp":"webp"};async function i(){let a=await (0,g.mt)();return a.r2AccountId&&a.r2AccessKeyId&&a.r2SecretAccessKey&&a.r2PrivateBucket?{client:new e.S3Client({region:"auto",endpoint:`https://${a.r2AccountId}.r2.cloudflarestorage.com`,credentials:{accessKeyId:a.r2AccessKeyId,secretAccessKey:a.r2SecretAccessKey}}),bucket:a.r2PrivateBucket}:null}async function j(a){return k(a,"cvs")}async function k(a,b){let c=Buffer.from(await a.arrayBuffer()),g={name:a.name.slice(0,200),type:a.type,size:a.size},j=await i();if(!j)return{...g,storage:"mongo",data:new f.Binary(c)};let k=`${b}/${new Date().toISOString().slice(0,7)}/${(0,d.randomUUID)()}.${h[a.type]??"bin"}`;return await j.client.send(new e.PutObjectCommand({Bucket:j.bucket,Key:k,Body:c,ContentType:a.type,CacheControl:"private, no-store"})),{...g,storage:"r2",key:k}}async function l(a){if("r2"===a.storage){let b=await i();if(!b)return null;let c=await b.client.send(new e.GetObjectCommand({Bucket:b.bucket,Key:a.key}));return c.Body?Buffer.from(await c.Body.transformToByteArray()):null}return a.data?Buffer.from(a.data.buffer):null}async function m(a){if(a?.storage!=="r2")return;let b=await i();b&&await b.client.send(new e.DeleteObjectCommand({Bucket:b.bucket,Key:a.key}))}},29546:(a,b,c)=>{c.d(b,{S$:()=>k,W7:()=>q,XX:()=>n,dp:()=>h,iN:()=>o,ip:()=>j,mX:()=>i,nD:()=>p,p7:()=>m,qK:()=>l});var d=c(20903),e=c(59137);function f(a){return{slug:a.slug,title:a.title,company:a.company,location:a.location,country:a.country||void 0,city:a.city||void 0,type:a.type,industry:a.industry,salary:a.salary,posted:a.posted,closes:a.closes||void 0,summary:a.summary,responsibilities:a.responsibilities??[],requirements:a.requirements??[],published:a.published??!0}}async function g(){return(await (0,d.Lf)()).collection(d._f.jobs)}async function h(){let a=(0,e.X2)();try{return(await (await g()).find({published:{$ne:!1},$or:[{closes:{$exists:!1}},{closes:null},{closes:""},{closes:{$gte:a}}]}).sort({posted:-1}).toArray()).map(f)}catch(b){if(b instanceof d.$J)return e.DC.filter(b=>(0,e.nT)(b,a));throw b}}async function i(a){return(await h()).find(b=>b.slug===a)}async function j(a){try{let b=await (await g()).findOne({slug:a,published:{$ne:!1}});return b?f(b):void 0}catch(b){if(b instanceof d.$J)return e.DC.find(b=>b.slug===a);throw b}}async function k(){return(await (await g()).find().sort({posted:-1}).toArray()).map(f)}async function l(a){let b=await (await g()).findOne({slug:a});return b?f(b):void 0}async function m(a,b){let c=await g(),d=new Date;await c.updateOne({slug:b??a.slug},{$set:{...a,updatedAt:d},$setOnInsert:{createdAt:d}},{upsert:!0})}async function n(a){await (await g()).deleteOne({slug:a})}async function o(a){return await (await g()).countDocuments({slug:a},{limit:1})>0}async function p(a,b){for(let c=1;;c++){let d=1===c?a:`${a}-${c}`;if(d===b||!await o(d))return d}}async function q(){let a=await g(),b=0;for(let c of e.DC)b+=(await a.updateOne({slug:c.slug},{$setOnInsert:{...c,published:!0,createdAt:new Date}},{upsert:!0})).upsertedCount;return b}},31211:(a,b,c)=>{c.d(b,{A_:()=>i,HW:()=>k,J4:()=>g,NU:()=>l,aO:()=>f,dR:()=>h,qS:()=>e,wk:()=>j});var d=c(44359);let e={visaFees:[{label:"Processing fee",amount:50}],visaTypes:[{name:"Work visa",employment:!0},{name:"Skilled worker visa",employment:!0},{name:"Seasonal work visa",employment:!0},{name:"Care visa",employment:!0},{name:"Student visa",employment:!1}],routeFees:{sameCountry:15,sameContinent:25,europeNorthAmerica:45,other:60},processingTime:"15 – 20 business days",cvDownloadFee:50,paymentMethods:[{id:"Card",label:"Visa card",note:"Credit / Debit",mark:"VISA \xb7 MC \xb7 AMEX"},{id:"Skrill",label:"Skrill",note:"",mark:"SKRILL"},{id:"Neteller",label:"Neteller",note:"",mark:"NETELLER"}],paymentInstructions:""},f=a=>a.visaTypes.map(a=>a.name),g=(a,b)=>a.visaTypes.find(a=>a.name===b)?.employment??!0;function h(a){return`USD ${a.toFixed(2)}`}function i(a){return a.reduce((a,b)=>a+b.amount,0)}function j(a,b,c){if(!b||!c)return 0;if(b===c)return a.sameCountry;let e=(0,d.i8)(b)?.continent,f=(0,d.i8)(c)?.continent;return e&&e===f?a.sameContinent:"Europe"===e&&"North America"===f||"North America"===e&&"Europe"===f?a.europeNorthAmerica:a.other}let k="{same} within one country \xb7 {continent} within one continent \xb7 {euna} between Europe and North America \xb7 {other} other international routes";function l(a){return[...a.visaFees.map(a=>a.label),...a.visaTypes.map(a=>a.name),a.processingTime,...a.paymentMethods.flatMap(a=>[a.label,a.note]),a.paymentInstructions].filter(Boolean)}},44359:(a,b,c)=>{c.d(b,{i8:()=>h,pd:()=>f});let d={AF:"Africa",AS:"Asia",EU:"Europe",NA:"North America",SA:"South America",OC:"Oceania"},e=`Afghanistan|93|AS
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
Zimbabwe|263|AF`.split("\n").map(a=>{let[b,c,e]=a.split("|");return{name:b,dial:`+${c}`,continent:d[e]}}),f=e.map(a=>a.name),g=new Map(e.map(a=>[a.name,a]));function h(a){return g.get(a)}e.map(a=>({value:a.name,label:`${a.name} (${a.dial})`}))},45138:(a,b,c)=>{function d(a){return a.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,80)}function e(a){return String(a??"").split("\n").map(a=>a.trim()).filter(Boolean)}function f(a){return/^\/(?!\/)[^\s]*$/.test(a)||/^https?:\/\/[^\s]+$/.test(a)}c.d(b,{Mn:()=>e,Yv:()=>d,vJ:()=>f})},59137:(a,b,c)=>{c.d(b,{DC:()=>f,Ju:()=>j,LV:()=>e,NX:()=>i,X2:()=>l,ah:()=>g,hS:()=>p,j$:()=>h,nT:()=>m,uX:()=>n});var d=c(45138);let e=["Permanent","Temporary","Contract"],f=[{slug:"registered-nurse-lusaka",title:"Registered Nurse",company:"Private hospital group",location:"Lusaka, Zambia",type:"Permanent",industry:"healthcare",salary:"Competitive + benefits",posted:"2026-09-29",summary:"Join a growing private hospital providing high-quality inpatient and outpatient care.",responsibilities:["Deliver safe, patient-centred nursing care on a medical ward","Administer medication and monitor patient progress","Work closely with doctors and allied health professionals","Maintain accurate clinical records"],requirements:["Registered with the national nursing council","At least 2 years' post-qualification experience","Strong communication and teamwork skills"]},{slug:"software-engineer-remote",title:"Full-Stack Software Engineer",company:"Fintech scale-up",location:"Remote",type:"Permanent",industry:"technology",salary:"$45,000 – $65,000",posted:"2026-09-30",summary:"Build customer-facing payment products used by thousands of small businesses.",responsibilities:["Design and ship features across the web app and APIs","Write tests and review teammates' code","Work with product and design to shape the roadmap"],requirements:["3+ years with TypeScript, React and Node.js","Experience with relational databases","Comfortable working in a remote, async team"]},{slug:"warehouse-operative-johannesburg",title:"Warehouse Operative",company:"National distribution centre",location:"Johannesburg, South Africa",type:"Temporary",industry:"logistics",salary:"Hourly rate + overtime",posted:"2026-10-01",summary:"Immediate starts for picking, packing and dispatch during the peak season.",responsibilities:["Pick and pack orders accurately using handheld scanners","Load and unload deliveries safely","Keep work areas clean and organised"],requirements:["Able to work shifts including weekends","Previous warehouse experience is a plus","Good attention to detail"]},{slug:"accountant-london",title:"Management Accountant",company:"Professional services firm",location:"London, United Kingdom",type:"Permanent",industry:"finance",salary:"\xa350,000 – \xa358,000",posted:"2026-09-24",summary:"Own month-end reporting and support budgeting for a growing advisory business.",responsibilities:["Prepare monthly management accounts and variance analysis","Support annual budgeting and quarterly forecasts","Improve reporting processes and controls"],requirements:["ACCA, CIMA or ACA qualified (or finalist)","Strong Excel skills","Experience in a services business preferred"]},{slug:"civil-engineer-contract",title:"Civil Engineer",company:"Infrastructure contractor",location:"Ndola, Zambia",type:"Contract",industry:"engineering",salary:"Day rate negotiable",posted:"2026-09-20",summary:"12-month contract on a regional road rehabilitation project.",responsibilities:["Supervise site works against design and specification","Coordinate subcontractors and materials","Produce progress and quality reports"],requirements:["Degree in civil engineering","5+ years on roads or infrastructure projects","Registered with the engineering institution"]},{slug:"sous-chef-cape-town",title:"Sous Chef",company:"Boutique hotel",location:"Cape Town, South Africa",type:"Permanent",industry:"hospitality",salary:"Competitive + meals",posted:"2026-09-27",summary:"Help lead a small, creative kitchen team in a well-reviewed hotel restaurant.",responsibilities:["Run the pass and lead service in the head chef's absence","Train and mentor junior chefs","Manage stock, ordering and food safety records"],requirements:["Previous sous chef or senior CDP experience","Food safety certification","Calm under pressure"]},{slug:"site-manager-construction",title:"Site Manager",company:"Residential developer",location:"Lusaka, Zambia",type:"Contract",industry:"construction",salary:"Competitive",posted:"2026-09-18",summary:"Lead day-to-day delivery of a 60-unit residential development.",responsibilities:["Manage site teams and subcontractors","Ensure health and safety compliance","Track programme and report to the project manager"],requirements:["Proven site management experience","Health and safety qualification","Strong planning skills"]},{slug:"machine-operator-temp",title:"Machine Operator",company:"Food manufacturer",location:"Kitwe, Zambia",type:"Temporary",industry:"manufacturing",salary:"Hourly rate",posted:"2026-10-02",summary:"Operate packaging lines in a modern food production facility.",responsibilities:["Set up and run packaging machinery","Carry out quality checks during production","Report faults and support maintenance"],requirements:["Experience in a production environment","Willing to work rotating shifts","Good hygiene and safety awareness"]},{slug:"store-manager-retail",title:"Store Manager",company:"Fashion retailer",location:"Johannesburg, South Africa",type:"Permanent",industry:"retail",salary:"Base + performance bonus",posted:"2026-09-22",summary:"Lead a high-footfall store and a team of 20 sales associates.",responsibilities:["Hit sales and margin targets","Recruit, coach and schedule the store team","Keep visual standards and stock levels on point"],requirements:["2+ years managing a retail store","Commercial mindset","Strong people leadership"]},{slug:"maths-teacher",title:"Secondary Maths Teacher",company:"International school",location:"Lusaka, Zambia",type:"Permanent",industry:"education",salary:"Competitive + housing allowance",posted:"2026-09-15",summary:"Teach IGCSE and A-level mathematics in a supportive international school.",responsibilities:["Plan and deliver engaging maths lessons","Assess and report on student progress","Contribute to extracurricular activities"],requirements:["Teaching qualification and maths degree","Experience with IGCSE or A-level curricula","Passion for student development"]},{slug:"solar-technician",title:"Solar PV Technician",company:"Renewable energy installer",location:"Livingstone, Zambia",type:"Contract",industry:"energy",salary:"Monthly rate",posted:"2026-09-28",summary:"Install and commission solar systems for commercial and residential clients.",responsibilities:["Install PV panels, inverters and batteries","Test and commission systems","Diagnose and repair faults"],requirements:["Electrical trade qualification","Hands-on solar installation experience","Valid driver's licence"]},{slug:"office-administrator",title:"Office Administrator",company:"Logistics company",location:"London, United Kingdom",type:"Temporary",industry:"office",salary:"\xa314 – \xa316 per hour",posted:"2026-10-01",summary:"Three-month cover supporting a busy operations office.",responsibilities:["Manage the reception desk and incoming calls","Process invoices and update spreadsheets","Coordinate meetings and diaries"],requirements:["Previous office or admin experience","Confident with Microsoft Office","Friendly and organised"]}];function g(a){if(a.country)return a.country;let b=a.location.split(",").map(a=>a.trim()).filter(Boolean);return b[b.length-1]??""}function h(a,b){return a&&"Remote"!==b?`${a}, ${b}`:b}function i(a,b,c){return(0,d.Yv)(`${a} ${"Remote"===c?"remote":b||c}`)}function j(a,b){let c=b.q?.trim().toLowerCase(),d=b.location?.trim().toLowerCase();return a.filter(a=>(!c||!!`${a.title} ${a.summary} ${a.company}`.toLowerCase().includes(c))&&(!d||g(a).toLowerCase()===d||!!a.location.toLowerCase().includes(d))&&(!b.type||a.type===b.type)&&(!b.industry||a.industry===b.industry)).sort((a,b)=>b.posted.localeCompare(a.posted))}let k=process.env.SITE_TIMEZONE||"Africa/Lusaka";function l(a=new Date){try{return new Intl.DateTimeFormat("en-CA",{timeZone:k,year:"numeric",month:"2-digit",day:"2-digit"}).format(a)}catch{return a.toISOString().slice(0,10)}}function m(a,b=l()){return!a.closes||a.closes>=b}function n(a,b=l()){return a.closes?Math.round((Date.parse(a.closes)-Date.parse(b))/864e5):null}let o={en:"en-GB",fr:"fr-FR",pt:"pt-PT",sw:"sw-KE"};function p(a,b="en"){return new Date(a).toLocaleDateString(o[b]??"en-GB",{day:"numeric",month:"short",year:"numeric"})}},74700:(a,b,c)=>{c.d(b,{D8:()=>m,He:()=>j,Tf:()=>h,U_:()=>k,XJ:()=>g,cA:()=>f,dR:()=>d.dR,hR:()=>l,j7:()=>i,uC:()=>e});var d=c(31211);let e={Canada:["Caregiving","Welding","CNA","Nursing","Cleaning","Farm work","Receptionist","Supermarket attendant","Cruise ship jobs"],"United States":["Caregiving","Welding","CNA","Nursing","Cleaning","Farm work","Receptionist","Supermarket attendant","Cruise ship jobs"],"United Kingdom":["Caregiving","Welding","CNA","Nursing","Cleaning","Farm work","Receptionist","Supermarket attendant","Cruise ship jobs"],Germany:["Au pair","Cleaning","Housekeeping","Waiter/waitress","Farm work","Nursing"],Luxembourg:["Caregiving","Cleaning","Welding","Driving","Nursing","Housekeeping","Waiter/waitress"],Netherlands:["Au pair","Cleaning","Housekeeping","Waiter/waitress","Farm work","Nursing"],Finland:["Caregiving","Cleaning","Housekeeping","Nursing","Farm work","Welding"],Turkey:["Nanny","Cleaning","Housekeeping","Farm work","Driving","Riders","Factory work","Welding"],Australia:["Farming","Teaching","Caregiving","Nursing","Driving","Construction","Clinical medicine"],"New Zealand":["Farming","Teaching","Caregiving","Nursing","Driving","Construction","Hospitality"]};Object.keys(e);let f=["employment","occupation","employer","income"],g=["1","2","3","4+"],h=["Female","Male","Non-binary","Prefer not to say"],i=["Employed","Self-employed","Student","Between roles","Retired"],j=["Economy","Premium economy","Business"],k=[{key:"passport",label:"Passport bio page",required:!0},{key:"cv",label:"Curriculum vitae / resume",required:!0},{key:"certificates",label:"Relevant certificates",required:!1},{key:"photo",label:"Passport-sized photograph",required:!0}],l=4194304,m=["application/pdf","image/jpeg","image/png","image/webp"]},87064:(a,b,c)=>{c.d(b,{Lf:()=>l,ZM:()=>m,jY:()=>j,sW:()=>n});var d=c(15851),e=c(19508),f=c(53388),g=c(85185);let h=null;async function i(){let a=await (0,e.mt)();if(!a.smtpHost||!a.smtpFrom)return null;let b=Number(a.smtpPort)||587,c=[a.smtpHost,b,a.smtpUser,a.smtpPass].join("|");return h?.key!==c&&(h={key:c,t:d.Ay.createTransport({host:a.smtpHost,port:b,secure:465===b,auth:a.smtpUser?{user:a.smtpUser,pass:a.smtpPass}:void 0})}),{transporter:h.t,from:a.smtpFrom,siteUrl:a.siteUrl}}async function j(){return!!await i()}function k(a){return a.replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a])}async function l(){let{recipients:a}=await (0,g._A)("notifications");return(a||process.env.NOTIFY_EMAILS||"").split(/[,;\s]+/).map(a=>a.trim()).filter(a=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a))}async function m(a,b,c,d){let g=await i();if(!g||0===a.length)return!1;let h=(0,f.eW)(await (0,e.mt)()).brand,j=[...c.map(([a,b])=>`${a}: ${b}`),"",d?`Open in admin: ${d}`:""].join("\n"),l=c.map(([a,b])=>`<tr><td style="padding:6px 12px 6px 0;color:#64748b;vertical-align:top">${k(a)}</td><td style="padding:6px 0;white-space:pre-wrap">${k(b)}</td></tr>`).join(""),m=`<div style="font-family:Arial,sans-serif;font-size:14px;color:#12202f">
    <h2 style="color:${h};margin:0 0 12px">${k(b)}</h2>
    <table style="border-collapse:collapse">${l}</table>
    ${d?`<p style="margin-top:20px"><a href="${k(d)}" style="background:${h};color:#fff;padding:10px 18px;border-radius:999px;text-decoration:none">Open in admin</a></p>`:""}
  </div>`;return await g.transporter.sendMail({from:g.from,to:a,subject:b,text:j,html:m}),!0}async function n(a,b,c){try{let d=await l(),f=((await (0,e.mt)()).siteUrl??"").replace(/\/+$/,"");await m(d,`New ${a} – Bridge Careers Global`,b,f?`${f}${c}`:void 0)||console.info(`[notify] skipped ${a} alert (email not configured or no recipients)`)}catch(b){console.error(`[notify] failed to send ${a} alert`,b)}}}};