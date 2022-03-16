let textBody = document.querySelector(".container-body");
let btn = document.querySelector(".generate");
let btnText = document.querySelector(".btn-text");
let name = document.querySelector("#name");
let relation = document.querySelector("#relation");
let copy = document.querySelector(".fa-clone");
let btnGroup = document.querySelector(".btn-group");
let copied = document.querySelector(".copied");
let twitterLink = document.querySelector('.twitter-share-button');
let wappLink = document.querySelector('.wapp-share-button');
let container = document.querySelector(".container");
let visibility = 0;
let arrayName = "";
let i = 0;
let times = 0;
let gbtnText = document.querySelector(".Gbtn-text");


let FriendArr = ["Congrats on another trip around the sun! I hope this day is full of cake, memories, and fun.","Don't count the candles, but see the light they give. Don't count your years but the life you live.",
"Don’t forget to smile awkwardly as everyone sings you happy birthday today!"," It is my superiority complex that has made me wish you for your birthday so early. Now I can strut about and tell all your other well-wishers that I was the first!", "May this birthday bring you only joy and happiness. This year must be full of success. You deserved it",
"Sending you an infinite amount of love, joy, and happiness on your birthday!", "Another year comes to a close, and another begins. May the coming year be one that will be filled with laughter of friends, love of family, and the life that you dream of",
"I feel so lucky to have you as my friend😻. Hope your birthday is as special as you are.🤩May all of your dreams come true🙌. Thanks for being such a great friend❤️🤗",
"I pray that you continue to be the wonderful person that you are and get everything you’ve ever dreamed of this year and always!","Your birthday has come around after 365 days. That is a pretty long time. Deal with the pressure because that how diamonds are made.",
];
let BestFriendArr = ["Happy birthday to the only person I would rescue in the event of a zombie apocalypse.","There’s no other day more perfect than your birthday to tell you just how meaningful and touching your friendship is to me. I want you to know that you are so much more than just my best friend. To me, you’re more like a sister I never had.",
"It is very difficult to find a true friend as amazing as you, your love and encouragement exceeds that of simple friendship.","Happy birthday to the only person whose birthday I remember without the help of a Facebook notification.",
"As you celebrate another year of life, always remember how much joy you bring to my life!","The world got a little bit better on this day because my best friend was born!",
"Birthdays come once a year, but best friends are once in a lifetime. I'm so happy to call you mine!", "Thank you for always being by my side and having my back. I'd do anything for you, especially today on your birthday!",
"I was blessed when the universe brought us together in friendship. Here’s to celebrating a special person.","Wishing you nothing but the best on your special day and beyond. You’re the epitome of what it means to be a friend and I’m forever grateful",
"I don’t know what I did to deserve such a wonderful friend like you, but I will be forever grateful that the universe brought you into my life."
]
let otherArr = ["You deserve all the cake, happiness, and love today.", "You’ve grown so much in one year. I’m always so proud of you!",
,"I hope you have a great day today and the year ahead is full of many blessings.",
"I pray that you’re granted the desires of your heart today and every day.","Wishing you a day filled with happiness and a year filled with joy.",
"And yet another adventurous year awaits you, and to celebrate your birthday, I wish you a king's pomp and splendor.",
"Forget the past; it is gone. Do not think of the future; it has not come. But live in the present because it's a gift and that's why it's called the present.",
"May your birthday be the special day that you receive all you ever desired."
]
let partnerArr = ["I could search far and wide, but I already know that I’ve found my most favourite person in the whole wide world.",
"you are the single most incredible person I know and I am so lucky and grateful to have you in my life. Nobody even comes close to how kind, thoughtful and caring you are.","The easiest thing I ever did was not falling in love with you. It’s been staying in love with you ever since.",
"Your birthday is pretty much the only one that I can actually remember by heart, mainly because I know my life wouldn’t be worth living if I were to ever forget it!",
"You fill me with so much happiness and I am so lucky to have such a wonderful partner in my life who shares the same quirky sense of humour as me!","I treasure you more than I treasure all my possessions, including my life itself. Nothing short of death will ever have the power to keep me from being with you and making you happy all the days of your life",
"In a garden filled with blooms, you stand out as the most beautiful and most beguiling creation. With you, I feel like I am in heaven all the time",
"You are my soul mate, my partner, and most trusted friend. I can’t imagine how my life would be without you. On your birthday, I want to remind you of all the reasons why I love U.",
"I’m really blessed to have you in my life, as nothing could be more special than the day when you came into this world. So thank you and a very happy birthday to a very special person.",
]
let broArr = ["I know it's your birthday,but today is special for me too🎂🎂🤩🤩. May god bless you with every joy and happiness🙃🙃.Nothing compares to the love of a brother ❤❤",
"Happy Birthday To My Brother. Thank you for being my built-in best friend for life. Enjoy your special day! It only comes once a year!",
" To My Sweet Brother, Happy Birthday. You were my first friend, and you’re still my best friend. I think of you every day, but especially today.",
"I am so blessed to have such a great brother like you. You are my inspiration, pride, and I thank you for everything you have done for me. You are a special brother to me. May you have many more special days always. Have a wonderful year ahead, bro!",
"Whenever I need a good friend, I get you because you protect me from all the troubles. Thanks for being such a caring brother. I love you so much and wish you a happy birthday full of love and joy!🎂🎉",
"I’ve been following your footsteps since my childhood and you never put me on the wrong track. I am so fortunate to have a brother like you. May you enjoy each and every moment of your special day. Happy Birthday bro!"
]
let sisterArr = ["Sister, you are my everything and even more. I feel that I’m definitely one of the luckiest!", 
"I’m so lucky to have such a wonderful sister like you. I’m so blessed to have you in my life. May you have a wonderful year ahead.", 
"I want to thank you, my sis, for being the most loving and caring sister in this entire world. No one understands me better than you. Wish you a Happy Birthday.",
"The sisters don’t have to be around for all the time, but it really becomes a great thing when they are around you. Have a", 
"Maybe you were one of the floating souls in heaven. But I’m so lucky that I’ve found you as my sweet sister.", 
"It is a true blessing to have such a fun, smart and caring sister like you. Have a joyful and unforgettable day, full of everything that you love most!",
"You have always been my partner in crime, but you are going to have to do this getting older thing all by yourself."]
let fatherArr = ["U were the one who always told me that I can do the impossible if only I try hard enough, that alone is the reason I am here,",
"From helping me up when I fell to taking me out for practice after I missed the winning goal, you’ve taught me to never give up. I owe my success in life to U, and can’t wait to take you out for your birthday.",
"To the best dad in the world, thank you for being there for me. For urging me to be better and fight harder. I wouldn’t be who I am without your kind words and wise guidance.",
"Today is the right time for me to say, how grateful I am to U for always showing me the way"]
let motherArr = ["I have the adorable mother in the world and can’t thank her enough for making me what I am today! All the best wishes for you for today and ever.",
"You gave me the best life and you are the best gift from God. Life without you is impossible for me. May God keep you healthy and happy in life!",
"Heartfelt wishes from the bottom of my heart to the most beautiful woman in the entire universe. Enjoy your special day!",
"You are not the angel who only appears when I need, you’re the angel that never leaves my side.",
"Thank you for your infinite patience and for always taking care of your son in a way that no one else ever could."]
let grandParentArr = ["Grandpa, you mean so much to all of us. Thank you for what you do for us. Today is for you to relax, enjoy your special day as we look after you.",
"May this day bring you everything you desire. May it be filled with joy and laughter as you share this special occasion with those dearest to you.",
"You held me when I was a baby, picked me up when I fell over as a toddler, and cared for me throughout my life. Enjoy this special day you so richly deserve.",
"I’m so blessed to have such a wonderful grandparent like you. May you have a wonderful year ahead.",
"On this day we wish for you to continue to greet each morning full of vigor, tenacity and grace. Thank you for your unending care and effort toward your family and friends. Let the spirit inside you continue to shine.",
]
let sonArr = ["When you were born, I couldn’t even fathom how much you’d come to mean to me. You are my everything. May your special day be filled with untold splendor.",
"Being a parent is never an easy task, but loving a son as precious as you are is never difficult. You bring endless wonder and love into my life.",
"It’s a fantastic feeling to have a son as excellent as you. Nothing brings me more joy than to be able to smother you with love, but the best feeling in the world is when you return that love.",
"My love for you has always been free, but it’s my pride and trust that you’ve really earned over the years. I am unbelievably proud of the young man you’ve turned into.",
"Always remember that whenever life gets too difficult for you that you can still turn to your parents. Hugs and advice will always be free from us. They might be the only things that are!",
"When you were little, I used to be your hero, but now you’ve become mine. I can’t believe how much you’ve grown in the last few years. You’ve become an intelligent, strong, and brave young man whom I look up to."]
let daughterArr = ["People say that you and I look almost the same. But I think you are much more gorgeous and way too charming than me.",
"Yes, as a mother, I have to act very strictly sometimes. I worry for you too much because you are my only adorable princess.",
"I would like to convey heartfelt birthday wishes to my daughter. You’re a great source of inspiration for all the siblings. We’re proud of you.",
"Happy birthday daddy’s princess. You have every quality of a perfect daughter. Everything about you makes my heart burst with pride. I am lucky to be your dad.",
"Back when you were little, I was your superman. I really hope you haven’t replaced me with any of those young brats lately.",
"Lots of love and kisses from Mommy on your special day. May God’s grace be poured out upon you today and always.",
"Having you as our daughter is truly the biggest accomplishment in our life! Happy birthday, sweetie!",
"Cute and pretty, beautiful, and lovely. Charming and bubbly, innocent and friendly. Dear daughter, you are all of the above, endless for you is our love."]
 
