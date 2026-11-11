/*
 * الدرس النموذجي المختصر (منذ 11 نوفمبر 2026): الدرس u3l1 «A Night to Remember» بعد مراجعته المستقلة، مقصوصًا إلى مثال واحد
 * من كل نوع، فيقرؤه الكاتب بدل درس نموذجي كامل (نحو 60 كيلوبايت). والأعداد الكاملة في التعليقات وفي LESSON-BRIEF.md (القسمان 2 و4).
 * ودرسك يكتب «LESSONS.u4l1 = { … };» داخل (function(){ … })(); كما في lessons/، أما هذا الملف فلا يحمّله الموقع.
 * وفحوص الكتابة هنا بأسماء المكتبة، وtests/writing-checks.test.js يتأكد أنها تقبل model وacceptExamples.
 * صنعته أداة من الدرسين u3l1 وu3l2، فإن تغيّرا فلا يتغير هو إلا بطلب المنسّق.
 */
var MODEL_LESSON = {
  id: "u3l1",
  unit: 3,
  n: 1,
  mode: "reading",
  en: "A Night to Remember",
  ar: "ليلة الإطلاق إلى الفضاء: الماضي المستمر في الإثبات",
  subEn: "Past Continuous: was / were + -ing",
  canDoEn: "I can say what people were doing at an exact time in the past, and use was / were + -ing for the scene in a short story.",
  canDoAr: "أقدر أن أقول ما كان الناس يفعلونه في وقت محدد من الماضي، وأصف المشهد في قصة قصيرة بـ was / were مع ing.",
  descEn: "I can read an email about the night of a Saudi space flight, and use the Past Continuous for actions in progress at a past moment.",
  descAr: "أقدر أن أقرأ إيميلًا عن ليلة رحلة فضاء سعودية، وأستعمل الماضي المستمر لأحداث كانت جارية في لحظة من الماضي.",
  goals: [
    {
      en: "I can form the Past Continuous in the affirmative: was / were + verb-ing, with the right spelling (making, sitting, lying).",
      ar: "أقدر أن أكوّن الماضي المستمر في الإثبات: was / were مع الفعل وing، بالإملاء الصحيح (making وsitting وlying)."
    }
  ],   // ×4
  intro: {
    recall: {
      dEn: "Type four words and the legal phrase from Unit 2, Lesson 5 (A Weekend in AlUla) from memory before you see the answer.",
      d: "اكتب من ذاكرتك أربع كلمات والعبارة القانونية من الدرس الخامس في الوحدة 2 (A Weekend in AlUla) قبل أن ترى الإجابة.",
      items: [
        ["review", "5 active recall items from Unit 2, Lesson 5", "5 عناصر استرجاع نشط من الدرس الخامس في الوحدة 2"],
        ["pen", "Type each word from memory to fix its spelling", "اكتب كل كلمة من ذاكرتك لتثبيت إملائها"],
        [
          "spark",
          "Includes the legal phrase of Unit 2, Lesson 5",
          "تشمل العبارة القانونية من الدرس الخامس في الوحدة 2"
        ]
      ]
    }
  },   // ومثله vocab وgrammar وreading (حتى في درس الاستماع) وwriting وquiz
  recall: [
    {
      id: "rc-0",
      promptAr: "مرشد سياحي: يرافق الزوار ويشرح لهم المكان (عبارة من كلمتين من الدرس الخامس في الوحدة 2)",
      promptEn: "A person whose job is to show visitors a place and explain it (2 words)",
      sentPre: "In Diriyah, a friendly",
      sentPost: "showed us the old town and told us many stories.",
      ans: ["tour guide", "guide"],
      hint: "t _ _ _ _ _ _ _ e (9 letters, 2 words)",
      spellNoteEn: "Two words: tour + guide. tour sounds like 'toor', and the u in guide is silent: g-u-i-d-e.",
      spellNote: "كلمتان: tour ثم guide، وتُنطق tour «تُور»، وحرف u في guide لا يُنطق: g-u-i-d-e.",
      errCat: "spelling"
    },
    {
      id: "rc-4",
      promptAr: "يتقدّم بطلب تأشيرة (العبارة القانونية من الدرس الخامس في الوحدة 2: ___ for a visa)",
      promptEn: "Legal phrase from Unit 2, Lesson 5: ___ for a visa (ask officially for it)",
      sentPre: "A university in Japan accepted my sister, so now she can",
      sentPost: "for a student visa.",
      ans: ["apply", "apply for a visa", "apply for a student visa"],
      isLegal: true,
      hint: "a _ _ _ y (5 letters)",
      spellNoteEn: "The phrase is 'apply for a visa'. Spelled a-p-p-l-y, with double p. Its past is applied (y → ied).",
      spellNote: "العبارة apply for a visa، وتُكتب a-p-p-l-y بحرفي p، وماضيها applied (تتحول y إلى ied).",
      errCat: "vocab"
    }
  ],   // ×5 من الدرس السابق، واحد منها isLegal للعبارة القانونية
  legalPhrase: {
    en: "international law",
    headword: "international law",
    pos: "legal phrase",
    ar: "القانون الدولي",
    say: "إِنْتَرْنَاشْنَل لُو",
    ex: "Under international law, countries must keep their agreements.",
    exAr: "يوجب القانون الدولي على الدول أن تفي باتفاقاتها.",
    tipEn: "International law is the law between countries. Collocations: under international law (according to it), study international law. There is no 'the' before it, and the adjective comes first (not 'law international'). 'under' here means 'according to', and it has nothing to do with place.",
    tip: "international law هو القانون بين الدول. ومن تعابيره الثابتة under international law (بموجب القانون الدولي) وstudy international law (يدرس القانون الدولي). ولا نضع قبله the، وتأتي الصفة قبل الاسم فلا نقول law international. وunder هنا بمعنى «بموجب»، لا بمعنى «تحت» المكانية.",
    legal: true,
    oxfordSlug: "international_1",
    wikiFiles: ["En-us-international.ogg", "En-uk-law.ogg"],
    wikiCredit: "File:En-us-international.ogg & File:En-uk-law.ogg · Wikimedia Commons"
  },
  vocab: [
    {
      en: "space",
      pos: "noun",
      ar: "الفضاء",
      say: "سْبَيْس",
      ex: "Not many people go into space, because the journey is very expensive.",
      exAr: "لا يذهب إلى الفضاء إلا قليل من الناس، لأن الرحلة غالية جدًّا.",
      tipEn: "Collocations: go into space, travel in space. With this meaning there is no 'the' before it: we say 'in space', not 'in the space'. space has another meaning too: an empty place, as in 'a parking space'.",
      tip: "تعابير ثابتة: go into space (يذهب إلى الفضاء) وtravel in space (يسافر في الفضاء). ولا نضع قبلها the بهذا المعنى، فنقول in space لا in the space. ولها معنى آخر هو المكان الفارغ، كما في a parking space (موقف سيارة).",
      oxfordSlug: "space_1",
      wikiFile: "En-us-space.ogg",
      wikiCredit: "File:En-us-space.ogg · Wikimedia Commons"
    }
  ],   // 5–7، ومعها legalPhrase = 6–8
  vocabGaps: [
    {
      s: "One day, I want to travel into ___ and see the Earth from far away.",
      opts: ["space", "screen", "experiment"],
      a: 0,
      whyEn: "We see the Earth from far away only from space, and 'travel into space' has no 'the'. A 'screen' is part of a TV or a phone, and an 'experiment' is a test in science.",
      why: "لا تُرى الأرض من بعيد إلا من الفضاء، ونقول travel into space بلا the؛ أما screen فجزء من التلفاز أو الهاتف، وexperiment تجربة علمية.",
      errCat: "vocab"
    }
  ],   // ×8
  gCards: [
    {
      tEn: "Step 1: In Progress in the Past",
      t: "الخطوة 1: حدث كان جاريًا في الماضي",
      enHtml: "<h2 class=\"bi-h\"><span class=\"en\" dir=\"ltr\">Step 1: In Progress in the Past</span><small>الماضي المستمر: حدث كان جاريًا</small></h2><p class=\"en-p\" dir=\"ltr\">You know the Present Continuous: <b>am / is / are + -ing</b> for an action in progress <b>now</b>. To talk about an action in progress at a time <b>in the past</b>, change one word: use <b>was / were</b>.</p><p class=\"formula\"><b>was / were</b> + verb<b>-ing</b></p><div class=\"xbox\"><span class=\"xtag s\" dir=\"ltr\">Now · Present Continuous · المضارع المستمر</span><p class=\"xen\">Salem is cooking in the kitchen.</p></div><div class=\"xbox\"><span class=\"xtag c\" dir=\"ltr\">Then · Past Continuous · الماضي المستمر</span><p class=\"xen\">At eight last night, Salem was cooking in the kitchen.</p></div><svg class=\"tl\" viewBox=\"0 0 340 132\" role=\"img\" aria-label=\"Timeline: the Past Continuous is a long action in progress at a point in the past · الماضي المستمر حدث طويل كان جاريًا عند نقطة في الماضي\" direction=\"ltr\"><line x1=\"92\" y1=\"18\" x2=\"92\" y2=\"100\" stroke=\"#1E2A33\" stroke-width=\"1.2\" stroke-dasharray=\"3 3\"/><text x=\"92\" y=\"12\" text-anchor=\"middle\" font-family=\"Quicksand, sans-serif\" font-weight=\"700\" font-size=\"10.5\" fill=\"#1E2A33\" letter-spacing=\"1.5\">NOW</text><line x1=\"30\" y1=\"62\" x2=\"326\" y2=\"62\" stroke=\"#5A6B7C\" stroke-width=\"1.5\"/><path d=\"M22 62l10-5v10z\" fill=\"#5A6B7C\"/><rect x=\"160\" y=\"54\" width=\"146\" height=\"16\" rx=\"8\" fill=\"#B94A33\" opacity=\"0.28\"/><circle cx=\"233\" cy=\"62\" r=\"7\" fill=\"#B94A33\"/><text x=\"233\" y=\"42\" text-anchor=\"middle\" font-family=\"Quicksand, Readex Pro, sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#A8432E\">was cooking · in progress</text><text x=\"233\" y=\"88\" text-anchor=\"middle\" font-family=\"Quicksand, Readex Pro, sans-serif\" font-size=\"11.5\" fill=\"#5A6B7C\">at eight · في الثامنة</text><text x=\"326\" y=\"124\" text-anchor=\"end\" font-family=\"Quicksand, Readex Pro, sans-serif\" font-size=\"11.5\" fill=\"#5A6B7C\">Past · الماضي</text><text x=\"30\" y=\"124\" text-anchor=\"start\" font-family=\"Quicksand, Readex Pro, sans-serif\" font-size=\"11.5\" fill=\"#5A6B7C\">Future · المستقبل</text></svg><p class=\"en-p\" dir=\"ltr\">At eight, the action was <b>not finished</b>. It started before eight, and it continued after eight. The long bar is the action, and the point is the time.</p>",
      arHtml: "<p>تعرف المضارع المستمر: <bdi class=\"en\">am / is / are</bdi> مع <bdi class=\"en\">ing</bdi> لحدث جارٍ <b>الآن</b>. فإذا كان الحدث جاريًا في وقت من <b>الماضي</b> غيّرنا كلمة واحدة، فجعلنا مكانها <bdi class=\"en\">was / were</bdi>.</p><p>فالصيغة <bdi class=\"en\">was / were</bdi> ثم الفعل مع <bdi class=\"en\">ing</bdi>، ويقابلها في العربية «كان يفعل»: <bdi class=\"en\">Salem was cooking</bdi> أي كان سالم يطبخ.</p><p>وفي الساعة الثامنة لم يكن الحدث قد انتهى: بدأ قبلها واستمر بعدها. فالشريط الطويل في الرسم هو الحدث، والنقطة هي الوقت.</p>"
    },
    {
      tEn: "Common Arab Mistakes",
      t: "أخطاء العرب الشائعة",
      bilingual: true,
      enHtml: "<h2 class=\"bi-h\"><span class=\"en\" dir=\"ltr\">Common Arab Mistakes</span><small>أخطاء يقع فيها كثير من العرب في الماضي المستمر</small></h2><ul class=\"mist\"><li><span class=\"no\">At four o'clock, Huda was study in the library.</span><span class=\"yes\">At four o'clock, Huda was studying in the library.</span><p class=\"en-m\" dir=\"ltr\">After <b>was / were</b>, the verb needs <b>-ing</b>.</p><p>بعد <bdi class=\"en\">was / were</bdi> يجب أن يأخذ الفعل <bdi class=\"en\">ing</bdi>.</p></li><li><span class=\"no\">At sunset, we sitting on the beach.</span><span class=\"yes\">At sunset, we were sitting on the beach.</span><p class=\"en-m\" dir=\"ltr\">An <b>-ing</b> verb can't stand alone. Don't forget <b>was / were</b>.</p><p>الفعل مع <bdi class=\"en\">ing</bdi> لا يقوم وحده، فلا تنسَ <bdi class=\"en\">was / were</bdi>.</p></li><li><span class=\"no\">My friends was makeing tea.</span><span class=\"yes\">My friends were making tea.</span><p class=\"en-m\" dir=\"ltr\"><b>My friends</b> is plural, so use <b>were</b>. <b>make</b> ends in -e, so drop the e: <b>making</b>.</p><p><bdi class=\"en\">My friends</bdi> جمع فنستعمل <bdi class=\"en\">were</bdi>، وتنتهي <bdi class=\"en\">make</bdi> بحرف <bdi class=\"en\">e</bdi> فنحذفه: <bdi class=\"en\">making</bdi>.</p></li><li><span class=\"no\">When I was a child, I was walking to school every day.</span><span class=\"yes\">When I was a child, I walked to school every day.</span><p class=\"en-m\" dir=\"ltr\">The Arabic «كنتُ أمشي» can be a habit over many years. For a long-time habit like this, use the <b>Past Simple</b>, not the Past Continuous.</p><p>قد تدل «كنتُ أمشي» على عادة سنوات طويلة، والعادة في زمن طويل كهذا تأتي بالماضي البسيط لا بالمستمر.</p></li></ul>"
    },
    {
      tEn: "Summary",
      t: "الخلاصة",
      enHtml: "<h2 class=\"bi-h\"><span class=\"en\" dir=\"ltr\">Quick Summary</span><small>الخلاصة</small></h2><div class=\"sumc\" dir=\"ltr\"><h3>In Four Lines · في أربعة أسطر</h3><p><b>Form · التركيب</b><span>I / he / she / it was + -ing · you / we / they were + -ing</span></p><p><b>Use · الاستعمال</b><span>An action in progress at an exact past time, and the scene in a story</span></p><p><b>Time words · الزمن</b><span>at midnight · at ten o'clock · at that moment · this time last year</span></p><p><b>Not with · لا يأتي مع</b><span>finished actions (I watched), long-time habits (I walked every day), state verbs (I knew)</span></p></div><p class=\"en-p\" dir=\"ltr\">Now let's practise: 16 guided exercises (4 of each type), one question per screen.</p>",
      arHtml: "<p><b>التركيب:</b> <bdi class=\"en\">was</bdi> مع المفرد و<bdi class=\"en\">were</bdi> مع <bdi class=\"en\">you</bdi> والجمع، ثم الفعل مع <bdi class=\"en\">ing</bdi>.</p><p><b>الاستعمال:</b> لحدث جارٍ في وقت محدد من الماضي، ولوصف المشهد في القصة.</p><p><b>ولا يأتي</b> للحدث المكتمل، ولا لعادة زمن طويل، ولا مع الأفعال التي لا تأخذ ing، فهذه كلها بالماضي البسيط.</p><p>والآن نتدرّب: 16 تمرينًا موجّهًا (4 من كل نمط)، سؤال في كل شاشة.</p>"
    }
  ],   // 6: أربع بطاقات شرح، ثم «أخطاء العرب الشائعة»، ثم «الخلاصة»
  gA: [
    {
      s: "At seven this morning, my sister ___ breakfast for the whole family.",
      opts: ["were making", "was making"],
      a: 1,
      whyEn: "'my sister' is one person (she), so we use 'was'. 'were' goes with you, we, they and plurals.",
      why: "my sister شخص واحد (she) فنستعمل was، أما were فمع you وwe وthey والجمع.",
      errCat: "agreement"
    }
  ],   // ×4 (16 تمرينًا في gA وgB وgC وgD)
  gB: [
    {
      s: "At ten last night, I was call my brother in Jeddah.",
      ok: false,
      fix: "At ten last night, I was calling my brother in Jeddah.",
      whyEn: "After 'was', the verb needs -ing: was calling. 'was call' is the same mistake as 'I am work'.",
      why: "بعد was يأخذ الفعل ing: was calling، وwas call من جنس الخطأ I am work.",
      errCat: "be_verb"
    },
    {
      s: "At sunset, two old men were standing outside the mosque.",
      ok: true,
      whyEn: "Correct: 'two old men' is plural, so 'were' is right, and 'standing' is the -ing form of stand.",
      why: "صحيحة: two old men جمع فتناسبها were، وstanding صيغة ing من stand.",
      errCat: "be_verb"
    }
  ],   // ×4: واحدة ok: true وثلاث ok: false
  gC: [
    {
      pre: "At six this morning, my uncle",
      verb: "drive · Past Continuous",
      post: "through the quiet streets to the airport.",
      ans: ["was driving"],
      whyEn: "'my uncle' is one person, so we use 'was'. drive ends in -e, so we drop the e before -ing: driving.",
      why: "my uncle شخص واحد فنستعمل was، وتنتهي drive بحرف e فنحذفه قبل ing: driving.",
      errCat: "spelling"
    }
  ],   // ×4
  gD: [
    {
      chips: ["were sleeping", "at that moment.", "The passengers", "on the plane"],
      ans: "The passengers were sleeping on the plane at that moment.",
      whyEn: "Subject (The passengers) + were + verb-ing + place (on the plane) + time (at that moment) at the end.",
      why: "الفاعل The passengers ثم were مع الفعل وing ثم المكان on the plane ثم الزمن at that moment في الآخر.",
      errCat: "word_order"
    }
  ],   // ×4
  reading: {
    title: "A Night to Remember",
    from: "Lama",
    to: "Sophie",
    fromMeta: "Lama · Law student, Riyadh",
    targetSeconds: 135,
    lg1: "Past Simple: finished actions · الماضي البسيط",
    lg2: "Past Continuous: was / were + -ing · الماضي المستمر",
    lg3: "Time words · كلمات الزمن",
    hlLabel: "Highlight the past · إظهار الماضي",
    insight: {
      titleEn: "Two Pasts in Lama's Email",
      titleAr: "زمنان ماضيان في إيميل لمى",
      l1En: "To paint the scene, Lama uses was / were + -ing for actions in progress at that moment:",
      ex1: "we were sitting · my father was standing · My mother was pouring coffee · I was reading the news",
      l2En: "For finished actions in her story, she uses the Past Simple:",
      ex2: "my mother held my hand · we all stood up · They stayed · I read the news again",
      arHtml: "<p>لاحظ أن لمى رسمت المشهد بالماضي المستمر <b style=\"color:var(--accent-ink)\">was / were + ing</b>، فذكرت ما كان كل فرد من أسرتها يفعله في تلك اللحظة (<bdi class=\"en\">were sitting, was standing, was pouring, was reading</bdi>)، ثم انتقلت إلى الماضي البسيط <b style=\"color:var(--dark)\">للأحداث المكتملة</b> (<bdi class=\"en\">held, stood, stayed</bdi>). وقارن بين <bdi class=\"en\">I was reading the news</bdi> و<bdi class=\"en\">I read the news again</bdi>: الأولى حدث جارٍ في تلك اللحظة، والثانية حدث مكتمل.</p>"
    },
    introEn: "Lama is a law student in Riyadh. She is writing to her British friend Sophie about a special night.",
    intro: "لمى طالبة قانون في الرياض، وتكتب إلى صديقتها البريطانية صوفي عن ليلة لا تُنسى.",
    paras: [
      "Hi Sophie,",
      "The [[flight|رحلة]] of Axiom Mission 2 <<s:started>> in Florida, and in Riyadh it was after midnight. <<t:Just after midnight>>, we <<c:were sitting>> in front of the big {screen} in our living room. <<t:At that {moment}>>, my father <<c:was standing>> near the door and <<c:holding>> his phone. My mother <<c:was [[pouring|تصبّ]]>> coffee, and my grandmother <<c:was drinking>> tea. My little brother <<c:was wearing>> his best [[thobe|ثوب]], my sister <<c:was taking>> photos of the screen, and I <<c:was reading>> the news.",
      "Best wishes,<br>Lama"
    ],
    predict: {
      qEn: "Before you read: What is Lama's email about?",
      q: "توقّع قبل القراءة: عمَّ يتحدث إيميل لمى؟",
      optsEn: ["Her first week at college", "A holiday in Florida", "A special night in her life"],
      opts: ["أسبوعها الأول في الكلية", "إجازة في فلوريدا", "ليلة مميزة في حياتها"],
      a: 2,
      revealEn: "Lama writes about one special night in her life. Read to find out what her family was doing at that moment.",
      reveal: "تكتب لمى عن ليلة مميزة في حياتها، فاقرأ لتعرف ما كانت أسرتها تفعله في تلك اللحظة."
    },
    questions: [
      {
        q: "Just after midnight, where were Lama and her family?",
        opts: ["At the airport", "In their living room", "At her law college"],
        a: 1,
        ev: "Just after midnight, we were sitting in front of the big screen in our living room.",
        whyEn: "Lama writes 'we were sitting … in our living room'. The email doesn't say that they went to an airport, and the law college comes later in her story.",
        why: "تكتب لمى we were sitting … in our living room، ولا يذكر الإيميل أنهم ذهبوا إلى مطار، أما كلية القانون فتأتي بعد ذلك في قصتها.",
        errCat: "reading"
      },
      {
        tf: true,
        q: "Lama's brother was taking photos of the screen.",
        a: false,
        ev: "My little brother was wearing his best thobe, my sister was taking photos of the screen, and I was reading the news.",
        whyEn: "False: her sister was taking the photos. Her little brother was wearing his best thobe.",
        why: "خطأ؛ فأختها هي التي كانت تلتقط الصور، أما أخوها الصغير فكان يلبس أحسن ثوب عنده.",
        errCat: "reading"
      }
    ]
  },   // أو listening (LISTENING_EXAMPLE في آخر الملف). وفي الدرس paras كلها (إيميل 150–230 كلمة) وquestions ×8 (واحد أو اثنان tf)، وart اختياري
  writing: {
    taskEn: "Write at least 4 separate sentences about a special night or moment in your life. Say what you and the people around you were doing at that time. Use at least 2 Past Continuous verbs (was sitting, were watching …), a time phrase for the exact moment (at nine o'clock, at that moment, this time last year), and at least 2 words from today's lesson. You can also use the Past Simple for finished actions.",
    task: "اكتب 4 جمل منفصلة على الأقل عن ليلة أو لحظة مميزة في حياتك، واذكر ما كنت تفعله أنت ومن حولك في ذلك الوقت. استعمل فعلين على الأقل في الماضي المستمر (was sitting وwere watching …)، وعبارة زمن تحدد اللحظة (at nine o'clock أو at that moment أو this time last year)، وكلمتين على الأقل من كلمات الدرس، ولك أن تستعمل الماضي البسيط للأحداث المكتملة.",
    placeholder: "At nine o'clock, I was …\nMy parents were …",
    checks: [
      { use: "sentences", n: 4 },
      { use: "tense", tense: "pastContinuous", n: 2 },
      {
        use: "phrases",
        k: "time",
        tEn: "At least 1 time phrase for the exact moment (at nine o'clock, at that moment, this time last year, last night)",
        t: "عبارة زمن واحدة على الأقل تحدد اللحظة (at nine o'clock أو at that moment أو this time last year أو last night)",
        ex: "At midnight, … · At that moment, … · This time last year, …",
        any: [
          /\b(?:at\s+(?:that|this|the\s+same)\s+(?:moment|time)|(?:at\s+(?:about\s+|around\s+)?|around\s+|about\s+|(?:just\s+)?(?:before|after)\s+)(?:midnight|noon|sunset|sunrise|dawn|night)|at\s+(?:about\s+|around\s+)?(?:[0-9]{1,2}(?:[:.][0-9]{2})?(?:\s*[ap]\.?m)?|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)\b|this\s+time\s+(?:last|yesterday)|(?:that|last)\s+(?:night|evening|morning|afternoon|day)|yesterday)\b/i
        ]
      },
      { use: "words", n: 2 }
    ],
    modelMarked: "My favourite {moment} last year was the night before Eid. <<t:At nine o'clock>>, my whole family <<c:was sitting>> in my grandmother's house. My aunts <<c:were making>> sweets in the kitchen, and my cousins <<c:were playing>> in the garden. My uncle <<c:was holding>> his phone and <<c:showing>> us family photos on the {screen}. My grandfather <<c:was drinking>> coffee and <<c:telling>> old stories. I <<s:felt>> very {proud} of my family that night. In the morning, we <<s:wore>> our new clothes and <<s:went>> to the Eid prayer.",
    model: "My favourite moment last year was the night before Eid. At nine o'clock, my whole family was sitting in my grandmother's house. My aunts were making sweets in the kitchen, and my cousins were playing in the garden. My uncle was holding his phone and showing us family photos on the screen. My grandfather was drinking coffee and telling old stories. I felt very proud of my family that night. In the morning, we wore our new clothes and went to the Eid prayer.",
    legendEn: "Light blue = Past Simple · Terracotta = Past Continuous · Dashed = time phrases",
    legendAr: "الأزرق الفاتح للماضي البسيط، والطوبي للماضي المستمر، والإطار المنقّط لعبارات الزمن.",
    acceptExamples: [
      "Last Ramadan, my family had a special night. Just after midnight, we were eating at my uncle's house. My cousins were watching a match on the big screen. I was very proud of my team."
    ]
  },   // checks أربعة من مكتبة فحوص الكتابة (LESSON-BRIEF القسم 4)، وacceptExamples اثنان أو ثلاثة
  askChips: ["ما الفرق بين I watched وI was watching؟"],   // ×4
  quiz: [
    {
      s: "At midnight, my brothers ___ a football match on TV.",
      opts: ["was watching", "were watching", "watching"],
      a: 1,
      tag: "Grammar · قواعد",
      whyEn: "'my brothers' is plural, so we use 'were'. 'was' is for one person, and 'watching' alone has no was / were.",
      why: "my brothers جمع فنستعمل were؛ أما was فللمفرد، وwatching وحدها بلا was / were.",
      errCat: "agreement"
    },
    {
      s: "The coach was very ___ of his young players after the final match.",
      opts: ["amazing", "international", "proud"],
      a: 2,
      tag: "Vocabulary · مفردات",
      whyEn: "'proud of' someone means happy because of what they did. 'amazing' and 'international' don't go with 'of his young players'.",
      why: "proud of تعني مسرورًا بما فعله غيره، أما amazing وinternational فلا تأتيان مع of his young players.",
      errCat: "vocab"
    },
    {
      s: "Under ___, a country can't use war to take land from another country.",
      opts: ["the international law", "law international", "international law"],
      a: 2,
      tag: "Legal Track · المسار القانوني",
      whyEn: "The phrase is 'under international law': there is no 'the', and the adjective comes before the noun.",
      why: "العبارة under international law بلا the، وتأتي الصفة قبل الاسم.",
      errCat: "vocab"
    }
  ]   // ×10: 6–7 Grammar، و2–3 Vocabulary، وواحد Legal Track
};

