"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[957],{11541:function(e,t,n){n.d(t,{Z:function(){return a}});var s=n(85893);n(67294);var r=n(8193);function a(e){let{message:t}=e;return(0,s.jsxs)("div",{className:"text-yellow-600 text-xs my-4 text-left",children:[t?(0,s.jsx)("div",{className:"my-2 text-red-500",children:t}):null,(0,s.jsxs)("div",{className:"font-semibold my-2",children:[(0,s.jsx)(r.CSE,{className:"inline-block mr-1 w-4 h-4"}),"You have reached the maximum context length of the conversation."]}),(0,s.jsx)("div",{children:"This limitation is set by OpenAI. We hope to fix this issue in the future when OpenAI increase the limit for API usage (for example, GPT-4 has a bigger context length). Sorry about this inconvenience!"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"font-semibold my-2",children:"Possible workarounds:"}),(0,s.jsxs)("ul",{className:"list-decimal pl-4",children:[(0,s.jsx)("li",{children:"You can delete some old messages from this chat, then start sending new messages again."}),(0,s.jsx)("li",{children:"You can continue this in a new chat, but keep in mind that the assistant will not remember the previous conversation."})]})]})]})}},39026:function(e,t,n){n.d(t,{Z:function(){return r}});var s=n(85893);function r(){return(0,s.jsxs)("details",{children:[(0,s.jsx)("summary",{className:"text-left font-semibold my-2 text-base cursor-pointer hover:underline",children:"How is the cost calculated?"}),(0,s.jsxs)("ul",{className:"space-y-2 list-disc pl-4",children:[(0,s.jsxs)("li",{className:"",children:["Cost associated with a chat includes the token cost for the chat messages AND all of the ",(0,s.jsx)("b",{children:"enhanced features"})," used for that chat."]}),(0,s.jsxs)("li",{className:"",children:["Some enhanced features on TypingMind will increase your token usage. You can always turn these features off in the Settings pannel (click the gear icon in the sidebar). The enhanced features include: Chat Title Suggestion, Search Keywords Suggestions, AI Characters, Upload Document, etc. Amount of tokens used depends on the AI character and the length of your document."," "]}),(0,s.jsxs)("li",{className:"",children:["All costs are ",(0,s.jsx)("b",{children:"estimated"}),", please refer to your"," ",(0,s.jsx)("a",{target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",href:"https://platform.openai.com/account/usage",children:"OpenAI dashboard"})," ","for the most accurate cost of your API key."]}),(0,s.jsxs)("li",{className:"",children:["The cost is calculated based on the"," ",(0,s.jsx)("a",{target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 hover:underline",href:"https://openai.com/pricing",children:"public pricing of OpenAI's API"}),". Each model has its own pricing, each type of tokens in each model also has its own pricing."]}),(0,s.jsxs)("li",{className:"",children:["Token usages are not recorded when ",(0,s.jsx)("b",{children:"streaming response"})," is enabled. We will work on improving this soon."," "]}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{className:"text-blue-500 hover:underline",target:"_blank",rel:"noopener noreferrer",href:"https://platform.openai.com/docs/guides/chat",children:"Learn more about OpenAI's model, tokens, and context length here."})})]})]})}n(67294)},91655:function(e,t,n){n.d(t,{Z:function(){return c}});var s=n(85893),r=n(67294),a=n(82080),i=n(39026),o=n(78672),l=n(87260),A=n(8193),N=n(54399);let E=(0,o.eK)("useTokenUsage");function c(e){var t,n,o,c;let{model:I,messages:S,chatTitle:O,chatID:d,showCostEstimation:R}=e,[T,C]=(0,r.useState)(!1),[h,m]=E([]),L=S.filter(e=>"assistant"===e.role).slice(-1)[0];null==L||null===(t=L.usage)||void 0===t||t.total_tokens;let u=(0,r.useMemo)(()=>(0,N.nF)(h,{chatID:d}),[h,d]);return(0,s.jsxs)("div",{className:"flex items-center justify-center w-full p-2 border-bottom-2 border-gray-200 shadow-bottom flex-col min-w-0",children:[(0,s.jsx)("div",{className:"font-semibold truncate w-full text-center px-12 text-black dark:text-white",children:O||"New Chat"}),S.length>0?(0,s.jsxs)("div",{className:"text-xs text-gray-400 w-full truncate text-center px-16 space-x-1",children:[I?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:"shrink-0",children:I.toUpperCase().replace("-TURBO","")}),(0,s.jsx)("span",{className:"hidden sm:inline-block",children:"⋅"})]}):null,(0,s.jsxs)("span",{className:"hidden sm:inline-block",children:[S.length," message",S.length>1?"s":""]}),R&&(null==u?void 0:u.totalCostUSD)>0?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{children:"⋅"}),(0,s.jsxs)("button",{onClick:()=>C(!0),className:"hover:bg-gray-200 rounded-md hover:text-black active:bg-gray-100 inline-flex items-center justify-center gap-1 -ml-1 shrink-0",children:[(0,s.jsxs)("span",{children:["$",(null==u?void 0:null===(n=u.totalCostUSD)||void 0===n?void 0:n.toFixed(5))||0]}),(0,s.jsx)(A.KpA,{className:"w-4 h-4"})]})]}):null]}):(0,s.jsx)("div",{className:"text-xs text-gray-400",children:"Start a new chat"}),(0,s.jsxs)(l.Z,{open:T,setOpen:C,children:[(0,s.jsx)("h3",{className:"text-lg font-semibold text-center",children:"Estimated Cost"}),(0,s.jsx)("div",{className:"text-center my-2 text-lg",children:(null==u?void 0:u.totalCostUSD)>0?(0,s.jsxs)("b",{children:[(null==u?void 0:null===(o=u.totalTokens)||void 0===o?void 0:o.toLocaleString())||0," tokens ($",(null==u?void 0:null===(c=u.totalCostUSD)||void 0===c?void 0:c.toFixed(5))||0,")"]}):(0,s.jsx)("i",{className:"italic text-gray-500",children:"(Not available)"})}),(0,s.jsx)("hr",{className:"my-4"}),(0,s.jsx)(a.Z,{}),(0,s.jsx)(i.Z,{})]})]})}},54426:function(e,t,n){n.d(t,{Z:function(){return a}});var s=n(85893),r=n(67294);function a(){let e,{onConfirmed:t,children:n,className:a,disabled:i,defaultText:o=()=>"Delete",confirmText:l=()=>(0,s.jsx)("span",{className:"text-red-500 text-xs hover:underline",children:"Sure?"})}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[A,N]=(0,r.useState)(!1);return(0,r.useEffect)(()=>()=>clearTimeout(e),[]),(0,r.useEffect)(()=>(A&&(clearTimeout(e),e=setTimeout(()=>{N(!1)},2e3)),()=>clearTimeout(e)),[A]),(0,s.jsx)("button",{disabled:i,onClick:()=>{!i&&(A?t&&t():N(!0))},className:a,children:A?l({disabled:i}):n||o({disabled:i})})}},10395:function(e,t,n){var s=n(329),r=n(67294);t.Z=(0,r.memo)(s.D)},87260:function(e,t,n){n.d(t,{Z:function(){return l}});var s=n(85893),r=n(67294),a=n(11355),i=n(98029);function o(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}function l(e){let{closeButtonText:t,showCloseButton:n=!0,title:l,position:A,open:N,setOpen:E,hideOverflow:c=!0,children:I,wide:S,wide2:O,max:d,customZ:R}=e;return(0,s.jsx)(a.u.Root,{show:N,as:r.Fragment,children:(0,s.jsx)(i.V,{as:"div",className:o("fixed inset-0 overflow-y-auto",R||"z-50 "),onClose:E,children:(0,s.jsxs)("div",{className:o("flex justify-center min-h-screen px-4 pb-20 text-center sm:block sm:p-0","top"===A?"items-start pt-28":"items-center pt-4"),children:[(0,s.jsx)(a.u.Child,{as:r.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,s.jsx)(i.V.Overlay,{className:"fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"})}),(0,s.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"​"}),(0,s.jsx)(a.u.Child,{as:r.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,s.jsxs)("div",{className:o("inline-block w-full align-bottom bg-white dark:bg-zinc-900 rounded-lg px-4 pt-5 pb-4 text-left  shadow-xl transform transition-all sm:my-8 sm:align-middle sm:p-6",c?"overflow-hidden":"",S?" sm:max-w-lg":O?"sm:max-w-xl":d?"sm:max-w-3xl":" sm:max-w-sm"),children:[(0,s.jsxs)("div",{children:[l?(0,s.jsx)(i.V.Title,{as:"h3",className:"text-lg text-center leading-6 font-medium text-gray-900 dark:text-white",children:l}):null,(0,s.jsx)("div",{className:"mt-2 text-gray-800 dark:text-white text-left text-sm",children:I})]}),n?(0,s.jsx)("div",{className:"mt-5 sm:mt-6 text-center",children:(0,s.jsx)("button",{type:"button",className:"inline-flex justify-center rounded-md border border-transparent shadow-sm px-2 py-1 bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm",onClick:()=>E(!1),children:t||"Close"})}):null]})})]})})})}},83792:function(e,t,n){n.d(t,{Z:function(){return u}});var s=n(85893),r=n(67294),a=n(11541),i=n(5434),o=n(54426),l=n(89583);function A(e){let{onDelete:t,onEditMessage:n,toggleRaw:a,showRawButton:i,showRaw:A,showEdit:N,text:E}=e,[c,I]=(0,r.useState)(!1),[S,O]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(c){let e=setTimeout(()=>{I(!1)},2e3);return()=>clearTimeout(e)}},[c]),(0,s.jsxs)("div",{onMouseEnter:()=>O(!0),onMouseLeave:()=>O(!1),className:"absolute bottom-0 right-0 p-4 items-start justify-center gap-1 hidden group-hover:flex translate-y-1/2 z-30",children:[N?(0,s.jsx)("button",{onClick:n,className:"rounded-full border bg-gray-100 dark:bg-gray-700 border-gray-300 px-2 py-1 text-xs hover:bg-gray-200 dark:hover:bg-gray-700 transition-all flex overflow-hidden items-center justify-center text-gray-500 active:bg-gray-300 dark:active:bg-gray-800 gap-1 hover:text-blue-500",children:(0,s.jsx)(l.fmQ,{className:"w-4 h-4"})}):null,(0,s.jsx)(o.Z,{onConfirmed:t,className:"rounded-full border bg-gray-100 dark:bg-gray-700 border-gray-300 px-2 py-1 text-xs hover:bg-gray-200 dark:hover:bg-gray-700 transition-all flex overflow-hidden items-center justify-center text-gray-500 active:bg-gray-300 dark:active:bg-gray-800 gap-1 hover:text-red-500",children:(0,s.jsx)(l.Xm5,{className:"w-4 h-4"})}),i?(0,s.jsx)("button",{onClick:a,className:"rounded-full border bg-gray-100 dark:bg-gray-700 border-gray-300 px-2 py-1 text-xs hover:bg-gray-200 dark:hover:bg-gray-700 transition-all flex overflow-hidden items-center justify-center text-gray-500 active:bg-gray-300 dark:active:bg-gray-800 gap-1",children:(0,s.jsx)(l.tvD,{className:"w-4 h-4"})}):null,(0,s.jsxs)("button",{onClick:()=>{navigator.clipboard.writeText(E),I(!0)},className:"rounded-full border bg-gray-100 dark:bg-gray-700 border-gray-300 px-2 py-1 text-xs hover:bg-gray-200 dark:hover:bg-gray-700 transition-all flex overflow-hidden items-center justify-center text-gray-500 active:bg-gray-300 dark:active:bg-gray-800 gap-1",children:[(0,s.jsx)(l.esY,{className:"w-4 h-4"}),c?(0,s.jsx)("span",{children:"Copied!"}):null]})]})}class N extends r.Component{static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,t){console.error("render error",e,t)}render(){return this.state.hasError?(0,s.jsx)("div",{className:"text-red-500 font-semibold",children:"Failed to render this response. Please contact support."}):this.props.children}constructor(e){super(e),this.state={hasError:!1}}}var E=n(8193);function c(e){let{content:t,isEditting:n}=e,[a,i]=(0,r.useState)(!1);return(0,s.jsx)("div",{children:(0,s.jsx)("div",{className:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}("text-sm whitespace-pre-wrap space-y-2 w-fit","text-white px-4 py-2 rounded-lg max-w-full overflow-auto highlight-darkblue focus:outline",n?"bg-green-500":"bg-blue-500"),children:t})})}function I(e){let{domain:t}=e,n=e=>{let n=e.screenX,s=e.screenY;window.open("https://instantdomainsearch.com/?q=".concat(t),"_blank","width=600,height=500,left=".concat(n,",top=").concat(s))};return(0,s.jsxs)("button",{onClick:n,className:"rounded-full border border-gray-500 px-2 py-0 text-xs my-0 ml-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all max-w-[24px] group-hover:max-w-[100px] overflow-hidden",children:[(0,s.jsx)("span",{className:"hidden group-hover:inline-block whitespace-nowrap",children:"Check Domain"}),(0,s.jsx)("span",{className:"text-gray-500 group-hover:hidden whitespace-nowrap",children:"?"})]})}var S=n(51356);function O(e){let{rawContent:t}=e;return(0,s.jsx)("div",{className:"pb-6",children:(0,s.jsx)("pre",{className:"mb-2 overflow-auto text-sm border border-gray-200 rounded bg-gray-100 p-4 dark:bg-zinc-800",children:t})})}var d=n(53854);let R={js:"js",javascript:"js",ts:"js",typescript:"js",html:"html",css:"css"};function T(e){let{code:t,children:n,language:a}=e,[i,o]=(0,r.useState)(!1),l=()=>{navigator.clipboard.writeText(t),o(!0),setTimeout(()=>{o(!1)},2e3)};return(0,s.jsxs)("div",{children:[n,(0,s.jsxs)("div",{className:"text-center space-x-2",children:[(0,s.jsx)("button",{onClick:l,className:"rounded-full bg-white py-1 px-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 font-sans",children:i?"Copied!":"Copy Code"}),a&&R.hasOwnProperty(a)?(0,s.jsxs)("form",{className:"inline-block",action:"https://codepen.io/pen/define",method:"POST",target:"_blank",children:[(0,s.jsx)("input",{type:"hidden",name:"data",value:JSON.stringify({title:"Code from TypingMind.com",[R[a]]:t})}),(0,s.jsxs)("button",{type:"submit",className:"rounded-full bg-white py-1 px-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 font-sans",children:["Open in CodePen ",(0,s.jsx)(d.x9Z,{className:"inline-block"})]})]}):null]})]})}var C=n(11111),h=n(63714),m=n(10395);let L=["AAA","AARP","ABARTH","ABB","ABBOTT","ABBVIE","ABC","ABLE","ABOGADO","ABUDHABI","AC","ACADEMY","ACCENTURE","ACCOUNTANT","ACCOUNTANTS","ACO","ACTOR","AD","ADS","ADULT","AE","AEG","AERO","AETNA","AF","AFL","AFRICA","AG","AGAKHAN","AGENCY","AI","AIG","AIRBUS","AIRFORCE","AIRTEL","AKDN","AL","ALFAROMEO","ALIBABA","ALIPAY","ALLFINANZ","ALLSTATE","ALLY","ALSACE","ALSTOM","AM","AMAZON","AMERICANEXPRESS","AMERICANFAMILY","AMEX","AMFAM","AMICA","AMSTERDAM","ANALYTICS","ANDROID","ANQUAN","ANZ","AO","AOL","APARTMENTS","APP","APPLE","AQ","AQUARELLE","AR","ARAB","ARAMCO","ARCHI","ARMY","ARPA","ART","ARTE","AS","ASDA","ASIA","ASSOCIATES","AT","ATHLETA","ATTORNEY","AU","AUCTION","AUDI","AUDIBLE","AUDIO","AUSPOST","AUTHOR","AUTO","AUTOS","AVIANCA","AW","AWS","AX","AXA","AZ","AZURE","BA","BABY","BAIDU","BANAMEX","BANANAREPUBLIC","BAND","BANK","BAR","BARCELONA","BARCLAYCARD","BARCLAYS","BAREFOOT","BARGAINS","BASEBALL","BASKETBALL","BAUHAUS","BAYERN","BB","BBC","BBT","BBVA","BCG","BCN","BD","BE","BEATS","BEAUTY","BEER","BENTLEY","BERLIN","BEST","BESTBUY","BET","BF","BG","BH","BHARTI","BI","BIBLE","BID","BIKE","BING","BINGO","BIO","BIZ","BJ","BLACK","BLACKFRIDAY","BLOCKBUSTER","BLOG","BLOOMBERG","BLUE","BM","BMS","BMW","BN","BNPPARIBAS","BO","BOATS","BOEHRINGER","BOFA","BOM","BOND","BOO","BOOK","BOOKING","BOSCH","BOSTIK","BOSTON","BOT","BOUTIQUE","BOX","BR","BRADESCO","BRIDGESTONE","BROADWAY","BROKER","BROTHER","BRUSSELS","BS","BT","BUILD","BUILDERS","BUSINESS","BUY","BUZZ","BV","BW","BY","BZ","BZH","CA","CAB","CAFE","CAL","CALL","CALVINKLEIN","CAM","CAMERA","CAMP","CANON","CAPETOWN","CAPITAL","CAPITALONE","CAR","CARAVAN","CARDS","CARE","CAREER","CAREERS","CARS","CASA","CASE","CASH","CASINO","CAT","CATERING","CATHOLIC","CBA","CBN","CBRE","CBS","CC","CD","CENTER","CEO","CERN","CF","CFA","CFD","CG","CH","CHANEL","CHANNEL","CHARITY","CHASE","CHAT","CHEAP","CHINTAI","CHRISTMAS","CHROME","CHURCH","CI","CIPRIANI","CIRCLE","CISCO","CITADEL","CITI","CITIC","CITY","CITYEATS","CK","CL","CLAIMS","CLEANING","CLICK","CLINIC","CLINIQUE","CLOTHING","CLOUD","CLUB","CLUBMED","CM","CN","CO","COACH","CODES","COFFEE","COLLEGE","COLOGNE","COM","COMCAST","COMMBANK","COMMUNITY","COMPANY","COMPARE","COMPUTER","COMSEC","CONDOS","CONSTRUCTION","CONSULTING","CONTACT","CONTRACTORS","COOKING","COOKINGCHANNEL","COOL","COOP","CORSICA","COUNTRY","COUPON","COUPONS","COURSES","CPA","CR","CREDIT","CREDITCARD","CREDITUNION","CRICKET","CROWN","CRS","CRUISE","CRUISES","CU","CUISINELLA","CV","CW","CX","CY","CYMRU","CYOU","CZ","DABUR","DAD","DANCE","DATA","DATE","DATING","DATSUN","DAY","DCLK","DDS","DE","DEAL","DEALER","DEALS","DEGREE","DELIVERY","DELL","DELOITTE","DELTA","DEMOCRAT","DENTAL","DENTIST","DESI","DESIGN","DEV","DHL","DIAMONDS","DIET","DIGITAL","DIRECT","DIRECTORY","DISCOUNT","DISCOVER","DISH","DIY","DJ","DK","DM","DNP","DO","DOCS","DOCTOR","DOG","DOMAINS","DOT","DOWNLOAD","DRIVE","DTV","DUBAI","DUNLOP","DUPONT","DURBAN","DVAG","DVR","DZ","EARTH","EAT","EC","ECO","EDEKA","EDU","EDUCATION","EE","EG","EMAIL","EMERCK","ENERGY","ENGINEER","ENGINEERING","ENTERPRISES","EPSON","EQUIPMENT","ER","ERICSSON","ERNI","ES","ESQ","ESTATE","ET","ETISALAT","EU","EUROVISION","EUS","EVENTS","EXCHANGE","EXPERT","EXPOSED","EXPRESS","EXTRASPACE","FAGE","FAIL","FAIRWINDS","FAITH","FAMILY","FAN","FANS","FARM","FARMERS","FASHION","FAST","FEDEX","FEEDBACK","FERRARI","FERRERO","FI","FIAT","FIDELITY","FIDO","FILM","FINAL","FINANCE","FINANCIAL","FIRE","FIRESTONE","FIRMDALE","FISH","FISHING","FIT","FITNESS","FJ","FK","FLICKR","FLIGHTS","FLIR","FLORIST","FLOWERS","FLY","FM","FO","FOO","FOOD","FOODNETWORK","FOOTBALL","FORD","FOREX","FORSALE","FORUM","FOUNDATION","FOX","FR","FREE","FRESENIUS","FRL","FROGANS","FRONTDOOR","FRONTIER","FTR","FUJITSU","FUN","FUND","FURNITURE","FUTBOL","FYI","GA","GAL","GALLERY","GALLO","GALLUP","GAME","GAMES","GAP","GARDEN","GAY","GB","GBIZ","GD","GDN","GE","GEA","GENT","GENTING","GEORGE","GF","GG","GGEE","GH","GI","GIFT","GIFTS","GIVES","GIVING","GL","GLASS","GLE","GLOBAL","GLOBO","GM","GMAIL","GMBH","GMO","GMX","GN","GODADDY","GOLD","GOLDPOINT","GOLF","GOO","GOODYEAR","GOOG","GOOGLE","GOP","GOT","GOV","GP","GQ","GR","GRAINGER","GRAPHICS","GRATIS","GREEN","GRIPE","GROCERY","GROUP","GS","GT","GU","GUARDIAN","GUCCI","GUGE","GUIDE","GUITARS","GURU","GW","GY","HAIR","HAMBURG","HANGOUT","HAUS","HBO","HDFC","HDFCBANK","HEALTH","HEALTHCARE","HELP","HELSINKI","HERE","HERMES","HGTV","HIPHOP","HISAMITSU","HITACHI","HIV","HK","HKT","HM","HN","HOCKEY","HOLDINGS","HOLIDAY","HOMEDEPOT","HOMEGOODS","HOMES","HOMESENSE","HONDA","HORSE","HOSPITAL","HOST","HOSTING","HOT","HOTELES","HOTELS","HOTMAIL","HOUSE","HOW","HR","HSBC","HT","HU","HUGHES","HYATT","HYUNDAI","IBM","ICBC","ICE","ICU","ID","IE","IEEE","IFM","IKANO","IL","IM","IMAMAT","IMDB","IMMO","IMMOBILIEN","IN","INC","INDUSTRIES","INFINITI","INFO","ING","INK","INSTITUTE","INSURANCE","INSURE","INT","INTERNATIONAL","INTUIT","INVESTMENTS","IO","IPIRANGA","IQ","IR","IRISH","IS","ISMAILI","IST","ISTANBUL","IT","ITAU","ITV","JAGUAR","JAVA","JCB","JE","JEEP","JETZT","JEWELRY","JIO","JLL","JM","JMP","JNJ","JO","JOBS","JOBURG","JOT","JOY","JP","JPMORGAN","JPRS","JUEGOS","JUNIPER","KAUFEN","KDDI","KE","KERRYHOTELS","KERRYLOGISTICS","KERRYPROPERTIES","KFH","KG","KH","KI","KIA","KIDS","KIM","KINDER","KINDLE","KITCHEN","KIWI","KM","KN","KOELN","KOMATSU","KOSHER","KP","KPMG","KPN","KR","KRD","KRED","KUOKGROUP","KW","KY","KYOTO","KZ","LA","LACAIXA","LAMBORGHINI","LAMER","LANCASTER","LANCIA","LAND","LANDROVER","LANXESS","LASALLE","LAT","LATINO","LATROBE","LAW","LAWYER","LB","LC","LDS","LEASE","LECLERC","LEFRAK","LEGAL","LEGO","LEXUS","LGBT","LI","LIDL","LIFE","LIFEINSURANCE","LIFESTYLE","LIGHTING","LIKE","LILLY","LIMITED","LIMO","LINCOLN","LINDE","LINK","LIPSY","LIVE","LIVING","LK","LLC","LLP","LOAN","LOANS","LOCKER","LOCUS","LOL","LONDON","LOTTE","LOTTO","LOVE","LPL","LPLFINANCIAL","LR","LS","LT","LTD","LTDA","LU","LUNDBECK","LUXE","LUXURY","LV","LY","MA","MACYS","MADRID","MAIF","MAISON","MAKEUP","MAN","MANAGEMENT","MANGO","MAP","MARKET","MARKETING","MARKETS","MARRIOTT","MARSHALLS","MASERATI","MATTEL","MBA","MC","MCKINSEY","MD","ME","MED","MEDIA","MEET","MELBOURNE","MEME","MEMORIAL","MEN","MENU","MERCKMSD","MG","MH","MIAMI","MICROSOFT","MIL","MINI","MINT","MIT","MITSUBISHI","MK","ML","MLB","MLS","MM","MMA","MN","MO","MOBI","MOBILE","MODA","MOE","MOI","MOM","MONASH","MONEY","MONSTER","MORMON","MORTGAGE","MOSCOW","MOTO","MOTORCYCLES","MOV","MOVIE","MP","MQ","MR","MS","MSD","MT","MTN","MTR","MU","MUSEUM","MUSIC","MUTUAL","MV","MW","MX","MY","MZ","NA","NAB","NAGOYA","NAME","NATURA","NAVY","NBA","NC","NE","NEC","NET","NETBANK","NETFLIX","NETWORK","NEUSTAR","NEW","NEWS","NEXT","NEXTDIRECT","NEXUS","NF","NFL","NG","NGO","NHK","NI","NICO","NIKE","NIKON","NINJA","NISSAN","NISSAY","NL","NO","NOKIA","NORTHWESTERNMUTUAL","NORTON","NOW","NOWRUZ","NOWTV","NP","NR","NRA","NRW","NTT","NU","NYC","NZ","OBI","OBSERVER","OFFICE","OKINAWA","OLAYAN","OLAYANGROUP","OLDNAVY","OLLO","OM","OMEGA","ONE","ONG","ONL","ONLINE","OOO","OPEN","ORACLE","ORANGE","ORG","ORGANIC","ORIGINS","OSAKA","OTSUKA","OTT","OVH","PA","PAGE","PANASONIC","PARIS","PARS","PARTNERS","PARTS","PARTY","PASSAGENS","PAY","PCCW","PE","PET","PF","PFIZER","PG","PH","PHARMACY","PHD","PHILIPS","PHONE","PHOTO","PHOTOGRAPHY","PHOTOS","PHYSIO","PICS","PICTET","PICTURES","PID","PIN","PING","PINK","PIONEER","PIZZA","PK","PL","PLACE","PLAY","PLAYSTATION","PLUMBING","PLUS","PM","PN","PNC","POHL","POKER","POLITIE","PORN","POST","PR","PRAMERICA","PRAXI","PRESS","PRIME","PRO","PROD","PRODUCTIONS","PROF","PROGRESSIVE","PROMO","PROPERTIES","PROPERTY","PROTECTION","PRU","PRUDENTIAL","PS","PT","PUB","PW","PWC","PY","QA","QPON","QUEBEC","QUEST","RACING","RADIO","RE","READ","REALESTATE","REALTOR","REALTY","RECIPES","RED","REDSTONE","REDUMBRELLA","REHAB","REISE","REISEN","REIT","RELIANCE","REN","RENT","RENTALS","REPAIR","REPORT","REPUBLICAN","REST","RESTAURANT","REVIEW","REVIEWS","REXROTH","RICH","RICHARDLI","RICOH","RIL","RIO","RIP","RO","ROCHER","ROCKS","RODEO","ROGERS","ROOM","RS","RSVP","RU","RUGBY","RUHR","RUN","RW","RWE","RYUKYU","SA","SAARLAND","SAFE","SAFETY","SAKURA","SALE","SALON","SAMSCLUB","SAMSUNG","SANDVIK","SANDVIKCOROMANT","SANOFI","SAP","SARL","SAS","SAVE","SAXO","SB","SBI","SBS","SC","SCA","SCB","SCHAEFFLER","SCHMIDT","SCHOLARSHIPS","SCHOOL","SCHULE","SCHWARZ","SCIENCE","SCOT","SD","SE","SEARCH","SEAT","SECURE","SECURITY","SEEK","SELECT","SENER","SERVICES","SEVEN","SEW","SEX","SEXY","SFR","SG","SH","SHANGRILA","SHARP","SHAW","SHELL","SHIA","SHIKSHA","SHOES","SHOP","SHOPPING","SHOUJI","SHOW","SHOWTIME","SI","SILK","SINA","SINGLES","SITE","SJ","SK","SKI","SKIN","SKY","SKYPE","SL","SLING","SM","SMART","SMILE","SN","SNCF","SO","SOCCER","SOCIAL","SOFTBANK","SOFTWARE","SOHU","SOLAR","SOLUTIONS","SONG","SONY","SOY","SPA","SPACE","SPORT","SPOT","SR","SRL","SS","ST","STADA","STAPLES","STAR","STATEBANK","STATEFARM","STC","STCGROUP","STOCKHOLM","STORAGE","STORE","STREAM","STUDIO","STUDY","STYLE","SU","SUCKS","SUPPLIES","SUPPLY","SUPPORT","SURF","SURGERY","SUZUKI","SV","SWATCH","SWISS","SX","SY","SYDNEY","SYSTEMS","SZ","TAB","TAIPEI","TALK","TAOBAO","TARGET","TATAMOTORS","TATAR","TATTOO","TAX","TAXI","TC","TCI","TD","TDK","TEAM","TECH","TECHNOLOGY","TEL","TEMASEK","TENNIS","TEVA","TF","TG","TH","THD","THEATER","THEATRE","TIAA","TICKETS","TIENDA","TIFFANY","TIPS","TIRES","TIROL","TJ","TJMAXX","TJX","TK","TKMAXX","TL","TM","TMALL","TN","TO","TODAY","TOKYO","TOOLS","TOP","TORAY","TOSHIBA","TOTAL","TOURS","TOWN","TOYOTA","TOYS","TR","TRADE","TRADING","TRAINING","TRAVEL","TRAVELCHANNEL","TRAVELERS","TRAVELERSINSURANCE","TRUST","TRV","TT","TUBE","TUI","TUNES","TUSHU","TV","TVS","TW","TZ","UA","UBANK","UBS","UG","UK","UNICOM","UNIVERSITY","UNO","UOL","UPS","US","UY","UZ","VA","VACATIONS","VANA","VANGUARD","VC","VE","VEGAS","VENTURES","VERISIGN","VERSICHERUNG","VET","VG","VI","VIAJES","VIDEO","VIG","VIKING","VILLAS","VIN","VIP","VIRGIN","VISA","VISION","VIVA","VIVO","VLAANDEREN","VN","VODKA","VOLKSWAGEN","VOLVO","VOTE","VOTING","VOTO","VOYAGE","VU","VUELOS","WALES","WALMART","WALTER","WANG","WANGGOU","WATCH","WATCHES","WEATHER","WEATHERCHANNEL","WEBCAM","WEBER","WEBSITE","WED","WEDDING","WEIBO","WEIR","WF","WHOSWHO","WIEN","WIKI","WILLIAMHILL","WIN","WINDOWS","WINE","WINNERS","WME","WOLTERSKLUWER","WOODSIDE","WORK","WORKS","WORLD","WOW","WS","WTC","WTF","XBOX","XEROX","XFINITY","XIHUAN","XIN","XN--11B4C3D","XN--1CK2E1B","XN--1QQW23A","XN--2SCRJ9C","XN--30RR7Y","XN--3BST00M","XN--3DS443G","XN--3E0B707E","XN--3HCRJ9C","XN--3PXU8K","XN--42C2D9A","XN--45BR5CYL","XN--45BRJ9C","XN--45Q11C","XN--4DBRK0CE","XN--4GBRIM","XN--54B7FTA0CC","XN--55QW42G","XN--55QX5D","XN--5SU34J936BGSG","XN--5TZM5G","XN--6FRZ82G","XN--6QQ986B3XL","XN--80ADXHKS","XN--80AO21A","XN--80AQECDR1A","XN--80ASEHDB","XN--80ASWG","XN--8Y0A063A","XN--90A3AC","XN--90AE","XN--90AIS","XN--9DBQ2A","XN--9ET52U","XN--9KRT00A","XN--B4W605FERD","XN--BCK1B9A5DRE4C","XN--C1AVG","XN--C2BR7G","XN--CCK2B3B","XN--CCKWCXETD","XN--CG4BKI","XN--CLCHC0EA0B2G2A9GCD","XN--CZR694B","XN--CZRS0T","XN--CZRU2D","XN--D1ACJ3B","XN--D1ALF","XN--E1A4C","XN--ECKVDTC9D","XN--EFVY88H","XN--FCT429K","XN--FHBEI","XN--FIQ228C5HS","XN--FIQ64B","XN--FIQS8S","XN--FIQZ9S","XN--FJQ720A","XN--FLW351E","XN--FPCRJ9C3D","XN--FZC2C9E2C","XN--FZYS8D69UVGM","XN--G2XX48C","XN--GCKR3F0F","XN--GECRJ9C","XN--GK3AT1E","XN--H2BREG3EVE","XN--H2BRJ9C","XN--H2BRJ9C8C","XN--HXT814E","XN--I1B6B1A6A2E","XN--IMR513N","XN--IO0A7I","XN--J1AEF","XN--J1AMH","XN--J6W193G","XN--JLQ480N2RG","XN--JVR189M","XN--KCRX77D1X4A","XN--KPRW13D","XN--KPRY57D","XN--KPUT3I","XN--L1ACC","XN--LGBBAT1AD8J","XN--MGB9AWBF","XN--MGBA3A3EJT","XN--MGBA3A4F16A","XN--MGBA7C0BBN0A","XN--MGBAAKC7DVF","XN--MGBAAM7A8H","XN--MGBAB2BD","XN--MGBAH1A3HJKRD","XN--MGBAI9AZGQP6J","XN--MGBAYH7GPA","XN--MGBBH1A","XN--MGBBH1A71E","XN--MGBC0A9AZCG","XN--MGBCA7DZDO","XN--MGBCPQ6GPA1A","XN--MGBERP4A5D4AR","XN--MGBGU82A","XN--MGBI4ECEXP","XN--MGBPL2FH","XN--MGBT3DHD","XN--MGBTX2B","XN--MGBX4CD0AB","XN--MIX891F","XN--MK1BU44C","XN--MXTQ1M","XN--NGBC5AZD","XN--NGBE9E0A","XN--NGBRX","XN--NODE","XN--NQV7F","XN--NQV7FS00EMA","XN--NYQY26A","XN--O3CW4H","XN--OGBPF8FL","XN--OTU796D","XN--P1ACF","XN--P1AI","XN--PGBS0DH","XN--PSSY2U","XN--Q7CE6A","XN--Q9JYB4C","XN--QCKA1PMC","XN--QXA6A","XN--QXAM","XN--RHQV96G","XN--ROVU88B","XN--RVC1E0AM3E","XN--S9BRJ9C","XN--SES554G","XN--T60B56A","XN--TCKWE","XN--TIQ49XQYJ","XN--UNUP4Y","XN--VERMGENSBERATER-CTB","XN--VERMGENSBERATUNG-PWB","XN--VHQUV","XN--VUQ861B","XN--W4R85EL8FHU5DNRA","XN--W4RS40L","XN--WGBH1C","XN--WGBL6A","XN--XHQ521B","XN--XKC2AL3HYE2A","XN--XKC2DL3A5EE0H","XN--Y9A3AQ","XN--YFRO4I67O","XN--YGBI2AMMX","XN--ZFR164B","XXX","XYZ","YACHTS","YAHOO","YAMAXUN","YANDEX","YE","YODOBASHI","YOGA","YOKOHAMA","YOU","YOUTUBE","YT","YUN","ZA","ZAPPOS","ZARA","ZERO","ZIP","ZM","ZONE","ZUERICH","ZW"];var u=(0,r.memo)(function(e){let{index:t,totalCount:n,message:o,showSystemMessage:d=!0,showActions:R=!0,model:u,onUserProfileClick:x,userProfilePicURL:g,onDeleteMessage:p,onEditMessage:B,botAvatar:M,generalInstructions:G,onSystemClick:D,onForkChat:U,isEditting:f}=e,[X,P]=(0,r.useState)(!1),H=o.content.trim(),y=H;if("assistant"===o.role)try{let e=JSON.parse(y);("object"==typeof e||Array.isArray(e))&&(y="```json\n".concat(y,"\n```"))}catch(e){}let j=(0,r.useMemo)(()=>[h.Z,S.Z],[]),b=(0,r.useMemo)(()=>({table(e){let{node:t,inline:n,className:r,children:a,...i}=e;return(0,s.jsx)("div",{className:"overflow-auto",children:(0,s.jsx)("table",{className:r,...i,children:a})})},li(e){let{node:t,inline:n,className:r,children:a,...i}=e,o=a&&a[0],l=[];if(o&&"string"==typeof o){if(o.trim().toLowerCase().match(/^[a-z0-9]+([\-_\.]{1}[a-z0-9]+)*\.[a-z]{2,5}$/)){let e=o.trim().toUpperCase().split(".").slice(-1)[0];L.includes(e)&&l.push((0,s.jsx)(I,{domain:o},"check-domain"))}if(o.trim().match(/#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/)){let e=o.trim().match(/#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/)[0];l.push((0,s.jsx)("div",{className:"m-0 ml-1 w-4 h-4 rounded-md inline-block border border-gray-200 align-middle",style:{backgroundColor:e}},"color"))}}return(0,s.jsxs)("li",{className:(r||"")+(l.length?" group":""),...i,ordered:!!i.ordered,children:[a,l]})},a(e){let{node:t,inline:n,className:r,children:a,...i}=e;return(0,s.jsx)("a",{className:r,...i,target:"_blank",rel:"noopener noreferrer",children:a})},code(e){let{node:t,inline:n,className:r,children:a,...i}=e,o=/language-(\w+)/.exec(r||""),l=o?o[1].toLowerCase():"";return n?(0,s.jsx)("code",{className:"text-sm inline border border-gray-200 rounded bg-gray-100 dark:bg-zinc-900 px-1",children:a}):(0,s.jsx)(T,{code:a[0],language:l,children:(0,s.jsx)(C.Z,{children:String(a).replace(/\n$/,""),customStyle:{lineHeight:"1.25em",fontSize:"0.875em"},codeTagProps:{style:{lineHeight:"inherit",fontSize:"inherit"}},language:l,...i})})}}),[]);if("system"===o.role&&!d)return null;let F=((null==o?void 0:o.model)||"").toLowerCase().startsWith("gpt-4")?"/gpt4.png":"/favicon-192x192.png";return(0,s.jsx)(N,{children:(0,s.jsxs)("div",{className:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}("pl-14 relative response-block scroll-mt-32 rounded-md hover:bg-gray-50 dark:hover:bg-zinc-900 pb-2 pt-2 pr-2 group min-h-[52px]"),children:[(0,s.jsx)("div",{className:"absolute top-2 left-2",children:"user"===o.role?(0,s.jsx)("button",{onClick:x,className:"w-9 h-9 bg-gray-200 rounded-md  flex-none flex items-center justify-center text-gray-500 hover:bg-gray-300 transition-all group active:bg-gray-200 overflow-hidden",children:g?(0,s.jsx)("img",{className:"w-9 h-9 user-avatar object-contain",src:g,alt:"User profile"}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.Xws,{className:"w-5 h-5 inline-block group-hover:hidden"}),(0,s.jsx)(l.H3h,{className:"w-5 h-5 hidden group-hover:inline-block"})]})}):"system"===o.role?(0,s.jsx)("button",{onClick:D,className:"w-9 h-9 bg-gray-200 rounded-md  flex-none flex items-center justify-center text-gray-500 hover:bg-gray-300 transition-all active:bg-gray-200",children:(0,s.jsx)(E.QAE,{className:"w-5 h-5"})}):(0,s.jsx)("div",{className:"relative w-9 h-9",children:(0,s.jsx)("img",{src:M||F,className:"w-9 h-9 rounded-md flex-none"})})}),!f&&"system"!==o.role&&R&&(0,s.jsx)(A,{text:H,showEdit:"user"===o.role,showRawButton:"assistant"===o.role,showRaw:X,toggleRaw:()=>{P(!X)},onDelete:()=>p(t),onEditMessage:()=>B(t)},H),(0,s.jsx)("div",{className:"w-full",children:"user"===o.role?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c,{isEditting:f,generalInstructions:G,content:y}),f?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"my-2 text-xs text-red-500 font-semibold",children:"Note: All subsequent messages will be deleted after you submit an edit."}),(0,s.jsx)("div",{className:"my-2 text-xs",children:"If you want to preserve this conversation, you can start a new chat from this point."}),(0,s.jsxs)("button",{onClick:()=>U(t),className:"inline-flex items-center justify-center rounded-md px-4 py-2 text-sm shadow-md text-white bg-green-500 transition-all active:bg-green-500 hover:bg-green-600 group space-x-2",children:[(0,s.jsx)(i.U8C,{className:"w-6 h-6 rotate-180"}),(0,s.jsx)("span",{children:"Start New Chat From Here"})]})]}):null]}):"system"===o.role?(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"text-gray-500 text-xs mb-1 whitespace-pre-line",children:["Model: ",u||"default"]}),(0,s.jsxs)("div",{className:"text-gray-500 text-xs mb-1 truncate",children:["System Instruction:"," ",o.originalContent||y||(0,s.jsx)("i",{children:"(No instruction provided)"})]}),o.web?(0,s.jsx)("div",{className:"text-gray-500 text-xs mb-1 whitespace-pre-line",children:"Web Search: Enabled"}):null]}):X?(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"text-gray-500 text-xs mb-1",children:"Raw response:"}),(0,s.jsx)(O,{rawContent:H})]}):(0,s.jsx)("div",{className:"prose prose-sm max-w-full dark:prose-invert",children:"tool-response"===o.type?(0,s.jsxs)("details",{children:[(0,s.jsx)("summary",{className:"hover:underline cursor-pointer",children:"Result"}),(0,s.jsx)(O,{rawContent:H.replace("<<<<<<\n","").trim()})]}):(0,s.jsx)(m.Z,{children:y,remarkPlugins:j,components:b})})}),"length"===o.finish?(0,s.jsx)(a.Z,{}):null]})})})},51448:function(e,t,n){n.d(t,{Z:function(){return i}});var s=n(85893);n(67294);var r=n(9008),a=n.n(r);function i(e){let{title:t,showNotification:n=!1,description:r="Use ChatGPT with enhanced features like chat history search, folders, integrations, prompt library, etc.",hostConfig:i,overridePosterURL:o}=e,l=i?i.brand+" – "+i.tagline:"TypingMind — A better UI for ChatGPT",A=(n?"(*) ":"")+(t||l),N=i?i.hostname?"https://"+i.hostname+"/":"https://".concat(i.subdomain,".typingcloud.com/"):"https://www.typingmind.com",E=i&&"".concat(N,"api/poster?name=").concat(encodeURIComponent(i.name),"&tagline=").concat(encodeURIComponent(i.tagline),"&logo=").concat(i.logoURL),c=o||(null==i?void 0:i.posterURL)||E||"https://www.typingmind.com/poster-2.png",I=(null==i?void 0:i.description)||r,S=null==i?void 0:i.logoURL;return(0,s.jsxs)(a(),{children:[(0,s.jsx)("title",{children:A}),(0,s.jsx)("meta",{name:"title",content:A}),(0,s.jsx)("meta",{name:"description",content:I}),(0,s.jsx)("meta",{property:"og:type",content:"website"}),(0,s.jsx)("meta",{property:"og:url",content:N}),(0,s.jsx)("meta",{property:"og:title",content:A}),(0,s.jsx)("meta",{property:"og:description",content:I}),(0,s.jsx)("meta",{property:"og:image",content:c}),(0,s.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,s.jsx)("meta",{property:"twitter:url",content:N}),(0,s.jsx)("meta",{property:"twitter:title",content:A}),(0,s.jsx)("meta",{property:"twitter:description",content:I}),(0,s.jsx)("meta",{property:"twitter:image",content:c}),(0,s.jsx)("meta",{name:"viewport",content:"initial-scale=1, viewport-fit=cover"}),(0,s.jsx)("link",{rel:"apple-touch-icon",sizes:"152x152",href:S||"/apple-icon-152x152.png"}),(0,s.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:S||"/apple-icon-180x180.png"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:S||"/android-icon-192x192.png"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:S||"/favicon-32x32.png"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:S||"/favicon-96x96.png"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:S||"/favicon-16x16.png"}),(0,s.jsx)("link",{rel:"manifest",href:i?"/api/manifest":"/manifest.json"}),(0,s.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,s.jsx)("meta",{name:"msapplication-TileImage",content:S||"/ms-icon-144x144.png"}),(0,s.jsx)("meta",{name:"theme-color",content:"#ffffff"})]})}},82080:function(e,t,n){n.d(t,{Z:function(){return r}});var s=n(85893);function r(){return(0,s.jsxs)("details",{children:[(0,s.jsx)("summary",{className:"text-left font-semibold my-2 text-base cursor-pointer hover:underline",children:"How tokens work?"}),(0,s.jsxs)("ul",{className:"space-y-2 list-disc pl-4",children:[(0,s.jsx)("li",{children:"This is the total length of your current conversation. It is calculated by OpenAI's API when you send a message."}),(0,s.jsxs)("li",{children:["When you reach a certain length, you cannot add any more messages to the chat. This is the ",(0,s.jsx)("b",{children:"context length"})," limit of the OpenAI's API."]}),(0,s.jsxs)("li",{children:["GPT-3.5 allows maximum of ",(0,s.jsx)("b",{children:"4,096"})," tokens per chat. GPT-4 allows maximum of ",(0,s.jsx)("b",{children:"8,192"})," tokens per chat in the 8K model and"," ",(0,s.jsx)("b",{children:"32,768"})," tokens in the 32K model. OpenAI may increase the context length limit in the future."]}),(0,s.jsxs)("li",{className:"",children:["Some enhanced features on TypingMind will increase your token usage. You can always turn these features off in the Settings pannel (click the gear icon in the sidebar). The enhanced features include: Chat Title Suggestion, Search Keywords Suggestions, AI Characters, Upload Document, etc. Amount of tokens used depends on the AI character and the length of your document."," "]}),(0,s.jsx)("li",{children:"If you reached the context length limit, you can delete some old messages to continue the chat, or start a new chat."}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{className:"text-blue-500 hover:underline",target:"_blank",rel:"noopener noreferrer",href:"https://platform.openai.com/docs/guides/chat",children:"Learn more about OpenAI's model, tokens, and context length here."})})]})]})}n(67294)}}]);