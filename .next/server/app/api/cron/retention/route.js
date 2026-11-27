"use strict";(()=>{var a={};a.id=57,a.ids=[57],a.modules={261:a=>{a.exports=require("next/dist/shared/lib/router/utils/app-paths")},8128:a=>{a.exports=require("next/dist/server/runtime-reacts.external.js")},10846:a=>{a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},12518:a=>{a.exports=require("mongodb")},14289:(a,b,c)=>{c.d(b,{B0:()=>l,Fu:()=>m,HJ:()=>k,Oj:()=>n,P1:()=>i,Yn:()=>j,bM:()=>f,sf:()=>h,zM:()=>g});var d=c(20903),e=c(74700);let f=[{id:"new",label:"New"},{id:"in_progress",label:"In progress"},{id:"closed",label:"Closed"}];function g(a){return f.some(b=>b.id===a)}let h=[{key:"applications",label:"Job applications",singular:"Application",collection:d._f.applications,columns:[{field:"name",label:"Name"},{field:"job",label:"Job"},{field:"email",label:"Email"}],detail:[{field:"name",label:"Name"},{field:"email",label:"Email"},{field:"phone",label:"Phone"},{field:"location",label:"Location"},{field:"job",label:"Job"},{field:"message",label:"Cover note",long:!0}],files:[{path:"cv",label:"CV"}]},{key:"visa",label:"Visa applications",singular:"Visa application",collection:d._f.visaApplications,columns:[{field:"name",label:"Name"},{field:"country",label:"Destination"},{field:"job",label:"Role"}],detail:[{field:"name",label:"Full name"},{field:"email",label:"Email"},{field:"phone",label:"Phone"},{field:"birthDate",label:"Date of birth"},{field:"gender",label:"Gender"},{field:"nationality",label:"Nationality"},{field:"passport",label:"Passport number"},{field:"issueDate",label:"Passport issued"},{field:"expiryDate",label:"Passport expires"},{field:"issuePlace",label:"Place of issue"},{field:"authority",label:"Issuing authority"},{field:"address",label:"Current address",long:!0},{field:"employment",label:"Employment status"},{field:"occupation",label:"Occupation"},{field:"employer",label:"Employer"},{field:"income",label:"Monthly income (USD)"},{field:"originCountry",label:"Departure country"},{field:"country",label:"Destination"},{field:"job",label:"Role"},{field:"visaType",label:"Visa type"},{field:"startDate",label:"Preferred start date"},{field:"applicants",label:"Number of applicants"},{field:"fees",label:"Fees quoted",long:!0},{field:"paymentMethod",label:"Preferred payment method"},{field:"paymentStatus",label:"Payment status"},{field:"paymentAmount",label:"Amount charged"},{field:"paymentPaidAt",label:"Paid at"},{field:"paymentReference",label:"Paystack reference"}],files:e.U_.map(a=>({path:`documents.${a.key}`,label:a.label}))},{key:"tickets",label:"Air ticket requests",singular:"Air ticket request",collection:d._f.ticketRequests,columns:[{field:"email",label:"Email"},{field:"route",label:"Route"},{field:"departDate",label:"Departure"}],detail:[{field:"email",label:"Email"},{field:"from",label:"Departure country"},{field:"to",label:"Destination"},{field:"departDate",label:"Departure date"},{field:"returnDate",label:"Return date"},{field:"passengers",label:"Passengers"},{field:"travelClass",label:"Travel class"},{field:"bookingFee",label:"Booking fee quoted"},{field:"notes",label:"Additional notes",long:!0}],files:[{path:"documents.passport",label:"Travelling passport"}]},{key:"forms",label:"Other applications",singular:"Application",collection:d._f.formSubmissions,columns:[{field:"name",label:"Name"},{field:"formTitle",label:"Form"},{field:"email",label:"Email"}],detail:[{field:"formTitle",label:"Form"},{field:"name",label:"Full name"},{field:"email",label:"Email"},{field:"fees",label:"Fees quoted",long:!0},{field:"paymentMethod",label:"Preferred payment method"},{field:"paymentStatus",label:"Payment status"},{field:"paymentAmount",label:"Amount charged"},{field:"paymentPaidAt",label:"Paid at"},{field:"paymentReference",label:"Paystack reference"}]},{key:"requests",label:"Staff requests",singular:"Staff request",collection:d._f.staffRequests,columns:[{field:"company",label:"Company"},{field:"role",label:"Role"},{field:"name",label:"Contact"}],detail:[{field:"name",label:"Name"},{field:"company",label:"Company"},{field:"email",label:"Email"},{field:"phone",label:"Phone"},{field:"service",label:"Service"},{field:"industry",label:"Industry"},{field:"role",label:"Role(s)"},{field:"headcount",label:"Number of people"},{field:"start",label:"Start date"},{field:"details",label:"Details",long:!0}]},{key:"messages",label:"Contact messages",singular:"Message",collection:d._f.contacts,columns:[{field:"name",label:"Name"},{field:"topic",label:"Topic"},{field:"country",label:"Country"}],detail:[{field:"name",label:"Name"},{field:"email",label:"Email"},{field:"phone",label:"Phone"},{field:"country",label:"Country"},{field:"topic",label:"Topic"},{field:"message",label:"Message",long:!0}]},{key:"cvs",label:"CVs from CV maker",singular:"CV",collection:d._f.cvs,columns:[{field:"name",label:"Name"},{field:"email",label:"Email"}],detail:[{field:"name",label:"Name"},{field:"email",label:"Email"}]},{key:"cv-downloads",label:"CV download purchases",singular:"CV download purchase",collection:d._f.cvDownloads,columns:[{field:"name",label:"Name"},{field:"email",label:"Email"},{field:"paymentMethod",label:"Payment"}],detail:[{field:"name",label:"Name"},{field:"email",label:"Email"},{field:"paymentMethod",label:"Preferred payment method"},{field:"fee",label:"Amount to collect"},{field:"paymentStatus",label:"Payment status"},{field:"paymentAmount",label:"Amount charged"},{field:"paymentPaidAt",label:"Paid at"},{field:"paymentReference",label:"Paystack reference"},{field:"unlockCode",label:"Unlock code (send only after payment)"},{field:"redeemedAt",label:"First unlocked"}]},{key:"subscribers",label:"Newsletter subscribers",singular:"Subscriber",collection:d._f.newsletter,columns:[{field:"email",label:"Email"}],detail:[{field:"email",label:"Email"}]}];function i(a){return h.find(b=>b.key===a)}function j(a,b){return b.split(".").reduce((a,b)=>a&&"object"==typeof a?a[b]:void 0,a)}function k(a){return Array.isArray(a.extraFiles)?a.extraFiles:[]}function l(a,b){return b?[...(a.files??[]).map(a=>j(b,a.path)),...k(b).map(a=>a.file)].filter(a=>!!a):[]}function m(a){return{...Object.fromEntries((a.files??[]).map(a=>[`${a.path}.data`,0])),"extraFiles.file.data":0}}function n(a){return{...Object.fromEntries((a.files??[]).map(a=>[a.path.split(".")[0],0])),extraFiles:0}}},19225:(a,b,c)=>{a.exports=c(44870)},19508:(a,b,c)=>{c.d(b,{mt:()=>l,aK:()=>n,Pe:()=>m,vO:()=>g});var d=c(20903),e=c(77598);function f(a){let[b,c,d,f]=a.split(":");if("v1"!==b||!c||!d||!f)return null;try{let a=(0,e.createDecipheriv)("aes-256-gcm",function(){let a=process.env.AUTH_SECRET;if(!a||a.length<32)throw Error("AUTH_SECRET must be set to at least 32 characters");return Buffer.from((0,e.hkdfSync)("sha256",a,"bridgecareers-settings","settings-encryption-v1",32))}(),Buffer.from(c,"base64url"));return a.setAuthTag(Buffer.from(d,"base64url")),Buffer.concat([a.update(Buffer.from(f,"base64url")),a.final()]).toString("utf8")}catch{return null}}let g=[{id:"branding",title:"Brand colours",description:"The colours used across the website and admin: headers, buttons, links and highlights.",fields:[{key:"brandColor",label:"Main colour",env:"THEME_BRAND",color:!0,placeholder:"#da291c",help:"Buttons, links and section backgrounds."},{key:"brandDarkColor",label:"Dark colour",env:"THEME_BRAND_DARK",color:!0,placeholder:"#7a0d12",help:"Hero banners, footer and headings."},{key:"accentColor",label:"Accent colour",env:"THEME_ACCENT",color:!0,placeholder:"#ffc133",help:"Highlights and call-to-action buttons."}]},{id:"email",title:"Email (SMTP)",description:"Used to email your team when new applications, requests, messages and CVs arrive. Works with any provider.",fields:[{key:"smtpHost",label:"SMTP host",env:"SMTP_HOST",placeholder:"smtp.gmail.com"},{key:"smtpPort",label:"Port",env:"SMTP_PORT",placeholder:"587",help:"587 (STARTTLS) or 465 (SSL)."},{key:"smtpUser",label:"Username",env:"SMTP_USER"},{key:"smtpPass",label:"Password / app password",env:"SMTP_PASS",secret:!0},{key:"smtpFrom",label:"From address",env:"SMTP_FROM",placeholder:"Bridge Careers Global <no-reply@yourdomain.com>"},{key:"siteUrl",label:"Website address",env:"SITE_URL",placeholder:"https://www.yourdomain.com",help:"Used for links in emails."}]},{id:"storage",title:"Cloudflare R2 storage",description:"Image uploads (public bucket) and uploaded CVs (private bucket). Create an R2 API token with Object Read & Write.",fields:[{key:"r2AccountId",label:"Account ID",env:"R2_ACCOUNT_ID"},{key:"r2AccessKeyId",label:"Access key ID",env:"R2_ACCESS_KEY_ID"},{key:"r2SecretAccessKey",label:"Secret access key",env:"R2_SECRET_ACCESS_KEY",secret:!0},{key:"r2Bucket",label:"Public bucket (images)",env:"R2_BUCKET"},{key:"r2PublicUrl",label:"Public bucket URL",env:"R2_PUBLIC_URL",placeholder:"https://pub-xxxx.r2.dev"},{key:"r2PrivateBucket",label:"Private bucket (CVs)",env:"R2_PRIVATE_BUCKET",help:"Must NOT have public access. Leave empty to keep CVs in MongoDB."}]},{id:"translation",title:"Translation",description:"Machine translation for French, Portuguese and Swahili. Without one, translate by hand in Admin → Translations.",fields:[{key:"translator",label:"Service",env:"TRANSLATOR",options:[{value:"",label:"Automatic (first one with a key)"},{value:"azure",label:"Microsoft Azure Translator"},{value:"google",label:"Google Cloud Translation"},{value:"ai",label:"AI (AI Gateway)"}]},{key:"azureTranslatorKey",label:"Azure Translator key",env:"AZURE_TRANSLATOR_KEY",secret:!0,help:"Free tier F0: 2 million characters a month."},{key:"azureTranslatorRegion",label:"Azure region",env:"AZURE_TRANSLATOR_REGION",placeholder:"southafricanorth"},{key:"googleTranslateApiKey",label:"Google Translate API key",env:"GOOGLE_TRANSLATE_API_KEY",secret:!0}]},{id:"ai",title:"AI (Vercel AI Gateway)",description:"Powers the CV maker's writing help and the optional AI translator. Leave the key empty to turn AI features off.",fields:[{key:"aiGatewayApiKey",label:"AI Gateway API key",env:"AI_GATEWAY_API_KEY",secret:!0},{key:"cvAiModel",label:"CV help model",env:"CV_AI_MODEL",placeholder:"anthropic/claude-haiku-4.5"},{key:"translateAiModel",label:"AI translation model",env:"TRANSLATE_AI_MODEL",placeholder:"anthropic/claude-haiku-4.5"}]},{id:"payments",title:"Paystack payments",description:"Takes card and mobile-money payments online for visa applications, CV downloads and application forms with fees. Leave the secret key empty to keep the manual flow (your team emails a payment link). In Paystack → Settings → API Keys & Webhooks, set the webhook URL to https://YOUR-SITE/api/paystack/webhook.",fields:[{key:"paystackSecretKey",label:"Secret key",env:"PAYSTACK_SECRET_KEY",secret:!0,placeholder:"sk_live_…",help:"Use a sk_test_… key while testing. Never share it."},{key:"paystackCurrency",label:"Currency to charge",env:"PAYSTACK_CURRENCY",options:[{value:"KES",label:"Kenyan shilling (KES)"},{value:"USD",label:"US dollar (USD)"},{value:"NGN",label:"Nigerian naira (NGN)"},{value:"GHS",label:"Ghanaian cedi (GHS)"},{value:"ZAR",label:"South African rand (ZAR)"}],help:"Must be a currency your Paystack account can accept."},{key:"paystackUsdRate",label:"1 USD equals",env:"PAYSTACK_USD_RATE",placeholder:"129",help:"Prices in the admin are in USD. This converts them to the charge currency. Not needed when charging USD."}]},{id:"security",title:"Scheduled jobs",description:"Secret your scheduler sends to /api/cron/retention as “Authorization: Bearer <secret>”.",fields:[{key:"cronSecret",label:"Cron secret",env:"CRON_SECRET",secret:!0,help:"Use a long random string."}]}],h=g.flatMap(a=>a.fields),i=null;async function j(){return(await (0,d.Lf)()).collection(d._f.settings)}async function k(){if(i&&Date.now()-i.at<15e3)return i.values;let a={};try{a=(await (await j()).findOne({_id:"app"}))?.values??{}}catch(a){if(!(a instanceof d.$J))throw a}return i={at:Date.now(),values:a},a}async function l(){let a=await k(),b={};for(let c of h){let d=a[c.key],e=d?d.sealed?f(d.value):d.value:null;b[c.key]=(e??process.env[c.env]??"").trim()}return b}async function m(a){return(await l())[a]??""}async function n(){let a=await k();return Object.fromEntries(h.map(b=>{let c=a[b.key],d=!!c?.sealed&&null===f(c.value),e=c?"admin":process.env[b.env]?"env":"none",g=b.secret?"":c?c.value:process.env[b.env]??"";return[b.key,{value:g,source:e,unreadable:d}]}))}},24384:(a,b,c)=>{c.d(b,{U5:()=>l,bu:()=>j,jc:()=>m,u_:()=>k});var d=c(77598),e=c(91043),f=c(12518),g=c(19508);let h={"application/pdf":"pdf","application/msword":"doc","application/vnd.openxmlformats-officedocument.wordprocessingml.document":"docx","image/jpeg":"jpg","image/png":"png","image/webp":"webp"};async function i(){let a=await (0,g.mt)();return a.r2AccountId&&a.r2AccessKeyId&&a.r2SecretAccessKey&&a.r2PrivateBucket?{client:new e.S3Client({region:"auto",endpoint:`https://${a.r2AccountId}.r2.cloudflarestorage.com`,credentials:{accessKeyId:a.r2AccessKeyId,secretAccessKey:a.r2SecretAccessKey}}),bucket:a.r2PrivateBucket}:null}async function j(a){return k(a,"cvs")}async function k(a,b){let c=Buffer.from(await a.arrayBuffer()),g={name:a.name.slice(0,200),type:a.type,size:a.size},j=await i();if(!j)return{...g,storage:"mongo",data:new f.Binary(c)};let k=`${b}/${new Date().toISOString().slice(0,7)}/${(0,d.randomUUID)()}.${h[a.type]??"bin"}`;return await j.client.send(new e.PutObjectCommand({Bucket:j.bucket,Key:k,Body:c,ContentType:a.type,CacheControl:"private, no-store"})),{...g,storage:"r2",key:k}}async function l(a){if("r2"===a.storage){let b=await i();if(!b)return null;let c=await b.client.send(new e.GetObjectCommand({Bucket:b.bucket,Key:a.key}));return c.Body?Buffer.from(await c.Body.transformToByteArray()):null}return a.data?Buffer.from(a.data.buffer):null}async function m(a){if(a?.storage!=="r2")return;let b=await i();b&&await b.client.send(new e.DeleteObjectCommand({Bucket:b.bucket,Key:a.key}))}},29294:a=>{a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},31211:(a,b,c)=>{c.d(b,{A_:()=>i,HW:()=>k,J4:()=>g,NU:()=>l,aO:()=>f,dR:()=>h,qS:()=>e,wk:()=>j});var d=c(44359);let e={visaFees:[{label:"Processing fee",amount:50}],visaTypes:[{name:"Work visa",employment:!0},{name:"Skilled worker visa",employment:!0},{name:"Seasonal work visa",employment:!0},{name:"Care visa",employment:!0},{name:"Student visa",employment:!1}],routeFees:{sameCountry:15,sameContinent:25,europeNorthAmerica:45,other:60},processingTime:"15 – 20 business days",cvDownloadFee:50,paymentMethods:[{id:"Card",label:"Visa card",note:"Credit / Debit",mark:"VISA \xb7 MC \xb7 AMEX"},{id:"Skrill",label:"Skrill",note:"",mark:"SKRILL"},{id:"Neteller",label:"Neteller",note:"",mark:"NETELLER"}],paymentInstructions:""},f=a=>a.visaTypes.map(a=>a.name),g=(a,b)=>a.visaTypes.find(a=>a.name===b)?.employment??!0;function h(a){return`USD ${a.toFixed(2)}`}function i(a){return a.reduce((a,b)=>a+b.amount,0)}function j(a,b,c){if(!b||!c)return 0;if(b===c)return a.sameCountry;let e=(0,d.i8)(b)?.continent,f=(0,d.i8)(c)?.continent;return e&&e===f?a.sameContinent:"Europe"===e&&"North America"===f||"North America"===e&&"Europe"===f?a.europeNorthAmerica:a.other}let k="{same} within one country \xb7 {continent} within one continent \xb7 {euna} between Europe and North America \xb7 {other} other international routes";function l(a){return[...a.visaFees.map(a=>a.label),...a.visaTypes.map(a=>a.name),a.processingTime,...a.paymentMethods.flatMap(a=>[a.label,a.note]),a.paymentInstructions].filter(Boolean)}},33873:a=>{a.exports=require("path")},44359:(a,b,c)=>{c.d(b,{i8:()=>h,pd:()=>f});let d={AF:"Africa",AS:"Asia",EU:"Europe",NA:"North America",SA:"South America",OC:"Oceania"},e=`Afghanistan|93|AS
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
Zimbabwe|263|AF`.split("\n").map(a=>{let[b,c,e]=a.split("|");return{name:b,dial:`+${c}`,continent:d[e]}}),f=e.map(a=>a.name),g=new Map(e.map(a=>[a.name,a]));function h(a){return g.get(a)}e.map(a=>({value:a.name,label:`${a.name} (${a.dial})`}))},44870:a=>{a.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},46369:(a,b,c)=>{c.d(b,{G:()=>o,Kx:()=>p,NA:()=>l,V2:()=>n,_r:()=>i,q1:()=>m});var d=c(77598),e=c(24384),f=c(20903),g=c(14289),h=c(85185);let i=[{key:"applications",label:"Job applications",collection:f._f.applications,retention:"applicationsMonths"},{key:"cvs",label:"CVs from the CV maker",collection:f._f.cvs,retention:"cvsMonths"},{key:"cv-downloads",label:"CV download purchases",collection:f._f.cvDownloads,retention:"cvsMonths"},{key:"messages",label:"Contact messages",collection:f._f.contacts,retention:"messagesMonths"},{key:"requests",label:"Staff requests",collection:f._f.staffRequests,retention:"requestsMonths"},{key:"visa",label:"Visa applications",collection:f._f.visaApplications,retention:"visaMonths"},{key:"tickets",label:"Air ticket requests",collection:f._f.ticketRequests,retention:"ticketsMonths"},{key:"forms",label:"Other applications",collection:f._f.formSubmissions,retention:"formsMonths"},{key:"subscribers",label:"Newsletter",collection:f._f.newsletter,retention:null}];function j(a){let b=a.trim().replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return{email:{$regex:`^${b}$`,$options:"i"}}}async function k(a,b){let c=(0,g.P1)(a);if(c?.files)for(let a of b)for(let b of(0,g.B0)(c,a))await (0,e.jc)(b)}async function l(a){let b=await (0,f.Lf)();return Promise.all(i.map(async c=>{let d=await b.collection(c.collection).find(j(a),{projection:(0,g.Fu)((0,g.P1)(c.key)??{})}).sort({createdAt:-1}).toArray();return{...c,docs:d}}))}async function m(a){let b=await l(a);return{email:a,exportedAt:new Date().toISOString(),data:Object.fromEntries(b.map(a=>[a.key,a.docs.map(({_id:a,...b})=>({id:a.toString(),...b}))]))}}async function n(a,b){let c=await (0,f.Lf)(),e=0;for(let b of i){let d=c.collection(b.collection);await k(b.key,await d.find(j(a)).toArray()),e+=(await d.deleteMany(j(a))).deletedCount}return await c.collection(f._f.privacyLog).insertOne({action:"erase",emailHash:(0,d.createHash)("sha256").update(a.trim().toLowerCase()).digest("hex"),deleted:e,by:b,at:new Date}),e}async function o(a="scheduled"){let b=await (0,h._A)("retention"),c=await (0,f.Lf)(),d={};for(let a of i){if(!a.retention)continue;let e=Number(b[a.retention]);if(!Number.isFinite(e)||e<=0)continue;let f=new Date;f.setMonth(f.getMonth()-e);let g=c.collection(a.collection),h={createdAt:{$lt:f}};await k(a.key,await g.find(h).toArray()),d[a.key]=(await g.deleteMany(h)).deletedCount}return await c.collection(f._f.privacyLog).insertOne({action:"retention",result:d,by:a,at:new Date}),d}async function p(){return(await (0,f.Lf)()).collection(f._f.privacyLog).findOne({action:"retention"},{sort:{at:-1}})}},51455:a=>{a.exports=require("node:fs/promises")},55511:a=>{a.exports=require("crypto")},63033:a=>{a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},74700:(a,b,c)=>{c.d(b,{D8:()=>m,He:()=>j,Tf:()=>h,U_:()=>k,XJ:()=>g,cA:()=>f,dR:()=>d.dR,hR:()=>l,j7:()=>i,uC:()=>e});var d=c(31211);let e={Canada:["Caregiving","Welding","CNA","Nursing","Cleaning","Farm work","Receptionist","Supermarket attendant","Cruise ship jobs"],"United States":["Caregiving","Welding","CNA","Nursing","Cleaning","Farm work","Receptionist","Supermarket attendant","Cruise ship jobs"],"United Kingdom":["Caregiving","Welding","CNA","Nursing","Cleaning","Farm work","Receptionist","Supermarket attendant","Cruise ship jobs"],Germany:["Au pair","Cleaning","Housekeeping","Waiter/waitress","Farm work","Nursing"],Luxembourg:["Caregiving","Cleaning","Welding","Driving","Nursing","Housekeeping","Waiter/waitress"],Netherlands:["Au pair","Cleaning","Housekeeping","Waiter/waitress","Farm work","Nursing"],Finland:["Caregiving","Cleaning","Housekeeping","Nursing","Farm work","Welding"],Turkey:["Nanny","Cleaning","Housekeeping","Farm work","Driving","Riders","Factory work","Welding"],Australia:["Farming","Teaching","Caregiving","Nursing","Driving","Construction","Clinical medicine"],"New Zealand":["Farming","Teaching","Caregiving","Nursing","Driving","Construction","Hospitality"]};Object.keys(e);let f=["employment","occupation","employer","income"],g=["1","2","3","4+"],h=["Female","Male","Non-binary","Prefer not to say"],i=["Employed","Self-employed","Student","Between roles","Retired"],j=["Economy","Premium economy","Business"],k=[{key:"passport",label:"Passport bio page",required:!0},{key:"cv",label:"Curriculum vitae / resume",required:!0},{key:"certificates",label:"Relevant certificates",required:!1},{key:"photo",label:"Passport-sized photograph",required:!0}],l=4194304,m=["application/pdf","image/jpeg","image/png","image/webp"]},76760:a=>{a.exports=require("node:path")},77598:a=>{a.exports=require("node:crypto")},82191:(a,b,c)=>{c.r(b),c.d(b,{GET:()=>g});var d=c(77598),e=c(46369),f=c(19508);async function g(a){let b=await (0,f.Pe)("cronSecret"),c=Buffer.from(a.headers.get("authorization")??""),g=Buffer.from(`Bearer ${b??""}`);if(!b||c.length!==g.length||!(0,d.timingSafeEqual)(c,g))return new Response("Unauthorized",{status:401});let h=await (0,e.G)("cron");return Response.json({ok:!0,deleted:h})}},86439:a=>{a.exports=require("next/dist/shared/lib/no-fallback-error.external")},91043:a=>{a.exports=require("@aws-sdk/client-s3")},92069:(a,b,c)=>{c.r(b),c.d(b,{handler:()=>A,patchFetch:()=>z,routeModule:()=>v,serverHooks:()=>y,workAsyncStorage:()=>w,workUnitAsyncStorage:()=>x});var d=c(19225),e=c(84006),f=c(8317),g=c(99373),h=c(34775),i=c(24235),j=c(261),k=c(54365),l=c(90771),m=c(73461),n=c(67798),o=c(92280),p=c(62018),q=c(45696),r=c(47929),s=c(86439),t=c(10246),u=c(37527);let v=new d.AppRouteRouteModule({definition:{kind:e.RouteKind.APP_ROUTE,page:"/api/cron/retention/route",pathname:"/api/cron/retention",filename:"route",bundlePath:"app/api/cron/retention/route"},distDir:".next",relativeProjectDir:"",resolvedPagePath:"/home/classicmster/Documents/Projects/bridgecareers/src/app/api/cron/retention/route.ts",nextConfigOutput:"",userland:()=>c(82191),...{}}),{workAsyncStorage:w,workUnitAsyncStorage:x,serverHooks:y}=v;function z(){return(0,f.patchFetch)({workAsyncStorage:w,workUnitAsyncStorage:x})}async function A(a,b,c){c.requestMeta&&(0,g.setRequestMeta)(a,c.requestMeta),v.isDev&&(0,g.addRequestMeta)(a,"devRequestTimingInternalsEnd",process.hrtime.bigint());let d="/api/cron/retention/route";"/index"===d&&(d="/");let f=await v.prepare(a,b,{srcPage:d,multiZoneDraftMode:!1});if(!f)return b.statusCode=400,b.end("Bad Request"),null==c.waitUntil||c.waitUntil.call(c,Promise.resolve()),null;let{buildId:w,deploymentId:x,params:y,nextConfig:z,parsedUrl:A,isDraftMode:B,prerenderManifest:C,routerServerContext:D,isOnDemandRevalidate:E,revalidateOnlyGenerated:F,resolvedPathname:G,clientReferenceManifest:H,serverActionsManifest:I}=f,J=(0,j.normalizeAppPath)(d),K=!!C.routes[G]&&(v.isDev||(0,t.isRouteCacheOwner)(G,v.cacheOwner,C.routes[G])),L=!!(C.dynamicRoutes[J]||K),M=async()=>((null==D?void 0:D.render404)?await D.render404(a,b,A,!1):b.end("This page could not be found"),null);if(L&&!B){let a=C.dynamicRoutes[J];if(a&&!1===a.fallback&&!K){if(z.adapterPath)return await M();throw new s.NoFallbackError}}let N=null;!L||v.isDev||B||(N="/index"===(N=G)?"/":N);let O=!0===v.isDev||!L,P=L&&!O;I&&H&&(0,i.setManifestsSingleton)({page:d,clientReferenceManifest:H,serverActionsManifest:I});let Q=a.method||"GET",R=(0,h.getTracer)(),S=R.getActiveScopeSpan(),T=!!(null==D?void 0:D.isWrappedByNextServer),U=!!(0,g.getRequestMeta)(a,"minimalMode"),V=(0,g.getRequestMeta)(a,"incrementalCache")||await v.getIncrementalCache(a,z,C,U);null==V||V.resetRequestCache(),globalThis.__incrementalCache=V;let W={params:y,previewProps:C.preview,renderOpts:{experimental:{authInterrupts:!!z.experimental.authInterrupts,useCacheTimeout:z.experimental.useCacheTimeout},cacheComponents:!!z.cacheComponents,validationLevel:z.experimental.instantInsights.validationLevel,isDraftMode:B,supportsDynamicResponse:O,incrementalCache:V,hmrRefreshHash:(0,g.getRequestMeta)(a,"hmrRefreshHash"),cacheLifeProfiles:z.cacheLife,staticPageGenerationTimeout:z.staticPageGenerationTimeout,waitUntil:c.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:void 0,onInstrumentationRequestError:(b,c,d,e)=>v.onRequestError(a,b,d,e,D)},sharedContext:{buildId:w,deploymentId:x}},X=new k.NodeNextRequest(a),Y=new k.NodeNextResponse(b),Z=l.NextRequestAdapter.fromNodeNextRequest(X,(0,l.signalFromNodeResponse)(b)),$=async({previousCacheEntry:e})=>{try{if(!U&&E&&F&&!e)return b.statusCode=404,b.setHeader("x-nextjs-cache","REVALIDATED"),b.end("This page could not be found"),null;let d=await v.handle(Z,W);a.fetchMetrics=W.renderOpts.fetchMetrics;let f=W.renderOpts.pendingWaitUntil;f&&c.waitUntil&&(c.waitUntil(f),f=void 0);let g=W.renderOpts.collectedTags;if(!L)return await (0,o.I)(X,Y,d,f),null;{let a=await d.blob(),b=(0,p.toNodeOutgoingHttpHeaders)(d.headers);g&&(b[r.NEXT_CACHE_TAGS_HEADER]=g),!b["content-type"]&&a.type&&(b["content-type"]=a.type);let c=void 0!==W.renderOpts.collectedRevalidate&&!(W.renderOpts.collectedRevalidate>=r.INFINITE_CACHE)&&W.renderOpts.collectedRevalidate,e=void 0===W.renderOpts.collectedExpire||W.renderOpts.collectedExpire>=r.INFINITE_CACHE?!1!==c&&c>0?z.expireTime:void 0:W.renderOpts.collectedExpire;return{value:{kind:u.CachedRouteKind.APP_ROUTE,status:d.status,body:Buffer.from(await a.arrayBuffer()),headers:b},cacheControl:{revalidate:c,expire:e}}}}catch(b){throw(null==e?void 0:e.isStale)&&await v.onRequestError(a,b,{routerKind:"App Router",routePath:d,routeType:"route",revalidateReason:(0,n.getRevalidateReason)({isStaticGeneration:P,isOnDemandRevalidate:E})},!1,D),b}},_=async(d,f)=>{try{var g,i;let d=await v.handleResponse({req:a,nextConfig:z,cacheKey:N,routeKind:e.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:C,isRoutePPREnabled:!1,isOnDemandRevalidate:E,revalidateOnlyGenerated:F,responseGenerator:$,waitUntil:c.waitUntil,isMinimalMode:U});if(!L)return;if((null==d||null==(g=d.value)?void 0:g.kind)!==u.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==d||null==(i=d.value)?void 0:i.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});U||b.setHeader("x-nextjs-cache",E?"REVALIDATED":d.isMiss?"MISS":d.isStale?"STALE":"HIT"),B&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let f=(0,p.fromNodeOutgoingHttpHeaders)(d.value.headers);U&&L||f.delete(r.NEXT_CACHE_TAGS_HEADER),!d.cacheControl||b.getHeader("Cache-Control")||f.get("Cache-Control")||f.set("Cache-Control",(0,q.getCacheControlHeader)(d.cacheControl)),await (0,o.I)(X,Y,new Response(d.value.body,{headers:f,status:d.value.status||200}));return}catch(b){if(b instanceof s.NoFallbackError||await v.onRequestError(a,b,{routerKind:"App Router",routePath:J,routeType:"route",revalidateReason:(0,n.getRevalidateReason)({isStaticGeneration:P,isOnDemandRevalidate:E})},!1,D),L)throw b;await (0,o.I)(X,Y,new Response(null,{status:500}));return}finally{(()=>{if(!d)return;let a=b.statusCode;d.setAttributes({"http.status_code":a,"next.rsc":!1}),a&&a>=500&&(d.setStatus({code:h.SpanStatusCode.ERROR}),d.setAttribute("error.type",a.toString()));let c=R.getRootSpanAttributes();if(!c)return;if(c.get("next.span_type")!==m.BaseServerSpan.handleRequest)return console.warn(`Unexpected root span type '${c.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let e=c.get("next.route")||J,g=`${Q} ${e}`;d.setAttributes({"next.route":e,"http.route":e,"next.span_name":g}),d.updateName(g),f&&f!==d&&(f.setAttribute("http.route",e),f.updateName(g))})()}};if(T&&S)await _(S,void 0);else{let b=R.getActiveScopeSpan();await R.withPropagatedContext(a.headers,()=>R.trace(m.BaseServerSpan.handleRequest,{spanName:`${Q} ${d}`,kind:h.SpanKind.SERVER,attributes:{"http.method":Q,"http.target":a.url}},a=>_(a,b)),void 0,!T)}}},92280:(a,b,c)=>{Object.defineProperty(b,"I",{enumerable:!0,get:function(){return g}});let d=c(28208),e=c(47617),f=c(62018);async function g(a,b,c,g){if((0,d.isNodeNextResponse)(b)){var h;b.statusCode=c.status,b.statusMessage=c.statusText;let d=["set-cookie","www-authenticate","proxy-authenticate","vary"];null==(h=c.headers)||h.forEach((a,c)=>{if("x-middleware-set-cookie"!==c.toLowerCase())if("set-cookie"===c.toLowerCase())for(let d of(0,f.splitCookiesString)(a))b.appendHeader(c,d);else{let e=void 0!==b.getHeader(c);(d.includes(c.toLowerCase())||!e)&&b.appendHeader(c,a)}});let{originalResponse:i}=b;c.body&&"HEAD"!==a.method?await (0,e.pipeToNodeResponse)(c.body,i,g):i.end()}}}};var b=require("../../../../webpack-runtime.js");b.C(a);var c=b.X(0,[2970,4340,5185],()=>b(b.s=92069));module.exports=c})();