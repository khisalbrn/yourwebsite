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
        "Every single time you've called me just to hear my voice. Even when you had nothing to say.",
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
        "That cold morning when you gave me your jacket without a word. You shivered the whole way. You never complained.",
    },
    {
      type: 'text',
      content:
        "The way you say my name. Just... my name. Nobody else says it like that.",
    },
    {
      type: 'text',
      content:
        "That day we got completely lost and ended up somewhere we'd never been. And neither of us cared. We were already exactly where we wanted to be.",
    },
    {
      type: 'text',
      content: "Every ordinary moment with you feels like something worth keeping.",
    },
  ],

  encouragement: [
    {
      type: 'text',
      content:
        "I am so grateful for you and all the effort you put in making this work even when we re appart.",
    },
    {
      type: 'text',
      content:
        "The version of you that exists five years from now is grateful for what you're doing today — even on the hard days.",
    },
    {
      type: 'text',
      content:
        "You have made it through 100% of your worst days. That's not luck. That's strength.",
    },
    {
      type: 'text',
      content: "Rest if you need to. But don't you dare quit.",
    },
    {
      type: 'text',
      content:
        "The world doesn't always recognize quiet strength. I see yours. I always have.",
    },
    {
      type: 'text',
      content:
        "You are allowed to be tired. You are not allowed to believe you're not enough.",
    },
    {
      type: 'text',
      content:
        "Everything you're carrying right now — I see it. I'm proud of you for still showing up.",
    },
    {
      type: 'text',
      content:
        "There is no one on this planet built like you. That matters more than you know.",
    },
    {
      type: 'text',
      content:
        "Hard days are proof that you're in the game. Easy days are for people who stopped trying.",
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
      content: "Whatever you're working toward — it's worth it. And so are you.",
    },
    {
      type: 'text',
      content: "You've already done hard things. You'll do this one too.",
    },
    {
      type: 'text',
      content:
        "On the days you feel smallest, remember: you're the person I chose. That means something.",
    },
    {
      type: 'text',
      content: "You are someone's reason to keep going. Mine.",
    },
  ],

  jokes: [
    {
      type: 'text',
      content:
        "Why don't scientists trust atoms? Because they make up everything. Unlike me — I only make up excuses for why I'm still awake thinking about you.",
    },
    {
      type: 'text',
      content:
        "I told my girlfriend she was drawing her eyebrows too high. She looked surprised. (That's you. You're my girlfriend. You always look surprised when I compliment you.)",
    },
    {
      type: 'image',
      content:
        'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=900&h=700&fit=crop&auto=format',
      caption: "This is basically what your face looks like when I say something smart. 🐶",
    },
    {
      type: 'text',
      content:
        "What did the ocean say to the beach? Nothing, it just waved. I wave at you like that every time I see you. Even when you're five feet away.",
    },
    {
      type: 'text',
      content:
        "Why did the scarecrow win an award? Because he was outstanding in his field. You're also outstanding. In my heart. It's cheesy. Deal with it.",
    },
    {
      type: 'text',
      content:
        "I asked my dog what two minus two is. He said nothing. That's also how many flaws I can find in you. (I've looked very hard.)",
    },
    {
      type: 'image',
      content:
        'https://images.unsplash.com/photo-1646080524846-bea654f59832?w=900&h=700&fit=crop&auto=format',
      caption: "My face whenever you walk into the room.",
    },
    {
      type: 'text',
      content:
        "What do you call a fake noodle? An impasta. What do you call a fake goodbye? Every time I hang up and immediately miss you.",
    },
    {
      type: 'text',
      content:
        "Why do we tell actors to 'break a leg'? Because every play has a cast. You are the entire cast of my life. That was romantic AND about bones.",
    },
    {
      type: 'text',
      content:
        "I tried to make a belt out of watches. It was a waist of time. Unlike every single second I spend with you, which is never wasted.",
    },
    {
      type: 'text',
      content:
        "What do you call cheese that isn't yours? Nacho cheese. What do you call a man who's fully yours? Apparently me.",
    },
    {
      type: 'image',
      content:
        'https://images.unsplash.com/photo-1596098823457-74e360fcd023?w=900&h=700&fit=crop&auto=format',
      caption: "This is what I'm thinking about when I should be thinking about something productive.",
    },
    {
      type: 'text',
      content:
        "Why did the bicycle fall over? Because it was two-tired. I'm also two-tired... to be away from you. Sorry. Not sorry.",
    },
    {
      type: 'text',
      content:
        "How do you organize a space party? You planet. How do you make me smile every single time? You exist.",
    },
    {
      type: 'text',
      content:
        "I would tell you a construction joke but I'm still working on it. Unlike my love for you, which is very much complete and built to last.",
    },
  ],

  'emergency-quitting': [
    {
      type: 'text',
      content:
        "Stop. Breathe.\n\nI know it feels unbearable right now. Like the weight of it is too much and the finish line is nowhere in sight.\n\nBut you are not at your end. You are in the middle — and the middle is always the hardest part.\n\nQuitting would mean never finding out what you were capable of. And I already know what you're capable of. I've seen it. You have too, even if you can't remember it right now.\n\nDon't make a permanent decision based on how today feels.\n\nCall me. Text me. I don't care what time it is.\n\nI am always, always on your side.",
    },
  ],

  'emergency-rolled': [
    {
      type: 'text',
      content:
        "Okay. Take a breath.\n\nGetting rolled means you were in there. You showed up, you competed, and someone caught you today. That's all it means.\n\nThe best grapplers in the world have been submitted more times than they can count. Every tap is tuition. You paid for a lesson — now collect it.\n\nWhat caught you? Where did it go wrong? That's your homework.\n\nYou're not bad at this. You're just not done yet. There's a difference.\n\nGet back on the mat. That's the whole job.",
    },
  ],

  'emergency-dropped': [
    {
      type: 'text',
      content:
        "I've got you.\n\nLosing someone hurts in a way that doesn't have a name. And there's nothing I can say to make that not true.\n\nBut here's what I know: you are not unloved. You are not alone. And grief, as awful as it is, is proof that what you had mattered.\n\nYou don't have to be okay right now. You just have to be.\n\nI'm here. Whenever you want to talk, or not talk, or just exist near someone — I'm here.\n\nTake all the time you need.",
    },
  ],
};
