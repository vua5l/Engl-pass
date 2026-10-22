/* ===== الأسبوع التأسيسي (الوحدة 0) · الدرس 1: Be vs. Do — Who I Am & What I Do (6 مراحل · درس قراءة) ===== */
(function(){
var BE_DO_SVG = '<svg class="tl" viewBox="0 0 340 168" role="img" aria-label="Diagram comparing BE (am, is, are + noun, adjective, or place) with DO (do, does + action verb)" direction="ltr">' +
  '<rect x="10" y="12" width="154" height="144" rx="16" fill="#E8EEF5" stroke="#2C4A6E" stroke-width="1.8"/>' +
  '<text x="87" y="36" text-anchor="middle" font-family="Quicksand, sans-serif" font-weight="700" font-size="13" fill="#2C4A6E">BE · am / is / are</text>' +
  '<text x="87" y="54" text-anchor="middle" font-family="Readex Pro, sans-serif" font-weight="600" font-size="10.5" fill="#5A6B7C">No Action Verb · بلا فعل حدث</text>' +
  '<text x="22" y="82" font-family="Quicksand, sans-serif" font-weight="700" font-size="11.5" fill="#1E2A33">1. Noun: I am a lawyer.</text>' +
  '<text x="22" y="106" font-family="Quicksand, sans-serif" font-weight="700" font-size="11.5" fill="#1E2A33">2. Adj: The case is easy.</text>' +
  '<text x="22" y="130" font-family="Quicksand, sans-serif" font-weight="700" font-size="11.5" fill="#1E2A33">3. Place: We are in court.</text>' +
  '<rect x="176" y="12" width="154" height="144" rx="16" fill="#F9EBE7" stroke="#B94A33" stroke-width="1.8"/>' +
  '<text x="253" y="36" text-anchor="middle" font-family="Quicksand, sans-serif" font-weight="700" font-size="13" fill="#A8432E">DO · do / does</text>' +
  '<text x="253" y="54" text-anchor="middle" font-family="Readex Pro, sans-serif" font-weight="600" font-size="10.5" fill="#A8432E">With Action Verbs · مع أفعال الحدث</text>' +
  '<text x="188" y="82" font-family="Quicksand, sans-serif" font-weight="700" font-size="11.5" fill="#1E2A33">+ : I work in an office.</text>' +
  '<text x="188" y="106" font-family="Quicksand, sans-serif" font-weight="700" font-size="11.5" fill="#1E2A33">− : I don\'t work late.</text>' +
  '<text x="188" y="130" font-family="Quicksand, sans-serif" font-weight="700" font-size="11.5" fill="#1E2A33">? : Do you work here?</text>' +
  '</svg>';

LESSONS.u0l1 = {
  id: "u0l1",
  unit: 0,
  n: 1,
  mode: "reading",
  en: "First Day at the Law Office",
  ar: "متى نستعمل be ومتى نستعمل do؟",
  subEn: "Foundation 1 · Be (am / is / are) vs. Do (do / does)",
  canDoEn: "I can use am/is/are for names, jobs, feelings, and places, and use do/does with action verbs in negatives and questions without mixing them.",
  canDoAr: "أقدر أن أستخدم am/is/are للاسم والمهنة والصفة والمكان، وأستخدم do/does مع الأفعال في النفي والسؤال دون خلط بينهما.",
  descEn: "I can describe who I am and what I do without putting am/is/are before action verbs.",
  descAr: "أقدر أن أصف من أنا وماذا أعمل دون وضع am/is/are قبل أفعال الحدث، من رسالة متدرب قانوني في الرياض.",
  goals: [
    { en: "I can choose am/is/are when there is no action verb (noun, adjective, or place).", ar: "أقدر أن أختار am/is/are حين لا يوجد فعل حدث (مع الاسم والصفة والمكان)." },
    { en: "I can avoid the common mistake 'I am work / She is go' in Present Simple.", ar: "أقدر أن أتجنب خطأ الجمع بين am/is/are والفعل المجرد مثل I am work." },
    { en: "I can use don't/doesn't and Do/Does with base verbs in negatives and questions.", ar: "أقدر أن أستخدم don't/doesn't وDo/Does مع الفعل المجرد في النفي والسؤال." },
    { en: "I can use 7 work & law words plus the legal phrase 'give legal advice' in 4 separate sentences.", ar: "أقدر أن أستخدم 7 كلمات من بيئة القانون والعمل مع العبارة القانونية give legal advice في 4 جمل منفصلة." }
  ],
  intro: {
    recall: {
      dEn: "Type each foundational word from memory before seeing the answer to train both active recall and spelling.",
      d: "اكتب كل كلمة أساسية من ذاكرتك بلوحة المفاتيح قبل ظهور الإجابة لتدريب الاسترجاع والإملاء معًا.",
      items: [
        ["review", "5 foundational words & grammar forms from memory", "5 كلمات وصيغ أساسية من الذاكرة"],
        ["pen", "Keyboard typing to fix spelling patterns early", "كتابة بلوحة المفاتيح لتثبيت أنماط الإملاء من البداية"],
        ["spark", "Includes core legal & office words (lawyer, court, client)", "تشمل كلمات قانونية ومكتبية أساسية"]
      ]
    },
    vocab: {
      dEn: "7 core words from a Riyadh law office plus today's legal phrase ('give legal advice'), with human audio and Oxford links.",
      d: "7 كلمات أساسية من بيئة مكتب محاماة في الرياض مع العبارة القانونية اليومية (give legal advice)، بنطق بشري وروابط Oxford.",
      items: [
        ["cards", "8 Flashcards (7 words + 1 Legal Phrase) with human audio & Oxford link", "8 بطاقات (7 كلمات + عبارة قانونية) مع النطق البشري ورابط Oxford"],
        ["review", "2-round matching game", "لعبة توصيل من جولتين"],
        ["quiz", "8 context sentences: choose the right word", "8 جمل سياقية: اختر الكلمة المناسبة"]
      ]
    },
    grammar: {
      dEn: "Why do we say 'I am a lawyer' but 'I work in Riyadh' (never 'I am work')? Master be vs. do step by step.",
      d: "لماذا نقول I am a lawyer لكن نقول I work in Riyadh (ولا نقول أبدًا I am work)؟ أتقن الفرق بين be وdo خطوة بخطوة.",
      items: [
        ["book", "6 short grammar cards (English first, Arabic on tap)", "6 بطاقات شرح (الإنجليزي أولًا، والعربي عند الطلب)"],
        ["quiz", "24 guided exercises across 4 types, one question per screen", "24 تمرينًا موجّهًا على 4 أنماط، سؤال في كل شاشة"]
      ]
    },
    reading: {
      dEn: "An email from Faisal, a Saudi law student starting his training at a law office in Riyadh, to his cousin Omar.",
      d: "إيميل من فيصل، طالب قانون سعودي بدأ تدريبه في مكتب محاماة بالرياض، إلى ابن عمه عمر.",
      items: [
        ["spark", "Predict before you read", "توقّع قبل القراءة"],
        ["clock", "First reading for the main idea with an advisory timer (no word taps)", "قراءة أولى للفكرة العامة بمؤقت إرشادي مريح ودون لمس الكلمات"],
        ["mail", "Second reading with word meanings, Oxford links, and 8 evidence questions", "قراءة ثانية مع معاني الكلمات باللمس وأسئلة الفهم مع دليلها من النص"]
      ]
    },
    writing: {
      dEn: "Write at least 4 separate sentences about who you are (using am/is/are) and what you do or don't do (using action verbs).",
      d: "اكتب 4 جمل منفصلة على الأقل تعرّف فيها بنفسك (باستخدام am/is/are) وبما تفعله أو لا تفعله كل أسبوع.",
      items: [
        ["pen", "At least 4 separate sentences (capital letter + period for each)", "4 جمل منفصلة على الأقل بحرف كبير ونقطة لكل جملة"],
        ["spark", "Instant check separating Grammar (be vs. do) from Spelling", "تصحيح فوري يفصل أخطاء القواعد (be وdo) عن أخطاء الإملاء"]
      ]
    },
    quiz: {
      dEn: "10 shuffled questions on Be vs. Do and lesson vocabulary (80% to pass), followed by a full Lesson Error Analysis.",
      d: "اختبار قصير من 10 أسئلة في قاعدة be وdo ومفردات الدرس (النجاح من 80%)، يليه تحليل شامل لأخطاء الدرس وأسبابها.",
      items: [
        ["quiz", "10 vocabulary & grammar questions (80% passing score)", "10 أسئلة متنوعة من المفردات والقواعد (النجاح من 80%)"],
        ["review", "Error Analysis grouped by category and root cause", "تحليل أخطاء الدرس وأسبابها مصنّفة حسب الفئة"]
      ]
    }
  },

  /* ---------- المرحلة 1: مراجعة بالاسترجاع النشط (5 عناصر كتابة من الذاكرة) ---------- */
  recall: [
    {
      id: "rc-0",
      promptAr: "محامٍ (مهنة قانونية تبدأ بحرف l — انتبه لوجود a قبل المهنة المفردة)",
      promptEn: "A person whose job is to advise people about the law (a ___)",
      sentPre: "My older brother is a",
      sentPost: "in Riyadh.",
      ans: ["lawyer"],
      hint: "l _ _ _ _ r (6 letters)",
      spellNoteEn: "Spelled law + yer (lawyer). Remember: always put 'a' before a singular job (a lawyer).",
      spellNote: "تتكوّن من law ثم yer (lawyer)، ولا تنسَ الأداة a قبل الوظيفة المفردة.",
      errCat: "spelling"
    },
    {
      id: "rc-1",
      promptAr: "محكمة (مكان عمل القاضي والمحامي — تبدأ بحرف c)",
      promptEn: "The place where a judge and lawyers work on legal cases",
      sentPre: "The judge is in the",
      sentPost: "this morning.",
      ans: ["court"],
      hint: "c _ _ _ t (5 letters)",
      spellNoteEn: "Spelled c-o-u-r-t (with 'ou' in the middle).",
      spellNote: "تُكتب بحرفي العلة ou في الوسط: c-o-u-r-t.",
      errCat: "spelling"
    },
    {
      id: "rc-2",
      promptAr: "مكتب (مكان العمل — يبدأ بحرف o وفيه حرف f مضاعف)",
      promptEn: "A room or building where people work at desks",
      sentPre: "Our law",
      sentPost: "is on King Fahd Road.",
      ans: ["office"],
      hint: "o _ _ _ _ e (6 letters)",
      spellNoteEn: "Pattern: double 'f' and silent '-e' at the end (of-fice).",
      spellNote: "انتبه لمضاعفة حرف f والـ e الصامتة في آخر الكلمة: office.",
      errCat: "spelling"
    },
    {
      id: "rc-3",
      promptAr: "فعل النفي المساعد مع المفرد الغائب (he / she / it) قبل الفعل المجرد",
      promptEn: "Negative helper verb with 'she' in Present Simple (does + not)",
      sentPre: "Sara",
      sentPost: "work on Saturdays.",
      ans: ["doesn't", "does not"],
      hint: "d o e s n ' t",
      spellNoteEn: "With he/she/it, use 'doesn't' + base verb (work), never 'don't' and never 'is not work'.",
      spellNote: "مع he/she/it نستخدم doesn't مع الفعل المجرد، ولا نقول don't ولا is not work.",
      errCat: "be_verb"
    },
    {
      id: "rc-4",
      promptAr: "عميل / موكّل (الشخص الذي يطلب استشارة المحامي — تبدأ بحرف c)",
      promptEn: "A person who pays a lawyer or company for a service",
      sentPre: "Mr. Salman meets a new",
      sentPost: "every afternoon.",
      ans: ["client"],
      hint: "c _ _ _ _ t (6 letters)",
      spellNoteEn: "Spelled c-l-i-e-n-t ('i' before 'e': cli-ent).",
      spellNote: "حرف i يسبق حرف e في وسط الكلمة: c-l-i-e-n-t.",
      errCat: "spelling"
    }
  ],

  /* ---------- العبارة القانونية اليومية (المسار القانوني A2) ---------- */
  legalPhrase: {
    en: "give legal advice",
    headword: "advice",
    pos: "legal phrase",
    ar: "يقدّم استشارة قانونية",
    say: "قِف لِيقَل أَدْفَايْس",
    ex: "Experienced lawyers give legal advice to their clients.",
    exAr: "يقدّم المحامون ذوو الخبرة استشارات قانونية لموكّليهم.",
    tipEn: "Collocation: 'give advice' (not 'make advice'). 'Advice' with 'c' is an uncountable noun—never say 'an advice'.",
    tip: "نقول give legal advice، وكلمة advice بالـ c اسم غير معدود فلا نضع قبلها a ولا نجمعها بـ s.",
    legal: true,
    oxfordSlug: "advice",
    wikiFiles: ["En-us-give.ogg", "En-us-legal.ogg", "En-us-advice.ogg"],
    wikiCredit: "File:En-us-give.ogg, File:En-us-legal.ogg & File:En-us-advice.ogg · Wikimedia Commons (CC BY-SA 3.0)"
  },

  /* ---------- المفردات (7 كلمات أساسية + العبارة القانونية = 8 عبارات في الدرس) ---------- */
  vocab: [
    { en: "lawyer", pos: "noun", ar: "محامٍ / محامية", say: "لُويَر",
      ex: "My cousin is a lawyer in Riyadh.", exAr: "ابن عمي محامٍ في الرياض.",
      tipEn: "Grammar reminder: always use 'a' before a singular job (He is a lawyer, NOT He is lawyer).",
      tip: "تذكير مهم من التشخيص: نضع دائمًا a قبل المهنة المفردة (He is a lawyer وليس He is lawyer).",
      oxfordSlug: "lawyer",
      wikiFile: "En-us-lawyer.ogg",
      wikiCredit: "File:En-us-lawyer.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "client", pos: "noun", ar: "عميل / موكّل", say: "كْلَايَنْت",
      ex: "Each client has a file in our office.", exAr: "لكل موكّل ملف في مكتبنا.",
      tipEn: "A 'customer' buys things in a shop; a 'client' gets professional services from a lawyer or bank.",
      tip: "نستخدم client للموكّل أو عميل المكاتب المهنية كالمحاماة، بينما customer للمتاجر.",
      oxfordSlug: "client",
      wikiFile: "En-us-client.ogg",
      wikiCredit: "File:En-us-client.ogg · Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "office", pos: "noun", ar: "مكتب", say: "أُوفِس",
      ex: "Our office is quiet in the morning.", exAr: "مكتبنا هادئ في الصباح.",
      tipEn: "Common phrase: 'at the office' or 'in the office'. Notice the double 'f'.",
      tip: "نقول in the office أو at the office، وانتبه لحرف الـ f المكرر.",
      oxfordSlug: "office",
      wikiFile: "En-us-office.ogg",
      wikiCredit: "File:En-us-office.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "court", pos: "noun", ar: "محكمة", say: "كُورْت",
      ex: "The lawyer is in court today.", exAr: "المحامي في المحكمة اليوم.",
      tipEn: "Collocation: 'in court' (without 'the' when talking about legal work) or 'at the court'.",
      tip: "تعبير قانوني شائع: in court (في المحكمة لحضور جلسة).",
      oxfordSlug: "court_1",
      wikiFile: "En-us-court.ogg",
      wikiCredit: "File:En-us-court.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "busy", pos: "adjective", ar: "مشغول / مزدحم", say: "بِزِي",
      ex: "Sunday is a very busy day at work.", exAr: "الأحد يوم مزدحم جدًا في العمل.",
      tipEn: "'busy' is an adjective, so it needs 'am / is / are' (I am busy, NOT I busy).",
      tip: "كلمة busy صفة وليست فعلًا، لذا تحتاج am / is / are قبلها (نقول I am busy).",
      oxfordSlug: "busy_1",
      wikiFile: "En-us-busy.ogg",
      wikiCredit: "File:En-us-busy.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "helpful", pos: "adjective", ar: "متعاون / مفيد", say: "هِلْبْفُل",
      ex: "The senior lawyers are very helpful.", exAr: "المحامون الأقدم متعاونون جدًا.",
      tipEn: "Spelling pattern: adjectives ending in -ful always have ONE 'l' (helpful, careful, beautiful).",
      tip: "قاعدة إملاء مهمة: الصفات المنتهية بالمقطع ful تُكتب بلام واحدة فقط في آخرها (helpful, beautiful).",
      oxfordSlug: "helpful",
      wikiFile: "En-us-helpful.ogg",
      wikiCredit: "File:En-us-helpful.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "prepare", pos: "verb", ar: "يجهّز / يُعدّ", say: "بْرِيبِير",
      ex: "I prepare the documents before the meeting.", exAr: "أجهّز المستندات قبل الاجتماع.",
      tipEn: "'prepare' is an action verb: say 'I prepare' or 'Do you prepare?' (never 'I am prepare').",
      tip: "prepare فعل حدث؛ نقول في المضارع البسيط I prepare وعند السؤال Do you prepare.",
      oxfordSlug: "prepare",
      wikiFile: "En-us-prepare.ogg",
      wikiCredit: "File:En-us-prepare.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" }
  ],

  vocabGaps: [
    { s: "My uncle is a ___ who works on commercial contracts.", opts: ["lawyer", "court", "office"], a: 0,
      whyEn: "'a lawyer' is a person whose profession is law.",
      why: "lawyer هو الشخص الذي يعمل في المحاماة.", errCat: "vocab" },
    { s: "We meet the new ___ at ten o'clock to discuss his case.", opts: ["office", "client", "busy"], a: 1,
      whyEn: "A 'client' is the person who comes to a lawyer for help.",
      why: "client هو الموكّل أو العميل صاحب القضية.", errCat: "vocab" },
    { s: "The judge is not in his office; he is in ___.", opts: ["court", "lawyer", "helpful"], a: 0,
      whyEn: "'in court' is the place where a judge hears cases.",
      why: "in court تعني في المحكمة.", errCat: "vocab" },
    { s: "I cannot talk right now because I am very ___.", opts: ["prepare", "busy", "client"], a: 1,
      whyEn: "'busy' is an adjective after 'I am' meaning having a lot of work.",
      why: "بعد I am نحتاج صفة، وbusy تعني مشغول.", errCat: "vocab" },
    { s: "Our team leader is very ___; she always answers my questions.", opts: ["helpful", "court", "prepare"], a: 0,
      whyEn: "'helpful' describes someone who gladly helps others.",
      why: "helpful صفة تعني متعاون أو مساعد للآخرين.", errCat: "vocab" },
    { s: "Every morning, the trainees ___ the files for the lawyers.", opts: ["busy", "prepare", "office"], a: 1,
      whyEn: "'prepare' is an action verb meaning get something ready.",
      why: "الجملة تحتاج فعلًا بعد الفاعل trainees، وprepare تعني يجهّز.", errCat: "vocab" },
    { s: "Our law ___ is on the fifth floor of a modern building.", opts: ["office", "client", "helpful"], a: 0,
      whyEn: "A 'law office' is the place where lawyers work.",
      why: "law office تعني مكتب محاماة.", errCat: "vocab" },
    { s: "Only licensed lawyers can ___ to clients.", opts: ["give legal advice", "busy", "court"], a: 0,
      whyEn: "'give legal advice' is the legal collocation meaning advise clients about the law.",
      why: "give legal advice هي العبارة القانونية بمعنى يقدّم استشارة قانونية.", errCat: "vocab" }
  ],

  /* ---------- المرحلة 3: بطاقات شرح القواعد (6 بطاقات) ---------- */
  gCards: [
    {
      tEn: "The Golden Rule: Be vs. Action Verbs",
      t: "القاعدة الذهبية: متى نضع am / is / are؟",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">The Golden Rule: Be vs. Action Verbs</span><small>القاعدة الذهبية: متى نضع am / is / are؟</small></h2>' +
        '<p class="en-p" dir="ltr">In English, every sentence needs a verb. We use <b>am / is / are</b> ONLY when there is <b>no action verb</b> (with a noun, an adjective, or a place):</p>' +
        '<div class="xbox"><span class="xtag s" dir="ltr">BE · Noun / Adjective / Place (بلا فعل حدث)</span><p class="xen">I am a student. · She is tired. · We are in Riyadh.</p></div>' +
        '<div class="xbox"><span class="xtag c" dir="ltr">DO · Action Verb (مع فعل حدث)</span><p class="xen">I study law. · She works here. · We live in Riyadh.</p></div>' +
        BE_DO_SVG,
      arHtml:
        '<p>الجملة الاسمية في العربية (مثل: «أنا طالب»، «هي متعبة»، «نحن في الرياض») ليس فيها فعل، لكن الإنجليزية لا تقبل جملة بلا فعل، فنضع فيها <b>am / is / are</b>.</p>' +
        '<p>أما إذا كان في الجملة <b>فعل حدث</b> في المضارع البسيط (مثل <bdi class="en">study, work, live</bdi>) فالفعل موجود أصلًا، <b>فلا نضع قبله am / is / are أبدًا</b>.</p>'
    },
    {
      tEn: "Forms of 'Be' (am / is / are)",
      t: "تصريف فعل الكون (am / is / are)",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Forms of \'Be\' (am / is / are)</span><small>تصريف فعل الكون في الإثبات والنفي والسؤال</small></h2>' +
        '<p class="en-p" dir="ltr">With <b>am / is / are</b>, we do NOT use <b>do / does</b>. We make negatives with <b>not</b> and questions by moving <b>Am / Is / Are</b> before the subject:</p>' +
        '<div class="tbl"><table><thead><tr><th>Subject</th><th>Positive · الإثبات</th><th>Negative · النفي</th><th>Question · السؤال</th></tr></thead><tbody>' +
        '<tr><td>I</td><td>I <span class="hs">am</span> (I\'m) ready.</td><td>I <span class="hs">am not</span> late.</td><td><span class="hs">Am</span> I in Room 3?</td></tr>' +
        '<tr><td>he / she / it</td><td>He <span class="hs">is</span> (He\'s) a lawyer.</td><td>He <span class="hs">isn\'t</span> busy.</td><td><span class="hs">Is</span> he in court?</td></tr>' +
        '<tr><td>you / we / they</td><td>They <span class="hs">are</span> (They\'re) helpful.</td><td>They <span class="hs">aren\'t</span> here.</td><td><span class="hs">Are</span> they clients?</td></tr></tbody></table></div>' +
        '<div class="tip" dir="ltr"><p><b>Remember · تذكّر:</b> Never use <b>don\'t / doesn\'t</b> with adjectives or nouns:</p><div class="pairs"><span class="yes">She isn\'t busy today.</span><span class="no">She doesn\'t busy today.</span></div></div>',
      arHtml:
        '<p>مع <bdi class="en">am / is / are</bdi> لا نحتاج إلى <bdi class="en">do</bdi> أو <bdi class="en">does</bdi>؛ ننفي بإضافة <bdi class="en">not</bdi> مباشرة (<bdi class="en">isn\'t / aren\'t</bdi>)، ونسأل بتقديم <bdi class="en">Am / Is / Are</bdi> قبل الفاعل.</p>'
    },
    {
      tEn: "Action Verbs & 'Do / Does'",
      t: "الأفعال والمساعد (do / does)",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Action Verbs & \'Do / Does\'</span><small>الأفعال في المضارع البسيط مع do و does</small></h2>' +
        '<p class="en-p" dir="ltr">When the sentence has an <b>action verb</b> (like <b>work, study, prepare, read</b>), we use <b>don\'t / doesn\'t</b> for negatives and <b>Do / Does</b> for questions:</p>' +
        '<div class="tbl"><table><thead><tr><th>Subject</th><th>Positive · الإثبات</th><th>Negative · النفي</th><th>Question · السؤال</th></tr></thead><tbody>' +
        '<tr><td>I / you / we / they</td><td>We <span class="hc">prepare</span> files.</td><td>We <span class="hc">don\'t prepare</span> files.</td><td><span class="hc">Do</span> you <span class="hc">prepare</span> files?</td></tr>' +
        '<tr><td>he / she / it</td><td>He <span class="hc">prepares</span> files.</td><td>He <span class="hc">doesn\'t prepare</span> files.</td><td><span class="hc">Does</span> he <span class="hc">prepare</span> files?</td></tr></tbody></table></div>' +
        '<div class="tip" dir="ltr"><p><b>After don\'t / doesn\'t / Do / Does:</b> Always return the verb to its <b>base form</b> (without -s):</p><div class="pairs"><span class="yes">Does he work here?</span><span class="no">Does he works here?</span></div></div>',
      arHtml:
        '<p>مع أفعال الحدث (<bdi class="en">work, study, prepare</bdi>) نضيف <bdi class="en">s</bdi> للفعل مع <bdi class="en">he / she / it</bdi> في الإثبات فقط.</p>' +
        '<p>وفي النفي والسؤال نستعين بـ <bdi class="en">don\'t / doesn\'t</bdi> و<bdi class="en">Do / Does</bdi>، ويعود الفعل بعدها إلى أصله المجرد بدون <bdi class="en">s</bdi>.</p>'
    },
    {
      tEn: "How to Choose in 2 Seconds",
      t: "كيف تختار بين Be و Do في ثانيتين؟",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">How to Choose in 2 Seconds</span><small>كيف تختار بين Be و Do في ثانيتين؟</small></h2>' +
        '<p class="en-p" dir="ltr">Look at what comes <b>after the subject</b> in a question or negative sentence:</p>' +
        '<div class="sigs">' +
          '<div class="sig s"><h3 dir="ltr">Use Am / Is / Are<small class="sig-ar">إذا لم يأتِ فعل مجرد</small></h3><ul><li>a lawyer (noun)</li><li>busy / safe (adj)</li><li>in the office (place)</li><li>from Saudi Arabia</li></ul></div>' +
          '<div class="sig c"><h3 dir="ltr">Use Do / Does<small class="sig-ar">إذا جاء فعل أصلي مجرد</small></h3><ul><li>work</li><li>study</li><li>live</li><li>prepare</li><li>need / want</li></ul></div>' +
        '</div>' +
        '<div class="xbox"><div class="pairs"><span class="yes">Are you at the office? (place → Are)</span><span class="yes">Do you work at the office? (verb "work" → Do)</span></div></div>',
      arHtml:
        '<p>اسأل نفسك سؤالًا واحدًا: <b>هل يوجد بعد الفاعل فعل أصلي مجرد؟</b></p>' +
        '<p>١) إن وُجد فعل أصلي (مثل <bdi class="en">work, study, live</bdi>) ← اختر <bdi class="en">Do / Does / don\'t / doesn\'t</bdi>.</p>' +
        '<p>٢) إن لم يوجد فعل (بل اسم أو صفة أو حرف جر ومكان) ← اختر <bdi class="en">Am / Is / Are / isn\'t / aren\'t</bdi>.</p>'
    },
    {
      tEn: "Common Arab Mistakes",
      t: "أخطاء العرب الشائعة",
      bilingual: true,
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Common Arab Mistakes</span><small>أخطاء يقع فيها كثير من العرب (من التشخيص)</small></h2>' +
        '<ul class="mist">' +
          '<li><span class="no">I am study law at university.</span><span class="yes">I study law at university.</span><p class="en-m" dir="ltr">Never put <b>am / is / are</b> before a base verb in Present Simple.</p><p>لا نضع <bdi class="en">am / is / are</bdi> قبل الفعل الأصلي في المضارع البسيط.</p></li>' +
          '<li><span class="no">Are you agree with this point?</span><span class="yes">Do you agree with this point?</span><p class="en-m" dir="ltr"><b>agree</b> is a verb (not an adjective), so we ask with <b>Do / Does</b>.</p><p>كلمة <bdi class="en">agree</bdi> فعل بمعنى «يوافق» وليست صفة، لذلك نسأل عنها بـ <bdi class="en">Do you agree?</bdi> لا بـ <bdi class="en">Are you agree?</bdi>.</p></li>' +
          '<li><span class="no">My brother lawyer in Jeddah.</span><span class="yes">My brother is a lawyer in Jeddah.</span><p class="en-m" dir="ltr">English sentences cannot omit <b>is</b>, and singular jobs need <b>a / an</b>.</p><p>لا بد من فعل الكون <bdi class="en">is</bdi> في الجملة الاسمية، ولا بد من <bdi class="en">a</bdi> قبل المهنة المفردة.</p></li>' +
          '<li><span class="no">Where you work?</span><span class="yes">Where do you work?</span><p class="en-m" dir="ltr">Questions with action verbs need the helper verb <b>do / does</b> before the subject.</p><p>السؤال عن فعل حدث يحتاج <bdi class="en">do</bdi> أو <bdi class="en">does</bdi> قبل الفاعل.</p></li>' +
        '</ul>'
    },
    {
      tEn: "Summary",
      t: "الخلاصة",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Quick Summary</span><small>الخلاصة</small></h2>' +
        '<div class="sumc" dir="ltr"><h3>In Two Lines · في سطرين</h3>' +
          '<p><b>am / is / are · فعل الكون</b><span>Use with a noun, adjective, or place (never before a base verb)</span></p>' +
          '<p><b>do / does · الفعل المساعد</b><span>Use in negatives & questions when there is a base action verb</span></p>' +
        '</div>' +
        '<p class="en-p" dir="ltr">Now let\'s practice: 24 guided exercises with brand-new sentences.</p>',
      arHtml:
        '<p><b>am / is / are:</b> مع الاسم والمهنة والصفة والمكان، ولا تدخل على الفعل المجرد أبدًا.</p>' +
        '<p><b>do / does:</b> تدخل في النفي والسؤال عندما يكون في الجملة فعل حدث أصلي.</p>'
    }
  ],

  /* ---------- المرحلة 3: تمارين القواعد (24 تمرينًا بجمل جديدة لم ترد في الشرح) ---------- */
  gA: [
    { s: "Tariq ___ a senior lawyer at our firm.", opts: ["is", "does"], a: 0,
      whyEn: "'a senior lawyer' is a noun (no action verb) → use 'is'.",
      why: "بعد الفراغ اسم مهنة (a senior lawyer) ولا يوجد فعل حدث، فنستخدم is.", errCat: "be_verb" },
    { s: "___ you read legal articles in English?", opts: ["Are", "Do"], a: 1,
      whyEn: "'read' is a base action verb → ask with 'Do you read…?'.",
      why: "وجود الفعل الأصلي read يجعل السؤال بـ Do وليس Are.", errCat: "be_verb" },
    { s: "The meeting room ___ on the third floor.", opts: ["is", "does"], a: 0,
      whyEn: "'on the third floor' is a place (no action verb) → use 'is'.",
      why: "شبه الجملة on the third floor يدل على مكان بلا فعل حدث، فنختار is.", errCat: "be_verb" },
    { s: "Our manager ___ check emails after eight in the evening.", opts: ["isn't", "doesn't"], a: 1,
      whyEn: "'check' is a base action verb + singular subject → doesn't check.",
      why: "الفعل check فعل حدث أصلي والفاعل مفرد، فننفي بـ doesn't.", errCat: "be_verb" },
    { s: "___ the new trainees ready for the meeting?", opts: ["Are", "Do"], a: 0,
      whyEn: "'ready' is an adjective (no action verb) + plural subject → Are.",
      why: "كلمة ready صفة وليست فعلًا، والفاعل جمع، فنسأل بـ Are.", errCat: "be_verb" },
    { s: "I ___ drink coffee in the afternoon.", opts: ["am not", "don't"], a: 1,
      whyEn: "'drink' is a base action verb → I don't drink.",
      why: "مع الفعل الأصلي drink ننفي بـ don't وليس am not.", errCat: "be_verb" },
    { s: "Where ___ your cousin study law?", opts: ["is", "does"], a: 1,
      whyEn: "'study' is a base verb and 'your cousin' is singular → Where does your cousin study?",
      why: "لوجود الفعل الأصلي study مع فاعل مفرد نستخدم المساعد does.", errCat: "be_verb" },
    { s: "These legal documents ___ very important for the client.", opts: ["are", "do"], a: 0,
      whyEn: "'important' is an adjective and 'documents' is plural → are.",
      why: "كلمة important صفة والفاعل جمع (documents)، فنستخدم are.", errCat: "agreement" }
  ],

  gB: [
    { s: "He is work in a bank in Dammam.", ok: false, fix: "He works in a bank in Dammam.",
      whyEn: "Never put 'is' before a base verb. Use Present Simple: 'He works'.",
      why: "لا نضع is قبل الفعل الأصلي work؛ الصواب في المضارع البسيط He works.", errCat: "be_verb" },
    { s: "Are the clients in the waiting room?", ok: true,
      whyEn: "'in the waiting room' is a place with a plural subject → 'Are the clients…?' is correct.",
      why: "سؤال عن مكان بلا فعل حدث ومع فاعل جمع، فاستخدام Are صحيح.", errCat: "be_verb" },
    { s: "Do you busy this afternoon?", ok: false, fix: "Are you busy this afternoon?",
      whyEn: "'busy' is an adjective, not a verb. Ask: 'Are you busy?'",
      why: "كلمة busy صفة وليست فعلًا، لذلك نسأل بـ Are you busy وليس Do you busy.", errCat: "be_verb" },
    { s: "Reem doesn't prepares the contracts on Sundays.", ok: false, fix: "Reem doesn't prepare the contracts on Sundays.",
      whyEn: "After 'doesn't', the verb returns to its base form without -s (prepare).",
      why: "بعد doesn't يعود الفعل إلى أصله المجرد بدون s (prepare).", errCat: "agreement" },
    { s: "Does the judge start at nine o'clock?", ok: true,
      whyEn: "Correct question: Does + singular subject (the judge) + base verb (start).",
      why: "سؤال صحيح: Does مع الفاعل المفرد ثم الفعل المجرد start.", errCat: "be_verb" },
    { s: "My uncle is lawyer in Makkah.", ok: false, fix: "My uncle is a lawyer in Makkah.",
      whyEn: "Always use 'a' or 'an' before a singular job: 'is a lawyer'.",
      why: "لا تنسَ أداة التنكير a قبل المهنة المفردة: is a lawyer.", errCat: "articles_prep" }
  ],

  gC: [
    { pre: "I", verb: "be", post: "a law student in Riyadh.", ans: ["am", "'m"],
      whyEn: "With 'I' + a noun ('a law student'), use 'am'.",
      why: "مع الضمير I والاسم نستخدم am.", errCat: "be_verb" },
    { pre: "Mona", verb: "prepare", post: "the client files every morning.", ans: ["prepares"],
      whyEn: "'Mona' is singular (she) in a positive habit sentence → prepares.",
      why: "الفاعل مفرد غائب (Mona) في جملة مثبتة، فنضيف s للفعل: prepares.", errCat: "agreement" },
    { pre: "We", verb: "not / work", post: "on Fridays and Saturdays.", ans: ["don't work", "do not work"],
      whyEn: "Negative action verb with 'We' → don't work.",
      why: "نفي فعل الحدث work مع الفاعل We يكون بـ don't work.", errCat: "be_verb" },
    { pre: "The court", verb: "not / be", post: "open on Saturdays.", ans: ["isn't", "is not", "'s not"],
      whyEn: "'open' is an adjective and 'The court' is singular → isn't / is not.",
      why: "كلمة open هنا صفة والفاعل مفرد، فننفي بـ isn't أو is not.", errCat: "be_verb" },
    { pre: "What time", verb: "you / arrive", post: "at the office?", ans: ["do you arrive"],
      whyEn: "Question with action verb 'arrive' + 'you' → do you arrive.",
      why: "في السؤال مع الفعل الأصلي arrive والفاعل you نستخدم do you arrive.", errCat: "word_order" },
    { pre: "The new trainees", verb: "be", post: "very helpful.", ans: ["are", "'re"],
      whyEn: "'trainees' is plural and 'helpful' is an adjective → are.",
      why: "الفاعل جمع (trainees) والخبر صفة (helpful)، فنستخدم are.", errCat: "agreement" }
  ],

  gD: [
    { chips: ["in", "the lawyer", "Is", "court today?"], ans: "Is the lawyer in court today?",
      whyEn: "Place ('in court') without an action verb → Is + subject + place?",
      why: "السؤال عن مكان بلا فعل حدث يبدأ بـ Is ثم الفاعل ثم المكان.", errCat: "word_order" },
    { chips: ["advice.", "gives", "Our office", "legal"], ans: "Our office gives legal advice.",
      whyEn: "Subject (Our office) + verb (gives) + object (legal advice).",
      why: "ترتيب الجملة: الفاعل ثم الفعل gives ثم المفعول به legal advice.", errCat: "word_order" },
    { chips: ["do", "live?", "Where", "your clients"], ans: "Where do your clients live?",
      whyEn: "Question word (Where) + do + plural subject (your clients) + base verb (live)?",
      why: "أداة الاستفهام Where ثم المساعد do ثم الفاعل الجمع ثم الفعل المجرد live.", errCat: "word_order" },
    { chips: ["isn't", "morning.", "The office", "busy this"], ans: "The office isn't busy this morning.",
      whyEn: "Subject + isn't + adjective (busy) + time.",
      why: "الفاعل المفرد ثم isn't ثم الصفة busy.", errCat: "word_order" }
  ],

  /* ---------- المرحلة 4: القراءة (رسالة فيصل من مكتب المحاماة بالرياض) ---------- */
  reading: {
    title: "My First Week at the Law Office",
    from: "Faisal",
    fromMeta: "Faisal · Law Trainee, Riyadh",
    to: "Omar",
    targetSeconds: 95,
    introEn: "Faisal is a Saudi law student in Riyadh. He started training at a law office this week and sent this email to his cousin Omar.",
    intro: "فيصل طالب قانون سعودي في الرياض، بدأ تدريبه في مكتب محاماة هذا الأسبوع وأرسل هذا الإيميل لابن عمه عمر.",
    paras: [
      "Hi Omar,",
      "How <<s:are>> you? I <<s:am>> very [[excited|متحمّس]] [[this week|هذا الأسبوع]]! I <<s:am>> a [[trainee|متدرّب]] at Al-Noor Law {Office|office} in Riyadh. The {office} <<s:is>> [[near|قريب من]] the [[main|الرئيسية]] {court}, and the [[building|المبنى]] <<s:is>> [[modern|حديث]] and [[quiet|هادئ]].",
      "There <<s:are>> six {lawyers|lawyer} in our [[team|فريق]], and they <<s:are>> very {helpful}. Mr. Salman <<s:is>> my [[supervisor|مشرف]]. He <<s:is>> a [[commercial|تجاري]] {lawyer}. He <<c:meets>> [[new|جدد]] {clients|client} <<t:every morning>> and <<c:{gives legal advice|give legal advice}>> about [[contracts|العقود]].",
      "My [[schedule|جدول]] <<s:is>> [[clear|واضح]]. I <<c:arrive>> at the {office} at eight o'clock <<t:every day>>. I <<c:don't go>> to {court} [[alone|بمفردي]] because I <<s:am>> still a [[student|طالب]]. Instead, I <<c:{prepare}>> the {client} [[files|ملفات]] and <<c:read>> [[short|قصيرة]] [[reports|تقارير]] in English. Sundays <<s:are>> very {busy}, but Thursdays <<s:aren't>> {busy}.",
      "<<c:Do>> you <<c:have>> [[free time|وقت فراغ]] <<t:on Friday>>? Let's [[meet|نلتقي]] for coffee!",
      "Best,<br>Faisal"
    ],
    predict: {
      qEn: "Before you read: Faisal is a student trainee at a law office. Do you think he goes to court alone?",
      q: "توقّع قبل القراءة: فيصل طالب متدرّب في مكتب محاماة؛ هل تتوقع أنه يذهب إلى المحكمة بمفرده؟",
      optsEn: ["Yes, he goes to court alone every day", "No, he doesn't go to court alone because he is still a student", "He only works from home"],
      opts: ["نعم، يذهب للمحكمة بمفرده كل يوم", "لا، لا يذهب للمحكمة بمفرده لأنه ما زال طالبًا", "يعمل من البيت فقط"],
      a: 1,
      revealEn: "Correct! Faisal writes: 'I don't go to court alone because I am still a student.'",
      reveal: "صحيح! فيصل يقول في رسالته: I don't go to court alone because I am still a student."
    },
    insight: {
      titleEn: "Notice 'Be' vs. 'Do' in Faisal's Email",
      titleAr: "لاحظ الفرق بين Be و Do في إيميل فيصل",
      l1En: "Faisal uses am / is / are with nouns, adjectives, and places (no action verb):",
      ex1: "I am a trainee · The office is near the court · Sundays are very busy",
      l2En: "And he uses base verbs (or don't / Do) when there is an action:",
      ex2: "I prepare the client files · I don't go to court alone · Do you have free time?",
      arHtml: "<p>لاحظ أن فيصل استخدم <b style=\"color:var(--dark)\">am / is / are</b> مع الاسم (<bdi class=\"en\">a trainee</bdi>) والمكان (<bdi class=\"en\">near the court</bdi>) والصفة (<bdi class=\"en\">busy</bdi>)، واستخدم <b style=\"color:var(--accent-ink)\">أفعال الحدث و don't / Do</b> مع الأفعال (<bdi class=\"en\">prepare, go, have</bdi>).</p>"
    },
    questions: [
      { q: "Where is Al-Noor Law Office?", opts: ["Near the airport in Jeddah", "Near the main court in Riyadh", "Inside the university"], a: 1,
        ev: "I am a trainee at Al-Noor Law Office in Riyadh. The office is near the main court…",
        whyEn: "The email states the office is in Riyadh, near the main court.",
        why: "النص يذكر أن المكتب في الرياض قريب من المحكمة الرئيسية.", errCat: "reading" },
      { q: "How many lawyers are in Faisal's team?", opts: ["Four", "Six", "Eight"], a: 1,
        ev: "There are six lawyers in our team, and they are very helpful.",
        whyEn: "Faisal says there are six lawyers in his team (eight is the hour he arrives).",
        why: "عدد المحامين في الفريق ستة (أما الساعة الثامنة فهي وقت وصوله للمكتب).", errCat: "reading" },
      { q: "What is Mr. Salman's job?", opts: ["He is a commercial lawyer and Faisal's supervisor.", "He is a judge in the main court.", "He is a new client."], a: 0,
        ev: "Mr. Salman is my supervisor. He is a commercial lawyer.",
        whyEn: "Mr. Salman is Faisal's supervisor and a commercial lawyer.",
        why: "الأستاذ سلمان هو مشرف فيصل ومحامٍ تجاري.", errCat: "reading" },
      { q: "What does Mr. Salman do every morning?", opts: ["He meets new clients and gives legal advice.", "He studies at the university.", "He closes the office early."], a: 0,
        ev: "He meets new clients every morning and gives legal advice about contracts.",
        whyEn: "Every morning he meets new clients and gives legal advice about contracts.",
        why: "يقابل الموكّلين الجدد كل صباح ويقدّم استشارات قانونية حول العقود.", errCat: "reading" },
      { tf: true, q: "Faisal goes to court alone every afternoon.", a: false,
        ev: "I don't go to court alone because I am still a student.",
        whyEn: "He does NOT go to court alone because he is still a student.",
        why: "فيصل لا يذهب إلى المحكمة بمفرده لأنه ما زال طالبًا.", errCat: "reading" },
      { q: "What does Faisal prepare at the office?", opts: ["Coffee for the clients", "The client files", "The court building"], a: 1,
        ev: "Instead, I prepare the client files and read short reports in English.",
        whyEn: "He prepares the client files and reads short reports.",
        why: "يجهّز ملفات الموكّلين ويقرأ تقارير قصيرة بالإنجليزية.", errCat: "reading" },
      { tf: true, q: "Thursdays are very busy at the office.", a: false,
        ev: "Sundays are very busy, but Thursdays aren't busy.",
        whyEn: "Sundays are busy, but Thursdays aren't busy.",
        why: "الأحد هو المزدحم، أما الخميس فليس مزدحمًا (Thursdays aren't busy).", errCat: "reading" },
      { q: "Why does Faisal write 'I am a trainee' (with 'am') and 'I arrive at eight' (without 'am')?", opts: ["Because 'a trainee' is a noun and 'arrive' is an action verb.", "Because 'arrive' is an adjective.", "Both sentences can use 'am'."], a: 0,
        ev: "I am a trainee at Al-Noor Law Office… I arrive at the office at eight o'clock.",
        whyEn: "We use 'am' before a noun ('a trainee'), and no 'am' before a Present Simple action verb ('arrive').",
        why: "نضع am قبل الاسم (a trainee)، ولا نضع am قبل فعل الحدث في المضارع البسيط (arrive).", errCat: "be_verb" }
    ]
  },

  /* ---------- المرحلة 5: الكتابة (4 جمل منفصلة على الأقل توظّف be و do) ---------- */
  writing: {
    taskEn: "Write at least 4 separate sentences about yourself: 2 sentences using 'am / is / are' (your job/study, city, or how your week is) and 2 sentences using action verbs (what you do and what you don't do).",
    task: "اكتب 4 جمل منفصلة على الأقل عن نفسك: جملتين بـ am / is / are (دراستك أو مدينتك أو صفتك) وجملتين بأفعال حدث (ماذا تفعل وماذا لا تفعل في أسبوعك).",
    checks: [
      { k: "sentences", tEn: "At least 4 separate sentences (end each with a period .)", t: "4 جمل منفصلة على الأقل (بنقطة في نهاية كل جملة)",
        ok: function(a){ return a.sentences >= 4; } },
      { k: "be", tEn: "At least 2 sentences with am / is / are (noun, adjective, or place)", t: "جملتان بـ am / is / are مع اسم أو صفة أو مكان", ex: "I am a law student. · My schedule is busy.",
        ok: function(a, text){ return (String(text || '').match(/\b(?:am|is|are|i'm|he's|she's|it's|we're|they're|isn't|aren't)\b/gi) || []).length >= 2; } },
      { k: "do", tEn: "At least 1 negative or question with don't / doesn't / do / does", t: "جملة منفية أو سؤال بـ don't / doesn't / do / does", ex: "I don't work on Saturdays.",
        ok: function(a, text){ return /\b(?:don't|doesn't|do\s+not|does\s+not|do\s+you|does\s+he|does\s+she)\b/i.test(String(text || '')); } },
      { k: "vocab", tEn: "At least 3 words/phrases from today's lesson", t: "3 كلمات أو عبارات من درس اليوم", ex: "lawyer · office · court · busy · helpful · prepare · client",
        ok: function(a){ return a.used.length >= 3; } }
    ],
    modelMarked: "I <<s:am>> a law student in Riyadh, and my [[goal|هدف]] <<s:is>> to become a {lawyer}. My [[teachers|معلمون]] <<s:are>> very {helpful}. I <<c:{prepare}>> my [[notes|ملاحظات]] <<t:every morning>>, and I <<c:read>> about {court} [[cases|قضايا]]. My [[weekdays|أيام الأسبوع]] <<s:are>> {busy}, but I <<c:don't study>> late on Friday nights.",
    model: "I am a law student in Riyadh, and my goal is to become a lawyer. My teachers are very helpful. I prepare my notes every morning, and I read about court cases. My weekdays are busy, but I don't study late on Friday nights."
  },

  /* ---------- المرحلة 6: الاختبار القصير (10 أسئلة · النجاح من 80%) ---------- */
  quiz: [
    { s: "My older sister ___ a legal advisor in Riyadh.", opts: ["is", "does", "are"], a: 0, tag: "Grammar · قواعد",
      whyEn: "'a legal advisor' is a singular noun (no action verb) → is.",
      why: "بعد الفراغ اسم مفرد بلا فعل حدث، فنستخدم is.", errCat: "be_verb" },
    { s: "___ you prepare the files before the meeting?", opts: ["Are", "Do", "Is"], a: 1, tag: "Grammar · قواعد",
      whyEn: "'prepare' is a base action verb → Do you prepare…?",
      why: "لوجود الفعل الأصلي prepare نسأل بـ Do.", errCat: "be_verb" },
    { s: "Which sentence is correct?", opts: ["I am study English every day.", "I study English every day.", "I studying English every day."], a: 1, tag: "Grammar · قواعد",
      whyEn: "In Present Simple, use the verb directly after the subject without 'am': I study.",
      why: "في المضارع البسيط نضع الفعل بعد الفاعل مباشرة بدون am: I study.", errCat: "be_verb" },
    { s: "Our law office ___ open on Fridays.", opts: ["doesn't", "isn't", "don't"], a: 1, tag: "Grammar · قواعد",
      whyEn: "'open' here is an adjective (no action verb) → isn't open.",
      why: "كلمة open هنا صفة بمعنى مفتوح، فننفي بـ isn't وليس doesn't.", errCat: "be_verb" },
    { s: "Mr. Salman ___ meet clients on Saturdays.", opts: ["isn't", "doesn't", "don't"], a: 1, tag: "Grammar · قواعد",
      whyEn: "'meet' is a base verb and 'Mr. Salman' is singular (he) → doesn't meet.",
      why: "مع الفاعل المفرد والفعل الأصلي meet ننفي بـ doesn't.", errCat: "be_verb" },
    { s: "Where ___ the new trainees from?", opts: ["do", "are", "is"], a: 1, tag: "Grammar · قواعد",
      whyEn: "'from' has no action verb and 'trainees' is plural → Where are the new trainees from?",
      why: "السؤال عن البلد بـ from ليس فيه فعل حدث، والفاعل جمع فنستخدم are.", errCat: "agreement" },
    { s: "Which question is correct?", opts: ["Are you agree with the lawyer?", "Do you agree with the lawyer?", "Is you agree with the lawyer?"], a: 1, tag: "Grammar · قواعد",
      whyEn: "'agree' is an action/mental verb, not an adjective → Do you agree…?",
      why: "كلمة agree فعل وليست صفة، فنسأل بـ Do you agree.", errCat: "be_verb" },
    { s: "The senior lawyers are very ___; they explain every contract clearly.", opts: ["helpful", "court", "prepare"], a: 0, tag: "Vocabulary · مفردات",
      whyEn: "After 'are very' we need an adjective: 'helpful' (spelled with one 'l').",
      why: "نحتاج صفة بعد are very، وhelpful تعني متعاون.", errCat: "vocab" },
    { s: "Each ___ signs an agreement at our law office.", opts: ["court", "client", "busy"], a: 1, tag: "Vocabulary · مفردات",
      whyEn: "A 'client' is the person who receives services from a law office.",
      why: "client هو الموكّل أو العميل في مكتب المحاماة.", errCat: "vocab" },
    { s: "Experienced lawyers ___ to companies and families.", opts: ["give legal advice", "make legal advice", "are legal advice"], a: 0, tag: "Legal Track · المسار القانوني",
      whyEn: "The natural collocation is 'give legal advice'.",
      why: "المتلازمة الصحيحة هي give legal advice.", errCat: "vocab" }
  ]
};
})();