btn.addEventListener("click", () => {
    if(relation.value === "Friend")
        showMessage(FriendArr);

    else if (relation.value === "BestFriend")
        showMessage(BestFriendArr);

    else if (relation.value === "Other")
        showMessage(otherArr);

    else if (relation.value === "Partner")
        showMessage(partnerArr);
    
    else if (relation.value === "Brother")
        showMessage(broArr);

    else if (relation.value === "Sister")
        showMessage(sisterArr);

    else if (relation.value === "Father")
        showMessage(fatherArr);

    else if (relation.value === "Mother")
        showMessage(motherArr);

    else if (relation.value === "Grandparent")
        showMessage(grandParentArr);

    else if (relation.value === "Son")
        showMessage(sonArr);
    
    else if (relation.value === "Daughter")
        showMessage(daughterArr);

    let link = hrefString(textBody.textContent);
    twitterLink.href=`https://twitter.com/intent/tweet?text=${link}`;
    wappLink.href=`https://api.whatsapp.com/send?text=${textBody.textContent}`
    visibility++;
    showButtons();
});

function showMessage(array)
{
    textBody.textContent = array[i]+` Happy Birthday ${name.value} 🎉💖`;
    if (i+1>=array.length)
    i=0;
    else 
    i++;
}

//!Visibility of Buttons - Clipboard, Whatsapp
function showButtons() {
    if (visibility>0)
    btnGroup.style.display = "block";
}

copy.addEventListener("click",()=> {
        navigator.clipboard.writeText(textBody.textContent); 
        copied.style.display="block";
        setTimeout(()=>{
            copied.style.display="none";
        },1200);
       
});

function hrefString (string)
{
    let arr = string.split(" ");
    let link = "";
    for (j=0; j<arr.length; j++)
    {
        link += arr[j]+"%20";
    }
    return link;

}


// container.addEventListener("click",e=>{
// if (!e.target.classList.contains("twitter-share-button"))
// {
//     return;
// }

// });