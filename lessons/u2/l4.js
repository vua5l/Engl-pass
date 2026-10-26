/* ===== الوحدة 2 · الدرس 4: Where Did You Go? — Past Simple: Questions & Short Answers (6 مراحل · درس استماع) ===== */
(function(){
/* فحوص الكتابة (writing.checks): سؤال يبدأ بـ Did، وسؤال بكلمة استفهام مع did أو was / were، وإجابة قصيرة، وكلمتان من الدرس،
   بعد توحيد فاصلة الآيفون العليا ’. ويجوز أن يسبق السؤالَ نداءٌ أو كلمة وصل (Ali, did you …? · So, where did you …?). */
var W_LEAD = "^\\s*(?:[a-z']+(?:\\s+[a-z']+)?\\s*,\\s*)?(?:(?:and|so|then|also|oh|ok|okay|well|but)\\s*,?\\s+)?";
var W_DID_Q = new RegExp(W_LEAD + "did(?:n't)?\\s+[a-z]", "i");
var W_WH_Q = new RegExp(W_LEAD + "(?:where|what|when|who|whom|why|which|how)\\b[^?]*?\\b(?:did|didn't|was|wasn't|were|weren't)\\b", "i");
var W_SHORT = /\b(?:yes|no)\b\s*,?\s*(?:(?:my|your|his|her|our|their|the)\s+)?[a-z]+\s+(?:did|didn't|did\s+not|was|wasn't|was\s+not|were|weren't|were\s+not)(?:\s*(?:[.!,;]|$)|\s+(?:and|but|because)\b)/i;
var W_VOCAB = [/\bislands?\b/i, /\bnature\b/i, /\bcheap(?:er|est|ly)?\b/i, /\b(?:choose|chooses|choosing|chose|chosen)\b/i,
  /\b(?:hear|hears|hearing|heard)\s+about\b/i, /\bvacations?\b/i, /\b(?:report|reports|reported|reporting)\s+(?:a\s+|the\s+)?crimes?\b/i];
function wNorm(text){ return String(text || '').replace(/[’‘‛ʼ`´]/g, "'"); }
function wQuestions(text){ return wNorm(text).match(/[^.!?\n]+\?/g) || []; }

LESSONS.u2l4 = {
  id: "u2l4",
  unit: 2,
  n: 4,
  mode: "listening",
  en: "Where Did You Go?",
  ar: "رحلة إلى تايوان: الأسئلة والإجابات القصيرة في الماضي",
  subEn: "Past Simple: Questions & Short Answers",
  canDoEn: "I can ask and answer questions about a past trip: Did …? questions, Wh- questions with did, questions with was / were, and short answers.",
  canDoAr: "أقدر أن أسأل عن رحلة مضت وأجيب: بأسئلة Did، وبأسئلة الاستفهام مع did، وبأسئلة was / were، وبالإجابات القصيرة.",
  descEn: "I can interview a friend about a trip (where they went, who they went with, how long they stayed and why), and understand a real conversation about a trip to Taiwan.",
  descAr: "أقدر أن أحاور صديقًا عن رحلة: إلى أين ذهب، ومع من، وكم مكث، ولماذا، وأفهم حوارًا حقيقيًا بين هانا ودانيال عن رحلة إلى تايوان.",
  goals: [
    { en: "I can ask yes/no questions in the past with Did + subject + base verb (Did you fly…? not Did you flew…?), with regular and irregular verbs.", ar: "أقدر أن أسأل أسئلة «نعم أو لا» في الماضي بـ Did ثم الفاعل ثم الفعل المجرد (Did you fly…? لا Did you flew…?) مع الأفعال المنتظمة والشاذة." },
    { en: "I can give short answers (Yes, I did. / No, she didn't.) and ask Wh- questions with did: Where / What / Who / Why / How long.", ar: "أقدر أن أجيب إجابات قصيرة (Yes, I did. / No, she didn't.)، وأسأل بكلمات الاستفهام مع did: Where وWhat وWho وWhy وHow long." },
    { en: "I can ask questions with was / were (How was …? Were you …?), answer them (Yes, it was. / No, they weren't.), and use today's eight irregular verbs.", ar: "أقدر أن أسأل بـ was / were (How was …? Were you …?) وأجيب عنها (Yes, it was. / No, they weren't.)، وأستعمل أفعال اليوم الثمانية الشاذة." },
    { en: "I can understand a real conversation about a trip to Taiwan, use 6 travel words and the legal phrase 'report a crime', and write at least 4 sentences of questions and short answers.", ar: "أقدر أن أفهم حوارًا حقيقيًا عن رحلة إلى تايوان، وأستعمل 6 كلمات عن السفر والعبارة القانونية report a crime، وأكتب 4 جمل على الأقل من الأسئلة والإجابات القصيرة." }
  ],
  intro: {
    recall: {
      dEn: "Type five words and phrases from Lesson 3 from memory, including its legal phrase, before you see the answer.",
      d: "اكتب من ذاكرتك خمس كلمات وعبارات من الدرس الثالث، منها عبارته القانونية، قبل أن ترى الإجابة.",
      items: [
        ["review", "5 active recall items from Unit 2 · Lesson 3", "5 عناصر استرجاع نشط من الدرس الثالث في الوحدة الثانية"],
        ["pen", "Type each answer from memory to fix its spelling", "اكتب كل إجابة من ذاكرتك لتثبيت إملائها"],
        ["spark", "Includes the legal phrase of Lesson 3", "تشمل العبارة القانونية من الدرس الثالث"]
      ]
    },
    vocab: {
      dEn: "6 travel words plus today's legal phrase ('report a crime'), with human audio from Wikimedia Commons and Oxford links.",
      d: "6 كلمات عن السفر مع العبارة القانونية اليومية (report a crime)، بنطق بشري من Wikimedia Commons وروابط Oxford.",
      items: [
        ["cards", "7 flashcards (6 words + 'report a crime') with human audio & Oxford link", "7 بطاقات (6 كلمات + report a crime) مع النطق البشري ورابط Oxford"],
        ["review", "2-round matching game", "لعبة توصيل من جولتين"],
        ["quiz", "8 context sentences: choose the right word", "8 جمل سياقية: اختر الكلمة المناسبة"]
      ]
    },
    grammar: {
      dEn: "Why is 'Did you went?' wrong? Learn to ask about the past with Did, with Wh- words and with was / were, give short answers, and use eight new irregular verbs.",
      d: "لماذا تُعد Did you went خاطئة؟ تعلّم السؤال عن الماضي بـ Did وبكلمات الاستفهام وبـ was / were، والإجابة القصيرة، وثمانية أفعال شاذة جديدة.",
      items: [
        ["book", "6 grammar cards (English first, Arabic on tap)", "6 بطاقات شرح (الإنجليزي أولًا، والعربي عند الطلب)"],
        ["quiz", "16 guided exercises (4 of each type), one question per screen", "16 تمرينًا موجّهًا (4 من كل نمط)، سؤال في كل شاشة"]
      ]
    },
    reading: {
      dEn: "3-Stage Listening (real recording): Hana from the UK and Daniel from Chile talk about a trip to Taiwan.",
      d: "استماع على 3 مراحل لتسجيل حقيقي: هانا من بريطانيا ودانيال من تشيلي يتحدثان عن رحلة إلى تايوان.",
      items: [
        ["speaker", "Stage 1: Listen for the main idea without reading the transcript", "المرحلة 1: استماع أول للفكرة العامة بدون النص المكتوب"],
        ["quiz", "Stage 2: Listen again and answer 8 detail questions", "المرحلة 2: استماع ثانٍ للإجابة عن 8 أسئلة تفاصيل"],
        ["mail", "Stage 3: Transcript on the source page & Shadowing Timer", "المرحلة 3: النص المكتوب في صفحة المصدر لمراجعة ما فات، مع الترديد (Shadowing)"]
      ]
    },
    writing: {
      dEn: "Interview a friend or a family member about a trip: write at least 4 separate sentences with questions in the past and short answers.",
      d: "حاور صديقًا أو أحد أفراد أسرتك عن رحلة: اكتب 4 جمل منفصلة على الأقل فيها أسئلة في الماضي وإجابات قصيرة.",
      items: [
        ["pen", "At least 4 separate sentences: questions end with ?, answers with a period (.)", "4 جمل منفصلة على الأقل: السؤال ينتهي بعلامة استفهام، والجواب بنقطة"],
        ["spark", "Instant check: 4 sentences, a Did question and a Wh- question, 1 short answer and 2 lesson words", "فحص فوري: 4 جمل، وسؤال بـ Did وسؤال بكلمة استفهام، وإجابة قصيرة، وكلمتان من الدرس"]
      ]
    },
    quiz: {
      dEn: "10 shuffled questions on past questions, short answers, today's verbs and vocabulary (80% to pass: 8 of 10), followed by a full Lesson Error Analysis.",
      d: "اختبار قصير من 10 أسئلة في السؤال بالماضي والإجابات القصيرة وأفعال اليوم ومفرداته (النجاح من 80%: 8 من 10)، يليه تحليل شامل لأخطاء الدرس.",
      items: [
        ["quiz", "10 questions: 7 grammar, 2 vocabulary, 1 legal (80% passing score)", "10 أسئلة: 7 في القواعد و2 في المفردات وسؤال قانوني (النجاح من 80%)"],
        ["review", "Error Analysis grouped by error type and cause", "تحليل أخطاء الدرس وأسبابها مصنّفة حسب نوع الخطأ"]
      ]
    }
  },

  /* ---------- المرحلة 1: الاسترجاع النشط (من u2l3: flight وluggage وdelayed وget lost، والقانونية pay a fine، بجمل جديدة) ---------- */
  recall: [
    {
      id: "rc-0",
      promptAr: "رحلة جوية بالطائرة (اسم من الدرس الثالث)",
      promptEn: "Noun from Lesson 3: a journey by plane",
      sentPre: "Our",
      sentPost: "to Cairo left at six in the morning, so we slept on the plane.",
      ans: ["flight"],
      hint: "f _ _ _ _ t (6 letters)",
      spellNoteEn: "Spelled f-l-i-g-h-t: the 'gh' is silent, as in 'night' and 'light'.",
      spellNote: "تُكتب f-l-i-g-h-t، وحرفا gh صامتان لا يُنطقان، كما في night وlight.",
      errCat: "spelling"
    },
    {
      id: "rc-1",
      promptAr: "أمتعة السفر وحقائبه (اسم غير معدود من الدرس الثالث)",
      promptEn: "Uncountable noun from Lesson 3: the bags and suitcases you take on a trip",
      sentPre: "At the hotel, a young man carried our heavy",
      sentPost: "up to our room.",
      ans: ["luggage"],
      hint: "l _ _ _ _ _ e (7 letters)",
      spellNoteEn: "Spelled l-u-g-g-a-g-e, with double g in the middle. It has no plural: not 'luggages'.",
      spellNote: "تُكتب l-u-g-g-a-g-e بحرفي g في وسطها، ولا تُجمع فلا نقول luggages.",
      errCat: "spelling"
    },
    {
      id: "rc-2",
      promptAr: "متأخر عن موعده بسبب مشكلة (صفة من الدرس الثالث)",
      promptEn: "Adjective from Lesson 3: later than planned because of a problem",
      sentPre: "The team's bus was",
      sentPost: "by heavy traffic, so the match started late.",
      ans: ["delayed"],
      hint: "d _ _ _ _ _ d (7 letters)",
      spellNoteEn: "Spelled d-e-l-a-y-e-d: there is a vowel (a) before y, so we just add -ed (not 'delaied').",
      spellNote: "تُكتب d-e-l-a-y-e-d، فقبل y حرف علة (a)، فنضيف ed مباشرة ولا نكتب delaied.",
      errCat: "spelling"
    },
    {
      id: "rc-3",
      promptAr: "يضلّ الطريق فلا يعرف أين هو (عبارة من كلمتين من الدرس الثالث)",
      promptEn: "Phrase from Lesson 3 (2 words): not know where you are",
      sentPre: "Take a map with you, so you don't",
      sentPost: "in the old city.",
      ans: ["get lost"],
      hint: "g _ _ _ _ _ t (7 letters, 2 words)",
      spellNoteEn: "Two words: get + lost. After don't or didn't, we use get (not got): didn't get lost. The past is got lost.",
      spellNote: "كلمتان: get + lost، وبعد don't أو didn't نكتب get لا got: didn't get lost، وماضيها got lost.",
      errCat: "vocab"
    },
    {
      id: "rc-4",
      promptAr: "يدفع غرامة (العبارة القانونية من الدرس الثالث: ___ a fine)",
      promptEn: "Legal phrase from Lesson 3: ___ a fine (give money as a punishment for breaking a rule)",
      sentPre: "On this train, a passenger without a ticket must",
      sentPost: "a fine of 200 riyals.",
      ans: ["pay", "pay a fine"],
      isLegal: true,
      hint: "p _ y (3 letters)",
      spellNoteEn: "Spelled p-a-y. Its past is paid (not 'payed'), and in a question we say: Did you pay a fine?",
      spellNote: "تُكتب p-a-y، وماضيها paid لا payed، وفي السؤال نقول: Did you pay a fine?",
      errCat: "vocab"
    }
  ],

  /* ---------- العبارة القانونية اليومية (المسار القانوني A2) ---------- */
  legalPhrase: {
    en: "report a crime",
    headword: "report a crime",
    pos: "legal phrase",
    ar: "يبلّغ عن جريمة (للشرطة)",
    say: "رِبُورْت أَ كْرَايْم",
    ex: "You can report a crime at the nearest police station or by phone.",
    exAr: "تستطيع أن تبلّغ عن جريمة في أقرب مركز شرطة أو بالهاتف.",
    tipEn: "Legal collocation: report a crime (to the police); we also say report a theft or report a lost passport. A crime is an act against the law that the police deal with, like stealing. Breaking a small rule, like parking in the wrong place, usually ends with a fine (pay a fine, Lesson 3). report is regular: reported. In a question: Did you report it to the police?",
    tip: "متلازمة قانونية: report a crime (to the police) أي يبلّغ الشرطة عن جريمة، ومثلها report a theft (يبلّغ عن سرقة) وreport a lost passport (يبلّغ عن ضياع جواز سفر). والجريمة crime فعل يخالف القانون وتتولاه الشرطة، كالسرقة، أما مخالفة نظام صغير كالوقوف في مكان ممنوع فتنتهي في الغالب بغرامة (pay a fine من الدرس الثالث). والفعل report منتظم ماضيه reported، وفي السؤال نقول: Did you report it to the police?",
    legal: true,
    oxfordSlug: "crime",
    wikiFiles: ["En-us-report.ogg", "En-us-a-unstressed.ogg", "En-us-crime.ogg"],
    wikiCredit: "File:En-us-report.ogg, File:En-us-a-unstressed.ogg & File:En-us-crime.ogg · Wikimedia Commons"
  },

  /* ---------- المفردات (6 كلمات من المقطع + العبارة القانونية = 7 عبارات، والمتلازمات في tipEn / tip) ---------- */
  vocab: [
    { en: "island", pos: "noun", ar: "جزيرة", say: "آيْلَنْد",
      ex: "Last spring, we took a boat to a small island near Jazan.", exAr: "في الربيع الماضي ركبنا قاربًا إلى جزيرة صغيرة قرب جازان.",
      tipEn: "The s in island is silent: say EYE-land. Collocations: a small island, a desert island (with no people on it), on an island (not in an island). Taiwan is an island, and Bahrain is a country of islands.",
      tip: "حرف s في island صامت لا يُنطق: «آيْلَنْد». ومن متلازماتها a small island (جزيرة صغيرة) وa desert island (جزيرة لا يسكنها أحد)، ونقول on an island لا in an island. وتايوان جزيرة، والبحرين بلد من جزر.",
      oxfordSlug: "island",
      wikiFile: "En-uk-island.ogg",
      wikiCredit: "File:En-uk-island.ogg · Wikimedia Commons" },
    { en: "nature", pos: "noun", ar: "الطبيعة (النباتات والحيوانات والجبال والأنهار)", say: "نَيْتْشَر",
      ex: "Abha is perfect for people who love nature: it has green mountains and cool air.", exAr: "أبها مكان مثالي لمن يحب الطبيعة، ففيها جبال خضراء وهواء بارد.",
      tipEn: "nature means plants, animals, mountains and rivers: the world that people did not make. For the natural world in general, use no 'the': I love nature (not I love the nature). The adjective is natural.",
      tip: "nature هي النباتات والحيوانات والجبال والأنهار، أي العالم الذي لم يصنعه الإنسان. وإذا قصدت الطبيعة عمومًا فلا تضع قبلها the: I love nature لا I love the nature، والصفة منها natural (طبيعي).",
      oxfordSlug: "nature",
      wikiFile: "En-uk-nature.ogg",
      wikiCredit: "File:En-uk-nature.ogg · Wikimedia Commons" },
    { en: "cheap", pos: "adjective", ar: "رخيص (قليل الثمن)", say: "تْشِيب",
      ex: "The fruit at the Friday market was fresh and cheap.", exAr: "كانت الفاكهة في سوق الجمعة طازجة ورخيصة.",
      tipEn: "Opposite: expensive. Forms: cheap → cheaper → the cheapest. Use cheap for the things you buy (The tickets were cheap); for a price, we usually say low (a low price). With clothes or phones, cheap can also mean 'not good quality'.",
      tip: "عكسها expensive (غالٍ)، وتصريفها cheap ثم cheaper ثم the cheapest. ونصف بها ما نشتريه (The tickets were cheap)، أما السعر نفسه فنقول غالبًا إنه low (a low price). ومع الملابس والأجهزة قد تعني cheap «رديء الجودة» أيضًا.",
      oxfordSlug: "cheap_1",
      wikiFile: "En-uk-cheap.ogg",
      wikiCredit: "File:En-uk-cheap.ogg · Wikimedia Commons" },
    { en: "choose", pos: "verb", ar: "يختار", say: "تْشُوز",
      ex: "Last summer, my uncle chose a quiet hotel far from the city centre.", exAr: "في الصيف الماضي اختار عمي فندقًا هادئًا بعيدًا عن وسط المدينة.",
      tipEn: "Collocations: choose a place, choose a hotel, choose between A and B. Irregular: choose → chose → chosen. choose has two o's (it sounds like 'shoes'); chose has one o (it sounds like 'nose'). After did, use choose: Why did you choose this hotel?",
      tip: "متلازمات: choose a place (يختار مكانًا) وchoose a hotel (يختار فندقًا) وchoose between A and B (يختار بين أمرين). وهو فعل شاذ: choose ثم chose ثم chosen. وتُكتب choose بحرفي o وتُنطق كـ shoes، وchose بحرف o واحد وتُنطق كـ nose. وبعد did نعود إلى choose: Why did you choose this hotel?",
      oxfordSlug: "choose",
      wikiFile: "En-us-choose.ogg",
      wikiCredit: "File:En-us-choose.ogg · Wikimedia Commons" },
    { en: "hear about", pos: "verb", ar: "يسمع عن (يبلغه خبر الشيء)", say: "هِيَر أَبَاوْت",
      ex: "My mother heard about the new museum on the radio.", exAr: "سمعت أمي عن المتحف الجديد في الإذاعة.",
      tipEn: "hear about + something = get news or information about it, often from other people. Irregular: hear → heard (heard sounds like 'bird'). In a question, use hear after did: Where did you hear about it?",
      tip: "hear about تعني أن يبلغك خبر شيء أو معلومات عنه، من الناس غالبًا. وhear فعل شاذ ماضيه heard، ويُنطق heard كما تُنطق bird. وفي السؤال نعود بعد did إلى hear: Where did you hear about it?",
      oxfordSlug: "hear",
      wikiFiles: ["En-uk-hear.ogg", "En-us-about (improved).ogg"],
      wikiCredit: "File:En-uk-hear.ogg & File:En-us-about (improved).ogg · Wikimedia Commons" },
    { en: "vacation", pos: "noun", ar: "إجازة / عطلة (بالأمريكية، وتقابلها holiday بالبريطانية)", say: "فَيْكَيْشَن",
      ex: "In the USA, schools close for a long summer vacation.", exAr: "تُغلق المدارس في الولايات المتحدة أبوابها في إجازة صيفية طويلة.",
      tipEn: "American English says vacation; British English usually says holiday. Collocations: go on vacation, a summer vacation, be on vacation. In Lesson 2 you learned the British phrase 'go on holiday'. Stress: va-CA-tion.",
      tip: "يقول الأمريكيون vacation ويقول البريطانيون غالبًا holiday. ومن متلازماتها go on vacation (يسافر في إجازة) وa summer vacation (إجازة صيفية) وbe on vacation (يكون في إجازة)، وقد تعلمت في الدرس الثاني العبارة البريطانية go on holiday. والنبر على مقطعها الثاني: va-CA-tion.",
      oxfordSlug: "vacation_1",
      wikiFile: "En-us-vacation.ogg",
      wikiCredit: "File:En-us-vacation.ogg · Wikimedia Commons" }
  ],

  vocabGaps: [
    { s: "There is no bridge to the ___, so visitors go there by boat.", opts: ["island", "nature", "vacation"], a: 0,
      whyEn: "An 'island' has water all around it. With no bridge, the only way to get there is by boat.",
      why: "island أرض يحيط بها الماء من كل جانب، فإذا لم يكن إليها جسر فلا سبيل إليها إلا بالقارب.", errCat: "vocab" },
    { s: "My grandfather loves ___: he knows the names of many birds and desert plants.", opts: ["cheap", "island", "nature"], a: 2,
      whyEn: "'nature' means plants, animals and birds that people did not make, so a man who knows many birds and plants loves nature. We say 'loves nature', with no 'the'.",
      why: "nature هي النباتات والحيوانات والطيور مما لم يصنعه الإنسان، ومن يعرف أسماء طيور ونباتات كثيرة يحب الطبيعة، ونقول loves nature بلا the.", errCat: "vocab" },
    { s: "Clothes were very ___ in the local market, so I bought three shirts.", opts: ["expensive", "cheap", "dangerous"], a: 1,
      whyEn: "'cheap' means it doesn't cost much money, and that is why the speaker bought three shirts. 'expensive' is the opposite, and clothes are not 'dangerous'.",
      why: "cheap تعني أنه لا يكلّف مالًا كثيرًا، ولهذا اشترى المتكلم ثلاثة قمصان، أما expensive فعكسها، والملابس لا توصف بأنها dangerous.", errCat: "vocab" },
    { s: "The menu had fifty dishes, so it was hard to ___ just one.", opts: ["choose", "hear about", "report"], a: 0,
      whyEn: "'choose' means take one thing from many. With fifty dishes on the menu, it is hard to take only one.",
      why: "choose تعني أن تأخذ شيئًا واحدًا من أشياء كثيرة، ومع خمسين طبقًا في القائمة يصعب اختيار طبق واحد.", errCat: "vocab" },
    { s: "I ___ this little café from a friend at work, so I wanted to try it.", opts: ["chose", "heard about", "reported"], a: 1,
      whyEn: "'hear about' means get news about something from other people. A friend told the speaker about the café. Its past is 'heard about'.",
      why: "hear about تعني أن يبلغك خبر الشيء من غيرك، وقد أخبر صديقٌ المتكلمَ بالمقهى، وماضيها heard about.", errCat: "vocab" },
    { s: "Mike is from Texas, and he spent his summer ___ with us in Riyadh.", opts: ["island", "nature", "vacation"], a: 2,
      whyEn: "'vacation' is the American word for holiday. Mike is American, and he spent his summer holiday in Riyadh.",
      why: "vacation الكلمة الأمريكية لـ holiday، ومايك أمريكي قضى إجازته الصيفية في الرياض.", errCat: "vocab" },
    { s: "You should ___ to the police quickly, so they can find the person who did it.", opts: ["pay a fine", "report a crime", "choose a place"], a: 1,
      whyEn: "'report a crime' means tell the police about something against the law. When you tell them quickly, they have a better chance to find the person who did it.",
      why: "report a crime تعني أن تخبر الشرطة بأمر يخالف القانون، وإذا أخبرتها سريعًا كانت فرصتها أكبر في الوصول إلى الفاعل.", errCat: "vocab" },
    { s: "We spent three days on a quiet ___ in the Red Sea, far from cars and noise.", opts: ["nature", "flight", "island"], a: 2,
      whyEn: "An 'island' is land with sea all around it, and we say 'on an island'. 'nature' takes no 'a', and a flight is in the sky, not in the sea.",
      why: "island أرض يحيط بها البحر، ونقول on an island، أما nature فلا تسبقها a، والرحلة الجوية في السماء لا في البحر.", errCat: "vocab" }
  ],

  /* ---------- المرحلة 3: بطاقات الشرح (6 بطاقات: 4 شرح + الأخطاء + الخلاصة) ---------- */
  gCards: [
    {
      tEn: "Questions with Did + Short Answers",
      t: "السؤال بـ Did والإجابة القصيرة",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Did + Subject + Base Verb?</span><small>السؤال عن حدث في الماضي</small></h2>' +
        '<p class="en-p" dir="ltr">In Lesson 3 you learned <b>didn\'t</b> + base verb. A past question works the same way: put <b>Did</b> before the subject, and use the <b>base verb</b> (the dictionary form). Follow the same three small steps as for negatives:</p>' +
        '<ul class="spell" dir="ltr">' +
          '<li><b>Step 1</b> · Find the past verb.<span class="s-en">Your friends <b>visited</b> the old market.</span></li>' +
          '<li><b>Step 2</b> · Change it back to the base verb.<span class="s-en">visited → visit</span></li>' +
          '<li><b>Step 3</b> · Put <b>Did</b> before the subject, and end with a question mark.<span class="s-en"><b>Did</b> your friends <b>visit</b> the old market?</span></li>' +
        '</ul>' +
        '<div class="formula">Did + subject + <b>base verb</b> …?</div>' +
        '<div class="xbox"><span class="xtag s" dir="ltr">One form for every subject · صيغة واحدة للجميع</span><p class="xen">Did you win? · Did she win? · Did they win?</p></div>' +
        '<h3 class="bi-h"><span class="en" dir="ltr">Short answers</span><small>الإجابة القصيرة تكرر did لا الفعل</small></h3>' +
        '<div class="tbl"><table><thead><tr><th>Question · السؤال</th><th>Yes · نعم</th><th>No · لا</th></tr></thead><tbody>' +
        '<tr><td>Did you …?</td><td>Yes, I <span class="hs">did</span>.</td><td>No, I <span class="hs">didn\'t</span>.</td></tr>' +
        '<tr><td>Did he / she …?</td><td>Yes, she <span class="hs">did</span>.</td><td>No, he <span class="hs">didn\'t</span>.</td></tr>' +
        '<tr><td>Did they …?</td><td>Yes, they <span class="hs">did</span>.</td><td>No, they <span class="hs">didn\'t</span>.</td></tr></tbody></table></div>' +
        '<div class="tip" dir="ltr"><p><b>No past form after Did · لا صيغة ماضٍ بعد Did:</b> Did already shows the past, with regular and irregular verbs.</p><div class="pairs"><span class="yes">Did they enjoy the trip? · Did they take the train?</span><span class="no">Did they enjoyed the trip? · Did they took the train?</span></div></div>',
      arHtml:
        '<p>في العربية نسأل بـ «هل» أو بنبرة الصوت وحدها («زرتَ السوق القديم؟»)، أما في الإنجليزية فنضع <bdi class="en">Did</bdi> قبل الفاعل، ونعيد الفعل إلى صورته المجردة كما في القاموس: <bdi class="en">visited → Did … visit?</bdi></p>' +
        '<p>و<bdi class="en">Did</bdi> واحدة مع كل الضمائر (<bdi class="en">Did you / she / they …?</bdi>)، والفعل بعدها مجرد دائمًا، منتظمًا كان أو شاذًا: <bdi class="en">Did they take…?</bdi> لا <bdi class="en">Did they took…?</bdi></p>' +
        '<p>والإجابة القصيرة: <bdi class="en">Yes</bdi> أو <bdi class="en">No</bdi> ثم الضمير ثم <bdi class="en">did</bdi> أو <bdi class="en">didn\'t</bdi>، فنكرر المساعد لا الفعل الأساسي.</p>'
    },
    {
      tEn: "Today's 8 Irregular Verbs in Questions",
      t: "أفعال اليوم الثمانية في السؤال",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Today\'s 8 Verbs</span><small>صيغة الماضي في الإثبات، والمجرد بعد Did</small></h2>' +
        '<p class="en-p" dir="ltr">In a positive sentence, use the <b>past form</b>. In a question with <b>Did</b>, go back to the <b>base verb</b>. Learn today\'s eight irregular verbs:</p>' +
        '<div class="tbl"><table><thead><tr><th>Base · المجرد</th><th>Past · الماضي</th><th>Question · السؤال</th></tr></thead><tbody>' +
        '<tr><td>do <small>يفعل</small></td><td><span class="hc">did</span></td><td><span class="hs">Did</span> you <span class="hs">do</span> …?</td></tr>' +
        '<tr><td>hear <small>يسمع</small></td><td><span class="hc">heard</span></td><td><span class="hs">Did</span> you <span class="hs">hear</span> …?</td></tr>' +
        '<tr><td>choose <small>يختار</small></td><td><span class="hc">chose</span></td><td><span class="hs">Did</span> you <span class="hs">choose</span> …?</td></tr>' +
        '<tr><td>spend <small>يقضي / ينفق</small></td><td><span class="hc">spent</span></td><td><span class="hs">Did</span> you <span class="hs">spend</span> …?</td></tr>' +
        '<tr><td>fly <small>يطير / يسافر جوًا</small></td><td><span class="hc">flew</span></td><td><span class="hs">Did</span> you <span class="hs">fly</span> …?</td></tr>' +
        '<tr><td>drive <small>يقود</small></td><td><span class="hc">drove</span></td><td><span class="hs">Did</span> you <span class="hs">drive</span> …?</td></tr>' +
        '<tr><td>meet <small>يقابل</small></td><td><span class="hc">met</span></td><td><span class="hs">Did</span> you <span class="hs">meet</span> …?</td></tr>' +
        '<tr><td>speak <small>يتحدث</small></td><td><span class="hc">spoke</span></td><td><span class="hs">Did</span> you <span class="hs">speak</span> …?</td></tr></tbody></table></div>' +
        '<p class="en-p" dir="ltr"><b>Sound and spelling:</b> heard sounds like <b>bird</b> · chose has one o, but choose has two · chose, drove and spoke have the vowel of <b>road</b> · flew sounds like <b>blue</b> · spent and met end in <b>-t</b>.</p>' +
        '<div class="tip" dir="ltr"><p><b>do can come twice · قد يأتي do مرتين:</b> did is the helper, and do is the main verb.</p><div class="pairs"><span class="yes">What did your sister do after lunch?</span><span class="no">What did your sister did after lunch?</span></div></div>',
      arHtml:
        '<p>في الجملة المثبتة نستعمل صيغة الماضي (<bdi class="en">My aunt spoke to the doctor.</bdi>)، وفي السؤال بـ <bdi class="en">Did</bdi> يعود الفعل إلى صورته المجردة (<bdi class="en">Did your aunt speak to the doctor?</bdi>)، لأن <bdi class="en">Did</bdi> تحمل معنى الماضي.</p>' +
        '<p>واحفظ أفعال اليوم الثمانية: <bdi class="en">do / did</bdi> و<bdi class="en">hear / heard</bdi> (وتُنطق كـ <bdi class="en">bird</bdi>) و<bdi class="en">choose / chose</bdi> (والماضي بحرف o واحد) و<bdi class="en">spend / spent</bdi> و<bdi class="en">fly / flew</bdi> و<bdi class="en">drive / drove</bdi> و<bdi class="en">meet / met</bdi> و<bdi class="en">speak / spoke</bdi>.</p>' +
        '<p>وقد يجتمع <bdi class="en">did</bdi> و<bdi class="en">do</bdi> في سؤال واحد: الأول فعل مساعد، والثاني الفعل الأساسي بمعنى «يفعل».</p>'
    },
    {
      tEn: "Wh- Questions with did",
      t: "أسئلة الاستفهام مع did",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Wh- Word + did + Subject + Base Verb?</span><small>كلمة الاستفهام أولًا ثم ترتيب سؤال Did</small></h2>' +
        '<p class="en-p" dir="ltr">The question word comes <b>first</b>. After it, use the same order as a Did question: <b>did</b> + subject + base verb.</p>' +
        '<div class="formula">Wh- word + <b>did</b> + subject + base verb …?</div>' +
        '<ul class="uses en-uses">' +
          '<li>Where …? · place<span class="xen">Where did your parents have dinner on Friday?</span></li>' +
          '<li>What …? · things<span class="xen">What did your brother buy at the airport?</span></li>' +
          '<li>Who …? · people<span class="xen">Who did your grandmother call last night?</span></li>' +
          '<li>Why …? · reason<span class="xen">Why did you leave the party early?</span></li>' +
          '<li>How long …? · time<span class="xen">How long did they wait for the bus?</span></li>' +
        '</ul>' +
        '<p class="en-p" dir="ltr">In a question with <b>Who … with?</b>, <b>with</b> usually goes at the end: Who did your sister travel with?</p>' +
        '<div class="tip" dir="ltr"><p><b>Don\'t drop did · لا تحذف did:</b></p><div class="pairs"><span class="no">When your cousins arrived?</span><span class="yes">When did your cousins arrive?</span></div></div>',
      arHtml:
        '<p>نضع كلمة الاستفهام في أول السؤال: <bdi class="en">Where</bdi> أين، و<bdi class="en">What</bdi> ماذا، و<bdi class="en">Who</bdi> مَن، و<bdi class="en">Why</bdi> لماذا، و<bdi class="en">How long</bdi> كم من الوقت، ثم نكمل بترتيب سؤال <bdi class="en">Did</bdi>: <bdi class="en">did</bdi> ثم الفاعل ثم الفعل المجرد.</p>' +
        '<p>وفي العربية نقول «مع مَن سافرت أختك؟» فيتقدم حرف الجر، أما في الإنجليزية فتأتي <bdi class="en">with</bdi> غالبًا في آخر السؤال.</p>' +
        '<p>والخطأ الشائع أن نترجم «متى وصل أقاربك؟» حرفيًا فنحذف <bdi class="en">did</bdi>، والصواب أن تأتي <bdi class="en">did</bdi> بعد كلمة الاستفهام، ثم الفاعل، ثم الفعل المجرد.</p>'
    },
    {
      tEn: "Questions with was / were",
      t: "السؤال بـ was / were",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Was / Were + Subject …?</span><small>السؤال مع الصفة والمكان والاسم</small></h2>' +
        '<p class="en-p" dir="ltr">When there is no main verb (go, like, know), only an adjective (<b>hot</b>), a place (<b>at home</b>) or a noun (<b>a teacher</b>), start the question with <b>Was / Were</b>, with no did. A Wh- word can come first: <b>How was …? Where were …?</b></p>' +
        '<div class="sigs">' +
          '<div class="sig s"><h3 dir="ltr">Did + main verb<small class="sig-ar">مع الفعل الأساسي</small></h3><ul><li>Did you swim?</li><li>Where did they eat?</li></ul></div>' +
          '<div class="sig c"><h3 dir="ltr">Was / Were + adjective, place, noun<small class="sig-ar">مع الصفة والمكان والاسم</small></h3><ul><li>Was the sea warm?</li><li>Where were your keys?</li></ul></div>' +
        '</div>' +
        '<div class="tbl"><table><thead><tr><th>Question · السؤال</th><th>Yes · نعم</th><th>No · لا</th></tr></thead><tbody>' +
        '<tr><td>Was it …?</td><td>Yes, it <span class="hc">was</span>.</td><td>No, it <span class="hc">wasn\'t</span>.</td></tr>' +
        '<tr><td>Were you …?</td><td>Yes, I <span class="hc">was</span>.</td><td>No, I <span class="hc">wasn\'t</span>.</td></tr>' +
        '<tr><td>Were they …?</td><td>Yes, they <span class="hc">were</span>.</td><td>No, they <span class="hc">weren\'t</span>.</td></tr></tbody></table></div>' +
        '<div class="tip" dir="ltr"><p><b>Never Did + was · لا تجمع Did وwas:</b></p><div class="pairs"><span class="no">Did the museum was open?</span><span class="yes">Was the museum open?</span></div></div>',
      arHtml:
        '<p>إذا لم يكن في الجملة فعل أساسي، حدثًا كان أو حالة (<bdi class="en">go, like, know</bdi>)، بل صفة (<bdi class="en">hot</bdi>) أو مكان (<bdi class="en">at home</bdi>) أو اسم (<bdi class="en">a teacher</bdi>)، بدأنا السؤال بـ <bdi class="en">Was</bdi> مع المفرد، و<bdi class="en">Were</bdi> مع الجمع ومع <bdi class="en">you</bdi>، بلا <bdi class="en">did</bdi>، ويجوز أن تسبقهما كلمة استفهام: <bdi class="en">How was …?</bdi> و<bdi class="en">Where were …?</bdi></p>' +
        '<p>والإجابة القصيرة تكرر <bdi class="en">was / were</bdi>: <bdi class="en">Yes, it was</bdi> و<bdi class="en">No, they weren\'t</bdi>. وانتبه: إذا سُئلت <bdi class="en">Were you …?</bdi> فأجب بـ <bdi class="en">I was</bdi> أو <bdi class="en">I wasn\'t</bdi>، لأن الضمير صار <bdi class="en">I</bdi>.</p>' +
        '<p>ولا نجمع <bdi class="en">Did</bdi> و<bdi class="en">was</bdi> في سؤال واحد، فـ <bdi class="en">Did the museum was open?</bdi> خطأ، والصواب <bdi class="en">Was the museum open?</bdi></p>'
    },
    {
      tEn: "Common Arab Mistakes",
      t: "أخطاء العرب الشائعة",
      bilingual: true,
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Common Arab Mistakes</span><small>أخطاء يقع فيها كثير من العرب في السؤال بالماضي</small></h2>' +
        '<ul class="mist">' +
          '<li><span class="no">Did you went to the zoo with your cousins?</span><span class="yes">Did you go to the zoo with your cousins?</span><p class="en-m" dir="ltr"><b>Did</b> already shows the past, so the verb after it is the base verb: <b>go</b>.</p><p>بعد <bdi class="en">Did</bdi> يأتي الفعل المجرد: <bdi class="en">go</bdi> لا <bdi class="en">went</bdi>، لأن <bdi class="en">Did</bdi> تحمل معنى الماضي.</p></li>' +
          '<li><span class="no">Were you speak to the manager about the room?</span><span class="yes">Did you speak to the manager about the room?</span><p class="en-m" dir="ltr">A main verb needs <b>Did</b>. <b>Was / Were</b> cannot come before a base verb; it is the same mistake as "I am work".</p><p>الفعل الأساسي يحتاج <bdi class="en">Did</bdi>، ولا تأتي <bdi class="en">Was / Were</bdi> قبل فعل مجرد، وهو الخطأ نفسه في <bdi class="en">I am work</bdi>.</p></li>' +
          '<li><span class="no">Where you spent your summer holiday?</span><span class="yes">Where did you spend your summer holiday?</span><p class="en-m" dir="ltr">There is no helper verb in «أين قضيت إجازتك؟», but an English past question needs <b>did</b> after the question word.</p><p>لا يحتاج السؤال في العربية إلى فعل مساعد، أما في الإنجليزية فلا بد من <bdi class="en">did</bdi> بعد كلمة الاستفهام، ثم الفعل المجرد.</p></li>' +
          '<li><span class="no">Did you understand the taxi driver? No, I don\'t.</span><span class="yes">Did you understand the taxi driver? No, I didn\'t.</span><p class="en-m" dir="ltr">A question about the past needs a past short answer: <b>didn\'t</b>, not don\'t.</p><p>السؤال عن الماضي جوابه القصير في الماضي: <bdi class="en">didn\'t</bdi> لا <bdi class="en">don\'t</bdi>.</p></li>' +
        '</ul>'
    },
    {
      tEn: "Summary",
      t: "الخلاصة",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Quick Summary</span><small>الخلاصة</small></h2>' +
        '<div class="sumc" dir="ltr"><h3>In Three Lines · في ثلاثة أسطر</h3>' +
          '<p><b>Main verbs · الأفعال الأساسية</b><span>Did + subject + base verb? → Yes, I did. / No, she didn\'t. · Wh- word + did + subject + base verb?</span></p>' +
          '<p><b>be · فعل الكون</b><span>Was / Were + subject + adjective, place or noun? → Yes, it was. / No, they weren\'t. · Wh- word + was / were …?</span></p>' +
          '<p><b>Today\'s verbs · أفعال اليوم</b><span>do · hear · choose · spend · fly · drive · meet · speak: the base verb after did</span></p>' +
        '</div>' +
        '<p class="en-p" dir="ltr">Time to practise: 16 exercises with Did, Wh- words, was / were and short answers.</p>',
      arHtml:
        '<p><b>مع الأفعال الأساسية:</b> <bdi class="en">Did</bdi> ثم الفاعل ثم الفعل المجرد، وجواب سؤال نعم أو لا <bdi class="en">Yes, I did</bdi> أو <bdi class="en">No, she didn\'t</bdi>.</p>' +
        '<p><b>مع be:</b> <bdi class="en">Was / Were</bdi> ثم الفاعل ثم الصفة أو المكان أو الاسم، وجواب سؤال نعم أو لا <bdi class="en">Yes, it was</bdi> أو <bdi class="en">No, they weren\'t</bdi>.</p>' +
        '<p><b>أفعال اليوم:</b> <bdi class="en">do, hear, choose, spend, fly, drive, meet, speak</bdi>، وتعود بعد <bdi class="en">did</bdi> إلى صورتها المجردة.</p>' +
        '<p>والآن نتدرّب: 16 تمرينًا موجّهًا بجمل جديدة.</p>'
    }
  ],

  /* ---------- المرحلة 3: التمارين (16 تمرينًا، 4 من كل نمط، بجمل جديدة، وفيها أفعال اليوم الثمانية) ---------- */
  gA: [
    { s: "___ you have fun at your cousin's wedding last night?", opts: ["Did", "Were"], a: 0,
      whyEn: "'have fun' has a base verb (have), and 'last night' is past, so the question needs Did. Were never comes before a base verb.",
      why: "في have fun فعل مجرد (have)، وlast night زمن ماضٍ، فنبدأ السؤال بـ Did، ولا تأتي Were قبل فعل مجرد.", errCat: "be_verb" },
    { s: "Did your sister ___ her friends at the new café?", opts: ["meet", "met"], a: 0,
      whyEn: "After Did, we use the base verb: meet, not met. Did already shows the past.",
      why: "بعد Did يأتي الفعل المجرد meet لا met، لأن Did تدل على الماضي.", errCat: "tense" },
    { s: "How ___ your flight to Kuala Lumpur?", opts: ["did", "was"], a: 1,
      whyEn: "There is no main verb here: we ask for a description of a noun (your flight), so we use be: How was …? 'How did your flight' has no main verb.",
      why: "لا يوجد في السؤال فعل أساسي، بل اسم (your flight) نسأل عن وصفه، فنستعمل be: How was…؟ أما How did your flight فينقصها الفعل الأساسي.", errCat: "be_verb" },
    { s: "Did you ___ anything special for Eid?", opts: ["did", "do"], a: 1,
      whyEn: "Did is the helper, so the main verb do stays in the base form. 'Did you did' has the past twice.",
      why: "Did هي المساعد، فيبقى الفعل الأساسي do مجردًا، أما Did you did ففيها الماضي مرتين.", errCat: "tense" }
  ],

  gB: [
    { s: "Did your uncle drove to Dammam last weekend?", ok: false, fix: "Did your uncle drive to Dammam last weekend?",
      whyEn: "After Did, use the base verb: drive, not drove. The past form drove is only for positive sentences.",
      why: "بعد Did يأتي الفعل المجرد drive لا drove، وصيغة الماضي drove للجملة المثبتة وحدها.", errCat: "tense" },
    { s: "How you heard about the new mall?", ok: false, fix: "How did you hear about the new mall?",
      whyEn: "A past Wh- question needs did after the question word, and then the base verb: How did you hear about…?",
      why: "سؤال الاستفهام في الماضي يحتاج did بعد كلمة الاستفهام، ثم الفعل المجرد: How did you hear about…؟", errCat: "word_order" },
    { s: "Did you spend a lot of money in Kuwait? — No, I didn't.", ok: true,
      whyEn: "Correct: Did + you + the base verb (spend), and the short answer repeats did: No, I didn't.",
      why: "صحيحة: Did ثم you ثم الفعل المجرد spend، والإجابة القصيرة تكرر did: No, I didn't.", errCat: "tense" },
    { s: "Was your mother choose the restaurant for the party?", ok: false, fix: "Did your mother choose the restaurant for the party?",
      whyEn: "choose is a main verb, so the question needs Did. Was never comes before a base verb.",
      why: "choose فعل أساسي، فيحتاج السؤال إلى Did، ولا تأتي Was قبل فعل مجرد.", errCat: "be_verb" }
  ],

  gC: [
    { pre: "", verb: "your parents / fly", post: "to Morocco last summer?", ans: ["Did your parents fly"],
      whyEn: "'last summer' is past, and this is a yes/no question, so we start with Did + the subject (your parents) + the base verb fly (not flew).",
      why: "last summer تدل على الماضي، والسؤال سؤال نعم أو لا، فنبدأ بـ Did ثم الفاعل your parents ثم الفعل المجرد fly لا flew.", errCat: "word_order" },
    { pre: "When", verb: "you / book", post: "the tickets for the football match?", ans: ["did you book"],
      whyEn: "Wh- word + did + subject + base verb: When did you book…? (not 'When you booked…?').",
      why: "كلمة الاستفهام ثم did ثم الفاعل ثم الفعل المجرد: When did you book…؟ لا When you booked…؟", errCat: "word_order" },
    { pre: "Did your grandparents like the hotel in Taif? — Yes, they", verb: "do", post: ". They loved the big garden.", ans: ["did"],
      whyEn: "The question starts with Did, so the short answer repeats did: Yes, they did (not 'do', because the question is about the past).",
      why: "السؤال يبدأ بـ Did، فالإجابة القصيرة تكرر did: Yes, they did، لا do لأن السؤال عن الماضي.", errCat: "tense" },
    { pre: "Were the shops open on Eid morning? — No, they", verb: "be / not", post: ". They opened after lunch.", ans: ["weren't", "were not"],
      whyEn: "The question starts with Were (be + the adjective 'open'), so the short answer uses were: No, they weren't, not didn't.",
      why: "السؤال يبدأ بـ Were لأن open صفة، فالإجابة القصيرة No, they weren't لا didn't.", errCat: "be_verb" }
  ],

  gD: [
    { chips: ["did", "Which language", "in Japan?", "you speak"], ans: "Which language did you speak in Japan?",
      whyEn: "Wh- word (Which language) + did + subject (you) + base verb (speak) + place (in Japan).",
      why: "كلمة الاستفهام Which language ثم did ثم الفاعل you ثم الفعل المجرد speak ثم المكان in Japan.", errCat: "word_order" },
    { chips: ["your brother", "Why did", "that university?", "choose"], ans: "Why did your brother choose that university?",
      whyEn: "Why + did + subject (your brother) + base verb (choose) + object (that university).",
      why: "Why ثم did ثم الفاعل your brother ثم الفعل المجرد choose ثم المفعول به that university.", errCat: "word_order" },
    { chips: ["cheap", "Was", "or expensive?", "the hotel food"], ans: "Was the hotel food cheap or expensive?",
      whyEn: "There is no main verb, only adjectives (cheap, expensive), so the question starts with Was + subject (the hotel food) + adjective.",
      why: "لا يوجد فعل أساسي بل صفتان (cheap وexpensive)، فيبدأ السؤال بـ Was ثم الفاعل the hotel food ثم الصفة.", errCat: "word_order" },
    { chips: ["go on holiday", "Where did", "last year?", "your grandparents"], ans: "Where did your grandparents go on holiday last year?",
      whyEn: "Where + did + subject (your grandparents) + base verb (go on holiday) + time (last year) at the end.",
      why: "Where ثم did ثم الفاعل your grandparents ثم الفعل المجرد go on holiday ثم الزمن last year في آخر السؤال.", errCat: "word_order" }
  ],

  /* ---------- المرحلة 4: الاستماع على ثلاث مراحل (مقطع حقيقي من ELLLO، ونصه المكتوب في صفحة المصدر) ---------- */
  listening: {
    title: "Traveling to Taiwan",
    sourceTag: "ELLLO · Real recording · تسجيل حقيقي",
    sourceMeta: "ELLLO Views #1257 · Beginner (A2)",
    speakers: "Hana (UK) & Daniel (Chile)",
    url: "https://elllo.org/english/1251/1257-Daniel_Hana-Vacations.htm",
    audioWord: "vacation",
    targetSeconds: 125,
    introEn: "Do you remember Hana from the UK and Daniel from Chile from Lesson 2? Now they talk about a trip to Taiwan. Listen once, without the transcript, and find the main idea.",
    intro: "أتذكر هانا من بريطانيا ودانيال من تشيلي في الدرس الثاني؟ هما الآن يتحدثان عن رحلة إلى تايوان، فاستمع مرة واحدة بلا نص مكتوب، وحدّد الفكرة العامة.",
    predict: {
      qEn: "Stage 1 Main-Idea Question: What is the conversation mainly about?",
      q: "سؤال الفكرة العامة: عمّ يدور الحوار أساسًا؟",
      optsEn: [
        "Hana tells Daniel about her own trip to Taiwan.",
        "Hana asks Daniel about his trip to Taiwan, and he answers her questions.",
        "Hana and Daniel plan a trip to Taiwan together."
      ],
      opts: [
        "هانا تحكي لدانيال عن رحلتها هي إلى تايوان",
        "هانا تسأل دانيال عن رحلته إلى تايوان، وهو يجيب عن أسئلتها",
        "هانا ودانيال يخططان معًا لرحلة إلى تايوان"
      ],
      a: 1,
      revealEn: "Daniel is the traveller: Hana asks the questions, and he answers them. (The short description on the source page says that Hana travelled, but the conversation shows that it was Daniel.) Now listen again for the details.",
      reveal: "دانيال هو المسافر: هانا تسأل وهو يجيب. (يقول الوصف القصير في صفحة المصدر إن هانا هي التي سافرت، والحوار نفسه يبيّن أنه دانيال.) والآن استمع مرة أخرى للتفاصيل."
    },
    insight: {
      titleEn: "Listen for Hana's Questions",
      titleAr: "استمع لأسئلة هانا",
      l1En: "Hana asks Daniel about his trip with Wh- questions + did. Here are example questions we wrote about the trip, with answers:",
      ex1: "Where did Daniel spend his vacation? In Taiwan. · Did he travel alone? No, he didn't. · Did he try the local food? Yes, he did.",
      l2En: "With be, a question starts with Was / Were (or a Wh- word + was / were), and the short answer repeats was / were:",
      ex2: "Was Taiwan interesting for Daniel? Yes, it was. · Was the food cheap? Yes, it was. · Were the places beautiful? Yes, they were.",
      arHtml: "<p><b>انتبه:</b> أسئلة هانا تبدأ بكلمة استفهام (Where وWhat وWho وWhy وHow long) ثم did، وتسأل عن الطعام بـ How was. أما أسئلة Did والإجابات القصيرة (Yes, he did. / No, he didn't.) فقد تدرّبت عليها في التمارين.</p><p>ويقول الوصف القصير للمقطع في صفحة المصدر إن هانا هي التي سافرت، والصواب من الحوار نفسه أن دانيال هو المسافر.</p><p>وهذه أمثلة كتبناها عن المقطع، وليست كلام المتحدثَين بنصه.</p>"
    },
    questions: [
      { q: "What did Daniel see a lot of in Taiwan?", opts: ["Big shopping malls and new hotels", "Culture and history", "Football matches and concerts"], a: 1,
        whyEn: "Near the beginning, Hana asks what he did there. Daniel answers that Taiwan showed him lots of culture and history.",
        why: "قرب البداية تسأله هانا عمّا فعله هناك، فيقول دانيال إنه رأى في تايوان كثيرًا من الثقافة والتاريخ.", errCat: "reading" },
      { tf: true, q: "Daniel says Taiwan's nature is very beautiful.", a: true,
        whyEn: "True. Near the beginning, Daniel talks about the beautiful places he visited, and he says the nature is very beautiful.",
        why: "صحيح؛ قرب البداية يتحدث دانيال عن الأماكن الجميلة التي زارها، ويقول إن طبيعة تايوان جميلة جدًا.", errCat: "reading" },
      { q: "What does Daniel say about the food in Taiwan?", opts: ["It was good, but very expensive.", "It was too spicy for him.", "It was delicious, and it was cheap too."], a: 2,
        whyEn: "In the middle, Hana asks about the food. Daniel loved its taste, and he adds that it cost very little.",
        why: "في وسط المقطع تسأله هانا عن الطعام، فيثني دانيال على طعمه، ويضيف أن ثمنه كان قليلًا جدًا.", errCat: "reading" },
      { q: "Who did Daniel travel with?", opts: ["A friend from Taiwan", "His brother from Chile", "Hana and her family"], a: 0,
        whyEn: "In the middle, Hana asks who went with him. Daniel says he went with a friend from Taiwan.",
        why: "في وسط المقطع تسأله هانا عمّن رافقه، فيقول دانيال إنه سافر مع صديق من تايوان.", errCat: "reading" },
      { tf: true, q: "Daniel can speak Mandarin, so he didn't need any help with the food.", a: false,
        whyEn: "False. In the middle, Daniel says he can't speak Mandarin, so his Taiwanese friend was a big help with the food.",
        why: "خطأ؛ في وسط المقطع يقول دانيال إنه لا يتكلم الصينية (الماندرين)، فكان صديقه التايواني عونًا كبيرًا له في أمر الطعام.", errCat: "reading" },
      { q: "How much time did Daniel spend in Taiwan?", opts: ["About three days", "About eight days", "About eight weeks"], a: 1,
        whyEn: "Just after the middle, Hana asks about the length of the trip. Daniel says it was about eight days, and that this gave him enough time for a short tour of the whole island.",
        why: "بعد منتصف المقطع بقليل تسأله هانا عن مدة الرحلة، فيقول دانيال إنها كانت نحو ثمانية أيام، وإنها كفته ليرى الجزيرة كلها في جولة سريعة.", errCat: "reading" },
      { q: "Where did Daniel start his trip, and where did he go after that?", opts: ["He stayed in Taipei for the whole trip.", "He started in the south and finished in Taipei.", "He started in Taipei, in the north, and went to cities in the south."], a: 2,
        whyEn: "Near the end, Daniel describes his route: he began in Taipei, in the north of the island, and then travelled down to the south.",
        why: "قرب آخر المقطع يصف دانيال طريقه: بدأ من تايبيه في شمال الجزيرة، ثم سافر نزولًا إلى جنوبها.", errCat: "reading" },
      { q: "Why did Daniel choose Taiwan for his trip?", opts: ["He wanted to learn about Asian cultures and how they are different.", "His friend invited him to a wedding there.", "The flights to Taiwan were very cheap."], a: 0,
        whyEn: "At the end, Hana asks why he went. Daniel explains that Asia and its cultures interest him a lot: life there is very different from life in his own part of the world, and he wants to learn about those differences.",
        why: "في آخر المقطع تسأله هانا عن سبب رحلته، فيوضح دانيال أن آسيا وثقافاتها تشغله كثيرًا، فالحياة فيها مختلفة جدًا عن الحياة في بلاده، ويريد أن يتعرّف على هذه الفروق.", errCat: "reading" }
    ]
  },

  /* ---------- المرحلة 5: الكتابة (حوار عن رحلة: أسئلة في الماضي وإجابات قصيرة) ---------- */
  writing: {
    taskEn: "Interview a friend or a family member about a trip in the past (or interview yourself). Write at least 4 separate sentences: at least 2 questions (one Did …? question and one Wh- question such as Where / What / Who / Why / How long did …? or How was …?) and their answers, with at least 1 short answer (Yes, he did. / No, she didn't. / Yes, it was.). Use at least 2 words from today's lesson, and always write 'I' with a capital letter.",
    task: "حاور صديقًا أو أحد أفراد أسرتك عن رحلة مضت (أو حاور نفسك)، واكتب 4 جمل منفصلة على الأقل: سؤالين على الأقل، أحدهما يبدأ بـ Did والآخر بكلمة استفهام (Where أو What أو Who أو Why أو How long مع did، أو How was)، مع إجابتيهما، وفيها إجابة قصيرة واحدة على الأقل (Yes, he did. / No, she didn't. / Yes, it was.). واستعمل كلمتين على الأقل من كلمات الدرس، واكتب الضمير I كبيرًا دائمًا.",
    placeholder: "Where did your … go?\nDid he … ?\nYes, he did. …",
    checks: [
      { k: "sentences", tEn: "At least 4 separate sentences (questions end with ?, answers with .), and 'I' is always a capital letter", t: "4 جمل منفصلة على الأقل (السؤال ينتهي بعلامة استفهام والجواب بنقطة)، والضمير I كبير دائمًا",
        ok: function(a, text){ return a.sentences >= 4 && !/(?:^|[^A-Za-z])i(?![A-Za-z])/.test(String(text || '')); } },
      { k: "questions", tEn: "2 questions in the past: one Did …? question and one Wh- question (Where / What / Who / Why / How long did …? or How was …?)", t: "سؤالان في الماضي: سؤال يبدأ بـ Did، وسؤال بكلمة استفهام (Where / What / Who / Why / How long مع did، أو How was)", ex: "Did you fly there? · Where did you stay? · How was the hotel?",
        ok: function(a, text){ var qs = wQuestions(text);
          return qs.some(function(q){ return W_DID_Q.test(q); }) && qs.some(function(q){ return W_WH_Q.test(q); }); } },
      { k: "short", tEn: "At least 1 short answer (Yes, I did. · No, she didn't. · Yes, it was. · No, they weren't.)", t: "إجابة قصيرة واحدة على الأقل (Yes, I did. · No, she didn't. · Yes, it was. · No, they weren't.)", ex: "Yes, he did. · No, it wasn't.",
        ok: function(a, text){ return W_SHORT.test(wNorm(text)); } },
      { k: "vocab", tEn: "At least 2 words or phrases from today's lesson", t: "كلمتان أو عبارتان على الأقل من كلمات الدرس", ex: "island · nature · cheap · choose / chose · hear about · vacation · report a crime",
        ok: function(a, text){ var s = wNorm(text); return W_VOCAB.filter(function(r){ return r.test(s); }).length >= 2; } }
    ],
    modelMarked: "<<s:Which country did>> your cousin Majed <<s:visit>> last spring? He went to Malaysia with two friends from university. <<s:Did>> he <<s:fly>> there from Riyadh? <<s:Yes, he did.>> <<s:How long did>> he <<s:stay>>? He stayed for ten days, and he spent three of them on a small {island}. <<c:Were>> the hotels expensive? <<c:No, they weren't.>> The food was {cheap} too. <<s:Why did>> he <<s:{choose}>> Malaysia? He loves {nature}, and he {heard about|hear about} its green mountains from a friend.",
    model: "Which country did your cousin Majed visit last spring? He went to Malaysia with two friends from university. Did he fly there from Riyadh? Yes, he did. How long did he stay? He stayed for ten days, and he spent three of them on a small island. Were the hotels expensive? No, they weren't. The food was cheap too. Why did he choose Malaysia? He loves nature, and he heard about its green mountains from a friend.",
    legendEn: "Light blue = questions with did and their short answers · Terracotta = questions with was / were and their short answers",
    legendAr: "الأزرق الفاتح لأسئلة did وإجاباتها القصيرة، والطوبي لأسئلة was / were وإجاباتها القصيرة.",
    acceptExamples: [
      "Where did you go last summer? I went to Bali with my brother. Did you fly there? Yes, I did. It was a long flight. Was the island beautiful? Yes, it was, and the food was cheap.",
      "My father traveled to Egypt last year. Did he drive there? No, he didn’t. He flew from Jeddah. Why did he choose Egypt? He heard about the old museums from his friend. Did he like his vacation? Yes, he did.",
      "Where did you spend your vacation, Omar? I spent it in Abha with my family. Did you stay in a hotel? No, I did not. We stayed with my uncle. Were the restaurants expensive? No, they were not, and the fruit was very cheap.",
      "Hi Omar, did you enjoy your vacation? Yes, I did and I want to go again. Where did you stay? We stayed on a small island.",
      "Did your sister fly to Bali? Yes, she did but it was a long flight. How was the island? It was cheap and the nature was beautiful."
    ]
  },

  /* ---------- «اسأل المعلم»: أسئلة مقترحة عن قاعدة الدرس ---------- */
  askChips: [
    "لماذا نقول Did you go ولا نقول Did you went؟",
    "متى أبدأ السؤال بـ Did ومتى أبدأ بـ Was أو Were؟",
    "كيف أجيب إجابة قصيرة عن سؤال يبدأ بـ Did؟",
    "أين أضع did في سؤال يبدأ بـ Where أو Why؟"
  ],

  /* ---------- المرحلة 6: الاختبار القصير (10 أسئلة: 7 قواعد و2 مفردات وسؤال قانوني · النجاح 8 من 10) ---------- */
  quiz: [
    { s: "___ your father drive you to school when you were a child?", opts: ["Did", "Were", "Do"], a: 0, tag: "Grammar · قواعد",
      whyEn: "'when you were a child' shows the past, and 'drive' is a base verb, so we need Did. Were never comes before a base verb, and Do is for the present (and 'your father' would need does).",
      why: "عبارة when you were a child تدل على الماضي، وdrive فعل مجرد، فنحتاج Did؛ ولا تأتي Were قبل فعل مجرد، وDo للمضارع (والفاعل your father يحتاج does).", errCat: "be_verb" },
    { s: "Which question is correct?", opts: ["Did you flew to Istanbul with your friends?", "Were you fly to Istanbul with your friends?", "Did you fly to Istanbul with your friends?"], a: 2, tag: "Grammar · قواعد",
      whyEn: "After Did comes the base verb: fly, not flew. 'Were you fly' is wrong because Were never comes before a base verb.",
      why: "بعد Did يأتي الفعل المجرد fly لا flew، وWere you fly خطأ لأن Were لا تأتي قبل فعل مجرد.", errCat: "tense" },
    { s: "Did the waiter speak Arabic? — No, he ___. He spoke English with us.", opts: ["wasn't", "didn't", "doesn't"], a: 1, tag: "Grammar · قواعد",
      whyEn: "The question starts with Did, so the short answer uses did: No, he didn't. 'wasn't' is for Was questions, and 'doesn't' is the present.",
      why: "السؤال يبدأ بـ Did، فالإجابة القصيرة بـ did: No, he didn't؛ أما wasn't فلأسئلة Was، وdoesn't للمضارع.", errCat: "tense" },
    { s: "How much money ___ on gifts in Dubai?", opts: ["you spent", "did you spent", "did you spend"], a: 2, tag: "Grammar · قواعد",
      whyEn: "How much money + did + subject + base verb: did you spend. We can't drop did, and after did the verb has no past form (not 'spent').",
      why: "How much money ثم did ثم الفاعل ثم الفعل المجرد: did you spend، فلا نحذف did، ولا يأتي بعدها الفعل بصيغة الماضي spent.", errCat: "word_order" },
    { s: "___ the trains in Korea fast and comfortable?", opts: ["Did", "Was", "Were"], a: 2, tag: "Grammar · قواعد",
      whyEn: "There is no main verb, only adjectives (fast, comfortable), so we use be. 'the trains' is plural, so the question starts with Were.",
      why: "لا يوجد فعل أساسي بل صفتان (fast وcomfortable)، فنستعمل be، والفاعل the trains جمع، فنبدأ بـ Were.", errCat: "agreement" },
    { s: "Where ___ your cousins do their shopping last week?", opts: ["were", "did", "do"], a: 1, tag: "Grammar · قواعد",
      whyEn: "'last week' is past, and do is the main verb here, so the helper is did: Where did your cousins do their shopping? 'were' never comes before a base verb, and 'do' is the present.",
      why: "last week زمن ماضٍ، وdo هنا الفعل الأساسي، فالمساعد did: Where did your cousins do their shopping؟ ولا تأتي were قبل فعل مجرد، وdo للمضارع.", errCat: "tense" },
    { s: "Did you meet any famous players at the stadium? — Yes, I ___.", opts: ["met", "was", "did"], a: 2, tag: "Grammar · قواعد",
      whyEn: "A Did question gets a short answer with did: Yes, I did. We don't repeat the main verb (met) in a short answer, and 'was' is for Was / Were questions.",
      why: "سؤال Did جوابه القصير بـ did: Yes, I did، فلا نكرر الفعل الأساسي met في الإجابة القصيرة، وwas لأسئلة Was / Were.", errCat: "tense" },
    { s: "There were two hotels near the beach, and we ___ the cheaper one.", opts: ["chose", "heard", "reported"], a: 0, tag: "Vocabulary · مفردات",
      whyEn: "'choose' means take one from two or more, and its past is chose (one o). We don't 'hear' or 'report' a hotel when we pick one.",
      why: "choose تعني أن تأخذ واحدًا من اثنين أو أكثر، وماضيها chose بحرف o واحد، ولا معنى لـ heard ولا reported مع اختيار فندق.", errCat: "vocab" },
    { s: "My parents ___ the island on a TV programme, and they want to visit it next year.", opts: ["spent", "heard about", "flew"], a: 1, tag: "Vocabulary · مفردات",
      whyEn: "'hear about' means get news about something; the TV programme gave them news about the island (past: heard about). We can't 'spend' or 'fly' an island.",
      why: "hear about تعني أن يبلغك خبر الشيء، وقد عرّفهم البرنامج التلفزيوني بالجزيرة (وماضيها heard about)، ولا يصح spent ولا flew مع الجزيرة هنا.", errCat: "vocab" },
    { s: "Someone took my brother's wallet in the market, so he went to the police station to ___.", opts: ["report a crime", "book a room", "pay a fine"], a: 0, tag: "Legal Track · المسار القانوني",
      whyEn: "Taking someone's wallet is a crime, so he went to tell the police: he reported a crime. He did nothing wrong, so he has no fine to pay, and you don't book a room at a police station.",
      why: "أخذ محفظة شخص جريمة، فذهب صاحب المحفظة ليخبر الشرطة: report a crime. وهو لم يخالف شيئًا فلا غرامة عليه، ولا تُحجز الغرف في مركز الشرطة.", errCat: "vocab" }
  ]
};
})();
