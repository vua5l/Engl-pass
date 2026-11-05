/* ===== الوحدة 3 · الدرس 3: Happy Accidents — Past Continuous: Negatives & Questions (6 مراحل · درس قراءة) ===== */
(function(){
LESSONS.u3l3 = {
  id: "u3l3",
  unit: 3,
  n: 3,
  mode: "reading",
  en: "Happy Accidents",
  ar: "اكتشافات بالصدفة: النفي والسؤال في الماضي المستمر",
  subEn: "Past Continuous: Negatives & Questions",
  canDoEn: "I can say what was not happening at a moment in the past with wasn't / weren't + -ing, ask questions with Was / Were and What were you doing when…?, and give short answers.",
  canDoAr: "أقدر أن أقول ما لم يكن جاريًا في لحظة من الماضي بـ wasn't / weren't مع ing، وأن أسأل بـ Was / Were وبـ What were you doing when…؟، وأن أجيب إجابة قصيرة.",
  descEn: "I can read and tell the story of a discovery that happened by accident, and ask a friend what they were doing at an important moment.",
  descAr: "أقدر أن أقرأ قصة اكتشاف جاء بالصدفة وأحكيها، وأن أسأل صديقًا عما كان يفعله في لحظة مهمة.",
  goals: [
    { en: "I can make Past Continuous negatives with wasn't / weren't + verb-ing, and choose the right form for each subject: he wasn't cooking, they weren't sleeping.", ar: "أقدر أن أنفي الماضي المستمر بـ wasn't / weren't مع الفعل وing، وأختار الصيغة المناسبة للفاعل: he wasn't cooking وthey weren't sleeping." },
    { en: "I can ask Past Continuous questions with Was / Were + subject + verb-ing, give short answers (Yes, I was / No, they weren't), and ask What were you doing when…?", ar: "أقدر أن أسأل في الماضي المستمر بـ Was / Were ثم الفاعل ثم الفعل وing، وأجيب إجابة قصيرة (Yes, I was وNo, they weren't)، وأسأل What were you doing when…؟" },
    { en: "I can choose between Did you see…? and Were you watching…?, and use today's six verbs: understood, forgot, kept, put, won and taught.", ar: "أقدر أن أفرّق بين Did you see…؟ وWere you watching…؟، وأستعمل أفعال اليوم الستة: understood وforgot وkept وput وwon وtaught." },
    { en: "I can use the 6 words of the lesson and the legal phrase 'get a patent' in 4 separate sentences about something I found or noticed by accident.", ar: "أقدر أن أستعمل كلمات الدرس الست مع العبارة القانونية get a patent في 4 جمل منفصلة عن شيء وجدته أو لاحظته بالصدفة." }
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
      dEn: "6 words about discoveries plus today's legal phrase ('get a patent'), with human audio and Oxford links.",
      d: "6 كلمات عن الاكتشافات مع العبارة القانونية اليومية (get a patent)، بنطق بشري وروابط Oxford.",
      items: [
        ["cards", "7 flashcards (6 words + 1 legal phrase) with human audio & Oxford link", "7 بطاقات (6 كلمات + عبارة قانونية) مع النطق البشري ورابط Oxford"],
        ["review", "2-round matching game", "لعبة توصيل من جولتين"],
        ["quiz", "8 context sentences: choose the right word", "8 جمل سياقية: اختر الكلمة المناسبة"]
      ]
    },
    grammar: {
      dEn: "How do we say that an action was NOT happening, and how do we ask about it? Learn wasn't / weren't + -ing, Was / Were questions, short answers, What were you doing when…?, and six new irregular verbs.",
      d: "كيف نقول إن حدثًا لم يكن جاريًا، وكيف نسأل عنه؟ تعلّم wasn't / weren't مع ing، والسؤال بـ Was / Were، والإجابة القصيرة، وWhat were you doing when…؟، وستة أفعال شاذة جديدة.",
      items: [
        ["book", "6 grammar cards (English first, Arabic on tap)", "6 بطاقات شرح (الإنجليزي أولًا، والعربي عند الطلب)"],
        ["quiz", "16 guided exercises (4 of each type), one question per screen", "16 تمرينًا موجّهًا (4 من كل نمط)، سؤال في كل شاشة"]
      ]
    },
    reading: {
      dEn: "An email from Omar, a pharmacy student in Jeddah, to his British friend Jack about two discoveries that happened by accident.",
      d: "إيميل من عمر، طالب الصيدلة في جدة، إلى صديقه البريطاني جاك عن اكتشافين جاءا بالصدفة.",
      items: [
        ["spark", "Predict before you read", "توقّع قبل القراءة"],
        ["clock", "First reading for the main idea with an advisory timer (no word taps)", "قراءة أولى للفكرة العامة بمؤقت إرشادي مريح ودون لمس الكلمات"],
        ["mail", "Second reading with word meanings, Oxford links, and 8 evidence questions", "قراءة ثانية مع معاني الكلمات باللمس و8 أسئلة فهم بدليلها من النص"]
      ]
    },
    writing: {
      dEn: "Write at least 4 separate sentences about something you found or noticed by accident, with negatives and one question in the Past Continuous.",
      d: "اكتب 4 جمل منفصلة على الأقل عن شيء وجدته أو لاحظته بالصدفة، بالنفي وسؤال واحد في الماضي المستمر.",
      items: [
        ["pen", "At least 4 separate sentences (capital letter + end mark for each)", "4 جمل منفصلة على الأقل بحرف كبير وعلامة في نهاية كل جملة"],
        ["spark", "Instant check: 2 negatives, 1 question, 2 lesson words", "تصحيح فوري: نفيان وسؤال وكلمتان من الدرس"]
      ]
    },
    quiz: {
      dEn: "10 shuffled questions on Past Continuous negatives and questions, today's verbs and lesson vocabulary (80% to pass), followed by a full Lesson Error Analysis.",
      d: "اختبار قصير من 10 أسئلة في نفي الماضي المستمر والسؤال به وأفعال اليوم ومفردات الدرس (النجاح من 80%)، يليه تحليل شامل لأخطاء الدرس وأسبابها.",
      items: [
        ["quiz", "10 questions: 7 grammar, 2 vocabulary, 1 legal (80% passing score)", "10 أسئلة: 7 في القواعد و2 في المفردات وسؤال قانوني واحد (النجاح من 80%)"],
        ["review", "Error Analysis grouped by category and root cause", "تحليل أخطاء الدرس وأسبابها مصنّفة حسب الفئة"]
      ]
    }
  },

  /* ---------- المرحلة 1: الاسترجاع النشط ---------- */
  recall: [
    {
      id: "rc-0",
      promptAr: "حادث (اسم من الدرس الثاني)",
      promptEn: "Something bad that happens on the road, for example when a car hits another car (1 word)",
      sentPre: "The road is closed this morning because of an",
      sentPost: "near the bridge.",
      ans: ["accident"],
      hint: "a _ _ _ _ _ _ t (8 letters)",
      spellNoteEn: "Spelled a-c-c-i-d-e-n-t, with double c. The two c's sound different: /ks/. Today you also meet the phrase 'by accident'.",
      spellNote: "تُكتب a-c-c-i-d-e-n-t بحرفي c، ويُنطقان معًا /ks/، وستلقى اليوم عبارة by accident.",
      errCat: "spelling"
    },
    {
      id: "rc-1",
      promptAr: "مصاب (صفة من الدرس الثاني)",
      promptEn: "Hurt in an accident or in sport (1 word)",
      sentPre: "After the accident, two nurses helped the",
      sentPost: "passengers off the bus.",
      ans: ["injured"],
      hint: "i _ _ _ _ _ d (7 letters)",
      spellNoteEn: "Spelled i-n-j-u-r-e-d. We say 'be injured' or 'get injured'; the -ed sounds like /d/.",
      spellNote: "تُكتب i-n-j-u-r-e-d، ونقول be injured أو get injured، وتُنطق ed فيها /d/.",
      errCat: "spelling"
    },
    {
      id: "rc-2",
      promptAr: "خطير أو بالغ الأثر (صفة من الدرس الثاني)",
      promptEn: "Very bad or important, not small (1 word)",
      sentPre: "Don't worry: it is only a cold, not a",
      sentPost: "illness.",
      ans: ["serious"],
      hint: "s _ _ _ _ _ s (7 letters)",
      spellNoteEn: "Spelled s-e-r-i-o-u-s, with -ious at the end, like 'delicious'.",
      spellNote: "تُكتب s-e-r-i-o-u-s وآخرها ious.",
      errCat: "spelling"
    },
    {
      id: "rc-3",
      promptAr: "يسقط من فوق شيء كالدراجة أو الحصان (فعل من كلمتين من الدرس الثاني)",
      promptEn: "Drop to the ground from something like a bike or a horse (2 words)",
      sentPre: "My little brother rides slowly, because he doesn't want to",
      sentPost: "his bike.",
      ans: ["fall off"],
      hint: "f _ _ _ _ _ f (7 letters, 2 words)",
      spellNoteEn: "Two words: fall + off, with double l and double f. The past is 'fell off'.",
      spellNote: "كلمتان: fall ثم off، وفيهما حرفا l وحرفا f، وماضيها fell off.",
      errCat: "spelling"
    },
    {
      id: "rc-4",
      promptAr: "رخصة القيادة (العبارة القانونية من الدرس الثاني)",
      promptEn: "Legal phrase from Lesson 2: the official card that says you can drive a car (2 words)",
      sentPre: "The police stopped our car and asked to see my father's",
      sentPost: ".",
      ans: ["driving licence", "driving license", "driver's license", "driver's licence", "drivers license", "drivers licence"],
      isLegal: true,
      hint: "d _ _ _ _ _ _ _ _ _ _ _ _ e (14 letters, 2 words)",
      spellNoteEn: "Two words: driving + licence. In British English, the noun is licence with c; North Americans say 'driver's license' with s.",
      spellNote: "كلمتان: driving ثم licence، والاسم في البريطانية بحرف c، ويقول أهل أمريكا الشمالية driver's license بحرف s.",
      errCat: "spelling"
    }
  ],

  /* ---------- العبارة القانونية اليومية (المسار القانوني A2) ---------- */
  legalPhrase: {
    en: "get a patent",
    headword: "get a patent",
    pos: "legal phrase",
    ar: "يحصل على براءة اختراع (حق قانوني يحمي الاختراع)",
    say: "قِتْ أَ بَاتِنْت",
    ex: "The young engineer wants to get a patent for her new water filter.",
    exAr: "تريد المهندسة الشابة أن تحصل على براءة اختراع لمرشّح الماء الجديد الذي صنعته.",
    tipEn: "A 'patent' is a legal right from the government: for some years, other people can't make or sell your invention without your permission. Past: got a patent; negative: didn't get a patent. First you 'apply for a patent', then you 'get' it. British speakers say 'patent' in two ways: /ˈpætnt/ and /ˈpeɪtnt/.",
    tip: "البراءة patent حق قانوني تمنحه الدولة، فلا يصنع غيرك اختراعك ولا يبيعه سنوات دون إذنك. وماضيها got a patent، ونفيها didn't get a patent، وتتقدم أولًا بطلب apply for a patent ثم تحصل عليها get a patent. وينطقها البريطانيون بوجهين: /ˈpætnt/ و/ˈpeɪtnt/.",
    legal: true,
    oxfordSlug: "patent_1",
    wikiFiles: ["En-us-get.ogg", "En-us-a-unstressed.ogg", "En-uk-patent.ogg"],
    wikiCredit: "File:En-us-get.ogg, File:En-us-a-unstressed.ogg & File:En-uk-patent.ogg · Wikimedia Commons"
  },

  /* ---------- المفردات (6 كلمات + العبارة القانونية = 7 عبارات في الدرس) ---------- */
  vocab: [
    { en: "discover", pos: "verb", ar: "يكتشف (شيئًا موجودًا لم يكن معروفًا)", say: "دِسْكَفَر",
      ex: "A farmer in our village discovered some old coins under a tree.", exAr: "اكتشف مزارع في قريتنا قطعًا نقدية قديمة تحت شجرة.",
      tipEn: "discover = find something that was already there, but nobody knew about it. Collocations: discover a new medicine, discover penicillin. Regular verb: discover → discovered. The noun is 'a discovery'.",
      tip: "discover أن تجد شيئًا كان موجودًا ولم يعرفه أحد، ومن تعابيرها الثابتة discover a new medicine وdiscover penicillin. والفعل منتظم ماضيه discovered، والاسم منه a discovery.",
      oxfordSlug: "discover",
      wikiFile: "En-us-discover.ogg",
      wikiCredit: "File:En-us-discover.ogg · Wikimedia Commons" },
    { en: "invent", pos: "verb", ar: "يخترع (يصنع شيئًا جديدًا لم يكن موجودًا)", say: "إِنْفِنْت",
      ex: "My grandfather invented a simple tool for picking dates.", exAr: "اخترع جدي أداة بسيطة لجني التمر.",
      tipEn: "invent = make something new that was not there before. Compare: people discover what already exists, and invent what is new. Collocation: invent the microwave oven. Regular verb: invent → invented. The noun is 'an invention'.",
      tip: "invent أن تصنع شيئًا جديدًا لم يكن موجودًا، فنكتشف discover ما هو موجود، ونخترع invent ما هو جديد، ومن تعابيرها الثابتة invent the microwave oven. والفعل منتظم ماضيه invented، والاسم منه an invention.",
      oxfordSlug: "invent",
      wikiFile: "En-us-invent.ogg",
      wikiCredit: "File:En-us-invent.ogg · Wikimedia Commons" },
    { en: "by accident", pos: "phrase", ar: "بالصدفة، أو دون قصد", say: "بَايْ أَكْسِيدِنْت",
      ex: "I deleted my holiday photos by accident, and I was very sad.", exAr: "حذفت صور إجازتي دون قصد، فحزنت كثيرًا.",
      tipEn: "by accident = not planned, without wanting to. There is no 'an': say 'by accident', not 'by an accident'. Its meaning is different from 'a car accident'. We usually put it at the end of the sentence.",
      tip: "by accident تعني دون تخطيط ولا قصد، ولا نضع an قبل accident، فلا نقول by an accident، ومعناها غير معنى a car accident أي حادث السيارة، والغالب أن تأتي في آخر الجملة.",
      oxfordSlug: "accident",
      wikiFiles: ["En-us-by.ogg", "En-us-accident.ogg"],
      wikiCredit: "File:En-us-by.ogg & File:En-us-accident.ogg · Wikimedia Commons" },
    { en: "notice", pos: "verb", ar: "يلاحظ (ينتبه إلى شيء)", say: "نُوتِس",
      ex: "Did you notice the new sign on the pharmacy door?", exAr: "هل لاحظت اللافتة الجديدة على باب الصيدلية؟",
      tipEn: "Patterns: notice something (notice something strange) and notice that + sentence (I noticed that he was tired). Regular verb: notice → noticed; the e stays and we add only -d.",
      tip: "النمطان: notice something مثل notice something strange، وnotice that وبعدها جملة مثل I noticed that he was tired. والفعل منتظم ماضيه noticed، تبقى e ونزيد d وحدها.",
      oxfordSlug: "notice_1",
      wikiFile: "En-us-notice.ogg",
      wikiCredit: "File:En-us-notice.ogg · Wikimedia Commons" },
    { en: "melt", pos: "verb", ar: "يذوب أو يذيب (بالحرارة)", say: "مِلْت",
      ex: "Butter melts quickly in a hot pan.", exAr: "تذوب الزبدة سريعًا في المقلاة الساخنة.",
      tipEn: "Things melt because of heat: ice, butter, snow, chocolate. Regular verb: melt → melted. We often use the Past Continuous for it, because melting takes time: The chocolate was melting.",
      tip: "يذوب الشيء بالحرارة كالجليد والزبدة والثلج والشوكولاتة، والفعل منتظم ماضيه melted، ويكثر مع الماضي المستمر لأن الذوبان يأخذ وقتًا: The chocolate was melting.",
      oxfordSlug: "melt",
      wikiFile: "En-us-melt.ogg",
      wikiCredit: "File:En-us-melt.ogg · Wikimedia Commons" },
    { en: "lab", pos: "noun", ar: "مختبر", say: "لَاب",
      ex: "The new science lab at our school has twelve microscopes.", exAr: "في مختبر العلوم الجديد بمدرستنا اثنا عشر مجهرًا.",
      tipEn: "lab is the short form of 'laboratory', and we use it in everyday English. Use 'in': in the lab. Common phrases: a science lab, a language lab.",
      tip: "lab اختصار laboratory، وهو الشائع في الكلام اليومي، ونقول in the lab بحرف الجر in، ويقال a science lab وa language lab.",
      oxfordSlug: "lab",
      wikiFile: "LL-Q1860 (eng)-Vealhurl-lab.wav",
      wikiCredit: "File:LL-Q1860 (eng)-Vealhurl-lab.wav · Vealhurl / Lingua Libre, Wikimedia Commons" }
  ],

  vocabGaps: [
    { s: "Scientists still ___ new kinds of fish in the deep sea every year.", opts: ["discover", "invent", "melt"], a: 0,
      whyEn: "'discover' means find something that was already there. The fish were in the sea, but nobody knew about them, so people don't 'invent' them.",
      why: "discover أن تجد شيئًا كان موجودًا، فالأسماك في البحر من قبل ولم يعرفها أحد، فلا يقال إن الناس يخترعونها.", errCat: "vocab" },
    { s: "There is nothing like it in the shops: my cousin ___ this small machine, and it waters the plants when we are away.", opts: ["melted", "invented", "noticed"], a: 1,
      whyEn: "'invent' means make something new. There was no machine like this before, and the speaker's cousin made it.",
      why: "invent أن تصنع شيئًا جديدًا، ولم تكن آلة كهذه موجودة من قبل، وقد صنعها ابن العم.", errCat: "vocab" },
    { s: "I didn't want to call you. I pressed your number ___.", opts: ["with a patent", "for the lab", "by accident"], a: 2,
      whyEn: "'by accident' means without wanting to. The speaker didn't want to call, so the call was not planned.",
      why: "by accident تعني دون قصد، والمتكلم لم يرد الاتصال، فلم يكن اتصاله مقصودًا.", errCat: "vocab" },
    { s: "Nobody ___ the small hole in my shirt until I got home.", opts: ["noticed", "melted", "invented"], a: 0,
      whyEn: "'notice' means see something and pay attention to it. The hole was small, so nobody saw it.",
      why: "notice أن ترى الشيء وتنتبه إليه، والثقب صغير فلم ينتبه إليه أحد.", errCat: "vocab" },
    { s: "It was very hot in the park, and the ice cream ___ before I ate it.", opts: ["noticed", "discovered", "melted"], a: 2,
      whyEn: "'melt' means become soft or liquid because of heat. It was very hot, so the ice cream changed before the speaker ate it.",
      why: "melt أن يلين الشيء أو يصير سائلًا بالحرارة، والجو حار جدًا، فذاب الآيس كريم قبل أكله.", errCat: "vocab" },
    { s: "First-year pharmacy students do their first tests with real medicine in the ___.", opts: ["accident", "lab", "moment"], a: 1,
      whyEn: "A 'lab' is a room for science work and tests. The phrase 'in the lab' tells us the place.",
      why: "lab غرفة للعمل العلمي والتجارب، وعبارة in the lab تدل على المكان.", errCat: "vocab" },
    { s: "Before you sell your new machine, ___, so other companies can't copy it.", opts: ["melt the lab", "get a patent", "notice an accident"], a: 1,
      whyEn: "'get a patent' means get a legal right to your invention. With this right, other companies can't copy it without your permission.",
      why: "get a patent أن تحصل على حق قانوني في اختراعك، فلا تقلّده الشركات الأخرى دون إذنك.", errCat: "vocab" },
    { s: "On their school trip, the boys ___ a small cave behind the old mosque. Nobody in the group knew about it.", opts: ["invented", "discovered", "melted"], a: 1,
      whyEn: "The cave was already there, and nobody in the group knew about it. Finding something like this is 'discover', and its past is 'discovered'.",
      why: "الكهف موجود من قبل ولم يعرفه أحد من المجموعة، فالعثور عليه اكتشاف discover، وماضيه discovered.", errCat: "vocab" }
  ],

  /* ---------- المرحلة 3: بطاقات شرح القواعد ---------- */
  gCards: [
    {
      tEn: "Negatives: wasn't / weren't + -ing",
      t: "النفي: wasn't وweren't مع ing",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Negatives: wasn\'t / weren\'t + -ing</span><small>نفي الماضي المستمر بثلاث خطوات صغيرة</small></h2>' +
        '<p class="en-p" dir="ltr">In Lesson 1 you learned the positive: <b>was / were + verb-ing</b>. To say that an action was <b>not</b> happening, follow three small steps:</p>' +
        '<ul class="spell" dir="ltr">' +
          '<li><b>Step 1</b> · Find was or were.<span class="s-en">The nurse <b>was</b> checking the files.</span></li>' +
          '<li><b>Step 2</b> · Add <b>n\'t</b>.<span class="s-en">was → wasn\'t · were → weren\'t</span></li>' +
          '<li><b>Step 3</b> · Keep the verb with -ing.<span class="s-en">The nurse <b>wasn\'t checking</b> the files.</span></li>' +
        '</ul>' +
        '<div class="tbl"><table><thead><tr><th>Subject</th><th>Negative · النفي</th><th>Example · مثال</th></tr></thead><tbody>' +
        '<tr><td>I / he / she / it</td><td>wasn\'t <small>(was not)</small></td><td>My aunt <span class="hs">wasn\'t driving</span>.</td></tr>' +
        '<tr><td>you / we / they</td><td>weren\'t <small>(were not)</small></td><td>We <span class="hc">weren\'t eating</span>.</td></tr></tbody></table></div>' +
        '<div class="tip" dir="ltr"><p><b>Remember · تذكّر:</b> there is no <b>didn\'t</b> here, because <b>wasn\'t / weren\'t</b> already makes the negative.</p><div class="pairs"><span class="yes">Hind wasn\'t painting.</span><span class="no">Hind didn\'t painting.</span></div></div>',
      arHtml:
        '<p>تعلمت في الدرس الأول الإثبات: <bdi class="en">was / were</bdi> مع الفعل وing. ولتقول إن حدثًا لم يكن جاريًا اتبع ثلاث خطوات: ١) جِد <bdi class="en">was</bdi> أو <bdi class="en">were</bdi>، ٢) أضف إليها <bdi class="en">n\'t</bdi>، ٣) أبقِ الفعل مع ing.</p>' +
        '<p>فـ <bdi class="en">The nurse was checking the files</bdi> تصير <bdi class="en">The nurse wasn\'t checking the files</bdi>. ونقول <bdi class="en">wasn\'t</bdi> مع <bdi class="en">I, he, she, it</bdi>، و<bdi class="en">weren\'t</bdi> مع <bdi class="en">you, we, they</bdi>، ولا نضيف <bdi class="en">didn\'t</bdi>، لأن النفي تمّ بـ <bdi class="en">wasn\'t / weren\'t</bdi>.</p>'
    },
    {
      tEn: "Questions and Short Answers",
      t: "السؤال والإجابة القصيرة",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Questions and Short Answers</span><small>السؤال بـ Was / Were والإجابة القصيرة</small></h2>' +
        '<p class="en-p" dir="ltr">To make a question, move <b>was / were</b> before the subject. The verb stays with <b>-ing</b>:</p>' +
        '<p class="formula"><b>Was / Were</b> + subject + verb-ing + …?</p>' +
        '<div class="xbox"><span class="xtag s" dir="ltr">Statement → Question · من الخبر إلى السؤال</span><p class="xen">The children were playing. → Were the children playing?</p></div>' +
        '<p class="en-p" dir="ltr">In a short answer, use <b>was / were</b> again, with no -ing:</p>' +
        '<div class="tbl"><table><thead><tr><th>Question · السؤال</th><th>Yes</th><th>No</th></tr></thead><tbody>' +
        '<tr><td>Was your brother fixing the car?</td><td><span class="hs">Yes, he was.</span></td><td><span class="hc">No, he wasn\'t.</span></td></tr>' +
        '<tr><td>Were the neighbours moving house?</td><td><span class="hs">Yes, they were.</span></td><td><span class="hc">No, they weren\'t.</span></td></tr></tbody></table></div>' +
        '<div class="tip" dir="ltr"><p><b>Same verb · الفعل نفسه:</b> a question with <b>were</b> gets an answer with <b>was / were</b>, not <b>did</b>.</p><div class="pairs"><span class="yes">Were you resting? Yes, I was.</span><span class="no">Were you resting? Yes, I did.</span></div></div>',
      arHtml:
        '<p>لتكوّن السؤال قدّم <bdi class="en">was / were</bdi> على الفاعل، ويبقى الفعل مع ing، فـ <bdi class="en">The children were playing</bdi> تصير <bdi class="en">Were the children playing?</bdi></p>' +
        '<p>وفي الإجابة القصيرة تعود <bdi class="en">was / were</bdi> بلا ing: <bdi class="en">Yes, he was</bdi> و<bdi class="en">No, they weren\'t</bdi>. ولا نجيب بـ <bdi class="en">did</bdi> عن سؤال بدأ بـ <bdi class="en">was / were</bdi>، فلا نقول <bdi class="en">Yes, I did</bdi>.</p>'
    },
    {
      tEn: "What Were You Doing When…?",
      t: "ماذا كنت تفعل حين…؟",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">What Were You Doing When…?</span><small>أسئلة What وWhere وWhy، وسؤال when</small></h2>' +
        '<p class="en-p" dir="ltr">For more information, put a question word first. The order after it stays the same:</p>' +
        '<p class="formula"><b>What / Where / Why</b> + was / were + subject + verb-ing?</p>' +
        '<div class="xbox"><span class="xtag s" dir="ltr">Where · المكان</span><p class="xen">Where were you working last summer?</p></div>' +
        '<div class="xbox"><span class="xtag c" dir="ltr">Why · السبب</span><p class="xen">Why was the baby crying?</p></div>' +
        '<p class="en-p" dir="ltr">In Lesson 2 you learned the long action and the short event with <b>when</b>. Now you can ask about them. The Past Continuous is in the question, and the short event after <b>when</b> is in the Past Simple:</p>' +
        '<div class="xbox"><span class="xtag s" dir="ltr">Question and answer · سؤال وجوابه</span><p class="xen">What were you doing when your brother called? · I was washing the car.</p></div>' +
        '<div class="tip" dir="ltr"><p><b>After when · بعد when:</b> the short event takes the Past Simple.</p><div class="pairs"><span class="yes">… when the glass broke?</span><span class="no">… when the glass was breaking?</span></div></div>',
      arHtml:
        '<p>لتطلب معلومة ضع كلمة السؤال أولًا، ويبقى الترتيب بعدها كما هو: <bdi class="en">What / Where / Why</bdi> ثم <bdi class="en">was / were</bdi> ثم الفاعل ثم الفعل وing، مثل <bdi class="en">Why was the baby crying?</bdi></p>' +
        '<p>وقد تعلمت في الدرس الثاني الحدث الطويل والحدث القصير مع <bdi class="en">when</bdi>، وتستطيع الآن أن تسأل عنهما: <bdi class="en">What were you doing when your brother called?</bdi> فالسؤال بالماضي المستمر، والحدث القصير بعد <bdi class="en">when</bdi> بالماضي البسيط <bdi class="en">called</bdi>.</p>'
    },
    {
      tEn: "Did or Were? And Six New Verbs",
      t: "Did أم Were؟ وستة أفعال جديدة",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Did or Were? And Six New Verbs</span><small>نختار بين Did وWere، وأفعال اليوم الستة</small></h2>' +
        '<p class="en-p" dir="ltr"><b>Did + base verb</b> is the Past Simple: it asks about a finished action or a past state (Did you understand?). <b>Was / Were + verb-ing</b> asks about an action in progress at a moment in the past:</p>' +
        '<div class="xbox"><span class="xtag s" dir="ltr">Finished action · حدث مكتمل</span><p class="xen">Did you see the new film last week?</p></div>' +
        '<div class="xbox"><span class="xtag c" dir="ltr">In progress at that moment · جارٍ في تلك اللحظة</span><p class="xen">Were you watching the news at eight?</p></div>' +
        '<p class="en-p" dir="ltr">Here are today\'s six new irregular verbs:</p>' +
        '<div class="tbl"><table><thead><tr><th>Base · المجرد</th><th>Past · الماضي</th><th>-ing</th></tr></thead><tbody>' +
        '<tr><td>forget <small>ينسى</small></td><td><span class="hc">forgot</span></td><td>forgetting</td></tr>' +
        '<tr><td>keep <small>يحتفظ</small></td><td><span class="hc">kept</span></td><td>keeping</td></tr>' +
        '<tr><td>put <small>يضع</small></td><td><span class="hc">put</span></td><td>putting</td></tr>' +
        '<tr><td>win <small>يفوز</small></td><td><span class="hc">won</span></td><td>winning</td></tr>' +
        '<tr><td>teach <small>يعلّم</small></td><td><span class="hc">taught</span></td><td>teaching</td></tr>' +
        '<tr><td>understand <small>يفهم</small></td><td><span class="hc">understood</span></td><td>no -ing</td></tr></tbody></table></div>' +
        '<p class="en-p" dir="ltr"><b>Sound and spelling:</b> taught has the same ending sound as bought and thought · won sounds like one · put does not change in the past · double the last letter in forgetting, putting and winning.</p>' +
        '<div class="tip" dir="ltr"><p><b>State verb:</b> understand is like know: it takes no -ing in the past.</p><div class="pairs"><span class="yes">Sami understood the lesson.</span><span class="no">Sami was understanding the lesson.</span></div></div>',
      arHtml:
        '<p><bdi class="en">Did</bdi> مع الفعل المجرد تسأل عن حدث مكتمل أو حالة ماضية (<bdi class="en">Did you see the new film last week?</bdi>)، و<bdi class="en">Was / Were</bdi> مع الفعل وing تسأل عن حدث كان جاريًا في لحظة من الماضي (<bdi class="en">Were you watching the news at eight?</bdi>).</p>' +
        '<p>واحفظ أفعال اليوم الستة: <bdi class="en">forget / forgot</bdi> و<bdi class="en">keep / kept</bdi> و<bdi class="en">put / put</bdi> (لا يتغير في الماضي) و<bdi class="en">win / won</bdi> (تُنطق كـ <bdi class="en">one</bdi>) و<bdi class="en">teach / taught</bdi> و<bdi class="en">understand / understood</bdi>. ويتضاعف الحرف الأخير في <bdi class="en">forgetting</bdi> و<bdi class="en">putting</bdi> و<bdi class="en">winning</bdi>.</p>' +
        '<p>أما <bdi class="en">understand</bdi> ففعل لا يأخذ ing مثل <bdi class="en">know</bdi>، فنقول <bdi class="en">understood</bdi> ولا نقول <bdi class="en">was understanding</bdi>.</p>'
    },
    {
      tEn: "Common Arab Mistakes",
      t: "أخطاء العرب الشائعة",
      bilingual: true,
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Common Arab Mistakes</span><small>أخطاء يقع فيها كثير من العرب في نفي الماضي المستمر والسؤال به</small></h2>' +
        '<ul class="mist">' +
          '<li><span class="no">Did you was working at six?</span><span class="yes">Were you working at six?</span><p class="en-m" dir="ltr">Don\'t put <b>did</b> and <b>was</b> together. The question starts with <b>Was / Were</b>, and <b>you</b> takes <b>were</b>.</p><p>لا نجمع <bdi class="en">did</bdi> و<bdi class="en">was</bdi> في سؤال واحد، فالسؤال يبدأ بـ <bdi class="en">Was / Were</bdi>، ومع <bdi class="en">you</bdi> نقول <bdi class="en">were</bdi>.</p></li>' +
          '<li><span class="no">Were you work on Friday night?</span><span class="yes">Were you working on Friday night?</span><p class="en-m" dir="ltr">After <b>Was / Were</b> and the subject, the verb needs <b>-ing</b>. The base verb goes with <b>Did</b>.</p><p>بعد <bdi class="en">Was / Were</bdi> والفاعل يأتي الفعل مع ing، أما الفعل المجرد فمع <bdi class="en">Did</bdi>.</p></li>' +
          '<li><span class="no">I didn\'t was sleeping at ten.</span><span class="yes">I wasn\'t sleeping at ten.</span><p class="en-m" dir="ltr">The negative comes from was / were: <b>wasn\'t / weren\'t</b>. Don\'t add <b>didn\'t</b>.</p><p>النفي يكون بـ was / were نفسها: <bdi class="en">wasn\'t / weren\'t</bdi>، فلا نضيف <bdi class="en">didn\'t</bdi>.</p></li>' +
          '<li><span class="no">We weren\'t understanding the lecture.</span><span class="yes">We didn\'t understand the lecture.</span><p class="en-m" dir="ltr"><b>understand</b> is a state verb, so we use the Past Simple: <b>understood</b>, or <b>didn\'t understand</b> in the negative.</p><p><bdi class="en">understand</bdi> فعل لا يأخذ ing، فنستعمل الماضي البسيط: <bdi class="en">understood</bdi>، ونفيه <bdi class="en">didn\'t understand</bdi>.</p></li>' +
        '</ul>'
    },
    {
      tEn: "Summary",
      t: "الخلاصة",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Quick Summary</span><small>الخلاصة</small></h2>' +
        '<div class="sumc" dir="ltr"><h3>In Three Lines · في ثلاثة أسطر</h3>' +
          '<p><b>Negative · النفي</b><span>wasn\'t (I, he, she, it) · weren\'t (you, we, they) + verb-ing</span></p>' +
          '<p><b>Question · السؤال</b><span>Was / Were + subject + verb-ing? · Yes, I was. · No, they weren\'t.</span></p>' +
          '<p><b>Question word · كلمة السؤال</b><span>What were you doing when + Past Simple?</span></p>' +
        '</div>' +
        '<p class="en-p" dir="ltr">Now let\'s practise: 16 guided exercises with brand-new sentences.</p>',
      arHtml:
        '<p><b>النفي</b> بـ <bdi class="en">wasn\'t / weren\'t</bdi> مع الفعل وing، و<b>السؤال</b> بتقديم <bdi class="en">Was / Were</bdi> على الفاعل، والإجابة القصيرة بـ <bdi class="en">was / were</bdi> لا بـ <bdi class="en">did</bdi>.</p>' +
        '<p>ومع كلمة السؤال نقول <bdi class="en">What were you doing when…?</bdi> والحدث القصير بعد <bdi class="en">when</bdi> بالماضي البسيط.</p>'
    }
  ],

  /* ---------- المرحلة 3: تمارين القواعد ---------- */
  gA: [
    { s: "The nurses ___ at noon; they were having lunch in the canteen.", opts: ["weren't working", "wasn't working"], a: 0,
      whyEn: "'The nurses' is plural (they), so the negative is weren't + verb-ing. wasn't goes with I, he, she and it.",
      why: "The nurses جمع (they)، فالنفي weren't مع الفعل وing، أما wasn't فمع I وhe وshe وit.", errCat: "agreement" },
    { s: "___ your sister baking a cake when you came home?", opts: ["Did", "Was"], a: 1,
      whyEn: "The verb has -ing (baking), so this is the Past Continuous, and its question starts with Was / Were. Did goes with a base verb.",
      why: "الفعل فيه ing، فهو ماضٍ مستمر، وسؤاله يبدأ بـ Was / Were، أما Did فتأتي مع الفعل المجرد.", errCat: "be_verb" },
    { s: "'Were you using the oven at six?' 'No, I ___.'", opts: ["wasn't", "didn't"], a: 0,
      whyEn: "The question starts with Were, so the short answer uses was / were, not did. With I, we say wasn't.",
      why: "السؤال بدأ بـ Were، فالإجابة القصيرة بـ was / were لا بـ did، ومع I نقول wasn't.", errCat: "be_verb" },
    { s: "___ you keep the receipt for your new glasses?", opts: ["Were", "Did"], a: 1,
      whyEn: "'keep' is a base verb with no -ing, so the question needs Did. With Were, we need verb-ing.",
      why: "keep فعل مجرد بلا ing، فالسؤال بـ Did، أما Were فيأتي بعدها الفعل مع ing.", errCat: "tense" }
  ],

  gB: [
    { s: "The chef weren't using the new oven at lunchtime.", ok: false, fix: "The chef wasn't using the new oven at lunchtime.",
      whyEn: "'The chef' is one person (he or she), so the negative is wasn't, not weren't.",
      why: "The chef شخص واحد (he أو she)، فالنفي wasn't لا weren't.", errCat: "agreement" },
    { s: "Did your parents were shopping at the mall on Friday?", ok: false, fix: "Were your parents shopping at the mall on Friday?",
      whyEn: "We don't use did and were together. A Past Continuous question starts with Was / Were: Were + your parents + shopping.",
      why: "لا نجمع did وwere في سؤال واحد، فسؤال الماضي المستمر يبدأ بـ Was / Were: Were ثم your parents ثم shopping.", errCat: "be_verb" },
    { s: "We weren't using the old fridge, so we kept it in the garage.", ok: true,
      whyEn: "Correct: weren't + verb-ing goes with we, and kept is the past of keep.",
      why: "صحيحة: weren't مع الفعل وing تناسب we، وkept ماضي keep.", errCat: "tense" },
    { s: "I wasn't understanding the doctor, so I asked her to explain it again.", ok: false, fix: "I didn't understand the doctor, so I asked her to explain it again.",
      whyEn: "'understand' is a state verb, so it doesn't take -ing here. Use the Past Simple negative: didn't understand.",
      why: "understand فعل لا يأخذ ing هنا، ونستعمل نفي الماضي البسيط: didn't understand.", errCat: "stative" }
  ],

  gC: [
    { pre: "When the nurse put the tray on the table, the patient", verb: "not / sleep · Past Continuous", post: "at all; he was reading a newspaper.", ans: ["wasn't sleeping", "was not sleeping"],
      whyEn: "'the patient' is one person, so we use wasn't, and the verb takes -ing. He was doing something else at that moment.",
      why: "the patient شخص واحد، فنقول wasn't والفعل مع ing، فقد كان يفعل شيئًا آخر في تلك اللحظة.", errCat: "tense" },
    { pre: "When I called you yesterday evening,", verb: "you / have · Past Continuous", post: "dinner with your family?", ans: ["were you having"],
      whyEn: "'When I called you' gives us a moment in the past, so we ask about an action in progress at that moment. Were comes before you, and the verb takes -ing: having, with no e.",
      why: "When I called you تحدد لحظة في الماضي، فنسأل عن حدث كان جاريًا فيها، فتتقدم Were على you، ويأتي الفعل مع ing: having بحذف e.", errCat: "word_order" },
    { pre: "What", verb: "your mother / cook · Past Continuous", post: "when you woke up?", ans: ["was your mother cooking"],
      whyEn: "After What, the order is was / were + subject + verb-ing. 'your mother' is one person, so we use was.",
      why: "بعد What يأتي was / were ثم الفاعل ثم الفعل وing، وyour mother مفرد، فنقول was.", errCat: "word_order" },
    { pre: "I", verb: "forget · Past Simple", post: "my keys yesterday, so I went back to the lab for them.", ans: ["forgot"],
      whyEn: "This is one finished action yesterday, so we use the Past Simple. forget is irregular: its past is forgot, not 'forgetted'.",
      why: "هذا حدث واحد مكتمل أمس، فنستعمل الماضي البسيط، وforget فعل شاذ ماضيه forgot لا forgetted.", errCat: "tense" }
  ],

  gD: [
    { chips: ["cleaning", "Why were the students", "the lab", "after the lecture?"], ans: "Why were the students cleaning the lab after the lecture?",
      whyEn: "Why were + subject (the students) + verb-ing (cleaning) + object (the lab) + time (after the lecture).",
      why: "Why were ثم الفاعل the students ثم الفعل cleaning ثم المفعول the lab ثم الزمن after the lecture.", errCat: "word_order" },
    { chips: ["last week.", "My grandfather", "his medicine", "wasn't taking"], ans: "My grandfather wasn't taking his medicine last week.",
      whyEn: "Subject (My grandfather) + wasn't + verb-ing (taking) + object (his medicine) + time (last week).",
      why: "الفاعل My grandfather ثم wasn't taking ثم المفعول his medicine ثم الزمن last week.", errCat: "word_order" },
    { chips: ["doing", "What were", "the fans", "when the team won the cup?"], ans: "What were the fans doing when the team won the cup?",
      whyEn: "What were + subject (the fans) + verb-ing (doing), then when + the short event in the Past Simple (won, the past of win).",
      why: "What were ثم الفاعل the fans ثم doing، ثم when والحدث القصير بالماضي البسيط won، وهو ماضي win.", errCat: "word_order" },
    { chips: ["staying", "Where was", "when she got the job?", "Noura"], ans: "Where was Noura staying when she got the job?",
      whyEn: "Where was + subject (Noura) + verb-ing (staying), then when + the short event in the Past Simple (got).",
      why: "Where was ثم الفاعل Noura ثم staying، ثم when والحدث القصير بالماضي البسيط got.", errCat: "word_order" }
  ],

  /* ---------- المرحلة 4: القراءة ---------- */
  reading: {
    title: "Two Happy Accidents",
    from: "Omar",
    fromMeta: "Omar · Pharmacy Student, Jeddah",
    to: "Jack",
    lg1: "wasn't / weren't + -ing",
    lg2: "Was / Were … + -ing?",
    lg3: "when + Past Simple",
    hlLabel: "Highlight negatives & questions",
    targetSeconds: 130,
    introEn: "Omar is a pharmacy student in Jeddah. Today he had an interesting lecture, and now he is writing to his British friend Jack about it.",
    intro: "عمر طالب صيدلة في جدة، حضر اليوم محاضرة ممتعة، ويكتب الآن إلى صديقه البريطاني جاك عنها.",
    paras: [
      "Hi Jack,",
      "Today's lecture was great, and my classmates <<s:weren't looking>> at their phones! Our professor [[taught|علّمنا (الماضي من teach)]] us about discoveries that happened {by accident}.",
      "In 1928, Alexander Fleming, a scientist, was doing research on [[bacteria|البكتيريا]] in his {lab}. Before he went on holiday in the summer, he left some [[dishes|أطباق]] of bacteria there. Then something [[grew|نما (الماضي من grow)]] on one dish: [[mould|عفن]]. <<t:When he returned>>, he {noticed|notice} something strange. The bacteria <<s:weren't growing>> around the mould! <<c:Was he looking>> for [[penicillin|البنسلين]]? No, he <<s:wasn't>>. He {discovered|discover} it {by accident}, and he [[won|فاز بـ (الماضي من win)]] the [[Nobel Prize|جائزة نوبل]] in 1945 with Florey and Chain.",
      "One day, Percy Spencer was working near a [[radar|رادار]] machine in a {lab} at a company called Raytheon <<t:when he noticed>> that the chocolate in his [[pocket|جيب]] was {melting|melt}. <<c:What was he doing>> at that moment? He <<s:wasn't cooking>>, and he <<s:wasn't standing>> in a kitchen! Spencer {invented|invent} the [[microwave oven|فرن المايكرويف]], and his company {got a patent|get a patent} in 1950.",
      "Fleming and Spencer <<s:weren't trying>> to change the world on those days, but they {noticed|notice} small things and [[understood|فهما (الماضي من understand)]] them. There is a serious idea in these stories: [[keep your eyes open|انتبه لما حولك]]. I try to do that in every experiment.",
      "And you, Jack? <<c:What were you doing>> <<t:when you had>> your best idea? <<c:Were you studying>>? <<c:Were you sitting>> on a bus? Tell me!",
      "Your friend,<br>Omar"
    ],
    predict: {
      qEn: "Before you read: Omar studies pharmacy in Jeddah. The subject of his email is 'Two Happy Accidents', and he writes after a lecture. What do you think the email is mainly about?",
      q: "توقّع قبل القراءة: عمر يدرس الصيدلة في جدة، وعنوان إيميله «Two Happy Accidents»، وقد كتبه بعد محاضرة؛ عمّ تتوقع أن يكون في أغلبه؟",
      optsEn: ["Two road accidents near his university", "Two mistakes in his pharmacy exam", "Two good things that nobody planned"],
      opts: ["حادثان على الطريق قرب جامعته", "خطآن في اختبار الصيدلة", "أمران حسنان لم يخطط لهما أحد"],
      a: 2,
      revealEn: "The email is about good things in science that nobody planned. Omar writes that the lecture was about 'discoveries that happened by accident'.",
      reveal: "الإيميل عن أمور حسنة في العلم لم يخطط لها أحد؛ يقول عمر إن المحاضرة كانت عن discoveries that happened by accident."
    },
    insight: {
      titleEn: "Negatives and Questions in Omar's Email",
      titleAr: "لاحظ النفي والسؤال في إيميل عمر",
      l1En: "For negatives, Omar uses wasn't / weren't + verb-ing. There is no didn't here:",
      ex1: "my classmates weren't looking at their phones · he wasn't standing in a kitchen · they weren't trying to change the world",
      l2En: "For questions, he puts Was / Were before the subject. After when, the short event is in the Past Simple:",
      ex2: "Were you sitting on a bus? · What were you doing when you had your best idea?",
      arHtml: "<p>لاحظ أن عمر نفى الماضي المستمر بـ <b style=\"color:var(--dark)\">wasn't / weren't</b> ثم الفعل وing، دون <bdi class=\"en\">didn't</bdi> (<bdi class=\"en\">he wasn't standing in a kitchen</bdi>)، وقدّم <b style=\"color:var(--accent-ink)\">Was / Were</b> على الفاعل في السؤال (<bdi class=\"en\">Were you sitting on a bus?</bdi>)، وأجاب عن أحد أسئلته إجابة قصيرة بالفعل نفسه لا بـ <bdi class=\"en\">did</bdi>، وجاء الحدث القصير بعد <bdi class=\"en\">when</bdi> في الماضي البسيط (<bdi class=\"en\">when you had your best idea</bdi>).</p>"
    },
    questions: [
      { q: "What was Fleming doing research on in 1928?", opts: ["Bacteria", "Chocolate", "Radar machines"], a: 0,
        ev: "Alexander Fleming, a scientist, was doing research on bacteria in his lab.",
        whyEn: "Omar writes that Fleming was doing research on bacteria in his lab.",
        why: "يذكر عمر أن فليمنغ كان يبحث في البكتيريا في مختبره.", errCat: "reading" },
      { q: "What did Fleming notice when he returned?", opts: ["Someone was using his dishes in the lab.", "All the dishes in the lab were empty.", "Bacteria weren't growing near the mould."], a: 2,
        ev: "The bacteria weren't growing around the mould!",
        whyEn: "After his holiday, Fleming noticed something strange about one dish: the bacteria weren't growing around the mould.",
        why: "لاحظ بعد إجازته أمرًا غريبًا: لم تكن البكتيريا تنمو حول العفن.", errCat: "reading" },
      { tf: true, q: "In 1928, Fleming was looking for penicillin.", a: false,
        ev: "Was he looking for penicillin? No, he wasn't.",
        whyEn: "False: Omar asks 'Was he looking for penicillin?' and answers 'No, he wasn't.' Fleming found it without planning to.",
        why: "خطأ؛ يسأل عمر Was he looking for penicillin? ويجيب No, he wasn't، فقد وجده فليمنغ دون أن يخطط لذلك.", errCat: "reading" },
      { q: "When did Fleming win the Nobel Prize?", opts: ["In 1928", "In 1945", "In 1950"], a: 1,
        ev: "He discovered it by accident, and he won the Nobel Prize in 1945 with Florey and Chain.",
        whyEn: "Omar writes that Fleming won the prize in 1945. 1928 is the year of the story, not the year of the prize.",
        why: "يذكر عمر أن فليمنغ فاز بالجائزة سنة 1945، أما 1928 فسنة القصة لا سنة الجائزة.", errCat: "reading" },
      { q: "What was Spencer doing when he noticed the chocolate?", opts: ["He was making lunch at home.", "He was working near a radar.", "He was buying food in a shop."], a: 1,
        ev: "One day, Percy Spencer was working near a radar machine in a lab at a company called Raytheon",
        whyEn: "Omar writes that Spencer was working near a radar machine in a lab. That was the long action when he noticed the chocolate.",
        why: "يذكر عمر أن سبنسر كان يعمل قرب جهاز رادار في مختبر، وهذا هو الحدث الطويل حين لاحظ الشوكولاتة.", errCat: "reading" },
      { q: "What was happening to the chocolate?", opts: ["It was melting.", "It was going bad.", "It was falling out of his pocket."], a: 0,
        ev: "the chocolate in his pocket was melting.",
        whyEn: "The chocolate in Spencer's pocket was melting, and this small thing led to his invention.",
        why: "كانت الشوكولاتة في جيب سبنسر تذوب، وقاده هذا الأمر الصغير إلى اختراعه.", errCat: "reading" },
      { tf: true, q: "Spencer's company got a patent in 1950.", a: true,
        ev: "Spencer invented the microwave oven, and his company got a patent in 1950.",
        whyEn: "True: Omar writes that his company got a patent in 1950.",
        why: "صحيح؛ يذكر عمر أن شركته حصلت على براءة الاختراع سنة 1950.", errCat: "reading" },
      { q: "Why does Omar write 'Were you studying?' and not 'Did you studying?'", opts: ["Because 'study' is an irregular verb", "Because verb-ing questions use Was / Were", "Because Jack is a student at the moment"], a: 1,
        ev: "Were you studying?",
        whyEn: "The Past Continuous uses be, so its question starts with Was / Were + subject + verb-ing. Did goes with the base verb: Did you study?",
        why: "الماضي المستمر يقوم على be، فسؤاله يبدأ بـ Was / Were ثم الفاعل ثم الفعل وing، أما Did فتأتي مع الفعل المجرد: Did you study?", errCat: "tense" }
    ]
  },

  /* ---------- المرحلة 5: الكتابة ---------- */
  writing: {
    taskEn: "Write at least 4 separate sentences about something you found or noticed by accident. Use at least 2 negatives (wasn't / weren't + verb-ing), 1 question in the Past Continuous (Was / Were …? or What were you doing when…?), and 2 words from today's lesson.",
    task: "اكتب 4 جمل منفصلة على الأقل عن شيء وجدته أو لاحظته بالصدفة، واستعمل نفيين على الأقل (wasn't / weren't مع الفعل وing)، وسؤالًا واحدًا في الماضي المستمر (Was / Were…؟ أو What were you doing when…؟)، وكلمتين من درس اليوم.",
    placeholder: "Last week, I noticed … I wasn't looking for … Were you … ?",
    checks: [
      { k: "sentences", tEn: "At least 4 separate sentences (end each with . or ?)", t: "4 جمل منفصلة على الأقل (تنتهي كل جملة بنقطة أو علامة استفهام)",
        ok: function(a){ return a.sentences >= 4; } },
      { k: "negatives", tEn: "At least 2 negatives: wasn't / weren't + verb-ing", t: "نفيان على الأقل: wasn't / weren't مع الفعل وing", ex: "I wasn't looking for it. · They weren't sleeping.",
        ok: function(a, text){ var s = String(text || '').replace(/[’‘‛ʼ`´]/g, "'"), n = 0, m;
          var notVerb = /^(?:interesting|boring|exciting|amazing|surprising|tiring|relaxing|frightening|worrying|something|anything|nothing|morning|evening|king|thing|spring|ring|during)$/;
          var re = /\b(?:wasn't|weren't|was\s+not|were\s+not)\s+(?:(?:really|even|just|still|actually)\s+)?([a-z]+ing)\b/gi;
          while ((m = re.exec(s))) { if (!notVerb.test(m[1].toLowerCase())) n++; }
          return n >= 2; } },
      { k: "question", tEn: "1 Past Continuous question that ends with ?", t: "سؤال واحد في الماضي المستمر ينتهي بعلامة استفهام", ex: "Were you studying? · What were you doing when …?",
        ok: function(a, text){ var s = String(text || '').replace(/[’‘‛ʼ`´]/g, "'");
          var notVerb = /^(?:interesting|boring|exciting|amazing|surprising|tiring|relaxing|frightening|worrying|something|anything|nothing|everything|morning|evening|king|thing|spring|ring|during)$/i;
          return (s.match(/[^.!?]+\?/g) || []).some(function(x){ var m, re = /\b(?:was|were)\s+(?:[a-z']+\s+){0,4}?([a-z]+ing)\b/gi;
            while ((m = re.exec(x))) { if (!notVerb.test(m[1])) return true; }
            return false; }); } },
      { k: "vocab", tEn: "At least 2 words/phrases from today's lesson", t: "كلمتان أو عبارتان من درس اليوم", ex: "discover · invent · by accident · notice · melt · lab · get a patent",
        ok: function(a, text){ var s = String(text || '').replace(/[’‘‛ʼ`´]/g, "'");
          var words = [/\bdiscover(?:s|ed|ing)?\b/i, /\binvent(?:s|ed|ing)?\b/i, /\bby\s+accident\b/i, /\bnotic(?:e|es|ed|ing)\b/i, /\bmelt(?:s|ed|ing)?\b/i, /\blabs?\b/i, /\b(?:get|gets|got|getting|gotten)\s+(?:a\s+|the\s+)?patents?\b/i];
          return words.filter(function(r){ return r.test(s); }).length >= 2; } }
    ],
    modelMarked: "Last Friday, I {noticed|notice} a small box under my grandfather's bed. I <<s:wasn't looking>> for it; I was cleaning his room. I {discovered|discover} some old photos in it {by accident}. My grandfather <<s:wasn't sleeping>> <<t:when I opened>> the box, so I asked him, '<<c:Were you hiding>> these photos?' He laughed and said, 'No, I wasn't! They are a gift for you.'",
    model: "Last Friday, I noticed a small box under my grandfather's bed. I wasn't looking for it; I was cleaning his room. I discovered some old photos in it by accident. My grandfather wasn't sleeping when I opened the box, so I asked him, 'Were you hiding these photos?' He laughed and said, 'No, I wasn't! They are a gift for you.'",
    legendEn: "Light blue = wasn't + verb-ing (wasn't looking, wasn't sleeping) · Terracotta = Were + subject + verb-ing · Dashed = when + Past Simple",
    legendAr: "الأزرق الفاتح لـ wasn't مع الفعل وing (wasn't looking وwasn't sleeping)، والطوبي لسؤال Were مع الفاعل والفعل وing، والإطار المنقّط لـ when مع الماضي البسيط.",
    acceptExamples: [
      "Yesterday, I found an old ring in the lab by accident. I was not looking for it. My classmates were not working at that moment. What were you doing when I called you?",
      "Last year, I discovered a small cafe near my college. I wasn’t going there; I was walking to the bus stop. I noticed the smell of coffee. We weren’t talking about coffee, but we went in. Were you studying there that day?",
      "Were you sleeping when I called? I wasn't working last night. My brother wasn't watching TV. We noticed a strange noise in the kitchen, and we discovered a cat there.",
      "My sister noticed a gold coin in the garden. She wasn't digging. She wasn't looking for anything. She found it by accident. Was she dreaming?",
      "I noticed a strange smell in the lab by accident. I wasn't cooking. My friends weren't working. What was happening?"
    ]
  },

  askChips: [
    "لماذا نقول Were you working ولا نقول Did you was working؟",
    "ما الفرق بين Did you watch وWere you watching؟",
    "لماذا أجيب بـ Yes, I was لا بـ Yes, I did؟",
    "لماذا نقول understood ولا نقول was understanding؟"
  ],

  /* ---------- المرحلة 6: الاختبار القصير ---------- */
  quiz: [
    { s: "The pharmacists ___ any customers when I arrived; they were all on their break.", opts: ["weren't serving", "wasn't serving", "didn't serving"], a: 0, tag: "Grammar · قواعد",
      whyEn: "'The pharmacists' is plural, so the negative is weren't + verb-ing. 'didn't serving' is wrong, because didn't goes with a base verb.",
      why: "The pharmacists جمع، فالنفي weren't مع الفعل وing، وdidn't serving خطأ لأن didn't تأتي مع الفعل المجرد.", errCat: "agreement" },
    { s: "Which sentence is correct?", opts: ["Did she was cooking at seven?", "Was she cooking at seven?", "Was she cook at seven?"], a: 1, tag: "Grammar · قواعد",
      whyEn: "A Past Continuous question is Was / Were + subject + verb-ing. We don't put did and was together, and after Was the verb needs -ing.",
      why: "سؤال الماضي المستمر Was / Were ثم الفاعل ثم الفعل وing، فلا نجمع did وwas، ويأتي الفعل بعد Was والفاعل مع ing.", errCat: "be_verb" },
    { s: "'Were they waiting outside the clinic?' 'No, they ___.'", opts: ["didn't", "wasn't", "weren't"], a: 2, tag: "Grammar · قواعد",
      whyEn: "The question starts with Were, so the short answer uses be. 'they' takes weren't.",
      why: "السؤال بدأ بـ Were، فالإجابة القصيرة بـ be، ومع they نقول weren't.", errCat: "be_verb" },
    { s: "What ___ you doing when the doctor came in?", opts: ["were", "did", "was"], a: 0, tag: "Grammar · قواعد",
      whyEn: "'doing' has -ing, so the question uses be, and 'you' takes were: What were you doing…?",
      why: "doing فيها ing، فالسؤال بـ be، ومع you نقول were: What were you doing…?", errCat: "be_verb" },
    { s: "I ___ the last question in the exam, so I left it empty.", opts: ["wasn't understanding", "didn't understand", "didn't understood"], a: 1, tag: "Grammar · قواعد",
      whyEn: "'understand' is a state verb, so we use the Past Simple, not -ing. After didn't comes the base verb: understand, not understood.",
      why: "understand فعل لا يأخذ ing، فنستعمل الماضي البسيط لا ing، ويأتي بعد didn't الفعل المجرد understand لا understood.", errCat: "stative" },
    { s: "Which sentence has the correct past forms?", opts: ["My uncle teached me to swim, and I won a race.", "My uncle taught me to swim, and I won a race.", "My uncle taught me to swim, and I winned a race."], a: 1, tag: "Grammar · قواعد",
      whyEn: "teach and win are irregular: their past forms are taught and won, not 'teached' or 'winned'.",
      why: "teach وwin فعلان شاذان، ماضيهما taught وwon، لا teached ولا winned.", errCat: "tense" },
    { s: "___ you put the medicine in the fridge yesterday?", opts: ["Were", "Was", "Did"], a: 2, tag: "Grammar · قواعد",
      whyEn: "'put' has no -ing here, so it is a base verb, and the question needs Did. Was / Were go with verb-ing.",
      why: "put هنا بلا ing، فهو فعل مجرد، والسؤال بـ Did، أما Was / Were فتأتيان مع الفعل وing.", errCat: "tense" },
    { s: "This old well was under the sand for many years. Two young farmers ___ it last spring.", opts: ["melted", "invented", "discovered"], a: 2, tag: "Vocabulary · مفردات",
      whyEn: "The well was already there, and nobody knew about it. Finding something like this is 'discover'; we 'invent' only new things.",
      why: "البئر موجودة من قبل ولم يعرفها أحد، فالعثور عليها اكتشاف discover، أما invent فللشيء الجديد.", errCat: "vocab" },
    { s: "I didn't plan it: I found this quiet café ___.", opts: ["in accident", "by accident", "by an accident"], a: 1, tag: "Vocabulary · مفردات",
      whyEn: "The phrase is 'by accident', with by and no 'an'. It means without planning.",
      why: "العبارة by accident بحرف by وبلا an، ومعناها دون تخطيط.", errCat: "vocab" },
    { s: "A small company invented a new kind of lock and wanted to protect it by law, so it ___.", opts: ["did a patent", "got a patent", "made a patent"], a: 1, tag: "Legal Track · المسار القانوني",
      whyEn: "The collocation is 'get a patent' (past: got a patent); we don't say 'do a patent' or 'make a patent'. A patent protects an invention by law.",
      why: "التعبير الثابت الصحيح get a patent وماضيها got a patent، ولا نقول do a patent ولا make a patent، والبراءة تحمي الاختراع بالقانون.", errCat: "vocab" }
  ]
};
})();
