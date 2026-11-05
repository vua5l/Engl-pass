/* ===== الوحدة 3 · الدرس 1: A Night to Remember — الماضي المستمر في الإثبات (6 مراحل · درس قراءة يفتتح الوحدة) ===== */
(function(){
/* خط الزمن في البطاقة الأولى: الماضي المستمر شريط طويل يمر بنقطة في الماضي (الماضي يمين واتجاه الزمن إلى اليسار، كما في u2l1). */
var TL_SVG = '<svg class="tl" viewBox="0 0 340 132" role="img" aria-label="Timeline: the Past Continuous is a long action in progress at a point in the past · الماضي المستمر حدث طويل كان جاريًا عند نقطة في الماضي" direction="ltr">' +
  '<line x1="92" y1="18" x2="92" y2="100" stroke="#1E2A33" stroke-width="1.2" stroke-dasharray="3 3"/><text x="92" y="12" text-anchor="middle" font-family="Quicksand, sans-serif" font-weight="700" font-size="10.5" fill="#1E2A33" letter-spacing="1.5">NOW</text>' +
  '<line x1="30" y1="62" x2="326" y2="62" stroke="#5A6B7C" stroke-width="1.5"/><path d="M22 62l10-5v10z" fill="#5A6B7C"/>' +
  '<rect x="160" y="54" width="146" height="16" rx="8" fill="#B94A33" opacity="0.28"/>' +
  '<circle cx="233" cy="62" r="7" fill="#B94A33"/>' +
  '<text x="233" y="42" text-anchor="middle" font-family="Quicksand, Readex Pro, sans-serif" font-size="12" font-weight="700" fill="#A8432E">was cooking · in progress</text>' +
  '<text x="233" y="88" text-anchor="middle" font-family="Quicksand, Readex Pro, sans-serif" font-size="11.5" fill="#5A6B7C">at eight · في الثامنة</text>' +
  '<text x="326" y="124" text-anchor="end" font-family="Quicksand, Readex Pro, sans-serif" font-size="11.5" fill="#5A6B7C">Past · الماضي</text><text x="30" y="124" text-anchor="start" font-family="Quicksand, Readex Pro, sans-serif" font-size="11.5" fill="#5A6B7C">Future · المستقبل</text></svg>';
/* صورة رأس إيميل لمى (صاروخ في سماء الليل وهلال): خاصة بهذا الدرس، وتظهر عبر reading.art. */
var NIGHT_SVG = '<svg viewBox="0 0 320 96" role="img" aria-label="A rocket going up into the night sky · صاروخ ينطلق في سماء الليل" direction="ltr"><rect width="320" height="96" fill="#14233A"/>' +
  '<circle cx="62" cy="24" r="10" fill="#F2B857"/><circle cx="67" cy="20" r="9" fill="#14233A"/>' +
  '<circle cx="190" cy="16" r="1.3" fill="#F7F3EC"/><circle cx="292" cy="30" r="1.2" fill="#F7F3EC"/><circle cx="214" cy="52" r="1" fill="#F7F3EC"/><circle cx="302" cy="60" r="1.1" fill="#F7F3EC"/><circle cx="170" cy="42" r="1" fill="#F7F3EC"/>' +
  '<path d="M252 58 q6 -24 0 -40 q-6 16 0 40 Z" fill="#F7F3EC" transform="rotate(24 252 38)"/><path d="M0 96 V84 Q80 74 160 82 T320 78 V96 Z" fill="#0C1626"/>' +
  '<path d="M238 66 Q224 74 214 86" fill="none" stroke="#F2B857" stroke-width="3" stroke-linecap="round" opacity="0.8"/>' +
  '<text x="14" y="60" font-family="Quicksand, sans-serif" font-weight="700" font-size="11" fill="#F7F3EC">RIYADH · MAY 2023</text>' +
  '<text x="14" y="74" font-family="Quicksand, sans-serif" font-weight="700" font-size="8.5" letter-spacing="2" fill="#F2B857">A NIGHT TO REMEMBER</text></svg>';

/* فحوص الكتابة (writing.checks): صيغتان من الماضي المستمر، وكلمة زمن تحدد لحظة، وكلمتان من الدرس، بعد توحيد فاصلة الآيفون العليا ’.
   والكلمات المنتهية بـ ing بعد was / were وليست أفعالًا مستمرة (morning وbuilding وamazing وinteresting …) لا تُعد. */
var W_ING_NOT = /^(?:morning|evening|nothing|something|anything|everything|thing|building|wedding|meeting|king|ring|spring|wing|sing|bring|sting|swing|amazing|interesting|exciting|boring|tiring|relaxing|surprising|shocking|charming|during|outstanding|ceiling|feeling|painting)$/i;
var W_TIME = /\b(?:at\s+(?:that|this|the\s+same)\s+(?:moment|time)|(?:at\s+(?:about\s+|around\s+)?|around\s+|about\s+|(?:just\s+)?(?:before|after)\s+)(?:midnight|noon|sunset|sunrise|dawn|night)|at\s+(?:about\s+|around\s+)?(?:[0-9]{1,2}(?:[:.][0-9]{2})?(?:\s*[ap]\.?m)?|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)\b|this\s+time\s+(?:last|yesterday)|(?:that|last)\s+(?:night|evening|morning|afternoon|day)|yesterday)\b/i;
var W_VOCAB = [/\bspace\b/i, /\bexperiments?\b/i, /\bmoments?\b/i, /\bproud\b/i, /\bscreens?\b/i, /\b(?:make|makes|made|making)\s+history\b/i, /\binternational\s+law\b/i];
function wNorm(text){ return String(text || '').replace(/[’‘]/g, "'"); }
function wPastCont(text){
  var n = 0, m, re = /\b(?:was|were)\s+([a-z]+\s+)?([a-z]{2,}ing)\b/gi, s = wNorm(text);
  while ((m = re.exec(s))) { if (!W_ING_NOT.test(m[2]) || (!m[1] && /^(?:building|meeting|feeling|painting)$/i.test(m[2]))) n++; }
  return n;
}

LESSONS.u3l1 = {
  id: "u3l1",
  unit: 3,
  n: 1,
  mode: "reading",
  en: "A Night to Remember",
  ar: "ليلة الإطلاق إلى الفضاء: الماضي المستمر في الإثبات",
  subEn: "Past Continuous: was / were + -ing",
  canDoEn: "I can say what people were doing at an exact time in the past, and use was / were + -ing for the scene in a short story.",
  canDoAr: "أقدر أن أقول ما كان الناس يفعلونه في وقت محدد من الماضي، وأصف المشهد في قصة قصيرة بـ was / were مع ing.",
  descEn: "I can read an email about the night of a Saudi space flight, and use the Past Continuous for actions in progress at a past moment.",
  descAr: "أقدر أن أقرأ إيميلًا عن ليلة رحلة فضاء سعودية، وأستعمل الماضي المستمر لأحداث كانت جارية في لحظة من الماضي.",
  goals: [
    { en: "I can form the Past Continuous in the affirmative: was / were + verb-ing, with the right spelling (making, sitting, lying).", ar: "أقدر أن أكوّن الماضي المستمر في الإثبات: was / were مع الفعل وing، بالإملاء الصحيح (making وsitting وlying)." },
    { en: "I can use it for an action in progress at an exact past time and for the scene in a story, with time words (at midnight, at that moment, this time last year).", ar: "أقدر أن أستعمله لحدث جارٍ في وقت محدد من الماضي ولوصف المشهد في القصة، مع كلمات الزمن (at midnight وat that moment وthis time last year)." },
    { en: "I can choose between the Past Continuous and the Past Simple, use sat, stood, held, wore, drank and read, and keep state verbs without -ing (knew).", ar: "أقدر أن أختار بين الماضي المستمر والماضي البسيط، وأستعمل sat وstood وheld وwore وdrank وread، ولا أضيف ing إلى الأفعال التي لا تأخذها (knew)." },
    { en: "I can read an email for the main idea and details, use 6 words and the legal phrase 'international law', and write at least 4 separate sentences about a special moment.", ar: "أقدر أن أفهم الفكرة العامة والتفاصيل في إيميل، وأستعمل 6 كلمات والعبارة القانونية international law، وأكتب 4 جمل منفصلة على الأقل عن لحظة مميزة." }
  ],
  intro: {
    recall: {
      dEn: "Type four words and the legal phrase from Unit 2, Lesson 5 (A Weekend in AlUla) from memory before you see the answer.",
      d: "اكتب من ذاكرتك أربع كلمات والعبارة القانونية من الدرس الخامس في الوحدة 2 (A Weekend in AlUla) قبل أن ترى الإجابة.",
      items: [
        ["review", "5 active recall items from Unit 2, Lesson 5", "5 عناصر استرجاع نشط من الدرس الخامس في الوحدة 2"],
        ["pen", "Type each word from memory to fix its spelling", "اكتب كل كلمة من ذاكرتك لتثبيت إملائها"],
        ["spark", "Includes the legal phrase of Unit 2, Lesson 5", "تشمل العبارة القانونية من الدرس الخامس في الوحدة 2"]
      ]
    },
    vocab: {
      dEn: "6 words for a night to remember plus today's legal phrase ('international law'), with human audio from Wikimedia Commons and Oxford links.",
      d: "6 كلمات عن ليلة لا تُنسى مع العبارة القانونية اليومية (international law)، بنطق بشري من Wikimedia Commons وروابط Oxford.",
      items: [
        ["cards", "7 flashcards (6 words + 'international law') with human audio & Oxford link", "7 بطاقات (6 كلمات + international law) مع النطق البشري ورابط Oxford"],
        ["review", "2-round matching game", "لعبة توصيل من جولتين"],
        ["quiz", "8 context sentences: choose the right word", "8 جمل سياقية: اختر الكلمة المناسبة"]
      ]
    },
    grammar: {
      dEn: "From zero, in small steps: form the Past Continuous with was / were + -ing, use it for an action in progress at a past moment and for the scene in a story, and compare it with the Past Simple.",
      d: "من الصفر وبخطوات صغيرة: نكوّن الماضي المستمر بـ was / were مع ing، ونستعمله لحدث جارٍ في لحظة من الماضي ولوصف المشهد في القصة، ونقارنه بالماضي البسيط.",
      items: [
        ["book", "6 short grammar cards (English first, Arabic on tap)", "6 بطاقات شرح (الإنجليزي أولًا، والعربي عند الطلب)"],
        ["quiz", "16 guided exercises (4 of each type), one question per screen", "16 تمرينًا موجّهًا (4 من كل نمط)، سؤال في كل شاشة"]
      ]
    },
    reading: {
      dEn: "An email from Lama, a law student in Riyadh, to her British friend Sophie about a special night.",
      d: "إيميل من لمى، طالبة القانون في الرياض، إلى صديقتها البريطانية صوفي عن ليلة لا تُنسى.",
      items: [
        ["spark", "Predict before you read", "توقّع قبل القراءة"],
        ["clock", "First reading for the main idea with a comfortable timer (about 2 minutes, no word taps)", "قراءة أولى للفكرة العامة بمؤقت إرشادي مريح (نحو دقيقتين) ودون لمس الكلمات"],
        ["mail", "Second reading with word meanings and 8 evidence questions", "قراءة ثانية مع معاني الكلمات باللمس و8 أسئلة فهم بالدليل من النص"]
      ]
    },
    writing: {
      dEn: "Write at least 4 separate sentences about a special night or moment in your life, with the Past Continuous and a time phrase.",
      d: "اكتب 4 جمل منفصلة على الأقل عن ليلة أو لحظة مميزة في حياتك، بالماضي المستمر وعبارة زمن.",
      items: [
        ["pen", "At least 4 separate sentences (capital letter + period for each)", "4 جمل منفصلة على الأقل بحرف كبير ونقطة لكل جملة"],
        ["spark", "4 instant checks: sentences, 2 Past Continuous verbs, a time phrase, and 2 lesson words", "4 فحوص فورية: عدد الجمل، وفعلان في الماضي المستمر، وعبارة زمن، وكلمتان من الدرس"]
      ]
    },
    quiz: {
      dEn: "10 shuffled questions on today's grammar, words and legal phrase (80% to pass: 8 of 10), followed by a full Lesson Error Analysis.",
      d: "اختبار قصير من 10 أسئلة في قاعدة الدرس وكلماته وعبارته القانونية (النجاح من 80%: 8 من 10)، يليه تحليل شامل لأخطاء الدرس وأسبابها.",
      items: [
        ["quiz", "10 questions: 7 grammar, 2 vocabulary, 1 legal (80% passing score)", "10 أسئلة: 7 في القواعد و2 في المفردات وسؤال قانوني (النجاح من 80%)"],
        ["review", "Error Analysis grouped by error type and cause", "تحليل أخطاء الدرس وأسبابها مصنّفة حسب نوع الخطأ"]
      ]
    }
  },

  /* ---------- المرحلة 1: الاسترجاع النشط (من u2l5: tour guide وview وancient وsouvenir، والقانونية apply for a visa، بجمل جديدة) ---------- */
  recall: [
    {
      id: "rc-0",
      promptAr: "مرشد سياحي: يرافق الزوار ويشرح لهم المكان (عبارة من كلمتين من الدرس الخامس في الوحدة 2)",
      promptEn: "A person whose job is to show visitors a place and explain it (2 words)",
      sentPre: "In Diriyah, a friendly",
      sentPost: "showed us the old town and told us many stories.",
      ans: ["tour guide", "guide"],
      hint: "t _ _ _ _ _ _ _ e (9 letters, 2 words)",
      spellNoteEn: "Two words: tour + guide. tour sounds like 'toor', and the u in guide is silent: g-u-i-d-e.",
      spellNote: "كلمتان: tour ثم guide، وتُنطق tour «تُور»، وحرف u في guide لا يُنطق: g-u-i-d-e.",
      errCat: "spelling"
    },
    {
      id: "rc-1",
      promptAr: "منظر: ما تراه أمامك من مكان ما (اسم)",
      promptEn: "What you can see from a place (noun)",
      sentPre: "Our flat is nice, but it has no",
      sentPost: "because the window is in front of a wall.",
      ans: ["view"],
      hint: "v _ _ w (4 letters)",
      spellNoteEn: "Spelled v-i-e-w: 'iew' sounds like 'you' (vyoo). We say 'a view of the sea'.",
      spellNote: "تُكتب v-i-e-w، وتُنطق «فْيُو»، ونقول a view of the sea أي منظر البحر.",
      errCat: "spelling"
    },
    {
      id: "rc-2",
      promptAr: "قديم جدًّا: عمره مئات السنين أو آلافها (صفة)",
      promptEn: "Very, very old: hundreds or thousands of years old (adjective)",
      sentPre: "Last spring, we visited an",
      sentPost: "city with stone walls two thousand years old.",
      ans: ["ancient"],
      hint: "a _ _ _ _ _ t (7 letters)",
      spellNoteEn: "Spelled a-n-c-i-e-n-t: 'ci' sounds like 'sh' (AYN-shent).",
      spellNote: "تُكتب a-n-c-i-e-n-t، ويُنطق المقطع ci كصوت «ش»: «أَيْنْشَنْت».",
      errCat: "spelling"
    },
    {
      id: "rc-3",
      promptAr: "تذكار: شيء تشتريه ليذكّرك بمكان زرته (اسم)",
      promptEn: "A small thing that you buy to remember a place (noun)",
      sentPre: "I always buy a small",
      sentPost: "for my mother from every city that I visit.",
      ans: ["souvenir"],
      hint: "s _ _ _ _ _ _ r (8 letters)",
      spellNoteEn: "Spelled s-o-u-v-e-n-i-r: it comes from French, so it ends in -ir (soo-vuh-NEER).",
      spellNote: "تُكتب s-o-u-v-e-n-i-r، وأصلها فرنسي فتنتهي بـ ir، وتُنطق «سُوفِنِير».",
      errCat: "spelling"
    },
    {
      id: "rc-4",
      promptAr: "يتقدّم بطلب تأشيرة (العبارة القانونية من الدرس الخامس في الوحدة 2: ___ for a visa)",
      promptEn: "Legal phrase from Unit 2, Lesson 5: ___ for a visa (ask officially for it)",
      sentPre: "A university in Japan accepted my sister, so now she can",
      sentPost: "for a student visa.",
      ans: ["apply", "apply for a visa", "apply for a student visa"],
      isLegal: true,
      hint: "a _ _ _ y (5 letters)",
      spellNoteEn: "The phrase is 'apply for a visa'. Spelled a-p-p-l-y, with double p. Its past is applied (y → ied).",
      spellNote: "العبارة apply for a visa، وتُكتب a-p-p-l-y بحرفي p، وماضيها applied (تتحول y إلى ied).",
      errCat: "vocab"
    }
  ],

  /* ---------- العبارة القانونية اليومية (المسار القانوني A2) ---------- */
  legalPhrase: {
    en: "international law",
    headword: "international law",
    pos: "legal phrase",
    ar: "القانون الدولي",
    say: "إِنْتَرْنَاشْنَل لُو",
    ex: "Under international law, countries must keep their agreements.",
    exAr: "يوجب القانون الدولي على الدول أن تفي باتفاقاتها.",
    tipEn: "International law is the law between countries. Collocations: under international law (according to it), study international law. There is no 'the' before it, and the adjective comes first (not 'law international'). 'under' here means 'according to', and it has nothing to do with place.",
    tip: "international law هو القانون بين الدول. ومن تعابيره الثابتة under international law (بموجب القانون الدولي) وstudy international law (يدرس القانون الدولي). ولا نضع قبله the، وتأتي الصفة قبل الاسم فلا نقول law international. وunder هنا بمعنى «بموجب»، لا بمعنى «تحت» المكانية.",
    legal: true,
    oxfordSlug: "international_1",
    wikiFiles: ["En-us-international.ogg", "En-uk-law.ogg"],
    wikiCredit: "File:En-us-international.ogg & File:En-uk-law.ogg · Wikimedia Commons"
  },

  /* ---------- المفردات (6 كلمات + العبارة القانونية = 7 عبارات، والتعابير الثابتة في tipEn / tip) ---------- */
  vocab: [
    { en: "space", pos: "noun", ar: "الفضاء", say: "سْبَيْس",
      ex: "Not many people go into space, because the journey is very expensive.", exAr: "لا يذهب إلى الفضاء إلا قليل من الناس، لأن الرحلة غالية جدًّا.",
      tipEn: "Collocations: go into space, travel in space. With this meaning there is no 'the' before it: we say 'in space', not 'in the space'. space has another meaning too: an empty place, as in 'a parking space'.",
      tip: "تعابير ثابتة: go into space (يذهب إلى الفضاء) وtravel in space (يسافر في الفضاء). ولا نضع قبلها the بهذا المعنى، فنقول in space لا in the space. ولها معنى آخر هو المكان الفارغ، كما في a parking space (موقف سيارة).",
      oxfordSlug: "space_1",
      wikiFile: "En-us-space.ogg",
      wikiCredit: "File:En-us-space.ogg · Wikimedia Commons" },
    { en: "experiment", pos: "noun", ar: "تجربة علمية", say: "إِكْسْبِيرِمَنْت",
      ex: "Our chemistry teacher did an experiment in front of the whole class.", exAr: "أجرى معلم الكيمياء تجربة أمام الصف كله.",
      tipEn: "Collocation: do an experiment (not 'make an experiment'). Use it for a test in science. For your own life, say 'experience': a good experience. The two words look alike, but their meanings are different.",
      tip: "تعبير ثابت: do an experiment (يجري تجربة)، ولا نقول make an experiment. وتُستعمل للتجربة العلمية، أما تجربة الحياة فهي experience: a good experience. والكلمتان متشابهتان في الشكل مختلفتان في المعنى.",
      oxfordSlug: "experiment_1",
      wikiFile: "En-us-experiment.ogg",
      wikiCredit: "File:En-us-experiment.ogg · Wikimedia Commons" },
    { en: "moment", pos: "noun", ar: "لحظة", say: "مُومَنْت",
      ex: "At that moment, my friends were waiting for me at the gate.", exAr: "في تلك اللحظة كان أصدقائي ينتظرونني عند البوابة.",
      tipEn: "'at that moment' means just then, in a past story. Be careful: 'at the moment' means now. Also useful: Just a moment, please. The o sounds like the 'o' in 'go'.",
      tip: "at that moment تعني «في تلك اللحظة» من قصة ماضية. وانتبه: at the moment تعني «الآن». ومن العبارات النافعة Just a moment, please (لحظة من فضلك). وحرف o فيها يُنطق كصوته في go.",
      oxfordSlug: "moment",
      wikiFile: "En-us-moment.ogg",
      wikiCredit: "File:En-us-moment.ogg · Wikimedia Commons" },
    { en: "proud", pos: "adjective", ar: "فخور", say: "بْرَاوْد",
      ex: "My parents are very proud of my sister's grades.", exAr: "والداي فخوران جدًّا بدرجات أختي.",
      tipEn: "Collocation: proud of + a person or a thing (not 'proud from' or 'proud with'): proud of my country. The noun is pride. ou sounds like the 'ow' in 'now'.",
      tip: "تعبير ثابت: proud of + شخص أو شيء (لا proud from ولا proud with): proud of my country (فخور ببلدي). والاسم منها pride (فخر). ويُنطق ou فيها كصوت ow في now.",
      oxfordSlug: "proud",
      wikiFile: "En-us-proud.ogg",
      wikiCredit: "File:En-us-proud.ogg · Wikimedia Commons" },
    { en: "screen", pos: "noun", ar: "شاشة", say: "سْكْرِين",
      ex: "My brother spends hours in front of the screen every evening.", exAr: "يقضي أخي ساعات أمام الشاشة كل مساء.",
      tipEn: "Collocations: in front of the screen (where you sit), on the screen (what you see there), a phone screen, a big screen. Say 'in front of', not 'in the front of'.",
      tip: "تعابير ثابتة: in front of the screen (أمام الشاشة، حيث تجلس) وon the screen (على الشاشة، ما تراه فيها) وa phone screen (شاشة الهاتف) وa big screen (شاشة كبيرة). ونقول in front of لا in the front of.",
      oxfordSlug: "screen_1",
      wikiFile: "En-us-screen.ogg",
      wikiCredit: "File:En-us-screen.ogg · Wikimedia Commons" },
    { en: "make history", pos: "phrase", ar: "يصنع التاريخ / يفعل ما لم يُسبق إليه", say: "مَيْك هِسْتْرِي",
      ex: "My aunt made history in our village: she was its first woman doctor.", exAr: "صنعت عمتي التاريخ في قريتنا، فقد كانت أول طبيبة فيها.",
      tipEn: "To make history is to do something important that nobody did before. The past is made: She made history. There is no 'a' or 'the' before history, and we don't say 'do history'.",
      tip: "make history أن يفعل المرء أمرًا عظيمًا لم يسبقه إليه أحد. وماضيها made: She made history. ولا نضع قبل history أداة a ولا the، ولا نقول do history.",
      oxfordSlug: "history",
      wikiFiles: ["En-us-make.ogg", "En-uk-history.ogg"],
      wikiCredit: "File:En-us-make.ogg & File:En-uk-history.ogg · Wikimedia Commons" }
  ],

  vocabGaps: [
    { s: "One day, I want to travel into ___ and see the Earth from far away.", opts: ["space", "screen", "experiment"], a: 0,
      whyEn: "We see the Earth from far away only from space, and 'travel into space' has no 'the'. A 'screen' is part of a TV or a phone, and an 'experiment' is a test in science.",
      why: "لا تُرى الأرض من بعيد إلا من الفضاء، ونقول travel into space بلا the؛ أما screen فجزء من التلفاز أو الهاتف، وexperiment تجربة علمية.", errCat: "vocab" },
    { s: "My brother did a simple ___ with two plants: one in the sun and one in the dark.", opts: ["moment", "experiment", "history"], a: 1,
      whyEn: "We 'do an experiment' to test something, and here he tests two plants. 'a moment' is a short time, and 'history' is about the past.",
      why: "نقول do an experiment لاختبار شيء، وهو هنا يختبر نبتتين؛ أما moment فمدة قصيرة، وhistory عن الماضي.", errCat: "vocab" },
    { s: "It was nine o'clock, and at that ___ my family was having dinner.", opts: ["screen", "space", "moment"], a: 2,
      whyEn: "'at that moment' means just then, and it points to 'nine o'clock' in the story. We can't say 'at that screen' or 'at that space' for a time.",
      why: "at that moment تعني «في تلك اللحظة» بعينها، وتشير إلى الساعة التاسعة في الجملة، ولا تدل screen ولا space على زمن.", errCat: "vocab" },
    { s: "I got the highest mark in my class, and my mother was very ___ of me.", opts: ["international", "proud", "ancient"], a: 1,
      whyEn: "'proud of me' means happy because of what I did. 'international' means between countries, and 'ancient' means very old.",
      why: "proud of me تعني مسرورة بما فعلتُ؛ أما international فتعني ما بين الدول، وancient تعني قديمًا جدًّا.", errCat: "vocab" },
    { s: "Please don't stand in front of the TV ___: I can't see the match.", opts: ["screen", "moment", "experiment"], a: 0,
      whyEn: "A TV has a 'screen', and we look at it to see the match. A 'moment' is a short time, and an 'experiment' is a test in science.",
      why: "للتلفاز شاشة screen ننظر إليها لنشاهد المباراة؛ أما moment فمدة قصيرة، وexperiment تجربة علمية.", errCat: "vocab" },
    { s: "Nobody did this before her, and now her name is in every school book, so she really ___.", opts: ["did an experiment", "took photos", "made history"], a: 2,
      whyEn: "To do something important that nobody did before is to 'make history'. Nothing in the sentence is about science or photos.",
      why: "من يسبق غيره إلى أمر عظيم فقد صنع التاريخ made history، ولا شيء في الجملة عن العلوم أو الصور.", errCat: "vocab" },
    { s: "The scientists repeated the ___ three times and got the same result.", opts: ["experiment", "space", "screen"], a: 0,
      whyEn: "Scientists do an 'experiment', and they can repeat it to check the result. You can't repeat a 'space' or a 'screen'.",
      why: "يجري العلماء تجربة experiment ويعيدونها للتحقق من نتيجتها، ولا يُعاد space ولا screen.", errCat: "vocab" },
    { s: "Two countries can't agree about a small island, so their lawyers are reading about ___.", opts: ["law international", "international law", "the international law"], a: 1,
      whyEn: "The adjective comes before the noun, and there is no 'the': international law. It is the law between countries, so it fits a problem between two countries.",
      why: "تأتي الصفة قبل الاسم، ولا نضع the: international law، وهو القانون بين الدول فيناسب خلافًا بين دولتين.", errCat: "vocab" }
  ],

  /* ---------- المرحلة 3: بطاقات الشرح (6 بطاقات: 4 شرح + الأخطاء + الخلاصة) ---------- */
  gCards: [
    {
      tEn: "Step 1: In Progress in the Past",
      t: "الخطوة 1: حدث كان جاريًا في الماضي",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Step 1: In Progress in the Past</span><small>الماضي المستمر: حدث كان جاريًا</small></h2>' +
        '<p class="en-p" dir="ltr">You know the Present Continuous: <b>am / is / are + -ing</b> for an action in progress <b>now</b>. To talk about an action in progress at a time <b>in the past</b>, change one word: use <b>was / were</b>.</p>' +
        '<p class="formula"><b>was / were</b> + verb<b>-ing</b></p>' +
        '<div class="xbox"><span class="xtag s" dir="ltr">Now · Present Continuous · المضارع المستمر</span><p class="xen">Salem is cooking in the kitchen.</p></div>' +
        '<div class="xbox"><span class="xtag c" dir="ltr">Then · Past Continuous · الماضي المستمر</span><p class="xen">At eight last night, Salem was cooking in the kitchen.</p></div>' +
        TL_SVG +
        '<p class="en-p" dir="ltr">At eight, the action was <b>not finished</b>. It started before eight, and it continued after eight. The long bar is the action, and the point is the time.</p>',
      arHtml:
        '<p>تعرف المضارع المستمر: <bdi class="en">am / is / are</bdi> مع <bdi class="en">ing</bdi> لحدث جارٍ <b>الآن</b>. فإذا كان الحدث جاريًا في وقت من <b>الماضي</b> غيّرنا كلمة واحدة، فجعلنا مكانها <bdi class="en">was / were</bdi>.</p>' +
        '<p>فالصيغة <bdi class="en">was / were</bdi> ثم الفعل مع <bdi class="en">ing</bdi>، ويقابلها في العربية «كان يفعل»: <bdi class="en">Salem was cooking</bdi> أي كان سالم يطبخ.</p>' +
        '<p>وفي الساعة الثامنة لم يكن الحدث قد انتهى: بدأ قبلها واستمر بعدها. فالشريط الطويل في الرسم هو الحدث، والنقطة هي الوقت.</p>'
    },
    {
      tEn: "Step 2: was / were + -ing",
      t: "الخطوة 2: was / were مع ing",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Step 2: was / were + -ing</span><small>التركيب والإملاء</small></h2>' +
        '<p class="en-p" dir="ltr">You need <b>two parts</b>: was / were <b>and</b> the verb with -ing. One part alone is not enough.</p>' +
        '<div class="tbl"><table><thead><tr><th>Subject</th><th>be</th><th>verb + -ing</th></tr></thead><tbody>' +
        '<tr><td>I / he / she / it</td><td><span class="hs">was</span></td><td>working</td></tr>' +
        '<tr><td>you / we / they</td><td><span class="hc">were</span></td><td>working</td></tr></tbody></table></div>' +
        '<div class="sigs">' +
          '<div class="sig s"><h3 dir="ltr">was<small class="sig-ar">one person or thing</small></h3><ul><li>The baby was crying.</li><li>Our teacher was smiling.</li></ul></div>' +
          '<div class="sig c"><h3 dir="ltr">were<small class="sig-ar">you and plurals</small></h3><ul><li>You were laughing.</li><li>The shops were closing.</li></ul></div>' +
        '</div>' +
        '<h3 class="bi-h"><span class="en" dir="ltr">Review: spelling of -ing</span><small>مراجعة إملاء ing</small></h3>' +
        '<ul class="spell" dir="ltr">' +
          '<li>Most verbs: add <b>-ing</b><span class="s-en">read → reading · stand → standing · play → playing</span></li>' +
          '<li>The verb ends in <b>-e</b>: drop the e<span class="s-en">make → making · write → writing · come → coming</span></li>' +
          '<li>Short verb, one vowel + one consonant: double the last letter<span class="s-en">sit → sitting · run → running · swim → swimming</span></li>' +
          '<li>The verb ends in <b>-ie</b>: change ie to <b>y</b><span class="s-en">lie → lying · die → dying</span></li>' +
        '</ul>',
      arHtml:
        '<p>نحتاج إلى <b>جزأين معًا</b>: <bdi class="en">was / were</bdi> والفعل مع <bdi class="en">ing</bdi>، ولا يكفي أحدهما وحده.</p>' +
        '<p>نستعمل <b>was</b> مع <bdi class="en">I / he / she / it</bdi> والمفرد، و<b>were</b> مع <bdi class="en">you / we / they</bdi> والجمع.</p>' +
        '<p>والإملاء كما تعلمته: نضيف <bdi class="en">ing</bdi> إلى أكثر الأفعال (<bdi class="en">reading</bdi>)، ونحذف <bdi class="en">e</bdi> من آخر الفعل (<bdi class="en">making</bdi>)، ونضاعف الحرف الأخير في الفعل القصير إذا سبقه حرف علة واحد (<bdi class="en">sitting</bdi>)، وتصير <bdi class="en">ie</bdi> حرف <bdi class="en">y</bdi> (<bdi class="en">lying</bdi>).</p>'
    },
    {
      tEn: "Step 3: Two Uses",
      t: "الخطوة 3: استعمالان",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Step 3: Two Uses</span><small>متى نستعمل الماضي المستمر؟</small></h2>' +
        '<ol class="uses en-uses" dir="ltr">' +
          '<li><b>An action in progress at an exact time in the past.</b><span class="xen">At noon yesterday, I was walking to the bank.</span></li>' +
          '<li><b>The scene in a story:</b> what people were doing around you.<span class="xen">The sun was shining, and birds were singing in the trees.</span></li>' +
        '</ol>' +
        '<h3 class="bi-h"><span class="en" dir="ltr">Time words</span><small>كلمات الزمن</small></h3>' +
        '<ul class="vlist"><li>at midnight <small>عند منتصف الليل</small></li><li>at ten o\'clock <small>في الساعة العاشرة</small></li><li>at that moment <small>في تلك اللحظة</small></li><li>this time last year <small>في مثل هذا الوقت من السنة الماضية</small></li></ul>' +
        '<div class="tip" dir="ltr"><p>A time word alone is not always enough. These words go with the Past Continuous only when the action is in progress: a finished action takes the Past Simple (The train left at ten o\'clock). And <b>all night</b> goes with both tenses, so read the whole sentence:</p><div class="pairs"><span class="yes">We drove all night and reached Taif at dawn.</span><span class="yes">The rain was falling all night, so the road was wet.</span></div></div>',
      arHtml:
        '<p>نستعمل الماضي المستمر في أمرين:</p>' +
        '<p>١) حدث كان <b>جاريًا في وقت محدد</b> من الماضي: <bdi class="en">At noon yesterday, I was walking to the bank</bdi>، أي كنت أمشي في ذلك الوقت.</p>' +
        '<p>٢) <b>وصف المشهد</b> في القصة، أي ما كان يجري حولك: <bdi class="en">The sun was shining</bdi>، أي كانت الشمس مشرقة.</p>' +
        '<p>ومن كلمات الزمن معه <bdi class="en">at midnight</bdi> و<bdi class="en">at that moment</bdi> و<bdi class="en">this time last year</bdi> إذا كان في السياق حدث جارٍ، أما الحدث المكتمل فبالماضي البسيط (<bdi class="en">The train left at ten o\'clock</bdi>). و<bdi class="en">all night</bdi> تصلح للزمنين، فلا تكفي وحدها دليلًا، واقرأ الجملة كلها.</p>'
    },
    {
      tEn: "Step 4: Continuous or Simple?",
      t: "الخطوة 4: المستمر أم البسيط؟",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Step 4: Continuous or Simple?</span><small>الماضي المستمر والماضي البسيط</small></h2>' +
        '<div class="xbox"><span class="xtag s" dir="ltr">Finished · Past Simple · حدث مكتمل</span><p class="xen">I watched the match.</p></div>' +
        '<div class="xbox"><span class="xtag c" dir="ltr">In progress · Past Continuous · حدث جارٍ</span><p class="xen">I was watching the match at seven.</p></div>' +
        '<p class="en-p" dir="ltr">The first sentence tells the <b>whole action</b>, from start to end. The second puts you <b>in the middle</b> of it.</p>' +
        '<h3 class="bi-h"><span class="en" dir="ltr">Six new irregular verbs</span><small>ستة أفعال شاذة جديدة</small></h3>' +
        '<div class="tbl"><table><thead><tr><th>Verb</th><th>Past Simple</th><th>Past Continuous</th></tr></thead><tbody>' +
        '<tr><td>sit</td><td><span class="hs">sat</span></td><td>was sitting</td></tr>' +
        '<tr><td>stand</td><td><span class="hs">stood</span></td><td>was standing</td></tr>' +
        '<tr><td>hold</td><td><span class="hs">held</span></td><td>was holding</td></tr>' +
        '<tr><td>wear</td><td><span class="hs">wore</span></td><td>was wearing</td></tr>' +
        '<tr><td>drink</td><td><span class="hs">drank</span></td><td>was drinking</td></tr>' +
        '<tr><td>read</td><td><span class="hs">read</span> (say: red)</td><td>was reading</td></tr></tbody></table></div>' +
        '<div class="tip" dir="ltr"><p><b>State verbs don\'t take -ing:</b> know, want, like, need. It is the same in the past as in the present.</p><div class="pairs"><span class="yes">She knew my name.</span><span class="no">She was knowing my name.</span></div></div>',
      arHtml:
        '<p>نقول <bdi class="en">I watched the match</bdi> إذا أخبرنا عن <b>الحدث كله</b> من أوله إلى آخره، ونقول <bdi class="en">I was watching the match at seven</bdi> إذا وضعنا السامع <b>في وسط الحدث</b> وهو جارٍ.</p>' +
        '<p>ولهذه الأفعال الستة صيغة ماضٍ شاذة: <bdi class="en">sat</bdi> و<bdi class="en">stood</bdi> و<bdi class="en">held</bdi> و<bdi class="en">wore</bdi> و<bdi class="en">drank</bdi> و<bdi class="en">read</bdi>، وتُكتب الأخيرة كمضارعها وتُنطق «رِد». أما في الماضي المستمر فلا شذوذ: <bdi class="en">was / were</bdi> مع <bdi class="en">ing</bdi>.</p>' +
        '<p>والأفعال التي لا تأخذ ing مثل <bdi class="en">know</bdi> و<bdi class="en">want</bdi> و<bdi class="en">like</bdi> و<bdi class="en">need</bdi> لا تأخذ <bdi class="en">ing</bdi> في الماضي، كما لا تأخذها في المضارع: نقول <bdi class="en">She knew my name</bdi> ولا نقول <bdi class="en">She was knowing my name</bdi>.</p>'
    },
    {
      tEn: "Common Arab Mistakes",
      t: "أخطاء العرب الشائعة",
      bilingual: true,
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Common Arab Mistakes</span><small>أخطاء يقع فيها كثير من العرب في الماضي المستمر</small></h2>' +
        '<ul class="mist">' +
          '<li><span class="no">At four o\'clock, Huda was study in the library.</span><span class="yes">At four o\'clock, Huda was studying in the library.</span><p class="en-m" dir="ltr">After <b>was / were</b>, the verb needs <b>-ing</b>.</p><p>بعد <bdi class="en">was / were</bdi> يجب أن يأخذ الفعل <bdi class="en">ing</bdi>.</p></li>' +
          '<li><span class="no">At sunset, we sitting on the beach.</span><span class="yes">At sunset, we were sitting on the beach.</span><p class="en-m" dir="ltr">An <b>-ing</b> verb can\'t stand alone. Don\'t forget <b>was / were</b>.</p><p>الفعل مع <bdi class="en">ing</bdi> لا يقوم وحده، فلا تنسَ <bdi class="en">was / were</bdi>.</p></li>' +
          '<li><span class="no">My friends was makeing tea.</span><span class="yes">My friends were making tea.</span><p class="en-m" dir="ltr"><b>My friends</b> is plural, so use <b>were</b>. <b>make</b> ends in -e, so drop the e: <b>making</b>.</p><p><bdi class="en">My friends</bdi> جمع فنستعمل <bdi class="en">were</bdi>، وتنتهي <bdi class="en">make</bdi> بحرف <bdi class="en">e</bdi> فنحذفه: <bdi class="en">making</bdi>.</p></li>' +
          '<li><span class="no">When I was a child, I was walking to school every day.</span><span class="yes">When I was a child, I walked to school every day.</span><p class="en-m" dir="ltr">«كنتُ أمشي» can be a habit over many years. For a long-time habit like this, use the <b>Past Simple</b>, not the Past Continuous.</p><p>قد تدل «كنتُ أمشي» على عادة سنوات طويلة، والعادة في زمن طويل كهذا تأتي بالماضي البسيط لا بالمستمر.</p></li>' +
        '</ul>'
    },
    {
      tEn: "Summary",
      t: "الخلاصة",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Quick Summary</span><small>الخلاصة</small></h2>' +
        '<div class="sumc" dir="ltr"><h3>In Four Lines · في أربعة أسطر</h3>' +
          '<p><b>Form · التركيب</b><span>I / he / she / it was + -ing · you / we / they were + -ing</span></p>' +
          '<p><b>Use · الاستعمال</b><span>An action in progress at an exact past time, and the scene in a story</span></p>' +
          '<p><b>Time words · الزمن</b><span>at midnight · at ten o\'clock · at that moment · this time last year</span></p>' +
          '<p><b>Not with · لا يأتي مع</b><span>finished actions (I watched), long-time habits (I walked every day), state verbs (I knew)</span></p>' +
        '</div>' +
        '<p class="en-p" dir="ltr">Now let\'s practise: 16 guided exercises (4 of each type), one question per screen.</p>',
      arHtml:
        '<p><b>التركيب:</b> <bdi class="en">was</bdi> مع المفرد و<bdi class="en">were</bdi> مع <bdi class="en">you</bdi> والجمع، ثم الفعل مع <bdi class="en">ing</bdi>.</p>' +
        '<p><b>الاستعمال:</b> لحدث جارٍ في وقت محدد من الماضي، ولوصف المشهد في القصة.</p>' +
        '<p><b>ولا يأتي</b> للحدث المكتمل، ولا لعادة زمن طويل، ولا مع الأفعال التي لا تأخذ ing، فهذه كلها بالماضي البسيط.</p>' +
        '<p>والآن نتدرّب: 16 تمرينًا موجّهًا (4 من كل نمط)، سؤال في كل شاشة.</p>'
    }
  ],

  /* ---------- المرحلة 3: التمارين (16 تمرينًا، 4 من كل نمط، بجمل جديدة لم ترد في الشرح؛ النفي والسؤال لـ u3l3، وwhen + حدث قصير لـ u3l2) ---------- */
  gA: [
    { s: "At seven this morning, my sister ___ breakfast for the whole family.", opts: ["were making", "was making"], a: 1,
      whyEn: "'my sister' is one person (she), so we use 'was'. 'were' goes with you, we, they and plurals.",
      why: "my sister شخص واحد (she) فنستعمل was، أما were فمع you وwe وthey والجمع.", errCat: "agreement" },
    { s: "At that moment, the children ___ in the street outside our house.", opts: ["were playing", "were play"], a: 0,
      whyEn: "After 'were', the verb needs -ing: were playing. 'were play' has only one of the two parts right.",
      why: "بعد were يأخذ الفعل ing: were playing، أما were play فنقص منها أحد جزأي التركيب.", errCat: "be_verb" },
    { s: "My father ___ the whole novel in one day, and then he gave it to me.", opts: ["read", "was reading"], a: 0,
      whyEn: "'the whole novel' and 'gave it to me' show a finished action, so we use the Past Simple: read (say 'red'). The Past Continuous is for an action still in progress at that time.",
      why: "the whole novel وgave it to me تدلان على حدث اكتمل، فنستعمل الماضي البسيط read وتُنطق «رِد»؛ أما الماضي المستمر فلحدث كان ما يزال جاريًا.", errCat: "tense" },
    { s: "I ___ all the answers in yesterday's test.", opts: ["was knowing", "knew"], a: 1,
      whyEn: "know is a state verb, so it doesn't take -ing in the past: knew. It is the same rule as in the present.",
      why: "know فعل لا يأخذ ing في الماضي: knew، وهي القاعدة نفسها في المضارع.", errCat: "stative" }
  ],

  gB: [
    { s: "At ten last night, I was call my brother in Jeddah.", ok: false, fix: "At ten last night, I was calling my brother in Jeddah.",
      whyEn: "After 'was', the verb needs -ing: was calling. 'was call' is the same mistake as 'I am work'.",
      why: "بعد was يأخذ الفعل ing: was calling، وwas call من جنس الخطأ I am work.", errCat: "be_verb" },
    { s: "At that moment, the nurses was helping an old man at the door.", ok: false, fix: "At that moment, the nurses were helping an old man at the door.",
      whyEn: "'the nurses' is plural, so we use 'were', not 'was'.",
      why: "the nurses جمع، فنستعمل were لا was.", errCat: "agreement" },
    { s: "At sunset, two old men were standing outside the mosque.", ok: true,
      whyEn: "Correct: 'two old men' is plural, so 'were' is right, and 'standing' is the -ing form of stand.",
      why: "صحيحة: two old men جمع فتناسبها were، وstanding صيغة ing من stand.", errCat: "be_verb" },
    { s: "When my grandfather was a child, he was helping his father in the shop every day.", ok: false, fix: "When my grandfather was a child, he helped his father in the shop every day.",
      whyEn: "'When … was a child' and 'every day' show a habit over many years, so we use the Past Simple: helped. The Arabic «كان يساعد» can trick us here.",
      why: "When … was a child وevery day تدلان على عادة سنوات طويلة، فنستعمل الماضي البسيط helped، وقد توقعنا في الخطأ العبارة العربية «كان يساعد».", errCat: "tense" }
  ],

  gC: [
    { pre: "At six this morning, my uncle", verb: "drive · Past Continuous", post: "through the quiet streets to the airport.", ans: ["was driving"],
      whyEn: "'my uncle' is one person, so we use 'was'. drive ends in -e, so we drop the e before -ing: driving.",
      why: "my uncle شخص واحد فنستعمل was، وتنتهي drive بحرف e فنحذفه قبل ing: driving.", errCat: "spelling" },
    { pre: "This time last week, we", verb: "sit · Past Continuous", post: "in a waiting room at the hospital.", ans: ["were sitting"],
      whyEn: "'we' takes 'were'. sit is a short verb with one vowel + one consonant, so we double the t: sitting.",
      why: "نستعمل were مع we، وsit فعل قصير فيه حرف علة واحد ثم حرف ساكن، فنضاعف t: sitting.", errCat: "spelling" },
    { pre: "At that moment, the old cat", verb: "lie · Past Continuous", post: "on my new coat.", ans: ["was lying"],
      whyEn: "'the old cat' is one animal (it), so we use 'was'. lie ends in -ie, so ie changes to y: lying.",
      why: "the old cat مفرد (it) فنستعمل was، وتنتهي lie بـ ie فتتحول إلى y: lying.", errCat: "spelling" },
    { pre: "Last Thursday, my brother", verb: "wear · Past Simple", post: "his new thobe to our cousin's wedding.", ans: ["wore"],
      whyEn: "wear is irregular: wear → wore. The Past Simple has one form for every subject, and there is no 'was' before it.",
      why: "wear فعل شاذ ماضيه wore، وللماضي البسيط صيغة واحدة مع كل الضمائر، ولا نضع قبله was.", errCat: "tense" }
  ],

  gD: [
    { chips: ["were sleeping", "at that moment.", "The passengers", "on the plane"], ans: "The passengers were sleeping on the plane at that moment.",
      whyEn: "Subject (The passengers) + were + verb-ing + place (on the plane) + time (at that moment) at the end.",
      why: "الفاعل The passengers ثم were مع الفعل وing ثم المكان on the plane ثم الزمن at that moment في الآخر.", errCat: "word_order" },
    { chips: ["was reading", "at ten o'clock.", "My grandmother", "the Quran"], ans: "My grandmother was reading the Quran at ten o'clock.",
      whyEn: "Subject (My grandmother) + was reading + object (the Quran) + time at the end. The object comes straight after the verb.",
      why: "الفاعل My grandmother ثم was reading ثم المفعول the Quran ثم الزمن في الآخر، ويلي المفعول الفعل مباشرة.", errCat: "word_order" },
    { chips: ["we", "This time last year,", "were travelling", "around Turkey."], ans: "This time last year, we were travelling around Turkey.",
      whyEn: "The time phrase with a comma comes first, then the subject (we) + were travelling + place. British English doubles the l: travelling.",
      why: "تأتي عبارة الزمن مع الفاصلة أولًا، ثم الفاعل we ثم were travelling ثم المكان، وتضاعف الإنجليزية البريطانية حرف l.", errCat: "word_order" },
    { chips: ["held", "The little girl", "on the way to school.", "her mother's hand"], ans: "The little girl held her mother's hand on the way to school.",
      whyEn: "Subject + past verb (held, the Past Simple of hold) + object (her mother's hand) + place phrase at the end.",
      why: "الفاعل ثم الفعل held، وهو الماضي البسيط من hold، ثم المفعول her mother's hand ثم عبارة المكان في الآخر.", errCat: "word_order" }
  ],
  /* ---------- المرحلة 4: القراءة (إيميل لمى إلى صوفي عن ليلة إطلاق Axiom Mission 2: الماضي المستمر للمشهد، والماضي البسيط للأحداث المكتملة، وwhen مرة واحدة للعرض) ---------- */
  reading: {
    title: "A Night to Remember",
    from: "Lama", to: "Sophie",
    fromMeta: "Lama · Law student, Riyadh",
    art: NIGHT_SVG,
    targetSeconds: 135,
    // أسماء ألوان التظليل في القراءة الثانية
    lg1: "Past Simple: finished actions · الماضي البسيط",
    lg2: "Past Continuous: was / were + -ing · الماضي المستمر",
    lg3: "Time words · كلمات الزمن",
    hlLabel: "Highlight the past · إظهار الماضي",
    insight: {
      titleEn: "Two Pasts in Lama's Email",
      titleAr: "زمنان ماضيان في إيميل لمى",
      l1En: "To paint the scene, Lama uses was / were + -ing for actions in progress at that moment:",
      ex1: "we were sitting · my father was standing · My mother was pouring coffee · I was reading the news",
      l2En: "For finished actions in her story, she uses the Past Simple:",
      ex2: "my mother held my hand · we all stood up · They stayed · I read the news again",
      arHtml: '<p>لاحظ أن لمى رسمت المشهد بالماضي المستمر <b style="color:var(--accent-ink)">was / were + ing</b>، فذكرت ما كان كل فرد من أسرتها يفعله في تلك اللحظة (<bdi class="en">were sitting, was standing, was pouring, was reading</bdi>)، ثم انتقلت إلى الماضي البسيط <b style="color:var(--dark)">للأحداث المكتملة</b> (<bdi class="en">held, stood, stayed</bdi>). وقارن بين <bdi class="en">I was reading the news</bdi> و<bdi class="en">I read the news again</bdi>: الأولى حدث جارٍ في تلك اللحظة، والثانية حدث مكتمل.</p>'
    },
    introEn: "Lama is a law student in Riyadh. She is writing to her British friend Sophie about a special night.",
    intro: "لمى طالبة قانون في الرياض، وتكتب إلى صديقتها البريطانية صوفي عن ليلة لا تُنسى.",
    // <<c:..>> الماضي المستمر · <<s:..>> الماضي البسيط · <<t:..>> كلمة زمن
    // {word|key} كلمة من مفردات الدرس السبع وحدها · [[text|معنى]] كلمة مساعدة
    paras: [
      "Hi Sophie,",
      "You <<s:asked>> me about the best night of my life. It was a night <<t:in May 2023>>.",
      "The [[flight|رحلة]] of Axiom Mission 2 <<s:started>> in Florida, and in Riyadh it was after midnight. <<t:Just after midnight>>, we <<c:were sitting>> in front of the big {screen} in our living room. <<t:At that {moment}>>, my father <<c:was standing>> near the door and <<c:holding>> his phone. My mother <<c:was [[pouring|تصبّ]]>> coffee, and my grandmother <<c:was drinking>> tea. My little brother <<c:was wearing>> his best [[thobe|ثوب]], my sister <<c:was taking>> photos of the screen, and I <<c:was reading>> the news.",
      "When the [[rocket|الصاروخ]] <<s:[[went up|انطلق صاعدًا]]>>, my mother <<s:held>> my hand, and we all <<s:stood up>>. Rayyanah Barnawi was on it. She is a scientist, and she does research on [[cancer stem cells|الخلايا الجذعية للسرطان]]. She <<s:became>> the first Saudi woman in {space}, and Ali AlQarni was with her. They <<s:stayed>> on the [[International Space Station|محطة الفضاء الدولية]] <<t:for about eight days>>, <<s:did>> science {experiments|experiment} and then <<s:returned>> to Earth.",
      "<<t:In 1985>>, Prince Sultan bin Salman was the first Arab to go into space, and <<t:that night>> Rayyanah <<s:{made history|make history}>> too. <<t:The next morning>>, I <<s:read>> the news again. It was an amazing journey, and I <<s:felt>> very {proud} of my country.",
      "<<t:Later>>, at law college, I <<s:learned>> something interesting: under {international law}, no country can [[own|يملك]] the moon!",
      "Now tell me about yours.",
      "Best wishes,<br>Lama"
    ],
    predict: {
      qEn: "Before you read: What is Lama's email about?",
      q: "توقّع قبل القراءة: عمَّ يتحدث إيميل لمى؟",
      optsEn: ["Her first week at college", "A holiday in Florida", "A special night in her life"],
      opts: ["أسبوعها الأول في الكلية", "إجازة في فلوريدا", "ليلة مميزة في حياتها"], a: 2,
      revealEn: "Lama writes about one special night in her life. Read to find out what her family was doing at that moment.",
      reveal: "تكتب لمى عن ليلة مميزة في حياتها، فاقرأ لتعرف ما كانت أسرتها تفعله في تلك اللحظة."
    },
    questions: [
      { q: "Just after midnight, where were Lama and her family?", opts: ["At the airport", "In their living room", "At her law college"], a: 1,
        ev: "Just after midnight, we were sitting in front of the big screen in our living room.",
        whyEn: "Lama writes 'we were sitting … in our living room'. The email doesn't say that they went to an airport, and the law college comes later in her story.",
        why: "تكتب لمى we were sitting … in our living room، ولا يذكر الإيميل أنهم ذهبوا إلى مطار، أما كلية القانون فتأتي بعد ذلك في قصتها.", errCat: "reading" },
      { q: "Who was holding a phone at that moment?", opts: ["Lama's mother", "Lama's grandmother", "Lama's father"], a: 2,
        ev: "At that moment, my father was standing near the door and holding his phone.",
        whyEn: "Lama writes 'my father was standing near the door and holding his phone'. 'holding' goes with 'was', like 'standing'. Her mother and grandmother were doing other things.",
        why: "تكتب لمى my father was standing near the door and holding his phone، وholding معطوفة على standing فكلتاهما مع was، أما الأم والجدة فكانتا تفعلان شيئًا آخر.", errCat: "reading" },
      { tf: true, q: "Lama's brother was taking photos of the screen.", a: false,
        ev: "My little brother was wearing his best thobe, my sister was taking photos of the screen, and I was reading the news.",
        whyEn: "False: her sister was taking the photos. Her little brother was wearing his best thobe.",
        why: "خطأ؛ فأختها هي التي كانت تلتقط الصور، أما أخوها الصغير فكان يلبس أحسن ثوب عنده.", errCat: "reading" },
      { q: "What is Rayyanah Barnawi's research about?", opts: ["Cancer stem cells", "International law", "The moon"], a: 0,
        ev: "She is a scientist, and she does research on cancer stem cells.",
        whyEn: "Lama writes that she 'does research on cancer stem cells'. International law and the moon are in the part about Lama's college.",
        why: "تكتب لمى أنها does research on cancer stem cells، أما القانون الدولي والقمر فجاءا فيما تعلمته لمى في كليتها.", errCat: "reading" },
      { q: "Rayyanah Barnawi was the first …", opts: ["Saudi pilot in space", "Saudi woman in space", "Arab doctor in space"], a: 1,
        ev: "She became the first Saudi woman in space, and Ali AlQarni was with her.",
        whyEn: "Lama writes 'the first Saudi woman in space', so the word 'woman' is important. She doesn't write about a pilot or a doctor.",
        why: "تكتب لمى the first Saudi woman in space، فكلمة woman هنا مهمة، ولم تذكر طيّارًا ولا طبيبًا.", errCat: "reading" },
      { q: "How long did Rayyanah and Ali stay on the space station?", opts: ["About eight days", "About eight weeks", "About eight months"], a: 0,
        ev: "They stayed on the International Space Station for about eight days, did science experiments and then returned to Earth.",
        whyEn: "Lama writes 'for about eight days'. 'for' tells us how long, and the word is 'days', not weeks or months.",
        why: "تكتب لمى for about eight days، وكلمة for تبيّن المدة، والمذكور أيام لا أسابيع ولا شهور.", errCat: "reading" },
      { tf: true, q: "Prince Sultan bin Salman went into space before Rayyanah.", a: true,
        ev: "In 1985, Prince Sultan bin Salman was the first Arab to go into space, and that night Rayyanah made history too.",
        whyEn: "True: he went into space in 1985, and Rayyanah's flight was in 2023.",
        why: "صحيح؛ فقد ذهب إلى الفضاء سنة 1985، وكانت رحلة ريانة سنة 2023.", errCat: "reading" },
      { q: "What did Lama learn at law college?", opts: ["Only rich countries can own the moon.", "No country can own the moon.", "Every country can own a part of the moon."], a: 1,
        ev: "Later, at law college, I learned something interesting: under international law, no country can own the moon!",
        whyEn: "Lama writes 'no country can own the moon'. 'no country' means not one country, so rich countries can't own it, and no country can own a part of it.",
        why: "تكتب لمى no country can own the moon، وno country تعني ولا دولة واحدة، فلا تملكه الدول الغنية ولا يملك جزءًا منه أي بلد.", errCat: "reading" }
    ]
  },

  /* ---------- المرحلة 5: الكتابة (4 جمل منفصلة على الأقل عن ليلة أو لحظة مميزة: الماضي المستمر للمشهد وكلمة زمن وكلمتان من الدرس) ---------- */
  writing: {
    taskEn: "Write at least 4 separate sentences about a special night or moment in your life. Say what you and the people around you were doing at that time. Use at least 2 Past Continuous verbs (was sitting, were watching …), a time phrase for the exact moment (at nine o'clock, at that moment, this time last year), and at least 2 words from today's lesson. You can also use the Past Simple for finished actions.",
    task: "اكتب 4 جمل منفصلة على الأقل عن ليلة أو لحظة مميزة في حياتك، واذكر ما كنت تفعله أنت ومن حولك في ذلك الوقت. استعمل فعلين على الأقل في الماضي المستمر (was sitting وwere watching …)، وعبارة زمن تحدد اللحظة (at nine o'clock أو at that moment أو this time last year)، وكلمتين على الأقل من كلمات الدرس، ولك أن تستعمل الماضي البسيط للأحداث المكتملة.",
    placeholder: "At nine o'clock, I was …\nMy parents were …",
    checks: [
      { k: "sentences", tEn: "At least 4 separate sentences (capital letter + period . for each)", t: "4 جمل منفصلة على الأقل (بحرف كبير ونقطة لكل جملة)",
        ok: function(a){ return a.sentences >= 4; } },
      { k: "pastcont", tEn: "At least 2 Past Continuous verbs: was / were + -ing", t: "فعلان على الأقل في الماضي المستمر: was / were مع ing", ex: "I was sitting … · We were watching …",
        ok: function(a, text){ return wPastCont(text) >= 2; } },
      { k: "time", tEn: "At least 1 time phrase for the exact moment (at nine o'clock, at that moment, this time last year, last night)", t: "عبارة زمن واحدة على الأقل تحدد اللحظة (at nine o'clock أو at that moment أو this time last year أو last night)", ex: "At midnight, … · At that moment, … · This time last year, …",
        ok: function(a, text){ return W_TIME.test(wNorm(text)); } },
      { k: "vocab", tEn: "At least 2 words/phrases from today's lesson", t: "كلمتان أو عبارتان على الأقل من درس اليوم", ex: "space · experiment · moment · proud · screen · make history · international law",
        ok: function(a, text){ var s = wNorm(text); return W_VOCAB.filter(function(re){ return re.test(s); }).length >= 2; } }
    ],
    modelMarked: "My favourite {moment} last year was the night before Eid. <<t:At nine o'clock>>, my whole family <<c:was sitting>> in my grandmother's house. My aunts <<c:were making>> sweets in the kitchen, and my cousins <<c:were playing>> in the garden. My uncle <<c:was holding>> his phone and <<c:showing>> us family photos on the {screen}. My grandfather <<c:was drinking>> coffee and <<c:telling>> old stories. I <<s:felt>> very {proud} of my family that night. In the morning, we <<s:wore>> our new clothes and <<s:went>> to the Eid prayer.",
    model: "My favourite moment last year was the night before Eid. At nine o'clock, my whole family was sitting in my grandmother's house. My aunts were making sweets in the kitchen, and my cousins were playing in the garden. My uncle was holding his phone and showing us family photos on the screen. My grandfather was drinking coffee and telling old stories. I felt very proud of my family that night. In the morning, we wore our new clothes and went to the Eid prayer.",
    legendEn: "Light blue = Past Simple · Terracotta = Past Continuous · Dashed = time phrases",
    legendAr: "الأزرق الفاتح للماضي البسيط، والطوبي للماضي المستمر، والإطار المنقّط لعبارات الزمن.",
    acceptExamples: [
      "Last Ramadan, my family had a special night. Just after midnight, we were eating at my uncle's house. My cousins were watching a match on the big screen. I was very proud of my team.",
      "I remember a special moment from last year. At that moment, I was standing in front of the class. My friends were sitting behind me. I felt proud because I didn’t make a mistake.",
      "This time last year, I was traveling in Turkey with my brother. We were taking photos of the sea at sunset. It’s my favorite moment from that trip. I felt proud of my brother.",
      "It was a cold night in January. At 9pm, my brothers and I were all sitting in front of the screen. We were feeling very proud of our team. That was a great moment for us."
    ]
  },

  /* ---------- «اسأل المعلم»: أسئلة مقترحة عن قاعدة الدرس ---------- */
  askChips: [
    "ما الفرق بين I watched وI was watching؟",
    "متى نستعمل was ومتى نستعمل were؟",
    "لماذا لا نقول I was knowing؟",
    "هل «كنت أفعل» بالعربية هي الماضي المستمر دائمًا؟"
  ],

  /* ---------- المرحلة 6: الاختبار القصير (10 أسئلة: 7 قواعد و2 مفردات وسؤال قانوني · النجاح 8 من 10) ---------- */
  quiz: [
    { s: "At midnight, my brothers ___ a football match on TV.", opts: ["was watching", "were watching", "watching"], a: 1, tag: "Grammar · قواعد",
      whyEn: "'my brothers' is plural, so we use 'were'. 'was' is for one person, and 'watching' alone has no was / were.",
      why: "my brothers جمع فنستعمل were؛ أما was فللمفرد، وwatching وحدها بلا was / were.", errCat: "agreement" },
    { s: "Which sentence is correct?", opts: ["At noon, the workers were carrying heavy boxes.", "At noon, the workers were carry heavy boxes.", "At noon, the workers carrying heavy boxes."], a: 0, tag: "Grammar · قواعد",
      whyEn: "The Past Continuous needs two parts: were + verb-ing. 'were carry' has no -ing, and 'carrying' alone has no 'were'.",
      why: "يحتاج الماضي المستمر إلى جزأين: were مع الفعل وing؛ فليس في were carry حرف ing، وليس مع carrying وحدها were.", errCat: "be_verb" },
    { s: "Which sentence has the correct spelling?", opts: ["The boys were swimming and making noise.", "The boys were swiming and making noise.", "The boys were swimming and makeing noise."], a: 0, tag: "Grammar · قواعد",
      whyEn: "swim is short, with one vowel + one consonant, so we double the m: swimming. make ends in -e, so we drop the e: making.",
      why: "swim فعل قصير فيه حرف علة واحد ثم حرف ساكن فنضاعف m: swimming، وتنتهي make بحرف e فنحذفه: making.", errCat: "spelling" },
    { s: "When my grandmother was young, she ___ tea with her sisters every afternoon.", opts: ["drinks", "was drinking", "drank"], a: 2, tag: "Grammar · قواعد",
      whyEn: "'When … was young' and 'every afternoon' show a habit over many years, so we use the Past Simple: drank (drink → drank). 'drinks' is the present.",
      why: "When … was young وevery afternoon تدلان على عادة سنوات طويلة، فنستعمل الماضي البسيط drank (ماضي drink)، أما drinks فللمضارع.", errCat: "tense" },
    { s: "Ali ___ the way to the court, so we followed him.", opts: ["was knowing", "knew", "knowing"], a: 1, tag: "Grammar · قواعد",
      whyEn: "know is a state verb, so it doesn't take -ing: knew. We don't say 'was knowing'.",
      why: "know فعل لا يأخذ ing: knew، ولا نقول was knowing.", errCat: "stative" },
    { s: "Which sentence tells us that the action was in progress at 9 p.m.?", opts: ["I study in my room at 9 p.m.", "I studied in my room at 9 p.m.", "I was studying there at 9 p.m."], a: 2, tag: "Grammar · قواعد",
      whyEn: "was + -ing shows an action in progress at an exact past time. 'I study' is a present habit, and 'I studied' is a finished action.",
      why: "تدل was مع ing على حدث جارٍ في وقت محدد من الماضي؛ أما I study فعادة في الحاضر، وI studied حدث مكتمل.", errCat: "tense" },
    { s: "Which sentence has the correct past forms?", opts: ["We sitted near the door, and my brother stood behind us.", "We sat near the door, and my brother stood behind us.", "We sat near the door, and my brother standed behind us."], a: 1, tag: "Grammar · قواعد",
      whyEn: "sit and stand are irregular: sit → sat and stand → stood. They don't take -ed.",
      why: "sit وstand فعلان شاذان: sit ماضيها sat، وstand ماضيها stood، فلا يأخذان ed.", errCat: "tense" },
    { s: "The coach was very ___ of his young players after the final match.", opts: ["amazing", "international", "proud"], a: 2, tag: "Vocabulary · مفردات",
      whyEn: "'proud of' someone means happy because of what they did. 'amazing' and 'international' don't go with 'of his young players'.",
      why: "proud of تعني مسرورًا بما فعله غيره، أما amazing وinternational فلا تأتيان مع of his young players.", errCat: "vocab" },
    { s: "With her new medicine, the young doctor ___ history.", opts: ["did", "made", "took"], a: 1, tag: "Vocabulary · مفردات",
      whyEn: "The phrase is 'make history', and its past is made. We don't say 'do history' or 'take history' with this meaning.",
      why: "العبارة make history وماضيها made، ولا نقول بهذا المعنى do history ولا take history.", errCat: "vocab" },
    { s: "Under ___, a country can't use war to take land from another country.", opts: ["the international law", "law international", "international law"], a: 2, tag: "Legal Track · المسار القانوني",
      whyEn: "The phrase is 'under international law': there is no 'the', and the adjective comes before the noun.",
      why: "العبارة under international law بلا the، وتأتي الصفة قبل الاسم.", errCat: "vocab" }
  ]
};
})();
