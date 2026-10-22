/* ===== الأسبوع التأسيسي (الوحدة 0) · الدرس 2: Two Cases in Court — Singular & Plural Agreement (6 مراحل · درس استماع) ===== */
(function(){
var AGREE_SVG = '<svg class="tl" viewBox="0 0 340 168" role="img" aria-label="Diagram comparing Singular (1 item: There is, Is there, This is, These phones -> wrong) vs Plural (2+ items: There are, Are there, These are)" direction="ltr">' +
  '<rect x="10" y="12" width="154" height="144" rx="16" fill="#E8EEF5" stroke="#2C4A6E" stroke-width="1.8"/>' +
  '<text x="87" y="34" text-anchor="middle" font-family="Quicksand, sans-serif" font-weight="700" font-size="13" fill="#2C4A6E">SINGULAR · المفرد (1)</text>' +
  '<text x="87" y="52" text-anchor="middle" font-family="Readex Pro, sans-serif" font-weight="600" font-size="10.5" fill="#5A6B7C">is · was · does · this / that</text>' +
  '<text x="20" y="78" font-family="Quicksand, sans-serif" font-weight="700" font-size="11.2" fill="#1E2A33">+ : There is one judge.</text>' +
  '<text x="20" y="102" font-family="Quicksand, sans-serif" font-weight="700" font-size="11.2" fill="#1E2A33">? : Is there a witness?</text>' +
  '<text x="20" y="126" font-family="Quicksand, sans-serif" font-weight="700" font-size="11.2" fill="#1E2A33">👉 : This case is clear.</text>' +
  '<rect x="176" y="12" width="154" height="144" rx="16" fill="#F9EBE7" stroke="#B94A33" stroke-width="1.8"/>' +
  '<text x="253" y="34" text-anchor="middle" font-family="Quicksand, sans-serif" font-weight="700" font-size="13" fill="#A8432E">PLURAL · الجمع (2+)</text>' +
  '<text x="253" y="52" text-anchor="middle" font-family="Readex Pro, sans-serif" font-weight="600" font-size="10.5" fill="#A8432E">are · were · do · these / those</text>' +
  '<text x="186" y="78" font-family="Quicksand, sans-serif" font-weight="700" font-size="11.2" fill="#1E2A33">+ : There are two judges.</text>' +
  '<text x="186" y="102" font-family="Quicksand, sans-serif" font-weight="700" font-size="11.2" fill="#1E2A33">? : Are there any witnesses?</text>' +
  '<text x="186" y="126" font-family="Quicksand, sans-serif" font-weight="700" font-size="11.2" fill="#1E2A33">👉 : These cases are clear.</text>' +
  '</svg>';

LESSONS.u0l2 = {
  id: "u0l2",
  unit: 0,
  n: 2,
  mode: "listening",
  en: "Two Cases in Court",
  ar: "المطابقة مع المفرد والجمع (There is / There are)",
  subEn: "Foundation 2 · Singular & Plural Agreement (Is there / Are there · This / These)",
  canDoEn: "I can match singular and plural nouns with is/are, There is/There are, and this/these in statements and questions.",
  canDoAr: "أقدر أن أطابق الأسماء المفردة والجمع مع is/are وThere is/There are وthis/these في الجمل والأسئلة.",
  descEn: "I can ask and answer about singular and plural things using There is / There are and This / These without mixing them.",
  descAr: "أقدر أن أسأل وأجيب عن المفرد والجمع باستخدام There is / There are وThis / These دون خلط بينهما، مع مقطع استماع عن التحضير لجلسة محكمة.",
  goals: [
    { en: "I can use 'There is / Is there' with singular nouns and 'There are / Are there' with plural nouns.", ar: "أقدر أن أستخدم There is / Is there مع المفرد وThere are / Are there مع الجمع." },
    { en: "I can match 'this / that' with singular nouns + is, and 'these / those' with plural nouns + are.", ar: "أقدر أن أطابق this / that مع المفرد + is، وthese / those مع الجمع + are." },
    { en: "I can understand a 3-stage listening conversation about two court cases and shadow the speakers.", ar: "أقدر أن أفهم محادثة استماع من 3 مراحل عن قضيتين في المحكمة وأردّد مع المتحدثين." },
    { en: "I can write at least 4 separate sentences using singular and plural agreement and 'go to court'.", ar: "أقدر أن أكتب 4 جمل منفصلة على الأقل تطابق بين المفرد والجمع وتستخدم العبارة القانونية go to court." }
  ],
  intro: {
    recall: {
      dEn: "Review Lesson 1 words and legal phrases from memory by typing them on the keyboard.",
      d: "استرجع كلمات الدرس الأول وعبارته القانونية كتابةً من ذاكرتك بلوحة المفاتيح.",
      items: [
        ["review", "5 active recall items from Foundation Lesson 1", "5 عناصر استرجاع نشط من الدرس التأسيسي الأول"],
        ["pen", "Type from memory to lock in spelling (-ful, double letters)", "كتابة من الذاكرة لتثبيت أنماط الإملاء"],
        ["spark", "Includes Be vs. Do and legal vocabulary", "تشمل الفرق بين be وdo والمفردات القانونية"]
      ]
    },
    vocab: {
      dEn: "7 core courtroom & office words plus today's legal phrase ('go to court'), with randomized matching rounds.",
      d: "7 كلمات أساسية من بيئة القضايا والمحكمة مع العبارة القانونية اليومية (go to court)، ولعبة توصيل عشوائية في كل جولة.",
      items: [
        ["cards", "8 Flashcards (7 words + 'go to court') with human audio & Oxford link", "8 بطاقات (7 كلمات + go to court) مع النطق البشري ورابط Oxford"],
        ["review", "Randomized 2-round matching game", "لعبة توصيل عشوائية من جولتين"],
        ["quiz", "8 context sentences: choose the right word", "8 جمل سياقية: اختر الكلمة المناسبة"]
      ]
    },
    grammar: {
      dEn: "Why is 'Is there any restaurants?' or 'These phones is made' wrong? Master Singular & Plural Agreement.",
      d: "لماذا تُعد جملة Is there any restaurants أو These phones is made خاطئة؟ أتقن المطابقة بين المفرد والجمع.",
      items: [
        ["book", "6 grammar cards (English first, Arabic on tap)", "6 بطاقات شرح (الإنجليزي أولًا، والعربي عند الطلب)"],
        ["quiz", "24 guided exercises across 4 types, one per screen", "24 تمرينًا موجّهًا على 4 أنماط، سؤال في كل شاشة"]
      ]
    },
    reading: {
      dEn: "3-Stage Listening: Listen for the main idea without the text, answer 8 detail questions, then read the interactive transcript and shadow.",
      d: "استماع على 3 مراحل: استمع أولًا للفكرة العامة بدون النص، ثم أجب عن 8 أسئلة تفاصيل، ثم اقرأ النص التفاعلي وردّد مع المتحدث.",
      items: [
        ["speaker", "Stage 1: Listen for the main idea without reading the transcript", "المرحلة 1: استماع أول للفكرة العامة بدون النص المكتوب"],
        ["quiz", "Stage 2: Listen again and answer 8 detail questions", "المرحلة 2: استماع ثانٍ للإجابة عن 8 أسئلة تفاصيل بالدليل"],
        ["mail", "Stage 3: Interactive transcript with word meanings & Shadowing Timer", "المرحلة 3: يظهر النص المكتوب لمراجعة ما فات مع الترديد (Shadowing)"]
      ]
    },
    writing: {
      dEn: "Write at least 4 separate sentences describing your office, university, or courtroom using singular and plural agreement.",
      d: "اكتب 4 جمل منفصلة على الأقل تصف فيها قاعتك أو مكتبك باستخدام المفرد والجمع (There is / There are / These are).",
      items: [
        ["pen", "At least 4 separate sentences with periods (.)", "4 جمل منفصلة على الأقل تنتهي كل منها بنقطة"],
        ["spark", "Instant check separating Singular/Plural Agreement from Spelling", "تصحيح فوري يفصل أخطاء المطابقة والقواعد عن الإملاء"]
      ]
    },
    quiz: {
      dEn: "10 shuffled questions on Singular & Plural Agreement and vocabulary (80% to pass), plus Lesson Error Analysis.",
      d: "اختبار قصير من 10 أسئلة في المطابقة ومفردات الدرس (النجاح من 80%)، يليه تحليل شامل لأخطاء الدرس.",
      items: [
        ["quiz", "10 questions (80% passing score)", "10 أسئلة متنوعة (النجاح من 80%)"],
        ["review", "Structured Error Analysis by category", "تحليل أخطاء الدرس وأسبابها حسب الفئة"]
      ]
    }
  },

  recall: [
    {
      id: "rc-0",
      promptAr: "متعاون / مفيد (صفة من الدرس السابق تنتهي بالمقطع ful بلام واحدة)",
      promptEn: "Adjective meaning glad to help others (ends with -ful, one 'l'!)",
      sentPre: "The senior lawyers in our office are very",
      sentPost: ".",
      ans: ["helpful"],
      hint: "h e l p f _ l (7 letters)",
      spellNoteEn: "Pattern: Suffix -ful always ends with ONE 'l' (helpful, careful, beautiful).",
      spellNote: "قاعدة إملاء: المقطع ful في نهاية الصفات يُكتب بلام واحدة دائمًا (helpful).",
      errCat: "spelling"
    },
    {
      id: "rc-1",
      promptAr: "يجهّز / يُعدّ (فعل حدث من الدرس السابق يبدأ بحرف p)",
      promptEn: "Action verb meaning to get files or documents ready",
      sentPre: "Every morning, I",
      sentPost: "the client files before nine.",
      ans: ["prepare"],
      hint: "p r e p _ _ e (7 letters)",
      spellNoteEn: "Spelled pre + pare (prepare) with a silent -e at the end.",
      spellNote: "تتكوّن من المقطع pre ثم pare (prepare).",
      errCat: "spelling"
    },
    {
      id: "rc-2",
      promptAr: "يقدّم استشارة قانونية (العبارة القانونية من الدرس الأول: give legal ___)",
      promptEn: "Legal collocation:Experienced lawyers give legal ___ to clients.",
      sentPre: "Only licensed lawyers can give legal",
      sentPost: "to clients.",
      ans: ["advice", "give legal advice"],
      hint: "a d v _ c e (with 'c')",
      spellNoteEn: "Noun 'advice' is spelled with 'c' and is uncountable (give legal advice).",
      spellNote: "الاسم advice يُكتب بحرف c وهو غير معدود ضمن عبارة give legal advice.",
      errCat: "spelling"
    },
    {
      id: "rc-3",
      promptAr: "مشغول / مزدحم (صفة تحتاج قبلها am / is / are)",
      promptEn: "Adjective meaning having a lot of work (starts with b)",
      sentPre: "Sundays are very",
      sentPost: "at the law office.",
      ans: ["busy"],
      hint: "b u s _ (4 letters)",
      spellNoteEn: "Spelled b-u-s-y (pronounced 'bizi').",
      spellNote: "تُكتب b-u-s-y وإن كانت تُنطق قريبًا من (بِزي).",
      errCat: "spelling"
    },
    {
      id: "rc-4",
      promptAr: "فعل السؤال المساعد مع you قبل فعل الحدث agree (تذكّر: agree فعل وليست صفة!)",
      promptEn: "Helper verb to start a question with 'you' + action verb 'agree'",
      sentPre: "___ you",
      sentPost: "agree with the lawyer's plan?",
      ans: ["do"],
      hint: "D o (2 letters)",
      spellNoteEn: "With action/mental verbs like 'agree', ask with 'Do you agree?' (never 'Are you agree?').",
      spellNote: "مع الفعل agree نسأل بـ Do you agree وليس Are you agree.",
      errCat: "be_verb"
    }
  ],

  legalPhrase: {
    en: "go to court",
    headword: "court",
    pos: "legal phrase",
    ar: "يذهب إلى المحكمة (لحضور جلسة أو الترافع)",
    say: "قُو تُو كُورْت",
    ex: "The two lawyers go to court every Tuesday morning.",
    exAr: "يذهب المحاميان إلى المحكمة كل صباح ثلاثاء.",
    tipEn: "Legal collocation: 'go to court' (without 'the' when talking about attending a legal hearing or trial).",
    tip: "متلازمة قانونية شائعة: نقول go to court (بدون the) عندما نقصد الذهاب للترافع أو حضور جلسة قضائية.",
    legal: true,
    oxfordSlug: "court_1",
    wikiFiles: ["En-us-go.ogg", "En-us-to.ogg", "En-us-court.ogg"],
    wikiCredit: "File:En-us-go.ogg, File:En-us-to.ogg & File:En-us-court.ogg · Wikimedia Commons (CC BY-SA 3.0)"
  },

  vocab: [
    { en: "case", pos: "noun", ar: "قضية / دعوى", say: "كَيْس",
      ex: "There are two important cases today.", exAr: "توجد قضيتان مهمتان اليوم.",
      tipEn: "Countable noun: one case (singular) → two cases (plural). Collocation: win a case / handle a case.",
      tip: "اسم معدود: مفرده a case وجمعه cases، ومن متلازماته القانونية handle a case (يتولى قضية).",
      oxfordSlug: "case_1",
      wikiFile: "En-us-case.ogg",
      wikiCredit: "File:En-us-case.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "judge", pos: "noun", ar: "قاضٍ", say: "جَج",
      ex: "There is one judge in the courtroom.", exAr: "يوجد قاضٍ واحد في قاعة المحكمة.",
      tipEn: "Spelling: silent 'd' before 'g' (j-u-d-g-e). Singular: a judge → Plural: judges.",
      tip: "انتبه لحرف d قبل g في كتابة j-u-d-g-e، وجمعها judges.",
      oxfordSlug: "judge_1",
      wikiFile: "En-us-judge.ogg",
      wikiCredit: "File:En-us-judge.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "witness", pos: "noun", ar: "شاهد (في قضية)", say: "وِتْنِس",
      ex: "Are there any witnesses for this case?", exAr: "هل يوجد أي شهود لهذه القضية؟",
      tipEn: "Ends in '-ss', so add '-es' in the plural: one witness → three witnesses.",
      tip: "ينتهي الاسم بحرفي ss، لذلك نضيف es عند الجمع: witness ← witnesses.",
      oxfordSlug: "witness_1",
      wikiFile: "En-us-witness.ogg",
      wikiCredit: "File:En-us-witness.ogg · Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "folder", pos: "noun", ar: "ملف / حافظة أوراق", say: "فُولْدَر",
      ex: "These blue folders are for the commercial case.", exAr: "هذه الملفات الزرقاء مخصصة للقضية التجارية.",
      tipEn: "Regular plural: one folder → two folders.",
      tip: "جمع منتظم بإضافة s: مفرده folder وجمعه folders.",
      oxfordSlug: "folder",
      wikiFile: "En-us-folder.ogg",
      wikiCredit: "File:En-us-folder.ogg · Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "seat", pos: "noun", ar: "مقعد", say: "سِيت",
      ex: "There are empty seats in the front row.", exAr: "توجد مقاعد فارغة في الصف الأمامي.",
      tipEn: "Careful: 'seat' (noun: a place to sit) vs. 'sit' (verb: sit down).",
      tip: "انتبه للفرق بين seat (اسم بمعنى مقعد، بحرفي ea) وبين sit (فعل بمعنى يجلس).",
      oxfordSlug: "seat_1",
      wikiFile: "En-us-seat.ogg",
      wikiCredit: "File:En-us-seat.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "mistake", pos: "noun", ar: "خطأ", say: "مِسْتَيْك",
      ex: "There aren't any mistakes in these pages.", exAr: "لا توجد أي أخطاء في هذه الصفحات.",
      tipEn: "Collocation: 'make a mistake' (never 'do a mistake'). Plural: mistakes.",
      tip: "متلازمة شائعة جدًا: نقول make a mistake (يرتكب خطأ) ولا نقول do a mistake.",
      oxfordSlug: "mistake_1",
      wikiFile: "En-us-mistake.ogg",
      wikiCredit: "File:En-us-mistake.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "ready", pos: "adjective", ar: "جاهز / مستعد", say: "رِدِي",
      ex: "All the documents are ready for the judge.", exAr: "جميع المستندات جاهزة للقاضي.",
      tipEn: "Adjectives in English NEVER take plural '-s' (The files are ready, NOT readies).",
      tip: "الصفات في الإنجليزية لا تُجمع أبدًا؛ نقول The file is ready وThe files are ready بدون تغيير في الصفة.",
      oxfordSlug: "ready_1",
      wikiFile: "En-us-ready.ogg",
      wikiCredit: "File:En-us-ready.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" }
  ],

  vocabGaps: [
    { s: "The ___ listens carefully to both lawyers in the courtroom.", opts: ["judge", "folder", "seat"], a: 0,
      whyEn: "The 'judge' is the official who leads the court and decides cases.",
      why: "القاضي (judge) هو الذي يدير الجلسة ويستمع للمحامين.", errCat: "vocab" },
    { s: "There are two eye-___ waiting outside the courtroom.", opts: ["mistakes", "witnesses", "seats"], a: 1,
      whyEn: "'witnesses' are people who saw what happened and testify in court.",
      why: "الشهود (witnesses) هم من يدلون بشهادتهم في القضية.", errCat: "vocab" },
    { s: "Please put the signed contracts inside this yellow ___.", opts: ["folder", "judge", "witness"], a: 0,
      whyEn: "A 'folder' holds paper documents together.",
      why: "folder هي حافظة الأوراق أو الملف الذي توضع فيه المستندات.", errCat: "vocab" },
    { s: "Are there any empty ___ in the meeting room?", opts: ["cases", "seats", "judges"], a: 1,
      whyEn: "'empty seats' means places where people can sit.",
      why: "empty seats تعني مقاعد شاغرة للجلوس.", errCat: "vocab" },
    { s: "Check the numbers twice so you don't make a ___.", opts: ["mistake", "witness", "seat"], a: 0,
      whyEn: "Collocation: 'make a mistake'.",
      why: "المتلازمة الصحيحة هي make a mistake (يرتكب خطأ).", errCat: "vocab" },
    { s: "Mr. Salman handles commercial ___ for big companies.", opts: ["seats", "cases", "judges"], a: 1,
      whyEn: "'commercial cases' are legal matters involving business.",
      why: "commercial cases تعني القضايا التجارية.", errCat: "vocab" },
    { s: "Are the client files ___ for the morning session?", opts: ["ready", "witness", "mistake"], a: 0,
      whyEn: "'ready' is an adjective meaning prepared and complete.",
      why: "ready صفة تعني جاهزة ومكتملة.", errCat: "vocab" },
    { s: "When companies cannot solve a dispute, they ___.", opts: ["go to court", "make a seat", "ready a judge"], a: 0,
      whyEn: "'go to court' is the legal phrase meaning take a legal dispute to a court.",
      why: "go to court تعني يلجأ إلى المحكمة أو يذهب للتقاضي.", errCat: "vocab" }
  ],

  gCards: [
    {
      tEn: "There is vs. There are",
      t: "الفرق بين There is للمفرد و There are للجمع",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">There is vs. There are</span><small>تعبير «يوجد» مع المفرد ومع الجمع</small></h2>' +
        '<p class="en-p" dir="ltr">In Arabic, one word («يوجد» / «فيه») works for both singular and plural. In English, you MUST match the verb to the noun that follows:</p>' +
        '<div class="xbox"><span class="xtag s" dir="ltr">Singular (1) · المفرد</span><p class="xen">There is a law office on this street.</p></div>' +
        '<div class="xbox"><span class="xtag c" dir="ltr">Plural (2+) · الجمع</span><p class="xen">There are three law offices on this street.</p></div>' +
        AGREE_SVG,
      arHtml:
        '<p>في العربية نقول «يوجد مكتب» و«يوجد ثلاثة مكاتب» بنفس الكلمة، أما في الإنجليزية فلا بد من النظر إلى الاسم الذي يأتي بعدها:</p>' +
        '<p>١) مع الاسم المفرد نستخدم <b>There is</b> (أو <b>There\'s</b>).</p>' +
        '<p>٢) مع الاسم الجمع نستخدم <b>There are</b>.</p>'
    },
    {
      tEn: "Questions & Negatives: Is there…? / Are there…?",
      t: "السؤال والنفي: Is there مقابل Are there",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Questions & Negatives: Is there / Are there</span><small>السؤال والنفي مع المفرد والجمع</small></h2>' +
        '<p class="en-p" dir="ltr">In questions with <b>any</b>, look closely at the noun: if the noun ends in plural <b>-s</b>, always start with <b>Are there…?</b></p>' +
        '<div class="tbl"><table><thead><tr><th>Form</th><th>Singular · المفرد</th><th>Plural (+ any) · الجمع</th></tr></thead><tbody>' +
        '<tr><td>Positive (+)</td><td><span class="hs">There is</span> a witness.</td><td><span class="hc">There are</span> two witnesses.</td></tr>' +
        '<tr><td>Negative (−)</td><td><span class="hs">There isn\'t</span> a witness.</td><td><span class="hc">There aren\'t</span> any witnesses.</td></tr>' +
        '<tr><td>Question (?)</td><td><span class="hs">Is there</span> a witness?</td><td><span class="hc">Are there</span> any witnesses?</td></tr>' +
        '<tr><td>Short Answer</td><td>Yes, <span class="hs">there is</span>. / No, <span class="hs">there isn\'t</span>.</td><td>Yes, <span class="hc">there are</span>. / No, <span class="hc">there aren\'t</span>.</td></tr></tbody></table></div>',
      arHtml:
        '<p>عند السؤال بكلمة <bdi class="en">any</bdi> مع اسم جمع (مثل <bdi class="en">restaurants, witnesses, mistakes</bdi>) يجب أن نسأل بـ <b>Are there any…?</b> وليس <bdi class="en">Is there any…?</bdi>.</p>'
    },
    {
      tEn: "This / That vs. These / Those",
      t: "أسماء الإشارة للمفرد والجمع (This / These)",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">This / That vs. These / Those</span><small>أسماء الإشارة للمفرد والجمع</small></h2>' +
        '<p class="en-p" dir="ltr">Match the pointing word AND the verb to whether you have <b>one</b> thing or <b>many</b> things:</p>' +
        '<div class="sigs">' +
          '<div class="sig s"><h3 dir="ltr">Singular + is<small class="sig-ar">مفرد + is</small></h3><ul><li>This folder is… (قريب)</li><li>That folder is… (بعيد)</li></ul></div>' +
          '<div class="sig c"><h3 dir="ltr">Plural + are<small class="sig-ar">جمع + are</small></h3><ul><li>These folders are… (قريب)</li><li>Those folders are… (بعيد)</li></ul></div>' +
        '</div>' +
        '<div class="tip" dir="ltr"><p><b>Diagnostic Alert · تنبيه من التشخيص:</b> Never pair <b>These / Those</b> with singular <b>is</b>:</p><div class="pairs"><span class="yes">These phones are made in Korea.</span><span class="no">These phones is made in Korea.</span></div></div>',
      arHtml:
        '<p>مع المفرد نستخدم <b>this</b> (هذا/هذه للقريب) أو <b>that</b> (للبعيد) ويأتي بعدها فعل مفرد <b>is</b>.</p>' +
        '<p>مع الجمع نستخدم <b>these</b> (هؤلاء/هذه للجمع القريب) أو <b>those</b> (للجمع البعيد) ويأتي بعدها فعل جمع <b>are</b> دائمًا.</p>'
    },
    {
      tEn: "Regular & Irregular Plurals + Adjectives",
      t: "قواعد جمع الأسماء وثبات الصفات",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Plurals & Unchanging Adjectives</span><small>جمع الأسماء وثبات الصفات</small></h2>' +
        '<ul class="spell" dir="ltr">' +
          '<li>Most nouns: add <b>-s</b><span class="s-en">lawyer → lawyers · seat → seats</span></li>' +
          '<li>After <b>s · ss · sh · ch · x</b>: add <b>-es</b><span class="s-en">witness → witnesses · box → boxes</span></li>' +
          '<li>Consonant + <b>y</b> → <b>-ies</b><span class="s-en">city → cities · company → companies</span></li>' +
          '<li>Common irregular plurals (no -s, but still take <b>are</b>!):<span class="s-en">person → people · man → men · woman → women · child → children</span></li>' +
        '</ul>' +
        '<div class="xbox"><span class="xtag s" dir="ltr">Adjectives NEVER take -s · الصفات لا تُجمع</span><p class="xen">One important case → Two important cases (NOT importants)</p></div>',
      arHtml:
        '<p>١) الأسماء الشاذة في الجمع مثل <b>people</b> (ناس/أشخاص) و<b>men</b> و<b>children</b> هي جمع حتى بدون حرف <bdi class="en">s</bdi>، فتأخذ دائمًا <b>are</b> (<bdi class="en">There are ten people</bdi>).</p>' +
        '<p>٢) الصفات في الإنجليزية (مثل <bdi class="en">important, ready, busy, legal</bdi>) لا يُضاف لها <bdi class="en">s</bdi> أبدًا مع الجمع.</p>'
    },
    {
      tEn: "Common Arab Mistakes",
      t: "أخطاء العرب الشائعة",
      bilingual: true,
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Common Arab Mistakes</span><small>أخطاء يقع فيها كثير من العرب (من التشخيص)</small></h2>' +
        '<ul class="mist">' +
          '<li><span class="no">Is there any restaurants near here?</span><span class="yes">Are there any restaurants near here?</span><p class="en-m" dir="ltr"><b>restaurants</b> is plural, so the question must begin with <b>Are there…?</b></p><p>كلمة <bdi class="en">restaurants</bdi> جمع، فلا نترجم «هل يوجد» بـ <bdi class="en">Is there</bdi> بل بـ <bdi class="en">Are there</bdi>.</p></li>' +
          '<li><span class="no">These contracts is ready.</span><span class="yes">These contracts are ready.</span><p class="en-m" dir="ltr">In Arabic, non-human plurals («هذه العقود جاهزة») take singular feminine agreement, but in English ALL plurals take <b>these … are</b>.</p><p>في العربية نعامل جمع غير العاقل معاملة المفرد المؤنث («هذه العقود جاهزة»)، أما في الإنجليزية فكل جمع عاقل أو غير عاقل يأخذ <bdi class="en">these … are</bdi>.</p></li>' +
          '<li><span class="no">There is many people in the hall.</span><span class="yes">There are many people in the hall.</span><p class="en-m" dir="ltr"><b>people</b> is plural (plural of person), so it always takes <b>are</b>.</p><p>كلمة <bdi class="en">people</bdi> جمع، فتأخذ <bdi class="en">There are</bdi> دائمًا.</p></li>' +
          '<li><span class="no">They have two importants cases.</span><span class="yes">They have two important cases.</span><p class="en-m" dir="ltr">Never add plural <b>-s</b> to an adjective.</p><p>الصفة <bdi class="en">important</bdi> لا تُجمع بـ <bdi class="en">s</bdi>.</p></li>' +
        '</ul>'
    },
    {
      tEn: "Summary",
      t: "الخلاصة",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Quick Summary</span><small>الخلاصة</small></h2>' +
        '<div class="sumc" dir="ltr"><h3>In Two Lines · في سطرين</h3>' +
          '<p><b>Singular (1) · المفرد</b><span>There is / Is there · This / That + singular noun + is</span></p>' +
          '<p><b>Plural (2+) · الجمع</b><span>There are / Are there · These / Those + plural noun + are (even for things!)</span></p>' +
        '</div>' +
        '<p class="en-p" dir="ltr">Now let\'s practice: 24 guided exercises on Singular & Plural Agreement.</p>',
      arHtml:
        '<p><b>مع المفرد:</b> نستخدم <bdi class="en">There is / Is there</bdi> و<bdi class="en">This / That … is</bdi>.</p>' +
        '<p><b>مع الجمع (عاقل أو غير عاقل):</b> نستخدم <bdi class="en">There are / Are there</bdi> و<bdi class="en">These / Those … are</bdi>.</p>'
    }
  ],

  gA: [
    { s: "There ___ two commercial cases on the schedule today.", opts: ["is", "are"], a: 1,
      whyEn: "'two commercial cases' is plural → There are.",
      why: "عبارة two commercial cases جمع، فنستخدم There are.", errCat: "agreement" },
    { s: "___ there a copy machine on this floor?", opts: ["Is", "Are"], a: 0,
      whyEn: "'a copy machine' is singular → Is there…?",
      why: "الاسم مفرد مسبوق بـ a (a copy machine)، فنسأل بـ Is there.", errCat: "agreement" },
    { s: "___ there any witnesses waiting in Room 2?", opts: ["Is", "Are"], a: 1,
      whyEn: "'witnesses' is plural → Are there any witnesses…?",
      why: "كلمة witnesses جمع، لذلك نسأل بـ Are there.", errCat: "agreement" },
    { s: "These legal folders ___ for Mr. Salman.", opts: ["is", "are"], a: 1,
      whyEn: "Plural 'These folders' (even though they are things) must take 'are'.",
      why: "الفاعل جمع غير عاقل (These folders) ويأخذ في الإنجليزية are دائمًا.", errCat: "agreement" },
    { s: "___ seat next to the window is empty.", opts: ["This", "These"], a: 0,
      whyEn: "'seat' is singular + 'is' → This seat.",
      why: "كلمة seat مفرد وبعدها الفعل is، فنختار اسم الإشارة للمفرد This.", errCat: "agreement" },
    { s: "There ___ twelve people in our research team.", opts: ["is", "are"], a: 1,
      whyEn: "'people' is an irregular plural noun → There are.",
      why: "كلمة people جمع، فنستخدم معها There are.", errCat: "agreement" },
    { s: "___ reports on your desk are very clear.", opts: ["That", "Those"], a: 1,
      whyEn: "'reports' is plural + 'are' → Those reports.",
      why: "كلمة reports جمع وبعدها are، فنختار اسم الإشارة للجمع Those.", errCat: "agreement" },
    { s: "There ___ any mistakes in your contract.", opts: ["isn't", "aren't"], a: 1,
      whyEn: "'any mistakes' is plural → There aren't.",
      why: "مع الجمع المنفي (any mistakes) نستخدم There aren't.", errCat: "agreement" }
  ],

  gB: [
    { s: "Are there any new clients in the office today?", ok: true,
      whyEn: "'clients' is plural, so 'Are there any…?' is completely correct.",
      why: "كلمة clients جمع، فالسؤال بـ Are there any صحيح تمامًا.", errCat: "agreement" },
    { s: "These computers is very fast.", ok: false, fix: "These computers are very fast.",
      whyEn: "'These computers' is plural → use 'are', never 'is'.",
      why: "الاسم جمع (These computers) فيأخذ are وليس is.", errCat: "agreement" },
    { s: "Is there any empty seats in the courtroom?", ok: false, fix: "Are there any empty seats in the courtroom?",
      whyEn: "'seats' is plural → start the question with 'Are there…?'.",
      why: "كلمة seats جمع، لذلك يجب أن يبدأ السؤال بـ Are there.", errCat: "agreement" },
    { s: "This witness speaks English and Arabic.", ok: true,
      whyEn: "Singular 'This witness' + singular verb 'speaks' with -s is correct.",
      why: "المفرد This witness مع الفعل المضاف له s (speaks) تركيب صحيح.", errCat: "agreement" },
    { s: "We have three importants meetings this week.", ok: false, fix: "We have three important meetings this week.",
      whyEn: "Adjectives in English ('important') never take a plural '-s'.",
      why: "الصفات في الإنجليزية لا تُجمع بحرف s أبدًا؛ نقول important meetings.", errCat: "agreement" },
    { s: "There is five lawyers in the meeting room.", ok: false, fix: "There are five lawyers in the meeting room.",
      whyEn: "'five lawyers' is plural → There are.",
      why: "وجود العدد والجمع (five lawyers) يتطلب There are.", errCat: "agreement" }
  ],

  gC: [
    { pre: "There", verb: "be", post: "a judge in Courtroom 3.", ans: ["is", "'s"],
      whyEn: "'a judge' is singular → There is.",
      why: "بعد الفراغ اسم مفرد (a judge)، فنكتب is.", errCat: "agreement" },
    { pre: "There", verb: "be", post: "four witnesses for the second case.", ans: ["are"],
      whyEn: "'four witnesses' is plural → There are.",
      why: "بعد الفراغ جمع (four witnesses)، فنكتب are.", errCat: "agreement" },
    { pre: "___", verb: "this / these", post: "documents ready for the client?", ans: ["Are these"],
      whyEn: "Question with plural 'documents' → Are these documents ready?",
      why: "سؤال عن اسم جمع (documents)، فنبدأ بـ Are ثم اسم الإشارة للجمع these.", errCat: "agreement" },
    { pre: "There", verb: "not / be", post: "any meetings on Saturday.", ans: ["aren't", "are not"],
      whyEn: "Negative with plural 'any meetings' → There aren't.",
      why: "نفي مع اسم جمع (any meetings)، فنكتب aren't أو are not.", errCat: "agreement" },
    { pre: "How many cases", verb: "be / there", post: "this morning?", ans: ["are there"],
      whyEn: "'How many cases' is a plural question → How many cases are there?",
      why: "السؤال بـ How many يتبعه جمع، فنقدم الفعل المساعد على there: are there.", errCat: "word_order" },
    { pre: "These two contracts", verb: "need", post: "a signature today.", ans: ["need"],
      whyEn: "'These two contracts' is plural (they), so the Present Simple verb takes NO -s (need).",
      why: "الفاعل جمع (These two contracts)، فالفعل في المضارع البسيط يبقى مجردًا بدون s.", errCat: "agreement" }
  ],

  gD: [
    { chips: ["any", "mistakes?", "Are", "there"], ans: "Are there any mistakes?",
      whyEn: "Plural question: Are + there + any + plural noun (mistakes)?",
      why: "سؤال عن الجمع: Are there ثم any ثم الاسم الجمع mistakes.", errCat: "word_order" },
    { chips: ["are", "ready.", "folders", "These"], ans: "These folders are ready.",
      whyEn: "Plural demonstrative (These) + plural noun (folders) + are + adjective (ready).",
      why: "اسم الإشارة للجمع These ثم الاسم الجمع folders ثم are ثم الصفة ready.", errCat: "word_order" },
    { chips: ["one", "judge", "There is", "in court."], ans: "There is one judge in court.",
      whyEn: "There is + singular noun (one judge) + place (in court).",
      why: "There is مع المفرد one judge ثم المكان in court.", errCat: "word_order" },
    { chips: ["there", "a witness", "Is", "today?"], ans: "Is there a witness today?",
      whyEn: "Singular question: Is + there + a witness + time?",
      why: "سؤال عن مفرد: Is there ثم الاسم المفرد a witness.", errCat: "word_order" }
  ],

  /* ---------- المرحلة 4: الاستماع ذو المراحل الثلاث (3-Stage Listening) ---------- */
  listening: {
    title: "Two Cases on Tuesday Morning",
    sourceLabel: "British Council A2 / ELLLO Court Office Dialogue",
    url: "https://learnenglish.britishcouncil.org/skills/listening/a2-listening",
    audioWord: "court",
    targetSeconds: 75,
    introEn: "Listen to Mr. Salman (senior lawyer) and Faisal (law trainee) checking their folders before they go to court on Tuesday morning.",
    intro: "استمع إلى الأستاذ سلمان (المحامي المشرف) وفيصل (المتدرّب القانوني) وهما يراجعان الملفات قبل الذهاب إلى المحكمة صباح الثلاثاء.",
    predict: {
      qEn: "Stage 1 Main-Idea Question: Why are Mr. Salman and Faisal checking the folders right now?",
      q: "سؤال الفكرة العامة (قبل قراءة النص): لماذا يراجع الأستاذ سلمان وفيصل الملفات الآن؟",
      optsEn: [
        "Because they go to court this morning for two cases",
        "Because they are closing the law office for a holiday",
        "Because they are interviewing new university students"
      ],
      opts: [
        "لأنهما ذاهبان إلى المحكمة هذا الصباح لحضور قضيتين",
        "لأنهما يغلقان المكتب في إجازة",
        "لأنهما يجريان مقابلات لطلاب جدد"
      ],
      a: 0,
      whyEn: "They have two cases in court this morning (at 9:30 and 11:00) and are checking that all folders and witnesses are ready.",
      why: "لديهما قضيتان في المحكمة هذا الصباح (الساعة 9:30 و11:00) ويتأكدان من جاهزية الملفات والشهود."
    },
    transcriptParas: [
      "<b>Mr. Salman:</b> Good morning, Faisal. <<s:Are>> you {ready}? We <<c:{go to court}>> at nine-thirty [[this morning|هذا الصباح]].",
      "<b>Faisal:</b> Good morning, Mr. Salman. Yes, I <<s:am>> {ready}. <<s:There are>> two {cases|case} on [[our schedule|جدولنا]] today.",
      "<b>Mr. Salman:</b> Good. <<s:Where>> <<s:are>> the {folders|folder} for the [[first|الأولى]] {case}?",
      "<b>Faisal:</b> <<s:This>> [[blue|الأزرق]] {folder} <<s:is>> for the [[first|الأولى]] {case}. <<s:It>> <<s:is>> a [[contract|عقد]] [[dispute|نزاع]] in Courtroom 2. <<s:There is>> one {judge}, and <<s:there are>> two {witnesses|witness} from the [[shipping company|شركة الشحن]].",
      "<b>Mr. Salman:</b> <<s:Are there>> [[any|أي]] {mistakes|mistake} in the [[contract|العقد]] [[copies|نُسخ]]?",
      "<b>Faisal:</b> No, <<s:there aren't>> [[any|أي]] {mistakes|mistake}. [[All|جميع]] the [[pages|الصفحات]] <<s:are>> [[clear|واضحة]] and [[signed|موقّعة]].",
      "<b>Mr. Salman:</b> Excellent. And what about <<s:those>> [[green|الخضراء]] {folders|folder} on your [[desk|مكتب]]?",
      "<b>Faisal:</b> <<s:These>> [[three|ثلاثة]] [[green|خضراء]] {folders|folder} <<s:are>> for the [[second|الثانية]] {case} at eleven o'clock in Courtroom 5. <<s:There isn't>> a {witness} in <<s:that>> {case}, [[only|فقط]] the two {lawyers|lawyer} and the {judge}.",
      "<b>Mr. Salman:</b> <<s:Are there>> [[enough|كافية]] {seats|seat} in Courtroom 2 for the [[company|الشركة]] [[team|فريق]]?",
      "<b>Faisal:</b> Yes, <<s:there are>> [[twenty|عشرون]] {seats|seat} in the [[front rows|الصفوف الأمامية]]. Let's [[take|نأخذ]] <<s:these>> {folders|folder} and [[go|نذهب]]!"
    ],
    insight: {
      titleEn: "Singular vs. Plural Agreement in the Dialogue",
      titleAr: "لاحظ المطابقة بين المفرد والجمع في المحادثة",
      l1En: "Notice how Faisal matches singular nouns with This / There is / isn't:",
      ex1: "This blue folder is… · There is one judge · There isn't a witness",
      l2En: "And matches plural nouns with These / Those / There are / Are there:",
      ex2: "There are two cases · Are there any mistakes? · These three green folders are…"
    },
    questions: [
      { q: "What time do Mr. Salman and Faisal go to court for the first case?", opts: ["At 8:00", "At 9:30", "At 11:00"], a: 1,
        ev: "We go to court at nine-thirty this morning.",
        whyEn: "Mr. Salman says they go to court at nine-thirty (9:30); 11:00 is the second case.",
        why: "يذهبان للمحكمة للقضية الأولى الساعة 9:30 (أما 11:00 فهو موعد القضية الثانية).", errCat: "reading" },
      { q: "How many cases are on their schedule today?", opts: ["One case", "Two cases", "Three cases"], a: 1,
        ev: "There are two cases on our schedule today.",
        whyEn: "Faisal says: 'There are two cases on our schedule today.'",
        why: "فيصل يذكر وجود قضيتين (two cases) في جدولهما اليوم.", errCat: "reading" },
      { q: "Which folder is for the first case in Courtroom 2?", opts: ["This blue folder", "These three green folders", "A red folder"], a: 0,
        ev: "This blue folder is for the first case. It is a contract dispute in Courtroom 2.",
        whyEn: "The singular blue folder ('This blue folder') is for the first case.",
        why: "الملف الأزرق المفرد (This blue folder) هو المخصص للقضية الأولى.", errCat: "agreement" },
      { q: "How many witnesses are there in the first case?", opts: ["No witnesses", "One witness", "Two witnesses"], a: 2,
        ev: "There is one judge, and there are two witnesses from the shipping company.",
        whyEn: "There is one judge, and there are two witnesses from the shipping company.",
        why: "يوجد قاضٍ واحد وشاهدان اثنان (two witnesses) من شركة الشحن.", errCat: "reading" },
      { tf: true, q: "There are some mistakes in the contract copies.", a: false,
        ev: "No, there aren't any mistakes. All the pages are clear and signed.",
        whyEn: "Faisal confirms: 'No, there aren't any mistakes.'",
        why: "فيصل يؤكد عدم وجود أي أخطاء في نسخ العقد (there aren't any mistakes).", errCat: "reading" },
      { q: "What are the three green folders for?", opts: ["For the second case at 11:00 in Courtroom 5", "For new university students", "For the shipping company's witnesses"], a: 0,
        ev: "These three green folders are for the second case at eleven o'clock in Courtroom 5.",
        whyEn: "The three green folders are for the second case at 11:00 in Courtroom 5.",
        why: "الملفات الخضراء الثلاثة مخصصة للقضية الثانية الساعة 11:00 في القاعة 5.", errCat: "reading" },
      { tf: true, q: "There isn't a witness in the second case.", a: true,
        ev: "There isn't a witness in that case, only the two lawyers and the judge.",
        whyEn: "True—there isn't a witness in the second case.",
        why: "صحيح؛ لا يوجد شاهد في القضية الثانية، بل المحاميان والقاضي فقط.", errCat: "reading" },
      { q: "Why does Mr. Salman ask 'Are there any mistakes?' instead of 'Is there any mistakes?'", opts: ["Because 'mistakes' is a plural noun.", "Because 'mistakes' is an action verb.", "Because it is in the past."], a: 0,
        ev: "Are there any mistakes in the contract copies?",
        whyEn: "'mistakes' is plural, so the question must use 'Are there…?'.",
        why: "لأن كلمة mistakes جمع، فالسؤال عنها يجب أن يبدأ بـ Are there.", errCat: "agreement" }
    ]
  },

  writing: {
    taskEn: "Write at least 4 separate sentences about your study room, law office, or a courtroom: use 'There is' (singular), 'There are' (plural), and 'This / These' with LESSON words.",
    task: "اكتب 4 جمل منفصلة على الأقل تصف فيها مكتبك أو قاعة المحكمة أو غرفتك الدراسية: استخدم There is للمفرد، وThere are للجمع، وThis / These مع كلمات الدرس.",
    checks: [
      { k: "sentences", tEn: "At least 4 separate sentences (end each with a period .)", t: "4 جمل منفصلة على الأقل (بنقطة في نهاية كل جملة)",
        ok: function(a){ return a.sentences >= 4; } },
      { k: "thereIs", tEn: "At least 1 singular sentence with 'There is' or 'This … is'", t: "جملة مفردة بـ There is أو This … is", ex: "There is one judge in the court. · This folder is ready.",
        ok: function(a, text){ return /\b(?:there\s+is|there's|this\s+[a-z]+\s+is|that\s+[a-z]+\s+is)\b/i.test(String(text || '')); } },
      { k: "thereAre", tEn: "At least 1 plural sentence with 'There are' or 'These … are'", t: "جملة جمع بـ There are أو These … are", ex: "There are two cases today. · These folders are ready.",
        ok: function(a, text){ return /\b(?:there\s+are|there\s+aren't|are\s+there|these\s+[a-z]+(?:\s+[a-z]+)?\s+are|those\s+[a-z]+(?:\s+[a-z]+)?\s+are)\b/i.test(String(text || '')); } },
      { k: "vocab", tEn: "At least 3 words/phrases from today's lesson", t: "3 كلمات أو عبارات من درس اليوم", ex: "case · judge · witness · folder · seat · mistake · ready · go to court",
        ok: function(a){ return a.used.length >= 3; } }
    ],
    modelMarked: "<<s:There are>> two important {cases|case} on my schedule today. <<s:This>> blue {folder} <<s:is>> for the morning {case}, and all the [[documents|مستندات]] <<s:are>> {ready}. <<s:There aren't>> any {mistakes|mistake} in the [[pages|صفحات]]. At nine o'clock, I <<c:{go to court}>> with my [[supervisor|مشرف]], and <<s:there are>> empty {seats|seat} for the {witnesses|witness}.",
    model: "There are two important cases on my schedule today. This blue folder is for the morning case, and all the documents are ready. There aren't any mistakes in the pages. At nine o'clock, I go to court with my supervisor, and there are empty seats for the witnesses."
  },

  quiz: [
    { s: "___ there any new messages from the court today?", opts: ["Is", "Are", "Do"], a: 1, tag: "Grammar · قواعد",
      whyEn: "'messages' is plural → Are there any new messages…?",
      why: "كلمة messages جمع، فنسأل بـ Are there.", errCat: "agreement" },
    { s: "These two commercial cases ___ very important.", opts: ["is", "are", "does"], a: 1, tag: "Grammar · قواعد",
      whyEn: "'These two commercial cases' is plural → are.",
      why: "الفاعل جمع (These two commercial cases) فيأخذ are.", errCat: "agreement" },
    { s: "There ___ one judge and two lawyers in the room.", opts: ["is", "are", "have"], a: 0, tag: "Grammar · قواعد",
      whyEn: "'one judge' immediately after 'There' is singular → There is.",
      why: "الاسم المباشر بعد There مفرد (one judge) فنستخدم There is.", errCat: "agreement" },
    { s: "Which sentence is grammatically correct?", opts: ["These folders is ready.", "This folders are ready.", "These folders are ready."], a: 2, tag: "Grammar · قواعد",
      whyEn: "Plural 'These' + plural 'folders' + plural 'are'.",
      why: "نطابق اسم الإشارة للجمع These مع الاسم الجمع folders والفعل are.", errCat: "agreement" },
    { s: "There ___ many people waiting outside the courtroom.", opts: ["is", "are", "does"], a: 1, tag: "Grammar · قواعد",
      whyEn: "'people' is a plural noun → There are.",
      why: "كلمة people جمع، فنستخدم There are.", errCat: "agreement" },
    { s: "Which sentence has correct adjective grammar?", opts: ["We have two importants cases.", "We have two important cases.", "We have two importantes cases."], a: 1, tag: "Grammar · قواعد",
      whyEn: "Adjectives ('important') never take a plural -s in English.",
      why: "الصفات في الإنجليزية لا تُجمع بحرف s.", errCat: "agreement" },
    { s: "___ contract on my desk needs a signature.", opts: ["This", "These", "Those"], a: 0, tag: "Grammar · قواعد",
      whyEn: "'contract' is singular and the verb is 'needs' → This contract.",
      why: "كلمة contract مفرد والفعل بعدها للمفرد (needs)، فنختار This.", errCat: "agreement" },
    { s: "The ___ saw the accident and spoke to the judge.", opts: ["folder", "witness", "seat"], a: 1, tag: "Vocabulary · مفردات",
      whyEn: "A 'witness' is a person who sees an event and testifies in court.",
      why: "الشاهد (witness) هو من رأى الحادثة وأدلى بشهادته أمام القاضي.", errCat: "vocab" },
    { s: "Please check the document carefully so there aren't any ___.", opts: ["mistakes", "judges", "seats"], a: 0, tag: "Vocabulary · مفردات",
      whyEn: "'mistakes' means errors in the document.",
      why: "mistakes تعني أخطاء في المستند.", errCat: "vocab" },
    { s: "The lawyers ___ every morning at nine to present their cases.", opts: ["go to court", "go to the folder", "make a witness"], a: 0, tag: "Legal Track · المسار القانوني",
      whyEn: "'go to court' is the legal phrase for attending court hearings.",
      why: "العبارة القانونية الصحيحة للذهاب للتقاضي وحضور الجلسات هي go to court.", errCat: "vocab" }
  ]
};
})();
