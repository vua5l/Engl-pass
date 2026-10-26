/* ===== الوحدة 2 · الدرس 2: How Was Your Holiday? — Past Simple: Irregular Verbs (6 مراحل · درس استماع) ===== */
(function(){
LESSONS.u2l2 = {
  id: "u2l2",
  unit: 2,
  n: 2,
  mode: "listening",
  en: "How Was Your Holiday?",
  ar: "عطلة عائلية في اليونان: الأفعال الشاذة في الماضي",
  subEn: "Past Simple: Irregular Verbs",
  canDoEn: "I can talk about a past holiday with irregular past verbs like went, had, saw and bought.",
  canDoAr: "أقدر أن أتحدث عن عطلة مضت بأفعال الماضي الشاذة مثل went وhad وsaw وbought.",
  descEn: "I can use went, had, said, bought, ate, saw, took and came with every subject, use was / were with adjectives and places, and understand a real conversation about a family holiday.",
  descAr: "أقدر أن أستعمل صيغ الماضي went وhad وsaid وbought وate وsaw وtook وcame مع كل الضمائر، وwas / were مع الصفة والمكان، مع مقطع استماع حقيقي تحكي فيه هانا لدانيال عن عطلة أسرتها في اليونان.",
  goals: [
    { en: "I can use the past forms of 8 common irregular verbs: went, had, said, bought, ate, saw, took and came.", ar: "أقدر أن أستعمل صيغ الماضي لثمانية أفعال شاذة شائعة: went وhad وsaid وbought وate وsaw وtook وcame." },
    { en: "I can use one past form with every subject (I went, she went), with no -ed and no was before it.", ar: "أقدر أن أستعمل صيغة ماضٍ واحدة مع كل الضمائر (I went, she went)، بلا ed ولا was قبلها." },
    { en: "I can use was / were with adjectives and places, and add -ed to regular verbs (relaxed).", ar: "أقدر أن أستعمل was / were مع الصفة والمكان، وأضيف ed إلى الأفعال المنتظمة (relaxed)." },
    { en: "I can understand a real conversation about a family holiday, and write at least 4 sentences about a holiday of my own.", ar: "أقدر أن أفهم حوارًا حقيقيًا عن عطلة عائلية، وأكتب 4 جمل على الأقل عن عطلة قضيتها." }
  ],
  intro: {
    recall: {
      dEn: "Review the words and the legal phrase of Lesson 1 by typing them from memory.",
      d: "استرجع كلمات الدرس الأول وعبارته القانونية كتابةً من ذاكرتك بلوحة المفاتيح.",
      items: [
        ["review", "5 active recall items from Unit 2 · Lesson 1", "5 عناصر استرجاع نشط من الدرس الأول في الوحدة الثانية"],
        ["pen", "Type from memory to lock in spelling (double letters, word endings and capital letters)", "كتابة من الذاكرة لتثبيت الإملاء (الحروف المضاعفة ونهايات الكلمات والحروف الكبيرة)"],
        ["spark", "Includes the legal phrase of Lesson 1", "تشمل العبارة القانونية من الدرس الأول"]
      ]
    },
    vocab: {
      dEn: "6 holiday phrases plus today's legal phrase ('annual leave'), with randomized matching rounds.",
      d: "6 عبارات عن العطلات مع العبارة القانونية اليومية (annual leave)، ولعبة توصيل عشوائية في كل جولة.",
      items: [
        ["cards", "7 Flashcards (6 phrases + 'annual leave') with Oxford links and human audio for all 7", "7 بطاقات (6 عبارات + annual leave) مع رابط Oxford ونطق بشري للبطاقات السبع كلها"],
        ["review", "Randomized 2-round matching game", "لعبة توصيل عشوائية من جولتين"],
        ["quiz", "8 context sentences: choose the right phrase", "8 جمل سياقية: اختر العبارة المناسبة"]
      ]
    },
    grammar: {
      dEn: "Why are 'I was went' and 'We goed shopping' wrong? Learn 8 irregular past verbs by sound, and when to use was / were.",
      d: "لماذا تُعد جملة I was went وجملة We goed shopping خاطئتين؟ تعلّم ثمانية أفعال شاذة في الماضي بأصواتها، ومتى تستعمل was / were.",
      items: [
        ["book", "6 grammar cards (English first, Arabic on tap)", "6 بطاقات شرح (الإنجليزي أولًا، والعربي عند الطلب)"],
        ["quiz", "16 guided exercises (4 of each type), one per screen", "16 تمرينًا موجّهًا (4 من كل نمط)، سؤال في كل شاشة"]
      ]
    },
    reading: {
      dEn: "3-Stage Listening (real recording): Hana from the UK and Daniel from Chile talk about a trip to Greece.",
      d: "استماع على 3 مراحل لتسجيل حقيقي: هانا من بريطانيا ودانيال من تشيلي يتحدثان عن رحلة إلى اليونان.",
      items: [
        ["speaker", "Stage 1: Listen for the main idea without reading the transcript", "المرحلة 1: استماع أول للفكرة العامة بدون النص المكتوب"],
        ["quiz", "Stage 2: Listen again and answer 8 detail questions", "المرحلة 2: استماع ثانٍ للإجابة عن 8 أسئلة تفاصيل"],
        ["mail", "Stage 3: Transcript on the source page & Shadowing Timer", "المرحلة 3: النص المكتوب في صفحة المصدر لمراجعة ما فات، مع الترديد (Shadowing)"]
      ]
    },
    writing: {
      dEn: "Write at least 4 separate sentences about a holiday or a happy day out in the past, with irregular past verbs and was / were.",
      d: "اكتب 4 جمل منفصلة على الأقل عن عطلة أو يوم جميل مضى، بأفعال الماضي الشاذة وwas / were.",
      items: [
        ["pen", "At least 4 separate sentences with periods (.)", "4 جمل منفصلة على الأقل تنتهي كل منها بنقطة"],
        ["spark", "Instant check: 3 irregular past verbs, was / were in the right place, and 2 lesson phrases", "فحص فوري: ثلاثة أفعال شاذة في الماضي، وwas / were في موضعهما، وعبارتان من الدرس"]
      ]
    },
    quiz: {
      dEn: "10 shuffled questions on irregular past verbs, was / were and vocabulary (80% to pass), plus Lesson Error Analysis.",
      d: "اختبار قصير من 10 أسئلة في أفعال الماضي الشاذة وwas / were ومفردات الدرس (النجاح من 80%)، يليه تحليل شامل لأخطاء الدرس.",
      items: [
        ["quiz", "10 questions (80% passing score)", "10 أسئلة متنوعة (النجاح من 80%)"],
        ["review", "Structured Error Analysis by category", "تحليل أخطاء الدرس وأسبابها حسب الفئة"]
      ]
    }
  },

  recall: [
    {
      id: "rc-0",
      promptAr: "اسم من الدرس الأول: رحلة، أي الانتقال من مكان إلى مكان آخر، وكثيرًا ما تكون طويلة",
      promptEn: "Noun from Lesson 1: a trip from one place to another, often a long one",
      sentPre: "The",
      sentPost: "from our city to my grandfather's village takes five hours by car.",
      ans: ["journey"],
      hint: "j _ _ _ _ _ y (7 letters)",
      spellNoteEn: "Spelled j-o-u-r-n-e-y: the 'ur' sound is written 'our'. Plural: journeys (not journies).",
      spellNote: "تُكتب j-o-u-r-n-e-y، وصوت «ير» فيها يُكتب our، وجمعها journeys لا journies.",
      errCat: "spelling"
    },
    {
      id: "rc-1",
      promptAr: "فعل من الدرس الأول: يقرّر، أي يختار ما يفعله بعد تفكير",
      promptEn: "Verb from Lesson 1: choose what to do after you think about it",
      sentPre: "We can't",
      sentPost: "between the beach and the mountains for our next trip.",
      ans: ["decide"],
      hint: "d _ _ _ _ e (6 letters)",
      spellNoteEn: "Spelled d-e-c-i-d-e: the 's' sound is written with c. Its past is decided (just add -d).",
      spellNote: "تُكتب d-e-c-i-d-e، وصوت السين فيها حرف c، وماضيها decided بإضافة d وحدها.",
      errCat: "spelling"
    },
    {
      id: "rc-2",
      promptAr: "فعل من الدرس الأول: يصل إلى مكان في آخر الرحلة",
      promptEn: "Verb from Lesson 1: get to a place at the end of a trip",
      sentPre: "Please call me when you",
      sentPost: "in Jeddah.",
      ans: ["arrive"],
      hint: "a _ _ _ _ e (6 letters)",
      spellNoteEn: "Double r: a-r-r-i-v-e. Say arrive in with a city (arrive in Jeddah) and arrive at with a building (arrive at the hotel).",
      spellNote: "حرف r مضاعف: a-r-r-i-v-e، ونقول arrive in مع المدن، وarrive at مع المباني والأماكن الصغيرة.",
      errCat: "spelling"
    },
    {
      id: "rc-3",
      promptAr: "صفة من الدرس الأول: خطِر، أي قد يؤذيك",
      promptEn: "Adjective from Lesson 1: it can hurt you or put you at risk",
      sentPre: "The waves are very high today, so swimming in the sea is",
      sentPost: ".",
      ans: ["dangerous"],
      hint: "d _ _ _ _ _ _ _ s (9 letters)",
      spellNoteEn: "danger + ous: d-a-n-g-e-r-o-u-s. The ending -ous sounds like 'us'.",
      spellNote: "تتكون من danger ثم ous: d-a-n-g-e-r-o-u-s، والمقطع ous يُنطق «أَس».",
      errCat: "spelling"
    },
    {
      id: "rc-4",
      promptAr: "العبارة القانونية من الدرس الأول: الفقه الإسلامي / الشريعة الإسلامية (كلمتان)",
      promptEn: "Legal phrase from Lesson 1: the system of rules that comes from the Quran and the Sunnah (two words)",
      sentPre: "My uncle studied",
      sentPost: "at university, and now he works as a judge.",
      ans: ["Islamic law", "Islamic Law"],
      exact: true,
      isLegal: true,
      hint: "I _ _ _ _ _ _ _ _ w (10 letters, 2 words)",
      spellNoteEn: "Islamic always starts with a capital I, because it comes from the name Islam. Then law: l-a-w.",
      spellNote: "تبدأ Islamic دائمًا بحرف I كبير لأنها مشتقة من اسم الإسلام Islam، ثم تأتي law.",
      errCat: "spelling"
    }
  ],

  legalPhrase: {
    en: "annual leave",
    headword: "annual leave",
    pos: "legal phrase",
    ar: "إجازة سنوية (مدفوعة الأجر)",
    say: "أَنْيُوَل لِيف",
    ex: "My father took ten days of annual leave, and we travelled to Taif together.",
    exAr: "أخذ أبي عشرة أيام من إجازته السنوية، وسافرنا معًا إلى الطائف.",
    tipEn: "Legal collocation: take annual leave / be on annual leave. 'Annual' means every year. In Saudi labour law, a worker gets at least 21 days of paid annual leave a year, and at least 30 days after five years in a row with the same employer. Compare sick leave from Unit 1.",
    tip: "متلازمة قانونية: take annual leave يأخذ إجازته السنوية، وbe on annual leave يكون في إجازته السنوية، وannual تعني سنوي. وفي نظام العمل السعودي (المادة 109) للعامل إجازة سنوية مدفوعة الأجر لا تقل عن 21 يومًا، ولا تقل عن 30 يومًا إذا أمضى خمس سنوات متصلة عند صاحب العمل نفسه. وقارنها بـ sick leave من الوحدة الأولى.",
    legal: true,
    oxfordSlug: "leave_2",
    wikiFiles: ["En-us-annual.ogg", "En-us-leave.ogg"],
    wikiCredit: "File:En-us-annual.ogg & File:En-us-leave.ogg · Wikimedia Commons"
  },

  vocab: [
    { en: "go on holiday", pos: "phrase", ar: "يذهب في عطلة / يسافر في إجازة", say: "قُو أُون هُولِدَاي",
      ex: "Last winter, my grandparents went on holiday to Egypt.", exAr: "في الشتاء الماضي ذهب جدّاي في عطلة إلى مصر.",
      tipEn: "British English says go on holiday (American English: go on vacation). Use 'on', not 'in': on holiday. The past of go is went: went on holiday.",
      tip: "في الإنجليزية البريطانية نقول go on holiday، وفي الأمريكية go on vacation، ونستعمل on لا in، وماضي go هو went: went on holiday.",
      oxfordSlug: "holiday_1",
      wikiFiles: ["En-us-go.ogg", "En-us-on.ogg", "En-us-holiday.ogg"],
      wikiCredit: "File:En-us-go.ogg, File:En-us-on.ogg & File:En-us-holiday.ogg · Wikimedia Commons" },
    { en: "swimming pool", pos: "noun", ar: "مسبح / حوض سباحة", say: "سْوِمِنْق بُول",
      ex: "Our hotel in Dubai had a huge swimming pool on the roof.", exAr: "كان في فندقنا في دبي مسبح ضخم على السطح.",
      tipEn: "Two words: swimming (swim + m + ing, with a double m) + pool. People often just say the pool. We swim in a swimming pool or in the sea.",
      tip: "كلمتان: swimming بحرف m مضاعف ثم pool، وكثيرًا ما يُقال the pool اختصارًا، ونقول swim in a swimming pool وswim in the sea.",
      oxfordSlug: "swimming-pool",
      wikiFile: "LL-Q1860 (eng)-Persent101-swimming pool.wav",
      wikiCredit: "File:LL-Q1860 (eng)-Persent101-swimming pool.wav · Persent101 (Lingua Libre) / Wikimedia Commons" },
    { en: "relax", pos: "verb", ar: "يسترخي / يرتاح", say: "رِلَاكْس",
      ex: "After the long drive, my father relaxed in the garden with a cup of tea.", exAr: "بعد الطريق الطويل استرخى أبي في الحديقة مع كوب من الشاي.",
      tipEn: "relax is a regular verb, so its past is relaxed (relax + ed). Say relax at home / by the pool / on the beach. The adjective relaxing is common too: a relaxing holiday.",
      tip: "relax فعل منتظم ماضيه relaxed، ونقول relax at home وby the pool وon the beach، ومنه الصفة relaxing: a relaxing holiday أي عطلة مريحة.",
      oxfordSlug: "relax",
      wikiFile: "En-us-relax.ogg",
      wikiCredit: "File:En-us-relax.ogg · Wikimedia Commons" },
    { en: "go shopping", pos: "phrase", ar: "يذهب للتسوق", say: "قُو شُوبِنْق",
      ex: "Last week, my sisters went shopping for Eid clothes at the new mall.", exAr: "في الأسبوع الماضي ذهبت أخواتي للتسوق لشراء ملابس العيد من المجمع التجاري الجديد.",
      tipEn: "Say go shopping (not go to shopping, not go for shopping). The past is went shopping. Other activities follow the same pattern: go swimming, go running.",
      tip: "نقول go shopping بلا to ولا for، وماضيها went shopping، وعلى نمطها go swimming وgo running.",
      oxfordSlug: "shopping",
      wikiFiles: ["En-us-go.ogg", "LL-Q1860 (eng)-Vealhurl-shopping.wav"],
      wikiCredit: "File:En-us-go.ogg & File:LL-Q1860 (eng)-Vealhurl-shopping.wav · Vealhurl (Lingua Libre) / Wikimedia Commons" },
    { en: "have fun", pos: "phrase", ar: "يستمتع / يقضي وقتًا ممتعًا", say: "هَاف فَن",
      ex: "My cousins had fun at the camel race in the desert.", exAr: "استمتع أبناء عمي بسباق الهجن في الصحراء.",
      tipEn: "have fun = enjoy yourself. The past is had fun. You can also say have a lot of fun or have great fun. Do not use make here: make fun of someone means laugh at them.",
      tip: "have fun تعني يستمتع، وماضيها had fun، ويجوز have a lot of fun وhave great fun، ولا نستعمل make هنا، فـ make fun of تعني يسخر من.",
      oxfordSlug: "fun_1",
      wikiFile: "LL-Q1860 (eng)-Sapaa-have fun.wav",
      wikiCredit: "File:LL-Q1860 (eng)-Sapaa-have fun.wav · Sapaa (Lingua Libre) / Wikimedia Commons" },
    { en: "watch a match", pos: "phrase", ar: "يشاهد مباراة", say: "وُوتْش أَ مَاتْش",
      ex: "My brothers watched a football match at a café near our house.", exAr: "شاهد إخوتي مباراة كرة قدم في مقهى قريب من بيتنا.",
      tipEn: "A match is a sports game: a football match, a tennis match (American English often says game). Watch a match on TV or at the stadium. watch is regular: watched.",
      tip: "match مباراة رياضية (a football match)، ويقول الأمريكيون game كثيرًا، ونقول watch a match on TV أو at the stadium، وwatch فعل منتظم ماضيه watched.",
      oxfordSlug: "match",
      wikiFiles: ["En-gb-watch.ogg", "LL-Q1860 (eng)-Pvanp7-a (unstressed).wav", "En-uk-match.ogg"],
      wikiCredit: "File:En-gb-watch.ogg, File:LL-Q1860 (eng)-Pvanp7-a (unstressed).wav & File:En-uk-match.ogg · Pvanp7 (Lingua Libre) / Wikimedia Commons" }
  ],

  vocabGaps: [
    { s: "My little brother is learning to swim in the ___ at our sports club.", opts: ["swimming pool", "annual leave", "watch a match"], a: 0,
      whyEn: "A 'swimming pool' is a place with water where people swim, so you can learn to swim there.",
      why: "swimming pool مكان فيه ماء يسبح فيه الناس، فيصح أن يتعلّم فيه السباحة.", errCat: "vocab" },
    { s: "My exams finished yesterday, so today I want to ___ on the sofa and do nothing.", opts: ["go shopping", "go on holiday", "relax"], a: 2,
      whyEn: "'relax' means rest and do nothing tiring, which fits 'on the sofa and do nothing'. You cannot do the other two on a sofa.",
      why: "relax تعني يرتاح ولا يفعل شيئًا متعبًا، وهذا يناسب «على الأريكة دون أن أفعل شيئًا»، ولا يصح الخياران الآخران على الأريكة.", errCat: "vocab" },
    { s: "My mother needs a new dress for my cousin's wedding, so she wants to ___ this afternoon.", opts: ["relax", "go shopping", "have fun"], a: 1,
      whyEn: "'go shopping' means go to the shops to buy things, like a new dress for a wedding.",
      why: "go shopping تعني الذهاب إلى المحلات لشراء الأشياء، كفستان جديد لحفل زفاف.", errCat: "vocab" },
    { s: "My sister is a teacher, so she has her ___ in the summer, when the schools are closed.", opts: ["swimming pool", "go shopping", "annual leave"], a: 2,
      whyEn: "'annual leave' is the paid time off that a worker gets every year. A teacher usually takes it when the schools are closed.",
      why: "annual leave الإجازة المدفوعة التي يأخذها الموظف كل عام، والمعلمة تأخذها عادةً حين تُغلق المدارس.", errCat: "vocab" },
    { s: "In 2023, my uncle and his family ___ to Japan for ten days and returned with lots of gifts.", opts: ["went shopping", "went on holiday", "had fun"], a: 1,
      whyEn: "'go on holiday' means travel to a place for rest and fun, and its past is 'went on holiday'. We cannot say 'went shopping to Japan' or 'had fun to Japan'.",
      why: "go on holiday تعني السفر إلى مكان للراحة والمتعة، وماضيها went on holiday، ولا يصح went shopping to Japan ولا had fun to Japan.", errCat: "vocab" },
    { s: "Faisal loves football, so on Friday he went to the stadium to ___ between Al-Hilal and Al-Ittihad.", opts: ["watch a match", "relax", "have fun"], a: 0,
      whyEn: "A 'match' is a sports game between two teams, so 'watch a match between Al-Hilal and Al-Ittihad' is right.",
      why: "match مباراة رياضية بين فريقين، فالصحيح watch a match between Al-Hilal and Al-Ittihad.", errCat: "vocab" },
    { s: "The children ___ at the water park; they laughed and played all day.", opts: ["went shopping", "watched a match", "had fun"], a: 2,
      whyEn: "'have fun' means enjoy yourself, and its past is 'had fun'. Laughing and playing all day shows they enjoyed the day.",
      why: "have fun تعني يستمتع، وماضيها had fun، والضحك واللعب طوال اليوم يدلان على أنهم استمتعوا.", errCat: "vocab" },
    { s: "On the last day of our trip, we ___ on the beach and read our books.", opts: ["went on holiday", "relaxed", "went shopping"], a: 1,
      whyEn: "'relax' means rest in a calm way, like reading on the beach. Its past is 'relaxed', because relax is a regular verb.",
      why: "relax تعني يرتاح في هدوء، كالقراءة على الشاطئ، وماضيها relaxed لأنه فعل منتظم.", errCat: "vocab" }
  ],

  gCards: [
    {
      tEn: "Two Kinds of Past Verbs",
      t: "نوعان من أفعال الماضي: المنتظم والشاذ",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Two Kinds of Past Verbs</span><small>المنتظم والشاذ</small></h2>' +
        '<p class="en-p" dir="ltr">In Lesson 1 you learned <b>regular</b> verbs: they add <b>-ed</b> in the past. But many everyday verbs are <b>irregular</b>. They do not add -ed. They change to a new word, and you learn this word by heart.</p>' +
        '<div class="tbl"><table><thead><tr><th>Type · النوع</th><th>Base → Past · المجرد والماضي</th></tr></thead><tbody>' +
          '<tr><td>Regular · منتظم</td><td>stay → <span class="hs">stayed</span> · visit → <span class="hs">visited</span> · relax → <span class="hs">relaxed</span></td></tr>' +
          '<tr><td>Irregular · شاذ</td><td>go → <span class="hc">went</span> · eat → <span class="hc">ate</span> · see → <span class="hc">saw</span></td></tr>' +
        '</tbody></table></div>' +
        '<div class="xbox"><span class="xtag s" dir="ltr">Regular · منتظم</span><p class="xen">My parents stayed at home after lunch.</p><span class="xtag c" dir="ltr">Irregular · شاذ</span><p class="xen">My parents went to the market after lunch.</p></div>' +
        '<div class="tip" dir="ltr"><p><b>Remember · تذكّر:</b> an irregular verb never takes -ed: <b>went</b>, not <b>goed</b>. The Words tab has a list of 60 irregular verbs for daily practice.</p></div>',
      arHtml:
        '<p>تعلّمت في الدرس الأول الأفعال <b>المنتظمة</b>، وهي تأخذ <bdi class="en">-ed</bdi> في الماضي: <bdi class="en">stay → stayed</bdi>.</p>' +
        '<p>أما كثير من الأفعال اليومية فهي <b>شاذة</b>: لا تأخذ <bdi class="en">-ed</bdi>، بل تتحول إلى كلمة جديدة تُحفظ: <bdi class="en">go → went</bdi>، و<bdi class="en">eat → ate</bdi>، و<bdi class="en">see → saw</bdi>.</p>' +
        '<p>فلا نقول <bdi class="en">goed</bdi> أبدًا. وفي تبويب الكلمات قائمة بستين فعلًا شاذًا تتدرّب عليها كل يوم.</p>'
    },
    {
      tEn: "Today's 8 Verbs: Learn Them by Sound",
      t: "أفعال اليوم الثمانية: احفظها بأصواتها",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Today\'s 8 Verbs by Sound</span><small>ثمانية أفعال في أزواج صوتية</small></h2>' +
        '<p class="en-p" dir="ltr">Learn the past forms in pairs. In the first three pairs, the two forms have the <b>same vowel sound</b>, so they are easier to remember. The last pair is two short words:</p>' +
        '<ul class="spell" dir="ltr">' +
          '<li>The long <b>"aw"</b> sound, like <b>law</b><span class="s-en">see → saw · buy → bought</span></li>' +
          '<li>The <b>"ay"</b> sound, like <b>day</b><span class="s-en">come → came · eat → ate (like eight)</span></li>' +
          '<li>The short <b>"e"</b> sound, like <b>bed</b><span class="s-en">go → went · say → said (not "sayed")</span></li>' +
          '<li>Two short forms, like <b>dad</b> and <b>book</b><span class="s-en">have → had · take → took</span></li>' +
        '</ul>' +
        '<div class="tip" dir="ltr"><p><b>Say them aloud · ردّدها بصوت مسموع:</b> saw, bought · came, ate · went, said · had, took</p></div>',
      arHtml:
        '<p>احفظ صيغ الماضي أزواجًا، يجمع كل زوج من الأزواج الثلاثة الأولى صوت واحد، والزوج الأخير كلمتان قصيرتان:</p>' +
        '<p>الصوت «أو» الممدود كما في <bdi class="en">law</bdi>: <bdi class="en">saw</bdi> و<bdi class="en">bought</bdi>.</p>' +
        '<p>الصوت «اي» كما في <bdi class="en">day</bdi>: <bdi class="en">came</bdi> و<bdi class="en">ate</bdi>، وتُنطق <bdi class="en">ate</bdi> مثل <bdi class="en">eight</bdi>، ويقولها كثير من البريطانيين «إِت» أيضًا.</p>' +
        '<p>الكسرة القصيرة كما في <bdi class="en">bed</bdi>: <bdi class="en">went</bdi> و<bdi class="en">said</bdi>، وتُنطق <bdi class="en">said</bdi> «سِد» لا «سَيْد».</p>' +
        '<p>وصيغتان قصيرتان: <bdi class="en">had</bdi> كما في <bdi class="en">dad</bdi>، و<bdi class="en">took</bdi> كما في <bdi class="en">book</bdi>.</p>'
    },
    {
      tEn: "One Past Form for Every Subject",
      t: "صيغة ماضٍ واحدة مع كل الضمائر",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">One Form for Every Subject</span><small>الصيغة لا تتغير مع الضمائر</small></h2>' +
        '<p class="en-p" dir="ltr">In the present, he / she / it adds <b>-s</b> (she goes). In the past, the form is the <b>same for everyone</b>, with no -s (only be has two forms: was / were):</p>' +
        '<div class="formula">Subject + <b>past form</b> + the rest</div>' +
        '<div class="tbl"><table><thead><tr><th>Subject · الفاعل</th><th>Past · الماضي</th></tr></thead><tbody>' +
          '<tr><td>I / you / we / they</td><td><span class="hs">took</span> the bus to school.</td></tr>' +
          '<tr><td>he / she / it</td><td><span class="hs">took</span> the bus to school.</td></tr>' +
        '</tbody></table></div>' +
        '<div class="xbox"><div class="pairs">' +
          '<span class="yes">She went to the library after class.</span>' +
          '<span class="no">She wents to the library after class.</span>' +
        '</div></div>' +
        '<div class="tip" dir="ltr"><p><b>Watch out · انتبه:</b> do not put <b>was / were</b> before a past verb. <b>came</b> is already past:</p><div class="pairs"><span class="yes">My friends came to the airport with us.</span><span class="no">My friends were came to the airport with us.</span></div></div>',
      arHtml:
        '<p>في المضارع يأخذ الفعل حرف <bdi class="en">s</bdi> مع <bdi class="en">he / she / it</bdi> (<bdi class="en">she goes</bdi>)، أما في الماضي فالصيغة واحدة مع كل الضمائر بلا <bdi class="en">s</bdi>: <bdi class="en">I took, she took, they took</bdi>، إلا <bdi class="en">be</bdi> فلها صيغتان: <bdi class="en">was / were</bdi>.</p>' +
        '<p>وفي العربية تتغير نهاية الفعل مع كل ضمير (ذهبتُ، ذهبتْ، ذهبوا)، أما في الإنجليزية فلا تتغير.</p>' +
        '<p>ولا نضع <bdi class="en">was / were</bdi> قبل الفعل الماضي، لأن <bdi class="en">came</bdi> و<bdi class="en">went</bdi> ماضيان بنفسيهما.</p>'
    },
    {
      tEn: "was / were, or a Past Verb?",
      t: "was / were أم فعل في الماضي؟",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">was / were, or a Past Verb?</span><small>للوصف أم للحدث؟</small></h2>' +
        '<div class="sigs">' +
          '<div class="sig s"><h3 dir="ltr">was / were + adjective, place or noun<small class="sig-ar">للوصف والمكان</small></h3><ul><li>was hot</li><li>were tired</li><li>was at the beach</li><li>was a great trip</li></ul></div>' +
          '<div class="sig c"><h3 dir="ltr">Past verb for an action<small class="sig-ar">للحدث</small></h3><ul><li>went</li><li>ate</li><li>came</li><li>relaxed</li></ul></div>' +
        '</div>' +
        '<p class="en-p" dir="ltr">Use <b>was / were</b> to describe things or to say where people were. Use the <b>past form of a verb</b> for actions. A story needs both:</p>' +
        '<div class="xbox"><span class="xtag s" dir="ltr">Description · وصف</span><p class="xen">The beach was clean, and the waves were small.</p><span class="xtag c" dir="ltr">Action · حدث</span><p class="xen">We came back at night and ate pizza in our room.</p></div>' +
        '<div class="tip" dir="ltr"><p><b>Past time words · كلمات الزمن الماضي:</b> yesterday · last night · last summer · two years ago · in 2023</p></div>',
      arHtml:
        '<p>نستعمل <bdi class="en">was / were</bdi> مع الصفة (<bdi class="en">was hot</bdi>)، والمكان (<bdi class="en">was at the beach</bdi>)، والاسم (<bdi class="en">was a great trip</bdi>).</p>' +
        '<p>ونستعمل صيغة الماضي من الفعل للحدث: <bdi class="en">went, ate, came, relaxed</bdi>، ولا نجمع بين <bdi class="en">was</bdi> والفعل.</p>' +
        '<p>ومن كلمات الزمن الماضي: <bdi class="en">yesterday</bdi> أمس، و<bdi class="en">last night</bdi> الليلة الماضية، و<bdi class="en">last summer</bdi> الصيف الماضي، و<bdi class="en">two years ago</bdi> قبل سنتين.</p>'
    },
    {
      tEn: "Common Arab Mistakes",
      t: "أخطاء العرب الشائعة",
      bilingual: true,
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Common Arab Mistakes</span><small>أخطاء يقع فيها كثير من العرب</small></h2>' +
        '<ul class="mist">' +
          '<li><span class="no">I was took a taxi to the airport.</span><span class="yes">I took a taxi to the airport.</span><p class="en-m" dir="ltr">Do not put <b>was</b> before a past verb. <b>took</b> is already past.</p><p>لا نضع <bdi class="en">was</bdi> قبل الفعل الماضي، فـ <bdi class="en">took</bdi> ماضٍ بنفسه.</p></li>' +
          '<li><span class="no">My mother buyed a new bag at the market.</span><span class="yes">My mother bought a new bag at the market.</span><p class="en-m" dir="ltr">Irregular verbs have their own past form: buy → <b>bought</b>, not buyed.</p><p>للفعل الشاذ صيغة ماضٍ خاصة به، فماضي <bdi class="en">buy</bdi> هو <bdi class="en">bought</bdi> لا <bdi class="en">buyed</bdi>.</p></li>' +
          '<li><span class="no">Yesterday, my brother eat three burgers for lunch.</span><span class="yes">Yesterday, my brother ate three burgers for lunch.</span><p class="en-m" dir="ltr"><b>Yesterday</b> is in the past, so the verb must be past too: eat → <b>ate</b>.</p><p>كلمة <bdi class="en">Yesterday</bdi> تدل على الماضي، فيأتي الفعل بصيغة الماضي: <bdi class="en">ate</bdi>.</p></li>' +
          '<li><span class="no">The weather were perfect on our trip.</span><span class="yes">The weather was perfect on our trip.</span><p class="en-m" dir="ltr"><b>The weather</b> is singular, so we use <b>was</b>, not were.</p><p>كلمة <bdi class="en">weather</bdi> مفردة، فنستعمل <bdi class="en">was</bdi> لا <bdi class="en">were</bdi>.</p></li>' +
        '</ul>'
    },
    {
      tEn: "Summary",
      t: "الخلاصة",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Quick Summary</span><small>الخلاصة</small></h2>' +
        '<div class="sumc" dir="ltr"><h3>In Two Lines · في سطرين</h3>' +
          '<p><b>Irregular past · الماضي الشاذ</b><span>learn the form by heart: went · had · said · bought · ate · saw · took · came · the same with every subject · no -ed · no was before it</span></p>' +
          '<p><b>was / were and regular verbs · was / were والمنتظم</b><span>was / were + adjective or place (It was hot. We were at the beach.) · regular verbs add -ed (relaxed)</span></p>' +
        '</div>' +
        '<p class="en-p" dir="ltr">Now let\'s practise: 16 guided exercises on irregular past verbs.</p>',
      arHtml:
        '<p><b>الماضي الشاذ:</b> صيغة تُحفظ (<bdi class="en">went, had, said, bought, ate, saw, took, came</bdi>)، واحدة مع كل الضمائر، بلا <bdi class="en">-ed</bdi> ولا <bdi class="en">was</bdi> قبلها.</p>' +
        '<p><b>was / were والمنتظم:</b> <bdi class="en">was / were</bdi> مع الصفة والمكان، والفعل المنتظم يأخذ <bdi class="en">-ed</bdi> (<bdi class="en">relaxed</bdi>).</p>'
    }
  ],

  gA: [
    { s: "On our first night in Muscat, we ___ near the hotel.", opts: ["eated out", "ate out"], a: 1,
      whyEn: "'eat out' is built on the irregular verb 'eat', so its past is 'ate out'. We never add -ed to 'eat'.",
      why: "eat out مبنية على الفعل الشاذ eat، فماضيها ate out، ولا نضيف ed إلى eat أبدًا.", errCat: "tense" },
    { s: "My grandfather ___ to the mosque early this morning.", opts: ["went", "was went"], a: 0,
      whyEn: "'went' is already the past of 'go', so we don't put 'was' before it.",
      why: "went ماضي go بنفسه، فلا نضع قبله was.", errCat: "be_verb" },
    { s: "Our hotel room ___ small, but it had a lovely view of the sea.", opts: ["were", "was"], a: 1,
      whyEn: "'Our hotel room' is one room (singular), and 'small' is an adjective, so we use 'was'. 'were' is for you, we, they and plural nouns.",
      why: "Our hotel room مفرد، وsmall صفة، فنستعمل was، أما were فمع you وwe وthey والجمع.", errCat: "agreement" },
    { s: "My little sister ___ fifty photos of the fireworks last night.", opts: ["took", "tooks"], a: 0,
      whyEn: "A past form is the same for every subject. We never add -s to a past verb, even with he or she.",
      why: "صيغة الماضي واحدة مع كل الضمائر، فلا نضيف s إلى الفعل الماضي حتى مع he وshe.", errCat: "agreement" }
  ],

  gB: [
    { s: "Last weekend, my cousins come to our house for dinner.", ok: false, fix: "Last weekend, my cousins came to our house for dinner.",
      whyEn: "'Last weekend' is in the past, so the verb must be past too: the past of 'come' is 'came'.",
      why: "عبارة Last weekend تدل على الماضي، فيأتي الفعل بصيغة الماضي، وماضي come هو came.", errCat: "tense" },
    { s: "My brother sawed a big turtle on the beach in Umluj.", ok: false, fix: "My brother saw a big turtle on the beach in Umluj.",
      whyEn: "'see' is irregular, so it never takes -ed. Its past form is 'saw' (like 'law').",
      why: "see فعل شاذ لا يأخذ ed، وماضيه saw (على وزن law في النطق).", errCat: "tense" },
    { s: "We took the train to Madinah, and the journey was very comfortable.", ok: true,
      whyEn: "Correct: 'took' is the past of 'take', and 'the journey' is singular, so 'was' comes before the adjective 'comfortable'.",
      why: "صحيحة: took ماضي take، وthe journey مفرد، فتأتي was قبل الصفة comfortable.", errCat: "tense" },
    { s: "My uncle was had a small boat when he lived in Jazan.", ok: false, fix: "My uncle had a small boat when he lived in Jazan.",
      whyEn: "'had' is already past, so we don't put 'was' before it: My uncle had a small boat.",
      why: "had فعل ماضٍ بنفسه، فلا نضع قبله was: My uncle had a small boat.", errCat: "be_verb" }
  ],

  gC: [
    { pre: "When the exams finished, my older brothers", verb: "go", post: "on holiday to Bahrain for a week.", ans: ["went"],
      whyEn: "'go' is irregular: its past form is 'went', with no -ed and no 'was' before it.",
      why: "go فعل شاذ ماضيه went، بلا ed ولا was قبله.", errCat: "tense" },
    { pre: "Every afternoon, my grandmother", verb: "relax", post: "in the shade while we played in the sea.", ans: ["relaxed"],
      whyEn: "'relax' is a regular verb, so we add -ed: relaxed. 'played' in the same sentence is regular too.",
      why: "relax فعل منتظم، فنضيف ed: relaxed، وplayed في الجملة نفسها منتظم أيضًا.", errCat: "tense" },
    { pre: "Last Saturday, my father", verb: "take", post: "us to a seafood restaurant by the sea.", ans: ["took"],
      whyEn: "'Last Saturday' is in the past. 'take' is irregular: its past is 'took' (like 'book'), the same for every subject.",
      why: "Last Saturday تدل على الماضي، وtake فعل شاذ ماضيه took (على وزن book)، وهو واحد مع كل الضمائر.", errCat: "tense" },
    { pre: "Yesterday at the airport, my aunt", verb: "buy", post: "chocolates for all the children.", ans: ["bought"],
      whyEn: "'buy' is irregular: its past is 'bought', with the same vowel sound as 'saw'. We never say 'buyed'.",
      why: "buy فعل شاذ ماضيه bought، وفيه صوت saw نفسه، ولا نقول buyed أبدًا.", errCat: "spelling" }
  ],

  gD: [
    { chips: ["came", "The bus", "ten minutes", "late this morning."], ans: "The bus came ten minutes late this morning.",
      whyEn: "Subject (The bus) + past verb (came) + how late (ten minutes late) + when (this morning). The past of 'come' is 'came'.",
      why: "الفاعل The bus ثم الفعل الماضي came ثم مقدار التأخير ten minutes late ثم الزمن this morning، وماضي come هو came.", errCat: "word_order" },
    { chips: ["dolphins", "We", "from the boat.", "saw"], ans: "We saw dolphins from the boat.",
      whyEn: "Subject (We) + past verb (saw) + object (dolphins) + place (from the boat). The past of 'see' is 'saw'.",
      why: "الفاعل We ثم الفعل الماضي saw ثم المفعول به dolphins ثم المكان from the boat، وماضي see هو saw.", errCat: "word_order" },
    { chips: ["ate", "on the beach.", "The whole family", "dinner"], ans: "The whole family ate dinner on the beach.",
      whyEn: "Subject (The whole family) + past verb (ate) + object (dinner) + place (on the beach). The past of 'eat' is 'ate'.",
      why: "الفاعل The whole family ثم الفعل الماضي ate ثم المفعول به dinner ثم المكان on the beach، وماضي eat هو ate.", errCat: "word_order" },
    { chips: ["said", "hello", "My grandmother", "to everyone at the party."], ans: "My grandmother said hello to everyone at the party.",
      whyEn: "Subject (My grandmother) + past verb (said) + what she said (hello) + to whom (to everyone at the party). The past of 'say' is 'said'.",
      why: "الفاعل My grandmother ثم الفعل الماضي said ثم ما قالته hello ثم لمن قالته to everyone at the party، وماضي say هو said.", errCat: "word_order" }
  ],

  /* ---------- المرحلة 4: الاستماع على ثلاث مراحل (مقطع حقيقي من ELLLO، ونصه المكتوب في صفحة المصدر) ---------- */
  listening: {
    title: "Greek Holiday",
    sourceTag: "ELLLO · Real recording · تسجيل حقيقي",
    sourceMeta: "ELLLO Views #1258 · Beginner (A2)",
    speakers: "Hana (UK) & Daniel (Chile)",
    url: "https://elllo.org/english/1251/1258-Hana_Daniel-Holidays.htm",
    audioWord: "swimming pool",
    targetSeconds: 110,
    introEn: "Do you remember Hana from the UK and Daniel from Chile in Unit 1? Now they talk about a trip to Greece. Listen once for the main idea.",
    intro: "أتذكر هانا من بريطانيا ودانيال من تشيلي في الوحدة الأولى؟ هما الآن يتحدثان عن رحلة إلى اليونان، فاستمع مرة واحدة للفكرة العامة.",
    predict: {
      qEn: "Stage 1 Main-Idea Question: What is the conversation mainly about?",
      q: "سؤال الفكرة العامة: عمّ يدور الحوار أساسًا؟",
      optsEn: [
        "Daniel tells Hana about a work trip to Greece, and she asks him questions about it.",
        "Hana tells Daniel about a happy family holiday in Greece and the things she did there.",
        "Hana tells Daniel about a holiday in Greece, but she says it was boring and too hot."
      ],
      opts: [
        "دانيال يحكي لهانا عن رحلة عمل إلى اليونان، وهي تسأله عنها",
        "هانا تحكي لدانيال عن عطلة عائلية سعيدة في اليونان وعمّا فعلته فيها",
        "هانا تحكي لدانيال عن عطلة في اليونان، لكنها تقول إنها كانت مملة وشديدة الحر"
      ],
      a: 1,
      revealEn: "Hana tells Daniel about a happy family holiday in Greece. Listen again for the details: what did she do there, who was with her, and how long did they stay?",
      reveal: "هانا تحكي لدانيال عن عطلة عائلية سعيدة في اليونان. استمع مرة أخرى للتفاصيل: ماذا فعلت هناك، ومن كان معها، وكم مكثوا هناك؟"
    },
    insight: {
      titleEn: "Listen for Irregular Past Verbs",
      titleAr: "استمع لأفعال الماضي الشاذة",
      l1En: "Our example sentences about the clip. Irregular verbs have a special past form, with no -ed:",
      ex1: "Hana and her family went on holiday to Greece. · She saw a football match with her dad. · The family ate delicious Greek food.",
      l2En: "Regular verbs add -ed, and was / were comes before an adjective or a place:",
      ex2: "Hana relaxed a lot on this holiday. · The beaches in Greece were lovely. · People in Greece were very happy during the football competition.",
      arHtml: "<p><b>انتبه:</b> للأفعال الشاذة صيغة ماضٍ خاصة تُحفظ (went, saw, ate)، ولا تأخذ ed، وهي واحدة مع كل الضمائر.</p><p>أما المنتظمة فتأخذ ed (relaxed)، ونستعمل was / were قبل الصفة أو المكان (were lovely).</p><p>وهذه جمل أمثلة كتبناها عن المقطع، وليست كلام المتحدثَين بنصه.</p>"
    },
    questions: [
      { q: "When did Hana go on this holiday?", opts: ["Last summer", "About two years ago", "When she was a small child"], a: 1,
        whyEn: "At the beginning, Hana says her trip to Greece was about two years ago.",
        why: "في أول المقطع تقول هانا إن رحلتها إلى اليونان كانت قبل نحو سنتين.", errCat: "reading" },
      { tf: true, q: "Daniel says he visited Greece a few years ago.", a: false,
        whyEn: "False. At the beginning, Daniel says he has never been to Greece, so he asks Hana what it is like.",
        why: "خطأ؛ في أول المقطع يقول دانيال إنه لم يزر اليونان قط، فيسأل هانا كيف هي.", errCat: "reading" },
      { q: "What did Hana do most of the time in Greece?", opts: ["Walking in the mountains", "Visiting museums in the city", "Relaxing at the pool and on the beach"], a: 2,
        whyEn: "In the middle, Daniel asks what she did there. Hana says that most of the time she relaxed by the pool and on the beach.",
        why: "في وسط المقطع يسأل دانيال هانا عمّا فعلته هناك، فتقول إنها قضت أكثر وقتها مسترخية عند المسبح وعلى الشاطئ.", errCat: "reading" },
      { q: "When did Hana go shopping, and who went with her?", opts: ["At night, with her mum", "In the morning, alone", "In the afternoon, with a friend"], a: 0,
        whyEn: "In the middle, after the pool and the beach, Hana says she went shopping with her mum at night.",
        why: "في وسط المقطع، بعد حديثها عن المسبح والشاطئ، تقول هانا إنها كانت تذهب للتسوق مع أمها في الليل.", errCat: "reading" },
      { q: "Who went to Greece with Hana?", opts: ["Her mum and her two sisters", "Her mum, her dad and her brother", "Her dad and her grandmother"], a: 1,
        whyEn: "In the middle, Daniel checks that she went with her family, and Hana says her mum, her dad and her brother were with her.",
        why: "في وسط المقطع يتأكد دانيال أنها سافرت مع أسرتها، فتقول هانا إن أمها وأباها وأخاها كانوا معها.", errCat: "reading" },
      { q: "How long did the family stay in Greece?", opts: ["Four days", "Two weeks", "A month"], a: 0,
        whyEn: "In the middle, Daniel asks how long they were there, and Hana says four days.",
        why: "في وسط المقطع يسأل دانيال عن مدة الرحلة، فتقول هانا إنهم بقوا أربعة أيام.", errCat: "reading" },
      { q: "During the football competition, what did Hana and her brother do at night?", opts: ["They watched films in the hotel.", "They danced with the people there.", "They went to bed early."], a: 1,
        whyEn: "Near the end, Hana talks about a big football competition in Greece at that time. People danced at night, and she and her brother joined them.",
        why: "قرب آخر المقطع تقول هانا إن بطولة كبيرة لكرة القدم كانت تُقام هناك، فكان الناس يرقصون في الليل، فشاركتهم هي وأخوها الرقص.", errCat: "reading" },
      { q: "Who did Hana watch a football match with?", opts: ["Her brother", "Her mum", "Her dad"], a: 2,
        whyEn: "At the end, Daniel asks about the matches. Hana says she went to one match with her dad and enjoyed it a lot.",
        why: "في آخر المقطع يسأل دانيال عن المباريات، فتقول هانا إنها حضرت مباراة واحدة مع أبيها واستمتعت بها كثيرًا.", errCat: "reading" }
    ]
  },

  writing: {
    taskEn: "Write at least 4 separate sentences about a holiday or a happy day out in the past. Use at least 3 different irregular past verbs from today (went, had, said, bought, ate, saw, took, came), use was or were with an adjective or a place (It was hot. We were at the beach.), and use at least 2 words or phrases from today's lesson (for example: go on holiday, relax, swimming pool). Write 'I' with a capital letter.",
    task: "اكتب 4 جمل منفصلة على الأقل عن عطلة أو يوم جميل مضى: استعمل ثلاثة أفعال شاذة مختلفة على الأقل من أفعال اليوم (went, had, said, bought, ate, saw, took, came)، واستعمل was أو were مع صفة أو مكان (It was hot. We were at the beach.)، واستعمل كلمتين أو عبارتين على الأقل من كلمات الدرس (مثل go on holiday وrelax وswimming pool)، واكتب الضمير I بحرف كبير.",
    placeholder: "Last summer, I went …\nThe weather was …",
    checks: [
      { k: "sentences", tEn: "At least 4 separate sentences (end each with a period .), and 'I' is always a capital", t: "4 جمل منفصلة على الأقل (بنقطة في نهاية كل جملة)، والضمير I بحرف كبير دائمًا",
        ok: function(a, text){ return a.sentences >= 4 && !/\bi\b/.test(String(text || '')); } },
      { k: "irregular", tEn: "At least 3 different irregular past verbs from today", t: "ثلاثة أفعال شاذة مختلفة على الأقل من أفعال اليوم", ex: "went · had · said · bought · ate · saw · took · came",
        ok: function(a, text){
          var m = String(text || '').toLowerCase().match(/\b(?:went|had|said|bought|ate|saw|took|came)\b/g) || [];
          return m.filter(function(w, i){ return m.indexOf(w) === i; }).length >= 3; } },
      { k: "past", tEn: "was / were with an adjective or a place, and no 'was went' or '-ed' on today's verbs", t: "was / were مع صفة أو مكان، ولا was قبل الفعل الماضي، ولا ed مع أفعال اليوم", ex: "It was hot. · We were at the beach. · We went (not: was went, goed)",
        ok: function(a, text){
          var s = ' ' + String(text || '').replace(/[‘’]/g, "'") + ' ';
          if (!/\b(?:was|were)(?:n't)?\b/i.test(s)) return false;
          if (/\b(?:was|were|wasn't|weren't)\s+(?:not\s+)?(?:went|go|had|have|say|buy|ate|eat|saw|see|took|take|came|come)\b/i.test(s)) return false;
          if (/\b(?:goed|wented|haved|sayed|buyed|boughted|eated|ated|sawed|taked|tooked|comed|camed)\b/i.test(s)) return false;
          return true; } },
      { k: "vocab", tEn: "At least 2 words or phrases from today's lesson", t: "كلمتان أو عبارتان على الأقل من درس اليوم", ex: "go on holiday · swimming pool · relax · go shopping · have fun · watch a match",
        ok: function(a, text){
          var s = String(text || '');
          var found = [/\b(?:go|goes|going|went|gone)\s+on\s+(?:a\s+)?(?:holiday|holidays|vacation)\b/i, /\bswimming[\s-]?pools?\b/i, /\brelax(?:es|ed|ing)?\b/i,
            /\b(?:go|goes|going|went|gone)\s+shopping\b/i, /\b(?:have|has|having|had)\s+(?:(?:a\s+lot\s+of|lots\s+of|so\s+much|great|much|some)\s+)?fun\b/i,
            /\b(?:watch|watches|watching|watched|see|saw|seen)\s+(?:[a-z']+\s+){0,3}match(?:es)?\b/i, /\bannual\s+leave\b/i]
            .filter(function(r){ return r.test(s); }).length;
          return found >= 2 || ((a && a.used) || []).length >= 2; } }
    ],
    modelMarked: "Two years ago, my family <<s:went>> {on holiday|go on holiday} to Abha in the summer. The weather <<c:was>> cool, and the mountains <<c:were>> green and beautiful. Every morning, I {relaxed|relax} by the {swimming pool} of our hotel. In the evening, we <<s:went>> {shopping|go shopping} in the old market, and my mother <<s:bought>> a red scarf. We <<s:ate>> grilled meat at a local restaurant and <<s:had>> a lot of {fun|have fun}. We returned home after five days.",
    model: "Two years ago, my family went on holiday to Abha in the summer. The weather was cool, and the mountains were green and beautiful. Every morning, I relaxed by the swimming pool of our hotel. In the evening, we went shopping in the old market, and my mother bought a red scarf. We ate grilled meat at a local restaurant and had a lot of fun. We returned home after five days.",
    legendEn: "Light blue = irregular past verbs (no -ed) · Terracotta = was / were before an adjective",
    legendAr: "الأزرق الفاتح لأفعال الماضي الشاذة (بلا ed)، والطوبي لـ was / were قبل الصفة.",
    acceptExamples: [
      "Last summer, I went on holiday to Dubai with my brother. Our hotel was very big and modern. I swam in the swimming pool every morning. We ate at a nice Indian restaurant, and we saw the big fountain at night. I bought a gift for my mother.",
      "Last weekend, my family and I went to the beach in Jeddah. The sea was beautiful, and the weather was hot. My father took us to a fish restaurant, and we had dinner there. After that, we went shopping at the mall. It was a great day, and we had fun.",
      "Two years ago, I went on holiday to Egypt with my parents. We stayed in a hotel near the Nile, and it was very comfortable. I relaxed by the pool every afternoon. My dad’s old friend came to the hotel and said hello. We saw the pyramids and took a lot of photos.",
      "Last summer, my family went on holiday to Taif. The hotel wasn’t expensive, and it had a big swimming pool. I relaxed by the pool every morning. We ate dinner at a local restaurant. My father bought dates for my grandmother."
    ]
  },

  askChips: [
    "لماذا لا نقول goed في ماضي go؟",
    "متى أستعمل was ومتى أستعمل went؟",
    "هل يتغير الفعل الشاذ في الماضي مع he وshe؟",
    "كيف أحفظ الأفعال الشاذة بسهولة؟"
  ],

  quiz: [
    { s: "Which sentence is correct?", opts: ["We went to the aquarium and saw a shark.", "We was went to the aquarium and saw a shark.", "We went to the aquarium and seed a shark."], a: 0, tag: "Grammar · قواعد",
      whyEn: "'went' is already past, so we don't put 'was' before it, and the past of 'see' is 'saw', not 'seed'.",
      why: "went ماضٍ بنفسه فلا نضع قبله was، وماضي see هو saw لا seed.", errCat: "be_verb" },
    { s: "Yesterday, the bus ___ forty minutes to get to the stadium.", opts: ["takes", "took", "taked"], a: 1, tag: "Grammar · قواعد",
      whyEn: "'Yesterday' shows the past, and 'take' is irregular: took. 'takes' is present, and 'taked' is not a word.",
      why: "Yesterday تدل على الماضي، وtake فعل شاذ ماضيه took، أما takes فمضارع، وtaked ليست كلمة.", errCat: "tense" },
    { s: "At the party last night, the children ___ all the cake in ten minutes!", opts: ["eats", "eated", "ate"], a: 2, tag: "Grammar · قواعد",
      whyEn: "'last night' shows the past, and the past of 'eat' is 'ate'. 'eats' is present, and 'eated' is not a word.",
      why: "last night تدل على الماضي، وماضي eat هو ate، أما eats فمضارع، وeated ليست كلمة.", errCat: "tense" },
    { s: "Two days ago, my cousin ___ back from her trip to London.", opts: ["came", "comes", "comed"], a: 0, tag: "Grammar · قواعد",
      whyEn: "'Two days ago' shows the past, and the past of 'come' is 'came'. 'comes' is present, and 'comed' is not a word.",
      why: "Two days ago تدل على الماضي، وماضي come هو came، أما comes فمضارع، وcomed ليست كلمة.", errCat: "tense" },
    { s: "Last week, my sister ___ a new swimsuit for our trip.", opts: ["buyed", "bought", "buys"], a: 1, tag: "Grammar · قواعد",
      whyEn: "'Last week' shows the past, and the past of 'buy' is 'bought'. 'buys' is present, and 'buyed' is not a word.",
      why: "Last week تدل على الماضي، وماضي buy هو bought، أما buys فمضارع، وbuyed ليست كلمة.", errCat: "tense" },
    { s: "When we arrived at the hotel last night, the manager ___ 'Welcome!' to us.", opts: ["sayed", "says", "said"], a: 2, tag: "Grammar · قواعد",
      whyEn: "The story is in the past ('arrived', 'last night'), and the past of 'say' is 'said'. 'says' is present, and 'sayed' is not a word.",
      why: "القصة في الماضي (arrived وlast night)، وماضي say هو said، أما says فمضارع، وsayed ليست كلمة.", errCat: "tense" },
    { s: "Which sentence is correct?", opts: ["We haved a great time, and the food was delicious.", "We had a great time, and the food were delicious.", "We had a great time, and the food was delicious."], a: 2, tag: "Grammar · قواعد",
      whyEn: "The past of 'have' is 'had' (not 'haved'), and 'the food' is singular, so we use 'was', not 'were'.",
      why: "ماضي have هو had لا haved، وthe food مفرد، فنستعمل was لا were.", errCat: "agreement" },
    { s: "Please don't run near the ___ because the floor is wet.", opts: ["annual leave", "swimming pool", "watch a match"], a: 1, tag: "Vocabulary · مفردات",
      whyEn: "The floor near a 'swimming pool' is often wet, because people come out of the water there. 'annual leave' is time off work, and 'watch a match' is an action, not a place.",
      why: "الأرض حول swimming pool مبتلة غالبًا لأن الناس يخرجون من الماء هناك، أما annual leave فإجازة من العمل، وwatch a match فعل لا مكان.", errCat: "vocab" },
    { s: "My uncle ___ on TV last night, and his team scored three goals.", opts: ["watched a match", "went shopping", "had fun"], a: 0, tag: "Vocabulary · مفردات",
      whyEn: "'watch a match' means see a sports game, and his team scored goals in that game. 'went shopping on TV' and 'had fun on TV' do not make sense here.",
      why: "watch a match تعني يشاهد مباراة رياضية، وفريقه سجّل أهدافًا فيها، ولا معنى هنا لـ went shopping on TV ولا had fun on TV.", errCat: "vocab" },
    { s: "In Saudi Arabia, workers get at least 21 paid days of ___ a year, and many use them to travel.", opts: ["working hours", "annual leave", "sick leave"], a: 1, tag: "Legal Track · المسار القانوني",
      whyEn: "'annual leave' is the paid holiday time that workers get every year, and many people use it to travel. 'sick leave' is for days when you are ill, and 'working hours' are the hours you spend at work.",
      why: "annual leave الإجازة المدفوعة التي يأخذها العامل كل عام، ويسافر فيها كثير من الناس، أما sick leave فللأيام التي يمرض فيها، وworking hours ساعات العمل.", errCat: "vocab" }
  ]
};
})();
