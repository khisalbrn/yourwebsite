export type EntryType = 'text' | 'image';

export interface Entry {
  type: EntryType;
  content: string;
  caption?: string;
}

export type CategoryKey =
  | 'memories'
  | 'encouragement'
  | 'jokes'
  | 'emergency-quitting'
  | 'emergency-rolled'
  | 'emergency-dropped';

export const CONTENT: Record<CategoryKey, Entry[]> = {
  memories: [
    {
      type: 'text',
      content:
        "Remember when we used to make cookie boxes every months ? I can't wait to do that again with you.",
    },
    {
      type: 'text',
      content:
        "Remember that night we stayed up until 7 am in Baker's backyard? That is when you told me you wanted to do this. To be honest I was really sipportive but didn't understand what it was (I was too cold to think) and after ups and downs and not being the biggest fan of it for the sake of my stress. Know that I am aware it's your dream and I want you to be happpy and I support you",
    },
    {
      type: 'image',
      content:
        'https://images.unsplash.com/photo-1636280788355-550a9496655d?w=900&h=700&fit=crop&auto=format',
      caption: 'The way you hold my hand makes everything feel steady.',
    },
    {
      type: 'text',
      content:
        "Remember when we tried to go hike Palo Duro and we realized halfway there that it was closed due to flooding? Then we decided to go to world market found the easter egg and had a blast that day still! Best start to a tradition ever(finding easter eggs and nutcrackers)!",
    },
    {
      type: 'text',
      content: "What song makes you think of us ? Well you don't know songs so I don't expect you to answer that. But I remember when I somehow managed to make the DJ at logies play Hotel California and make you slow dance with me. Best slow dancing ever (only slow dancing ever also)",
    },
    {
      type: 'image',
      content:
        'https://images.unsplash.com/photo-1480618376353-2950ee462b17?w=900&h=700&fit=crop&auto=format',
      caption: 'The first time you held my hand. You acted like it was nothing. It was everything.',
    },
    {
      type: 'text',
      content:
        "I always worried we wouldn't work at first because we both are only children and really tend to place the fault on other instead of taking accountability. But I remmeber the night I left yours at 5am because I couldn't sleep and even though you hated ssleeping at mine you still texted me to say you would sleep there if always sleeping at yours was a problem to me. Then I knew that we were able to reflect on ourselfves and make it work even if we are only children.",
    },
    {
      type: 'image',
      content:
        'https://images.unsplash.com/photo-1548226066-f3865161f42b?w=900&h=700&fit=crop&auto=format',
      caption: 'Every ordinary morning with you is my favorite kind of morning.',
    },
    {
      type: 'text',
      content:
        "I remember our first date when Vanessa and Lily were making bets on if you would knock at the door or not. Will you still come knock at the door when we have a house together ? Like go outside and then come knock at the door to take me on a date ?",
    },
    {
      type: 'text',
      content:
        "I am the luckiest women to have you. This is crazy that the world is so big and we were born on opposite conitnents yet we still found each others. AND we dated against all odds.",
    },
    {
      type: 'image',
      content:
        'https://images.unsplash.com/photo-1452611545118-2b35b308caf5?w=900&h=700&fit=crop&auto=format',
      caption: 'We stayed up looking at the stars and I forgot to look at them — I kept looking at you.',
    },
    {
      type: 'text',
      content:
        "I can still picture the first time you told me you lovedd me. I could tell you were going to because your eyes were like glistenning and it's probably the most nervous I have ever seen you. After that I wanted to tell byou I loved you every second and never let go of your arm. I didn't do it to not seem psycho of course...",
    },
    {
      type: 'text',
      content:
        "I still think about how grateful I am that you planned my entire birthday at your house and you took care of everything and invited people even when I had little to no firends in Dallas. I am so grateful for you my love.",
    },
    {
      type: 'text',
      content:
        "I can't wait to have our own house and we will be able to act like childrens. Build forts and have a colorful house with cookies in every closet! And homemade bagels again.",
    },
    {
      type: 'text',
      content: "I remember in december 2024 when we got back to dallas and for the first time in a month I slept alone in a little bed at Vanessas. I didn't know I loved you yet but the bed did feel empty without you by my side. It still does. I can't wait to have to get a dual temperature mattress pad for us to sleep together again. ",
    },
  ],

  encouragement: [
    {
      type: 'text',
      content:
        "I am so grateful for you and all the effort you put in making this work even when we are appart.",
    },
    {
      type: 'text',
      content:
        "By all laws of aviation a bee shouldn't be able to fly....",
    },
    {
      type: 'text',
      content:
        "You have made it through 100% of your worst days. That's not luck. That's strength.",
    },
    {
      type: 'text',
      content: "Okay I am not great at motivation speech. But just keep going, in a year your brain won't even remember how awful this is. Actually your brain has a way to erase memories of physical pain so you ca't think about it and feel it later.",
    },
    {
      type: 'text',
      content:
        "Come on, I know you will be a great mermaid",
    },
    {
      type: 'text',
      content:
        "You are allowed to be tired. You are not allowed to believe you're not enough.",
    },
    {
      type: 'text',
      content:
        "I love you and I will always be by your side no matter what (except if you become morbidly obese) then I won't be able to be next to you because you are too fat.",
    },
    {
      type: 'text',
      content:
        "There is no one on this planet built like you.",
    },
    {
      type: 'text',
      content:
        "Hard days are proof that you're in the game. ",
    },
    {
      type: 'text',
      content: "You don't have to feel strong to be strong. Keep going.",
    },
    {
      type: 'text',
      content:
        "I believe in you more than you currently believe in yourself. Hold onto that until yours catches up.",
    },
    {
      type: 'text',
      content: "No matter what I am not leaving you. You are my rock and I will be your strenght when you need it.",
    },
    {
      type: 'text',
      content: "Any time you think 'this is hard' hear my voice say 'that\'s what she said'",
    },
    {
      type: 'text',
      content:
        "On the days you feel smallest, remember: you're the person I chose. That means something (I hate people especially men and I still chose to love you).",
    },
    {
      type: 'text',
      content: "You are my reason to keep going, to stay here and to be a better person everyday. ",
    },
  ],

  jokes: [
  {
    type: 'text',
    content:
      "Why don't scientists trust atoms? Because they make up everything. Unlike me—I only make up excuses to text you again.",
  },
  {
    type: 'text',
    content:
      "I told my girlfriend she was drawing her eyebrows too high. She looked surprised. (That's still one of my favorite looks on you.)",
  },
  {
    type: 'text',
    content:
      "What did the ocean say to the beach? Nothing, it just waved. Kind of like me every time I see you... even if you're only five feet away.",
  },
  {
    type: 'text',
    content:
      "Why did the scarecrow win an award? Because he was outstanding in his field. You're also outstanding... and I'm trying very hard not to be cheesy about it.",
  },
  {
    type: 'text',
    content:
      "I asked my dog what two minus two is. He said nothing. That's also how many reasons I have not to like you.",
  },
  {
    type: 'text',
    content:
      "What do you call a fake noodle? An impasta. What do you call pretending I don't miss you? Also an impasta.",
  },
  {
    type: 'text',
    content:
      "I tried to make a belt out of watches. It was a waist of time. Unlike spending time with you.",
  },
  {
    type: 'text',
    content:
      "What do you call cheese that isn't yours? Nacho cheese. What do you call someone I'd still share my fries with? You.",
  },
  {
    type: 'text',
    content:
      "Why did the bicycle fall over? Because it was two-tired. I'm also two-tired... mostly because we stayed up talking.",
  },
  {
    type: 'text',
    content:
      "How do you organize a space party? You planet. How do you make my day better? You just show up.",
  },
  {
    type: 'text',
    content:
      "I would tell you a construction joke, but I'm still working on it. Just like I'm still working on finding a joke funnier than you.",
  },

  {
    type: 'text',
    content:
      "What do seals do when they fall in love? They seal the deal. (I'm sorry. I had to.)",
  },
  {
    type: 'text',
    content:
      "Why don't seals ever lose arguments? Because they always have a watertight point.",
  },
  {
    type: 'text',
    content:
      "What's a seal's favorite subject? Current events.",
  },
  {
    type: 'text',
    content:
      "How do seals greet each other? 'Long time, no sea!'",
  },
  {
    type: 'text',
    content:
      "Why did the seal bring sunscreen? Because he didn't want to become a hot dog.",
  },
  {
    type: 'text',
    content:
      "What did one seal text the other? 'Water you doing later?'",
  },
  {
    type: 'text',
    content:
      "Why are seals so calm? They just go with the flow.",
  },
  {
    type: 'text',
    content:
      "What's a seal's favorite music? Anything with a good sea beat.",
  },
  {
    type: 'text',
    content:
      "Why did the seal cross the ocean? To get to the otter side.",
  },
  {
    type: 'text',
    content:
      "What do you call a fashionable seal? Seal-ish.",
  },
  {
    type: 'text',
    content:
      "Why don't seals tell secrets? Because they don't want to let the catfish out of the bag.",
  },
  {
    type: 'text',
    content:
      "What did the seal say after a great meal? 'That hit the blubber spot.'",
  },
  {
    type: 'text',
    content:
      "Why are seals terrible at hide-and-seek? They always leave flipper prints.",
  },
  {
    type: 'text',
    content:
      "What does a seal do on vacation? He just chills on the beach and claps for himself.",
  },
  {
    type: 'text',
    content:
      "How do you compliment a seal? 'You're looking pretty seal-f confident today.'",
  },
  ],

  'emergency-quitting': [
    {
      type: 'text',
      content:
        "My love if you are reading this it meas you quit. I know you are hurting and feel disappointed. I want you to know that I am proud of you, I am so so so incredibly proud of you for making it this far. I want you to know that it does not change the way I see you, I may evem love you more because it means you are human. I don't exactly know what your worries are at the moment, and I will of course be there for you as soon as you want to call me, but know that no matter what I love you, no matter what I will make it work and find a job so we can have our life together, no matter what we will figure out our life together. Know that I will stay by your side forever and to me you still are the most incredible human in the planet. It might just mean something else is meant for you, something even better. It doesn't feel like it now but the world is vast, your are unlimited. You are the sky and this hickup in your inital plan is nothing but a cloud. I love you so much JP and I am here when you need me. ",
    },
  ],

  'emergency-rolled': [
    {
      type: 'text',
      content:
        "Alright my love, it happens. I hope you are okay, I know you must be annoyed (fuck the situation, bad bad bad situation). Alright now that we blamed and hated the situation, let's relativize. This actually might be a chance, an opportunity to come back even stronger the next time around. You will be more prepared, more informed and even more hungry for success. So what might now feel like the end of the world (worse than mushroom in your kung pao chicken) might actually be a blessing. No matter what, know that I am here for you and that our plans of life together are goals, we will reach them, the path is flexible. I love you."
    },
  ],

  'emergency-dropped': [
    {
      type: 'text',
      content:
        "Fuck them, give me names I will personally make their life forever very annoying. That is out of the way. I know you must feeling very down and I wish I was there for you. No matter what happen JP I want you to know that to me you are the most incredible person in this world, I am so proud of you and the love I have for you is infinite. Nothing will ever change how much I love you, and I hope that is something you can attach yourself when life pushes you around.",
    }
  ],
};
