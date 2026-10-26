/* ===== الوحدة 2 · الدرس 5: A Weekend in AlUla — سرد رحلة في إيميل: مراجعة الماضي البسيط (6 مراحل · درس قراءة، وكتابته الختامية للوحدة) ===== */
(function(){
/* صورة رأس إيميل نورة (صخرة ضخمة تشبه الفيل في الصحراء): خاصة بهذا الدرس، وتظهر عبر reading.art. */
var ALULA_SVG = '<svg viewBox="0 0 320 96" role="img" aria-label="A huge rock that looks like an elephant: a family weekend in AlUla · صخرة ضخمة تشبه الفيل: عطلة أسرة في العُلا" direction="ltr"><rect width="320" height="96" fill="#1E3550"/>' +
  '<circle cx="302" cy="22" r="9" fill="#F2B857"/>' +
  '<circle cx="196" cy="14" r="1.2" fill="#F7F3EC"/><circle cx="244" cy="20" r="1.1" fill="#F7F3EC"/><circle cx="262" cy="10" r="1" fill="#F7F3EC"/>' +
  '<path d="M220 86 V62 Q222 42 244 38 Q270 34 286 46 Q298 56 296 72 V86 H284 V76 Q284 68 277 68 Q270 68 270 76 V86 Z" fill="#9C6A35"/>' +
  '<path d="M0 78 Q48 66 104 76 T216 80 T320 74 V96 H0 Z" fill="#D9A35B"/><path d="M0 88 Q70 80 148 88 T320 86 V96 H0 Z" fill="#B9823F"/>' +
  '<text x="14" y="26" font-family="Quicksand, sans-serif" font-weight="700" font-size="11" fill="#F7F3EC">ALULA · A FAMILY WEEKEND</text>' +
  '<text x="14" y="42" font-family="Quicksand, sans-serif" font-weight="700" font-size="8" letter-spacing="1" fill="#F2B857">FIRST → THEN → AFTER THAT → FINALLY</text></svg>';

/* فحوص الكتابة (writing.checks)، بعد توحيد الفاصلة العليا ’ من الآيفون:
   1) الجمل بين التحية والختام، 2) أجزاء الإيميل وكلمات الترتيب، 3) الماضي: كلمة زمن وفعلان شاذان ونفي، بلا didn't went ولا Did you went ولا was go،
   4) كلمتان من الدرس. والقوائم واسعة حتى لا يُرفض جواب صحيح معتاد. */
function wNorm(text){ return String(text || '').replace(/[’‘ʼ`´]/g, "'"); }
var W_CLOSE = '(?:(?:with\\s+)?best\\s+wishes|best\\s+regards|kind\\s+regards|warm\\s+(?:regards|wishes)|all\\s+the\\s+best|best|regards|(?:talk|speak)\\s+soon|many\\s+thanks|thanks(?:\\s+a\\s+lot)?|thank\\s+you|see\\s+you(?:\\s+soon|\\s+later)?|take\\s+care|with\\s+love|love|your\\s+(?:friend|brother|sister|cousin)|yours(?:\\s+sincerely|\\s+truly)?|cheers|bye(?:\\s+for\\s+now)?|sincerely)';
var W_GREET_RE = /(?:^|\n)\s*(?:hi|hello|hey|dear|good\s+(?:morning|afternoon|evening))\b/i;
var W_CLOSE_RE = new RegExp('(?:^|\\n|[.!?]\\s*)\\s*' + W_CLOSE + '\\s*(?:[,!.]|\\n|$)', 'i');
var W_ORDER = [/\bfirst(?:ly)?\b/i, /\bthen\b/i, /\bnext\b/i, /\bafter\s+(?:that|this)\b|\bafterwards?\b/i, /\blater\b/i, /\bfinally\b|\blastly\b|\bin\s+the\s+end\b/i];
var W_TIME = /\b(?:yesterday|ago|in\s+the\s+past|this\s+morning|last\s+(?:january|february|march|april|may|june|july|august|september|october|november|december|holiday|holidays|vacation|night|week|weekend|month|year|summer|winter|spring|autumn|fall|term|semester|ramadan|eid|saturday|sunday|monday|tuesday|wednesday|thursday|friday)|1[0-9]{3}|20[0-9]{2}|for\s+(?:a|an|one|two|three|four|five|six|seven|eight|nine|ten|a\s+few|several|many|[0-9]+)\s+(?:hours?|days?|nights?|weeks?|months?|years?)|when\s+(?:i|we|he|she|they)\s+(?:was|were)|(?:in|during|after|on|at|over)\s+(?:the\s+)?(?:weekend|january|february|march|april|may|june|july|august|september|october|november|december|ramadan|eid|hajj|saturday|sunday|monday|tuesday|wednesday|thursday|friday|(?:eid\s+|summer\s+|winter\s+)?holidays?))\b/i;
var W_PAST = 'went had said bought ate saw took came lost found knew thought paid slept left made heard chose spent flew drove met spoke wrote sent told felt gave brought began became got sat stood ran swam drank wore sold built caught taught kept forgot broke won understood held fell rode woke sang threw grew drew lent meant'.split(' ');
var W_ED_BASE = /^(?:need|feed|bleed|breed|speed|succeed|exceed|proceed|shed|shred|wed|heed|weed|seed|embed|plead)$/;
var W_NEG_RE = /\b(?:didn't|did\s+not|wasn't|weren't|was\s+not|were\s+not|couldn't|could\s+not)\b/i;
var W_BE_BAD = /\b(?:was|were|wasn't|weren't|was\s+not|were\s+not)\s+(?:go|eat|see|take|come|give|write|begin|become|bring|send|tell|feel|buy|have|visit|stay|decide|arrive|went|ate|saw|took|came|gave|wrote|began|became|knew|chose|drove|flew|spoke|did)\b/i;
var W_VOCAB = [/\btour\s+guides?\b/i, /\bviews?\b/i, /\bancient\b/i, /\bamazing\b/i, /\bsouvenirs?\b/i,
  /\b(?:take|takes|took|taking|taken)\s+(?:[a-z0-9]+\s+){0,3}(?:photos?|photographs?|pictures?)\b/i,
  /\b(?:apply|applies|applied|applying)\s+for\s+(?:[a-z]+\s+){0,2}visas?\b/i];
function wBadAfterDid(w){ w = String(w).toLowerCase(); return W_PAST.indexOf(w) >= 0 || (/ed$/.test(w) && !W_ED_BASE.test(w)); }
/* didn't went · Did you went · Where did she saw · was go · were visited… (صيغ خاطئة فقط، فلا تُرفض جملة صحيحة) */
function wBadForms(text){
  var s = wNorm(text), m;
  var reNeg = /\b(?:didn't|did\s+not)\s+([a-z]+)\b/gi;
  while ((m = reNeg.exec(s))) { if (wBadAfterDid(m[1])) return true; }
  var reQ = /(?:^|[.!?]\s*|\n\s*|\b(?:what|where|when|why|how|who|which)\s+)did\s+(?:i|you|we|they|he|she|it|(?:my|your|his|her|our|their|the)\s+[a-z]+)\s+([a-z]+)\b/gi;
  while ((m = reQ.exec(s))) { if (wBadAfterDid(m[1])) return true; }
  return W_BE_BAD.test(s);
}
function wIrregular(text){
  var seen = {};
  (wNorm(text).toLowerCase().match(/[a-z]+/g) || []).forEach(function(w){ if (W_PAST.indexOf(w) >= 0) seen[w] = true; });
  return Object.keys(seen).length;
}
/* التحية (Hi Emma,) والختام (Best wishes, Noura) لا يُحسبان جملًا: يُحذفان ويوضع مكانهما فاصل، ثم تُعدّ الجمل كما يعدّها المحرك
   (قطعة بين . ! ? فيها 3 كلمات فأكثر). وعدّاد المحرك تحت المربع قد يزيد واحدًا لأنه يعدّ سطر الختام جملة. */
function wSentences(text){
  var s = wNorm(text).replace(/\b(Mr|Mrs|Ms|Dr|Prof)\./gi, '$1');
  s = s.replace(/^\s*(?:dear|hi|hello|hey|good\s+(?:morning|afternoon|evening))\b(?:[ \t]*,?[ \t]+[A-Za-z][A-Za-z'.-]*){0,4}[ \t]*(?:[,.!?:]|\n|$)/i, '.');
  s = s.replace(new RegExp('[.!?]?\\s*' + W_CLOSE + '\\s*(?:[,!.]|\\n|$)\\s*(?:[A-Za-z][A-Za-z\'.-]*\\s*){0,4}[.!]?\\s*$', 'i'), '.');
  return s.split(/[.!?]+/).filter(function(p){ return (p.match(/[A-Za-z']+/g) || []).length >= 3; }).length;
}

LESSONS.u2l5 = {
  id: "u2l5",
  unit: 2,
  n: 5,
  mode: "reading",
  en: "A Weekend in AlUla",
  ar: "كتابة: إيميل تسرد فيه رحلة",
  subEn: "Writing: Telling a Story in the Past",
  canDoEn: "I can write a short email to a friend that tells the story of a trip in order, with past verbs, negatives and questions.",
  canDoAr: "أقدر أن أكتب إلى صديق إيميلًا قصيرًا أحكي فيه قصة رحلة بالترتيب، بأفعال الماضي والنفي والسؤال.",
  descEn: "I can read Noura's email about a family weekend in AlUla, then write my own trip email with First, Then, After that and Finally, regular and irregular past verbs, didn't and Did you …?",
  descAr: "أقدر أن أقرأ إيميل نورة عن عطلة أسرتها في العُلا، ثم أكتب إيميلًا عن رحلتي بـ First وThen وAfter that وFinally، وبالأفعال المنتظمة والشاذة في الماضي، وdidn't وDid you …?",
  goals: [
    { en: "I can tell a story in order with First, Then, After that and Finally, and say when it happened with past time words (last weekend, two days ago).", ar: "أقدر أن أحكي قصة بالترتيب بـ First وThen وAfter that وFinally، وأذكر وقتها بكلمات الزمن الماضي (last weekend وtwo days ago)." },
    { en: "I can use regular and irregular past verbs together, including today's eight: wrote, sent, told, felt, gave, brought, began and became.", ar: "أقدر أن أجمع الأفعال المنتظمة والشاذة في الماضي، ومنها أفعال اليوم الثمانية: wrote وsent وtold وfelt وgave وbrought وbegan وbecame." },
    { en: "I can use didn't + base verb, wasn't / weren't, and questions with Did …? and How was …? in one email.", ar: "أقدر أن أستعمل في إيميل واحد didn't مع الفعل المجرد، وwasn't / weren't، والسؤال بـ Did …? وHow was …?" },
    { en: "I can write my own trip email with a greeting, a purpose, details and a closing, using 6 travel words and the legal phrase 'apply for a visa'.", ar: "أقدر أن أكتب إيميلًا عن رحلتي بتحية وغرض وتفاصيل وختام، بست كلمات عن السفر والعبارة القانونية apply for a visa." }
  ],
  intro: {
    recall: {
      dEn: "Type four words and the legal phrase from Lesson 4 (Where Did You Go?) from memory before you see the answer.",
      d: "اكتب من ذاكرتك أربع كلمات والعبارة القانونية من الدرس الرابع (Where Did You Go?) قبل أن ترى الإجابة.",
      items: [
        ["review", "5 active recall items from Lesson 4", "5 عناصر استرجاع نشط من الدرس الرابع"],
        ["pen", "Type each answer from memory to fix its spelling", "اكتب كل إجابة من ذاكرتك لتثبيت إملائها"],
        ["spark", "Includes the legal phrase 'report a crime'", "تشمل العبارة القانونية report a crime"]
      ]
    },
    vocab: {
      dEn: "6 travel words plus today's legal phrase ('apply for a visa'), with human audio from Wikimedia Commons and Oxford links.",
      d: "6 كلمات عن السفر والسياحة مع العبارة القانونية اليومية (apply for a visa)، بنطق بشري من Wikimedia Commons وروابط Oxford.",
      items: [
        ["cards", "7 flashcards (6 words + 'apply for a visa') with human audio & Oxford link", "7 بطاقات (6 كلمات + apply for a visa) مع النطق البشري ورابط Oxford"],
        ["review", "2-round matching game", "لعبة توصيل من جولتين"],
        ["quiz", "8 context sentences: choose the right word", "8 جمل سياقية: اختر الكلمة المناسبة"]
      ]
    },
    grammar: {
      dEn: "Review the whole unit in a trip email: order words (First, Then, After that, Finally), past time words, regular and irregular verbs with today's eight, negatives and questions, and the four parts of an email.",
      d: "راجع قاعدة الوحدة كلها في إيميل رحلة: كلمات الترتيب (First وThen وAfter that وFinally)، وكلمات الزمن الماضي، والأفعال المنتظمة والشاذة ومنها أفعال اليوم الثمانية، والنفي والسؤال، وأجزاء الإيميل الأربعة.",
      items: [
        ["book", "6 short cards: 4 explanations, Common Arab Mistakes, and a Summary", "6 بطاقات: 4 شروح، وأخطاء العرب الشائعة، والخلاصة"],
        ["quiz", "16 guided exercises (4 of each type), one per screen", "16 تمرينًا موجّهًا (4 من كل نمط)، سؤال في كل شاشة"]
      ]
    },
    reading: {
      dEn: "An email from Noura, a Saudi student in Riyadh, to her British friend Emma. Guess what it is about, read it once for the main idea, then again for 8 evidence questions.",
      d: "إيميل من نورة، الطالبة السعودية في الرياض، إلى صديقتها البريطانية إيما: توقّع موضوعه، ثم اقرأه مرة للفكرة العامة، ومرة ثانية للإجابة عن 8 أسئلة بالدليل من النص.",
      items: [
        ["spark", "Predict before you read", "توقّع قبل القراءة"],
        ["clock", "First reading for the main idea with a comfortable timer (about 2 minutes, no word taps)", "قراءة أولى للفكرة العامة بمؤقت إرشادي مريح (نحو دقيقتين) ودون لمس الكلمات"],
        ["mail", "Second reading with word meanings and 8 evidence questions", "قراءة ثانية مع معاني الكلمات باللمس و8 أسئلة فهم بالدليل من النص"]
      ]
    },
    writing: {
      dEn: "Unit capstone: write your own email to a friend about a trip, with a greeting, at least 4 separate sentences in order, and a closing.",
      d: "المهمة الختامية للوحدة: اكتب إلى صديق إيميلًا عن رحلة قمت بها، بتحية و4 جمل منفصلة على الأقل مرتبة وختام.",
      items: [
        ["pen", "Greeting + at least 4 separate sentences + closing", "تحية + 4 جمل منفصلة على الأقل + ختام"],
        ["spark", "4 instant checks: sentences, email parts and order words, past forms, lesson words", "4 فحوص فورية: الجمل، وأجزاء الإيميل وكلمات الترتيب، وصيغ الماضي، وكلمات الدرس"]
      ]
    },
    quiz: {
      dEn: "10 shuffled questions on the unit grammar, today's eight verbs, the lesson words and 'apply for a visa' (80% to pass), plus Lesson Error Analysis.",
      d: "اختبار قصير من 10 أسئلة في قواعد الوحدة وأفعال اليوم الثمانية وكلمات الدرس وapply for a visa (النجاح من 80%)، مع تحليل الأخطاء.",
      items: [
        ["quiz", "10 questions: 7 grammar, 2 vocabulary, 1 legal (80% passing score)", "10 أسئلة: 7 قواعد، و2 مفردات، و1 قانوني (النجاح من 80%)"],
        ["review", "Error Analysis by category", "تحليل أخطاء الدرس حسب الفئة"]
      ]
    }
  },

  /* ---------- المرحلة 1: الاسترجاع النشط (من u2l4: island وnature وcheap وhear about، والقانونية report a crime، بجمل جديدة) ---------- */
  recall: [
    {
      id: "rc-0",
      promptAr: "جزيرة: أرض يحيط بها الماء من كل جانب (اسم من الدرس الرابع)",
      promptEn: "A piece of land with water all around it (noun)",
      sentPre: "Last winter, my family stayed in a hotel on a beautiful",
      sentPost: "with white beaches and palm trees.",
      ans: ["island"],
      hint: "i _ _ _ _ d (6 letters)",
      spellNoteEn: "Spelled i-s-l-a-n-d: the s is silent, so we say 'EYE-land'.",
      spellNote: "تُكتب i-s-l-a-n-d، وحرف s فيها صامت لا يُنطق: «آيْلَنْد».",
      errCat: "spelling"
    },
    {
      id: "rc-1",
      promptAr: "الطبيعة: الجبال والأشجار والحيوانات وكل ما لم يصنعه الإنسان (اسم)",
      promptEn: "Mountains, trees, animals and everything that people did not make (noun)",
      sentPre: "My father loves",
      sentPost: ", so we often go camping in the desert in winter.",
      ans: ["nature"],
      hint: "n _ _ _ _ e (6 letters)",
      spellNoteEn: "Spelled n-a-t-u-r-e: 'ture' sounds like 'cher' (NAY-cher). For nature in general, we don't put 'the' before it.",
      spellNote: "تُكتب n-a-t-u-r-e، ويُنطق المقطع ture «تْشَر»: «نَيْتْشَر»، ولا نضع قبلها the حين نقصد الطبيعة عمومًا.",
      errCat: "spelling"
    },
    {
      id: "rc-2",
      promptAr: "رخيص: سعره قليل (صفة)",
      promptEn: "Not expensive; it costs little money (adjective)",
      sentPre: "The food at the small café near our university is good and",
      sentPost: ", so students love it.",
      ans: ["cheap"],
      hint: "c _ _ _ p (5 letters)",
      spellNoteEn: "Spelled c-h-e-a-p: the long 'ee' sound is written 'ea'. The opposite is expensive.",
      spellNote: "تُكتب c-h-e-a-p، والصوت «إي» الطويل فيها يُكتب ea، وعكسها expensive.",
      errCat: "spelling"
    },
    {
      id: "rc-3",
      promptAr: "يسمع عن شيء فيعرف بوجوده من الناس أو الأخبار (عبارة من كلمتين)",
      promptEn: "Learn about something from other people or from the news (2 words)",
      sentPre: "Where did you",
      sentPost: "this little restaurant? The food is excellent!",
      ans: ["hear about", "hear of"],
      hint: "h _ _ _ _ _ _ _ t (9 letters, 2 words)",
      spellNoteEn: "Two words: hear + about. hear has the word 'ear' in it: h-e-a-r. After Did, it stays hear; its past is heard.",
      spellNote: "كلمتان: hear ثم about، وفي hear كلمة ear (الأذن): h-e-a-r. وبعد Did تبقى hear مجردة، وماضيها heard.",
      errCat: "vocab"
    },
    {
      id: "rc-4",
      promptAr: "يُبلغ الشرطة عن جريمة (العبارة القانونية من الدرس الرابع: ___ a crime)",
      promptEn: "Legal phrase from Lesson 4: ___ a crime (tell the police that it happened)",
      sentPre: "My uncle saw a man break a shop window at night, so he called the police to",
      sentPost: "a crime.",
      ans: ["report", "report a crime"],
      isLegal: true,
      hint: "r _ _ _ _ t (6 letters)",
      spellNoteEn: "The phrase is 'report a crime'. Spelled r-e-p-o-r-t; the past is reported (a regular verb).",
      spellNote: "العبارة report a crime، وتُكتب r-e-p-o-r-t، وماضيها reported لأنه فعل منتظم.",
      errCat: "vocab"
    }
  ],

  /* ---------- العبارة القانونية اليومية (المسار القانوني A2) ---------- */
  legalPhrase: {
    en: "apply for a visa",
    headword: "apply for a visa",
    pos: "legal phrase",
    ar: "يتقدّم بطلب تأشيرة",
    say: "أَبْلَاي فُر أَ فِيزَا",
    ex: "Students who want to study abroad usually apply for a visa a few months before they travel.",
    exAr: "الطلاب الذين يريدون الدراسة في الخارج يتقدّمون عادةً بطلب تأشيرة قبل سفرهم بأشهر قليلة.",
    tipEn: "A visa is official permission to enter a country, in your passport or online, and each country's laws decide who needs one. Collocations: apply for a visa (ask for one with a form), get a visa, a tourist visa, a student visa. Use 'for' after apply: apply for a visa / a job / a passport. Past: applied for (consonant + y → ied).",
    tip: "visa إذن رسمي بدخول بلد، في جواز السفر أو إلكترونيًا، وقوانين كل بلد تحدد من يحتاج إليها. ومن متلازماتها: apply for a visa (يتقدّم بطلب تأشيرة)، وget a visa (يحصل على تأشيرة)، وa tourist visa (تأشيرة سياحية)، وa student visa (تأشيرة دراسية). وبعد apply نستعمل for: apply for a visa / a job / a passport. وماضيها applied for، لأن قبل y حرفًا ساكنًا فتتحول إلى ied.",
    legal: true,
    oxfordSlug: "visa",
    wikiFiles: ["En-us-apply.ogg", "LL-Q1860 (eng)-Pvanp7-for (unstressed).wav", "LL-Q1860 (eng)-Pvanp7-a (unstressed).wav", "LL-Q1860 (eng)-Vealhurl-visa.wav"],
    wikiCredit: "File:En-us-apply.ogg, File:LL-Q1860 (eng)-Pvanp7-for (unstressed).wav, File:LL-Q1860 (eng)-Pvanp7-a (unstressed).wav & File:LL-Q1860 (eng)-Vealhurl-visa.wav · Pvanp7 & Vealhurl (Lingua Libre) / Wikimedia Commons"
  },

  /* ---------- المفردات (6 كلمات + العبارة القانونية = 7 عبارات، والمتلازمات في tipEn / tip) ---------- */
  vocab: [
    { en: "tour guide", pos: "noun", ar: "مرشد سياحي", say: "تُوَر قَايْد",
      ex: "A good tour guide tells interesting stories about every place.", exAr: "المرشد السياحي الجيد يحكي قصصًا ممتعة عن كل مكان.",
      tipEn: "A tour guide shows visitors a place and tells them about it. Collocations: a local tour guide, our tour guide told us …, go on a guided tour. Spelling: g-u-i-d-e, with a silent u.",
      tip: "المرشد السياحي يرافق الزوار ويحدّثهم عن المكان. ومن متلازماتها: a local tour guide (مرشد من أهل المكان)، وour tour guide told us … (أخبرنا مرشدنا …)، وgo on a guided tour (يقوم بجولة مع مرشد). وتُكتب guide بحرف u صامت: g-u-i-d-e.",
      oxfordSlug: "guide",
      wikiFile: "LL-Q1860 (eng)-Vealhurl-tour guide.wav",
      wikiCredit: "File:LL-Q1860 (eng)-Vealhurl-tour guide.wav · Vealhurl (Lingua Libre) / Wikimedia Commons" },
    { en: "view", pos: "noun", ar: "منظر / مشهد (ما تراه أمامك من مكان ما)", say: "فْيُو",
      ex: "We had a great view of the mountains from the window of the train.", exAr: "كان أمامنا منظر رائع للجبال من نافذة القطار.",
      tipEn: "Collocations: a view of the sea / the mountains, a great / beautiful view, the view was amazing, a room with a view. Spelling: v-i-e-w ('iew' sounds like 'you').",
      tip: "متلازمات: a view of the sea (منظر البحر)، وa beautiful view (منظر جميل)، وthe view was amazing (كان المنظر مذهلًا)، وa room with a view (غرفة تطل على منظر). وتُكتب v-i-e-w، وiew فيها تُنطق «يُو».",
      oxfordSlug: "view_1",
      wikiFile: "En-us-view.ogg",
      wikiCredit: "File:En-us-view.ogg · Wikimedia Commons" },
    { en: "ancient", pos: "adjective", ar: "قديم جدًّا / أثري (عمره مئات السنين أو آلافها)", say: "إِيْنْشَنْت",
      ex: "My grandfather collects ancient coins from different countries.", exAr: "يجمع جدي عملات قديمة جدًّا من بلدان مختلفة.",
      tipEn: "ancient = very, very old: hundreds or thousands of years old (ancient tombs, an ancient city, ancient history). For a phone or a car, say old, not ancient. The c sounds like 'sh': AYN-shent.",
      tip: "ancient تعني قديمًا جدًّا عمره مئات السنين أو آلافها: ancient tombs (مقابر أثرية) وan ancient city (مدينة قديمة جدًّا). أما الهاتف أو السيارة فنقول لهما old لا ancient. وحرف c فيها يُنطق «ش»: «إِيْنْشَنْت».",
      oxfordSlug: "ancient",
      wikiFile: "En-us-ancient.ogg",
      wikiCredit: "File:En-us-ancient.ogg · Wikimedia Commons" },
    { en: "amazing", pos: "adjective", ar: "مذهل / رائع جدًّا", say: "أَمَيْزِنْق",
      ex: "The food at my aunt's wedding was amazing.", exAr: "كان الطعام في حفل زفاف خالتي مذهلًا.",
      tipEn: "amazing = very good and surprising. It is an adjective, so it comes after was / were or before a noun: The trip was amazing. · an amazing view. Don't say 'very amazing'; say 'really amazing' or just 'amazing'.",
      tip: "amazing تعني رائعًا مدهشًا، وهي صفة تأتي بعد was / were أو قبل الاسم: The trip was amazing وan amazing view. ولا نقول very amazing، بل really amazing أو amazing وحدها.",
      oxfordSlug: "amazing",
      wikiFile: "En-us-amazing.ogg",
      wikiCredit: "File:En-us-amazing.ogg · Wikimedia Commons" },
    { en: "souvenir", pos: "noun", ar: "تذكار (شيء تشتريه أو تحتفظ به ليذكّرك بمكان زرته)", say: "سُوفَنِير",
      ex: "My grandmother keeps every souvenir that her children bring her.", exAr: "تحتفظ جدتي بكل تذكار يحضره لها أبناؤها.",
      tipEn: "A souvenir is something you buy or keep to remember a place. Collocations: buy a souvenir, a souvenir shop, a souvenir from Paris, a souvenir for my sister. It comes from French, so the end is -ir: s-o-u-v-e-n-i-r.",
      tip: "souvenir شيء تشتريه أو تحتفظ به ليذكّرك بمكان زرته. ومن متلازماتها: buy a souvenir (يشتري تذكارًا)، وa souvenir shop (محل تذكارات)، وa souvenir from Paris (تذكار من باريس)، وa souvenir for my sister (تذكار لأختي). وأصلها فرنسي، فتنتهي بـ ir: s-o-u-v-e-n-i-r.",
      oxfordSlug: "souvenir",
      wikiFile: "LL-Q1860 (eng)-Vealhurl-souvenir.wav",
      wikiCredit: "File:LL-Q1860 (eng)-Vealhurl-souvenir.wav · Vealhurl (Lingua Libre) / Wikimedia Commons" },
    { en: "take photos", pos: "phrase", ar: "يلتقط صورًا", say: "تَيْك فُوتُوز",
      ex: "My sister takes photos of her food before she eats it.", exAr: "تلتقط أختي صورًا لطعامها قبل أن تأكله.",
      tipEn: "In English we take photos (not 'make photos'): take photos of the sea, take a photo of my family. The past is took: I took photos. After didn't: I didn't take photos. photo is short for photograph; the plural is photos.",
      tip: "نقول في الإنجليزية take photos لا make photos: take photos of the sea (يلتقط صورًا للبحر) وtake a photo of my family (يلتقط صورة لأسرتي). وماضيها took photos، ونفيها didn't take photos. وphoto اختصار photograph، وجمعها photos.",
      oxfordSlug: "photo",
      wikiFiles: ["En-us-take.ogg", "LL-Q1860 (eng)-Back ache-photos.wav"],
      wikiCredit: "File:En-us-take.ogg & File:LL-Q1860 (eng)-Back ache-photos.wav · Back ache (Lingua Libre) / Wikimedia Commons" }
  ],

  vocabGaps: [
    { s: "From the top of the tower, you can see the whole city. The ___ is wonderful at night.", opts: ["souvenir", "view", "tour guide"], a: 1,
      whyEn: "A 'view' is everything you can see from a place, like the whole city from a tower. A souvenir is a thing you buy, and a tour guide is a person.",
      why: "view هو كل ما تراه من مكان ما، كالمدينة كلها من أعلى البرج؛ أما souvenir فشيء يُشترى، وtour guide شخص.", errCat: "vocab" },
    { s: "This stone bowl is ___: people made it about 3,000 years ago.", opts: ["ancient", "tour guide", "souvenir"], a: 0,
      whyEn: "'ancient' means very, very old, and 3,000 years is a very long time. After 'is' we need an adjective here; the other two options are nouns.",
      why: "ancient تعني قديمًا جدًّا، وثلاثة آلاف سنة زمن طويل جدًّا، ونحتاج بعد is هنا صفة، أما الخياران الآخران فاسمان.", errCat: "vocab" },
    { s: "The fireworks at the festival were ___, and everyone clapped.", opts: ["souvenir", "tour guide", "amazing"], a: 2,
      whyEn: "'amazing' means very good and surprising, and that is why everyone clapped. After 'were' we need an adjective.",
      why: "amazing تعني مذهلًا رائعًا، ولذلك صفّق الجميع، وبعد were نحتاج صفة.", errCat: "vocab" },
    { s: "I bought a small wooden camel as a ___ of my trip to Tabuk.", opts: ["souvenir", "view", "tour guide"], a: 0,
      whyEn: "A 'souvenir' is something you buy to remember a place, like a small wooden camel from Tabuk.",
      why: "souvenir شيء تشتريه ليذكّرك بمكان زرته، كجمل خشبي صغير من تبوك.", errCat: "vocab" },
    { s: "Our ___ walked in front of the group and explained the history of the old fort.", opts: ["view", "tour guide", "souvenir"], a: 1,
      whyEn: "A 'tour guide' is a person who shows visitors a place and talks about it. A view and a souvenir can't walk or explain anything.",
      why: "tour guide شخص يرافق الزوار ويحدّثهم عن المكان، أما view وsouvenir فلا يمشيان ولا يشرحان شيئًا.", errCat: "vocab" },
    { s: "You can't ___ inside this small museum, so please keep your phone in your bag.", opts: ["souvenir", "tour guide", "take photos"], a: 2,
      whyEn: "After 'can't' we need a verb, and 'take photos' fits: the phone must stay in your bag, so nobody can take photos there. 'souvenir' and 'tour guide' are nouns.",
      why: "بعد can't نحتاج فعلًا، وtake photos هي المناسبة: يبقى الهاتف في الحقيبة فلا تُلتقط الصور هناك؛ أما souvenir وtour guide فاسمان.", errCat: "vocab" },
    { s: "We ___ of the sunset from the boat, and my mother sent them to our family chat group.", opts: ["took photos", "bought souvenirs", "had a view"], a: 0,
      whyEn: "'took photos' is the past of 'take photos', and 'them' means the photos that her mother sent to the family group. You can't send souvenirs or a view to a chat group.",
      why: "took photos ماضي take photos، والضمير them يعود على الصور التي أرسلتها الأم إلى مجموعة الأسرة، ولا تُرسل التذكارات ولا المنظر إلى مجموعة محادثة.", errCat: "vocab" },
    { s: "My cousin wants to work in Canada, so he needs to ___ first.", opts: ["apply to a visa", "apply a visa", "apply for a visa"], a: 2,
      whyEn: "The phrase is 'apply for a visa': after apply we use 'for' when we ask for something with a form (apply for a job, apply for a passport).",
      why: "العبارة apply for a visa بحرف الجر for، فبعد apply نستعمل for حين نطلب شيئًا بطلب رسمي (apply for a job وapply for a passport).", errCat: "vocab" }
  ],

  /* ---------- المرحلة 3: بطاقات القواعد (4 شروح + أخطاء العرب الشائعة + الخلاصة) ---------- */
  gCards: [
    {
      tEn: "A Trip Email in Four Parts",
      t: "إيميل الرحلة في أربعة أجزاء",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">A Trip Email in Four Parts</span><small>إيميل الرحلة في أربعة أجزاء</small></h2>' +
        '<p class="en-p" dir="ltr">In Unit 1 you wrote a work email. An email to a friend about a trip has the same four parts, but it is friendly and it tells a story in the past:</p>' +
        '<ol class="uses en-uses" dir="ltr">' +
          '<li><b>Greeting:</b> Hi / Dear + first name.<span class="xen">Hi Maha, · Dear Yousef,</span></li>' +
          '<li><b>Purpose:</b> what the email is about.<span class="xen">I\'m writing to tell you about my visit to Abha.</span></li>' +
          '<li><b>Details:</b> the story in order, with past verbs.<span class="xen">First, we … Then we … We didn\'t …</span></li>' +
          '<li><b>Closing:</b> a question or an invitation, then a friendly phrase and your name.<span class="xen">How was your week? · Best wishes, · See you soon,</span></li>' +
        '</ol>' +
        '<div class="tip" dir="ltr"><p>Write the greeting on the first line and the closing at the end, each with a comma. Use capital letters for names and for the first word of each sentence.</p><div class="pairs"><span class="yes">Hi Maha,</span><span class="no">hi maha</span></div></div>',
      arHtml:
        '<p>لإيميل الرحلة إلى صديق أربعة أجزاء، كإيميل العمل في الوحدة 1، لكنه ودّي ويحكي قصة في الماضي: <b>التحية</b> (<bdi class="en">Hi Maha,</bdi>)، ثم <b>الغرض</b> (<bdi class="en">I\'m writing to tell you about…</bdi>)، ثم <b>التفاصيل</b> مرتبةً بأفعال الماضي، ثم <b>الختام</b>: سؤال أو دعوة، ثم عبارة ودية (<bdi class="en">Best wishes,</bdi>) واسمك.</p>' +
        '<p>اكتب التحية في السطر الأول والختام في آخر الإيميل، وبعد كل منهما فاصلة، واكتب الحرف الأول من الأسماء ومن كل جملة حرفًا كبيرًا.</p>'
    },
    {
      tEn: "Story Order and Past Time Words",
      t: "ترتيب الأحداث وكلمات الزمن الماضي",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Story Order and Time Words</span><small>ترتيب الأحداث وكلمات الزمن الماضي</small></h2>' +
        '<p class="en-p" dir="ltr">Tell the events in the order they happened. Order words usually start the sentence:</p>' +
        '<ul class="vlist"><li>First, <small>أولًا</small></li><li>Then <small>ثم</small></li><li>After that, <small>بعد ذلك</small></li><li>Finally, <small>وأخيرًا</small></li></ul>' +
        '<div class="xbox"><p class="xen">First, I made breakfast. Then I called my grandmother. After that, I studied for two hours. Finally, I went to bed.</p></div>' +
        '<div class="tip" dir="ltr"><p><b>Commas:</b> put a comma after <b>First</b>, <b>After that</b> and <b>Finally</b>. We usually write <b>Then</b> with no comma. <b>Finally</b> is for the last event only.</p></div>' +
        '<h3 class="bi-h"><span class="en" dir="ltr">When? Past time words</span><small>متى؟ كلمات الزمن الماضي</small></h3>' +
        '<ul class="vlist"><li>last weekend <small>نهاية الأسبوع الماضي</small></li><li>last Thursday <small>الخميس الماضي</small></li><li>two days ago <small>قبل يومين</small></li><li>yesterday <small>أمس</small></li></ul>' +
        '<div class="tip" dir="ltr"><p>Put them at the start of the sentence (with a comma) or at the end.</p><div class="pairs"><span class="yes">two days ago · last weekend</span><span class="no">before two days · the last weekend</span></div></div>',
      arHtml:
        '<p>احكِ الأحداث بترتيب وقوعها، وابدأ الجملة بكلمة الترتيب: <bdi class="en">First</bdi> (أولًا)، ثم <bdi class="en">Then</bdi> (ثم)، ثم <bdi class="en">After that</bdi> (بعد ذلك)، ثم <bdi class="en">Finally</bdi> (وأخيرًا) لآخر حدث فقط.</p>' +
        '<p>نضع فاصلة بعد <bdi class="en">First</bdi> و<bdi class="en">After that</bdi> و<bdi class="en">Finally</bdi>، ونكتب <bdi class="en">Then</bdi> غالبًا بلا فاصلة.</p>' +
        '<p>وكلمات الزمن الماضي مثل <bdi class="en">last weekend</bdi> و<bdi class="en">two days ago</bdi> و<bdi class="en">yesterday</bdi> تأتي في أول الجملة وبعدها فاصلة، أو في آخرها. ونقول <bdi class="en">two days ago</bdi> لا <bdi class="en">before two days</bdi>، و<bdi class="en">last weekend</bdi> بلا <bdi class="en">the</bdi>.</p>'
    },
    {
      tEn: "Past Verbs: Today's 8 Irregular Verbs",
      t: "أفعال الماضي: الأفعال الشاذة الثمانية",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Today\'s 8 Irregular Verbs</span><small>أفعال الماضي: ثمانية أفعال شاذة بأصواتها</small></h2>' +
        '<p class="en-p" dir="ltr">A trip story uses many past verbs. Regular verbs add <b>-ed</b> (visited, arrived, decided). Irregular verbs don\'t add -ed: each one has a special past form. Learn today\'s eight by sound:</p>' +
        '<ul class="spell" dir="ltr">' +
          '<li>Sounds like <b>go</b> ("o")<span class="s-en">write → wrote · tell → told</span></li>' +
          '<li>Sounds like <b>name</b> ("ay")<span class="s-en">give → gave · become → became</span></li>' +
          '<li>A short <b>"a"</b>, as in <b>man</b><span class="s-en">begin → began</span></li>' +
          '<li>Ends in <b>-t</b>, like <b>left</b><span class="s-en">send → sent · feel → felt</span></li>' +
          '<li>Rhymes with <b>bought</b> and <b>thought</b><span class="s-en">bring → brought</span></li>' +
        '</ul>' +
        '<div class="tip" dir="ltr"><p><b>One form for every subject, and no -ed:</b> I / she / they <b>brought</b>.</p><div class="pairs"><span class="yes">My aunt brought dates for everyone.</span><span class="no">My aunt bringed dates for everyone.</span></div></div>',
      arHtml:
        '<p>في قصة الرحلة أفعال ماضية كثيرة: المنتظم يأخذ <bdi class="en">ed</bdi> (<bdi class="en">visited, arrived, decided</bdi>)، والشاذ له صيغة خاصة تُحفظ. واحفظ أفعال اليوم الثمانية بأصواتها:</p>' +
        '<p>صوت «أو» كما في <bdi class="en">go</bdi>: <bdi class="en">write → wrote</bdi> و<bdi class="en">tell → told</bdi>. وصوت «اي» كما في <bdi class="en">name</bdi>: <bdi class="en">give → gave</bdi> و<bdi class="en">become → became</bdi>. وفتحة قصيرة كما في <bdi class="en">man</bdi>: <bdi class="en">begin → began</bdi>.</p>' +
        '<p>وصيغتان تنتهيان بـ <bdi class="en">t</bdi>: <bdi class="en">send → sent</bdi> و<bdi class="en">feel → felt</bdi>. و<bdi class="en">brought</bdi> على وزن <bdi class="en">bought</bdi> و<bdi class="en">thought</bdi>: <bdi class="en">bring → brought</bdi>.</p>' +
        '<p>والصيغة واحدة مع كل الضمائر بلا <bdi class="en">ed</bdi>: <bdi class="en">brought</bdi> لا <bdi class="en">bringed</bdi>.</p>'
    },
    {
      tEn: "Negatives and Questions in a Story",
      t: "النفي والسؤال في القصة",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Negatives and Questions</span><small>النفي والسؤال في القصة</small></h2>' +
        '<p class="en-p" dir="ltr">A good story also says what did <b>not</b> happen, and an email often asks a question. With <b>did</b>, the verb goes back to the base form:</p>' +
        '<p class="formula"><b>didn\'t</b> / <b>Did</b> … + base verb</p>' +
        '<div class="sigs">' +
          '<div class="sig s"><h3 dir="ltr">Negative<small class="sig-ar">النفي</small></h3><ul><li>We didn\'t take a taxi.</li><li>The streets weren\'t crowded.</li></ul></div>' +
          '<div class="sig c"><h3 dir="ltr">Question<small class="sig-ar">السؤال</small></h3><ul><li>Did you call your uncle?</li><li>Where did you stay?</li><li>How was the weather?</li></ul></div>' +
        '</div>' +
        '<p class="en-p" dir="ltr">Short answers: <b>Yes, I did.</b> / <b>No, I didn\'t.</b> With be, use <b>wasn\'t / weren\'t</b> and <b>Was / Were …?</b></p>' +
        '<div class="tip" dir="ltr"><div class="pairs"><span class="yes">Did she tell you the news?</span><span class="no">Did she told you the news?</span></div></div>',
      arHtml:
        '<p>القصة الجيدة تذكر أيضًا ما لم يحدث، والإيميل يسأل غالبًا سؤالًا. ومع <bdi class="en">did</bdi> يعود الفعل إلى صورته المجردة: <bdi class="en">didn\'t take</bdi> في النفي، و<bdi class="en">Did you call…?</bdi> في السؤال، و<bdi class="en">Where did you stay?</bdi> مع أداة الاستفهام.</p>' +
        '<p>والإجابة القصيرة <bdi class="en">Yes, I did.</bdi> أو <bdi class="en">No, I didn\'t.</bdi> ومع فعل الكون نستعمل <bdi class="en">wasn\'t / weren\'t</bdi> في النفي، و<bdi class="en">Was / Were…?</bdi> أو <bdi class="en">How was…?</bdi> في السؤال.</p>'
    },
    {
      tEn: "Common Arab Mistakes",
      t: "أخطاء العرب الشائعة",
      bilingual: true,
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Common Arab Mistakes</span><small>أخطاء يقع فيها كثير من العرب في سرد الرحلة</small></h2>' +
        '<ul class="mist">' +
          '<li><span class="no">I was felt tired after the trip.</span><span class="yes">I felt tired after the trip.</span><p class="en-m" dir="ltr"><b>felt</b> is already a past form, so it needs no <b>was / were</b> before it.</p><p><bdi class="en">felt</bdi> صيغة ماضٍ بنفسها، فلا نضع قبلها <bdi class="en">was / were</bdi>.</p></li>' +
          '<li><span class="no">We didn\'t brought a map. / Did you sent the file?</span><span class="yes">We didn\'t bring a map. / Did you send the file?</span><p class="en-m" dir="ltr"><b>didn\'t</b> and <b>Did</b> take the base verb: bring, send.</p><p>بعد <bdi class="en">didn\'t</bdi> و<bdi class="en">Did</bdi> يأتي الفعل المجرد: <bdi class="en">bring</bdi> و<bdi class="en">send</bdi>.</p></li>' +
          '<li><span class="no">We visited my aunt before two days.</span><span class="yes">We visited my aunt two days ago.</span><p class="en-m" dir="ltr"><b>ago</b> comes after the time. "before two days" is a word-for-word translation from Arabic.</p><p>تأتي <bdi class="en">ago</bdi> بعد المدة، و<bdi class="en">before two days</bdi> ترجمة حرفية لـ «قبل يومين».</p></li>' +
          '<li><span class="no">first we went to the mall then i bought a gift</span><span class="yes">First, we went to the mall. Then I bought a gift.</span><p class="en-m" dir="ltr">Start with a capital letter, write <b>I</b> as a capital, put a comma after <b>First</b>, and end each sentence with a period.</p><p>ابدأ بحرف كبير، واكتب الضمير <bdi class="en">I</bdi> كبيرًا، وضع فاصلة بعد <bdi class="en">First</bdi>، وأنهِ كل جملة بنقطة.</p></li>' +
        '</ul>'
    },
    {
      tEn: "Summary",
      t: "الخلاصة",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Quick Summary</span><small>الخلاصة</small></h2>' +
        '<div class="sumc" dir="ltr"><h3>Your Trip Email Checklist · قائمة إيميل الرحلة</h3>' +
          '<p><b>Hi …, → Best wishes,</b><span>Open with a greeting and end with a closing, each on a separate line</span></p>' +
          '<p><b>First, · Then · After that, · Finally,</b><span>Tell the events in order, and say when: last weekend, two days ago</span></p>' +
          '<p><b>wrote · sent · told · felt · gave · brought · began · became</b><span>Irregular past forms: learn them by heart; regular verbs add -ed</span></p>' +
          '<p><b>didn\'t + base verb · Did you + base verb?</b><span>Negatives and questions; wasn\'t / weren\'t with be</span></p>' +
        '</div>' +
        '<p class="en-p" dir="ltr">Now let\'s practise: 16 guided exercises with brand-new sentences.</p>',
      arHtml:
        '<p><b>الإيميل:</b> تحية في أوله (<bdi class="en">Hi …,</bdi>) وختام في آخره (<bdi class="en">Best wishes,</bdi>)، وبينهما الغرض والتفاصيل.</p>' +
        '<p><b>الترتيب والزمن:</b> <bdi class="en">First, Then, After that, Finally</bdi>، و<bdi class="en">last weekend</bdi> و<bdi class="en">two days ago</bdi>.</p>' +
        '<p><b>الأفعال:</b> المنتظم بـ <bdi class="en">ed</bdi>، والشاذ يُحفظ: <bdi class="en">wrote, sent, told, felt, gave, brought, began, became</bdi>.</p>' +
        '<p><b>النفي والسؤال:</b> <bdi class="en">didn\'t</bdi> و<bdi class="en">Did</bdi> مع الفعل المجرد، و<bdi class="en">wasn\'t / weren\'t</bdi> مع فعل الكون.</p>' +
        '<p>والآن نتدرّب: 16 تمرينًا موجّهًا بجمل جديدة.</p>'
    }
  ],

  /* ---------- المرحلة 3: التمارين (16 تمرينًا، 4 من كل نمط، بجمل جديدة، وفيها أفعال اليوم الثمانية) ---------- */
  gA: [
    { s: "Last Thursday, my cousin ___ me a long message about her new job.", opts: ["writed", "wrote"], a: 1,
      whyEn: "'write' is irregular: its past form is 'wrote' (it sounds like 'boat'). Irregular verbs never take -ed.",
      why: "write فعل شاذ ماضيه wrote (تُنطق كـ boat)، والأفعال الشاذة لا تأخذ ed أبدًا.", errCat: "tense" },
    { s: "___ you bring your passport to the airport this morning?", opts: ["Did", "Were"], a: 0,
      whyEn: "'bring' is a main verb, so the past question is Did + subject + base verb. 'Were' goes with an adjective or a place (Were you tired?), never with a base verb.",
      why: "bring فعل أساسي، فالسؤال في الماضي Did ثم الفاعل ثم الفعل المجرد، أما Were فتأتي مع الصفة أو المكان (Were you tired?)، لا مع الفعل المجرد.", errCat: "be_verb" },
    { s: "___, we packed our bags. Then we drove to the airport. Finally, we checked in for our flight.", opts: ["Finally", "First"], a: 1,
      whyEn: "The blank is the first step of the story: 'Then' and 'Finally' come after it. 'Finally' is only for the last step, and the story already has it.",
      why: "الفراغ هو الخطوة الأولى في القصة، وبعده Then ثم Finally، وFinally لآخر خطوة فقط وقد جاءت في آخر القصة.", errCat: "word_order" },
    { s: "How ___ your final exams last week?", opts: ["were", "was"], a: 0,
      whyEn: "'your final exams' is plural, so we ask with 'were': How were …? 'was' is for one thing (How was the exam?).",
      why: "your final exams جمع، فنسأل بـ were: How were …؟ أما was فللمفرد (How was the exam?).", errCat: "agreement" }
  ],

  gB: [
    { s: "Our holiday was begin on a Monday.", ok: false, fix: "Our holiday began on a Monday.",
      whyEn: "Don't put 'was' before a verb. For a past action, use the past form alone: begin → began.",
      why: "لا نضع was قبل الفعل، وللحدث الماضي نكتفي بصيغة الماضي: begin ← began.", errCat: "be_verb" },
    { s: "We didn't sent the postcards because we lost the address.", ok: false, fix: "We didn't send the postcards because we lost the address.",
      whyEn: "After didn't, use the base verb: send, not sent. The past form 'sent' is only for positive sentences.",
      why: "بعد didn't يأتي الفعل المجرد send لا sent، وصيغة الماضي sent للجملة المثبتة وحدها.", errCat: "tense" },
    { s: "After that, my uncle told us a funny story about his first flight.", ok: true,
      whyEn: "Correct: 'After that' with a comma starts the next step of the story, and 'told' is the past of tell.",
      why: "صحيحة: After that وبعدها فاصلة تبدأ الخطوة التالية في القصة، وtold ماضي tell.", errCat: "tense" },
    { s: "My grandparents came back from Umrah before three days.", ok: false, fix: "My grandparents came back from Umrah three days ago.",
      whyEn: "In English, 'ago' comes after the time: three days ago. 'before three days' is a word-for-word translation of the Arabic «قبل ثلاثة أيام».",
      why: "في الإنجليزية تأتي ago بعد المدة: three days ago، أما before three days فترجمة حرفية لعبارة «قبل ثلاثة أيام».", errCat: "articles_prep" }
  ],

  gC: [
    { pre: "Two days ago, my brother", verb: "give", post: "me his old laptop because he bought a new one.", ans: ["gave"],
      whyEn: "'Two days ago' shows the past. give is irregular: its past is gave (it sounds like 'came'), the same for every subject.",
      why: "Two days ago تدل على الماضي، وgive فعل شاذ ماضيه gave (على وزن came)، وهو واحد مع كل الضمائر.", errCat: "tense" },
    { pre: "When I saw my exam results, I", verb: "feel", post: "very happy.", ans: ["felt"],
      whyEn: "The sentence is about the past (saw), so we need the past of feel: felt. It ends in -t, like slept and left.",
      why: "الجملة عن الماضي (saw)، فنحتاج ماضي feel وهو felt، وينتهي بـ t مثل slept وleft.", errCat: "tense" },
    { pre: "Last Sunday, our teacher", verb: "not / tell", post: "us the date of the test, so we asked her by email.", ans: ["didn't tell", "did not tell"],
      whyEn: "'Last Sunday' is past, so the negative is didn't + base verb. tell is irregular (told), but after didn't it goes back to tell.",
      why: "Last Sunday زمن ماضٍ، فالنفي didn't مع الفعل المجرد، وtell فعل شاذ ماضيه told، لكنه يعود بعد didn't إلى صورته المجردة tell.", errCat: "tense" },
    { pre: "", verb: "you / send", post: "the photos to Grandma last night?", ans: ["Did you send"],
      whyEn: "A past question with a main verb: Did + subject (you) + base verb (send). Never 'Did you sent'.",
      why: "السؤال في الماضي بفعل أساسي: Did ثم الفاعل you ثم الفعل المجرد send، ولا نقول Did you sent.", errCat: "tense" }
  ],

  gD: [
    { chips: ["became", "My cousin", "a pilot", "last year."], ans: "My cousin became a pilot last year.",
      whyEn: "Subject (My cousin) + past verb (became) + what he became (a pilot) + time (last year) at the end. The past of become is became.",
      why: "الفاعل My cousin ثم الفعل الماضي became ثم ما صار إليه a pilot ثم الزمن last year في آخر الجملة، وماضي become هو became.", errCat: "word_order" },
    { chips: ["arrived home", "Finally,", "at midnight.", "we"], ans: "Finally, we arrived home at midnight.",
      whyEn: "The order word comes first with a comma (Finally,), then the subject (we), the past verb (arrived home) and the time (at midnight).",
      why: "كلمة الترتيب أولًا وبعدها فاصلة (Finally,)، ثم الفاعل we، ثم الفعل الماضي arrived home، ثم الزمن at midnight.", errCat: "word_order" },
    { chips: ["enjoy", "Did", "the museum?", "your parents"], ans: "Did your parents enjoy the museum?",
      whyEn: "A past question: Did + subject (your parents) + base verb (enjoy) + the rest, with a question mark.",
      why: "سؤال في الماضي: Did ثم الفاعل your parents ثم الفعل المجرد enjoy ثم بقية الجملة، وفي آخرها علامة استفهام.", errCat: "word_order" },
    { chips: ["didn't need them.", "We brought", "but we", "warm jackets,"], ans: "We brought warm jackets, but we didn't need them.",
      whyEn: "Positive part first (We brought warm jackets), then but, then the negative part with didn't + base verb (didn't need them).",
      why: "الجزء المثبت أولًا We brought warm jackets، ثم but، ثم الجزء المنفي بـ didn't والفعل المجرد didn't need them.", errCat: "word_order" }
  ],

  /* ---------- المرحلة 4: القراءة (إيميل نورة إلى صديقتها البريطانية إيما عن عطلة أسرتها في العُلا) ---------- */
  reading: {
    title: "Our Family Weekend in AlUla",
    from: "Noura",
    fromMeta: "Noura · Student, Riyadh",
    to: "Emma",
    art: ALULA_SVG,
    lg1: "Past verbs: regular & irregular · أفعال الماضي المنتظمة والشاذة",
    lg2: "didn't / wasn't · Did …? · النفي والسؤال",
    lg3: "Order & time words · كلمات الترتيب والزمن",
    hlLabel: "Highlight the story tools · إظهار أدوات السرد",
    targetSeconds: 130,
    introEn: "Noura is a Saudi student in Riyadh. Last weekend, she went on a trip with her family. Now she is writing to her British friend Emma about it.",
    intro: "نورة طالبة سعودية في الرياض، سافرت مع أسرتها في نهاية الأسبوع الماضي، وتكتب الآن إلى صديقتها البريطانية إيما عن الرحلة.",
    // <<s:..>> فعل ماضٍ مثبت (منتظم أو شاذ أو was) · <<c:..>> النفي والسؤال بـ did أو wasn't · <<t:..>> كلمة ترتيب أو زمن
    // {word|key} كلمة من مفردات الدرس السبع وحدها · [[text|معنى]] كلمة مساعدة
    paras: [
      "Hi Emma,",
      "You <<s:wrote>> about your holiday in [[Wales|ويلز (في بريطانيا)]], so now it's [[my turn|دوري]]! I'm writing to tell you about our family trip to AlUla <<t:last weekend>>.",
      "Our journey <<s:began>> on Thursday, and our flight from Riyadh <<s:was>> on time. On Friday, we <<s:decided>> to see three places.",
      "<<t:First>>, we <<s:visited>> [[Hegra|الحِجر]] (Al-Hijr), Saudi Arabia's first [[UNESCO World Heritage Site|موقع في قائمة اليونسكو للتراث العالمي]]. Our {tour guide} <<s:told>> us about the {ancient} [[tombs|مقابر]] [[cut into|منحوتة في]] the rocks. They are about 2,000 years old! <<t:Then>> we <<s:went>> to [[Elephant Rock|جبل الفيل]]. It's a [[huge|ضخمة]] rock that [[looks like|تشبه]] an elephant. The {view} <<s:was>> {amazing}, and I <<s:felt>> very small next to it.",
      "<<t:After that>>, we <<s:saw>> [[Maraya|مرايا]], a building [[covered in mirrors|مغطّى بالمرايا]]. I <<c:didn't bring>> my camera, so I {took photos|take photos} with my phone. <<t:Finally>>, my father <<s:gave>> us some money, and we <<s:bought>> {souvenirs|souvenir}.",
      "We <<c:didn't see>> everything, and my brother <<c:wasn't>> happy about that, but we <<s:had>> fun. I love nature, so Elephant Rock <<s:became>> my favourite place.",
      "I <<s:sent>> you some photos <<t:two days ago>>. <<c:Did you get>> them? I'm attaching two more to this email. And <<c:did you finish>> your exams? Please reply soon.",
      "Come and visit us next spring! You can {apply for a tourist visa|apply for a visa} online, and then you can stay with us. I <<s:brought>> you a {souvenir} from AlUla!",
      "Best wishes,<br>Noura"
    ],
    predict: {
      qEn: "Before you read: Noura is a Saudi student. Her British friend Emma wrote to her about a holiday in Wales, and now Noura is writing back. What do you think her email is mainly about?",
      q: "توقّع قبل القراءة: نورة طالبة سعودية، كتبت إليها صديقتها البريطانية إيما عن عطلة في ويلز، والآن تردّ عليها نورة؛ عمّ تتوقع أن يكون إيميلها في أغلبه؟",
      optsEn: ["Her new timetable at university", "A weekend trip with her family, told step by step", "A problem with a hotel booking"],
      opts: ["جدولها الجديد في الجامعة", "رحلة نهاية أسبوع مع أسرتها، تحكيها خطوة خطوة", "مشكلة في حجز فندق"],
      a: 1,
      revealEn: "Noura tells Emma about her family's weekend in AlUla, step by step, with First, Then, After that and Finally.",
      reveal: "تحكي نورة لإيما عن عطلة أسرتها في العُلا خطوة خطوة، بـ First وThen وAfter that وFinally."
    },
    insight: {
      titleEn: "How Noura Builds Her Email",
      titleAr: "كيف بنت نورة إيميلها",
      l1En: "She tells the events in order, with order words and with regular and irregular past verbs:",
      ex1: "On Friday, we decided to see three places · First, we visited Hegra (Al-Hijr) · Finally, my father gave us some money",
      l2En: "She opens with a greeting and a purpose, and she closes with an invitation and a friendly phrase:",
      ex2: "Hi Emma, · I'm writing to tell you about our family trip to AlUla last weekend · Come and visit us next spring! · Best wishes, Noura",
      arHtml: '<p>لاحظ أن نورة رتّبت أحداث رحلتها بكلمات الترتيب (<bdi class="en">First, Then, After that, Finally</bdi>)، وجمعت الأفعال المنتظمة (<bdi class="en">decided, visited</bdi>) والشاذة (<bdi class="en">went, saw, gave</bdi>)، ونفت بـ <b style="color:var(--accent-ink)">didn\'t</b> وسألت بـ <bdi class="en">Did you</bdi>. وبدأت إيميلها بتحية وغرض، وختمته بدعوة وعبارة ختام ودية.</p>'
    },
    questions: [
      { tf: true, q: "The family's flight from Riyadh was delayed.", a: false,
        ev: "Our journey began on Thursday, and our flight from Riyadh was on time.",
        whyEn: "False: Noura writes that the flight 'was on time'. 'on time' is the opposite of 'delayed'.",
        why: "خطأ؛ تكتب نورة أن رحلتهم الجوية كانت on time، أي في موعدها، وهي عكس delayed.", errCat: "reading" },
      { q: "Who told the family about the tombs at Hegra?", opts: ["Noura's father", "Their tour guide", "A man at the hotel"], a: 1,
        ev: "Our tour guide told us about the ancient tombs cut into the rocks.",
        whyEn: "Noura writes 'Our tour guide told us about the ancient tombs'. Her father appears later in the email, with the money.",
        why: "تكتب نورة أن مرشدهم السياحي هو الذي حدّثهم عن المقابر الأثرية، أما أبوها فيأتي ذكره لاحقًا مع المال.", errCat: "reading" },
      { q: "How old are the tombs at Hegra?", opts: ["About 200 years old", "About 20,000 years old", "About 2,000 years old"], a: 2,
        ev: "They are about 2,000 years old!",
        whyEn: "Right after the tombs, Noura writes 'They are about 2,000 years old!' Read numbers carefully: 2,000 is two thousand.",
        why: "بعد ذكر المقابر مباشرة تكتب نورة أن عمرها نحو 2,000 سنة (ألفا سنة)، فاقرأ الأرقام بعناية.", errCat: "reading" },
      { q: "Where did the family go after Hegra?", opts: ["To Elephant Rock", "To Maraya", "Back to the hotel"], a: 0,
        ev: "Then we went to Elephant Rock.",
        whyEn: "'First' gives Hegra, and 'Then' gives the next place: Elephant Rock. Maraya comes later, with 'After that'.",
        why: "First تدل على الحِجر، وThen تدل على المكان التالي: جبل الفيل، أما مرايا فتأتي بعده مع After that.", errCat: "reading" },
      { q: "Why did Noura take photos with her phone?", opts: ["Her camera was broken.", "Her father had the camera.", "She didn't bring her camera."], a: 2,
        ev: "I didn't bring my camera, so I took photos with my phone.",
        whyEn: "'I didn't bring my camera' is the reason, and 'so' gives the result: she took photos with her phone.",
        why: "السبب أنها لم تُحضر كاميرتها (I didn't bring my camera)، وso تدل على النتيجة: التقطت الصور بهاتفها.", errCat: "reading" },
      { tf: true, q: "Noura's brother was happy because they saw every place.", a: false,
        ev: "We didn't see everything, and my brother wasn't happy about that, but we had fun.",
        whyEn: "False: they didn't see everything, and her brother wasn't happy about that.",
        why: "خطأ؛ لم يروا كل شيء (We didn't see everything)، ولم يكن أخوها سعيدًا بذلك (wasn't happy).", errCat: "reading" },
      { q: "Which two questions does Noura ask Emma?", opts: ["Did you get the photos? Did you finish your exams?", "Did you enjoy Wales? Did you buy a souvenir?", "Did you visit Scotland? Did you book a hotel?"], a: 0,
        ev: "Did you get them? I'm attaching two more to this email. And did you finish your exams?",
        whyEn: "Noura asks about the photos ('Did you get them?') and about the exams ('did you finish your exams?'). Both questions use Did + base verb.",
        why: "تسأل نورة عن الصور (Did you get them?) وعن الاختبارات (did you finish your exams?)، وكلا السؤالين بـ Did والفعل المجرد.", errCat: "reading" },
      { q: "What does Noura say Emma can do online?", opts: ["Book a hotel in Riyadh", "Apply for a tourist visa", "Buy souvenirs from AlUla"], a: 1,
        ev: "You can apply for a tourist visa online, and then you can stay with us.",
        whyEn: "Noura writes 'You can apply for a tourist visa online'. After that, Emma can come and stay with Noura's family.",
        why: "تكتب نورة أن إيما تستطيع أن تتقدّم بطلب تأشيرة سياحية عبر الإنترنت، ثم تأتي وتقيم عند أسرة نورة.", errCat: "reading" }
    ]
  },

  /* ---------- المرحلة 5: الكتابة الختامية للوحدة (إيميل المتعلم عن رحلة، مرتّب بكلمات الترتيب) ---------- */
  writing: {
    taskEn: "Write your own short email to a friend about a trip or a day out in the past. Start with a greeting (Hi …,) and finish with a closing (Best wishes,) and your name. Between them, write at least 4 separate sentences: say when it was (last weekend, two days ago …), tell the story in order with at least 3 order words (First, Then, After that, Finally), use past verbs, with at least 2 irregular ones (went, saw, told, gave …), and write 1 negative (didn't + base verb, or wasn't / weren't). Use at least 2 words from today's lesson. You can end with a question to your friend: Did you …?",
    task: "اكتب إلى صديق إيميلًا قصيرًا عن رحلة أو نزهة قمت بها في الماضي: ابدأ بتحية (Hi …,) واختم بعبارة ختام (Best wishes,) ثم اسمك، واكتب بينهما 4 جمل منفصلة على الأقل: اذكر متى كانت (last weekend أو two days ago …)، واحكِ الأحداث بالترتيب بثلاث كلمات ترتيب على الأقل (First وThen وAfter that وFinally)، واستعمل أفعال الماضي ومنها فعلان شاذان على الأقل (went وsaw وtold وgave …)، واكتب جملة منفية واحدة (didn't مع الفعل المجرد، أو wasn't / weren't)، واستعمل كلمتين على الأقل من كلمات الدرس. ولك أن تختم بسؤال لصديقك: Did you …?",
    placeholder: "Hi …,\nLast weekend, I …\nFirst, we …",
    checks: [
      { k: "sentences", tEn: "At least 4 separate sentences between the greeting and the closing (end each with . or ?)", t: "4 جمل منفصلة على الأقل بين التحية والختام (تنتهي كل جملة بنقطة أو علامة استفهام)",
        ok: function(a, text){ return wSentences(text) >= 4 && !(a && a.runOn); } },
      { k: "email", tEn: "Email parts and order: a greeting (Hi …,), at least 3 order words (First, Then, After that, Finally) and a closing (Best wishes,)", t: "أجزاء الإيميل والترتيب: تحية (Hi …,)، و3 كلمات ترتيب على الأقل (First وThen وAfter that وFinally)، وختام (Best wishes,)", ex: "Hi Ali, · First, we … Then we … Finally, … · Best wishes,",
        ok: function(a, text){ var s = wNorm(text);
          return W_GREET_RE.test(s) && W_CLOSE_RE.test(s) && W_ORDER.filter(function(re){ return re.test(s); }).length >= 3; } },
      { k: "past", tEn: "The past: a past time word (last weekend, two days ago …), at least 2 irregular past verbs and 1 negative, with no 'didn't went', 'Did you went' or 'was go'", t: "الماضي: كلمة زمن ماضية (last weekend أو two days ago …)، وفعلان شاذان على الأقل، وجملة منفية، دون didn't went أو Did you went أو was go", ex: "Last weekend, … · We went … · I bought … · We didn't …",
        ok: function(a, text){ var s = wNorm(text);
          return W_TIME.test(s) && wIrregular(s) >= 2 && W_NEG_RE.test(s) && !wBadForms(s); } },
      { k: "vocab", tEn: "At least 2 words or phrases from today's lesson", t: "كلمتان أو عبارتان على الأقل من درس اليوم", ex: "tour guide · view · ancient · amazing · souvenir · take photos · apply for a visa",
        ok: function(a, text){ var s = wNorm(text);
          return W_VOCAB.filter(function(re){ return re.test(s); }).length >= 2 || ((a && a.used) || []).length >= 2; } }
    ],
    modelMarked: "Hi Fahad,<br><<t:Last weekend>>, my family and I <<s:went>> to Taif, and I want to tell you about it. <<t:First>>, we <<s:visited>> a rose farm, and the farmer <<s:gave>> us a small bottle of rose water. <<t:Then>> we <<s:drove>> up the mountain road, and the {view} from the top <<s:was>> {amazing}. <<t:After that>>, we <<s:had>> lunch at a local restaurant. We <<c:didn't stay>> long in the market because it <<s:was>> very crowded. <<t:Finally>>, I <<s:bought>> a {souvenir} for my grandmother. <<c:Did you have>> a good weekend?<br>Best wishes,<br>Saad",
    model: "Hi Fahad,\nLast weekend, my family and I went to Taif, and I want to tell you about it. First, we visited a rose farm, and the farmer gave us a small bottle of rose water. Then we drove up the mountain road, and the view from the top was amazing. After that, we had lunch at a local restaurant. We didn't stay long in the market because it was very crowded. Finally, I bought a souvenir for my grandmother. Did you have a good weekend?\nBest wishes,\nSaad",
    legendEn: "Light blue = past verbs (regular and irregular) · Terracotta = didn't / Did …? with the base verb · Dashed = order and time words",
    legendAr: "الأزرق الفاتح لأفعال الماضي (المنتظمة والشاذة)، والطوبي لـ didn't وDid …? مع الفعل المجرد، والإطار المنقّط لكلمات الترتيب والزمن.",
    acceptExamples: [
      "Hello Ali,\nLast month, I traveled to Jeddah with my brother. First, we went to the old town and took photos. Then we ate fish by the sea, and the view was amazing. After that, we walked on the Corniche. We did not swim because the water was cold. Finally, we came home at night. Did you have a nice weekend?\nSee you soon,\nOmar",
      "Dear Sara,\nTwo days ago, I went to Al-Ahsa with my parents. First, we visited a big date farm. Then a tour guide told us about the old caves. After that, we bought dates as souvenirs. My little sister wasn’t happy because she felt tired. Finally, we came back to Riyadh in the evening. It was my favorite trip!\nThanks,\nHuda",
      "Hi Khalid,\nI'm writing to tell you about my trip to Abha last week. First, we stayed in a small hotel. Then we took photos of the mountains. After that, we went up the mountain, but I didn't bring my jacket, so I felt cold. Finally, I bought a souvenir for my sister. Did you go anywhere?\nBest regards,\nFaisal",
      "Hi Sami,\nAt the weekend, I went to Diriyah with my cousins. First, we walked in the old town, and the view at night was amazing. Then we took photos of the mud houses. After that, we had dinner at a small restaurant. We didn't stay late because we were tired. Finally, my cousin drove me home.\nBest,\nOmar"
    ]
  },

  /* ---------- «اسأل المعلم»: أسئلة مقترحة عن قاعدة الدرس ---------- */
  askChips: [
    "كيف أرتّب أحداث رحلتي بـ First وThen وAfter that وFinally؟",
    "متى أقول two days ago ومتى أقول last weekend؟",
    "لماذا نقول didn't bring ولا نقول didn't brought؟",
    "كيف أسأل صديقي عن عطلته بـ Did you؟"
  ],

  /* ---------- المرحلة 6: الاختبار القصير (10 أسئلة: 7 قواعد و2 مفردات وسؤال قانوني · النجاح 8 من 10) ---------- */
  quiz: [
    { s: "Yesterday, my sister ___ me a postcard from Bahrain.", opts: ["sended", "sent", "sends"], a: 1, tag: "Grammar · قواعد",
      whyEn: "'Yesterday' shows the past, and send is irregular: sent. 'sends' is present, and 'sended' is not a word.",
      why: "Yesterday تدل على الماضي، وsend فعل شاذ ماضيه sent، أما sends فمضارع، وsended ليست كلمة.", errCat: "tense" },
    { s: "___ your brother bring his camera to the wedding last night?", opts: ["Was", "Did", "Does"], a: 1, tag: "Grammar · قواعد",
      whyEn: "'bring' is a main verb and 'last night' is past, so we ask with Did + base verb. 'Does' is for the present, and 'Was' can't come before a base verb.",
      why: "bring فعل أساسي وlast night زمن ماضٍ، فنسأل بـ Did مع الفعل المجرد، أما Does فللمضارع، وWas لا تأتي قبل الفعل المجرد.", errCat: "be_verb" },
    { s: "First, we bought our tickets. ___, we got on the train. Finally, we found our seats.", opts: ["After that", "Finally", "First"], a: 0, tag: "Grammar · قواعد",
      whyEn: "The blank is the middle step: 'First' is already the first step, and 'Finally' is the last one, so we use 'After that'.",
      why: "الفراغ هو الخطوة الوسطى: First للخطوة الأولى وقد جاءت، وFinally للأخيرة، فنستعمل After that.", errCat: "word_order" },
    { s: "Yesterday, my grandmother ___ much better after a short rest.", opts: ["was felt", "feeled", "felt"], a: 2, tag: "Grammar · قواعد",
      whyEn: "The past of feel is felt. We don't put 'was' before a past verb, and 'feeled' is not a word.",
      why: "ماضي feel هو felt، ولا نضع was قبل الفعل الماضي، وfeeled ليست كلمة.", errCat: "be_verb" },
    { s: "The ___ gave us a map of the museum and answered all our questions.", opts: ["souvenir", "view", "tour guide"], a: 2, tag: "Vocabulary · مفردات",
      whyEn: "A 'tour guide' is a person who helps visitors, so he can give a map and answer questions. A souvenir and a view can't do that.",
      why: "tour guide شخص يساعد الزوار، فيعطيهم خريطة ويجيب عن أسئلتهم، ولا يستطيع ذلك souvenir ولا view.", errCat: "vocab" },
    { s: "Which sentence is correct?", opts: ["My uncle didn't told us about his trip.", "My uncle wasn't tell us about his trip.", "My uncle didn't tell us about his trip."], a: 2, tag: "Grammar · قواعد",
      whyEn: "After didn't, use the base verb: tell, not told. 'wasn't tell' is wrong too, because we never put be before a base verb.",
      why: "بعد didn't يأتي الفعل المجرد tell لا told، وwasn't tell خطأ أيضًا، لأننا لا نضع be قبل الفعل المجرد.", errCat: "tense" },
    { s: "My friend Ali ___ a doctor two years ago.", opts: ["became", "become", "becomed"], a: 0, tag: "Grammar · قواعد",
      whyEn: "'two years ago' shows the past, and the past of become is became (like came). 'become' is the base form, and 'becomed' is not a word.",
      why: "two years ago تدل على الماضي، وماضي become هو became (على وزن came)، أما become فصيغة المجرد، وbecomed ليست كلمة.", errCat: "tense" },
    { s: "In my diary, I wrote about the amazing ___ from our hotel window.", opts: ["view", "souvenir", "tour guide"], a: 0, tag: "Vocabulary · مفردات",
      whyEn: "A 'view' is what you can see from a place, like from a hotel window. You can't see a souvenir or a tour guide 'from a window' in this way.",
      why: "view ما تراه من مكان ما، كالذي تراه من نافذة الفندق، ولا يصح هنا souvenir ولا tour guide.", errCat: "vocab" },
    { s: "Which sentence is correct?", opts: ["The film begun at eight, and we arrived on time.", "The film was begin at eight, and we arrived on time.", "The film began at eight, and we arrived on time."], a: 2, tag: "Grammar · قواعد",
      whyEn: "The past of begin is began. 'begun' is a different form that is not used alone for the past, and we never put 'was' before a base verb.",
      why: "ماضي begin هو began، أما begun فصيغة أخرى لا تُستعمل وحدها للماضي، ولا نضع was قبل الفعل المجرد.", errCat: "tense" },
    { s: "Before her trip to London, my sister ___ online and got it in a week.", opts: ["applied to a visa", "applied for a visa", "applied a visa"], a: 1, tag: "Legal Track · المسار القانوني",
      whyEn: "The phrase is 'apply for a visa' (past: applied for a visa). We don't say 'apply to a visa' or 'apply a visa'.",
      why: "العبارة apply for a visa وماضيها applied for a visa، ولا نقول apply to a visa ولا apply a visa.", errCat: "vocab" }
  ]
};
})();
