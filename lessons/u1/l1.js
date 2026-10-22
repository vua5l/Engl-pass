/* ===== الوحدة 1 · الدرس 1: Hello from Antarctica (القالب الجديد — 6 مراحل · درس قراءة) ===== */
(function(){
var TL_SVG = '<svg class="tl" viewBox="0 0 340 176" role="img" aria-label="Timeline: Present Simple repeats across Past, Now, and Future; Present Continuous stretches around Now" direction="ltr">' +
  '<line x1="170" y1="16" x2="170" y2="160" stroke="#1E2A33" stroke-width="1.2" stroke-dasharray="3 3"/><text x="170" y="11" text-anchor="middle" font-family="Quicksand, sans-serif" font-weight="700" font-size="10.5" fill="#1E2A33" letter-spacing="1.5">NOW</text>' +
  '<text x="326" y="40" text-anchor="end" font-family="Quicksand, Readex Pro, sans-serif" font-size="12" font-weight="700" fill="#2C4A6E">Present Simple · المضارع البسيط</text>' +
  '<line x1="30" y1="60" x2="326" y2="60" stroke="#5A6B7C" stroke-width="1.5"/><path d="M22 60l10-5v10z" fill="#5A6B7C"/>' +
  '<circle cx="306" cy="60" r="6" fill="#2C4A6E"/><circle cx="266" cy="60" r="6" fill="#2C4A6E"/><circle cx="226" cy="60" r="6" fill="#2C4A6E"/><circle cx="170" cy="60" r="6" fill="#2C4A6E"/><circle cx="114" cy="60" r="6" fill="#2C4A6E"/><circle cx="74" cy="60" r="6" fill="#2C4A6E"/>' +
  '<text x="326" y="104" text-anchor="end" font-family="Quicksand, Readex Pro, sans-serif" font-size="12" font-weight="700" fill="#A8432E">Present Continuous · المضارع المستمر</text>' +
  '<line x1="30" y1="124" x2="326" y2="124" stroke="#5A6B7C" stroke-width="1.5"/><path d="M22 124l10-5v10z" fill="#5A6B7C"/>' +
  '<rect x="134" y="114" width="72" height="20" rx="10" fill="#F9EBE7" stroke="#B94A33" stroke-width="2"/>' +
  '<text x="326" y="158" text-anchor="end" font-family="Quicksand, Readex Pro, sans-serif" font-size="11.5" fill="#5A6B7C">Past · الماضي</text><text x="30" y="158" text-anchor="start" font-family="Quicksand, Readex Pro, sans-serif" font-size="11.5" fill="#5A6B7C">Future · المستقبل</text></svg>';

LESSONS.u1l1 = {
  id: "u1l1",
  unit: 1,
  n: 1,
  mode: "reading",
  en: "Hello from Antarctica",
  ar: "المضارع البسيط والمضارع المستمر",
  subEn: "Present Simple vs. Present Continuous",
  canDoEn: "I can talk about daily routines and what is happening right now or around now.",
  canDoAr: "أقدر أن أتحدث عن روتيني اليومي وعما يحدث الآن أو في هذه الفترة.",
  descEn: "I can talk about daily routines and what is happening right now or around now.",
  descAr: "أقدر أن أفرّق بين ما يحدث عادةً وما يحدث الآن، من إيميل عالِمة سعودية في القارة القطبية الجنوبية.",
  goals: [
    { en: "I can tell the difference between habits (every day) and actions happening now.", ar: "أقدر أن أفرّق بين ما يحدث عادةً وما يحدث الآن." },
    { en: "I can use key words from science and work plus the legal phrase 'sign a contract'.", ar: "أقدر أن أستخدم كلمات الدرس والعبارة القانونية sign a contract." },
    { en: "I can read an email from a Saudi scientist in Antarctica for main ideas and details.", ar: "أقدر أن أفهم الفكرة العامة والتفاصيل في إيميل من القارة القطبية الجنوبية." },
    { en: "I can write at least 4 separate sentences about my daily routine and this month.", ar: "أقدر أن أكتب 4 جمل منفصلة على الأقل عن روتيني اليومي وهذا الشهر." }
  ],
  intro: {
    recall: {
      dEn: "Warm up your memory! Type each word from memory before seeing the answer to practice both active recall and spelling.",
      d: "تنشيط الذاكرة قبل البدء: اكتب الكلمة بلوحة المفاتيح من ذاكرتك قبل ظهور الإجابة ليجتمع الاسترجاع والإملاء.",
      items: [
        ["review", "Active recall from memory before answer appears", "استرجاع نشط من الذاكرة قبل ظهور الإجابة"],
        ["pen", "Type the word with the keyboard (recall + spelling)", "كتابة الكلمة بلوحة المفاتيح لتثبيت الإملاء"],
        ["spark", "Includes vocabulary, spelling patterns, and legal terms", "يشمل المفردات وأنماط الإملاء والمصطلحات القانونية"]
      ]
    },
    vocab: {
      dEn: "12 words from the world of science and work plus today's legal phrase, with human audio from Wikimedia Commons and Oxford Dictionary links.",
      d: "كلمات الدرس من عالم العلوم والعمل مع العبارة القانونية اليومية، بنطق بشري من Wikimedia Commons وروابط قاموس Oxford.",
      items: [
        ["cards", "Flashcards + Legal Phrase with human pronunciation & Oxford link", "بطاقات الكلمات والعبارة القانونية مع النطق البشري ورابط Oxford"],
        ["review", "Quick matching game", "لعبة توصيل سريعة"],
        ["quiz", "8 context sentences: choose the right word", "8 جمل سياقية: اختر الكلمة المناسبة"]
      ]
    },
    grammar: {
      dEn: "Habit or right now? Learn when to use Present Simple vs. Present Continuous with short cards and graded practice.",
      d: "عادة أم الآن؟ الفرق بين المضارع البسيط والمضارع المستمر، بشرح مبسّط وتمارين متدرجة.",
      items: [
        ["book", "7 short grammar cards (English first, Arabic on tap)", "7 بطاقات شرح (الإنجليزي أولًا، والعربي عند الطلب)"],
        ["quiz", "24 guided exercises across 4 types, one per screen", "24 تمرينًا موجّهًا على 4 أنماط، سؤال في كل شاشة"]
      ]
    },
    reading: {
      dEn: "An email from Noor, a young Saudi scientist at a research station in Antarctica, to her friend Reem.",
      d: "إيميل من نور، عالِمة سعودية في محطة أبحاث بالقارة القطبية الجنوبية، لصديقتها ريم.",
      items: [
        ["spark", "Predict before you read", "توقّع قبل القراءة"],
        ["clock", "First reading for the main idea with a comfortable timer (no word taps)", "قراءة أولى للفكرة العامة بمؤقت إرشادي مريح ودون لمس الكلمات"],
        ["mail", "Second reading with tap meanings, Oxford links, and 10 evidence questions", "قراءة ثانية مع معاني الكلمات باللمس وأسئلة الفهم مع دليلها من النص"]
      ]
    },
    writing: {
      dEn: "Use today's grammar and vocabulary freely in at least 4 separate sentences, with instant feedback separating spelling from grammar.",
      d: "استخدم قاعدة الدرس وكلماته بحرية في 4 جمل منفصلة على الأقل، مع تصحيح فوري يفصل الإملاء عن القواعد.",
      items: [
        ["pen", "Write at least 4 separate sentences (with capital letters and periods)", "كتابة 4 جمل منفصلة على الأقل بحرف كبير ونقطة لكل جملة"],
        ["spark", "Instant feedback separating Spelling from Grammar & Usage", "تصحيح فوري يفصل أخطاء الإملاء عن أخطاء القواعد والاستخدام"]
      ]
    },
    quiz: {
      dEn: "10 shuffled questions (80% to pass), followed by a complete analysis of your mistakes in this lesson and their causes.",
      d: "اختبار قصير من 10 أسئلة (النجاح من 80%)، يتبعه تحليل شامل لأخطاء الدرس وأسبابها.",
      items: [
        ["quiz", "10 vocabulary & grammar questions (80% passing score)", "10 أسئلة متنوعة من المفردات والقواعد (النجاح من 80%)"],
        ["review", "Error Analysis grouped by error type and cause", "تحليل أخطاء الدرس وأسبابها مصنّفة حسب نوع الخطأ"]
      ]
    }
  },

  /* ---------- المرحلة 1: مراجعة بالاسترجاع النشط (كتابة بلوحة المفاتيح) ---------- */
  recall: [
    {
      id: "rc-0",
      promptAr: "عالِم / عالِمة (تبدأ بحرف s)",
      promptEn: "A person who studies or works in science",
      sentPre: "Noor is a young",
      sentPost: "from Jeddah.",
      ans: ["scientist"],
      hint: "s _ _ _ _ _ _ _ t (9 letters)",
      spellNoteEn: "Remember the silent 'c' after 's': sci-en-tist.",
      spellNoteAr: "انتبه لحرف c الصامت بعد s في أول الكلمة: sci-en-tist.",
      cat: "vocab"
    },
    {
      id: "rc-1",
      promptAr: "بحث علمي (كلمة غير معدودة تبدأ بحرف r)",
      promptEn: "Careful study to find new knowledge (do ___)",
      sentPre: "She does",
      sentPost: "on penguins in Antarctica.",
      ans: ["research"],
      hint: "r _ _ _ _ _ _ h (8 letters)",
      spellNoteEn: "Spelled re + search (like search).",
      spellNoteAr: "تتكوّن من المقطع re ثم كلمة search: research.",
      cat: "vocab"
    },
    {
      id: "rc-2",
      promptAr: "يدرس الآن — صيغة المضارع المستمر من فعل study بعد I am",
      promptEn: "Present Continuous form of 'study' (keep 'y' before -ing!)",
      sentPre: "This month, I am",
      sentPost: "English every day.",
      ans: ["studying"],
      hint: "study + ing",
      spellNoteEn: "Pattern: Never drop 'y' when adding -ing (study → studying, NOT studing).",
      spellNoteAr: "قاعدة إملاء: لا نحذف حرف y أبدًا عند إضافة ing (نكتب studying وليس studing).",
      cat: "spelling"
    },
    {
      id: "rc-3",
      promptAr: "يوقّع عقدًا (العبارة القانونية: اكتب كلمة «عقد» التي تبدأ بحرف c)",
      promptEn: "Legal term: A written legal agreement (sign a ___)",
      sentPre: "Every new employee must sign a",
      sentPost: "before starting work.",
      ans: ["contract", "sign a contract"],
      hint: "c _ _ _ _ _ _ t (8 letters)",
      spellNoteEn: "Legal collocation: sign a contract (con-tract).",
      spellNoteAr: "المتلازمة القانونية: sign a contract (يوقّع عقدًا).",
      cat: "legal",
      legal: true
    },
    {
      id: "rc-4",
      promptAr: "آمن (صفة تنتهي بحرف f + e، عكسها dangerous)",
      promptEn: "Not dangerous (careful: ends with -fe, not -ve)",
      sentPre: "It isn't",
      sentPost: "to go outside alone in Antarctica.",
      ans: ["safe"],
      hint: "s _ f e (4 letters)",
      spellNoteEn: "Pattern: 'safe' (adjective, with f) vs. 'save' (verb, with v).",
      spellNoteAr: "انتبه للفرق الإملائي: safe بالفاء (آمن — صفة)، أما save بالـ v ففعل بمعنى يحفظ أو ينقذ.",
      cat: "spelling"
    }
  ],

  /* ---------- العبارة القانونية اليومية (المسار القانوني A2) ---------- */
  legalPhrase: {
    en: "sign a contract",
    headword: "contract",
    pos: "legal phrase",
    ar: "يوقّع عقدًا",
    say: "سَايْن أَ كُونْتْرَاكْت",
    ex: "Every scientist signs a contract before joining the research team.",
    exAr: "يوقّع كل عالِم عقدًا قبل الانضمام إلى فريق البحث.",
    tipEn: "Legal collocation: 'sign a contract' (verb + article + noun). A contract is an official written agreement.",
    tip: "عبارة قانونية أساسية في العمل والدراسة: sign a contract (يوقّع عقدًا)، وحرف g في sign صامت لا يُنطق.",
    legal: true,
    oxfordSlug: "contract",
    wikiFiles: ["En-us-sign.ogg", "En-us-contract.ogg"],
    wikiCredit: "File:En-us-sign.ogg & File:En-us-contract.ogg · Wikimedia Commons (CC BY-SA 3.0)"
  },

  /* ---------- المفردات (مع روابط Oxford وتسجيلات Wikimedia Commons البشرية) ---------- */
  vocab: [
    { en: "scientist", pos: "noun", ar: "عالِم / عالِمة", say: "سَايِنْتِسْت",
      ex: "Noor is a young scientist from Jeddah.", exAr: "نور عالِمة شابة من جدة.",
      tipEn: "Word family: science (noun) and scientific (adjective).",
      tip: "من نفس العائلة: science (علم) و scientific (علمي).",
      oxfordSlug: "scientist",
      wikiFile: "En-us-scientist.ogg",
      wikiCredit: "File:En-us-scientist.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "research", pos: "noun", ar: "بحث علمي", say: "رِسِيرْتش",
      ex: "She does research on penguins.", exAr: "تُجري بحثًا عن البطاريق.",
      tipEn: "Collocation: 'do research' (not 'make research'). Uncountable: never say 'a research'.",
      tip: "نقول do research وليس make research، وهي غير معدودة: لا نقول a research.",
      oxfordSlug: "research_1",
      wikiFile: "En-us-research.ogg",
      wikiCredit: "File:En-us-research.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "team", pos: "noun", ar: "فريق", say: "تِيم",
      ex: "I work with a team of twelve people.", exAr: "أعمل مع فريق من اثني عشر شخصًا.",
      tipEn: "Useful work collocation: work in a team.",
      tip: "عبارة مهمة في العمل: work in a team (يعمل ضمن فريق).",
      oxfordSlug: "team_1",
      wikiFile: "En-us-team.ogg",
      wikiCredit: "File:En-us-team.ogg · Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "lab", pos: "noun", ar: "مختبر", say: "لاب",
      ex: "We spend the morning in the lab.", exAr: "نقضي الصباح في المختبر.",
      tipEn: "Short for laboratory. People usually say 'lab' in daily life.",
      tip: "اختصار لكلمة laboratory، والمختصرة هي الأكثر استخدامًا في الكلام.",
      oxfordSlug: "lab",
      wikiFile: "En-us-laboratory.ogg",
      wikiCredit: "File:En-us-laboratory.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "data", pos: "noun", ar: "بيانات", say: "دَيْتَا",
      ex: "I check the data every morning.", exAr: "أراجع البيانات كل صباح.",
      tipEn: "Common academic collocations: collect data / check the data.",
      tip: "عبارة أكاديمية شائعة: collect data (يجمع البيانات).",
      oxfordSlug: "data",
      wikiFile: "En-us-data.ogg",
      wikiCredit: "File:En-us-data.ogg · Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "measure", pos: "verb", ar: "يقيس", say: "مِيجَر",
      ex: "We measure the temperature of the sea.", exAr: "نقيس درجة حرارة البحر.",
      tipEn: "The 's' in measure sounds like the 's' in television (/ʒ/).",
      tip: "الـ s هنا تُنطق مثل الجيم الشامية الخفيفة، لا مثل الجيم الفصحى.",
      oxfordSlug: "measure_1",
      wikiFile: "En-us-measure.ogg",
      wikiCredit: "File:En-us-measure.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "temperature", pos: "noun", ar: "درجة الحرارة", say: "تِمْبْرَتْشَر",
      ex: "The temperature today is minus five degrees.", exAr: "درجة الحرارة اليوم سالب خمس درجات.",
      tipEn: "In health: 'take someone's temperature' means check how hot their body is.",
      tip: "في الصحة: take someone's temperature تعني يقيس حرارة شخص.",
      oxfordSlug: "temperature",
      wikiFile: "En-us-temperature.ogg",
      wikiCredit: "File:En-us-temperature.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "safe", pos: "adjective", ar: "آمن", say: "سَيْف",
      ex: "It isn't safe to go outside alone.", exAr: "ليس من الآمن الخروج بمفردك.",
      tipEn: "Opposite: dangerous. Careful: safe (adjective, with f) vs. save (verb, with v).",
      tip: "عكسها dangerous (خطير). وتختلط كثيرًا مع save (يحفظ / ينقذ)، والفرق حرف واحد: f في safe و v في save.",
      oxfordSlug: "safe_1",
      wikiFile: "En-us-safe.ogg",
      wikiCredit: "File:En-us-safe.ogg · Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "strange", pos: "adjective", ar: "غريب", say: "سْتْرَيْنْج",
      ex: "It's strange to see the sun at midnight.", exAr: "من الغريب رؤية الشمس في منتصف الليل.",
      tipEn: "Related noun: a stranger = a person you do not know.",
      tip: "والاسم stranger يعني شخصًا غريبًا لا نعرفه.",
      oxfordSlug: "strange_1",
      wikiFile: "En-us-strange.ogg",
      wikiCredit: "File:En-us-strange.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "health", pos: "noun", ar: "صحة", say: "هِلْث",
      ex: "Sleep is important for your health.", exAr: "النوم مهم لصحتك.",
      tipEn: "The adjective is healthy (e.g., healthy food).",
      tip: "الصفة منها healthy (صحي)، مثل healthy food. والـ th في آخرها تُنطق ث.",
      oxfordSlug: "health",
      wikiFile: "En-us-health.ogg",
      wikiCredit: "File:En-us-health.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "culture", pos: "noun", ar: "ثقافة", say: "كَلْتْشَر",
      ex: "We learn about each other's cultures.", exAr: "نتعرّف على ثقافات بعضنا.",
      tipEn: "The adjective is cultural (e.g., cultural differences).",
      tip: "الصفة منها cultural (ثقافي).",
      oxfordSlug: "culture_1",
      wikiFile: "En-us-culture.ogg",
      wikiCredit: "File:En-us-culture.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "miss", pos: "verb", ar: "يشتاق إلى", say: "مِس",
      ex: "I miss my family.", exAr: "أشتاق إلى عائلتي.",
      tipEn: "Second meaning: 'miss the bus' = arrive too late for the bus.",
      tip: "ولها معنى ثانٍ: miss the bus تعني يفوته الباص.",
      oxfordSlug: "miss_1",
      wikiFile: "En-us-miss.ogg",
      wikiCredit: "File:En-us-miss.ogg · Wikimedia Commons (CC BY-SA 3.0)" }
  ],

  vocabGaps: [
    { s: "We use a thermometer to ___ the temperature.", opts: ["measure", "miss", "research"], a: 0,
      whyEn: "'measure' means to find the size or amount of something with a tool.",
      why: "measure تعني يقيس، والترمومتر أداة قياس.", errCat: "vocab" },
    { s: "Our ___ has twelve people from eight countries.", opts: ["lab", "team", "data"], a: 1,
      whyEn: "A 'team' is a group of people who work together.",
      why: "team مجموعة من الناس يعملون معًا.", errCat: "vocab" },
    { s: "Fruit and vegetables are good for your ___.", opts: ["culture", "temperature", "health"], a: 2,
      whyEn: "'good for your health' is a common phrase about staying well.",
      why: "good for your health تعني مفيد لصحتك.", errCat: "vocab" },
    { s: "Don't swim here. It isn't ___.", opts: ["safe", "strange", "scientist"], a: 0,
      whyEn: "'Don't swim here' warns of danger, so the water isn't safe.",
      why: "Don't swim here تدل على خطر، إذن المكان ليس آمنًا: isn't safe.", errCat: "vocab" },
    { s: "The scientists collect ___ from their machines.", opts: ["culture", "data", "team"], a: 1,
      whyEn: "'collect data' is a natural collocation meaning gather information/numbers.",
      why: "collect data تعني يجمع البيانات.", errCat: "vocab" },
    { s: "I'm far from home, and I ___ my mother's cooking.", opts: ["measure", "miss", "research"], a: 1,
      whyEn: "'miss' means feel sad because you are away from someone or something you love.",
      why: "miss هنا بمعنى يشتاق إلى.", errCat: "vocab" },
    { s: "In Japan, people take off their shoes at home. It's part of their ___.", opts: ["culture", "health", "lab"], a: 0,
      whyEn: "Daily customs and traditions are part of a country's culture.",
      why: "عادات الشعوب وتقاليدها جزء من ثقافتها: culture.", errCat: "vocab" },
    { s: "It's ___ to see the sun at midnight!", opts: ["lab", "strange", "data"], a: 1,
      whyEn: "'strange' means unusual or surprising.",
      why: "strange تعني غريب وغير معتاد.", errCat: "vocab" }
  ],

  /* ---------- بطاقات شرح القواعد ---------- */
  gCards: [
    {
      tEn: "Habit or Right Now?",
      t: "عادة أم الآن؟",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Habit or Right Now?</span><small>عادة أم الآن؟</small></h2>' +
        '<p class="en-p" dir="ltr">In English, we use two different present tenses for <b>daily habits</b> and for <b>actions happening now</b>:</p>' +
        '<div class="xbox"><span class="xtag s" dir="ltr">Habit · Present Simple · المضارع البسيط</span><p class="xen">I study every day.</p></div>' +
        '<div class="xbox"><span class="xtag c" dir="ltr">Right Now · Present Continuous · المضارع المستمر</span><p class="xen">I\'m studying now.</p></div>' +
        TL_SVG,
      arHtml:
        '<p>في العربية نقول «أدرس» للحالتين، أما الإنجليزية فتفرّق بينهما:</p>' +
        '<p><b>I study every day:</b> أدرس كل يوم (عادة تتكرر — المضارع البسيط).</p>' +
        '<p><b>I\'m studying now:</b> أدرس الآن في هذه اللحظة (المضارع المستمر).</p>'
    },
    {
      tEn: "Present Simple",
      t: "المضارع البسيط",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Present Simple</span><small>المضارع البسيط</small></h2>' +
        '<p class="en-p" dir="ltr">We use the <b>Present Simple</b> for:</p>' +
        '<ol class="uses en-uses" dir="ltr">' +
          '<li><b>Habits & routines:</b><span class="xen">I wake up at 6:30 every day.</span></li>' +
          '<li><b>General facts:</b><span class="xen">Ice melts in warm water.</span></li>' +
          '<li><b>Permanent situations:</b><span class="xen">My father works in a hospital.</span></li>' +
        '</ol>' +
        '<div class="tbl"><table><thead><tr><th>Subject</th><th>Positive · الإثبات</th><th>Negative · النفي</th><th>Question · السؤال</th></tr></thead><tbody>' +
        '<tr><td>I / you / we / they</td><td>I <span class="hs">work</span></td><td>I <span class="hs">don\'t work</span></td><td><span class="hs">Do</span> you <span class="hs">work</span>?</td></tr>' +
        '<tr><td>he / she / it</td><td>She <span class="hs">works</span></td><td>She <span class="hs">doesn\'t work</span></td><td><span class="hs">Does</span> she <span class="hs">work</span>?</td></tr></tbody></table></div>' +
        '<div class="tip" dir="ltr"><p><b>Attention · انتباه:</b> Add <b>-s</b> with <b>he / she / it</b> in positive sentences only. In negatives and questions, <b>does</b> takes the -s and the verb stays in its base form:</p><div class="pairs"><span class="yes">She doesn\'t work.</span><span class="no">She doesn\'t works.</span><span class="yes">Does she work?</span><span class="no">Does she works?</span></div></div>' +
        '<h3 class="bi-h"><span class="en" dir="ltr">Spelling of -s</span><small>إملاء الـ s</small></h3>' +
        '<ul class="spell" dir="ltr">' +
          '<li>Most verbs: add <b>-s</b><span class="s-en">work → works</span></li>' +
          '<li>After <b>ch · sh · s · x · o</b>: add <b>-es</b><span class="s-en">watch → watches · go → goes</span></li>' +
          '<li>Consonant + <b>y</b> → <b>-ies</b><span class="s-en">study → studies</span></li>' +
          '<li>Vowel + <b>y</b>: just add <b>-s</b><span class="s-en">play → plays</span></li>' +
          '<li>Irregular verb:<span class="s-en">have → has</span></li>' +
        '</ul>',
      arHtml:
        '<p>نستخدم <b>المضارع البسيط</b> للعادات والروتين اليومي، والحقائق العلمية الثابتة، والأوضاع الدائمة.</p>' +
        '<p><b>تنبيه مهم:</b> نضيف <bdi class="en">s</bdi> للفعل مع <bdi class="en">he / she / it</bdi> في الجملة المثبتة فقط. أما عند النفي بـ <bdi class="en">doesn\'t</bdi> أو السؤال بـ <bdi class="en">Does</bdi> فيعود الفعل لأصله بدون <bdi class="en">s</bdi>.</p>' +
        '<p><b>قواعد إملاء الـ s:</b> نضيف <bdi class="en">es</bdi> بعد <bdi class="en">ch, sh, s, x, o</bdi>، ونحوّل <bdi class="en">y</bdi> إلى <bdi class="en">ies</bdi> إذا سبقها حرف ساكن (<bdi class="en">study → studies</bdi>)، وتبقى كما هي إذا سبقها حرف علة (<bdi class="en">play → plays</bdi>).</p>'
    },
    {
      tEn: "Present Continuous",
      t: "المضارع المستمر",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Present Continuous</span><small>المضارع المستمر</small></h2>' +
        '<p class="en-p" dir="ltr">We use the <b>Present Continuous</b> for:</p>' +
        '<ol class="uses en-uses" dir="ltr">' +
          '<li><b>Happening right now (at the moment of speaking):</b><span class="xen">I\'m sitting in the kitchen right now.</span></li>' +
          '<li><b>Temporary actions around now (this week / this month):</b><span class="xen">This month, I\'m studying penguins.</span></li>' +
        '</ol>' +
        '<p class="formula"><b>am / is / are</b> + verb<b>-ing</b></p>' +
        '<div class="tbl"><table><thead><tr><th>Subject</th><th>Positive · الإثبات</th><th>Negative · النفي</th><th>Question · السؤال</th></tr></thead><tbody>' +
        '<tr><td>I</td><td>I<span class="hc">\'m working</span></td><td>I<span class="hc">\'m not working</span></td><td><span class="hc">Am</span> I <span class="hc">working</span>?</td></tr>' +
        '<tr><td>he / she / it</td><td>She<span class="hc">\'s working</span></td><td>She <span class="hc">isn\'t working</span></td><td><span class="hc">Is</span> she <span class="hc">working</span>?</td></tr>' +
        '<tr><td>you / we / they</td><td>They<span class="hc">\'re working</span></td><td>They <span class="hc">aren\'t working</span></td><td><span class="hc">Are</span> they <span class="hc">working</span>?</td></tr></tbody></table></div>' +
        '<h3 class="bi-h"><span class="en" dir="ltr">Spelling of -ing</span><small>إملاء الـ ing</small></h3>' +
        '<ul class="spell" dir="ltr">' +
          '<li>Most verbs: add <b>-ing</b><span class="s-en">work → working</span></li>' +
          '<li>Silent <b>-e</b> at the end: drop <b>e</b> + <b>-ing</b><span class="s-en">write → writing · make → making</span></li>' +
          '<li>Short 1-syllable verb ending in consonant-vowel-consonant: double the last letter<span class="s-en">sit → sitting · swim → swimming</span></li>' +
          '<li>Verbs ending in <b>-ie</b> → <b>-ying</b><span class="s-en">lie → lying</span></li>' +
        '</ul>',
      arHtml:
        '<p>نستخدم <b>المضارع المستمر</b> لشيء يحدث الآن لحظة الكلام، أو لوضع مؤقت في هذه الفترة (مثل هذا الأسبوع أو هذا الشهر) حتى لو لم يكن في هذه الثانية.</p>' +
        '<p><b>التركيب:</b> لا بد من <bdi class="en">am / is / are</bdi> قبل الفعل المنتهي بـ <bdi class="en">ing</bdi>.</p>' +
        '<p><b>إملاء الـ ing:</b> نحذف الـ <bdi class="en">e</bdi> الصامتة في آخر الفعل (<bdi class="en">write → writing</bdi>)، ونضاعف الحرف الأخير في الأفعال القصيرة المنتهية بساكن-علة-ساكن (<bdi class="en">sit → sitting</bdi>).</p>'
    },
    {
      tEn: "Time Signal Words",
      t: "كلمات تدلّك على الزمن",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Time Signal Words</span><small>كلمات تدلّك على الزمن</small></h2>' +
        '<p class="en-p" dir="ltr">These words in a sentence help you choose the right tense:</p>' +
        '<div class="sigs">' +
          '<div class="sig s"><h3 dir="ltr">Present Simple<small class="sig-ar">للمضارع البسيط</small></h3><ul><li>every day</li><li>usually</li><li>often</li><li>always</li><li>sometimes</li><li>never</li><li>on Fridays</li></ul></div>' +
          '<div class="sig c"><h3 dir="ltr">Present Continuous<small class="sig-ar">للمضارع المستمر</small></h3><ul><li>now</li><li>right now</li><li>at the moment</li><li>today</li><li>this week</li><li>this month</li><li>Look!</li></ul></div>' +
        '</div>' +
        '<div class="tip" dir="ltr"><p><b>Word Order · انتباه:</b> Frequency words like <b>usually / often / always</b> come <b>before</b> the main verb:</p><div class="pairs"><span class="yes">Scientists usually check the data early.</span></div></div>',
      arHtml:
        '<p>وجود هذه الكلمات في الجملة يدلّك على الزمن المناسب مباشرة:</p>' +
        '<p>كلمات التكرار والعادة (<bdi class="en">every day, usually, often, always</bdi>) تأتي مع <b>المضارع البسيط</b> وتوضع قبل الفعل الأساسي.</p>' +
        '<p>كلمات اللحظة الحالية أو الفترة المؤقتة (<bdi class="en">now, right now, at the moment, this month, Look!</bdi>) تأتي مع <b>المضارع المستمر</b>.</p>'
    },
    {
      tEn: "Stative Verbs",
      t: "أفعال الحالة",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Stative Verbs</span><small>أفعال الحالة</small></h2>' +
        '<p class="en-p" dir="ltr"><b>Stative verbs</b> describe thoughts, feelings, or possession—not physical actions. We use <b>Present Simple</b> with them, even when we mean right now:</p>' +
        '<ul class="vlist"><li>like</li><li>love</li><li>hate</li><li>want</li><li>need</li><li>know</li><li>understand</li><li>believe</li><li>remember</li><li>have <small>(own · يملك)</small></li></ul>' +
        '<div class="xbox"><div class="pairs"><span class="yes">I know the answer.</span><span class="no">I\'m knowing the answer.</span><span class="yes">She needs help now.</span><span class="no">She\'s needing help now.</span></div></div>' +
        '<p class="en-p" dir="ltr"><b>Note:</b> When <b>have</b> means eat or do an activity, it is an action and can take <b>-ing</b>: <b>I\'m having breakfast.</b></p>',
      arHtml:
        '<p><b>أفعال الحالة (Stative verbs)</b> تصف حالة في الذهن أو المشاعر أو التملّك وليست حركة جسدية، لذلك نستخدم معها <b>المضارع البسيط</b> دائمًا حتى لو كنا نتحدث عن اللحظة الحالية.</p>' +
        '<p>أما الفعل <bdi class="en">have</bdi> فإذا جاء بمعنى يتناول وجبة أو يقضي وقتًا (وليس بمعنى يملك) فيمكن أن يأتي بالمستمر: <bdi class="en">I\'m having breakfast</bdi>.</p>'
    },
    {
      tEn: "Common Arab Mistakes",
      t: "أخطاء العرب الشائعة",
      bilingual: true,
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Common Arab Mistakes</span><small>أخطاء يقع فيها كثير من العرب</small></h2>' +
        '<ul class="mist">' +
          '<li><span class="no">I am work in a lab.</span><span class="yes">I work in a lab.</span><p class="en-m" dir="ltr">Do not put <b>am / is / are</b> before a base verb in the Present Simple.</p><p>لا نضع <bdi class="en">am / is / are</bdi> قبل الفعل العادي في المضارع البسيط.</p></li>' +
          '<li><span class="no">She working now.</span><span class="yes">She is working now.</span><p class="en-m" dir="ltr">Present Continuous always needs <b>am / is / are</b> before verb-ing.</p><p>بالعربي نقول «هي تعمل الآن» بلا فعل كون، والإنجليزية تحتاج <bdi class="en">is</bdi>.</p></li>' +
          '<li><span class="no">He work every day.</span><span class="yes">He works every day.</span><p class="en-m" dir="ltr">Remember the <b>-s</b> with <b>he / she / it</b> in Present Simple.</p><p>الـ <bdi class="en">s</bdi> مع <bdi class="en">he / she / it</bdi> تُنسى كثيرًا.</p></li>' +
          '<li><span class="no">Where you live?</span><span class="yes">Where do you live?</span><p class="en-m" dir="ltr">Questions in Present Simple need the helper verb <b>do</b> or <b>does</b>.</p><p>السؤال في المضارع البسيط يحتاج <bdi class="en">do</bdi> أو <bdi class="en">does</bdi>.</p></li>' +
          '<li><span class="no">I am understanding.</span><span class="yes">I understand.</span><p class="en-m" dir="ltr"><b>understand</b> is a stative verb—never use <b>-ing</b>.</p><p><bdi class="en">understand</bdi> من أفعال الحالة فلا يأخذ <bdi class="en">ing</bdi>.</p></li>' +
        '</ul>'
    },
    {
      tEn: "Summary",
      t: "الخلاصة",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Quick Summary</span><small>الخلاصة</small></h2>' +
        '<div class="sumc" dir="ltr"><h3>In Two Lines · في سطرين</h3>' +
          '<p><b>Present Simple · المضارع البسيط</b><span>Habits, routines, facts, permanent things</span></p>' +
          '<p><b>Present Continuous · المضارع المستمر</b><span>Right now, or temporary situations around now</span></p>' +
        '</div>' +
        '<p class="en-p" dir="ltr">Now let\'s practice: 24 short exercises, one question per screen.</p>',
      arHtml:
        '<p><b>المضارع البسيط:</b> للعادة، والروتين اليومي، والحقائق العامة، والأشياء الدائمة.</p>' +
        '<p><b>المضارع المستمر:</b> لما يحدث الآن لحظة الكلام، أو لوضع مؤقت في هذه الفترة.</p>' +
        '<p>الحين نتدرّب: 24 تمرينًا قصيرًا، سؤال في كل شاشة.</p>'
    }
  ],

  /* ---------- القواعد: تمارين ---------- */
  gA: [
    { s: "Noor ___ in the lab every morning.", opts: ["works", "is working"], a: 0,
      whyEn: "'every morning' shows a daily habit → Present Simple (works).",
      why: "every morning تدل على عادة يومية، إذن المضارع البسيط.", errCat: "tense" },
    { s: "Look! The penguins ___ into the sea.", opts: ["jump", "are jumping"], a: 1,
      whyEn: "'Look!' means it is happening right in front of us now → Present Continuous.",
      why: "Look! تعني أن الحدث يحصل أمامنا الآن، إذن المضارع المستمر.", errCat: "tense" },
    { s: "Water ___ at 100°C.", opts: ["boils", "is boiling"], a: 0,
      whyEn: "This is a general scientific fact → Present Simple.",
      why: "حقيقة علمية ثابتة، إذن المضارع البسيط.", errCat: "tense" },
    { s: "Sorry, I can't talk now. I ___ dinner.", opts: ["cook", "am cooking"], a: 1,
      whyEn: "'now' shows the action is happening at this moment → Present Continuous.",
      why: "now: الطبخ يحدث في هذه اللحظة، إذن المضارع المستمر.", errCat: "tense" },
    { s: "This month, Kenji ___ the weather.", opts: ["studies", "is studying"], a: 1,
      whyEn: "'This month' is a temporary period around now → Present Continuous.",
      why: "this month فترة مؤقتة، إذن المضارع المستمر.", errCat: "tense" },
    { s: "We usually ___ outside in groups.", opts: ["go", "are going"], a: 0,
      whyEn: "'usually' is a frequency word for routines → Present Simple.",
      why: "usually كلمة عادة وتكرار، إذن المضارع البسيط.", errCat: "tense" },
    { s: "I ___ what you mean.", opts: ["understand", "am understanding"], a: 0,
      whyEn: "'understand' is a stative verb (thinking), so we do not use -ing.",
      why: "understand فعل حالة (تفكير)، ولا يأتي عادةً بصيغة المستمر.", errCat: "stative" },
    { s: "My brother ___ coffee. He only drinks tea.", opts: ["doesn't drink", "isn't drinking"], a: 0,
      whyEn: "This describes a general habit, not just right now → Present Simple.",
      why: "الكلام عن عادة عامة وليس عن هذه اللحظة، إذن المضارع البسيط.", errCat: "tense" }
  ],

  gB: [
    { s: "She is go to work by bus.", ok: false, fix: "She goes to work by bus.",
      whyEn: "Never put 'is' before a base verb. For a habit, say 'She goes'.",
      why: "لا نجمع is مع الفعل الأصلي. للعادة نقول She goes، ولو كان يحدث الآن نقول She is going.", errCat: "be_verb" },
    { s: "They are watching a film now.", ok: true,
      whyEn: "'are + watching' with 'now' is correct Present Continuous.",
      why: "are + watching مع now: تركيب صحيح للمضارع المستمر.", errCat: "tense" },
    { s: "He don't like cold weather.", ok: false, fix: "He doesn't like cold weather.",
      whyEn: "With he / she / it, use 'doesn't' (not 'don't').",
      why: "مع he / she / it نستخدم doesn't وليس don't.", errCat: "agreement" },
    { s: "I am needing your help.", ok: false, fix: "I need your help.",
      whyEn: "'need' is a stative verb—use Present Simple ('I need') even for right now.",
      why: "need فعل حالة، يأتي بالمضارع البسيط حتى لو قصدنا الآن.", errCat: "stative" },
    { s: "Do you exercise every day?", ok: true,
      whyEn: "Correct question about a habit: Do + you + base verb.",
      why: "سؤال عن عادة: Do + you + الفعل الأصلي. صحيح.", errCat: "tense" },
    { s: "My sister working at the moment.", ok: false, fix: "My sister is working at the moment.",
      whyEn: "Present Continuous needs 'am / is / are' before the -ing verb.",
      why: "المضارع المستمر يحتاج am / is / are قبل الفعل المنتهي بـ ing.", errCat: "be_verb" }
  ],

  gC: [
    { pre: "Every Friday, my uncle", verb: "visit", post: "my grandmother.", ans: ["visits"],
      whyEn: "'Every Friday' is a habit, and 'my uncle' is singular (he) → visits.",
      why: "Every Friday عادة، و my uncle مفرد (he)، إذن visits.", errCat: "agreement" },
    { pre: "Be quiet! The baby", verb: "sleep", post: ".", ans: ["is sleeping", "'s sleeping"],
      whyEn: "'Be quiet!' means the baby is sleeping right now → is sleeping.",
      why: "Be quiet! تعني أن النوم يحدث الآن، إذن is sleeping.", errCat: "tense" },
    { pre: "Sami", verb: "not / like", post: "hot food.", ans: ["doesn't like", "does not like"],
      whyEn: "Negative habit with 'he': doesn't + base verb (like).",
      why: "نفي عادة مع he: doesn't + الفعل الأصلي (like بدون s).", errCat: "agreement" },
    { pre: "Right now, the scientists", verb: "collect", post: "data.", ans: ["are collecting", "'re collecting"],
      whyEn: "'Right now' → Present Continuous, and 'the scientists' is plural → are collecting.",
      why: "Right now تعني المضارع المستمر، والفاعل جمع، إذن are.", errCat: "tense" },
    { pre: "The sun", verb: "rise", post: "in the east.", ans: ["rises"],
      whyEn: "General fact → Present Simple, and 'the sun' is singular (it) → rises.",
      why: "حقيقة ثابتة، إذن المضارع البسيط، و the sun مفرد، إذن rises.", errCat: "agreement" },
    { pre: "I", verb: "write", post: "an email at the moment.", ans: ["am writing", "'m writing"],
      whyEn: "'at the moment' → Present Continuous, and drop silent -e in write → am writing.",
      why: "at the moment تعني المضارع المستمر. والإملاء: write تصبح writing بحذف e.", errCat: "spelling" }
  ],

  gD: [
    { chips: ["working", "Is", "now?", "she"], ans: "Is she working now?",
      whyEn: "Present Continuous question: Is + subject + verb-ing?",
      why: "سؤال المضارع المستمر: Is + الفاعل + الفعل ing.", errCat: "word_order" },
    { chips: ["drink", "Kenji", "coffee.", "doesn't"], ans: "Kenji doesn't drink coffee.",
      whyEn: "Present Simple negative: Subject + doesn't + base verb.",
      why: "النفي: الفاعل + doesn't + الفعل الأصلي.", errCat: "word_order" },
    { chips: ["are", "swimming.", "Look!", "The penguins"], ans: "Look! The penguins are swimming.",
      whyEn: "Look! + Subject + are + verb-ing.",
      why: "Look! ثم الفاعل + are + الفعل ing.", errCat: "word_order" },
    { chips: ["works", "in the lab.", "Noor", "usually"], ans: "Noor usually works in the lab.",
      whyEn: "Frequency words like 'usually' come before the main verb.",
      why: "كلمات التكرار مثل usually تأتي قبل الفعل الأساسي.", errCat: "word_order" }
  ],

  /* ---------- القراءة (قراءة أولى للفكرة العامة بمؤقت + قراءة ثانية باللمس + أسئلة بالدليل) ---------- */
  reading: {
    title: "Hello from Antarctica!",
    from: "Noor", to: "Reem",
    targetSeconds: 110,
    introEn: "Noor is a young Saudi scientist from Jeddah working this summer at a research station in Antarctica. She wrote this email to her friend Reem.",
    intro: "نور عالِمة سعودية شابة من جدة، تعمل هذا الصيف في محطة أبحاث في القارة القطبية الجنوبية، وكتبت إيميلًا لصديقتها ريم.",
    // <<s:..>> مضارع بسيط · <<c:..>> مضارع مستمر · <<t:..>> كلمة إشارة زمنية
    // {word|key} كلمة من مفردات الدرس · [[text|معنى]] كلمة مساعدة
    paras: [
      "Hi Reem,",
      "How are you? I<<c:'m writing>> to you from a {research} [[station|محطة]] in Antarctica! I <<s:work>> here with a {team} of twelve {scientists|scientist} from eight [[different|مختلفة]] [[countries|دول]].",
      "My day <<s:starts>> early. I <<s:[[wake up|يستيقظ]]>> at 6:30 and <<s:have>> [[breakfast|الفطور]] with the {team}. Then we <<s:start>> work at eight. I <<t:[[usually|عادةً]]>> <<s:[[spend|يقضي (وقتًا)]]>> the morning in the {lab}. I <<s:[[check|يراجع / يفحص]]>> the {data} from our [[machines|الأجهزة]], and I <<s:{measure}>> the {temperature} of the [[sea water|ماء البحر]]. In the afternoon, we <<t:[[often|غالبًا]]>> <<s:go>> [[outside|إلى الخارج]], but only in [[groups|مجموعات]]. It's never {safe} to go [[alone|بمفرده]]!",
      "Life here is very [[different from|مختلفة عن]] life at home. It's summer now, so the sun <<s:doesn't [[go down|تغيب]]>> [[at all|إطلاقًا]]. It's {strange} to see the sun at [[midnight|منتصف الليل]]! I <<s:don't sleep>> very well, so I <<s:wear>> a [[sleep mask|قناع النوم]] <<t:every night>>.",
      "<<t:This month>>, I<<c:'m studying>> [[penguins|البطاريق]]. I<<c:'m [[counting|يعُدّ (count)]]>> them and <<c:[[checking|يفحص (check)]]>> their {health}. <<t:Right now>>, it's nine o'clock in the evening, and I<<c:'m sitting>> in the [[kitchen|المطبخ]]. My friend Kenji from Japan <<c:is cooking>> dinner for [[everyone|الجميع]], and Ana from Brazil <<c:is teaching>> us a [[card game|لعبة ورق]]. We<<c:'re learning>> a lot about [[each other's|بعضنا البعض]] {cultures|culture}.",
      "I <<s:{miss}>> you, and I really <<s:{miss}>> the food at home! But I <<s:love>> my [[job|وظيفة]], and I <<s:learn>> something new <<t:every day>>.",
      "Write soon!<br>Noor"
    ],
    predict: {
      qEn: "What do you think? In the Antarctic summer, the sun…",
      q: "ما توقعك؟ في صيف القارة القطبية الجنوبية، الشمس…",
      optsEn: ["goes down very early", "never goes down at all", "never comes up at all"],
      opts: ["تغيب مبكرًا جدًا", "لا تغيب أبدًا", "لا تشرق أبدًا"], a: 1,
      revealEn: "In the summer there, the sun never sets! Noor writes: 'the sun doesn't go down at all.'",
      reveal: "في الصيف هناك لا تغيب الشمس أبدًا، ونور تقول: the sun doesn't go down at all."
    },
    questions: [
      { q: "Where is Noor writing from?", opts: ["A hospital in Japan", "A research station in Antarctica", "A university in Brazil"], a: 1,
        ev: "I'm writing to you from a research station in Antarctica!",
        whyEn: "The first line of the email states her location: a research station in Antarctica.",
        why: "أول سطر في الإيميل يحدد المكان: محطة أبحاث في القارة القطبية الجنوبية.", errCat: "reading" },
      { q: "How many scientists are in Noor's team?", opts: ["Eight", "Nine", "Twelve"], a: 2,
        ev: "…a team of twelve scientists from eight different countries.",
        whyEn: "There are twelve scientists (eight is the number of countries).",
        why: "ثمانية هو عدد الدول، وليس عدد العلماء.", errCat: "reading" },
      { q: "What does Noor usually do in the morning?", opts: ["She works in the lab.", "She counts penguins outside.", "She cooks breakfast for the team."], a: 0,
        ev: "I usually spend the morning in the lab.",
        whyEn: "'usually' marks her morning routine: spending the morning in the lab.",
        why: "usually تدل على روتينها الصباحي، وهو العمل في المختبر.", errCat: "reading" },
      { tf: true, q: "Noor sometimes goes outside alone.", a: false,
        ev: "…but only in groups. It's never safe to go alone!",
        whyEn: "They only go outside in groups because going alone is never safe.",
        why: "يخرجون في مجموعات فقط، لأن الخروج بمفردهم ليس آمنًا أبدًا.", errCat: "reading" },
      { tf: true, q: "The sun goes down very late at night.", a: false,
        ev: "…so the sun doesn't go down at all.",
        whyEn: "The sun does not go down at all in the summer there.",
        why: "الشمس لا تغيب إطلاقًا في الصيف هناك، لا مبكرًا ولا متأخرًا.", errCat: "reading" },
      { q: "Why does Noor wear a sleep mask?", opts: ["Because the kitchen is noisy.", "Because the sun doesn't go down.", "Because she works at night."], a: 1,
        ev: "It's summer now, so the sun doesn't go down at all… so I wear a sleep mask every night.",
        whyEn: "It stays bright all night, so she wears a mask to sleep.",
        why: "الضوء موجود طوال الليل، فتحتاج نور قناعًا لتنام.", errCat: "reading" },
      { q: "What is Kenji doing right now?", opts: ["He's teaching a card game.", "He's studying penguins.", "He's cooking dinner."], a: 2,
        ev: "My friend Kenji from Japan is cooking dinner for everyone.",
        whyEn: "Kenji is cooking dinner (Ana is teaching a card game, and Noor is studying penguins).",
        why: "Ana هي التي تعلّمهم لعبة الورق، ونور هي التي تدرس البطاريق.", errCat: "reading" },
      { tf: true, q: "Noor loves her job.", a: true,
        ev: "But I love my job, and I learn something new every day.",
        whyEn: "Noor directly says 'I love my job.'",
        why: "نور تقول صراحة إنها تحب عملها.", errCat: "reading" },
      { q: "\"I really miss the food at home.\" This means Noor…", opts: ["…doesn't like the food at home.", "…wants to eat the food from home.", "…eats the food at home every day."], a: 1,
        ev: "I miss you, and I really miss the food at home!",
        whyEn: "'miss' here means she wishes she could eat food from home.",
        why: "miss هنا بمعنى تشتاق إلى، أي تتمنى أن تأكل من أكل بلدها.", errCat: "reading" },
      { q: "Which sentence is about something happening right now?", opts: ["We start work at eight.", "Kenji is cooking dinner.", "I wake up at 6:30."], a: 1,
        ev: "Right now… Kenji from Japan is cooking dinner for everyone.",
        whyEn: "'is cooking' is Present Continuous for right now; the other two are daily routines.",
        why: "is cooking مضارع مستمر لما يحدث الآن، والجملتان الأخريان روتين يومي.", errCat: "tense" }
    ]
  },

  /* ---------- الكتابة (المرحلة 5 — 10 دقائق) ---------- */
  writing: {
    taskEn: "Write at least 4 separate sentences about your daily routine and something different happening in your life this month.",
    task: "اكتب 4 جمل منفصلة على الأقل عن روتينك اليومي، وعن شيء مختلف يحدث في حياتك هذا الشهر.",
    modelMarked: "I <<t:usually>> <<s:wake up>> at six o'clock and <<s:have>> breakfast with my family. I <<s:study>> at university, and I <<t:often>> <<s:spend>> the afternoon in the library. <<t:On Fridays>>, I <<s:visit>> my grandparents. <<t:This month>>, I<<c:'m learning>> English with a new course, and I<<c:'m reading>> short stories about different {cultures|culture}. <<t:Right now>>, I<<c:'m sitting>> in my room and <<c:writing>> this paragraph. I <<s:{miss}>> my friends from school, but I <<s:love>> my new routine!",
    model: "I usually wake up at six o'clock and have breakfast with my family. I study at university, and I often spend the afternoon in the library. On Fridays, I visit my grandparents. This month, I'm learning English with a new course, and I'm reading short stories about different cultures. Right now, I'm sitting in my room and writing this paragraph. I miss my friends from school, but I love my new routine!"
  },

  /* ---------- الاختبار القصير وتحليل الأخطاء (المرحلة 6 — 8 دقائق) ---------- */
  quiz: [
    { s: "My uncle is a doctor. He ___ in a big hospital.", opts: ["works", "is working", "work"], a: 0, tag: "Grammar · قواعد",
      whyEn: "A permanent job uses Present Simple, and 'He' takes -s → works.",
      why: "وظيفة دائمة، إذن المضارع البسيط، ومع he نضيف s.", errCat: "agreement" },
    { s: "Shh! I ___ to the news.", opts: ["listen", "am listening", "listens"], a: 1, tag: "Grammar · قواعد",
      whyEn: "'Shh!' shows the action is happening right now → am listening.",
      why: "Shh! تعني أن الاستماع يحدث الآن، إذن am listening.", errCat: "tense" },
    { s: "___ your sister speak English?", opts: ["Do", "Is", "Does"], a: 2, tag: "Grammar · قواعد",
      whyEn: "Present Simple question with 'your sister' (she) → Does.",
      why: "سؤال في المضارع البسيط، و your sister تعني she، إذن Does.", errCat: "agreement" },
    { s: "They ___ TV right now. They're at the gym.", opts: ["don't watch", "aren't watching", "not watching"], a: 1, tag: "Grammar · قواعد",
      whyEn: "'right now' requires Present Continuous negative → aren't watching.",
      why: "right now تعني المضارع المستمر، ونفيه aren't + ing.", errCat: "tense" },
    { s: "My brother usually lives in Riyadh, but this year he ___ in London.", opts: ["lives", "is living", "live"], a: 1, tag: "Grammar · قواعد",
      whyEn: "'this year' is a temporary situation different from usual → is living.",
      why: "this year وضع مؤقت ومختلف عن المعتاد، إذن is living.", errCat: "tense" },
    { s: "Which sentence is correct?", opts: ["I am knowing the answer.", "I knowing the answer.", "I know the answer."], a: 2, tag: "Grammar · قواعد",
      whyEn: "'know' is a stative verb, so we use Present Simple: I know.",
      why: "know فعل حالة، إذن المضارع البسيط.", errCat: "stative" },
    { s: "The scientists ___ data every day.", opts: ["collect", "collects", "are collect"], a: 0, tag: "Grammar · قواعد",
      whyEn: "'every day' is a habit and 'scientists' is plural → collect.",
      why: "every day عادة، والفاعل جمع، إذن collect بدون s.", errCat: "agreement" },
    { s: "Can you ___ the room? I want to buy a new carpet.", opts: ["miss", "measure", "count"], a: 1, tag: "Vocabulary · مفردات",
      whyEn: "'measure' means find the size of the room before buying a carpet.",
      why: "measure تعني يقيس، والسجادة تحتاج مقاس الغرفة.", errCat: "vocab" },
    { s: "This road is dangerous at night. Let's find a ___ way home.", opts: ["strange", "safe", "data"], a: 1, tag: "Vocabulary · مفردات",
      whyEn: "'safe' is the opposite of 'dangerous'.",
      why: "safe تعني آمن، وهي عكس dangerous.", errCat: "vocab" },
    { s: "I ___ my friends from school. I want to see them again!", opts: ["miss", "measure", "research"], a: 0, tag: "Vocabulary · مفردات",
      whyEn: "'miss' means feel sad because you are away from people you care about.",
      why: "miss تعني يشتاق إلى.", errCat: "vocab" }
  ]
};

Object.assign(DATA, LESSONS.u1l1);
})();
