/* ===== الوحدة 1 · الدرس 1: Hello from Antarctica — المضارع البسيط مقابل المستمر (6 مراحل · درس قراءة، مراجَع على معايير الدليل) ===== */
(function(){
var TL_SVG = '<svg class="tl" viewBox="0 0 340 176" role="img" aria-label="Timeline: Present Simple repeats across Past, Now, and Future; Present Continuous stretches around Now" direction="ltr">' +
  '<line x1="170" y1="16" x2="170" y2="160" stroke="#1E2A33" stroke-width="1.2" stroke-dasharray="3 3"/><text x="170" y="11" text-anchor="middle" font-family="Quicksand, sans-serif" font-weight="700" font-size="10.5" fill="#1E2A33" letter-spacing="1.5">NOW</text>' +
  '<text x="326" y="40" text-anchor="end" font-family="Quicksand, Readex Pro, sans-serif" font-size="12" font-weight="700" fill="#2C4A6E">Present Simple · المضارع البسيط</text>' +
  '<line x1="30" y1="60" x2="326" y2="60" stroke="#5A6B7C" stroke-width="1.5"/><path d="M22 60l10-5v10z" fill="#5A6B7C"/>' +
  '<circle cx="306" cy="60" r="6" fill="#2C4A6E"/><circle cx="266" cy="60" r="6" fill="#2C4A6E"/><circle cx="226" cy="60" r="6" fill="#2C4A6E"/><circle cx="170" cy="60" r="6" fill="#2C4A6E"/><circle cx="114" cy="60" r="6" fill="#2C4A6E"/><circle cx="74" cy="60" r="6" fill="#2C4A6E"/>' +
  '<text x="326" y="104" text-anchor="end" font-family="Quicksand, Readex Pro, sans-serif" font-size="12" font-weight="700" fill="#A8432E">Present Continuous · المضارع المستمر</text>' +
  '<line x1="30" y1="124" x2="326" y2="124" stroke="#5A6B7C" stroke-width="1.5"/><path d="M22 124l10-5v10z" fill="#5A6B7C"/>' +
  '<rect x="134" y="114" width="72" height="20" rx="10" fill="#F9EBE7" stroke="#B94A33" stroke-width="2"/>' +
  '<text x="326" y="158" text-anchor="end" font-family="Quicksand, Readex Pro, sans-serif" font-size="11.5" fill="#5A6B7C">Past · الماضي</text><text x="30" y="158" text-anchor="start" font-family="Quicksand, Readex Pro, sans-serif" font-size="11.5" fill="#5A6B7C">Future · المستقبل</text></svg>';
/* صورة رأس إيميل نور (شمس منتصف الليل فوق القارة القطبية): خاصة بهذا الدرس، وتظهر عبر reading.art. */
var SUN_SVG = '<svg viewBox="0 0 320 96" role="img" aria-label="Midnight Sun over Antarctic ice · شمس منتصف الليل فوق جليد القارة القطبية" direction="ltr"><rect width="320" height="64" fill="#2C4A6E"/><circle cx="238" cy="34" r="22" fill="#F2B857" opacity="0.22"/><circle cx="238" cy="34" r="12" fill="#F2B857"/><path d="M0 64 L28 57 L52 61 L86 52 L118 60 L150 55 L176 61 L208 54 L240 60 L272 53 L300 59 L320 56 L320 64 Z" fill="#F7F3EC"/><rect y="64" width="320" height="32" fill="#1E3550"/><path d="M228 72h20M222 79h32M231 86h14" stroke="#F2B857" stroke-width="2" stroke-linecap="round" opacity="0.7"/><text x="14" y="24" font-family="Quicksand, sans-serif" font-weight="700" font-size="11" fill="#F7F3EC">00:00 · 77°S · −5°C</text><text x="14" y="40" font-family="Quicksand, sans-serif" font-weight="700" font-size="8.5" letter-spacing="2" fill="#F2B857">MIDNIGHT SUN</text></svg>';

/* فحوص الكتابة (writing.checks): المضارع المستمر (am / is / are + ing) والمضارع البسيط (كلمة عادة أو don't / doesn't)،
   بعد توحيد فاصلة الآيفون العليا ’ حتى تُقبل I’m وdon’t كما تُقبل I'm وdon't. */
var W_ING_NOT = /^(?:morning|evening|thing|nothing|something|anything|everything|building|wedding|spring|king|ring|sing|bring|during|ceiling|interesting|boring|amazing|exciting|string|swing|wing|sibling|darling)$/i;
var W_SIG = /\b(?:usually|always|often|sometimes|never|every\s+(?:day|morning|afternoon|evening|night|week|weekend|month|year|friday|saturday|sunday|monday|tuesday|wednesday|thursday)|on\s+(?:fridays|saturdays|sundays|mondays|tuesdays|wednesdays|thursdays|weekends|weekdays))\b/i;
var W_NEG = /\b(?:don't|doesn't|do\s+not|does\s+not)\s+[a-z]+/i;
function wNorm(text){ return String(text || '').replace(/[’‘]/g, "'"); }
function wHasCont(s){
  var re = /\b(?:am|is|are|i'm|[a-z]+'s|[a-z]+'re)\s+(?:not\s+)?(?:[a-z]+ly\s+|also\s+|still\s+|now\s+|just\s+|both\s+|all\s+)?([a-z]{2,}ing)\b/gi, m;
  while ((m = re.exec(s))) { if (!W_ING_NOT.test(m[1])) return true; }
  return false;
}

LESSONS.u1l1 = {
  id: "u1l1",
  unit: 1,
  n: 1,
  mode: "reading",
  en: "Hello from Antarctica",
  ar: "المضارع البسيط مقابل المستمر",
  subEn: "Present Simple vs. Present Continuous",
  canDoEn: "I can talk about my daily routine and about what is happening now or around now.",
  canDoAr: "أقدر أن أتحدث عن روتيني اليومي وعما يحدث الآن أو في هذه الفترة.",
  descEn: "I can tell habits and facts from actions happening now, in an email from a Saudi scientist in Antarctica.",
  descAr: "أقدر أن أفرّق بين ما يحدث عادةً وما يحدث الآن، من إيميل عالِمة سعودية في القارة القطبية الجنوبية.",
  goals: [
    { en: "I can use Present Simple for habits and facts, and Present Continuous for now and for temporary situations.", ar: "أقدر أن أستخدم المضارع البسيط للعادات والحقائق، والمضارع المستمر لما يحدث الآن ولما هو مؤقت." },
    { en: "I can spell he / she / it verbs (works, watches, studies) and -ing forms (studying, driving, stopping) correctly.", ar: "أقدر أن أكتب الفعل مع he / she / it (works وwatches وstudies) وصيغة ing (studying وdriving وstopping) كتابة صحيحة." },
    { en: "I can read an email from a Saudi scientist in Antarctica for the main idea and details.", ar: "أقدر أن أفهم الفكرة العامة والتفاصيل في إيميل عالِمة سعودية من القارة القطبية الجنوبية." },
    { en: "I can use 7 science and daily-life words and the legal phrase 'sign a contract', and write at least 4 separate sentences about my routine and this month.", ar: "أقدر أن أستخدم 7 كلمات من العلوم والحياة اليومية والعبارة القانونية sign a contract، وأكتب 4 جمل منفصلة على الأقل عن روتيني وعن هذا الشهر." }
  ],
  intro: {
    recall: {
      dEn: "Type five words from Foundation Lesson 5 from memory before you see the answer: -ful adjectives, an -ing form, and the legal phrase 'official document'.",
      d: "اكتب من ذاكرتك خمس كلمات من الدرس التأسيسي الخامس قبل أن ترى الإجابة: صفات تنتهي بـ ful، وصيغة ing، والعبارة القانونية official document.",
      items: [
        ["review", "5 active recall items from Foundation Lesson 5", "5 عناصر استرجاع نشط من الدرس التأسيسي الخامس"],
        ["pen", "Type each word from memory (spelling of -ful and -ing)", "اكتب كل كلمة من ذاكرتك لتثبيت إملاء ful وing"],
        ["spark", "Includes the legal phrase 'official document'", "تشمل العبارة القانونية official document"]
      ]
    },
    vocab: {
      dEn: "7 words from science and daily life plus today's legal phrase ('sign a contract'), with human audio from Wikimedia Commons and Oxford links.",
      d: "7 كلمات من العلوم والحياة اليومية مع العبارة القانونية اليومية (sign a contract)، بنطق بشري من Wikimedia Commons وروابط Oxford.",
      items: [
        ["cards", "8 Flashcards (7 words + 'sign a contract') with human audio & Oxford link", "8 بطاقات (7 كلمات + sign a contract) مع النطق البشري ورابط Oxford"],
        ["review", "2-round matching game", "لعبة توصيل من جولتين"],
        ["quiz", "8 context sentences: choose the right word", "8 جمل سياقية: اختر الكلمة المناسبة"]
      ]
    },
    grammar: {
      dEn: "Habit or right now? Learn when to use Present Simple and when to use Present Continuous, how to spell -s and -ing forms, and which time words help you choose.",
      d: "عادة أم الآن؟ متى نستخدم المضارع البسيط ومتى نستخدم المضارع المستمر، وكيف نكتب صيغتي s وing، وأي كلمات الزمن تدلّك على الاختيار.",
      items: [
        ["book", "6 short grammar cards (English first, Arabic on tap)", "6 بطاقات شرح (الإنجليزي أولًا، والعربي عند الطلب)"],
        ["quiz", "16 guided exercises (4 of each type), one question per screen", "16 تمرينًا موجّهًا (4 من كل نمط)، سؤال في كل شاشة"]
      ]
    },
    reading: {
      dEn: "An email from Noor, a young Saudi scientist at a research station in Antarctica, to her friend Reem.",
      d: "إيميل من نور، عالِمة سعودية شابة في محطة أبحاث بالقارة القطبية الجنوبية، إلى صديقتها ريم.",
      items: [
        ["spark", "Predict before you read", "توقّع قبل القراءة"],
        ["clock", "First reading for the main idea with a comfortable timer (no word taps)", "قراءة أولى للفكرة العامة بمؤقت إرشادي مريح ودون لمس الكلمات"],
        ["mail", "Second reading with word meanings, Oxford links, and 8 evidence questions", "قراءة ثانية مع معاني الكلمات باللمس و8 أسئلة فهم بالدليل من النص"]
      ]
    },
    writing: {
      dEn: "Write at least 4 separate sentences about your daily routine (Present Simple) and something different this month (Present Continuous).",
      d: "اكتب 4 جمل منفصلة على الأقل عن روتينك اليومي (المضارع البسيط) وعن شيء مختلف تفعله هذا الشهر (المضارع المستمر).",
      items: [
        ["pen", "At least 4 separate sentences (capital letter + period for each)", "4 جمل منفصلة على الأقل بحرف كبير ونقطة لكل جملة"],
        ["spark", "4 instant checks: sentences, Present Simple, Present Continuous, and 2 lesson words", "4 فحوص فورية: عدد الجمل، والمضارع البسيط، والمضارع المستمر، وكلمتان من الدرس"]
      ]
    },
    quiz: {
      dEn: "10 shuffled questions on today's grammar, words and legal phrase (80% to pass: 8 of 10), followed by a full Lesson Error Analysis.",
      d: "اختبار قصير من 10 أسئلة في قاعدة الدرس وكلماته وعبارته القانونية (النجاح من 80%: 8 من 10)، يليه تحليل شامل لأخطاء الدرس وأسبابها.",
      items: [
        ["quiz", "10 questions: 6 grammar, 3 vocabulary, 1 legal (80% passing score)", "10 أسئلة: 6 في القواعد و3 في المفردات وسؤال قانوني (النجاح من 80%)"],
        ["review", "Error Analysis grouped by error type and cause", "تحليل أخطاء الدرس وأسبابها مصنّفة حسب نوع الخطأ"]
      ]
    }
  },

  /* ---------- المرحلة 1: الاسترجاع النشط (5 عناصر من الدرس التأسيسي الخامس u0l5، بجمل جديدة) ---------- */
  recall: [
    {
      id: "rc-0",
      promptAr: "حريص / منتبه (صفة من الدرس التأسيسي الخامس تنتهي بالمقطع ful)",
      promptEn: "Adjective: paying attention so you don't make mistakes (ends in -ful)",
      sentPre: "My new phone was expensive, so I am very",
      sentPost: "with it.",
      ans: ["careful"],
      hint: "c _ _ _ _ _ l (7 letters)",
      spellNoteEn: "care + ful = careful: the suffix -ful has only ONE 'l' (never 'carefull').",
      spellNote: "care + ful تصبح careful: المقطع ful بلام واحدة فقط، ولا نكتب carefull.",
      errCat: "spelling"
    },
    {
      id: "rc-1",
      promptAr: "مفيد / نافع (صفة تنتهي بالمقطع ful)",
      promptEn: "Adjective: good for doing a job or solving a problem (ends in -ful)",
      sentPre: "This weather app is very",
      sentPost: "because it warns me about rain.",
      ans: ["useful"],
      hint: "u _ _ _ _ l (6 letters)",
      spellNoteEn: "use + ful = useful (one 'l'). It starts with a 'yoo' sound, so we say 'a useful app'.",
      spellNote: "use + ful تصبح useful بلام واحدة، وتبدأ بصوت «يو» فنقول a useful app.",
      errCat: "spelling"
    },
    {
      id: "rc-2",
      promptAr: "يراجع ليتأكد من صحة الشيء (صيغة ing بعد is، وهو فعل من الدرس التأسيسي الخامس)",
      promptEn: "Looking carefully to make sure something is right (the -ing form after 'is')",
      sentPre: "Don't leave yet. The teacher is",
      sentPost: "our exam papers right now.",
      ans: ["checking"],
      hint: "c _ _ _ _ _ _ g (8 letters)",
      spellNoteEn: "check ends in two consonants (-ck), so just add -ing: checking (no double letter).",
      spellNote: "check تنتهي بحرفين ساكنين (ck)، فنضيف ing مباشرة: checking، دون مضاعفة.",
      errCat: "spelling"
    },
    {
      id: "rc-3",
      promptAr: "جميل / جميلة (صفة تنتهي بالمقطع ful بلام واحدة)",
      promptEn: "Adjective: very nice to look at (ends in -ful)",
      sentPre: "From space, our planet looks blue and",
      sentPost: ".",
      ans: ["beautiful"],
      hint: "b _ _ _ _ _ _ _ l (9 letters)",
      spellNoteEn: "b-e-a-u-t-i-f-u-l: 'beau' at the start and only ONE 'l' at the end (never 'butefull').",
      spellNote: "تُكتب b-e-a-u-t-i-f-u-l: تبدأ بـ beau وتنتهي بلام واحدة، ولا نكتب butefull.",
      errCat: "spelling"
    },
    {
      id: "rc-4",
      promptAr: "مستند رسمي (العبارة القانونية من الدرس التأسيسي الخامس: official ___)",
      promptEn: "Legal phrase from Foundation Lesson 5: official ___ (a paper from the government or a university)",
      sentPre: "My university sent me an official",
      sentPost: "with my exam results.",
      ans: ["document", "official document"],
      isLegal: true,
      hint: "d _ _ _ _ _ _ t (8 letters)",
      spellNoteEn: "Spelled d-o-c-u-m-e-n-t (with 'c', not 'k'). We say 'an official document' because 'official' starts with a vowel sound.",
      spellNote: "تُكتب d-o-c-u-m-e-n-t بحرف c لا k، ونقول an official document لأن official تبدأ بصوت علة.",
      errCat: "vocab"
    }
  ],

  /* ---------- العبارة القانونية اليومية (المسار القانوني A2) ---------- */
  legalPhrase: {
    en: "sign a contract",
    headword: "contract",
    pos: "legal phrase",
    ar: "يوقّع عقدًا",
    say: "سَايْن أَ كُونْتْرَاكْت",
    ex: "When my father buys a car, he signs a contract with the seller.",
    exAr: "حين يشتري أبي سيارة يوقّع عقدًا مع البائع.",
    tipEn: "Legal collocation: sign a contract (verb + a + noun). With he / she / it: signs a contract. The 'g' in 'sign' is silent.",
    tip: "متلازمة قانونية أساسية: sign a contract (يوقّع عقدًا)، ومع he / she / it تصبح signs a contract، وحرف g في sign صامت لا يُنطق.",
    legal: true,
    oxfordSlug: "contract_1",
    wikiFiles: ["En-us-sign.ogg", "En-uk-contract (noun).ogg"],
    wikiCredit: "File:En-us-sign.ogg & File:En-uk-contract (noun).ogg · Wikimedia Commons"
  },

  /* ---------- المفردات (7 كلمات + العبارة القانونية = 8 عبارات، والمتلازمات في tipEn / tip) ---------- */
  vocab: [
    { en: "scientist", pos: "noun", ar: "عالِم / عالِمة", say: "سَايِنْتِسْت",
      ex: "My aunt is a scientist, and she works with sea animals.", exAr: "عمتي عالِمة، وتعمل مع الحيوانات البحرية.",
      tipEn: "Use 'a' before a job: She is a scientist (not 'She is scientist'). Word family: science (noun), scientific (adjective).",
      tip: "نضع a قبل المهنة: She is a scientist، ولا نقول She is scientist. ومن العائلة نفسها: science (علم) وscientific (علمي).",
      oxfordSlug: "scientist",
      wikiFile: "LL-Q1860 (eng)-Vealhurl-scientist.wav",
      wikiCredit: "File:LL-Q1860 (eng)-Vealhurl-scientist.wav · Vealhurl / Lingua Libre, Wikimedia Commons" },
    { en: "research", pos: "noun", ar: "بحث علمي / أبحاث", say: "رِسِيرْتش",
      ex: "Doctors do research to find new medicines.", exAr: "يُجري الأطباء أبحاثًا ليكتشفوا أدوية جديدة.",
      tipEn: "Collocation: do research (on something), not 'make research'. It is uncountable: say 'some research', not 'a research'.",
      tip: "نقول do research (on …) ولا نقول make research، وهي غير معدودة: نقول some research ولا نقول a research.",
      oxfordSlug: "research_1",
      wikiFile: "En-us-research.ogg",
      wikiCredit: "File:En-us-research.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "data", pos: "noun", ar: "بيانات", say: "دَيْتَا",
      ex: "Please check the data again before you send the report.", exAr: "من فضلك راجع البيانات مرة أخرى قبل أن ترسل التقرير.",
      tipEn: "Collocations: collect data (gather facts and numbers) and check the data (look at it carefully). It is usually uncountable: the data is ready.",
      tip: "متلازمتان: collect data (يجمع البيانات) وcheck the data (يراجع البيانات)، وهي غالبًا غير معدودة: the data is ready.",
      oxfordSlug: "data",
      wikiFile: "En-us-data1.ogg",
      wikiCredit: "File:En-us-data1.ogg · Wikimedia Commons" },
    { en: "measure", pos: "verb", ar: "يقيس", say: "مِيجَر",
      ex: "This small machine measures the temperature in our garden every hour.", exAr: "يقيس هذا الجهاز الصغير درجة الحرارة في حديقتنا كل ساعة.",
      tipEn: "Collocation: measure the temperature (find how hot or cold something is). The 's' in measure sounds like the 's' in 'television'.",
      tip: "متلازمة: measure the temperature (يقيس درجة الحرارة). وحرف s فيها يُنطق صوتًا قريبًا من الجيم الشامية الخفيفة، كما في television.",
      oxfordSlug: "measure_1",
      wikiFile: "En-us-measure.ogg",
      wikiCredit: "File:En-us-measure.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "safe", pos: "adjective", ar: "آمن", say: "سَيْف",
      ex: "Is the water in this river safe to drink?", exAr: "هل ماء هذا النهر آمن للشرب؟",
      tipEn: "Opposite: dangerous. Pattern: It is (not) safe to + verb. Spelling: safe (adjective, with f) vs. save (verb, with v).",
      tip: "عكسها dangerous (خطير)، ونقول It is (not) safe to + فعل. وانتبه: safe بالفاء صفة، أما save بالـ v ففعل بمعنى يحفظ أو ينقذ.",
      oxfordSlug: "safe_1",
      wikiFile: "En-us-safe.ogg",
      wikiCredit: "File:En-us-safe.ogg · Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "strange", pos: "adjective", ar: "غريب / غير مألوف", say: "سْتْرَيْنْج",
      ex: "My laptop is making a strange noise today.", exAr: "يُصدر حاسوبي المحمول صوتًا غريبًا اليوم.",
      tipEn: "strange = unusual or surprising. Related noun: a stranger = a person you do not know.",
      tip: "strange تعني غير مألوف أو مثير للاستغراب، والاسم stranger يعني شخصًا غريبًا لا نعرفه.",
      oxfordSlug: "strange",
      wikiFile: "En-us-strange.ogg",
      wikiCredit: "File:En-us-strange.ogg · Dvortygirl / Wikimedia Commons (CC BY-SA 3.0)" },
    { en: "miss", pos: "verb", ar: "يشتاق إلى / يفتقد", say: "مِس",
      ex: "When I travel for work, I miss my family a lot.", exAr: "حين أسافر للعمل أشتاق إلى عائلتي كثيرًا.",
      tipEn: "Collocation: miss my family / miss home (feel sad because they are far away). With he / she / it, add -es: she misses. Second meaning: miss the bus = be too late for it.",
      tip: "متلازمة: miss my family أو miss home (يشتاق إلى أهله أو بيته لبُعدهم)، ومع he / she / it نضيف es: she misses. ولها معنى ثانٍ: miss the bus أي تفوته الحافلة.",
      oxfordSlug: "miss_1",
      wikiFile: "En-us-miss.ogg",
      wikiCredit: "File:En-us-miss.ogg · Wikimedia Commons (CC BY-SA 3.0)" }
  ],

  vocabGaps: [
    { s: "The weather station collects ___ about wind and rain all day.", opts: ["research", "data", "scientist"], a: 1,
      whyEn: "'collect data' means gather facts and numbers, and a weather station does this all day. 'research' and 'scientist' don't fit after 'collects'.",
      why: "collect data تعني يجمع البيانات من أرقام ومعلومات، ومحطة الطقس تفعل ذلك طوال اليوم؛ ولا تصح research ولا scientist بعد collects.", errCat: "vocab" },
    { s: "My sister is doing ___ on desert plants for her master's degree.", opts: ["research", "data", "scientist"], a: 0,
      whyEn: "The collocation is 'do research' (here: is doing research). We don't say 'do data' or 'do scientist'.",
      why: "المتلازمة الصحيحة do research (وهنا بالمستمر is doing research)، ولا نقول do data ولا do scientist.", errCat: "vocab" },
    { s: "Dr. Huda studies stars and planets at the university. She is a ___.", opts: ["data", "research", "scientist"], a: 2,
      whyEn: "A 'scientist' is a person who works in science. 'data' and 'research' are things, not people.",
      why: "scientist هو الشخص الذي يعمل في العلوم، أما data وresearch فأشياء لا أشخاص.", errCat: "vocab" },
    { s: "Put this thermometer in the water to ___ the temperature.", opts: ["measure", "miss", "sign"], a: 0,
      whyEn: "A thermometer is a tool to 'measure' the temperature: to find how hot or cold something is.",
      why: "الترمومتر أداة لقياس درجة الحرارة، فالفعل المناسب measure (يقيس).", errCat: "vocab" },
    { s: "Wear your seat belt in the car; it keeps you ___.", opts: ["busy", "safe", "strange"], a: 1,
      whyEn: "'safe' means protected from danger, and a seat belt keeps you safe in an accident.",
      why: "safe تعني في مأمن من الخطر، وحزام الأمان يحميك عند الحوادث.", errCat: "vocab" },
    { s: "It is snowing in Riyadh today. How ___!", opts: ["helpful", "safe", "strange"], a: 2,
      whyEn: "'strange' means unusual or surprising, and snow in Riyadh almost never happens.",
      why: "strange تعني غريبًا غير مألوف، والثلج في الرياض نادر جدًا.", errCat: "vocab" },
    { s: "My grandfather lives alone in Hail, and my father ___ him a lot.", opts: ["misses", "measures", "signs"], a: 0,
      whyEn: "'miss' means feel sad because someone you love is far away. With he: misses (-es after -ss).",
      why: "miss تعني يشتاق إلى من يحب لبُعده، ومع he تصبح misses بإضافة es بعد ss.", errCat: "vocab" },
    { s: "Before my brother moves into his new apartment, he has to ___ with the owner.", opts: ["miss a contract", "sign a contract", "measure a contract"], a: 1,
      whyEn: "The legal collocation is 'sign a contract': write your name on an official agreement. We don't 'miss' or 'measure' a contract.",
      why: "المتلازمة القانونية sign a contract تعني يوقّع اتفاقًا رسميًا باسمه، ولا يصح miss ولا measure مع contract.", errCat: "vocab" }
  ],

  /* ---------- المرحلة 3: بطاقات الشرح (6 بطاقات: 4 شرح + الأخطاء + الخلاصة) ---------- */
  gCards: [
    {
      tEn: "Habit or Right Now?",
      t: "عادة أم الآن؟",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Habit or Right Now?</span><small>عادة أم الآن؟</small></h2>' +
        '<p class="en-p" dir="ltr">English has two present tenses. Ask yourself: is it a <b>habit or a fact</b>, or is it happening <b>now or only for a short time</b>?</p>' +
        '<div class="xbox"><span class="xtag s" dir="ltr">Habit or fact · Present Simple · المضارع البسيط</span><p class="xen">My grandfather drinks tea every evening.<br>Penguins swim very well.</p></div>' +
        '<div class="xbox"><span class="xtag c" dir="ltr">Now or temporary · Present Continuous · المضارع المستمر</span><p class="xen">Right now, my mother is cooking lunch.<br>This month, my cousin is staying with us.</p></div>' +
        TL_SVG,
      arHtml:
        '<p>في العربية نقول «يشرب» و«يطبخ» للحالتين، أما الإنجليزية ففيها زمنان:</p>' +
        '<p>١) <b>المضارع البسيط</b> لما يتكرر عادةً أو لما هو حقيقة ثابتة: <bdi class="en">My grandfather drinks tea every evening.</bdi></p>' +
        '<p>٢) <b>المضارع المستمر</b> لما يحدث الآن لحظة الكلام، أو لوضع مؤقت في هذه الفترة: <bdi class="en">This month, my cousin is staying with us.</bdi></p>'
    },
    {
      tEn: "Present Simple: Form & -s Spelling",
      t: "المضارع البسيط: التركيب وإملاء s",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Present Simple: Form & -s Spelling</span><small>المضارع البسيط: التركيب وإملاء s</small></h2>' +
        '<p class="en-p" dir="ltr">Use the base verb, and add <b>-s</b> with <b>he / she / it</b> (one person or thing). Never put <b>am / is / are</b> before the verb.</p>' +
        '<div class="tbl"><table><thead><tr><th>Subject</th><th>Positive · الإثبات</th><th>Negative · النفي</th><th>Question · السؤال</th></tr></thead><tbody>' +
        '<tr><td>I / you / we / they</td><td>We <span class="hs">cook</span></td><td>We <span class="hs">don\'t cook</span></td><td><span class="hs">Do</span> you <span class="hs">cook</span>?</td></tr>' +
        '<tr><td>he / she / it</td><td>He <span class="hs">cooks</span></td><td>He <span class="hs">doesn\'t cook</span></td><td><span class="hs">Does</span> he <span class="hs">cook</span>?</td></tr></tbody></table></div>' +
        '<div class="tip" dir="ltr"><p><b>Remember · تذكّر:</b> after <b>doesn\'t</b> and <b>Does</b>, the verb has no -s (more about questions in Lesson 2).</p><div class="pairs"><span class="yes">Does it rain here in May?</span><span class="no">Does it rains here in May?</span></div></div>' +
        '<h3 class="bi-h"><span class="en" dir="ltr">Spelling with he / she / it</span><small>إملاء الفعل مع he / she / it</small></h3>' +
        '<ul class="spell" dir="ltr">' +
          '<li>Most verbs: add <b>-s</b><span class="s-en">read → reads · drive → drives</span></li>' +
          '<li>After <b>-s, -ss, -sh, -ch, -x, -o</b>: add <b>-es</b><span class="s-en">miss → misses · fix → fixes · go → goes</span></li>' +
          '<li>Consonant + <b>y</b>: change y to <b>-ies</b><span class="s-en">carry → carries · fly → flies</span></li>' +
          '<li>Vowel + <b>y</b>: just add <b>-s</b><span class="s-en">stay → stays · enjoy → enjoys</span></li>' +
          '<li>Irregular:<span class="s-en">have → has</span></li>' +
        '</ul>',
      arHtml:
        '<p>نستخدم الفعل في صورته المجردة، ونضيف <bdi class="en">s</bdi> مع <bdi class="en">he / she / it</bdi> في الإثبات فقط، ولا نضع <bdi class="en">am / is / are</bdi> قبل الفعل.</p>' +
        '<p>وفي النفي والسؤال نستعين بـ <bdi class="en">don\'t / doesn\'t</bdi> و<bdi class="en">Do / Does</bdi>، ويعود الفعل بعدها مجردًا بلا <bdi class="en">s</bdi>؛ وتفصيل الأسئلة في الدرس الثاني.</p>' +
        '<p><b>إملاء s:</b> نضيف <bdi class="en">es</bdi> بعد <bdi class="en">s, ss, sh, ch, x, o</bdi> (<bdi class="en">misses, goes</bdi>)، ونحوّل <bdi class="en">y</bdi> إلى <bdi class="en">ies</bdi> إذا سبقها حرف ساكن (<bdi class="en">carries</bdi>)، وتبقى إذا سبقها حرف علة (<bdi class="en">stays</bdi>).</p>'
    },
    {
      tEn: "Present Continuous: Form & -ing Spelling",
      t: "المضارع المستمر: التركيب وإملاء ing",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Present Continuous: Form & -ing Spelling</span><small>المضارع المستمر: التركيب وإملاء ing</small></h2>' +
        '<p class="formula"><b>am / is / are</b> + verb<b>-ing</b></p>' +
        '<p class="en-p" dir="ltr">You always need <b>am / is / are</b>. A sentence with only the -ing verb is not complete.</p>' +
        '<div class="tbl"><table><thead><tr><th>Subject</th><th>Positive · الإثبات</th><th>Negative · النفي</th><th>Question · السؤال</th></tr></thead><tbody>' +
        '<tr><td>I</td><td>I<span class="hc">\'m waiting</span></td><td>I<span class="hc">\'m not waiting</span></td><td><span class="hc">Am</span> I <span class="hc">waiting</span>?</td></tr>' +
        '<tr><td>he / she / it</td><td>She<span class="hc">\'s waiting</span></td><td>She <span class="hc">isn\'t waiting</span></td><td><span class="hc">Is</span> she <span class="hc">waiting</span>?</td></tr>' +
        '<tr><td>you / we / they</td><td>We<span class="hc">\'re waiting</span></td><td>We <span class="hc">aren\'t waiting</span></td><td><span class="hc">Are</span> you <span class="hc">waiting</span>?</td></tr></tbody></table></div>' +
        '<h3 class="bi-h"><span class="en" dir="ltr">Spelling of -ing</span><small>إملاء ing</small></h3>' +
        '<ul class="spell" dir="ltr">' +
          '<li>Most verbs: add <b>-ing</b><span class="s-en">cook → cooking · play → playing</span></li>' +
          '<li>Keep the <b>y</b>, never drop it<span class="s-en">study → studying · fly → flying</span></li>' +
          '<li>Silent <b>-e</b>: drop the e<span class="s-en">drive → driving · make → making</span></li>' +
          '<li>Short verb, one vowel + one consonant: double the last letter (not w, x, y)<span class="s-en">stop → stopping · swim → swimming</span></li>' +
          '<li>Two vowels before the last letter: no double<span class="s-en">rain → raining · read → reading</span></li>' +
        '</ul>',
      arHtml:
        '<p>المضارع المستمر يحتاج دائمًا إلى <bdi class="en">am / is / are</bdi> قبل الفعل المنتهي بـ <bdi class="en">ing</bdi>، فالجملة لا تكتمل بالفعل وحده.</p>' +
        '<p>وفي النفي نضيف <bdi class="en">not</bdi> بعد <bdi class="en">am / is / are</bdi>، وفي السؤال نقدّم <bdi class="en">Am / Is / Are</bdi> على الفاعل.</p>' +
        '<p><b>إملاء ing:</b> تبقى <bdi class="en">y</bdi> دائمًا (<bdi class="en">studying</bdi>)، ونحذف <bdi class="en">e</bdi> الصامتة (<bdi class="en">driving</bdi>)، ونضاعف الحرف الأخير في الفعل القصير إذا سبقه حرف علة واحد (<bdi class="en">stopping</bdi>)، ولا نضاعفه بعد حرفي علة (<bdi class="en">raining</bdi>).</p>'
    },
    {
      tEn: "Time Signal Words",
      t: "كلمات تدلّك على الزمن",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Time Signal Words</span><small>كلمات تدلّك على الزمن</small></h2>' +
        '<p class="en-p" dir="ltr">These words help you choose the right tense:</p>' +
        '<div class="sigs">' +
          '<div class="sig s"><h3 dir="ltr">Present Simple<small class="sig-ar">العادة والحقيقة</small></h3><ul><li>every day</li><li>every morning</li><li>usually</li><li>on Fridays</li></ul></div>' +
          '<div class="sig c"><h3 dir="ltr">Present Continuous<small class="sig-ar">الآن والوضع المؤقت</small></h3><ul><li>now</li><li>right now</li><li>at the moment</li><li>this month</li><li>these days</li></ul></div>' +
        '</div>' +
        '<div class="tip" dir="ltr"><p><b>Word order · ترتيب الكلمات:</b> <b>usually</b> comes before the main verb (more in Lesson 3).</p><div class="pairs"><span class="yes">My uncle usually walks to work.</span><span class="no">My uncle walks usually to work.</span></div></div>',
      arHtml:
        '<p>كلمات العادة والتكرار (<bdi class="en">every day, usually, on Fridays</bdi>) تأتي مع <b>المضارع البسيط</b>.</p>' +
        '<p>وكلمات اللحظة الحاضرة أو الفترة المؤقتة (<bdi class="en">now, right now, at the moment, this month, these days</bdi>) تأتي مع <b>المضارع المستمر</b>.</p>' +
        '<p>وتوضع <bdi class="en">usually</bdi> قبل الفعل الأساسي، وتفصيل كلمات التكرار في الدرس الثالث. وانتبه لحرفي الجر: <bdi class="en">on Fridays</bdi> و<bdi class="en">at the moment</bdi>.</p>'
    },
    {
      tEn: "Common Arab Mistakes",
      t: "أخطاء العرب الشائعة",
      bilingual: true,
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Common Arab Mistakes</span><small>أخطاء يقع فيها كثير من العرب</small></h2>' +
        '<ul class="mist">' +
          '<li><span class="no">I am live in Riyadh with my family.</span><span class="yes">I live in Riyadh with my family.</span><p class="en-m" dir="ltr">The Present Simple has no <b>am / is / are</b> before the verb.</p><p>لا نضع <bdi class="en">am / is / are</bdi> قبل الفعل في المضارع البسيط.</p></li>' +
          '<li><span class="no">My brother watch the news every evening.</span><span class="yes">My brother watches the news every evening.</span><p class="en-m" dir="ltr">With <b>he / she / it</b>, the verb needs <b>-s</b> or <b>-es</b>.</p><p>مع <bdi class="en">he / she / it</bdi> يحتاج الفعل إلى <bdi class="en">s</bdi> أو <bdi class="en">es</bdi>.</p></li>' +
          '<li><span class="no">Sorry, I can\'t answer. I drive now.</span><span class="yes">Sorry, I can\'t answer. I\'m driving now.</span><p class="en-m" dir="ltr">For an action happening <b>now</b>, use <b>am / is / are + -ing</b>, not the Present Simple.</p><p>لما يحدث الآن نستخدم <bdi class="en">am / is / are</bdi> مع الفعل المنتهي بـ <bdi class="en">ing</bdi>، لا المضارع البسيط.</p></li>' +
          '<li><span class="no">i am studing in the library this week.</span><span class="yes">I am studying in the library this week.</span><p class="en-m" dir="ltr">Always write <b>I</b> as a capital letter, and keep the <b>y</b> before -ing: <b>studying</b>.</p><p>نكتب الضمير <bdi class="en">I</bdi> بحرف كبير دائمًا، ونُبقي <bdi class="en">y</bdi> قبل <bdi class="en">ing</bdi>: <bdi class="en">studying</bdi>.</p></li>' +
        '</ul>'
    },
    {
      tEn: "Summary",
      t: "الخلاصة",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Quick Summary</span><small>الخلاصة</small></h2>' +
        '<div class="sumc" dir="ltr"><h3>In Four Lines · في أربعة أسطر</h3>' +
          '<p><b>Present Simple · المضارع البسيط</b><span>Habits and facts: I work · she works · he doesn\'t work</span></p>' +
          '<p><b>Present Continuous · المضارع المستمر</b><span>Now and temporary: am / is / are + -ing</span></p>' +
          '<p><b>Spelling · الإملاء</b><span>works, watches, studies · studying, driving, stopping, raining</span></p>' +
          '<p><b>Time words · كلمات الزمن</b><span>every day, usually, on Fridays · now, at the moment, this month</span></p>' +
        '</div>' +
        '<p class="en-p" dir="ltr">Now let\'s practice: 16 guided exercises (4 of each type), one question per screen.</p>',
      arHtml:
        '<p><b>المضارع البسيط:</b> للعادة والروتين والحقائق، ومع <bdi class="en">he / she / it</bdi> نضيف <bdi class="en">s</bdi>.</p>' +
        '<p><b>المضارع المستمر:</b> لما يحدث الآن أو في فترة مؤقتة، ولا يصح إلا مع <bdi class="en">am / is / are</bdi>.</p>' +
        '<p>والآن نتدرّب: 16 تمرينًا موجّهًا (4 من كل نمط)، سؤال في كل شاشة.</p>'
    }
  ],

  /* ---------- المرحلة 3: التمارين (16 تمرينًا، 4 من كل نمط، بجمل جديدة لم ترد في الشرح) ---------- */
  gA: [
    { s: "In Abha, it ___ a lot in August.", opts: ["is raining", "rains"], a: 1,
      whyEn: "This is a general fact about the weather in Abha every August, not something happening now, so we use Present Simple; 'it' takes -s: rains.",
      why: "هذه حقيقة عامة عن طقس أبها في كل أغسطس لا حدث يقع الآن، فنستخدم المضارع البسيط، ومع it نضيف s: rains.", errCat: "tense" },
    { s: "Shh! My little brother ___ his homework at the moment.", opts: ["is doing", "does"], a: 0,
      whyEn: "'Shh!' and 'at the moment' show that the action is happening now, so we use Present Continuous: is doing.",
      why: "كلمة Shh! وعبارة at the moment تدلان على حدث يقع الآن، فنستخدم المضارع المستمر: is doing.", errCat: "tense" },
    { s: "My parents ___ in Jeddah, but this month they are visiting us in Riyadh.", opts: ["live", "are living"], a: 0,
      whyEn: "Their home in Jeddah is a permanent situation, so Present Simple: live. The visit this month is the temporary part (are visiting).",
      why: "سكنهم في جدة وضع دائم فنستخدم المضارع البسيط live، أما الزيارة هذا الشهر فمؤقتة (are visiting).", errCat: "tense" },
    { s: "We don't have lectures ___ Fridays.", opts: ["in", "on"], a: 1,
      whyEn: "We use 'on' with days of the week (on Fridays, on Monday); 'in' is for months and years.",
      why: "نستخدم on مع أيام الأسبوع (on Fridays)، أما in فللشهور والسنين.", errCat: "articles_prep" }
  ],

  gB: [
    { s: "Our neighbor is repair computers in a small shop.", ok: false, fix: "Our neighbor repairs computers in a small shop.",
      whyEn: "Never put 'is' before a base verb. A job is a permanent fact, so use Present Simple with -s: repairs.",
      why: "لا نضع is قبل الفعل المجرد، والوظيفة حقيقة دائمة فنستخدم المضارع البسيط مع s: repairs.", errCat: "be_verb" },
    { s: "These days, my father is learning to use his new smartphone.", ok: true,
      whyEn: "Correct: 'These days' shows a temporary situation, so is + learning (Present Continuous) is right.",
      why: "صحيحة: These days تدل على فترة مؤقتة، فالمضارع المستمر is learning في موضعه.", errCat: "tense" },
    { s: "My brother is studing in his room right now.", ok: false, fix: "My brother is studying in his room right now.",
      whyEn: "Keep the 'y' when you add -ing: study → studying (never 'studing').",
      why: "نُبقي حرف y عند إضافة ing: study ← studying، ولا نكتب studing.", errCat: "spelling" },
    { s: "My cousin is studying to be engineer.", ok: false, fix: "My cousin is studying to be an engineer.",
      whyEn: "A singular job needs 'a' or 'an' (to be an engineer). 'engineer' starts with a vowel sound, so we say 'an engineer'.",
      why: "المهنة المفردة تحتاج a أو an، وكلمة engineer تبدأ بصوت علة فنقول an engineer.", errCat: "articles_prep" }
  ],

  gC: [
    { pre: "My grandmother", verb: "try", post: "a new recipe every weekend.", ans: ["tries"],
      whyEn: "'every weekend' is a habit, so Present Simple. With 'my grandmother' (she), consonant + y changes to -ies: tries.",
      why: "every weekend تدل على عادة فنستخدم المضارع البسيط، ومع she تتحول y المسبوقة بحرف ساكن إلى ies: tries.", errCat: "spelling" },
    { pre: "Please call me later.", verb: "I / write", post: "a report for my manager right now.", ans: ["I'm writing", "I am writing"], exact: true,
      whyEn: "'right now' means at this moment, so Present Continuous: I'm writing (drop the silent e in write). Write 'I' as a capital letter.",
      why: "right now تعني في هذه اللحظة فنستخدم المضارع المستمر، ونحذف e الصامتة: writing، ونكتب I بحرف كبير.", errCat: "tense" },
    { pre: "My grandfather", verb: "not / use", post: "a computer; he reads the newspaper on paper.", ans: ["doesn't use", "does not use"],
      whyEn: "This is a habit about 'my grandfather' (he): doesn't + base verb, so 'use' has no -s.",
      why: "عادة مع he: ننفي بـ doesn't ثم الفعل المجرد use بلا s.", errCat: "agreement" },
    { pre: "At the moment, my classmates", verb: "prepare", post: "for their final exams, so the library is very busy.", ans: ["are preparing"],
      whyEn: "'At the moment' shows an action happening now, and 'my classmates' is plural: are preparing (drop the e in prepare).",
      why: "At the moment تدل على حدث يقع الآن، والفاعل جمع: are preparing، مع حذف e من prepare.", errCat: "tense" }
  ],

  gD: [
    { chips: ["driving", "Is", "to work today?", "your sister"], ans: "Is your sister driving to work today?",
      whyEn: "A Present Continuous question: Is + subject (your sister) + verb-ing (driving) + the rest.",
      why: "سؤال المضارع المستمر: Is ثم الفاعل your sister ثم الفعل driving ثم بقية الجملة.", errCat: "word_order" },
    { chips: ["washes his car", "usually", "on Fridays.", "My brother"], ans: "My brother usually washes his car on Fridays.",
      whyEn: "'usually' goes before the main verb (washes). 'My brother' is he, so wash takes -es: washes.",
      why: "usually تأتي قبل الفعل الأساسي washes، ومع he نضيف es بعد sh: washes.", errCat: "word_order" },
    { chips: ["working", "at the moment.", "My printer", "isn't"], ans: "My printer isn't working at the moment.",
      whyEn: "Present Continuous negative: subject + isn't + verb-ing + time (at the moment).",
      why: "نفي المضارع المستمر: الفاعل ثم isn't ثم الفعل ing ثم الزمن at the moment.", errCat: "word_order" },
    { chips: ["drink coffee", "My father", "after lunch.", "doesn't"], ans: "My father doesn't drink coffee after lunch.",
      whyEn: "Present Simple negative with he: doesn't + base verb (drink, without -s).",
      why: "نفي المضارع البسيط مع he: doesn't ثم الفعل المجرد drink بلا s.", errCat: "word_order" }
  ],

  /* ---------- المرحلة 4: القراءة (إيميل نور: النص كما هو، والكلمات المحذوفة من المفردات شرحٌ بـ [[ ]]) ---------- */
  reading: {
    title: "Hello from Antarctica!",
    from: "Noor", to: "Reem",
    fromMeta: "Noor · Research Station, Antarctica",
    art: SUN_SVG,
    targetSeconds: 110,
    // أسماء ألوان التظليل في القراءة الثانية
    lg1: "Present Simple · المضارع البسيط",
    lg2: "Present Continuous · المستمر",
    lg3: "Signal word · كلمة إشارة",
    hlLabel: "Highlight tenses · إظهار الأزمنة",
    insight: {
      titleEn: "Tenses in the Email",
      titleAr: "نظرة على الأزمنة في الإيميل",
      l1En: "Noor uses Present Simple for her daily routine:",
      ex1: "I wake up at 6:30 · I check the data",
      l2En: "And Present Continuous for this month and right now:",
      ex2: "I'm studying penguins · I'm sitting in the kitchen",
      arHtml: '<p>نور تستخدم <b style="color:var(--dark)">المضارع البسيط</b> لروتينها اليومي، و<b style="color:var(--accent-ink)">المضارع المستمر</b> لما تفعله هذا الشهر وفي هذه اللحظة.</p>'
    },
    introEn: "Noor is a young Saudi scientist from Jeddah. She is working at a research station in Antarctica during the Antarctic summer. She wrote this email to her friend Reem.",
    intro: "نور عالِمة سعودية شابة من جدة، تعمل في محطة أبحاث بالقارة القطبية الجنوبية في صيف تلك القارة، وكتبت إيميلًا لصديقتها ريم.",
    // <<s:..>> مضارع بسيط · <<c:..>> مضارع مستمر · <<t:..>> كلمة إشارة زمنية
    // {word|key} كلمة من مفردات الدرس الثماني وحدها · [[text|معنى]] كلمة مساعدة
    paras: [
      "Hi Reem,",
      "How are you? I<<c:'m writing>> to you from a {research} [[station|محطة]] in Antarctica! I <<s:work>> here with a [[team|فريق]] of twelve {scientists|scientist} from eight [[different|مختلفة]] [[countries|دول]].",
      "My day <<s:starts>> early. I <<s:[[wake up|يستيقظ]]>> at 6:30 and <<s:have>> [[breakfast|الفطور]] with the [[team|فريق]]. Then we <<s:start>> work at eight. I <<t:[[usually|عادةً]]>> <<s:[[spend|يقضي (وقتًا)]]>> the morning in the [[lab|مختبر]]. I <<s:[[check|يراجع / يفحص]]>> the {data} from our [[machines|الأجهزة]], and I <<s:{measure}>> the [[temperature|درجة الحرارة]] of the [[sea water|ماء البحر]]. In the afternoon, we <<t:[[often|غالبًا]]>> <<s:go>> [[outside|إلى الخارج]], but only in [[groups|مجموعات]]. It's never {safe} to go [[alone|بمفرده]]!",
      "Life here is very [[different from|مختلفة عن]] life at home. It's summer now, so the sun <<s:doesn't [[go down|تغيب]]>> [[at all|إطلاقًا]]. It's {strange} to see the sun at [[midnight|منتصف الليل]]! I <<s:don't sleep>> very well, so I <<s:wear>> a [[sleep mask|قناع النوم]] <<t:every night>>.",
      "<<t:This month>>, I<<c:'m studying>> [[penguins|البطاريق]]. I<<c:'m [[counting|يعُدّ (count)]]>> them and <<c:[[checking|يفحص (check)]]>> their [[health|صحة]]. <<t:Right now>>, it's nine o'clock in the evening, and I<<c:'m sitting>> in the [[kitchen|المطبخ]]. My friend Kenji from Japan <<c:is cooking>> dinner for [[everyone|الجميع]], and Ana from Brazil <<c:is teaching>> us a [[card game|لعبة ورق]]. We<<c:'re learning>> a lot about [[each other's|بعضنا البعض]] [[cultures|ثقافات]].",
      "I <<s:{miss}>> you, and I really <<s:{miss}>> the food at home! But I <<s:love>> my [[job|وظيفة]], and I <<s:learn>> something new <<t:every day>>.",
      "Write soon!<br>Noor"
    ],
    predict: {
      qEn: "What do you think? In the Antarctic summer, the sun…",
      q: "ما توقعك؟ في صيف القارة القطبية الجنوبية، الشمس…",
      optsEn: ["goes down very early", "never goes down at all", "never comes up at all"],
      opts: ["تغيب مبكرًا جدًا", "لا تغيب أبدًا", "لا تشرق أبدًا"], a: 1,
      revealEn: "In the summer there, the sun never sets! Noor writes: 'the sun doesn't go down at all.'",
      reveal: "في الصيف هناك لا تغيب الشمس أبدًا، ونور تقول: the sun doesn't go down at all."
    },
    questions: [
      { q: "Where is Noor writing from?", opts: ["A university in Brazil", "A research station in Antarctica", "A hospital in Japan"], a: 1,
        ev: "I'm writing to you from a research station in Antarctica!",
        whyEn: "In the first lines, Noor says that she is writing from a research station in Antarctica.",
        why: "تقول نور في أول الإيميل إنها تكتب من محطة أبحاث في القارة القطبية الجنوبية.", errCat: "reading" },
      { q: "How many scientists work in Noor's team?", opts: ["Twelve", "Eight", "Thirty"], a: 0,
        ev: "I work here with a team of twelve scientists from eight different countries.",
        whyEn: "There are twelve scientists; eight is the number of countries, not people.",
        why: "عدد العلماء اثنا عشر، أما الثمانية فهو عدد الدول لا عدد الأشخاص.", errCat: "reading" },
      { q: "What does Noor usually do in the morning?", opts: ["She counts penguins outside.", "She cooks breakfast for the team.", "She works in the lab and checks the data."], a: 2,
        ev: "I usually spend the morning in the lab. I check the data from our machines, and I measure the temperature of the sea water.",
        whyEn: "'usually' shows her morning routine: she spends the morning in the lab and checks the data from the machines.",
        why: "كلمة usually تدل على روتينها الصباحي: تقضي الصباح في المختبر وتراجع بيانات الأجهزة.", errCat: "reading" },
      { tf: true, q: "Noor sometimes goes outside alone.", a: false,
        ev: "In the afternoon, we often go outside, but only in groups. It's never safe to go alone!",
        whyEn: "False: they go outside only in groups, because it is never safe to go alone.",
        why: "خطأ؛ فهم يخرجون في مجموعات فقط، لأن الخروج بمفرده ليس آمنًا أبدًا.", errCat: "reading" },
      { q: "Why does Noor wear a sleep mask every night?", opts: ["Because the kitchen is very noisy.", "Because the sun doesn't go down in the summer.", "Because she works at night."], a: 1,
        ev: "It's summer now, so the sun doesn't go down at all. It's strange to see the sun at midnight! I don't sleep very well, so I wear a sleep mask every night.",
        whyEn: "The sun is up all night in the summer, so Noor doesn't sleep well and needs a mask.",
        why: "الشمس لا تغيب صيفًا، فلا تنام نور جيدًا وتحتاج إلى قناع للنوم.", errCat: "reading" },
      { q: "What is Noor studying this month?", opts: ["Penguins", "The weather in Japan", "Card games"], a: 0,
        ev: "This month, I'm studying penguins. I'm counting them and checking their health.",
        whyEn: "'This month' shows a temporary project: she is studying penguins, counting them and checking their health.",
        why: "This month تدل على عمل مؤقت: تدرس نور البطاريق فتعدّها وتفحص صحتها.", errCat: "reading" },
      { q: "What is Kenji doing right now?", opts: ["He's teaching a card game.", "He's sitting in the lab.", "He's cooking dinner for everyone."], a: 2,
        ev: "My friend Kenji from Japan is cooking dinner for everyone, and Ana from Brazil is teaching us a card game.",
        whyEn: "Kenji is cooking dinner for everyone; Ana is the one who is teaching the card game.",
        why: "كنجي يطبخ العشاء للجميع، أما آنا فهي التي تعلّمهم لعبة الورق.", errCat: "reading" },
      { tf: true, q: "Noor misses the food at home, but she loves her job.", a: true,
        ev: "I miss you, and I really miss the food at home! But I love my job, and I learn something new every day.",
        whyEn: "True: she really misses the food at home, but she says 'I love my job'.",
        why: "صحيح؛ فهي تشتاق كثيرًا إلى طعام بلدها، لكنها تقول إنها تحب عملها.", errCat: "reading" }
    ]
  },

  /* ---------- المرحلة 5: الكتابة (4 جمل منفصلة على الأقل: الروتين بالمضارع البسيط، وهذا الشهر بالمستمر) ---------- */
  writing: {
    taskEn: "Write at least 4 separate sentences about your daily routine and about something different that is happening in your life this month. Use at least 2 words from today's lesson.",
    task: "اكتب 4 جمل منفصلة على الأقل عن روتينك اليومي، وعن شيء مختلف يحدث في حياتك هذا الشهر، واستخدم كلمتين على الأقل من كلمات الدرس.",
    placeholder: "I usually …\nThis month, I'm …",
    checks: [
      { k: "sentences", tEn: "At least 4 separate sentences (capital letter + period . for each)", t: "4 جمل منفصلة على الأقل (بحرف كبير ونقطة لكل جملة)",
        ok: function(a){ return a.sentences >= 4; } },
      { k: "simple", tEn: "Present Simple for your routine: at least 1 sentence with a time word (every day, usually, on Fridays) or don't / doesn't", t: "المضارع البسيط لروتينك: جملة على الأقل فيها كلمة زمن (every day أو usually أو on Fridays) أو don't / doesn't", ex: "I usually … · Every morning, my father … · I don't … on Fridays.",
        ok: function(a, text){ return wNorm(text).split(/[.!?,;]+|\b(?:and|but|so|because)\b/i).some(function(c){ return !wHasCont(c) && (W_SIG.test(c) || W_NEG.test(c)); }); } },
      { k: "cont", tEn: "Present Continuous for now or this month: at least 1 sentence with am / is / are + -ing", t: "المضارع المستمر للآن أو لهذا الشهر: جملة على الأقل فيها am / is / are مع فعل ينتهي بـ ing", ex: "This month, I'm … · Right now, my sister is …",
        ok: function(a, text){ return a.cont >= 1 || wHasCont(wNorm(text)); } },
      { k: "vocab", tEn: "At least 2 words/phrases from today's lesson", t: "كلمتان أو عبارتان على الأقل من درس اليوم", ex: "scientist · research · data · measure · safe · strange · miss · sign a contract",
        ok: function(a){ return a.used.length >= 2; } }
    ],
    modelMarked: "I <<t:usually>> <<s:get up>> at six and <<s:drink>> coffee with my parents. <<t:On Sundays>>, I <<s:go>> to the university by bus, and I <<s:check>> my email on the way. I <<s:don't stay up>> late because my first lecture <<s:starts>> at eight. <<t:This month>>, I<<c:'m doing>> {research} for a university [[project|مشروع]], so I<<c:'m collecting>> {data} about traffic in Riyadh. The work <<s:is>> hard, but I<<c:'m enjoying>> it! My older brother <<c:is working>> in Canada <<t:this year>>. We all <<s:{miss}>> him because he <<s:is>> so kind and helpful.",
    model: "I usually get up at six and drink coffee with my parents. On Sundays, I go to the university by bus, and I check my email on the way. I don't stay up late because my first lecture starts at eight. This month, I'm doing research for a university project, so I'm collecting data about traffic in Riyadh. The work is hard, but I'm enjoying it! My older brother is working in Canada this year. We all miss him because he is so kind and helpful.",
    legendEn: "Light blue = Present Simple (habits and facts) · Terracotta = Present Continuous (now and this month) · Dashed = time words",
    legendAr: "الأزرق الفاتح للمضارع البسيط (العادة والحقيقة)، والطوبي للمضارع المستمر (الآن وهذا الشهر)، والإطار المنقّط لكلمات الزمن."
  },

  /* ---------- المرحلة 6: الاختبار القصير (10 أسئلة: 6 قواعد و3 مفردات وسؤال قانوني · النجاح 8 من 10) ---------- */
  quiz: [
    { s: "My mother ___ English at a girls' school.", opts: ["teaches", "is teach", "teach"], a: 0, tag: "Grammar · قواعد",
      whyEn: "A job is a permanent fact, so Present Simple. 'My mother' is she, so teach takes -es (after ch): teaches. We never put 'is' before a base verb.",
      why: "المهنة حقيقة دائمة فنستخدم المضارع البسيط، ومع she نضيف es بعد ch: teaches، ولا نضع is قبل الفعل المجرد.", errCat: "agreement" },
    { s: "Where is Dad? — He ___ in the garden at the moment.", opts: ["sits", "is sitting", "is siting"], a: 1, tag: "Grammar · قواعد",
      whyEn: "'at the moment' means now, so Present Continuous: is sitting. 'sit' has one vowel + one consonant, so we double the t.",
      why: "at the moment تعني الآن فنستخدم المضارع المستمر is sitting، ونضاعف t لأن قبلها حرف علة واحدًا.", errCat: "tense" },
    { s: "Our teacher usually drives to work, but this week she ___ the bus.", opts: ["takes", "take", "is taking"], a: 2, tag: "Grammar · قواعد",
      whyEn: "'usually drives' is her habit, but 'this week' is a short, temporary change, so Present Continuous: is taking.",
      why: "usually drives عادتها، أما this week فتغيّر مؤقت قصير، فنستخدم المضارع المستمر: is taking.", errCat: "tense" },
    { s: "My sister ___ her phone at the moment because the battery is dead.", opts: ["isn't using", "doesn't use", "not using"], a: 0, tag: "Grammar · قواعد",
      whyEn: "'at the moment' needs Present Continuous, and its negative is isn't + -ing. 'not using' has no 'is', and 'doesn't use' is for habits.",
      why: "at the moment تحتاج المضارع المستمر، ونفيه isn't مع ing؛ أما not using فينقصها is، وdoesn't use للعادة.", errCat: "tense" },
    { s: "Which sentence has the correct -ing spelling?", opts: ["My parents are shoping, and my brother is cleanning the car.", "My parents are shopping, and my brother is cleaning the car.", "My parents are shopping, and my brother is cleanning the car."], a: 1, tag: "Grammar · قواعد",
      whyEn: "'shop' has one vowel + one consonant, so double the p: shopping. 'clean' has two vowels (ea) before n, so no double: cleaning.",
      why: "في shop حرف علة واحد ثم ساكن فنضاعف: shopping، وفي clean حرفا علة (ea) قبل n فلا نضاعف: cleaning.", errCat: "spelling" },
    { s: "Which sentence is correct?", opts: ["My cousins are live in Tabuk.", "My cousins lives in Tabuk.", "My cousins live in Tabuk."], a: 2, tag: "Grammar · قواعد",
      whyEn: "The Present Simple has no 'are' before the verb, and a plural subject (my cousins) takes the base verb without -s: live.",
      why: "المضارع البسيط لا يأخذ are قبل الفعل، والفاعل الجمع (my cousins) يأخذ الفعل المجرد بلا s: live.", errCat: "be_verb" },
    { s: "Our professor and his students ___ research on clean water.", opts: ["do", "make", "measure"], a: 0, tag: "Vocabulary · مفردات",
      whyEn: "The collocation is 'do research'. We don't say 'make research', and 'measure' does not go with research.",
      why: "المتلازمة الصحيحة do research، ولا نقول make research، وmeasure لا تأتي مع research.", errCat: "vocab" },
    { s: "This app can ___ the size of your room with your phone's camera.", opts: ["miss", "measure", "sign"], a: 1, tag: "Vocabulary · مفردات",
      whyEn: "'measure' means find the size or amount of something, like the size of a room.",
      why: "measure تعني يقيس حجم الشيء أو مقداره، كمساحة الغرفة.", errCat: "vocab" },
    { s: "There's a ___ smell in the kitchen. Is something burning?", opts: ["safe", "helpful", "strange"], a: 2, tag: "Vocabulary · مفردات",
      whyEn: "'strange' means unusual or surprising, so a strange smell makes you think that something is wrong.",
      why: "strange تعني غريبًا غير مألوف، فالرائحة الغريبة توحي بأن شيئًا ما يحترق.", errCat: "vocab" },
    { s: "My sister got a new job, and right now she ___ at the company office.", opts: ["is measuring a contract", "is signing a contract", "is missing a contract"], a: 1, tag: "Legal Track · المسار القانوني",
      whyEn: "The legal collocation is 'sign a contract' (here: is signing, because it is happening right now). We don't 'measure' or 'miss' a contract.",
      why: "المتلازمة القانونية sign a contract (وهنا is signing لأنه يحدث الآن)، ولا يصح measure ولا miss مع contract.", errCat: "vocab" }
  ]
};
})();
