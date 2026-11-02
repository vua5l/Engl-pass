/* ===== الوحدة 3 · الدرس 5: I Saw It Happen — سرد ما رآه الشاهد في إيميل: مراجعة الماضي المستمر مع الماضي البسيط (6 مراحل · درس قراءة، وكتابته الختامية للوحدة) ===== */
(function(){
/* خط الزمن في البطاقة الأولى: الخلفية شريط طويل بالماضي المستمر، والأحداث نقاط مرتبة بالماضي البسيط (الماضي يمين واتجاه الزمن إلى اليسار، كما في u3l1). */
var TL_SVG = '<svg class="tl" viewBox="0 0 340 132" role="img" aria-label="Timeline: the background is one long bar in the Past Continuous, and the events are three points in order in the Past Simple · خط زمني: الخلفية شريط طويل بالماضي المستمر، والأحداث ثلاث نقاط مرتبة بالماضي البسيط" direction="ltr">' +
  '<line x1="62" y1="18" x2="62" y2="100" stroke="#1E2A33" stroke-width="1.2" stroke-dasharray="3 3"/><text x="62" y="12" text-anchor="middle" font-family="Quicksand, sans-serif" font-weight="700" font-size="10.5" fill="#1E2A33" letter-spacing="1.5">NOW</text>' +
  '<line x1="30" y1="62" x2="326" y2="62" stroke="#5A6B7C" stroke-width="1.5"/><path d="M22 62l10-5v10z" fill="#5A6B7C"/>' +
  '<rect x="92" y="54" width="218" height="16" rx="8" fill="#B94A33" opacity="0.28"/>' +
  '<circle cx="256" cy="62" r="7" fill="#2C4A6E"/><circle cx="201" cy="62" r="7" fill="#2C4A6E"/><circle cx="146" cy="62" r="7" fill="#2C4A6E"/>' +
  '<text x="201" y="42" text-anchor="middle" font-family="Quicksand, Readex Pro, sans-serif" font-size="12" font-weight="700" fill="#A8432E">was raining · background</text>' +
  '<text x="256" y="88" text-anchor="middle" font-family="Quicksand, Readex Pro, sans-serif" font-size="11.5" font-weight="700" fill="#2C4A6E">First</text>' +
  '<text x="201" y="88" text-anchor="middle" font-family="Quicksand, Readex Pro, sans-serif" font-size="11.5" font-weight="700" fill="#2C4A6E">Then</text>' +
  '<text x="146" y="88" text-anchor="middle" font-family="Quicksand, Readex Pro, sans-serif" font-size="11.5" font-weight="700" fill="#2C4A6E">Finally</text>' +
  '<text x="326" y="124" text-anchor="end" font-family="Quicksand, Readex Pro, sans-serif" font-size="11.5" fill="#5A6B7C">Past · الماضي</text><text x="30" y="124" text-anchor="start" font-family="Quicksand, Readex Pro, sans-serif" font-size="11.5" fill="#5A6B7C">Future · المستقبل</text></svg>';
/* صورة رأس إيميل تركي (موقف حافلة على زاوية شارع تحت المطر، بلا حادث ولا مصاب): خاصة بهذا الدرس، وتظهر عبر reading.art. */
var STOP_SVG = '<svg viewBox="0 0 320 96" role="img" aria-label="A bus stop on a street corner in the rain · موقف حافلة على زاوية شارع تحت المطر" direction="ltr"><rect width="320" height="96" fill="#1E3550"/>' +
  '<path d="M0 78 H320 V96 H0 Z" fill="#14233A"/><path d="M0 78 H320" stroke="#5A6B7C" stroke-width="2"/>' +
  '<path d="M232 34 H294 V40 H232 Z" fill="#F2B857"/><path d="M238 40 V78 M288 40 V78" stroke="#F7F3EC" stroke-width="3"/><path d="M246 62 H280" stroke="#F7F3EC" stroke-width="3"/>' +
  '<path d="M214 78 V30" stroke="#F7F3EC" stroke-width="2.5"/><circle cx="214" cy="26" r="8" fill="#F2B857"/>' +
  '<g stroke="#9DB7D1" stroke-width="1.3" stroke-linecap="round" opacity="0.8"><path d="M24 8 l-4 12"/><path d="M70 30 l-4 12"/><path d="M118 10 l-4 12"/><path d="M168 34 l-4 12"/><path d="M200 8 l-4 12"/><path d="M252 12 l-4 12"/><path d="M304 16 l-4 12"/><path d="M308 52 l-4 12"/><path d="M146 54 l-4 12"/><path d="M44 56 l-4 12"/></g>' +
  '<text x="14" y="50" font-family="Quicksand, sans-serif" font-weight="700" font-size="11" fill="#F7F3EC">RIYADH · ABOUT 6 PM</text>' +
  '<text x="14" y="64" font-family="Quicksand, sans-serif" font-weight="700" font-size="8" letter-spacing="1" fill="#F2B857">WHAT I SAW YESTERDAY</text></svg>';

/* فحوص الكتابة (writing.checks)، بعد توحيد الفاصلة العليا ’ من الآيفون:
   1) الجمل بين التحية والختام، 2) أجزاء الإيميل وكلمات الترتيب، 3) القصة: كلمة زمن وصيغتان من الماضي المستمر
   وجملة فيها when أو while مع الماضي المستمر وفعلان في الماضي البسيط، بلا was see ولا was meaning ولا I walking،
   4) كلمتان من الدرس. والقوائم واسعة حتى لا يُرفض جواب صحيح معتاد. */
function wNorm(text){ return String(text || '').replace(/[’‘ʼ`´]/g, "'"); }
var W_CLOSE = '(?:(?:with\\s+)?best\\s+wishes|best\\s+regards|kind\\s+regards|warm\\s+(?:regards|wishes)|all\\s+the\\s+best|best|regards|(?:talk|speak|write)\\s+soon|many\\s+thanks|thanks(?:\\s+a\\s+lot)?|thank\\s+you|see\\s+you(?:\\s+soon|\\s+later)?|take\\s+care|with\\s+love|love|your\\s+(?:friend|brother|sister|cousin)|yours(?:\\s+sincerely|\\s+truly)?|cheers|bye(?:\\s+for\\s+now)?|sincerely)';
var W_GREET_RE = /(?:^|\n)\s*(?:hi|hello|hey|dear|good\s+(?:morning|afternoon|evening))\b/i;
var W_CLOSE_RE = new RegExp('(?:^|\\n|[.!?]\\s*)\\s*' + W_CLOSE + '\\s*(?:[,!.]|\\n|$)', 'i');
var W_ORDER = [/\bfirst(?:ly)?\b/i, /\bthen\b/i, /\bnext\b/i, /\bafter\s+(?:that|this)\b|\bafterwards?\b/i, /\blater\b/i, /\bfinally\b|\blastly\b|\bin\s+the\s+end\b/i];
var W_NUM = '(?:[0-9]{1,2}(?:[:.][0-9]{2})?(?:\\s*[ap]\\.?m\\.?)?|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|midnight|noon|sunset|sunrise|dawn|night)';
var W_DAY = '(?:day|january|february|march|april|may|june|july|august|september|october|november|december|ramadan|eid|saturday|sunday|monday|tuesday|wednesday|thursday|friday|week|weekend|month|year|summer|winter|spring|autumn|term|semester|night|evening|morning|afternoon)';
var W_TIME = new RegExp('\\b(?:(?:at|around|about|by)\\s+(?:about\\s+|around\\s+|exactly\\s+|almost\\s+)?' + W_NUM + '\\b|(?:just\\s+)?(?:before|after)\\s+' + W_NUM + '\\b|[0-9]{1,2}(?:[:.][0-9]{2})?\\s*[ap]\\.?m\\b|[a-z0-9]+\\s+o\'clock|(?:19|20)[0-9]{2}|yesterday|tonight|today|ago|(?:last|this|that|one|on|in|during)\\s+(?:the\\s+)?' + W_DAY + '\\b|(?:on|during|at)\\s+(?:the\\s+|my\\s+|our\\s+)?(?:way|weekend))\\b', 'i');
/* ما ينتهي بـ ing بعد was / were وليس فعلًا مستمرًا. أما was building وwas feeling وwas meeting فأفعال تُعد، لأن الاسم يأتي بعد a أو the. */
var W_ING_NOT = /^(?:morning|evening|nothing|something|anything|everything|king|spring|during|amazing|interesting|exciting|boring|tiring|relaxing|surprising|shocking|charming|frightening|worrying|annoying|confusing|disappointing|embarrassing|terrifying|exhausting|outstanding|thrilling)$/i;
var W_CONT_RE = /\b(?:was|were)(?:n't|\s+not)?\s+(?:(?:still|just|already|also|really|slowly|quickly|suddenly|i|you|he|she|it|we|they)\s+|(?:the|my|his|her|our|their|your)\s+[a-z]+\s+)?([a-z]{2,}ing)\b/gi;
function wCont(text){
  var n = 0, m, s = wNorm(text); W_CONT_RE.lastIndex = 0;
  while ((m = W_CONT_RE.exec(s))) { if (!W_ING_NOT.test(m[1])) n++; }
  return n;
}
var W_PAST = 'went had said bought ate saw took came lost found knew thought paid slept left made heard chose spent flew drove met spoke wrote sent told felt gave brought began became got sat stood ran swam drank wore sold built caught taught kept forgot broke won understood held fell rode woke sang threw grew drew lent meant hit hurt cut shut put set let read'.split(' ');
var W_ED_NOT = /^(?:need|feed|bleed|breed|speed|succeed|exceed|proceed|shed|shred|wed|heed|weed|seed|embed|plead|red|bed|fed)$/;
function wPastSimple(text){
  var seen = {};
  (wNorm(text).toLowerCase().match(/[a-z]+/g) || []).forEach(function(w){ if (W_PAST.indexOf(w) >= 0 || (w.length > 3 && /ed$/.test(w) && !W_ED_NOT.test(w))) seen[w] = true; });
  return Object.keys(seen).length;
}
/* صيغ خاطئة فقط، فلا تُرفض جملة صحيحة: was see · were went · was meaning · I walking · It was rain. ولا تدخل هنا صيغ المبني للمجهول والصفات،
   فهي صحيحة: was hit وwas told وwas sold وwas lent وwas run وwas mean. */
var W_BE_BAD = /\b(?:was|were|wasn't|weren't|was\s+not|were\s+not)\s+(?:see|saw|go|went|come|came|ran|stand|stood|sit|sat|walk|drive|drove|wait|happen|happened|take|took|give|gave|know|knew|tell|feel|felt|lend|sell)\b|\bit\s+was\s+rain\b/i;
var W_STATE_BAD = /\b(?:was|were)\s+(?:meaning|knowing|understanding|wanting|needing|costing)\b/i;
var W_NO_BE = /\b(?:i|you|he|she|we|they)\s+(?:driving|walking|standing|running|sitting|waiting|going|looking|working|watching)\b/i;
function wBadForms(text){ var s = wNorm(text); return W_BE_BAD.test(s) || W_STATE_BAD.test(s) || W_NO_BE.test(s); }
function wWhenLine(text){
  return wNorm(text).split(/[.!?\n]+/).some(function(x){ return /\b(?:when|while)\b/i.test(x) && wCont(x) >= 1; });
}
var W_VOCAB = [/\bsuddenly\b/i, /\bpolice\s*officers?\b/i, /\bdescrib(?:e|es|ed|ing)\b/i, /\bexactly\b/i, /\bambulances?\b/i, /\bcorners?\b/i, /\bwitness\s+statements?\b/i];
/* التحية (Hi Omar,) والختام (Best wishes, Turki) لا يُحسبان جملًا: يُحذفان ويوضع مكانهما فاصل، ثم تُعدّ الجمل كما يعدّها المحرك
   (قطعة بين . ! ? فيها 3 كلمات فأكثر). وعدّاد المحرك تحت المربع قد يزيد واحدًا لأنه يعدّ سطر الختام جملة. */
function wSentences(text){
  var s = wNorm(text).replace(/\b(Mr|Mrs|Ms|Dr|Prof)\./gi, '$1');
  s = s.replace(/^\s*(?:dear|hi|hello|hey|good\s+(?:morning|afternoon|evening))\b(?:[ \t]*,?[ \t]+[A-Za-z][A-Za-z'.-]*){0,4}[ \t]*(?:[,.!?:]|\n|$)/i, '.');
  s = s.replace(new RegExp('[.!?]?\\s*' + W_CLOSE + '\\s*(?:[,!.]|\\n|$)\\s*(?:[A-Za-z][A-Za-z\'.-]*\\s*){0,4}[.!]?\\s*$', 'i'), '.');
  return s.split(/[.!?]+/).filter(function(p){ return (p.match(/[A-Za-z']+/g) || []).length >= 3; }).length;
}

LESSONS.u3l5 = {
  id: "u3l5",
  unit: 3,
  n: 5,
  mode: "reading",
  en: "I Saw It Happen",
  ar: "كتابة: إفادة شاهد في إيميل",
  subEn: "Writing: A Witness Statement",
  canDoEn: "I can write a short email about something I saw, with the background in the Past Continuous, the events in the Past Simple in order, and when and while in the right place.",
  canDoAr: "أقدر أن أكتب إيميلًا قصيرًا عما رأيته، بالخلفية في الماضي المستمر، والأحداث في الماضي البسيط بترتيبها، وwhen وwhile في موضعيهما.",
  descEn: "I can read Turki's email about an accident that he saw in the rain, then write my own email that says exactly what I saw: the time and place, the background and the events in order.",
  descAr: "أقدر أن أقرأ إيميل تركي عن حادث رآه تحت المطر، ثم أكتب إيميلًا أقول فيه ما رأيته بالضبط: الزمن والمكان، والخلفية، والأحداث بترتيبها.",
  goals: [
    { en: "I can give the background with the Past Continuous (It was raining. People were running.) and tell the events in the Past Simple, in order, with First, Then, After that and Finally.", ar: "أقدر أن أرسم الخلفية بالماضي المستمر (It was raining وPeople were running)، وأحكي الأحداث بالماضي البسيط بترتيبها، بـ First وThen وAfter that وFinally." },
    { en: "I can put when and while in the right place: when before a short action, while before a long action.", ar: "أقدر أن أضع when وwhile في موضعيهما: when قبل الحدث القصير، وwhile قبل الحدث الطويل." },
    { en: "I can start with the time and the place (At about 6 pm, on the corner of …), keep what I saw apart from what I think, and use today's four verbs: set, sold, lent and meant.", ar: "أقدر أن أبدأ بالزمن والمكان (At about 6 pm, on the corner of …)، وأفصل بين ما رأيته وما أظنه، وأستعمل أفعال اليوم الأربعة: set وsold وlent وmeant." },
    { en: "I can write an email about something I saw, with a greeting, a purpose, details and a closing, using 6 words and the legal phrase 'witness statement'.", ar: "أقدر أن أكتب إيميلًا عما رأيته، بتحية وغرض وتفاصيل وختام، بست كلمات والعبارة القانونية witness statement." }
  ],
  intro: {
    recall: {
      dEn: "Type four words and the legal phrase from Lesson 4 (Caught in a Storm) from memory before you see the answer.",
      d: "اكتب من ذاكرتك أربع كلمات والعبارة القانونية من الدرس الرابع (Caught in a Storm) قبل أن ترى الإجابة.",
      items: [
        ["review", "5 active recall items from Lesson 4", "5 عناصر استرجاع نشط من الدرس الرابع"],
        ["pen", "Type each answer from memory to fix its spelling", "اكتب كل إجابة من ذاكرتك لتثبيت إملائها"],
        ["spark", "Includes the legal phrase 'state of emergency'", "تشمل العبارة القانونية state of emergency"]
      ]
    },
    vocab: {
      dEn: "6 words for telling what you saw, plus today's legal phrase ('witness statement'), with human audio from Wikimedia Commons and Oxford links.",
      d: "6 كلمات تحكي بها ما رأيته مع العبارة القانونية اليومية (witness statement)، بنطق بشري من Wikimedia Commons وروابط Oxford.",
      items: [
        ["cards", "7 flashcards (6 words + 'witness statement') with human audio & Oxford link", "7 بطاقات (6 كلمات + witness statement) مع النطق البشري ورابط Oxford"],
        ["review", "2-round matching game", "لعبة توصيل من جولتين"],
        ["quiz", "8 context sentences: choose the right word", "8 جمل سياقية: اختر الكلمة المناسبة"]
      ]
    },
    grammar: {
      dEn: "Review the whole unit in a witness email: the background in the Past Continuous, the events in the Past Simple in order, when and while, the time and place, what you saw and what you think, and today's four verbs.",
      d: "راجع قاعدة الوحدة كلها في إيميل شاهد: الخلفية بالماضي المستمر، والأحداث بالماضي البسيط بترتيبها، وwhen وwhile، والزمن والمكان، وما رأيته وما تظنه، وأفعال اليوم الأربعة.",
      items: [
        ["book", "6 short cards: 4 explanations, Common Arab Mistakes, and a Summary", "6 بطاقات: 4 شروح، وأخطاء العرب الشائعة، والخلاصة"],
        ["quiz", "16 guided exercises (4 of each type), one per screen", "16 تمرينًا موجّهًا (4 من كل نمط)، سؤال في كل شاشة"]
      ]
    },
    reading: {
      dEn: "An email from Turki, a law student in Riyadh, to his British friend Oliver. Guess what it is about, read it once for the main idea, then again for 8 evidence questions.",
      d: "إيميل من تركي، طالب القانون في الرياض، إلى صديقه البريطاني أوليفر: توقّع موضوعه، ثم اقرأه مرة للفكرة العامة، ومرة ثانية للإجابة عن 8 أسئلة بالدليل من النص.",
      items: [
        ["spark", "Predict before you read", "توقّع قبل القراءة"],
        ["clock", "First reading for the main idea with a comfortable timer (about 2 minutes, no word taps)", "قراءة أولى للفكرة العامة بمؤقت إرشادي مريح (نحو دقيقتين) ودون لمس الكلمات"],
        ["mail", "Second reading with word meanings and 8 evidence questions", "قراءة ثانية مع معاني الكلمات باللمس و8 أسئلة فهم بالدليل من النص"]
      ]
    },
    writing: {
      dEn: "Unit capstone: write your own email to a friend about something you saw, with a greeting, at least 4 separate sentences and a closing.",
      d: "المهمة الختامية للوحدة: اكتب إلى صديق إيميلًا عن شيء رأيته، بتحية و4 جمل منفصلة على الأقل وختام.",
      items: [
        ["pen", "Greeting + at least 4 separate sentences + closing", "تحية + 4 جمل منفصلة على الأقل + ختام"],
        ["spark", "4 instant checks: sentences, email parts and order words, the story, lesson words", "4 فحوص فورية: الجمل، وأجزاء الإيميل وكلمات الترتيب، والقصة، وكلمات الدرس"]
      ]
    },
    quiz: {
      dEn: "10 shuffled questions on the unit grammar, today's four verbs, the lesson words and 'witness statement' (80% to pass), plus Lesson Error Analysis.",
      d: "اختبار قصير من 10 أسئلة في قواعد الوحدة وأفعال اليوم الأربعة وكلمات الدرس وwitness statement (النجاح من 80%)، مع تحليل الأخطاء.",
      items: [
        ["quiz", "10 questions: 7 grammar, 2 vocabulary, 1 legal (80% passing score)", "10 أسئلة: 7 قواعد، و2 مفردات، و1 قانوني (النجاح من 80%)"],
        ["review", "Error Analysis by category", "تحليل أخطاء الدرس حسب الفئة"]
      ]
    }
  },

  /* ---------- المرحلة 1: الاسترجاع النشط ---------- */
  recall: [
    {
      id: "rc-0",
      promptAr: "كارثة طبيعية: حدث كبير من الطبيعة يضرّ بكثير من الناس، كالزلزال (عبارة من كلمتين من الدرس الرابع)",
      promptEn: "A big event in nature that hurts many people, like an earthquake (2 words)",
      sentPre: "The earthquake was a terrible",
      sentPost: ", and thousands of families lost their homes.",
      ans: ["natural disaster"],
      hint: "n _ _ _ _ _ _ _ _ _ _ _ _ _ r (15 letters, 2 words)",
      spellNoteEn: "Two words: natural + disaster. natural has the word 'nature' in it, but the 'e' goes: nature → natural. disaster ends in -er.",
      spellNote: "كلمتان: natural ثم disaster. وnatural من nature، وتسقط منها e حين نضيف al. وتنتهي disaster بـ er.",
      errCat: "spelling"
    },
    {
      id: "rc-1",
      promptAr: "يغمر: يغطي الماء مكانًا كان جافًّا (فعل من الدرس الرابع)",
      promptEn: "Cover a dry place with a lot of water (verb)",
      sentPre: "Don't park your car in this low street. After heavy rain, the water can",
      sentPost: "it very quickly.",
      ans: ["flood"],
      hint: "f _ _ _ d (5 letters)",
      spellNoteEn: "Spelled f-l-o-o-d. It has a double o, but it sounds like 'mud', not like 'food': FLUD.",
      spellNote: "تُكتب f-l-o-o-d، وفيها حرفا o، لكنها تُنطق كصوت mud لا كصوت food: «فْلَد».",
      errCat: "spelling"
    },
    {
      id: "rc-2",
      promptAr: "دخان: الغاز الرمادي أو الأسود الذي يخرج من النار (اسم من الدرس الرابع)",
      promptEn: "The grey or black gas that comes from a fire (noun)",
      sentPre: "Grey",
      sentPost: "was coming out of the oven, so my mother opened all the windows.",
      ans: ["smoke"],
      hint: "s _ _ _ e (5 letters)",
      spellNoteEn: "Spelled s-m-o-k-e, with a silent e at the end. We say 'smoke', with no 'a' or 'the' here.",
      spellNote: "تُكتب s-m-o-k-e، وفي آخرها e لا تُنطق، ولا نضع قبلها a هنا لأنها اسم غير معدود.",
      errCat: "spelling"
    },
    {
      id: "rc-3",
      promptAr: "ينقذ: يخرج شخصًا من خطر (فعل من الدرس الرابع)",
      promptEn: "Help someone who is in danger and bring them to a safe place (verb)",
      sentPre: "The small boat was lost at sea, so a helicopter came to",
      sentPost: "the people on it.",
      ans: ["rescue"],
      hint: "r _ _ _ _ e (6 letters)",
      spellNoteEn: "Spelled r-e-s-c-u-e. The end is -ue, like 'blue'. The past is rescued (add -d).",
      spellNote: "تُكتب r-e-s-c-u-e، وتنتهي بـ ue كما في blue، وماضيها rescued بإضافة d.",
      errCat: "vocab"
    },
    {
      id: "rc-4",
      promptAr: "حالة الطوارئ: وضع رسمي تعلنه الدولة في وقت الخطر (العبارة القانونية من الدرس الرابع، ثلاث كلمات)",
      promptEn: "Legal phrase from Lesson 4: a special time of danger that a government announces (3 words)",
      sentPre: "Fires were burning near the city, so the government declared a",
      sentPost: "for two weeks.",
      ans: ["state of emergency"],
      isLegal: true,
      hint: "s _ _ _ _ _ _ _ _ _ _ _ _ _ _ y (16 letters, 3 words)",
      spellNoteEn: "Three words: state + of + emergency. emergency has three e's: e-m-e-r-g-e-n-c-y. We usually say 'declare a state of emergency'.",
      spellNote: "ثلاث كلمات: state ثم of ثم emergency. وفي emergency ثلاثة أحرف e: e-m-e-r-g-e-n-c-y. والمتلازمة declare a state of emergency (يعلن حالة الطوارئ).",
      errCat: "vocab"
    }
  ],

  /* ---------- العبارة القانونية اليومية ---------- */
  legalPhrase: {
    en: "witness statement",
    headword: "witness statement",
    pos: "legal phrase",
    ar: "إفادة شاهد",
    say: "وِتْنَس سْتَيْتْمَنْت",
    ex: "My neighbour saw the thief's face, so he gave a witness statement to the police.",
    exAr: "رأى جاري وجه اللص، فقدّم إفادة شاهد إلى الشرطة.",
    tipEn: "A witness statement is a report from a person who saw or heard something. It says what that person really saw or heard. Collocations: give a witness statement (the witness does this), take a witness statement (the police do this). You know 'witness' from Unit 0. Spelling: state + ment, with the e in the middle: s-t-a-t-e-m-e-n-t.",
    tip: "إفادة الشاهد تقرير من شخص رأى شيئًا أو سمعه، يذكر فيه ما رآه أو سمعه حقًّا. ومن متلازماتها: give a witness statement (يقدّم إفادة شاهد، وهذا فعل الشاهد)، وtake a witness statement (يأخذ إفادة شاهد، وهذا فعل الشرطة). وقد عرفت witness في الوحدة 0. وتُكتب statement من state ثم ment، وتبقى e في وسطها: s-t-a-t-e-m-e-n-t.",
    legal: true,
    oxfordSlug: "statement",
    wikiFiles: ["En-us-witness.ogg", "En-us-statement.ogg"],
    wikiCredit: "File:En-us-witness.ogg & File:En-us-statement.ogg · Wikimedia Commons"
  },

  /* ---------- المفردات ---------- */
  vocab: [
    { en: "suddenly", pos: "adverb", ar: "فجأة", say: "سَدِنْلِي",
      ex: "The room was quiet, and then my little brother suddenly started to laugh.", exAr: "كانت الغرفة هادئة، ثم بدأ أخي الصغير يضحك فجأة.",
      tipEn: "suddenly = quickly, when nobody expected it. It can start a sentence with a comma, or come before the verb: he suddenly stopped. Spelling: sudden + ly, with two d's: s-u-d-d-e-n-l-y.",
      tip: "suddenly تعني فجأة، حين لا يتوقع أحد ما يحدث. وتأتي في أول الجملة وبعدها فاصلة، أو قبل الفعل: he suddenly stopped (توقف فجأة). وتُكتب sudden ثم ly، وفيها حرفا d: s-u-d-d-e-n-l-y.",
      oxfordSlug: "suddenly",
      wikiFile: "En-us-suddenly.ogg",
      wikiCredit: "File:En-us-suddenly.ogg · Wikimedia Commons" },
    { en: "police officer", pos: "noun", ar: "شرطي / ضابط شرطة", say: "بَلِيس أُفِسَر",
      ex: "A police officer helped the old man cross the road.", exAr: "ساعد شرطيٌّ الرجلَ العجوز على عبور الطريق.",
      tipEn: "One person is a police officer. 'The police' means the whole group, and it takes a plural verb: The police are here. Spelling: officer has two f's: o-f-f-i-c-e-r. In police, the stress is on the second part: puh-LEES.",
      tip: "الفرد الواحد a police officer، أما the police فتعني الجهاز كله، ويأتي بعدها فعل الجمع: The police are here. وتُكتب officer بحرفي f: o-f-f-i-c-e-r. والنبر في police على المقطع الثاني: «بَلِيس».",
      oxfordSlug: "police-officer",
      wikiFiles: ["En-uk-police.ogg", "LL-Q1860 (eng)-Vealhurl-officer.wav"],
      wikiCredit: "File:En-uk-police.ogg & File:LL-Q1860 (eng)-Vealhurl-officer.wav · Vealhurl (Lingua Libre) / Wikimedia Commons" },
    { en: "describe", pos: "verb", ar: "يصف", say: "دِسْكْرَايْب",
      ex: "Can you describe the bag that you lost?", exAr: "هل تستطيع أن تصف الحقيبة التي فقدتها؟",
      tipEn: "describe + something, with no 'about': describe the bag, describe what happened. Don't say 'describe about it'. It is a regular verb: describe → described. The noun is description.",
      tip: "نقول describe ثم الشيء مباشرة بلا about: describe the bag (يصف الحقيبة)، وdescribe what happened (يصف ما حدث). ولا نقول describe about it. وهو فعل منتظم ماضيه described، والاسم منه description.",
      oxfordSlug: "describe",
      wikiFile: "En-us-describe.ogg",
      wikiCredit: "File:En-us-describe.ogg · Wikimedia Commons" },
    { en: "exactly", pos: "adverb", ar: "بالضبط", say: "إِقْزَاكْتْلِي",
      ex: "I can't remember exactly where I parked my car.", exAr: "لا أتذكر بالضبط أين أوقفت سيارتي.",
      tipEn: "exactly = with no small mistakes, not more and not less. Collocations: exactly what I saw, exactly where, at exactly five o'clock. With time, 'about' is the opposite: at about 6 pm means that you don't know the exact time. The x sounds like 'gz': ig-ZAKT-lee.",
      tip: "exactly تعني بالضبط، بلا زيادة ولا نقص. ومن متلازماتها: exactly what I saw (ما رأيته بالضبط)، وexactly where (أين بالضبط)، وat exactly five o'clock (في الخامسة تمامًا). وعكسها في الوقت about: فـ at about 6 pm تعني نحو السادسة، حين لا تعرف الوقت بالضبط. وحرف x فيها يُنطق «قز»: «إِقْزَاكْتْلِي».",
      oxfordSlug: "exactly",
      wikiFile: "En-us-exactly.ogg",
      wikiCredit: "File:En-us-exactly.ogg · Wikimedia Commons" },
    { en: "ambulance", pos: "noun", ar: "سيارة إسعاف", say: "أَمْبْيُلَنْس",
      ex: "When my grandfather felt very ill at night, we called an ambulance.", exAr: "حين شعر جدي بمرض شديد في الليل، اتصلنا بسيارة الإسعاف.",
      tipEn: "Collocations: call an ambulance, an ambulance came. Use 'an' because the word starts with a vowel sound. Spelling: the end is -ance, not -ence: a-m-b-u-l-a-n-c-e.",
      tip: "من متلازماتها: call an ambulance (يتصل بالإسعاف)، وan ambulance came (جاءت سيارة إسعاف). ونستعمل an لأن الكلمة تبدأ بصوت متحرك. وتنتهي بـ ance لا ence: a-m-b-u-l-a-n-c-e.",
      oxfordSlug: "ambulance",
      wikiFile: "En-us-ambulance.ogg",
      wikiCredit: "File:En-us-ambulance.ogg · Wikimedia Commons" },
    { en: "corner", pos: "noun", ar: "زاوية (شارع أو غرفة)", say: "كُورْنَر",
      ex: "There is a small bakery on the corner of our street.", exAr: "يوجد مخبز صغير على زاوية شارعنا.",
      tipEn: "For a street, say on the corner or at the corner: on the corner of our street. For a room, say in the corner: in the corner of the room. Don't say 'in the corner of the street'.",
      tip: "للشارع نقول on the corner أو at the corner: on the corner of our street (على زاوية شارعنا). وللغرفة نقول in the corner: in the corner of the room (في زاوية الغرفة). ولا نقول in the corner of the street.",
      oxfordSlug: "corner_1",
      wikiFile: "En-us-corner.ogg",
      wikiCredit: "File:En-us-corner.ogg · Wikimedia Commons" }
  ],

  vocabGaps: [
    { s: "There is a new coffee shop on the ___ of Olaya Street, next to the bank.", opts: ["ambulance", "corner", "police officer"], a: 1,
      whyEn: "A coffee shop can be 'on the corner of' a street: the place where two streets meet. An ambulance and a police officer are not places in a street.",
      why: "يقع المقهى on the corner of الشارع، أي عند ملتقى شارعين، أما ambulance وpolice officer فليسا مكانين في الشارع.", errCat: "vocab" },
    { s: "The house was quiet. ___, a loud noise woke the whole family.", opts: ["Exactly", "Corner", "Suddenly"], a: 2,
      whyEn: "'Suddenly' means quickly, when nobody expected it: the house was quiet, and then the noise came. 'Exactly' doesn't start a story event, and 'Corner' is a noun.",
      why: "Suddenly تعني فجأة، حين لا يتوقع أحد ما يحدث: كان البيت هادئًا ثم جاء الصوت. أما Exactly فلا تفتتح حدثًا في القصة، وCorner اسم.", errCat: "vocab" },
    { s: "On the road to Jeddah, a ___ asked to see my driving licence.", opts: ["police officer", "corner", "ambulance"], a: 0,
      whyEn: "Only a person can ask you for something, and a 'police officer' is a person whose job is to check licences. A corner and an ambulance can't ask.",
      why: "لا يطلب منك شيئًا إلا شخص، وpolice officer شخص من عمله فحص الرخص، أما corner وambulance فلا يطلبان شيئًا.", errCat: "vocab" },
    { s: "Please move your car to the side of the road. An ___ is coming.", opts: ["corner", "ambulance", "witness statement"], a: 1,
      whyEn: "An 'ambulance' is the car that comes for sick or injured people, and other cars move to the side to let it pass. A corner and a witness statement can't come along the road.",
      why: "ambulance سيارة تأتي للمرضى والمصابين، وتتنحى السيارات الأخرى لتفسح لها الطريق. أما corner وwitness statement فلا يأتيان على الطريق.", errCat: "vocab" },
    { s: "The film starts at ___ eight o'clock, so please don't be late.", opts: ["suddenly", "corner", "exactly"], a: 2,
      whyEn: "'exactly' comes before a time when it is not a minute more or less: at exactly eight o'clock. 'suddenly' doesn't go with a clock time, and 'corner' is a noun.",
      why: "تأتي exactly قبل الوقت لتدل على أنه لا يزيد دقيقة ولا ينقص: at exactly eight o'clock. أما suddenly فلا تأتي مع ساعة محددة، وcorner اسم.", errCat: "vocab" },
    { s: "Can you ___ your new flat? How many rooms does it have?", opts: ["describe", "exactly", "suddenly"], a: 0,
      whyEn: "After 'Can you' we need a verb, and 'describe' means say what something is like. 'exactly' and 'suddenly' are not verbs.",
      why: "بعد Can you نحتاج فعلًا، وdescribe تعني أن تذكر صفات الشيء، أما exactly وsuddenly فليسا فعلين.", errCat: "vocab" },
    { s: "I lost my phone at the airport, so I ___ it to the man at the desk: black, with a red cover.", opts: ["suddenly", "described", "exactly"], a: 1,
      whyEn: "'described' is the past of 'describe', and the words after the colon tell us what the phone looks like. We need a past verb here; the other two options are not verbs.",
      why: "described ماضي describe، وما بعد النقطتين يذكر صفات الهاتف، ونحتاج هنا فعلًا ماضيًا، أما الخياران الآخران فليسا فعلين.", errCat: "vocab" },
    { s: "Sara saw two cars hit each other, so the police asked her for a ___.", opts: ["corner", "ambulance", "witness statement"], a: 2,
      whyEn: "Sara saw what happened, so she is a witness, and the police ask a witness for a 'witness statement': a report of what she saw.",
      why: "رأت سارة ما حدث فهي شاهدة، والشرطة تطلب من الشاهد witness statement: تقريرًا بما رآه.", errCat: "vocab" }
  ],

  /* ---------- المرحلة 3: بطاقات القواعد ---------- */
  gCards: [
    {
      tEn: "Background First, Then Events",
      t: "الخلفية أولًا، ثم الأحداث",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Background First, Then Events</span><small>الخلفية أولًا، ثم الأحداث</small></h2>' +
        '<p class="en-p" dir="ltr">In this unit you learned the Past Continuous and used it with the Past Simple. Today we use them together in one story. A story has two parts:</p>' + TL_SVG +
        '<div class="xbox"><span class="xtag c" dir="ltr">Background · الخلفية</span><p class="xen">The sun <span class="hc">was going down</span>. Families <span class="hc">were sitting</span> on the grass in the park.</p>' +
        '<span class="xtag s" dir="ltr">Events in order · الأحداث بترتيبها</span><p class="xen">First, a cat <span class="hs">jumped</span> on our table. Then it <span class="hs">took</span> a piece of chicken. After that, my uncle <span class="hs">ran</span> after it. Finally, we all <span class="hs">laughed</span>.</p></div>' +
        '<div class="tip" dir="ltr"><p>The <b>Past Continuous</b> shows what was already going on. The <b>Past Simple</b> moves the story forward, one event after another.</p><p><b>The boys were running.</b> They were already doing it. <b>The boys ran.</b> This is a new event in the story.</p><p><b>was / were + adjective</b> and <b>state verbs</b> can also give background: It was cold. I knew the man.</p></div>',
      arHtml:
        '<p>تعلّمت في هذه الوحدة الماضي المستمر واستعملته مع الماضي البسيط، واليوم نجمعهما في قصة واحدة. وللقصة جزآن:</p>' +
        '<p><b>الخلفية</b> بالماضي المستمر، وهي ما كان جاريًا حين بدأت القصة: <bdi class="en">The sun was going down.</bdi></p>' +
        '<p><b>الأحداث</b> بالماضي البسيط، وهي ما وقع واحدًا بعد واحد، ونرتبها بـ <bdi class="en">First</bdi> و<bdi class="en">Then</bdi> و<bdi class="en">After that</bdi> و<bdi class="en">Finally</bdi>.</p>' +
        '<p>فجملة <bdi class="en">The boys were running.</bdi> تعني أنهم كانوا يركضون من قبل، وجملة <bdi class="en">The boys ran.</bdi> حدث جديد في القصة.</p>' +
        '<p>وقد تأتي الخلفية أيضًا بـ <bdi class="en">was / were</bdi> مع الصفة، أو بفعل حالة في الماضي البسيط: <bdi class="en">It was cold. I knew the man.</bdi></p>'
    },
    {
      tEn: "when and while in a Story",
      t: "when وwhile في القصة",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">when and while in a Story</span><small>when وwhile في موضعيهما</small></h2>' +
        '<p class="en-p" dir="ltr">You know both words from this unit. Look at what comes right after each one:</p>' +
        '<div class="sigs">' +
          '<div class="sig s"><h3 dir="ltr">when + short action<small class="sig-ar">when قبل الحدث القصير</small></h3><ul><li>I was paying for my coffee when my friend called my name.</li></ul></div>' +
          '<div class="sig c"><h3 dir="ltr">while + long action<small class="sig-ar">while قبل الحدث الطويل</small></h3><ul><li>While I was paying for my coffee, my friend called my name.</li></ul></div>' +
        '</div>' +
        '<p class="en-p" dir="ltr">Two long actions at the same time go well with <b>while</b>:</p>' +
        '<div class="xbox"><p class="xen">While the men <span class="hc">were talking</span>, the children <span class="hc">were eating</span> cake.</p></div>' +
        '<div class="tip" dir="ltr"><p>A short action goes after <b>when</b>, not after <b>while</b>. <b>when</b> can also go before a long action, and <b>while</b> can also go before a state (while I was at the bank). If the sentence starts with When or While, put a comma after the first part.</p><div class="pairs"><span class="yes">when my friend called</span><span class="no">while my friend called</span></div></div>',
      arHtml:
        '<p>انظر إلى ما يأتي بعد كل كلمة: <bdi class="en">when</bdi> قبل الحدث القصير بالماضي البسيط (<bdi class="en">when my friend called my name</bdi>)، و<bdi class="en">while</bdi> قبل الحدث الطويل بالماضي المستمر (<bdi class="en">While I was paying for my coffee</bdi>).</p>' +
        '<p>وإذا جرى حدثان طويلان في وقت واحد، فـ <bdi class="en">while</bdi> تناسبهما: <bdi class="en">While the men were talking, the children were eating cake.</bdi></p>' +
        '<p>ولا يأتي الحدث القصير بعد <bdi class="en">while</bdi>، فلا نقول <bdi class="en">while my friend called</bdi>. ويجوز أن تأتي <bdi class="en">when</bdi> قبل الحدث الطويل أيضًا، وأن تأتي <bdi class="en">while</bdi> قبل حالة (<bdi class="en">while I was at the bank</bdi>).</p>' +
        '<p>وإذا بدأت الجملة بـ <bdi class="en">When</bdi> أو <bdi class="en">While</bdi>، وضعنا فاصلة بعد الجزء الأول.</p>'
    },
    {
      tEn: "A Witness Email in Four Parts",
      t: "إيميل الشاهد في أربعة أجزاء",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">A Witness Email in Four Parts</span><small>إيميل الشاهد في أربعة أجزاء</small></h2>' +
        '<p class="en-p" dir="ltr">You wrote a trip email in Unit 2. An email about something you saw has the same four parts:</p>' +
        '<ol class="uses en-uses" dir="ltr">' +
          '<li><b>Greeting:</b> Hi / Dear + first name.<span class="xen">Hi Salem, · Dear Reem,</span></li>' +
          '<li><b>Purpose:</b> what the email is about.<span class="xen">I\'m writing to tell you what I saw at the mall last night.</span></li>' +
          '<li><b>Details:</b> the time and the place, then the background, then the events in order.<span class="xen">At about 8 pm, outside the pharmacy, … First, …</span></li>' +
          '<li><b>Closing:</b> a question or a friendly line, then a friendly phrase and your name.<span class="xen">How was your weekend? · Best wishes,</span></li>' +
        '</ol>' +
        '<div class="tip" dir="ltr"><p><b>Time and place first.</b> Use <b>at</b> with a clock time, and add <b>about</b> if you don\'t know the exact time. For a street, say <b>on the corner of</b>.</p><div class="pairs"><span class="yes">At about 8 pm, on the corner of Tahlia Street</span><span class="no">In about 8 pm, in the corner of Tahlia Street</span></div></div>',
      arHtml:
        '<p>لإيميلك عما رأيته الأجزاء الأربعة نفسها التي في إيميل الرحلة: <b>التحية</b> (<bdi class="en">Hi Salem,</bdi>)، ثم <b>الغرض</b> (<bdi class="en">I\'m writing to tell you what I saw…</bdi>)، ثم <b>التفاصيل</b>، ثم <b>الختام</b>: سؤال أو سطر ودي، ثم عبارة ودية (<bdi class="en">Best wishes,</bdi>) واسمك.</p>' +
        '<p>وابدأ التفاصيل <b>بالزمن والمكان</b>، ثم الخلفية، ثم الأحداث بترتيبها.</p>' +
        '<p>ونستعمل <bdi class="en">at</bdi> مع الساعة، ونزيد <bdi class="en">about</bdi> إذا لم نعرف الوقت بالضبط، ونقول للشارع <bdi class="en">on the corner of</bdi>: <bdi class="en">At about 8 pm, on the corner of Tahlia Street</bdi>.</p>'
    },
    {
      tEn: "I Saw or I Think? Today's 4 Verbs",
      t: "رأيت أم أظن؟ وأفعال اليوم الأربعة",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">I Saw or I Think?</span><small>ما رأيته وما أظنه</small></h2>' +
        '<p class="en-p" dir="ltr">A witness says what he really saw. <b>I think</b> shows only an idea in his head, so keep the two apart:</p>' +
        '<div class="tbl"><table><thead><tr><th>What I saw · ما رأيته</th><th>What I think · ما أظنه</th></tr></thead><tbody>' +
          '<tr><td>I saw a woman leave the shop.</td><td>I think she was angry.</td></tr>' +
          '<tr><td>She was walking fast.</td><td>I think she was late.</td></tr>' +
        '</tbody></table></div>' +
        '<h3 class="bi-h"><span class="en" dir="ltr">Today\'s 4 verbs</span><small>أفعال اليوم الأربعة</small></h3>' +
        '<ul class="spell" dir="ltr">' +
          '<li><b>set</b> an alarm or a date: no change<span class="s-en">set → set</span></li>' +
          '<li><b>sell</b>: sounds like <b>told</b><span class="s-en">sell → sold</span></li>' +
          '<li><b>lend</b> = give for a short time: ends in <b>-t</b>, like <b>sent</b><span class="s-en">lend → lent</span></li>' +
          '<li><b>mean</b>: ends in <b>-t</b>, and "ee" becomes a short "e"<span class="s-en">mean → meant</span></li>' +
        '</ul>' +
        '<div class="tip" dir="ltr"><p><b>mean</b> is a state verb when it tells us what something says or shows, so it takes no -ing.</p><div class="pairs"><span class="yes">Her smile meant yes.</span><span class="no">Her smile was meaning yes.</span></div></div>',
      arHtml:
        '<p>الشاهد يذكر ما رآه حقًّا. أما <bdi class="en">I think</bdi> فتدل على فكرة في ذهنه فحسب، فافصل بينهما: <bdi class="en">I saw a woman leave the shop.</bdi> هذا ما رأيته، و<bdi class="en">I think she was angry.</bdi> هذا ما تظنه.</p>' +
        '<p>وأفعال اليوم الأربعة: <bdi class="en">set → set</bdi> (يضبط أو يحدد، بلا تغيير في الماضي)، و<bdi class="en">sell → sold</bdi> (يبيع، على وزن <bdi class="en">told</bdi>)، و<bdi class="en">lend → lent</bdi> (يعير، أي يعطي شيئًا مدة قصيرة، وينتهي بـ <bdi class="en">t</bdi> مثل <bdi class="en">sent</bdi>)، و<bdi class="en">mean → meant</bdi> (يعني، وينتهي بـ <bdi class="en">t</bdi>، ويقصر فيه الصوت).</p>' +
        '<p>و<bdi class="en">mean</bdi> بمعنى «يعني» فعل حالة، فلا يأخذ <bdi class="en">ing</bdi>: نقول <bdi class="en">Her smile meant yes.</bdi> ولا نقول <bdi class="en">was meaning</bdi>.</p>'
    },
    {
      tEn: "Common Arab Mistakes",
      t: "أخطاء العرب الشائعة",
      bilingual: true,
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Common Arab Mistakes</span><small>أخطاء يقع فيها كثير من العرب في سرد ما رأوه</small></h2>' +
        '<ul class="mist">' +
          '<li><span class="no">I was see the man at the door.</span><span class="yes">I saw the man at the door.</span><p class="en-m" dir="ltr">An event takes the Past Simple alone, with no <b>was</b> before it.</p><p>الحدث يأتي بالماضي البسيط وحده، بلا <bdi class="en">was</bdi> قبله.</p></li>' +
          '<li><span class="no">While the bus stopped, I was talking to Ali.</span><span class="yes">When the bus stopped, I was talking to Ali.</span><p class="en-m" dir="ltr">The bus stopped once: this is a short action, so it goes after <b>when</b>.</p><p>توقفت الحافلة مرة واحدة، فهو حدث قصير يأتي بعد <bdi class="en">when</bdi>.</p></li>' +
          '<li><span class="no">The police was asking questions.</span><span class="yes">The police were asking questions.</span><p class="en-m" dir="ltr"><b>the police</b> means many people, so it takes <b>were</b>.</p><p><bdi class="en">the police</bdi> جماعة، فيأتي معها <bdi class="en">were</bdi>.</p></li>' +
          '<li><span class="no">at 6 pm i was walking it was raining suddenly a car stopped</span><span class="yes">At 6 pm, I was walking. It was raining. Suddenly, a car stopped.</span><p class="en-m" dir="ltr">Write separate sentences, start each one with a capital letter, write <b>I</b> as a capital, and end each one with a period.</p><p>اكتب جملًا منفصلة، وابدأ كل جملة بحرف كبير، واكتب الضمير <bdi class="en">I</bdi> كبيرًا، وأنهِ كل جملة بنقطة.</p></li>' +
        '</ul>'
    },
    {
      tEn: "Summary",
      t: "الخلاصة",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Quick Summary</span><small>الخلاصة</small></h2>' +
        '<div class="sumc" dir="ltr"><h3>Your Witness Email Checklist · قائمة إيميل الشاهد</h3>' +
          '<p><b>Hi …, → Best wishes,</b><span>Greeting, purpose, details and closing</span></p>' +
          '<p><b>At about 6 pm, on the corner of …</b><span>Start the details with the time and the place</span></p>' +
          '<p><b>was / were + verb-ing</b><span>The background: what was already going on</span></p>' +
          '<p><b>First, · Then · After that, · Finally,</b><span>The events in the Past Simple, in order</span></p>' +
          '<p><b>when + short action · while + long action</b><span>A short action goes after when, not after while</span></p>' +
          '<p><b>I saw, not I think · set · sold · lent · meant</b><span>Say exactly what you saw; meant takes no -ing</span></p>' +
        '</div>' +
        '<p class="en-p" dir="ltr">Now let\'s practise: 16 guided exercises with brand-new sentences.</p>',
      arHtml:
        '<p><b>الإيميل:</b> تحية وغرض وتفاصيل وختام، وتبدأ التفاصيل بالزمن والمكان (<bdi class="en">At about 6 pm, on the corner of…</bdi>).</p>' +
        '<p><b>الخلفية:</b> <bdi class="en">was / were</bdi> مع الفعل و<bdi class="en">ing</bdi> لما كان جاريًا.</p>' +
        '<p><b>الأحداث:</b> الماضي البسيط بترتيبها: <bdi class="en">First, Then, After that, Finally</bdi>.</p>' +
        '<p><b>when وwhile:</b> الحدث القصير بعد <bdi class="en">when</bdi> لا بعد <bdi class="en">while</bdi>، والحدث الطويل بعد <bdi class="en">while</bdi>.</p>' +
        '<p><b>الشاهد:</b> اذكر ما رأيته بالضبط، لا ما تظنه. وأفعال اليوم: <bdi class="en">set, sold, lent, meant</bdi>، و<bdi class="en">meant</bdi> لا تأخذ <bdi class="en">ing</bdi>.</p>' +
        '<p>والآن نتدرّب: 16 تمرينًا موجّهًا بجمل جديدة.</p>'
    }
  ],

  /* ---------- المرحلة 3: التمارين ---------- */
  gA: [
    { s: "We ___ tea in the garden when the doorbell rang, so my sister left her cup and went to the door.", opts: ["had", "were having"], a: 1,
      whyEn: "The tea was already going on, and the doorbell rang in the middle of it: the sister left her cup. A long action needs were + verb-ing.",
      why: "كان شرب الشاي جاريًا، ورنّ الجرس في أثنائه، فتركت الأخت كوبها. والحدث الطويل يأتي بـ were مع الفعل وing.", errCat: "tense" },
    { s: "Everyone in the hall was listening ___ somebody's phone fell on the floor.", opts: ["when", "while"], a: 0,
      whyEn: "The phone fell in the middle of the listening, so 'fell' is the short action, and a short action goes after 'when'. 'while' goes before a long action.",
      why: "سقط الهاتف في أثناء الاستماع، فـ fell حدث قصير، والحدث القصير يأتي بعد when، أما while فتأتي قبل الحدث الطويل.", errCat: "tense" },
    { s: "Nobody replied to Hind because nobody knew what her message ___.", opts: ["was meaning", "meant"], a: 1,
      whyEn: "Here 'mean' tells us what the message says, so it is a state verb. State verbs take no -ing, so we use the past form 'meant'.",
      why: "mean هنا تدل على ما تقوله الرسالة، فهي فعل حالة، وأفعال الحالة لا تأخذ ing، فنستعمل صيغة الماضي meant.", errCat: "stative" },
    { s: "Last month, my neighbour ___ his motorbike to a student.", opts: ["sold", "selled"], a: 0,
      whyEn: "'sell' is irregular: its past form is 'sold', and it sounds like 'told'. Irregular verbs never take -ed.",
      why: "sell فعل شاذ ماضيه sold (على وزن told)، والأفعال الشاذة لا تأخذ ed.", errCat: "tense" }
  ],

  gB: [
    { s: "My brother was lend me his car last week.", ok: false, fix: "My brother lent me his car last week.",
      whyEn: "This is a finished event, so it takes the Past Simple alone: lend → lent. We don't put 'was' before a base verb.",
      why: "هذا حدث انتهى، فيأتي بالماضي البسيط وحده: lend ← lent، ولا نضع was قبل الفعل المجرد.", errCat: "be_verb" },
    { s: "While the teacher closed the door, we were talking.", ok: false, fix: "When the teacher closed the door, we were talking.",
      whyEn: "'closed the door' is a short action, so it goes after 'when'. 'while' goes before a long action.",
      why: "closed the door حدث قصير، فيأتي بعد when، أما while فتأتي قبل الحدث الطويل.", errCat: "tense" },
    { s: "While my brother was driving, I was reading the map.", ok: true,
      whyEn: "Correct: two long actions at the same time, both with was + verb-ing, 'while' at the start, and a comma after the first part.",
      why: "صحيحة: حدثان طويلان في وقت واحد، كلاهما بـ was مع الفعل وing، وwhile في أول الجملة، وبعد الجزء الأول فاصلة.", errCat: "tense" },
    { s: "My friends was waiting for me outside the gym.", ok: false, fix: "My friends were waiting for me outside the gym.",
      whyEn: "'My friends' is plural, so we use 'were', not 'was': they were waiting.",
      why: "My friends جمع، فنستعمل were لا was: they were waiting.", errCat: "agreement" }
  ],

  gC: [
    { pre: "At 7 pm yesterday, my sisters", verb: "clean · Past Continuous", post: "the house for Eid.", ans: ["were cleaning"],
      whyEn: "An action in progress at a moment in the past: were + verb-ing. 'my sisters' is plural, so we use 'were'.",
      why: "حدث كان جاريًا في لحظة من الماضي: were مع الفعل وing، وmy sisters جمع فنستعمل were.", errCat: "tense" },
    { pre: "My cousin needed money for his books, so I", verb: "lend · Past Simple", post: "him 200 riyals.", ans: ["lent"],
      whyEn: "'lend' is irregular: its past form ends in -t, like send → sent. It is the same for every subject.",
      why: "lend فعل شاذ ينتهي ماضيه بـ t مثل send ← sent، وهو واحد مع كل الضمائر.", errCat: "tense" },
    { pre: "", verb: "where / you / go · Past Continuous", post: "when I saw you in the street?", ans: ["Where were you going"],
      whyEn: "A Past Continuous question: Where + were + subject (you) + verb-ing. There is no 'did' with verb-ing.",
      why: "سؤال في الماضي المستمر: Where ثم were ثم الفاعل you ثم الفعل وing، ولا تأتي did مع الفعل بـ ing.", errCat: "word_order" },
    { pre: "The shop on our street", verb: "not / sell · Past Simple", post: "phone chargers, so I went to the mall.", ans: ["didn't sell", "did not sell"],
      whyEn: "A Past Simple negative is didn't + base verb. 'sell' is irregular (sold), but after didn't it goes back to sell.",
      why: "النفي في الماضي البسيط didn't مع الفعل المجرد، وsell فعل شاذ ماضيه sold، لكنه يعود بعد didn't إلى صورته المجردة sell.", errCat: "tense" }
  ],

  gD: [
    { chips: ["on the steps.", "At about 9 pm,", "were sitting", "the students"], ans: "At about 9 pm, the students were sitting on the steps.",
      whyEn: "The time comes first with a comma, then the subject (the students), were + verb-ing, and the place at the end.",
      why: "الزمن أولًا وبعده فاصلة، ثم الفاعل the students، ثم were مع الفعل وing، ثم المكان في آخر الجملة.", errCat: "word_order" },
    { chips: ["for 5 am.", "My father", "his alarm", "set"], ans: "My father set his alarm for 5 am.",
      whyEn: "Subject (My father) + past verb (set) + object (his alarm) + time. The past of set is set: no change, and no -s after 'My father' here because it is past.",
      why: "الفاعل My father ثم الفعل الماضي set ثم المفعول his alarm ثم الوقت. وماضي set هو set بلا تغيير، ولا نضيف s لأن الجملة في الماضي.", errCat: "word_order" },
    { chips: ["while I was", "My uncle", "packing my bag.", "arrived"], ans: "My uncle arrived while I was packing my bag.",
      whyEn: "The short action comes first (My uncle arrived), then 'while' before the long action (I was packing my bag).",
      why: "الحدث القصير أولًا My uncle arrived، ثم while قبل الحدث الطويل I was packing my bag.", errCat: "word_order" },
    { chips: ["didn't see", "I saw the car,", "but I", "the driver."], ans: "I saw the car, but I didn't see the driver.",
      whyEn: "First what the witness saw (I saw the car,), then 'but' and what he did not see, with didn't + base verb.",
      why: "ما رآه الشاهد أولًا I saw the car، ثم but وما لم يره بـ didn't مع الفعل المجرد.", errCat: "word_order" }
  ],

  /* ---------- المرحلة 4: القراءة ---------- */
  reading: {
    title: "What I Saw Yesterday",
    from: "Turki",
    fromMeta: "Turki · Law student, King Saud University",
    to: "Oliver",
    art: STOP_SVG,
    lg1: "Past Simple: events",
    lg2: "Past Continuous: background",
    lg3: "Time and order words, when, while",
    hlLabel: "Highlight the story",
    targetSeconds: 130,
    introEn: "Turki is a law student at King Saud University in Riyadh. Yesterday evening, something happened near the university. Now he is writing to his British friend Oliver.",
    intro: "تركي طالب قانون في جامعة الملك سعود بالرياض. وقع شيء مساء أمس قرب الجامعة، وهو يكتب الآن إلى صديقه البريطاني أوليفر.",
    // <<s:..>> الماضي البسيط · <<c:..>> الماضي المستمر · <<t:..>> الزمن والترتيب وwhen وwhile
    // {word|key} كلمة من مفردات الدرس السبع وحدها · [[text|معنى]] كلمة مساعدة
    paras: [
      "Hi Oliver,",
      "I'm writing to tell you about an accident that I <<s:saw>> <<t:yesterday evening>> near the university. For the first time in my life, I was a real witness!",
      "<<t:At about 6 pm>>, I <<c:was standing>> at the bus stop on the {corner} of a busy street. It <<c:was raining>>, and the rain was heavy. People <<c:were running>> to their cars, and the traffic <<c:was moving>> slowly.",
      "<<t:While>> I <<c:was waiting>>, I <<s:noticed>> a white car. It <<c:was going>> very fast <<t:when>> it <<s:hit>> a [[delivery bike|دراجة توصيل]]. It all <<s:happened>> very {suddenly}. For a moment, everyone <<s:stopped>>. [[Thank God|الحمد لله]], nobody was [[seriously injured|مصابًا إصابة خطيرة]].",
      "<<t:First>>, I <<s:called>> the police and <<s:lent>> the [[rider|راكب الدراجة]] my [[umbrella|مظلة]]. <<t:Then>> an {ambulance} and a {police officer} <<s:arrived>>. <<t:After that>>, the officer <<s:checked>> the driver's driving licence and <<s:asked>> me to give a {witness statement}.",
      "<<t:Finally>>, I <<s:sat>> in the police car and <<s:wrote>> everything in order. One sentence was, 'I think the driver <<c:was using>> his phone.' The officer <<s:read>> it and <<s:asked>>, '<<s:Did you see>> his phone?' I <<s:understood>> what he <<s:meant>>. I <<s:didn't see>> it, so I <<s:changed>> that sentence.",
      "Now I know: a witness {describes|describe} {exactly} what he <<s:saw>>, not what he thinks. It was a good lesson for a law student! How was your week?",
      "Best wishes,<br>Turki"
    ],
    predict: {
      qEn: "Before you read: Turki is a law student in Riyadh. He is writing to his British friend Oliver about yesterday evening. What do you think his email is mainly about?",
      q: "توقّع قبل القراءة: تركي طالب قانون في الرياض، يكتب إلى صديقه البريطاني أوليفر عن مساء أمس؛ عمّ تتوقع أن يكون إيميله في أغلبه؟",
      optsEn: ["A new course at his university", "A road accident that he saw", "A problem with his own car"],
      opts: ["مقرر جديد في جامعته", "حادث طريق رآه", "مشكلة في سيارته"],
      a: 1,
      revealEn: "Turki tells Oliver about a road accident that he saw near his university, and about a lesson that he learned from it.",
      reveal: "يحكي تركي لأوليفر عن حادث طريق رآه قرب جامعته، وعن درس تعلّمه منه."
    },
    insight: {
      titleEn: "How Turki Builds His Email",
      titleAr: "كيف بنى تركي إيميله",
      l1En: "He starts the details with the time, then he gives the background in the Past Continuous:",
      ex1: "At about 6 pm · It was raining · People were running to their cars · the traffic was moving slowly",
      l2En: "Then he tells the events in the Past Simple, in order, and he closes with a question and a friendly phrase:",
      ex2: "Then an ambulance and a police officer arrived · Finally, I sat in the police car · How was your week? · Best wishes, Turki",
      arHtml: '<p>لاحظ أن تركي بدأ التفاصيل بالزمن والمكان، ثم رسم الخلفية بالماضي المستمر (<bdi class="en">was raining, were running</bdi>)، ثم سرد الأحداث بالماضي البسيط بكلمات الترتيب (<bdi class="en">First, Then, After that, Finally</bdi>). وجعل <b style="color:var(--accent-ink)">while</b> قبل الحدث الطويل، و<bdi class="en">when</bdi> قبل الحدث القصير. وبدأ إيميله بتحية وغرض، وختمه بسؤال وعبارة ودية.</p>'
    },
    questions: [
      { q: "Where was Turki at about 6 pm?", opts: ["At a bus stop", "In a classroom", "In a car"], a: 0,
        ev: "At about 6 pm, I was standing at the bus stop on the corner of a busy street.",
        whyEn: "The time 'At about 6 pm' starts the story, and the next words give the place: he was standing at the bus stop.",
        why: "تبدأ القصة بالزمن At about 6 pm، ثم يذكر المكان: كان واقفًا عند موقف الحافلة.", errCat: "reading" },
      { tf: true, q: "The white car was going slowly when it hit the bike.", a: false,
        ev: "It was going very fast when it hit a delivery bike.",
        whyEn: "False: the traffic was moving slowly, but Turki writes that the white car 'was going very fast'.",
        why: "خطأ؛ كان السير بطيئًا، لكن تركي يكتب أن السيارة البيضاء كانت تسير بسرعة كبيرة (was going very fast).", errCat: "reading" },
      { q: "What was Turki doing when he noticed the white car?", opts: ["He was running to his car.", "He was waiting.", "He was calling the police."], a: 1,
        ev: "While I was waiting, I noticed a white car.",
        whyEn: "'While I was waiting' is the long action, and 'noticed' is the short action in the middle of it. Other people were running, and he called the police later.",
        why: "While I was waiting هو الحدث الطويل، وnoticed حدث قصير وقع في أثنائه. أما الركض فكان من غيره، واتصل بالشرطة بعد ذلك.", errCat: "reading" },
      { tf: true, q: "The rider was seriously injured.", a: false,
        ev: "Thank God, nobody was seriously injured.",
        whyEn: "False: Turki writes that 'nobody was seriously injured', and 'nobody' includes the rider.",
        why: "خطأ؛ يكتب تركي أنه لم يُصب أحد إصابة خطيرة (nobody was seriously injured)، وnobody تشمل راكب الدراجة.", errCat: "reading" },
      { q: "Who did Turki lend his umbrella to?", opts: ["The driver", "The police officer", "The rider"], a: 2,
        ev: "First, I called the police and lent the rider my umbrella.",
        whyEn: "'lent the rider my umbrella' means that he gave it to the rider for a short time. lent is the past of lend.",
        why: "lent the rider my umbrella تعني أنه أعطى مظلته لراكب الدراجة مدة قصيرة، وlent ماضي lend.", errCat: "reading" },
      { q: "What did the officer do just before he asked Turki for a statement?", opts: ["He checked the driver's licence.", "He read Turki's statement.", "He called an ambulance."], a: 0,
        ev: "After that, the officer checked the driver's driving licence and asked me to give a witness statement.",
        whyEn: "The sentence gives the two actions in order: first he checked the licence, and then he asked Turki. He read the statement later, after Turki wrote it.",
        why: "تذكر الجملة الحدثين بترتيبهما: فحص الرخصة، ثم طلب من تركي الإفادة. أما قراءة الإفادة فجاءت بعد أن كتبها تركي.", errCat: "reading" },
      { q: "Why did Turki change one sentence?", opts: ["He wrote the wrong time.", "The officer wanted shorter sentences.", "He did not really see the phone."], a: 2,
        ev: "I didn't see it, so I changed that sentence.",
        whyEn: "He wrote 'I think' about the driver's phone, and the officer asked if he saw it. He didn't, and 'so' gives the result: he changed the sentence.",
        why: "كتب I think عن هاتف السائق، فسأله الشرطي هل رآه، ولم يكن قد رآه، وso تدل على النتيجة: غيّر الجملة.", errCat: "reading" },
      { q: "What does Turki say about a witness?", opts: ["A witness should say what he thinks.", "A witness should say only what he saw.", "A witness should call the police first."], a: 1,
        ev: "Now I know: a witness describes exactly what he saw, not what he thinks.",
        whyEn: "'exactly what he saw, not what he thinks' means that a witness keeps to what he really saw, and he leaves out his own ideas.",
        why: "exactly what he saw, not what he thinks تعني أن الشاهد يكتفي بما رآه حقًّا، ويترك ما يظنه.", errCat: "reading" }
    ]
  },

  /* ---------- المرحلة 5: الكتابة ---------- */
  writing: {
    taskEn: "Write your own short email to a friend about something you saw: a small accident or a problem in the street, at the mall or at university. It can be true, or you can make it up. Start with a greeting (Hi …,) and finish with a closing (Best wishes,) and your name. Between them, write at least 4 separate sentences: say when and where it happened (At about 6 pm, on the corner of …), give the background with at least 2 Past Continuous verbs (It was raining. People were running.), use when or while in a sentence with the Past Continuous, and tell the events in the Past Simple with at least 3 order words (First, Then, After that, Finally). Say exactly what you saw, and use at least 2 words from today's lesson.",
    task: "اكتب إلى صديق إيميلًا قصيرًا عن شيء رأيته: حادث صغير أو مشكلة في الشارع أو السوق أو الجامعة، حقيقيًا كان أو من خيالك. ابدأ بتحية (Hi …,) واختم بعبارة ختام (Best wishes,) ثم اسمك، واكتب بينهما 4 جمل منفصلة على الأقل: اذكر متى وقع وأين (At about 6 pm, on the corner of …)، وارسم الخلفية بصيغتين على الأقل من الماضي المستمر (It was raining. People were running.)، واستعمل when أو while في جملة فيها الماضي المستمر، واحكِ الأحداث بالماضي البسيط بثلاث كلمات ترتيب على الأقل (First وThen وAfter that وFinally). اذكر ما رأيته بالضبط، واستعمل كلمتين على الأقل من كلمات الدرس.",
    placeholder: "Hi …,\nAt about 6 pm, I was …\nFirst, …",
    checks: [
      { k: "sentences", tEn: "At least 4 separate sentences between the greeting and the closing (end each with . or ?)", t: "4 جمل منفصلة على الأقل بين التحية والختام (تنتهي كل جملة بنقطة أو علامة استفهام)",
        ok: function(a, text){ return wSentences(text) >= 4 && !(a && a.runOn); } },
      { k: "email", tEn: "Email parts and order: a greeting (Hi …,), at least 3 order words (First, Then, After that, Finally) and a closing (Best wishes,)", t: "أجزاء الإيميل والترتيب: تحية (Hi …,)، و3 كلمات ترتيب على الأقل (First وThen وAfter that وFinally)، وختام (Best wishes,)", ex: "Hi Ali, · First, … Then … Finally, … · Best wishes,",
        ok: function(a, text){ var s = wNorm(text);
          return W_GREET_RE.test(s) && W_CLOSE_RE.test(s) && W_ORDER.filter(function(re){ return re.test(s); }).length >= 3; } },
      { k: "story", tEn: "The story: a time (At about 6 pm, yesterday …), at least 2 Past Continuous verbs, when or while in a sentence with the Past Continuous, and 2 Past Simple verbs for the events, with no 'was see', 'was meaning' or 'I walking'", t: "القصة: وقت (At about 6 pm أو yesterday …)، وصيغتان من الماضي المستمر، وwhen أو while في جملة فيها الماضي المستمر، وفعلان بالماضي البسيط للأحداث، دون was see أو was meaning أو I walking", ex: "At about 6 pm, I was walking. It was raining. A car was turning when a bike hit it. A man stopped.",
        ok: function(a, text){ return W_TIME.test(wNorm(text)) && wCont(text) >= 2 && wWhenLine(text) && wPastSimple(text) >= 2 && !wBadForms(text); } },
      { k: "vocab", tEn: "At least 2 words or phrases from today's lesson", t: "كلمتان أو عبارتان على الأقل من درس اليوم", ex: "suddenly · police officer · describe · exactly · ambulance · corner · witness statement",
        ok: function(a, text){ var s = wNorm(text); return W_VOCAB.filter(function(re){ return re.test(s); }).length >= 2; } }
    ],
    modelMarked: "Hi Majed,<br>I want to tell you what I <<s:saw>> <<t:last Thursday>>. <<t:At about 9 pm>>, I <<c:was sitting>> in a café on the {corner} of our street. It was very windy, and two boys <<c:were playing>> football outside. A man <<c:was parking>> his car <<t:when>> a ball {suddenly} <<s:broke>> his window. <<t:First>>, the boys <<s:stopped>> playing. <<t:Then>> the man <<s:got>> out, and they <<s:said>> sorry to him. <<t:After that>>, their father <<s:came>> and <<s:paid>> for the window. <<t:Finally>>, the man <<s:drove>> away. I <<s:saw>> the ball, but I <<s:didn't see>> {exactly} who <<s:kicked>> it.<br>Best wishes,<br>Saad",
    model: "Hi Majed,\nI want to tell you what I saw last Thursday. At about 9 pm, I was sitting in a café on the corner of our street. It was very windy, and two boys were playing football outside. A man was parking his car when a ball suddenly broke his window. First, the boys stopped playing. Then the man got out, and they said sorry to him. After that, their father came and paid for the window. Finally, the man drove away. I saw the ball, but I didn't see exactly who kicked it.\nBest wishes,\nSaad",
    legendEn: "Light blue = Past Simple: events · Terracotta = Past Continuous: background · Dashed = time and order words, when and while",
    legendAr: "الأزرق الفاتح للماضي البسيط (الأحداث)، والطوبي للماضي المستمر (الخلفية)، والإطار المنقّط لكلمات الزمن والترتيب وwhen وwhile.",
    acceptExamples: [
      "Hello Ali,\nI want to tell you about a small accident. At 9pm last night, I was walking near the mall. It was very cold, and people were waiting for their cars. A taxi was turning at the corner when it hit a small car. First, the two drivers got out. Then a police officer came. After that, he talked to them. Finally, they left. Nobody was injured.\nSee you soon,\nOmar",
      "Dear Sara,\nJust after midnight, I was driving home from my aunt's house. What was happening on the road? Many cars were stopping, and I was feeling tired. While I was waiting, I saw an ambulance. First, it stopped near a small car. Then I noticed a man on the ground. After that, a police officer asked me to describe what I saw. Finally, I went home.\nThanks,\nHuda",
      "Hi Khalid,\nYesterday I saw a small fire near my university. Workers were building a new shop on the corner, and smoke was coming from a room. When the fire started, I was buying coffee. First, people ran out. Then an ambulance arrived. After that, a police officer asked me for a witness statement. Finally, I went to class. It wasn’t serious.\nBest regards,\nFaisal",
      "Hi Sami,\nI’m writing to tell you what happened this morning. I was waiting for my brother on the corner of Tahlia Street, and the traffic was moving slowly. Suddenly, a motorbike hit a bus while it was stopping. First, the rider got up. Then the bus driver called the police. Finally, they talked and everyone left. I didn’t see exactly who was wrong.\nBest,\nOmar"
    ]
  },

  /* ---------- «اسأل المعلم» ---------- */
  askChips: [
    "متى أستعمل الماضي المستمر ومتى الماضي البسيط في القصة؟",
    "ما الفرق بين when وwhile في السرد؟",
    "لماذا نقول meant ولا نقول was meaning؟",
    "كيف أكتب في إيميل ما رأيته بالترتيب؟"
  ],

  /* ---------- المرحلة 6: الاختبار القصير ---------- */
  quiz: [
    { s: "At 8 pm last Thursday, we ___ for our flight at the airport.", opts: ["wait", "were waiting", "was waiting"], a: 1, tag: "Grammar · قواعد",
      whyEn: "'At 8 pm last Thursday' is a moment in the past, so we need the Past Continuous, and 'we' takes 'were'. 'wait' is the present, and 'was' doesn't go with 'we'.",
      why: "At 8 pm last Thursday لحظة في الماضي، فنحتاج الماضي المستمر، وwe يأتي معها were. أما wait فمضارع، وwas لا تأتي مع we.", errCat: "agreement" },
    { s: "I was watering the plants ___ my neighbour came to say hello.", opts: ["when", "while", "during"], a: 0, tag: "Grammar · قواعد",
      whyEn: "'came' is the short action, in the middle of the watering, and a short action goes after 'when'. 'while' goes before a long action, and 'during' goes before a noun.",
      why: "came حدث قصير وقع في أثناء سقي النباتات، والحدث القصير يأتي بعد when، أما while فتأتي قبل الحدث الطويل، وduring تأتي قبل الاسم.", errCat: "tense" },
    { s: "Nobody understood what the sign on the door ___.", opts: ["was meaning", "was mean", "meant"], a: 2, tag: "Grammar · قواعد",
      whyEn: "Here 'mean' tells us what the sign says, so it is a state verb with no -ing: meant. We also don't put 'was' before a base verb.",
      why: "mean هنا تدل على ما تقوله اللوحة، فهي فعل حالة لا يأخذ ing، فنقول meant، ولا نضع was قبل الفعل المجرد.", errCat: "stative" },
    { s: "Last Sunday, Ahmed ___ me his notes for the exam.", opts: ["lended", "lent", "was lend"], a: 1, tag: "Grammar · قواعد",
      whyEn: "'Last Sunday' shows a finished event, and lend is irregular: lent. 'lended' is not a word, and we don't put 'was' before a base verb.",
      why: "Last Sunday تدل على حدث انتهى، وlend فعل شاذ ماضيه lent، أما lended فليست كلمة، ولا نضع was قبل الفعل المجرد.", errCat: "tense" },
    { s: "Last year, my grandfather ___ his farm and moved to the city.", opts: ["sold", "selled", "was sell"], a: 0, tag: "Grammar · قواعد",
      whyEn: "The past of sell is sold, like tell → told. 'selled' is not a word, and we don't put 'was' before a base verb.",
      why: "ماضي sell هو sold، مثل tell ← told، أما selled فليست كلمة، ولا نضع was قبل الفعل المجرد.", errCat: "tense" },
    { s: "Last Monday, our teacher ___ the date of the final test.", opts: ["setted", "sets", "set"], a: 2, tag: "Grammar · قواعد",
      whyEn: "'Last Monday' shows the past, and the past of set is set, with no change. 'setted' is not a word, and 'sets' is the present.",
      why: "Last Monday تدل على الماضي، وماضي set هو set بلا تغيير، أما setted فليست كلمة، وsets مضارع.", errCat: "tense" },
    { s: "Which sentence is correct?", opts: ["While I reading a book, my sister was talking on the phone.", "While I was read a book, my sister was talking on the phone.", "While I was reading a book, my sister was talking on the phone."], a: 2, tag: "Grammar · قواعد",
      whyEn: "Two long actions at the same time need was / were + verb-ing in both parts: I was reading, my sister was talking. 'I reading' has no 'was', and 'was read' has no -ing.",
      why: "الحدثان الطويلان في وقت واحد يحتاجان was / were مع الفعل وing في الجزأين: I was reading وmy sister was talking. أما I reading فبلا was، وwas read بلا ing.", errCat: "be_verb" },
    { s: "My bus stops on the ___ of Prince Sultan Street.", opts: ["ambulance", "corner", "police officer"], a: 1, tag: "Vocabulary · مفردات",
      whyEn: "'on the corner of' a street is a place: where two streets meet. An ambulance and a police officer are not places in a street.",
      why: "on the corner of الشارع مكان عند ملتقى شارعين، أما ambulance وpolice officer فليسا مكانين في الشارع.", errCat: "vocab" },
    { s: "Please ___ the man that you saw: was he tall or short?", opts: ["suddenly", "exactly", "describe"], a: 2, tag: "Vocabulary · مفردات",
      whyEn: "After 'Please' we need a verb, and 'describe' means say what someone looks like. 'suddenly' and 'exactly' are not verbs.",
      why: "بعد Please نحتاج فعلًا، وdescribe تعني أن تذكر صفات الشخص، أما suddenly وexactly فليسا فعلين.", errCat: "vocab" },
    { s: "A woman saw the accident, so the police asked her to give a ___.", opts: ["witness statement", "witness speech", "witness letter"], a: 0, tag: "Legal Track · المسار القانوني",
      whyEn: "The phrase is 'witness statement': a report from a person who saw something. We say 'give a witness statement'. We don't say 'witness speech' or 'witness letter'.",
      why: "العبارة witness statement، وهي تقرير من شخص رأى شيئًا، ونقول give a witness statement، ولا نقول witness speech ولا witness letter.", errCat: "vocab" }
  ]
};
})();
