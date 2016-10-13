# Myanmasara-RESTful
Myanmasara RESTful API built on Nodejs, Express and MongoDB to test Myanmasara app in Angular2

The app currently works with a local MongoDB which renders the following.

USERS:

[
	{
	"_id": "577d12476664ac3345916503",
	"name": "Thant",
	"title": "Co-founder",
	"email": "test@email.com",
	"password": "1234",
	"role": "admin",
	"adminImageUrl": "https://storage.googleapis.com/myanmasara/team-img/Thant%20Profile%20PicOptimized.jpg",
	"bio": "Thant Sin is a postgraduate student at the School of Oriental and African Studies in London, studying media in development with the focus on digital culture, online public sphere, and the freedom of expression. His current research analyses the narratives of hate-speech on social media in Myanmar at the intersection of religious, political and nationalist ideologies. His research theme includes examining the impact of hate-speech on public opinion and violence mobilization.",
	"__v": 0
	},
	{
	"_id": "577fe970a5b369c764638bdf",
	"name": "Diego",
	"title": "Co-founder",
	"email": "test1@email.com",
	"password": "1234",
	"role": "admin",
	"adminImageUrl": "https://storage.googleapis.com/myanmasara/team-img/foto%20facebook%20lagoOptimized.jpg",
	"bio": "Communciations professional from Colombia based in London. As a freelancer, supported international organizations&apos; communications projects in Latin-America using visual design, audiovisual and web products. Has strong interest on sustainable social and economic developments that can preserve and promote cultural identities.",
	"__v": 0
	}
]

POSTS:

