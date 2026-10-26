/* ===== الوحدة 2 · الدرس 3: The Trip That Went Wrong — Past Simple Negatives (6 مراحل · درس قراءة) ===== */
(function(){
LESSONS.u2l3 = {
  id: "u2l3",
  unit: 2,
  n: 3,
  mode: "reading",
  en: "The Trip That Went Wrong",
  ar: "رحلة لم تسر كما أردنا: النفي في الماضي",
  subEn: "Past Simple: Negatives (didn't / wasn't)",
  canDoEn: "I can say what didn't happen in the past with didn't + base verb (regular and irregular verbs), use wasn't / weren't with be, and join a positive and a negative idea with but.",
  canDoAr: "أقدر أن أقول ما لم يحدث في الماضي بـ didn't والفعل المجرد مع الأفعال المنتظمة والشاذة، وأنفي be بـ wasn't / weren't، وأجمع الإثبات والنفي في جملة واحدة بـ but.",
  descEn: "I can tell a friend what went wrong on a trip: what didn't happen, what wasn't right, and what went well in the end.",
  descAr: "أقدر أن أحكي لصديق ما لم يسر كما أردت في رحلة: ما لم يحدث، وما لم يكن كما ينبغي، وما جرى حسنًا في آخرها، من إيميل فيصل عن رحلته إلى إدنبرة.",
  goals: [
    { en: "I can make Past Simple negatives with didn't + base verb, the same for every person: I didn't go, she didn't go, they didn't go.", ar: "أقدر أن أنفي الماضي البسيط بـ didn't والفعل المجرد، بصيغة واحدة مع كل الضمائر: I didn't go وshe didn't go وthey didn't go." },
    { en: "I can use the base verb after didn't with regular and irregular verbs, including today's eight: lose, find, know, think, pay, sleep, leave and make.", ar: "أقدر أن أستعمل الفعل المجرد بعد didn't مع المنتظم والشاذ، ومنها أفعال اليوم الثمانية: lose وfind وknow وthink وpay وsleep وleave وmake." },
    { en: "I can use wasn't / weren't (not didn't) before adjectives, places and nouns, and join a positive and a negative idea with but.", ar: "أقدر أن أنفي be بـ wasn't / weren't (لا بـ didn't) قبل الصفة والمكان والاسم، وأن أجمع فكرة مثبتة وفكرة منفية بـ but." },
    { en: "I can use 6 travel words and the legal phrase 'pay a fine' in 4 separate sentences about a trip that went wrong.", ar: "أقدر أن أستعمل 6 كلمات عن السفر مع العبارة القانونية pay a fine في 4 جمل منفصلة عن رحلة لم تسر كما أردت." }
  ],
  intro: {
    recall: {
      dEn: "Type five words and phrases from Lesson 2 from memory, including its legal phrase, before you see the answer.",
      d: "اكتب من ذاكرتك خمس كلمات وعبارات من الدرس الثاني، منها عبارته القانونية، قبل أن ترى الإجابة.",
      items: [
        ["review", "5 recall items from Lesson 2", "5 عناصر استرجاع من الدرس الثاني"],
        ["pen", "Type each answer from memory to fix the spelling", "اكتب كل إجابة من ذاكرتك لتثبيت إملائها"],
        ["spark", "Includes the legal phrase from Lesson 2", "تشمل العبارة القانونية من الدرس الثاني"]
      ]
    },
    vocab: {
      dEn: "6 travel words plus today's legal phrase ('pay a fine'), with human audio and Oxford links.",
      d: "6 كلمات عن السفر مع العبارة القانونية اليومية (pay a fine)، بنطق بشري وروابط Oxford.",
      items: [
        ["cards", "7 flashcards (6 words + 1 legal phrase) with human audio & Oxford link", "7 بطاقات (6 كلمات + عبارة قانونية) مع النطق البشري ورابط Oxford"],
        ["review", "2-round matching game", "لعبة توصيل من جولتين"],
        ["quiz", "8 context sentences: choose the right word", "8 جمل سياقية: اختر الكلمة المناسبة"]
      ]
    },
    grammar: {
      dEn: "How do we say that something did NOT happen? Learn didn't + base verb for every verb, wasn't / weren't for be, eight new irregular verbs, and how to join a positive and a negative with but.",
      d: "كيف نقول إن شيئًا لم يحدث؟ تعلّم didn't مع الفعل المجرد لكل الأفعال، وwasn't / weren't لفعل be، وثمانية أفعال شاذة جديدة، وكيف تجمع الإثبات والنفي بـ but.",
      items: [
        ["book", "6 grammar cards (English first, Arabic on tap)", "6 بطاقات شرح (الإنجليزي أولًا، والعربي عند الطلب)"],
        ["quiz", "16 guided exercises (4 of each type), one question per screen", "16 تمرينًا موجّهًا (4 من كل نمط)، سؤال في كل شاشة"]
      ]
    },
    reading: {
      dEn: "An email from Faisal, a Saudi student in London, to his friend Saad about a weekend trip to Edinburgh.",
      d: "إيميل من فيصل، الطالب السعودي في لندن، إلى صديقه سعد عن رحلة نهاية أسبوع إلى إدنبرة.",
      items: [
        ["spark", "Predict before you read", "توقّع قبل القراءة"],
        ["clock", "First reading for the main idea with an advisory timer (no word taps)", "قراءة أولى للفكرة العامة بمؤقت إرشادي مريح ودون لمس الكلمات"],
        ["mail", "Second reading with word meanings, Oxford links, and 8 evidence questions", "قراءة ثانية مع معاني الكلمات باللمس و8 أسئلة فهم بدليلها من النص"]
      ]
    },
    writing: {
      dEn: "Write at least 4 separate sentences about a trip or a day that went wrong, with negatives in the past and one sentence with but.",
      d: "اكتب 4 جمل منفصلة على الأقل عن رحلة أو يوم لم يسر كما أردت، بالنفي في الماضي وجملة واحدة بـ but.",
      items: [
        ["pen", "At least 4 separate sentences (capital letter + period for each)", "4 جمل منفصلة على الأقل بحرف كبير ونقطة لكل جملة"],
        ["spark", "Instant check: 3 negatives, 1 sentence with but, 3 lesson words", "تصحيح فوري: 3 صيغ نفي، وجملة بـ but، و3 كلمات من الدرس"]
      ]
    },
    quiz: {
      dEn: "10 shuffled questions on past negatives, the eight new verbs and lesson vocabulary (80% to pass), followed by a full Lesson Error Analysis.",
      d: "اختبار قصير من 10 أسئلة في النفي في الماضي والأفعال الثمانية الجديدة ومفردات الدرس (النجاح من 80%)، يليه تحليل شامل لأخطاء الدرس وأسبابها.",
      items: [
        ["quiz", "10 questions: 7 grammar, 2 vocabulary, 1 legal (80% passing score)", "10 أسئلة: 7 في القواعد و2 في المفردات وسؤال قانوني واحد (النجاح من 80%)"],
        ["review", "Error Analysis grouped by category and root cause", "تحليل أخطاء الدرس وأسبابها مصنّفة حسب الفئة"]
      ]
    }
  },

  /* ---------- المرحلة 1: الاسترجاع النشط (5 عناصر من الدرس الثاني، منها عبارته القانونية) ---------- */
  recall: [
    {
      id: "rc-0",
      promptAr: "يسافر في عطلة إلى مكان آخر (عبارة من ثلاث كلمات من الدرس الثاني)",
      promptEn: "Travel to another place for a rest from work or study (3 words)",
      sentPre: "This summer, my parents want to",
      sentPost: "to Malaysia for two weeks.",
      ans: ["go on holiday", "go on a holiday"],
      hint: "g _ _ _ _ _ _ _ _ _ y (11 letters)",
      spellNoteEn: "Three words: go + on + holiday. British English usually has no 'a' here. The past is 'went on holiday'.",
      spellNote: "ثلاث كلمات: go + on + holiday، والغالب في الإنجليزية البريطانية ألا تسبق holiday أداة a هنا، وماضيها went on holiday.",
      errCat: "vocab"
    },
    {
      id: "rc-1",
      promptAr: "مسبح (اسم من كلمتين من الدرس الثاني)",
      promptEn: "A place full of water where people swim (2 words)",
      sentPre: "The new sports club near our house has a big",
      sentPost: "with warm water.",
      ans: ["swimming pool"],
      hint: "s _ _ _ _ _ _ _ _ _ _ l (12 letters)",
      spellNoteEn: "Two words: swimming + pool. swim doubles the m before -ing: swim → swimming.",
      spellNote: "كلمتان: swimming + pool، ويتضاعف حرف m قبل ing لأن swim فعل قصير ينتهي بحرف علة واحد ثم حرف ساكن.",
      errCat: "spelling"
    },
    {
      id: "rc-2",
      promptAr: "يرتاح ويستجمّ (فعل من كلمة واحدة)",
      promptEn: "Stop working and feel calm and comfortable (1 word)",
      sentPre: "After a long week at university, I like to",
      sentPost: "at home with a good book.",
      ans: ["relax"],
      hint: "r _ _ _ x (5 letters)",
      spellNoteEn: "Spelled r-e-l-a-x, with x at the end. It is a regular verb: relax → relaxed.",
      spellNote: "تُكتب r-e-l-a-x وآخرها x، وهو فعل منتظم ماضيه relaxed.",
      errCat: "spelling"
    },
    {
      id: "rc-3",
      promptAr: "يستمتع ويقضي وقتًا ممتعًا (عبارة من كلمتين)",
      promptEn: "Enjoy the time and feel happy (2 words)",
      sentPre: "Good luck at the festival, and",
      sentPost: "with your friends!",
      ans: ["have fun"],
      hint: "h _ _ _ _ _ n (7 letters)",
      spellNoteEn: "Two words: have + fun, with no 'a' (not 'have a fun'). The past is 'had fun'.",
      spellNote: "كلمتان: have + fun بلا a (لا نقول have a fun)، وماضيها had fun.",
      errCat: "vocab"
    },
    {
      id: "rc-4",
      promptAr: "الإجازة السنوية المدفوعة التي يمنحها العمل (العبارة القانونية من الدرس الثاني)",
      promptEn: "Legal phrase from Lesson 2: the paid days off work that you get every year (2 words)",
      sentPre: "My father works at a bank, and he takes his",
      sentPost: "every summer.",
      ans: ["annual leave"],
      isLegal: true,
      hint: "a _ _ _ _ _ _ _ _ _ e (11 letters)",
      spellNoteEn: "Two words: annual (double n: a-n-n-u-a-l) + leave. Here leave is a noun (a holiday from work); today you also learn the verb leave → left.",
      spellNote: "كلمتان: annual بنونين (a-n-n-u-a-l) ثم leave، وleave هنا اسم بمعنى إجازة، وستتعلم اليوم الفعل leave وماضيه left بمعنى غادر.",
      errCat: "spelling"
    }
  ],

  /* ---------- العبارة القانونية اليومية (المسار القانوني A2) ---------- */
  legalPhrase: {
    en: "pay a fine",
    headword: "pay a fine",
    pos: "legal phrase",
    ar: "يدفع غرامة (عقوبة مالية على مخالفة)",
    say: "بَيْ أَ فَايْن",
    ex: "Drivers who park in the wrong place often have to pay a fine.",
    exAr: "كثيرًا ما يُلزَم السائقون الذين يوقفون سياراتهم في المكان الخطأ بدفع غرامة.",
    tipEn: "A 'fine' here is money that you pay as a punishment for breaking a rule or a law (not the adjective fine = OK). Past: paid a fine (pay → paid, never 'payed'); negative: didn't pay a fine. We also say 'get a fine'.",
    tip: "الكلمة fine هنا اسم بمعنى غرامة، أي مال يُدفع عقوبةً على مخالفة نظام أو قانون، لا الصفة fine بمعنى بخير. وماضيها paid a fine (لا payed)، ونفيها didn't pay a fine، ويقال أيضًا get a fine.",
    legal: true,
    oxfordSlug: "fine_3",
    wikiFiles: ["En-us-pay.ogg", "En-us-a-unstressed.ogg", "En-us-fine.ogg"],
    wikiCredit: "File:En-us-pay.ogg, File:En-us-a-unstressed.ogg & File:En-us-fine.ogg · Wikimedia Commons"
  },

  /* ---------- المفردات (6 كلمات + العبارة القانونية = 7 عبارات في الدرس) ---------- */
  vocab: [
    { en: "flight", pos: "noun", ar: "رحلة جوية (بالطائرة)", say: "فْلَايْت",
      ex: "Long flights make me very tired, so I always take a small pillow.", exAr: "الرحلات الجوية الطويلة تتعبني كثيرًا، فآخذ معي دائمًا وسادة صغيرة.",
      tipEn: "Collocations: book a flight, take a flight, a long / short flight, a flight to Jeddah. A 'flight' is only the time on the plane; a 'trip' is the whole visit.",
      tip: "متلازمات: book a flight وtake a flight وa long / short flight وa flight to Jeddah. وflight هي الرحلة بالطائرة وحدها، أما trip فالرحلة كلها بما فيها الزيارة.",
      oxfordSlug: "flight",
      wikiFile: "En-us-flight.ogg",
      wikiCredit: "File:En-us-flight.ogg · Wikimedia Commons" },
    { en: "luggage", pos: "noun", ar: "أمتعة السفر (الحقائب)", say: "لَقِدْج",
      ex: "We put all our luggage in the car and left for the airport.", exAr: "وضعنا كل أمتعتنا في السيارة وانطلقنا إلى المطار.",
      tipEn: "Uncountable: no -s and no 'a'. Say 'my luggage' or 'two bags', not 'a luggage' or 'luggages'. 'hand luggage' = the small bag you take on the plane with you.",
      tip: "اسم غير معدود: لا يُجمع ولا تسبقه a، فنقول my luggage أو two bags، ولا نقول a luggage ولا luggages. وhand luggage الحقيبة الصغيرة التي تصحبك في الطائرة.",
      oxfordSlug: "luggage",
      wikiFile: "LL-Q1860 (eng)-Vealhurl-luggage.wav",
      wikiCredit: "File:LL-Q1860 (eng)-Vealhurl-luggage.wav · Vealhurl / Lingua Libre, Wikimedia Commons" },
    { en: "delayed", pos: "adjective", ar: "متأخر عن موعده (بسبب مشكلة)", say: "دِلَيْد",
      ex: "All the morning trains were delayed, so the station was very crowded.", exAr: "تأخرت قطارات الصباح كلها، فازدحمت المحطة كثيرًا.",
      tipEn: "Pattern: be delayed (by an hour / for two hours). It means 'later than planned because of a problem', and we use it a lot for flights and trains. The noun is 'a delay'.",
      tip: "النمط: be delayed (by an hour أو for two hours)، ومعناها تأخّر عن الموعد المحدد بسبب مشكلة، وتكثر مع الرحلات الجوية والقطارات. والاسم منها a delay.",
      oxfordSlug: "delay_2",
      wikiFile: "LL-Q1860 (eng)-Vealhurl-delayed.wav",
      wikiCredit: "File:LL-Q1860 (eng)-Vealhurl-delayed.wav · Vealhurl / Lingua Libre, Wikimedia Commons" },
    { en: "get lost", pos: "phrase", ar: "يضلّ الطريق (لا يعرف أين هو)", say: "قِتْ لُوسْت",
      ex: "Without a map, it is easy to get lost in the old market.", exAr: "من السهل أن تضلّ طريقك في السوق القديم دون خريطة.",
      tipEn: "get + lost = not know where you are. Past: got lost; negative: didn't get lost. Careful: 'I lost my phone' (lose → lost) means I can't find my phone; it is not the same as 'I got lost'.",
      tip: "get lost تعني أن تضلّ طريقك فلا تعرف أين أنت، وماضيها got lost ونفيها didn't get lost. وانتبه: I lost my phone (من lose) تعني أضعت هاتفي، وهي غير I got lost.",
      oxfordSlug: "lost",
      wikiFile: "En-au-get lost.ogg",
      wikiCredit: "File:En-au-get lost.ogg · Wikimedia Commons (Australian English)" },
    { en: "on time", pos: "phrase", ar: "في الموعد تمامًا (دون تأخير)", say: "أُون تَايْم",
      ex: "My grandfather is never late; he always arrives on time.", exAr: "جدي لا يتأخر أبدًا، فهو يصل في الموعد دائمًا.",
      tipEn: "on time = at the planned time, not late. Its opposite is 'late'. We often say be on time, arrive on time and leave on time.",
      tip: "on time تعني في الموعد المحدد دون تأخير، وعكسها late، ويكثر قولنا be on time وarrive on time وleave on time.",
      oxfordSlug: "time_1",
      wikiFile: "LL-Q1860 (eng)-Flame, not lame-on time.wav",
      wikiCredit: "File:LL-Q1860 (eng)-Flame, not lame-on time.wav · Flame, not lame / Lingua Libre, Wikimedia Commons" },
    { en: "book", pos: "verb", ar: "يحجز (غرفة أو تذكرة أو طاولة)", say: "بُك",
      ex: "My sister booked a table for six at a seafood restaurant.", exAr: "حجزت أختي طاولة لستة أشخاص في مطعم مأكولات بحرية.",
      tipEn: "Collocations: book a room, book a flight, book a table, book a ticket. Regular verb: book → booked (the -ed sounds like /t/). The noun is 'a booking'.",
      tip: "متلازمات: book a room وbook a flight وbook a table وbook a ticket. والفعل منتظم ماضيه booked وتُنطق ed فيه /t/، والاسم منه a booking.",
      oxfordSlug: "book_2",
      wikiFile: "En-uk-book.ogg",
      wikiCredit: "File:En-uk-book.ogg · Wikimedia Commons" }
  ],

  vocabGaps: [
    { s: "My uncle is afraid of planes, so he never takes a ___. He always drives.", opts: ["flight", "luggage", "fine"], a: 0,
      whyEn: "A 'flight' is a journey by plane. He is afraid of planes, so he never takes one and drives instead.",
      why: "flight رحلة بالطائرة، والعمّ في الجملة يخاف الطائرات فلا يركبها أبدًا، بل يسافر بالسيارة.", errCat: "vocab" },
    { s: "Your ___ is too heavy: you can only take 23 kilos on this plane.", opts: ["delay", "luggage", "flight"], a: 1,
      whyEn: "'luggage' means the bags and suitcases you take on a trip, and bags can be too heavy for the plane. It is uncountable, so we say 'Your luggage is'.",
      why: "luggage هي الحقائب التي تأخذها في السفر، وقد يزيد وزنها على المسموح به في الطائرة، وهي غير معدودة فنقول Your luggage is.", errCat: "vocab" },
    { s: "Our flight to Abha was ___ because of the fog, so we waited at the airport for three hours.", opts: ["booked", "lost", "delayed"], a: 2,
      whyEn: "'delayed' means later than planned because of a problem. The fog was the problem, so the passengers waited three hours.",
      why: "delayed تعني متأخرًا عن موعده بسبب مشكلة، والمشكلة هنا الضباب، فانتظر المسافرون ثلاث ساعات.", errCat: "vocab" },
    { s: "We ___ in the big airport because all the gates looked the same.", opts: ["got lost", "were on time", "paid a fine"], a: 0,
      whyEn: "'get lost' means not know where you are, and its past is 'got lost'. All the gates looked the same, so they didn't know where to go.",
      why: "get lost تعني أن تضلّ طريقك، وماضيها got lost، وقد تشابهت البوابات كلها فلم يعرفوا إلى أين يذهبون.", errCat: "vocab" },
    { s: "Our manager doesn't like waiting, so please come to the meeting ___.", opts: ["delayed", "lost", "on time"], a: 2,
      whyEn: "'on time' means at the planned time, not late. The manager doesn't like waiting, so everyone must come at the right time.",
      why: "on time تعني في الموعد المحدد دون تأخير، والمدير لا يحب الانتظار، فعلى الجميع أن يحضروا في الموعد.", errCat: "vocab" },
    { s: "Hotels in Makkah are very busy in Ramadan, so we ___ our room three months early.", opts: ["lost", "booked", "delayed"], a: 1,
      whyEn: "'book' a room means ask for it and keep it for a later date. The hotels are busy, so it is smart to book early. The past is 'booked'.",
      why: "book a room تعني أن تحجز الغرفة مسبقًا لموعد قادم، والفنادق مزدحمة فمن الحكمة أن تحجز مبكرًا، والماضي booked.", errCat: "vocab" },
    { s: "I returned my library books two weeks late, so I had to ___.", opts: ["get lost", "pay a fine", "book a room"], a: 1,
      whyEn: "'pay a fine' means pay money as a punishment for breaking a rule. Returning library books late breaks the library's rule.",
      why: "pay a fine تعني أن تدفع مالًا عقوبةً على مخالفة نظام، وإرجاع كتب المكتبة متأخرة مخالفة لنظامها.", errCat: "vocab" },
    { s: "Please don't leave your ___ alone at the airport; keep your bags with you.", opts: ["luggage", "flight", "delay"], a: 0,
      whyEn: "Your 'luggage' is your bags and suitcases, and at the airport you must keep them with you. Remember: luggage has no -s.",
      why: "luggage حقائبك وأمتعتك، وعليك في المطار أن تبقيها معك، وتذكّر أن luggage لا تُجمع بـ s.", errCat: "vocab" }
  ],

  /* ---------- المرحلة 3: بطاقات شرح القواعد (6 بطاقات: 4 شرح + الأخطاء + الخلاصة) ---------- */
  gCards: [
    {
      tEn: "Negatives in Three Small Steps",
      t: "النفي في الماضي بثلاث خطوات صغيرة",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Negatives in Three Small Steps</span><small>النفي في الماضي بثلاث خطوات صغيرة</small></h2>' +
        '<p class="en-p" dir="ltr">In Lessons 1 and 2 you learned positive past verbs: <b>worked</b>, <b>went</b>, <b>bought</b>. To say that something did <b>not</b> happen, follow three small steps:</p>' +
        '<ul class="spell" dir="ltr">' +
          '<li><b>Step 1</b> · Find the past verb.<span class="s-en">Omar <b>watched</b> the news.</span></li>' +
          '<li><b>Step 2</b> · Change it back to the base verb (the dictionary form).<span class="s-en">watched → watch</span></li>' +
          '<li><b>Step 3</b> · Put <b>didn\'t</b> before the base verb.<span class="s-en">Omar <b>didn\'t watch</b> the news.</span></li>' +
        '</ul>' +
        '<p class="formula">subject + <b>didn\'t</b> + base verb</p>' +
        '<div class="xbox"><span class="xtag s" dir="ltr">One form for every person · صيغة واحدة للجميع</span><p class="xen">I didn\'t call. · She didn\'t call. · They didn\'t call.</p></div>' +
        '<div class="tip" dir="ltr"><p><b>Remember · تذكّر:</b> <b>didn\'t</b> = <b>did not</b>. In emails and when we speak, we usually say <b>didn\'t</b>.</p></div>',
      arHtml:
        '<p>تعلمت في الدرسين الأول والثاني الفعل الماضي المثبت (<bdi class="en">worked, went, bought</bdi>). ولتقول إن شيئًا لم يحدث اتبع ثلاث خطوات: ١) جِد الفعل الماضي، ٢) أعده إلى صورته المجردة كما في القاموس، ٣) ضع قبله <bdi class="en">didn\'t</bdi>.</p>' +
        '<p>فـ <bdi class="en">Omar watched the news</bdi> تصير <bdi class="en">Omar didn\'t watch the news</bdi>. و<bdi class="en">didn\'t</bdi> اختصار <bdi class="en">did not</bdi>، وهي واحدة مع كل الضمائر: <bdi class="en">I, you, he, she, it, we, they</bdi>.</p>'
    },
    {
      tEn: "Regular and Irregular: One Rule",
      t: "المنتظم والشاذ: قاعدة واحدة",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Regular and Irregular: One Rule</span><small>المنتظم والشاذ: قاعدة واحدة وثمانية أفعال جديدة</small></h2>' +
        '<p class="en-p" dir="ltr">After <b>didn\'t</b>, every verb goes back to the base verb: no <b>-ed</b>, and no irregular past form. Here are today\'s eight new irregular verbs:</p>' +
        '<div class="tbl"><table><thead><tr><th>Base · المجرد</th><th>Past · الماضي</th><th>Negative · النفي</th></tr></thead><tbody>' +
        '<tr><td>lose <small>يفقد</small></td><td><span class="hc">lost</span></td><td><span class="hs">didn\'t lose</span></td></tr>' +
        '<tr><td>find <small>يجد</small></td><td><span class="hc">found</span></td><td><span class="hs">didn\'t find</span></td></tr>' +
        '<tr><td>know <small>يعرف</small></td><td><span class="hc">knew</span></td><td><span class="hs">didn\'t know</span></td></tr>' +
        '<tr><td>think <small>يظن</small></td><td><span class="hc">thought</span></td><td><span class="hs">didn\'t think</span></td></tr>' +
        '<tr><td>pay <small>يدفع</small></td><td><span class="hc">paid</span></td><td><span class="hs">didn\'t pay</span></td></tr>' +
        '<tr><td>sleep <small>ينام</small></td><td><span class="hc">slept</span></td><td><span class="hs">didn\'t sleep</span></td></tr>' +
        '<tr><td>leave <small>يغادر / يترك</small></td><td><span class="hc">left</span></td><td><span class="hs">didn\'t leave</span></td></tr>' +
        '<tr><td>make <small>يصنع</small></td><td><span class="hc">made</span></td><td><span class="hs">didn\'t make</span></td></tr></tbody></table></div>' +
        '<p class="en-p" dir="ltr"><b>Sound and spelling:</b> thought sounds like bought (Lesson 2) · the k in knew is silent · paid, not payed · lost, slept and left end in -t.</p>' +
        '<div class="tip" dir="ltr"><p><b>Regular verbs too · والمنتظم كذلك:</b> visited → didn\'t visit · stopped → didn\'t stop</p><div class="pairs"><span class="yes">She didn\'t buy a new phone.</span><span class="no">She didn\'t bought a new phone.</span></div></div>',
      arHtml:
        '<p>بعد <bdi class="en">didn\'t</bdi> يعود كل فعل إلى صورته المجردة: فلا <bdi class="en">ed</bdi> مع المنتظم (<bdi class="en">didn\'t visit</bdi>)، ولا صيغة الماضي مع الشاذ (<bdi class="en">didn\'t buy</bdi> لا <bdi class="en">didn\'t bought</bdi>).</p>' +
        '<p>واحفظ أفعال اليوم الثمانية: <bdi class="en">lose / lost</bdi> و<bdi class="en">find / found</bdi> و<bdi class="en">know / knew</bdi> (وحرف k فيها صامت) و<bdi class="en">think / thought</bdi> (تُنطق كـ <bdi class="en">bought</bdi>) و<bdi class="en">pay / paid</bdi> (لا <bdi class="en">payed</bdi>) و<bdi class="en">sleep / slept</bdi> و<bdi class="en">leave / left</bdi> و<bdi class="en">make / made</bdi>.</p>'
    },
    {
      tEn: "The Verb be: wasn't / weren't",
      t: "نفي be في الماضي: wasn't وweren't",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">The Verb be: wasn\'t / weren\'t</span><small>نفي be في الماضي: wasn\'t وweren\'t</small></h2>' +
        '<p class="en-p" dir="ltr"><b>be</b> is different: it does not take <b>didn\'t</b>. Its past is <b>was / were</b>, so its negative is <b>wasn\'t / weren\'t</b>. Use it before an adjective (<b>tired</b>), a place (<b>at home</b>) or a noun (<b>a student</b>).</p>' +
        '<div class="tbl"><table><thead><tr><th>Subject</th><th>Negative · النفي</th><th>Example · مثال</th></tr></thead><tbody>' +
        '<tr><td>I / he / she / it</td><td>wasn\'t <small>(was not)</small></td><td>I <span class="hs">wasn\'t</span> hungry.</td></tr>' +
        '<tr><td>you / we / they</td><td>weren\'t <small>(were not)</small></td><td>We <span class="hc">weren\'t</span> tired.</td></tr></tbody></table></div>' +
        '<div class="tip" dir="ltr"><p><b>Quick test · اختبار سريع:</b> Is there a main verb (go, pay, know)? Use <b>didn\'t</b> + base verb. Is there only an adjective, a place or a noun? Use <b>wasn\'t / weren\'t</b>.</p><div class="pairs"><span class="yes">The film wasn\'t long.</span><span class="no">The film didn\'t long.</span><span class="no">The film didn\'t be long.</span></div></div>',
      arHtml:
        '<p>الفعل <bdi class="en">be</bdi> مختلف: لا نستعمل معه <bdi class="en">didn\'t</bdi>، فماضيه <bdi class="en">was / were</bdi> ونفيه <bdi class="en">wasn\'t / weren\'t</bdi>، ويأتي قبل الصفة أو المكان أو الاسم.</p>' +
        '<p>والاختبار السريع: إن كان في الجملة فعل أساسي، حدثًا كان أو حالة (<bdi class="en">go, pay, know</bdi>)، نفيناه بـ <bdi class="en">didn\'t</bdi> والفعل المجرد، وإن لم يكن فيها إلا صفة أو مكان أو اسم نفينا بـ <bdi class="en">wasn\'t / weren\'t</bdi>، ولا نقول <bdi class="en">didn\'t be</bdi> أبدًا.</p>'
    },
    {
      tEn: "Positive + Negative with but",
      t: "الإثبات والنفي في جملة واحدة بـ but",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Positive + Negative with but</span><small>نجمع الإثبات والنفي بـ but</small></h2>' +
        '<p class="en-p" dir="ltr">To show a difference, join a positive idea and a negative idea with <b>but</b>. Put a comma before <b>but</b>, and choose the right verb in each part:</p>' +
        '<div class="xbox"><span class="xtag s" dir="ltr">Positive, but negative · مثبت ثم منفي</span><p class="xen">Sara bought a ticket, but she didn\'t go to the match.</p></div>' +
        '<div class="xbox"><span class="xtag c" dir="ltr">Negative, but positive · منفي ثم مثبت</span><p class="xen">The soup wasn\'t hot, but it was tasty.</p></div>' +
        '<div class="tip" dir="ltr"><p><b>Past time words · كلمات الماضي:</b> yesterday, last night, last weekend, two days ago. With them, use <b>didn\'t</b>, never <b>don\'t / doesn\'t</b>.</p><div class="pairs"><span class="yes">Yesterday, Ali didn\'t go to the gym.</span><span class="no">Yesterday, Ali doesn\'t go to the gym.</span></div></div>',
      arHtml:
        '<p>إذا أردت أن تبيّن اختلافًا فاجمع فكرة مثبتة وفكرة منفية بـ <bdi class="en">but</bdi>، وضع قبلها فاصلة، واختر الفعل الصحيح في كل جزء: <bdi class="en">bought</bdi> في المثبت و<bdi class="en">didn\'t go</bdi> في المنفي.</p>' +
        '<p>ومع كلمات الماضي مثل <bdi class="en">yesterday</bdi> و<bdi class="en">last weekend</bdi> و<bdi class="en">two days ago</bdi> ننفي بـ <bdi class="en">didn\'t</bdi>، لا بـ <bdi class="en">don\'t</bdi> ولا <bdi class="en">doesn\'t</bdi>.</p>'
    },
    {
      tEn: "Common Arab Mistakes",
      t: "أخطاء العرب الشائعة",
      bilingual: true,
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Common Arab Mistakes</span><small>أخطاء يقع فيها كثير من العرب في النفي بالماضي</small></h2>' +
        '<ul class="mist">' +
          '<li><span class="no">I was go to the bank yesterday.</span><span class="yes">I went to the bank yesterday.</span><p class="en-m" dir="ltr">Don\'t put <b>was / were</b> before a verb. For a positive action, use the past form: <b>went</b>.</p><p>لا نضع <bdi class="en">was / were</bdi> قبل الفعل، والحدث المثبت في الماضي نكتبه بصيغة الماضي: <bdi class="en">went</bdi>.</p></li>' +
          '<li><span class="no">We didn\'t went to the beach.</span><span class="yes">We didn\'t go to the beach.</span><p class="en-m" dir="ltr">After <b>didn\'t</b>, use the base verb: <b>go</b>, not <b>went</b> or <b>goed</b>.</p><p>بعد <bdi class="en">didn\'t</bdi> يأتي الفعل المجرد: <bdi class="en">go</bdi> لا <bdi class="en">went</bdi> ولا <bdi class="en">goed</bdi>.</p></li>' +
          '<li><span class="no">The water didn\'t cold.</span><span class="yes">The water wasn\'t cold.</span><p class="en-m" dir="ltr"><b>cold</b> is an adjective, so use <b>wasn\'t / weren\'t</b>, not <b>didn\'t</b>.</p><p>كلمة <bdi class="en">cold</bdi> صفة لا فعل، فننفي بـ <bdi class="en">wasn\'t / weren\'t</bdi> لا بـ <bdi class="en">didn\'t</bdi>.</p></li>' +
          '<li><span class="no">Last Friday, my cousin don\'t come to lunch.</span><span class="yes">Last Friday, my cousin didn\'t come to lunch.</span><p class="en-m" dir="ltr">With a past time word (<b>last Friday</b>, <b>yesterday</b>), use <b>didn\'t</b>, not <b>don\'t / doesn\'t</b>.</p><p>مع كلمات الماضي مثل <bdi class="en">last Friday</bdi> و<bdi class="en">yesterday</bdi> ننفي بـ <bdi class="en">didn\'t</bdi> لا بـ <bdi class="en">don\'t / doesn\'t</bdi>.</p></li>' +
        '</ul>'
    },
    {
      tEn: "Summary",
      t: "الخلاصة",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Quick Summary</span><small>الخلاصة</small></h2>' +
        '<div class="sumc" dir="ltr"><h3>In Three Lines · في ثلاثة أسطر</h3>' +
          '<p><b>Main verbs · الأفعال الأساسية</b><span>didn\'t + base verb, for every person and every verb: didn\'t arrive · didn\'t go · didn\'t pay</span></p>' +
          '<p><b>be · فعل الكون</b><span>wasn\'t (I, he, she, it) · weren\'t (you, we, they) + adjective, place or noun</span></p>' +
          '<p><b>but · الربط</b><span>positive, but negative · negative, but positive</span></p>' +
        '</div>' +
        '<p class="en-p" dir="ltr">Now let\'s practise: 16 guided exercises with brand-new sentences.</p>',
      arHtml:
        '<p><b>الأفعال الأساسية</b> (حدثًا وحالة) ننفيها بـ <bdi class="en">didn\'t</bdi> والفعل المجرد مع كل الضمائر وكل الأفعال، المنتظمة والشاذة.</p>' +
        '<p><b>فعل be</b> ننفيه بـ <bdi class="en">wasn\'t / weren\'t</bdi>، ونجمع الإثبات والنفي في جملة واحدة بـ <bdi class="en">but</bdi>.</p>'
    }
  ],

  /* ---------- المرحلة 3: تمارين القواعد (16 تمرينًا، 4 من كل نمط، بجمل جديدة) ---------- */
  gA: [
    { s: "My colleague ___ the office early yesterday; he worked until seven.", opts: ["didn't leave", "didn't left"], a: 0,
      whyEn: "After didn't, we use the base verb, even with irregular verbs: didn't leave (not 'didn't left'). He worked until seven, so he didn't leave early.",
      why: "بعد didn't يأتي الفعل المجرد حتى مع الأفعال الشاذة: didn't leave لا didn't left، وقد بقي يعمل حتى السابعة فلم يغادر مبكرًا.", errCat: "tense" },
    { s: "The university library ___ busy this morning, so I found a quiet table.", opts: ["didn't", "wasn't"], a: 1,
      whyEn: "'busy' is an adjective, not a verb, so we use the past of be: wasn't busy. 'didn't busy' is not English.",
      why: "busy صفة لا فعل، فننفي بماضي be: wasn't busy، أما didn't busy فلا تصح في الإنجليزية.", errCat: "be_verb" },
    { s: "Last semester, our professor ___ any changes to the exam timetable.", opts: ["don't make", "didn't make"], a: 1,
      whyEn: "'Last semester' is in the past, so we use didn't, not don't. After didn't, the verb stays in the base form: didn't make.",
      why: "Last semester زمن ماضٍ، فننفي بـ didn't لا don't، ويبقى الفعل بعدها مجردًا: didn't make.", errCat: "tense" },
    { s: "I ___ the time of my dentist appointment, so I called the clinic.", opts: ["didn't know", "wasn't know"], a: 0,
      whyEn: "'know' is a verb, so its past negative is didn't + base verb: didn't know. We never put wasn't before a base verb.",
      why: "know فعل، فنفيه في الماضي didn't مع الفعل المجرد: didn't know، ولا نضع wasn't قبل الفعل المجرد أبدًا.", errCat: "be_verb" }
  ],

  gB: [
    { s: "We didn't found a seat on the train, so we waited for the next one.", ok: false, fix: "We didn't find a seat on the train, so we waited for the next one.",
      whyEn: "After didn't, use the base verb: find, not found. The past form 'found' is only for positive sentences.",
      why: "بعد didn't يأتي الفعل المجرد find لا found، وصيغة الماضي found للجملة المثبتة وحدها.", errCat: "tense" },
    { s: "Our hotel room didn't be ready at two o'clock.", ok: false, fix: "Our hotel room wasn't ready at two o'clock.",
      whyEn: "'ready' is an adjective, so we use the past of be: wasn't ready. We never say 'didn't be'.",
      why: "ready صفة، فننفي بماضي be: wasn't ready، ولا نقول didn't be أبدًا.", errCat: "be_verb" },
    { s: "I didn't sleep well before the exam, but I passed it.", ok: true,
      whyEn: "Correct: didn't + base verb (sleep) in the negative part, the past form (passed) in the positive part, and but joins the two different ideas.",
      why: "صحيحة: didn't مع الفعل المجرد sleep في الجزء المنفي، وصيغة الماضي passed في الجزء المثبت، وbut تربط الفكرتين المختلفتين.", errCat: "tense" },
    { s: "I was lose my train ticket, so I bought a new one at the station.", ok: false, fix: "I lost my train ticket, so I bought a new one at the station.",
      whyEn: "Don't put was before a verb. A positive past action uses the past form, and the past of lose is lost.",
      why: "لا نضع was قبل الفعل، والحدث المثبت في الماضي نكتبه بصيغة الماضي، وماضي lose هو lost.", errCat: "be_verb" }
  ],

  gC: [
    { pre: "At first, we", verb: "not / think", post: "the museum was far, but the walk took an hour.", ans: ["didn't think", "did not think"],
      whyEn: "'took' shows the story is in the past, so the negative is didn't + base verb. 'think' is irregular (thought), but after didn't it goes back to think.",
      why: "الفعل took يدل على أن القصة في الماضي، فالنفي didn't مع الفعل المجرد، وthink فعل شاذ ماضيه thought، لكنه يعود بعد didn't إلى صورته المجردة think.", errCat: "tense" },
    { pre: "Last Thursday, the tickets for the fast train", verb: "not / be", post: "expensive, so we bought two.", ans: ["weren't", "were not"],
      whyEn: "'expensive' is an adjective, so we use be, not didn't. 'The tickets' is plural (they), so the negative is weren't.",
      why: "expensive صفة، فننفي بـ be لا بـ didn't، والفاعل The tickets جمع (they)، فنكتب weren't.", errCat: "be_verb" },
    { pre: "Last Monday, my manager", verb: "not / pay", post: "for the team lunch, so we shared the bill.", ans: ["didn't pay", "did not pay"],
      whyEn: "'pay' is a main verb, so the negative is didn't + base verb: didn't pay (not 'didn't paid'). didn't is the same with he and she.",
      why: "pay فعل أساسي، فنفيه didn't مع الفعل المجرد: didn't pay لا didn't paid، وdidn't واحدة مع he وshe.", errCat: "tense" },
    { pre: "I didn't lose my passport at the airport, but I", verb: "lose", post: "my sunglasses.", ans: ["lost", "did lose"],
      whyEn: "The part after but is positive, so we use the past form of lose: lost. The first part is negative (didn't lose), and but joins the two ideas.",
      why: "الجزء الذي بعد but مثبت، فنستعمل صيغة الماضي من lose وهي lost، والجزء الأول منفي (didn't lose)، وbut تجمع الفكرتين.", errCat: "tense" }
  ],

  gD: [
    { chips: ["a decision", "Our manager", "at the meeting.", "didn't make"], ans: "Our manager didn't make a decision at the meeting.",
      whyEn: "Subject (Our manager) + didn't + base verb (make) + object (a decision) + place (at the meeting).",
      why: "الفاعل Our manager ثم didn't ثم الفعل المجرد make ثم المفعول a decision ثم المكان at the meeting.", errCat: "word_order" },
    { chips: ["on time,", "The last bus", "so we took a taxi.", "didn't leave"], ans: "The last bus didn't leave on time, so we took a taxi.",
      whyEn: "Subject (The last bus) + didn't leave + on time, then the result after so (so we took a taxi).",
      why: "الفاعل The last bus ثم didn't leave ثم on time، ثم النتيجة بعد so: so we took a taxi.", errCat: "word_order" },
    { chips: ["busy.", "The buses were full,", "weren't", "but the trains"], ans: "The buses were full, but the trains weren't busy.",
      whyEn: "Positive part first (The buses were full), then but, then the negative part: the trains + weren't + adjective (busy).",
      why: "الجزء المثبت أولًا The buses were full، ثم but، ثم الجزء المنفي: the trains ثم weren't ثم الصفة busy.", errCat: "word_order" },
    { chips: ["but my books were.", "My laptop", "in my bag,", "wasn't"], ans: "My laptop wasn't in my bag, but my books were.",
      whyEn: "Negative part first: My laptop + wasn't + place (in my bag). Then but + the positive part (my books were).",
      why: "الجزء المنفي أولًا: My laptop ثم wasn't ثم المكان in my bag، ثم but والجزء المثبت my books were.", errCat: "word_order" }
  ],

  /* ---------- المرحلة 4: القراءة (إيميل فيصل من لندن إلى صديقه سعد عن رحلته إلى إدنبرة) ---------- */
  reading: {
    title: "Our Crazy Weekend in Edinburgh",
    from: "Faisal",
    fromMeta: "Faisal · Saudi Student, London",
    to: "Saad",
    lg1: "didn't + base verb · نفي الأفعال",
    lg2: "wasn't / weren't · نفي be",
    lg3: "but · joins positive and negative · يربط الإثبات بالنفي",
    hlLabel: "Highlight negatives & but · إظهار النفي وbut",
    targetSeconds: 135,
    introEn: "Faisal is a Saudi student in London. Last weekend, he went to Edinburgh in Scotland with his classmate Turki. Now he is writing to his friend Saad about the trip.",
    intro: "فيصل طالب سعودي في لندن، سافر في نهاية الأسبوع الماضي مع زميله تركي إلى إدنبرة في اسكتلندا، ويكتب الآن إلى صديقه سعد عن الرحلة.",
    paras: [
      "Hi Saad,",
      "Last weekend, my classmate Turki and I went to Edinburgh. We wanted to [[relax|نرتاح]] after our exams, <<t:but>> the trip <<s:didn't start>> well.",
      "On Friday, our {flight} from London was {delayed}. The plane [[left|أقلعت (الماضي من leave)]] two hours late, so we <<s:didn't arrive>> {on time}. Then we waited an hour for my {luggage}, <<t:but>> it <<s:didn't come>>. The [[airline|شركة الطيران]] [[lost|أضاعت (الماضي من lose)]] it!",
      "We <<s:didn't want>> to wait all night, so we [[decided|قرّرنا]] to take the [[tram|الترام]] into the city. We <<s:didn't buy>> tickets before we [[got on|ركبنا]], because we <<s:didn't know>> the rule. A [[ticket inspector|مفتش التذاكر]] came, and we {paid a fine|pay a fine}. It <<c:wasn't>> cheap!",
      "After that, we {got lost|get lost} in the old town because my phone had no [[battery|شحن في البطارية]]. When we [[finally|أخيرًا]] [[found|وجدنا (الماضي من find)]] our hotel, it <<c:wasn't>> like the photos. I {booked|book} a big, modern room, <<t:but>> our room <<c:wasn't>> big or modern. The [[heater|المدفأة]] [[made|أصدرت (الماضي من make)]] a [[strange|غريب]] [[noise|صوت مزعج]] all night, so I <<s:didn't sleep>> at all.",
      "<<t:But>> on Saturday, everything changed. The airline found my {luggage}, and it <<s:didn't rain>> all day! We visited the [[castle|القلعة]], and the [[queues|طوابير الانتظار]] <<c:weren't>> long. We left on Sunday, and this time the [[journey|الرحلة]] home was easy: our {flight} was {on time}.",
      "At first, I [[thought|ظننت (الماضي من think)]] this trip was a big mistake, <<t:but>> it <<c:wasn't>>. Next summer, let's go on holiday together, and this time you can {book} the hotel!",
      "Your friend,<br>Faisal"
    ],
    predict: {
      qEn: "Before you read: Faisal is a Saudi student in London. Look at the subject of his email: 'Our Crazy Weekend in Edinburgh'. What do you think the email is mainly about?",
      q: "توقّع قبل القراءة: فيصل طالب سعودي في لندن، وعنوان إيميله «Our Crazy Weekend in Edinburgh»؛ عمّ تتوقع أن يكون الإيميل في أغلبه؟",
      optsEn: ["His exam results this term", "A short trip where many things went wrong", "A new flat he wants to rent in Edinburgh"],
      opts: ["نتائج اختباراته في هذا الفصل", "رحلة قصيرة لم تسر فيها أمور كثيرة كما أراد", "شقة جديدة يريد استئجارها في إدنبرة"],
      a: 1,
      revealEn: "The email is about a short trip with many problems. Faisal writes: 'We wanted to relax after our exams, but the trip didn't start well.'",
      reveal: "الإيميل عن رحلة قصيرة واجهت فيها مشكلات كثيرة؛ يقول فيصل: We wanted to relax after our exams, but the trip didn't start well."
    },
    insight: {
      titleEn: "Negatives in Faisal's Email",
      titleAr: "لاحظ النفي في إيميل فيصل",
      l1En: "For main verbs, Faisal uses didn't + the base verb, with regular verbs (start, want) and irregular verbs (know):",
      ex1: "the trip didn't start well · we didn't want to wait · we didn't know the rule",
      l2En: "With be, he uses wasn't / weren't. He also joins a positive idea and a negative idea with but:",
      ex2: "the queues weren't long · I thought this trip was a big mistake, but it wasn't",
      arHtml: "<p>لاحظ أن فيصل نفى الأفعال الأساسية بـ <b style=\"color:var(--dark)\">didn't</b> ثم الفعل المجرد، سواء أكان الفعل منتظمًا (<bdi class=\"en\">didn't start, didn't want</bdi>) أم شاذًا (<bdi class=\"en\">didn't know</bdi>)، ونفى <bdi class=\"en\">be</bdi> بـ <b style=\"color:var(--accent-ink)\">wasn't / weren't</b> (<bdi class=\"en\">the queues weren't long</bdi>)، وجمع الفكرة المثبتة والفكرة المنفية بـ <bdi class=\"en\">but</bdi>.</p>"
    },
    questions: [
      { q: "Why didn't Faisal and Turki arrive in Edinburgh on time?", opts: ["Their plane left two hours late.", "They took the wrong train.", "They woke up late on Friday."], a: 0,
        ev: "The plane left two hours late, so we didn't arrive on time.",
        whyEn: "Faisal writes that the plane left two hours late. That is why they didn't arrive on time.",
        why: "يذكر فيصل أن الطائرة أقلعت متأخرة ساعتين، ولذلك لم يصلا في الموعد.", errCat: "reading" },
      { q: "What happened to Faisal's luggage on Friday?", opts: ["Turki took it by mistake.", "He left it on the tram.", "The airline lost it."], a: 2,
        ev: "The airline lost it!",
        whyEn: "They waited an hour for the luggage, but it didn't come, because the airline lost it.",
        why: "انتظرا الأمتعة ساعة فلم تخرج، لأن شركة الطيران أضاعتها.", errCat: "reading" },
      { q: "Why did Faisal and Turki pay a fine?", opts: ["They were too noisy on the tram.", "They got on the tram without tickets.", "They didn't pay for their hotel."], a: 1,
        ev: "We didn't buy tickets before we got on, because we didn't know the rule.",
        whyEn: "They didn't buy tickets before they got on the tram, because they didn't know the rule. So they paid a fine when the ticket inspector came.",
        why: "لم يشتريا التذاكر قبل ركوب الترام لأنهما لم يعرفا النظام، فدفعا غرامة حين جاء مفتش التذاكر.", errCat: "reading" },
      { tf: true, q: "The fine on the tram was cheap.", a: false,
        ev: "A ticket inspector came, and we paid a fine. It wasn't cheap!",
        whyEn: "False: Faisal writes 'It wasn't cheap!' about the fine.",
        why: "خطأ؛ يقول فيصل عن الغرامة It wasn't cheap! أي لم تكن رخيصة.", errCat: "reading" },
      { q: "Why did they get lost in the old town?", opts: ["The tram took them to the wrong stop.", "Faisal's phone had no battery.", "Turki didn't want to ask for help."], a: 1,
        ev: "After that, we got lost in the old town because my phone had no battery.",
        whyEn: "Faisal writes that they got lost because his phone had no battery.",
        why: "يذكر فيصل أنهما ضلّا الطريق لأن هاتفه نفد شحنه.", errCat: "reading" },
      { q: "What was the problem with the hotel?", opts: ["It wasn't like the photos.", "It didn't have any free rooms.", "It was closed for the night."], a: 0,
        ev: "When we finally found our hotel, it wasn't like the photos.",
        whyEn: "Faisal booked a big, modern room, but the real room wasn't big or modern, so the hotel wasn't like the photos.",
        why: "حجز فيصل غرفة كبيرة حديثة، لكن الغرفة الحقيقية لم تكن كذلك، فلم يكن الفندق كما في الصور.", errCat: "reading" },
      { tf: true, q: "On Saturday, the airline found Faisal's luggage.", a: true,
        ev: "But on Saturday, everything changed. The airline found my luggage, and it didn't rain all day!",
        whyEn: "True: on Saturday everything changed, and the airline found his luggage.",
        why: "صحيح؛ تغيّر كل شيء يوم السبت، ووجدت شركة الطيران أمتعته.", errCat: "reading" },
      { q: "In 'I didn't sleep at all', why does Faisal write 'sleep' and not 'slept'?", opts: ["Because 'sleep' is a regular verb", "Because he is talking about tonight", "Because after didn't, every verb goes back to its base form"], a: 2,
        ev: "The heater made a strange noise all night, so I didn't sleep at all.",
        whyEn: "After didn't, we always use the base verb, even with irregular verbs like sleep (slept): didn't sleep, not didn't slept.",
        why: "بعد didn't نستعمل الفعل المجرد دائمًا حتى مع الأفعال الشاذة مثل sleep (ماضيه slept): didn't sleep لا didn't slept.", errCat: "tense" }
    ]
  },

  /* ---------- المرحلة 5: الكتابة (4 جمل منفصلة على الأقل عن رحلة أو يوم لم يسر كما أردت) ---------- */
  writing: {
    taskEn: "Write at least 4 separate sentences about a trip or a day that went wrong. Use at least 3 negatives (didn't + base verb, or wasn't / weren't), join a positive and a negative with but in 1 sentence, and use 3 words from today's lesson.",
    task: "اكتب 4 جمل منفصلة على الأقل عن رحلة أو يوم لم يسر كما أردت، واستعمل 3 صيغ نفي على الأقل (didn't مع الفعل المجرد، أو wasn't / weren't)، واجمع الإثبات والنفي بـ but في جملة واحدة، واستعمل 3 كلمات من درس اليوم.",
    placeholder: "Last month, I … My flight wasn't … I didn't … , but …",
    checks: [
      { k: "sentences", tEn: "At least 4 separate sentences (end each with a period .)", t: "4 جمل منفصلة على الأقل (بنقطة في نهاية كل جملة)",
        ok: function(a){ return a.sentences >= 4; } },
      { k: "negatives", tEn: "At least 3 negatives: didn't + base verb, or wasn't / weren't", t: "3 صيغ نفي على الأقل: didn't مع الفعل المجرد، أو wasn't / weren't", ex: "I didn't sleep … · The room wasn't … · We weren't …",
        ok: function(a, text){ var s = String(text || '').replace(/[’‘‛ʼ`´]/g, "'"), n = 0, m;
          var notBase = /^(?:be|been|to|is|am|are|has|does|goes|was|were|went|lost|found|knew|thought|paid|slept|left|made|had|said|bought|ate|saw|took|came|got|did|gave|told|felt|wrote|sent|brought|began|became|spoke|met|flew|drove|chose|heard|spent|sat|stood|understood|kept|caught|taught|sold|held|built|lent|won|ran|fell|drank|wore|forgot|broke|meant)$/;
          var edBase = /^(?:need|feed|bleed|breed|speed|succeed|exceed|proceed|shed|shred|wed|heed|weed|seed|embed)$/;
          var re = /\b(?:didn't|did\s+not)\s+([a-z]+)/gi;
          while ((m = re.exec(s))) { var w = m[1].toLowerCase(); if (!notBase.test(w) && !(/ed$/.test(w) && !edBase.test(w))) n++; }
          n += (s.match(/\b(?:wasn't|weren't|was\s+not|were\s+not)\b/gi) || []).length;
          return n >= 3; } },
      { k: "but", tEn: "1 sentence that joins a positive and a negative with but", t: "جملة واحدة تجمع الإثبات والنفي بـ but", ex: "I booked a room, but it wasn't … · We didn't find a taxi, but we …",
        ok: function(a, text){ var s = String(text || '').replace(/[’‘‛ʼ`´]/g, "'");
          return s.split(/[.!?]+/).some(function(x){ return /\bbut\b/i.test(x) && /\b(?:didn't|wasn't|weren't|couldn't|did\s+not|was\s+not|were\s+not|could\s+not|never)\b/i.test(x); }); } },
      { k: "vocab", tEn: "At least 3 words/phrases from today's lesson", t: "3 كلمات أو عبارات من درس اليوم", ex: "flight · luggage · delayed · got lost · on time · booked · paid a fine",
        ok: function(a, text){ var s = String(text || '').replace(/[’‘‛ʼ`´]/g, "'");
          var words = [/\bflights?\b/i, /\bluggage\b/i, /\bdelay(?:s|ed|ing)?\b/i, /\b(?:get|gets|got|getting|gotten)\s+lost\b/i, /\bon\s+time\b/i, /\bbook(?:s|ed|ing)?\b/i, /\b(?:pay|pays|paid|paying)\s+(?:[a-z0-9-]+\s+){0,3}fines?\b/i];
          return words.filter(function(r){ return r.test(s); }).length >= 3; } }
    ],
    modelMarked: "Last month, I went to Jeddah for a job interview. My {flight} was {delayed} by two hours, so I <<s:didn't have>> time for dinner. I {booked|book} a room by the sea. It was nice, <<t:but>> the Wi-Fi <<s:didn't work>>. In the morning, I <<s:didn't find>> a taxi, so my cousin took me to the interview in his car. The interview <<c:wasn't>> easy, <<t:but>> I answered every question.",
    model: "Last month, I went to Jeddah for a job interview. My flight was delayed by two hours, so I didn't have time for dinner. I booked a room by the sea. It was nice, but the Wi-Fi didn't work. In the morning, I didn't find a taxi, so my cousin took me to the interview in his car. The interview wasn't easy, but I answered every question.",
    legendEn: "Light blue = didn't + base verb (didn't have, didn't work, didn't find) · Terracotta = wasn't · Dashed = but (joins a positive and a negative)",
    legendAr: "الأزرق الفاتح لـ didn't مع الفعل المجرد (didn't have وdidn't work وdidn't find)، والطوبي لـ wasn't، والإطار المنقّط لـ but التي تجمع الإثبات والنفي.",
    acceptExamples: [
      "Last summer, my family went to Istanbul. Our flight was not on time. We waited for our luggage for an hour, but it did not come. We did not like the hotel because it was not clean.",
      "Last week, I booked a train ticket to Dammam. The train was delayed, so I didn’t arrive on time. Then I got lost near the station, but I wasn’t worried. My friend found me, and we didn’t miss the start of the match.",
      "Our flight to Taif wasn't on time! We got lost on the way to the hotel, and we didn't have a map. I booked a room with two beds, but there was only one bed. We weren't happy, but the hotel changed our room.",
      "Yesterday, I went to the airport. My flight wasn't on time. I didn't eat lunch. The hotel was nice. But the room wasn't ready. I booked it last week."
    ]
  },

  askChips: [
    "لماذا نقول didn't go ولا نقول didn't went؟",
    "متى أستعمل wasn't بدل didn't؟",
    "كيف أجمع الإثبات والنفي في جملة واحدة بـ but؟",
    "هل تتغير didn't مع he وshe وthey؟"
  ],

  /* ---------- المرحلة 6: الاختبار القصير (10 أسئلة · النجاح من 80%) ---------- */
  quiz: [
    { s: "The guests in Room 12 ___ well last night because the people next door made a lot of noise.", opts: ["didn't sleep", "didn't slept", "don't sleep"], a: 0, tag: "Grammar · قواعد",
      whyEn: "'last night' is past, so we use didn't, not don't. After didn't comes the base verb: sleep, not slept.",
      why: "last night زمن ماضٍ، فننفي بـ didn't لا don't، ويأتي بعدها الفعل المجرد sleep لا slept.", errCat: "tense" },
    { s: "Which sentence is correct?", opts: ["We didn't knew the way to the train station.", "We didn't know the way to the train station.", "We wasn't know the way to the train station."], a: 1, tag: "Grammar · قواعد",
      whyEn: "After didn't, use the base verb: know, not knew. 'wasn't know' is also wrong, because we never put be before a base verb.",
      why: "بعد didn't يأتي الفعل المجرد know لا knew، وwasn't know خطأ أيضًا، لأننا لا نضع be قبل الفعل المجرد.", errCat: "tense" },
    { s: "The seat on the train ___ comfortable, so I moved to another one.", opts: ["didn't", "weren't", "wasn't"], a: 2, tag: "Grammar · قواعد",
      whyEn: "'comfortable' is an adjective, so we use be, not didn't. 'The seat' is one thing (it), so the negative is wasn't.",
      why: "comfortable صفة، فننفي بـ be لا بـ didn't، والفاعل The seat مفرد (it)، فنقول wasn't.", errCat: "be_verb" },
    { s: "My colleagues ___ at the meeting yesterday because they were on a business trip.", opts: ["weren't", "wasn't", "didn't"], a: 0, tag: "Grammar · قواعد",
      whyEn: "'at the meeting' is a place, so we use be, not didn't. 'My colleagues' is plural (they), so we say weren't.",
      why: "at the meeting مكان، فننفي بـ be لا بـ didn't، والفاعل My colleagues جمع (they)، فنقول weren't.", errCat: "agreement" },
    { s: "Which sentence is written correctly?", opts: ["I was leave my phone charger in the hotel room.", "I leaved my phone charger in the hotel room.", "I left my phone charger in the hotel room."], a: 2, tag: "Grammar · قواعد",
      whyEn: "A positive past action uses the past form of the verb. leave is irregular, so its past is left (not 'leaved'), and we never put was before a verb.",
      why: "الحدث المثبت في الماضي نكتبه بصيغة الماضي، وleave فعل شاذ ماضيه left لا leaved، ولا نضع was قبل الفعل أبدًا.", errCat: "be_verb" },
    { s: "I found my car keys, but I ___ my wallet.", opts: ["didn't found", "didn't find", "not find"], a: 1, tag: "Grammar · قواعد",
      whyEn: "The part after but is negative: didn't + base verb (find). 'didn't found' has the past form after didn't, and 'not find' has no didn't.",
      why: "الجزء الذي بعد but منفي: didn't مع الفعل المجرد find، أما didn't found ففيها صيغة الماضي بعد didn't، وnot find تنقصها didn't.", errCat: "tense" },
    { s: "My suitcase arrived late, but the airline ___ it.", opts: ["didn't lose", "didn't lost", "wasn't lose"], a: 0, tag: "Grammar · قواعد",
      whyEn: "After didn't, every verb takes the base form, even irregular verbs: didn't lose (not 'didn't lost'). We never put wasn't before a base verb.",
      why: "بعد didn't يأتي الفعل المجرد حتى مع الأفعال الشاذة: didn't lose لا didn't lost، ولا نضع wasn't قبل الفعل المجرد.", errCat: "tense" },
    { s: "Our train didn't leave at seven; it left at half past nine. It was ___.", opts: ["booked", "delayed", "on time"], a: 1, tag: "Vocabulary · مفردات",
      whyEn: "'delayed' means later than planned because of a problem. The timetable said seven, but the train left at half past nine.",
      why: "delayed تعني متأخرًا عن موعده بسبب مشكلة، فقد كان موعد القطار السابعة لكنه غادر في التاسعة والنصف.", errCat: "vocab" },
    { s: "I thought the hotel was full, but it had one free room, so I ___ it for two nights.", opts: ["delayed", "lost", "booked"], a: 2, tag: "Vocabulary · مفردات",
      whyEn: "'book' a room means ask for it and keep it for your stay. There was one free room, so the writer booked it (book → booked).",
      why: "book a room تعني أن تحجز الغرفة لإقامتك، وكانت في الفندق غرفة واحدة شاغرة فحجزها الكاتب، وماضي book هو booked.", errCat: "vocab" },
    { s: "The driver didn't stop at the red light, so he ___.", opts: ["made a fine", "paid a fine", "did a fine"], a: 1, tag: "Legal Track · المسار القانوني",
      whyEn: "The collocation is 'pay a fine' (past: paid a fine); we don't say 'make a fine' or 'do a fine'. Not stopping at a red light breaks the traffic rules, so the driver pays money as a punishment.",
      why: "المتلازمة الصحيحة pay a fine وماضيها paid a fine، ولا نقول make a fine ولا do a fine، وتجاوز الإشارة الحمراء مخالفة لنظام المرور فيدفع السائق غرامة.", errCat: "vocab" }
  ]
};
})();
