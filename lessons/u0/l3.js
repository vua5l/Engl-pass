/* ===== الأسبوع التأسيسي (الوحدة 0) · الدرس 3: Where Were You Yesterday? — Was & Were (6 مراحل · درس قراءة) ===== */
(function(){
var WAS_WERE_SVG = '<svg class="tl" viewBox="0 0 340 168" role="img" aria-label="Diagram of Past of Be: I/he/she/it was (wasn\'t, Was...?) vs you/we/they were (weren\'t, Were...?)" direction="ltr">' +
  '<rect x="10" y="12" width="154" height="144" rx="16" fill="#E8EEF5" stroke="#2C4A6E" stroke-width="1.8"/>' +
  '<text x="87" y="34" text-anchor="middle" font-family="Quicksand, sans-serif" font-weight="700" font-size="13" fill="#2C4A6E">WAS · المفرد في الماضي</text>' +
  '<text x="87" y="52" text-anchor="middle" font-family="Quicksand, sans-serif" font-weight="700" font-size="10.8" fill="#5A6B7C">I · he · she · it (singular)</text>' +
  '<text x="20" y="78" font-family="Quicksand, sans-serif" font-weight="700" font-size="11.2" fill="#1E2A33">+ : I was in court yesterday.</text>' +
  '<text x="20" y="102" font-family="Quicksand, sans-serif" font-weight="700" font-size="11.2" fill="#1E2A33">− : She wasn\'t late.</text>' +
  '<text x="20" y="126" font-family="Quicksand, sans-serif" font-weight="700" font-size="11.2" fill="#1E2A33">? : Was the hearing long?</text>' +
  '<rect x="176" y="12" width="154" height="144" rx="16" fill="#F9EBE7" stroke="#B94A33" stroke-width="1.8"/>' +
  '<text x="253" y="34" text-anchor="middle" font-family="Quicksand, sans-serif" font-weight="700" font-size="13" fill="#A8432E">WERE · الجمع و you</text>' +
  '<text x="253" y="52" text-anchor="middle" font-family="Quicksand, sans-serif" font-weight="700" font-size="10.8" fill="#A8432E">you · we · they (plural)</text>' +
  '<text x="186" y="78" font-family="Quicksand, sans-serif" font-weight="700" font-size="11.2" fill="#1E2A33">+ : We were at the library.</text>' +
  '<text x="186" y="102" font-family="Quicksand, sans-serif" font-weight="700" font-size="11.2" fill="#1E2A33">− : They weren\'t ready.</text>' +
  '<text x="186" y="126" font-family="Quicksand, sans-serif" font-weight="700" font-size="11.2" fill="#1E2A33">? : Where were you?</text>' +
  '</svg>';

LESSONS.u0l3 = {
  id: "u0l3",
  unit: 0,
  n: 3,
  mode: "reading",
  en: "Where Were You Yesterday?",
  ar: "الماضي بـ was و were في الإثبات والنفي والسؤال",
  subEn: "Foundation 3 · Past of Be: Was & Were (Yesterday & Last Week)",
  canDoEn: "I can talk and ask about the past using was, were, wasn't, and weren't without mixing them with present tenses.",
  canDoAr: "أقدر أن أتحدث وأسأل عن الماضي باستخدام was وwere وwasn't وweren't دون خلطها بالمضارع.",
  descEn: "I can describe where people were and how things were yesterday using was and were.",
  descAr: "أقدر أن أصف أين كان الأشخاص وكيف كانت الأمور أمس باستخدام was وwere، من تقرير فيصل عن يوم أمس في المحكمة.",
  goals: [
    { en: "I can use 'was / wasn't' with I, he, she, it and singular nouns, and 'were / weren't' with you, we, they and plurals.", ar: "أقدر أن أستخدم was / wasn't مع المفرد وI، وwere / weren't مع الجمع والضمير you." },
    { en: "I can form past questions by putting Was / Were before the subject (without did).", ar: "أقدر أن أكوّن سؤالًا في الماضي بوضع Was / Were قبل الفاعل مباشرة دون استخدام did." },
    { en: "I can read a short message comparing yesterday and today for main ideas and details.", ar: "أقدر أن أقرأ رسالة تقارن بين يوم أمس واليوم وأفهم فكرتها العامة وتفاصيلها بالدليل." },
    { en: "I can write at least 4 separate sentences about yesterday using was, were, and 'hire a lawyer'.", ar: "أقدر أن أكتب 4 جمل منفصلة على الأقل عن يوم أمس باستخدام was وwere والعبارة القانونية hire a lawyer." }
  ],
  intro: {
    recall: {
      dEn: "Recall and type words from Lessons 1 & 2 from memory to strengthen retention and spelling.",
      d: "استرجع واكتب كلمات الدرسين الأول والثاني من ذاكرتك لتثبيت الحفظ والإملاء.",
      items: [
        ["review", "5 active recall items from Foundation Lessons 1 & 2", "5 عناصر استرجاع نشط من الدرسين التأسيسيين 1 و2"],
        ["pen", "Type from memory (witnesses, judge, mistakes, go to court)", "كتابة من الذاكرة لتثبيت إملاء الجمع والمصطلحات القانونية"],
        ["spark", "Reinforces Singular & Plural Agreement", "يثبّت قاعدة المطابقة بين المفرد والجمع"]
      ]
    },
    vocab: {
      dEn: "7 core time & legal words plus today's legal phrase ('hire a lawyer'), with randomized matching rounds.",
      d: "7 كلمات أساسية للزمان والعمل القانوني مع العبارة القانونية اليومية (hire a lawyer)، ولعبة توصيل عشوائية.",
      items: [
        ["cards", "8 Flashcards (7 words + 'hire a lawyer') with human audio & Oxford link", "8 بطاقات (7 كلمات + hire a lawyer) مع النطق البشري ورابط Oxford"],
        ["review", "Randomized 2-round matching game", "لعبة توصيل عشوائية من جولتين"],
        ["quiz", "8 context sentences: choose the right word", "8 جمل سياقية: اختر الكلمة المناسبة"]
      ]
    },
    grammar: {
      dEn: "Master was / were (and There was / There were) for past states, places, and times without mixing them with present tenses.",
      d: "أتقن استخدام was وwere (وThere was / There were) للوصف والمكان والزمان في الماضي دون خلطها بالمضارع.",
      items: [
        ["book", "6 grammar cards (English first, Arabic on tap)", "6 بطاقات شرح (الإنجليزي أولًا، والعربي عند الطلب)"],
        ["quiz", "24 guided exercises across 4 types, one per screen", "24 تمرينًا موجّهًا على 4 أنماط، سؤال في كل شاشة"]
      ]
    },
    reading: {
      dEn: "A message from Faisal to his supervisor Mr. Salman explaining where he and the clients were yesterday.",
      d: "رسالة من فيصل إلى مشرفه الأستاذ سلمان يوضّح فيها أين كان هو والموكّلون يوم أمس.",
      items: [
        ["spark", "Predict before you read", "توقّع قبل القراءة"],
        ["clock", "First reading for the main idea with an advisory timer", "قراءة أولى للفكرة العامة بمؤقت إرشادي مريح"],
        ["mail", "Second reading with word meanings, Oxford links, and 8 evidence questions", "قراءة ثانية مع معاني الكلمات باللمس و8 أسئلة فهم بالدليل"]
      ]
    },
    writing: {
      dEn: "Write at least 4 separate sentences about where you and your family or friends were yesterday and how your day was.",
      d: "اكتب 4 جمل منفصلة على الأقل عن مكانك ومكان عائلتك أو زملائك يوم أمس وكيف كان يومك باستخدام was وwere.",
      items: [
        ["pen", "At least 4 separate sentences with periods (.)", "4 جمل منفصلة على الأقل بحرف كبير ونقطة"],
        ["spark", "Instant check separating Was/Were grammar from Spelling", "تصحيح فوري يفصل أخطاء القواعد عن الإملاء"]
      ]
    },
    quiz: {
      dEn: "10 shuffled questions on Was & Were and lesson vocabulary (80% to pass), plus Lesson Error Analysis.",
      d: "اختبار قصير من 10 أسئلة في قاعدة was وwere ومفردات الدرس (النجاح من 80%)، مع تحليل الأخطاء.",
      items: [
        ["quiz", "10 questions (80% passing score)", "10 أسئلة متنوعة (النجاح من 80%)"],
        ["review", "Structured Error Analysis by category", "تحليل أخطاء الدرس وأسبابها حسب الفئة"]
      ]
    }
  },

  recall: [
    {
      id: "rc-0",
      promptAr: "شاهد (مفرد witnesses من الدرس السابق — ينتهي بحرفي ss)",
      promptEn: "A person who sees an event and testifies in court (ends with -ss)",
      sentPre: "There is one",
      sentPost: "in the courtroom right now.",
      ans: ["witness"],
      hint: "w i t n _ s s (7 letters)",
      spellNoteEn: "Spelled w-i-t-n-e-s-s (plural: witnesses with -es).",
      spellNote: "تُكتب w-i-t-n-e-s-s بـ ss في آخرها، وتُجمع بإضافة es.",
      errCat: "spelling"
    },
    {
      id: "rc-1",
      promptAr: "قاضٍ (تذكّر الحرف الصامت قبل g في j-u-d-g-e)",
      promptEn: "The official who leads a court and decides legal cases",
      sentPre: "The",
      sentPost: "listens to both lawyers carefully.",
      ans: ["judge"],
      hint: "j u _ g e (5 letters)",
      spellNoteEn: "Remember the 'd' before 'g' in j-u-d-g-e.",
      spellNote: "لا تنسَ حرف d قبل g في كلمة judge.",
      errCat: "spelling"
    },
    {
      id: "rc-2",
      promptAr: "فعل الكون للجمع في سؤال: ___ there any mistakes?",
      promptEn: "Plural question word before 'there any mistakes?'",
      sentPre: "___",
      sentPost: "there any mistakes in these folders?",
      ans: ["are"],
      hint: "A r e (3 letters)",
      spellNoteEn: "With plural nouns ('any mistakes'), always ask 'Are there…?'.",
      spellNote: "مع الاسم الجمع (mistakes) نسأل بـ Are there وليس Is there.",
      errCat: "agreement"
    },
    {
      id: "rc-3",
      promptAr: "يذهب إلى المحكمة (العبارة القانونية من الدرس الثاني: go to ___)",
      promptEn: "Legal phrase: The lawyers go to ___ every Tuesday.",
      sentPre: "Mr. Salman and Faisal go to",
      sentPost: "at nine-thirty.",
      ans: ["court", "go to court"],
      hint: "c o u r t (5 letters)",
      spellNoteEn: "Collocation: 'go to court' (without 'the').",
      spellNote: "العبارة القانونية: go to court (بدون the).",
      errCat: "vocab"
    },
    {
      id: "rc-4",
      promptAr: "اسم الإشارة للجمع القريب قبل كلمة folders (مقابل This للمفرد)",
      promptEn: "Plural pointing word for things near you (___ folders are ready)",
      sentPre: "___",
      sentPost: "three folders are for the afternoon case.",
      ans: ["these"],
      hint: "T h e s e (5 letters)",
      spellNoteEn: "Use 'This' for 1 thing, and 'These' for 2 or more things near you.",
      spellNote: "نستخدم This للمفرد القريب، وThese للجمع القريب.",
      errCat: "agreement"
    }
  ],

  legalPhrase: {
    en: "hire a lawyer",
    headword: "hire",
    pos: "legal phrase",
    ar: "يوكّل محاميًا / يستعين بمحامٍ",
    say: "هَايَر أَ لُويَر",
    ex: "The company decided to hire a lawyer yesterday.",
    exAr: "قررت الشركة توكيل محامٍ يوم أمس.",
    tipEn: "Collocation: 'hire a lawyer' = pay a lawyer to represent you or your company in a legal matter.",
    tip: "متلازمة قانونية مهمة: hire a lawyer تعني يوكّل محاميًا لتمثيله في قضية أو عقد، ولا تنسَ الأداة a قبل lawyer.",
    legal: true,
    oxfordSlug: "hire_1",
    wikiFiles: ["En-us-hire.ogg", "En-us-lawyer.ogg"],
    wikiCredit: "File:En-us-hire.ogg & File:En-us-lawyer.ogg · Wikimedia Commons (CC BY-SA 3.0)"
  },

  vocab: [
    { en: "yesterday", pos: "noun", ar: "أمس / يوم أمس", say: "يِسْتَرْدَي",
      ex: "I was at the university library yesterday.", exAr: "كنتُ في مكتبة الجامعة يوم أمس.",
      tipEn: "Time signal for the Past! Never use present verbs (am/is/are/don't) with 'yesterday'.",
      tip: "من أهم علامات الماضي؛ عند رؤية yesterday نستخدم الماضي (was / were / didn't) ولا نستخدم المضارع أبدًا.",
      oxfordSlug: "yesterday_1",
      wikiFile: "En-us-yesterday.ogg",
      wikiCredit: "File:En-us-yesterday.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "hearing", pos: "noun", ar: "جلسة استماع (في المحكمة)", say: "هِيرِنْق",
      ex: "The court hearing was at ten o'clock.", exAr: "كانت جلسة الاستماع في المحكمة الساعة العاشرة.",
      tipEn: "Legal noun: a 'hearing' is an official meeting in court before a judge.",
      tip: "مصطلح قانوني أساسي: hearing هنا اسم بمعنى جلسة استماع أمام القاضي في المحكمة.",
      oxfordSlug: "hearing",
      wikiFile: "En-us-hearing.ogg",
      wikiCredit: "File:En-us-hearing.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "absent", pos: "adjective", ar: "غائب / متغيّب", say: "أَبْسَنْت",
      ex: "One witness was absent yesterday morning.", exAr: "كان أحد الشهود غائبًا صباح أمس.",
      tipEn: "Adjective (needs am/is/are/was/were). Preposition: 'absent from' work or class.",
      tip: "صفة بمعنى غائب، وتحتاج قبلها فعل كون (was absent)، وحرف الجر معها from.",
      oxfordSlug: "absent_1",
      wikiFile: "En-us-absent.ogg",
      wikiCredit: "File:En-us-absent.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "late", pos: "adjective", ar: "متأخر", say: "لَيْت",
      ex: "We weren't late for the meeting.", exAr: "لم نكن متأخرين عن الاجتماع.",
      tipEn: "In English, 'late' is an adjective, NOT a verb: say 'I was late' (never 'I lated').",
      tip: "انتبه: كلمة late في الإنجليزية صفة وليست فعلًا؛ نقول I was late for work.",
      oxfordSlug: "late_1",
      wikiFile: "En-us-late.ogg",
      wikiCredit: "File:En-us-late.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "traffic", pos: "noun", ar: "حركة المرور / الزحام المروري", say: "تْرَافِك",
      ex: "The traffic on King Fahd Road was heavy.", exAr: "كانت حركة المرور على طريق الملك فهد مزدحمة.",
      tipEn: "Uncountable noun (takes singular 'is / was'): The traffic was bad.",
      tip: "اسم غير معدود في الإنجليزية، فيعامل معاملة المفرد دائمًا: نقول The traffic was heavy.",
      oxfordSlug: "traffic_1",
      wikiFile: "En-us-traffic.ogg",
      wikiCredit: "File:En-us-traffic.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "calm", pos: "adjective", ar: "هادئ / مطمئن", say: "كَام",
      ex: "The judge was very calm and polite.", exAr: "كان القاضي هادئًا ومهذبًا جدًا.",
      tipEn: "Pronunciation & spelling: the 'l' in c-a-l-m is silent when spoken, but written in spelling.",
      tip: "حرف الـ l في كلمة calm صامت في النطق، لكن لا تنسَ كتابته في الإملاء.",
      oxfordSlug: "calm_1",
      wikiFile: "En-us-calm.ogg",
      wikiCredit: "File:En-us-calm.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "clear", pos: "adjective", ar: "واضح", say: "كْلِير",
      ex: "All the legal points were clear.", exAr: "كانت جميع النقاط القانونية واضحة.",
      tipEn: "Spelled c-l-e-a-r (with 'ea'). Opposite: unclear.",
      tip: "تُكتب بحرفي العلة ea في الوسط: c-l-e-a-r، وتعني واضحًا أو جليًا.",
      oxfordSlug: "clear_1",
      wikiFile: "En-us-clear.ogg",
      wikiCredit: "File:En-us-clear.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" }
  ],

  vocabGaps: [
    { s: "The court ___ was in Room 4 yesterday morning.", opts: ["hearing", "traffic", "calm"], a: 0,
      whyEn: "A 'court hearing' is an official session before a judge.",
      why: "court hearing تعني جلسة استماع في المحكمة.", errCat: "vocab" },
    { s: "Sami was not in class yesterday; he was ___.", opts: ["clear", "absent", "traffic"], a: 1,
      whyEn: "'absent' means not present at school, university, or work.",
      why: "absent تعني غائبًا عن الدرس أو العمل.", errCat: "vocab" },
    { s: "I was ten minutes ___ because the bus was slow.", opts: ["late", "clear", "hearing"], a: 0,
      whyEn: "'ten minutes late' means arriving after the scheduled time.",
      why: "ten minutes late تعني متأخرًا عشر دقائق.", errCat: "vocab" },
    { s: "The ___ on the highway was very slow this morning.", opts: ["witness", "traffic", "hearing"], a: 1,
      whyEn: "'traffic' refers to the cars and vehicles moving on the road.",
      why: "traffic هي حركة المرور والسيارات على الطريق.", errCat: "vocab" },
    { s: "Even when the client was angry, the lawyer stayed ___.", opts: ["calm", "absent", "yesterday"], a: 0,
      whyEn: "'calm' means peaceful, relaxed, and not angry or nervous.",
      why: "calm تعني هادئًا وغير منزعج.", errCat: "vocab" },
    { s: "The professor's explanation was very ___; everyone understood it.", opts: ["absent", "clear", "late"], a: 1,
      whyEn: "'clear' means easy to understand.",
      why: "clear تعني واضحًا وسهل الفهم.", errCat: "vocab" },
    { s: "Where were you ___ afternoon at three o'clock?", opts: ["yesterday", "ready", "calm"], a: 0,
      whyEn: "'yesterday afternoon' matches the past verb 'were'.",
      why: "yesterday afternoon تدل على ظهر يوم أمس وتناسب الفعل الماضي were.", errCat: "tense" },
    { s: "Before signing a big commercial agreement, it is wise to ___.", opts: ["hire a lawyer", "be absent", "make traffic"], a: 0,
      whyEn: "'hire a lawyer' means employ a lawyer to represent and advise you.",
      why: "hire a lawyer تعني توكيل محامٍ لمراجعة الاتفاقية وتمثيلك.", errCat: "vocab" }
  ],

  gCards: [
    {
      tEn: "Present vs. Past of 'Be'",
      t: "فعل الكون بين المضارع (am/is/are) والماضي (was/were)",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Present vs. Past of \'Be\'</span><small>فعل الكون بين المضارع والماضي</small></h2>' +
        '<p class="en-p" dir="ltr">Just like we use <b>am / is / are</b> for nouns, adjectives, and places today, we use <b>was / were</b> for the past (<b>yesterday, last night, last week, two days ago</b>):</p>' +
        '<div class="xbox"><span class="xtag s" dir="ltr">Today · Present (am / is / are)</span><p class="xen">I am in the office today. · The files are ready now.</p></div>' +
        '<div class="xbox"><span class="xtag c" dir="ltr">Yesterday · Past (was / were)</span><p class="xen">I was in court yesterday. · The files were ready last night.</p></div>' +
        WAS_WERE_SVG,
      arHtml:
        '<p>في العربية نقول «كنتُ / كان / كانوا» في الماضي، وفي الإنجليزية يتحول <bdi class="en">am / is</bdi> إلى <b>was</b>، ويتحول <bdi class="en">are</bdi> إلى <b>were</b>.</p>'
    },
    {
      tEn: "Who Takes 'Was' and Who Takes 'Were'?",
      t: "متى نختار was ومتى نختار were؟",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Who Takes \'Was\' and Who Takes \'Were\'?</span><small>جدول تصريف was و were</small></h2>' +
        '<div class="tbl"><table><thead><tr><th>Subject</th><th>Positive (+)</th><th>Negative (−)</th><th>Question (?)</th></tr></thead><tbody>' +
        '<tr><td>I / he / she / it<br><small>(Singular · المفرد)</small></td><td>I <span class="hs">was</span> calm.<br>He <span class="hs">was</span> in court.</td><td>I <span class="hs">wasn\'t</span> late.<br>She <span class="hs">wasn\'t</span> absent.</td><td><span class="hs">Was</span> he in court?<br><span class="hs">Was</span> the case easy?</td></tr>' +
        '<tr><td>you / we / they<br><small>(Plural & you)</small></td><td>You <span class="hc">were</span> right.<br>They <span class="hc">were</span> ready.</td><td>We <span class="hc">weren\'t</span> late.<br>They <span class="hc">weren\'t</span> busy.</td><td><span class="hc">Were</span> you at work?<br>Where <span class="hc">were</span> they?</td></tr></tbody></table></div>' +
        '<div class="tip" dir="ltr"><p><b>Watch Out for \"You\":</b> Even when speaking to ONE person, <b>you</b> ALWAYS takes <b>were</b>:</p><div class="pairs"><span class="yes">Where were you yesterday?</span><span class="no">Where was you yesterday?</span></div></div>',
      arHtml:
        '<p>١) <b>I / he / she / it</b> وأي اسم مفرد تأخذ <b>was</b>، ونفيها <b>wasn\'t</b> (<bdi class="en">was not</bdi>).</p>' +
        '<p>٢) <b>you / we / they</b> وأي اسم جمع تأخذ <b>were</b>، ونفيها <b>weren\'t</b> (<bdi class="en">were not</bdi>). انتبه أن الضمير <b>you</b> يأخذ <b>were</b> دائمًا حتى لو كنت تخاطب شخصًا واحدًا.</p>'
    },
    {
      tEn: "There was vs. There were",
      t: "كان يوجد: There was للمفرد و There were للجمع",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">There was vs. There were</span><small>«كان يوجد» مع المفرد والجمع في الماضي</small></h2>' +
        '<p class="en-p" dir="ltr">In Lesson 2 we learned <b>There is / There are</b>. In the past, simply change them to <b>There was / There were</b>:</p>' +
        '<div class="sigs">' +
          '<div class="sig s"><h3 dir="ltr">Singular Past<small class="sig-ar">مفرد في الماضي</small></h3><ul><li>There was a hearing.</li><li>There wasn\'t a mistake.</li><li>Was there a problem?</li></ul></div>' +
          '<div class="sig c"><h3 dir="ltr">Plural Past<small class="sig-ar">جمع في الماضي</small></h3><ul><li>There were two hearings.</li><li>There weren\'t any mistakes.</li><li>Were there any witnesses?</li></ul></div>' +
        '</div>',
      arHtml:
        '<p>للتعبير عن «كان يوجد» في الماضي: نستخدم <b>There was</b> مع الاسم المفرد (أو غير المعدود مثل <bdi class="en">traffic</bdi>)، ونستخدم <b>There were</b> مع الاسم الجمع.</p>'
    },
    {
      tEn: "Never Mix 'Was / Were' with 'Did' or Base Verbs",
      t: "لا تخلط was / were مع did أو الأفعال المجردة",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">No \'Did\' with Adjectives & Places</span><small>لا نستخدم did مع الصفات والأماكن</small></h2>' +
        '<p class="en-p" dir="ltr">With adjectives (<b>late, busy, absent, ready, calm</b>) and places (<b>in court, at home</b>), use <b>was / were</b> directly—never <b>did / didn\'t</b>, and never put <b>was / were</b> before a base verb:</p>' +
        '<div class="xbox"><div class="pairs">' +
          '<span class="yes">Were you busy yesterday? (adjective → Were)</span>' +
          '<span class="no">Did you busy yesterday?</span>' +
          '<span class="yes">The witness wasn\'t in court. (place → wasn\'t)</span>' +
          '<span class="no">The witness didn\'t in court.</span>' +
        '</div></div>',
      arHtml:
        '<p>مع الصفات (مثل <bdi class="en">late, absent, busy</bdi>) والأماكن والأسماء في الماضي، نسأل وننفي بـ <b>was / were</b> نفسها، ولا نستخدم <bdi class="en">did</bdi> أو <bdi class="en">didn\'t</bdi>.</p>'
    },
    {
      tEn: "Common Arab Mistakes",
      t: "أخطاء العرب الشائعة",
      bilingual: true,
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Common Arab Mistakes</span><small>أخطاء يقع فيها كثير من العرب (من التشخيص)</small></h2>' +
        '<ul class="mist">' +
          '<li><span class="no">Yesterday I am very busy at the office.</span><span class="yes">Yesterday I was very busy at the office.</span><p class="en-m" dir="ltr">With past time words (<b>yesterday, last week</b>), always switch from <b>am / is / are</b> to <b>was / were</b>.</p><p>مع كلمات الماضي مثل <bdi class="en">yesterday</bdi> لا نبقى في المضارع (<bdi class="en">am/is/are</bdi>) بل ننتقل فورًا إلى <bdi class="en">was/were</bdi>.</p></li>' +
          '<li><span class="no">Where was you last night?</span><span class="yes">Where were you last night?</span><p class="en-m" dir="ltr">The pronoun <b>you</b> always takes <b>were</b>, even for one person.</p><p>الضمير <bdi class="en">you</bdi> يأخذ <bdi class="en">were</bdi> دائمًا ولا يأخذ <bdi class="en">was</bdi> أبدًا.</p></li>' +
          '<li><span class="no">The clients was happy with the contract.</span><span class="yes">The clients were happy with the contract.</span><p class="en-m" dir="ltr">Plural subject (<b>The clients</b>) requires plural <b>were</b>.</p><p>الفاعل الجمع (<bdi class="en">The clients</bdi>) يحتاج <bdi class="en">were</bdi> وليس <bdi class="en">was</bdi>.</p></li>' +
          '<li><span class="no">I didn\'t late for the hearing.</span><span class="yes">I wasn\'t late for the hearing.</span><p class="en-m" dir="ltr"><b>late</b> is an adjective, so negate with <b>wasn\'t / weren\'t</b>.</p><p>كلمة <bdi class="en">late</bdi> صفة وليست فعلًا، فننفيها بـ <bdi class="en">wasn\'t / weren\'t</bdi>.</p></li>' +
        '</ul>'
    },
    {
      tEn: "Summary",
      t: "الخلاصة",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Quick Summary</span><small>الخلاصة</small></h2>' +
        '<div class="sumc" dir="ltr"><h3>In Two Lines · في سطرين</h3>' +
          '<p><b>was / wasn\'t · للمفرد</b><span>With I, he, she, it, singular nouns & uncountable nouns (traffic)</span></p>' +
          '<p><b>were / weren\'t · للجمع و you</b><span>With you, we, they & plural nouns (witnesses, folders, people)</span></p>' +
        '</div>' +
        '<p class="en-p" dir="ltr">Now let\'s practice: 24 guided exercises on Was & Were.</p>',
      arHtml:
        '<p><b>was / wasn\'t:</b> مع <bdi class="en">I / he / she / it</bdi> والاسم المفرد وغير المعدود.</p>' +
        '<p><b>were / weren\'t:</b> مع <bdi class="en">you / we / they</bdi> والاسم الجمع.</p>'
    }
  ],

  gA: [
    { s: "The court hearing ___ at nine o'clock yesterday morning.", opts: ["was", "were"], a: 0,
      whyEn: "'The court hearing' is singular + 'yesterday morning' → was.",
      why: "الفاعل مفرد (The court hearing) والزمن ماضٍ، فنختار was.", errCat: "agreement" },
    { s: "All the witnesses ___ in the waiting room on time.", opts: ["was", "were"], a: 1,
      whyEn: "'All the witnesses' is plural → were.",
      why: "الفاعل جمع (All the witnesses)، فنختار were.", errCat: "agreement" },
    { s: "Where ___ you yesterday afternoon?", opts: ["was", "were"], a: 1,
      whyEn: "With 'you', always use 'were' in the past.",
      why: "مع الضمير you نستخدم were دائمًا في الماضي.", errCat: "agreement" },
    { s: "The morning traffic on King Salman Road ___ very heavy.", opts: ["was", "were"], a: 0,
      whyEn: "'traffic' is an uncountable singular noun → was.",
      why: "كلمة traffic غير معدودة وتعامل معاملة المفرد، فتأخذ was.", errCat: "agreement" },
    { s: "We ___ late because the train was fast.", opts: ["wasn't", "weren't"], a: 1,
      whyEn: "With 'We', use plural negative 'weren't'.",
      why: "مع الضمير We نستخدم صيغة الجمع المنفية weren't.", errCat: "agreement" },
    { s: "___ the judge satisfied with the new documents?", opts: ["Was", "Were"], a: 0,
      whyEn: "'the judge' is singular → Was the judge…?",
      why: "الفاعل مفرد (the judge)، فيبدأ السؤال بـ Was.", errCat: "agreement" },
    { s: "There ___ three commercial cases in Courtroom 1 last Tuesday.", opts: ["was", "were"], a: 1,
      whyEn: "'three commercial cases' is plural + 'last Tuesday' → There were.",
      why: "بعد الفراغ اسم جمع (three commercial cases) في الماضي، فنختار There were.", errCat: "agreement" },
    { s: "I ___ absent yesterday; I was in the law library all morning.", opts: ["wasn't", "weren't"], a: 0,
      whyEn: "With 'I', use 'wasn't' (was not).",
      why: "الضمير I يأخذ في الماضي wasn't.", errCat: "agreement" }
  ],

  gB: [
    { s: "The two lawyers were in court yesterday.", ok: true,
      whyEn: "Plural subject ('The two lawyers') + 'were' + 'yesterday' is completely correct.",
      why: "الفاعل جمع (The two lawyers) مع were وكلمة yesterday جملة صحيحة تمامًا.", errCat: "agreement" },
    { s: "Where was you at ten o'clock this morning?", ok: false, fix: "Where were you at ten o'clock this morning?",
      whyEn: "'you' always takes 'were', never 'was'.",
      why: "الضمير you يأخذ were دائمًا وليس was.", errCat: "agreement" },
    { s: "Yesterday, the office is very quiet.", ok: false, fix: "Yesterday, the office was very quiet.",
      whyEn: "'Yesterday' is in the past, so change 'is' to 'was'.",
      why: "وجود كلمة Yesterday يتطلب فعل الكون في الماضي was وليس المضارع is.", errCat: "tense" },
    { s: "Were there any mistakes in the final report?", ok: true,
      whyEn: "Plural question in the past: 'Were there any mistakes…?' is correct.",
      why: "سؤال صحيح عن الجمع في الماضي باستخدام Were there.", errCat: "agreement" },
    { s: "The client didn't late for the appointment.", ok: false, fix: "The client wasn't late for the appointment.",
      whyEn: "'late' is an adjective, not a verb—use 'wasn't late'.",
      why: "كلمة late صفة وليست فعلًا، لذلك ننفي بـ wasn't late وليس didn't late.", errCat: "be_verb" },
    { s: "There was many students at the lecture last night.", ok: false, fix: "There were many students at the lecture last night.",
      whyEn: "'many students' is plural → There were.",
      why: "عبارة many students جمع، فتأخذ There were.", errCat: "agreement" }
  ],

  gC: [
    { pre: "Yesterday, I", verb: "be", post: "at the main court with Mr. Salman.", ans: ["was"],
      whyEn: "'I' + 'Yesterday' → was.",
      why: "مع الضمير I في الماضي نكتب was.", errCat: "tense" },
    { pre: "The witnesses", verb: "be", post: "very calm during the hearing.", ans: ["were"],
      whyEn: "'The witnesses' is plural in the past → were.",
      why: "الفاعل جمع (The witnesses) في الماضي، فنكتب were.", errCat: "agreement" },
    { pre: "She", verb: "not / be", post: "absent from the training session last week.", ans: ["wasn't", "was not"],
      whyEn: "Singular negative with 'She' in the past → wasn't / was not.",
      why: "النفي مع المفرد She في الماضي يكون بـ wasn't أو was not.", errCat: "agreement" },
    { pre: "___", verb: "be", post: "you at the university library last night?", ans: ["Were"],
      whyEn: "Past question with 'you' → Were you…?",
      why: "في السؤال عن الماضي مع you نبدأ بـ Were.", errCat: "agreement" },
    { pre: "There", verb: "be", post: "a long delay because of the traffic.", ans: ["was"],
      whyEn: "'a long delay' is singular → There was.",
      why: "بعد الفراغ اسم مفرد (a long delay)، فنكتب was.", errCat: "agreement" },
    { pre: "The blue folders", verb: "not / be", post: "on my desk yesterday morning.", ans: ["weren't", "were not"],
      whyEn: "'The blue folders' is plural → weren't / were not.",
      why: "الفاعل جمع (The blue folders)، فننفي في الماضي بـ weren't أو were not.", errCat: "agreement" }
  ],

  gD: [
    { chips: ["the lawyers", "Where", "last night?", "were"], ans: "Where were the lawyers last night?",
      whyEn: "Question word (Where) + were + subject (you) + time (yesterday)?",
      why: "أداة الاستفهام Where ثم were ثم الفاعل you ثم ظرف الزمان yesterday.", errCat: "word_order" },
    { chips: ["wasn't", "The witness", "for court.", "late"], ans: "The witness wasn't late for court.",
      whyEn: "Subject (The witness) + wasn't + adjective (late) + prepositional phrase.",
      why: "الفاعل المفرد ثم wasn't ثم الصفة late.", errCat: "word_order" },
    { chips: ["two hearings", "There were", "last", "week."], ans: "There were two hearings last week.",
      whyEn: "There were + plural noun (two hearings) + past time (last week).",
      why: "There were للجمع ثم two hearings ثم الزمان last week.", errCat: "word_order" },
    { chips: ["calm", "Was", "yesterday?", "the client"], ans: "Was the client calm yesterday?",
      whyEn: "Was + singular subject (the client) + adjective (calm) + yesterday?",
      why: "السؤال يبدأ بـ Was ثم الفاعل المفرد the client ثم الصفة calm.", errCat: "word_order" }
  ],

  reading: {
    title: "Update on Yesterday's Court Hearing",
    from: "Faisal",
    fromMeta: "Faisal · Law Trainee, Riyadh",
    to: "Mr. Salman",
    targetSeconds: 95,
    introEn: "Faisal sent this morning update to his supervisor Mr. Salman about yesterday's commercial hearing at the court.",
    intro: "أرسل فيصل هذا التقرير الصباحي إلى مشرفه الأستاذ سلمان عن جلسة الاستماع التجارية التي عُقدت يوم أمس في المحكمة.",
    paras: [
      "Dear Mr. Salman,",
      "Here <<s:is>> a [[quick|سريع]] [[update|تحديث / تقرير]] about {yesterday}. I <<c:was>> at the [[commercial|التجارية]] {court} in the morning for the Al-amal Company {hearing}. The {traffic} on King Fahd Road <<c:was>> [[heavy|مزدحم]], [[so|لذلك]] I <<c:was>> at the [[building|المبنى]] [[thirty minutes|ثلاثين دقيقة]] [[early|مبكرًا]]. I <<c:wasn't>> {late}.",
      "<<c:There were>> two [[managers|مديران]] from Al-Amal Company in the [[waiting room|غرفة الانتظار]]. At first, they <<c:were>> [[worried|قلقين]] because the [[other|الآخر]] [[party|الطرف]] [[decided|قرّر]] to {hire a lawyer} [[last week|الأسبوع الماضي]]. [[However|ومع ذلك]], our {folders|folder} <<c:were>> {ready}, and all our [[financial|المالية]] [[numbers|الأرقام]] <<c:were>> {clear}.",
      "The {hearing} <<c:was>> in Courtroom 4 at ten o'clock. <<c:There was>> one [[main|رئيسي]] {judge}, and he <<c:was>> very {calm} and [[fair|عادل]]. One {witness} <<c:was>> {absent} because he <<c:was>> [[sick|مريض]], [[but|لكن]] the [[other|الآخران]] two {witnesses|witness} <<c:were>> [[present|حاضرَين]].",
      "Today, the [[managers|المديرون]] <<s:are>> very [[happy|سعيدون]] with our [[work|عمل]], and the [[new|الجديدة]] {folders|folder} <<s:are>> on your [[desk|مكتب]] now.",
      "Best regards,<br>Faisal"
    ],
    predict: {
      qEn: "Before you read: The traffic on King Fahd Road was heavy yesterday morning. Do you think Faisal was late for the hearing?",
      q: "توقّع قبل القراءة: كانت حركة المرور مزدحمة صباح أمس؛ هل تتوقع أن فيصل كان متأخرًا عن جلسة الاستماع؟",
      optsEn: ["Yes, he was thirty minutes late", "No, he wasn't late—he was there thirty minutes early", "He was absent from the hearing"],
      opts: ["نعم، كان متأخرًا ثلاثين دقيقة", "لا، لم يكن متأخرًا بل وصل قبل الموعد بثلاثين دقيقة", "كان غائبًا عن الجلسة"],
      a: 1,
      revealEn: "Correct! Faisal writes: 'I was at the building thirty minutes early. I wasn't late.'",
      reveal: "صحيح! فيصل يقول إنه كان في المبنى قبل الموعد بثلاثين دقيقة ولم يكن متأخرًا (I wasn't late)."
    },
    insight: {
      titleEn: "Yesterday (was / were) vs. Today (is / are)",
      titleAr: "لاحظ المقارنة بين أمس (was / were) واليوم (is / are)",
      l1En: "For yesterday's events, Faisal uses was / were / wasn't / There were:",
      ex1: "The traffic was heavy · I wasn't late · Our folders were ready · One witness was absent",
      l2En: "When he switches to 'Today … now' in the last paragraph, he uses is / are:",
      ex2: "Today, the managers are very happy · The new folders are on your desk now",
      arHtml: "<p>لاحظ كيف استخدم فيصل <b style=\"color:var(--accent-ink)\">was / were</b> في كل الجمل التي تصف يوم أمس (<bdi class=\"en\">yesterday</bdi>)، ثم عاد إلى <b style=\"color:var(--dark)\">is / are</b> في الفقرة الأخيرة عندما تحدث عن اليوم (<bdi class=\"en\">Today … now</bdi>).</p>"
    },
    questions: [
      { q: "Where was Faisal yesterday morning?", opts: ["At the university library", "At the commercial court for a hearing", "At home because he was sick"], a: 1,
        ev: "I was at the commercial court in the morning for the Al-Amal Company hearing.",
        whyEn: "He was at the commercial court for the Al-Amal Company hearing.",
        why: "كان في المحكمة التجارية لحضور جلسة استماع شركة الأمل.", errCat: "reading" },
      { tf: true, q: "Faisal was late because the traffic was heavy.", a: false,
        ev: "The traffic on King Fahd Road was heavy, so I was at the building thirty minutes early. I wasn't late.",
        whyEn: "He wasn't late; he arrived thirty minutes early.",
        why: "لم يكن متأخرًا، بل وصل مبكرًا بثلاثين دقيقة.", errCat: "reading" },
      { q: "Why were the two managers from Al-Amal Company worried at first?", opts: ["Because the folders weren't ready", "Because the other party decided to hire a lawyer last week", "Because the judge was angry"], a: 1,
        ev: "At first, they were worried because the other party decided to hire a lawyer last week.",
        whyEn: "They were worried because the other party hired a lawyer last week.",
        why: "كانا قلقين لأن الطرف الآخر قرر توكيل محامٍ الأسبوع الماضي.", errCat: "reading" },
      { q: "How were Faisal's folders and financial numbers?", opts: ["They were ready and clear.", "They were late and unclear.", "They were absent."], a: 0,
        ev: "However, our folders were ready, and all our financial numbers were clear.",
        whyEn: "The folders were ready and all the financial numbers were clear.",
        why: "كانت الملفات جاهزة وجميع الأرقام المالية واضحة.", errCat: "reading" },
      { q: "How was the judge during the hearing in Courtroom 4?", opts: ["He was late and busy.", "He was very calm and fair.", "He was worried."], a: 1,
        ev: "There was one main judge, and he was very calm and fair.",
        whyEn: "Faisal writes that the judge was very calm and fair.",
        why: "وصف فيصل القاضي بأنه كان هادئًا وعادلًا جدًا (very calm and fair).", errCat: "reading" },
      { q: "Why was one witness absent?", opts: ["Because he was in another city", "Because he was sick", "Because he forgot the time"], a: 1,
        ev: "One witness was absent because he was sick, but the other two witnesses were present.",
        whyEn: "One witness was absent because he was sick.",
        why: "كان أحد الشهود غائبًا لأنه كان مريضًا (because he was sick).", errCat: "reading" },
      { q: "How many witnesses were present at the hearing?", opts: ["One witness", "Two witnesses", "Three witnesses"], a: 1,
        ev: "…but the other two witnesses were present.",
        whyEn: "Two witnesses were present (and one was absent).",
        why: "حضر شاهدان اثنان وتغيّب شاهد واحد.", errCat: "reading" },
      { q: "Why does Faisal write 'The traffic was heavy' (with singular 'was')?", opts: ["Because 'traffic' is an uncountable singular noun in English.", "Because 'traffic' is a plural noun.", "Because 'heavy' is a verb."], a: 0,
        ev: "The traffic on King Fahd Road was heavy…",
        whyEn: "'traffic' is uncountable in English, so it always takes singular 'is / was'.",
        why: "لأن كلمة traffic غير معدودة في الإنجليزية فتعامل معاملة المفرد وتأخذ was.", errCat: "agreement" }
    ]
  },

  writing: {
    taskEn: "Write at least 4 separate sentences about yesterday: where you were, how the traffic or weather was, and who was with you (using 'was', 'were', and 'wasn't / weren't').",
    task: "اكتب 4 جمل منفصلة على الأقل عن يوم أمس: أين كنت، وكيف كانت حركة المرور أو الدراسة، ومن كان معك (باستخدام was وwere وwasn't / weren't وكلمات الدرس).",
    checks: [
      { k: "sentences", tEn: "At least 4 separate sentences (end each with a period .)", t: "4 جمل منفصلة على الأقل (بنقطة في نهاية كل جملة)",
        ok: function(a){ return a.sentences >= 4; } },
      { k: "was", tEn: "At least 1 sentence with 'was' or 'wasn't'", t: "جملة على الأقل فيها was أو wasn't للمفرد", ex: "Yesterday, I was at the office. · I wasn't late.",
        ok: function(a, text){ return /\b(?:was|wasn't)\b/i.test(String(text || '')); } },
      { k: "were", tEn: "At least 1 sentence with 'were' or 'weren't'", t: "جملة على الأقل فيها were أو weren't للجمع", ex: "My friends were ready. · There weren't any mistakes.",
        ok: function(a, text){ return /\b(?:were|weren't)\b/i.test(String(text || '')); } },
      { k: "vocab", tEn: "At least 3 words/phrases from today's lesson", t: "3 كلمات أو عبارات من درس اليوم", ex: "yesterday · hearing · absent · late · traffic · calm · clear · hire a lawyer",
        ok: function(a){ return a.used.length >= 3; } }
    ],
    modelMarked: "{Yesterday}, I <<c:was>> at the law office for a [[training|تدريبية]] [[session|جلسة]]. The {traffic} <<c:was>> [[heavy|مزدحم]] in the morning, [[but|لكن]] I <<c:wasn't>> {late}. <<c:There were>> five [[students|طلاب]] in our [[group|مجموعة]], and nobody <<c:was>> {absent}. The [[supervisor|المشرف]] <<c:was>> very {calm}, and all the [[examples|الأمثلة]] about when to {hire a lawyer} <<c:were>> {clear}.",
    model: "Yesterday, I was at the law office for a training session. The traffic was heavy in the morning, but I wasn't late. There were five students in our group, and nobody was absent. The supervisor was very calm, and all the examples about when to hire a lawyer were clear."
  },

  quiz: [
    { s: "Where ___ you yesterday morning at nine?", opts: ["was", "were", "are"], a: 1, tag: "Grammar · قواعد",
      whyEn: "'you' + 'yesterday morning' requires 'were'.",
      why: "مع الضمير you وكلمة yesterday نستخدم were.", errCat: "agreement" },
    { s: "The court hearing ___ very long, but it was clear.", opts: ["wasn't", "weren't", "didn't"], a: 0, tag: "Grammar · قواعد",
      whyEn: "'The court hearing' is singular and 'long' is an adjective → wasn't.",
      why: "الفاعل مفرد (The court hearing) والخبر صفة (long)، فننفي بـ wasn't.", errCat: "agreement" },
    { s: "There ___ two witnesses waiting outside Courtroom 3 yesterday.", opts: ["was", "were", "are"], a: 1, tag: "Grammar · قواعد",
      whyEn: "'two witnesses' is plural + 'yesterday' → There were.",
      why: "الاسم جمع (two witnesses) وفي الماضي، فنختار were.", errCat: "agreement" },
    { s: "Which sentence is correct?", opts: ["Yesterday, I am tired.", "Yesterday, I was tired.", "Yesterday, I were tired."], a: 1, tag: "Grammar · قواعد",
      whyEn: "With 'Yesterday' and 'I', use 'was'.",
      why: "مع Yesterday والضمير I نستخدم الفعل الماضي was.", errCat: "tense" },
    { s: "___ the client folders on your desk last night?", opts: ["Was", "Were", "Did"], a: 1, tag: "Grammar · قواعد",
      whyEn: "'the client folders' is plural + no action verb → Were.",
      why: "الفاعل جمع (the client folders) بلا فعل حدث، فنسأل بـ Were.", errCat: "agreement" },
    { s: "We ___ late for the lecture; we arrived ten minutes early.", opts: ["wasn't", "weren't", "don't"], a: 1, tag: "Grammar · قواعد",
      whyEn: "'We' takes plural past negative 'weren't'.",
      why: "الضمير We يأخذ في النفي الماضي weren't.", errCat: "agreement" },
    { s: "The ___ on the bridge was slow yesterday evening.", opts: ["traffic", "absent", "clear"], a: 0, tag: "Vocabulary · مفردات",
      whyEn: "'traffic' is the noun for vehicles moving on a road.",
      why: "traffic تعني حركة المرور على الجسر.", errCat: "vocab" },
    { s: "No one was ___ from the team meeting; all twelve members were there.", opts: ["calm", "clear", "absent"], a: 2, tag: "Vocabulary · مفردات",
      whyEn: "'absent' means not present.",
      why: "absent تعني غائبًا عن الاجتماع.", errCat: "vocab" },
    { s: "The judge stayed ___ and listened to every point.", opts: ["calm", "traffic", "yesterday"], a: 0, tag: "Vocabulary · مفردات",
      whyEn: "'calm' (spelled with silent 'l') means peaceful and composed.",
      why: "calm تعني هادئًا.", errCat: "vocab" },
    { s: "When a business faces a complex lawsuit, it should ___.", opts: ["hire a lawyer", "be traffic", "late a court"], a: 0, tag: "Legal Track · المسار القانوني",
      whyEn: "'hire a lawyer' means employ a lawyer for legal representation.",
      why: "hire a lawyer هي العبارة القانونية بمعنى يوكّل محاميًا.", errCat: "vocab" }
  ]
};
})();
