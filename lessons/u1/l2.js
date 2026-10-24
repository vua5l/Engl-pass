/* ===== الوحدة 1 · الدرس 2: What's a Typical Day for You? — Questions & Short Answers (6 مراحل · درس استماع) ===== */
(function(){
var QA_SVG = '<svg class="tl" viewBox="0 0 340 176" role="img" aria-label="Diagram comparing Present Simple questions (Do / Does + subject + base verb, short answers with does / doesn\'t) with Present Continuous questions (Am / Is / Are + subject + verb-ing, short answers with is / isn\'t)" direction="ltr">' +
  '<rect x="10" y="10" width="154" height="156" rx="16" fill="#E8EEF5" stroke="#2C4A6E" stroke-width="1.8"/>' +
  '<text x="87" y="31" text-anchor="middle" font-family="Quicksand, Readex Pro, sans-serif" font-weight="700" font-size="12.5" fill="#2C4A6E">HABIT · العادة</text>' +
  '<text x="87" y="48" text-anchor="middle" font-family="Quicksand, sans-serif" font-weight="600" font-size="10.5" fill="#5A6B7C">Present Simple</text>' +
  '<text x="20" y="72" font-family="Quicksand, sans-serif" font-weight="700" font-size="10.8" fill="#1E2A33">Do / Does + subject</text>' +
  '<text x="20" y="89" font-family="Quicksand, sans-serif" font-weight="700" font-size="10.8" fill="#1E2A33">+ base verb …?</text>' +
  '<text x="20" y="113" font-family="Quicksand, sans-serif" font-weight="700" font-size="10.8" fill="#2C4A6E">Does he walk to work?</text>' +
  '<text x="20" y="133" font-family="Quicksand, sans-serif" font-weight="600" font-size="10.8" fill="#1E2A33">Yes, he does.</text>' +
  '<text x="20" y="152" font-family="Quicksand, sans-serif" font-weight="600" font-size="10.8" fill="#1E2A33">No, he doesn\'t.</text>' +
  '<rect x="176" y="10" width="154" height="156" rx="16" fill="#F9EBE7" stroke="#B94A33" stroke-width="1.8"/>' +
  '<text x="253" y="31" text-anchor="middle" font-family="Quicksand, Readex Pro, sans-serif" font-weight="700" font-size="12.5" fill="#A8432E">NOW · الآن</text>' +
  '<text x="253" y="48" text-anchor="middle" font-family="Quicksand, sans-serif" font-weight="600" font-size="10.5" fill="#A8432E">Present Continuous</text>' +
  '<text x="186" y="72" font-family="Quicksand, sans-serif" font-weight="700" font-size="10.8" fill="#1E2A33">Am / Is / Are + subject</text>' +
  '<text x="186" y="89" font-family="Quicksand, sans-serif" font-weight="700" font-size="10.8" fill="#1E2A33">+ verb-ing …?</text>' +
  '<text x="186" y="113" font-family="Quicksand, sans-serif" font-weight="700" font-size="10.8" fill="#A8432E">Is he walking now?</text>' +
  '<text x="186" y="133" font-family="Quicksand, sans-serif" font-weight="600" font-size="10.8" fill="#1E2A33">Yes, he is.</text>' +
  '<text x="186" y="152" font-family="Quicksand, sans-serif" font-weight="600" font-size="10.8" fill="#1E2A33">No, he isn\'t.</text>' +
  '</svg>';

LESSONS.u1l2 = {
  id: "u1l2",
  unit: 1,
  n: 2,
  mode: "listening",
  en: "What's a Typical Day for You?",
  ar: "مقابلة مع معلمة عن يومها: الأسئلة والإجابات القصيرة",
  subEn: "Questions & Short Answers",
  canDoEn: "I can ask and answer questions about daily routines and about what is happening now, with Do / Does, Am / Is / Are and short answers.",
  canDoAr: "أقدر أن أسأل وأجيب عن الروتين اليومي وعما يحدث الآن بـ Do / Does وAm / Is / Are والإجابات القصيرة.",
  descEn: "I can ask someone about their typical day and answer with short answers, without mixing do / does and am / is / are.",
  descAr: "أقدر أن أسأل شخصًا عن يومه المعتاد وأجيب بإجابات قصيرة دون خلط بين do / does وam / is / are، مع مقطع استماع حقيقي يسأل فيه تود المعلمةَ ناتالي عن يومها.",
  goals: [
    { en: "I can ask yes/no questions with Do / Does + base verb (habits) and Am / Is / Are + -ing (now).", ar: "أقدر أن أسأل أسئلة «نعم أو لا» بـ Do / Does مع الفعل المجرد للعادة، وبـ Am / Is / Are مع ing لما يحدث الآن." },
    { en: "I can ask Wh- questions (What time / Where / How many …?) and give short answers like 'Yes, she does.' and 'No, he isn't.'", ar: "أقدر أن أسأل بـ What time وWhere وHow many، وأجيب إجابات قصيرة مثل Yes, she does وNo, he isn't." },
    { en: "I can understand a real interview about a teacher's typical day, and shadow the speakers.", ar: "أقدر أن أفهم مقابلة حقيقية عن يوم معلمة المعتاد، وأردّد مع المتحدثين." },
    { en: "I can write at least 4 separate sentences: questions and short answers about someone's typical day.", ar: "أقدر أن أكتب 4 جمل منفصلة على الأقل: أسئلة وإجابات قصيرة عن يوم شخص المعتاد." }
  ],
  intro: {
    recall: {
      dEn: "Review the words and the legal phrase of Unit 1 · Lesson 1 from memory by typing them on the keyboard.",
      d: "استرجع كلمات الدرس الأول من الوحدة وعبارته القانونية كتابةً من ذاكرتك بلوحة المفاتيح.",
      items: [
        ["review", "5 active recall items from Unit 1 · Lesson 1", "5 عناصر استرجاع نشط من الدرس الأول في الوحدة"],
        ["pen", "Type from memory (scientist, research, measure, strange, sign)", "كتابة من الذاكرة لتثبيت الإملاء (scientist وresearch وmeasure وstrange وsign)"],
        ["spark", "Includes the collocation 'do research' and the legal phrase 'sign a contract'", "تشمل المتلازمة do research والعبارة القانونية sign a contract"]
      ]
    },
    vocab: {
      dEn: "6 words and phrases for a typical day plus today's legal phrase ('working hours'), with randomized matching rounds.",
      d: "6 كلمات وعبارات عن اليوم المعتاد مع العبارة القانونية اليومية (working hours)، ولعبة توصيل عشوائية في كل جولة.",
      items: [
        ["cards", "7 Flashcards (6 words + 'working hours') with human audio & Oxford link", "7 بطاقات (6 كلمات + working hours) مع النطق البشري ورابط Oxford"],
        ["review", "Randomized 2-round matching game", "لعبة توصيل عشوائية من جولتين"],
        ["quiz", "8 context sentences: choose the right word", "8 جمل سياقية: اختر الكلمة المناسبة"]
      ]
    },
    grammar: {
      dEn: "Why are 'Does she works?' and 'Are you work?' wrong? Learn to ask questions and give short answers in Present Simple and Present Continuous.",
      d: "لماذا تُعد Does she works وAre you work خاطئتين؟ تعلّم السؤال والإجابة القصيرة في المضارع البسيط والمستمر.",
      items: [
        ["book", "6 grammar cards (English first, Arabic on tap)", "6 بطاقات شرح (الإنجليزي أولًا، والعربي عند الطلب)"],
        ["quiz", "16 guided exercises (4 of each type), one per screen", "16 تمرينًا موجّهًا (4 من كل نمط)، سؤال في كل شاشة"]
      ]
    },
    reading: {
      dEn: "3-Stage Listening (real recording): Todd asks Natalie, a teacher from England, about her typical day. Listen for the main idea, answer 8 detail questions, then read the transcript on the source page and shadow.",
      d: "استماع على 3 مراحل لتسجيل حقيقي: تود يسأل ناتالي، وهي معلمة من إنجلترا، عن يومها المعتاد؛ استمع للفكرة العامة، ثم أجب عن 8 أسئلة تفاصيل، ثم اقرأ النص في صفحة المصدر وردّد مع المتحدثين.",
      items: [
        ["speaker", "Stage 1: Listen for the main idea without reading the transcript", "المرحلة 1: استماع أول للفكرة العامة بدون النص المكتوب"],
        ["quiz", "Stage 2: Listen again and answer 8 detail questions", "المرحلة 2: استماع ثانٍ للإجابة عن 8 أسئلة تفاصيل"],
        ["mail", "Stage 3: Transcript on the source page & Shadowing Timer", "المرحلة 3: النص المكتوب في صفحة المصدر لمراجعة ما فات، مع الترديد (Shadowing)"]
      ]
    },
    writing: {
      dEn: "Interview a family member or a friend about their typical day: write at least 4 separate sentences with questions and short answers.",
      d: "حاور أحد أفراد أسرتك أو صديقًا عن يومه المعتاد: اكتب 4 جمل منفصلة على الأقل فيها أسئلة وإجابات قصيرة.",
      items: [
        ["pen", "At least 4 separate sentences: questions end with ?, answers end with a period (.)", "4 جمل منفصلة على الأقل: السؤال ينتهي بعلامة استفهام، والجواب بنقطة"],
        ["spark", "Instant check: 4 sentences, 2 questions with a helper, 1 short answer and 2 lesson words", "فحص فوري: 4 جمل، وسؤالان بفعل مساعد، وإجابة قصيرة، وكلمتان من الدرس"]
      ]
    },
    quiz: {
      dEn: "10 shuffled questions on questions, short answers and vocabulary (80% to pass), plus Lesson Error Analysis.",
      d: "اختبار قصير من 10 أسئلة في الأسئلة والإجابات القصيرة ومفردات الدرس (النجاح من 80%)، يليه تحليل شامل لأخطاء الدرس.",
      items: [
        ["quiz", "10 questions (80% passing score)", "10 أسئلة متنوعة (النجاح من 80%)"],
        ["review", "Structured Error Analysis by category", "تحليل أخطاء الدرس وأسبابها حسب الفئة"]
      ]
    }
  },

  recall: [
    {
      id: "rc-0",
      promptAr: "عالِم / عالِمة (اسم من الدرس السابق، من الكلمة science)",
      promptEn: "Noun from the last lesson: a person who works in science",
      sentPre: "My cousin is a",
      sentPost: "who studies the fish of the Red Sea.",
      ans: ["scientist"],
      hint: "s _ _ _ _ _ _ _ t (9 letters)",
      spellNoteEn: "Spelled sci + en + tist: s-c-i-e-n-t-i-s-t (the 'c' after 's' is silent).",
      spellNote: "تُكتب sci + en + tist، وحرف c بعد s لا يُنطق.",
      errCat: "spelling"
    },
    {
      id: "rc-1",
      promptAr: "بحث علمي (من المتلازمة do ___ في الدرس السابق، وهي غير معدودة)",
      promptEn: "Collocation from the last lesson: do ___ (careful study to find new facts)",
      sentPre: "Our professor does",
      sentPost: "on water use on Saudi farms.",
      ans: ["research"],
      hint: "r _ _ _ _ _ _ h (8 letters)",
      spellNoteEn: "re + search: r-e-s-e-a-r-c-h. Say 'do research', never 'make research' or 'a research'.",
      spellNote: "تُكتب re + search، ونقول do research لا make research، ولا نقول a research لأنها غير معدودة.",
      errCat: "vocab"
    },
    {
      id: "rc-2",
      promptAr: "يقيس (فعل من الدرس السابق: ___ the temperature)",
      promptEn: "Verb from the last lesson: find the size or amount of something (___ the temperature)",
      sentPre: "At the clinic, the nurse uses a small machine to",
      sentPost: "my blood pressure.",
      ans: ["measure"],
      hint: "m _ _ _ _ _ e (7 letters)",
      spellNoteEn: "m-e-a-s-u-r-e: 'ea' as in 'pleasure', and a silent -e at the end.",
      spellNote: "تُكتب m-e-a-s-u-r-e، وفيها ea كما في pleasure، وتنتهي بحرف e صامت.",
      errCat: "spelling"
    },
    {
      id: "rc-3",
      promptAr: "غريب / غير مألوف (صفة من الدرس السابق)",
      promptEn: "Adjective from the last lesson: not normal, surprising",
      sentPre: "My grandmother thinks it is",
      sentPost: "to eat dinner at eleven at night.",
      ans: ["strange"],
      hint: "s _ _ _ _ _ e (7 letters)",
      spellNoteEn: "s-t-r-a-n-g-e: three consonants at the start (s-t-r) and a silent -e at the end.",
      spellNote: "تُكتب s-t-r-a-n-g-e، تبدأ بثلاثة حروف ساكنة (str) وتنتهي بحرف e صامت.",
      errCat: "spelling"
    },
    {
      id: "rc-4",
      promptAr: "يوقّع (العبارة القانونية من الدرس السابق: ___ a contract)",
      promptEn: "Legal phrase from the last lesson: ___ a contract (write your name on it to agree)",
      sentPre: "Before new teachers start work, they",
      sentPost: "a contract with the school.",
      ans: ["sign"],
      isLegal: true,
      hint: "s _ _ n (4 letters)",
      spellNoteEn: "s-i-g-n: the 'g' is silent (it sounds like 'sine').",
      spellNote: "تُكتب s-i-g-n، وحرف g فيها صامت لا يُنطق.",
      errCat: "vocab"
    }
  ],

  legalPhrase: {
    en: "working hours",
    headword: "working hours",
    pos: "legal phrase",
    ar: "ساعات العمل (يحددها عقد العمل ونظام العمل)",
    say: "وُرْكِنْق آوَرْز",
    ex: "The labour law protects workers from very long working hours.",
    exAr: "يحمي نظام العمل العمّال من ساعات العمل الطويلة جدًا.",
    tipEn: "Legal collocation, always plural: 'working hours'. A job contract states your working hours, and labour law limits them (in Saudi Arabia: up to 8 hours a day, and up to 6 in Ramadan for Muslim workers).",
    tip: "عبارة قانونية بصيغة الجمع دائمًا: working hours. يحددها عقد العمل ويقيّدها نظام العمل؛ فالحد في السعودية ثماني ساعات يوميًا، وست ساعات في رمضان للعاملين المسلمين.",
    legal: true,
    oxfordSlug: "hour",
    wikiFiles: ["En-us-working.ogg", "En-us-hours.ogg"],
    wikiCredit: "File:En-us-working.ogg & File:En-us-hours.ogg · Wikimedia Commons (author and licence on the file pages)"
  },

  vocab: [
    { en: "typical", pos: "adjective", ar: "عادي / معتاد (a typical day = يوم عادي)", say: "تِبِيكَل",
      ex: "On a typical day, my uncle leaves for the airport at six.", exAr: "في اليوم العادي يخرج عمي إلى المطار في السادسة.",
      tipEn: "Collocations: a typical day / a typical morning / a typical week. It means usual or normal for that person or place.",
      tip: "تأتي غالبًا قبل الاسم: a typical day (يوم عادي) وa typical week، وتعني المعتاد عند الشخص أو في المكان.",
      oxfordSlug: "typical",
      wikiFile: "En-us-typical.ogg",
      wikiCredit: "File:En-us-typical.ogg · Wikimedia Commons (author and licence on the file page)" },
    { en: "wake up", headword: "wake", pos: "verb", ar: "يستيقظ (من النوم)", say: "وَيْك أَب",
      ex: "My little sister wakes up at six on school days.", exAr: "تستيقظ أختي الصغيرة في السادسة في أيام الدراسة.",
      tipEn: "Wake up = stop sleeping. Get up / get out of bed = leave your bed. With he / she: wakes up. Past: woke up.",
      tip: "wake up تعني يستيقظ من النوم، أما get up أو get out of bed فتعني يقوم من السرير. ومع he / she نقول wakes up، وماضيها woke up.",
      oxfordSlug: "wake-up",
      wikiFiles: ["En-us-wake.ogg", "En-us-up.ogg"],
      wikiCredit: "File:En-us-wake.ogg & File:En-us-up.ogg · Wikimedia Commons (author and licence on the file pages)" },
    { en: "get out of bed", headword: "out of bed", pos: "verb", ar: "يقوم من فراشه / ينهض من السرير", say: "قِت آوْت أَف بِد",
      ex: "My grandfather gets out of bed early and makes the coffee.", exAr: "يقوم جدي من فراشه مبكرًا ويعدّ القهوة.",
      tipEn: "Get out of bed = leave your bed after you wake up. Opposite: go to bed. With he / she: gets out of bed.",
      tip: "get out of bed تعني يقوم من فراشه بعد الاستيقاظ، وعكسها go to bed (يأوي إلى فراشه). ومع he / she نقول gets out of bed.",
      oxfordSlug: "bed",
      wikiFiles: ["En-us-get.ogg", "En-us-out.ogg", "En-us-of.ogg", "En-us-bed.ogg"],
      wikiCredit: "File:En-us-get.ogg, File:En-us-out.ogg, File:En-us-of.ogg & File:En-us-bed.ogg · Wikimedia Commons (author and licence on the file pages)" },
    { en: "canteen", pos: "noun", ar: "مقصف / كافتيريا (في مدرسة أو جامعة أو مقر عمل)", say: "كَانْتِين",
      ex: "The university canteen sells hot soup in winter.", exAr: "يبيع مقصف الجامعة حساءً ساخنًا في الشتاء.",
      tipEn: "A canteen is the place to eat at a school, university, factory or office (mostly British English). Stress the second part: can-TEEN.",
      tip: "canteen مكان الطعام في المدرسة أو الجامعة أو المصنع أو مقر العمل، والنبر على مقطعها الثاني: كان-تين.",
      oxfordSlug: "canteen",
      wikiFile: "LL-Q1860 (eng)-Vealhurl-canteen.wav",
      wikiCredit: "File:LL-Q1860 (eng)-Vealhurl-canteen.wav · Lingua Libre / Wikimedia Commons (author and licence on the file page)" },
    { en: "last", pos: "verb", ar: "يستمر / يدوم (مدةً من الوقت)", say: "لَاسْت",
      ex: "The bus ride to my university lasts forty minutes.", exAr: "تستغرق رحلة الحافلة إلى جامعتي أربعين دقيقة.",
      tipEn: "As a verb, 'last' means continue for a time: The exam lasts three hours. As an adjective, 'last' means final: the last bus.",
      tip: "last فعلًا تعني يستمر أو يدوم مدة من الوقت (The exam lasts three hours)، وصفةً تعني الأخير (the last bus)، فميّز بينهما من موقعها في الجملة.",
      oxfordSlug: "last1_4",
      wikiFile: "En-us-last.ogg",
      wikiCredit: "File:En-us-last.ogg · Wikimedia Commons (author and licence on the file page)" },
    { en: "get changed", headword: "changed", pos: "verb", ar: "يبدّل ملابسه", say: "قِت تْشَيْنْجْد",
      ex: "My brother comes home from work and gets changed before dinner.", exAr: "يعود أخي من العمل ويبدّل ملابسه قبل العشاء.",
      tipEn: "Get changed = take off your clothes and put on different ones. It has no object: I get changed (NOT I change me). Also: get changed into my uniform.",
      tip: "get changed تعني يبدّل ملابسه، ولا تحتاج مفعولًا: I get changed لا I change me، ونقول get changed into my uniform (يلبس زيّه).",
      oxfordSlug: "change",
      wikiFile: "En-au-get changed.ogg",
      wikiCredit: "File:En-au-get changed.ogg · Wikimedia Commons (author and licence on the file page)" }
  ],

  vocabGaps: [
    { s: "Is this a ___ week for you, or are you busier than usual because of exams?", opts: ["safe", "typical", "late"], a: 1,
      whyEn: "'typical' means normal and usual. The speaker asks if this week is normal or busier than usual.",
      why: "typical تعني عاديًّا معتادًا؛ فالسائل يريد أن يعرف أهذا الأسبوع عادي أم أكثر انشغالًا من المعتاد.", errCat: "vocab" },
    { s: "My alarm rings at six, but I usually ___ before it, at about ten to six.", opts: ["wake up", "get changed", "last"], a: 0,
      whyEn: "'wake up' means stop sleeping. You can wake up before your alarm rings.",
      why: "wake up تعني يستيقظ من النوم، وقد تستيقظ قبل أن يرنّ المنبّه.", errCat: "vocab" },
    { s: "It is very cold this morning, so nobody in my family wants to ___.", opts: ["last", "canteen", "get out of bed"], a: 2,
      whyEn: "'get out of bed' means leave your bed. On a cold morning, people want to stay under the blanket.",
      why: "get out of bed تعني يقوم من فراشه، وفي الصباح البارد يفضّل الناس البقاء تحت الغطاء.", errCat: "vocab" },
    { s: "At lunchtime, the students buy sandwiches and juice in the school ___.", opts: ["timetable", "canteen", "bed"], a: 1,
      whyEn: "A 'canteen' is the place where students or workers buy and eat food at school or at work.",
      why: "canteen هو المكان الذي يشتري فيه الطلاب أو الموظفون طعامهم ويأكلونه في المدرسة أو العمل.", errCat: "vocab" },
    { s: "How long does your English class ___? — Fifty minutes, from eight to 8:50.", opts: ["last", "wake up", "get changed"], a: 0,
      whyEn: "'last' (verb) means continue for a time. 'How long does it last?' asks how much time it takes from start to end.",
      why: "last فعلًا تعني يستمر مدةً من الوقت، وHow long does it last تسأل عن المدة من البداية إلى النهاية.", errCat: "vocab" },
    { s: "My brother plays football after school, so he ___ at the sports club before he takes the bus home.", opts: ["wakes up", "gets out of bed", "gets changed"], a: 2,
      whyEn: "'get changed' means put on different clothes. After football, he takes off his sports clothes and puts on others.",
      why: "get changed تعني يبدّل ملابسه، فبعد المباراة يخلع ملابس الرياضة ويلبس غيرها.", errCat: "vocab" },
    { s: "The flight from Riyadh to Jeddah ___ about two hours.", opts: ["misses", "lasts", "gets changed"], a: 1,
      whyEn: "'last' means continue for a time: the flight continues for about two hours.",
      why: "last تعني يستمر مدة من الوقت، فالرحلة تستغرق نحو ساعتين.", errCat: "vocab" },
    { s: "Under Saudi labour law, ___ for Muslim workers in Ramadan are no more than six hours a day.", opts: ["working hours", "canteens", "typical days"], a: 0,
      whyEn: "'working hours' are the hours people work. The labour law makes them shorter in Ramadan: up to six hours a day for Muslim workers.",
      why: "working hours هي ساعات العمل، ونظام العمل يخفّضها في رمضان إلى ست ساعات يوميًا على الأكثر للعاملين المسلمين.", errCat: "vocab" }
  ],

  gCards: [
    {
      tEn: "Do / Does Questions (Present Simple)",
      t: "أسئلة Do / Does في المضارع البسيط",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Do / Does + Subject + Base Verb?</span><small>السؤال عن العادة والحقيقة</small></h2>' +
        '<p class="en-p" dir="ltr">In Arabic, a question can be a statement with a question mark («تعمل في بنك؟»). In English, a question about a habit or a fact needs a helper <b>before</b> the subject: <b>Do</b> or <b>Does</b>. The main verb stays in its <b>base form</b>: no -s, no -ing.</p>' +
        '<div class="formula">Do / Does + subject + <b>base verb</b> …?</div>' +
        '<div class="tbl"><table><thead><tr><th>Subject · الفاعل</th><th>Helper · المساعد</th><th>Example · مثال</th></tr></thead><tbody>' +
        '<tr><td>I · you · we · they</td><td><span class="hs">Do</span></td><td><span class="hs">Do</span> your parents live in Abha?</td></tr>' +
        '<tr><td>he · she · it</td><td><span class="hc">Does</span></td><td><span class="hc">Does</span> your aunt work at a hospital?</td></tr></tbody></table></div>' +
        '<div class="tip" dir="ltr"><p><b>The -s moves to Does · الـ s تنتقل إلى Does:</b></p><div class="pairs"><span class="yes">She takes the metro. → Does she take the metro?</span><span class="no">Does she takes the metro?</span></div></div>' +
        QA_SVG,
      arHtml:
        '<p>في العربية قد يكون السؤال جملة خبرية بعلامة استفهام («تعمل في بنك؟»)، أما في الإنجليزية فالسؤال عن العادة أو الحقيقة يحتاج فعلًا مساعدًا <b>قبل</b> الفاعل:</p>' +
        '<p>١) <b>Do</b> مع <bdi class="en">I / you / we / they</bdi> ومع الجمع.</p>' +
        '<p>٢) <b>Does</b> مع <bdi class="en">he / she / it</bdi> ومع المفرد.</p>' +
        '<p>٣) يبقى الفعل الأساسي بعده مجردًا بلا s ولا ing، لأن الـ s انتقلت إلى <bdi class="en">Does</bdi>.</p>'
    },
    {
      tEn: "Am / Is / Are Questions (Present Continuous and be)",
      t: "أسئلة Am / Is / Are في المضارع المستمر ومع be",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Am / Is / Are + Subject + -ing?</span><small>السؤال عما يحدث الآن، ومع الصفة والاسم</small></h2>' +
        '<p class="en-p" dir="ltr">For an action happening <b>now</b> or <b>around now</b> (Present Continuous), put <b>am / is / are</b> before the subject and keep the <b>-ing</b> verb:</p>' +
        '<div class="formula">Am / Is / Are + subject + <b>verb-ing</b> …?</div>' +
        '<div class="xbox"><span class="xtag c" dir="ltr">Now · الآن</span><p class="xen">Are you studying for an exam this week?</p><p class="xen">Is your father working from home today?</p></div>' +
        '<p class="en-p" dir="ltr">With <b>be + adjective / noun / place</b> (no other verb), the question also starts with <b>Am / Is / Are</b>:</p>' +
        '<div class="xbox"><span class="xtag s" dir="ltr">be + adjective / noun · مع الصفة والاسم</span><p class="xen">Is the library open on Fridays?</p><p class="xen">Are your cousins engineers?</p></div>' +
        '<div class="tip" dir="ltr"><p><b>Never mix the two helpers · لا تخلط بين المساعدين:</b></p><div class="pairs"><span class="no">Are you work at a bank?</span><span class="no">Do you working now?</span><span class="yes">Do you work at a bank? · Are you working now?</span></div></div>',
      arHtml:
        '<p>إذا كان الحدث يجري الآن أو في هذه الفترة (المضارع المستمر) نبدأ السؤال بـ <b>am / is / are</b> قبل الفاعل، ونُبقي الفعل بصيغة <bdi class="en">-ing</bdi>.</p>' +
        '<p>وكذلك نبدأ بـ <b>Is / Are</b> إذا لم يكن في الجملة فعل آخر، بل صفة أو اسم أو مكان، كالسؤال عن مكتبة: أهي مفتوحة؟</p>' +
        '<p>ولا نجمع بين المساعدين: <bdi class="en">Do</bdi> لا يأتي بعده فعل ينتهي بـ <bdi class="en">-ing</bdi>، و<bdi class="en">Are</bdi> لا يأتي بعده فعل مجرد.</p>'
    },
    {
      tEn: "Wh- Questions: What time / Where / How many …?",
      t: "أسئلة الاستفهام: What time وWhere وHow many",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Wh- Word + Question Order</span><small>كلمة الاستفهام أولًا ثم ترتيب السؤال</small></h2>' +
        '<p class="en-p" dir="ltr">Put the question word <b>first</b>. After it, use the same order as a yes/no question: <b>do / does</b> for habits, <b>am / is / are</b> for now.</p>' +
        '<div class="formula">Wh- word + <b>do / does</b> + subject + base verb?</div>' +
        '<ul class="uses en-uses">' +
          '<li>What time …?<span class="xen">What time do you finish work on Sundays?</span></li>' +
          '<li>Where …?<span class="xen">Where does your brother study?</span></li>' +
          '<li>How many …?<span class="xen">How many children do your neighbours have?</span></li>' +
          '<li>What … do?<span class="xen">What does your mother do in the evening?</span></li>' +
          '<li>Now (-ing):<span class="xen">Where are you going now?</span></li>' +
        '</ul>' +
        '<div class="tip" dir="ltr"><p><b>Do not drop do / does · لا تحذف do / does:</b></p><div class="pairs"><span class="no">What time you start work?</span><span class="yes">What time do you start work?</span></div></div>',
      arHtml:
        '<p>نضع كلمة الاستفهام في أول السؤال (<bdi class="en">What time</bdi> في أي ساعة، و<bdi class="en">Where</bdi> أين، و<bdi class="en">How many</bdi> كم عدد، و<bdi class="en">What</bdi> ماذا)، ثم نكمل بترتيب السؤال نفسه: <bdi class="en">do / does</bdi> مع العادة، و<bdi class="en">am / is / are</bdi> مع ما يحدث الآن.</p>' +
        '<p>والخطأ الشائع أن نترجم «متى تبدأ عملك؟» حرفيًا فنحذف <bdi class="en">do</bdi>، والصواب أن يأتي <bdi class="en">do / does</bdi> بعد كلمة الاستفهام.</p>'
    },
    {
      tEn: "Short Answers: Yes, I do. / No, she isn't.",
      t: "الإجابات القصيرة",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Short Answers</span><small>الإجابة القصيرة تكرر المساعد لا الفعل</small></h2>' +
        '<p class="en-p" dir="ltr">Answer a yes/no question with <b>Yes / No + pronoun + the same helper</b>. Look at the first word of the question: <b>Do / Does</b> → do / does; <b>Am / Is / Are</b> → am / is / are.</p>' +
        '<div class="tbl"><table><thead><tr><th>Question · السؤال</th><th>Yes · نعم</th><th>No · لا</th></tr></thead><tbody>' +
        '<tr><td>Do you …?</td><td>Yes, I <span class="hs">do</span>.</td><td>No, I <span class="hs">don\'t</span>.</td></tr>' +
        '<tr><td>Does she …?</td><td>Yes, she <span class="hs">does</span>.</td><td>No, she <span class="hs">doesn\'t</span>.</td></tr>' +
        '<tr><td>Are you …-ing?</td><td>Yes, I <span class="hc">am</span>.</td><td>No, <span class="hc">I\'m not</span>.</td></tr>' +
        '<tr><td>Is he …?</td><td>Yes, he <span class="hc">is</span>.</td><td>No, he <span class="hc">isn\'t</span>.</td></tr>' +
        '<tr><td>Are they …?</td><td>Yes, they <span class="hc">are</span>.</td><td>No, they <span class="hc">aren\'t</span>.</td></tr></tbody></table></div>' +
        '<div class="tip" dir="ltr"><p><b>Two rules · قاعدتان:</b> repeat the helper, not the main verb, and do not shorten a <b>Yes</b> answer.</p><div class="pairs"><span class="no">Do you drive to work? Yes, I drive.</span><span class="yes">Do you drive to work? Yes, I do.</span><span class="no">Are you ready? Yes, I\'m.</span><span class="yes">Are you ready? Yes, I am.</span></div></div>',
      arHtml:
        '<p>نجيب عن سؤال «نعم أو لا» إجابة قصيرة: <b>Yes</b> أو <b>No</b>، ثم الضمير، ثم <b>المساعد نفسه</b> الذي بدأ به السؤال، لا الفعل الأساسي.</p>' +
        '<p>١) السؤال الذي يبدأ بـ <bdi class="en">Do / Does</bdi> جوابه <bdi class="en">do / does / don\'t / doesn\'t</bdi>.</p>' +
        '<p>٢) السؤال الذي يبدأ بـ <bdi class="en">Am / Is / Are</bdi> جوابه <bdi class="en">am / is / are / \'m not / isn\'t / aren\'t</bdi>.</p>' +
        '<p>٣) لا نختصر في الإيجاب: نقول <bdi class="en">Yes, I am</bdi> لا <bdi class="en">Yes, I\'m</bdi>.</p>'
    },
    {
      tEn: "Common Arab Mistakes",
      t: "أخطاء العرب الشائعة",
      bilingual: true,
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Common Arab Mistakes</span><small>أخطاء يقع فيها كثير من العرب (من التشخيص)</small></h2>' +
        '<ul class="mist">' +
          '<li><span class="no">Does your father works on Fridays?</span><span class="yes">Does your father work on Fridays?</span><p class="en-m" dir="ltr"><b>Does</b> already has the -s, so the main verb stays in the base form: <b>work</b>.</p><p>الـ s موجودة في <bdi class="en">Does</bdi>، فيبقى الفعل الأساسي مجردًا: <bdi class="en">work</bdi> لا <bdi class="en">works</bdi>.</p></li>' +
          '<li><span class="no">Are you go to the gym every day?</span><span class="yes">Do you go to the gym every day?</span><p class="en-m" dir="ltr">A habit with an action verb needs <b>Do</b>. <b>Are</b> never comes before a base verb (the same mistake as "I am work").</p><p>العادة مع فعل حدث تحتاج <bdi class="en">Do</bdi>، ولا يأتي <bdi class="en">Are</bdi> قبل فعل مجرد، وهو الخطأ نفسه في <bdi class="en">I am work</bdi>.</p></li>' +
          '<li><span class="no">Where your sister studies?</span><span class="yes">Where does your sister study?</span><p class="en-m" dir="ltr">Arabic «أين تدرس أختك؟» has no helper, but English needs <b>does</b> after the question word, and then the base verb.</p><p>لا نحتاج في العربية فعلًا مساعدًا، أما في الإنجليزية فلا بد من <bdi class="en">does</bdi> بعد كلمة الاستفهام، ثم الفعل مجردًا.</p></li>' +
          '<li><span class="no">Do you walk to class? Yes, I walk.</span><span class="yes">Do you walk to class? Yes, I do.</span><p class="en-m" dir="ltr">In a short answer, repeat the helper (<b>do</b>), not the main verb.</p><p>في الإجابة القصيرة نكرر المساعد (<bdi class="en">do</bdi>) لا الفعل الأساسي.</p></li>' +
        '</ul>'
    },
    {
      tEn: "Summary",
      t: "الخلاصة",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Quick Summary</span><small>الخلاصة</small></h2>' +
        '<div class="sumc" dir="ltr"><h3>In Two Lines · في سطرين</h3>' +
          '<p><b>Habit · العادة</b><span>(Wh- word) + Do / Does + subject + base verb? → Yes, I do. / No, she doesn\'t.</span></p>' +
          '<p><b>Now or be · الآن ومع be</b><span>(Wh- word) + Am / Is / Are + subject + -ing / adjective? → Yes, he is. / No, they aren\'t.</span></p>' +
        '</div>' +
        '<p class="en-p" dir="ltr">Now let\'s practice: 16 guided exercises on questions and short answers.</p>',
      arHtml:
        '<p><b>مع العادة:</b> <bdi class="en">Do / Does</bdi> + الفاعل + الفعل المجرد، والجواب <bdi class="en">Yes, I do</bdi> أو <bdi class="en">No, she doesn\'t</bdi>.</p>' +
        '<p><b>مع ما يحدث الآن ومع الصفة:</b> <bdi class="en">Am / Is / Are</bdi> + الفاعل + <bdi class="en">-ing</bdi> أو الصفة، والجواب <bdi class="en">Yes, he is</bdi> أو <bdi class="en">No, they aren\'t</bdi>.</p>'
    }
  ],

  gA: [
    { s: "___ your brother drive to work every day?", opts: ["Does", "Is"], a: 0,
      whyEn: "'drive' is a base verb and 'every day' shows a habit, so we need Does (your brother = he). 'Is' needs an -ing verb or an adjective.",
      why: "الفعل drive مجرد وevery day تدل على العادة، فنبدأ بـ Does لأن الفاعل مفرد (your brother)، أما Is فتحتاج فعلًا بـ ing أو صفة.", errCat: "be_verb" },
    { s: "___ your parents watching the news right now?", opts: ["Do", "Are"], a: 1,
      whyEn: "'watching' ends in -ing and 'right now' means at this moment, so the helper is Are: Are your parents watching…?",
      why: "watching فعل بـ ing وright now تعني هذه اللحظة، فنبدأ بـ Are.", errCat: "be_verb" },
    { s: "Where ___ your neighbour work?", opts: ["do", "does"], a: 1,
      whyEn: "'your neighbour' is one person (he or she), so we use does. 'do' is for I, you, we, they and plurals.",
      why: "your neighbour شخص واحد (مفرد)، فنستخدم does، أما do فمع I وyou وwe وthey والجمع.", errCat: "agreement" },
    { s: "___ it safe to walk to the station at night?", opts: ["Is", "Does"], a: 0,
      whyEn: "There is no other verb here, only be + an adjective (safe), so the question starts with Is.",
      why: "لا يوجد فعل آخر في الجملة، بل صفة (safe)، فنبدأ السؤال بـ Is.", errCat: "be_verb" }
  ],

  gB: [
    { s: "Does your mother cooks dinner every evening?", ok: false, fix: "Does your mother cook dinner every evening?",
      whyEn: "After Does, the main verb has no -s. The -s is already in 'Does', so we say 'Does your mother cook…?'",
      why: "بعد Does يبقى الفعل مجردًا بلا s، لأن الـ s موجودة في Does نفسها.", errCat: "agreement" },
    { s: "Are your brothers play basketball on Tuesdays?", ok: false, fix: "Do your brothers play basketball on Tuesdays?",
      whyEn: "'play' here is a habit (on Tuesdays) with a base verb, so the helper is Do. 'Are' must come before an -ing verb (Are your brothers playing…?) or an adjective.",
      why: "play هنا عادة (on Tuesdays) بفعل مجرد، فالمساعد Do، أما Are فلا يأتي إلا قبل فعل بـ ing أو صفة.", errCat: "be_verb" },
    { s: "Are your new classmates helpful? — Yes, they are.", ok: true,
      whyEn: "Correct: 'helpful' is an adjective, so the question uses Are, and the short answer repeats the same helper: Yes, they are.",
      why: "صحيحة: helpful صفة، فيبدأ السؤال بـ Are، والإجابة القصيرة تكرر المساعد نفسه: Yes, they are.", errCat: "be_verb" },
    { s: "How many hours you study every day?", ok: false, fix: "How many hours do you study every day?",
      whyEn: "A Present Simple question needs do after 'How many hours': How many hours do you study…?",
      why: "سؤال المضارع البسيط يحتاج do بعد How many hours، فلا نترجم «كم ساعة تذاكر؟» حرفيًا.", errCat: "word_order" }
  ],

  gC: [
    { pre: "Does your uncle work at the court? — No, he", verb: "do / not", post: ". He works at a hotel.", ans: ["doesn't", "does not"],
      whyEn: "The question starts with Does, and 'he' is one person, so the negative short answer is: No, he doesn't.",
      why: "السؤال يبدأ بـ Does والفاعل مفرد (he)، فالإجابة القصيرة بالنفي: No, he doesn't.", errCat: "agreement" },
    { pre: "What time", verb: "your mother / leave", post: "home on weekdays?", ans: ["does your mother leave"],
      whyEn: "Wh- word + does + subject + base verb: What time does your mother leave…? (your mother = she, so does; leave has no -s).",
      why: "كلمة الاستفهام ثم does لأن الفاعل مفرد، ثم الفاعل your mother، ثم الفعل المجرد leave بلا s.", errCat: "word_order" },
    { pre: "", verb: "your friends / play", post: "football right now? I can hear them outside.", ans: ["Are your friends playing"],
      whyEn: "'right now' shows an action in progress, so the question is Are + subject + -ing: Are your friends playing…?",
      why: "right now تدل على حدث يجري الآن، فنبدأ بـ Are ثم الفاعل ثم الفعل بـ ing.", errCat: "word_order" },
    { pre: "Is the metro busy this morning? — No, it", verb: "be / not", post: ". There are lots of empty seats.", ans: ["isn't", "is not"],
      whyEn: "The question starts with Is (be + the adjective 'busy'), so the short answer is No, it isn't, not 'doesn't'.",
      why: "السؤال يبدأ بـ Is لأن busy صفة، فالإجابة القصيرة No, it isn't لا doesn't.", errCat: "be_verb" }
  ],

  gD: [
    { chips: ["does", "Where", "have lunch?", "your father"], ans: "Where does your father have lunch?",
      whyEn: "Wh- word (Where) + does + subject (your father) + base verb (have lunch).",
      why: "كلمة الاستفهام Where ثم does ثم الفاعل your father ثم الفعل المجرد have lunch.", errCat: "word_order" },
    { chips: ["working at the bank", "Is", "this week?", "your sister"], ans: "Is your sister working at the bank this week?",
      whyEn: "Present Continuous question: Is + subject (your sister) + -ing verb (working at the bank) + time (this week).",
      why: "سؤال المضارع المستمر: Is ثم الفاعل your sister ثم working at the bank ثم الزمن this week.", errCat: "word_order" },
    { chips: ["lectures", "How many", "on Mondays?", "do you have"], ans: "How many lectures do you have on Mondays?",
      whyEn: "How many + plural noun (lectures) + do + you + base verb (have) + time.",
      why: "How many ثم الاسم الجمع lectures ثم do you ثم الفعل المجرد have ثم الزمن.", errCat: "word_order" },
    { chips: ["miss", "Do you", "your family", "on long trips?"], ans: "Do you miss your family on long trips?",
      whyEn: "Do + subject (you) + base verb (miss) + object (your family) + time (on long trips).",
      why: "Do ثم الفاعل you ثم الفعل المجرد miss ثم المفعول به your family ثم on long trips.", errCat: "word_order" }
  ],

  /* ---------- المرحلة 4: الاستماع على ثلاث مراحل (مقطع حقيقي من ELLLO، ونصه المكتوب في صفحة المصدر) ---------- */
  listening: {
    title: "My Day",
    sourceTag: "ELLLO · Real recording · تسجيل حقيقي",
    sourceMeta: "ELLLO Views #1554 · High-Beginner (A2)",
    speakers: "Natalie (England) & Todd (USA)",
    url: "https://elllo.org/english/1551/1554-Nat-Verbs-Schedule.htm",
    audioWord: "typical",
    targetSeconds: 250,
    introEn: "Listen to Todd, from the USA, and Natalie, a teacher from England. Listen once, without the transcript, and find the main topic of their talk.",
    intro: "استمع إلى تود، وهو من الولايات المتحدة، وناتالي، وهي معلمة من إنجلترا، مرة واحدة بلا نص مكتوب، وحدّد الموضوع الرئيس لحديثهما.",
    predict: {
      qEn: "Stage 1 Main-Idea Question: What is the conversation mainly about?",
      q: "سؤال الفكرة العامة: عمّ يدور الحوار أساسًا؟",
      optsEn: [
        "Todd's typical day as a teacher in the USA",
        "Natalie's typical day: her morning, her school day and her evening",
        "Natalie's favourite places to visit in England"
      ],
      opts: [
        "يوم تود المعتاد معلمًا في الولايات المتحدة",
        "يوم ناتالي المعتاد: صباحها ويومها في المدرسة ومساؤها",
        "الأماكن التي تحب ناتالي زيارتها في إنجلترا"
      ],
      a: 1,
      revealEn: "Todd asks the questions and Natalie, a teacher, answers: she talks about her morning, her lessons and lunch at school, and her evening at home.",
      reveal: "تود يسأل وناتالي المعلمة تجيب: تتحدث عن صباحها، ودروسها وغدائها في المدرسة، ومسائها في البيت."
    },
    insight: {
      titleEn: "Listen for Todd's Questions",
      titleAr: "استمع لأسئلة تود",
      l1En: "Todd asks about Natalie's habits with 'Do you…?' and with Wh- questions + do. Here are example questions we wrote about her day, with their answers:",
      ex1: "What time does Natalie get up? At about 7:30. · Does she drink tea? No, she doesn't. · Where does she eat at lunchtime? In the school canteen.",
      l2En: "With be + an adjective (good, cheap, tired), a question starts with Is / Are, and the short answer uses is / isn't or are / aren't:",
      ex2: "Is the canteen food expensive? No, it isn't. · Are her classes big? Yes, they are. · Is she tired in the evening? Yes, she is.",
      arHtml: "<p><b>انتبه:</b> يسأل تود عن عادات ناتالي بـ Do you…? وبكلمات الاستفهام مع do، وحين يسأل عن صفة كالجودة أو السعر يبدأ بـ Is.</p><p>وفي الحديث العفوي قد يجيب المتحدث بـ Yes أو No ثم يشرح، أما في التمارين والكتابة فاستعمل الإجابة القصيرة كاملة (Yes, she does).</p><p>وهذه أمثلة كتبناها عن يوم ناتالي، وليست كلام المتحدثين بنصه.</p>"
    },
    questions: [
      { q: "What time does Natalie usually wake up?", opts: ["At about 6:00 a.m.", "At about 9:00 a.m.", "At about 7:00 a.m."], a: 2,
        whyEn: "At the start, Natalie says she wakes up at about seven o'clock, and she says she is a morning person.",
        why: "في أول المقطع تقول ناتالي إنها تستيقظ نحو السابعة، وإنها تحب الصباح (a morning person).", errCat: "reading" },
      { q: "What does Natalie do before she gets out of bed?", opts: ["She uses her phone: emails, Facebook and the news.", "She goes for a run near her house.", "She makes breakfast for her family."], a: 0,
        whyEn: "Near the start, she says she stays in bed until about 7:30. First she uses her phone: she checks her emails and Facebook and reads the news.",
        why: "قرب البداية تقول إنها تبقى في السرير حتى نحو السابعة والنصف، وتستعمل هاتفها أولًا: تتفقد بريدها وفيسبوك وتقرأ الأخبار.", errCat: "reading" },
      { tf: true, q: "Natalie drinks coffee every morning.", a: false,
        whyEn: "False. Near the start, Natalie says she doesn't like coffee or tea. In the morning she drinks hot chocolate.",
        why: "خطأ؛ قرب البداية تقول ناتالي إنها لا تحب القهوة ولا الشاي، وتشرب الشوكولاتة الساخنة في الصباح.", errCat: "reading" },
      { q: "Does Natalie usually eat breakfast at home? Choose the correct short answer.", opts: ["Yes, she is.", "Yes, she does.", "No, she doesn't."], a: 1,
        whyEn: "Near the start, Natalie says she usually makes her breakfast at home, so the answer is yes. The question starts with Does, so the short answer is 'Yes, she does.'",
        why: "قرب البداية تقول ناتالي إنها تعدّ فطورها في البيت عادةً، فالجواب نعم؛ والسؤال يبدأ بـ Does، فالإجابة القصيرة Yes, she does.", errCat: "be_verb" },
      { q: "How many classes does Natalie teach in the morning?", opts: ["Two classes of 90 minutes each", "Four classes of 45 minutes each", "Three classes of one hour each"], a: 2,
        whyEn: "In the middle, Natalie says she has three classes in the morning, and each class lasts one hour. Lessons start at about nine, and lunch is at twelve.",
        why: "في وسط المقطع تقول ناتالي إن لديها ثلاث حصص صباحًا، كل حصة تستمر ساعة؛ تبدأ الدروس نحو التاسعة والغداء في الثانية عشرة.", errCat: "reading" },
      { q: "What does Natalie say about lunch at her school?", opts: ["She goes home for lunch because the school food isn't good.", "She eats in the big school canteen, and lunch is cheap: about $3.", "She buys an expensive lunch at a café near the school."], a: 1,
        whyEn: "In the middle, she says the school has a very big canteen. The food is good, she likes eating with the students, and lunch costs only about three dollars.",
        why: "في وسط المقطع تقول إن في المدرسة مقصفًا كبيرًا جدًا، وطعامه جيد، وتحب الأكل مع الطلاب، والغداء بنحو ثلاثة دولارات فقط.", errCat: "reading" },
      { q: "Natalie is usually tired when she gets home. What does she do first?", opts: ["She cooks a big dinner.", "She gets changed into her pajamas.", "She goes to the gym."], a: 1,
        whyEn: "After the middle of the clip, Todd asks about her evening. Natalie says she gets changed into her pajamas first, and then she watches TV for about two hours.",
        why: "بعد وسط المقطع يسألها تود عن مسائها، فتقول إنها تبدّل ملابسها أولًا وتلبس ملابس النوم، ثم تشاهد التلفاز نحو ساعتين.", errCat: "reading" },
      { q: "What time does Natalie go to bed on most nights?", opts: ["At about 10:00 p.m.", "At about midnight", "At about 8:30 p.m."], a: 0,
        whyEn: "At the end, Natalie says she goes to bed at about ten on most nights. At the weekend, she sometimes goes to bed at about midnight.",
        why: "في آخر المقطع تقول ناتالي إنها تنام نحو العاشرة في أغلب الليالي، وقد تتأخر إلى منتصف الليل في عطلة نهاية الأسبوع.", errCat: "reading" }
    ]
  },

  writing: {
    taskEn: "Interview a family member or a friend about their typical day (or interview yourself). Write at least 4 separate sentences: at least 2 questions (one with Do / Does, one with What time / Where / How many) and their answers, with at least 1 short answer (Yes, she does. / No, he isn't.). Use at least 2 words from today's lesson, and always write 'I' with a capital letter.",
    task: "حاور أحد أفراد أسرتك أو صديقًا عن يومه المعتاد (أو حاور نفسك)، واكتب 4 جمل منفصلة على الأقل: سؤالين على الأقل (أحدهما بـ Do / Does والآخر بـ What time أو Where أو How many) مع إجابتيهما، وفيها إجابة قصيرة واحدة على الأقل (Yes, she does. / No, he isn't.). واستعمل كلمتين على الأقل من كلمات الدرس، واكتب الضمير I كبيرًا دائمًا.",
    placeholder: "Does your … ?\nYes, he does. …\nWhat time does he … ?\n…",
    checks: [
      { k: "sentences", tEn: "At least 4 separate sentences (questions end with ?, answers with .), and 'I' is always a capital letter", t: "4 جمل منفصلة على الأقل (السؤال ينتهي بعلامة استفهام والجواب بنقطة)، والضمير I كبير دائمًا",
        ok: function(a, text){ return a.sentences >= 4 && !/(?:^|[^A-Za-z])i(?![A-Za-z])/.test(String(text || '')); } },
      { k: "questions", tEn: "At least 2 questions with a helper: Do / Does / Is / Are …? or What time / Where / How many + do / does …?", t: "سؤالان على الأقل بفعل مساعد: Do / Does / Is / Are، أو What time / Where / How many مع do / does", ex: "Does your sister work? · What time does she wake up?",
        ok: function(a, text){
          var qs = String(text || '').replace(/[’‘`´]/g, "'").match(/[^.!?]+\?/g) || [];
          return qs.filter(function(q){ return /^\s*(?:(?:what|where|when|how|why|who|which)\b[^?]*?\s)?(?:do|does|am|is|are|don't|doesn't|isn't|aren't)\s+[a-z]/i.test(q); }).length >= 2; } },
      { k: "short", tEn: "At least 1 short answer (Yes, she does. · No, he isn't. · Yes, I am.)", t: "إجابة قصيرة واحدة على الأقل (Yes, she does. · No, he isn't. · Yes, I am.)", ex: "Yes, he does. · No, they aren't.",
        ok: function(a, text){
          var s = String(text || '').replace(/[’‘`´]/g, "'");
          return /\b(?:yes|no)\s*,?\s*(?:(?:i|you|we|they|he|she|it)\s+(?:do|does|don't|doesn't|do\s+not|does\s+not|am|is|are|isn't|aren't|am\s+not|is\s+not|are\s+not)|i'm\s+not|(?:you|we|they)'re\s+not|(?:he|she|it)'s\s+not)\s*(?:[.!]|$)/i.test(s); } },
      { k: "vocab", tEn: "At least 2 words or phrases from today's lesson", t: "كلمتان أو عبارتان على الأقل من كلمات الدرس", ex: "typical · wake up · get out of bed · canteen · last · get changed · working hours",
        ok: function(a){ return a.used.length >= 2; } }
    ],
    modelMarked: "<<s:What time does>> your brother Faisal {wake up} on a {typical} day? He {wakes up|wake up} at 5:30 because his {working hours} start at seven. <<s:Does>> he have lunch at the hospital? <<s:Yes, he does.>> He eats in the hospital {canteen} with the other nurses. <<c:Is>> he <<c:working>> at night this week? <<c:No, he isn't.>>",
    model: "What time does your brother Faisal wake up on a typical day? He wakes up at 5:30 because his working hours start at seven. Does he have lunch at the hospital? Yes, he does. He eats in the hospital canteen with the other nurses. Is he working at night this week? No, he isn't.",
    legendEn: "Light blue = Do / Does questions and their short answers (Present Simple) · Terracotta = Is / Are + -ing questions and their short answers (Present Continuous)",
    legendAr: "الأزرق الفاتح لأسئلة Do / Does وإجاباتها القصيرة (المضارع البسيط)، والطوبي لأسئلة Is / Are مع ing وإجاباتها القصيرة (المضارع المستمر)."
  },

  quiz: [
    { s: "___ your grandfather usually read the newspaper after breakfast?", opts: ["Is", "Do", "Does"], a: 2, tag: "Grammar · قواعد",
      whyEn: "'usually' shows a habit, 'read' is a base verb, and 'your grandfather' is one person, so we need Does.",
      why: "usually تدل على العادة، وread فعل مجرد، والفاعل مفرد (your grandfather)، فنبدأ بـ Does.", errCat: "be_verb" },
    { s: "___ you watching the match, or can we talk now?", opts: ["Are", "Do", "Does"], a: 0, tag: "Grammar · قواعد",
      whyEn: "'watching' is an -ing verb for an action happening now, so the question starts with Are.",
      why: "watching فعل بـ ing لحدث يجري الآن، فنبدأ السؤال بـ Are.", errCat: "be_verb" },
    { s: "Which question is correct?", opts: ["What time does the pharmacy opens?", "What time the pharmacy opens?", "What time does the pharmacy open?"], a: 2, tag: "Grammar · قواعد",
      whyEn: "Wh- word + does + subject + base verb: 'open' has no -s after does, and we cannot drop does.",
      why: "كلمة الاستفهام ثم does ثم الفاعل ثم الفعل المجرد open بلا s، ولا يصح حذف does.", errCat: "word_order" },
    { s: "Do your grandparents live with you? — Yes, they ___.", opts: ["are", "do", "live"], a: 1, tag: "Grammar · قواعد",
      whyEn: "A Do question gets a short answer with do: Yes, they do. Don't repeat the main verb (live), and don't use are.",
      why: "سؤال Do جوابه القصير بـ do: Yes, they do، فلا نكرر الفعل live ولا نستعمل are.", errCat: "be_verb" },
    { s: "Is your brother studying in the library right now? — No, he ___. He's at home.", opts: ["isn't", "doesn't", "don't"], a: 0, tag: "Grammar · قواعد",
      whyEn: "The question starts with Is, so the short answer uses is: No, he isn't.",
      why: "السؤال يبدأ بـ Is، فالإجابة القصيرة No, he isn't.", errCat: "be_verb" },
    { s: "How many hours ___ your father work every day?", opts: ["is", "does", "do"], a: 1, tag: "Grammar · قواعد",
      whyEn: "'your father' = he, and 'work' is a base verb, so we use does: How many hours does he work?",
      why: "الفاعل مفرد (your father) والفعل work مجرد، فنستخدم does.", errCat: "agreement" },
    { s: "Which question asks about a habit?", opts: ["Are you taking the bus today?", "Is the bus late today?", "Do you take the bus every day?"], a: 2, tag: "Grammar · قواعد",
      whyEn: "'every day' shows a habit, so the question is in Present Simple: Do you take…? The other two questions are about today.",
      why: "every day تدل على العادة، فالسؤال بالمضارع البسيط: Do you take…؟ أما السؤالان الآخران فعن اليوم.", errCat: "tense" },
    { s: "My first lecture starts at ten and finishes at twelve, so it ___ two hours.", opts: ["wakes up", "lasts", "gets changed"], a: 1, tag: "Vocabulary · مفردات",
      whyEn: "'last' (verb) means continue for a time: from ten to twelve, the lecture continues for two hours.",
      why: "last فعلًا تعني يستمر مدة من الوقت: من العاشرة إلى الثانية عشرة ساعتان.", errCat: "vocab" },
    { s: "Nurses usually ___ into their uniforms when they arrive at the hospital.", opts: ["get changed", "get out of bed", "wake up"], a: 0, tag: "Vocabulary · مفردات",
      whyEn: "'get changed' means put on different clothes, like a uniform. The other two happen at home in the morning.",
      why: "get changed تعني يبدّل ملابسه، كأن يلبس زيّ العمل، أما الخياران الآخران فيكونان في البيت صباحًا.", errCat: "vocab" },
    { s: "Ahmed reads his job contract carefully because it shows his pay and his ___.", opts: ["canteens", "working hours", "typical days"], a: 1, tag: "Legal Track · المسار القانوني",
      whyEn: "'working hours' are the hours of work written in a job contract and protected by labour law.",
      why: "working hours هي ساعات العمل المكتوبة في عقد العمل، ويحميها نظام العمل.", errCat: "vocab" }
  ]
};
})();
