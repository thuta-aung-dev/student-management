import { useState,useEffect } from "react";
import { BrowserRouter,Routes,Route,useParams, Link } from "react-router-dom";
function App(){
   const [animelist,setAnimelist] = useState([
      {
        id:1,
        title:"Vinland Saga",
        image:"https://images8.alphacoders.com/130/1305112.jpeg",
        rating:9.5,
        review: `    
        Vinland Saga ဟာ ပုံမှန်ကြည့်နေကျ အောင်ပွဲခံ တိုက်ခိုက်ရေး Shounen Anime တွေလိုမျိုး စွမ်းအားတွေပြ၊ Battle တွေနိုင်ရင် အရာရာပြီးပြတ်သွားတယ်ဆိုတဲ့ ပုံစံခွက်ထဲကနေ ရဲရဲဝံ့ဝံ့ ခွဲထွက်ထားတဲ့ Masterpiece (ပြောင်မြောက်တဲ့ လက်ရာ) တစ်ခု ဖြစ်ပါတယ်။ ၁၁ ရာစု Viking ခေတ် နောက်ခံ သမိုင်းကြောင်းကို အခြေခံထားပြီး လူသားတစ်ယောက်ရဲ့ စိတ်ဒဏ်ရာ၊ လက်စားချေမှုနဲ့ နာကျင်မှုတွေကနေ ရုန်းထွက်တဲ့အကြောင်းကို ရင်နင့်စရာ ကောင်းလောက်အောင် ပုံဖော်ထားတာပါ။

        အစပိုင်းမှာတော့ ဖခင်ဖြစ်သူအတွက် ကမ္ဘာမီးလောင်မတတ် ခံပြင်းပြီး ရန်သူ့နောက်ကို တကောက်ကောက်လိုက်ရင်း လက်စားချေဖို့ ကြိုးစားတဲ့ ကောင်လေးတစ်ယောက်ရဲ့ သာမန် Revenge Story လိုမျိုး စတင်ခဲ့ပါတယ်။ ဒါပေမဲ့ ဇာတ်လမ်းက ကြာလေလေ "လက်စားချေခြင်း" ဆိုတဲ့ စိတ်ကွင်းဆက်က လူတစ်ယောက်ကို ဘယ်လောက်အထိ ဖျက်ဆီးပစ်နိုင်လဲ၊ ပြီးတော့ စစ်ပွဲရဲ့ ရက်စက်ကြမ်းကြုတ်မှုတွေက လူတွေရဲ့ လူပီသမှုကို ဘယ်လို ရိုက်ချိုးပစ်လဲဆိုတာကို သွေးထွက်သံယို အက်ရှင်အခန်းတွေနဲ့အတူ တွဲပြီး သရုပ်ဖော်သွားပါတယ်။
        
    ဒီ Series မှာ Major Character တိုင်းဟာ အဖြူအမည်း သဲသဲကွဲကွဲ မရှိဘဲ Grey Area (မီးခိုးရောင်) ထဲမှာ ရှိနေကြတာပါ။

        Thorfinn (မင်းသား): ဒေါသနဲ့ အမုန်းတရားတွေအောက်မှာ မျက်စိကန်းပြီး သားရဲတစ်ကောင်လို ရှင်သန်နေရတဲ့ ဘဝကနေ၊ တစ်စတစ်စနဲ့ စိတ်ပိုင်းဆိုင်ရာ ပြောင်းလဲလာပုံ (သူ့ရဲ့ Redemption Arc) က တကယ့်ကို အနုပညာဆန်ပါတယ်။

        Askeladd & Other Characters: ဇာတ်ကောင်တွေရဲ့ အတွေးအခေါ်၊ ရည်မှန်းချက်နဲ့ အတွင်းစိတ် ပဋိပက္ခတွေကို ချပြသွားတာ အရမ်းပီပြင်ပါတယ်။ မုန်းရမှာလိုလို၊ သနားရမှာလိုလိုနဲ့ ပရိသတ်ကို စွဲလန်းသွားအောင် ဆွဲခေါ်နိုင်တဲ့ ဇာတ်ကောင်စရိုက်တွေ ချည်းပါပဲ။

        Season 1 က စစ်ပွဲတွေ၊ အကွက်ချ စီစဉ်မှုတွေ၊ ဓားခုတ်လှံထိုး အက်ရှင်တွေနဲ့ ရင်ဖိုစိတ်လှုပ်ရှားစရာ ကောင်းအောင် ပြုလုပ်ထားပြီး Wit Studio ရဲ့ ထုံးစံအတိုင်း Animation နဲ့ တိုက်ခိုက်ရေး Choreography တွေက အပစ်ပြောစရာမရှိအောင် လှပပါတယ်။

        Season 2 (MAPPA) မှာတော့ ဇာတ်ရှိန်က ပိုပြီး Slow-burn (အေးအေးမှန်မှန်နဲ့ အတွေးပွားစရာ) ဖြစ်သွားပါတယ်။ အက်ရှင်ထက် စာရင် လူသားဆန်မှု၊ နောင်တ၊ ကိုယ်ချင်းစာတရားနဲ့ "စစ်မှန်တဲ့ ခွန်အားဆိုတာ ဘာလဲ" ဆိုတဲ့ ဒဿနပိုင်းကို ပိုအသားပေးသွားတာကြောင့် ပိုပြီး Mature (ရင့်ကျက်) တဲ့ Vibe ကို ရရှိစေမှာပါ။

        The Core Message:
        "I have no enemies" — ဒီ Series ထဲက အဓိက စကားစုလေးအတိုင်းပါပဲ။ တစ်ဖက်လူကို ရန်သူလို့ သတ်မှတ်ပြီး တိုက်ခိုက်အနိုင်ယူနေသရွေ့ စစ်မှန်တဲ့ လွတ်လပ်မှုကို မရနိုင်ဘူးဆိုတဲ့ သတင်းစကားကို ပရိသတ်ရင်ထဲ ရိုက်ခတ်သွားအောင် ပေးစွမ်းနိုင်ပါတယ်။`,
      },
      {
        id:2,
        title:"Code Geass",
        image:"https://tse4.mm.bing.net/th/id/OIP.KDyQVbGVxMugUvwRI4As7QHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
        rating:9.5,
        review:`Code Geass: Lelouch of the Rebellion ဟာ Anime လောကရဲ့ All-Time Classics တွေထဲက တစ်ခုဖြစ်ပြီး Sci-Fi, Mecha (စစ်ရိုဘော့)၊ နိုင်ငံရေးအရှုပ်အထွေးနဲ့ စိတ္တဗေဒပိုင်းဆိုင်ရာ အားပြိုင်မှုတွေကို အကောင်းဆုံး ပေါင်းစပ်ပြဌာန်းထားတဲ့ Masterpiece တစ်ခု ဖြစ်ပါတယ်။

ဒီ Series ရဲ့ အဓိက ကျောရိုးက မင်းသား Lelouch lamperouge ပါပဲ။ သူဟာ ပုံမှန် Anime တွေလို မဟုတ်ဘဲ ဖြူစင်တဲ့သူ မဟုတ်ပါဘူး။ ကိုယ်ပိုင် ရည်မှန်းချက်နဲ့ လက်စားချေဖို့အတွက်ဆိုရင် ဉာဏ်ဆင်တာ၊ လူတွေကို အသုံးချတာ၊ ရက်စက်တဲ့ အကွက်တွေ ရွှေ့တာတွေကို နောက်တွန့်မနေတဲ့ Anti-Hero (သို့) Villain-like Protagonist အမျိုးအစား ဖြစ်ပါတယ်။ သူ့ရဲ့ ပါးနပ်မှု၊ Charisma နဲ့ စစ်တုရင် ကစားသလို ဗျူဟာခင်းပြီး တစ်ကမ္ဘာလုံးကို တော်လှန်ဖို့ ကြိုးစားတဲ့ ပုံစံက ကြည့်ရတာ တကယ့်ကို ရင်ဖိုဖို့ကောင်းပြီး စွဲလန်းဖို့ ကောင်းပါတယ်။

ဇာတ်လမ်းထဲမှာ Lelouch ရရှိသွားတဲ့ "Geass" ဆိုတဲ့ စွမ်းအားဟာ "ဘယ်သူ့ကိုမဆို မိမိအမိန့်ကို တစ်ကြိမ်တစ်ခါ လုံးဝအကြွင်းမဲ့ နာခံစေရမယ်" ဆိုတဲ့ အစွမ်း ဖြစ်ပါတယ်။ ဒီလို အကန့်အသတ်မဲ့ စွမ်းအားကြီးကို သာမန် Fighting Power လို မသုံးဘဲ၊ နိုင်ငံရေး အကွက်တွေ၊ စစ်ဗျူဟာတွေနဲ့ လူတွေရဲ့ စိတ်ပညာကို ကစားတဲ့နေရာမှာ သုံးသွားတာက ဇာတ်လမ်းကို အဆင့်အတန်း မြင့်သွားစေပါတယ်။ စွမ်းအားရဲ့ နောက်ကွယ်က ပေးဆပ်ရမှုတွေနဲ့ အကျိုးဆက်တွေကလည်း ဇာတ်ရှိန်ကို ပိုမြင့်စေပါတယ်။

ဇာတ်လမ်းက Britannia ဆိုတဲ့ အင်ပါယာကြီးက ဂျပန်နိုင်ငံ (Area 11) ကို သိမ်းပိုက်ထားတဲ့ ခေတ်နောက်ခံ ဖြစ်ပါတယ်။

Lelouch က စနစ်ဆိုးကြီးကို ဖျက်ဆီးဖို့ "အတွင်းကနေ ပြောင်းလဲလို့မရရင် အပြင်ကနေ အင်အားသုံးပြီး အမြစ်ဖြတ်ပစ်ရမယ်" ဆိုတဲ့ လမ်းစဉ်ကို သွားပါတယ်။

သူ့ရဲ့ သူငယ်ချင်း Suzaku ကတော့ "မှားယွင်းတဲ့ နည်းလမ်းနဲ့ ရလာတဲ့ ရလဒ်က မမှန်ကန်နိုင်ဘူး၊ စနစ်တစ်ခုကို အတွင်းထဲကနေပဲ တရားမျှတစွာ ပြောင်းလဲရမယ်" ဆိုပြီး ရပ်တည်ပါတယ်။

ဒီလို မတူညီတဲ့ အတွေးအခေါ် နှစ်ခု ထိပ်တိုက်တွေ့တဲ့ အခါမှာ ဘယ်သူက မှန်လဲ၊ ဘယ်သူက မှားလဲဆိုတာ ခွဲခြားရခက်အောင် ပရိသတ်ကို စဉ်းစားစရာ တွေးခေါ်စရာတွေ အများကြီး ပေးပါတယ်။

Code Geass ကို ကြည့်ဖူးသူတိုင်း တစ်ညီတစ်ညွတ်တည်း ဝန်ခံရတဲ့အချက်ကတော့ သူ့ရဲ့ Ending (ဇာတ်သိမ်းခန်း) ပါပဲ။ Plot twist ပေါင်းများစွာ၊ စိတ်လှုပ်ရှားစရာ အချိုးအကွေ့တွေနဲ့ သွားရင်း နောက်ဆုံး Season 2 ရဲ့ အဆုံးသတ်မှာ ချပြသွားတဲ့ နိဂုံးဟာ Anime သမိုင်းတစ်လျှောက် အပြောင်မြောက်ဆုံး၊ ရင်အဖွင့်ရဆုံးနဲ့ Perfect အဖြစ်ဆုံး ဇာတ်သိမ်းတွေထဲက တစ်ခုအဖြစ် ယနေ့အထိ တင်စားခြင်း ခံနေရတုန်း ဖြစ်ပါတယ်။

The Core Vibe:
Death Note ထဲကလို ဉာဏ်ချင်းပြိုင်တာကို သဘောကျပြီး၊ တစ်ဖက်မှာလည်း စစ်ပွဲတွေ၊ တော်လှန်ရေးတွေနဲ့ အားရပါးရ အက်ရှင်တွေကိုပါ ပေါင်းစပ်ကြည့်ချင်တယ်ဆိုရင် Code Geass ဟာ သင့်အတွက် ရာနှုန်းပြည့် စိတ်ကျေနပ်မှု ပေးနိုင်မယ့် Series ဖြစ်ပါတယ်။`,
      },
      {
        id:3,
        title:"Jojo's Bazarre Adventure",
        image:"https://tse3.mm.bing.net/th/id/OIP.c-ZWn5R4wyRubirAWbfiKQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
        rating:9.5,
        review:`JoJo's Bizarre Adventure ဟာ နာမည်အတိုင်းပဲ တကယ့်ကို ထူးဆန်းအံ့ဩစရာကောင်းပြီး Anime လောကမှာ သူ့လို Vibe မျိုး၊ သူ့လို Style မျိုး တစ်ကားမှမရှိဘဲ သီးသန့်ရပ်တည်နေတဲ့ Legendary & Cult-Classic Series တစ်ခု ဖြစ်ပါတယ်။ ၁၉၈၀ ခုနှစ်တွေကတည်းက စတင်ခဲ့တဲ့ မန်ဂါဖြစ်ပြီး ယနေ့အထိ ခေတ်မပြယ်ဘဲ Trend ဖြစ်နေတုန်းပါပဲ။

ဒီဇာတ်လမ်းရဲ့ အမိုက်ဆုံး အချက်က "Joestar" ဆိုတဲ့ မျိုးရိုးက ဆင်းသက်လာတဲ့ သားစဉ်မြေးဆက်တွေရဲ့ စွန့်စားခန်းကို Part အလိုက် ပိုင်းပြီး ပြောပြသွားတာ ဖြစ်ပါတယ်။

Part တိုင်းမှာ အဓိကမင်းသားအသစ် (သူ့နာမည်ကို အတိုကောက်ခေါ်ရင် JoJo ဖြစ်မယ့်သူ)၊ နောက်ခံခေတ်ကာလအသစ်၊ နိုင်ငံအသစ်နဲ့ အငွေ့အသက် (Genre) အသစ်တွေကို ပြောင်းလဲတင်ဆက်သွားတာပါ။

Part 1 မှာ ၁၉ ရာစု အင်္ဂလန်က Gothic Horror ပုံစံသွားပြီး၊ Part 2 မှာ WWII ခေတ် Adventure၊ Part 3 မှာ ကမ္ဘာပတ်တဲ့ Road Trip၊ Part 4 မှာတော့ မြို့လေးတစ်မြို့က လူသတ်သမားကို လိုက်ဖမ်းတဲ့ Mystery စသဖြင့် Part အလိုက် မတူညီတဲ့ အရသာကို တစ်ထိုင်တည်း ရနိုင်ပါတယ်။

Anime အများစုမှာ စွမ်းအားကြီးတဲ့သူက အမြဲနိုင်လေ့ရှိပေမဲ့ JoJo မှာတော့ အဲ့ဒီပုံစံခွက် ပျက်သွားပါတယ်။ Part 3 ကစပြီး မိတ်ဆက်ပေးတဲ့ "Stand" (ကိုယ်ပိုင် စိတ်ဝိဉာဉ်စွမ်းအား) စနစ်ဟာ Anime လောကရဲ့ တိုက်ခိုက်မှုစနစ်တွေကို လုံးဝပြောင်းလဲပစ်ခဲ့တာပါ။

ဒီမှာ Stand တွေက အလွန်ဆန်းကြယ်ပြီး တချို့စွမ်းအားတွေက ဓားခုတ်တာ၊ မီးမှုတ်တာထက် "အချိန်ကို ထိန်းချုပ်တာ"၊ "ဇစ်တပ်တာ"၊ "အရာဝတ္ထုတွေကို ပြန်ပြင်တာ" စသဖြင့် ထူးထူးဆန်းဆန်းတွေ ဖြစ်နေတတ်ပါတယ်။

ဒါကြောင့် တိုက်ပွဲတွေက ဘယ်သူ အင်အားပိုကြီးလဲဆိုတာထက်၊ မိမိရဲ့ အားနည်းချက်ရှိတဲ့ စွမ်းအားကို သုံးပြီး ရန်သူ့ရဲ့ စွမ်းအားကို ဘယ်လို ဉာဏ်ဆင် တွက်ချက်ကျော်ဖြတ်မလဲ ဆိုတဲ့ ရင်ခုန်စရာ Chess ကစားပွဲလို ဉာဏ်အသားပေး တိုက်ပွဲတွေ ဖြစ်လို့ ကြည့်ရတာ လုံးဝ မရိုးနိုင်ပါဘူး။

ဒီကားရဲ့ ဖန်တီးရှင် Hirohiko Araki ဟာ ကမ္ဘာကျော် Fashion Brand တွေ (Gucci တို့လို) နဲ့ပါ ပူးပေါင်းဖန်တီးဖူးတဲ့အထိ အနုပညာမျက်စိရှိသူပါ။ ဇာတ်ကောင်တွေရဲ့ ဝတ်စုံဒီဇိုင်းတွေ၊ ရပ်ပြတဲ့ ပုံစံတွေ (JoJo Poses) နဲ့ အရောင်အသွေး သုံးစွဲမှုတွေဟာ အရမ်းကို Bold ဖြစ်ပြီး အနုပညာဆန်ပါတယ်။ တစ်ကမ္ဘာလုံးက Meme တွေ၊ Pop Culture တွေအပေါ် လွှမ်းမိုးမှု အရှိဆုံး Anime လည်း ဖြစ်ပါတယ်။ ပြီးတော့ ဇာတ်ကောင်နာမည်တွေနဲ့ Stand နာမည်တွေကို အနောက်တိုင်း Classic Rock Band တွေ၊ သီချင်းတွေ (ဥပမာ- Led Zeppelin, Queen, AC/DC) ကို အခြေခံပြီး ပေးထားတာမလို့ Music Fan တွေအတွက်လည်း ပိုသဘောကျစရာ ကောင်းပါတယ်။

The Vibe Check:
"It gets bizarre." အစပိုင်း Part 1 မှာ သာမန် Classic Shounen လိုမျိုး ပျင်းစရာကောင်းကောင်းနဲ့ စတင်နိုင်ပေမဲ့၊ Part 2 နဲ့ Part 3 ရောက်တာနဲ့ ဇာတ်လမ်းရဲ့ ထူးခြားဆန်းပြားတဲ့ ဆွဲဆောင်မှုနဲ့ လှည့်ကွက်တွေအောက်မှာ မျောပါသွားပြီး "ဒါမျိုး ငါတစ်ခါမှ မကြည့်ဖူးဘူး" ဆိုတဲ့ ခံစားချက်ကို ပေးပါလိမ့်မယ်။`,
      },
      {
        id:4,
        title:"Kingdom",
        image:"https://animotaku.fr/wp-content/uploads/2022/01/anime-kingdom-saison-4-visuel-2.jpeg",
        rating:8.5,
        review:`Kingdom ဟာ Anime လောကမှာ စစ်ဗျူဟာ၊ နိုင်ငံရေးနဲ့ စစ်ပွဲအက်ရှင် (Military & Historical Epic) ပိုင်းမှာ အကောင်းဆုံးနဲ့ အကြီးကျယ်ဆုံးလို့ သတ်မှတ်ခံထားရတဲ့ Masterpiece တစ်ခု ဖြစ်ပါတယ်။ တရုတ်ပြည် သမိုင်းကြောင်းထဲက "စစ်ဘုရင်ခေတ် ခုနစ်နိုင်ငံ အားပြိုင်မှု (Warring States Period)" ကို အခြေခံပြီး ခမ်းနားထည်ဝါလှတဲ့ စစ်တုရင်ကစားပွဲကြီးတစ်ခုလို ပုံဖော်ထားတာပါ။

ဇာတ်လမ်းက မိဘမဲ့ ကျွန်ဘဝကနေ "ကမ္ဘာ့အကြီးကျယ်ဆုံး စစ်သူကြီး (Great General under the Heavens)" ဖြစ်လာဖို့ ရည်မှန်းထားတဲ့ ကောင်လေး Xin (Shin) နဲ့ တစ်ကွဲတစ်ပြားစီ ဖြစ်နေတဲ့ တရုတ်ပြည်ကြီးကို သမိုင်းမှာ ပထမဆုံးအကြိမ်အဖြစ် တစ်စုတစ်စည်းတည်းဖြစ်အောင် (Unification) လုပ်ဖို့ ကြံရွယ်ထားတဲ့ မင်းသားငယ် Ying Zheng (Ei Sei) တို့နှစ်ယောက်ရဲ့ ခရီးစဉ်ကို အဓိကထား ရိုက်ကူးထားတာပါ။ ကြီးမားလှတဲ့ ရည်မှန်းချက်တွေနောက်ကို သူတို့နှစ်ယောက် မတူညီတဲ့ ကဏ္ဍ (စစ်တပ်နဲ့ နန်းတွင်း) ကနေ ဘယ်လို ရုန်းကန်တက်လှမ်းလဲဆိုတာ ရင်သပ်ရှုမောဖွယ် ကြည့်ရမှာ ဖြစ်ပါတယ်။

Kingdom ရဲ့ အတောက်ပဆုံး အချက်က စစ်ပွဲတွေရဲ့ အတိုင်းအဆ (Scale) ပါပဲ။ သောင်းဂဏန်း၊ သိန်းဂဏန်းရှိတဲ့ စစ်တပ်ကြီးတွေ ထိပ်တိုက်တွေ့တဲ့အခါ—

သာမန် အင်အားသုံး တိုက်ခိုက်တာမျိုး မဟုတ်ဘဲ စစ်သူကြီးတွေရဲ့ တပ်တည်ပုံ (Formations)၊ မြေမျက်နှာသွင်ပြင်ကို အသုံးချပုံ၊ ထောက်လှမ်းရေး၊ စိတ္တဗေဒအရ စစ်သည်တွေရဲ့ စိတ်ဓာတ် (Morale) ကို ကစားပုံတွေက တကယ့်ကို ပါးနပ်လွန်းပါတယ်။

စစ်သူကြီးတစ်ယောက်ချင်းစီမှာ မတူညီတဲ့ တိုက်ခိုက်ရေးစတိုင်နဲ့ "Instinctual (ဗီဇအလျောက် သိမြင်မှု)" သို့မဟုတ် "Strategic (ဗျူဟာမြောက် တွက်ချက်မှု)" ဆိုပြီး စွမ်းရည်တွေ ရှိကြတာမလို့ တပ်မှူးချင်း ဉာဏ်ပြိုင်ကြတဲ့ အခန်းတွေက သွေးပျက်စရာ ကောင်းလောက်အောင် အကွက်စိပ်ပါတယ်။

ဒီ Series က စစ်မြေပြင်တင် မဟုတ်ဘဲ နန်းတွင်းထဲက အာဏာလုပွဲတွေကိုပါ အပြိုင်အဆိုင် ပြသွားတာပါ။ အုပ်စုအချင်းချင်း၊ ဝန်ကြီးအချင်းချင်း နိုင်ငံရေးအရ အကွက်ချ သစ္စာဖောက်တာတွေ၊ မဟာမိတ်ဖွဲ့တာတွေ၊ အုပ်ချုပ်ရေးပိုင်း အားပြိုင်မှုတွေက စစ်မြေပြင်က သွေးထွက်သံယိုမှုတွေအတိုင်းပဲ ရင်တဖိုဖိုနဲ့ ကြည့်ရတာ အသက်ရှူရက်တောင် မရှိပါဘူး။

Kingdom မှာ ရှိတဲ့ စစ်သူကြီးတွေ (Generals) ဟာ မျက်နှာဖြတ်ခနဲ မြင်ရုံနဲ့တင် သူတို့ရဲ့ ရှိန်ဝါ (Presence) နဲ့တင် လိပ်ပြာလွင့်မတတ် ရှိလှပါတယ်။ စစ်မြေပြင်မှာ သူတို့ ပြောလိုက်တဲ့ မိန့်ခွန်းတစ်ခွန်း၊ ပြလိုက်တဲ့ သတ္တိတစ်ခုက စစ်သည်တွေကိုတင်မကဘဲ ကြည့်နေတဲ့ ပရိသတ်ကိုပါ ကြက်သီးတဖျန်းဖျန်း ထသွားစေလောက်တဲ့အထိ စွဲမက်စရာ Character Development တွေ ရှိပါတယ်။

A Quick Warning (Animation Option):
Season 1 (အထူးသဖြင့် အစပိုင်း) မှာ သုံးထားတဲ့ 3D CGI Animation က တော်တော်လေး စိမ်းပြီး ကြည့်ရတာ အသားမကျ ဖြစ်နိုင်ပါတယ်။ ဒါပေမဲ့ ဇာတ်လမ်း (Storytelling) က အရမ်းကောင်းလွန်းလို့ အဲ့ဒါကို ကျော်ဖြတ်နိုင်ဖို့ လိုပါတယ်။ Season 2 ကစလို့ Animation ပိုင်းက တဖြည်းဖြည်း တိုးတက်လာပြီး Season 3, 4, 5 တွေမှာတော့ လုံးဝ အမိုက်စား 2D Art Style နဲ့ အဆင့်မြင့်သွားတာမလို့ စိတ်ရှည်လက်ရှည် ကြည့်သင့်တဲ့ ကားမျိုး ဖြစ်ပါတယ်။`,
      }

   ])
   const [user,setUser]= useState(null);
   const [usernameInput,setUsernameInput]= useState("");
   const [passwordInput,setPasswordInput]= useState("");

   const handleFakeLogin = (e)=>{
     e.preventDefault();

      if(usernameInput==="admin" && passwordInput==="admin123")
        {
        setUser({username:"Thuta Aung",role:"admin"});
        }
          else if(usernameInput==="user" && passwordInput==="user123")
            {
              setUser({username:"Mg Mg",role:"user"})
             }else 
              {
                alert("အကောင့်မှားနေပါသည်!")
              }
      };

      const handleLogout=()=>{
        setUser(null);
        setUsernameInput("");
        setPasswordInput("");
      };
  
  const handlesubmit=(e)=>{
    e.preventDefault();
    alert("Anime သစ်ထည့်ခြင်း!");
  };

  if(!user){
    return(
      <div>
        <form action="" onSubmit={handleFakeLogin}>
          <h2>Login to Anime Rating Mm</h2>
          <div>
            <input type="text" placeholder="username" value={usernameInput} onChange={(e)=>setUsernameInput(e.target.value)} />
          </div>
          <div>
            <input type="password" placeholder="password" value={passwordInput} onChange={(e)=>setPasswordInput(e.target.value)} />
          </div>
          <button type="submit">
            sign in
          </button>
          <p>hint:admin/admin123 or user/user123</p>
        </form>
      </div>
    );
  }
  return(
    /*
    <div>
        <div>
          
      <h1>Anime Rating Myanmar</h1>

        </div>
       <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:'30px'}}>
              {animelist.map((anime)=>
                <div key={anime.id }>
                  <img src={anime.image}alt={anime.title} style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '5px' }} />
                  <div>
                    <h3>{anime.title}</h3>
                    <p>{anime.rating}</p>
                  </div>
                </div>
              )}
       </div>
    </div>
    
  */
            <BrowserRouter>
            <div style={{background:'#141414', minHeight:'100vh',color:"white", padding:'20px'}}>
              <Link to="/" style={{textDecoration:'none',color:'white'}}>
                  <h2>Anime Rating Myanmar</h2>
              </Link>
              <div>
                <span>hi,<b>{user.username}</b>({user.role})</span>
                <button onClick={handleLogout}>
                  logout 
                </button>
              </div>
              <Routes>
                <Route path="/" element={<Home animelist={animelist} user={user} handlesubmit={handlesubmit}/>}/>
                <Route path="/anime/:id" element={<AnimeReview animelist= {animelist}/>}/>              
              </Routes>
            </div>
            </BrowserRouter> 
 
  )
}

