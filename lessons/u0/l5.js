/* ===== الأسبوع التأسيسي (الوحدة 0) · الدرس 5: Spelling Patterns in Action — Core Spelling & Review (6 مراحل · قراءة + كتابة) ===== */
(function(){
var SPELL_SVG = '<svg class="tl" viewBox="0 0 340 168" role="img" aria-label="Four spelling fixes from the diagnostic test: keep y before -ing (studying), no double letter after two vowels (raining), drop the silent e (writing), and -ful has one l (careful, beautiful)" direction="ltr">' +
  '<rect x="10" y="10" width="154" height="68" rx="12" fill="#E8EEF5" stroke="#2C4A6E" stroke-width="1.6"/>' +
  '<text x="20" y="30" font-family="Quicksand, sans-serif" font-weight="700" font-size="11.5" fill="#2C4A6E">Keep "y" + ing</text>' +
  '<text x="20" y="50" font-family="Quicksand, sans-serif" font-weight="700" font-size="11.5" fill="#2A7454">✓ study → studying</text>' +
  '<text x="20" y="66" font-family="Quicksand, sans-serif" font-weight="700" font-size="10.5" fill="#A8432E">✗ studing</text>' +
  '<rect x="176" y="10" width="154" height="68" rx="12" fill="#E8EEF5" stroke="#2C4A6E" stroke-width="1.6"/>' +
  '<text x="186" y="30" font-family="Quicksand, sans-serif" font-weight="700" font-size="11.5" fill="#2C4A6E">2 Vowels → No Double</text>' +
  '<text x="186" y="50" font-family="Quicksand, sans-serif" font-weight="700" font-size="11.5" fill="#2A7454">✓ rain → raining</text>' +
  '<text x="186" y="66" font-family="Quicksand, sans-serif" font-weight="700" font-size="10.5" fill="#A8432E">✗ rainning</text>' +
  '<rect x="10" y="88" width="154" height="68" rx="12" fill="#F9EBE7" stroke="#B94A33" stroke-width="1.6"/>' +
  '<text x="20" y="108" font-family="Quicksand, sans-serif" font-weight="700" font-size="11.5" fill="#A8432E">Drop Silent "-e"</text>' +
  '<text x="20" y="128" font-family="Quicksand, sans-serif" font-weight="700" font-size="11.5" fill="#2A7454">✓ write → writing</text>' +
  '<text x="20" y="144" font-family="Quicksand, sans-serif" font-weight="700" font-size="10.5" fill="#A8432E">✗ writeing / writting</text>' +
  '<rect x="176" y="88" width="154" height="68" rx="12" fill="#F9EBE7" stroke="#B94A33" stroke-width="1.6"/>' +
  '<text x="186" y="108" font-family="Quicksand, sans-serif" font-weight="700" font-size="11.5" fill="#A8432E">Suffix "-ful" (One L!)</text>' +
  '<text x="186" y="128" font-family="Quicksand, sans-serif" font-weight="700" font-size="11.5" fill="#2A7454">✓ careful · beautiful</text>' +
  '<text x="186" y="144" font-family="Quicksand, sans-serif" font-weight="700" font-size="10.5" fill="#A8432E">✗ carefull · butefull</text>' +
  '</svg>';

LESSONS.u0l5 = {
  id: "u0l5",
  unit: 0,
  n: 5,
  mode: "reading",
  en: "Spelling Patterns in Action",
  ar: "أنماط الإملاء الأساسية ومراجعة الأسبوع التأسيسي",
  subEn: "Foundation 5 · Core Spelling (-ing, -s, -ful) & Foundation Week Synthesis",
  canDoEn: "I can spell -ing verbs, -s verbs/plurals, and -ful adjectives accurately, and combine all Foundation Week rules in reading and writing.",
  canDoAr: "أقدر أن أكتب قواعد الإملاء الأساسية (-ing و-s و-ful) بدقة، وأجمع قواعد الأسبوع التأسيسي الأربع في القراءة والكتابة.",
  descEn: "I can apply core English spelling patterns and combine Be/Do, Agreement, Was/Were, and 4 Clear Sentences before starting Unit 1.",
  descAr: "أقدر أن أطبق أنماط الإملاء الأساسية وأجمع قواعد التأسيس (be وdo، والمطابقة، وwas وwere، والجمل الأربع) قبل دخول الوحدة 1.",
  goals: [
    { en: "I can spell -ing forms accurately (studying, raining, writing, sitting) without dropping 'y' or doubling after two vowels.", ar: "أقدر أن أكتب صيغ ing بدقة (studying, raining, writing, sitting) دون حذف y أو مضاعفة الساكن بعد حرفي علة." },
    { en: "I can spell adjectives ending in '-ful' with a single 'l' (careful, helpful, useful, beautiful).", ar: "أقدر أن أكتب الصفات المنتهية بالمقطع -ful بلام واحدة دائمًا (careful, helpful, useful, beautiful)." },
    { en: "I can combine Be vs. Do, Singular/Plural Agreement, and Was/Were without errors.", ar: "أقدر أن أجمع بين قواعد التأسيس (be/do، والمطابقة، وwas/were) دون خلط بينها." },
    { en: "I can write a complete 4-sentence paragraph using 'official document' with clean spelling and punctuation.", ar: "أقدر أن أكتب فقرة من 4 جمل منفصلة تستخدم العبارة القانونية official document بإملاء وترقيم سليمين." }
  ],
  intro: {
    recall: {
      dEn: "Recall and type key words from Lessons 1–4 from memory (office, witnesses, traffic, draft, legal right).",
      d: "استرجع واكتب كلمات الدروس الأربعة السابقة من ذاكرتك لتثبيت الحفظ والإملاء.",
      items: [
        ["review", "5 active recall items across Foundation Lessons 1–4", "5 عناصر استرجاع نشط شاملة للدروس 1–4"],
        ["pen", "Type from memory to test spelling retention", "كتابة بلوحة المفاتيح لفحص الاحتفاظ الإملائي"],
        ["spark", "Includes legal phrases & sentence rules", "تشمل العبارات القانونية وقواعد الجملة"]
      ]
    },
    vocab: {
      dEn: "7 pattern-rich words plus today's legal phrase ('official document'), with randomized matching rounds.",
      d: "7 كلمات غنية بالأنماط الإملائية مع العبارة القانونية اليومية (official document)، ولعبة توصيل عشوائية.",
      items: [
        ["cards", "8 Flashcards (7 words + 'official document') with human audio & Oxford link", "8 بطاقات (7 كلمات + official document) مع النطق البشري ورابط Oxford"],
        ["review", "Randomized 2-round matching game", "لعبة توصيل عشوائية من جولتين"],
        ["quiz", "8 context sentences: choose the right word", "8 جمل سياقية: اختر الكلمة المناسبة"]
      ]
    },
    grammar: {
      dEn: "Master 4 spelling patterns (-ing, double letters, -ful, -s/-es/-ies) that fix your diagnostic errors (studying, raining, writing, beautiful), plus a full Foundation Week review.",
      d: "أتقن أربعة أنماط إملائية (ing، ومضاعفة الحرف الأخير، وful، وs/es/ies) تعالج أخطاء اختبارك التشخيصي (studying, raining, writing, beautiful)، مع مراجعة شاملة للأسبوع التأسيسي.",
      items: [
        ["book", "6 cards: 4 Spelling Patterns + Foundation Week Synthesis", "6 بطاقات: أنماط الإملاء الأربعة + خلاصة الأسبوع التأسيسي"],
        ["quiz", "16 guided exercises (4 of each type) combining Spelling, Be/Do, Agreement, Was/Were & Capitals", "16 تمرينًا موجّهًا (4 من كل نمط) تجمع الإملاء وقواعد التأسيس الأربع"]
      ]
    },
    reading: {
      dEn: "Faisal's Friday Reflection: how he finished his first foundation week at Al-Noor Law Office and prepared his first official document.",
      d: "مذكرة فيصل يوم الجمعة: كيف أتمّ أسبوعه الأول في مكتب النور للمحاماة وجهّز أول مستند رسمي.",
      items: [
        ["spark", "Predict before you read", "توقّع قبل القراءة"],
        ["clock", "First reading for the main idea with an advisory timer", "قراءة أولى للفكرة العامة بمؤقت إرشادي مريح"],
        ["mail", "Second reading with word meanings, Fluency Timer & 8 evidence questions", "قراءة ثانية مع معاني الكلمات ومؤقت الطلاقة و8 أسئلة بالدليل"]
      ]
    },
    writing: {
      dEn: "Capstone Foundation Task: Write at least 4 separate sentences combining Present (be/do), Past (was/were), Plurals, and accurate spelling.",
      d: "المهمة الختامية للأسبوع التأسيسي: اكتب 4 جمل منفصلة على الأقل تجمع الحاضر (be/do)، والماضي (was/were)، والجمع، والإملاء الصحيح.",
      items: [
        ["pen", "4 separate sentences with capital letters and periods (.)", "4 جمل منفصلة بحرف كبير ونقطة لكل جملة"],
        ["spark", "Instant check for Spelling Patterns (-ing, -ful) and Foundation Grammar", "تصحيح فوري يفحص أنماط الإملاء وقواعد التأسيس"]
      ]
    },
    quiz: {
      dEn: "10 comprehensive Foundation Week questions (80% to pass) to graduate into Unit 1!",
      d: "اختبار شامل من 10 أسئلة (النجاح من 80%) لإتمام الأسبوع التأسيسي والانتقال بثقة إلى الوحدة 1!",
      items: [
        ["quiz", "10 comprehensive Foundation Week questions (80% passing score)", "10 أسئلة شاملة للأسبوع التأسيسي (النجاح من 80%)"],
        ["review", "Full Error Analysis before entering Unit 1", "تحليل شامل للأخطاء قبل بدء الوحدة الأولى"]
      ]
    }
  },

  recall: [
    {
      id: "rc-0",
      promptAr: "مسودة أولى (كلمة من الدرس الرابع تبدأ بـ dr وتنتهي بـ ft)",
      promptEn: "An early version of an email or essay (first ___)",
      sentPre: "I wrote the first",
      sentPost: "of the email on Monday.",
      ans: ["draft"],
      hint: "d _ _ _ t (5 letters)",
      spellNoteEn: "Spelled d-r-a-f-t.",
      spellNote: "تُكتب d-r-a-f-t.",
      errCat: "spelling"
    },
    {
      id: "rc-1",
      promptAr: "مكتب (كلمة من الدرس الأول فيها حرف f مضاعف وحرف e صامت)",
      promptEn: "A room where people work at desks (double 'f', silent 'e')",
      sentPre: "My father's",
      sentPost: "is on the tenth floor of a tall building.",
      ans: ["office"],
      hint: "o _ _ _ _ e (6 letters)",
      spellNoteEn: "Spelled o-f-f-i-c-e: double 'f' and a silent 'e' at the end.",
      spellNote: "تُكتب o-f-f-i-c-e: حرف f مضاعف وحرف e صامت في آخرها.",
      errCat: "spelling"
    },
    {
      id: "rc-2",
      promptAr: "حق قانوني (العبارة القانونية من الدرس الرابع: legal ___ — تذكّر الحرفين الصامتين gh)",
      promptEn: "Legal phrase from Lesson 4: legal ___ (spelled with silent 'gh')",
      sentPre: "If a new phone is broken, the buyer has a legal",
      sentPost: "to get his money back.",
      ans: ["right", "legal right"],
      isLegal: true,
      hint: "r _ _ _ t (5 letters)",
      spellNoteEn: "Remember the silent 'gh' in r-i-g-h-t (legal right).",
      spellNote: "لا تنسَ الحرفين الصامتين gh في كتابة r-i-g-h-t.",
      errCat: "spelling"
    },
    {
      id: "rc-3",
      promptAr: "شهود (جمع witness من الدرس الثاني — ينتهي بـ ss فنضيف es)",
      promptEn: "Plural of 'witness' (a word that ends in -ss)",
      sentPre: "Three",
      sentPost: "saw the fire at the market and called for help.",
      ans: ["witnesses"],
      hint: "w _ _ _ _ _ _ _ s (9 letters)",
      spellNoteEn: "Nouns that end in -ss add -es in the plural: witness → witnesses.",
      spellNote: "الاسم المنتهي بـ ss يُجمع بإضافة es: witness ← witnesses.",
      errCat: "spelling"
    },
    {
      id: "rc-4",
      promptAr: "حركة المرور (كلمة من الدرس الثالث فيها حرف f مضاعف)",
      promptEn: "The cars and buses on the roads (double 'f')",
      sentPre: "The",
      sentPost: "in Riyadh is usually heavy at seven in the morning.",
      ans: ["traffic"],
      hint: "t _ _ _ _ _ c (7 letters)",
      spellNoteEn: "Spelled t-r-a-f-f-i-c: double 'f' and no 'k' at the end.",
      spellNote: "تُكتب t-r-a-f-f-i-c: حرف f مضاعف، ولا نضيف k في آخرها.",
      errCat: "spelling"
    }
  ],

  legalPhrase: {
    en: "official document",
    headword: "document",
    pos: "legal phrase",
    ar: "مستند رسمي / وثيقة رسمية",
    say: "أَفِشَل دَاكْيُمَنْت",
    ex: "A birth certificate is an official document.",
    exAr: "شهادة الميلاد مستند رسمي.",
    tipEn: "Article alert: 'official' starts with a vowel sound, so singular takes 'an': an official document (plural: official documents).",
    tip: "انتبه: كلمة official تبدأ بصوت علة، فنضع قبلها في المفرد an (نقول an official document)، وفيها حرف f مكرر.",
    legal: true,
    oxfordSlug: "document_1",
    wikiFiles: ["En-us-official.ogg", "En-us-document.ogg"],
    wikiCredit: "File:En-us-official.ogg & File:En-us-document.ogg · Wikimedia Commons (CC BY-SA 3.0)"
  },

  vocab: [
    { en: "careful", pos: "adjective", ar: "حريص / دقيق / منتبه", say: "كِيرْفُل",
      ex: "Be careful when you check the contract numbers.", exAr: "كن حريصًا ودقيقًا عندما تراجع أرقام العقد.",
      tipEn: "Spelling pattern: care + ful = careful (always ONE 'l' at the end!).",
      tip: "نمط إملائي ثابت: care + ful تصبح careful بلام واحدة فقط في آخرها.",
      oxfordSlug: "careful",
      wikiFile: "En-us-careful.ogg",
      wikiCredit: "File:En-us-careful.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "useful", pos: "adjective", ar: "مفيد / نافع", say: "يُوسْفُل",
      ex: "This legal dictionary is very useful for students.", exAr: "هذا القاموس القانوني مفيد جدًا للطلاب.",
      tipEn: "Spelling pattern: use + ful = useful (one 'l'). Note: starts with a 'yoo' sound, so we say 'a useful book'.",
      tip: "تنتهي بالمقطع ful بلام واحدة (useful)، وتبدأ بصوت (يو) الساكن فنقول معها a useful book.",
      oxfordSlug: "useful",
      wikiFile: "En-us-useful.ogg",
      wikiCredit: "File:En-us-useful.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "beautiful", pos: "adjective", ar: "جميل", say: "بْيُوتِفُل",
      ex: "The view of Riyadh from the office window is beautiful.", exAr: "منظر الرياض من نافذة المكتب جميل.",
      tipEn: "Diagnostic fix: beauty → beautiful (b-e-a-u-t-i-f-u-l, ending in ONE 'l', never 'butefull').",
      tip: "تصحيح مباشر من التشخيص: تُكتب b-e-a-u-t-i-f-u-l وتنتهي بلام واحدة (وليس butefull).",
      oxfordSlug: "beautiful",
      wikiFile: "En-us-beautiful.ogg",
      wikiCredit: "File:En-us-beautiful.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "study", pos: "verb", ar: "يدرس", say: "سْتَدِي",
      ex: "I study law in Riyadh, and my sister studies medicine.", exAr: "أنا أدرس القانون في الرياض، وأختي تدرس الطب.",
      tipEn: "Two key patterns: 1) With -ing, KEEP 'y' → studying. 2) With he/she/it, consonant + y → studies.",
      tip: "انتبه لقاعدتي الفعل study: ١) عند إضافة ing تبقى الـ y كما هي (studying)، ٢) مع he/she/it تتحول الـ y إلى ies (studies).",
      oxfordSlug: "study_2",
      wikiFile: "En-us-study.ogg",
      wikiCredit: "File:En-us-study.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "write", pos: "verb", ar: "يكتب", say: "رَايْت",
      ex: "I write four clear sentences every day.", exAr: "أكتب أربع جمل واضحة كل يوم.",
      tipEn: "Silent 'w' at the start and silent 'e' at the end. With -ing, drop 'e' (without doubling 't') → writing.",
      tip: "تبدأ بحرف w صامت وتنتهي بـ e صامتة؛ وعند إضافة ing نحذف الـ e فقط فتصبح writing (بتاء واحدة).",
      oxfordSlug: "write",
      wikiFile: "En-us-write.ogg",
      wikiCredit: "File:En-us-write.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "rain", pos: "verb", ar: "تمطر / مطر", say: "رَيْن",
      ex: "It rarely rains in Riyadh in the summer.", exAr: "نادرًا ما تمطر في الرياض صيفًا.",
      tipEn: "Diagnostic fix: 'rain' has TWO vowels (a + i) before 'n', so NEVER double the 'n' → raining (not rainning).",
      tip: "تصحيح مباشر من التشخيص: قبل حرف n يوجد حرفا علة (ai)، لذلك لا نضاعف الـ n أبدًا عند إضافة ing فنكتب raining.",
      oxfordSlug: "rain_2",
      wikiFile: "En-us-rain.ogg",
      wikiCredit: "File:En-us-rain.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "check", pos: "verb", ar: "يفحص / يراجع / يدقّق", say: "تْشِك",
      ex: "Always check your spelling before you send an email.", exAr: "راجع إملاءك دائمًا قبل أن ترسل بريدًا إلكترونيًا.",
      tipEn: "Spelled ch-e-c-k (ends with '-ck'). With -ing: checking.",
      tip: "تُكتب بـ ch في أولها وck في آخرها (check)، ومع ing تصبح checking.",
      oxfordSlug: "check_1",
      wikiFile: "En-us-check.ogg",
      wikiCredit: "File:En-us-check.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" }
  ],

  vocabGaps: [
    { s: "My grandfather is a very ___ driver; he always drives slowly.", opts: ["useful", "careful", "beautiful"], a: 1,
      whyEn: "'careful' means paying attention so nothing goes wrong (spelled with one 'l').",
      why: "careful تعني حريصًا منتبهًا حتى لا يقع خطأ، وتُكتب بلام واحدة.", errCat: "spelling" },
    { s: "These grammar notes are very ___ for my university exam.", opts: ["useful", "careful", "beautiful"], a: 0,
      whyEn: "'useful' means helpful for doing or achieving something.",
      why: "useful تعني مفيدة ونافعة.", errCat: "vocab" },
    { s: "Al-Ula has ___ mountains and ancient historical sites.", opts: ["careful", "useful", "beautiful"], a: 2,
      whyEn: "'beautiful' (spelled b-e-a-u-t-i-f-u-l) describes places that look wonderful.",
      why: "beautiful تعني جميلة.", errCat: "spelling" },
    { s: "Before you leave the house, ___ that the doors and windows are closed.", opts: ["check", "rain", "arrive"], a: 0,
      whyEn: "'check' means look carefully to make sure something is right.",
      why: "الفعل check يعني يتأكد ويراجع.", errCat: "vocab" },
    { s: "My younger brother wants to ___ computer science at university.", opts: ["check", "study", "rain"], a: 1,
      whyEn: "'study' is the verb used with an academic subject.",
      why: "study هو الفعل بمعنى يدرس تخصصًا جامعيًا.", errCat: "vocab" },
    { s: "Look at the dark clouds! I think it is going to ___.", opts: ["rain", "write", "check"], a: 0,
      whyEn: "'rain' (r-a-i-n) refers to water falling from clouds.",
      why: "rain تعني تمطر.", errCat: "vocab" },
    { s: "Every Friday, I ___ a short summary of the week's lessons.", opts: ["arrive", "rain", "write"], a: 2,
      whyEn: "'write' is the action verb for producing text.",
      why: "write فعل حدث بمعنى يكتب.", errCat: "vocab" },
    { s: "To travel to another country, you need ___ such as a passport.", opts: ["a beautiful photo", "an official document", "a useful dictionary"], a: 1,
      whyEn: "An 'official document', like a passport, is a formal paper from the government.",
      why: "official document مستند رسمي تصدره الجهات الحكومية، كجواز السفر.", errCat: "vocab" }
  ],

  gCards: [
    {
      tEn: "Pattern 1: Adding -ing (Keep 'y', Drop Silent '-e')",
      t: "النمط الإملائي الأول: قواعد إضافة ing للأفعال",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Pattern 1: Adding -ing Accurately</span><small>القاعدتان الذهبيتان لإضافة ing</small></h2>' +
        '<p class="en-p" dir="ltr">Let\'s fix two of the most common spelling mistakes from the diagnostic test:</p>' +
        '<div class="xbox"><span class="xtag s" dir="ltr">Rule A: NEVER drop \"y\" before -ing · لا تحذف y أبدًا قبل ing</span><p class="xen">study + ing → <b>studying</b> (✗ NOT studing)<br>play + ing → <b>playing</b> · try + ing → <b>trying</b></p></div>' +
        '<div class="xbox"><span class="xtag c" dir="ltr">Rule B: Drop silent \"-e\" before -ing · احذف الـ e الصامتة فقط</span><p class="xen">write + ing → <b>writing</b> (✗ NOT writeing / writting)<br>prepare + ing → <b>preparing</b> · make + ing → <b>making</b></p></div>' +
        '<p class="en-p" dir="ltr"><b>Note:</b> <b>am / is / are + verb-ing</b> (I am studying) is Present Continuous; you will study it in Unit 1.</p>' +
        SPELL_SVG,
      arHtml:
        '<p>١) حرف <b>y</b> لا يُحذف أبدًا عند إضافة <bdi class="en">ing</bdi>؛ لأن اجتماع حرفي <bdi class="en">ii</bdi> غير مقبول في الإنجليزية، فتبقى الـ <bdi class="en">y</bdi> كما هي: <b>studying</b>.</p>' +
        '<p>٢) الفعل المنتهي بحرف <b>e</b> صامت نحذف منه الـ <bdi class="en">e</bdi> فقط دون مضاعفة الحرف الذي قبله: <b>writing</b>.</p>' +
        '<p>ملاحظة: <bdi class="en">am / is / are</bdi> مع الفعل المنتهي بـ <bdi class="en">ing</bdi> (مثل <bdi class="en">I am studying</bdi>) هو المضارع المستمر، وستدرسه في الوحدة 1.</p>'
    },
    {
      tEn: "Pattern 2: When to Double the Last Consonant",
      t: "النمط الثاني: متى نضاعف الحرف الأخير قبل ing ومتى لا نضاعفه؟",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Pattern 2: One Vowel vs. Two Vowels</span><small>حرف علة واحد (نضاعف) مقابل حرفي علة (لا نضاعف)</small></h2>' +
        '<p class="en-p" dir="ltr">Look at the letters right before the final consonant of a short verb:</p>' +
        '<div class="sigs">' +
          '<div class="sig s"><h3 dir="ltr">1 Vowel + 1 Consonant<small class="sig-ar">حرف علة واحد ← ضاعف الأخير</small></h3><ul><li>s<b>i</b>t → si<b>tt</b>ing</li><li>r<b>u</b>n → ru<b>nn</b>ing</li><li>st<b>o</b>p → sto<b>pp</b>ing</li><li>sw<b>i</b>m → swi<b>mm</b>ing</li></ul></div>' +
          '<div class="sig c"><h3 dir="ltr">2 Vowels + 1 Consonant<small class="sig-ar">حرفا علة ← لا تضاعف أبدًا!</small></h3><ul><li>r<b>ai</b>n → rai<b>n</b>ing (✗ rainning)</li><li>r<b>ea</b>d → rea<b>d</b>ing</li><li>w<b>ai</b>t → wai<b>t</b>ing</li><li>m<b>ee</b>t → mee<b>t</b>ing</li></ul></div>' +
        '</div>',
      arHtml:
        '<p>السر بسيط جدًا: انظر قبل الحرف الساكن الأخير:</p>' +
        '<p>إذا سبقه <b>حرف علة واحد</b> في فعل قصير (<bdi class="en">s-i-t</bdi>) نضاعف الحرف الأخير: <b>sitting</b>.</p>' +
        '<p>أما إذا سبقه <b>حرفا علة</b> (<bdi class="en">r-ai-n, r-ea-d, w-ai-t</bdi>) <b>فلا نضاعف الحرف الأخير أبدًا</b>: نكتب <b>raining</b> بنون واحدة.</p>'
    },
    {
      tEn: "Pattern 3: Suffix '-ful' Always Has ONE 'L'",
      t: "النمط الثالث: المقطع -ful يُكتب بلام واحدة دائمًا",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Pattern 3: Adjectives Ending in \'-ful\'</span><small>الصفات المنتهية بـ ful تكتب بلام واحدة</small></h2>' +
        '<p class="en-p" dir="ltr">The word <b>full</b> alone has two L\'s, but when it becomes the suffix <b>-ful</b> at the end of an adjective, it ALWAYS has <b>only ONE \"l\"</b>:</p>' +
        '<div class="tbl"><table><thead><tr><th>Root Noun</th><th>Correct Adjective (-ful)</th><th>Common Typo (✗)</th></tr></thead><tbody>' +
        '<tr><td>help (مساعدة)</td><td><span class="hs">helpful</span> (متعاون)</td><td><span class="no">helpfull</span></td></tr>' +
        '<tr><td>care (حرص)</td><td><span class="hs">careful</span> (حريص)</td><td><span class="no">carefull</span></td></tr>' +
        '<tr><td>use (فائدة)</td><td><span class="hs">useful</span> (مفيد)</td><td><span class="no">usefull</span></td></tr>' +
        '<tr><td>beauty (جمال)</td><td><span class="hs">beautiful</span> (جميل · y → i)</td><td><span class="no">butefull / beautifull</span></td></tr></tbody></table></div>',
      arHtml:
        '<p>كلمة <bdi class="en">full</bdi> المستقلة بلامين، لكن حين تلحق بآخر الكلمة لتكوين صفة (<b>-ful</b>) تسقط منها لام واحدة دائمًا: <b>helpful, careful, useful, beautiful</b>.</p>'
    },
    {
      tEn: "Pattern 4: Adding '-s / -es / -ies' (Verbs & Plurals)",
      t: "النمط الرابع: إضافة s / es / ies للأفعال والأسماء الجمع",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Pattern 4: Spelling of -s / -es / -ies</span><small>قاعدة واحدة تجمع الأسماء الجمع وأفعال المفرد الغائب</small></h2>' +
        '<p class="en-p" dir="ltr">The exact same spelling rule works for <b>plural nouns</b> AND for <b>he / she / it verbs</b> in Present Simple:</p>' +
        '<ul class="spell" dir="ltr">' +
          '<li>1. Consonant + <b>y</b> → change <b>y</b> to <b>-ies</b>:<span class="s-en">study → he <b>studies</b> · city → two <b>cities</b> · company → <b>companies</b></span></li>' +
          '<li>2. Vowel (a, e, o, u) + <b>y</b> → keep <b>y</b> and add <b>-s</b>:<span class="s-en">day → <b>days</b> · key → <b>keys</b> · pay → he <b>pays</b></span></li>' +
          '<li>3. Endings <b>-ss, -sh, -ch, -x, -o</b> → add <b>-es</b>:<span class="s-en">witness → <b>witnesses</b> · watch → he <b>watches</b> · go → he <b>goes</b></span></li>' +
        '</ul>',
      arHtml:
        '<p>لاحظ الفرق بين إضافة <bdi class="en">ing</bdi> وإضافة <bdi class="en">s</bdi> للفعل <b>study</b>:</p>' +
        '<p>• عند إضافة <bdi class="en">ing</bdi> تبقى الـ <bdi class="en">y</bdi> دائمًا: <b>studying</b>.</p>' +
        '<p>• عند إضافة <bdi class="en">s</bdi> (لأن قبل الـ <bdi class="en">y</bdi> حرف <bdi class="en">d</bdi> ساكن) تتحول الـ <bdi class="en">y</bdi> إلى <b>ies</b>: <b>studies</b>.</p>'
    },
    {
      tEn: "Common Arab Mistakes (Foundation Week Checklist)",
      t: "أخطاء العرب الشائعة (مراجعة الأسبوع التأسيسي)",
      bilingual: true,
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Foundation Week Checklist</span><small>الأخطاء التأسيسية الأربعة التي عالجناها هذا الأسبوع</small></h2>' +
        '<ul class="mist">' +
          '<li><span class="no">L1 · Be vs. Do: I am prepare the files. / Are you agree?</span><span class="yes">I prepare the files. / Do you agree?</span><p class="en-m" dir="ltr">Never put <b>am / is / are</b> before a base verb, and ask about action verbs with <b>Do / Does</b>.</p><p>لا نضع <bdi class="en">am/is/are</bdi> قبل الفعل المجرد، ونسأل عن الأفعال بـ <bdi class="en">Do/Does</bdi>.</p></li>' +
          '<li><span class="no">L2 · Agreement: Is there any mistakes? / These folders is ready.</span><span class="yes">Are there any mistakes? / These folders are ready.</span><p class="en-m" dir="ltr">Plural nouns take <b>Are there</b> and <b>These … are</b>.</p><p>نطابق الجمع مع <bdi class="en">Are there</bdi> ومع <bdi class="en">These … are</bdi>.</p></li>' +
          '<li><span class="no">L3 · Was & Were: Yesterday I am busy. / Where was you?</span><span class="yes">Yesterday I was busy. / Where were you?</span><p class="en-m" dir="ltr">Use <b>was / were</b> for the past; <b>you</b> always takes <b>were</b>.</p><p>مع الماضي نستخدم <bdi class="en">was/were</bdi>، والضمير <bdi class="en">you</bdi> يأخذ <bdi class="en">were</bdi> دائمًا.</p></li>' +
          '<li><span class="no">L4 & L5 · Capitals, Periods & Spelling: i am studing in riyadh, it is a butefull city</span><span class="yes">I am studying in Riyadh. It is a beautiful city.</span><p class="en-m" dir="ltr">Write <b>I</b> and city names with a capital letter, end each sentence with a period, and follow the spelling patterns (studying · raining · writing · beautiful).</p><p>نكتب <bdi class="en">I</bdi> والمدن بحرف كبير، ونفصل الجمل بنقطة، ونلتزم بأنماط <bdi class="en">studying / raining / writing / beautiful</bdi>.</p></li>' +
        '</ul>'
    },
    {
      tEn: "Summary",
      t: "الخلاصة",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Ready for Unit 1!</span><small>جاهز للوحدة الأولى!</small></h2>' +
        '<div class="sumc" dir="ltr"><h3>4 Golden Spelling Patterns · ٤ أنماط إملائية ذهبية</h3>' +
          '<p><b>1 · studying · writing</b><span>-ing: keep "y", drop the silent "-e"</span></p>' +
          '<p><b>2 · sitting · raining</b><span>Double after 1 vowel, never after 2 vowels</span></p>' +
          '<p><b>3 · careful · beautiful</b><span>Suffix -ful always ends with ONE "l"</span></p>' +
          '<p><b>4 · studies · keys · watches</b><span>-s / -es / -ies for plurals and he / she / it verbs</span></p>' +
        '</div>' +
        '<p class="en-p" dir="ltr">Complete these 16 guided synthesis exercises to finish Foundation Week!</p>',
      arHtml:
        '<p>بإتقانك لهذه الأنماط الأربعة وقواعد الأسبوع التأسيسي تكون جاهزًا تمامًا للانطلاق في الوحدة الأولى (المضارع البسيط والمضارع المستمر).</p>'
    }
  ],

  gA: [
    { s: "Choose the correct -ing spelling of 'study':", opts: ["studing", "studying", "studeying"], a: 1,
      whyEn: "Never drop 'y' before adding -ing: study → studying.",
      why: "نحتفظ بحرف y دائمًا عند إضافة ing: studying.", errCat: "spelling" },
    { s: "Choose the correct -ing spelling of 'rain':", opts: ["rainning", "raining", "raning"], a: 1,
      whyEn: "'rain' has two vowels (a + i) before 'n', so do NOT double the 'n': raining.",
      why: "قبل حرف n حرفا علة (ai)، فلا نضاعف النون أبدًا: raining.", errCat: "spelling" },
    { s: "Choose the correct spelling of the adjective meaning 'pretty / lovely':", opts: ["butefull", "beautifull", "beautiful"], a: 2,
      whyEn: "Spelled b-e-a-u-t-i-f-u-l with one 'l' at the end.",
      why: "تُكتب beautiful وتنتهي بلام واحدة.", errCat: "spelling" },
    { s: "My sister ___ medicine at King Saud University.", opts: ["studys", "studies", "is study"], a: 1,
      whyEn: "'study' ends in consonant + y → change y to -ies with 'she' (studies).",
      why: "الفعل study ينتهي بـ y مسبوقة بساكن، فتتحول مع المفرد الغائب إلى studies.", errCat: "spelling" }
  ],

  gB: [
    { s: "Noor is studying English in Riyadh this year.", ok: true,
      whyEn: "Correct spelling of 'studying' (kept 'y'), capital 'English', and capital 'Riyadh'.",
      why: "إملاء studying صحيح، والحروف الكبيرة في English وRiyadh صحيحة.", errCat: "spelling" },
    { s: "Look! It is rainning outside right now.", ok: false, fix: "Look! It is raining outside right now.",
      whyEn: "Do not double 'n' after two vowels 'ai': raining.",
      why: "لا نضاعف حرف n بعد حرفي العلة ai؛ الصواب raining.", errCat: "spelling" },
    { s: "My new phone has a very usefull camera.", ok: false, fix: "My new phone has a very useful camera.",
      whyEn: "Suffix '-ful' always has one 'l': useful.",
      why: "المقطع -ful يُكتب بلام واحدة دائمًا: useful.", errCat: "spelling" },
    { s: "He is check the official document every morning.", ok: false, fix: "He checks the official document every morning.",
      whyEn: "Review (L1): Never put 'is' before a base verb in Present Simple ('He checks').",
      why: "مراجعة الدرس 1: لا نضع is قبل الفعل في المضارع البسيط؛ الصواب He checks.", errCat: "be_verb" }
  ],

  gC: [
    { pre: "My brother is", verb: "write + ing", post: "a long message to his friend in Canada.", ans: ["writing"],
      whyEn: "Drop the silent '-e' in write: writing (one 't').",
      why: "نحذف الـ e الصامتة من write فتصبح writing بتاء واحدة.", errCat: "spelling" },
    { pre: "Take an umbrella because it is", verb: "rain + ing", post: "today.", ans: ["raining"],
      whyEn: "Two vowels 'ai' before 'n' → do not double 'n': raining.",
      why: "حرفا علة قبل n فلا نضاعفها: raining.", errCat: "spelling" },
    { pre: "Please be", verb: "care + ful", post: "with the hot tea; it can burn you.", ans: ["careful"],
      whyEn: "Suffix -ful has one 'l': careful.",
      why: "المقطع ful بلام واحدة: careful.", errCat: "spelling" },
    { pre: "My mother washed all the", verb: "dish — plural", post: "after dinner.", ans: ["dishes"],
      whyEn: "Nouns that end in -sh take -es in the plural: dishes.",
      why: "الاسم المنتهي بـ sh يُجمع بإضافة es: dishes.", errCat: "spelling" }
  ],

  gD: [
    { chips: ["keeps", "in a safe place.", "My father", "his official documents"], ans: "My father keeps his official documents in a safe place.",
      whyEn: "Subject (My father) + verb (keeps) + object (his official documents) + place.",
      why: "الفاعل My father ثم الفعل keeps ثم المفعول به his official documents ثم المكان.", errCat: "word_order" },
    { chips: ["careful", "Lawyers", "with numbers.", "are"], ans: "Lawyers are careful with numbers.",
      whyEn: "Plural subject (Lawyers) + are + adjective (careful) + with numbers.",
      why: "الفاعل الجمع Lawyers ثم فعل الكون are ثم الصفة careful.", errCat: "word_order" },
    { chips: ["are", "Riyadh", "beautiful.", "The parks in"], ans: "The parks in Riyadh are beautiful.",
      whyEn: "Plural subject (The parks in Riyadh) + are + adjective (beautiful, one 'l').",
      why: "الفاعل الجمع The parks in Riyadh ثم are ثم الصفة beautiful بلام واحدة.", errCat: "word_order" },
    { chips: ["There were", "at the wedding", "many guests", "last night."], ans: "There were many guests at the wedding last night.",
      whyEn: "There were + plural noun (many guests) + place + past time (last night).",
      why: "There were للجمع ثم many guests ثم المكان ثم الزمان الماضي last night.", errCat: "word_order" }
  ],

  reading: {
    title: "My First Foundation Week — Friday Reflection",
    from: "Faisal",
    fromMeta: "Faisal · Law Trainee, Riyadh",
    to: "Personal Study Log",
    lg1: "be: is / was / were · فعل الكون",
    lg2: "action verbs & -ing forms · أفعال الحدث وصيغة ing",
    lg3: "Time words · كلمات الزمن",
    targetSeconds: 100,
    introEn: "At the end of his first week at Al-Noor Law Office, Faisal wrote this Friday reflection combining everything he learned.",
    intro: "في نهاية أسبوعه الأول في مكتب النور للمحاماة، كتب فيصل هذه المذكرة يوم الجمعة جامعًا فيها كل ما تعلّمه في الأسبوع التأسيسي.",
    paras: [
      "Friday Reflection · Riyadh",
      "Today <<s:is>> Friday, and my [[first|الأول]] [[week|أسبوع]] at Al-Noor Law Office <<s:is>> [[complete|مكتمل]]. Right now, I<<c:'m sitting>> in a [[quiet|هادئ]] [[café|مقهى]] in Riyadh, and it <<c:is {raining|rain}>> [[outside|في الخارج]]. The [[weather|الطقس]] <<s:is>> {beautiful} today!",
      "Every weekday, I <<c:{study}>> [[commercial|التجاري]] [[law|القانون]] and <<c:{check}>> client [[folders|ملفات]] at the office. Mr. Salman <<s:is>> a [[very|جدًا]] [[helpful|متعاون]] [[supervisor|مشرف]]. He <<c:teaches>> me how to [[prepare|أجهّز]] an {official document} and how to <<c:{write}>> [[short|قصيرة]], [[clear|واضحة]] [[sentences|جملًا]].",
      "[[Yesterday|أمس]] <<s:was>> Thursday, and <<s:there were>> two [[important|مهمتان]] [[hearings|جلستا استماع]] at the [[main|الرئيسية]] [[court|المحكمة]]. I <<s:was>> {careful} with [[every|كل]] {official document}. <<s:There weren't>> [[any|أي]] [[mistakes|أخطاء]] in our [[files|ملفات]], and the [[judge|القاضي]] <<s:was>> very [[calm|هادئًا]].",
      "This month, I<<c:'m {studying|study}>> English <<t:every day>> because it <<s:is>> very {useful} for my [[future|مستقبلي]] [[career|المهني]]. My [[writing|كتابتي]] <<s:is>> [[much|كثيرًا]] [[better|أفضل]] now!"
    ],
    predict: {
      qEn: "Before you read: Look at the first paragraph—what is the weather like in Riyadh while Faisal is writing his reflection on Friday?",
      q: "توقّع قبل القراءة: في الفقرة الأولى، كيف يصف فيصل الطقس في الرياض يوم الجمعة أثناء كتابته للمذكرة؟",
      optsEn: ["It is raining outside, and the weather is beautiful", "It is very hot and dusty", "It is snowing heavily"],
      opts: ["تمطر في الخارج، والطقس جميل", "حار جدًا ومغبر", "يتساقط الثلج بكثافة"],
      a: 0,
      revealEn: "Faisal writes: '…it is raining outside. The weather is beautiful today!'",
      reveal: "يقول فيصل: it is raining outside. The weather is beautiful today."
    },
    insight: {
      titleEn: "Spelling Patterns in Faisal's Reflection",
      titleAr: "لاحظ أنماط الإملاء في مذكرة فيصل",
      l1En: "Look at how Faisal spells the -ing verbs in Paragraphs 1 and 4:",
      ex1: "sit → sitting (1 vowel) · rain → raining (2 vowels) · study → studying (keep y)",
      l2En: "And look at the four '-ful' adjectives across the text (all with ONE 'l'):",
      ex2: "beautiful · helpful · careful · useful",
      arHtml: "<p>لاحظ اجتماع الأنماط الإملائية في النص: <b style=\"color:var(--accent-ink)\">sitting / raining / studying</b> في الأفعال، و<b style=\"color:var(--dark)\">beautiful / helpful / careful / useful</b> بلام واحدة في الصفات.</p>"
    },
    questions: [
      { q: "Where is Faisal sitting right now on Friday?", opts: ["In Courtroom 4", "In a quiet café in Riyadh", "At the airport in Jeddah"], a: 1,
        ev: "Right now, I'm sitting in a quiet café in Riyadh, and it is raining outside.",
        whyEn: "He is sitting in a quiet café in Riyadh.",
        why: "يجلس فيصل الآن في مقهى هادئ بالرياض.", errCat: "reading" },
      { q: "Why is 'raining' spelled with ONE 'n' in 'it is raining outside'?", opts: ["Because 'rain' has two vowels (a + i) before the 'n'", "Because 'rain' is an adjective", "Because it is in the past"], a: 0,
        ev: "…and it is raining outside.",
        whyEn: "When a verb has two vowels before the final consonant (r-ai-n), we never double the consonant.",
        why: "لأن الفعل rain فيه حرفا علة (ai) قبل النون، فلا نضاعف النون عند إضافة ing.", errCat: "spelling" },
      { q: "What does Mr. Salman teach Faisal?", opts: ["How to prepare an official document and write short, clear sentences", "How to make coffee for the café", "How to plan a trip to Antarctica"], a: 0,
        ev: "He teaches me how to prepare an official document and how to write short, clear sentences.",
        whyEn: "He teaches him how to prepare an official document and write short, clear sentences.",
        why: "يعلّمه كيف يجهّز مستندًا رسميًا (an official document) وكيف يكتب جملًا قصيرة وواضحة.", errCat: "reading" },
      { q: "How many hearings were at the main court yesterday (Thursday)?", opts: ["One hearing", "Two important hearings", "Five hearings"], a: 1,
        ev: "Yesterday was Thursday, and there were two important hearings at the main court.",
        whyEn: "There were two important hearings at the main court on Thursday.",
        why: "كانت هناك جلستا استماع مهمتان (two important hearings) في المحكمة الرئيسية يوم الخميس.", errCat: "reading" },
      { tf: true, q: "There were some mistakes in Faisal's official documents yesterday.", a: false,
        ev: "I was careful with every official document. There weren't any mistakes in our files…",
        whyEn: "False—he was careful and there weren't any mistakes in their files.",
        why: "خطأ؛ كان فيصل حريصًا ودقيقًا ولم تكن هناك أي أخطاء في الملفات.", errCat: "reading" },
      { q: "Why is Faisal studying English every day this month?", opts: ["Because it is very useful for his future career", "Because he wants to move to Brazil", "Because his supervisor doesn't speak Arabic"], a: 0,
        ev: "This month, I'm studying English every day because it is very useful for my future career.",
        whyEn: "He is studying English because it is very useful for his future career.",
        why: "يدرس الإنجليزية لأنها مفيدة جدًا (very useful) لمستقبله المهني.", errCat: "reading" },
      { q: "How are the four adjectives 'beautiful', 'helpful', 'careful', and 'useful' spelled at the end?", opts: ["All four end with a single 'l' (-ful)", "All four end with double 'll' (-full)", "They end with '-fule'"], a: 0,
        whyEn: "Every adjective ending in the suffix '-ful' is spelled with a single 'l'.",
        ev: "The weather is beautiful… a very helpful supervisor… I was careful… very useful…",
        why: "جميع الصفات المنتهية بالمقطع -ful تُكتب بلام واحدة فقط في آخرها.", errCat: "spelling" },
      { q: "Why does Faisal write 'an official document' (with 'an') instead of 'a official document'?", opts: ["Because 'official' starts with a vowel sound", "Because 'document' is plural", "Because 'official' is a verb"], a: 0,
        ev: "He teaches me how to prepare an official document…",
        whyEn: "We use 'an' before a singular countable noun phrase that starts with a vowel sound.",
        why: "نستخدم الأداة an قبل الصفة أو الاسم المفرد الذي يبدأ بصوت علة مثل official.", errCat: "articles_prep" }
    ]
  },

  writing: {
    taskEn: "Foundation Week Capstone: Write at least 4 separate sentences combining: 1) what you study or check every week, 2) where you were yesterday (was/were), 3) one '-ful' adjective (careful/useful/helpful/beautiful), and 4) one '-ing' verb (studying/writing/checking).",
    task: "المهمة الختامية للأسبوع التأسيسي: اكتب 4 جمل منفصلة على الأقل تجمع فيها: ١) ماذا تدرس أو تراجع كل أسبوع، ٢) أين كنت يوم أمس (was/were)، ٣) صفة تنتهي بـ -ful (مثل careful أو useful أو helpful)، ٤) فعلًا ينتهي بـ -ing (مثل studying أو writing) مع إملاء وترقيم سليمين.",
    checks: [
      { k: "sentences", tEn: "At least 4 separate sentences (capital letter + period . for each)", t: "4 جمل منفصلة على الأقل (بحرف كبير ونقطة لكل جملة)",
        ok: function(a){ return a.sentences >= 4 && !a.runOn; } },
      { k: "past", tEn: "At least 1 past sentence with 'was / were / wasn't / weren't'", t: "جملة في الماضي بـ was أو were", ex: "Yesterday, I was at the university. · The folders were ready.",
        ok: function(a, text){ return /\b(?:was|were|wasn['’]t|weren['’]t)\b/i.test(String(text || '')); } },
      { k: "patterns", tEn: "At least 1 '-ful' adjective AND 1 correctly spelled '-ing' verb", t: "صفة منتهية بـ -ful (بلام واحدة) وفعل منتهٍ بـ -ing بإملاء صحيح", ex: "careful · useful · helpful · beautiful + studying · writing · playing · swimming",
        ok: function(a, text){ var s = String(text || '');
          var NOT = ['interesting','boring','amazing','exciting','morning','evening','everything','nothing','something','anything','thing','king','spring','ring','sing','bring','during','ceiling','building','wedding','string','swing','wing','sibling','darling','studing','studeying','writting','writeing','rainning','raning','makeing','comeing','haveing','runing','siting','swiming','stoping','geting','puting'];
          var ful = /\b[a-z]{2,}ful(?:ly)?\b/i.test(s);
          var ing = (s.match(/\b[a-z]{2,}ing\b/gi) || []).some(function(w){ return NOT.indexOf(w.toLowerCase()) < 0; });
          return ful && ing; } },
      { k: "vocab", tEn: "At least 3 words/phrases from today's lesson", t: "3 كلمات أو عبارات من درس اليوم", ex: "careful · useful · beautiful · study · write · rain · check · official document",
        ok: function(a){ return a.used.length >= 3; } }
    ],
    modelMarked: "I <<c:{study}>> law in Riyadh, and I always <<c:{check}>> every {official document} at the office. [[Yesterday|أمس]], I <<s:was>> at the court with my supervisor, and our folders <<s:were>> [[ready|جاهزة]]. I <<s:am>> very {careful} with my spelling when I <<c:{write}>> in English. This month, I<<c:'m {studying|study}>> English every day, and my course <<s:is>> very {useful}.",
    model: "I study law in Riyadh, and I always check every official document at the office. Yesterday, I was at the court with my supervisor, and our folders were ready. I am very careful with my spelling when I write in English. This month, I'm studying English every day, and my course is very useful.",
    legendEn: "Light blue = am / is / was / were · Terracotta = action verbs and -ing forms (study, check, write, 'm studying)",
    legendAr: "الأزرق الفاتح لـ am / is / was / were، والطوبي لأفعال الحدث وصيغة ing (study وcheck وwrite و'm studying)."
  },

  quiz: [
    { s: "Which sentence has 100% correct spelling?", opts: ["I am studing law and writting an email.", "I am studying law and writing an email.", "I am studying law and writeing an email."], a: 1, tag: "Spelling · إملاء",
      whyEn: "Keep 'y' in studying, and drop silent '-e' without doubling 't' in writing.",
      why: "تبقى الـ y في studying، وتحذف الـ e الصامتة دون مضاعفة التاء في writing.", errCat: "spelling" },
    { s: "Which sentence spells all '-ful' words correctly?", opts: ["The course is usefull and the city is butefull.", "The course is useful and the city is beautiful.", "The course is usefull and the city is beautifull."], a: 1, tag: "Spelling · إملاء",
      whyEn: "Adjectives ending in -ful always have ONE 'l': useful, beautiful.",
      why: "جميع الصفات المنتهية بـ -ful تُكتب بلام واحدة: useful وbeautiful.", errCat: "spelling" },
    { s: "Why do we write 'sitting' with double 't', but 'raining' with one 'n'?", opts: ["Because 'sit' has 1 vowel before 't', and 'rain' has 2 vowels (ai) before 'n'.", "Because 'rain' is a noun.", "Both can be spelled with double letters."], a: 0, tag: "Spelling · إملاء",
      whyEn: "Double the final consonant after ONE vowel (s-i-t → sitting), never after TWO vowels (r-ai-n → raining).",
      why: "نضاعف الحرف الأخير بعد حرف علة واحد (sit → sitting)، ولا نضاعفه بعد حرفي علة (rain → raining).", errCat: "spelling" },
    { s: "Review (L1): ___ you check the official documents every morning?", opts: ["Are", "Do", "Were"], a: 1, tag: "Foundation L1 · تأسيس ١",
      whyEn: "'check' is a base action verb + 'every morning' → Do you check…?",
      why: "الفعل check فعل حدث في المضارع البسيط مع you، فنسأل بـ Do.", errCat: "be_verb" },
    { s: "Review (L2): ___ there any free tables in the restaurant right now?", opts: ["Is", "Are", "Do"], a: 1, tag: "Foundation L2 · تأسيس ٢",
      whyEn: "'tables' is plural → Are there any free tables…?",
      why: "كلمة tables جمع، لذلك نسأل بـ Are there.", errCat: "agreement" },
    { s: "Review (L2): These sandwiches ___ for our picnic tomorrow.", opts: ["is", "are", "does"], a: 1, tag: "Foundation L2 · تأسيس ٢",
      whyEn: "Plural 'These sandwiches' requires 'are'.",
      why: "الفاعل جمع (These sandwiches) فيأخذ are.", errCat: "agreement" },
    { s: "Review (L3): ___ your grandparents in Taif last summer?", opts: ["Was", "Were", "Did"], a: 1, tag: "Foundation L3 · تأسيس ٣",
      whyEn: "'your grandparents' is plural + 'last summer' (past) + no action verb → Were.",
      why: "الفاعل جمع (your grandparents) والزمن ماضٍ ولا يوجد فعل حدث، فنسأل بـ Were.", errCat: "agreement" },
    { s: "Review (L4): Choose the sentence with correct word order, capitals, and punctuation:", opts: ["on sunday, i visit my uncle in dammam.", "On Sunday, I visit my uncle in Dammam.", "On Sunday, Visit I my uncle in Dammam."], a: 1, tag: "Foundation L4 · تأسيس ٤",
      whyEn: "Capital 'On', 'Sunday', 'I' and 'Dammam', Subject + Verb order ('I visit'), and a period at the end.",
      why: "بداية الجملة ويوم Sunday والضمير I ومدينة Dammam بحرف كبير، والفاعل قبل الفعل، ونقطة في النهاية.", errCat: "word_order" },
    { s: "I was ___ in my exam, so I checked every answer twice.", opts: ["useful", "careful", "beautiful"], a: 1, tag: "Vocabulary · مفردات",
      whyEn: "'careful' means paying close attention so you don't make mistakes.",
      why: "careful تعني حريصًا منتبهًا حتى لا تخطئ.", errCat: "vocab" },
    { s: "A driver's license and an ID card are both ___.", opts: ["officials documents", "official documents", "official document"], a: 1, tag: "Legal Track · المسار القانوني",
      whyEn: "Two things → plural noun 'documents'; the adjective 'official' never takes -s.",
      why: "شيئان فنحتاج الاسم بالجمع documents، والصفة official لا تُجمع أبدًا.", errCat: "vocab" }
  ]
};
})();
