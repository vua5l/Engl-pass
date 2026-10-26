/* ===== الوحدة 2 · الدرس 1: The Traveller from Tangier — الماضي البسيط للأفعال المنتظمة (6 مراحل · درس قراءة يفتتح الوحدة) ===== */
(function(){
/* خط الزمن في البطاقة الأولى: الحدث في الماضي البسيط نقطة انتهت قبل الآن (الماضي يمين واتجاه الزمن إلى اليسار، كما في u1l1). */
var TL_SVG = '<svg class="tl" viewBox="0 0 340 132" role="img" aria-label="Timeline: the Past Simple is a finished action at a point before NOW · الماضي البسيط حدث انتهى في نقطة قبل الآن" direction="ltr">' +
  '<line x1="118" y1="18" x2="118" y2="100" stroke="#1E2A33" stroke-width="1.2" stroke-dasharray="3 3"/><text x="118" y="12" text-anchor="middle" font-family="Quicksand, sans-serif" font-weight="700" font-size="10.5" fill="#1E2A33" letter-spacing="1.5">NOW</text>' +
  '<line x1="30" y1="62" x2="326" y2="62" stroke="#5A6B7C" stroke-width="1.5"/><path d="M22 62l10-5v10z" fill="#5A6B7C"/>' +
  '<circle cx="246" cy="62" r="7" fill="#2C4A6E"/>' +
  '<text x="246" y="42" text-anchor="middle" font-family="Quicksand, Readex Pro, sans-serif" font-size="12" font-weight="700" fill="#2C4A6E">worked · finished</text>' +
  '<text x="246" y="88" text-anchor="middle" font-family="Quicksand, Readex Pro, sans-serif" font-size="11.5" fill="#5A6B7C">last year · السنة الماضية</text>' +
  '<text x="326" y="124" text-anchor="end" font-family="Quicksand, Readex Pro, sans-serif" font-size="11.5" fill="#5A6B7C">Past · الماضي</text><text x="30" y="124" text-anchor="start" font-family="Quicksand, Readex Pro, sans-serif" font-size="11.5" fill="#5A6B7C">Future · المستقبل</text></svg>';
/* صورة رأس إيميل يوسف (كثبان الصحراء تحت هلال): خاصة بهذا الدرس، وتظهر عبر reading.art. */
var DESERT_SVG = '<svg viewBox="0 0 320 96" role="img" aria-label="Desert dunes under a crescent moon: from Tangier to Makkah, 1325 · كثبان الصحراء تحت الهلال: من طنجة إلى مكة سنة 1325" direction="ltr"><rect width="320" height="96" fill="#1E3550"/>' +
  '<circle cx="262" cy="26" r="11" fill="#F2B857"/><circle cx="267" cy="22" r="10" fill="#1E3550"/>' +
  '<circle cx="214" cy="16" r="1.3" fill="#F7F3EC"/><circle cx="300" cy="44" r="1.2" fill="#F7F3EC"/><circle cx="186" cy="34" r="1" fill="#F7F3EC"/><circle cx="236" cy="48" r="1.1" fill="#F7F3EC"/>' +
  '<path d="M0 72 Q44 56 92 68 T184 64 T268 70 T320 62 V96 H0 Z" fill="#D9A35B"/><path d="M0 84 Q64 70 128 82 T248 80 T320 78 V96 H0 Z" fill="#B9823F"/>' +
  '<text x="14" y="26" font-family="Quicksand, sans-serif" font-weight="700" font-size="11" fill="#F7F3EC">TANGIER → MAKKAH · 1325</text>' +
  '<text x="14" y="42" font-family="Quicksand, sans-serif" font-weight="700" font-size="8.5" letter-spacing="2" fill="#F2B857">THE RIHLA</text></svg>';

/* فحوص الكتابة (writing.checks): فعلان منتظمان مختلفان في الماضي (ed)، وكلمة زمن ماضية، وكلمتان من الدرس،
   بعد توحيد فاصلة الآيفون العليا ’. والكلمات المنتهية بـ ed وليست أفعالًا ماضية (need وhundred وأسماء مثل Ahmed) لا تُعد. */
var W_ED_NOT = /^(?:need|feed|seed|weed|deed|heed|reed|speed|breed|greed|creed|bleed|succeed|proceed|exceed|indeed|shed|sled|bred|fled|sped|bled|hundred|sacred|naked|wicked|hatred|kindred|beloved|ahmed|mohammed|mohamed|hamed|khaled|rashed|majed|saeed|waleed|fareed|sayed)$/i;
var W_TIME = /\b(?:yesterday|ago|then|in\s+the\s+past|this\s+morning|last\s+(?:january|february|march|april|may|june|july|august|september|october|november|december|holiday|vacation|night|week|weekend|month|year|summer|winter|spring|autumn|fall|term|semester|ramadan|eid|saturday|sunday|monday|tuesday|wednesday|thursday|friday)|1[0-9]{3}|20[0-2][0-9]|for\s+(?:a|an|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|fifteen|twenty|thirty|forty|fifty|a\s+few|several|many|[0-9]+)\s+(?:minutes?|hours?|days?|nights?|weeks?|months?|years?)|when\s+(?:i|we|he|she|they)\s+(?:was|were)|(?:in|during|after|on)\s+(?:the\s+)?(?:january|february|march|april|may|june|july|august|september|october|november|december|ramadan|eid|hajj|saturday|sunday|monday|tuesday|wednesday|thursday|friday|(?:eid\s+|summer\s+)?holidays?))\b/i;
var W_VOCAB = [/\bjourneys?\b/i, /\bdecid(?:e|es|ed|ing)\b/i, /\barriv(?:e|es|ed|ing)\b/i, /\bcross(?:es|ed|ing)?\b/i, /\bdangerous(?:ly)?\b/i, /\bstay(?:s|ed|ing)?\b/i, /\breturn(?:s|ed|ing)?\b/i, /\bislamic\s+law\b/i];
function wNorm(text){ return String(text || '').replace(/[’‘]/g, "'"); }
function wEdVerbs(text){
  var seen = {}, n = 0, m, re = /\b([a-z]{2,}ed)\b/gi, s = wNorm(text);
  while ((m = re.exec(s))) { var w = m[1].toLowerCase(); if (!W_ED_NOT.test(w) && !seen[w]) { seen[w] = true; n++; } }
  return n;
}

LESSONS.u2l1 = {
  id: "u2l1",
  unit: 2,
  n: 1,
  mode: "reading",
  en: "The Traveller from Tangier",
  ar: "رحلة ابن بطوطة: الماضي البسيط للأفعال المنتظمة",
  subEn: "Past Simple: Regular Verbs (-ed)",
  canDoEn: "I can talk about finished actions and journeys in the past with regular verbs (visited, stayed, travelled) and was / were.",
  canDoAr: "أقدر أن أتحدث عن أحداث ورحلات انتهت في الماضي بالأفعال المنتظمة (visited وstayed وtravelled) وwas / were.",
  descEn: "I can read the story of Ibn Battuta's journey in an email from a student in Tangier, and use regular past verbs with the right spelling and sound.",
  descAr: "أقدر أن أقرأ قصة رحلة ابن بطوطة في إيميل من طالب في طنجة، وأستعمل الأفعال المنتظمة في الماضي بإملائها ونطقها الصحيحين.",
  goals: [
    { en: "I can use the Past Simple of regular verbs (verb + -ed) for finished actions, with the same form for every subject.", ar: "أقدر أن أستعمل الماضي البسيط للأفعال المنتظمة (الفعل + ed) للأحداث المنتهية، بصيغة واحدة مع كل الضمائر." },
    { en: "I can spell -ed forms (arrived, studied, stayed, stopped, travelled) and say -ed as /t/, /d/ or /ɪd/.", ar: "أقدر أن أكتب صيغ ed كتابة صحيحة (arrived وstudied وstayed وstopped وtravelled)، وأنطق ed بأصواتها الثلاثة /t/ و/d/ و/ɪd/." },
    { en: "I can read an email about Ibn Battuta's journey for the main idea and details, and use was / were and past time words (in 1325, ago, for 30 years, then).", ar: "أقدر أن أفهم الفكرة العامة والتفاصيل في إيميل عن رحلة ابن بطوطة، وأستعمل was / were وكلمات الزمن الماضي (in 1325 وago وfor 30 years وthen)." },
    { en: "I can use 7 travel words and the legal phrase 'Islamic law', and write at least 4 separate sentences about a trip in the past.", ar: "أقدر أن أستعمل 7 كلمات عن السفر والعبارة القانونية Islamic law، وأكتب 4 جمل منفصلة على الأقل عن رحلة في الماضي." }
  ],
  intro: {
    recall: {
      dEn: "Type four words and the legal phrase from Unit 1, Lesson 5 (Your First Work Email) from memory before you see the answer.",
      d: "اكتب من ذاكرتك أربع كلمات والعبارة القانونية من الدرس الخامس في الوحدة 1 (Your First Work Email) قبل أن ترى الإجابة.",
      items: [
        ["review", "5 active recall items from Unit 1, Lesson 5", "5 عناصر استرجاع نشط من الدرس الخامس في الوحدة 1"],
        ["pen", "Type each word from memory to fix its spelling", "اكتب كل كلمة من ذاكرتك لتثبيت إملائها"],
        ["spark", "Includes the legal phrase 'sick leave'", "تشمل العبارة القانونية sick leave"]
      ]
    },
    vocab: {
      dEn: "7 travel words plus today's legal phrase ('Islamic law'), with human audio from Wikimedia Commons and Oxford links.",
      d: "7 كلمات عن السفر والرحلات مع العبارة القانونية اليومية (Islamic law)، بنطق بشري من Wikimedia Commons وروابط Oxford.",
      items: [
        ["cards", "8 flashcards (7 words + 'Islamic law') with human audio & Oxford link", "8 بطاقات (7 كلمات + Islamic law) مع النطق البشري ورابط Oxford"],
        ["review", "2-round matching game", "لعبة توصيل من جولتين"],
        ["quiz", "8 context sentences: choose the right word", "8 جمل سياقية: اختر الكلمة المناسبة"]
      ]
    },
    grammar: {
      dEn: "From zero, in small steps: use the Past Simple for finished actions, add -ed with the right spelling, say it as /t/, /d/ or /ɪd/, and review was / were and past time words.",
      d: "من الصفر وبخطوات صغيرة: نستعمل الماضي البسيط للأحداث المنتهية، ونضيف ed بإملائها الصحيح، وننطقها /t/ أو /d/ أو /ɪd/، ونراجع was / were وكلمات الزمن الماضي.",
      items: [
        ["book", "6 short grammar cards (English first, Arabic on tap)", "6 بطاقات شرح (الإنجليزي أولًا، والعربي عند الطلب)"],
        ["quiz", "16 guided exercises (4 of each type), one question per screen", "16 تمرينًا موجّهًا (4 من كل نمط)، سؤال في كل شاشة"]
      ]
    },
    reading: {
      dEn: "An email from Youssef, a student in Tangier, to his Saudi friend Fahad about Ibn Battuta, the great traveller from his city.",
      d: "إيميل من يوسف، الطالب في طنجة، إلى صديقه السعودي فهد عن ابن بطوطة، الرحالة الكبير ابن مدينته.",
      items: [
        ["spark", "Predict before you read", "توقّع قبل القراءة"],
        ["clock", "First reading for the main idea with a comfortable timer (about 2 minutes, no word taps)", "قراءة أولى للفكرة العامة بمؤقت إرشادي مريح (نحو دقيقتين) ودون لمس الكلمات"],
        ["mail", "Second reading with word meanings and 8 evidence questions", "قراءة ثانية مع معاني الكلمات باللمس و8 أسئلة فهم بالدليل من النص"]
      ]
    },
    writing: {
      dEn: "Write at least 4 separate sentences about a trip or a journey in your past, with regular past verbs and a past time word.",
      d: "اكتب 4 جمل منفصلة على الأقل عن رحلة قمت بها في الماضي، بأفعال منتظمة في الماضي وكلمة زمن ماضية.",
      items: [
        ["pen", "At least 4 separate sentences (capital letter + period for each)", "4 جمل منفصلة على الأقل بحرف كبير ونقطة لكل جملة"],
        ["spark", "4 instant checks: sentences, 2 regular past verbs, a past time word, and 2 lesson words", "4 فحوص فورية: عدد الجمل، وفعلان منتظمان في الماضي، وكلمة زمن ماضية، وكلمتان من الدرس"]
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

  /* ---------- المرحلة 1: الاسترجاع النشط (من u1l5: colleague وschedule وattach وreply، والقانونية sick leave، بجمل جديدة) ---------- */
  recall: [
    {
      id: "rc-0",
      promptAr: "زميل في العمل (اسم من الدرس الخامس في الوحدة 1)",
      promptEn: "A person you work with (noun)",
      sentPre: "My father and his",
      sentPost: "Khalid often travel together for work.",
      ans: ["colleague"],
      hint: "c _ _ _ _ _ _ _ e (9 letters)",
      spellNoteEn: "Spelled c-o-l-l-e-a-g-u-e: double 'l', and a silent 'ue' at the end.",
      spellNote: "تُكتب c-o-l-l-e-a-g-u-e بلامين، وتنتهي بـ ue صامتة لا تُنطق.",
      errCat: "spelling"
    },
    {
      id: "rc-1",
      promptAr: "جدول المواعيد أو الأعمال (اسم)",
      promptEn: "A plan of times and activities (noun)",
      sentPre: "The",
      sentPost: "for our class trip to Diriyah is on the university website.",
      ans: ["schedule"],
      hint: "s _ _ _ _ _ _ e (8 letters)",
      spellNoteEn: "Spelled s-c-h-e-d-u-l-e. British speakers often say 'SHED-yool', and Americans 'SKED-jool'.",
      spellNote: "تُكتب s-c-h-e-d-u-l-e، وينطقها البريطانيون غالبًا «شِيدْيُول» والأمريكيون «سْكِيجُول».",
      errCat: "spelling"
    },
    {
      id: "rc-2",
      promptAr: "يُرفق ملفًا بالإيميل (فعل)",
      promptEn: "To add a file to an email (verb)",
      sentPre: "Please",
      sentPost: "a copy of your passport to the email.",
      ans: ["attach"],
      hint: "a _ _ _ _ h (6 letters)",
      spellNoteEn: "Spelled a-t-t-a-c-h, with double 't'. We attach a file TO an email.",
      spellNote: "تُكتب a-t-t-a-c-h بحرفي t، ونقول attach a file to an email.",
      errCat: "spelling"
    },
    {
      id: "rc-3",
      promptAr: "يردّ على رسالة أو إيميل (فعل)",
      promptEn: "To answer a message or an email (verb)",
      sentPre: "When I travel, I",
      sentPost: "to emails only in the evening.",
      ans: ["reply"],
      hint: "r _ _ _ y (5 letters)",
      spellNoteEn: "Spelled r-e-p-l-y. We say 'reply to an email'. Today you will meet its past form: replied (y → ied).",
      spellNote: "تُكتب r-e-p-l-y، ونقول reply to an email، وستتعلم اليوم أن ماضيها replied (تتحول y إلى ied).",
      errCat: "spelling"
    },
    {
      id: "rc-4",
      promptAr: "إجازة مرضية (العبارة القانونية من الدرس الخامس في الوحدة 1: sick ___)",
      promptEn: "Legal phrase from Unit 1, Lesson 5: sick ___ (time away from work because you are ill)",
      sentPre: "When a pilot is ill, he can't fly, so he takes sick",
      sentPost: ".",
      ans: ["leave", "sick leave"],
      isLegal: true,
      hint: "l _ _ _ e (5 letters)",
      spellNoteEn: "The phrase is 'sick leave'. Here 'leave' means time away from work, and it has no plural (not 'sick leaves').",
      spellNote: "العبارة sick leave، وكلمة leave هنا بمعنى الإجازة من العمل، ولا تُجمع فلا نقول sick leaves.",
      errCat: "vocab"
    }
  ],

  /* ---------- العبارة القانونية اليومية (المسار القانوني A2) ---------- */
  legalPhrase: {
    en: "Islamic law",
    headword: "Islamic law",
    pos: "legal phrase",
    ar: "الفقه الإسلامي / الشريعة الإسلامية",
    say: "إِزْلَامِك لُو",
    ex: "Judges in Saudi courts use Islamic law to decide cases.",
    exAr: "يحكم القضاة في المحاكم السعودية في القضايا بالشريعة الإسلامية.",
    tipEn: "Islamic law (Sharia) is based on the Quran and the Sunnah. Collocations: study Islamic law, a professor of Islamic law. 'Islamic' is the adjective from 'Islam': write it with a capital I, and put it before the noun (never 'law Islamic').",
    tip: "Islamic law تقابل «الفقه الإسلامي» و«الشريعة الإسلامية»، ومصدرها القرآن والسنة. ومن متلازماتها study Islamic law (يدرس الفقه الإسلامي) وa professor of Islamic law (أستاذ الفقه الإسلامي). وIslamic صفة من Islam، تُكتب بحرف I كبير وتأتي قبل الاسم، فلا نقول law Islamic.",
    legal: true,
    oxfordSlug: "islamic",
    wikiFiles: ["LL-Q1860 (eng)-Vealhurl-Islamic.wav", "En-uk-law.ogg"],
    wikiCredit: "File:LL-Q1860 (eng)-Vealhurl-Islamic.wav (Vealhurl / Lingua Libre) & File:En-uk-law.ogg · Wikimedia Commons"
  },

  /* ---------- المفردات (7 كلمات + العبارة القانونية = 8 عبارات، والمتلازمات في tipEn / tip) ---------- */
  vocab: [
    { en: "journey", pos: "noun", ar: "رحلة (طويلة غالبًا)", say: "جِيرْنِي",
      ex: "Our journey across Europe by train was long but beautiful.", exAr: "كانت رحلتنا عبر أوروبا بالقطار طويلة لكنها جميلة.",
      tipEn: "Collocations: a long journey, a journey from … to …, go on a journey. A journey is travel from one place to another, often far; a trip is often short, and you come back. Plural: journeys (vowel + y, so just add -s).",
      tip: "متلازمات: a long journey (رحلة طويلة) وa journey from … to … (رحلة من … إلى …) وgo on a journey (يخرج في رحلة). وjourney انتقال من مكان إلى آخر يكون بعيدًا غالبًا، أما trip فرحلة قصيرة غالبًا يعود منها المسافر. وجمعها journeys بإضافة s فقط لأن قبل y حرف علة.",
      oxfordSlug: "journey_1",
      wikiFile: "En-uk-a journey.ogg",
      wikiCredit: "File:En-uk-a journey.ogg · Wikimedia Commons" },
    { en: "decide", pos: "verb", ar: "يقرّر", say: "دِسَايْد",
      ex: "Last spring, my parents decided to travel to Jordan by car.", exAr: "في الربيع الماضي قرّر والداي أن يسافرا إلى الأردن بالسيارة.",
      tipEn: "Collocation: decide to + verb (decide to travel). decide ends in -e, so the past adds only -d: decided. We say it with an extra syllable, /ɪd/, because it ends in a 'd' sound.",
      tip: "متلازمة: decide to + فعل (decide to travel، أي يقرّر أن يسافر). وتنتهي decide بحرف e فنضيف d وحدها في الماضي: decided، وتُنطق بمقطع زائد /ɪd/ لأن آخرها صوت d.",
      oxfordSlug: "decide",
      wikiFile: "En-us-decide.ogg",
      wikiCredit: "File:En-us-decide.ogg · Wikimedia Commons" },
    { en: "arrive", pos: "verb", ar: "يصل", say: "أَرَايْف",
      ex: "The bus arrived in Madinah early in the morning.", exAr: "وصلت الحافلة إلى المدينة المنورة في الصباح الباكر.",
      tipEn: "Prepositions: arrive in + a city or a country (arrive in Cairo), arrive at + a building or a place (arrive at the airport), and arrive home with no preposition. Never 'arrive to'.",
      tip: "حروف الجر: arrive in مع المدينة أو البلد (arrive in Cairo)، وarrive at مع المبنى أو المكان المحدد (arrive at the airport)، وarrive home بلا حرف جر. ولا نقول arrive to.",
      oxfordSlug: "arrive",
      wikiFile: "En-us-arrive.ogg",
      wikiCredit: "File:En-us-arrive.ogg · Wikimedia Commons" },
    { en: "cross", pos: "verb", ar: "يعبُر (طريقًا أو صحراء أو بحرًا)", say: "كْرُوس",
      ex: "The children crossed the road with their teacher.", exAr: "عبر الأطفال الطريق مع معلمتهم.",
      tipEn: "Collocations: cross the desert, cross the road, cross the sea: go from one side to the other. Past: crossed, with a /t/ sound at the end (no extra syllable).",
      tip: "متلازمات: cross the desert (يعبر الصحراء) وcross the road (يعبر الطريق) وcross the sea (يعبر البحر)، أي ينتقل من جانب إلى جانب. وماضيها crossed، وتُنطق بصوت t في آخرها دون مقطع زائد.",
      oxfordSlug: "cross_1",
      wikiFile: "LL-Q1860 (eng)-Vealhurl-cross.wav",
      wikiCredit: "File:LL-Q1860 (eng)-Vealhurl-cross.wav · Vealhurl / Lingua Libre, Wikimedia Commons" },
    { en: "dangerous", pos: "adjective", ar: "خطير", say: "دَيْنْجَرَس",
      ex: "Driving fast in the rain is dangerous.", exAr: "القيادة بسرعة تحت المطر خطيرة.",
      tipEn: "Opposite: safe. Pattern: It is dangerous to + verb. The noun is danger. The first 'a' sounds like the 'a' in 'day'.",
      tip: "عكسها safe، ونقول It is dangerous to + فعل، والاسم منها danger (خطر). وحرف a الأول فيها يُنطق كصوته في day: «دَيْنْجَرَس».",
      oxfordSlug: "dangerous",
      wikiFile: "En-uk-dangerous.ogg",
      wikiCredit: "File:En-uk-dangerous.ogg · Wikimedia Commons" },
    { en: "stay", pos: "verb", ar: "يمكث / يقيم (مدة من الزمن)", say: "سْتَيْ",
      ex: "We stayed with my aunt in Tabuk for a week.", exAr: "أقمنا عند خالتي في تبوك أسبوعًا.",
      tipEn: "Collocations: stay for two years, stay with a friend, stay in a hotel, stay at home. Spelling: there is a vowel before y, so just add -ed: stayed (not 'staied').",
      tip: "متلازمات: stay for two years (يمكث سنتين) وstay with a friend (يقيم عند صديق) وstay in a hotel (يقيم في فندق) وstay at home (يبقى في البيت). وقبل y حرف علة، فنضيف ed مباشرة: stayed، ولا نكتب staied.",
      oxfordSlug: "stay_1",
      wikiFile: "En-us-stay.ogg",
      wikiCredit: "File:En-us-stay.ogg · Wikimedia Commons" },
    { en: "return", pos: "verb", ar: "يعود / يرجع", say: "رِتِيرْن",
      ex: "My sister returned from Malaysia last month.", exAr: "عادت أختي من ماليزيا الشهر الماضي.",
      tipEn: "Collocations: return home (no 'to' before home), return to + a place (return to Morocco), return from + a place. Past: returned, with a /d/ sound.",
      tip: "متلازمات: return home (يعود إلى بيته أو بلده، بلا to قبل home)، وreturn to + مكان (return to Morocco)، وreturn from + مكان (يعود من). وماضيها returned، وتُنطق بصوت d في آخرها.",
      oxfordSlug: "return_1",
      wikiFile: "En-us-return.ogg",
      wikiCredit: "File:En-us-return.ogg · Wikimedia Commons" }
  ],

  vocabGaps: [
    { s: "The ___ from Riyadh to Dammam takes about four hours by car.", opts: ["journey", "arrive", "dangerous"], a: 0,
      whyEn: "After 'The' we need a noun. A 'journey' is travel from one place to another (from … to …). 'arrive' is a verb, and 'dangerous' is an adjective.",
      why: "بعد The نحتاج اسمًا، وjourney رحلة من مكان إلى آخر (from … to …)، أما arrive ففعل وdangerous صفة.", errCat: "vocab" },
    { s: "We have only one weekend, so we need to ___ between Abha and Taif.", opts: ["cross", "return", "decide"], a: 2,
      whyEn: "'decide between A and B' means choose one of them, and in one weekend they can visit only one city. 'return' means go back, and 'cross between' has no meaning here.",
      why: "decide between A and B تعني يختار أحدهما، وفي عطلة نهاية أسبوع واحدة لا يزورون إلا مدينة واحدة؛ أما return فتعني يعود، ولا معنى لـ cross between هنا.", errCat: "vocab" },
    { s: "Our bus ___ in Makkah late at night, and we were very tired.", opts: ["crossed", "arrived", "decided"], a: 1,
      whyEn: "'arrive in + a city' means get there at the end of a journey. A bus can't 'decide' anything, and 'crossed' doesn't fit with 'in Makkah'.",
      why: "arrive in + مدينة تعني يصل إليها في نهاية الرحلة؛ والحافلة لا تقرّر شيئًا، وcrossed لا تناسب in Makkah.", errCat: "vocab" },
    { s: "In the past, travellers needed camels to ___ the desert.", opts: ["return", "arrive", "cross"], a: 2,
      whyEn: "We 'cross' a desert, a road or a sea: we go from one side to the other. 'arrive' needs 'in' or 'at', and we don't say 'return the desert'.",
      why: "نقول cross the desert أي نعبرها من جانب إلى آخر، أما arrive فتحتاج in أو at، ولا نقول return the desert.", errCat: "vocab" },
    { s: "Please don't swim here: the water is deep and ___.", opts: ["safe", "dangerous", "foreign"], a: 1,
      whyEn: "'Please don't swim here' tells us that the water can hurt you, so it is dangerous. 'safe' is the opposite, and 'foreign' means from another country.",
      why: "عبارة Please don't swim here تدل على أن الماء قد يؤذي السابح، فهو خطير dangerous؛ أما safe فعكسها، وforeign تعني أجنبيًا من بلد آخر.", errCat: "vocab" },
    { s: "We loved Abha, so we ___ there for two more days.", opts: ["stayed", "crossed", "arrived"], a: 0,
      whyEn: "'stay' means remain in a place, and 'for two more days' shows how long. You 'arrive' at the start of a visit, so it doesn't go with 'for two more days'.",
      why: "stay تعني يبقى في المكان، وfor two more days تبيّن المدة؛ أما arrive فتكون في بداية الزيارة، فلا تناسب for two more days.", errCat: "vocab" },
    { s: "Ali studied in Australia for four years, and then he ___ to Riyadh to work.", opts: ["decided", "arrived", "returned"], a: 2,
      whyEn: "'returned to Riyadh' means he was back in his city after Australia. We say 'arrive in Riyadh' (not 'arrive to'), and 'decided to' needs a verb after it.",
      why: "returned to Riyadh تعني أنه عاد إلى مدينته بعد أستراليا؛ ونقول arrive in Riyadh لا arrive to، وdecided to يحتاج بعده فعلًا.", errCat: "vocab" },
    { s: "In Saudi Arabia, judges study ___ for many years before they work in court.", opts: ["law Islamic", "Islamic law", "Islam law"], a: 1,
      whyEn: "In English the adjective comes before the noun: Islamic law (not 'law Islamic', the Arabic order). 'Islamic' is the adjective from 'Islam', so we don't say 'Islam law'.",
      why: "في الإنجليزية تأتي الصفة قبل الاسم: Islamic law، لا law Islamic كما في ترتيب العربية، وIslamic هي الصفة من Islam فلا نقول Islam law.", errCat: "vocab" }
  ],

  /* ---------- المرحلة 3: بطاقات الشرح (6 بطاقات: 4 شرح + الأخطاء + الخلاصة) ---------- */
  gCards: [
    {
      tEn: "Past Simple: Finished Actions",
      t: "الماضي البسيط: أحداث انتهت",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Past Simple: Finished Actions</span><small>الماضي البسيط: أحداث بدأت وانتهت</small></h2>' +
        '<p class="en-p" dir="ltr">Use the <b>Past Simple</b> for an action that <b>started and finished in the past</b>. For most verbs, add <b>-ed</b>:</p>' +
        '<p class="formula">verb + <b>-ed</b> · work → <b>worked</b> · visit → <b>visited</b></p>' +
        '<div class="xbox"><span class="xtag s" dir="ltr">Now · Present Simple · المضارع</span><p class="xen">Salem works in Riyadh.</p></div>' +
        '<div class="xbox"><span class="xtag c" dir="ltr">Finished · Past Simple · الماضي</span><p class="xen">Last year, Salem worked in Abha.</p></div>' +
        TL_SVG +
        '<h3 class="bi-h"><span class="en" dir="ltr">Time words for past stories</span><small>كلمات زمن في الحديث عن الماضي</small></h3>' +
        '<ul class="vlist"><li>yesterday <small>أمس</small></li><li>last week <small>الأسبوع الماضي</small></li><li>in 1325 <small>سنة 1325</small></li><li>ten years ago <small>قبل عشر سنوات</small></li><li>for 30 years <small>مدة 30 سنة</small></li><li>then <small>ثم / بعد ذلك</small></li></ul>' +
        '<div class="tip" dir="ltr"><p><b>ago</b> comes <b>after</b> the time: ten years <b>ago</b>. Use <b>in</b> with a year and <b>for</b> with a period of time.</p><div class="pairs"><span class="yes">The museum opened ten years ago.</span><span class="no">The museum opened before ten years.</span></div></div>',
      arHtml:
        '<p>في العربية نقول «عمِلَ» و«زارَ» للماضي، وفي الإنجليزية نضيف <bdi class="en">ed</bdi> إلى أكثر الأفعال: <bdi class="en">work → worked</bdi> و<bdi class="en">visit → visited</bdi>.</p>' +
        '<p>ونستعمل <b>الماضي البسيط</b> لحدث بدأ وانتهى في وقت مضى، وتدلّ عليه كلمات مثل <bdi class="en">yesterday</bdi> و<bdi class="en">last week</bdi> و<bdi class="en">in 1325</bdi>.</p>' +
        '<p>وتأتي <bdi class="en">ago</bdi> بعد المدة: <bdi class="en">ten years ago</bdi> أي قبل عشر سنوات، ولا نقول <bdi class="en">before ten years</bdi>. ونستعمل <bdi class="en">in</bdi> مع السنة، و<bdi class="en">for</bdi> مع المدة (<bdi class="en">for 30 years</bdi>)، و<bdi class="en">then</bdi> بمعنى «ثم».</p>'
    },
    {
      tEn: "One Form for Every Subject",
      t: "صيغة واحدة مع كل الضمائر",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">One Form for Every Subject</span><small>صيغة واحدة مع كل الضمائر</small></h2>' +
        '<p class="en-p" dir="ltr">In the Past Simple, the verb is the <b>same for every subject</b>. There is no -s with he / she / it, and there is no <b>was / were</b> before the verb.</p>' +
        '<div class="tbl"><table><thead><tr><th>Subject</th><th>Present · المضارع</th><th>Past · الماضي</th></tr></thead><tbody>' +
        '<tr><td>I / you / we / they</td><td>We <span class="hs">play</span></td><td>We <span class="hc">played</span></td></tr>' +
        '<tr><td>he / she / it</td><td>She <span class="hs">plays</span></td><td>She <span class="hc">played</span></td></tr></tbody></table></div>' +
        '<div class="tip" dir="ltr"><p><b>No was / were before a verb · لا was / were قبل الفعل:</b></p><div class="pairs"><span class="yes">My sister cleaned her room.</span><span class="no">My sister was clean her room.</span></div></div>' +
        '<h3 class="bi-h"><span class="en" dir="ltr">Review: was / were</span><small>مراجعة was / were</small></h3>' +
        '<p class="en-p" dir="ltr">The verb <b>be</b> has two past forms. Use them with adjectives, places, ages and nouns:</p>' +
        '<div class="sigs">' +
          '<div class="sig s"><h3 dir="ltr">was<small class="sig-ar">I / he / she / it</small></h3><ul><li>My grandfather was a pilot.</li><li>The hotel was near the sea.</li></ul></div>' +
          '<div class="sig c"><h3 dir="ltr">were<small class="sig-ar">you / we / they</small></h3><ul><li>Your photos were beautiful.</li><li>We were in Abha last week.</li></ul></div>' +
        '</div>',
      arHtml:
        '<p>في الماضي البسيط يبقى الفعل <b>واحدًا مع كل الضمائر</b>: <bdi class="en">I played</bdi> و<bdi class="en">she played</bdi> و<bdi class="en">they played</bdi>، فلا نضيف <bdi class="en">s</bdi> مع <bdi class="en">he / she / it</bdi>.</p>' +
        '<p>ولا نضع <bdi class="en">was / were</bdi> قبل الفعل: نقول <bdi class="en">My sister cleaned her room</bdi> ولا نقول <bdi class="en">My sister was clean her room</bdi>.</p>' +
        '<p>أما فعل الكون <bdi class="en">be</bdi> فله صيغتان: <b>was</b> مع <bdi class="en">I / he / she / it</bdi> والمفرد، و<b>were</b> مع <bdi class="en">you / we / they</bdi> والجمع، ونستعملهما مع الصفة والمكان والعمر والاسم.</p>'
    },
    {
      tEn: "Spelling of -ed",
      t: "إملاء ed",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Spelling of -ed</span><small>إملاء ed</small></h2>' +
        '<ul class="spell" dir="ltr">' +
          '<li>Most verbs: add <b>-ed</b><span class="s-en">work → worked · visit → visited · cross → crossed</span></li>' +
          '<li>The verb ends in <b>-e</b>: add <b>-d</b> only<span class="s-en">arrive → arrived · decide → decided · live → lived</span></li>' +
          '<li>Consonant + <b>y</b>: change y to <b>-ied</b><span class="s-en">study → studied · carry → carried</span></li>' +
          '<li>Vowel + <b>y</b>: just add <b>-ed</b><span class="s-en">stay → stayed · play → played</span></li>' +
          '<li>Short verb, one vowel + one consonant: double the last letter (not w, x or y)<span class="s-en">stop → stopped · plan → planned · but fix → fixed</span></li>' +
          '<li>British English also doubles <b>l</b><span class="s-en">travel → travelled (US: traveled) · cancel → cancelled</span></li>' +
        '</ul>' +
        '<div class="tip" dir="ltr"><p><b>No double letter</b> after two vowels, or in longer verbs like <b>visit</b> and <b>open</b>:</p><div class="pairs"><span class="yes">rained · needed · visited · opened</span><span class="no">rainned · needded · visitted · openned</span></div></div>',
      arHtml:
        '<p>نضيف <bdi class="en">ed</bdi> إلى أكثر الأفعال (<bdi class="en">worked</bdi>)، و<bdi class="en">d</bdi> وحدها إذا انتهى الفعل بحرف <bdi class="en">e</bdi> (<bdi class="en">arrived</bdi>).</p>' +
        '<p>وإذا سبق <bdi class="en">y</bdi> حرف ساكن تحولت إلى <bdi class="en">ied</bdi> (<bdi class="en">studied</bdi>)، وإذا سبقها حرف علة بقيت وأضفنا <bdi class="en">ed</bdi> (<bdi class="en">stayed</bdi>).</p>' +
        '<p>ونضاعف الحرف الأخير في الفعل القصير إذا سبقه حرف علة واحد (<bdi class="en">stopped, planned</bdi>)، إلا w وx وy (<bdi class="en">fixed</bdi>)، وتضاعف الإنجليزية البريطانية حرف <bdi class="en">l</bdi> أيضًا (<bdi class="en">travelled</bdi>)، والأمريكية تكتبه بلام واحدة (<bdi class="en">traveled</bdi>)، وكلاهما صحيح. ولا نضاعف بعد حرفي علة (<bdi class="en">rained</bdi>) ولا في مثل <bdi class="en">visited</bdi>.</p>'
    },
    {
      tEn: "Saying -ed: /t/, /d/ or /ɪd/",
      t: "نطق ed بثلاث طرق",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Saying -ed: /t/, /d/ or /ɪd/</span><small>نطق ed بثلاث طرق</small></h2>' +
        '<p class="en-p" dir="ltr">We always write <b>-ed</b>, but we say it in three ways. Most of the time, <b>-ed</b> is <b>not</b> an extra syllable:</p>' +
        '<div class="tbl"><table><thead><tr><th>Sound</th><th>After · بعد</th><th>Examples</th></tr></thead><tbody>' +
        '<tr><td><span class="hs">/t/</span></td><td>p, k, s, sh, ch, f, x</td><td>stopped · worked · crossed · watched</td></tr>' +
        '<tr><td><span class="hs">/d/</span></td><td>vowels and most other sounds (n, l, v, y …)</td><td>stayed · travelled · returned · arrived</td></tr>' +
        '<tr><td><span class="hc">/ɪd/</span></td><td><b>t</b> and <b>d</b> only</td><td>visited · started · decided · needed</td></tr></tbody></table></div>' +
        '<div class="tip" dir="ltr"><p><b>An extra syllable only after t and d · مقطع زائد بعد t وd فقط:</b> visit-ed, decid-ed. But <b>worked</b> has one syllable.</p><div class="pairs"><span class="yes">worked → one syllable: workt</span><span class="no">worked → two syllables: work-id</span></div></div>',
      arHtml:
        '<p>نكتب <bdi class="en">ed</bdi> دائمًا، لكن ننطقها بثلاث طرق:</p>' +
        '<p>١) <b>/t/</b> بعد الأصوات المهموسة مثل <bdi class="en">p, k, s, sh, ch, f</bdi>: <bdi class="en">worked, crossed</bdi>.</p>' +
        '<p>٢) <b>/d/</b> بعد أصوات العلة وأكثر الأصوات الأخرى: <bdi class="en">stayed, returned, arrived</bdi>.</p>' +
        '<p>٣) <b>/ɪd/</b> بمقطع زائد بعد <bdi class="en">t</bdi> و<bdi class="en">d</bdi> وحدهما: <bdi class="en">visited, decided</bdi>. فلا ننطق <bdi class="en">worked</bdi> «وُرْكِد» بمقطعين، بل «وُرْكْت» بمقطع واحد.</p>'
    },
    {
      tEn: "Common Arab Mistakes",
      t: "أخطاء العرب الشائعة",
      bilingual: true,
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Common Arab Mistakes</span><small>أخطاء يقع فيها كثير من العرب في الماضي البسيط</small></h2>' +
        '<ul class="mist">' +
          '<li><span class="no">Last month, I was visit my grandmother in Hail.</span><span class="yes">Last month, I visited my grandmother in Hail.</span><p class="en-m" dir="ltr">Never put <b>was / were</b> before a verb. The past verb alone is enough.</p><p>لا نضع <bdi class="en">was / were</bdi> قبل الفعل، فالفعل الماضي وحده يكفي.</p></li>' +
          '<li><span class="no">Three years ago, my cousin study in Amman.</span><span class="yes">Three years ago, my cousin studied in Amman.</span><p class="en-m" dir="ltr">With a past time word (<b>ago, yesterday, last year</b>), the verb must be in the past.</p><p>مع كلمة زمن ماضٍ (<bdi class="en">ago</bdi> و<bdi class="en">yesterday</bdi> و<bdi class="en">last year</bdi>) يجب أن يكون الفعل ماضيًا.</p></li>' +
          '<li><span class="no">The bus stoped twice, and we stayied in Taif one night.</span><span class="yes">The bus stopped twice, and we stayed in Taif one night.</span><p class="en-m" dir="ltr"><b>stop → stopped</b> (double p). <b>stay → stayed</b> (vowel + y: just add -ed).</p><p>تصبح <bdi class="en">stop</bdi> بمضاعفة p: <bdi class="en">stopped</bdi>، وتصبح <bdi class="en">stay</bdi> بإضافة ed فقط: <bdi class="en">stayed</bdi>، لأن قبل y حرف علة.</p></li>' +
          '<li><span class="no">i arrived to Jeddah at 2020.</span><span class="yes">I arrived in Jeddah in 2020.</span><p class="en-m" dir="ltr">Write <b>I</b> as a capital letter. Say <b>arrive in</b> + a city, and <b>in</b> + a year.</p><p>نكتب <bdi class="en">I</bdi> بحرف كبير، ونقول <bdi class="en">arrive in</bdi> مع المدينة، و<bdi class="en">in</bdi> مع السنة.</p></li>' +
        '</ul>'
    },
    {
      tEn: "Summary",
      t: "الخلاصة",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Quick Summary</span><small>الخلاصة</small></h2>' +
        '<div class="sumc" dir="ltr"><h3>In Four Lines · في أربعة أسطر</h3>' +
          '<p><b>Use · الاستعمال</b><span>Finished actions in the past: yesterday, last year, in 1325, ten years ago, for 30 years, then</span></p>' +
          '<p><b>Form · التركيب</b><span>verb + -ed, the same for every subject (I / she / they worked) · was / were for be</span></p>' +
          '<p><b>Spelling · الإملاء</b><span>worked · arrived · studied · stayed · stopped · travelled (US: traveled)</span></p>' +
          '<p><b>Sounds · النطق</b><span>/t/ worked · /d/ stayed · /ɪd/ visited (only after t and d)</span></p>' +
        '</div>' +
        '<p class="en-p" dir="ltr">Now let\'s practise: 16 guided exercises (4 of each type), one question per screen.</p>',
      arHtml:
        '<p><b>الاستعمال:</b> لحدث انتهى في الماضي، مع كلمات مثل <bdi class="en">yesterday</bdi> و<bdi class="en">ago</bdi> و<bdi class="en">in 1325</bdi>.</p>' +
        '<p><b>التركيب:</b> الفعل + <bdi class="en">ed</bdi> بصيغة واحدة مع كل الضمائر، و<bdi class="en">was / were</bdi> لفعل الكون.</p>' +
        '<p><b>الإملاء والنطق:</b> <bdi class="en">arrived, studied, stayed, stopped, travelled</bdi>، وتُنطق <bdi class="en">ed</bdi> مقطعًا زائدًا بعد <bdi class="en">t</bdi> و<bdi class="en">d</bdi> وحدهما.</p>' +
        '<p>والآن نتدرّب: 16 تمرينًا موجّهًا (4 من كل نمط)، سؤال في كل شاشة.</p>'
    }
  ],

  /* ---------- المرحلة 3: التمارين (16 تمرينًا، 4 من كل نمط، بجمل جديدة لم ترد في الشرح، والشاذ فيها was / were وحدهما) ---------- */
  gA: [
    { s: "In 1995, my father ___ at a museum in Cairo.", opts: ["worked", "works"], a: 0,
      whyEn: "'In 1995' is a finished time in the past, so we use the Past Simple: worked. 'works' is the Present Simple, for habits and facts now.",
      why: "In 1995 زمن انتهى في الماضي، فنستعمل الماضي البسيط worked، أما works فللمضارع البسيط وعادات الحاضر وحقائقه.", errCat: "tense" },
    { s: "My classmates ___ in the library until ten o'clock last night.", opts: ["studyed", "studied"], a: 1,
      whyEn: "study ends in a consonant + y (d + y), so y changes to -ied: studied. 'studyed' is a common spelling mistake.",
      why: "تنتهي study بحرف ساكن ثم y، فتتحول y إلى ied: studied، وكتابة studyed خطأ شائع.", errCat: "spelling" },
    { s: "The streets of the old city ___ very quiet when we arrived.", opts: ["was", "were"], a: 1,
      whyEn: "The subject is 'The streets' (plural), so we use 'were'. Don't look at 'city': it is not the subject.",
      why: "الفاعل The streets جمع فنستعمل were، ولا تنظر إلى city لأنها ليست الفاعل.", errCat: "agreement" },
    { s: "Last summer, my cousins ___ the old part of Jeddah.", opts: ["visited", "were visit"], a: 0,
      whyEn: "Never put 'were' before a verb. For a finished action, the verb + -ed is enough: visited.",
      why: "لا نضع were قبل الفعل، وللحدث المنتهي يكفي الفعل مع ed: visited.", errCat: "be_verb" }
  ],

  gB: [
    { s: "I droped my phone in the taxi on the way to the airport.", ok: false, fix: "I dropped my phone in the taxi on the way to the airport.",
      whyEn: "drop is a short verb with one vowel + one consonant (o + p), so we double the p: dropped.",
      why: "drop فعل قصير فيه حرف علة واحد ثم حرف ساكن (o ثم p)، فنضاعف p: dropped.", errCat: "spelling" },
    { s: "Last Friday, we visit the old market in Taif.", ok: false, fix: "Last Friday, we visited the old market in Taif.",
      whyEn: "'Last Friday' is in the past, so the verb needs -ed: visited. 'visit' is the present form.",
      why: "Last Friday تدل على الماضي، فيحتاج الفعل إلى ed: visited، أما visit فصيغة المضارع.", errCat: "tense" },
    { s: "My grandmother lived in Makkah for forty years.", ok: true,
      whyEn: "Correct: 'lived' is the past of live (+d after e), and 'for forty years' tells us how long.",
      why: "صحيحة: lived ماضي live بإضافة d بعد e، وfor forty years تبيّن المدة.", errCat: "tense" },
    { s: "The people in the hotel was very kind to us.", ok: false, fix: "The people in the hotel were very kind to us.",
      whyEn: "'people' is a plural noun, so we use 'were', not 'was'.",
      why: "كلمة people اسم جمع، فنستعمل were لا was.", errCat: "agreement" }
  ],

  gC: [
    { pre: "Last year, my cousin", verb: "try", post: "Moroccan food for the first time in Tangier.", ans: ["tried"],
      whyEn: "'Last year' shows the past. try ends in a consonant + y (r + y), so y changes to -ied: tried.",
      why: "Last year تدل على الماضي، وتنتهي try بحرف ساكن ثم y، فتتحول y إلى ied: tried.", errCat: "spelling" },
    { pre: "In 2019, my brother", verb: "travel", post: "to Canada to study engineering.", ans: ["travelled", "traveled"],
      whyEn: "'In 2019' is past. British English doubles the l: travelled; American English writes traveled. Both are correct.",
      why: "In 2019 زمن ماضٍ، وتضاعف الإنجليزية البريطانية حرف l: travelled، والأمريكية تكتب traveled، وكلاهما صحيح.", errCat: "spelling" },
    { pre: "My parents", verb: "be", post: "in Makkah for Umrah last month.", ans: ["were"],
      whyEn: "'My parents' is plural (they), and 'last month' is past, so we use 'were'.",
      why: "My parents جمع (they)، وlast month ماضٍ، فنستعمل were.", errCat: "agreement" },
    { pre: "Last week, after a long talk, my brother and I", verb: "decide", post: "to visit Madinah together in Ramadan.", ans: ["decided"],
      whyEn: "'Last week' is past. decide ends in -e, so we add only -d: decided. The form is the same for 'my brother and I'.",
      why: "Last week تدل على الماضي، وتنتهي decide بحرف e فنضيف d وحدها: decided، والصيغة نفسها مع my brother and I.", errCat: "spelling" }
  ],

  gD: [
    { chips: ["moved", "in 2015.", "My uncle", "to Jeddah"], ans: "My uncle moved to Jeddah in 2015.",
      whyEn: "Subject (My uncle) + past verb (moved) + place (to Jeddah) + time (in 2015) at the end.",
      why: "الفاعل My uncle ثم الفعل الماضي moved ثم المكان to Jeddah ثم الزمن in 2015 في آخر الجملة.", errCat: "word_order" },
    { chips: ["by the sea.", "stayed", "My friends", "in a small hotel"], ans: "My friends stayed in a small hotel by the sea.",
      whyEn: "Subject (My friends) + past verb (stayed) + where (in a small hotel) + more about the place (by the sea).",
      why: "الفاعل My friends ثم الفعل الماضي stayed ثم المكان in a small hotel ثم by the sea.", errCat: "word_order" },
    { chips: ["were", "last weekend.", "The museums", "very busy"], ans: "The museums were very busy last weekend.",
      whyEn: "Plural subject (The museums) + were + adjective (very busy) + past time (last weekend).",
      why: "الفاعل الجمع The museums ثم were ثم الصفة very busy ثم الزمن الماضي last weekend.", errCat: "word_order" },
    { chips: ["fifty years", "My grandfather", "ago.", "visited Egypt"], ans: "My grandfather visited Egypt fifty years ago.",
      whyEn: "'ago' comes after the time: fifty years ago, at the end of the sentence.",
      why: "تأتي ago بعد المدة: fifty years ago، في آخر الجملة.", errCat: "word_order" }
  ],

  /* ---------- المرحلة 4: القراءة (إيميل يوسف عن ابن بطوطة: الأفعال المنتظمة وwas / were، و[[born]] وحده من الشاذ شرحًا لا تدريبًا) ---------- */
  reading: {
    title: "Ibn Battuta: A Great Traveller from My City",
    from: "Youssef", to: "Fahad",
    fromMeta: "Youssef · Student, Tangier, Morocco",
    art: DESERT_SVG,
    targetSeconds: 130,
    // أسماء ألوان التظليل في القراءة الثانية
    lg1: "Regular past: verb + -ed · الماضي المنتظم",
    lg2: "was / were · فعل الكون في الماضي",
    lg3: "Time words · كلمات الزمن",
    hlLabel: "Highlight the past · إظهار الماضي",
    insight: {
      titleEn: "Finished Actions in Youssef's Email",
      titleAr: "الأحداث المنتهية في إيميل يوسف",
      l1En: "For finished actions, Youssef adds -ed or -d to the verb, in the same form with I and he:",
      ex1: "I loved your photos · I borrowed his book · he crossed North Africa · he travelled · I decided to write",
      l2En: "For the past of be, he uses was, and time words show when each action happened:",
      ex2: "that was only the beginning · A week ago · In 1325 · Later · then",
      arHtml: '<p>لاحظ أن يوسف أضاف <b style="color:var(--dark)">ed</b> أو <b style="color:var(--dark)">d</b> إلى الأفعال المنتظمة لكل حدث انتهى (<bdi class="en">loved, borrowed, crossed, travelled, decided</bdi>)، بالصيغة نفسها مع <bdi class="en">I</bdi> و<bdi class="en">he</bdi>، واستعمل <b style="color:var(--accent-ink)">was</b> ماضيًا لفعل الكون (<bdi class="en">was only the beginning</bdi>)، ودلّت كلمات الزمن على وقت كل حدث (<bdi class="en">A week ago, In 1325, Later, then</bdi>).</p>'
    },
    introEn: "Youssef is a student in Tangier, Morocco. He is writing to his Saudi friend Fahad about Ibn Battuta, a famous traveller who was born in his city.",
    intro: "يوسف طالب في طنجة بالمغرب، ويكتب إلى صديقه السعودي فهد عن ابن بطوطة، الرحالة المشهور الذي وُلد في مدينته.",
    // <<s:..>> فعل منتظم في الماضي · <<c:..>> was / were · <<t:..>> كلمة زمن
    // {word|key} كلمة من مفردات الدرس الثماني وحدها · [[text|معنى]] كلمة مساعدة
    paras: [
      "Hi Fahad,",
      "Thank you for your email about Eid customs in Riyadh. I <<s:loved>> your photos! You <<s:asked>> me about Ibn Battuta. <<t:A week ago>>, our history teacher <<s:talked>> about him in class, and <<t:yesterday>> I <<s:[[borrowed|استعرتُ]]>> his book from our local library.",
      "Ibn Battuta <<c:was>> [[born|وُلِد (was born عبارة ثابتة)]] in [[Tangier|طنجة]], like me, and he <<s:studied>> {Islamic law} here. <<t:In 1325>>, when he <<c:was>> 21, he <<s:started>> a long {journey} to Makkah for [[Hajj|الحج]]. He <<s:{crossed|cross}>> [[North Africa|شمال أفريقيا]] and <<s:{arrived|arrive}>> in Cairo. <<t:Later>>, he <<s:[[reached|وصل إلى]]>> Makkah.",
      "But that <<c:was>> only the [[beginning|البداية]]. He <<s:travelled>> <<t:for about 30 years>> and about 120,000 [[kilometres|كيلومتر]], and he <<s:visited>> many foreign countries. The roads <<c:were>> often {dangerous}. In India, he <<s:{stayed|stay}>> in Delhi and <<s:worked>> as a judge there. He <<s:worked>> as a judge in the [[Maldives|جزر المالديف]], too.",
      "<<t:In the end>>, he <<s:{returned|return}>> to Morocco, and <<t:then>> he <<s:[[dictated|أملى]]>> the story of his journey to a [[writer|كاتب]]. The name of the book is the [[Rihla|الرحلة]] (The Journey).",
      "Today we travel by plane, so his story [[sounds|تبدو]] a little strange to me. I <<s:{decided|decide}>> to write to you about him because you love history.",
      "I miss our long talks! When you visit Tangier, you can {stay} with my family.",
      "Best wishes,<br>Youssef"
    ],
    predict: {
      qEn: "Before you read: Why is Youssef writing about Ibn Battuta?",
      q: "توقّع قبل القراءة: لماذا يكتب يوسف عن ابن بطوطة؟",
      optsEn: ["Fahad asked him about Ibn Battuta.", "His teacher asked him to write an email.", "He wants to sell Fahad a book."],
      opts: ["لأن فهدًا سأله عن ابن بطوطة", "لأن معلمه طلب منه أن يكتب إيميلًا", "لأنه يريد أن يبيع فهدًا كتابًا"], a: 0,
      revealEn: "Fahad asked Youssef about Ibn Battuta, and Youssef decided to write because Fahad loves history.",
      reveal: "سأل فهدٌ يوسفَ عن ابن بطوطة، فقرر يوسف أن يكتب إليه لأن فهدًا يحب التاريخ."
    },
    questions: [
      { q: "Who talked about Ibn Battuta in class?", opts: ["Youssef's history teacher", "A writer from Cairo", "Fahad's father"], a: 0,
        ev: "A week ago, our history teacher talked about him in class, and yesterday I borrowed his book from our local library.",
        whyEn: "Near the start, Youssef writes 'our history teacher talked about him in class'. The email doesn't say that a writer from Cairo or Fahad's father talked about him.",
        why: "يكتب يوسف في أول الإيميل أن معلم التاريخ تحدث عنه في الفصل، ولا يذكر الإيميل أن كاتبًا من القاهرة أو والد فهد تحدث عنه.", errCat: "reading" },
      { q: "In Tangier, Ibn Battuta studied …", opts: ["medicine", "history", "Islamic law"], a: 2,
        ev: "Ibn Battuta was born in Tangier, like me, and he studied Islamic law here.",
        whyEn: "Youssef writes that he studied Islamic law 'here', and 'here' means Tangier. History is the subject of Youssef's teacher.",
        why: "يكتب يوسف أنه درس الفقه الإسلامي here، أي في طنجة؛ أما التاريخ فمادة معلم يوسف.", errCat: "reading" },
      { tf: true, q: "Ibn Battuta was 30 when he started his journey to Makkah.", a: false,
        ev: "In 1325, when he was 21, he started a long journey to Makkah for Hajj.",
        whyEn: "False: he was 21 in 1325. 30 is the number of years that he travelled.",
        why: "خطأ؛ كان عمره 21 سنة عام 1325، أما 30 فعدد السنوات التي قضاها في السفر.", errCat: "reading" },
      { q: "On his way to Makkah, Ibn Battuta first …", opts: ["arrived in Cairo", "stayed in Delhi", "returned to Morocco"], a: 0,
        ev: "He crossed North Africa and arrived in Cairo. Later, he reached Makkah.",
        whyEn: "He crossed North Africa and arrived in Cairo; 'Later' shows that Makkah came after Cairo. Delhi and the return to Morocco came at other times in his travels.",
        why: "عبر شمال أفريقيا ووصل إلى القاهرة، وكلمة Later تدل على أن مكة جاءت بعد القاهرة؛ أما دلهي والعودة إلى المغرب فكانتا في مراحل أخرى من رحلاته.", errCat: "reading" },
      { q: "What does the number 120,000 tell us?", opts: ["How many countries he visited", "How many kilometres he travelled", "How many books he dictated"], a: 1,
        ev: "He travelled for about 30 years and about 120,000 kilometres, and he visited many foreign countries.",
        whyEn: "120,000 is the number of kilometres. Youssef writes 'many foreign countries' with no number, and the email talks about one book.",
        why: "العدد 120,000 هو عدد الكيلومترات؛ ويكتب يوسف many foreign countries بلا عدد، والإيميل يتحدث عن كتاب واحد.", errCat: "reading" },
      { q: "What was often dangerous?", opts: ["His studies", "The roads", "The book"], a: 1,
        ev: "The roads were often dangerous.",
        whyEn: "Youssef writes 'The roads were often dangerous'. 'were' goes with the plural 'roads'.",
        why: "يكتب يوسف The roads were often dangerous، أي أن الطرق كانت خطيرة في أحيان كثيرة، وwere تناسب الجمع roads.", errCat: "reading" },
      { q: "Ibn Battuta worked as a judge in …", opts: ["Cairo and Makkah", "Tangier and Cairo", "Delhi and the Maldives"], a: 2,
        ev: "In India, he stayed in Delhi and worked as a judge there. He worked as a judge in the Maldives, too.",
        whyEn: "The email says that he worked as a judge in Delhi (India) and in the Maldives. It doesn't say that he worked in Cairo, Makkah or Tangier.",
        why: "يذكر الإيميل أنه عمل قاضيًا في دلهي بالهند وفي جزر المالديف، ولا يذكر أنه عمل في القاهرة أو مكة أو طنجة.", errCat: "reading" },
      { tf: true, q: "A writer helped Ibn Battuta with the book about his journey.", a: true,
        ev: "In the end, he returned to Morocco, and then he dictated the story of his journey to a writer.",
        whyEn: "True: to 'dictate' is to say words aloud while another person writes them. So a writer helped him with the book.",
        why: "صحيح؛ فمعنى dictate أن يُملي المرء الكلام بصوته ويكتبه غيره، فقد أعانه كاتب على الكتاب.", errCat: "reading" }
    ]
  },

  /* ---------- المرحلة 5: الكتابة (4 جمل منفصلة على الأقل عن رحلة في الماضي: أفعال منتظمة وكلمة زمن وكلمتان من الدرس) ---------- */
  writing: {
    taskEn: "Write at least 4 separate sentences about a trip or a journey in your past: where you travelled, when, how long you stayed, and what you visited. Use at least 2 different regular past verbs (visited, stayed, arrived, travelled …), a past time word (last summer, two years ago, in 2023), and at least 2 words from today's lesson. You can also use was / were.",
    task: "اكتب 4 جمل منفصلة على الأقل عن رحلة قمت بها في الماضي: إلى أين سافرت ومتى، وكم مكثت، وماذا زرت. استعمل فعلين مختلفين على الأقل من الأفعال المنتظمة في الماضي (visited وstayed وarrived وtravelled …)، وكلمة زمن ماضية (last summer أو two years ago أو in 2023)، وكلمتين على الأقل من كلمات الدرس، ولك أن تستعمل was / were أيضًا.",
    placeholder: "Last summer, I travelled to …\nWe stayed …",
    checks: [
      { k: "sentences", tEn: "At least 4 separate sentences (capital letter + period . for each)", t: "4 جمل منفصلة على الأقل (بحرف كبير ونقطة لكل جملة)",
        ok: function(a){ return a.sentences >= 4; } },
      { k: "regular", tEn: "At least 2 different regular past verbs with -ed (visited, stayed, arrived …)", t: "فعلان مختلفان على الأقل من الأفعال المنتظمة في الماضي بـ ed (visited وstayed وarrived …)", ex: "We visited … · I stayed … · They arrived …",
        ok: function(a, text){ return wEdVerbs(text) >= 2; } },
      { k: "time", tEn: "At least 1 past time word (yesterday, last year, two weeks ago, in 2023, for a week)", t: "كلمة زمن ماضية واحدة على الأقل (yesterday أو last year أو two weeks ago أو in 2023 أو for a week)", ex: "Last summer, … · Two years ago, … · We stayed there for a week.",
        ok: function(a, text){ return W_TIME.test(wNorm(text)); } },
      { k: "vocab", tEn: "At least 2 words/phrases from today's lesson", t: "كلمتان أو عبارتان على الأقل من درس اليوم", ex: "journey · decide · arrive · cross · dangerous · stay · return · Islamic law",
        ok: function(a, text){ var s = wNorm(text); return W_VOCAB.filter(function(re){ return re.test(s); }).length >= 2; } }
    ],
    modelMarked: "<<t:Two years ago>>, my parents <<s:{decided|decide}>> to visit Madinah, and I <<s:travelled>> with them. The {journey} from Riyadh <<c:was>> long, so we <<s:stopped>> in Qassim for lunch. We <<s:{arrived|arrive}>> in Madinah in the evening and <<s:{stayed|stay}>> in a hotel near the Prophet's Mosque. We <<s:prayed>> there every day, and in the afternoons we <<s:walked>> in the old markets. The weather <<c:was>> warm, and the markets <<c:were>> full of [[visitors|الزوار]]. We <<s:{returned|return}>> home <<t:after a week>>, and I still miss those days.",
    model: "Two years ago, my parents decided to visit Madinah, and I travelled with them. The journey from Riyadh was long, so we stopped in Qassim for lunch. We arrived in Madinah in the evening and stayed in a hotel near the Prophet's Mosque. We prayed there every day, and in the afternoons we walked in the old markets. The weather was warm, and the markets were full of visitors. We returned home after a week, and I still miss those days.",
    legendEn: "Light blue = regular past verbs (-ed) · Terracotta = was / were · Dashed = past time words",
    legendAr: "الأزرق الفاتح للأفعال المنتظمة في الماضي (ed)، والطوبي لـ was / were، والإطار المنقّط لكلمات الزمن الماضية.",
    acceptExamples: [
      "Last summer, I visited my uncle in Jeddah. The journey by car was very long. I stayed with him for two weeks, and we walked by the sea every evening. I returned to Riyadh on Saturday.",
      "In 2023, my brother and I traveled to Dubai by car. We crossed the border at night and arrived very late. We stayed with our cousins for five days. It’s still my favourite trip.",
      "Three months ago, my family decided to do Umrah. We arrived in Makkah on Thursday night. The mosque was very busy, but we were happy. We returned home after four days.",
      "Last August, my family and I travelled to Abha. The journey was long but beautiful. We stayed in a small hotel near the mountains. We returned home after a week."
    ]
  },

  /* ---------- «اسأل المعلم»: أسئلة مقترحة عن قاعدة الدرس ---------- */
  askChips: [
    "متى نضيف d وحدها ومتى نضيف ed؟",
    "لماذا نكتب studied بـ ied ونكتب stayed بـ ed؟",
    "كيف أنطق ed في worked وvisited وarrived؟",
    "ما الفرق بين ago وfor وin مع الزمن؟"
  ],

  /* ---------- المرحلة 6: الاختبار القصير (10 أسئلة: 7 قواعد و2 مفردات وسؤال قانوني · النجاح 8 من 10) ---------- */
  quiz: [
    { s: "My grandparents ___ to Makkah for Hajj in 1998.", opts: ["travel", "travelled", "are travelling"], a: 1, tag: "Grammar · قواعد",
      whyEn: "'in 1998' is a finished time in the past, so we need the Past Simple: travelled. 'travel' and 'are travelling' are present forms.",
      why: "in 1998 زمن انتهى في الماضي، فنحتاج الماضي البسيط travelled، أما travel وare travelling فصيغتان للمضارع.", errCat: "tense" },
    { s: "Which sentence has the correct spelling?", opts: ["We hurried to the station and enjoyed the trip.", "We hurryed to the station and enjoyed the trip.", "We hurried to the station and enjoied the trip."], a: 0, tag: "Grammar · قواعد",
      whyEn: "hurry has a consonant before y (r + y), so y → -ied: hurried. enjoy has a vowel before y (o + y), so we just add -ed: enjoyed.",
      why: "في hurry حرف ساكن قبل y فتتحول إلى ied: hurried، وفي enjoy حرف علة قبل y فنضيف ed فقط: enjoyed.", errCat: "spelling" },
    { s: "In which verb do we say -ed as an extra syllable, /ɪd/?", opts: ["crossed", "returned", "wanted"], a: 2, tag: "Grammar · قواعد",
      whyEn: "-ed is an extra syllable /ɪd/ only when the verb ends in a t or d sound: want → wanted. cross ends in an s sound and return in an n sound, so crossed (/t/) and returned (/d/) have no extra syllable.",
      why: "تُنطق ed مقطعًا زائدًا /ɪd/ إذا انتهى الفعل بصوت t أو d: want ← wanted؛ أما cross فآخرها صوت s وreturn آخرها صوت n، فتُنطق crossed بـ /t/ وreturned بـ /d/ بلا مقطع زائد.", errCat: "spelling" },
    { s: "Which sentence is correct?", opts: ["Last week, my friends visited the science museum.", "Last week, my friends were visit the science museum.", "Last week, my friends visit the science museum."], a: 0, tag: "Grammar · قواعد",
      whyEn: "For a finished action we use the verb + -ed alone: visited. We never put 'were' before a verb, and 'visit' is the present form.",
      why: "للحدث المنتهي نكتفي بالفعل مع ed: visited، ولا نضع were قبل الفعل، أما visit فصيغة المضارع.", errCat: "be_verb" },
    { s: "___ your brothers at the airport when you arrived?", opts: ["Was", "Are", "Were"], a: 2, tag: "Grammar · قواعد",
      whyEn: "'your brothers' is plural, and 'when you arrived' is in the past, so we ask with 'Were'. 'Was' is for one person or thing, and 'Are' is the present.",
      why: "your brothers جمع، وwhen you arrived في الماضي، فنسأل بـ Were؛ أما Was فللمفرد، وAre للمضارع.", errCat: "agreement" },
    { s: "Which sentence is correct?", opts: ["We moved to Riyadh ago three years.", "We moved to Riyadh three years ago.", "We moved to Riyadh before three years."], a: 1, tag: "Grammar · قواعد",
      whyEn: "'ago' comes after the time: three years ago. 'before three years' is a word-for-word translation of the Arabic «قبل ثلاث سنوات».",
      why: "تأتي ago بعد المدة: three years ago، أما before three years فترجمة حرفية لعبارة «قبل ثلاث سنوات».", errCat: "word_order" },
    { s: "Our neighbour worked as a taxi driver in Dammam ___ twelve years.", opts: ["for", "ago", "in"], a: 0, tag: "Grammar · قواعد",
      whyEn: "We use 'for' with a period of time: for twelve years. 'ago' comes after a time (twelve years ago), and 'in' goes with a year (in 2012).",
      why: "نستعمل for مع المدة: for twelve years؛ أما ago فتأتي بعد المدة (twelve years ago)، وin مع السنة (in 2012).", errCat: "articles_prep" },
    { s: "Because of the storm, the travellers ___ in the small town for one more night.", opts: ["crossed", "stayed", "decided"], a: 1, tag: "Vocabulary · مفردات",
      whyEn: "'stay' means remain in a place for a time, and the storm kept the travellers in the town. You 'cross' a road or a sea, and 'decide' means choose.",
      why: "stay تعني يبقى في مكان مدة من الزمن، والعاصفة أبقت المسافرين في البلدة؛ أما cross فلعبور الطريق أو البحر، وdecide تعني يختار.", errCat: "vocab" },
    { s: "The mountain road to the village was narrow and ___, so my father was very careful.", opts: ["local", "foreign", "dangerous"], a: 2, tag: "Vocabulary · مفردات",
      whyEn: "'dangerous' means it can hurt you, and that is why the father was careful. 'local' means from this area, and 'foreign' means from another country.",
      why: "dangerous تعني خطيرًا قد يؤذي، ولذلك كان الأب حذرًا؛ أما local فتعني محليًّا من المنطقة نفسها، وforeign تعني أجنبيًا من بلد آخر.", errCat: "vocab" },
    { s: "Dr Saleh is a professor at a sharia college, and he teaches ___.", opts: ["Islamic law", "Islamic lawyer", "law Islamic"], a: 0, tag: "Legal Track · المسار القانوني",
      whyEn: "A professor teaches a subject: Islamic law (adjective + noun). A 'lawyer' is a person, not a subject, and 'law Islamic' uses the Arabic word order.",
      why: "الأستاذ يدرّس علمًا: Islamic law (صفة ثم اسم)؛ أما lawyer فشخص لا علم، وlaw Islamic على ترتيب العربية.", errCat: "vocab" }
  ]
};
})();
