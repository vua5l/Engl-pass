/* ===== أسبوع التثبيت · الدرس 2: How Was Your Weekend? — مراجعة الماضي البسيط (6 مراحل · درس استماع) ===== */
(function(){
/* صيغ الماضي الشاذة لفحصي الكتابة: ثواني irregularVerbs الستين عدا ما يطابق أصله (cut put set let cost hit hurt shut read) وdid، ومعها got وwoke وrode وswam.
   وما يطابق أصله وdid وcould في SAME، يعدّها فحص past وحده، لأن didn't read وdidn't cut صحيحتان في فحص form */
var IRR = 'went|bought|ate|drank|took|saw|had|came|became|ran|made|said|paid|told|sold|found|thought|brought|taught|caught|felt|kept|slept|left|met|meant|sent|spent|built|lent|lost|won|sat|stood|understood|heard|held|gave|knew|wrote|spoke|broke|chose|forgot|drove|fell|began|flew|wore|got|woke|rode|swam';
var SAME = 'did|could|read|cut|put|set|let(?!\')|cost|hit|hurt|shut';
var NOT_PAST = /\b(?:need|bed|red|speed|feed|seed|hundred|indeed|weed|shed|breed|bleed|succeed|exceed|proceed|embed)\b/gi;
function plain(text){ return String(text || '').replace(/[‘’]/g, "'"); }

LESSONS.u103l2 = {
  id: "u103l2",
  unit: 103,
  n: 2,
  mode: "listening",
  en: "How Was Your Weekend?",
  ar: "مراجعة الماضي البسيط",
  subEn: "Review: Past Simple",
  canDoEn: "I can tell someone about my weekend in the past simple, with negatives and questions: We went to the beach, but we didn't take any photos.",
  canDoAr: "أقدر أن أحكي لغيري عن عطلة نهاية الأسبوع بالماضي البسيط، بالإثبات والنفي والسؤال: We went to the beach, but we didn't take any photos.",
  descEn: "I can review the whole past simple: regular and irregular verbs, didn't and Did, and was / were with no did. I can move between past and present, and follow a real talk between two people about their weekend.",
  descAr: "أقدر أن أراجع الماضي البسيط كله: الأفعال المنتظمة والشاذة، وdidn't وDid، وwas / were بلا did. وأنتقل بين الماضي والمضارع، وأتابع حديثًا حقيقيًا بين شخصين عن عطلة نهاية الأسبوع.",
  goals: [
    { en: "I can use regular and irregular past forms, with the right spelling of -ed.", ar: "أقدر أن أستعمل صيغ الماضي المنتظمة والشاذة، وأكتب ed كتابة صحيحة." },
    { en: "I can use didn't and Did with the base verb, and was / were with no did.", ar: "أقدر أن أستعمل didn't وDid مع أصل الفعل، وwas / were بلا did." },
    { en: "I can choose a past or a present verb from the time word and the situation.", ar: "أقدر أن أختار الفعل الماضي أو المضارع من كلمة الوقت والموقف." },
    { en: "I can follow a real talk about a weekend, and write at least 5 sentences about my own weekend or a short trip.", ar: "أقدر أن أتابع حديثًا حقيقيًا عن عطلة نهاية الأسبوع، وأكتب 5 جمل على الأقل عن عطلتي أو عن رحلة قصيرة." }
  ],
  intro: {
    recall: {
      dEn: "Review words and a legal phrase from Unit 2 by typing them from memory.",
      d: "استرجع كلمات وعبارة قانونية من الوحدة الثانية كتابةً من ذاكرتك.",
      items: [
        ["review", "5 active recall items from Unit 2", "5 عناصر استرجاع نشط من الوحدة الثانية"],
        ["pen", "Type from memory to lock in spelling", "كتابة من الذاكرة لتثبيت الإملاء"],
        ["spark", "Includes a legal phrase from Unit 2", "تشمل عبارة قانونية من الوحدة الثانية"]
      ]
    },
    vocab: {
      dEn: "Words coming back, not new words: 5 words you know plus the returning legal phrase ('annual leave'), with new examples.",
      d: "كلمات عائدة لا جديدة: 5 كلمات تعرفها مع العبارة القانونية العائدة (annual leave)، بأمثلة جديدة.",
      items: [
        ["cards", "6 returning Flashcards (5 words + 'annual leave') with Oxford links and human audio", "6 بطاقات عائدة (5 كلمات + annual leave) مع رابط Oxford ونطق بشري"],
        ["review", "Randomized 2-round matching game", "لعبة توصيل عشوائية من جولتين"],
        ["quiz", "8 context sentences: choose the right word", "8 جمل سياقية: اختر الكلمة المناسبة"]
      ]
    },
    grammar: {
      dEn: "Why is 'I didn't went' wrong? Review the whole past simple, with no new rule, and move between past and present.",
      d: "لماذا تُعد I didn't went خاطئة؟ راجع الماضي البسيط كله بلا قاعدة جديدة، وانتقل بين الماضي والمضارع.",
      items: [
        ["book", "6 short review cards (English first, Arabic on tap)", "6 بطاقات مراجعة قصيرة (الإنجليزي أولًا، والعربي عند الطلب)"],
        ["quiz", "16 guided exercises (4 of each type), one per screen", "16 تمرينًا موجّهًا (4 من كل نمط)، سؤال في كل شاشة"]
      ]
    },
    reading: {
      dEn: "3-Stage Listening (real recording): Todd and Katie tell each other about their weekend.",
      d: "استماع على 3 مراحل لتسجيل حقيقي: يحكي تود وكاتي كل منهما للآخر عن عطلة نهاية الأسبوع.",
      items: [
        ["speaker", "Stage 1: Listen for the main idea without reading the transcript", "المرحلة 1: استماع أول للفكرة العامة بدون النص المكتوب"],
        ["quiz", "Stage 2: Listen again and answer 8 detail questions", "المرحلة 2: استماع ثانٍ للإجابة عن 8 أسئلة تفاصيل"],
        ["mail", "Stage 3: Transcript on the source page & Shadowing Timer", "المرحلة 3: النص المكتوب في صفحة المصدر لمراجعة ما فات، مع الترديد (Shadowing)"]
      ]
    },
    writing: {
      dEn: "Write at least 5 separate sentences about your last weekend or a short trip, in the past simple.",
      d: "اكتب 5 جمل منفصلة على الأقل عن عطلة نهاية الأسبوع الماضية أو رحلة قصيرة، بالماضي البسيط.",
      items: [
        ["pen", "At least 5 separate sentences with periods (.)", "5 جمل منفصلة على الأقل تنتهي كل منها بنقطة"],
        ["spark", "Instant check: 3 sentences in the past, correct past forms, and 2 lesson words", "فحص فوري: 3 جمل في الماضي، وصيغ ماضٍ صحيحة، وكلمتان من الدرس"]
      ]
    },
    quiz: {
      dEn: "10 shuffled questions on the past simple, some present verbs and the returning words (80% to pass), plus Lesson Error Analysis.",
      d: "اختبار قصير من 10 أسئلة في الماضي البسيط وبعض أفعال المضارع والكلمات العائدة (النجاح من 80%)، يليه تحليل شامل لأخطاء الدرس.",
      items: [
        ["quiz", "10 questions (80% passing score)", "10 أسئلة متنوعة (النجاح من 80%)"],
        ["review", "Structured Error Analysis by category", "تحليل أخطاء الدرس وأسبابها حسب الفئة"]
      ]
    }
  },

  recall: [
    {
      id: "rc-0",
      promptAr: "فعل من الوحدة الثانية: ينتقل من جانب إلى جانب، كجانبي الطريق",
      promptEn: "Verb from Unit 2: to go from one side of something to the other side",
      sentPre: "Look left and right before you",
      sentPost: "the street near the school.",
      ans: ["cross"],
      hint: "c _ _ _ s (5 letters)",
      spellNoteEn: "Spelled c-r-o-s-s, with a double s at the end. The past is crossed.",
      spellNote: "تُكتب c-r-o-s-s بحرف s مضاعف في آخرها، وماضيها crossed.",
      errCat: "spelling"
    },
    {
      id: "rc-1",
      promptAr: "اسم من الوحدة الثانية: الحقائب التي تحملها في السفر، وهو غير معدود",
      promptEn: "Noun from Unit 2: the bags that you take on a trip. It has no plural.",
      sentPre: "The airline lost my",
      sentPost: ", so I had no clean clothes for three days.",
      ans: ["luggage"],
      hint: "l _ _ _ _ _ e (7 letters)",
      spellNoteEn: "Spelled l-u-g-g-a-g-e, with a double g. It is uncountable: no -s and no 'a'.",
      spellNote: "تُكتب l-u-g-g-a-g-e بحرف g مضاعف، وهي غير معدودة، فلا تُجمع ولا تسبقها a.",
      errCat: "spelling"
    },
    {
      id: "rc-2",
      promptAr: "صفة من الوحدة الثانية: متأخر عن موعده بسبب مشكلة",
      promptEn: "Adjective from Unit 2: later than planned because of a problem",
      sentPre: "We got to Dammam two hours late. Our bus was",
      sentPost: "because of a problem with the engine.",
      ans: ["delayed"],
      hint: "d _ _ _ _ _ d (7 letters)",
      spellNoteEn: "Spelled d-e-l-a-y-e-d. Keep the y before -ed, because a vowel comes before it.",
      spellNote: "تُكتب d-e-l-a-y-e-d، وتبقى y قبل ed لأن قبلها حرف علة.",
      errCat: "spelling"
    },
    {
      id: "rc-3",
      promptAr: "اسم من الوحدة الثانية: تذكار تشتريه ليذكّرك بمكان زرته",
      promptEn: "Noun from Unit 2: something you buy to remember a place",
      sentPre: "We walked through the old market in Al-Ula, and I bought a small",
      sentPost: "for my sister.",
      ans: ["souvenir"],
      hint: "s _ _ _ _ _ _ r (8 letters)",
      spellNoteEn: "Spelled s-o-u-v-e-n-i-r. The word is French, so the end is -ir, not -er.",
      spellNote: "تُكتب s-o-u-v-e-n-i-r، وأصلها فرنسي فتنتهي بـ ir لا er.",
      errCat: "spelling"
    },
    {
      id: "rc-4",
      promptAr: "العبارة القانونية من الوحدة الثانية: يبلّغ الشرطة عن جريمة (ثلاث كلمات)",
      promptEn: "Legal phrase from Unit 2: to tell the police about something against the law (three words)",
      sentPre: "A man took my phone at the bus station and ran away. I need to",
      sentPost: "now.",
      ans: ["report a crime", "report the crime"],
      isLegal: true,
      hint: "r _ _ _ _ _ _ _ _ _ _ e (12 letters, 3 words)",
      spellNoteEn: "report + a + crime. Spelled r-e-p-o-r-t and c-r-i-m-e. The past is reported a crime.",
      spellNote: "تتكون من report ثم a ثم crime، وتُكتب r-e-p-o-r-t وc-r-i-m-e، وماضيها reported a crime.",
      errCat: "spelling"
    }
  ],

  legalPhrase: {
    en: "annual leave",
    headword: "annual leave",
    pos: "legal phrase",
    ar: "إجازة سنوية (مدفوعة الأجر)",
    say: "أَنْيُوَل لِيف",
    ex: "My sister used her annual leave in July and visited our cousins in Yanbu.",
    exAr: "استعملت أختي إجازتها السنوية في يوليو وزارت أبناء عمّنا في ينبع.",
    tipEn: "This phrase comes back from Unit 2. We take annual leave, or we are on annual leave. In the past: She took her annual leave in July, and she was on annual leave for two weeks. 'Annual' means every year, and the leave is paid. Under Saudi labour law, it is at least 21 days a year.",
    tip: "تعود هذه العبارة من الوحدة الثانية. نقول take annual leave أي يأخذ إجازته السنوية، وbe on annual leave أي يكون في إجازته. وفي الماضي: She took her annual leave in July وshe was on annual leave. وannual تعني سنوي، والإجازة مدفوعة الأجر، ولا تقل في نظام العمل السعودي عن 21 يومًا في السنة.",
    legal: true,
    oxfordSlug: "leave_2",
    wikiFiles: ["En-us-annual.ogg", "En-us-leave.ogg"],
    wikiCredit: "File:En-us-annual.ogg & File:En-us-leave.ogg · Wikimedia Commons"
  },

  vocab: [
    { en: "relax", pos: "verb", ar: "يسترخي / يرتاح", say: "رِلَاكْس",
      ex: "On Friday, I turned off my phone and relaxed by the sea for two hours.", exAr: "يوم الجمعة أغلقت هاتفي واسترخيت عند البحر ساعتين.",
      tipEn: "The past is relaxed, and the -ed sounds like t, with no extra syllable. In the negative: I didn't relax. The adjective relaxing goes before a noun: a relaxing time, a relaxing evening.",
      tip: "ماضيها relaxed، وتُنطق ed في آخرها كصوت t بلا مقطع زائد، ونفيها I didn't relax. والصفة relaxing تأتي قبل الاسم: a relaxing time وa relaxing evening.",
      oxfordSlug: "relax",
      wikiFile: "En-us-relax.ogg",
      wikiCredit: "File:En-us-relax.ogg · Wikimedia Commons" },
    { en: "go shopping", pos: "phrase", ar: "يذهب للتسوق", say: "قُو شُوبِنْق",
      ex: "We went shopping on Thursday evening, but we didn't buy anything.", exAr: "ذهبنا للتسوق مساء الخميس، لكننا لم نشترِ شيئًا.",
      tipEn: "The verb here is go, so the past is went shopping. After did, it goes back to go: We didn't go shopping. Did you go shopping? We say went shopping, not went to shopping.",
      tip: "الفعل هنا go، فماضيها went shopping، ويعود بعد did إلى أصله: We didn't go shopping وDid you go shopping؟ ونقول went shopping لا went to shopping.",
      oxfordSlug: "shopping",
      wikiFiles: ["En-us-go.ogg", "LL-Q1860 (eng)-Vealhurl-shopping.wav"],
      wikiCredit: "File:En-us-go.ogg & File:LL-Q1860 (eng)-Vealhurl-shopping.wav · Vealhurl (Lingua Libre) / Wikimedia Commons" },
    { en: "beautiful", pos: "adjective", ar: "جميل", say: "بْيُوتِفُل",
      ex: "Last Friday was a beautiful day, so we ate our lunch in the garden.", exAr: "كان يوم الجمعة الماضي جميلًا، فتناولنا غداءنا في الحديقة.",
      tipEn: "It comes before a noun (a beautiful day) or after be (The day was beautiful). In the past we use was or were, with no did. Spelling: one l at the end.",
      tip: "تأتي قبل الاسم (a beautiful day) أو بعد be (The day was beautiful)، وفي الماضي نستعمل was أو were بلا did. وتنتهي بلام واحدة.",
      oxfordSlug: "beautiful",
      wikiFile: "En-us-beautiful.ogg",
      wikiCredit: "File:En-us-beautiful.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "cheap", pos: "adjective", ar: "رخيص (قليل الثمن)", say: "تْشِيب",
      ex: "My brother bought an old car last month because it was cheap.", exAr: "اشترى أخي سيارة قديمة في الشهر الماضي لأنها كانت رخيصة.",
      tipEn: "cheap is an adjective, so the past needs be: It was cheap. Was it cheap? We don't say It cheaped or Did it cheap? The opposite is expensive.",
      tip: "cheap صفة، فيلزمها be في الماضي: It was cheap وWas it cheap؟ ولا نقول Did it cheap؟ وعكسها expensive.",
      oxfordSlug: "cheap_1",
      wikiFile: "En-uk-cheap.ogg",
      wikiCredit: "File:En-uk-cheap.ogg · Wikimedia Commons" },
    { en: "take photos", pos: "phrase", ar: "يلتقط صورًا", say: "تَيْك فُوتُوز",
      ex: "My cousin took photos of the whole family at the wedding.", exAr: "التقط ابن عمي صورًا للأسرة كلها في حفل الزفاف.",
      tipEn: "take is irregular: took photos, not taked. After did, it goes back to take: We didn't take any photos. Use of for the thing in the photo: take photos of the mountains.",
      tip: "take فعل شاذ، فنقول took photos لا taked، ويعود بعد did إلى أصله: We didn't take any photos. ونذكر ما في الصورة بعد of: take photos of the mountains.",
      oxfordSlug: "photo",
      wikiFiles: ["En-us-take.ogg", "LL-Q1860 (eng)-Back ache-photos.wav"],
      wikiCredit: "File:En-us-take.ogg & File:LL-Q1860 (eng)-Back ache-photos.wav · Back ache (Lingua Libre) / Wikimedia Commons" }
  ],

  vocabGaps: [
    { s: "I was very tired after the exam, so I went home and ___ on the sofa for an hour.", opts: ["relaxed", "cheap", "annual leave"], a: 0,
      whyEn: "A tired person rests, and 'relaxed' is the past of relax. 'cheap' is an adjective, and 'annual leave' is a noun, so neither can follow 'I went home and'.",
      why: "المتعب يستريح، وrelaxed ماضي relax، أما cheap فصفة وannual leave اسم، فلا يأتي أي منهما بعد I went home and.", errCat: "vocab" },
    { s: "This phone was only 300 riyals. It was really ___.", opts: ["took photos", "cheap", "relaxed"], a: 1,
      whyEn: "'only 300 riyals' tells us the price was low, so the phone was 'cheap'.",
      why: "only 300 riyals تدل على أن الثمن قليل، فالهاتف cheap أي رخيص.", errCat: "vocab" },
    { s: "My brother needed a new suit for the wedding, so we ___ in the city centre on Thursday.", opts: ["relaxed", "took photos", "went shopping"], a: 2,
      whyEn: "He needed to buy something, so they 'went shopping'. The past of 'go shopping' is 'went shopping'.",
      why: "كان يحتاج إلى شراء شيء، فذهبوا للتسوق went shopping، وهي ماضي go shopping.", errCat: "vocab" },
    { s: "The sky over the sea was pink and gold. It was a ___ evening.", opts: ["cheap", "beautiful", "annual leave"], a: 1,
      whyEn: "A pink and gold sky is lovely to look at, so the evening was 'beautiful'. 'cheap' is about a low price, and 'annual leave' is about work.",
      why: "السماء الوردية والذهبية جميلة المنظر، فالمساء beautiful، أما cheap فعن الثمن القليل، وannual leave عن العمل.", errCat: "vocab" },
    { s: "We saw an amazing old bridge on the road to Abha, so we stopped and ___.", opts: ["took photos", "went shopping", "cheap"], a: 0,
      whyEn: "People stop at something amazing to 'take photos'. There are no shops at a bridge, and 'cheap' is an adjective.",
      why: "يتوقف الناس عند ما يبهرهم ليلتقطوا صورًا took photos، ولا متاجر عند الجسر، وcheap صفة.", errCat: "vocab" },
    { s: "Our neighbour is a nurse, and this year she took her ___ in August.", opts: ["cheap", "beautiful", "annual leave"], a: 2,
      whyEn: "Workers 'take annual leave', their paid holiday from work. The other two are adjectives, and 'her' needs a noun here.",
      why: "يأخذ العامل annual leave، وهي إجازته المدفوعة من العمل، والخياران الآخران صفتان، وبعد her يلزم هنا اسم.", errCat: "vocab" },
    { s: "Did you ___ of the sea in Jeddah? I want to see them.", opts: ["relax", "go shopping", "take photos"], a: 2,
      whyEn: "'of the sea' and 'see them' show that the speaker means pictures, so the answer is 'take photos'.",
      why: "of the sea وsee them تدلان على أن المقصود صور، فالجواب take photos.", errCat: "vocab" },
    { s: "My brother's company gives him 25 days of paid ___ every year.", opts: ["go shopping", "annual leave", "relax"], a: 1,
      whyEn: "'annual leave' is the paid holiday that a worker gets every year. After 'days of paid', we need a noun, and the other two are verbs.",
      why: "annual leave هي الإجازة المدفوعة التي يأخذها العامل كل سنة، وبعد days of paid يلزم اسم، والخياران الآخران فعلان.", errCat: "vocab" }
  ],

  gCards: [
    {
      tEn: "Regular and Irregular Verbs",
      t: "الأفعال المنتظمة والشاذة",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Regular and Irregular Verbs</span><small>مراجعة صيغ الماضي البسيط</small></h2>' +
        '<p class="en-p" dir="ltr">This is a review of Unit 2, with nothing new. We use the past simple for something that <b>finished</b> in the past. Regular verbs end in -ed, and the spelling has four patterns:</p>' +
        '<ul class="spell" dir="ltr">' +
          '<li><b>Most verbs: add -ed</b><span class="s-en">visit → visited · watch → watched</span></li>' +
          '<li><b>Ends in e: add -d</b><span class="s-en">arrive → arrived · like → liked</span></li>' +
          '<li><b>Consonant + y: change y to -ied</b><span class="s-en">study → studied · carry → carried</span></li>' +
          '<li><b>Short verb, one vowel + one consonant: double it (not w, x or y)</b><span class="s-en">stop → stopped · plan → planned · but not in verbs like visit: visited</span></li>' +
        '</ul>' +
        '<p class="en-p" dir="ltr">Irregular verbs have their own past forms. Today, we practise these eight:</p>' +
        '<ul class="spell" dir="ltr">' +
          '<li><b>Group one</b><span class="s-en">go → went · have → had · read → read · buy → bought</span></li>' +
          '<li><b>Group two</b><span class="s-en">eat → ate · drink → drank · take → took · see → saw</span></li>' +
        '</ul>' +
        '<div class="tip" dir="ltr"><p><b>read · انتبه:</b> the past looks the same, but it sounds like the colour red.</p></div>',
      arHtml:
        '<p>هذه مراجعة للوحدة الثانية، وليس فيها جديد. نستعمل الماضي البسيط لما <b>انتهى</b> في الماضي.</p>' +
        '<p>الأفعال المنتظمة تنتهي بـ <bdi class="en">ed</bdi>، ولإملائها أربعة أنماط: أكثر الأفعال تأخذ <bdi class="en">ed</bdi> (<bdi class="en">visited</bdi>)، وما ينتهي بـ <bdi class="en">e</bdi> يأخذ <bdi class="en">d</bdi> (<bdi class="en">arrived</bdi>)، وما ينتهي بحرف ساكن ثم <bdi class="en">y</bdi> تتحول فيه إلى <bdi class="en">ied</bdi> (<bdi class="en">studied</bdi>)، والفعل القصير الذي فيه حرف علة واحد بعده ساكن واحد يُضاعف ساكنه (<bdi class="en">stopped</bdi>)، إلا <bdi class="en">w</bdi> و<bdi class="en">x</bdi> و<bdi class="en">y</bdi>، ولا يُضاعف في مثل <bdi class="en">visited</bdi>.</p>' +
        '<p>أما الأفعال الشاذة فلها صيغ خاصة، ونتدرب اليوم على ثمانية: <bdi class="en">go → went</bdi> و<bdi class="en">have → had</bdi> و<bdi class="en">read → read</bdi> و<bdi class="en">buy → bought</bdi> و<bdi class="en">eat → ate</bdi> و<bdi class="en">drink → drank</bdi> و<bdi class="en">take → took</bdi> و<bdi class="en">see → saw</bdi>.</p>' +
        '<p>وماضي <bdi class="en">read</bdi> يُكتب كأصله، لكنه يُنطق كنطق كلمة <bdi class="en">red</bdi>.</p>'
    },
    {
      tEn: "didn't and Did: Back to the Base Verb",
      t: "didn't وDid: يعود الفعل إلى أصله",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">didn\'t and Did</span><small>يعود الفعل إلى أصله</small></h2>' +
        '<p class="en-p" dir="ltr">In a negative or a question, <b>did</b> shows the past. So the main verb goes back to its <b>base form</b>. We don\'t put the past on both did and the main verb.</p>' +
        '<div class="formula"><b>didn\'t</b> + base verb · <b>Did</b> + subject + base verb? · <b>What did</b> + subject + base verb?</div>' +
        '<div class="xbox"><span class="xtag s" dir="ltr">Negative · النفي</span><p class="xen">My brother didn\'t finish his tea.</p><span class="xtag s" dir="ltr">Yes / No question · سؤال بنعم أو لا</span><p class="xen">Did you see the new bridge?</p><span class="xtag s" dir="ltr">Question with a word · سؤال بأداة</span><p class="xen">Where did they have lunch on Thursday?</p></div>' +
        '<div class="tip" dir="ltr"><p><b>Compare · قارن:</b> They saw a film. · They didn\'t see a film. · Did they see a film?</p></div>',
      arHtml:
        '<p>في النفي والسؤال تدل <bdi class="en">did</bdi> على الماضي، فيعود الفعل الأساسي إلى <b>أصله</b>، ولا نجمع بين <bdi class="en">did</bdi> وصيغة الماضي في الفعل نفسه.</p>' +
        '<p>النفي: <bdi class="en">My brother didn\'t finish his tea.</bdi></p>' +
        '<p>السؤال بنعم أو لا: <bdi class="en">Did you see the new bridge?</bdi></p>' +
        '<p>السؤال بأداة: <bdi class="en">Where did they have lunch on Thursday?</bdi></p>' +
        '<p>وقارن: <bdi class="en">They saw a film.</bdi> ثم <bdi class="en">They didn\'t see a film.</bdi> ثم <bdi class="en">Did they see a film?</bdi></p>'
    },
    {
      tEn: "was and were: No did",
      t: "was وwere: بلا did",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">was and were: No did</span><small>فعل be لا يحتاج إلى did</small></h2>' +
        '<p class="en-p" dir="ltr">Before an adjective or a noun, we use <b>be</b>. Its past is <b>was</b> or <b>were</b>, and it makes its own negatives and questions, with no did.</p>' +
        '<div class="tbl"><table><thead><tr><th>Use · الاستعمال</th><th>Example · المثال</th></tr></thead><tbody>' +
          '<tr><td>be + adjective</td><td>The room <span class="hs">was</span> clean.</td></tr>' +
          '<tr><td>be + noun</td><td>My uncle <span class="hs">was</span> a pilot.</td></tr>' +
          '<tr><td>Negative</td><td>The banks <span class="hs">weren\'t</span> open.</td></tr>' +
          '<tr><td>Question</td><td><span class="hs">Were</span> the shops busy?</td></tr>' +
        '</tbody></table></div>' +
        '<div class="tip" dir="ltr"><p><b>Be careful · انتبه:</b> was does not make a verb past. For a finished action, use the past form alone: I went, not I was go. was + verb-ing is the past continuous, and it comes back in Lesson 3.</p></div>',
      arHtml:
        '<p>قبل الصفة والاسم نستعمل <bdi class="en">be</bdi>، وماضيها <bdi class="en">was</bdi> أو <bdi class="en">were</bdi>، وتصنع نفيها وسؤالها بنفسها بلا <bdi class="en">did</bdi>.</p>' +
        '<p>مع الصفة: <bdi class="en">The room was clean.</bdi> ومع الاسم: <bdi class="en">My uncle was a pilot.</bdi></p>' +
        '<p>النفي: <bdi class="en">The banks weren\'t open.</bdi> والسؤال: <bdi class="en">Were the shops busy?</bdi></p>' +
        '<p>وانتبه: <bdi class="en">was</bdi> لا تجعل الفعل ماضيًا، فللحدث المنتهي نستعمل صيغة الماضي وحدها: <bdi class="en">I went</bdi> لا <bdi class="en">I was go</bdi>. أما <bdi class="en">was</bdi> مع الفعل بـ <bdi class="en">ing</bdi> فهي الماضي المستمر، ويعود في الدرس الثالث.</p>'
    },
    {
      tEn: "Past or Present?",
      t: "ماضٍ أم مضارع؟",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Past or Present?</span><small>كلمة الوقت تساعدك</small></h2>' +
        '<p class="en-p" dir="ltr">A clear past time word shows that the action is in the past: <b>yesterday, last night, last week, two days ago</b>. So the verb of that action is past too.</p>' +
        '<div class="tbl"><table><thead><tr><th>Time · الوقت</th><th>Example · المثال</th></tr></thead><tbody>' +
          '<tr><td>Past</td><td>I <span class="hs">didn\'t understand</span> the bus driver yesterday.</td></tr>' +
          '<tr><td>Now</td><td>I <span class="hs">don\'t understand</span> this word.</td></tr>' +
          '<tr><td>Habit</td><td>We <span class="hs">visit</span> my aunt every Friday.</td></tr>' +
          '<tr><td>Past</td><td>We <span class="hs">visited</span> my aunt two days ago.</td></tr>' +
        '</tbody></table></div>' +
        '<p class="en-p" dir="ltr">From Lesson 1: the present simple is for habits and facts, and the present continuous is for what is going on now.</p>' +
        '<div class="sigs">' +
          '<div class="sig s"><h3 dir="ltr">Habit or fact<small class="sig-ar">العادة والحقيقة</small></h3><ul><li>My father reads the news every morning.</li></ul></div>' +
          '<div class="sig c"><h3 dir="ltr">Going on now<small class="sig-ar">ما يجري الآن</small></h3><ul><li>Look! The men are painting our door.</li></ul></div>' +
        '</div>' +
        '<div class="tip" dir="ltr"><p><b>Remember · تذكّر:</b> know, want and need stay simple: I know her name.</p></div>',
      arHtml:
        '<p>كلمة الوقت الماضية الصريحة تدل على أن الحدث في الماضي: <bdi class="en">yesterday</bdi> و<bdi class="en">last night</bdi> و<bdi class="en">last week</bdi> و<bdi class="en">two days ago</bdi>، فيكون فعل ذلك الحدث ماضيًا.</p>' +
        '<p>قارن: <bdi class="en">I didn\'t understand the bus driver yesterday.</bdi> للماضي، و<bdi class="en">I don\'t understand this word.</bdi> للحاضر.</p>' +
        '<p>وقارن: <bdi class="en">We visit my aunt every Friday.</bdi> للعادة، و<bdi class="en">We visited my aunt two days ago.</bdi> للماضي.</p>' +
        '<p>ومن الدرس الأول: المضارع البسيط للعادة والحقيقة (<bdi class="en">My father reads the news every morning.</bdi>)، والمضارع المستمر لما يجري الآن (<bdi class="en">Look! The men are painting our door.</bdi>).</p>' +
        '<p>وتبقى <bdi class="en">know</bdi> و<bdi class="en">want</bdi> و<bdi class="en">need</bdi> في المضارع البسيط: <bdi class="en">I know her name.</bdi></p>'
    },
    {
      tEn: "Common Arab Mistakes",
      t: "أخطاء العرب الشائعة",
      bilingual: true,
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Common Arab Mistakes</span><small>أخطاء يقع فيها كثير من العرب</small></h2>' +
        '<ul class="mist">' +
          '<li><span class="no">My cousins didn\'t went to the farm last Friday.</span><span class="yes">My cousins didn\'t go to the farm last Friday.</span><p class="en-m" dir="ltr">After <b>didn\'t</b>, use the base verb: go, not went.</p><p>بعد <bdi class="en">didn\'t</bdi> يأتي الفعل في أصله: <bdi class="en">go</bdi> لا <bdi class="en">went</bdi>.</p></li>' +
          '<li><span class="no">Did your sister bought the tickets?</span><span class="yes">Did your sister buy the tickets?</span><p class="en-m" dir="ltr"><b>Did</b> already shows the past, so the main verb stays in its base form.</p><p><bdi class="en">Did</bdi> تدل على الماضي، فيبقى الفعل الأساسي في أصله.</p></li>' +
          '<li><span class="no">This morning I was go to the post office and sent the letters.</span><span class="yes">This morning I went to the post office and sent the letters.</span><p class="en-m" dir="ltr">Both actions are finished, like <b>sent</b>, so we use the past form alone: went.</p><p>الحدثان منتهيان مثل <bdi class="en">sent</bdi>، فنستعمل صيغة الماضي وحدها: <bdi class="en">went</bdi>.</p></li>' +
          '<li><span class="no">My aunt buyed a new carpet yesterday.</span><span class="yes">My aunt bought a new carpet yesterday.</span><p class="en-m" dir="ltr"><b>buy</b> is irregular: bought, not buyed.</p><p><bdi class="en">buy</bdi> فعل شاذ ماضيه <bdi class="en">bought</bdi> لا <bdi class="en">buyed</bdi>.</p></li>' +
        '</ul>'
    },
    {
      tEn: "Summary",
      t: "الخلاصة",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Quick Summary</span><small>الخلاصة</small></h2>' +
        '<div class="sumc" dir="ltr"><h3>In Three Lines · في ثلاثة أسطر</h3>' +
          '<p><b>Past forms · صيغ الماضي</b><span>regular: -ed · irregular: went · had · read · bought · ate · drank · took · saw</span></p>' +
          '<p><b>did · النفي والسؤال</b><span>didn\'t + base verb · Did + subject + base verb? · What did + subject + base verb?</span></p>' +
          '<p><b>be · الوقت</b><span>was / were before an adjective or a noun, with no did · a past time word goes with a past verb</span></p>' +
        '</div>' +
        '<p class="en-p" dir="ltr">Now let\'s practise: 16 guided exercises on the past simple, with some present verbs too.</p>',
      arHtml:
        '<p><b>صيغ الماضي:</b> المنتظم ينتهي بـ <bdi class="en">ed</bdi>، والشاذ يُحفظ: <bdi class="en">went, had, read, bought, ate, drank, took, saw</bdi>.</p>' +
        '<p><b>النفي والسؤال:</b> <bdi class="en">didn\'t</bdi> أو <bdi class="en">Did</bdi> أو <bdi class="en">What did</bdi>، ثم الفعل في أصله.</p>' +
        '<p><b>be والوقت:</b> <bdi class="en">was</bdi> و<bdi class="en">were</bdi> قبل الصفة والاسم بلا <bdi class="en">did</bdi>، وكلمة الوقت الماضية يأتي معها فعل ماضٍ.</p>'
    }
  ],

  gA: [
    { s: "We didn't ___ a hotel before the trip, and all the rooms were full.", opts: ["booked", "book"], a: 1,
      whyEn: "'didn't' already shows the past, so the verb stays in its base form: didn't book.",
      why: "didn't تدل على الماضي، فيبقى الفعل في أصله: didn't book.", errCat: "tense" },
    { s: "___ the tickets cheap for your trip to Abha?", opts: ["Were", "Did"], a: 0,
      whyEn: "'cheap' is an adjective, so the verb is be, and we don't use 'did' with be. 'the tickets' is plural, so we use 'Were'.",
      why: "cheap صفة، فالفعل be، ولا نستعمل did معه، وthe tickets جمع فنقول Were.", errCat: "be_verb" },
    { s: "We can't go to the park now. It ___ outside.", opts: ["is raining", "rains"], a: 0,
      whyEn: "'We can't go ... now' and 'outside' show that it is happening at this moment, so we use the present continuous. 'It rains' is for a fact or a habit, and it can't describe what is going on now.",
      why: "We can't go … now وoutside تدلان على أن المطر يجري في هذه اللحظة، فنستعمل المضارع المستمر، أما It rains فللحقيقة أو العادة، ولا تصف ما يجري الآن.", errCat: "tense" },
    { s: "We stayed in ___ old hotel near the sea in Yanbu.", opts: ["a", "an"], a: 1,
      whyEn: "'old' starts with a vowel sound, so we use 'an', not 'a'.",
      why: "تبدأ old بصوت علة، فنستعمل an لا a.", errCat: "articles_prep" }
  ],

  gB: [
    { s: "Did you went to the swimming pool on Friday?", ok: false, fix: "Did you go to the swimming pool on Friday?",
      whyEn: "'Did' already shows the past, so the main verb goes back to its base form: go, not went.",
      why: "Did تدل على الماضي، فيعود الفعل الأساسي إلى أصله: go لا went.", errCat: "tense" },
    { s: "My sister doesn't drink coffee, but yesterday she drank two cups at the wedding.", ok: true,
      whyEn: "Correct. 'doesn't drink' is her habit, in the present. 'yesterday' is a past time word, so the second verb is past: drank.",
      why: "صحيحة: doesn't drink عادتها في الحاضر، وyesterday كلمة وقت ماضية، فجاء الفعل الثاني ماضيًا: drank.", errCat: "tense" },
    { s: "Last week I was go to the pharmacy twice.", ok: false, fix: "Last week I went to the pharmacy twice.",
      whyEn: "'twice' shows two finished visits, so we use the past form alone: went. 'was' does not make 'go' past.",
      why: "twice تدل على زيارتين منتهيتين، فنستعمل صيغة الماضي وحدها: went، وwas لا تجعل go ماضيًا.", errCat: "be_verb" },
    { s: "Last Tuesday I don't understand the new rule, so my friend helped me.", ok: false, fix: "Last Tuesday I didn't understand the new rule, so my friend helped me.",
      whyEn: "'Last Tuesday' is a past time word, so the verb must be past: didn't understand. 'don't understand' is for now.",
      why: "Last Tuesday كلمة وقت ماضية، فيلزم فعل ماضٍ: didn't understand، أما don't understand فللحاضر.", errCat: "tense" }
  ],

  gC: [
    { pre: "On the way to Riyadh, the bus", verb: "stop · Past Simple", post: "at a small town, and we bought some water.", ans: ["stopped"],
      whyEn: "'bought' shows the story is in the past. 'stop' is a short verb with one vowel + one consonant (o + p), so we double the p: stopped.",
      why: "bought تدل على أن القصة في الماضي، وstop فعل قصير فيه حرف علة واحد بعده ساكن واحد (o ثم p)، فنضاعف p: stopped.", errCat: "spelling" },
    { pre: "My brother", verb: "not / eat · Past Simple", post: "any lunch yesterday because he felt sick.", ans: ["didn't eat", "did not eat"],
      whyEn: "'yesterday' is a past time word. The negative is didn't + base verb, so we write eat, not ate.",
      why: "yesterday كلمة وقت ماضية، والنفي didn't مع أصل الفعل، فنكتب eat لا ate.", errCat: "tense" },
    { pre: "Sami", verb: "know · Present Simple", post: "the way to the airport, so he can drive us.", ans: ["knows"],
      whyEn: "'know' is a state verb, so it takes no -ing. 'Sami' is he, so the present simple needs -s: knows.",
      why: "know فعل لا يأخذ ing، وSami في حكم he، فيأخذ المضارع البسيط s: knows.", errCat: "stative" },
    { pre: "We went shopping", verb: "preposition", post: "Saturday morning, and then we had lunch with my cousins.", ans: ["on"],
      groupEn: "Write the correct preposition", group: "اكتب حرف الجر الصحيح",
      whyEn: "We use 'on' with days, and with a day and a part of it: on Saturday, on Saturday morning.",
      why: "نستعمل on مع الأيام، ومع اليوم وجزء منه: on Saturday وon Saturday morning.", errCat: "articles_prep" }
  ],

  gD: [
    { chips: ["you see", "What did", "museum?", "at the"], ans: "What did you see at the museum?",
      whyEn: "What did + subject + base verb. 'did' shows the past, so the verb is see, not saw.",
      why: "What did ثم الفاعل ثم أصل الفعل، وdid تدل على الماضي، فالفعل see لا saw.", errCat: "word_order" },
    { chips: ["last night.", "We didn't", "to the airport", "take the bus"], ans: "We didn't take the bus to the airport last night.",
      whyEn: "Subject + didn't + base verb, then the place, then the time. Only 'last night.' has a period, so it comes last.",
      why: "الفاعل ثم didn't مع أصل الفعل، ثم المكان ثم الوقت، والنقطة في last night. تدل على أنها آخر الجملة.", errCat: "word_order" },
    { chips: ["arrive", "Did", "on time?", "your flight"], ans: "Did your flight arrive on time?",
      whyEn: "Did + subject + base verb: Did your flight arrive? 'on time' comes after the verb.",
      why: "Did ثم الفاعل ثم أصل الفعل: Did your flight arrive؟ وتأتي on time بعد الفعل.", errCat: "word_order" },
    { chips: ["usually", "Does your father", "on Thursdays?", "go shopping"], ans: "Does your father usually go shopping on Thursdays?",
      whyEn: "This is a habit, so we use the present simple: Does + subject + base verb. 'usually' comes before the main verb.",
      why: "هذه عادة، فنستعمل المضارع البسيط: Does ثم الفاعل ثم أصل الفعل، وتأتي usually قبل الفعل الأساسي.", errCat: "word_order" }
  ],

  /* ---------- المرحلة 4: الاستماع على ثلاث مراحل (مقطع حقيقي من ELLLO، ونصه المكتوب في صفحة المصدر) ---------- */
  listening: {
    title: "Weekend Talk",
    sourceTag: "ELLLO · Real recording · تسجيل حقيقي",
    sourceMeta: "ELLLO Grammar Talks A2-07 · Beginner (A2)",
    speakers: "Todd (U.S.) & Katie (England)",
    url: "https://elllo.org/english/grammar/A2-07-Past-Tense-.htm",
    audioWord: "take photos",
    targetSeconds: 224,
    introEn: "Two people talk for almost four minutes. They speak naturally, so you will not catch every word. That is fine. Listen once for the main idea.",
    intro: "شخصان يتحدثان نحو أربع دقائق بكلام طبيعي، فلن تلتقط كل كلمة، ولا بأس في ذلك. استمع مرة واحدة للفكرة العامة.",
    predict: {
      qEn: "Stage 1 Main-Idea Question: What are Todd and Katie mainly talking about?",
      q: "سؤال الفكرة العامة: عمّ يتحدث تود وكاتي أساسًا؟",
      optsEn: ["What each of them did last weekend", "What each of them plans to do next weekend", "The best places to eat in their city"],
      opts: ["ما فعله كل منهما في عطلة نهاية الأسبوع الماضية", "ما ينوي كل منهما فعله في عطلة نهاية الأسبوع القادمة", "أفضل أماكن الأكل في مدينتهما"],
      a: 0,
      revealEn: "They talk about last Saturday and last Sunday. First Todd asks Katie, and then Katie asks Todd. Listen again for the details.",
      reveal: "يتحدثان عن يومي السبت والأحد الماضيين، فيسأل تود كاتي أولًا، ثم تسأله كاتي. استمع مرة أخرى للتفاصيل."
    },
    insight: {
      titleEn: "The Past Simple in a Real Talk",
      titleAr: "الماضي البسيط في حديث حقيقي",
      l1En: "Todd and Katie use the past simple again and again, and many of their verbs are irregular. They also ask questions with Did and What did. Here are sentences of our own about them:",
      ex1: "Katie didn't stay at home on Sunday. · Did Todd go to the cinema with a friend? No, he didn't.",
      l2En: "They go back to the present for habits and facts. Here is that change in our own words. You may also notice 'haven't seen' in the clip. That grammar comes later, so don't worry about it.",
      ex2: "Todd likes watching films alone, so he went to the cinema alone on Saturday night. · Katie enjoys shopping for clothes, but Todd doesn't.",
      arHtml: "<p><b>انتبه:</b> يتكرر الماضي البسيط في المقطع، وأفعال كثيرة فيه شاذة، ويأتي السؤال بـ Did وWhat did كما تعلمت.</p><p>ويعود المتحدثان إلى المضارع إذا ذكرا عادة أو حقيقة، فلاحظ هذا الانتقال بين الزمنين.</p><p>وقد تسمع haven't seen في المقطع، وهذه قاعدة ستأتي لاحقًا، فلا تشغل بها نفسك الآن.</p><p>والجمل المذكورة هنا أمثلة كتبناها عن المقطع، وليست كلام المتحدثين بنصه.</p>"
    },
    questions: [
      { q: "Where did Katie go with her friends on Saturday?", opts: ["To a place full of books", "To a sports club in town", "To the beach near the city"], a: 0,
        whyEn: "At the start, Katie names the library, a place full of books. She read a lot there.",
        why: "في أول المقطع تذكر كاتي المكتبة، وهي مكان مليء بالكتب، وقد قرأت فيها كثيرًا.", errCat: "reading" },
      { tf: true, q: "Katie ate with people from her job on Saturday evening.", a: true,
        whyEn: "True. Near the start, Katie talks about a restaurant and her co-workers. Co-workers are the people who work with you.",
        why: "صحيح؛ قرب أول المقطع تذكر كاتي مطعمًا وزملاءها في العمل، وco-workers هم الذين يعملون معك.", errCat: "reading" },
      { q: "What happened when Todd ate at the chicken restaurant?", opts: ["He waited a long time for his food.", "He paid too much.", "The food was too strong for his mouth."], a: 2,
        whyEn: "Near the start, Todd talks about the chicken. It was too spicy, which means very hot in the mouth, like hot pepper, and it hurt.",
        why: "قرب أول المقطع يتحدث تود عن الدجاج، فقد كان لاذعًا كالفلفل الحار (spicy) حتى آلم فمه.", errCat: "reading" },
      { q: "What did Katie buy on Sunday?", opts: ["A bag and a dress", "Shoes and a dress", "Shoes and a bag"], a: 1,
        whyEn: "Before the middle, Katie names the two things that she bought: new shoes and a new dress.",
        why: "قبل وسط المقطع تذكر كاتي ما اشترته: حذاء جديدًا وفستانًا جديدًا.", errCat: "reading" },
      { q: "Why did Katie buy the dress?", opts: ["She needed it for a party.", "A friend gave her the idea.", "The price was low."], a: 2,
        whyEn: "Before the middle, Todd asks about this, and Katie talks about the price. The dress was on sale, which means it cost less than usual. She had no party or special plan.",
        why: "قبل وسط المقطع يسألها تود عن ذلك، فتذكر الثمن: كان الفستان عليه تخفيض (on sale)، أي بأقل من ثمنه المعتاد، ولم يكن عندها حفل ولا مناسبة.", errCat: "reading" },
      { q: "Why does Todd like to go to the cinema alone?", opts: ["He goes only for the film.", "His friends don't like films.", "Tickets for one person are cheaper."], a: 0,
        whyEn: "After the middle, Todd explains this: he doesn't see many films, so when he goes, the film is the only thing that he wants.",
        why: "بعد وسط المقطع يشرح تود ذلك: فهو قليلًا ما يشاهد الأفلام، فإذا ذهب لم يرد إلا الفيلم نفسه.", errCat: "reading" },
      { q: "What did Todd do at the park on Sunday?", opts: ["He played football and then had lunch.", "He ran and took pictures.", "He sat and read a book."], a: 1,
        whyEn: "Near the end, Todd says that he went jogging, which means running slowly for exercise, and then he talks about his pictures.",
        why: "قرب آخر المقطع يقول تود إنه ركض في الحديقة (jogging أي الجري الخفيف للرياضة)، ثم يتحدث عن صوره.", errCat: "reading" },
      { q: "Why did Todd take a lot of photos at the park?", opts: ["Katie asked him for some of them.", "He needed them for his work at school.", "The good weather made it look great."], a: 2,
        whyEn: "Near the end, Todd gives the reason for his photos: the weather was very good that day, and the sky looked great.",
        why: "قرب آخر المقطع يذكر تود سبب تصويره: كان الجو جميلًا ذلك اليوم، والسماء بديعة.", errCat: "reading" }
    ]
  },

  writing: {
    minSentences: 5,
    taskEn: "Write at least 5 separate sentences about your last weekend or a short trip. It can be true, or you can make it up. Use the past simple in at least 3 sentences, and try one sentence with didn't (We didn't stay long.). Use at least 2 words from today's lesson (for example: relax, go shopping, beautiful, cheap, take photos). Write 'I' with a capital letter.",
    task: "اكتب 5 جمل منفصلة على الأقل عن عطلة نهاية الأسبوع الماضية أو رحلة قصيرة، حقيقية كانت أو من خيالك. استعمل الماضي البسيط في 3 جمل على الأقل، وجرّب جملة فيها didn't (We didn't stay long.)، واستعمل كلمتين على الأقل من كلمات الدرس (مثل relax وgo shopping وbeautiful وcheap وtake photos)، واكتب الضمير I بحرف كبير.",
    placeholder: "Last weekend, I went to …\nWe didn't …",
    checks: [
      { k: "sentences", tEn: "At least 5 separate sentences (end each with a period .), and 'I' is always a capital", t: "5 جمل منفصلة على الأقل (بنقطة في نهاية كل جملة)، والضمير I بحرف كبير دائمًا",
        ok: function(a, text){ return a.sentences >= 5 && !/\bi\b/.test(String(text || '')); } },
      { k: "past", tEn: "At least 3 sentences in the past", t: "3 جمل على الأقل في الماضي", ex: "I went · We relaxed · It was cheap · We didn't stay",
        ok: function(a, text){
          var re = new RegExp("\\b(?:didn't|couldn't|did\\s+not|was(?:n't)?|were(?:n't)?|" + SAME + "|" + IRR + "|[a-z]+ed)\\b", 'i');
          return plain(text).replace(NOT_PAST, ' ').split(/[.!?]+/).filter(function(x){ return re.test(x); }).length >= 3; } },
      { k: "form", tEn: "Correct past forms: didn't + base verb, Did you + base verb?, and no was before a base verb", t: "صيغ الماضي صحيحة: didn't مع أصل الفعل، وDid you مع أصل الفعل، ولا تأتي was قبل أصل الفعل", ex: "I didn't go (not: didn't went) · Did you buy? (not: Did you bought?) · I went (not: I was go) · bought (not: buyed)",
        ok: function(a, text){
          var s = plain(text).replace(NOT_PAST, ' ').replace(/\b(?:do|did)\s+was\b/gi, ' ');
          var past = "(?:" + IRR + "|[a-z]+ed)";
          if (new RegExp("\\bdid(?:n't|\\s+not)\\s+(?:(?:really|even|just|also)\\s+)?" + past + "\\b", 'i').test(s)) return false;
          if (new RegExp("\\bdid(?:n't)?\\s+(?:you|he|she|it|we|they|i|(?:my|your|his|her|our|their|the)\\s+[a-z]+)\\s+" + past + "\\b", 'i').test(s)) return false;
          if (/\b(?:was|were)\s+(?:go|buy|eat|drink|take|see|have|walk|visit|watch|stay|relax|went|bought|ate|drank|took|saw|had)\b/i.test(s)) return false;
          return !/\b(?:buyed|goed|eated|drinked|taked|haved|readed|runned|teached|catched|sleeped|thinked|bringed|comed|maked|gived)\b/i.test(s); } },
      { k: "vocab", tEn: "At least 2 words or phrases from today's lesson", t: "كلمتان أو عبارتان على الأقل من درس اليوم", ex: "relax · go shopping · beautiful · cheap · take photos · annual leave",
        ok: function(a, text){
          var s = plain(text);
          var found = [/\brelax(?:es|ed|ing)?\b/i, /\b(?:go|goes|went|going|gone)\s+shopping\b/i, /\bbeautiful\b/i, /\bcheap\b/i,
            /\b(?:take|takes|took|taking|taken)\s+(?:[a-z]+\s+){0,3}(?:photos?|pictures?)\b/i, /\bannual\s+leave\b/i]
            .filter(function(r){ return r.test(s); }).length;
          return found >= 2 || ((a && a.used) || []).length >= 2; } }
    ],
    modelMarked: "I usually <<s:stay>> at home at the weekend, but last weekend <<s:was>> different. I <<s:went>> to Jeddah with my two cousins. On Friday morning, we <<s:{relaxed|relax}>> on the beach and <<s:{took photos|take photos}>> of the sea. In the afternoon, we <<s:{went shopping|go shopping}>> near the hotel, and I <<s:bought>> some {cheap} dates for my mother. We <<s:didn't eat>> at the hotel. We <<s:had>> dinner at a small fish restaurant, and the food <<s:was>> very good.",
    model: "I usually stay at home at the weekend, but last weekend was different. I went to Jeddah with my two cousins. On Friday morning, we relaxed on the beach and took photos of the sea. In the afternoon, we went shopping near the hotel, and I bought some cheap dates for my mother. We didn't eat at the hotel. We had dinner at a small fish restaurant, and the food was very good.",
    legendEn: "Light blue = simple tenses (present simple and past simple)",
    legendAr: "الأزرق الفاتح للزمن البسيط (المضارع البسيط والماضي البسيط).",
    acceptExamples: [
      "Last Friday, I went to the beach with my brother. We relaxed, and we didn’t go home early. I took photos of the sea. The weather was beautiful. We had lunch at a small restaurant.",
      "I didn't go shopping last weekend. My mother went shopping, and she bought a cheap bag. Did you see my new phone? We ate at home on Saturday. I read a book, and I relaxed in my room.",
      "What did you do last weekend? I stayed at home on Friday, and it was boring. On Saturday, we drove to the farm. It was a beautiful day. My cousins took a lot of photos. We had fun.",
      "At 9pm, we arrived at the hotel. It wasn’t cheap, but it was beautiful. All we could do was go to bed. Were you tired? I usually wake up early, but I didn't need a clock that day.",
      "Just after midnight, we were driving home. Our flight was delayed, and we didn’t sleep. Where were you going? The tickets were cheap, and the hotel was beautiful. We need a holiday now.",
      "I woke up late on Friday. I did my homework after lunch. I read a book in the garden. Then I took a photo of my cat. It was a beautiful day.",
      "All we did was relax. We swam in the sea, and my brother rode a horse. I took some nice photos. The hotel was cheap. We could see the sea from our room."
    ]
  },

  askChips: [
    "لماذا نقول didn't go ولا نقول didn't went؟",
    "متى أستعمل was ومتى أستعمل did؟",
    "كيف أحفظ صيغ الماضي الشاذة؟",
    "كيف أعرف أن الجملة في الماضي لا في الحاضر؟"
  ],

  quiz: [
    { s: "Which sentence is correct?", opts: ["My friends didn't went to the mall on Thursday.", "My friends don't went to the mall on Thursday.", "My friends didn't go to the mall on Thursday."], a: 2, tag: "Grammar · قواعد",
      whyEn: "After 'didn't', we use the base verb: didn't go. 'went' is a past form, so it can't follow didn't or don't.",
      why: "بعد didn't يأتي أصل الفعل: didn't go، أما went فصيغة ماضٍ، فلا تأتي بعد didn't ولا don't.", errCat: "tense" },
    { s: "___ the children have fun at the swimming pool yesterday?", opts: ["Did", "Were", "Do"], a: 0, tag: "Grammar · قواعد",
      whyEn: "'yesterday' is a past time word, and 'have' is a base verb, so we need 'Did'. 'Were' can't come before a base verb, and 'Do' is for the present.",
      why: "yesterday كلمة وقت ماضية، وhave أصل الفعل، فيلزم Did، ولا تأتي Were قبل أصل الفعل، وDo للحاضر.", errCat: "tense" },
    { s: "My cousin ___ a new camera last month.", opts: ["buyed", "bought", "buys"], a: 1, tag: "Grammar · قواعد",
      whyEn: "'last month' is a past time word, and 'buy' is irregular: bought. 'buyed' is not a word, and 'buys' is present.",
      why: "last month كلمة وقت ماضية، وbuy فعل شاذ ماضيه bought، أما buyed فليست كلمة، وbuys للمضارع.", errCat: "tense" },
    { s: "The tour guide ___ very kind to us on our trip to Al-Ula.", opts: ["did", "was", "were"], a: 1, tag: "Grammar · قواعد",
      whyEn: "'kind' is an adjective, so the verb is be, with no 'did'. 'The tour guide' is one person, so we use 'was'.",
      why: "kind صفة، فالفعل be بلا did، وThe tour guide شخص واحد، فنستعمل was.", errCat: "be_verb" },
    { s: "Last night, I ___ two stories from my new book.", opts: ["read", "readed", "reading"], a: 0, tag: "Grammar · قواعد",
      whyEn: "'Last night' is a past time word. 'read' is irregular: the past looks the same as the base form, and it sounds like red. 'readed' is not a word.",
      why: "Last night كلمة وقت ماضية، وread فعل شاذ يُكتب ماضيه كأصله ويُنطق كـ red، أما readed فليست كلمة.", errCat: "tense" },
    { s: "My uncle usually sees his friends on Fridays, but last Friday he ___ his doctor.", opts: ["sees", "see", "saw"], a: 2, tag: "Grammar · قواعد",
      whyEn: "'last Friday' is a past time word, so we need the past form: saw. 'on Fridays' goes with 'sees' in the first part only.",
      why: "last Friday كلمة وقت ماضية، فتلزم صيغة الماضي saw، أما on Fridays فتخص sees في الجزء الأول وحده.", errCat: "tense" },
    { s: "My sister ___ to choose a new car this year, but she can't decide.", opts: ["is want", "wants", "wanting"], a: 1, tag: "Grammar · قواعد",
      whyEn: "'want' is a state verb, so it stays in the present simple, and 'she' needs -s: wants. 'is want' mixes be with a base verb, and 'wanting' has no 'be' verb.",
      why: "want فعل لا يأخذ ing، فيبقى في المضارع البسيط، وتحتاج she إلى s: wants، أما is want فتجمع be مع أصل الفعل، وwanting بلا فعل be.", errCat: "stative" },
    { s: "On Thursday, we ___ for new shoes at the big mall near our house.", opts: ["took photos", "relaxed", "went shopping"], a: 2, tag: "Vocabulary · مفردات",
      whyEn: "New shoes are something you buy, so they 'went shopping'. 'for new shoes' goes with shopping, not with the other two.",
      why: "الحذاء الجديد مما يُشترى، فالمناسب went shopping، وfor new shoes تناسب التسوق لا الخيارين الآخرين.", errCat: "vocab" },
    { s: "I didn't spend much on this bag. It was ___, but it looks good.", opts: ["cheap", "relaxed", "annual leave"], a: 0, tag: "Vocabulary · مفردات",
      whyEn: "'I didn't spend much' tells us the price was low, so the bag was 'cheap'.",
      why: "I didn't spend much تدل على أن الثمن قليل، فالحقيبة cheap أي رخيصة.", errCat: "vocab" },
    { s: "My uncle wasn't ill. He took two weeks of ___ and spent them with his family by the sea.", opts: ["sick leave", "annual leave", "driving licence"], a: 1, tag: "Legal Track · المسار القانوني",
      whyEn: "He wasn't ill, so this was not 'sick leave'. His paid holiday from work is 'annual leave'. A 'driving licence' is a document, not time away from work.",
      why: "لم يكن مريضًا، فليست sick leave، بل هي إجازته المدفوعة من العمل annual leave، أما driving licence فوثيقة لا إجازة.", errCat: "vocab" }
  ]
};
})();
