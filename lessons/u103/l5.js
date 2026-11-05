/* ===== أسبوع التثبيت · الدرس 5: This Is Me — أول فقرة طويلة يكتبها المتعلم: الأزمنة الأربعة داخل فقرة واحدة (6 مراحل · درس قراءة وكتابة) ===== */
(function(){
/* فحوص الكتابة (writing.checks)، بعد توحيد الفاصلة العليا ’ من الآيفون. والمربع لا يكبّر الحرف الأول، فالفحوص كلها لا تفرق بين الحرف الكبير والصغير.
   1) 8 جمل، 2) المضارع: يكفيه واحد مما في W_PRESENT أو I / we / they بعدها فعل غير ماضٍ، 3) الماضي بنوعيه: مستمر (was / were + ing) وبسيط،
   4) كلمتان من كلمات الدرس. والقوائم واسعة حتى لا تُرفض فقرة صحيحة. */
function wNorm(text){ return String(text || '').replace(/[’‘ʼ`´]/g, "'"); }

/* ما ينتهي بـ ing بعد was / were وليس فعلًا مستمرًا. أما was building وwas feeling وwas meeting وwas relaxing وwas worrying فأفعال تُعد. */
var W_ING_NOT = /^(?:bring|thing|string|sting|swing|morning|evening|nothing|something|anything|everything|king|spring|during|wedding|amazing|interesting|exciting|boring|tiring|surprising|shocking|charming|frightening|confusing|disappointing|embarrassing|terrifying|exhausting|outstanding|thrilling|inspiring|challenging|fascinating|satisfying|rewarding|pleasing)$/i;
var W_CONT_RE = /\b(?:was|were)(?:n't|\s+not)?\s+(?:(?:still|just|already|also|really|all|both|always|never|busy|out|outside|there|[a-z]+ly|i|you|he|she|it|we|they)\s+|(?:the|my|his|her|our|their|your)\s+[a-z]+\s+|(?:at|in|on)\s+(?:home|work|class|college|school|university|bed|(?:the|my|our|his|her|a)\s+[a-z]+),?\s+)?([a-z]{2,}ing)\b/gi;
function wCont(s){
  var n = 0, m; W_CONT_RE.lastIndex = 0;
  while ((m = W_CONT_RE.exec(s))) { if (!W_ING_NOT.test(m[1])) n++; }
  return n;
}
/* ثواني irregularVerbs الستين بلا was / were، وdid وdidn't، ثم got وrode وwoke، وأفعال شاذة أخرى يكتبها المتعلم في سطر «ما وقع»، لأن سطر الإطار هذا قد يكون الماضي البسيط الوحيد في الفقرة. */
var W_PAST = 'cut put set let cost hit hurt shut read came became ran had made said paid told sold found thought bought brought taught caught felt kept slept left met meant sent spent built lent lost won sat stood understood heard held did didn\'t went saw took gave knew wrote spoke broke chose forgot drove ate fell began drank flew wore got rode woke rang sang swam threw grew drew could couldn\'t stole shook bit blew beat burst quit fought fled fed led forgave froze hid hung lay laid lit rose shot sank slid stuck struck tore swept dug wept learnt'.split(' ');
/* ما ينتهي بـ ed وليس ماضيًا: need وأخواتها في الشكل، والأسماء الشائعة (Ahmed وKhaled)، والصفات التي تأتي بعد am / is / are. */
var W_ED_NOT = /^(?:need|feed|bleed|breed|speed|succeed|exceed|proceed|indeed|seed|weed|heed|shed|shred|wed|embed|plead|red|bed|fed|hundred|ahmed|mohammed|mohamed|muhammed|khaled|majed|saeed|sayed|waleed|hamed|hameed|rashed|rasheed|fahed|raed|zayed|majeed|fareed|waheed|tired|interested|excited|bored|worried|united|advanced|crowded|pleased)$/;
function wIsPastWord(w){ return W_PAST.indexOf(w) >= 0 || (w.length > 3 && /ed$/.test(w) && !W_ED_NOT.test(w)); }
/* قاعدة was / were مع صفة أو اسم أو مكان، بعد حذف المستمر كله، ولا تُعد was go ولا was study ماضيًا بسيطًا. */
var W_CONT_STRIP = /\b(?:was|were)(?:n't|\s+not)?\s+(?:(?:still|just|already|also|really|all|both|always|never|busy|out|outside|there|[a-z]+ly|i|you|he|she|it|we|they)\s+|(?:the|my|his|her|our|their|your)\s+[a-z]+\s+|(?:at|in|on)\s+(?:home|work|class|college|school|university|bed|(?:the|my|our|his|her|a)\s+[a-z]+),?\s+)?[a-z]{2,}ing\b/gi;
var W_BE_NEXT = /\b(?:was|were)(?:n't|\s+not)?\s+([a-z']+)/gi;
var W_BE_BASE = /^(?:go|come|see|call|study|work|walk|run|sit|stand|take|give|know|tell|feel|eat|drink|sleep|read|write|talk|play|watch|wait|happen|live|learn|teach|want|need|like|love|ask|help|start|finish|travel|drive|ride|wake|get|make|do|have|say|speak|buy|meet|find|think|pray|visit|arrive|stay|leave|try|listen|look|move|pass|pay|send|stop|swim|wash|wear|use|cook)$/i;
/* relaxing وأخواتها فعل في I was relaxing، وصفة في It was relaxing، فتُعد في المستمر، وتبقى مع was صفةً في الماضي البسيط. */
var W_ING_BOTH = /^(?:relaxing|worrying|annoying|encouraging)$/i;
function wBePast(s){
  var t = s.replace(W_CONT_STRIP, function(x){ var w = (x.match(/[a-z]+$/i) || [''])[0]; return (W_ING_NOT.test(w) || W_ING_BOTH.test(w)) ? x : ' '; });
  var m; W_BE_NEXT.lastIndex = 0;
  while ((m = W_BE_NEXT.exec(t))) { if (!W_BE_BASE.test(m[1])) return true; }
  return false;
}
function wPastSimple(s){
  return wBePast(s) || (s.toLowerCase().match(/[a-z']+/g) || []).some(wIsPastWord);
}
/* am وis وare وصيغها المختصرة، وdo وdoes وdon't وdoesn't. ويُحذف قبلها وقت الساعة، لأن am في 7 am ليست فعلًا. ولا تُعد 's بعد الاسم، لأنها قد تكون ملكية (my sister's phone). */
var W_CLOCK = /\b[0-9]{1,2}(?:[:.][0-9]{2})?\s*[ap]m\b/gi;
var W_PRESENT = /\b(?:am|is|are|isn't|aren't|do|does|don't|doesn't|i'm|you're|we're|they're|he's|she's|it's|that's|there's|what's|who's|here's)\b/i;
var W_PRON_VERB = /\b(?:i|we|they)\s+(?:(?:always|usually|often|sometimes|never|rarely|normally|also|still|just|really|only|both|all|then)\s+)*([a-z']+)/gi;
function wPresent(s){
  var t = s.replace(W_CLOCK, ' '), m;
  if (W_PRESENT.test(t)) return true;
  W_PRON_VERB.lastIndex = 0;
  while ((m = W_PRON_VERB.exec(t))) {
    var w = m[1].toLowerCase();
    if (!/^(?:was|were|wasn't|weren't)$/.test(w) && !wIsPastWord(w)) return true;
  }
  return false;
}
var W_VOCAB = [/\bintroduc(?:e|es|ed|ing)\b/i, /\bdescrib(?:e|es|ed|ing)\b/i, /\bdecid(?:e|es|ed|ing)\b/i, /\bproud\b/i, /\brepl(?:y|ies|ied|ying)\b/i, /\bjourneys?\b/i, /\binternational\s+law\b/i];

LESSONS.u103l5 = {
  id: "u103l5",
  unit: 103,
  n: 5,
  mode: "reading",
  en: "This Is Me",
  ar: "كتابة: أول فقرة طويلة عن نفسك",
  subEn: "Writing: Your First Long Paragraph",
  canDoEn: "I can write a long paragraph about myself: a topic sentence, separate supporting sentences in the right tenses, and a closing sentence.",
  canDoAr: "أقدر أن أكتب فقرة طويلة عن نفسي: جملة موضوع، وجملًا داعمة منفصلة بالأزمنة الصحيحة، وجملة ختام.",
  descEn: "I can read Khaled's email to his new online teacher, then write my own paragraph of 8 sentences to introduce myself to my Cambly teacher.",
  descAr: "أقدر أن أقرأ إيميل خالد إلى معلمته الجديدة عبر الإنترنت، ثم أكتب فقرتي من 8 جمل أعرّف فيها بنفسي لمعلم كامبلي.",
  goals: [
    { en: "I can build a paragraph with three parts: a topic sentence, supporting sentences and a closing sentence.", ar: "أقدر أن أبني فقرة من ثلاثة أجزاء: جملة موضوع، وجمل داعمة، وجملة ختام." },
    { en: "I can write separate sentences, each with a capital letter and a period, not one long connected sentence.", ar: "أقدر أن أكتب جملًا منفصلة، كل جملة بحرف كبير ونقطة، لا جملة واحدة طويلة موصولة." },
    { en: "I can move between the tenses in one paragraph: the present for now, the Past Simple for the story, and the Past Continuous for its background.", ar: "أقدر أن أنتقل بين الأزمنة في فقرة واحدة: المضارع لما هو الآن، والماضي البسيط للقصة، والماضي المستمر لخلفيتها." },
    { en: "I can introduce myself with the right small words (I am a law student, good at English), using 6 words that came back and the legal phrase 'international law'.", ar: "أقدر أن أعرّف بنفسي بالكلمات الصغيرة الصحيحة (I am a law student وgood at English)، بست كلمات عائدة والعبارة القانونية international law." }
  ],
  intro: {
    recall: {
      dEn: "Type four words and one legal phrase from Units 1 to 3 from memory before you see the answer.",
      d: "اكتب من ذاكرتك أربع كلمات وعبارة قانونية من الوحدات 1 إلى 3 قبل أن ترى الإجابة.",
      items: [
        ["review", "5 active recall items from Units 1 to 3", "5 عناصر استرجاع نشط من الوحدات 1 إلى 3"],
        ["pen", "Type each answer from memory to fix its spelling", "اكتب كل إجابة من ذاكرتك لتثبيت إملائها"],
        ["spark", "Includes the legal phrase 'sick leave'", "تشمل العبارة القانونية sick leave"]
      ]
    },
    vocab: {
      dEn: "Words Coming Back: no new words today. 6 words that you know come back with the legal phrase 'international law', ready for your paragraph.",
      d: "كلمات عائدة: لا كلمات جديدة اليوم. تعود 6 كلمات تعرفها مع العبارة القانونية international law، لتستعملها في فقرتك.",
      items: [
        ["cards", "7 returning cards (6 words + 'international law') with human audio & Oxford link", "7 بطاقات عائدة (6 كلمات + international law) مع النطق البشري ورابط Oxford"],
        ["review", "2-round matching game", "لعبة توصيل من جولتين"],
        ["quiz", "8 context sentences: choose the right word", "8 جمل سياقية: اختر الكلمة المناسبة"]
      ]
    },
    grammar: {
      dEn: "No new grammar: the three parts of a paragraph, separate sentences, joining words, and moving between the four tenses.",
      d: "لا قاعدة نحوية جديدة: أجزاء الفقرة الثلاثة، والجمل المنفصلة، وكلمات الربط، والانتقال بين الأزمنة الأربعة.",
      items: [
        ["book", "6 short cards: 4 explanations, Common Arab Mistakes, and a Summary", "6 بطاقات: 4 شروح، وأخطاء العرب الشائعة، والخلاصة"],
        ["quiz", "16 guided exercises (4 of each type), one per screen", "16 تمرينًا موجّهًا (4 من كل نمط)، سؤال في كل شاشة"]
      ]
    },
    reading: {
      dEn: "First, read Saad's email from Unit 1 again for speed. Then read Khaled's one long paragraph to his new teacher. This part takes about 12 minutes.",
      d: "اقرأ أولًا إيميل سعد من الوحدة 1 قراءة طلاقة، ثم اقرأ فقرة خالد الطويلة إلى معلمته الجديدة. وتستغرق هذه المرحلة نحو 12 دقيقة.",
      items: [
        ["clock", "Fluency reading: Saad's email from Unit 1, with a timer", "قراءة الطلاقة: إيميل سعد من الوحدة 1 بمؤقت"],
        ["spark", "Predict before you read", "توقّع قبل القراءة"],
        ["mail", "Two readings of Khaled's email and 8 evidence questions", "قراءتان لإيميل خالد و8 أسئلة بالدليل من النص"]
      ]
    },
    writing: {
      dEn: "Your first long paragraph: at least 8 separate sentences to introduce yourself to your Cambly teacher. This part takes about 15 minutes.",
      d: "أول فقرة طويلة لك: 8 جمل منفصلة على الأقل تعرّف فيها بنفسك لمعلم كامبلي. وتستغرق هذه المرحلة نحو 15 دقيقة.",
      items: [
        ["pen", "An 8-line plan: one sentence for each line", "خطة من ثمانية أسطر: جملة لكل سطر"],
        ["spark", "4 instant checks: sentences, the present, the past (both kinds), lesson words", "4 فحوص فورية: الجمل، والمضارع، والماضي بنوعيه، وكلمات الدرس"]
      ]
    },
    quiz: {
      dEn: "10 shuffled questions on the tenses in a paragraph, separate sentences, the lesson words and 'international law' (80% to pass), plus Lesson Error Analysis.",
      d: "اختبار قصير من 10 أسئلة في الأزمنة داخل الفقرة، والجمل المنفصلة، وكلمات الدرس، وinternational law (النجاح من 80%)، مع تحليل الأخطاء.",
      items: [
        ["quiz", "10 questions: 7 grammar, 2 vocabulary, 1 legal (80% passing score)", "10 أسئلة: 7 قواعد، و2 مفردات، و1 قانوني (النجاح من 80%)"],
        ["review", "Error Analysis by category", "تحليل أخطاء الدرس حسب الفئة"]
      ]
    }
  },

  /* ---------- المرحلة 1: الاسترجاع النشط (كلمات من الوحدات الثلاث، لا من الدرس السابق، كما في الخريطة) ---------- */
  recall: [
    {
      id: "rc-0",
      promptAr: "خطير: قد يؤذيك أو يضرّك، وعكسه safe (صفة من الوحدة 2)",
      promptEn: "Not safe: it can hurt you (adjective)",
      sentPre: "Stay away from that snake. Some snakes are very",
      sentPost: "to people.",
      ans: ["dangerous"],
      hint: "d _ _ _ _ _ _ _ s (9 letters)",
      spellNoteEn: "Spelled d-a-n-g-e-r-o-u-s: danger + ous. The end sounds like 'us', but we write -ous.",
      spellNote: "تُكتب d-a-n-g-e-r-o-u-s، وهي danger ثم ous. ونهايتها تُنطق كصوت us، لكنها تُكتب ous.",
      errCat: "spelling"
    },
    {
      id: "rc-1",
      promptAr: "عادة أو عُرف يجري عليه أهل بلد أو جماعة (اسم من الوحدة 1)",
      promptEn: "A usual way of doing things in a country or a group (noun)",
      sentPre: "Serving coffee with dates to guests is an old Arab",
      sentPost: "in our village.",
      ans: ["custom"],
      hint: "c _ _ _ _ m (6 letters)",
      spellNoteEn: "Spelled c-u-s-t-o-m, with one s and one m. Careful: 'customs' at the airport is a different meaning.",
      spellNote: "تُكتب c-u-s-t-o-m، وفيها حرف s واحد وحرف m واحد. وانتبه: customs في المطار معنى آخر.",
      errCat: "spelling"
    },
    {
      id: "rc-2",
      promptAr: "منظر: ما تراه أمامك من مكان ما (اسم من الوحدة 2)",
      promptEn: "What you can see from a place, like the sea from a window (noun)",
      sentPre: "From the top of the mountain, we had a wonderful",
      sentPost: "of the whole city.",
      ans: ["view"],
      hint: "v _ _ w (4 letters)",
      spellNoteEn: "Spelled v-i-e-w. The letters 'iew' sound like 'you'.",
      spellNote: "تُكتب v-i-e-w، وتُنطق iew فيها «يُو».",
      errCat: "spelling"
    },
    {
      id: "rc-3",
      promptAr: "ينقذ: يخرج شخصًا من خطر (فعل من الوحدة 3)",
      promptEn: "Take someone out of danger (verb)",
      sentPre: "Two young men jumped into the river to",
      sentPost: "the little boy.",
      ans: ["rescue"],
      hint: "r _ _ _ _ e (6 letters)",
      spellNoteEn: "Spelled r-e-s-c-u-e. After 'to' we use the base form, with no -d.",
      spellNote: "تُكتب r-e-s-c-u-e، وبعد to نستعمل الفعل المجرد بلا d.",
      errCat: "vocab"
    },
    {
      id: "rc-4",
      promptAr: "إجازة مرضية: غياب عن العمل بسبب المرض (العبارة القانونية من الوحدة 1، كلمتان)",
      promptEn: "Legal phrase from Unit 1: time away from work because you are ill (2 words)",
      sentPre: "The doctor told my father to rest, so he is on",
      sentPost: "this week.",
      ans: ["sick leave"],
      isLegal: true,
      hint: "s _ _ _ _ _ _ _ e (9 letters, 2 words)",
      spellNoteEn: "Two words: sick + leave. 'leave' here means time away from work. There is no 'a' before it, and no -s after it.",
      spellNote: "كلمتان: sick ثم leave، وleave هنا الإجازة من العمل، فلا نضع قبلها a ولا نضيف إليها s.",
      errCat: "vocab"
    }
  ],

  /* ---------- العبارة القانونية العائدة: en وheadword وpos وar وsay وoxfordSlug وwikiFiles وwikiCredit منقولة من u3l1 ---------- */
  legalPhrase: {
    en: "international law",
    headword: "international law",
    pos: "legal phrase",
    ar: "القانون الدولي",
    say: "إِنْتَرْنَاشْنَل لُو",
    ex: "My cousin is studying international law at a university in Paris.",
    exAr: "يدرس ابن عمي القانون الدولي في جامعة بباريس.",
    tipEn: "You met this phrase in Unit 3. When you talk about studies, the verb is 'study': She studies international law. There is no 'the' before it. A person can study it at a university, and a lawyer can work in it.",
    tip: "مرّت بك هذه العبارة في الوحدة 3. وحين تتكلم عن الدراسة يأتي معها الفعل study: She studies international law. ولا نضع قبلها the. ويدرسها المرء في الجامعة، ويعمل فيها المحامي.",
    legal: true,
    oxfordSlug: "international_1",
    wikiFiles: ["En-us-international.ogg", "En-uk-law.ogg"],
    wikiCredit: "File:En-us-international.ogg & File:En-uk-law.ogg · Wikimedia Commons"
  },

  /* ---------- المفردات: كلمات عائدة. الحقول الثابتة منقولة من دروسها الأولى، وex وexAr وtipEn وtip جديدة ---------- */
  vocab: [
    { en: "introduce", pos: "verb", ar: "يعرّف بـ / يقدّم (شخصًا)", say: "إِنْتْرُودْيُوس",
      ex: "My cousin introduced me to his friends at the wedding.", exAr: "عرّفني ابن عمي بأصدقائه في حفل الزفاف.",
      tipEn: "Today's use: introduce myself = tell people who I am. Say 'Let me introduce myself', with no 'to' after the verb here. When there are two people, use 'to': introduce Ali to Sara. The past is introduced.",
      tip: "استعمالها اليوم: introduce myself أي أخبر الناس من أنا. نقول Let me introduce myself بلا to بعد الفعل هنا. وإذا ذكرنا شخصين جاءت to: introduce Ali to Sara. وماضيها introduced.",
      oxfordSlug: "introduce",
      wikiFile: "En-us-introduce.ogg",
      wikiCredit: "File:En-us-introduce.ogg · Wikimedia Commons" },
    { en: "describe", pos: "verb", ar: "يصف", say: "دِسْكْرَايْب",
      ex: "The teacher asked us to describe our favourite place in three sentences.", exAr: "طلب منا المعلم أن نصف مكاننا المفضل في ثلاث جمل.",
      tipEn: "Today's use: describe my day, describe my life. The thing comes right after the verb, so never say 'describe about my day'. A paragraph about yourself describes you.",
      tip: "استعمالها اليوم: describe my day (أصف يومي) وdescribe my life (أصف حياتي). يأتي الشيء بعد الفعل مباشرة، فلا نقول describe about my day. والفقرة التي تكتبها عن نفسك تصفك.",
      oxfordSlug: "describe",
      wikiFile: "En-us-describe.ogg",
      wikiCredit: "File:En-us-describe.ogg · Wikimedia Commons" },
    { en: "decide", pos: "verb", ar: "يقرّر", say: "دِسَايْد",
      ex: "My uncle decided to open a small shop near the mosque.", exAr: "قرّر عمي أن يفتح محلًّا صغيرًا قرب المسجد.",
      tipEn: "Today's use: I decided to learn. After decide comes to + base verb, so never say 'decided learn' or 'decided to learned'. In a story, this verb is a good way to show a change in your life.",
      tip: "استعمالها اليوم: I decided to learn (قرّرت أن أتعلم). يأتي بعدها to مع الفعل المجرد، فلا نقول decided learn ولا decided to learned. وهي في القصة تدل على تغيّر في حياتك.",
      oxfordSlug: "decide",
      wikiFile: "En-us-decide.ogg",
      wikiCredit: "File:En-us-decide.ogg · Wikimedia Commons" },
    { en: "proud", pos: "adjective", ar: "فخور", say: "بْرَاوْد",
      ex: "My mother felt proud when my brother finished his first year at college.", exAr: "شعرت أمي بالفخر حين أنهى أخي سنته الأولى في الكلية.",
      tipEn: "Today's use: I felt proud. It is an adjective, so it comes after be or feel: I am proud, I felt proud. To name the person, add 'of': proud of my sister.",
      tip: "استعمالها اليوم: I felt proud (شعرت بالفخر). وهي صفة تأتي بعد be أو feel: I am proud وI felt proud. ولذكر الشخص نزيد of: proud of my sister.",
      oxfordSlug: "proud",
      wikiFile: "En-us-proud.ogg",
      wikiCredit: "File:En-us-proud.ogg · Wikimedia Commons" },
    { en: "reply", pos: "verb", ar: "يردّ (على رسالة)", say: "رِبْلَاي",
      ex: "I forgot to reply to my manager's email yesterday.", exAr: "نسيت أمس أن أردّ على إيميل مديري.",
      tipEn: "Today's use: reply to an email. Keep the 'to' before the thing that you answer. In the past, y becomes i: reply → replied.",
      tip: "استعمالها اليوم: reply to an email (يردّ على إيميل). أبقِ to قبل ما تردّ عليه. وفي الماضي تتحول y إلى i: reply ← replied.",
      oxfordSlug: "reply",
      wikiFile: "En-us-reply.ogg",
      wikiCredit: "File:En-us-reply.ogg · Wikimedia Commons" },
    { en: "journey", pos: "noun", ar: "رحلة (طويلة غالبًا)", say: "جِيرْنِي",
      ex: "On our journey home, we stopped at a small restaurant.", exAr: "في رحلة عودتنا إلى البيت توقفنا عند مطعم صغير.",
      tipEn: "Today's use: my English journey. A journey is travel from one place to another, but people also use it for a long time of learning or change. The spelling has 'our': j-o-u-r-n-e-y.",
      tip: "استعمالها اليوم: my English journey (رحلتي مع الإنجليزية). فالـ journey انتقال من مكان إلى آخر، ويستعملها الناس أيضًا لمدة طويلة من التعلم أو التغيّر. وفيها our عند الكتابة: j-o-u-r-n-e-y.",
      oxfordSlug: "journey_1",
      wikiFile: "En-uk-a journey.ogg",
      wikiCredit: "File:En-uk-a journey.ogg · Wikimedia Commons" }
  ],

  vocabGaps: [
    { s: "Let me ___ you to my new manager.", opts: ["reply", "introduce", "journey"], a: 1,
      whyEn: "When you make two people know each other, the pattern is introduce + person + to + person. 'reply' needs 'to' right after it, and 'journey' is a noun.",
      why: "حين تعرّف شخصين أحدهما بالآخر فالنمط introduce ثم الشخص ثم to ثم الشخص. أما reply فتأتي بعدها to مباشرة، وjourney اسم.", errCat: "vocab" },
    { s: "The doctor asked me to ___ the pain in my back.", opts: ["describe", "proud", "journey"], a: 0,
      whyEn: "After 'to' we need a verb, and 'describe' means say what something is like. 'proud' is an adjective, and 'journey' is a noun.",
      why: "بعد to نحتاج فعلًا، وdescribe تعني أن تذكر صفات الشيء، أما proud فصفة، وjourney اسم.", errCat: "vocab" },
    { s: "After a long talk, my parents ___ to sell the old car.", opts: ["replied", "introduced", "decided"], a: 2,
      whyEn: "The pattern is decide + to + base verb: after a long talk, they made a choice. We can't say 'replied to sell' or 'introduced to sell'.",
      why: "النمط decide ثم to مع الفعل المجرد: اختارا بعد حديث طويل. ولا نقول replied to sell ولا introduced to sell.", errCat: "vocab" },
    { s: "My father was very ___ of me when I finished the course.", opts: ["proud", "journey", "reply"], a: 0,
      whyEn: "After 'very' we need an adjective, and the pattern is 'proud of' a person. 'journey' and 'reply' are not adjectives.",
      why: "بعد very نحتاج صفة، والنمط proud of ثم الشخص، أما journey وreply فليستا صفتين.", errCat: "vocab" },
    { s: "Please ___ to this email by Thursday.", opts: ["describe", "reply", "decide"], a: 1,
      whyEn: "We say 'reply to' an email: write an answer to it. 'describe' takes no 'to', and we don't decide 'to' an email.",
      why: "نقول reply to an email أي نكتب جوابًا عنه. أما describe فلا تأتي معها to، ولا نقول decide to this email.", errCat: "vocab" },
    { s: "The ___ to Abha was long, but we had a good time in the car.", opts: ["international law", "proud", "journey"], a: 2,
      whyEn: "A 'journey' is travel from one place to another, and the sentence tells us about the road to Abha. The other two options are not travel.",
      why: "journey انتقال من مكان إلى آخر، والجملة تتحدث عن الطريق إلى أبها، أما الخياران الآخران فلا صلة لهما بالسفر.", errCat: "vocab" },
    { s: "I can't ___ which course to take. They are both good.", opts: ["decide", "introduce", "proud"], a: 0,
      whyEn: "Two good courses and one choice: 'decide' means choose after thinking. We can't 'introduce which course', and 'proud' is not a verb.",
      why: "دورتان جيدتان واختيار واحد، وdecide تعني أن تختار بعد تفكير. ولا نقول introduce which course، وproud ليست فعلًا.", errCat: "vocab" },
    { s: "Lawyers who work on problems between countries need to know ___.", opts: ["reply", "international law", "journey"], a: 1,
      whyEn: "'international law' is the law between countries, so these lawyers need it. 'reply' and 'journey' are not areas of law.",
      why: "international law هو القانون بين الدول، فيحتاجه هؤلاء المحامون، أما reply وjourney فليسا من فروع القانون.", errCat: "vocab" }
  ],

  /* ---------- المرحلة 3: بطاقات القواعد ---------- */
  gCards: [
    {
      tEn: "A Paragraph Has Three Parts",
      t: "للفقرة ثلاثة أجزاء",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">A Paragraph Has Three Parts</span><small>للفقرة ثلاثة أجزاء</small></h2>' +
        '<p class="en-p" dir="ltr">You know the tenses. Today you use them in your first long paragraph. A paragraph is a group of sentences about one idea:</p>' +
        '<ol class="uses en-uses" dir="ltr">' +
          '<li><b>Topic sentence:</b> the first sentence. It says what the paragraph is about.<span class="xen">I want to tell you about my family.</span></li>' +
          '<li><b>Supporting sentences:</b> the middle. They give details about the topic.<span class="xen">My father is a pilot. My two sisters live in Jeddah.</span></li>' +
          '<li><b>Closing sentence:</b> the last sentence. It ends the paragraph.<span class="xen">I feel lucky to have them.</span></li>' +
        '</ol>' +
        '<div class="tip" dir="ltr"><p>Every sentence stays on the topic. If a sentence is about something else, take it out.</p></div>',
      arHtml:
        '<p>عرفت الأزمنة، واليوم تستعملها في أول فقرة طويلة لك. والفقرة جمل تدور على فكرة واحدة، ولها ثلاثة أجزاء:</p>' +
        '<p><b>جملة الموضوع:</b> هي الجملة الأولى، وتقول عمّ تتحدث الفقرة: <bdi class="en">I want to tell you about my family.</bdi></p>' +
        '<p><b>الجمل الداعمة:</b> في الوسط، وتذكر تفاصيل الموضوع: <bdi class="en">My father is a pilot.</bdi></p>' +
        '<p><b>جملة الختام:</b> هي الجملة الأخيرة، وبها تنتهي الفقرة: <bdi class="en">I feel lucky to have them.</bdi></p>' +
        '<p>وتبقى كل جملة في الموضوع، فإن تحدثت جملة عن شيء آخر فاحذفها.</p>'
    },
    {
      tEn: "One Idea, One Sentence",
      t: "لكل فكرة جملة",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">One Idea, One Sentence</span><small>لكل فكرة جملة</small></h2>' +
        '<p class="en-p" dir="ltr">Don\'t write one long connected sentence. Stop when the idea ends. Each sentence starts with a capital letter and ends with a period.</p>' +
        '<div class="pairs"><span class="no">i live in hail i work in a bank my brother works with me</span><span class="yes">I live in Hail. I work in a bank. My brother works with me.</span></div>' +
        '<div class="tip" dir="ltr"><p>A comma does not end a sentence. <b>I</b> and the names of people and places always take a capital letter. Use <b>and</b> or <b>but</b> to join two short ideas, not five.</p></div>',
      arHtml:
        '<p>لا تكتب جملة واحدة طويلة موصولة، بل قف حيث تنتهي الفكرة. وتبدأ كل جملة بحرف كبير، وتنتهي بنقطة.</p>' +
        '<p>فلا نكتب <bdi class="en">i live in hail i work in a bank</bdi>، بل <bdi class="en">I live in Hail. I work in a bank.</bdi></p>' +
        '<p>والفاصلة لا تنهي الجملة. ويُكتب الضمير <bdi class="en">I</bdi> وأسماء الأشخاص والأماكن بحرف كبير دائمًا. واستعمل <bdi class="en">and</bdi> أو <bdi class="en">but</bdi> لتصل فكرتين قصيرتين، لا خمسًا.</p>'
    },
    {
      tEn: "Moving Between the Tenses",
      t: "الانتقال بين الأزمنة",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Moving Between the Tenses</span><small>الانتقال بين الأزمنة</small></h2>' +
        '<p class="en-p" dir="ltr">A paragraph about your life uses all four tenses. Change the tense when the time changes:</p>' +
        '<div class="xbox">' +
          '<span class="xtag s" dir="ltr">Now, usually · الآن، وعادةً</span><p class="xen">I <span class="hs">am</span> a nurse. I usually <span class="hs">start</span> work at seven.</p>' +
          '<span class="xtag c" dir="ltr">These days · هذه الأيام</span><p class="xen">This month, I <span class="hc">am learning</span> to drive.</p>' +
          '<span class="xtag c" dir="ltr">The story: background · القصة: خلفيتها</span><p class="xen">Last winter, I <span class="hc">was driving</span> home late.</p>' +
          '<span class="xtag s" dir="ltr">The story: events · القصة: أحداثها</span><p class="xen">A dog <span class="hs">ran</span> into the road, and I <span class="hs">stopped</span>.</p>' +
        '</div>' +
        '<div class="tip" dir="ltr"><p>Time words show the change: <b>now, these days, last winter, two years ago</b>. State verbs stay simple: <b>I know, I want, I need</b>.</p></div>',
      arHtml:
        '<p>تأتي الأزمنة الأربعة كلها في فقرة عن حياتك، فغيّر الزمن حين يتغيّر الوقت:</p>' +
        '<p><b>المضارع البسيط</b> لما أنت عليه الآن ولعادتك: <bdi class="en">I am a nurse. I usually start work at seven.</bdi></p>' +
        '<p><b>المضارع المستمر</b> لما تفعله هذه الأيام: <bdi class="en">This month, I am learning to drive.</bdi></p>' +
        '<p><b>الماضي المستمر</b> لخلفية القصة: <bdi class="en">Last winter, I was driving home late.</bdi></p>' +
        '<p><b>الماضي البسيط</b> لأحداثها: <bdi class="en">A dog ran into the road, and I stopped.</bdi></p>' +
        '<p>وكلمات الوقت تدل على التغيّر: <bdi class="en">now, these days, last winter, two years ago</bdi>. وتبقى الأفعال التي لا تأخذ ing بسيطة: <bdi class="en">I know, I want, I need</bdi>.</p>'
    },
    {
      tEn: "Words That Join Your Ideas",
      t: "كلمات تربط أفكارك",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Words That Join Your Ideas</span><small>كلمات تربط أفكارك</small></h2>' +
        '<p class="en-p" dir="ltr">Separate sentences still need to work together. You know most of these words:</p>' +
        '<ul class="spell" dir="ltr">' +
          '<li><b>first, then, after that, finally</b>: the order of events<span class="s-en">First, I pray. Then I study.</span></li>' +
          '<li><b>but</b>: a different idea<span class="s-en">It was late, but I wasn\'t tired.</span></li>' +
          '<li><b>when, while</b>: two things in a story<span class="s-en">While I was cooking, Ali arrived.</span></li>' +
          '<li><b>because</b> gives the reason<span class="s-en">I stayed home because I was ill.</span></li>' +
          '<li><b>so</b> gives the result<span class="s-en">I was ill, so I stayed home.</span></li>' +
        '</ul>',
      arHtml:
        '<p>الجمل المنفصلة تحتاج إلى ما يصل بعضها ببعض، وأكثر هذه الكلمات تعرفه:</p>' +
        '<p><bdi class="en">first, then, after that, finally</bdi> لترتيب الأحداث، و<bdi class="en">but</bdi> لفكرة مخالفة، و<bdi class="en">when</bdi> و<bdi class="en">while</bdi> لحدثين في القصة.</p>' +
        '<p>أما <bdi class="en">because</bdi> فتذكر السبب، و<bdi class="en">so</bdi> تذكر النتيجة: <bdi class="en">I was ill, so I stayed home.</bdi></p>'
    },
    {
      tEn: "Common Arab Mistakes",
      t: "أخطاء العرب الشائعة",
      bilingual: true,
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Common Arab Mistakes</span><small>أخطاء يقع فيها كثير من العرب حين يكتبون عن أنفسهم</small></h2>' +
        '<ul class="mist">' +
          '<li><span class="no">my name is omar i am from tabuk i like reading</span><span class="yes">My name is Omar. I am from Tabuk. I like reading.</span><p class="en-m" dir="ltr">Write separate sentences. Use a capital letter for the first word, for <b>I</b> and for names, and end each sentence with a period.</p><p>اكتب جملًا منفصلة، واجعل الحرف كبيرًا في أول الجملة وفي <bdi class="en">I</bdi> وفي الأسماء، وأنهِ كل جملة بنقطة.</p></li>' +
          '<li><span class="no">Last Ramadan, I help my father in his shop.</span><span class="yes">Last Ramadan, I helped my father in his shop.</span><p class="en-m" dir="ltr"><b>Last Ramadan</b> moves the story to the past, so the verb changes to the past too.</p><p><bdi class="en">Last Ramadan</bdi> تنقل القصة إلى الماضي، فيتغيّر الفعل إلى الماضي معها.</p></li>' +
          '<li><span class="no">I am teacher at a high school.</span><span class="yes">I am a teacher at a high school.</span><p class="en-m" dir="ltr">Put <b>a</b> or <b>an</b> before a job: a teacher, an engineer.</p><p>ضع <bdi class="en">a</bdi> أو <bdi class="en">an</bdi> قبل المهنة: <bdi class="en">a teacher</bdi> و<bdi class="en">an engineer</bdi>.</p></li>' +
          '<li><span class="no">My brother is good in football.</span><span class="yes">My brother is good at football.</span><p class="en-m" dir="ltr">We say <b>good at</b> something, not <b>good in</b>.</p><p>نقول <bdi class="en">good at</bdi> لا <bdi class="en">good in</bdi>.</p></li>' +
        '</ul>'
    },
    {
      tEn: "Summary",
      t: "الخلاصة",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Quick Summary</span><small>الخلاصة</small></h2>' +
        '<div class="sumc" dir="ltr"><h3>Your Paragraph Checklist · قائمة فقرتك</h3>' +
          '<p><b>Topic → Support → Closing</b><span>Three parts, and every sentence stays on the topic</span></p>' +
          '<p><b>Capital letter … period.</b><span>One idea, one sentence</span></p>' +
          '<p><b>I am · I work · I am working</b><span>The present for your life now and these days</span></p>' +
          '<p><b>I was working · someone called</b><span>The Past Continuous for the background, the Past Simple for events</span></p>' +
          '<p><b>first · then · but · because · so</b><span>Words that join your ideas</span></p>' +
          '<p><b>a law student · good at</b><span>The small words in an introduction</span></p>' +
        '</div>' +
        '<p class="en-p" dir="ltr">Now let\'s practise: 16 guided exercises with brand-new sentences.</p>',
      arHtml:
        '<p><b>الفقرة:</b> جملة موضوع، وجمل داعمة، وجملة ختام، وتبقى كل جملة في الموضوع.</p>' +
        '<p><b>الجمل:</b> لكل فكرة جملة، بحرف كبير في أولها ونقطة في آخرها.</p>' +
        '<p><b>الأزمنة:</b> المضارع لما هو الآن وهذه الأيام، والماضي البسيط لأحداث القصة، والماضي المستمر لخلفيتها.</p>' +
        '<p><b>الربط:</b> <bdi class="en">first, then, but, because, so</bdi>.</p>' +
        '<p><b>التعريف بالنفس:</b> <bdi class="en">a law student</bdi> و<bdi class="en">good at</bdi>.</p>' +
        '<p>والآن نتدرّب: 16 تمرينًا موجّهًا بجمل جديدة.</p>'
    }
  ],

  /* ---------- المرحلة 3: التمارين (8 الانتقال بين الأزمنة · 4 فصل الجمل · 2 بنية الفقرة · 2 a / an وحروف الجر) ---------- */
  gA: [
    { s: "My brother is a nurse now, but last year he ___ in a shop.", opts: ["works", "worked"], a: 1,
      whyEn: "The sentence moves from 'now' to 'last year', a finished time, so the second verb changes to the Past Simple.",
      why: "تنتقل الجملة من now إلى last year، وهو وقت انتهى، فيتغيّر الفعل الثاني إلى الماضي البسيط.", errCat: "tense" },
    { s: "I was fishing with my uncle when my keys ___ into the water.", opts: ["fell", "were falling"], a: 0,
      whyEn: "Fishing was the long action, and the keys fell once, in the middle of it. This short action comes after 'when', so it takes the Past Simple.",
      why: "صيد السمك هو الحدث الطويل، وسقطت المفاتيح مرة واحدة في أثنائه. وهذا حدث قصير بعد when، فيأتي بالماضي البسيط.", errCat: "tense" },
    { s: "Your topic sentence is 'I am a student at Qassim University.' Which sentence supports it?", opts: ["Penguins live in very cold places.", "I study business there, and I go to class five days a week."], a: 1,
      whyEn: "A supporting sentence gives details about the topic: here, the writer's studies. The sentence about penguins has nothing to do with that topic, so it doesn't belong.",
      why: "الجملة الداعمة تذكر تفاصيل الموضوع، وهو هنا دراسة الكاتب. أما الجملة عن البطاريق فلا صلة لها بالموضوع، فلا مكان لها في الفقرة.", errCat: "word_order" },
    { s: "Which text has three separate sentences?", opts: ["I am Fahad. I study history. I live in Yanbu.", "I am Fahad, I study history, I live in Yanbu."], a: 0,
      whyEn: "A comma doesn't end a sentence, so the text with commas is one long connected sentence. Three ideas need three periods and three capital letters.",
      why: "الفاصلة لا تنهي الجملة، فالنص الذي فيه فواصل جملة واحدة طويلة موصولة. والأفكار الثلاث تحتاج ثلاث نقاط وثلاثة أحرف كبيرة.", errCat: "word_order" }
  ],

  gB: [
    { s: "I wake up at seven i go to college by bus.", ok: false, fix: "I wake up at seven. I go to college by bus.",
      whyEn: "These are two ideas, so they need two sentences: a period after 'seven' and a capital I.",
      why: "هاتان فكرتان، فتحتاجان جملتين: نقطة بعد seven، والضمير I بحرف كبير.", errCat: "word_order" },
    { s: "Last month I start my new job at the bank.", ok: false, fix: "Last month I started my new job at the bank.",
      whyEn: "'Last month' is a finished time, so the base verb 'start' doesn't fit it. The event needs the Past Simple: started.",
      why: "Last month وقت انتهى، فلا يناسبه الفعل المجرد start، ويأتي الحدث بالماضي البسيط: started.", errCat: "tense" },
    { s: "Reem is engineer at the new hospital.", ok: false, fix: "Reem is an engineer at the new hospital.",
      whyEn: "A job after 'is' needs 'a' or 'an'. 'engineer' starts with a vowel sound, so we use 'an'.",
      why: "المهنة بعد is تحتاج a أو an، وengineer تبدأ بصوت متحرك، فنستعمل an.", errCat: "articles_prep" },
    { s: "My colleague teaches history now, but ten years ago he drove a taxi.", ok: true,
      whyEn: "Correct: 'now' takes the present (teaches), and 'ten years ago' moves the sentence to the past (drove).",
      why: "صحيحة: now يأتي معها المضارع teaches، وten years ago تنقل الجملة إلى الماضي drove.", errCat: "tense" }
  ],

  gC: [
    { pre: "My sister is a teacher now. Two years ago, she", verb: "study · Past Simple", post: "at a college in Tabuk.", ans: ["studied"],
      whyEn: "The paragraph moves from 'now' to 'Two years ago', so we use the Past Simple. A consonant + y changes to -ied: study → studied.",
      why: "تنتقل الفقرة من now إلى Two years ago، فنستعمل الماضي البسيط. وحين يسبق y حرف ساكن تتحول إلى ied: study ← studied.", errCat: "tense" },
    { pre: "I usually go to bed early, but this week", verb: "I / prepare · Present Continuous", post: "for my exams.", ans: ["I am preparing", "I'm preparing"], exact: true,
      whyEn: "'usually' is the habit, and 'this week' is what is going on these days, so we use am + verb-ing. The e goes before -ing: prepare → preparing.",
      why: "usually للعادة، وthis week لما يجري هذه الأيام، فنستعمل am مع الفعل وing. وتسقط e قبل ing: prepare ← preparing.", errCat: "tense" },
    { pre: "My father", verb: "not / sleep · Past Continuous", post: "when I came home, so we talked.", ans: ["wasn't sleeping", "was not sleeping"],
      whyEn: "This is the background of the story, and the tense is given. 'My father' takes 'was', and the negative is wasn't + verb-ing.",
      why: "هذه خلفية القصة، والزمن مذكور. وMy father يأتي معها was، والنفي wasn't مع الفعل وing.", errCat: "tense" },
    { pre: "My cousin is very good", verb: "preposition", post: "drawing.", ans: ["at"],
      groupEn: "Write the correct preposition", group: "اكتب حرف الجر الصحيح",
      whyEn: "We say 'good at' something. Arabic speakers often say 'good in', but in English the preposition is 'at'.",
      why: "نقول good at الشيء. وكثير من العرب يقولون good in، لكن حرف الجر هنا at.", errCat: "articles_prep" }
  ],

  gD: [
    { chips: ["to the beach.", "Then we", "Last Friday, we drove", "had lunch there."], ans: "Last Friday, we drove to the beach. Then we had lunch there.",
      whyEn: "Two events make two sentences. The first one ends with a period, and 'Then' starts the second one with a capital letter.",
      why: "حدثان في جملتين: تنتهي الأولى بنقطة، وتبدأ Then الثانية بحرف كبير.", errCat: "word_order" },
    { chips: ["After that,", "My car stopped.", "a friend.", "I called"], ans: "My car stopped. After that, I called a friend.",
      whyEn: "'After that' points back to an event, so the event comes first in its own sentence. Then comes the next sentence.",
      why: "After that تشير إلى حدث سابق، فيأتي الحدث أولًا في جملة وحده، ثم الجملة التالية.", errCat: "word_order" },
    { chips: ["but today", "I usually", "I am driving.", "walk to college,"], ans: "I usually walk to college, but today I am driving.",
      whyEn: "The sentence moves from the habit (usually + Present Simple) to what is different today (Present Continuous), and 'but' joins them.",
      why: "تنتقل الجملة من العادة (usually مع المضارع البسيط) إلى ما تغيّر اليوم (المضارع المستمر)، وتصل but بينهما.", errCat: "tense" },
    { chips: ["Then I have breakfast with my father.", "Let me describe my usual morning.", "Finally, I drive to college.", "First, I make coffee."], ans: "Let me describe my usual morning. First, I make coffee. Then I have breakfast with my father. Finally, I drive to college.",
      whyEn: "The topic sentence comes first and says what the paragraph is about. The supporting sentences follow with First, Then and Finally.",
      why: "تأتي جملة الموضوع أولًا فتقول عمّ تتحدث الفقرة، ثم الجمل الداعمة بـ First وThen وFinally.", errCat: "word_order" }
  ],

  /* ---------- المرحلة 4: القراءة ---------- */
  reading: {
    title: "Before Our First Lesson",
    from: "Khaled",
    fromMeta: "Khaled · Engineering student, Dammam",
    to: "Ms Lewis",
    fluencyFrom: "u1l5",
    lg1: "Simple tenses: present and past",
    lg2: "Continuous tenses: present and past",
    lg3: "Time words and joining words",
    hlLabel: "Highlight the tenses",
    targetSeconds: 98,
    introEn: "Khaled is an engineering student in Dammam. He has a new online English teacher, and he is writing to her before their first lesson.",
    intro: "خالد طالب هندسة في الدمام، ولديه معلمة إنجليزية جديدة عبر الإنترنت، وهو يكتب إليها قبل أول حصة.",
    // <<s:..>> كل بسيط، حاضرًا أو ماضيًا · <<c:..>> كل مستمر، حاضرًا أو ماضيًا · <<t:..>> كلمات الوقت والربط
    // {word|key} كلمات الدرس السبع وحدها · [[text|معنى]] كلمة واحدة مساعدة · والنص فقرة واحدة طويلة، لأنه نموذج لكتابة المتعلم
    paras: [
      "Dear Ms Lewis,",
      "<<t:Before>> our first lesson, I <<s:want>> to {introduce} myself and {describe} my life. My name <<s:is>> Khaled, and I<<s:'m>> an [[engineering|الهندسة]] student in Dammam. On a typical day, I <<s:get>> up at six, and class <<s:starts>> at eight. <<t:After class>>, I <<t:usually>> <<s:stay>> in the library until four, and in the evening I <<s:relax>> with my brother. <<t:These days>>, I<<c:'m doing>> research on safe roads with two classmates. We<<c:'re measuring>> the traffic in our city, <<t:so>> my schedule <<s:is>> very busy. There <<s:is>> one moment that I can't forget. One night <<t:two years ago>>, I <<c:was studying>> for an exam <<t:when>> my sister suddenly <<s:called>>. She <<s:got>> a place at a university in London to study {international law}. I <<s:felt>> very {proud} of her. <<t:That night>>, I <<s:{decided|decide}>> to learn English <<t:because>> I <<s:wanted>> to visit her and talk to people there. <<t:The next week>>, I <<s:started>> my English {journey}. <<t:Now>> I <<s:read>> English every day, <<t:but>> speaking <<s:is>> still difficult for me, <<t:so>> I <<s:need>> your help. Please {reply} if you <<s:have>> any questions. I <<s:am>> ready for our first lesson!",
      "Best wishes,<br>Khaled"
    ],
    predict: {
      qEn: "Before you read: Khaled is writing to Ms Lewis, his new online teacher, before their first lesson. What do you think his email is mainly about?",
      q: "توقّع قبل القراءة: يكتب خالد إلى السيدة لويس، معلمته الجديدة عبر الإنترنت، قبل أول حصة. عمّ تتوقع أن يكون إيميله في أغلبه؟",
      optsEn: ["A problem with his internet", "Himself and his life", "The price of the lessons"],
      opts: ["مشكلة في الإنترنت عنده", "نفسه وحياته", "ثمن الحصص"],
      a: 1,
      revealEn: "Khaled uses one long paragraph to tell his new teacher about himself.",
      reveal: "يكتب خالد فقرة واحدة طويلة يعرّف فيها معلمته الجديدة بنفسه."
    },
    insight: {
      titleEn: "How Khaled Builds His Paragraph",
      titleAr: "كيف بنى خالد فقرته",
      l1En: "His first sentence is the topic sentence. Then he tells who he is and what he usually does in the Present Simple:",
      ex1: "Before our first lesson, I want to introduce myself · My name is Khaled · I usually stay in the library",
      l2En: "Later, a time word moves the paragraph to the past, and the last sentence closes it:",
      ex2: "There is one moment that I can't forget · two years ago · I felt very proud of her · I am ready for our first lesson!",
      arHtml: '<p>لاحظ أن خالدًا بدأ بجملة موضوع تقول ما سيفعله، ثم انتقل من عاداته بالمضارع البسيط إلى ما يجري هذه الأيام بالمضارع المستمر. ثم نقلته كلمة الوقت <bdi class="en">two years ago</bdi> إلى قصة في الماضي، خلفيتها بالماضي المستمر وأحداثها بالماضي البسيط. ثم عاد إلى الحاضر بكلمة <bdi class="en">Now</bdi>، وأنهى فقرته بجملة ختام. وكل جملة منفصلة، بحرف كبير ونقطة.</p>'
    },
    questions: [
      { q: "What does Khaled study?", opts: ["Law", "Engineering", "Medicine"], a: 1,
        ev: "My name is Khaled, and I'm an engineering student in Dammam.",
        whyEn: "'an engineering student' tells us his subject. International law is what his sister studies.",
        why: "an engineering student تدل على تخصصه، أما القانون الدولي فتخصص أخته.", errCat: "reading" },
      { tf: true, q: "Khaled's class starts at six.", a: false,
        ev: "On a typical day, I get up at six, and class starts at eight.",
        whyEn: "False: six is the time when he gets up. His class starts at eight.",
        why: "خطأ؛ السادسة وقت استيقاظه، ويبدأ فصله في الثامنة.", errCat: "reading" },
      { q: "What is Khaled doing these days?", opts: ["He is doing research on safe roads.", "He is writing a book about London.", "He is teaching his brother English."], a: 0,
        ev: "These days, I'm doing research on safe roads with two classmates.",
        whyEn: "'These days' introduces what is going on now, and the Present Continuous tells us what it is: research on safe roads.",
        why: "These days تدل على ما يجري الآن، ويذكر المضارع المستمر ما هو: بحث عن الطرق الآمنة.", errCat: "reading" },
      { q: "Why is Khaled's schedule very busy?", opts: ["He works at the library.", "He has a new job in London.", "He and his classmates are measuring the traffic."], a: 2,
        ev: "We're measuring the traffic in our city, so my schedule is very busy.",
        whyEn: "'so' gives the result. The work on the traffic comes first, and the busy schedule is the result of it.",
        why: "so تدل على النتيجة: قياس حركة السير أولًا، والجدول المزدحم نتيجته.", errCat: "reading" },
      { q: "What was Khaled doing when his sister called?", opts: ["He was studying for an exam.", "He was relaxing with his brother.", "He was sitting in class."], a: 0,
        ev: "One night two years ago, I was studying for an exam when my sister suddenly called.",
        whyEn: "'was studying' is the long action, and the call came in the middle of it.",
        why: "was studying هو الحدث الطويل، وجاء الاتصال في أثنائه.", errCat: "reading" },
      { q: "What was his sister's news?", opts: ["She got a job in Dammam.", "She got a place at a university.", "She passed her English exam."], a: 1,
        ev: "She got a place at a university in London to study international law.",
        whyEn: "'got a place at a university' means that the university accepted her as a student.",
        why: "got a place at a university تعني أن الجامعة قبلتها طالبة.", errCat: "reading" },
      { q: "Why did Khaled decide to learn English?", opts: ["He wanted a job in a bank.", "His teacher asked him to.", "He wanted to visit his sister and talk to people there."], a: 2,
        ev: "That night, I decided to learn English because I wanted to visit her and talk to people there.",
        whyEn: "'because' gives the reason: he wanted to visit her in London and talk to people there.",
        why: "because تذكر السبب: أراد أن يزور أخته في لندن ويتحدث إلى الناس هناك.", errCat: "reading" },
      { tf: true, q: "Speaking English is still difficult for Khaled.", a: true,
        ev: "Now I read English every day, but speaking is still difficult for me, so I need your help.",
        whyEn: "True: he reads every day, but 'but' introduces a different idea: speaking is still difficult.",
        why: "صحيح؛ يقرأ كل يوم، لكن but تأتي بفكرة مخالفة: ما زال الكلام صعبًا عليه.", errCat: "reading" }
    ]
  },

  /* ---------- المرحلة 5: الكتابة ---------- */
  writing: {
    minSentences: 8,
    taskEn: "This paragraph takes about 15 minutes. Write one long paragraph to introduce yourself to your Cambly teacher. Write at least 8 separate sentences, one for each number: (1) Who I am: this is your topic sentence. (2) Where I study. (3) My usual day. (4) What I am doing these days. (5) What was going on in a moment that I can't forget. (6) What happened in that moment. (7) Why I am learning English. (8) A closing sentence, not just 'Thank you'. Every sentence needs at least 3 words. Use the present for your life now. In your story, use the Past Continuous for the background and the Past Simple for the event. Start each sentence with a capital letter, end it with a period, and use at least 2 words from today's lesson.",
    task: "تستغرق هذه الفقرة نحو 15 دقيقة. اكتب فقرة واحدة طويلة تعرّف فيها بنفسك لمعلم كامبلي، في 8 جمل منفصلة على الأقل، جملة لكل رقم: (1) من أنا، وهي جملة الموضوع. (2) أين أدرس. (3) يومي المعتاد. (4) ما أفعله هذه الأيام. (5) ما كان يجري في لحظة لا أنساها. (6) ما وقع فيها. (7) لماذا أتعلم الإنجليزية. (8) جملة ختام، لا Thank you وحدها. وكل جملة ثلاث كلمات على الأقل. استعمل المضارع لحياتك الآن، وفي القصة الماضي المستمر للخلفية والماضي البسيط للحدث. وابدأ كل جملة بحرف كبير، وأنهها بنقطة، واستعمل كلمتين على الأقل من كلمات الدرس.",
    placeholder: "My name is …\nI study at …\nOn a typical day, I …\nThese days, I am …\nOne night, I was …\nSuddenly, …\nI am learning English because …\n…",
    checks: [
      { k: "sentences", tEn: "At least 8 separate sentences (end each with a period)", t: "8 جمل منفصلة على الأقل (تنتهي كل جملة بنقطة)",
        ok: function(a, text){ return a.sentences >= 8 && !a.runOn; } },
      { k: "present", tEn: "The present: at least one present verb about your life now", t: "المضارع: فعل واحد على الأقل بالمضارع عن حياتك الآن", ex: "I am a student. · I study law. · I'm reading a lot this week.",
        ok: function(a, text){ return wPresent(wNorm(text)); } },
      { k: "past", tEn: "The past, both kinds: one Past Continuous verb (was / were + verb-ing) and one Past Simple verb", t: "الماضي بنوعيه: فعل بالماضي المستمر (was / were مع الفعل وing)، وفعل بالماضي البسيط", ex: "I was studying when my friend called. · We were driving. I was very happy.",
        ok: function(a, text){ var s = wNorm(text); return wCont(s) >= 1 && wPastSimple(s); } },
      { k: "vocab", tEn: "At least 2 words or phrases from today's lesson", t: "كلمتان أو عبارتان على الأقل من درس اليوم", ex: "introduce · describe · decide · proud · reply · journey · international law",
        ok: function(a, text){ var s = wNorm(text); return W_VOCAB.filter(function(re){ return re.test(s); }).length >= 2; } }
    ],
    modelMarked: "Hello, I <<s:am>> Salem, a medical student. I <<s:study>> at King Khalid University in Abha. <<t:Every morning>>, I <<s:go>> to the hospital, and <<t:at night>> I <<s:read>> my books. <<t:This week>>, I <<c:am preparing>> for a big exam. <<t:Last spring>>, I <<c:was helping>> a doctor at the hospital. <<t:Suddenly>>, a visitor <<s:asked>> me a question in English, <<t:but>> I <<s:didn't understand>> him. <<t:Now>> I <<c:am learning>> English <<t:because>> I <<s:want>> to help all my patients. My {journey} <<s:is>> long, <<t:but>> I <<s:am>> {proud} of every new word.",
    model: "Hello, I am Salem, a medical student. I study at King Khalid University in Abha. Every morning, I go to the hospital, and at night I read my books. This week, I am preparing for a big exam. Last spring, I was helping a doctor at the hospital. Suddenly, a visitor asked me a question in English, but I didn't understand him. Now I am learning English because I want to help all my patients. My journey is long, but I am proud of every new word.",
    legendEn: "Light blue = simple tenses · Terracotta = continuous tenses · Dashed = time words and joining words",
    legendAr: "الأزرق الفاتح للأزمنة البسيطة، والطوبي للأزمنة المستمرة، والإطار المنقّط لكلمات الوقت والربط.",
    acceptExamples: [
      "I study business in Jeddah. My college is near the sea. Every day I wake up early and take the bus. This month I work in my father's shop after class. Two years ago, we were living in Taif. One day a tourist came to the shop and asked me about the prices. I didn’t know what to say, so I decided to learn English. I want to reply to my customers in good English. Thank you for reading about my journey.",
      "Hello teacher, I’m Noura and I’m a nursing student from Hail. I go to Hail University. I usually start my day at 6 am and finish at 4 pm. This week I’m working in a small hospital with my colleagues. Last Ramadan, my friends and I weren’t studying, because we were helping poor families. Then an old woman thanked us, and I felt proud. I want to travel and study in Canada, so I need English. I hope you can help me on this journey!",
      "My name is Ahmed. I live in Taif with my family. I like my college very much. I don't work, but I help my father on Fridays. Last winter, it was raining all day and we were sitting at home. I was very happy that day because my brother was home from Japan. I want to speak English with him, and I decided to start today. Let me describe my goal: I want to be a good lawyer.",
      "Hello, I am Fahad from Jeddah. I am a second-year student at the College of Law. I usually wake up at seven and drive to college. This month, I am reading about international law. One evening last summer, I was relaxing at home with my father. The phone rang, and my uncle told me some good news. I want to work in a big office, so I need English. I am proud of this plan, and I am ready to start.",
      "I want to introduce myself. I am Nawaf, and I study law in Qassim. My day starts at six, and I pray with my father. This term, I am studying contracts. Last Friday, I was quietly reading in the park. An old man sat next to me and spoke to me in English. I decided to learn English because I want to talk to people. It is a long journey, but I like it.",
      "Let me introduce myself. My name is Turki, and I am a law student in Riyadh. I go to King Saud University. I usually study in the morning and go to the gym in the evening. These days, I am helping my brother with his English. One night last year, I was at home studying for an exam. My friend called me and said that he got a job in London. I felt proud of him, and now I want to learn English too.",
      "I am Bandar, a law student from Abha. I study at King Khalid University. My classes start at nine, and I finish at two. These days, I am working on a report about contracts. Last summer, I was walking in a street in Istanbul. Suddenly, a man stole my phone. I need English because I want to reply to people when I travel. This journey is hard, but I am ready."
    ]
  },

  /* ---------- «اسأل المعلم» ---------- */
  askChips: [
    "ما الفرق بين جملة الموضوع وجملة الختام؟",
    "كيف أعرف أين تنتهي الجملة وأضع النقطة؟",
    "متى أغيّر الزمن داخل الفقرة الواحدة؟",
    "متى أقول a ومتى أقول an قبل المهنة؟"
  ],

  /* ---------- المرحلة 6: الاختبار القصير ---------- */
  quiz: [
    { s: "I am a dentist now, but in 2019 I ___ a student in Cairo.", opts: ["was", "am", "were"], a: 0, tag: "Grammar · قواعد",
      whyEn: "'in 2019' is a finished time, so the sentence moves from the present to the past, and 'I' takes 'was'. 'am' is the present, and 'were' doesn't go with 'I'.",
      why: "in 2019 وقت انتهى، فتنتقل الجملة من المضارع إلى الماضي، وI يأتي معها was. أما am فمضارع، وwere لا تأتي مع I.", errCat: "tense" },
    { s: "We were having dinner when my uncle ___ at the door.", opts: ["was arriving", "arrived", "arrives"], a: 1, tag: "Grammar · قواعد",
      whyEn: "Dinner was the long action, and the arrival is the short action after 'when', so it takes the Past Simple. 'arrives' is the present, and this story is in the past.",
      why: "العشاء هو الحدث الطويل، والوصول حدث قصير بعد when، فيأتي بالماضي البسيط. أما arrives فمضارع، والقصة في الماضي.", errCat: "tense" },
    { s: "Can you wait ten minutes? I ___ the kitchen at the moment.", opts: ["clean", "cleaned", "am cleaning"], a: 2, tag: "Grammar · قواعد",
      whyEn: "The speaker asks you to wait because the cleaning is going on right now, so we need am + verb-ing. 'clean' is a habit, and 'cleaned' is finished.",
      why: "يطلب المتحدث الانتظار لأن التنظيف جارٍ الآن، فنحتاج am مع الفعل وing. أما clean فللعادة، وcleaned لحدث انتهى.", errCat: "tense" },
    { s: "My uncle is ___ officer at the airport.", opts: ["a", "at", "an"], a: 2, tag: "Grammar · قواعد",
      whyEn: "A job after 'is' needs 'a' or 'an'. The next word, 'officer', starts with a vowel sound, so we use 'an'.",
      why: "المهنة بعد is تحتاج a أو an، والكلمة التالية officer تبدأ بصوت متحرك، فنستعمل an.", errCat: "articles_prep" },
    { s: "Which text is written correctly?", opts: ["my uncle has a farm he grows dates we visit him on fridays", "My uncle has a farm. He grows dates. We visit him on Fridays.", "My uncle has a farm, he grows dates, we visit him on Fridays."], a: 1, tag: "Grammar · قواعد",
      whyEn: "Three ideas need three separate sentences, each with a capital letter and a period. Commas don't end a sentence, and 'Fridays' needs a capital letter.",
      why: "الأفكار الثلاث تحتاج ثلاث جمل منفصلة، كل جملة بحرف كبير ونقطة. والفواصل لا تنهي الجملة، وتُكتب Fridays بحرف كبير.", errCat: "word_order" },
    { s: "I ___ more English for my job now.", opts: ["need", "am needing", "needed"], a: 0, tag: "Grammar · قواعد",
      whyEn: "'need' is a state verb, so it stays simple even with 'now'. 'needed' is the past, and 'now' shows the present.",
      why: "need فعل لا يأخذ ing، فيبقى بسيطًا حتى مع now. أما needed فماضٍ، وnow تدل على الحاضر.", errCat: "stative" },
    { s: "Last year, my family ___ to Khobar, and now we live near the sea.", opts: ["move", "is moving", "moved"], a: 2, tag: "Grammar · قواعد",
      whyEn: "'Last year' is a finished time, so the event takes the Past Simple. Then 'now' brings the sentence back to the present: we live.",
      why: "Last year وقت انتهى، فيأتي الحدث بالماضي البسيط، ثم تعيد now الجملة إلى الحاضر: we live.", errCat: "tense" },
    { s: "I read her message, but I didn't ___ to it.", opts: ["reply", "describe", "decide"], a: 0, tag: "Vocabulary · مفردات",
      whyEn: "We say 'reply to' a message: write an answer to it. 'describe' takes no 'to', and we don't 'decide to' a message.",
      why: "نقول reply to a message أي نكتب جوابًا عنها. أما describe فلا تأتي معها to، ولا نقول decide to a message.", errCat: "vocab" },
    { s: "Please ___ your job in one sentence.", opts: ["journey", "describe", "proud"], a: 1, tag: "Vocabulary · مفردات",
      whyEn: "After 'Please' we need a verb, and 'describe' means say what something is like. 'journey' is a noun, and 'proud' is an adjective.",
      why: "بعد Please نحتاج فعلًا، وdescribe تعني أن تذكر صفات الشيء، أما journey فاسم، وproud صفة.", errCat: "vocab" },
    { s: "When two countries sign an agreement, they must follow ___.", opts: ["law international", "the law international", "international law"], a: 2, tag: "Legal Track · المسار القانوني",
      whyEn: "The phrase is 'international law': the adjective comes before the noun, and there is no 'the'.",
      why: "العبارة international law: تأتي الصفة قبل الاسم، ولا نضع the.", errCat: "vocab" }
  ]
};
})();
