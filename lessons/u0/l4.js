/* ===== الأسبوع التأسيسي (الوحدة 0) · الدرس 4: Four Clear Sentences — Capitals, Periods & Word Order (6 مراحل · درس استماع) ===== */
(function(){
var SENT_SVG = '<svg class="tl" viewBox="0 0 340 168" role="img" aria-label="Diagram of 4 Clear Sentences: Subject + Verb + Object + Period, and Capitalization rules (Start of sentence, pronoun I, Names/Cities/Days/Languages)" direction="ltr">' +
  '<rect x="10" y="12" width="320" height="68" rx="14" fill="#E8EEF5" stroke="#2C4A6E" stroke-width="1.8"/>' +
  '<text x="22" y="34" font-family="Quicksand, sans-serif" font-weight="700" font-size="12.5" fill="#2C4A6E">SENTENCE ORDER · ترتيب الجملة الإنجليزية وفصلها بنقطة</text>' +
  '<text x="22" y="58" font-family="Quicksand, sans-serif" font-weight="700" font-size="12" fill="#1E2A33">[Capital] Subject + Verb + Object/Place + [Period .]</text>' +
  '<rect x="10" y="90" width="320" height="68" rx="14" fill="#F9EBE7" stroke="#B94A33" stroke-width="1.8"/>' +
  '<text x="22" y="112" font-family="Quicksand, sans-serif" font-weight="700" font-size="12.5" fill="#A8432E">ALWAYS CAPITALIZE · متى نكتب الحرف الكبير دائماً؟</text>' +
  '<text x="22" y="136" font-family="Quicksand, sans-serif" font-weight="700" font-size="11.5" fill="#1E2A33">1) First word   2) Pronoun "I"   3) Riyadh · Sunday · English</text>' +
  '</svg>';

LESSONS.u0l4 = {
  id: "u0l4",
  unit: 0,
  n: 4,
  mode: "listening",
  en: "Four Clear Sentences",
  ar: "الحرف الكبير والنقطة وفصل الجمل وترتيبها",
  subEn: "Foundation 4 · Capital Letters, Periods & Sentence Word Order",
  canDoEn: "I can write 4 separate, well-ordered sentences with capital letters (including 'I') and periods without run-on sentences.",
  canDoAr: "أقدر أن أكتب 4 جمل منفصلة ومرتّبة (فاعل + فعل + مفعول) تبدأ بحرف كبير وتنتهي بنقطة مع كتابة الضمير I كبيرًا دائمًا.",
  descEn: "I can build clear Subject–Verb–Object sentences and separate them with periods and capital letters.",
  descAr: "أقدر أن أبني جملًا إنجليزية واضحة (فاعل ثم فعل) وأفصل بينها بنقطة وحرف كبير، مع مقطع استماع حقيقي لمكالمة تُترك فيها رسالة.",
  goals: [
    { en: "I can start every English sentence with a Subject + Verb (never Verb + Subject in statements).", ar: "أقدر أن أبدأ كل جملة خبرية بالفاعل ثم الفعل (وليس الفعل ثم الفاعل كما في العربية)." },
    { en: "I can capitalize the first word of a sentence, the pronoun 'I', and proper nouns (days, cities, languages).", ar: "أقدر أن أكتب الحرف الكبير في بداية كل جملة، ومع ضمير المتكلم I، وأسماء المدن والأيام واللغات." },
    { en: "I can separate ideas into 4 distinct sentences ending with periods (.) instead of one long run-on sentence.", ar: "أقدر أن أفصل أفكاري في 4 جمل مستقلة تنتهي كل منها بنقطة (.) بدل وصلها في جملة واحدة طويلة." },
    { en: "I can understand a real phone call where someone leaves a message, and write that message in 4 clear sentences.", ar: "أقدر أن أفهم مكالمة حقيقية تُترك فيها رسالة، وأكتب الرسالة في 4 جمل واضحة." }
  ],
  intro: {
    recall: {
      dEn: "Recall and type words from Lesson 3 from memory (yesterday, hearing, calm, hire a lawyer).",
      d: "استرجع واكتب كلمات الدرس الثالث من ذاكرتك لتثبيت الإملاء والقواعد.",
      items: [
        ["review", "5 active recall items from Foundation Lesson 3", "5 عناصر استرجاع نشط من الدرس التأسيسي الثالث"],
        ["pen", "Type from memory (yesterday, calm, were, hire a lawyer)", "كتابة من الذاكرة لتثبيت الحروف الصامتة وأنماط الماضي"],
        ["spark", "Reinforces Was & Were agreement", "يثبّت قاعدة was وwere"]
      ]
    },
    vocab: {
      dEn: "7 core writing & legal words plus today's legal phrase ('legal right'), with randomized matching rounds.",
      d: "7 كلمات أساسية للكتابة والقانون مع العبارة القانونية اليومية (legal right)، ولعبة توصيل عشوائية.",
      items: [
        ["cards", "8 Flashcards (7 words + 'legal right') with human audio & Oxford link", "8 بطاقات (7 كلمات + legal right) مع النطق البشري ورابط Oxford"],
        ["review", "Randomized 2-round matching game", "لعبة توصيل عشوائية من جولتين"],
        ["quiz", "8 context sentences: choose the right word", "8 جمل سياقية: اختر الكلمة المناسبة"]
      ]
    },
    grammar: {
      dEn: "In the diagnostic test, you wrote 'i' in lowercase and connected all ideas into one long sentence. Let's fix both permanently!",
      d: "في الاختبار التشخيصي كتبت الضمير i صغيرًا ووصلت الأفكار في جملة واحدة طويلة بلا نقاط؛ في هذا الدرس نعالج النقطتين جذريًا.",
      items: [
        ["book", "6 grammar cards (English first, Arabic on tap)", "6 بطاقات شرح (الإنجليزي أولًا، والعربي عند الطلب)"],
        ["quiz", "16 guided exercises (4 of each type), one per screen", "16 تمرينًا موجّهًا (4 من كل نمط)، سؤال في كل شاشة"]
      ]
    },
    reading: {
      dEn: "3-Stage Listening (real recording): Peter calls an office for Maria, and Jane takes a message with his phone number and email.",
      d: "استماع على 3 مراحل لتسجيل حقيقي: بيتر يتصل بمكتب يطلب ماريا، فتكتب جين رسالة برقم هاتفه وبريده.",
      items: [
        ["speaker", "Stage 1: Listen for the main idea without reading the transcript", "المرحلة 1: استماع أول للفكرة العامة بدون النص المكتوب"],
        ["quiz", "Stage 2: Listen again and answer 8 detail questions", "المرحلة 2: استماع ثانٍ للإجابة عن 8 أسئلة تفاصيل بالدليل"],
        ["mail", "Stage 3: Transcript on the source page & Shadowing Timer", "المرحلة 3: النص المكتوب في صفحة المصدر لمراجعة ما فات، مع الترديد (Shadowing)"]
      ]
    },
    writing: {
      dEn: "You are Jane: write Peter's message for Maria in 4 separate sentences, checking every capital letter and period.",
      d: "تخيّل أنك جين: اكتب رسالة بيتر لماريا في 4 جمل منفصلة، مع التحقق من كل حرف كبير ونقطة.",
      items: [
        ["pen", "4 separate sentences—each starting with a Capital and ending with a Period (.)", "4 جمل منفصلة تبدأ كل منها بحرف كبير وتنتهي بنقطة (.)"],
        ["spark", "Instant check: capitals (sentence starts, names, 'I'), sentence ends, key facts and 2 lesson words", "فحص فوري للحروف الكبيرة (بدايات الجمل والأسماء والضمير I) ونهايات الجمل والمعلومات الأساسية وكلمتين من الدرس"]
      ]
    },
    quiz: {
      dEn: "10 shuffled questions on Capitalization, Punctuation, Word Order, and vocabulary (80% to pass).",
      d: "اختبار قصير من 10 أسئلة في الحرف الكبير والترقيم وترتيب الجملة والمفردات (النجاح من 80%).",
      items: [
        ["quiz", "10 questions (80% passing score)", "10 أسئلة متنوعة (النجاح من 80%)"],
        ["review", "Structured Error Analysis by category", "تحليل أخطاء الدرس وأسبابها حسب الفئة"]
      ]
    }
  },

  recall: [
    {
      id: "rc-0",
      promptAr: "أمس / يوم أمس (كلمة الزمان الدالة على الماضي — تبدأ بحرف y)",
      promptEn: "The day before today (signals the Past tense)",
      sentPre: "We were at my uncle's farm",
      sentPost: "afternoon, and the weather was perfect.",
      ans: ["yesterday"],
      hint: "y _ _ _ _ _ _ _ y (9 letters)",
      spellNoteEn: "Spelled yes + ter + day (yesterday).",
      spellNote: "تتكوّن من المقاطع yes + ter + day (yesterday).",
      errCat: "spelling"
    },
    {
      id: "rc-1",
      promptAr: "هادئ (صفة من الدرس الثالث فيها حرف l صامت يُكتب ولا يُنطق)",
      promptEn: "Peaceful and quiet (4 letters, silent 'l' before 'm')",
      sentPre: "The sea was very",
      sentPost: "this morning, so we went out in a small boat.",
      ans: ["calm"],
      hint: "c _ _ m (4 letters)",
      spellNoteEn: "Remember the silent 'l' in c-a-l-m.",
      spellNote: "لا تنسَ حرف l الصامت في كتابة c-a-l-m.",
      errCat: "spelling"
    },
    {
      id: "rc-2",
      promptAr: "يوكّل محاميًا (العبارة القانونية من الدرس الثالث: ___ a lawyer)",
      promptEn: "Legal phrase from Lesson 3: ___ a lawyer (pay a lawyer to help you)",
      sentPre: "After the car accident, my cousin needed help, so he decided to",
      sentPost: "a lawyer.",
      ans: ["hire", "hire a lawyer"],
      isLegal: true,
      hint: "h _ _ e (4 letters)",
      spellNoteEn: "Collocation: 'hire a lawyer' (h-i-r-e).",
      spellNote: "المتلازمة القانونية: hire a lawyer (يوكّل محاميًا).",
      errCat: "vocab"
    },
    {
      id: "rc-3",
      promptAr: "فعل الكون في الماضي مع الضمير you في بداية السؤال",
      promptEn: "Past form of 'be' with 'you' (to start a question)",
      sentPre: "",
      sentPost: "you at home when I called yesterday?",
      ans: ["Were"],
      hint: "W _ _ e (4 letters)",
      spellNoteEn: "With 'you', always use 'were' in the past (never 'was').",
      spellNote: "الضمير you يأخذ were دائمًا في الماضي.",
      errCat: "agreement"
    },
    {
      id: "rc-4",
      promptAr: "جلسة استماع في المحكمة (اسم يبدأ بـ hear وينتهي بـ ing)",
      promptEn: "A session at a court where a judge listens to both sides (hear + ing)",
      sentPre: "The",
      sentPost: "at the court finished early, so my father was home for lunch.",
      ans: ["hearing"],
      hint: "h _ _ _ _ _ g (7 letters)",
      spellNoteEn: "Spelled hear + ing (hearing).",
      spellNote: "تتكوّن من hear + ing (hearing بمعنى جلسة استماع قضائية).",
      errCat: "spelling"
    }
  ],

  legalPhrase: {
    en: "legal right",
    headword: "right",
    pos: "legal phrase",
    ar: "حق قانوني / حق نظامي",
    say: "لِيقَل رَايْت",
    ex: "Every client has the legal right to read the contract.",
    exAr: "لكل موكّل الحق القانوني في قراءة العقد.",
    tipEn: "Spelling: 'right' has a silent 'gh' (r-i-g-h-t). Collocation: have a legal right / protect your legal rights.",
    tip: "انتبه للحرفين الصامتين gh في كلمة r-i-g-h-t، ونقول have a legal right (يملك حقًا قانونيًا).",
    legal: true,
    oxfordSlug: "right_3",
    wikiFiles: ["En-us-legal.ogg", "En-us-right.ogg"],
    wikiCredit: "File:En-us-legal.ogg & File:En-us-right.ogg · Wikimedia Commons (CC BY-SA 3.0)"
  },

  vocab: [
    { en: "sentence", pos: "noun", ar: "جملة (أو حكم قضائي في سياق المحاكم)", say: "سِنْتَنْس",
      ex: "Write four separate sentences in your email.", exAr: "اكتب أربع جمل منفصلة في بريدك الإلكتروني.",
      tipEn: "In writing: a 'sentence' starts with a capital letter and ends with a period. (In criminal law, 'sentence' also means a court punishment!)",
      tip: "في اللغة والكتابة تعني «جملة»، ولها معنى قانوني آخر في القضايا الجزائية وهو «الحكم أو العقوبة القضائية».",
      oxfordSlug: "sentence_1",
      wikiFile: "En-us-sentence.ogg",
      wikiCredit: "File:En-us-sentence.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "capital", pos: "noun", ar: "حرف كبير (Capital letter) / عاصمة", say: "كَابِتَل",
      ex: "Start every sentence with a capital letter.", exAr: "ابدأ كل جملة بحرف كبير.",
      tipEn: "'a capital letter' (A, B, C, I). Also means a capital city: Riyadh is the capital of Saudi Arabia.",
      tip: "تأتي بمعنى حرف كبير (capital letter)، وبمعنى عاصمة الدولة (Riyadh is the capital).",
      oxfordSlug: "capital_1",
      wikiFile: "En-us-capital.ogg",
      wikiCredit: "File:En-us-capital.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "period", pos: "noun", ar: "نقطة نهاية الجملة (.) / فترة زمنية", say: "بِيرْيَد",
      ex: "Put a period at the end of each sentence.", exAr: "ضع نقطة في نهاية كل جملة.",
      tipEn: "American English: 'period' (.) · British English: 'full stop' (.).",
      tip: "تُسمى نقطة نهاية الجملة (.) في الإنجليزية الأمريكية period وفي البريطانية full stop.",
      oxfordSlug: "period_1",
      wikiFile: "En-us-period.ogg",
      wikiCredit: "File:En-us-period.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "draft", pos: "noun", ar: "مسودة (نص أو عقد أولي)", say: "دْرَافْت",
      ex: "This is the first draft of the contract.", exAr: "هذه هي المسودة الأولى للعقد.",
      tipEn: "Legal & academic word: 'first draft' (initial version) vs. 'final draft'.",
      tip: "كلمة مهمة في الدراسة والمحاماة: first draft تعني المسودة الأولى للعقد أو الإيميل قبل المراجعة النهائية.",
      oxfordSlug: "draft_1",
      wikiFile: "En-us-draft.ogg",
      wikiCredit: "File:En-us-draft.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "polite", pos: "adjective", ar: "مهذّب / لبق", say: "بُلَايْت",
      ex: "Your work email is clear and polite.", exAr: "بريدك المهني واضح ومهذّب.",
      tipEn: "Adjective (needs am/is/are/was/were): silent '-e' at the end (p-o-l-i-t-e).",
      tip: "صفة تعني مهذّبًا أو رسميًا بلباقة، وتنتهي بحرف e صامت.",
      oxfordSlug: "polite",
      wikiFile: "En-us-polite.ogg",
      wikiCredit: "File:En-us-polite.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "short", pos: "adjective", ar: "قصير / موجز", say: "شُورْت",
      ex: "Keep your sentences short and clear.", exAr: "اجعل جملك قصيرة وواضحة.",
      tipEn: "Opposite: long. Short sentences are easier to read and have fewer grammar mistakes.",
      tip: "عكسها long؛ الجمل القصيرة والمباشرة أوضح في الكتابة القانونية والأكاديمية وأقل عرضة للأخطاء.",
      oxfordSlug: "short_1",
      wikiFile: "En-us-short.ogg",
      wikiCredit: "File:En-us-short.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "explain", pos: "verb", ar: "يشرح / يوضّح", say: "إِكْسْبْلَيْن",
      ex: "Lawyers explain the rules to their clients.", exAr: "يشرح المحامون الأنظمة لموكّليهم.",
      tipEn: "Action verb: say 'explain something TO someone' (explain the rule to the client).",
      tip: "فعل حدث؛ نقول explain the contract to the client (نضع حرف الجر to قبل الشخص).",
      oxfordSlug: "explain",
      wikiFile: "En-us-explain.ogg",
      wikiCredit: "File:En-us-explain.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" }
  ],

  vocabGaps: [
    { s: "My teacher circled the end of my sentence because the ___ was missing.", opts: ["period", "capital", "draft"], a: 0,
      whyEn: "A 'period' (.) is the mark at the end of a sentence.",
      why: "النقطة (period) هي العلامة التي تنتهي بها الجملة.", errCat: "vocab" },
    { s: "Names of cities like Riyadh and Jeddah start with a ___ letter.", opts: ["short", "capital", "polite"], a: 1,
      whyEn: "Proper nouns always begin with a 'capital letter'.",
      why: "أسماء المدن والأعلام تبدأ دائمًا بحرف كبير (capital letter).", errCat: "spelling" },
    { s: "Mr. Salman checked the first ___ of my email before I sent it.", opts: ["draft", "period", "capital"], a: 0,
      whyEn: "A 'first draft' is the initial version of a text that you review and edit.",
      why: "first draft تعني المسودة الأولى للنص قبل اعتماده وإرساله.", errCat: "vocab" },
    { s: "Don't write one long line; break it into four ___ sentences.", opts: ["late", "short", "absent"], a: 1,
      whyEn: "'short sentences' are easy to read, the opposite of one long line.",
      why: "short sentences جمل قصيرة سهلة القراءة، عكس السطر الطويل.", errCat: "vocab" },
    { s: "Can you ___ this question to me? I don't understand it.", opts: ["explain", "prepare", "arrive"], a: 0,
      whyEn: "'explain something to someone' means make it clear and easy to understand.",
      why: "explain something to someone تعني يشرح الشيء ويوضّحه لشخص.", errCat: "vocab" },
    { s: "Every ___ in English needs a subject and a verb.", opts: ["sentence", "traffic", "capital"], a: 0,
      whyEn: "A 'sentence' is a complete grammatical unit with a subject and a verb.",
      why: "كل جملة (sentence) في الإنجليزية تحتاج إلى فاعل وفعل.", errCat: "word_order" },
    { s: "My grandmother always says 'please' and 'thank you'; she is very ___.", opts: ["late", "polite", "absent"], a: 1,
      whyEn: "'polite' describes someone with good manners who speaks kindly.",
      why: "polite تصف الشخص المهذّب الذي يتكلم بلطف.", errCat: "vocab" },
    { s: "My sister is a nurse; she has a ___ to a day off every week.", opts: ["legal right", "first draft", "capital letter"], a: 0,
      whyEn: "A 'legal right' is something the law allows or protects, like a weekly day off.",
      why: "legal right حق يحميه القانون، كالحق في يوم إجازة أسبوعي.", errCat: "vocab" }
  ],

  gCards: [
    {
      tEn: "Rule 1: Start with the Subject, Not the Verb",
      t: "القاعدة الأولى: ابدأ الجملة بالفاعل ثم الفعل",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Rule 1: Subject + Verb + Object</span><small>ابدأ الجملة الخبرية بالفاعل</small></h2>' +
        '<p class="en-p" dir="ltr">In Arabic, we often start with the verb («يعمل فيصل في مكتب» / «وصل الموكّل»). In English statements, the <b>Subject MUST come first</b>, followed immediately by the <b>Verb</b>:</p>' +
        '<div class="xbox"><span class="xtag s" dir="ltr">Correct English Order · الترتيب الصحيح</span><p class="xen">Faisal works in an office. · The client arrived early.</p></div>' +
        '<div class="xbox"><span class="xtag c" dir="ltr">Arabic Verb-First Order · خطأ ترجمة الجملة الفعلية</span><p class="xen"><span class="no">Works Faisal in an office.</span><span class="no">Arrived the client early.</span></p></div>' +
        SENT_SVG,
      arHtml:
        '<p>في العربية لدينا جملة فعلية تبدأ بالفعل («ذهب المحامي»، «تدرس أختي»)، أما في الإنجليزية فلا توجد جملة خبرية تبدأ بالفعل أبدًا؛ يجب أن تضع <b>الفاعل أولًا (من فعل؟)</b> ثم <b>الفعل ثانيًا (ماذا فعل؟)</b>.</p>'
    },
    {
      tEn: "Rule 2: No Double Subject (Don't Repeat the Pronoun!)",
      t: "القاعدة الثانية: لا تكرر الضمير بعد الفاعل",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Rule 2: One Subject Only</span><small>لا تضع ضميرًا بعد الاسم الظاهر</small></h2>' +
        '<p class="en-p" dir="ltr">When you name the subject (<b>My brother, The lawyer, The folders</b>), go straight to the verb—do NOT add <b>he, she, it, they</b> right after the noun:</p>' +
        '<div class="xbox"><div class="pairs">' +
          '<span class="yes">My brother works in a bank.</span>' +
          '<span class="no">My brother he works in a bank.</span>' +
          '<span class="yes">The senior lawyers are very helpful.</span>' +
          '<span class="no">The senior lawyers they are very helpful.</span>' +
        '</div></div>',
      arHtml:
        '<p>من أخطاء الترجمة الحرفية من الجملة الاسمية العربية («أخي هو يعمل في بنك»، «المحامون هم متعاونون») وضع ضمير (<bdi class="en">he / they</bdi>) بعد الفاعل الظاهر. في الإنجليزية نذكر الفاعل مرة واحدة ثم نضع الفعل مباشرة.</p>'
    },
    {
      tEn: "Rule 3: The 6 Capital Letter Rules",
      t: "القاعدة الثالثة: متى نكتب الحرف الكبير (Capital Letter)؟",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Rule 3: When to Use a Capital Letter</span><small>المواضع الستة للحرف الكبير</small></h2>' +
        '<ul class="spell" dir="ltr">' +
          '<li>1. The <b>first word</b> of every sentence (and after every period <b>.</b>):<span class="s-en"><b>T</b>he office is open. <b>I</b>t closes at five.</span></li>' +
          '<li>2. The pronoun <b>I</b> (ALWAYS capital, even in the middle of a sentence!):<span class="s-en">Yesterday, <b>I</b> was busy, so <b>I</b> stayed at the office.</span></li>' +
          '<li>3. Names of people & titles:<span class="s-en"><b>F</b>aisal · <b>M</b>r. <b>S</b>alman · <b>N</b>oor</span></li>' +
          '<li>4. Cities & countries:<span class="s-en"><b>R</b>iyadh · <b>J</b>eddah · <b>S</b>audi <b>A</b>rabia · <b>J</b>apan</span></li>' +
          '<li>5. Days of the week & months (NOT seasons):<span class="s-en"><b>S</b>unday · <b>T</b>uesday · <b>F</b>riday · <b>O</b>ctober</span></li>' +
          '<li>6. Languages & nationalities:<span class="s-en"><b>A</b>rabic · <b>E</b>nglish · <b>S</b>audi</span></li>' +
        '</ul>',
      arHtml:
        '<p>تفقّد هذه المواضع الستة قبل إنهاء أي كتابة: ١) أول حرف في الجملة وبعد كل نقطة، ٢) ضمير المتكلم <b>I</b> كبير دائمًا في أول الجملة أو وسطها، ٣) أسماء الأشخاص، ٤) المدن والدول، ٥) أيام الأسبوع والشهور، ٦) اللغات والجنسيات (<bdi class="en">English, Arabic, Saudi</bdi>).</p>'
    },
    {
      tEn: "Rule 4: Stop Run-On Sentences with a Period (.)",
      t: "القاعدة الرابعة: افصل الجمل بنقطة (.) ولا تصلها بلا توقف",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Rule 4: Four Separate Sentences, Not One Long Line</span><small>افصل كل فكرة تامة بنقطة (.) وحرف كبير</small></h2>' +
        '<p class="en-p" dir="ltr">In Arabic, we can connect 4 or 5 clauses with «و» and commas. In English, connecting complete sentences with only commas or endless \"and\"s is a <b>run-on error</b>. End each complete thought with a <b>period (.)</b>:</p>' +
        '<div class="xbox"><span class="xtag c" dir="ltr">✗ Run-On Sentence (Diagnostic Error)</span><p class="xen"><span class="no">i am a law student in riyadh and i go to the office every morning, the lawyers are helpful and i prepare the files.</span></p></div>' +
        '<div class="xbox"><span class="xtag s" dir="ltr">✓ 4 Clear Separate Sentences</span><p class="xen"><span class="yes"><b>I</b> am a law student in <b>R</b>iyadh<b>.</b> <b>I</b> go to the office every morning<b>.</b> <b>T</b>he lawyers are very helpful<b>.</b> <b>I</b> prepare the client files<b>.</b></span></p></div>',
      arHtml:
        '<p>في العربية نربط الجمل المتتابعة بحرف الواو والفاصلة في فقرة واحدة طويلة. أما في الإنجليزية، فمتى اكتملت الفكرة (فاعل + فعل + تكملة)، ضع <b>نقطة (.)</b>، ثم ابدأ الجملة الجديدة <b>بحرف كبير</b>.</p>'
    },
    {
      tEn: "Common Arab Mistakes",
      t: "أخطاء العرب الشائعة",
      bilingual: true,
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Common Arab Mistakes</span><small>أخطاء يقع فيها كثير من العرب (من التشخيص)</small></h2>' +
        '<ul class="mist">' +
          '<li><span class="no">Yesterday i was in court and i met the judge.</span><span class="yes">Yesterday, I was in court, and I met the judge.</span><p class="en-m" dir="ltr">Never write the pronoun <b>I</b> as lowercase <b>i</b>.</p><p>ضمير المتكلم <bdi class="en">I</bdi> لا يُكتب بحرف صغير <bdi class="en">i</bdi> أبدًا في الإنجليزية.</p></li>' +
          '<li><span class="no">Explained the lawyer the legal right.</span><span class="yes">The lawyer explained the legal right.</span><p class="en-m" dir="ltr">Put the subject (<b>The lawyer</b>) before the verb (<b>explained</b>).</p><p>ابدأ بالفاعل (<bdi class="en">The lawyer</bdi>) قبل الفعل (<bdi class="en">explained</bdi>).</p></li>' +
          '<li><span class="no">I study english in riyadh on sunday.</span><span class="yes">I study English in Riyadh on Sunday.</span><p class="en-m" dir="ltr">Capitalize languages (<b>English</b>), cities (<b>Riyadh</b>), and days (<b>Sunday</b>).</p><p>أسماء اللغات والمدن وأيام الأسبوع تبدأ دائمًا بحرف كبير.</p></li>' +
          '<li><span class="no">The office is busy, I have two cases, the judge is waiting.</span><span class="yes">The office is busy. I have two cases. The judge is waiting.</span><p class="en-m" dir="ltr">Do not join separate sentences with commas alone (comma splice)—use a period (<b>.</b>).</p><p>لا تفصل بين الجمل المستقلة بفاصلة فقط، بل ضع نقطة (<b>.</b>) في نهاية كل جملة.</p></li>' +
        '</ul>'
    },
    {
      tEn: "Summary",
      t: "الخلاصة",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Quick Summary</span><small>الخلاصة</small></h2>' +
        '<div class="sumc" dir="ltr"><h3>In Two Lines · في سطرين</h3>' +
          '<p><b>Word Order · ترتيب الجملة</b><span>Subject first + Verb second (never Verb + Subject, and no double subject)</span></p>' +
          '<p><b>Capitals & Periods · الحرف الكبير والنقطة</b><span>Capitalize 1st word, "I", Names/Cities/Days/Languages, and end each sentence with (.)</span></p>' +
        '</div>' +
        '<p class="en-p" dir="ltr">Now let\'s practice: 16 guided exercises on Capitals, Periods & Word Order.</p>',
      arHtml:
        '<p><b>الترتيب:</b> الفاعل أولًا ثم الفعل، دون تكرار الضمير بعد الفاعل.</p>' +
        '<p><b>الترقيم والحرف الكبير:</b> ابدأ كل جملة بحرف كبير، واكتب <b>I</b> والمدن والأيام واللغات بحرف كبير، وانهِ كل جملة بنقطة (<b>.</b>).</p>'
    }
  ],

  gA: [
    { s: "Choose the sentence with correct word order:", opts: ["Plays my brother football every Friday.", "My brother plays football every Friday."], a: 1,
      whyEn: "English statements begin with the Subject ('My brother') before the verb ('plays').",
      why: "الجملة الخبرية الإنجليزية تبدأ بالفاعل (My brother) قبل الفعل (plays).", errCat: "word_order" },
    { s: "Choose the sentence without a double-subject mistake:", opts: ["My father drives us to school every day.", "My father he drives us to school every day."], a: 0,
      whyEn: "Do not repeat 'he' after the subject 'My father'.",
      why: "لا نكرر الضمير he بعد ذكر الفاعل الظاهر My father.", errCat: "word_order" },
    { s: "Choose the sentence with correct capitalization of days and languages:", opts: ["We study English on Tuesday.", "We study english on tuesday."], a: 0,
      whyEn: "Languages ('English') and days of the week ('Tuesday') always start with a capital letter.",
      why: "أسماء اللغات (English) وأيام الأسبوع (Tuesday) تبدأ بحرف كبير دائمًا.", errCat: "spelling" },
    { s: "How should you punctuate these two complete thoughts?", opts: ["My phone is old, it is very slow.", "My phone is old. It is very slow."], a: 1,
      whyEn: "Two separate complete sentences need a period (.) and a capital letter ('It').",
      why: "جملتان تامتان ومستقلتان؛ نفصل بينهما بنقطة (.) ونبدأ الثانية بحرف كبير (It).", errCat: "word_order" }
  ],

  gB: [
    { s: "Lives my grandmother in a small village near Taif.", ok: false, fix: "My grandmother lives in a small village near Taif.",
      whyEn: "Put the subject ('My grandmother') before the verb ('lives').",
      why: "لا نبدأ الجملة الخبرية بالفعل Lives، بل بالفاعل My grandmother.", errCat: "word_order" },
    { s: "The exam was easy, and i finished early.", ok: false, fix: "The exam was easy, and I finished early.",
      whyEn: "Always capitalize the pronoun 'I'.",
      why: "يجب كتابة الضمير I بحرف كبير.", errCat: "spelling" },
    { s: "This draft is short. The sentences are clear.", ok: true,
      whyEn: "Two clean separate sentences, each starting with a capital letter and ending with a period.",
      why: "جملتان منفصلتان بوضوح، تبدأ كل منهما بحرف كبير وتنتهي بنقطة.", errCat: "word_order" },
    { s: "My cousin khalid studies at a university in jeddah.", ok: false, fix: "My cousin Khalid studies at a university in Jeddah.",
      whyEn: "Capitalize people's names ('Khalid') and city names ('Jeddah').",
      why: "اسم العلم (Khalid) واسم المدينة (Jeddah) يجب أن يبدآ بحرف كبير.", errCat: "spelling" }
  ],

  gC: [
    { pre: "On Fridays,", verb: "capitalize: i", post: "visit my grandparents with my parents.", ans: ["I"], exact: true,
      whyEn: "The pronoun 'I' is always a capital letter.",
      why: "ضمير المتكلم يُكتب كبيرًا دائمًا: I.", errCat: "spelling" },
    { pre: "My uncle has a small shop in", verb: "capitalize: riyadh", post: "near the old market.", ans: ["Riyadh"], exact: true,
      whyEn: "City names start with a capital letter: Riyadh.",
      why: "أسماء المدن تبدأ بحرف كبير: Riyadh.", errCat: "spelling" },
    { pre: "Our football match is on", verb: "capitalize: monday", post: "at eight o'clock in the evening.", ans: ["Monday"], exact: true,
      whyEn: "Days of the week start with a capital letter: Monday.",
      why: "أيام الأسبوع تبدأ بحرف كبير: Monday.", errCat: "spelling" },
    { pre: "My brothers are at the gym.", verb: "capitalize: they", post: "go there every evening.", ans: ["They"], exact: true,
      whyEn: "After a period (.), the first word of the new sentence must be capitalized: They.",
      why: "أول كلمة في الجملة الجديدة بعد النقطة تبدأ بحرف كبير: They.", errCat: "spelling" }
  ],

  gD: [
    { chips: ["has", "a legal right", "Every customer", "to a receipt."], ans: "Every customer has a legal right to a receipt.",
      whyEn: "Subject (Every customer) + verb (has) + object (a legal right) + to a receipt.",
      why: "الفاعل Every customer ثم الفعل has ثم المفعول به a legal right ثم to a receipt.", errCat: "word_order" },
    { chips: ["explains", "the rules", "Our coach", "clearly."], ans: "Our coach explains the rules clearly.",
      whyEn: "Subject (Our coach) + verb (explains) + object (the rules) + adverb (clearly) at the end.",
      why: "الفاعل Our coach ثم الفعل explains ثم المفعول به the rules ثم الحال clearly في آخر الجملة.", errCat: "word_order" },
    { chips: ["writes", "short", "My sister", "emails."], ans: "My sister writes short emails.",
      whyEn: "Subject (My sister) + verb (writes) + adjective + noun (short emails).",
      why: "الفاعل My sister ثم الفعل writes ثم الصفة والموصوف short emails.", errCat: "word_order" },
    { chips: ["on", "We", "Sunday.", "start work"], ans: "We start work on Sunday.",
      whyEn: "Subject (We) + verb + object (start work) + time (on Sunday, capitalized).",
      why: "الفاعل We ثم الفعل start work ثم الزمان on Sunday بحرف كبير.", errCat: "word_order" }
  ],

  /* ---------- المرحلة 4: الاستماع على ثلاث مراحل (مقطع حقيقي من LearnEnglish، ونصه المكتوب في صفحة المصدر) ---------- */
  listening: {
    title: "Leaving a message",
    sourceTag: "LearnEnglish · Real recording · تسجيل حقيقي",
    sourceMeta: "LearnEnglish (British Council) · Listening A2",
    speakers: "Jane & Peter (a phone call)",
    url: "https://learnenglish.britishcouncil.org/free-resources/listening/a2/leaving-message",
    audioWord: "sentence",
    targetSeconds: 90,
    introEn: "Listen to a phone call to an office. Peter wants to speak to Maria, but she isn't there, so Jane takes a message for her.",
    intro: "استمع إلى مكالمة هاتفية لمكتب: بيتر يريد أن يكلّم ماريا، لكنها ليست موجودة، فتكتب جين رسالة لها.",
    predict: {
      qEn: "Stage 1 Main-Idea Question: Why does Jane take a message?",
      q: "سؤال الفكرة العامة: لماذا تكتب جين رسالة؟",
      optsEn: [
        "Because Peter wants to buy a new phone from Jane",
        "Because Jane is late for a meeting with Peter",
        "Because Maria isn't in the office, and Peter wants her to call him back"
      ],
      opts: [
        "لأن بيتر يريد أن يشتري هاتفًا جديدًا من جين",
        "لأن جين متأخرة عن اجتماع مع بيتر",
        "لأن ماريا ليست في المكتب، وبيتر يريدها أن تعاود الاتصال به"
      ],
      a: 2,
      revealEn: "Maria is on her lunch break, so Jane writes down Peter's message, his phone number and his email address.",
      reveal: "ماريا في استراحة الغداء، فتكتب جين رسالة بيتر ورقم هاتفه وبريده الإلكتروني."
    },
    insight: {
      titleEn: "Capital Letters in a Phone Message",
      titleAr: "الحروف الكبيرة في رسالة هاتفية",
      l1En: "Names of people and projects start with a capital letter, even in the middle of a sentence:",
      ex1: "Maria Fernandez · Peter Griffin · the PXO project",
      l2En: "A clear message is a few short sentences. Each one starts with a capital letter and ends with a period:",
      ex2: "Peter called. He needs the figures. Please call him back.",
      arHtml: "<p><b>انتبه:</b> أسماء الأشخاص والمشاريع تبدأ بحرف كبير أينما وقعت في الجملة.</p><p>والرسالة الواضحة جمل قصيرة، تبدأ كل منها بحرف كبير وتنتهي بنقطة، ولا توصل كلها في جملة واحدة.</p>"
    },
    questions: [
      { q: "Which department does Jane work in?", opts: ["The legal department", "The sales department", "The IT department"], a: 1,
        whyEn: "At the start, Jane answers the phone with her name and says she is from the sales department.",
        why: "في أول المكالمة تذكر جين اسمها وأنها من قسم المبيعات.", errCat: "reading" },
      { q: "Who does Peter want to speak to?", opts: ["Jane Solomon", "Mr. Griffin", "Maria Fernandez"], a: 2,
        whyEn: "Peter asks for Maria Fernandez. Mr. Griffin is Peter himself, and Jane Solomon is the person who answers the phone.",
        why: "بيتر يطلب ماريا فرنانديز؛ أما Mr. Griffin فهو بيتر نفسه، وجين سولومون هي التي ردّت على الهاتف.", errCat: "reading" },
      { q: "Where is Maria?", opts: ["On her lunch break", "In a meeting with a client", "On holiday"], a: 0,
        whyEn: "Jane says Maria is out of the office on her lunch break.",
        why: "جين تقول إن ماريا خارج المكتب في استراحة الغداء.", errCat: "reading" },
      { q: "What is Peter's call about?", opts: ["A new phone contract", "A court case", "The PXO project"], a: 2,
        whyEn: "Peter is calling about the PXO project.",
        why: "مكالمة بيتر عن مشروع PXO.", errCat: "reading" },
      { q: "What does Peter need?", opts: ["A new email address", "The new figures for the project", "A room for a meeting"], a: 1,
        whyEn: "He needs the new project figures, so he wants Maria to call him back.",
        why: "يحتاج الأرقام الجديدة للمشروع، فيريد أن تعاود ماريا الاتصال به.", errCat: "reading" },
      { tf: true, q: "Jane writes down Peter's phone number correctly the first time.", a: false,
        whyEn: "False. When Jane reads the number back, Peter corrects some of the numbers.",
        why: "خطأ؛ حين تعيد جين قراءة الرقم يصحّح بيتر بعض أرقامه.", errCat: "reading" },
      { q: "Why does Peter also give his email address?", opts: ["He may be in a meeting when Maria calls back", "His phone is broken", "Jane needs it for a contract"], a: 0,
        whyEn: "He gives his email address too, because he may be in a meeting when Maria calls back.",
        why: "أعطى بريده أيضًا لأنه قد يكون في اجتماع حين تعاود ماريا الاتصال.", errCat: "reading" },
      { q: "Jane writes a note for Maria. Which sentence has correct capital letters?", opts: ["peter griffin called about the PXO project.", "Peter griffin called about the pxo project.", "Peter Griffin called about the PXO project."], a: 2,
        whyEn: "A sentence starts with a capital letter, and names (Peter Griffin) and the project name (PXO) always have capitals.",
        why: "الجملة تبدأ بحرف كبير، وأسماء الأشخاص (Peter Griffin) واسم المشروع (PXO) تُكتب بحروف كبيرة دائمًا.", errCat: "spelling" }
    ]
  },

  writing: {
    taskEn: "You are Jane. Write a message for Maria in at least 4 separate sentences: who called, what the call was about, what he needs, and what Maria should do. Use capital letters for names and for 'I', end every sentence with a period, and use at least 2 words from today's lesson (for example: short, polite).",
    task: "تخيّل أنك جين: اكتب رسالة لماريا في 4 جمل منفصلة على الأقل: من اتصل، وعن أي شيء، وماذا يحتاج، وماذا تفعل ماريا. اكتب الأسماء والضمير I بحرف كبير، وأنهِ كل جملة بنقطة، واستعمل كلمتين على الأقل من كلمات الدرس (مثل short وpolite).",
    checks: [
      { k: "sentences", tEn: "At least 4 separate sentences (4 periods ., no run-on)", t: "4 جمل منفصلة على الأقل (تنتهي كل جملة بنقطة . ولا توصل معًا)",
        ok: function(a, text){ return a.sentences >= 4 && !a.runOn && /[.!?]["')\]]?\s*$/.test(String(text || '')); } },
      { k: "starts", tEn: "Every sentence starts with a capital letter, and 'I' and names (Maria, Peter Griffin) always have capitals", t: "كل جملة تبدأ بحرف كبير، والضمير I والأسماء (Maria وPeter Griffin) بحرف كبير دائمًا", ex: "Peter Griffin called. He needs the figures.",
        ok: function(a, text){
          var s = String(text || '').replace(/\S+@\S+/g, ' ').replace(/\b(?:[ap]\.m\.|Mrs?\.|Ms\.|Dr\.)/gi, function(m){ return m.replace(/\./g, ''); });
          if (/\bi\b/.test(s)) return false;
          if (/\b(?:maria|peter|griffin|fernandez|jane|solomon)\b/.test(s)) return false;
          if (!/\b(?:Maria|Peter|Griffin|Fernandez|Jane|Solomon)\b/.test(s)) return false;
          var parts = s.split(/[.!?]+/).map(function(p){ return p.trim(); }).filter(function(p){ return /[A-Za-z]/.test(p); });
          return parts.length > 0 && parts.every(function(p){ var m = p.match(/[A-Za-z]/); return m[0] === m[0].toUpperCase(); }); } },
      { k: "content", tEn: "The key facts: the PXO project and 'call him back'", t: "المعلومات الأساسية: مشروع PXO وطلب معاودة الاتصال (call him back)", ex: "the PXO project · Please call him back.",
        ok: function(a, text){ var s = String(text || ''); return /\bPXO\b/.test(s) && /\b(?:call|phone|ring)\s+(?:him|Peter(?:\s+Griffin)?|Mr\.?\s*Griffin)\s+back\b/i.test(s); } },
      { k: "vocab", tEn: "At least 2 words from today's lesson", t: "كلمتان على الأقل من كلمات الدرس", ex: "short · polite · explain · sentence · draft",
        ok: function(a){ return a.used.length >= 2; } }
    ],
    model: "Maria, Peter Griffin called during your lunch break. His message was short and polite. It was about the PXO project, and he needs the new figures. Please call him back. He may be in a meeting when you call, so I also wrote down his email address."
  },

  quiz: [
    { s: "Choose the sentence with correct English word order:", opts: ["Explains the judge the law.", "The judge explains the law.", "The judge he explains the law."], a: 1, tag: "Grammar · قواعد",
      whyEn: "Subject ('The judge') + verb ('explains') + object ('the law'), with no extra pronoun.",
      why: "نبدأ بالفاعل The judge ثم الفعل explains دون تكرار الضمير he.", errCat: "word_order" },
    { s: "Which sentence has 100% correct capitalization?", opts: ["On monday, i have a hearing in riyadh.", "On Monday, I have a hearing in Riyadh.", "On Monday, i have a hearing in Riyadh."], a: 1, tag: "Grammar · قواعد",
      whyEn: "Capitalize the day ('Monday'), the pronoun ('I'), and the city ('Riyadh').",
      why: "يوم الأسبوع (Monday) والضمير (I) والمدينة (Riyadh) كلها تُكتب بحرف كبير.", errCat: "spelling" },
    { s: "What is wrong with this text? 'The draft is ready, the lawyer is in court.'", opts: ["It joins two complete sentences with a comma instead of a period (.).", "It is too short.", "The word 'draft' is a verb."], a: 0, tag: "Grammar · قواعد",
      whyEn: "Two complete sentences must be separated by a period (.): 'The draft is ready. The lawyer is in court.'",
      why: "ربط جملتين تامتين بفاصلة فقط خطأ (Run-on)؛ الصواب وضع نقطة بعد الجملة الأولى.", errCat: "word_order" },
    { s: "Which of these words do we write with a capital letter everywhere in a sentence?", opts: ["teacher", "I (the pronoun for myself)", "morning"], a: 1, tag: "Grammar · قواعد",
      whyEn: "The pronoun 'I' is always a capital letter in English.",
      why: "ضمير المتكلم I يُكتب بحرف كبير دائمًا أينما وقع في الجملة.", errCat: "spelling" },
    { s: "Choose the sentence without a double-subject error:", opts: ["My parents they are in Makkah this week.", "My parents are in Makkah this week.", "Are in Makkah my parents this week."], a: 1, tag: "Grammar · قواعد",
      whyEn: "Subject ('My parents') + verb ('are') directly, with no extra 'they'.",
      why: "الفاعل My parents يليه الفعل are مباشرة دون الضمير الزائد they.", errCat: "word_order" },
    { s: "Which option is capitalized correctly?", opts: ["arabic and english", "Arabic and English", "Arabic and english"], a: 1, tag: "Grammar · قواعد",
      whyEn: "All language names ('Arabic', 'English') begin with a capital letter.",
      why: "أسماء جميع اللغات تبدأ بحرف كبير في الإنجليزية.", errCat: "spelling" },
    { s: "A question ends with a question mark, but a statement ends with a ___.", opts: ["period", "capital", "draft"], a: 0, tag: "Vocabulary · مفردات",
      whyEn: "A 'period' (.) ends a statement; a question mark (?) ends a question.",
      why: "النقطة (period) تنهي الجملة الخبرية، وعلامة الاستفهام تنهي السؤال.", errCat: "vocab" },
    { s: "My sister is writing the first ___ of her speech for the graduation party.", opts: ["period", "draft", "capital"], a: 1, tag: "Vocabulary · مفردات",
      whyEn: "A 'first draft' is the first version of a text, before you correct it.",
      why: "first draft هي المسودة الأولى للنص قبل تصحيحه.", errCat: "vocab" },
    { s: "Please write ___ sentences in your message to the hotel, so they can read it quickly.", opts: ["short and clear", "long and difficult", "late and absent"], a: 0, tag: "Vocabulary · مفردات",
      whyEn: "'short and clear' sentences are quick and easy to read.",
      why: "الجمل القصيرة الواضحة (short and clear) سريعة وسهلة القراءة.", errCat: "vocab" },
    { s: "In many countries, every child has a ___ to go to school.", opts: ["legal right", "first draft", "capital letter"], a: 0, tag: "Legal Track · المسار القانوني",
      whyEn: "A 'legal right' is something the law gives every person, like going to school.",
      why: "legal right حق يكفله القانون لكل شخص، كالحق في التعليم.", errCat: "vocab" }
  ]
};
})();
