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
  descAr: "أقدر أن أبني جملًا إنجليزية واضحة (فاعل ثم فعل) وأفصل بينها بنقطة وحرف كبير، مع مقطع استماع عن مراجعة مسودة بريد قانوني.",
  goals: [
    { en: "I can start every English sentence with a Subject + Verb (never Verb + Subject in statements).", ar: "أقدر أن أبدأ كل جملة خبرية بالفاعل ثم الفعل (وليس الفعل ثم الفاعل كما في العربية)." },
    { en: "I can capitalize the first word of a sentence, the pronoun 'I', and proper nouns (days, cities, languages).", ar: "أقدر أن أكتب الحرف الكبير في بداية كل جملة، ومع ضمير المتكلم I، وأسماء المدن والأيام واللغات." },
    { en: "I can separate ideas into 4 distinct sentences ending with periods (.) instead of one long run-on sentence.", ar: "أقدر أن أفصل أفكاري في 4 جمل مستقلة تنتهي كل منها بنقطة (.) بدل وصلها في جملة واحدة طويلة." },
    { en: "I can understand a 3-stage listening clip on editing a legal email and use 'legal right' in writing.", ar: "أقدر أن أفهم مقطع استماع من 3 مراحل عن تحرير إيميل قانوني وأستخدم العبارة القانونية legal right." }
  ],
  intro: {
    recall: {
      dEn: "Recall and type words from Lessons 1–3 from memory (yesterday, hearing, calm, hire a lawyer).",
      d: "استرجع واكتب كلمات الدروس الثلاثة السابقة من ذاكرتك لتثبيت الإملاء والقواعد.",
      items: [
        ["review", "5 active recall items from Foundation Lessons 1–3", "5 عناصر استرجاع نشط من الدروس التأسيسية 1–3"],
        ["pen", "Type from memory (yesterday, calm, absent, hire a lawyer)", "كتابة من الذاكرة لتثبيت الحروف الصامتة وأنماط الماضي"],
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
        ["quiz", "24 guided exercises across 4 types, one per screen", "24 تمرينًا موجّهًا على 4 أنماط، سؤال في كل شاشة"]
      ]
    },
    reading: {
      dEn: "3-Stage Listening: Mr. Salman reviews Faisal's first email draft and shows him how to split a long run-on text into 4 clear sentences.",
      d: "استماع على 3 مراحل: الأستاذ سلمان يراجع مسودة إيميل كتبها فيصل ويعلّمه كيف يقسّم الجملة الطويلة إلى 4 جمل واضحة.",
      items: [
        ["speaker", "Stage 1: Listen for the main idea without reading the transcript", "المرحلة 1: استماع أول للفكرة العامة بدون النص المكتوب"],
        ["quiz", "Stage 2: Listen again and answer 8 detail questions", "المرحلة 2: استماع ثانٍ للإجابة عن 8 أسئلة تفاصيل بالدليل"],
        ["mail", "Stage 3: Interactive transcript with word meanings & Shadowing Timer", "المرحلة 3: قراءة النص التفاعلي مع الترديد (Shadowing)"]
      ]
    },
    writing: {
      dEn: "Write 4 separate, clean sentences about a client or student and their legal right, checking every capital letter and period.",
      d: "اكتب 4 جمل منفصلة ونظيفة عن طالب أو موكّل وحقه القانوني، مع التحقق من كل حرف كبير ونقطة.",
      items: [
        ["pen", "4 separate sentences—each starting with a Capital and ending with a Period (.)", "4 جمل منفصلة تبدأ كل منها بحرف كبير وتنتهي بنقطة (.)"],
        ["spark", "Instant check for capital 'I', sentence boundaries, and Subject–Verb order", "فحص فوري للحرف الكبير للضمير I وفصل الجمل وترتيب الفاعل والفعل"]
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
      sentPre: "We were in Courtroom 4",
      sentPost: "morning.",
      ans: ["yesterday"],
      hint: "y e s t e r d _ y (9 letters)",
      spellNoteEn: "Spelled yes + ter + day (yesterday).",
      spellNote: "تتكوّن من المقاطع yes + ter + day (yesterday).",
      errCat: "spelling"
    },
    {
      id: "rc-1",
      promptAr: "هادئ (صفة من الدرس الثالث فيها حرف l صامت يُكتب ولا يُنطق)",
      promptEn: "Peaceful and not nervous (4 letters, silent 'l' before 'm')",
      sentPre: "The judge was very",
      sentPost: "during the hearing.",
      ans: ["calm"],
      hint: "c a _ m (4 letters)",
      spellNoteEn: "Remember the silent 'l' in c-a-l-m.",
      spellNote: "لا تنسَ حرف l الصامت في كتابة c-a-l-m.",
      errCat: "spelling"
    },
    {
      id: "rc-2",
      promptAr: "يوكّل محاميًا (العبارة القانونية من الدرس الثالث: ___ a lawyer)",
      promptEn: "Legal phrase: To pay a lawyer to represent you (___ a lawyer)",
      sentPre: "The company decided to",
      sentPost: "a lawyer last week.",
      ans: ["hire", "hire a lawyer"],
      hint: "h i r e (4 letters)",
      spellNoteEn: "Collocation: 'hire a lawyer' (h-i-r-e).",
      spellNote: "المتلازمة القانونية: hire a lawyer (يوكّل محاميًا).",
      errCat: "vocab"
    },
    {
      id: "rc-3",
      promptAr: "فعل الكون في الماضي مع الضمير you: Where ___ you yesterday?",
      promptEn: "Past form of 'be' with the subject 'you'",
      sentPre: "Where",
      sentPost: "you yesterday afternoon?",
      ans: ["were"],
      hint: "w e r e (4 letters)",
      spellNoteEn: "With 'you', always use 'were' in the past (never 'was').",
      spellNote: "الضمير you يأخذ were دائمًا في الماضي.",
      errCat: "agreement"
    },
    {
      id: "rc-4",
      promptAr: "جلسة استماع في المحكمة (اسم يبدأ بـ hear وينتهي بـ ing)",
      promptEn: "An official session in court before a judge (court ___)",
      sentPre: "The commercial",
      sentPost: "was at ten o'clock.",
      ans: ["hearing"],
      hint: "h e a r i n g (7 letters)",
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
    oxfordSlug: "right_2",
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
    { s: "Always put a ___ at the end of a statement.", opts: ["period", "draft", "polite"], a: 0,
      whyEn: "A 'period' (.) marks the end of a declarative sentence.",
      why: "النقطة (period) توضع في نهاية الجملة التامة.", errCat: "spelling" },
    { s: "Names of cities like Riyadh and Jeddah start with a ___ letter.", opts: ["short", "capital", "draft"], a: 1,
      whyEn: "Proper nouns always begin with a 'capital letter'.",
      why: "أسماء المدن والأعلام تبدأ دائمًا بحرف كبير (capital letter).", errCat: "spelling" },
    { s: "Mr. Salman checked the first ___ of my email before I sent it.", opts: ["draft", "period", "capital"], a: 0,
      whyEn: "A 'first draft' is the initial version of a text that you review and edit.",
      why: "first draft تعني المسودة الأولى للنص قبل اعتماده وإرساله.", errCat: "vocab" },
    { s: "Don't write one long line; break it into four ___ sentences.", opts: ["absent", "short", "traffic"], a: 1,
      whyEn: "'short sentences' are concise and easy to read.",
      why: "short sentences تعني جملًا قصيرة وواضحة.", errCat: "vocab" },
    { s: "Can you ___ this legal term to me in simple English?", opts: ["explain", "period", "polite"], a: 0,
      whyEn: "'explain … to me' is an action verb meaning make something clear.",
      why: "الفعل explain يعني يشرح أو يوضّح.", errCat: "vocab" },
    { s: "Every ___ in English needs a subject and a verb.", opts: ["sentence", "traffic", "capital"], a: 0,
      whyEn: "A 'sentence' is a complete grammatical unit with a subject and a verb.",
      why: "كل جملة (sentence) في الإنجليزية تحتاج إلى فاعل وفعل.", errCat: "word_order" },
    { s: "Even when we disagree in court, our language is always ___.", opts: ["polite", "period", "draft"], a: 0,
      whyEn: "'polite' means respectful and courteous.",
      why: "polite صفة تعني مهذّبًا ومحترمًا.", errCat: "vocab" },
    { s: "Every employee has the ___ to a safe workplace.", opts: ["legal right", "first draft", "capital letter"], a: 0,
      whyEn: "'legal right' means a right protected by the law.",
      why: "legal right تعني حقًا قانونيًا يحميه النظام.", errCat: "vocab" }
  ],

  gCards: [
    {
      tEn: "Rule 1: Start with the Subject, Not the Verb",
      t: "القاعدة الأولى: ابدأ الجملة بالفاعل ثم الفعل",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Rule 1: Subject + Verb + Object</span><small>ابدأ بالفاعل دائمًا (لا توجد جملة فعلية في الإنجليزية)</small></h2>' +
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
        '<p class="en-p" dir="ltr">In Arabic, we can connect 4 or 5 clauses with «و» and commas. In English, connecting complete sentences with only commas or endless \"and\"s is a <b>run-on error</b>. End each complete thought (10–14 words) with a <b>period (.)</b>:</p>' +
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
        '<p class="en-p" dir="ltr">Now let\'s practice: 24 guided exercises on Capitals, Periods & Word Order.</p>',
      arHtml:
        '<p><b>الترتيب:</b> الفاعل أولًا ثم الفعل، دون تكرار الضمير بعد الفاعل.</p>' +
        '<p><b>الترقيم والحرف الكبير:</b> ابدأ كل جملة بحرف كبير، واكتب <b>I</b> والمدن والأيام واللغات بحرف كبير، وانهِ كل جملة بنقطة (<b>.</b>).</p>'
    }
  ],

  gA: [
    { s: "Choose the sentence with correct word order:", opts: ["Prepares Faisal the draft every morning.", "Faisal prepares the draft every morning."], a: 1,
      whyEn: "English statements must begin with the Subject ('Faisal') before the verb ('prepares').",
      why: "الجملة الإنجليزية تبدأ بالفاعل (Faisal) قبل الفعل (prepares).", errCat: "word_order" },
    { s: "Choose the sentence without a double-subject mistake:", opts: ["The new client he has a legal right.", "The new client has a legal right."], a: 1,
      whyEn: "Do not repeat 'he' after the subject 'The new client'.",
      why: "لا نكرر الضمير he بعد ذكر الفاعل الظاهر The new client.", errCat: "word_order" },
    { s: "Choose the sentence with correct capitalization:", opts: ["Yesterday, i was at the office in Riyadh.", "Yesterday, I was at the office in Riyadh."], a: 1,
      whyEn: "The pronoun 'I' is always capitalized, even in the middle of a sentence.",
      why: "ضمير المتكلم I يُكتب بحرف كبير دائمًا حتى في وسط الجملة.", errCat: "spelling" },
    { s: "Choose the sentence with correct capitalization of days and languages:", opts: ["We study English on Tuesday.", "We study english on tuesday."], a: 0,
      whyEn: "Languages ('English') and days of the week ('Tuesday') always start with a capital letter.",
      why: "أسماء اللغات (English) وأيام الأسبوع (Tuesday) تبدأ بحرف كبير دائمًا.", errCat: "spelling" },
    { s: "How should you punctuate these two complete thoughts?", opts: ["The draft is ready, it is on your desk.", "The draft is ready. It is on your desk."], a: 1,
      whyEn: "Two separate complete sentences need a period (.) and a capital letter ('It').",
      why: "جملتان تامتان ومستقلتان؛ نفصل بينهما بنقطة (.) ونبدأ الثانية بحرف كبير (It).", errCat: "word_order" },
    { s: "Which word in this sentence needs a capital letter? 'Our lawyer travels to jeddah every Thursday.'", opts: ["lawyer", "jeddah → Jeddah", "every"], a: 1,
      whyEn: "'Jeddah' is the name of a city, so it must begin with a capital 'J'.",
      why: "كلمة Jeddah اسم مدينة، فيجب أن تبدأ بحرف كبير J.", errCat: "spelling" },
    { s: "Choose the correct sentence:", opts: ["Our supervisor explains the rules clearly.", "Our supervisor he explains the rules clearly."], a: 0,
      whyEn: "Subject ('Our supervisor') + verb ('explains') directly without 'he'.",
      why: "نضع الفعل explains مباشرة بعد الفاعل Our supervisor دون إضافة he.", errCat: "word_order" },
    { s: "What comes right after a period (.) when you start the next sentence?", opts: ["A lowercase letter", "A capital letter"], a: 1,
      whyEn: "Every new sentence after a period (.) must start with a capital letter.",
      why: "بداية كل جملة جديدة بعد النقطة يجب أن تكون بحرف كبير.", errCat: "spelling" }
  ],

  gB: [
    { s: "I read legal reports in English every Sunday.", ok: true,
      whyEn: "Correct Subject–Verb order, capital 'I', capital 'English', capital 'Sunday', and a period at the end.",
      why: "ترتيب الجملة سليم، والحروف الكبيرة في I وEnglish وSunday والنقطة في آخر الجملة كلها صحيحة.", errCat: "spelling" },
    { s: "Works my brother in a court in Dammam.", ok: false, fix: "My brother works in a court in Dammam.",
      whyEn: "Put the subject ('My brother') before the verb ('works').",
      why: "لا نبدأ الجملة الخبرية بالفعل Works، بل بالفاعل My brother.", errCat: "word_order" },
    { s: "The judge was calm, and i was ready.", ok: false, fix: "The judge was calm, and I was ready.",
      whyEn: "Always capitalize the pronoun 'I'.",
      why: "يجب كتابة الضمير I بحرف كبير.", errCat: "spelling" },
    { s: "The two witnesses they were in the waiting room.", ok: false, fix: "The two witnesses were in the waiting room.",
      whyEn: "Remove the extra pronoun 'they' after 'The two witnesses'.",
      why: "نحذف الضمير الزائد they بعد الفاعل الظاهر The two witnesses.", errCat: "word_order" },
    { s: "This draft is short. The sentences are clear.", ok: true,
      whyEn: "Two clean separate sentences, each starting with a capital letter and ending with a period.",
      why: "جملتان منفصلتان بوضوح، تبدأ كل منهما بحرف كبير وتنتهي بنقطة.", errCat: "word_order" },
    { s: "Mr. salman is a commercial lawyer in riyadh.", ok: false, fix: "Mr. Salman is a commercial lawyer in Riyadh.",
      whyEn: "Capitalize people's names ('Salman') and city names ('Riyadh').",
      why: "اسم العلم (Salman) واسم المدينة (Riyadh) يجب أن يبدآ بحرف كبير.", errCat: "spelling" }
  ],

  gC: [
    { pre: "Yesterday,", verb: "capitalize: i", post: "prepared the first draft of the contract.", ans: ["I"],
      whyEn: "The pronoun 'I' is always a capital letter.",
      why: "ضمير المتكلم يُكتب كبيرًا دائمًا: I.", errCat: "spelling" },
    { pre: "Our law office is in", verb: "capitalize: riyadh", post: "near the main court.", ans: ["Riyadh"],
      whyEn: "City names start with a capital letter: Riyadh.",
      why: "أسماء المدن تبدأ بحرف كبير: Riyadh.", errCat: "spelling" },
    { pre: "The hearing is on", verb: "capitalize: monday", post: "at ten o'clock.", ans: ["Monday"],
      whyEn: "Days of the week start with a capital letter: Monday.",
      why: "أيام الأسبوع تبدأ بحرف كبير: Monday.", errCat: "spelling" },
    { pre: "___", verb: "order: explains / the lawyer", post: "every legal right to the client.", ans: ["The lawyer explains"],
      whyEn: "Subject ('The lawyer') first + verb ('explains') second.",
      why: "نضع الفاعل The lawyer أولًا ثم الفعل explains.", errCat: "word_order" },
    { pre: "The folders are ready.", verb: "capitalize: they", post: "are on your desk.", ans: ["They"],
      whyEn: "After a period (.), the first word of the new sentence must be capitalized: They.",
      why: "أول كلمة في الجملة الجديدة بعد النقطة تبدأ بحرف كبير: They.", errCat: "spelling" },
    { pre: "Faisal speaks Arabic and", verb: "capitalize: english", post: "at the office.", ans: ["English"],
      whyEn: "Names of languages always start with a capital letter: English.",
      why: "أسماء اللغات تبدأ بحرف كبير دائمًا: English.", errCat: "spelling" }
  ],

  gD: [
    { chips: ["has", "a legal right.", "Every", "client"], ans: "Every client has a legal right.",
      whyEn: "Subject (Every client) + verb (has) + object (a legal right).",
      why: "الفاعل Every client ثم الفعل has ثم المفعول به a legal right.", errCat: "word_order" },
    { chips: ["explains", "the contract.", "Mr. Salman", "clearly"], ans: "Mr. Salman clearly explains the contract.",
      whyEn: "Subject (Mr. Salman) + adverb + verb (explains) + object (the contract).",
      why: "الفاعل Mr. Salman ثم الفعل explains ثم المفعول به the contract.", errCat: "word_order" },
    { chips: ["short", "Keep", "and clear.", "your sentences"], ans: "Keep your sentences short and clear.",
      whyEn: "Imperative verb (Keep) + object (your sentences) + adjectives (short and clear).",
      why: "فعل الأمر Keep ثم المفعول به your sentences ثم الصفتان short and clear.", errCat: "word_order" },
    { chips: ["on", "We", "Sunday.", "start work"], ans: "We start work on Sunday.",
      whyEn: "Subject (We) + verb + object (start work) + time (on Sunday, capitalized).",
      why: "الفاعل We ثم الفعل start work ثم الزمان on Sunday بحرف كبير.", errCat: "word_order" }
  ],

  listening: {
    title: "Editing Faisal's First Email Draft",
    sourceLabel: "British Council A2 / Legal Writing Workshop Dialogue",
    url: "https://learnenglish.britishcouncil.org/skills/listening/a2-listening",
    audioWord: "sentence",
    targetSeconds: 80,
    introEn: "Listen to Mr. Salman reviewing the first draft of an email that Faisal wrote to a client, showing him how to fix his sentences and capital letters.",
    intro: "استمع إلى الأستاذ سلمان وهو يراجع المسودة الأولى لإيميل كتبه فيصل لأحد الموكّلين، ويوضّح له كيف يصحح تقسيم الجمل والحروف الكبيرة.",
    predict: {
      qEn: "Stage 1 Main-Idea Question: What is the main problem in Faisal's first email draft?",
      q: "سؤال الفكرة العامة (قبل قراءة النص): ما المشكلة الرئيسية في مسودة الإيميل الأولى التي كتبها فيصل؟",
      optsEn: [
        "All fifty words are in one long sentence without periods, and 'i' is lowercase",
        "The email is written in French instead of English",
        "He forgot the client's phone number"
      ],
      opts: [
        "كتب خمسين كلمة في جملة واحدة طويلة بلا نقاط، وكتب الضمير i بحرف صغير",
        "كتب الإيميل بالفرنسية بدل الإنجليزية",
        "نسي رقم هاتف الموكّل"
      ],
      a: 0,
      whyEn: "Mr. Salman points out that the whole draft is one long sentence of 50 words without periods, and the pronoun 'I' is lowercase.",
      why: "الأستاذ سلمان يلاحظ أن المسودة كلها جملة واحدة طويلة من 50 كلمة بلا نقاط، وأن الضمير I مكتوب بحرف صغير."
    },
    transcriptParas: [
      "<b>Faisal:</b> Mr. Salman, <<c:do>> you <<c:have>> two [[minutes|دقيقتان]]? <<s:This>> <<s:is>> the [[first|الأولى]] {draft} of my [[email|إيميل]] to our [[new|الجديد]] {client} in Jeddah.",
      "<b>Mr. Salman:</b> Of course, Faisal. Let's [[read|نقرأ]] it together. Hmm… the [[message|الرسالة]] <<s:is>> {polite}, and you <<c:{explain}>> the [[client's|الموكّل]] {legal right} [[well|جيدًا]]. [[However|ومع ذلك]], <<s:there is>> one [[big|كبيرة]] [[problem|مشكلة]].",
      "<b>Faisal:</b> <<s:Is>> <<s:there>> a [[grammar|قواعد]] {mistake} with <<t:am, is, are>>?",
      "<b>Mr. Salman:</b> No, your [[verbs|أفعالك]] <<s:are>> [[good|جيدة]]! [[But|لكن]] the [[whole|كامل]] [[email|الإيميل]] <<s:is>> [[one|واحدة]] [[long|طويلة]] {sentence} of [[fifty|خمسين]] [[words|كلمة]]. <<s:There aren't>> [[any|أي]] {periods|period} in the [[middle|الوسط]]!",
      "<b>Faisal:</b> Oh! In Arabic, I [[often|غالبًا]] [[connect|أربط]] [[my ideas|أفكاري]] with [[commas|فواصل]] and \"and\".",
      "<b>Mr. Salman:</b> That <<s:is>> [[common|شائع]] in Arabic, [[but|لكن]] in English we <<c:write>> {short}, {clear} {sentences|sentence}. Put a {period} [[after|بعد]] [[each|كل]] [[complete|تامة]] [[idea|فكرة]], and [[start|ابدأ]] the [[next|التالية]] {sentence} with a {capital} [[letter|حرف]].",
      "<b>Faisal:</b> I <<c:understand>>. If I <<c:put>> [[three|ثلاث]] {periods|period} here, the [[email|الإيميل]] <<c:becomes>> [[four|أربع]] {short} {sentences|sentence}.",
      "<b>Mr. Salman:</b> Exactly! Also, [[look at|انظر إلى]] the [[pronoun|الضمير]] \"I\" in [[line|السطر]] two, and the [[words|الكلمات]] \"Jeddah\" and \"Thursday\". They <<c:need>> {capital} [[letters|حروف]].",
      "<b>Faisal:</b> Thank you! I <<c:will fix>> <<s:these>> {mistakes|mistake} right now."
    ],
    insight: {
      titleEn: "How Faisal Fixed His Draft",
      titleAr: "كيف صحّح فيصل مسودته؟",
      l1En: "1) Break one 50-word run-on line into 4 short sentences with periods (.):",
      ex1: "Subject + Verb + Object. + [Capital] Subject + Verb + Object.",
      l2En: "2) Capitalize 'I', cities, and days of the week:",
      ex2: "i → I · jeddah → Jeddah · thursday → Thursday"
    },
    questions: [
      { q: "Who is Faisal's email draft for?", opts: ["For a new client in Jeddah", "For a scientist in Antarctica", "For a university professor in London"], a: 0,
        ev: "This is the first draft of my email to our new client in Jeddah.",
        whyEn: "Faisal says it is the first draft of his email to their new client in Jeddah.",
        why: "المسودة موجهة إلى موكّل جديد للمكتب في جدة.", errCat: "reading" },
      { q: "What does Mr. Salman praise in Faisal's draft?", opts: ["The message is polite and explains the client's legal right well.", "The email has twenty sentences.", "The email has no words."], a: 0,
        ev: "the message is polite, and you explain the client's legal right well.",
        whyEn: "He praises that the message is polite and explains the client's legal right well.",
        why: "أثنى على أن الرسالة مهذبة (polite) وتشرح الحق القانوني للموكّل بوضوح.", errCat: "reading" },
      { tf: true, q: "Faisal made many mistakes with 'am, is, are' in his draft.", a: false,
        ev: "No, your verbs are good! But the whole email is one long sentence of fifty words.",
        whyEn: "Mr. Salman says his verbs are good; the issue is punctuation and sentence separation.",
        why: "الأستاذ سلمان قال إن أفعاله صحيحة، والمشكلة في وصل الجمل بلا نقاط.", errCat: "reading" },
      { q: "How many words were in Faisal's single long sentence?", opts: ["Fifteen words", "Fifty words", "Five hundred words"], a: 1,
        ev: "But the whole email is one long sentence of fifty words. There aren't any periods in the middle!",
        whyEn: "The whole email was one long sentence of fifty (50) words without periods in the middle.",
        why: "كانت الرسالة كلها جملة واحدة من خمسين (50) كلمة دون أي نقطة في وسطها.", errCat: "reading" },
      { q: "Why did Faisal connect all his ideas into one long sentence?", opts: ["Because in Arabic he often connects ideas with commas and 'and'", "Because his keyboard had no period key", "Because English does not use periods"], a: 0,
        ev: "In Arabic, I often connect my ideas with commas and 'and'.",
        whyEn: "He transferred the Arabic habit of linking clauses with commas and 'and'.",
        why: "لأنه نقل عادة ربط الجمل بالواو والفواصل من العربية إلى الإنجليزية.", errCat: "word_order" },
      { q: "How many short sentences does the email become when Faisal adds three periods?", opts: ["Two sentences", "Four short sentences", "Ten sentences"], a: 1,
        ev: "If I put three periods here, the email becomes four short sentences.",
        whyEn: "Adding three periods in the middle divides the text into four short sentences.",
        why: "بوضع ثلاث نقاط في الوسط يتحول النص إلى أربع جمل قصيرة ومستقلة.", errCat: "reading" },
      { q: "Which three words in Faisal's draft needed capital letters?", opts: ["'I', 'Jeddah', and 'Thursday'", "'lawyer', 'office', and 'court'", "'polite', 'short', and 'clear'"], a: 0,
        ev: "Also, look at the pronoun 'I' in line two, and the words 'Jeddah' and 'Thursday'. They need capital letters.",
        whyEn: "The pronoun 'I', the city 'Jeddah', and the day 'Thursday' all require capital letters.",
        why: "الضمير I، ومدينة Jeddah، ويوم Thursday كلها تتطلب حروفًا كبيرة.", errCat: "spelling" },
      { tf: true, q: "In English writing, short and clear sentences are better than one long run-on sentence.", a: true,
        ev: "in English we write short, clear sentences. Put a period after each complete idea…",
        whyEn: "True—English prefers short, clear sentences separated by periods.",
        why: "صحيح؛ الإنجليزية تفضّل الجمل القصيرة والواضحة المفصولة بنقاط.", errCat: "word_order" }
    ]
  },

  writing: {
    taskEn: "Write 4 separate, clear sentences about preparing a draft or explaining a legal right to a client on a specific day (e.g., Sunday or Tuesday) in Riyadh or Jeddah.",
    task: "اكتب 4 جمل منفصلة وواضحة عن تجهيز مسودة (draft) أو شرح حق قانوني (legal right) لموكّل في يوم محدد (مثل Sunday أو Tuesday) وفي مدينة مثل Riyadh أو Jeddah، مع مراعاة الحروف الكبيرة والنقاط الأربع.",
    checks: [
      { k: "sentences", tEn: "At least 4 separate sentences (4 periods ., no run-on)", t: "4 جمل منفصلة على الأقل (تنتهي كل جملة بنقطة . ولا توصل معًا)",
        ok: function(a){ return a.sentences >= 4 && !a.runOn; } },
      { k: "capI", tEn: "Pronoun 'I' and sentence starts are capitalized (no lowercase 'i')", t: "الضمير I وبدايات الجمل مكتوبة بحرف كبير (بلا i صغيرة)", ex: "I prepare the first draft.",
        ok: function(a, text){ var s = String(text || ''); return /\bI\b/.test(s) && !/\bi\b/.test(s); } },
      { k: "proper", tEn: "At least 1 capitalized city, day, or language (Riyadh, Jeddah, Sunday, English…)", t: "اسم مدينة أو يوم أو لغة بحرف كبير", ex: "Riyadh · Jeddah · Sunday · Tuesday · English · Arabic",
        ok: function(a, text){ return /\b(?:Riyadh|Jeddah|Dammam|Makkah|Saudi|English|Arabic|Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)\b/.test(String(text || '')); } },
      { k: "vocab", tEn: "At least 3 words/phrases from today's lesson", t: "3 كلمات أو عبارات من درس اليوم", ex: "sentence · capital · period · draft · polite · short · explain · legal right",
        ok: function(a){ return a.used.length >= 3; } }
    ],
    modelMarked: "I <<c:work>> as a trainee at a law office in Riyadh on Sunday. I <<c:write>> the first {draft} of our client emails in English. My {sentences|sentence} <<s:are>> {short}, {clear}, and {polite}. Our lawyers always <<c:{explain}>> every {legal right} to the clients.",
    model: "I work as a trainee at a law office in Riyadh on Sunday. I write the first draft of our client emails in English. My sentences are short, clear, and polite. Our lawyers always explain every legal right to the clients."
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
    { s: "Which word is ALWAYS capitalized in English, even in the middle of a sentence?", opts: ["lawyer", "I (the pronoun for myself)", "court"], a: 1, tag: "Grammar · قواعد",
      whyEn: "The pronoun 'I' is always a capital letter in English.",
      why: "ضمير المتكلم I يُكتب بحرف كبير دائمًا أينما وقع في الجملة.", errCat: "spelling" },
    { s: "Choose the sentence without a double-subject error:", opts: ["These folders they are ready for Tuesday.", "These folders are ready for Tuesday.", "Are ready these folders for Tuesday."], a: 1, tag: "Grammar · قواعد",
      whyEn: "Subject ('These folders') + verb ('are') directly.",
      why: "الفاعل These folders يليه الفعل are مباشرة دون الضمير الزائد they.", errCat: "word_order" },
    { s: "Which language name is capitalized correctly?", opts: ["arabic and english", "Arabic and English", "Arabic and english"], a: 1, tag: "Grammar · قواعد",
      whyEn: "All language names ('Arabic', 'English') begin with a capital letter.",
      why: "أسماء جميع اللغات تبدأ بحرف كبير في الإنجليزية.", errCat: "spelling" },
    { s: "Put a ___ at the end of every statement before starting a new sentence.", opts: ["period (.)", "capital", "draft"], a: 0, tag: "Vocabulary · مفردات",
      whyEn: "A 'period' (.) ends a statement.",
      why: "نضع نقطة (period) في نهاية كل جملة خبرية.", errCat: "vocab" },
    { s: "This is only the first ___ of the contract; we will review it tomorrow.", opts: ["period", "draft", "polite"], a: 1, tag: "Vocabulary · مفردات",
      whyEn: "'first draft' means the first version of a written text.",
      why: "first draft تعني المسودة الأولى للعقد.", errCat: "vocab" },
    { s: "Please write ___ sentences so the client can read them easily.", opts: ["short and clear", "absent and late", "traffic and period"], a: 0, tag: "Vocabulary · مفردات",
      whyEn: "'short and clear' describes good, readable sentences.",
      why: "الجمل القصيرة والواضحة (short and clear) أسهل في القراءة والفهم.", errCat: "vocab" },
    { s: "Every citizen has the ___ to a fair trial in court.", opts: ["legal right", "first draft", "capital letter"], a: 0, tag: "Legal Track · المسار القانوني",
      whyEn: "'legal right' means a right guaranteed by law.",
      why: "legal right تعني الحق القانوني.", errCat: "vocab" }
  ]
};
})();
