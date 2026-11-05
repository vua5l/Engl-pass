/* ===== أسبوع التثبيت · الدرس 4: Twenty Years Abroad — اختيار الزمن الصحيح بين الأزمنة الأربعة (6 مراحل · درس استماع) ===== */
(function(){
/* فحوص الكتابة: تُطرح صيغ المستمر أولًا، فلا يُحسب am studying مضارعًا بسيطًا ولا was studying ماضيًا بسيطًا */
var ADV = "(?:(?:still|all|both|just|really|also|always|often|usually|sometimes|never|currently|now|not)\\s+){0,2}";
var NOT_V = "(?!(?:morning|evening|nothing|something|anything|everything|spring|during|wedding|frightening|interesting|exciting|boring|amazing|surprising|tiring)\\b)";
var ING = ADV + NOT_V + "[a-z]+ing\\b";
var WHO = "(?:I|you|he|she|it|we|they|(?:the|my|our|his|her|their)\\s+[a-z]+)";
var PRES_C = new RegExp("(?:\\b(?:am|is|are)(?:n't)?|'m|'re|\\b[a-z]+'s)\\s+" + ING + "|\\b(?:am|is|are)(?:n't)?\\s+" + WHO + "\\s+" + ING, "gi");
var PAST_C = new RegExp("\\b(?:was|were)(?:n't)?\\s+" + ING + "|\\b(?:was|were)(?:n't)?\\s+" + WHO + "\\s+" + ING, "gi");
var PAST_FORMS = "cut|put|set|let|cost|hit|hurt|shut|read|came|became|ran|had|made|said|paid|told|sold|found|thought|bought|brought|taught|caught|felt|kept|slept|left|met|meant|sent|spent|built|lent|lost|won|sat|stood|understood|heard|held|went|saw|took|gave|knew|wrote|spoke|broke|chose|forgot|drove|ate|fell|began|got|rode|woke|rang|drank|flew|wore|grew|sang|swam|threw|drew|blew|learnt|dreamt|burnt|stole|fought|shook|hung|hid|stuck|tore|did|was|were|could";
var PAST_S = new RegExp("\\b(?:" + PAST_FORMS + "|didn't|wasn't|weren't|couldn't)\\b|\\b(?!(?:need|feed|speed|seed|bed|red|shed|hundred|indeed)\\b)[a-z]{2,}ed\\b", "i");
var PRES_BE = /\b(?:am|is|are|isn't|aren't|do|does|don't|doesn't)\b|'m\b|'re\b|\b(?:it|he|she|that|there|this|what)'s\b/i;
var PRES_I = new RegExp("\\b(?:I|we|they)\\s+(?:(?:usually|often|always|sometimes|never|still|also|really|now)\\s+)?(?!(?:" + PAST_FORMS + "|didn't|wasn't|weren't|couldn't|would|should|might|will)\\b)(?!(?!need\\b)[a-z]+ed\\b)[a-z]+\\b", "i");
var PRES_3 = /\b(?:lives|works|studies|teaches|goes|has|wants|needs|likes|loves|knows|helps|gets|comes|takes|makes|says|thinks|misses|stays|returns|visits|writes|reads|speaks|drives|walks|plays|cooks|sells|prefers|understands|believes|enjoys|travels|sleeps|wakes|eats|drinks|buys|runs|starts|finishes|leaves|uses|means|costs|feels|looks|remembers|watches|opens|closes|cleans|wears|pays|sends|calls|brings|tells|gives|sits|stands|meets|swims|sings|draws|owns|tries|flies|hopes|plans|sees|hears)\b/i;
var BASE_V = "live|work|study|teach|go|have|want|need|like|love|know|help|get|come|take|make|say|think|miss|stay|return|visit|write|read|speak|drive|walk|play|cook|sell|prefer|understand|believe|enjoy|travel|sleep|wake|eat|drink|buy|run|start|finish|leave|use|mean|cost|feel|look|remember|watch|open|close|clean|wear|pay|send|call|bring|tell|give|sit|stand|meet|swim|sing|draw|own|try|fly|hope|plan|see|hear";
var PRES_PL = new RegExp("\\b(?:you|people|and\\s+(?:my\\s+|our\\s+)?[a-z]+|(?:my|our|his|her|their|the|these|those|many|some|most|all)\\s+(?:[a-z]+\\s+)?[a-z]+s)\\s+(?:(?:usually|often|always|sometimes|never|still|also|really|now)\\s+)?(?:" + BASE_V + ")\\b", "i");
function plain(text){ return String(text || '').replace(/[‘’]/g, "'"); }
function noCont(text){ return plain(text).replace(PRES_C, ' . ').replace(PAST_C, ' . '); }
function has(re, s){ re.lastIndex = 0; return re.test(s); }

LESSONS.u103l4 = {
  id: "u103l4",
  unit: 103,
  n: 4,
  mode: "listening",
  en: "Twenty Years Abroad",
  ar: "اختيار الزمن الصحيح بين الأزمنة الأربعة",
  subEn: "Review: Choosing the Right Tense",
  canDoEn: "I can choose the right tense with two questions: is it present or past, and is it going on now, these days or at that moment?",
  canDoAr: "أقدر أن أختار الزمن الصحيح بسؤالين: أهو في الحاضر أم في الماضي؟ وهل هو جارٍ الآن أو هذه الأيام أو في تلك اللحظة؟",
  descEn: "I can choose between the present simple, the present continuous, the past simple and the past continuous, move from my past to my life now, and follow a real talk about life in three countries.",
  descAr: "أقدر أن أختار بين المضارع البسيط والمضارع المستمر والماضي البسيط والماضي المستمر، وأنتقل من ماضيّ إلى حياتي الآن، وأتابع حديثًا حقيقيًا عن الحياة في ثلاثة بلدان.",
  goals: [
    { en: "I can ask two questions before I choose a tense: present or past, and going on or not.", ar: "أقدر أن أسأل نفسي سؤالين قبل أن أختار الزمن: أهو في الحاضر أم في الماضي؟ وهل هو جارٍ أم لا؟" },
    { en: "I can use the other action in a sentence to choose between the past simple and the past continuous.", ar: "أقدر أن أستعمل الحدث الآخر في الجملة لأختار بين الماضي البسيط والماضي المستمر." },
    { en: "I can keep state verbs simple, and move from the past to the present when I talk about my life.", ar: "أقدر أن أُبقي الأفعال التي لا تأخذ ing في البسيط، وأنتقل من الماضي إلى الحاضر حين أتكلم عن حياتي." },
    { en: "I can follow a real talk about life in different countries, and write at least 6 sentences about my life before and now.", ar: "أقدر أن أتابع حديثًا حقيقيًا عن الحياة في بلدان مختلفة، وأكتب 6 جمل على الأقل عن حياتي قبلُ والآن." }
  ],
  intro: {
    recall: {
      dEn: "Bring back 4 words and 1 legal phrase from Units 1, 2 and 3 by typing them from memory.",
      d: "استرجع 4 كلمات وعبارة قانونية من الوحدات 1 و2 و3 كتابةً من ذاكرتك.",
      items: [
        ["review", "5 active recall items from Units 1–3", "5 عناصر استرجاع نشط من الوحدات 1 إلى 3"],
        ["pen", "Type from memory to lock in spelling", "كتابة من الذاكرة لتثبيت الإملاء"],
        ["spark", "Includes the legal phrase 'against the law'", "تشمل العبارة القانونية against the law"]
      ]
    },
    vocab: {
      dEn: "Words coming back: 6 words you already know about life abroad, plus the legal phrase 'apply for a visa'. There are no new words this week.",
      d: "كلمات عائدة: 6 كلمات تعرفها عن الحياة في الخارج، مع العبارة القانونية apply for a visa. فلا كلمات جديدة في هذا الأسبوع.",
      items: [
        ["cards", "7 returning flashcards (6 words + 'apply for a visa') with Oxford links and human audio", "7 بطاقات عائدة (6 كلمات + apply for a visa) مع رابط Oxford ونطق بشري"],
        ["review", "Randomized 2-round matching game", "لعبة توصيل عشوائية من جولتين"],
        ["quiz", "8 context sentences: choose the right word", "8 جمل سياقية: اختر الكلمة المناسبة"]
      ]
    },
    grammar: {
      dEn: "The goal of the week: choose the right tense by yourself. Two questions, time words as clues, state verbs, and the move from the past to the present.",
      d: "غاية الأسبوع: أن تختار الزمن الصحيح وحدك، بسؤالين، وبكلمات الوقت قرائن، وبالأفعال التي لا تأخذ ing، وبالانتقال من الماضي إلى الحاضر.",
      items: [
        ["book", "6 short review cards (English first, Arabic on tap)", "6 بطاقات مراجعة قصيرة (الإنجليزي أولًا، والعربي عند الطلب)"],
        ["quiz", "16 guided exercises on all four tenses (4 of each type), one per screen", "16 تمرينًا موجّهًا على الأزمنة الأربعة (4 من كل نمط)، سؤال في كل شاشة"]
      ]
    },
    reading: {
      dEn: "3-Stage Listening (real recording): Meg asks Todd about his years in other countries.",
      d: "استماع على 3 مراحل لتسجيل حقيقي: تسأل ميغ تود عن سنواته في بلدان أخرى.",
      items: [
        ["speaker", "Stage 1: Listen for the main idea without reading the transcript", "المرحلة 1: استماع أول للفكرة العامة بدون النص المكتوب"],
        ["quiz", "Stage 2: Listen again and answer 8 detail questions", "المرحلة 2: استماع ثانٍ للإجابة عن 8 أسئلة تفاصيل"],
        ["mail", "Stage 3: Transcript on the source page & Shadowing from 1:58 to 3:26", "المرحلة 3: النص المكتوب في صفحة المصدر، مع الترديد من 1:58 إلى 3:26"]
      ]
    },
    writing: {
      dEn: "Write at least 6 separate sentences about your life before and now, with all four tenses.",
      d: "اكتب 6 جمل منفصلة على الأقل عن حياتك قبلُ والآن، بالأزمنة الأربعة كلها.",
      items: [
        ["pen", "At least 6 separate sentences with periods (.)", "6 جمل منفصلة على الأقل تنتهي كل منها بنقطة"],
        ["spark", "Instant check: both present tenses, both past tenses and 2 lesson words", "فحص فوري: زمنا الحاضر، وزمنا الماضي، وكلمتان من الدرس"]
      ]
    },
    quiz: {
      dEn: "10 shuffled questions on choosing the tense, the returning words and the legal phrase (80% to pass), plus Lesson Error Analysis.",
      d: "اختبار قصير من 10 أسئلة في اختيار الزمن والكلمات العائدة والعبارة القانونية (النجاح من 80%)، يليه تحليل شامل لأخطاء الدرس.",
      items: [
        ["quiz", "10 questions (80% passing score)", "10 أسئلة متنوعة (النجاح من 80%)"],
        ["review", "Structured Error Analysis by category", "تحليل أخطاء الدرس وأسبابها حسب الفئة"]
      ]
    }
  },
  recall: [
    {
      id: "rc-0",
      promptAr: "اسم من الوحدة الأولى: هدية، أي شيء تعطيه لشخص في مناسبة",
      promptEn: "Noun from Unit 1: something nice that you give to a person on a special day",
      sentPre: "I am looking for a small",
      sentPost: "for my mother's birthday.",
      ans: ["gift"],
      hint: "g _ _ t (4 letters)",
      spellNoteEn: "Spelled g-i-f-t, four letters. The g sounds hard, like the g in go.",
      spellNote: "تُكتب g-i-f-t في أربعة أحرف، وحرف g فيها مثل g في go.",
      errCat: "spelling"
    },
    {
      id: "rc-1",
      promptAr: "فعل من الوحدة الثانية: يصل إلى مكان في آخر الرحلة",
      promptEn: "Verb from Unit 2: to reach a place at the end of a trip",
      sentPre: "Our train should",
      sentPost: "in Dammam at six o'clock.",
      ans: ["arrive"],
      hint: "a _ _ _ _ e (6 letters)",
      spellNoteEn: "Spelled a-r-r-i-v-e, with a double r and a final e. The past is arrived, and -ing gives arriving.",
      spellNote: "تُكتب a-r-r-i-v-e بحرف r مضاعف وe في آخرها، وماضيها arrived، ومع ing تصير arriving.",
      errCat: "spelling"
    },
    {
      id: "rc-2",
      promptAr: "صفة من الوحدة الثانية: قديم جدًّا، عمره مئات السنين أو آلافها",
      promptEn: "Adjective from Unit 2: very, very old, from hundreds or thousands of years ago",
      sentPre: "The workers found an",
      sentPost: "wall under the new road.",
      ans: ["ancient"],
      hint: "a _ _ _ _ _ t (7 letters)",
      spellNoteEn: "Spelled a-n-c-i-e-n-t. The c sounds like sh, but we write it with a c.",
      spellNote: "تُكتب a-n-c-i-e-n-t، وحرف c فيها يُنطق «ش» ويُكتب c.",
      errCat: "spelling"
    },
    {
      id: "rc-3",
      promptAr: "فعل من الوحدة الثالثة: يكون أول من يصنع شيئًا جديدًا",
      promptEn: "Verb from Unit 3: to be the first person who makes a new thing",
      sentPre: "Two young engineers at our college want to",
      sentPost: "a small machine that cleans the air.",
      ans: ["invent"],
      hint: "i _ _ _ _ t (6 letters)",
      spellNoteEn: "Spelled i-n-v-e-n-t, and it ends in -ent. The past is invented.",
      spellNote: "تُكتب i-n-v-e-n-t بنهاية ent، وماضيها invented.",
      errCat: "spelling"
    },
    {
      id: "rc-4",
      promptAr: "العبارة القانونية من الوحدة الأولى: مخالف للقانون (ثلاث كلمات)",
      promptEn: "Legal phrase from Unit 1: not allowed by the law (three words)",
      sentPre: "In many countries, it is",
      sentPost: "to take photos inside a court.",
      ans: ["against the law"],
      isLegal: true,
      hint: "a _ _ _ _ _ _ _ _ _ _ _ w (13 letters, 3 words)",
      spellNoteEn: "against + the + law. Keep the word the in the middle, and spell against with a-i: a-g-a-i-n-s-t.",
      spellNote: "تتكون من against ثم the ثم law، فلا تحذف the من وسطها، وتُكتب against هكذا: a-g-a-i-n-s-t.",
      errCat: "spelling"
    }
  ],

  legalPhrase: {
    en: "apply for a visa",
    headword: "apply for a visa",
    pos: "legal phrase",
    ar: "يتقدّم بطلب تأشيرة",
    say: "أَبْلَاي فُر أَ فِيزَا",
    ex: "My brother applied for a visa in May, and he got it in June.",
    exAr: "تقدّم أخي بطلب تأشيرة في مايو، وحصل عليها في يونيو.",
    tipEn: "This phrase has two steps: first you apply for a visa, and later you get it or you do not. Keep 'for' after apply. In a story about your life, use the past: I applied for a visa last spring. For a foreign country, always read the rules of that country first.",
    tip: "في هذه العبارة خطوتان: تتقدّم بالطلب أولًا، ثم تحصل على التأشيرة أو لا تحصل. ولا تحذف for بعد apply، وفي الحديث عن حياتك تستعمل الماضي: I applied for a visa last spring. واقرأ دائمًا قواعد البلد الأجنبي قبل أن تتقدّم.",
    legal: true,
    oxfordSlug: "visa",
    wikiFiles: ["En-us-apply.ogg", "LL-Q1860 (eng)-Pvanp7-for (unstressed).wav", "LL-Q1860 (eng)-Pvanp7-a (unstressed).wav", "LL-Q1860 (eng)-Vealhurl-visa.wav"],
    wikiCredit: "File:En-us-apply.ogg, File:LL-Q1860 (eng)-Pvanp7-for (unstressed).wav, File:LL-Q1860 (eng)-Pvanp7-a (unstressed).wav & File:LL-Q1860 (eng)-Vealhurl-visa.wav · Pvanp7 & Vealhurl (Lingua Libre) / Wikimedia Commons"
  },

  vocab: [
    { en: "stay", pos: "verb", ar: "يمكث / يقيم (مدة من الزمن)", say: "سْتَيْ",
      ex: "My cousin stayed in Canada for a year after university.", exAr: "أقام ابن عمي في كندا سنة بعد الجامعة.",
      tipEn: "stay means you do not leave a place for some time. Say stay in + a country: stay in a country for a year. The past is regular: stayed.",
      tip: "stay تعني ألا تغادر مكانًا مدة من الزمن، ونقول stay in مع البلد: stay in a country for a year، وماضيها منتظم: stayed.",
      oxfordSlug: "stay_1",
      wikiFile: "En-us-stay.ogg",
      wikiCredit: "File:En-us-stay.ogg · Wikimedia Commons" },
    { en: "island", pos: "noun", ar: "جزيرة", say: "آيْلَنْد",
      ex: "My uncle showed me photos of a beautiful island in Greece.", exAr: "أراني عمي صورًا لجزيرة جميلة في اليونان.",
      tipEn: "Say a beautiful island. Remember that the s is silent, and that we say on an island. Water is all around an island.",
      tip: "نقول a beautiful island أي جزيرة جميلة، وتذكّر أن حرف s لا يُنطق، وأننا نقول on an island، والماء يحيط بالجزيرة من كل جانب.",
      oxfordSlug: "island",
      wikiFile: "En-uk-island.ogg",
      wikiCredit: "File:En-uk-island.ogg · Wikimedia Commons" },
    { en: "nature", pos: "noun", ar: "الطبيعة (النباتات والحيوانات والجبال والأنهار)", say: "نَيْتْشَر",
      ex: "Our village has beautiful nature, with green hills and a small river.", exAr: "في قريتنا طبيعة جميلة، فيها تلال خضراء ونهر صغير.",
      tipEn: "Say beautiful nature, with no 'a' and no 'the' before it. Say NAY-cher: the t sounds like ch.",
      tip: "نقول beautiful nature بلا a وبلا the قبلها، وتُنطق «نَيْتْشَر»، فحرف t فيها كصوت «تش».",
      oxfordSlug: "nature",
      wikiFile: "En-uk-nature.ogg",
      wikiCredit: "File:En-uk-nature.ogg · Wikimedia Commons" },
    { en: "foreign", pos: "adjective", ar: "أجنبي", say: "فُورِن",
      ex: "Life in a foreign country is hard in the first month.", exAr: "الحياة في بلد أجنبي صعبة في الشهر الأول.",
      tipEn: "A foreign country is a country that is not your own. The word comes before the noun: a foreign country, not a country foreign. Do not say the g.",
      tip: "a foreign country بلد غير بلدك، وتأتي الصفة قبل الاسم فلا نقول a country foreign، ولا يُنطق حرف g.",
      oxfordSlug: "foreign",
      wikiFile: "En-us-foreign.ogg",
      wikiCredit: "File:En-us-foreign.ogg · Wikimedia Commons (author and licence on the file page)" },
    { en: "culture", pos: "noun", ar: "ثقافة", say: "كَلْتْشَر",
      ex: "Every country has a different culture, and travellers learn a lot from it.", exAr: "لكل بلد ثقافة مختلفة، ويتعلم منها المسافرون كثيرًا.",
      tipEn: "Say a different culture: the food, the customs and the way of life are not the same. It sounds like the word nature at the end: KUL-cher.",
      tip: "نقول a different culture أي ثقافة مختلفة، إذ يختلف الطعام والعادات وطريقة العيش، وآخرها يُنطق كآخر nature: «كَلْتْشَر».",
      oxfordSlug: "culture_1",
      wikiFile: "En-us-culture.ogg",
      wikiCredit: "File:En-us-culture.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "return", pos: "verb", ar: "يعود / يرجع", say: "رِتِيرْن",
      ex: "After a long trip, my father returned home with gifts for everyone.", exAr: "بعد رحلة طويلة عاد أبي إلى البيت ومعه هدايا للجميع.",
      tipEn: "Say return home, with no 'to', just like go home. With a place, use to: return to Riyadh. Stress the second part: re-TURN.",
      tip: "نقول return home بلا to، كما نقول go home، ومع اسم المكان نستعمل to: return to Riyadh، ونضغط في نطقها على المقطع الثاني.",
      oxfordSlug: "return_1",
      wikiFile: "En-us-return.ogg",
      wikiCredit: "File:En-us-return.ogg · Wikimedia Commons" }
  ],

  vocabGaps: [
    { s: "After the summer, we ___ to Riyadh, and the school year started.", opts: ["island", "returned", "foreign"], a: 1,
      whyEn: "'returned' means came back. A verb is needed after 'we'. 'island' is a noun, and 'foreign' is an adjective.",
      why: "returned تعني عدنا، ويلزم فعل بعد we، أما island فاسم، وforeign صفة.", errCat: "vocab" },
    { s: "The hotels were full, so we ___ at my uncle's house for a week.", opts: ["stayed", "returned", "culture"], a: 0,
      whyEn: "We were at his house for some time, and that is 'stayed'. We do not say 'returned at' a house, and 'culture' is a noun.",
      why: "مكثنا في بيته مدة من الزمن، وهذا معنى stayed، ولا نقول returned at مع البيت، أما culture فاسم.", errCat: "vocab" },
    { s: "You can only reach the ___ by boat, and the beaches there are amazing.", opts: ["nature", "culture", "island"], a: 2,
      whyEn: "Water is all around an 'island', so people go there by boat and find beaches. You can't reach 'culture' by boat, and we do not say 'the nature' for one place like this.",
      why: "الماء يحيط بالجزيرة island، فيُذهب إليها بالقارب وفيها شواطئ، ولا يُذهب إلى culture بقارب، ولا نقول the nature لمكان محدد كهذا.", errCat: "vocab" },
    { s: "My father loves ___, so he walks in the mountains every weekend.", opts: ["foreign", "nature", "culture"], a: 1,
      whyEn: "Mountains are part of 'nature'. Walking in the mountains does not show a love of 'culture', and 'foreign' is an adjective.",
      why: "الجبال من الطبيعة nature، والمشي فيها لا يدل على حب culture، أما foreign فصفة.", errCat: "vocab" },
    { s: "A year abroad teaches you about a different ___: new food, new music and new customs.", opts: ["island", "nature", "culture"], a: 2,
      whyEn: "Food, music and customs are all parts of a 'culture'. An 'island' is a place, and 'nature' is plants, animals and mountains.",
      why: "الطعام والموسيقى والعادات كلها من الثقافة culture، أما island فمكان، وnature نباتات وحيوانات وجبال.", errCat: "vocab" },
    { s: "I can't read the signs here, because this is a ___ country for me.", opts: ["foreign", "return", "stay"], a: 0,
      whyEn: "We need an adjective before 'country', and 'foreign' means not your own. 'return' and 'stay' are verbs here.",
      why: "يلزم قبل country صفة، وforeign تعني غير بلدك، أما return وstay ففعلان هنا.", errCat: "vocab" },
    { s: "The rules of that country are clear: visitors need to ___ before the trip.", opts: ["stay in a hotel", "apply for a visa", "return to work"], a: 1,
      whyEn: "To 'apply for a visa' is to ask for official permission to enter a country, and this comes before the trip. 'stay in a hotel' comes during the trip, and 'return to work' comes after it.",
      why: "apply for a visa أن تطلب إذنًا رسميًا بدخول البلد، وهذا يكون قبل السفر، أما stay in a hotel فأثناء السفر، وreturn to work فبعده.", errCat: "vocab" },
    { s: "My brother missed his family, so he decided to ___ home after one year abroad.", opts: ["return", "island", "culture"], a: 0,
      whyEn: "He missed his family, so he wanted to go back. After 'to' we need a verb, and we say 'return home'. The other two are nouns.",
      why: "اشتاق إلى أسرته فأراد الرجوع، ويلزم بعد to فعل، ونقول return home، والخياران الآخران اسمان.", errCat: "vocab" }
  ],

  gCards: [
    {
      tEn: "Two Questions",
      t: "سؤالان يحددان الزمن",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Two Questions</span><small>سؤالان قبل كل فعل</small></h2>' +
        '<p class="en-p" dir="ltr">You know four tenses now, and there is no new rule today. Before you write a verb, ask yourself two questions:</p>' +
        '<div class="formula"><b>1.</b> Is it in the present or in the past?<br><b>2.</b> Is it going on now or these days? In the past: was it going on at that moment?</div>' +
        '<p class="en-p" dir="ltr">If the action is going on, use the <b>continuous</b>. If not, use the <b>simple</b>: it is for a habit, a fact or a finished action.</p>' +
        '<div class="tbl"><table><thead><tr><th></th><th>Simple · البسيط</th><th>Continuous · المستمر</th></tr></thead><tbody>' +
          '<tr><td>Present</td><td>I <span class="hs">teach</span> every morning.</td><td>I\'m <span class="hc">teaching</span> right now.</td></tr>' +
          '<tr><td>Past</td><td>I <span class="hs">taught</span> two classes yesterday.</td><td>I <span class="hc">was teaching</span> when you called.</td></tr>' +
        '</tbody></table></div>',
      arHtml:
        '<p>تعرف الآن أربعة أزمنة، وليس اليوم قاعدة جديدة. وقبل أن تكتب الفعل اسأل نفسك سؤالين:</p>' +
        '<p><b>الأول:</b> أهذا في الحاضر أم في الماضي؟</p>' +
        '<p><b>الثاني:</b> هل هو جارٍ الآن أو هذه الأيام؟ وفي الماضي: هل كان جاريًا في تلك اللحظة؟</p>' +
        '<p>فإن كان جاريًا فالزمن <b>مستمر</b>، وإلا <b>فبسيط</b>، والبسيط للعادة والحقيقة والحدث المكتمل.</p>' +
        '<p><bdi class="en">I teach every morning.</bdi> عادة في الحاضر. <bdi class="en">I\'m teaching right now.</bdi> جارٍ الآن. <bdi class="en">I taught two classes yesterday.</bdi> حدث مكتمل في الماضي. <bdi class="en">I was teaching when you called.</bdi> كان جاريًا في لحظة الاتصال.</p>'
    },
    {
      tEn: "Time Words Help",
      t: "كلمات الوقت تساعد ولا تقطع",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Time Words Help</span><small>كلمات الوقت ترجّح ولا تقطع</small></h2>' +
        '<p class="en-p" dir="ltr">A time word gives you a good clue, but it does not always decide.</p>' +
        '<div class="sigs">' +
          '<div class="sig s"><h3 dir="ltr">Usually simple<small class="sig-ar">ترجّح البسيط</small></h3><ul><li>every day</li><li>usually</li></ul></div>' +
          '<div class="sig"><h3 dir="ltr">Past: both tenses<small class="sig-ar">للماضي بنوعيه</small></h3><ul><li>yesterday</li><li>two years ago</li></ul></div>' +
        '</div>' +
        '<p class="en-p" dir="ltr"><b>The past continuous has no time word of its own.</b> The other action in the sentence, or the situation, decides:</p>' +
        '<div class="xbox"><span class="xtag c" dir="ltr">Long action · الحدث الطويل</span><p class="xen">The guests were waiting in the garden</p><span class="xtag s" dir="ltr">Short action · الحدث القصير</span><p class="xen">when my father opened the door.</p></div>' +
        '<div class="tip" dir="ltr"><p><b>now · at the moment:</b> these words often go with the present continuous, but only for an action. A state verb stays simple: I need a pen now.</p></div>',
      arHtml:
        '<p>كلمة الوقت قرينة حسنة، لكنها لا تقطع دائمًا.</p>' +
        '<p><bdi class="en">every day</bdi> و<bdi class="en">usually</bdi> ترجّحان البسيط، أما <bdi class="en">yesterday</bdi> و<bdi class="en">ago</bdi> فتدلان على الماضي بنوعيه: البسيط والمستمر.</p>' +
        '<p><b>وليس للماضي المستمر كلمة خاصة به،</b> بل يقرره الحدث الآخر في الجملة أو الموقف: <bdi class="en">The guests were waiting in the garden when my father opened the door.</bdi> فالانتظار طويل، وفتح الباب حدث قصير وقع في أثنائه.</p>' +
        '<p>وكلمتا <bdi class="en">now</bdi> و<bdi class="en">at the moment</bdi> تأتيان كثيرًا مع المضارع المستمر، أما الفعل الذي لا يأخذ ing فيبقى بسيطًا: <bdi class="en">I need a pen now.</bdi></p>'
    },
    {
      tEn: "Verbs That Stay Simple",
      t: "أفعال تبقى بسيطة",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Verbs That Stay Simple</span><small>الأفعال التي لا تأخذ ing تبقى بسيطة</small></h2>' +
        '<p class="en-p" dir="ltr">State verbs do not need the second question. They stay simple in the present and in the past:</p>' +
        '<div class="formula">know · understand · believe · want · need · prefer</div>' +
        '<div class="tbl"><table><thead><tr><th>Time · الزمن</th><th>Example · المثال</th></tr></thead><tbody>' +
          '<tr><td>Present</td><td>My cousin <span class="hs">prefers</span> a quiet life.</td></tr>' +
          '<tr><td>Past</td><td>At that time, I <span class="hs">knew</span> only ten English words.</td></tr>' +
        '</tbody></table></div>' +
        '<p class="en-p" dir="ltr"><b>have</b> is a state verb too when it means own: My aunt has a small garden.</p>' +
        '<div class="tip" dir="ltr"><p><b>Do not say · لا تقل:</b> I am knowing · she is preferring · I was knowing · I was understanding · I was needing</p></div>',
      arHtml:
        '<p>الأفعال التي لا تأخذ ing لا تحتاج إلى السؤال الثاني، فهي تبقى بسيطة في الحاضر والماضي، ومنها <bdi class="en">know</bdi> و<bdi class="en">understand</bdi> و<bdi class="en">believe</bdi> و<bdi class="en">want</bdi> و<bdi class="en">need</bdi> و<bdi class="en">prefer</bdi>.</p>' +
        '<p><bdi class="en">My cousin prefers a quiet life.</bdi> في الحاضر، و<bdi class="en">At that time, I knew only ten English words.</bdi> في الماضي.</p>' +
        '<p>وكذلك <bdi class="en">have</bdi> بمعنى «يملك»: <bdi class="en">My aunt has a small garden.</bdi></p>' +
        '<p>فلا تقل <bdi class="en">I am knowing</bdi> ولا <bdi class="en">she is preferring</bdi> ولا <bdi class="en">I was knowing</bdi> ولا <bdi class="en">I was understanding</bdi> ولا <bdi class="en">I was needing</bdi>.</p>'
    },
    {
      tEn: "From the Past to Now",
      t: "من الماضي إلى الآن",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">From the Past to Now</span><small>الانتقال من الماضي إلى الحاضر</small></h2>' +
        '<p class="en-p" dir="ltr">When we talk about our lives, we often start in the past and then come to the present. The time word shows the change, so change the tense with it.</p>' +
        '<div class="tbl"><table><thead><tr><th>Before · قبل</th><th>Now · الآن</th></tr></thead><tbody>' +
          '<tr><td>My grandparents <span class="hs">had</span> a farm near Hail.</td><td>Now they <span class="hs">have</span> a small shop in the city.</td></tr>' +
          '<tr><td>Five years ago, I <span class="hs">didn\'t speak</span> English.</td><td>These days, I <span class="hc">am learning</span> it online.</td></tr>' +
        '</tbody></table></div>' +
        '<div class="tip" dir="ltr"><p><b>Check · راجع:</b> after ago, use the past. After now and these days, come back to the present.</p></div>',
      arHtml:
        '<p>إذا تكلمنا عن حياتنا بدأنا كثيرًا بالماضي ثم انتقلنا إلى الحاضر، وكلمة الوقت تدل على هذا الانتقال، فيتغير الزمن معها.</p>' +
        '<p><bdi class="en">My grandparents had a farm near Hail. Now they have a small shop in the city.</bdi></p>' +
        '<p><bdi class="en">Five years ago, I didn\'t speak English. These days, I am learning it online.</bdi></p>' +
        '<p>فراجع جملك: بعد <bdi class="en">ago</bdi> الماضي، وبعد <bdi class="en">now</bdi> و<bdi class="en">these days</bdi> العودة إلى الحاضر.</p>'
    },
    {
      tEn: "Common Arab Mistakes",
      t: "أخطاء العرب الشائعة",
      bilingual: true,
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Common Arab Mistakes</span><small>أخطاء يقع فيها كثير من العرب</small></h2>' +
        '<ul class="mist">' +
          '<li><span class="no">Last night I don\'t understand the film.</span><span class="yes">Last night I didn\'t understand the film.</span><p class="en-m" dir="ltr">Last night is in the past, so the verb must be in the past: <b>didn\'t</b> + base verb.</p><p><bdi class="en">Last night</bdi> في الماضي، فيكون الفعل ماضيًا: <bdi class="en">didn\'t</bdi> مع الفعل المجرد.</p></li>' +
          '<li><span class="no">I am drive to college every day.</span><span class="yes">I drive to college every day.</span><p class="en-m" dir="ltr">This is a habit, so use the present simple. Do not put <b>am</b> before a base verb.</p><p>هذه عادة، فنستعمل المضارع البسيط، ولا نضع <bdi class="en">am</bdi> قبل الفعل المجرد.</p></li>' +
          '<li><span class="no">When I arrive at the hotel last night, my cousin was waiting outside.</span><span class="yes">When I arrived at the hotel last night, my cousin was waiting outside.</span><p class="en-m" dir="ltr">The short action is in the past too, so it takes the past simple: <b>arrived</b>.</p><p>الحدث القصير في الماضي أيضًا، فيأتي بالماضي البسيط: <bdi class="en">arrived</bdi>.</p></li>' +
          '<li><span class="no">We are wanting a bigger house.</span><span class="yes">We want a bigger house.</span><p class="en-m" dir="ltr"><b>want</b> is a state verb, so it stays simple.</p><p><bdi class="en">want</bdi> فعل لا يأخذ ing، فيبقى بسيطًا.</p></li>' +
        '</ul>'
    },
    {
      tEn: "Summary",
      t: "الخلاصة",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Quick Summary</span><small>الخلاصة</small></h2>' +
        '<div class="sumc" dir="ltr"><h3>In Two Lines · في سطرين</h3>' +
          '<p><b>Two questions · سؤالان</b><span>present or past? · going on now or these days, or at that moment in the past? · yes: continuous · no: simple (habit, fact, finished action)</span></p>' +
          '<p><b>Clues · القرائن</b><span>time words help, but do not always decide · the past continuous: look at the other action · state verbs: always simple · ago: past · now: present</span></p>' +
        '</div>' +
        '<p class="en-p" dir="ltr">Now let\'s practise: 16 guided exercises on all four tenses.</p>',
      arHtml:
        '<p><b>السؤالان:</b> أفي الحاضر أم في الماضي؟ وهل هو جارٍ الآن أو هذه الأيام، أو كان جاريًا في تلك اللحظة؟ فإن كان جاريًا فالمستمر، وإلا فالبسيط للعادة والحقيقة والحدث المكتمل.</p>' +
        '<p><b>القرائن:</b> كلمات الوقت تساعد ولا تقطع، والماضي المستمر يقرره الحدث الآخر، والأفعال التي لا تأخذ ing بسيطة دائمًا، وبعد <bdi class="en">ago</bdi> الماضي، ومع <bdi class="en">now</bdi> الحاضر.</p>'
    }
  ],

  gA: [
    { s: "Ten years ago, my family ___ in a small town near Taif.", opts: ["lived", "live"], a: 0,
      whyEn: "Question 1: 'Ten years ago' puts this in the past, so we need a past verb. 'live' is a present form.",
      why: "السؤال الأول: Ten years ago تجعل الحدث في الماضي، فيلزم فعل ماضٍ، أما live فمضارع.", errCat: "tense" },
    { s: "Can we talk later? I ___ my mother to the mall.", opts: ["drive", "am driving"], a: 1,
      whyEn: "Question 2: the speaker can't talk because the drive is going on at this moment. 'Can we talk later?' shows this, so we use the present continuous: am driving.",
      why: "السؤال الثاني: لا يستطيع المتكلم الحديث لأن القيادة جارية في هذه اللحظة، وتدل على ذلك Can we talk later?، فنستعمل المضارع المستمر: am driving.", errCat: "tense" },
    { s: "We ___ for our train when my colleague suddenly called.", opts: ["were waiting", "waited"], a: 0,
      whyEn: "The call is the short action, and it came in the middle of the wait. The wait was going on at that moment, so it takes the past continuous.",
      why: "الاتصال هو الحدث القصير، وقد وقع في أثناء الانتظار، فالانتظار كان جاريًا في تلك اللحظة، فيأتي بالماضي المستمر.", errCat: "tense" },
    { s: "My sister arrived ___ Malaysia on Sunday morning.", opts: ["to", "in"], a: 1,
      whyEn: "We say 'arrive in' with a country or a city. We never say 'arrive to'.",
      why: "نقول arrive in مع البلد أو المدينة، ولا نقول arrive to.", errCat: "articles_prep" }
  ],

  gB: [
    { s: "My uncle is sell dates at the market every Saturday.", ok: false, fix: "My uncle sells dates at the market every Saturday.",
      whyEn: "'every Saturday' shows a habit, so we use the present simple with -s for he: sells. We do not put 'is' before a base verb.",
      why: "every Saturday تدل على عادة، فنستعمل المضارع البسيط بإضافة s مع he / she / it: sells، ولا نضع is قبل الفعل المجرد.", errCat: "be_verb" },
    { s: "Two years ago, we don't have a car.", ok: false, fix: "Two years ago, we didn't have a car.",
      whyEn: "'Two years ago' is in the past, but 'don't have' is present. The past negative is didn't + base verb.",
      why: "Two years ago في الماضي، أما don't have فمضارع، ونفي الماضي didn't مع الفعل المجرد.", errCat: "tense" },
    { s: "My brothers were cleaning the garden when they were finding an old key.", ok: false, fix: "My brothers were cleaning the garden when they found an old key.",
      whyEn: "They found the key in one moment. A short action after 'when' takes the past simple, and the past of 'find' is irregular: found.",
      why: "وجدوا المفتاح في لحظة واحدة، والحدث القصير بعد when يأتي بالماضي البسيط، وماضي find شاذ: found.", errCat: "tense" },
    { s: "My cousin is studying in Jeddah this term, and she misses her family.", ok: true,
      whyEn: "Correct: 'this term' shows something going on these days, so 'is studying' is right. 'misses' tells us how she feels, and it has the -s of the present simple.",
      why: "صحيحة: this term تدل على ما يجري هذه الأيام، فتصح is studying، وmisses تعبّر عن شعورها وفيها s المضارع البسيط.", errCat: "tense" }
  ],

  gC: [
    { pre: "These days, my sister", verb: "want", post: "a job in a foreign country.", ans: ["wants"],
      whyEn: "'These days' puts this in the present. 'want' is a state verb, so it stays simple, and 'my sister' takes -s: wants.",
      why: "These days تجعل الجملة في الحاضر، وwant فعل لا يأخذ ing فيبقى بسيطًا، وmy sister مفرد مثل he أو she فنضيف s: wants.", errCat: "stative" },
    { pre: "Shh! My little brother", verb: "sleep", post: "on the sofa.", ans: ["is sleeping"],
      whyEn: "'Shh!' tells us to be quiet because the sleep is going on now. So we use the present continuous: is sleeping.",
      why: "Shh! تطلب الهدوء لأن النوم جارٍ الآن، فنستعمل المضارع المستمر: is sleeping.", errCat: "tense" },
    { pre: "I", verb: "wait", post: "outside the bank when an old friend walked past.", ans: ["was waiting"],
      whyEn: "'when an old friend walked past' is the short action. The wait was going on at that moment, so it takes the past continuous: was waiting.",
      why: "when an old friend walked past هو الحدث القصير، والانتظار كان جاريًا في تلك اللحظة، فيأتي بالماضي المستمر: was waiting.", errCat: "tense" },
    { pre: "Our neighbour works on", verb: "article", post: "island in the Gulf.", ans: ["an"], groupEn: "Write a or an", group: "اكتب a أو an",
      whyEn: "The s in 'island' is silent, so the word starts with a vowel sound, and we say 'an island'.",
      why: "حرف s في island لا يُنطق، فتبدأ الكلمة بصوت متحرك، ونقول an island.", errCat: "articles_prep" }
  ],

  gD: [
    { chips: ["their families in June.", "usually", "My colleagues", "visit"], ans: "My colleagues usually visit their families in June.",
      whyEn: "This is a habit, so we use the present simple. 'usually' goes before the main verb: usually visit.",
      why: "هذه عادة، فنستعمل المضارع البسيط، وusually تأتي قبل الفعل الأساسي: usually visit.", errCat: "word_order" },
    { chips: ["when my father", "The children", "came home.", "were doing their homework"], ans: "The children were doing their homework when my father came home.",
      whyEn: "Here the long action comes first, in the past continuous. Then comes when + the short action in the past simple.",
      why: "يأتي الحدث الطويل هنا أولًا بالماضي المستمر، ثم when مع الحدث القصير بالماضي البسيط.", errCat: "word_order" },
    { chips: ["this week.", "at our house", "My aunt", "is staying"], ans: "My aunt is staying at our house this week.",
      whyEn: "'this week' shows something going on these days, so the verb is is + verb-ing. Here the time phrase ends the sentence, but it can also come first: This week, my aunt is staying at our house.",
      why: "this week تدل على ما يجري هذه الأيام، فالفعل is مع الفعل بـ ing. وعبارة الوقت هنا في آخر الجملة، ويجوز أن تأتي في أولها: This week, my aunt is staying at our house.", errCat: "word_order" },
    { chips: ["but now", "last year,", "we have a house.", "We had a small flat"], ans: "We had a small flat last year, but now we have a house.",
      whyEn: "The sentence moves from the past to the present: 'last year' goes with had, and 'now' goes with have.",
      why: "تنتقل الجملة من الماضي إلى الحاضر: last year مع had، وnow مع have.", errCat: "word_order" }
  ],

  /* ---------- المرحلة 4: الاستماع على ثلاث مراحل (مقطع حقيقي من ELLLO، ونصه المكتوب في صفحة المصدر) ---------- */
  listening: {
    title: "20 Years Abroad",
    sourceTag: "ELLLO · Real recording · تسجيل حقيقي",
    sourceMeta: "ELLLO Views #1406 · Beginner (A2)",
    speakers: "Meg & Todd (U.S.)",
    url: "https://elllo.org/english/1401/1406-MegTodd-Travel-Thailand.htm",
    audioWord: "stay",
    targetSeconds: 248,
    introEn: "Meg asks Todd about his years away from home. The clip is about four minutes long, and Todd speaks clearly, so this is a good clip for a beginner. You will not catch every word, and that is fine. Listen once for the main idea.",
    intro: "تسأل ميغ تود عن سنواته بعيدًا عن بلده. ومدة المقطع نحو أربع دقائق، وكلام تود واضح، فهو مناسب للمبتدئ. لن تلتقط كل كلمة، ولا بأس في ذلك. استمع مرة واحدة للفكرة العامة.",
    predict: {
      qEn: "Stage 1 Main-Idea Question: What is the talk mainly about?",
      q: "سؤال الفكرة العامة: عمّ يدور الحديث أساسًا؟",
      optsEn: ["Todd's life in different countries", "How to find a job in a new country", "A short holiday that Meg and Todd took"],
      opts: ["حياة تود في بلدان مختلفة", "كيف تجد عملًا في بلد جديد", "إجازة قصيرة قضتها ميغ وتود"],
      a: 0,
      revealEn: "Meg's questions take Todd from one country to the next, so the talk follows his life in order. Listen again and follow him from place to place.",
      reveal: "تنقل أسئلة ميغ تودًا من بلد إلى بلد، فيسير الحديث مع حياته بالترتيب. استمع مرة أخرى وتابعه من مكان إلى مكان."
    },
    insight: {
      titleEn: "From the Past to Now",
      titleAr: "من الماضي إلى الآن",
      l1En: "Todd's story moves from the past to the present, and this is normal when people talk about their lives. Here are sentences of our own about him: first the past simple, then the present simple.",
      ex1: "Todd worked in England after college. · Today, he lives in Japan, and he loves his job.",
      l2En: "Todd uses the past continuous only once in the clip, and there is no present continuous, so you practised that tense in the exercises. Here is our own sentence with a long action and a short action. Shadow only from 1:58 to 3:26.",
      ex2: "Todd was travelling when he decided to stay in Thailand.",
      arHtml: "<p><b>انتبه:</b> يسير حديث تود من الماضي البسيط إلى المضارع البسيط، وهذا طبيعي في الكلام عن الحياة. ويقول الماضي المستمر مرة واحدة فقط، وليس في المقطع مضارع مستمر، وقد تدربت عليه في التمارين.</p><p>وستسمع صيغًا لم ندرسها بعد، مثل <bdi class=\"en\">I've lived</bdi>، وقاعدتها ستأتي لاحقًا، فلا تقف عندها الآن.</p><p>وهذه جمل أمثلة كتبناها عن المقطع، وليست كلام المتحدثين بنصه. أما الترديد فليكن من 1:58 إلى 3:26 فقط.</p>"
    },
    questions: [
      { q: "How many years in Japan?", opts: ["4", "15", "1"], a: 1,
        whyEn: "At the start, Todd gives a number for each country. The number for Japan is 15.",
        why: "في أول المقطع يذكر تود عددًا لكل بلد، والعدد الذي يذكره لليابان 15.", errCat: "reading" },
      { q: "After six months near Cambridge, where did Todd go?", opts: ["To Thailand", "To California", "To London"], a: 2,
        whyEn: "Near the start, Todd tells Meg that London was his next home in England.",
        why: "قرب أول المقطع يخبر تود ميغ أن لندن كانت مقامه التالي في إنجلترا.", errCat: "reading" },
      { q: "What was hard for Todd in his first weeks in England?", opts: ["Finding a place to live", "Following what people said", "Paying for his food"], a: 1,
        whyEn: "Before the middle, Todd says that the English of British people was very hard for him at first. This problem went on for about two months.",
        why: "قبل وسط المقطع يقول تود إن إنجليزية البريطانيين كانت شاقة عليه أول الأمر، ودامت هذه المشكلة نحو شهرين.", errCat: "reading" },
      { q: "Why was the weather in England a problem for Todd?", opts: ["He comes from a warm place.", "He worked outside every day.", "He was often sick."], a: 0,
        whyEn: "Before the middle, Todd says that his home, California, is very warm, so England felt cold to him.",
        why: "قبل وسط المقطع يقول تود إن موطنه كاليفورنيا شديد الدفء، فبدت له إنجلترا باردة.", errCat: "reading" },
      { q: "What was the reason for Todd's years in Thailand?", opts: ["A school there asked him to come.", "His family moved there.", "He needed money during a long trip."], a: 2,
        whyEn: "In the middle, Todd explains it: he was on a trip, his money was gone, and he wanted to stay, so he looked for work.",
        why: "في وسط المقطع يبيّن تود السبب: كان في رحلة ونفد ماله، وأراد البقاء، فبحث عن عمل.", errCat: "reading" },
      { q: "What does Todd say is good about life in Thailand?", opts: ["Good weather and great food", "Big cities and good shops", "Cheap flats and quiet roads"], a: 0,
        whyEn: "In the middle, after he talks about his students, Todd names three good things: the weather, the people and the food.",
        why: "في وسط المقطع، بعد حديثه عن طلابه، يذكر تود ثلاثة أمور حسنة: الطقس والناس والطعام.", errCat: "reading" },
      { tf: true, q: "Todd's job in Japan is different from his job in Thailand.", a: false,
        whyEn: "False. After the middle, Todd says that he is an English teacher in Japan, and that was his job in Thailand too.",
        why: "خطأ؛ بعد وسط المقطع يقول تود إنه معلم إنجليزية في اليابان، وكان هذا عمله في تايلاند أيضًا.", errCat: "reading" },
      { q: "How can people move around Japan easily?", opts: ["By bike and boat", "By train and bus", "By taxi and car"], a: 1,
        whyEn: "Near the end, Todd says that going from place to place in Japan is easy on trains and buses.",
        why: "قرب آخر المقطع يقول تود إن التنقل في اليابان سهل بالقطارات والحافلات.", errCat: "reading" }
    ]
  },

  writing: {
    taskEn: "Write at least 6 separate sentences about your life before and your life now. It can be true, or you can make it up. Use all four tenses: the past simple (We moved to Jeddah.), the past continuous (I was reading when the phone rang.), the present simple (We eat lunch at two.) and the present continuous (This week, I am helping my uncle.). Use at least 2 words from today's lesson (for example: stay, foreign, culture). Write 'I' with a capital letter.",
    task: "اكتب 6 جمل منفصلة على الأقل عن حياتك قبلُ وحياتك الآن، حقيقية كانت أو من خيالك. واستعمل الأزمنة الأربعة كلها: الماضي البسيط (We moved to Jeddah.)، والماضي المستمر (I was reading when the phone rang.)، والمضارع البسيط (We eat lunch at two.)، والمضارع المستمر (This week, I am helping my uncle.). واستعمل كلمتين على الأقل من كلمات الدرس (مثل stay وforeign وculture)، واكتب الضمير I بحرف كبير.",
    placeholder: "Five years ago, I …\nI was … when …\nNow I …\nThese days, I am …",
    minSentences: 6,
    checks: [
      { k: "sentences", tEn: "At least 6 separate sentences (end each with a period .), and 'I' is always a capital", t: "6 جمل منفصلة على الأقل (بنقطة في نهاية كل جملة)، والضمير I بحرف كبير دائمًا",
        ok: function(a, text){ return a.sentences >= 6 && !/\bi\b/.test(String(text || '')); } },
      { k: "present", tEn: "Both present tenses: the present simple and am / is / are + verb-ing", t: "زمنا الحاضر معًا: المضارع البسيط، وam / is / are مع الفعل بـ ing", ex: "We eat lunch at two. · This week, I am helping my uncle.",
        ok: function(a, text){
          var rest = noCont(text);
          return has(PRES_C, plain(text)) && (PRES_BE.test(rest) || PRES_I.test(rest) || PRES_3.test(rest) || PRES_PL.test(rest)); } },
      { k: "past", tEn: "Both past tenses: the past simple and was / were + verb-ing", t: "زمنا الماضي معًا: الماضي البسيط، وwas / were مع الفعل بـ ing", ex: "We moved to Jeddah. · I was reading when the phone rang.",
        ok: function(a, text){ return has(PAST_C, plain(text)) && PAST_S.test(noCont(text)); } },
      { k: "vocab", tEn: "At least 2 words or phrases from today's lesson", t: "كلمتان أو عبارتان على الأقل من درس اليوم", ex: "stay · island · nature · foreign · culture · return · apply for a visa",
        ok: function(a, text){
          var s = plain(text);
          var found = [/\bstay(?:s|ed|ing)?\b/i, /\bislands?\b/i, /\bnature\b/i, /\bforeign\b/i, /\bcultures?\b/i, /\breturn(?:s|ed|ing)?\b/i,
            /\bappl(?:y|ies|ied|ying)\s+for\s+(?:a|my|the|an)\s+(?:[a-z]+\s+)?visa\b/i]
            .filter(function(r){ return r.test(s); }).length;
          return found >= 2 || ((a && a.used) || []).length >= 2; } }
    ],
    modelMarked: "Three years ago, I <<s:lived>> with my family in Hail. I <<c:was studying>> at a small college when my father <<s:got>> a new job in Jeddah. We <<s:left>> our house in the summer. At first, Jeddah <<s:felt>> like a {foreign} country, and I <<s:missed>> my friends. Now I <<s:study>> law at the university, and I <<s:{return}>> to Hail every summer. This term, I <<c:am writing>> a long report about the {culture} of our old town.",
    model: "Three years ago, I lived with my family in Hail. I was studying at a small college when my father got a new job in Jeddah. We left our house in the summer. At first, Jeddah felt like a foreign country, and I missed my friends. Now I study law at the university, and I return to Hail every summer. This term, I am writing a long report about the culture of our old town.",
    legendEn: "Light blue = simple (present or past) · Terracotta = continuous (present or past)",
    legendAr: "الأزرق الفاتح للبسيط حاضرًا وماضيًا، والطوبي للمستمر حاضرًا وماضيًا.",
    acceptExamples: [
      "Five years ago, we lived in Abha. I was sleeping when my father got a new job in Riyadh. We returned to our old home every summer. Now I live in Riyadh with my parents. I don't like the traffic, but I love the city. These days I'm studying for my exams. It's a foreign city for my cousin.",
      "I didn’t know any English at school. My brother was working in a foreign country when I started to learn. He taught me new words on the phone. Now he’s teaching his son in Dammam. My sister studies culture at college. We stay at home on Fridays.",
      "Where were you going when I saw you? I was going to the market. It was an interesting day, and the island was beautiful. What are you doing now? I'm reading about nature. My father works at a bank.",
      "My uncle left Hail in 2010. He was working in a bank when he decided to stay in Dubai. His family returned home after two years. He still works there. My aunt is visiting him this week. She loves the nature there.",
      "At 9pm, the lights went out. We weren't sleeping. My brother's reading now, and my sister is cooking. Our culture is different from my friend's culture. He doesn't eat rice. I couldn't stay at the party last night.",
      "I applied for a student visa last year. While I was waiting for it, I worked in a shop. Then I travelled to a foreign country. I need a new phone now. My friends are building a small house on an island. Is she working today?",
      "Ten years ago, my family lived in Abha. I was studying at school when my father got a new job. We returned to Riyadh in the summer. Now my parents live in a big house. My brothers work in a foreign company. My sister is studying law this year.",
      "My aunt learnt English at school in Tabuk. My uncle was working in a shop when she came to Riyadh. It was a foreign city for her. My father watches football on Fridays. My mother and my sister stay at home. My cousin is currently studying law."
    ]
  },

  askChips: [
    "كيف أعرف أن الحدث كان جاريًا في تلك اللحظة؟",
    "لماذا لا تكفي yesterday لاختيار الماضي المستمر؟",
    "ما الأفعال التي تبقى بسيطة دائمًا؟",
    "كيف أنتقل من الماضي إلى الحاضر في الكلام عن حياتي؟"
  ],

  quiz: [
    { s: "On a typical day, my friends and I ___ to college.", opts: ["am walk", "are walk", "walk"], a: 2, tag: "Grammar · قواعد",
      whyEn: "This is a habit, so we use the present simple: walk. We do not put 'am' or 'are' before a base verb.",
      why: "هذه عادة، فنستعمل المضارع البسيط: walk، ولا نضع am ولا are قبل الفعل المجرد.", errCat: "be_verb" },
    { s: "I ___ your sister, because we worked together last year.", opts: ["am knowing", "know", "was knowing"], a: 1, tag: "Grammar · قواعد",
      whyEn: "'know' is a state verb, so it stays simple, and it takes no -ing in the present or in the past.",
      why: "know فعل لا يأخذ ing في الحاضر ولا في الماضي، فيبقى بسيطًا.", errCat: "stative" },
    { s: "Please don't go in. At the moment, the doctor ___ to a patient.", opts: ["is talking", "talks", "talked"], a: 0, tag: "Grammar · قواعد",
      whyEn: "We can't go in because the talk is going on now. An action going on at this moment takes the present continuous.",
      why: "لا نستطيع الدخول لأن الحديث جارٍ الآن، والحدث الجاري في هذه اللحظة يأتي بالمضارع المستمر.", errCat: "tense" },
    { s: "When our bus ___ in Abha yesterday, it was raining.", opts: ["arrive", "arrived", "arrives"], a: 1, tag: "Grammar · قواعد",
      whyEn: "'yesterday' is in the past, so the verb must be past. The other two forms are present.",
      why: "yesterday في الماضي، فيلزم فعل ماضٍ، والصيغتان الأخريان مضارع.", errCat: "tense" },
    { s: "My father was painting the garden wall when it suddenly ___ to rain.", opts: ["started", "starts", "was starting"], a: 0, tag: "Grammar · قواعد",
      whyEn: "'was painting' is the long action. The rain began in one moment, and 'suddenly' shows this, so the short action takes the past simple.",
      why: "was painting هو الحدث الطويل، وبدأ المطر في لحظة، وتدل على ذلك suddenly، فيأتي الحدث القصير بالماضي البسيط.", errCat: "tense" },
    { s: "My mother ___ when I got home, so I closed the door quietly.", opts: ["sleeps", "was sleeping", "slept"], a: 1, tag: "Grammar · قواعد",
      whyEn: "I got home in the middle of her sleep, and that is why I was quiet. Her sleep was going on at that moment, so it takes the past continuous.",
      why: "وصلت إلى البيت في أثناء نومها، ولهذا أغلقت الباب بهدوء، فالنوم كان جاريًا في تلك اللحظة، فيأتي بالماضي المستمر.", errCat: "tense" },
    { s: "What ___ your parents doing when you called them?", opts: ["are", "did", "were"], a: 2, tag: "Grammar · قواعد",
      whyEn: "'you called' is in the past, and 'doing' needs a form of be before it. 'your parents' is plural, so the question takes 'were'.",
      why: "you called في الماضي، وdoing يسبقها فعل be، وyour parents جمع، فيأتي السؤال بـ were.", errCat: "tense" },
    { s: "Arabic is a ___ language for my colleague from Japan.", opts: ["foreign", "stay", "return"], a: 0, tag: "Vocabulary · مفردات",
      whyEn: "We need an adjective before 'language', and 'foreign' means not your own. Arabic is not the language of his country.",
      why: "يلزم قبل language صفة، وforeign تعني غير لغتك، فالعربية ليست لغة بلده.", errCat: "vocab" },
    { s: "We went to a small ___ with no cars, and we saw the sea all around us.", opts: ["culture", "nature", "island"], a: 2, tag: "Vocabulary · مفردات",
      whyEn: "The sea was all around the place, so it was an 'island'. 'a culture' and 'a nature' do not fit a place with no cars.",
      why: "كان البحر يحيط بالمكان، فهو جزيرة island، ولا يوصف culture ولا nature بأنهما مكان بلا سيارات.", errCat: "vocab" },
    { s: "We want to visit a foreign country in May, so this month my father has to ___.", opts: ["pay a heavy fine", "apply for a visa", "get a new patent"], a: 1, tag: "Legal Track · المسار القانوني",
      whyEn: "To enter many countries, you need official permission first, so you 'apply for a visa'. A fine and a patent have nothing to do with this.",
      why: "دخول كثير من البلدان يحتاج أولًا إلى إذن رسمي، فتتقدّم بطلب تأشيرة apply for a visa، ولا صلة لهذا بالغرامة ولا ببراءة الاختراع.", errCat: "vocab" }
  ]
};
})();
