/* ===== الوحدة 1 · الدرس 3: How Often Do You Cook? — Adverbs of Frequency & Word Order (6 مراحل · درس استماع) ===== */
(function(){
var FREQ_ROWS = [
  ["always", 100, "#2C4A6E"], ["usually", 90, "#2C4A6E"], ["often", 70, "#2C4A6E"],
  ["sometimes", 50, "#5A6B7C"], ["occasionally", 30, "#5A6B7C"],
  ["rarely", 10, "#B94A33"], ["never", 0, "#B94A33"]
];
var FREQ_SVG = '<svg class="tl" viewBox="0 0 340 210" role="img" aria-label="Frequency scale from 100% to 0%: always, usually, often, sometimes, occasionally, rarely, never" direction="ltr">' +
  '<text x="170" y="20" text-anchor="middle" font-family="Quicksand, sans-serif" font-weight="700" font-size="13" fill="#2C4A6E">HOW OFTEN? · 100% → 0%</text>' +
  FREQ_ROWS.map(function(r, i){
    var y = 34 + i * 25, w = Math.round(r[1] * 1.8), inside = w > 40;
    return '<text x="14" y="' + (y + 13) + '" font-family="Quicksand, sans-serif" font-weight="700" font-size="12.5" fill="#1E2A33">' + r[0] + '</text>' +
      '<rect x="112" y="' + y + '" width="180" height="16" rx="8" fill="#EEF1F4" stroke="#D5DCE3" stroke-width="1"/>' +
      (w ? '<rect x="112" y="' + y + '" width="' + w + '" height="16" rx="8" fill="' + r[2] + '"/>' : '') +
      '<text x="' + (inside ? 112 + w - 7 : 112 + w + 7) + '" y="' + (y + 12) + '" text-anchor="' + (inside ? 'end' : 'start') + '" font-family="Quicksand, sans-serif" font-weight="700" font-size="10.5" fill="' + (inside ? '#FFFFFF' : '#1E2A33') + '">' + r[1] + '%</text>';
  }).join('') +
  '</svg>';

LESSONS.u1l3 = {
  id: "u1l3",
  unit: 1,
  n: 3,
  mode: "listening",
  en: "How Often Do You Cook?",
  ar: "عادات الطبخ والأكل: كلمات التكرار وموقعها في الجملة",
  subEn: "Adverbs of Frequency & Word Order",
  canDoEn: "I can say how often I cook, eat out and buy takeaway, with frequency words in the right place.",
  canDoAr: "أقدر أن أقول كم مرة أطبخ وآكل خارج البيت وأشتري الوجبات الجاهزة، وأضع كلمات التكرار في موضعها الصحيح.",
  descEn: "I can use always, usually, often, sometimes, occasionally, rarely and never before the main verb and after am / is / are, and ask How often…? and Do you ever…?",
  descAr: "أقدر أن أستعمل كلمات التكرار من always إلى never قبل الفعل الأساسي وبعد am / is / are، وأسأل بـ How often…? وDo you ever…?، مع مقطع استماع حقيقي يتحدث فيه متحدثان عن عادات الطبخ والأكل.",
  goals: [
    { en: "I can say how often I do things with always, usually, often, sometimes, occasionally, rarely and never.", ar: "أقدر أن أعبّر عن تكرار أفعالي بكلمات التكرار السبع من always إلى never." },
    { en: "I can put a frequency word before the main verb (I often cook) and after am / is / are (I'm never late).", ar: "أقدر أن أضع كلمة التكرار قبل الفعل الأساسي (I often cook) وبعد am / is / are (I'm never late)." },
    { en: "I can ask 'How often do you…?' and 'Do you ever…?' and put time expressions like 'once a week' at the end.", ar: "أقدر أن أسأل بـ How often do you…? وDo you ever…?، وأضع عبارات الزمن مثل once a week في آخر الجملة." },
    { en: "I can understand a real conversation about eating habits, and write at least 4 sentences about my own habits.", ar: "أقدر أن أفهم حوارًا حقيقيًا عن عادات الأكل، وأكتب 4 جمل على الأقل عن عاداتي." }
  ],
  intro: {
    recall: {
      dEn: "Review the words and the legal phrase of Lesson 2 by typing them from memory.",
      d: "استرجع كلمات الدرس الثاني وعبارته القانونية كتابةً من ذاكرتك بلوحة المفاتيح.",
      items: [
        ["review", "5 active recall items from Unit 1 · Lesson 2", "5 عناصر استرجاع نشط من الدرس الثاني في الوحدة الأولى"],
        ["pen", "Type from memory to lock in spelling (double letters, two-word verbs)", "كتابة من الذاكرة لتثبيت الإملاء (الحروف المضاعفة والأفعال المكوّنة من كلمتين)"],
        ["spark", "Includes the legal phrase of Lesson 2", "تشمل العبارة القانونية من الدرس الثاني"]
      ]
    },
    vocab: {
      dEn: "6 phrases about eating and cooking habits plus today's legal phrase ('break the law'), with randomized matching rounds.",
      d: "6 عبارات عن عادات الأكل والطبخ مع العبارة القانونية اليومية (break the law)، ولعبة توصيل عشوائية في كل جولة.",
      items: [
        ["cards", "7 Flashcards (6 phrases + 'break the law') with Oxford links, and human audio for 5 of them", "7 بطاقات (6 عبارات + break the law) مع رابط Oxford، ونطق بشري لخمس منها"],
        ["review", "Randomized 2-round matching game", "لعبة توصيل عشوائية من جولتين"],
        ["quiz", "8 context sentences: choose the right phrase", "8 جمل سياقية: اختر العبارة المناسبة"]
      ]
    },
    grammar: {
      dEn: "Why are 'I go always to the gym' and 'I always am late' wrong? Learn where frequency words go, and how to ask 'How often…?'.",
      d: "لماذا تُعد جملة I go always to the gym وجملة I always am late خاطئتين؟ تعلّم موضع كلمات التكرار، والسؤال بـ How often.",
      items: [
        ["book", "6 grammar cards (English first, Arabic on tap)", "6 بطاقات شرح (الإنجليزي أولًا، والعربي عند الطلب)"],
        ["quiz", "16 guided exercises (4 of each type), one per screen", "16 تمرينًا موجّهًا (4 من كل نمط)، سؤال في كل شاشة"]
      ]
    },
    reading: {
      dEn: "3-Stage Listening (real recording): Hana from the UK and Daniel from Chile ask each other how often they cook, eat out and buy takeaway.",
      d: "استماع على 3 مراحل لتسجيل حقيقي: هانا من بريطانيا ودانيال من تشيلي يسأل كل منهما الآخر كم مرة يطبخ ويأكل خارج البيت ويشتري الوجبات الجاهزة.",
      items: [
        ["speaker", "Stage 1: Listen for the main idea without reading the transcript", "المرحلة 1: استماع أول للفكرة العامة بدون النص المكتوب"],
        ["quiz", "Stage 2: Listen again and answer 8 detail questions", "المرحلة 2: استماع ثانٍ للإجابة عن 8 أسئلة تفاصيل"],
        ["mail", "Stage 3: Transcript on the source page & Shadowing Timer", "المرحلة 3: النص المكتوب في صفحة المصدر لمراجعة ما فات، مع الترديد (Shadowing)"]
      ]
    },
    writing: {
      dEn: "Write at least 4 separate sentences about your own eating and cooking habits, with frequency words in the right place.",
      d: "اكتب 4 جمل منفصلة على الأقل عن عاداتك في الأكل والطبخ، وضع كلمات التكرار في موضعها الصحيح.",
      items: [
        ["pen", "At least 4 separate sentences with periods (.)", "4 جمل منفصلة على الأقل تنتهي كل منها بنقطة"],
        ["spark", "Instant check: 3 frequency words, correct word order, and 2 lesson phrases", "فحص فوري: ثلاث كلمات تكرار، وترتيب صحيح، وعبارتان من الدرس"]
      ]
    },
    quiz: {
      dEn: "10 shuffled questions on frequency words, word order and vocabulary (80% to pass), plus Lesson Error Analysis.",
      d: "اختبار قصير من 10 أسئلة في كلمات التكرار وترتيب الجملة ومفردات الدرس (النجاح من 80%)، يليه تحليل شامل لأخطاء الدرس.",
      items: [
        ["quiz", "10 questions (80% passing score)", "10 أسئلة متنوعة (النجاح من 80%)"],
        ["review", "Structured Error Analysis by category", "تحليل أخطاء الدرس وأسبابها حسب الفئة"]
      ]
    }
  },

  recall: [
    {
      id: "rc-0",
      promptAr: "صفة من الدرس الثاني بمعنى «عادي، مثل أغلب الأيام»",
      promptEn: "Adjective from Lesson 2: normal, like most other days",
      sentPre: "On a",
      sentPost: "Friday, my whole family has lunch at my grandmother's house.",
      ans: ["typical"],
      hint: "t _ _ _ _ _ l (7 letters)",
      spellNoteEn: "Spelled t-y-p-i-c-a-l: the first 'i' sound is written with y.",
      spellNote: "تُكتب t-y-p-i-c-a-l، وصوت الكسرة الأول يُكتب بحرف y.",
      errCat: "spelling"
    },
    {
      id: "rc-1",
      promptAr: "اسم من الدرس الثاني: مكان في المدرسة أو الجامعة أو العمل يشتري فيه الناس وجباتهم ويأكلونها",
      promptEn: "Noun from Lesson 2: a place in a school, university or office where people buy and eat meals",
      sentPre: "The food in our university",
      sentPost: "is cheap, so many students eat lunch there.",
      ans: ["canteen"],
      hint: "c _ _ _ _ _ n (7 letters)",
      spellNoteEn: "Spelled c-a-n-t-e-e-n, with a double 'e'.",
      spellNote: "تُكتب c-a-n-t-e-e-n بحرفي e متتاليين.",
      errCat: "spelling"
    },
    {
      id: "rc-2",
      promptAr: "فعل من كلمتين من الدرس الثاني: يستيقظ من النوم",
      promptEn: "Two-word verb from Lesson 2: stop sleeping and open your eyes",
      sentPre: "On match days, I always",
      sentPost: "at six and eat a big breakfast.",
      ans: ["wake up"],
      hint: "w _ _ _ _ p (6 letters, 2 words)",
      spellNoteEn: "Two separate words: wake + up. With he / she: he wakes up.",
      spellNote: "كلمتان منفصلتان: wake up، ومع he وshe تصير wakes up.",
      errCat: "spelling"
    },
    {
      id: "rc-3",
      promptAr: "فعل من الدرس الثاني بمعنى «يستمر أو يدوم» مدة من الزمن",
      promptEn: "Verb from Lesson 2: continue for a period of time",
      sentPre: "Our cooking classes usually",
      sentPost: "two hours, from five to seven.",
      ans: ["last"],
      hint: "l _ _ t (4 letters)",
      spellNoteEn: "Spelled l-a-s-t. With he / she / it, add -s: each class lasts.",
      spellNote: "تُكتب l-a-s-t، ومع المفرد الغائب نضيف s فتصير lasts.",
      errCat: "spelling"
    },
    {
      id: "rc-4",
      promptAr: "العبارة القانونية من الدرس الثاني: ساعات العمل (كلمتان)",
      promptEn: "Legal phrase from Lesson 2: the hours when people are at their job (two words)",
      sentPre: "The law in Saudi Arabia sets the normal",
      sentPost: "at eight hours a day.",
      ans: ["working hours"],
      isLegal: true,
      hint: "w _ _ _ _ _ _ _ _ _ _ s (12 letters, 2 words)",
      spellNoteEn: "Two words: working (work + ing) + hours (the 'h' is silent).",
      spellNote: "كلمتان: working ثم hours، وحرف h في hours لا يُنطق.",
      errCat: "vocab"
    }
  ],

  legalPhrase: {
    en: "break the law",
    headword: "break the law",
    pos: "legal phrase",
    ar: "يخالف القانون / يخرق النظام",
    say: "بْرَيْك ذَ لُو",
    ex: "My uncle is a careful driver, and he never breaks the law.",
    exAr: "عمي سائق حذر، ولا يخالف القانون أبدًا.",
    tipEn: "Legal collocation: break the law (opposite: obey the law). With he / she: he breaks the law. A person who breaks the law may have to pay a fine.",
    tip: "متلازمة قانونية: break the law يخالف القانون، وعكسها obey the law يلتزم به، ومن يخالف القانون قد يدفع غرامة (fine).",
    legal: true,
    oxfordSlug: "law",
    wikiFiles: ["En-us-break.ogg", "En-us-the-unstressed.ogg", "En-us-law.ogg"],
    wikiCredit: "File:En-us-break.ogg, File:En-us-the-unstressed.ogg & File:En-us-law.ogg · Wikimedia Commons"
  },

  vocab: [
    { en: "eat out", pos: "phrasal verb", ar: "يأكل خارج البيت (في مطعم)", say: "إِيت آوْت",
      ex: "My family usually eats out on Friday nights.", exAr: "عادةً تأكل عائلتي خارج البيت ليلة الجمعة.",
      tipEn: "Phrasal verb: eat out = have a meal in a restaurant, not at home. The opposite is 'eat at home'.",
      tip: "فعل مركّب معناه أن تأكل في مطعم لا في البيت، وعكسه eat at home.",
      oxfordSlug: "eat-out",
      wikiFile: "En-au-eat out.ogg",
      wikiCredit: "File:En-au-eat out.ogg · Wikimedia Commons (Australian English)" },
    { en: "takeaway", pos: "noun", ar: "وجبة جاهزة تُشترى من مطعم وتؤكل في مكان آخر", say: "تَيْكَوَاي",
      ex: "On busy days, my brother orders a takeaway for dinner.", exAr: "في الأيام المزدحمة يطلب أخي وجبة جاهزة للعشاء.",
      tipEn: "British English: a takeaway (the meal, or the restaurant that sells it). American English: takeout. Say get / order / buy a takeaway.",
      tip: "في الإنجليزية البريطانية takeaway (الوجبة أو المطعم الذي يبيعها)، وفي الأمريكية takeout، ونقول get / order / buy a takeaway.",
      oxfordSlug: "takeaway",
      wikiFile: "En-au-takeaway.ogg",
      wikiCredit: "File:En-au-takeaway.ogg · Wikimedia Commons (Australian English)" },
    { en: "on the way home", pos: "phrase", ar: "في الطريق إلى البيت", say: "أُون ذَ وَاي هُوم",
      ex: "My father sometimes stops at a juice shop on the way home.", exAr: "أحيانًا يتوقف أبي عند محل عصير في طريقه إلى البيت.",
      tipEn: "No 'to' before home: on the way home (not: on the way to home). Compare: on the way to work. You can also say on my way home.",
      tip: "لا نضع to قبل home: نقول on the way home، ونقول on the way to work، ويجوز on my way home.",
      oxfordSlug: "way_1",
      wikiCredit: "No Wikimedia recording yet · use Oxford ↗ for pronunciation" },
    { en: "invite", pos: "verb", ar: "يدعو (شخصًا إلى بيته أو إلى مناسبة)", say: "إِنْفَايْت",
      ex: "My aunt often invites us over for lunch.", exAr: "كثيرًا ما تدعونا عمتي إلى بيتها على الغداء.",
      tipEn: "invite somebody over = ask somebody to come to your home: I invite my friends over. Also: invite somebody to a wedding / for dinner.",
      tip: "invite someone over تعني أن تدعو شخصًا إلى بيتك: I invite my friends over، ونقول invite someone to a wedding / for dinner.",
      oxfordSlug: "invite",
      wikiFile: "LL-Q1860 (eng)-Vealhurl-invite (verb).wav",
      wikiCredit: "File:LL-Q1860 (eng)-Vealhurl-invite (verb).wav · Vealhurl (Lingua Libre) / Wikimedia Commons" },
    { en: "have people over", pos: "phrasal verb", ar: "يستضيف ناسًا في بيته", say: "هَاف بِيبَل أُوفَر",
      ex: "My parents have people over for dinner every Thursday.", exAr: "يستضيف والداي ضيوفًا على العشاء كل خميس.",
      tipEn: "have people / friends over (for dinner) = have guests in your home. 'over' comes after the people: We have friends over. British English also says 'have friends round'.",
      tip: "have people over تعني أن تستضيف ناسًا في بيتك، وتأتي over بعد الأشخاص: We have friends over.",
      oxfordSlug: "have_1",
      wikiCredit: "No Wikimedia recording yet · use Oxford ↗ for pronunciation" },
    { en: "roommate", pos: "noun", ar: "رفيق السكن (من يشاركك الغرفة أو الشقة)", say: "رُوم مَيْت",
      ex: "My roommate is from Abha, and he makes great coffee.", exAr: "رفيقي في السكن من أبها، ويُعدّ قهوة رائعة.",
      tipEn: "A roommate shares a room or a flat with you. British spelling: room-mate (British English also says flatmate). Plural: roommates.",
      tip: "roommate من يشاركك الغرفة أو الشقة، وتُكتب في البريطانية room-mate، ويقولون أيضًا flatmate.",
      oxfordSlug: "room-mate",
      wikiFile: "En-au-roommate.ogg",
      wikiCredit: "File:En-au-roommate.ogg · Wikimedia Commons (Australian English)" }
  ],

  vocabGaps: [
    { s: "My parents are tired after work, so we sometimes ___ at a small burger place near our house.", opts: ["invite", "eat out", "break the law"], a: 1,
      whyEn: "'eat out' means have a meal in a restaurant instead of at home, which fits 'at a small burger place'.",
      why: "eat out تعني الأكل في مطعم بدل البيت، وهذا يناسب «في مطعم برغر صغير».", errCat: "vocab" },
    { s: "Nobody wants to cook tonight, so let's get a ___ from the Indian restaurant.", opts: ["roommate", "canteen", "takeaway"], a: 2,
      whyEn: "A 'takeaway' is a cooked meal that you buy from a restaurant and eat at home. A canteen is a place, and a roommate is a person.",
      why: "takeaway وجبة مطبوخة تشتريها من مطعم وتأكلها في البيت، أما canteen فمكان، وroommate شخص.", errCat: "vocab" },
    { s: "Sami often buys bread at the bakery ___ from football practice.", opts: ["on the way home", "takeaway", "roommate"], a: 0,
      whyEn: "'on the way home' means during the trip back to your house, so he stops at the bakery on that trip.",
      why: "on the way home تعني «في الطريق إلى البيت»، فهو يمر بالمخبز في طريق عودته.", errCat: "vocab" },
    { s: "I share a flat with Faisal near the university; he is my ___, and we often cook together.", opts: ["takeaway", "roommate", "canteen"], a: 1,
      whyEn: "A 'roommate' is a person who lives in the same room or flat as you.",
      why: "roommate هو من يسكن معك في الغرفة أو الشقة نفسها.", errCat: "vocab" },
    { s: "My sister sometimes ___ her friends over to watch a cooking show.", opts: ["invites", "eats out", "breaks"], a: 0,
      whyEn: "'invite someone over' means ask someone to come to your home, so it fits 'her friends over'.",
      why: "invite someone over تعني أن تدعو شخصًا إلى بيتك، فتناسب her friends over.", errCat: "vocab" },
    { s: "We love guests, so we often have people ___ for dinner at the weekend.", opts: ["over", "out", "away"], a: 0,
      whyEn: "'have people over' means have guests in your home. 'Out' belongs to 'eat out', and 'away' to 'takeaway'.",
      why: "have people over تعني أن تستضيف ناسًا في بيتك، أما out فمع eat out، وaway في takeaway.", errCat: "vocab" },
    { s: "Driving fast near a school is dangerous, and drivers who do it ___.", opts: ["eat out", "have people over", "break the law"], a: 2,
      whyEn: "'break the law' means do something that the law does not allow, like driving fast near a school.",
      why: "break the law تعني أن تفعل ما يمنعه القانون، كالسرعة قرب المدرسة.", errCat: "vocab" },
    { s: "I don't like eating in restaurants, so I often ___ and eat it on my sofa.", opts: ["eat out", "get a takeaway", "have people over"], a: 1,
      whyEn: "You get a takeaway from a restaurant and eat it at home. 'Eat out' means you eat at the restaurant, so it doesn't fit 'on my sofa'.",
      why: "تشتري الوجبة الجاهزة من المطعم وتأكلها في البيت، أما eat out فتعني الأكل في المطعم نفسه، فلا تناسب «على الأريكة».", errCat: "vocab" }
  ],

  gCards: [
    {
      tEn: "The Frequency Scale: always → never",
      t: "سلّم التكرار: من always إلى never",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">How Often? From 100% to 0%</span><small>كلمات التكرار من الدائم إلى المعدوم</small></h2>' +
        '<p class="en-p" dir="ltr">In Lesson 1 you met <b>usually</b> before the main verb. Today you learn the whole family: seven frequency words that answer the question <b>How often?</b></p>' +
        FREQ_SVG +
        '<div class="xbox"><span class="xtag s" dir="ltr">Examples · أمثلة</span><p class="xen">I always drink tea after lunch. · My sister rarely eats meat.</p></div>' +
        '<div class="tip" dir="ltr"><p><b>Remember · تذكّر:</b> <b>never</b> means not at any time, so it is already negative. <b>occasionally</b> means sometimes, but not often.</p></div>',
      arHtml:
        '<p>تجيب كلمات التكرار عن سؤال <b>How often?</b> أي «كم مرة؟»، وهي من الأكثر إلى الأقل:</p>' +
        '<p><bdi class="en">always</bdi> دائمًا، <bdi class="en">usually</bdi> عادةً، <bdi class="en">often</bdi> كثيرًا، <bdi class="en">sometimes</bdi> أحيانًا، <bdi class="en">occasionally</bdi> من حين لآخر، <bdi class="en">rarely</bdi> نادرًا، <bdi class="en">never</bdi> أبدًا.</p>' +
        '<p>وكلمة <bdi class="en">never</bdi> منفية بنفسها، فلا تحتاج إلى <bdi class="en">don\'t</bdi>.</p>'
    },
    {
      tEn: "Rule 1: Before the Main Verb",
      t: "القاعدة الأولى: كلمة التكرار قبل الفعل الأساسي",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Rule 1: Before the Main Verb</span><small>كلمة التكرار بين الفاعل والفعل</small></h2>' +
        '<div class="formula">Subject + <b>frequency word</b> + main verb</div>' +
        '<p class="en-p" dir="ltr">In Arabic, «دائمًا» can come before or after the verb. In English, the frequency word goes <b>between the subject and the main verb</b>. With he / she / it, the verb still needs <b>-s</b>:</p>' +
        '<div class="xbox"><div class="pairs">' +
          '<span class="yes">We often buy fruit at the market.</span>' +
          '<span class="no">We buy often fruit at the market.</span>' +
          '<span class="yes">My uncle usually grills fish on Thursdays.</span>' +
          '<span class="no">My uncle usually grill fish on Thursdays.</span>' +
        '</div></div>' +
        '<div class="tip" dir="ltr"><p><b>Watch out · انتبه:</b> <b>always</b> and <b>never</b> do not go before the subject:</p><div class="pairs"><span class="yes">I always eat dates in Ramadan.</span><span class="no">Always I eat dates in Ramadan.</span></div></div>',
      arHtml:
        '<p>في العربية نقول «أشتري دائمًا» و«دائمًا أشتري»، أما في الإنجليزية فكلمة التكرار تأتي بين الفاعل والفعل الأساسي: <bdi class="en">We often buy…</bdi>، ولا تأتي بعد الفعل.</p>' +
        '<p>ومع <bdi class="en">he / she / it</bdi> يبقى حرف <bdi class="en">s</bdi> في الفعل: <bdi class="en">My uncle usually grills…</bdi>.</p>' +
        '<p>ولا تبدأ الجملة الخبرية بـ <bdi class="en">always</bdi> أو <bdi class="en">never</bdi>. أما <bdi class="en">sometimes</bdi> فيجوز أن تبدأ بها: <bdi class="en">Sometimes we eat out.</bdi></p>'
    },
    {
      tEn: "Rule 2: After am / is / are, and Negatives",
      t: "القاعدة الثانية: بعد am / is / are، ومع النفي",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Rule 2: After am / is / are</span><small>بعد فعل الكون، ومع النفي</small></h2>' +
        '<p class="en-p" dir="ltr">With the verb <b>be</b> (am / is / are), the frequency word comes <b>after</b> the verb:</p>' +
        '<div class="xbox"><div class="pairs">' +
          '<span class="yes">The canteen is usually quiet at ten.</span>' +
          '<span class="no">The canteen usually is quiet at ten.</span>' +
          '<span class="yes">I\'m rarely at home on Thursday nights.</span>' +
        '</div></div>' +
        '<div class="tbl"><table><thead><tr><th>Negative · النفي</th><th>Example · مثال</th></tr></thead><tbody>' +
          '<tr><td>don\'t / doesn\'t + <span class="hs">usually</span> + verb</td><td>I don\'t usually drink coffee at night.</td></tr>' +
          '<tr><td><span class="hc">never</span> + verb (no don\'t)</td><td>My father never adds sugar to his tea.</td></tr>' +
          '<tr><td>isn\'t / aren\'t + <span class="hs">usually</span></td><td>The shops aren\'t usually open before nine.</td></tr>' +
        '</tbody></table></div>',
      arHtml:
        '<p>مع فعل الكون <bdi class="en">am / is / are</bdi> تأتي كلمة التكرار <b>بعده</b> لا قبله: <bdi class="en">The canteen is usually quiet</bdi>.</p>' +
        '<p>وفي النفي تأتي بعد <bdi class="en">don\'t / doesn\'t</bdi> وقبل الفعل: <bdi class="en">I don\'t usually drink…</bdi>.</p>' +
        '<p>أما <bdi class="en">never</bdi> فمنفية بنفسها، فلا نجمع بينها وبين <bdi class="en">don\'t</bdi>.</p>'
    },
    {
      tEn: "Questions: How often…? / Do you ever…?",
      t: "السؤال عن التكرار وعبارات الزمن",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Questions & Time Expressions</span><small>السؤال بـ How often وبـ ever، وعبارات الزمن</small></h2>' +
        '<div class="tbl"><table><thead><tr><th>Question · السؤال</th><th>Answer · الجواب</th></tr></thead><tbody>' +
          '<tr><td><span class="hs">How often do</span> you go shopping?</td><td>Twice a week.</td></tr>' +
          '<tr><td><span class="hs">How often does</span> your brother swim?</td><td>He swims every day.</td></tr>' +
          '<tr><td><span class="hs">Do</span> you <span class="hc">ever</span> cook fish?</td><td>Yes, sometimes. / No, never.</td></tr>' +
        '</tbody></table></div>' +
        '<p class="en-p" dir="ltr"><b>ever</b> means at any time, and we use it in questions. Time expressions usually go at the <b>end</b> of the sentence:</p>' +
        '<ul class="vlist"><li>every day</li><li>once a week</li><li>twice a month</li><li>three times a year</li><li>at the weekend</li></ul>' +
        '<div class="xbox"><span class="xtag c" dir="ltr">At the end · في آخر الجملة</span><p class="xen">My cousins play tennis three times a week.</p></div>',
      arHtml:
        '<p>نسأل عن التكرار بـ <bdi class="en">How often do / does…?</bdi>، أو بـ <bdi class="en">Do you ever…?</bdi> أي «هل يحدث أن…؟». ولا بد من <bdi class="en">do / does</bdi> قبل الفاعل.</p>' +
        '<p>وعبارات الزمن مثل <bdi class="en">every day</bdi> و<bdi class="en">once a week</bdi> و<bdi class="en">at the weekend</bdi> تأتي عادةً في آخر الجملة.</p>'
    },
    {
      tEn: "Common Arab Mistakes",
      t: "أخطاء العرب الشائعة",
      bilingual: true,
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Common Arab Mistakes</span><small>أخطاء يقع فيها كثير من العرب</small></h2>' +
        '<ul class="mist">' +
          '<li><span class="no">I go always to the gym after work.</span><span class="yes">I always go to the gym after work.</span><p class="en-m" dir="ltr">Put the frequency word <b>before</b> the main verb, not after it.</p><p>نقول في العربية «أذهب دائمًا»، أما في الإنجليزية فكلمة التكرار قبل الفعل: <bdi class="en">I always go</bdi>.</p></li>' +
          '<li><span class="no">Omar is usually pay with his phone.</span><span class="yes">Omar usually pays with his phone.</span><p class="en-m" dir="ltr">Do not put <b>am / is / are</b> before a main verb. With he / she, the main verb takes <b>-s</b>.</p><p>لا نضع <bdi class="en">am / is / are</bdi> قبل الفعل الأساسي، ومع <bdi class="en">he / she</bdi> يأخذ الفعل حرف <bdi class="en">s</bdi>: <bdi class="en">Omar usually pays</bdi>.</p></li>' +
          '<li><span class="no">I don\'t never eat sweets at night.</span><span class="yes">I never eat sweets at night.</span><p class="en-m" dir="ltr"><b>never</b> is already negative. Do not use it with <b>don\'t</b>.</p><p>نقول في العربية «لا آكل أبدًا» فنجمع بين «لا» و«أبدًا»، أما في الإنجليزية فـ <bdi class="en">never</bdi> تكفي وحدها.</p></li>' +
          '<li><span class="no">How often your sister cooks?</span><span class="yes">How often does your sister cook?</span><p class="en-m" dir="ltr">Questions need <b>do / does</b> before the subject, and after <b>does</b> the verb has no -s.</p><p>السؤال في المضارع البسيط يحتاج <bdi class="en">do / does</bdi> قبل الفاعل، ولا يأخذ الفعل بعد <bdi class="en">does</bdi> حرف <bdi class="en">s</bdi>.</p></li>' +
        '</ul>'
    },
    {
      tEn: "Summary",
      t: "الخلاصة",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Quick Summary</span><small>الخلاصة</small></h2>' +
        '<div class="sumc" dir="ltr"><h3>In Two Lines · في سطرين</h3>' +
          '<p><b>Position · الموقع</b><span>before the main verb (I often cook) · after am / is / are (I\'m never late)</span></p>' +
          '<p><b>Questions & time · السؤال والزمن</b><span>How often do you…? · Do you ever…? · time expressions at the end (once a week)</span></p>' +
        '</div>' +
        '<p class="en-p" dir="ltr">Now let\'s practice: 16 guided exercises on frequency words and word order.</p>',
      arHtml:
        '<p><b>الموقع:</b> كلمة التكرار قبل الفعل الأساسي، وبعد <bdi class="en">am / is / are</bdi>، ولا تجتمع <bdi class="en">never</bdi> مع <bdi class="en">don\'t</bdi>.</p>' +
        '<p><b>السؤال والزمن:</b> <bdi class="en">How often do you…?</bdi> و<bdi class="en">Do you ever…?</bdi>، وعبارات الزمن في آخر الجملة.</p>'
    }
  ],

  gA: [
    { s: "It's strange, but my brother ___ chocolate.", opts: ["eats never", "never eats"], a: 1,
      whyEn: "A frequency word goes before the main verb, so we say 'never eats', not 'eats never'.",
      why: "كلمة التكرار تأتي قبل الفعل الأساسي: never eats، ولا تأتي بعده.", errCat: "word_order" },
    { s: "The bus to the stadium ___ late on match days.", opts: ["is often", "often is"], a: 0,
      whyEn: "With am / is / are, the frequency word comes after the verb: 'is often late'.",
      why: "مع am / is / are تأتي كلمة التكرار بعد الفعل: is often late.", errCat: "word_order" },
    { s: "I ___ cola because it's bad for my teeth.", opts: ["don't never drink", "never drink"], a: 1,
      whyEn: "'never' is already negative, so adding 'don't' makes a double negative.",
      why: "never منفية بنفسها، فإضافة don't تجمع نفيين في جملة واحدة.", errCat: "word_order" },
    { s: "___ you ever buy snacks from the canteen?", opts: ["Do", "Are"], a: 0,
      whyEn: "'buy' is an action verb, so the question starts with Do. 'Are + base verb' is wrong.",
      why: "buy فعل حدث، فيبدأ السؤال بـ Do، ولا يصح Are مع الفعل المجرد.", errCat: "be_verb" }
  ],

  gB: [
    { s: "She always cook rice for lunch on Fridays.", ok: false, fix: "She always cooks rice for lunch on Fridays.",
      whyEn: "With he / she / it, the main verb needs -s, even after a frequency word: She always cooks.",
      why: "مع he / she / it يأخذ الفعل حرف s حتى بعد كلمة التكرار: She always cooks.", errCat: "agreement" },
    { s: "I am usually buy vegetables from the market near my house.", ok: false, fix: "I usually buy vegetables from the market near my house.",
      whyEn: "Don't put 'am' before a base verb. The frequency word goes straight before the main verb: I usually buy.",
      why: "لا نضع am قبل الفعل المجرد في المضارع البسيط، وتأتي كلمة التكرار مباشرة قبل الفعل: I usually buy.", errCat: "be_verb" },
    { s: "We rarely eat out because restaurants are expensive.", ok: true,
      whyEn: "Correct: 'rarely' comes before the main verb 'eat out', and 'we' takes the base verb.",
      why: "صحيحة: rarely قبل الفعل الأساسي eat out، والفاعل we يأخذ الفعل المجرد.", errCat: "word_order" },
    { s: "Always I drink a lot of water after football.", ok: false, fix: "I always drink a lot of water after football.",
      whyEn: "'always' does not go before the subject. Put it after the subject and before the main verb.",
      why: "لا تبدأ الجملة الخبرية بـ always، بل تأتي بعد الفاعل وقبل الفعل: I always drink.", errCat: "word_order" }
  ],

  gC: [
    { pre: "My grandmother", verb: "always / cook", post: "kabsa for the whole family on Fridays.", ans: ["always cooks"],
      whyEn: "Put 'always' before the main verb, and add -s because 'my grandmother' is she: always cooks.",
      why: "نضع always قبل الفعل، ونضيف s لأن الفاعل مفرد غائب (my grandmother = she): always cooks.", errCat: "agreement" },
    { pre: "I", verb: "not / usually / eat", post: "breakfast on weekdays because I wake up late.", ans: ["don't usually eat", "do not usually eat", "usually don't eat", "usually do not eat"],
      whyEn: "Negative: don't + usually + base verb (I don't usually eat). 'I usually don't eat' is also correct.",
      why: "في النفي: don't ثم usually ثم الفعل المجرد، ويصح أيضًا I usually don't eat.", errCat: "word_order" },
    { pre: "Our coach", verb: "be / never", post: "late for training.", ans: ["is never"],
      whyEn: "With the verb be, the frequency word comes after the verb: is never late.",
      why: "مع فعل الكون تأتي كلمة التكرار بعده: is never late.", errCat: "word_order" },
    { pre: "How often", verb: "you / eat out", post: "with your friends?", ans: ["do you eat out"],
      whyEn: "A question with How often needs do / does before the subject: How often do you eat out…?",
      why: "السؤال بـ How often يحتاج do / does قبل الفاعل: How often do you eat out…؟", errCat: "word_order" }
  ],

  gD: [
    { chips: ["eats", "My father", "dates when he gets home.", "always"], ans: "My father always eats dates when he gets home.",
      whyEn: "Subject (My father) + always + main verb with -s (eats) + the rest. 'always' goes after the subject, not before it.",
      why: "الفاعل My father ثم always ثم الفعل بحرف s (eats) ثم بقية الجملة، ولا تأتي always قبل الفاعل.", errCat: "word_order" },
    { chips: ["busy on Friday mornings.", "The fish market", "always", "is"], ans: "The fish market is always busy on Friday mornings.",
      whyEn: "With is, the frequency word comes after the verb: The fish market is always busy.",
      why: "مع is تأتي كلمة التكرار بعدها: The fish market is always busy.", errCat: "word_order" },
    { chips: ["ever", "cook dinner?", "Does", "your roommate"], ans: "Does your roommate ever cook dinner?",
      whyEn: "Question: Does + subject (your roommate) + ever + base verb (cook).",
      why: "السؤال: Does ثم الفاعل your roommate ثم ever ثم الفعل المجرد cook.", errCat: "word_order" },
    { chips: ["twice a week.", "football", "We play", "in the park"], ans: "We play football in the park twice a week.",
      whyEn: "The object comes right after the verb (play football), then the place (in the park), and the time expression (twice a week) goes at the end.",
      why: "المفعول به يأتي بعد الفعل مباشرة (play football)، ثم المكان (in the park)، ثم عبارة الزمن twice a week في آخر الجملة.", errCat: "word_order" }
  ],

  /* ---------- المرحلة 4: الاستماع على ثلاث مراحل (مقطع حقيقي من ELLLO، ونصه المكتوب في صفحة المصدر) ---------- */
  listening: {
    title: "Eating Habits",
    sourceTag: "ELLLO · Real recording · تسجيل حقيقي",
    sourceMeta: "ELLLO Views #1555 · High-Beginner (A2)",
    speakers: "Hana (UK) & Daniel (Chile)",
    url: "https://elllo.org/english/1551/1555-DanielHana-YNQs-Cooking.htm",
    audioWord: "invite",
    targetSeconds: 164,
    introEn: "Listen to Hana from the UK and Daniel from Chile. They ask each other how often they cook, eat out, buy takeaway and have friends over for dinner.",
    intro: "استمع إلى هانا من بريطانيا ودانيال من تشيلي: يسأل كل منهما الآخر كم مرة يطبخ، ويأكل خارج البيت، ويشتري الوجبات الجاهزة، ويستضيف أصدقاءه على العشاء.",
    predict: {
      qEn: "Stage 1 Main-Idea Question: How are Hana's and Daniel's eating habits different?",
      q: "سؤال الفكرة العامة: كيف تختلف عادات الأكل عند هانا ودانيال؟",
      optsEn: [
        "Hana and Daniel eat out every day because they don't like cooking",
        "Hana cooks a lot, but Daniel cooks less, and their other eating habits are different too",
        "Daniel cooks every day for his friends, and Hana usually buys takeaway"
      ],
      opts: [
        "هانا ودانيال يأكلان خارج البيت كل يوم لأنهما لا يحبان الطبخ",
        "هانا تطبخ كثيرًا، أما دانيال فيطبخ أقل منها، وتختلف عاداتهما الأخرى في الأكل أيضًا",
        "دانيال يطبخ لأصدقائه كل يوم، وهانا تشتري الوجبات الجاهزة عادةً"
      ],
      a: 1,
      revealEn: "Hana cooks a lot, and Daniel cooks less. Their habits with eating out, takeaway and guests are different too. Listen again for the details: who does what, and how often?",
      reveal: "هانا تطبخ كثيرًا، ودانيال يطبخ أقل منها، وتختلف عاداتهما أيضًا في الأكل خارج البيت والوجبات الجاهزة واستقبال الضيوف. استمع مرة أخرى للتفاصيل: من يفعل ماذا، وكم مرة؟"
    },
    insight: {
      titleEn: "Listen for Frequency Words",
      titleAr: "استمع لكلمات التكرار",
      l1En: "Our example sentences about the two speakers. The frequency word comes before the main verb, but after am / is / are:",
      ex1: "Hana often cooks with her roommate. · Daniel is usually busy on weekdays. · Hana never buys takeaway.",
      l2En: "In the clip they ask 'Do you ever…?' and 'Do you usually…?'. You can also ask 'How often…?'. Answer with a frequency word, or put a time expression at the end:",
      ex2: "Does Daniel ever eat out? Yes, occasionally. · How often does Daniel buy takeaway? Occasionally, after work.",
      arHtml: "<p><b>انتبه:</b> كلمة التكرار تأتي قبل الفعل الأساسي (cooks, eat, buys)، وبعد am / is / are.</p><p>وفي السؤال نقول Do you ever…? أو How often do you…?، والجواب كلمة تكرار، أو عبارة زمن في آخر الجملة (every day, once a week, at the weekend).</p><p>وهذه جمل أمثلة كتبناها عن المتحدثَين، وليست كلامهما بنصه.</p>"
    },
    questions: [
      { q: "Who does Hana often cook with?", opts: ["Her mother", "Her roommate", "Her brother"], a: 1,
        whyEn: "At the start, Hana says she always cooks, and she often cooks with her roommate.",
        why: "في أول المقطع تقول هانا إنها تطبخ دائمًا، وكثيرًا ما تطبخ مع رفيق سكنها (roommate).", errCat: "reading" },
      { q: "Why doesn't Daniel cook much on weekdays?", opts: ["He doesn't enjoy cooking.", "He eats at his parents' house.", "He is very busy."], a: 2,
        whyEn: "Near the start, Daniel says he is very busy on weekdays, so he doesn't cook much. In fact, he enjoys cooking.",
        why: "قرب البداية يقول دانيال إنه مشغول جدًا في أيام الأسبوع، فلا يطبخ كثيرًا، مع أنه يستمتع بالطبخ.", errCat: "reading" },
      { tf: true, q: "Daniel says he always cooks at the weekend.", a: true,
        whyEn: "True. Near the start, Daniel says he always cooks at the weekend because he really likes making food.",
        why: "صحيح؛ قرب البداية يقول دانيال إنه يطبخ دائمًا في عطلة نهاية الأسبوع لأنه يحب إعداد الطعام.", errCat: "reading" },
      { q: "How often does Daniel eat out?", opts: ["Occasionally", "Every day", "Never"], a: 0,
        whyEn: "Near the start, after the cooking questions, Daniel says he eats out only occasionally: with a friend, when he is tired and has no time to cook at the weekend.",
        why: "قرب البداية، بعد الحديث عن الطبخ، يقول دانيال إنه يأكل خارج البيت من حين لآخر فقط (occasionally)، مع صديق حين يكون متعبًا ولا وقت له للطبخ في عطلة نهاية الأسبوع.", errCat: "reading" },
      { q: "Who never buys takeaway?", opts: ["Daniel", "Neither of them", "Hana"], a: 2,
        whyEn: "In the middle, Hana says she never buys takeaway, because she likes to sit down and enjoy her food when she eats out.",
        why: "في وسط المقطع تقول هانا إنها لا تشتري الوجبات الجاهزة أبدًا، لأنها تحب أن تجلس وتستمتع بطعامها حين تأكل خارج البيت.", errCat: "reading" },
      { q: "What does Daniel occasionally do when he comes home late from work?", opts: ["He buys takeaway and usually eats it on the way home.", "He invites a friend over and cooks pasta.", "He goes straight to bed without dinner."], a: 0,
        whyEn: "In the middle, Daniel says he occasionally buys takeaway when he comes home late from work. He is so hungry that he usually eats it before he gets home.",
        why: "في وسط المقطع يقول دانيال إنه يشتري وجبة جاهزة من حين لآخر حين يعود متأخرًا من العمل، ويكون جائعًا جدًا فيأكلها غالبًا في الطريق قبل أن يصل إلى البيت.", errCat: "reading" },
      { q: "How often does Hana have people over for dinner?", opts: ["Every day", "Sometimes", "Never"], a: 1,
        whyEn: "Near the end, Hana says she sometimes has people over. She invites friends over and cooks for them, or they cook together.",
        why: "قرب النهاية تقول هانا إنها تستضيف الناس أحيانًا؛ تدعو أصدقاءها إلى بيتها فتطبخ لهم أو يطبخون معًا.", errCat: "reading" },
      { q: "Why does Daniel never have friends over for dinner?", opts: ["His place is very small.", "His friends don't like his food.", "His friends live far away."], a: 0,
        whyEn: "At the end, Daniel says he loves cooking, but his place is small: only one or two people fit, so he never has friends over for dinner.",
        why: "في آخر المقطع يقول دانيال إنه يحب الطبخ، لكن مسكنه صغير لا يتسع إلا لشخص أو شخصين، فلا يستضيف أصدقاءه على العشاء أبدًا.", errCat: "reading" }
    ]
  },

  writing: {
    taskEn: "Write at least 4 separate sentences about your own eating and cooking habits. Use at least 3 different frequency words (always, usually, often, sometimes, occasionally, rarely, never) in the right place, put time expressions at the end (every day, once a week, at the weekend), and use at least 2 words or phrases from today's lesson (for example: eat out, takeaway, invite). Write 'I' with a capital letter.",
    task: "اكتب 4 جمل منفصلة على الأقل عن عاداتك في الأكل والطبخ: استعمل ثلاث كلمات تكرار مختلفة على الأقل في موضعها الصحيح، وضع عبارات الزمن في آخر الجملة (every day, once a week, at the weekend)، واستعمل كلمتين أو عبارتين على الأقل من كلمات الدرس (مثل eat out وtakeaway وinvite)، واكتب الضمير I بحرف كبير.",
    placeholder: "I usually …\nI never …",
    checks: [
      { k: "sentences", tEn: "At least 4 separate sentences (end each with a period .), and 'I' is always a capital", t: "4 جمل منفصلة على الأقل (بنقطة في نهاية كل جملة)، والضمير I بحرف كبير دائمًا",
        ok: function(a, text){ return a.sentences >= 4 && !/\bi\b/.test(String(text || '')); } },
      { k: "freq", tEn: "At least 3 different frequency words", t: "ثلاث كلمات تكرار مختلفة على الأقل", ex: "always · usually · often · sometimes · occasionally · rarely · never",
        ok: function(a, text){
          var m = String(text || '').toLowerCase().match(/\b(?:always|usually|often|sometimes|occasionally|rarely|never)\b/g) || [];
          return m.filter(function(w, i){ return m.indexOf(w) === i; }).length >= 3; } },
      { k: "order", tEn: "Frequency words in the right place: before the main verb, after am / is / are, and never with don't", t: "كلمة التكرار في موضعها: قبل الفعل الأساسي وبعد am / is / are، ولا تجتمع never مع don't", ex: "I often cook. · I'm never late. · I don't usually eat out.",
        ok: function(a, text){
          var F = '(?:always|usually|often|sometimes|occasionally|rarely|never)';
          var s = ' ' + String(text || '').replace(/[‘’]/g, "'").replace(/\bhow\s+often\b/gi, ' ') + ' ';
          if (!new RegExp('\\b' + F + '\\b', 'i').test(s)) return false;
          if (new RegExp('\\b' + F + '\\s+(?:am|is|are)\\b', 'i').test(s)) return false;
          if (/(?:^|[.!?])\s*(?:always|never|rarely)\s+(?:i|we|you|he|she|they|my|our|his|her|their)\b/i.test(s)) return false;
          if (/\b(?:don't|doesn't|do\s+not|does\s+not)\s+never\b/i.test(s)) return false;
          if (/\b(?:eat|eats|cook|cooks|go|goes|buy|buys|drink|drinks|make|makes|order|orders|visit|visits|play|plays|get|gets|invite|invites)\s+(?:always|usually|never|rarely)\b(?!\s+(?:tastes?|looks?|smells?|is|are|was|were)\b)/i.test(s)) return false;
          return true; } },
      { k: "vocab", tEn: "At least 2 words or phrases from today's lesson", t: "كلمتان أو عبارتان على الأقل من درس اليوم", ex: "eat out · takeaway · on the way home · invite · have people over · roommate",
        ok: function(a, text){
          var s = String(text || '');
          var found = [/\b(?:eat|eats|eating|ate)\s+out\b/i, /\btake-?aways?\b/i, /\bon\s+(?:the|my|his|her|our|their|your)\s+way\s+home\b/i, /\binvit(?:e|es|ed|ing)\b/i,
            /\b(?:have|has|had|having)\s+(?:[a-z']+\s+){1,2}(?:over|round)\b/i, /\broom-?mates?\b/i, /\b(?:break|breaks|breaking|broke)\s+the\s+law\b/i]
            .filter(function(r){ return r.test(s); }).length;
          return found >= 2 || ((a && a.used) || []).length >= 2; } }
    ],
    modelMarked: "On a typical weekday, I am very busy, so I <<s:rarely>> cook. I <<s:usually>> eat lunch in the university canteen with my classmates. I <<s:sometimes>> buy a {takeaway} {on the way home}, but I <<s:never>> order pizza. I <<s:often>> cook kabsa with my brother <<c:at the weekend>>. We {invite} our friends over <<c:once a month>>.",
    model: "On a typical weekday, I am very busy, so I rarely cook. I usually eat lunch in the university canteen with my classmates. I sometimes buy a takeaway on the way home, but I never order pizza. I often cook kabsa with my brother at the weekend. We invite our friends over once a month.",
    legendEn: "Light blue = frequency words (before the main verb) · Terracotta = time expressions at the end of the sentence",
    legendAr: "الأزرق الفاتح لكلمات التكرار (قبل الفعل الأساسي)، والطوبي لعبارات الزمن في آخر الجملة."
  },

  quiz: [
    { s: "Which sentence is correct?", opts: ["I always am hungry after swimming.", "Always I am hungry after swimming.", "I am always hungry after swimming."], a: 2, tag: "Grammar · قواعد",
      whyEn: "With am / is / are, the frequency word comes after the verb (I am always hungry), and 'always' does not go before the subject.",
      why: "مع am / is / are تأتي كلمة التكرار بعد الفعل (I am always hungry)، ولا تبدأ الجملة بـ Always.", errCat: "word_order" },
    { s: "My cousin ___ home at seven on weekdays.", opts: ["gets usually", "usually gets", "usually get"], a: 1, tag: "Grammar · قواعد",
      whyEn: "The frequency word goes before the main verb, and 'my cousin' (he / she) needs -s: usually gets.",
      why: "كلمة التكرار قبل الفعل، والفاعل مفرد غائب فيأخذ الفعل s: usually gets.", errCat: "agreement" },
    { s: "___ does your family eat out? — About twice a month.", opts: ["What time", "How often", "How long"], a: 1, tag: "Grammar · قواعد",
      whyEn: "'How often' asks about the number of times, and 'twice a month' gives the number of times. 'What time' asks about the clock, and 'How long' asks how much time something takes.",
      why: "How often تسأل عن عدد المرات، والجواب twice a month يذكر عدد المرات، أما What time فتسأل عن الساعة، وHow long عن المدة.", errCat: "word_order" },
    { s: "We ___ buy takeaway; we prefer home cooking.", opts: ["never", "don't never", "doesn't never"], a: 0, tag: "Grammar · قواعد",
      whyEn: "'never' is already negative, so 'don't never' and 'doesn't never' are double negatives.",
      why: "never منفية بنفسها، فلا نقول don't never ولا doesn't never.", errCat: "word_order" },
    { s: "Choose the correct question:", opts: ["Are you ever play tennis?", "Do you ever play tennis?", "You ever play tennis?"], a: 1, tag: "Grammar · قواعد",
      whyEn: "'play' is an action verb, so the question needs Do before the subject: Do you ever play tennis?",
      why: "play فعل حدث، فيحتاج السؤال إلى Do قبل الفاعل: Do you ever play tennis؟", errCat: "be_verb" },
    { s: "Which sentence has the correct word order?", opts: ["We visit once a month our grandparents.", "We once a month visit our grandparents.", "We visit our grandparents once a month."], a: 2, tag: "Grammar · قواعد",
      whyEn: "Time expressions like 'once a month' go at the end of the sentence, after the object.",
      why: "عبارة الزمن once a month تأتي في آخر الجملة بعد المفعول به.", errCat: "word_order" },
    { s: "___ your sister ever bake cakes?", opts: ["Is", "Does", "Do"], a: 1, tag: "Grammar · قواعد",
      whyEn: "'your sister' is she and 'bake' is an action verb, so we ask with Does + the base verb.",
      why: "your sister مفرد غائب، وbake فعل حدث، فنسأل بـ Does مع الفعل المجرد.", errCat: "agreement" },
    { s: "My ___ always leaves dirty dishes in the kitchen of our flat.", opts: ["roommate", "takeaway", "canteen"], a: 0, tag: "Vocabulary · مفردات",
      whyEn: "A 'roommate' is a person who lives in the same room or flat as you, so he can leave dishes in your kitchen.",
      why: "roommate هو من يشاركك الغرفة أو الشقة، فيصح أن يترك الأطباق في مطبخكما.", errCat: "vocab" },
    { s: "We don't have time to cook on weekdays, so we often ___ at a café near the office.", opts: ["have people over", "eat out", "invite"], a: 1, tag: "Vocabulary · مفردات",
      whyEn: "'eat out' means have a meal in a restaurant or café, not at home.",
      why: "eat out تعني الأكل في مطعم أو مقهى لا في البيت.", errCat: "vocab" },
    { s: "In Saudi Arabia, it is not allowed to sell cigarettes to children. Shops that do this ___.", opts: ["break the law", "eat out", "have people over"], a: 0, tag: "Legal Track · المسار القانوني",
      whyEn: "'break the law' means do something that the law does not allow, like selling cigarettes to children.",
      why: "break the law تعني مخالفة القانون، كبيع السجائر للأطفال.", errCat: "vocab" }
  ]
};
})();