/* درس الاستماع يضع listening مكان reading، وهذا من u3l2 «Accidents Happen»، وquestions ×8 بلا ev. */
var LISTENING_EXAMPLE = {
  title: "Vehicle Accidents",
  sourceTag: "ELLLO · Real recording · تسجيل حقيقي",
  sourceMeta: "ELLLO Mixer #78 · Intermediate (B1)",
  speakers: "Helen & Shalini (Canada), Amir (Iran), Lindsay (USA), Paul & Matthew (England)",
  url: "https://elllo.org/english/Mixer076/T078-Accident.htm",
  audioWord: "accident",
  targetSeconds: 214,
  introEn: "Six people from four countries tell six short stories, about half a minute each. This clip is a little harder than the clips in Unit 2, and the accents are different, so you will not catch every word. That is fine. Listen once for the main idea.",
  intro: "ستة أشخاص من أربعة بلدان يحكون ست قصص قصيرة، كل قصة في نحو نصف دقيقة. والمقطع أصعب قليلًا من مقاطع الوحدة الثانية، ولهجات المتحدثين مختلفة، فلن تلتقط كل كلمة، ولا بأس في ذلك. استمع مرة واحدة للفكرة العامة.",
  predict: {
    qEn: "Stage 1 Main-Idea Question: What are the six speakers mainly talking about?",
    q: "سؤال الفكرة العامة: عمّ يتحدث المتحدثون الستة أساسًا؟",
    optsEn: [
      "An accident that happened to them",
      "How to pass a driving test in their countries",
      "The news about one big accident last year"
    ],
    opts: ["حادث وقع لكل واحد منهم", "كيف يجتاز المرء اختبار القيادة في بلده", "خبر حادث كبير وقع في العام الماضي"],
    a: 0,
    revealEn: "Each speaker tells a short story about an accident in their own life. Listen again, one speaker at a time. The order is Helen, Amir, Lindsay, Paul, Matthew and Shalini.",
    reveal: "يحكي كل متحدث قصة قصيرة عن حادث في حياته. استمع مرة أخرى متحدثًا بعد متحدث، وترتيبهم: هيلين، فأمير، فليندسي، فبول، فماثيو، فشاليني."
  },
  insight: {
    titleEn: "One Story, Told with when",
    titleAr: "القصة نفسها تُحكى بـ when",
    l1En: "In the clip, people join the long action and the short action with and, with so, or with no word at all. That is normal in speech. Here is the same kind of story with when, in our own sentences:",
    ex1: "Helen was crossing a parking lot when another car hit her car. · Matthew was riding home from work when another bicycle came in front of him. · Shalini was going onto a busy street when a car hit her.",
    l2En: "Start with when, and put a comma after the short action:",
    ex2: "When another bicycle came in front of him, Matthew was riding home from work. · When the motorbike started to slide, Paul and his girlfriend were riding across the island.",
    arHtml: "<p><b>انتبه:</b> يصل المتحدثون في المقطع الحدث الطويل بالقصير بـ and أو so أو بلا رابط، ولا يقول أحد منهم when للحدث القصير، وهذا طبيعي في الكلام.</p><p>أما when في المقطع فتأتي للزمن وحده، كأن يذكر المتحدث سنّه أو البلد الذي كان فيه: When I was sixteen.</p><p>وهذه جمل أمثلة كتبناها عن المقطع، وليست كلام المتحدثين بنصه، وهي تبيّن كيف تُحكى القصة نفسها بـ when.</p>"
  },
  questions: [
    {
      tf: true,
      q: "Helen had her accident many years after she got her licence.",
      a: false,
      whyEn: "False. At the start, Helen says her accident came a short time after she got her licence. She says driver's license, the North American name for it.",
      why: "خطأ؛ في أول المقطع تقول هيلين إن الحادث وقع بعد وقت قصير من حصولها على رخصة القيادة، وتسميها driver's license كما يقال في أمريكا الشمالية.",
      errCat: "reading"
    }
  ]
};
