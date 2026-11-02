/* ===== أسبوع التثبيت · الدرس 1: Back Home — مراجعة المضارع البسيط مقابل المضارع المستمر (6 مراحل · درس قراءة، وفيه قراءة طلاقة لنص u1l1، وبلا كلمات جديدة) ===== */
(function(){
/* خط الزمن في البطاقة الأولى: نقاط متكررة للبسيط، وشريط حول الآن للمستمر (الماضي يمين واتجاه الزمن إلى اليسار، كما في u3l1). */
var TL_SVG = '<svg class="tl" viewBox="0 0 340 118" role="img" aria-label="Timeline: the Present Simple is many points again and again, and the Present Continuous is one bar around now · خط زمني: البسيط نقاط تتكرر، والمستمر شريط حول الآن" direction="ltr">' +
  '<line x1="170" y1="18" x2="170" y2="96" stroke="#1E2A33" stroke-width="1.2" stroke-dasharray="3 3"/><text x="170" y="12" text-anchor="middle" font-family="Quicksand, sans-serif" font-weight="700" font-size="10.5" fill="#1E2A33" letter-spacing="1.5">NOW</text>' +
  '<line x1="24" y1="58" x2="326" y2="58" stroke="#5A6B7C" stroke-width="1.5"/><path d="M16 58l10-5v10z" fill="#5A6B7C"/>' +
  '<rect x="122" y="50" width="96" height="16" rx="8" fill="#B94A33" opacity="0.28"/>' +
  '<circle cx="50" cy="58" r="6" fill="#2C4A6E"/><circle cx="90" cy="58" r="6" fill="#2C4A6E"/><circle cx="130" cy="58" r="6" fill="#2C4A6E"/><circle cx="210" cy="58" r="6" fill="#2C4A6E"/><circle cx="250" cy="58" r="6" fill="#2C4A6E"/><circle cx="290" cy="58" r="6" fill="#2C4A6E"/>' +
  '<text x="170" y="84" text-anchor="middle" font-family="Quicksand, Readex Pro, sans-serif" font-size="12" font-weight="700" fill="#A8432E">is reading · this week</text>' +
  '<text x="170" y="110" text-anchor="middle" font-family="Quicksand, Readex Pro, sans-serif" font-size="12" font-weight="700" fill="#2C4A6E">reads · every day</text></svg>';
/* صورة رأس إيميل نور (مغيب الشمس على بحر جدة): خاصة بهذا الدرس، وتظهر عبر reading.art. */
var JEDDAH_SVG = '<svg viewBox="0 0 320 96" role="img" aria-label="The sun going down over the sea at Jeddah · الشمس تغيب على البحر في جدة" direction="ltr"><rect width="320" height="96" fill="#1E3550"/>' +
  '<circle cx="236" cy="58" r="20" fill="#F2B857"/><path d="M0 60 H320 V96 H0 Z" fill="#14233A"/>' +
  '<g stroke="#F2B857" stroke-width="2" stroke-linecap="round" opacity="0.7"><path d="M214 68 H258"/><path d="M222 76 H250"/><path d="M228 84 H244"/></g>' +
  '<text x="14" y="34" font-family="Quicksand, sans-serif" font-weight="700" font-size="11" fill="#F7F3EC">JEDDAH · EVENING</text>' +
  '<text x="14" y="48" font-family="Quicksand, sans-serif" font-weight="700" font-size="8" letter-spacing="1" fill="#F2B857">NEWS FROM NOOR</text></svg>';

/* فحوص الكتابة (writing.checks)، بعد توحيد الفاصلة العليا ’ من الآيفون:
   1) أربع جمل، 2) مضارع بسيط، 3) مضارع مستمر، 4) كلمتان من الدرس.
   والصيغ الخاطئة تُرفض في 2 و3 معًا: I am work وShe is go وIs she work? وHe don't وI am knowing. والفحوص واسعة حتى لا يُرفض جواب صحيح معتاد. */
function wNorm(text){ return String(text || '').replace(/[’‘ʼ`´]/g, "'"); }
/* ما ينتهي بـ ing بعد is / are وليس فعلًا مستمرًا. */
var W_ING_NOT = /^(?:thing|string|king|spring|during|morning|evening|nothing|something|anything|everything|amazing|interesting|exciting|boring|tiring|relaxing|surprising|shocking|charming|frightening|worrying|annoying|confusing|disappointing|embarrassing|exhausting|outstanding|thrilling|missing)$/i;
var W_CONT_RE = /(?:\b(?:am|is|are|isn't|aren't)|[a-z]'(?:m|re|s))(?:\s+not)?\s+(?:(?:still|just|already|also|really|now|all|both|i|you|he|she|it|we|they)\s+|(?:the|my|your|his|her|our|their)\s+[a-z]+\s+)?([a-z]{2,}ing)\b/gi;
function wCont(text){
  var n = 0, m, s = wNorm(text); W_CONT_RE.lastIndex = 0;
  while ((m = W_CONT_RE.exec(s))) { if (!W_ING_NOT.test(m[1])) n++; }
  return n;
}
/* البسيط: كلمة عادة، أو نفي بـ don't / doesn't، أو فاعل بعده فعل غير ماضٍ ولا مساعد، أو he / she أو اسم مفرد بعده فعل بـ s، أو اسم جمع بعده فعل معتاد. */
var W_HABIT = /\b(?:usually|often|always|sometimes|never|normally|every\s+[a-z]+|on\s+(?:saturday|sunday|monday|tuesday|wednesday|thursday|friday)s|at\s+weekends?)\b/i;
var W_DO_NOT = /\b(?:don't|doesn't|do\s+not|does\s+not|do|does)\s+(?:[a-z]+\s+)?[a-z]+/i;
var W_NOT_SIMPLE = /^(?:am|are|was|were|will|would|can|could|should|must|may|might|had|did|went|saw|came|took|got|made|said|ate|bought)$/i;
var W_PLAIN_RE = /\b(?:i|we|they|you)\s+(?:also\s+|still\s+|really\s+|just\s+)?([a-z]+)\b/gi;
var W_THIRD_RE = /\b(?:[Hh]e|[Ss]he|(?!(?:My|Our|The|His|Her|Their|Your|This|That|These|Those|On|In|At|We|They|You)\b)[A-Z][a-z]+|(?:[Mm]y|[Oo]ur|[Tt]he|[Hh]is|[Hh]er|[Tt]heir|[Yy]our)\s+[a-z]+)\s+(?:also\s+|still\s+|really\s+)?([a-z]+s)\b/g;
var W_PLURAL = /\b(?:my|our|the|his|her|their|your)\s+[a-z]+s\s+(?:start|begin|finish|end|open|close|work|go|study|live|come|eat|help|teach|sleep|wake)\b/i;
function wSimple(text){
  var s = wNorm(text), m;
  if (W_HABIT.test(s) || W_DO_NOT.test(s) || W_PLURAL.test(s)) return true;
  W_PLAIN_RE.lastIndex = 0;
  while ((m = W_PLAIN_RE.exec(s))) { if (!W_NOT_SIMPLE.test(m[1]) && !/(?:ed|ing)$/i.test(m[1])) return true; }
  W_THIRD_RE.lastIndex = 0;
  while ((m = W_THIRD_RE.exec(s))) { if (!/^(?:is|was)$/i.test(m[1])) return true; }
  return false;
}
/* صيغ خاطئة فقط، مع ضمير صريح قبلها، فلا تُرفض جملة صحيحة مثل My life is work and study. وخرج منها read وcome وrun لأن she's read صحيحة. */
var W_BASES = '(?:work|go|study|write|eat|drink|walk|drive|sleep|wake|play|cook|help|teach|learn|sit)\\b(?!\\s+(?:colleagues?|friends?|partners?|groups?))';
var W_BE_BASE = new RegExp("\\b(?:i\\s+am|i'm|he\\s+is|he's|she\\s+is|she's|we\\s+are|we're|they\\s+are|they're|you\\s+are|you're)\\s+(?:not\\s+)?(?:usually\\s+|always\\s+|often\\s+)?" + W_BASES, 'i');
var W_BE_Q = new RegExp('\\b(?:is|are|am)\\s+(?:he|she|you|they|we|i)\\s+' + W_BASES, 'i');
var W_HE_DONT = /\b(?:he|she|it)\s+don't\b/i;
var W_STATE_BAD = /(?:\b(?:am|is|are)|'m|'re|'s)\s+(?:not\s+)?(?:knowing|wanting|needing|preferring)\b/i;
function wBadForms(text){ var s = wNorm(text); return W_BE_BASE.test(s) || W_BE_Q.test(s) || W_HE_DONT.test(s) || W_STATE_BAD.test(s); }
var W_VOCAB = [/\btypical\b/i, /\bmiss(?:es|ed|ing)?\b/i, /\bresearch\b/i, /\bcolleagues?\b/i, /\bschedules?\b/i, /\bdeadlines?\b/i, /\bsign(?:s|ed|ing)?\b[^.!?]*\bcontracts?\b/i];

LESSONS.u103l1 = {
  id: "u103l1",
  unit: 103,
  n: 1,
  mode: "reading",
  en: "Back Home",
  ar: "مراجعة المضارع البسيط والمستمر",
  subEn: "Review: Present Simple vs. Present Continuous",
  canDoEn: "I can choose between the Present Simple and the Present Continuous: what I usually do, and what is going on now or this week.",
  canDoAr: "أقدر أن أختار بين المضارع البسيط والمضارع المستمر: ما أفعله عادةً، وما يجري الآن أو هذا الأسبوع.",
  descEn: "I can read Noor's new email from Jeddah, see what she usually does and what she is doing this week, then write the same about my own week.",
  descAr: "أقدر أن أقرأ إيميل نور الجديد من جدة، وأرى ما تفعله عادةً وما تفعله هذا الأسبوع، ثم أكتب مثله عن أسبوعي.",
  goals: [
    { en: "I can use the Present Simple for habits and facts, and the Present Continuous for what is going on now or this week.", ar: "أقدر أن أستعمل المضارع البسيط للعادة والحقيقة، والمضارع المستمر لما يجري الآن أو هذا الأسبوع." },
    { en: "I can make questions and negatives with do / does and with am / is / are, and I don't mix them.", ar: "أقدر أن أصوغ السؤال والنفي بـ do / does وبـ am / is / are، ولا أخلط بينهما." },
    { en: "I can keep know, want, need and prefer in the Present Simple, and put usually and often in the right place.", ar: "أقدر أن أُبقي know وwant وneed وprefer في المضارع البسيط، وأضع usually وoften في موضعهما." },
    { en: "I can write 4 sentences about my week with 2 words coming back, and I can read Noor's first email faster.", ar: "أقدر أن أكتب 4 جمل عن أسبوعي بكلمتين من الكلمات العائدة، وأن أقرأ إيميل نور الأول بسرعة أكبر." }
  ],
  intro: {
    recall: {
      dEn: "Type four words and one legal phrase from Unit 1 from memory before you see the answer.",
      d: "اكتب من ذاكرتك أربع كلمات وعبارة قانونية من الوحدة 1 قبل أن ترى الإجابة.",
      items: [
        ["review", "5 active recall items from Unit 1", "5 عناصر استرجاع نشط من الوحدة 1"],
        ["pen", "Type each answer from memory to fix its spelling", "اكتب كل إجابة من ذاكرتك لتثبيت إملائها"],
        ["spark", "Includes the legal phrase 'working hours'", "تشمل العبارة القانونية working hours"]
      ]
    },
    vocab: {
      dEn: "Words Coming Back: 6 words from Unit 1 and the legal phrase 'sign a contract'. There are no new words this week.",
      d: "كلمات عائدة: 6 كلمات من الوحدة 1 والعبارة القانونية sign a contract، ولا كلمات جديدة في هذا الأسبوع.",
      items: [
        ["cards", "7 returning flashcards (6 words + 'sign a contract') with new examples, human audio & Oxford link", "7 بطاقات عائدة (6 كلمات + sign a contract) بأمثلة جديدة ونطق بشري ورابط Oxford"],
        ["review", "2-round matching game", "لعبة توصيل من جولتين"],
        ["quiz", "8 context sentences: choose the right word", "8 جمل سياقية: اختر الكلمة المناسبة"]
      ]
    },
    grammar: {
      dEn: "No new grammar: put the Present Simple and the Present Continuous side by side, with signal words, do / does and am / is / are, state verbs and -ing spelling.",
      d: "لا قاعدة جديدة: نضع المضارع البسيط والمستمر جنبًا إلى جنب، مع كلمات الإشارة، وdo / does وam / is / are، وأفعال الحالة، وإملاء ing.",
      items: [
        ["book", "6 short cards: 4 reviews, Common Arab Mistakes, and a Summary", "6 بطاقات: 4 مراجعات، وأخطاء العرب الشائعة، والخلاصة"],
        ["quiz", "16 guided exercises (4 of each type), one per screen", "16 تمرينًا موجّهًا (4 من كل نمط)، سؤال في كل شاشة"]
      ]
    },
    reading: {
      dEn: "First read Noor's old email from Unit 1 again with a timer, to measure your speed. Then read her new email to Reem: guess what it is about, read it once for the main idea, then again for 8 evidence questions.",
      d: "اقرأ أولًا إيميل نور القديم من الوحدة 1 بمؤقت لتقيس سرعتك، ثم اقرأ إيميلها الجديد إلى ريم: توقّع موضوعه، واقرأه مرة للفكرة العامة، ومرة ثانية للإجابة عن 8 أسئلة بالدليل من النص.",
      items: [
        ["clock", "Fluency reading: Noor's email from Unit 1 with a timer", "قراءة الطلاقة: إيميل نور من الوحدة 1 بمؤقت"],
        ["spark", "Predict, then a first reading for the main idea (about 2 minutes, no word taps)", "التوقع، ثم قراءة أولى للفكرة العامة (نحو دقيقتين) دون لمس الكلمات"],
        ["mail", "Second reading with word meanings and 8 evidence questions", "قراءة ثانية مع معاني الكلمات باللمس و8 أسئلة فهم بالدليل من النص"]
      ]
    },
    writing: {
      dEn: "Write at least 4 separate sentences about your week: what you usually do and what you are doing now.",
      d: "اكتب 4 جمل منفصلة على الأقل عن أسبوعك: ما تفعله عادةً وما تفعله الآن.",
      items: [
        ["pen", "At least 4 separate sentences", "4 جمل منفصلة على الأقل"],
        ["spark", "4 instant checks: sentences, Present Simple, Present Continuous, lesson words", "4 فحوص فورية: الجمل، والمضارع البسيط، والمضارع المستمر، وكلمات الدرس"]
      ]
    },
    quiz: {
      dEn: "10 shuffled questions on the two tenses, the words coming back and 'sign a contract' (80% to pass), plus Lesson Error Analysis.",
      d: "اختبار قصير من 10 أسئلة في الزمنين والكلمات العائدة وsign a contract (النجاح من 80%)، مع تحليل الأخطاء.",
      items: [
        ["quiz", "10 questions: 7 grammar, 2 vocabulary, 1 legal (80% passing score)", "10 أسئلة: 7 قواعد، و2 مفردات، و1 قانوني (النجاح من 80%)"],
        ["review", "Error Analysis by category", "تحليل أخطاء الدرس حسب الفئة"]
      ]
    }
  },

  /* ---------- المرحلة 1: الاسترجاع النشط (من كلمات الوحدة 1) ---------- */
  recall: [
    {
      id: "rc-0",
      promptAr: "يقيس: يعرف طول شيء أو حجمه أو درجته (فعل من الوحدة 1)",
      promptEn: "Find the size or amount of something (verb from Unit 1)",
      sentPre: "Before you buy a new carpet, you should",
      sentPost: "the floor of the room.",
      ans: ["measure"],
      hint: "m _ _ _ _ _ e (7 letters)",
      spellNoteEn: "Spelled m-e-a-s-u-r-e. It starts with 'mea' and ends with a silent e. With he / she: measures.",
      spellNote: "تُكتب m-e-a-s-u-r-e، وتبدأ بـ mea، وفي آخرها e لا تُنطق. ومع he وshe تصير measures.",
      errCat: "spelling"
    },
    {
      id: "rc-1",
      promptAr: "يستيقظ من النوم (فعل من كلمتين من الوحدة 1)",
      promptEn: "Stop sleeping and open your eyes (2 words, from Unit 1)",
      sentPre: "In Ramadan, my father has to",
      sentPost: "before the sun comes up.",
      ans: ["wake up"],
      hint: "w _ _ _ _ p (6 letters, 2 words)",
      spellNoteEn: "Two words: wake + up. With he / she: he wakes up. The past is woke up.",
      spellNote: "كلمتان: wake ثم up. ومع he وshe تصير wakes up، وماضيها woke up.",
      errCat: "spelling"
    },
    {
      id: "rc-2",
      promptAr: "يدعو شخصًا إلى بيته أو إلى مناسبة (فعل من الوحدة 1)",
      promptEn: "Ask someone to come to your home or to a party (verb from Unit 1)",
      sentPre: "We want to",
      sentPost: "all our neighbours to my brother's wedding.",
      ans: ["invite"],
      hint: "i _ _ _ _ e (6 letters)",
      spellNoteEn: "Spelled i-n-v-i-t-e, with a silent e at the end. The noun is invitation.",
      spellNote: "تُكتب i-n-v-i-t-e، وفي آخرها e لا تُنطق، والاسم منها invitation.",
      errCat: "spelling"
    },
    {
      id: "rc-3",
      promptAr: "يحيّي شخصًا حين يلقاه (فعل من الوحدة 1)",
      promptEn: "Say hello to someone when you meet them (verb from Unit 1)",
      sentPre: "In our family, the children always",
      sentPost: "their grandfather first when he comes in.",
      ans: ["greet"],
      hint: "g _ _ _ t (5 letters)",
      spellNoteEn: "Spelled g-r-e-e-t, with two e's together. The noun is greeting.",
      spellNote: "تُكتب g-r-e-e-t بحرفي e متتاليين، والاسم منها greeting.",
      errCat: "spelling"
    },
    {
      id: "rc-4",
      promptAr: "ساعات العمل: الوقت الذي يكون فيه الموظف في عمله (العبارة القانونية من الوحدة 1، كلمتان)",
      promptEn: "Legal phrase from Unit 1: the hours when you are at your job (2 words)",
      sentPre: "My job contract says that my",
      sentPost: "are from eight to four.",
      ans: ["working hours"],
      isLegal: true,
      hint: "w _ _ _ _ _ _ _ _ _ _ s (12 letters, 2 words)",
      spellNoteEn: "Two words: working (work + ing) + hours. It is always plural, and the h in hours is silent.",
      spellNote: "كلمتان: working ثم hours، وهي بالجمع دائمًا، وحرف h في hours لا يُنطق.",
      errCat: "vocab"
    }
  ],

  /* ---------- العبارة القانونية العائدة (من u1l1) ---------- */
  legalPhrase: {
    en: "sign a contract",
    headword: "contract",
    pos: "legal phrase",
    ar: "يوقّع عقدًا",
    say: "سَايْن أَ كُونْتْرَاكْت",
    ex: "When you start a new job, you sign a contract with the company.",
    exAr: "حين تبدأ وظيفة جديدة توقّع عقدًا مع الشركة.",
    tipEn: "We sign a contract WITH a person or a company. In a habit, use the Present Simple: The school signs a contract every summer. For something going on now: I'm signing the contract at the moment. The g in sign is silent.",
    tip: "نوقّع العقد مع شخص أو شركة، ولذلك نقول sign a contract with. وفي العادة نستعمل المضارع البسيط: The school signs a contract every summer. وفيما يجري الآن نستعمل المستمر: I'm signing the contract at the moment. وحرف g في sign لا يُنطق.",
    legal: true,
    oxfordSlug: "contract_1",
    wikiFiles: ["En-us-sign.ogg", "En-uk-contract (noun).ogg"],
    wikiCredit: "File:En-us-sign.ogg & File:En-uk-contract (noun).ogg · Wikimedia Commons"
  },

  /* ---------- الكلمات العائدة: الحقول الثابتة منقولة من درس كل كلمة الأول ---------- */
  vocab: [
    { en: "typical", pos: "adjective", ar: "عادي / معتاد (a typical day = يوم عادي)", say: "تِبِيكَل",
      ex: "This is a typical lunch in our family: rice, chicken and salad.", exAr: "هذا غداء معتاد في أسرتنا: أرز ودجاج وسلطة.",
      tipEn: "'a typical day' is a good way to start a habit, and the Present Simple comes after it: On a typical day, I … It goes before a noun: a typical lunch, a typical week.",
      tip: "a typical day بداية حسنة للكلام عن العادة، ويأتي بعدها المضارع البسيط: On a typical day, I … وتأتي قبل الاسم: a typical lunch وa typical week.",
      oxfordSlug: "typical",
      wikiFile: "En-us-typical.ogg",
      wikiCredit: "File:En-us-typical.ogg · Wikimedia Commons (author and licence on the file page)" },
    { en: "miss", pos: "verb", ar: "يشتاق إلى / يفتقد", say: "مِس",
      ex: "My grandmother lives in Abha, and I miss her a lot.", exAr: "تسكن جدتي في أبها، وأنا أشتاق إليها كثيرًا.",
      tipEn: "miss + person or place, with no 'to': I miss my friends. In Arabic we say «يشتاق إلى», but in English there is no 'to'. With he / she / it, add -es: she misses.",
      tip: "miss يأتي بعدها الشخص أو المكان مباشرة: I miss my friends. فنقول بالعربية «يشتاق إلى»، ولا نضع بعدها to في الإنجليزية. ومع he وshe وit نضيف es: she misses.",
      oxfordSlug: "miss_1",
      wikiFile: "En-us-miss.ogg",
      wikiCredit: "File:En-us-miss.ogg · Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "research", pos: "noun", ar: "بحث علمي / أبحاث", say: "رِسِيرْتش",
      ex: "My cousin is doing research on old Arabic books this year.", exAr: "يُجري ابن عمي بحثًا عن كتب عربية قديمة هذا العام.",
      tipEn: "We say do research, not 'make research'. It has no plural, so don't say 'a research'. Add 'on' for the subject: research on old books.",
      tip: "نقول do research ولا نقول make research، ولا جمع لها في هذا المعنى، فلا نقول a research. ونذكر الموضوع بعد on: research on old books.",
      oxfordSlug: "research_1",
      wikiFile: "En-us-research.ogg",
      wikiCredit: "File:En-us-research.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "colleague", pos: "noun", ar: "زميل / زميلة (في العمل)", say: "كُولِيق",
      ex: "My colleagues and I have coffee together every morning.", exAr: "أشرب أنا وزملائي القهوة معًا كل صباح.",
      tipEn: "colleagues are people at your job, so we say 'my colleagues' for work and 'my classmates' for school. Spelling: two l's, and the end is -gue: c-o-l-l-e-a-g-u-e.",
      tip: "colleagues هم من يعملون معك، فنقول my colleagues في العمل، وmy classmates في الدراسة. وتُكتب بحرفي l، وتنتهي بـ gue: c-o-l-l-e-a-g-u-e.",
      oxfordSlug: "colleague",
      wikiFile: "En-us-colleague.ogg",
      wikiCredit: "File:En-us-colleague.ogg · Wikimedia Commons" },
    { en: "schedule", pos: "noun", ar: "جدول (مواعيد أو أعمال)", say: "سْكِيجُول / شِيدْيُول",
      ex: "My father has a busy schedule this month, so he eats at the office.", exAr: "جدول أبي مزدحم هذا الشهر، فهو يأكل في المكتب.",
      tipEn: "Say a busy schedule or a full schedule when you have many things to do. Don't say 'a crowded schedule'. 'I have a busy schedule' takes the Present Simple, because this 'have' is a state.",
      tip: "نقول a busy schedule أو a full schedule حين تكثر الأعمال، ولا نقول a crowded schedule. ونقول I have a busy schedule بالمضارع البسيط، لأن have هنا حالة.",
      oxfordSlug: "schedule_1",
      wikiFile: "En-us-schedule.ogg",
      wikiCredit: "File:En-us-schedule.ogg · Wikimedia Commons" },
    { en: "deadline", pos: "noun", ar: "الموعد النهائي (لتسليم عمل)", say: "دِدْلَايْن",
      ex: "I always write my essays early, because I want to meet the deadline.", exAr: "أكتب مقالاتي مبكرًا دائمًا، لأنني أريد أن أسلّم في الموعد النهائي.",
      tipEn: "meet a deadline = finish on time. miss a deadline = finish too late. Here 'miss' has its second meaning: not 'feel sad', but 'be too late for'.",
      tip: "meet a deadline تعني أن تنتهي في الموعد، وmiss a deadline أن يفوتك الموعد. وmiss هنا بمعناها الثاني: يفوته الشيء، لا يشتاق إليه.",
      oxfordSlug: "deadline",
      wikiFile: "LL-Q1860 (eng)-Back ache-deadline.wav",
      wikiCredit: "File:LL-Q1860 (eng)-Back ache-deadline.wav · Lingua Libre (Back ache) / Wikimedia Commons" }
  ],

  vocabGaps: [
    { s: "On a ___ morning, I leave home at seven and get to class at eight.", opts: ["typical", "deadline", "colleague"], a: 0,
      whyEn: "We need an adjective before 'morning', and 'typical' means normal for that person. 'deadline' and 'colleague' are nouns, so they don't describe a morning.",
      why: "نحتاج صفة قبل morning، وtypical تعني المعتاد عند الشخص، أما deadline وcolleague فاسمان لا يصفان الصباح.", errCat: "vocab" },
    { s: "My son is at a university in Canada, and I ___ him every day.", opts: ["research", "miss", "schedule"], a: 1,
      whyEn: "The son is far away, so the parent feels sad: that is 'miss'. You can't research or schedule your son every day.",
      why: "الابن بعيد فيحزن أبوه لفراقه، وهذا معنى miss، ولا يصح هنا research ولا schedule.", errCat: "vocab" },
    { s: "My professor does ___ on the water in the desert.", opts: ["colleague", "deadline", "research"], a: 2,
      whyEn: "The collocation is 'do research on' something. A colleague is a person and a deadline is a time, so we can't 'do' them on a subject.",
      why: "المتلازمة do research on، أما colleague فشخص وdeadline موعد، فلا يصحان مع do on.", errCat: "vocab" },
    { s: "Yousef works in the same office as me. He is my ___.", opts: ["colleague", "research", "schedule"], a: 0,
      whyEn: "A person who works in the same place as you is your 'colleague'. research and schedule are not people.",
      why: "من يعمل معك في المكان نفسه colleague، أما research وschedule فليسا شخصين.", errCat: "vocab" },
    { s: "My ___ is full this week: I have three exams and a visit to the dentist.", opts: ["typical", "schedule", "research"], a: 1,
      whyEn: "A list of exams and visits with their times is a 'schedule', and we say a schedule is full. 'typical' is an adjective, and research is not a list of things to do.",
      why: "قائمة الاختبارات والمواعيد جدول schedule، ونقول إن الجدول ممتلئ. أما typical فصفة، وresearch ليس قائمة أعمال.", errCat: "vocab" },
    { s: "I can't go out tonight. The ___ for my project is tomorrow morning.", opts: ["colleague", "research", "deadline"], a: 2,
      whyEn: "The speaker has to finish by tomorrow morning: the last time to finish work is the 'deadline'. A colleague is a person, and research isn't a time.",
      why: "على المتحدث أن ينتهي قبل صباح الغد، وآخر وقت لإنهاء العمل deadline. أما colleague فشخص، وresearch ليس وقتًا.", errCat: "vocab" },
    { s: "We like this flat, so we want to ___ with the owner today.", opts: ["sign a contract", "miss", "research"], a: 0,
      whyEn: "To take a flat, you and the owner agree in writing: you sign a contract with the owner. 'miss' and 'research' don't go with 'with the owner' here.",
      why: "لتأخذ الشقة تتفق مع مالكها كتابةً، أي توقّع عقدًا معه: sign a contract with. أما miss وresearch فلا يناسبان with the owner هنا.", errCat: "vocab" },
    { s: "Faris is new at the bank, so his ___ are showing him the office today.", opts: ["deadlines", "colleagues", "schedules"], a: 1,
      whyEn: "Only people can show someone an office. 'colleagues' are the people who work with Faris. Deadlines and schedules are not people.",
      why: "لا يُري المكتب إلا أشخاص، وcolleagues هم من يعملون مع فارس، أما deadlines وschedules فليسا أشخاصًا.", errCat: "vocab" }
  ],

  /* ---------- المرحلة 3: بطاقات المراجعة ---------- */
  gCards: [
    {
      tEn: "Habit or Going On Now?",
      t: "عادة أم شيء يجري الآن؟",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Habit or Going On Now?</span><small>عادة أم شيء يجري الآن؟</small></h2>' +
        '<p class="en-p" dir="ltr">You know both tenses from Unit 1, so nothing here is new. Today we put them side by side. Ask one question about the verb: is it a habit or a fact, or is it going on now or these days?</p>' + TL_SVG +
        '<div class="xbox"><span class="xtag s" dir="ltr">Present Simple · habits and facts</span><p class="xen">My grandfather <span class="hs">drinks</span> tea after every meal. The bank <span class="hs">closes</span> at four.</p>' +
        '<span class="xtag c" dir="ltr">Present Continuous · now and these days</span><p class="xen">Look, my grandfather <span class="hc">is drinking</span> his tea in the garden. This month, my sister <span class="hc">is learning</span> to drive.</p></div>' +
        '<div class="tip" dir="ltr"><p>The verb is the same, but the tense changes the meaning. <b>He drinks tea</b> tells us about his habit. <b>He is drinking tea</b> tells us what is going on at this moment.</p></div>',
      arHtml:
        '<p>تعرف الزمنين من الوحدة 1، فلا جديد هنا، وإنما نضعهما اليوم جنبًا إلى جنب. واسأل عن الفعل سؤالًا واحدًا: أهو عادة أو حقيقة، أم شيء يجري الآن أو هذه الأيام؟</p>' +
        '<p><b>المضارع البسيط</b> للعادة والحقيقة: <bdi class="en">My grandfather drinks tea after every meal.</bdi></p>' +
        '<p><b>المضارع المستمر</b> لما يجري الآن أو هذه الأيام: <bdi class="en">This month, my sister is learning to drive.</bdi></p>' +
        '<p>فالفعل واحد، والزمن يغيّر المعنى: <bdi class="en">He drinks tea</bdi> تخبرنا بعادته، و<bdi class="en">He is drinking tea</bdi> تخبرنا بما يجري في هذه اللحظة.</p>'
    },
    {
      tEn: "Signal Words Help, but They Don't Decide",
      t: "كلمات الإشارة تساعد ولا تقطع",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Signal Words Help, but They Don\'t Decide</span><small>كلمات الإشارة تساعد ولا تقطع</small></h2>' +
        '<div class="sigs">' +
          '<div class="sig s"><h3 dir="ltr">usually, often, every day<small class="sig-ar">غالبًا مع البسيط</small></h3><ul><li>We usually eat at home.</li><li>My aunt visits us every Friday.</li></ul></div>' +
          '<div class="sig c"><h3 dir="ltr">now, at the moment, this week<small class="sig-ar">غالبًا مع المستمر</small></h3><ul><li>The children are playing outside now.</li><li>At the moment, Ali is washing the car.</li></ul></div>' +
        '</div>' +
        '<div class="tip" dir="ltr"><p><b>now</b> doesn\'t decide alone. A state verb stays simple with now, and we also say <b>live</b> in the simple with now: <b>I want some water now.</b> <b>My family lives in Taif now.</b></p></div>' +
        '<p class="en-p" dir="ltr">Words like <b>always, usually, often, sometimes, never</b> go before the main verb, but after <b>am / is / are</b>:</p>' +
        '<div class="pairs"><span class="yes">She often helps me.</span><span class="no">She helps often me.</span></div>' +
        '<div class="pairs"><span class="yes">He is always hungry.</span></div>',
      arHtml:
        '<p>كلمات مثل <bdi class="en">usually</bdi> و<bdi class="en">every day</bdi> تأتي غالبًا مع البسيط، وكلمات مثل <bdi class="en">now</bdi> و<bdi class="en">at the moment</bdi> تأتي غالبًا مع المستمر في فعل الحدث.</p>' +
        '<p>لكن <bdi class="en">now</bdi> لا تقطع وحدها: ففعل الحالة يبقى بسيطًا معها (<bdi class="en">I want some water now.</bdi>)، ونقول <bdi class="en">live</bdi> بالبسيط معها أيضًا (<bdi class="en">My family lives in Taif now.</bdi>).</p>' +
        '<p>وكلمات التكرار (<bdi class="en">always, usually, often, sometimes, never</bdi>) تأتي قبل الفعل الأساسي، وبعد <bdi class="en">am / is / are</bdi>: <bdi class="en">She often helps me.</bdi> و<bdi class="en">He is always hungry.</bdi></p>'
    },
    {
      tEn: "Two Families: do / does and am / is / are",
      t: "عائلتان: do / does وam / is / are",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Two Families: do / does and am / is / are</span><small>لكل زمن مساعده</small></h2>' +
        '<div class="tbl"><table><thead><tr><th></th><th>Present Simple</th><th>Present Continuous</th></tr></thead><tbody>' +
          '<tr><td>Positive</td><td>Sara <span class="hs">teaches</span>.</td><td>Sara <span class="hc">is teaching</span>.</td></tr>' +
          '<tr><td>Negative</td><td>Sara <span class="hs">doesn\'t teach</span>.</td><td>Sara <span class="hc">isn\'t teaching</span>.</td></tr>' +
          '<tr><td>Question</td><td><span class="hs">Does</span> Sara <span class="hs">teach</span>?</td><td><span class="hc">Is</span> Sara <span class="hc">teaching</span>?</td></tr>' +
          '<tr><td>I / you / we / they</td><td>I <span class="hs">don\'t teach</span>.</td><td>We <span class="hc">aren\'t teaching</span>.</td></tr>' +
        '</tbody></table></div>' +
        '<div class="tip" dir="ltr"><p>Don\'t mix the two families. <b>do / does + base verb</b>, and <b>am / is / are + verb-ing</b>. The -s goes on the verb only in a positive sentence with he, she or it: she teaches, but she doesn\'t teach.</p></div>' +
        '<p class="en-p" dir="ltr">With a noun or an adjective, we use <b>be</b> alone, and in the past it is <b>was / were</b>: <b>She is a pilot. Are they ready? We were tired.</b></p>',
      arHtml:
        '<p>لكل زمن مساعده، فلا تخلط بينهما: <bdi class="en">do / does</bdi> مع الفعل الأصلي في البسيط، و<bdi class="en">am / is / are</bdi> مع الفعل و<bdi class="en">ing</bdi> في المستمر.</p>' +
        '<p>فالسؤال <bdi class="en">Does Sara teach?</bdi> في البسيط، و<bdi class="en">Is Sara teaching?</bdi> في المستمر، والنفي <bdi class="en">doesn\'t teach</bdi> و<bdi class="en">isn\'t teaching</bdi>.</p>' +
        '<p>وحرف <bdi class="en">s</bdi> يلحق الفعل في الإثبات وحده مع <bdi class="en">he</bdi> و<bdi class="en">she</bdi> و<bdi class="en">it</bdi>: <bdi class="en">she teaches</bdi>، ولكن <bdi class="en">she doesn\'t teach</bdi>.</p>' +
        '<p>ومع الاسم والصفة نستعمل <bdi class="en">be</bdi> وحدها، وفي الماضي <bdi class="en">was / were</bdi>: <bdi class="en">She is a pilot. Are they ready? We were tired.</bdi></p>'
    },
    {
      tEn: "State Verbs and -ing Spelling",
      t: "أفعال الحالة وإملاء ing",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">State Verbs and -ing Spelling</span><small>أفعال الحالة وإملاء ing</small></h2>' +
        '<p class="en-p" dir="ltr">State verbs like <b>know, want, need</b> and <b>prefer</b> stay simple, even at this moment:</p>' +
        '<div class="pairs"><span class="yes">I prefer the window seat.</span><span class="no">I am preferring the window seat.</span></div>' +
        '<div class="tip" dir="ltr"><p>You also know two verbs with two meanings from Unit 1. <b>think</b> takes -ing when it means "use your mind": I\'m thinking about my trip. <b>have</b> takes -ing when it means "eat": We\'re having dinner.</p></div>' +
        '<h3 class="bi-h"><span class="en" dir="ltr">Spelling verb + ing</span><small>إملاء الفعل مع ing</small></h3>' +
        '<ul class="spell" dir="ltr">' +
          '<li><b>y</b> stays: add -ing<span class="s-en">study → studying</span></li>' +
          '<li>silent <b>e</b> goes: drop it, then add -ing<span class="s-en">write → writing</span></li>' +
          '<li>short vowel + one consonant: write the consonant twice<span class="s-en">sit → sitting · run → running</span></li>' +
        '</ul>',
      arHtml:
        '<p>أفعال الحالة مثل <bdi class="en">know</bdi> و<bdi class="en">want</bdi> و<bdi class="en">need</bdi> و<bdi class="en">prefer</bdi> تبقى بسيطة حتى في هذه اللحظة: <bdi class="en">I prefer the window seat.</bdi></p>' +
        '<p>وتعرف من الوحدة 1 فعلين لهما معنيان: <bdi class="en">think</bdi> تأخذ <bdi class="en">ing</bdi> إذا كانت بمعنى «يفكر الآن»، و<bdi class="en">have</bdi> تأخذها إذا كانت بمعنى «يأكل».</p>' +
        '<p>وفي الإملاء: تبقى <bdi class="en">y</bdi> (<bdi class="en">studying</bdi>)، وتسقط <bdi class="en">e</bdi> الصامتة (<bdi class="en">writing</bdi>)، ويتضاعف الحرف الأخير بعد صوت قصير (<bdi class="en">sitting, running</bdi>).</p>'
    },
    {
      tEn: "Common Arab Mistakes",
      t: "أخطاء العرب الشائعة",
      bilingual: true,
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Common Arab Mistakes</span><small>أخطاء يقع فيها كثير من العرب في المضارع</small></h2>' +
        '<ul class="mist">' +
          '<li><span class="no">I am walk to the office every morning.</span><span class="yes">I walk to the office every morning.</span><p class="en-m" dir="ltr">This is a habit, so it takes the Present Simple alone. Don\'t put <b>am</b> before a base verb.</p><p>هذه عادة، فتأتي بالمضارع البسيط وحده، ولا نضع <bdi class="en">am</bdi> قبل الفعل الأصلي.</p></li>' +
          '<li><span class="no">Is your uncle work on Saturdays?</span><span class="yes">Does your uncle work on Saturdays?</span><p class="en-m" dir="ltr">A question about a habit starts with <b>Do</b> or <b>Does</b>, and the base verb follows.</p><p>السؤال عن العادة يبدأ بـ <bdi class="en">Do</bdi> أو <bdi class="en">Does</bdi>، وبعدها الفعل الأصلي.</p></li>' +
          '<li><span class="no">My brother don\'t drink milk.</span><span class="yes">My brother doesn\'t drink milk.</span><p class="en-m" dir="ltr">With he, she, it or one person, the negative is <b>doesn\'t</b>.</p><p>مع <bdi class="en">he</bdi> و<bdi class="en">she</bdi> و<bdi class="en">it</bdi> والمفرد يكون النفي <bdi class="en">doesn\'t</bdi>.</p></li>' +
          '<li><span class="no">I am knowing your cousin.</span><span class="yes">I know your cousin.</span><p class="en-m" dir="ltr"><b>know</b> is a state verb, so it takes no -ing.</p><p><bdi class="en">know</bdi> فعل حالة، فلا يأخذ <bdi class="en">ing</bdi>.</p></li>' +
        '</ul>'
    },
    {
      tEn: "Summary",
      t: "الخلاصة",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Quick Summary</span><small>الخلاصة</small></h2>' +
        '<div class="sumc" dir="ltr"><h3>Simple or Continuous? · البسيط أم المستمر؟</h3>' +
          '<p><b>He works. · He doesn\'t work. · Does he work?</b><span>Present Simple: habits and facts</span></p>' +
          '<p><b>He is working. · He isn\'t working. · Is he working?</b><span>Present Continuous: now and these days</span></p>' +
          '<p><b>usually · every day · now · at the moment</b><span>Signal words help, but they don\'t decide</span></p>' +
          '<p><b>know · want · need · prefer</b><span>State verbs stay simple, even now</span></p>' +
          '<p><b>She often helps. · He is often late.</b><span>Before the main verb, after am / is / are</span></p>' +
          '<p><b>studying · writing · sitting · running</b><span>y stays, e goes, the consonant doubles</span></p>' +
        '</div>' +
        '<p class="en-p" dir="ltr">Now let\'s practise: 16 guided exercises with brand-new sentences.</p>',
      arHtml:
        '<p><b>البسيط</b> للعادة والحقيقة، و<b>المستمر</b> لما يجري الآن أو هذه الأيام.</p>' +
        '<p><b>المساعد:</b> <bdi class="en">do / does</bdi> مع الفعل الأصلي، و<bdi class="en">am / is / are</bdi> مع <bdi class="en">ing</bdi>.</p>' +
        '<p><b>كلمات الإشارة</b> تساعد ولا تقطع، و<b>أفعال الحالة</b> تبقى بسيطة حتى مع <bdi class="en">now</bdi>.</p>' +
        '<p><b>كلمات التكرار</b> قبل الفعل الأساسي وبعد <bdi class="en">am / is / are</bdi>.</p>' +
        '<p>والآن نتدرّب: 16 تمرينًا موجّهًا بجمل جديدة.</p>'
    }
  ],

  /* ---------- المرحلة 3: التمارين ---------- */
  gA: [
    { s: "Sorry, I can't answer the phone. I ___ dinner for the children.", opts: ["make", "am making"], a: 1,
      whyEn: "'I can't answer the phone' shows that the action is going on at this moment, and 'make' is an action verb here, so we need am + verb-ing.",
      why: "جملة I can't answer the phone تثبت أن الفعل جارٍ في هذه اللحظة، وmake فعل حدث هنا، فنحتاج am مع الفعل وing.", errCat: "tense" },
    { s: "I ___ the answer to this question, so I can help you.", opts: ["am knowing", "know"], a: 1,
      whyEn: "'know' is a state verb, so it stays in the Present Simple, even at this moment. It never takes -ing.",
      why: "know فعل حالة، فيبقى في المضارع البسيط حتى في هذه اللحظة، ولا يأخذ ing.", errCat: "stative" },
    { s: "Laila is very good ___ maths.", opts: ["at", "in"], a: 0,
      whyEn: "The adjective 'good' takes 'at' before a subject or a skill: good at maths, good at football. 'in' doesn't go with 'good' here.",
      why: "الصفة good يأتي بعدها at قبل المادة أو المهارة: good at maths. ولا تأتي معها in هنا.", errCat: "articles_prep" },
    { s: "My cousin is ___ scientist at a big hospital in Dammam.", opts: ["an", "a"], a: 1,
      whyEn: "A job after 'is' needs a or an. 'scientist' starts with a consonant sound, so we use 'a'. We use 'an' before a vowel sound.",
      why: "المهنة بعد is تحتاج a أو an، وscientist تبدأ بصوت ساكن فنستعمل a، أما an فقبل الصوت المتحرك.", errCat: "articles_prep" }
  ],

  gB: [
    { s: "She is go to the gym every Monday.", ok: false, fix: "She goes to the gym every Monday.",
      whyEn: "'every Monday' shows a habit, so we use the Present Simple: she goes. We don't put 'is' before a base verb.",
      why: "every Monday تدل هنا على عادة، فنستعمل المضارع البسيط: she goes، ولا نضع is قبل الفعل الأصلي.", errCat: "be_verb" },
    { s: "My uncle don't like fish.", ok: false, fix: "My uncle doesn't like fish.",
      whyEn: "'My uncle' is one person, like 'he', so the negative is 'doesn't', and the base verb follows.",
      why: "My uncle مفرد مثل he، فالنفي doesn't وبعدها الفعل الأصلي.", errCat: "agreement" },
    { s: "I need a glass of water now.", ok: true,
      whyEn: "Correct: 'need' is a state verb, so it stays simple, even with 'now'. The word 'now' doesn't decide the tense alone.",
      why: "صحيحة: need فعل حالة فيبقى بسيطًا حتى مع now، فكلمة now لا تقرر الزمن وحدها.", errCat: "stative" },
    { s: "My parents was at home last night.", ok: false, fix: "My parents were at home last night.",
      whyEn: "'last night' shows the past, and 'My parents' is plural, so we use 'were', not 'was'.",
      why: "last night تدل على الماضي، وMy parents جمع، فنستعمل were لا was.", errCat: "agreement" }
  ],

  gC: [
    { pre: "Shh! Hamad", verb: "study", post: "for his exam in the next room.", ans: ["is studying"],
      whyEn: "'Shh!' shows that the action is going on now, so we need is + verb-ing. Spelling: the y stays: study → studying.",
      why: "Shh! تثبت أن الفعل جارٍ الآن، فنحتاج is مع الفعل وing. وفي الإملاء تبقى y: study ← studying.", errCat: "spelling" },
    { pre: "Look out of the window! Two boys", verb: "sit", post: "on our car.", ans: ["are sitting"],
      whyEn: "'Look out of the window!' shows that it is going on now, so we need are + verb-ing. Spelling: sit has a short vowel + one consonant, so the t doubles: sitting.",
      why: "Look out of the window! تثبت أنه يجري الآن، فنحتاج are مع الفعل وing. وفي الإملاء sit فيها صوت قصير ثم حرف واحد، فتتضاعف t: sitting.", errCat: "spelling" },
    { pre: "My uncle", verb: "not / have · Present Simple", post: "people over on weekdays, because he gets home late.", ans: ["doesn't have", "does not have"],
      whyEn: "A Present Simple negative with one person is doesn't + base verb. The -s goes on 'does', so the verb stays 'have', not 'has'.",
      why: "نفي المضارع البسيط مع المفرد doesn't مع الفعل الأصلي، فالـ s انتقلت إلى does، ويبقى الفعل have لا has.", errCat: "agreement" },
    { pre: "Last night, the roads near the river", verb: "not / be · Past Simple", post: "safe because of the rain.", ans: ["weren't", "were not"],
      whyEn: "'Last night' shows the past, and 'the roads' is plural, so we use were + not. be doesn't take did.",
      why: "Last night تدل على الماضي، وthe roads جمع، فنستعمل were مع not، وbe لا يأتي مع did.", errCat: "be_verb" }
  ],

  gD: [
    { chips: ["orders a takeaway", "usually", "on Thursdays.", "My brother"], ans: "My brother usually orders a takeaway on Thursdays.",
      whyEn: "'usually' goes before the main verb: My brother + usually + orders. The day comes at the end.",
      why: "usually تأتي قبل الفعل الأساسي: My brother ثم usually ثم orders، واليوم في آخر الجملة.", errCat: "word_order" },
    { chips: ["are you", "this week?", "What", "reading"], ans: "What are you reading this week?",
      whyEn: "A Present Continuous question: What + are + subject (you) + verb-ing. The time comes at the end.",
      why: "سؤال في المضارع المستمر: What ثم are ثم الفاعل you ثم الفعل وing، والوقت في آخر الجملة.", errCat: "word_order" },
    { chips: ["drive", "Does", "to university?", "your sister"], ans: "Does your sister drive to university?",
      whyEn: "A Present Simple question: Does + subject (your sister) + base verb. The verb takes no -s after Does.",
      why: "سؤال في المضارع البسيط: Does ثم الفاعل your sister ثم الفعل الأصلي، ولا يأخذ الفعل s بعد Does.", errCat: "word_order" },
    { chips: ["at the library", "your friends", "Were", "yesterday?"], ans: "Were your friends at the library yesterday?",
      whyEn: "A question with be has no 'did': Were + subject (your friends) + place + time. 'your friends' is plural, so we use 'Were'.",
      why: "السؤال بـ be لا يأتي معه did: Were ثم الفاعل your friends ثم المكان ثم الزمن، وyour friends جمع فنستعمل Were.", errCat: "word_order" }
  ],

  /* ---------- المرحلة 4: القراءة، وقبلها قراءة الطلاقة لإيميل نور في u1l1 ---------- */
  reading: {
    title: "News from Jeddah",
    from: "Noor",
    fromMeta: "Noor · Scientist, Jeddah",
    to: "Reem",
    art: JEDDAH_SVG,
    fluencyFrom: "u1l1",
    lg1: "Simple: habits, facts and finished events",
    lg2: "Continuous: now and this week",
    lg3: "Signal word",
    hlLabel: "Highlight the tenses",
    targetSeconds: 110,
    introEn: "You met Noor in Unit 1: she wrote to her friend Reem from a research station in Antarctica. Now she is writing to Reem again.",
    intro: "عرفت نور في الوحدة 1، وقد كتبت إلى صديقتها ريم من محطة أبحاث في القارة القطبية. وهي الآن تكتب إليها مرة أخرى.",
    // <<s:..>> كل بسيط · <<c:..>> كل مستمر · <<t:..>> كلمة إشارة
    // {word|key} كلمة من كلمات الدرس السبع وحدها · [[text|معنى]] كلمة مساعدة، ثلاث على الأكثر
    paras: [
      "Hi Reem,",
      "I <<s:came>> home to Jeddah <<t:last month>>, and <<t:now>> I <<s:work>> in a [[lab|مختبر]] at a university here. Life <<s:feels>> a little strange after Antarctica. The sun <<s:goes>> down <<t:every evening>>, and I <<s:sleep>> very well!",
      "On a {typical} day, I still <<s:wake up>> early, and I <<t:usually>> <<s:get>> to the lab before eight. I <<s:do>> {research} with four {colleagues|colleague}. They <<s:are>> young scientists, and they <<s:know>> a lot about the sea. We <<t:often>> <<s:order>> a takeaway for lunch. I <<s:have>> a busy {schedule}, but I <<s:like>> it.",
      "Our lab <<s:{signs a contract|sign a contract}>> with a [[research centre|مركز أبحاث]] <<t:every year>>. <<t:This week>>, I<<c:'m reading>> the new contract, and I<<c:'m writing>> a report about our [[penguin|بطريق]] data. The {deadline} <<s:is>> on Thursday, so I<<c:'m staying>> at the lab late <<t:these days>>. I <<s:need>> more time! <<t:At the moment>>, two colleagues <<c:are checking>> my numbers, and I<<c:'m drinking>> a big coffee.",
      "I {miss} the team in Antarctica. I <<t:often>> <<s:think>> about Kenji's dinners and Ana's card games. At home, my parents <<s:have people over>> <<t:every Friday>>, and the guests always <<s:ask>> about the penguins.",
      "What about you? What <<c:are you doing>> <<t:these days>>? <<s:Do you have>> any free time this month? I <<s:want>> to see you soon!",
      "Best wishes,<br>Noor"
    ],
    predict: {
      qEn: "Before you read: Noor wrote her last email to Reem from Antarctica. Now she is writing to Reem again. What do you think this new email is mainly about?",
      q: "توقّع قبل القراءة: كتبت نور إيميلها السابق إلى ريم من القارة القطبية، وها هي تكتب إليها مرة أخرى؛ عمّ تتوقع أن يكون هذا الإيميل في أغلبه؟",
      optsEn: ["A new trip to Japan with Kenji", "Her life and work at home now", "A problem with her flight"],
      opts: ["رحلة جديدة إلى اليابان مع كينجي", "حياتها وعملها في بلدها الآن", "مشكلة في رحلتها الجوية"],
      a: 1,
      revealEn: "Noor is back at home. She tells Reem about her normal days and about this busy week.",
      reveal: "عادت نور إلى بلدها، وهي تحدّث ريم عن أيامها المعتادة وعن هذا الأسبوع المزدحم."
    },
    insight: {
      titleEn: "How Noor Uses the Two Tenses",
      titleAr: "كيف تستعمل نور الزمنين",
      l1En: "Noor uses the Present Simple for facts and for her normal life. State verbs stay simple, even in a busy week:",
      ex1: "They know a lot about the sea · I have a busy schedule · I need more time",
      l2En: "She uses the Present Continuous for what is going on at this moment:",
      ex2: "two colleagues are checking my numbers · I'm drinking a big coffee",
      arHtml: '<p>لاحظ أن نور تستعمل <b style="color:var(--accent-ink)">المضارع البسيط</b> للحقائق ولحياتها المعتادة، وأن فعل الحالة يبقى بسيطًا (<bdi class="en">know, need</bdi>). وتستعمل <b style="color:var(--accent-ink)">المضارع المستمر</b> لما يجري في هذه اللحظة (<bdi class="en">are checking, \'m drinking</bdi>). وستجد في الإيميل فعلًا واحدًا في الماضي البسيط، لأنه حدث انتهى.</p>'
    },
    questions: [
      { q: "Where does Noor work now?", opts: ["At a research station", "In a lab at a university", "In a hospital in Jeddah"], a: 1,
        ev: "I came home to Jeddah last month, and now I work in a lab at a university here.",
        whyEn: "'now I work in a lab at a university here' gives the answer. The research station was her old job, in her first email.",
        why: "الجواب في now I work in a lab at a university here، أما محطة الأبحاث فكانت عملها السابق في إيميلها الأول.", errCat: "reading" },
      { tf: true, q: "Noor sleeps badly in Jeddah.", a: false,
        ev: "The sun goes down every evening, and I sleep very well!",
        whyEn: "False: she writes 'I sleep very well'. In Antarctica she didn't sleep well, because the sun stayed up, but in Jeddah it goes down every evening.",
        why: "خطأ؛ تكتب I sleep very well. لم تكن تنام جيدًا في القارة القطبية لأن الشمس لا تغيب، أما في جدة فتغيب كل مساء.", errCat: "reading" },
      { q: "What does Noor still do?", opts: ["She wakes up early.", "She counts penguins in the morning.", "She wears a sleep mask."], a: 0,
        ev: "On a typical day, I still wake up early, and I usually get to the lab before eight.",
        whyEn: "'still' means that it did not change: she woke up early in Antarctica, and she wakes up early in Jeddah too.",
        why: "still تعني أن الشيء لم يتغير: كانت تستيقظ مبكرًا في القارة القطبية، وما زالت تفعل في جدة.", errCat: "reading" },
      { q: "How many colleagues does Noor do research with?", opts: ["Twelve", "Two", "Four"], a: 2,
        ev: "I do research with four colleagues.",
        whyEn: "She writes 'four colleagues'. Twelve was her team in Antarctica, and two are the colleagues who are checking her numbers.",
        why: "تكتب four colleagues. أما الاثنا عشر ففريقها في القارة القطبية، والاثنان هما من يراجعان أرقامها الآن.", errCat: "reading" },
      { q: "Which of these is going on this week?", opts: ["Noor is teaching a class.", "Noor is reading the new contract.", "Noor is meeting Kenji and Ana."], a: 1,
        ev: "This week, I'm reading the new contract, and I'm writing a report about our penguin data.",
        whyEn: "'This week' with 'I'm reading' tells us what is going on these days. Noor doesn't write about a class, and she only thinks about Kenji and Ana.",
        why: "This week مع I'm reading تخبرنا بما يجري هذه الأيام. ولا تذكر نور درسًا تعلّمه، وهي تفكر في كينجي وآنا فحسب.", errCat: "reading" },
      { q: "What does the lab do every year?", opts: ["It sends a team to Antarctica.", "It writes a report for Reem.", "It signs a contract with a research centre."], a: 2,
        ev: "Our lab signs a contract with a research centre every year.",
        whyEn: "'every year' shows a habit of the lab, and the sentence tells us what it is: it signs a contract with a research centre.",
        why: "every year تدل على عادة المختبر، وتذكر الجملة هذه العادة: يوقّع عقدًا مع مركز أبحاث.", errCat: "reading" },
      { q: "Why is Noor staying at the lab late these days?", opts: ["Her deadline is on Thursday.", "Her home is far from the lab.", "Her colleagues start work late."], a: 0,
        ev: "The deadline is on Thursday, so I'm staying at the lab late these days.",
        whyEn: "'so' gives the result: the deadline is close, and that is why she is staying late.",
        why: "so تدل على النتيجة: الموعد النهائي قريب، ولذلك تبقى في المختبر إلى وقت متأخر.", errCat: "reading" },
      { q: "What does Noor often think about?", opts: ["The food at her university", "Kenji's dinners and Ana's card games", "Her first day in Antarctica"], a: 1,
        ev: "I often think about Kenji's dinners and Ana's card games.",
        whyEn: "She misses the team, and the next sentence names what she thinks about: Kenji's dinners and Ana's card games.",
        why: "تشتاق إلى الفريق، وتذكر الجملة التالية ما تفكر فيه: عشاء كينجي وألعاب الورق عند آنا.", errCat: "reading" }
    ]
  },

  /* ---------- المرحلة 5: الكتابة ---------- */
  writing: {
    taskEn: "Write about your week in at least 4 separate sentences. First, say what you usually do on a typical day, in the Present Simple (On a typical day, I … · I usually …). Then say what you are doing this week or at the moment, in the Present Continuous (This week, I'm …). Use at least 2 words from today's lesson. End each sentence with a period.",
    task: "اكتب عن أسبوعك في 4 جمل منفصلة على الأقل. اذكر أولًا ما تفعله عادةً في يومك المعتاد بالمضارع البسيط (On a typical day, I … أو I usually …)، ثم اذكر ما تفعله هذا الأسبوع أو في هذه اللحظة بالمضارع المستمر (This week, I'm …). واستعمل كلمتين على الأقل من كلمات الدرس، وأنهِ كل جملة بنقطة.",
    placeholder: "On a typical day, I …\nThis week, I'm …",
    checks: [
      { k: "sentences", tEn: "At least 4 separate sentences (end each with . or ?)", t: "4 جمل منفصلة على الأقل (تنتهي كل جملة بنقطة أو علامة استفهام)",
        ok: function(a, text){ return a.sentences >= 4 && !a.runOn; } },
      { k: "simple", tEn: "The Present Simple for what you usually do, with no 'I am work', 'She is go' or 'He don't'", t: "المضارع البسيط لما تفعله عادةً، دون I am work أو She is go أو He don't", ex: "I usually leave home at seven.",
        ok: function(a, text){ return wSimple(text) && !wBadForms(text); } },
      { k: "continuous", tEn: "The Present Continuous for this week or this moment, with no 'I am knowing'", t: "المضارع المستمر لما يجري هذا الأسبوع أو في هذه اللحظة، دون I am knowing", ex: "This week, I'm preparing for an exam.",
        ok: function(a, text){ return wCont(text) >= 1 && !wBadForms(text); } },
      { k: "vocab", tEn: "At least 2 words or phrases from today's lesson", t: "كلمتان أو عبارتان على الأقل من درس اليوم", ex: "typical · miss · research · colleague · schedule · deadline · sign a contract",
        ok: function(a, text){ var s = wNorm(text); return W_VOCAB.filter(function(re){ return re.test(s); }).length >= 2; } }
    ],
    modelMarked: "On a {typical} day, I <<s:leave>> home at seven and <<s:go>> to college by bus. I <<t:usually>> <<s:study>> in the library after class. <<t:This week>>, my {schedule} <<s:is>> different. I<<c:'m preparing>> for an exam, so I<<c:'m staying>> at home and <<c:reading>> my notes. My brother <<c:is helping>> me, and I <<s:need>> his help.",
    model: "On a typical day, I leave home at seven and go to college by bus. I usually study in the library after class. This week, my schedule is different. I'm preparing for an exam, so I'm staying at home and reading my notes. My brother is helping me, and I need his help.",
    legendEn: "Light blue = Simple: habits and facts · Terracotta = Continuous: now and this week · Dashed = signal words",
    legendAr: "الأزرق الفاتح للبسيط (العادة والحقيقة)، والطوبي للمستمر (الآن وهذا الأسبوع)، والإطار المنقّط لكلمات الإشارة.",
    acceptExamples: [
      "I work in a small shop near my house. My colleagues are very kind. On a typical day, we open at nine. This week, I am working at night. I miss my family.",
      "My sister doesn't like mornings, but she always gets up early. This week she's writing a long report. The deadline is on Sunday. Her schedule is very busy, so we aren't seeing her much.",
      "We usually have lunch at two. I don’t cook, because my mother prefers her own food. Today my father is cooking. He’s doing research on Saudi food this month, and he needs a typical recipe.",
      "Do you know my friend Ali? He lives in Riyadh and he studies law. This week, he's meeting a deadline, so he's not sleeping much. I miss him. What are you doing this week?",
      "I am a student at King Saud University. I go to class every day. At the moment, I'm reading a book about law. My teacher says that we need to sign a contract with care. My schedule is full."
    ]
  },

  /* ---------- «اسأل المعلم» ---------- */
  askChips: [
    "كيف أعرف أن الفعل يحتاج المضارع البسيط أو المستمر؟",
    "لماذا لا تكفي كلمة now لتحديد الزمن؟",
    "متى أستعمل do وdoes ومتى أستعمل am وis وare؟",
    "لماذا نقول I know ولا نقول I am knowing؟"
  ],

  /* ---------- المرحلة 6: الاختبار القصير ---------- */
  quiz: [
    { s: "Please don't ring the bell. My grandfather ___ right now.", opts: ["sleeps", "is sleeping", "is sleep"], a: 1, tag: "Grammar · قواعد",
      whyEn: "'Please don't ring the bell' shows that the action is going on at this moment, and 'sleep' is a long action, so we use is + verb-ing. 'is sleep' has no -ing.",
      why: "جملة Please don't ring the bell تثبت أن الفعل جارٍ في هذه اللحظة، وsleep حدث طويل، فنستعمل is مع الفعل وing، أما is sleep فبلا ing.", errCat: "tense" },
    { s: "Which sentence is correct?", opts: ["Is your aunt teach on Fridays?", "Does your aunt teaches on Fridays?", "Does your aunt teach on Fridays?"], a: 2, tag: "Grammar · قواعد",
      whyEn: "A question about a habit uses Does + subject + base verb. 'Is' doesn't go with a base verb, and the verb takes no -s after 'Does'.",
      why: "السؤال عن العادة Does ثم الفاعل ثم الفعل الأصلي، فلا تأتي Is مع الفعل الأصلي، ولا يأخذ الفعل s بعد Does.", errCat: "be_verb" },
    { s: "I ___ your phone number, so I can call you tonight.", opts: ["know", "am knowing", "knowing"], a: 0, tag: "Grammar · قواعد",
      whyEn: "'know' is a state verb, so it stays in the Present Simple and takes no -ing, even when we talk about now.",
      why: "know فعل حالة، فيبقى في المضارع البسيط ولا يأخذ ing، حتى إذا تكلمنا عن الآن.", errCat: "stative" },
    { s: "My aunt ___ meat, so we always cook fish for her.", opts: ["don't eat", "doesn't eat", "isn't eat"], a: 1, tag: "Grammar · قواعد",
      whyEn: "'My aunt' is one person, and the negative of a habit is doesn't + base verb. 'don't' is for I, you, we and they, and 'isn't' doesn't go before a base verb.",
      why: "My aunt مفردة، ونفي العادة doesn't مع الفعل الأصلي، أما don't فمع I وyou وwe وthey، ولا تأتي isn't قبل الفعل الأصلي.", errCat: "agreement" },
    { s: "Which sentence is correct?", opts: ["Noura often visits her grandmother on Thursdays.", "Noura visits often her grandmother on Thursdays.", "Noura is often visit her grandmother on Thursdays."], a: 0, tag: "Grammar · قواعد",
      whyEn: "'often' goes before the main verb: Noura often visits. It doesn't go between the verb and its object, and we don't put 'is' before a base verb.",
      why: "often تأتي قبل الفعل الأساسي: Noura often visits. ولا تأتي بين الفعل ومفعوله، ولا نضع is قبل الفعل الأصلي.", errCat: "word_order" },
    { s: "Look! The boys ___ to the bus.", opts: ["run", "are runing", "are running"], a: 2, tag: "Grammar · قواعد",
      whyEn: "'Look!' shows that the action is going on now, so we need are + verb-ing. run has a short vowel + one consonant, so the n doubles: running.",
      why: "Look! تثبت أن الفعل جارٍ الآن، فنحتاج are مع الفعل وing. وrun فيها صوت قصير ثم حرف واحد، فتتضاعف n: running.", errCat: "spelling" },
    { s: "My cousins ___ in Abha last week.", opts: ["were", "was", "are"], a: 0, tag: "Grammar · قواعد",
      whyEn: "'last week' shows the past, and 'My cousins' is plural, so we use 'were'. 'was' is for one person, and 'are' is the present.",
      why: "last week تدل على الماضي، وMy cousins جمع، فنستعمل were، أما was فللمفرد، وare مضارع.", errCat: "agreement" },
    { s: "We don't have much time. The ___ for this form is at five o'clock today.", opts: ["colleague", "research", "deadline"], a: 2, tag: "Vocabulary · مفردات",
      whyEn: "A form must arrive before the last time, and that time is the 'deadline'. A colleague is a person, and research isn't a time.",
      why: "يجب أن يصل النموذج قبل آخر وقت، وهذا الوقت deadline، أما colleague فشخص، وresearch ليس وقتًا.", errCat: "vocab" },
    { s: "I ___ my old school friends, so I often look at our photos.", opts: ["miss", "schedule", "research"], a: 0, tag: "Vocabulary · مفردات",
      whyEn: "The friends are far away and the speaker looks at their photos, so 'miss' is the right verb: feel sad because they are not with you.",
      why: "الأصدقاء بعيدون والمتحدث ينظر إلى صورهم، فالفعل المناسب miss: يشتاق إليهم لبعدهم عنه.", errCat: "vocab" },
    { s: "Hessa got the job. Before she starts, she has to ___ with the company.", opts: ["miss a contract", "sign a contract", "research a contract"], a: 1, tag: "Legal Track · المسار القانوني",
      whyEn: "The collocation is 'sign a contract': you write your name on it to agree. We don't 'miss' or 'research' a contract with a company.",
      why: "المتلازمة sign a contract، أي تكتب اسمك عليه موافقةً، ولا نقول miss a contract ولا research a contract مع شركة.", errCat: "vocab" }
  ]
};
})();