[
	{
	"_id": "577fed59b78ad4fc6bc0248f",
	"_author": "Diego",
	"title": "How X in Myanmar",
	"burmeseTitle": "ရက်နေ့တွင် တရက်အလိုက",
	"postImageUrl": "https://s3.amazonaws.com/myanmasara-test/IMG_3419.JPG",
	"totalLikes": 7,
	"iLike": true,
	"engContent": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie nunc id arcu ultricies, in suscipit nisi ultrices. Mauris ac tellus vestibulum, commodo turpis vel, ullamcorper metus. Pellentesque rutrum nunc vel purus efficitur rhoncus. Nullam sed mauris a purus volutpat ullamcorper vel sit amet ipsum. Suspendisse fringilla neque turpis. Nunc id ante iaculis, posuere neque sed, dictum velit. Vestibulum suscipit iaculis convallis. Nullam rutrum ante augue, eu pellentesque ante volutpat quis. Vivamus pharetra, arcu in faucibus varius, odio nibh dictum augue, vitae suscipit dui tortor sed nisl. Nunc lorem ipsum, tempor ut odio id, egestas posuere diam.<br>Donec dictum nibh vitae eros consequat, in facilisis justo sodales. Proin id vestibulum quam. Integer maximus nulla vitae tellus aliquet rhoncus. Donec sit amet ante vehicula leo accumsan venenatis. Quisque fringilla sapien quis molestie feugiat. Sed facilisis lectus feugiat arcu fringilla porttitor. Nunc eu nulla tempor, dictum mauris vitae, congue mi.<br>Vivamus lacus nibh, congue nec ligula at, eleifend aliquam elit. Morbi dignissim ipsum et sapien tincidunt, vitae mattis ipsum facilisis. In semper sapien ipsum, eu eleifend neque dignissim sit amet. Sed suscipit auctor condimentum. Curabitur et tortor risus. Aliquam luctus dictum leo ut pretium. Nunc quis mauris ut massa consectetur sollicitudin vitae vel orci. Donec justo massa, finibus laoreet pulvinar non, elementum vitae eros. Duis eget urna imperdiet, malesuada felis nec, hendrerit purus. Mauris tincidunt nibh libero, ac dictum nulla congue in. Fusce congue imperdiet nisi blandit posuere. Quisque ligula lorem, tincidunt sed diam a, consequat efficitur quam. Suspendisse potenti.<br>Integer tempor eu risus feugiat venenatis. Cras laoreet interdum velit vitae feugiat. Maecenas eu est varius, commodo ligula ut, sollicitudin sem. Fusce odio mauris, dictum sed nunc ut, fringilla imperdiet dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam dictum, lectus eget mollis ornare, leo leo mollis mauris, scelerisque egestas tortor ex quis erat. Vestibulum bibendum, purus at maximus maximus, dolor ipsum aliquet erat, sit amet tristique est risus quis justo. Fusce aliquet urna nisl, nec imperdiet enim imperdiet at. Sed posuere tempus interdum. In eu tempor leo, vel consectetur arcu. Etiam nec finibus lectus. Sed imperdiet mattis ex et rutrum.",
	"burmeseContent": "မေလ ၃၁ ရက်နေ့တွင် တရက်အလိုက တာလီဘန်သောင်းကျန်းသူအဖွဲ့မှ ပြန်ပေးဆွဲခဲ့သော ဘတ်စ်ကားခရီးသည် ဆယ့်နှစ်ဦးသည် ကွန်ဒွတ် (Kunduz) ပြည်နယ်၏ မြို့ဆင်ခြေဖုံးရှိ လမ်းဘေးတွင် သေဆုံးနေသည်ကို တွေ့ရှိရသည်။ တရက်ထဲတွင်ပင် သွေးထွက်သံယိုဓာတ်ပုံများ လူမှုမီဒီယာတွင် ဖုံလွှမ်းသွားခဲ့သည်။<br>တဆက်တည်းတွင် အဆိုပါ တာလီဘန်များသည် အသတ်ခံရသူများမှာ အစိုးရစစ်သားများဖြစ်ကြောင်း ၎င်းတို့၏ ဖေ့ဘုတ်(ခ) စာမျက်နှာမှနေတဆင့် ကြေညာချက် ပြုလုပ်ခဲ့သည်။ ထိုရေးတင်မှု နှင့် စာမျက်နှာသည် ဖေ့ဘုတ်(ခ)မှ ဖယ်ရှားခြင်းခံခဲ့ရသည်။",
	"__v": 0,
	"published": "2016-07-05T02:19:50.000Z"
	},
	{
	"_id": "577fed8eac5432206c46006d",
	"burmeseContent": "မေလ ၃၁ ရက်နေ့တွင် တရက်အလိုက တာလီဘန်သောင်းကျန်းသူအဖွဲ့မှ ပြန်ပေးဆွဲခဲ့သော ဘတ်စ်ကားခရီးသည် ဆယ့်နှစ်ဦးသည် ကွန်ဒွတ် (Kunduz) ပြည်နယ်၏ မြို့ဆင်ခြေဖုံးရှိ လမ်းဘေးတွင် သေဆုံးနေသည်ကို တွေ့ရှိရသည်။ တရက်ထဲတွင်ပင် သွေးထွက်သံယိုဓာတ်ပုံများ လူမှုမီဒီယာတွင် ဖုံလွှမ်းသွားခဲ့သည်။<br>တဆက်တည်းတွင် အဆိုပါ တာလီဘန်များသည် အသတ်ခံရသူများမှာ အစိုးရစစ်သားများဖြစ်ကြောင်း ၎င်းတို့၏ ဖေ့ဘုတ်(ခ) စာမျက်နှာမှနေတဆင့် ကြေညာချက် ပြုလုပ်ခဲ့သည်။ ထိုရေးတင်မှု နှင့် စာမျက်နှာသည် ဖေ့ဘုတ်(ခ)မှ ဖယ်ရှားခြင်းခံခဲ့ရသည်။",
	"engContent": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie nunc id arcu ultricies, in suscipit nisi ultrices. Mauris ac tellus vestibulum, commodo turpis vel, ullamcorper metus. Pellentesque rutrum nunc vel purus efficitur rhoncus. Nullam sed mauris a purus volutpat ullamcorper vel sit amet ipsum. Suspendisse fringilla neque turpis. Nunc id ante iaculis, posuere neque sed, dictum velit. Vestibulum suscipit iaculis convallis. Nullam rutrum ante augue, eu pellentesque ante volutpat quis. Vivamus pharetra, arcu in faucibus varius, odio nibh dictum augue, vitae suscipit dui tortor sed nisl. Nunc lorem ipsum, tempor ut odio id, egestas posuere diam.<br>Donec dictum nibh vitae eros consequat, in facilisis justo sodales. Proin id vestibulum quam. Integer maximus nulla vitae tellus aliquet rhoncus. Donec sit amet ante vehicula leo accumsan venenatis. Quisque fringilla sapien quis molestie feugiat. Sed facilisis lectus feugiat arcu fringilla porttitor. Nunc eu nulla tempor, dictum mauris vitae, congue mi.<br>Vivamus lacus nibh, congue nec ligula at, eleifend aliquam elit. Morbi dignissim ipsum et sapien tincidunt, vitae mattis ipsum facilisis. In semper sapien ipsum, eu eleifend neque dignissim sit amet. Sed suscipit auctor condimentum. Curabitur et tortor risus. Aliquam luctus dictum leo ut pretium. Nunc quis mauris ut massa consectetur sollicitudin vitae vel orci. Donec justo massa, finibus laoreet pulvinar non, elementum vitae eros. Duis eget urna imperdiet, malesuada felis nec, hendrerit purus. Mauris tincidunt nibh libero, ac dictum nulla congue in. Fusce congue imperdiet nisi blandit posuere. Quisque ligula lorem, tincidunt sed diam a, consequat efficitur quam. Suspendisse potenti.<br>Integer tempor eu risus feugiat venenatis. Cras laoreet interdum velit vitae feugiat. Maecenas eu est varius, commodo ligula ut, sollicitudin sem. Fusce odio mauris, dictum sed nunc ut, fringilla imperdiet dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam dictum, lectus eget mollis ornare, leo leo mollis mauris, scelerisque egestas tortor ex quis erat. Vestibulum bibendum, purus at maximus maximus, dolor ipsum aliquet erat, sit amet tristique est risus quis justo. Fusce aliquet urna nisl, nec imperdiet enim imperdiet at. Sed posuere tempus interdum. In eu tempor leo, vel consectetur arcu. Etiam nec finibus lectus. Sed imperdiet mattis ex et rutrum.",
	"iLike": true,
	"totalLikes": 7,
	"postImageUrl": "https://s3.amazonaws.com/myanmasara-test/IMG_3419.JPG",
	"burmeseTitle": "ရက်နေ့တွင် တရက်အလိုက",
	"title": "Scientific title",
	"_author": "Thant S",
	"__v": 0,
	"published": "2016-10-13T13:46:07.572Z"
	}
] 