var Post = require('../models/Post.model');
var User = require('../models/User.model');

module.exports = function(app){

    app.get('/api/setupPosts', function(req, res){
        // seed database
        
        var post1 = [
            {
                published: '2016-7-5 3:19:50',
                author : admin1._id,
                title : 'How climate change is affecting the fishing economy in Myanmar',
                burmeseTitle : 'ရက်နေ့တွင် တရက်အလိုက',
                postImageUrl:'https://s3.amazonaws.com/myanmasara-test/IMG_3419.JPG',
                totalLikes: 7,
                iLike : true,
                engContent : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie nunc id arcu ultricies, in suscipit nisi ultrices. Mauris ac tellus vestibulum, commodo turpis vel, ullamcorper metus. Pellentesque rutrum nunc vel purus efficitur rhoncus. Nullam sed mauris a purus volutpat ullamcorper vel sit amet ipsum. Suspendisse fringilla neque turpis. Nunc id ante iaculis, posuere neque sed, dictum velit. Vestibulum suscipit iaculis convallis. Nullam rutrum ante augue, eu pellentesque ante volutpat quis. Vivamus pharetra, arcu in faucibus varius, odio nibh dictum augue, vitae suscipit dui tortor sed nisl. Nunc lorem ipsum, tempor ut odio id, egestas posuere diam.<br>Donec dictum nibh vitae eros consequat, in facilisis justo sodales. Proin id vestibulum quam. Integer maximus nulla vitae tellus aliquet rhoncus. Donec sit amet ante vehicula leo accumsan venenatis. Quisque fringilla sapien quis molestie feugiat. Sed facilisis lectus feugiat arcu fringilla porttitor. Nunc eu nulla tempor, dictum mauris vitae, congue mi.<br>Vivamus lacus nibh, congue nec ligula at, eleifend aliquam elit. Morbi dignissim ipsum et sapien tincidunt, vitae mattis ipsum facilisis. In semper sapien ipsum, eu eleifend neque dignissim sit amet. Sed suscipit auctor condimentum. Curabitur et tortor risus. Aliquam luctus dictum leo ut pretium. Nunc quis mauris ut massa consectetur sollicitudin vitae vel orci. Donec justo massa, finibus laoreet pulvinar non, elementum vitae eros. Duis eget urna imperdiet, malesuada felis nec, hendrerit purus. Mauris tincidunt nibh libero, ac dictum nulla congue in. Fusce congue imperdiet nisi blandit posuere. Quisque ligula lorem, tincidunt sed diam a, consequat efficitur quam. Suspendisse potenti.<br>Integer tempor eu risus feugiat venenatis. Cras laoreet interdum velit vitae feugiat. Maecenas eu est varius, commodo ligula ut, sollicitudin sem. Fusce odio mauris, dictum sed nunc ut, fringilla imperdiet dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam dictum, lectus eget mollis ornare, leo leo mollis mauris, scelerisque egestas tortor ex quis erat. Vestibulum bibendum, purus at maximus maximus, dolor ipsum aliquet erat, sit amet tristique est risus quis justo. Fusce aliquet urna nisl, nec imperdiet enim imperdiet at. Sed posuere tempus interdum. In eu tempor leo, vel consectetur arcu. Etiam nec finibus lectus. Sed imperdiet mattis ex et rutrum.',
                burmeseContent : 'မေလ ၃၁ ရက်နေ့တွင် တရက်အလိုက တာလီဘန်သောင်းကျန်းသူအဖွဲ့မှ ပြန်ပေးဆွဲခဲ့သော ဘတ်စ်ကားခရီးသည် ဆယ့်နှစ်ဦးသည် ကွန်ဒွတ် (Kunduz) ပြည်နယ်၏ မြို့ဆင်ခြေဖုံးရှိ လမ်းဘေးတွင် သေဆုံးနေသည်ကို တွေ့ရှိရသည်။ တရက်ထဲတွင်ပင် သွေးထွက်သံယိုဓာတ်ပုံများ လူမှုမီဒီယာတွင် ဖုံလွှမ်းသွားခဲ့သည်။<br>တဆက်တည်းတွင် အဆိုပါ တာလီဘန်များသည် အသတ်ခံရသူများမှာ အစိုးရစစ်သားများဖြစ်ကြောင်း ၎င်းတို့၏ ဖေ့ဘုတ်(ခ) စာမျက်နှာမှနေတဆင့် ကြေညာချက် ပြုလုပ်ခဲ့သည်။ ထိုရေးတင်မှု နှင့် စာမျက်နှာသည် ဖေ့ဘုတ်(ခ)မှ ဖယ်ရှားခြင်းခံခဲ့ရသည်။'
            },
            {
                
                published: '2016-7-5 3:19:50',
                author : admin1._id ,
                title : 'Science',
                burmeseTitle : 'ရက်နေ့တွင် တရက်အလိုက',
                postImageUrl:'https://s3.amazonaws.com/myanmasara-test/IMG_3419.JPG',
                totalLikes: 7,
                iLike : true,
                engContent : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie nunc id arcu ultricies, in suscipit nisi ultrices. Mauris ac tellus vestibulum, commodo turpis vel, ullamcorper metus. Pellentesque rutrum nunc vel purus efficitur rhoncus. Nullam sed mauris a purus volutpat ullamcorper vel sit amet ipsum. Suspendisse fringilla neque turpis. Nunc id ante iaculis, posuere neque sed, dictum velit. Vestibulum suscipit iaculis convallis. Nullam rutrum ante augue, eu pellentesque ante volutpat quis. Vivamus pharetra, arcu in faucibus varius, odio nibh dictum augue, vitae suscipit dui tortor sed nisl. Nunc lorem ipsum, tempor ut odio id, egestas posuere diam.<br>Donec dictum nibh vitae eros consequat, in facilisis justo sodales. Proin id vestibulum quam. Integer maximus nulla vitae tellus aliquet rhoncus. Donec sit amet ante vehicula leo accumsan venenatis. Quisque fringilla sapien quis molestie feugiat. Sed facilisis lectus feugiat arcu fringilla porttitor. Nunc eu nulla tempor, dictum mauris vitae, congue mi.<br>Vivamus lacus nibh, congue nec ligula at, eleifend aliquam elit. Morbi dignissim ipsum et sapien tincidunt, vitae mattis ipsum facilisis. In semper sapien ipsum, eu eleifend neque dignissim sit amet. Sed suscipit auctor condimentum. Curabitur et tortor risus. Aliquam luctus dictum leo ut pretium. Nunc quis mauris ut massa consectetur sollicitudin vitae vel orci. Donec justo massa, finibus laoreet pulvinar non, elementum vitae eros. Duis eget urna imperdiet, malesuada felis nec, hendrerit purus. Mauris tincidunt nibh libero, ac dictum nulla congue in. Fusce congue imperdiet nisi blandit posuere. Quisque ligula lorem, tincidunt sed diam a, consequat efficitur quam. Suspendisse potenti.<br>Integer tempor eu risus feugiat venenatis. Cras laoreet interdum velit vitae feugiat. Maecenas eu est varius, commodo ligula ut, sollicitudin sem. Fusce odio mauris, dictum sed nunc ut, fringilla imperdiet dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam dictum, lectus eget mollis ornare, leo leo mollis mauris, scelerisque egestas tortor ex quis erat. Vestibulum bibendum, purus at maximus maximus, dolor ipsum aliquet erat, sit amet tristique est risus quis justo. Fusce aliquet urna nisl, nec imperdiet enim imperdiet at. Sed posuere tempus interdum. In eu tempor leo, vel consectetur arcu. Etiam nec finibus lectus. Sed imperdiet mattis ex et rutrum.',
                burmeseContent : 'မေလ ၃၁ ရက်နေ့တွင် တရက်အလိုက တာလီဘန်သောင်းကျန်းသူအဖွဲ့မှ ပြန်ပေးဆွဲခဲ့သော ဘတ်စ်ကားခရီးသည် ဆယ့်နှစ်ဦးသည် ကွန်ဒွတ် (Kunduz) ပြည်နယ်၏ မြို့ဆင်ခြေဖုံးရှိ လမ်းဘေးတွင် သေဆုံးနေသည်ကို တွေ့ရှိရသည်။ တရက်ထဲတွင်ပင် သွေးထွက်သံယိုဓာတ်ပုံများ လူမှုမီဒီယာတွင် ဖုံလွှမ်းသွားခဲ့သည်။<br>တဆက်တည်းတွင် အဆိုပါ တာလီဘန်များသည် အသတ်ခံရသူများမှာ အစိုးရစစ်သားများဖြစ်ကြောင်း ၎င်းတို့၏ ဖေ့ဘုတ်(ခ) စာမျက်နှာမှနေတဆင့် ကြေညာချက် ပြုလုပ်ခဲ့သည်။ ထိုရေးတင်မှု နှင့် စာမျက်နှာသည် ဖေ့ဘုတ်(ခ)မှ ဖယ်ရှားခြင်းခံခဲ့ရသည်။'
            }
        ];
        Post.create(post1, function(err, results){
            res.send (results);
        });

    });

    app.get('/api/setupUsers', function(req, res){
        // seed database
        
        var user1 = [
            {
                name: 'Thant',
                title : 'Co-founder',
                email: 'test@email.com',
                password: '1234',
                role : 'admin',
                adminImageUrl: 'https://storage.googleapis.com/myanmasara/team-img/Thant%20Profile%20PicOptimized.jpg',
                bio : 'Thant Sin is a postgraduate student at the School of Oriental and African Studies in London, studying media in development with the focus on digital culture, online public sphere, and the freedom of expression. His current research analyses the narratives of hate-speech on social media in Myanmar at the intersection of religious, political and nationalist ideologies. His research theme includes examining the impact of hate-speech on public opinion and violence mobilization.',
            }
        ];
        User.create(user1, function(err, results){
            res.send (results);
        });
    });
}