function Home({animelist,user,handlesubmit}){
  
  return(
    <div>
      {user && user.role=== "admin"&& (
      <form action="" onSubmit={handlesubmit}>
      <h3>Add New Anime(admin only)</h3>
      <button type="submit">Add anime</button>
      </form>
    )}
    
    
    <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))' ,gap:'30px',marginTop:'20px'}}>
      {animelist.map((anime)=>(
        <div key={anime.id} style={{background:'#222',padding:'15px',borderRadius:'8px',textAlign:'center'}}>
          <Link to={`/anime/${anime.id}`}>
              <img src={anime.image} alt={anime.title}
              style={{width:'100%',height:'280px',objectFit:'cover', borderRadius:'8px',textAlign:'center',cursor:"pointer"}} />
          </Link>
          <h3>{anime.title}</h3>
          <p>{anime.rating}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

function AnimeReview({animelist}){

  const {id} = useParams();

  const anime = animelist.find((a)=>a.id=== parseInt(id));

  if(!anime){
     return<h2>Anime can't be found!</h2>
}
return(
  <div style={{maxWidth:'850px',margin:'40px auto', background:'#222', padding:'25px',borderRadius:'10px'}}>
    <img src={anime.image} alt={anime.title} style={{width:'100%' , height:'auto',objectFit:'cover',borderRadius:'8px'}} />
    <h3 style={{color:'#646cff', marginTop:"20px 0"}}>{anime.title}</h3>
    <h3 style={{color:'#ffb400'}}>{anime.rating}</h3>
    <hr style={{borderColor:"#333",margin:'20px 0'}}/>
    <h2 style={{textAlign:'left', marginTop:'30px',color:'#fff',marginLeft:'10px'}}>Review:</h2>
    <p style={{lineHeight:'1.9',color:'#e0e0e0',fontSize:'1.15rem',whiteSpace:'pre-line',textAlign:"justify",letterSpacing:'0.005rem',padding:'0 10px'}}>{anime.review}</p>

    <Link to="/">
        <button style={{marginTop:'20px',padding:'10px 15px', background:'#333', color:'white',border:'none',borderRadius:'5px',cursor:"pointer"}}>
          Back to Home
        
        </button>
    </Link>
  </div>
)
}
export default App;