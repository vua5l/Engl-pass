/* ===== الوحدة 3 · الدرس 2: Accidents Happen — Past Continuous & Past Simple with when (6 مراحل · درس استماع) ===== */
(function(){
LESSONS.u3l2 = {
  id: "u3l2",
  unit: 3,
  n: 2,
  mode: "listening",
  en: "Accidents Happen",
  ar: "حوادث على الطريق: الحدث الطويل يقطعه حدث قصير",
  subEn: "Past Continuous & Past Simple with when",
  canDoEn: "I can tell a short story about an accident with a long action and a short action: I was driving when a car hit me.",
  canDoAr: "أقدر أن أحكي قصة قصيرة عن حادث بحدث طويل يقطعه حدث قصير: I was driving when a car hit me.",
  descEn: "I can use the past continuous for a long action and the past simple for a short action with when, use hit, broke, fell, hurt, ran and cut, and follow six real short stories about accidents.",
  descAr: "أقدر أن أستعمل الماضي المستمر للحدث الطويل والماضي البسيط للحدث القصير مع when، والأفعال hit وbroke وfell وhurt وran وcut، مع مقطع استماع حقيقي يحكي فيه ستة أشخاص قصص حوادث مرّت بهم.",
  goals: [
    { en: "I can use was / were + verb-ing for a long action and the past simple for a short action.", ar: "أقدر أن أستعمل was / were مع الفعل بـ ing للحدث الطويل، والماضي البسيط للحدث القصير." },
    { en: "I can put when before the short action, and use a comma when a sentence starts with when.", ar: "أقدر أن أضع when قبل الحدث القصير، وأضع فاصلة إذا بدأت الجملة بـ when." },
    { en: "I can use the past forms of 6 irregular verbs: hit, broke, fell, hurt, ran and cut.", ar: "أقدر أن أستعمل صيغ الماضي لستة أفعال شاذة: hit وbroke وfell وhurt وran وcut." },
    { en: "I can follow six short real stories about accidents, and write at least 4 sentences about an accident.", ar: "أقدر أن أتابع ست قصص حقيقية قصيرة عن الحوادث، وأكتب 4 جمل على الأقل عن حادث." }
  ],
  intro: {
    recall: {
      dEn: "Review the words and the legal phrase of Lesson 1 by typing them from memory.",
      d: "استرجع كلمات الدرس الأول وعبارته القانونية كتابةً من ذاكرتك.",
      items: [
        ["review", "5 active recall items from Unit 3 · Lesson 1", "5 عناصر استرجاع نشط من الدرس الأول في الوحدة الثالثة"],
        ["pen", "Type from memory to lock in spelling", "كتابة من الذاكرة لتثبيت الإملاء"],
        ["spark", "Includes the legal phrase of Lesson 1", "تشمل العبارة القانونية من الدرس الأول"]
      ]
    },
    vocab: {
      dEn: "6 words about accidents plus today's legal phrase ('driving licence'), with randomized matching rounds.",
      d: "6 كلمات عن الحوادث مع العبارة القانونية اليومية (driving licence)، ولعبة توصيل عشوائية في كل جولة.",
      items: [
        ["cards", "7 Flashcards (6 words + 'driving licence') with Oxford links and human audio", "7 بطاقات (6 كلمات + driving licence) مع رابط Oxford ونطق بشري"],
        ["review", "Randomized 2-round matching game", "لعبة توصيل عشوائية من جولتين"],
        ["quiz", "8 context sentences: choose the right word", "8 جمل سياقية: اختر الكلمة المناسبة"]
      ]
    },
    grammar: {
      dEn: "Why is 'a car was hitting me' wrong? Learn how a short action happens in the middle of a long action, with when and 6 irregular verbs.",
      d: "لماذا تُعد جملة a car was hitting me خاطئة؟ تعلّم كيف يقطع الحدث القصير الحدث الطويل، مع when وستة أفعال شاذة.",
      items: [
        ["book", "6 grammar cards (English first, Arabic on tap)", "6 بطاقات شرح (الإنجليزي أولًا، والعربي عند الطلب)"],
        ["quiz", "16 guided exercises (4 of each type), one per screen", "16 تمرينًا موجّهًا (4 من كل نمط)، سؤال في كل شاشة"]
      ]
    },
    reading: {
      dEn: "3-Stage Listening (real recording): six people from Canada, Iran, the USA and England tell short stories about accidents.",
      d: "استماع على 3 مراحل لتسجيل حقيقي: ستة أشخاص من كندا وإيران والولايات المتحدة وإنجلترا يحكون قصصًا قصيرة عن الحوادث.",
      items: [
        ["speaker", "Stage 1: Listen for the main idea without reading the transcript", "المرحلة 1: استماع أول للفكرة العامة بدون النص المكتوب"],
        ["quiz", "Stage 2: Listen again and answer 8 detail questions, speaker by speaker", "المرحلة 2: استماع ثانٍ للإجابة عن 8 أسئلة تفاصيل، متحدثًا بعد متحدث"],
        ["mail", "Stage 3: Transcript on the source page & Shadowing Timer", "المرحلة 3: النص المكتوب في صفحة المصدر لمراجعة ما فات، مع الترديد (Shadowing)"]
      ]
    },
    writing: {
      dEn: "Write at least 4 separate sentences about a small accident or a bad moment on the road, with a long action and a short action.",
      d: "اكتب 4 جمل منفصلة على الأقل عن حادث صغير أو موقف سيئ على الطريق، بحدث طويل وحدث قصير.",
      items: [
        ["pen", "At least 4 separate sentences with periods (.)", "4 جمل منفصلة على الأقل تنتهي كل منها بنقطة"],
        ["spark", "Instant check: 2 sentences with was / were + -ing and when, the comma after When, and 2 lesson words", "فحص فوري: جملتان فيهما was / were مع ing وwhen، والفاصلة بعد When، وكلمتان من الدرس"]
      ]
    },
    quiz: {
      dEn: "10 shuffled questions on long and short actions, when, and vocabulary (80% to pass), plus Lesson Error Analysis.",
      d: "اختبار قصير من 10 أسئلة في الحدث الطويل والقصير وwhen ومفردات الدرس (النجاح من 80%)، يليه تحليل شامل لأخطاء الدرس.",
      items: [
        ["quiz", "10 questions (80% passing score)", "10 أسئلة متنوعة (النجاح من 80%)"],
        ["review", "Structured Error Analysis by category", "تحليل أخطاء الدرس وأسبابها حسب الفئة"]
      ]
    }
  },
  recall: [
    {
      id: "rc-0",
      promptAr: "اسم من الدرس الأول: الفضاء، أي ما وراء الأرض حيث النجوم والكواكب",
      promptEn: "Noun from Lesson 1: the place outside the Earth, where the stars and planets are",
      sentPre: "The new rocket can carry four people into",
      sentPost: "and bring them back to Earth.",
      ans: ["space"],
      hint: "s _ _ _ e (5 letters)",
      spellNoteEn: "Spelled s-p-a-c-e: the 's' sound at the end is written -ce. Say go into space, with no 'the'.",
      spellNote: "تُكتب s-p-a-c-e، وصوت السين في آخرها يُكتب ce، ونقول go into space بلا the.",
      errCat: "spelling"
    },
    {
      id: "rc-1",
      promptAr: "اسم من الدرس الأول: تجربة علمية يجريها الباحث ليعرف شيئًا جديدًا",
      promptEn: "Noun from Lesson 1: a test that a scientist does to learn something new",
      sentPre: "My cousin's teacher asked her to do an",
      sentPost: "at home with an egg and a glass of water.",
      ans: ["experiment"],
      hint: "e _ _ _ _ _ _ _ _ t (10 letters)",
      spellNoteEn: "Spelled e-x-p-e-r-i-m-e-n-t, with the ending -ment. We say do an experiment, not make an experiment.",
      spellNote: "تُكتب e-x-p-e-r-i-m-e-n-t بنهاية ment، ونقول do an experiment لا make an experiment.",
      errCat: "spelling"
    },
    {
      id: "rc-2",
      promptAr: "اسم من الدرس الأول: لحظة، أي وقت قصير جدًا",
      promptEn: "Noun from Lesson 1: a very short time",
      sentPre: "At that",
      sentPost: ", the teacher walked into the room and everyone stopped talking.",
      ans: ["moment"],
      hint: "m _ _ _ _ t (6 letters)",
      spellNoteEn: "Spelled m-o-m-e-n-t: one m in the middle. At that moment points to one exact time in a story.",
      spellNote: "تُكتب m-o-m-e-n-t بحرف m واحد في وسطها، وat that moment تشير إلى وقت محدد في القصة.",
      errCat: "spelling"
    },
    {
      id: "rc-3",
      promptAr: "صفة من الدرس الأول: فخور، أي سعيد بما أنجزه هو أو أنجزه من يحب",
      promptEn: "Adjective from Lesson 1: happy about something that you or a person you love did well",
      sentPre: "Our teacher was",
      sentPost: "of the class when all the students passed the exam.",
      ans: ["proud"],
      hint: "p _ _ _ d (5 letters)",
      spellNoteEn: "Spelled p-r-o-u-d, and it takes of: proud of the class, not proud from the class.",
      spellNote: "تُكتب p-r-o-u-d، وتأتي بعدها of: proud of the class لا proud from the class.",
      errCat: "spelling"
    },
    {
      id: "rc-4",
      promptAr: "العبارة القانونية من الدرس الأول: القانون الدولي، أي القواعد التي تنظّم العلاقات بين الدول (كلمتان)",
      promptEn: "Legal phrase from Lesson 1: the rules between countries (two words)",
      sentPre: "My brother is a lawyer in Geneva, and his job is about",
      sentPost: "and the rights of countries.",
      ans: ["international law"],
      isLegal: true,
      hint: "i _ _ _ _ _ _ _ _ _ _ _ _ _ _ w (16 letters, 2 words)",
      spellNoteEn: "inter + national: i-n-t-e-r-n-a-t-i-o-n-a-l. Then law: l-a-w.",
      spellNote: "تتكون من inter ثم national: i-n-t-e-r-n-a-t-i-o-n-a-l، ثم تأتي law.",
      errCat: "spelling"
    }
  ],

  legalPhrase: {
    en: "driving licence",
    headword: "driving licence",
    pos: "legal phrase",
    ar: "رخصة قيادة",
    say: "دْرَايْفِنْق لَايْسَنْس",
    ex: "My sister got her driving licence last year, and now she drives to work every day.",
    exAr: "حصلت أختي على رخصة القيادة في العام الماضي، وهي الآن تذهب إلى عملها بسيارتها كل يوم.",
    tipEn: "Legal collocation: get a driving licence / have a driving licence. A licence is an official document that gives you the right to do something. British English writes the noun with c: licence. North Americans say driver's, not driving, and you will hear this in the clip. In the USA, the noun is written with s: driver's license.",
    tip: "تعبير قانوني ثابت: get a driving licence يحصل على رخصة قيادة، وhave a driving licence يحمل رخصة قيادة، وlicence وثيقة رسمية تمنحك حق القيام بأمر ما. وتُكتب في البريطانية بحرف c. ويقول أهل أمريكا الشمالية driver's بدل driving، وستسمعها في المقطع، وتُكتب في الولايات المتحدة بحرف s: driver's license.",
    legal: true,
    oxfordSlug: "driving-licence",
    wikiFiles: ["En-us-driving.ogg", "LL-Q1860 (eng)-Vealhurl-licence.wav"],
    wikiCredit: "File:En-us-driving.ogg & File:LL-Q1860 (eng)-Vealhurl-licence.wav · Vealhurl (Lingua Libre) / Wikimedia Commons"
  },

  vocab: [
    { en: "accident", pos: "noun", ar: "حادث", say: "أَكْسِيدَنْت",
      ex: "My cousin had his first accident on the road to Taif, and now he drives slowly.", exAr: "وقع لابن عمي أول حادث له على طريق الطائف، وهو يقود الآن ببطء.",
      tipEn: "Say have an accident or be in an accident, not make an accident or do an accident. A car accident is an accident with a car. Spelling: a-c-c-i-d-e-n-t, with a double c.",
      tip: "نقول have an accident أو be in an accident، ولا نقول make an accident ولا do an accident، وa car accident حادث سيارة. وتُكتب a-c-c-i-d-e-n-t بحرف c مضاعف.",
      oxfordSlug: "accident",
      wikiFile: "En-us-accident.ogg",
      wikiCredit: "File:En-us-accident.ogg · Wikimedia Commons" },
    { en: "injured", pos: "adjective", ar: "مصاب / مجروح", say: "إِنْجَرْد",
      ex: "My neighbour was injured at work, so he is staying at home this month.", exAr: "أُصيب جاري في عمله، فهو باقٍ في البيت هذا الشهر.",
      tipEn: "Use be with this word: be injured, badly injured. We use it for people and animals, not for things: an injured man, but a broken phone.",
      tip: "نستعملها مع be: be injured، وbadly injured أي مصاب إصابة بالغة، وهي للناس والحيوان لا للأشياء: an injured man، أما الهاتف فنقول a broken phone.",
      oxfordSlug: "injured",
      wikiFile: "En-us-injured.ogg",
      wikiCredit: "File:En-us-injured.ogg · Wikimedia Commons" },
    { en: "serious", pos: "adjective", ar: "خطير / بالغ / جادّ", say: "سِيرِيَس",
      ex: "My grandmother had a serious illness last year, but she is well now.", exAr: "أصيبت جدتي بمرض خطير في العام الماضي، لكنها بخير الآن.",
      tipEn: "A serious accident, problem or illness is a bad and worrying one. For a person, serious means not joking: a serious student.",
      tip: "a serious accident حادث خطير، ومثلها a serious problem وa serious illness، أي أمر سيئ مقلق. وإذا وُصف بها الإنسان فمعناها جادّ: a serious student أي طالب جادّ.",
      oxfordSlug: "serious",
      wikiFile: "En-us-serious.ogg",
      wikiCredit: "File:En-us-serious.ogg · Wikimedia Commons" },
    { en: "rent", pos: "verb", ar: "يستأجر", say: "رِنْت",
      ex: "My cousins rented a car at Jeddah airport for the weekend.", exAr: "استأجر أبناء عمي سيارة من مطار جدة لعطلة نهاية الأسبوع.",
      tipEn: "rent = pay money to use something for a time: rent a car, rent a motorbike, rent a flat. It is a regular verb: rented. British people also say hire a car.",
      tip: "rent أن تدفع مالًا لتنتفع بشيء مدة من الزمن: rent a car وrent a motorbike وrent a flat، وهو فعل منتظم ماضيه rented، ويقول البريطانيون أيضًا hire a car.",
      oxfordSlug: "rent_2",
      wikiFile: "En-uk-rent.ogg",
      wikiCredit: "File:En-uk-rent.ogg · Wikimedia Commons" },
    { en: "fall off", pos: "phrasal verb", ar: "يسقط من / يقع من فوق شيء", say: "فُول أُوف",
      ex: "The little boy fell off his chair at lunch, and everyone laughed.", exAr: "وقع الولد الصغير من فوق كرسيه وقت الغداء، فضحك الجميع.",
      tipEn: "fall off + a thing: fall off a bike, fall off a horse, fall off a chair. You were on it, and then you came down fast. The past of fall is irregular: fell off.",
      tip: "fall off يتبعها الشيء الذي كنت فوقه: fall off a bike وfall off a horse وfall off a chair، وfall فعل شاذ، فماضيها fell off.",
      oxfordSlug: "fall_1",
      wikiFiles: ["En-us-fall.ogg", "En-us-off.ogg"],
      wikiCredit: "File:En-us-fall.ogg & File:En-us-off.ogg · Wikimedia Commons" },
    { en: "control", pos: "verb", ar: "يتحكّم في / يسيطر على", say: "كَنْتْرُول",
      ex: "A good rider can control a horse with one hand.", exAr: "الفارس الماهر يتحكّم في الحصان بيد واحدة.",
      tipEn: "Say control the bike or control the car, with nothing after control: not control on the car. Spelling: double the l in the past: controlled.",
      tip: "نقول control the bike وcontrol the car بلا حرف جر بعد control، فلا نقول control on the car مع أن العربية تقول «يتحكم في». ويُضاعف حرف l في الماضي: controlled.",
      oxfordSlug: "control_2",
      wikiFile: "LL-Q1860 (eng)-Vealhurl-control.wav",
      wikiCredit: "File:LL-Q1860 (eng)-Vealhurl-control.wav · Vealhurl (Lingua Libre) / Wikimedia Commons" }
  ],

  vocabGaps: [
    { s: "This road is not safe at night. There was a bad ___ here last week.", opts: ["accident", "control", "driving licence"], a: 0,
      whyEn: "An 'accident' is a bad event on the road, and the sentence says the road is not safe. 'control' and 'driving licence' cannot happen on a road.",
      why: "accident حادث يقع على الطريق، والجملة تقول إن الطريق غير آمن، أما control وdriving licence فلا يقعان على الطريق.", errCat: "vocab" },
    { s: "The driver was badly ___ in the accident, so his family took him to hospital.", opts: ["rented", "serious", "injured"], a: 2,
      whyEn: "'injured' means hurt in the body, and that is why he went to hospital. We say 'badly injured', not 'badly serious'.",
      why: "injured تعني أن جسمه أصيب، ولهذا ذهب إلى المستشفى، ونقول badly injured لا badly serious.", errCat: "vocab" },
    { s: "We need to see a doctor today, because this is a ___ problem.", opts: ["serious", "injured", "busy"], a: 0,
      whyEn: "A 'serious' problem is a bad and worrying one, so you need a doctor. 'injured' is for people and animals, not for a problem.",
      why: "a serious problem مشكلة خطيرة مقلقة، فيلزم الذهاب إلى الطبيب، أما injured فللناس والحيوان لا للمشكلة.", errCat: "vocab" },
    { s: "We decided to ___ a car at the airport, because we have no car in Baku.", opts: ["fall off", "rent", "control"], a: 1,
      whyEn: "'rent' means pay to use something for a time. Visitors with no car often pay to use one for a few days.",
      why: "rent تعني أن تدفع لتنتفع بشيء مدة من الزمن، والزائر الذي لا سيارة له يستأجر سيارة أيامًا.", errCat: "vocab" },
    { s: "Be careful on that high wall, or you will ___ it.", opts: ["control", "rent", "fall off"], a: 2,
      whyEn: "'fall off' means come down fast from a thing you are on, and a high wall is a place where this can happen.",
      why: "fall off تعني السقوط من فوق شيء كنت عليه، والجدار العالي يُخشى منه ذلك.", errCat: "vocab" },
    { s: "The mountain road was dangerous, and the truck driver could not ___ his truck.", opts: ["control", "fall off", "rent"], a: 0,
      whyEn: "'control' a vehicle means make it go where you want. On a dangerous road, this can be hard. We don't 'fall off' a truck that we are driving.",
      why: "control the truck تعني أن يوجّهها حيث يريد، وهذا قد يصعب على طريق خطر، ولا يقال fall off لشاحنة يقودها صاحبها.", errCat: "vocab" },
    { s: "My brother passed his test yesterday, so now he can get a ___.", opts: ["driving licence", "accident", "serious"], a: 0,
      whyEn: "After you pass a driving test, you can get a 'driving licence', the official document that lets you drive.",
      why: "بعد اجتياز اختبار القيادة تحصل على driving licence، وهي الوثيقة الرسمية التي تجيز لك القيادة.", errCat: "vocab" },
    { s: "My father ___ a small boat for the day, and we went fishing.", opts: ["fell off", "rented", "injured"], a: 1,
      whyEn: "'rented' means he paid to use the boat for one day. It is the past of 'rent', a regular verb.",
      why: "rented تعني أنه دفع لينتفع بالقارب يومًا واحدًا، وهي ماضي الفعل المنتظم rent.", errCat: "vocab" }
  ],

  gCards: [
    {
      tEn: "A Long Action and a Short Action",
      t: "حدث طويل يقطعه حدث قصير",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">A Long Action, a Short Action</span><small>حدث طويل يقطعه حدث قصير</small></h2>' +
        '<p class="en-p" dir="ltr">In Lesson 1 you learned <b>was / were + verb-ing</b> for an action in progress at a moment in the past. Today we put two actions in one sentence. The <b>long action</b> was already going on. Then a <b>short action</b> happened in the middle of it.</p>' +
        '<div class="formula">was / were + verb-ing + <b>when</b> + past simple</div>' +
        '<div class="xbox"><span class="xtag c" dir="ltr">Long action · الحدث الطويل</span><p class="xen">We were eating dinner</p><span class="xtag s" dir="ltr">Short action · الحدث القصير</span><p class="xen">when my uncle came.</p></div>' +
        '<div class="tip" dir="ltr"><p><b>Think of a story · تخيّل قصة:</b> the long action is the background. The short action is the new thing that happens.</p></div>',
      arHtml:
        '<p>تعلّمت في الدرس الأول <bdi class="en">was / were</bdi> مع الفعل المضاف إليه <bdi class="en">ing</bdi> لحدث كان جاريًا في لحظة من الماضي.</p>' +
        '<p>واليوم نجمع حدثين في جملة واحدة: <b>حدث طويل</b> كان جاريًا، و<b>حدث قصير</b> وقع في أثنائه.</p>' +
        '<p>فالطويل يأتي بالماضي المستمر (<bdi class="en">were eating</bdi>)، والقصير بالماضي البسيط بعد <bdi class="en">when</bdi> (<bdi class="en">when my uncle came</bdi>).</p>' +
        '<p>والطويل هو خلفية القصة، والقصير هو الجديد الذي حدث فيها.</p>'
    },
    {
      tEn: "when Can Come First",
      t: "تقديم when والفاصلة",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">when Can Come First</span><small>الفاصلة إذا بدأت الجملة بـ when</small></h2>' +
        '<p class="en-p" dir="ltr">The two parts can change places, and the meaning stays the same. If the sentence starts with <b>when</b>, put a <b>comma</b> after the short action.</p>' +
        '<div class="tbl"><table><thead><tr><th>Pattern · النمط</th><th>Example · المثال</th></tr></thead><tbody>' +
          '<tr><td>Long + when + short</td><td>The taxi <span class="hc">was waiting</span> when we <span class="hs">left</span> the hotel.</td></tr>' +
          '<tr><td>When + short, + long</td><td>When we <span class="hs">left</span> the hotel<b>,</b> the taxi <span class="hc">was waiting</span>.</td></tr>' +
        '</tbody></table></div>' +
        '<div class="tip" dir="ltr"><p><b>Remember · تذكّر:</b> when in the middle of the sentence takes no comma. when at the start of the sentence needs one.</p></div>',
      arHtml:
        '<p>يجوز أن يتبادل الجزآن موضعيهما، والمعنى واحد.</p>' +
        '<p>فإذا جاءت <bdi class="en">when</bdi> في وسط الجملة فلا فاصلة قبلها: <bdi class="en">The taxi was waiting when we left the hotel.</bdi></p>' +
        '<p>وإذا بدأت بها الجملة وضعنا فاصلة بعد الحدث القصير: <bdi class="en">When we left the hotel, the taxi was waiting.</bdi></p>'
    },
    {
      tEn: "Today's 6 Verbs",
      t: "أفعال اليوم الستة",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Today\'s 6 Verbs</span><small>أفعال شاذة كثيرة في قصص الحوادث</small></h2>' +
        '<p class="en-p" dir="ltr">Short actions in a story are often irregular verbs. Learn today\'s six in two groups:</p>' +
        '<ul class="spell" dir="ltr">' +
          '<li><b>No change</b> in the past<span class="s-en">hit → hit · cut → cut · hurt → hurt</span></li>' +
          '<li><b>A new vowel</b> in the past<span class="s-en">break → broke · fall → fell · run → ran</span></li>' +
        '</ul>' +
        '<p class="en-p" dir="ltr">With he and she, the first group shows you the time: <b>he hits</b> is present, and <b>he hit</b> is past. So never write hitted, cutted or hurted.</p>' +
        '<div class="tip" dir="ltr"><p><b>Spelling with -ing · إملاء ing:</b> hit → hitting · cut → cutting · run → running (double the last letter) · fall → falling · break → breaking</p></div>',
      arHtml:
        '<p>كثير من الأحداث القصيرة في القصص أفعال شاذة، فاحفظ أفعال اليوم الستة في مجموعتين:</p>' +
        '<p><b>لا تتغير في الماضي:</b> <bdi class="en">hit</bdi> يصدم أو يضرب، و<bdi class="en">cut</bdi> يقطع، و<bdi class="en">hurt</bdi> يؤذي أو يؤلم.</p>' +
        '<p><b>يتغير حرف العلة فيها:</b> <bdi class="en">break → broke</bdi> يكسر، و<bdi class="en">fall → fell</bdi> يسقط، و<bdi class="en">run → ran</bdi> يجري.</p>' +
        '<p>ومع <bdi class="en">he</bdi> و<bdi class="en">she</bdi> يدلّك حرف <bdi class="en">s</bdi> على الزمن: <bdi class="en">he hits</bdi> مضارع، و<bdi class="en">he hit</bdi> ماضٍ.</p>' +
        '<p>ويُضاعف الحرف الأخير قبل <bdi class="en">ing</bdi> في <bdi class="en">hitting</bdi> و<bdi class="en">cutting</bdi> و<bdi class="en">running</bdi>.</p>'
    },
    {
      tEn: "Long or Short? And when for Time",
      t: "طويل أم قصير؟ وwhen للزمن",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Long or Short?</span><small>كيف تعرف كلًّا منهما؟ وwhen للزمن</small></h2>' +
        '<div class="sigs">' +
          '<div class="sig c"><h3 dir="ltr">Already going on<small class="sig-ar">كان جاريًا حين وقع الآخر</small></h3><ul><li>was reading</li><li>were sitting</li><li>was walking</li></ul></div>' +
          '<div class="sig s"><h3 dir="ltr">Happened in one moment<small class="sig-ar">وقع في لحظة</small></h3><ul><li>hit</li><li>fell</li><li>broke</li></ul></div>' +
        '</div>' +
        '<p class="en-p" dir="ltr">The background can also be a state, like <b>be</b> or <b>know</b>. These verbs take no -ing: When the taxi came, I was ready.</p>' +
        '<p class="en-p" dir="ltr"><b>when + was / were</b> can also tell the time in your life. Here one action does not happen in the middle of another, so the past simple is fine for both verbs: When I was fifteen, I lived in Abha.</p>' +
        '<div class="tip" dir="ltr"><p><b>Also correct · يصح أيضًا:</b> when can go with the long action: When I was running for the bus, I fell. You will learn more in Lesson 4.</p></div>',
      arHtml:
        '<p>اسأل نفسك: أيّ الحدثين كان جاريًا حين وقع الآخر؟ فهو الطويل، ويأتي بالماضي المستمر. وأيهما وقع في لحظة؟ فهو القصير، ويأتي بالماضي البسيط.</p>' +
        '<p>وقد تكون الخلفية حالة لا حدثًا، كما في <bdi class="en">be</bdi> و<bdi class="en">know</bdi>، وهذه لا تأخذ <bdi class="en">ing</bdi>: <bdi class="en">When the taxi came, I was ready.</bdi></p>' +
        '<p>وتأتي <bdi class="en">when</bdi> مع <bdi class="en">was / were</bdi> لتحديد الزمن من العمر أو الحياة، فلا يقع هنا حدث في أثناء حدث، فيصح الماضي البسيط في الفعلين: <bdi class="en">When I was fifteen, I lived in Abha.</bdi></p>' +
        '<p>ويصح أن تأتي <bdi class="en">when</bdi> مع الحدث الطويل نفسه، وليس ذلك خطأً: <bdi class="en">When I was running for the bus, I fell.</bdi> وتفصيله في الدرس الرابع.</p>'
    },
    {
      tEn: "Common Arab Mistakes",
      t: "أخطاء العرب الشائعة",
      bilingual: true,
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Common Arab Mistakes</span><small>أخطاء يقع فيها كثير من العرب</small></h2>' +
        '<ul class="mist">' +
          '<li><span class="no">I walking to the pharmacy when I saw the fire.</span><span class="yes">I was walking to the pharmacy when I saw the fire.</span><p class="en-m" dir="ltr">The long action needs <b>was / were</b> before verb-ing.</p><p>لا بد من <bdi class="en">was / were</bdi> قبل الفعل المنتهي بـ <bdi class="en">ing</bdi>.</p></li>' +
          '<li><span class="no">My aunt was wait for a taxi when her phone broke.</span><span class="yes">My aunt was waiting for a taxi when her phone broke.</span><p class="en-m" dir="ltr">After <b>was</b>, the verb needs <b>-ing</b> here: was waiting.</p><p>بعد <bdi class="en">was</bdi> يأخذ الفعل هنا <bdi class="en">ing</bdi>: <bdi class="en">was waiting</bdi>.</p></li>' +
          '<li><span class="no">A stone was hitting our car when we were driving to Abha.</span><span class="yes">A stone hit our car when we were driving to Abha.</span><p class="en-m" dir="ltr">The short action happened in one moment, so it takes the <b>past simple</b>.</p><p>الحدث القصير وقع في لحظة، فيأتي بالماضي البسيط لا المستمر.</p></li>' +
          '<li><span class="no">My brother was cooking when he cutted his hand.</span><span class="yes">My brother was cooking when he cut his hand.</span><p class="en-m" dir="ltr"><b>cut</b> does not change in the past, and it never takes -ed.</p><p><bdi class="en">cut</bdi> لا يتغير في الماضي، ولا يأخذ <bdi class="en">ed</bdi>.</p></li>' +
        '</ul>'
    },
    {
      tEn: "Summary",
      t: "الخلاصة",
      enHtml:
        '<h2 class="bi-h"><span class="en" dir="ltr">Quick Summary</span><small>الخلاصة</small></h2>' +
        '<div class="sumc" dir="ltr"><h3>In Two Lines · في سطرين</h3>' +
          '<p><b>Long and short · الطويل والقصير</b><span>long action: was / were + verb-ing · short action: past simple · when + short action · When at the start: use a comma</span></p>' +
          '<p><b>Today\'s verbs · أفعال اليوم</b><span>hit · cut · hurt (no change) · broke · fell · ran · when I was fifteen tells the time</span></p>' +
        '</div>' +
        '<p class="en-p" dir="ltr">Now let\'s practise: 16 guided exercises on long and short actions.</p>',
      arHtml:
        '<p><b>الطويل والقصير:</b> الحدث الطويل بالماضي المستمر، والقصير بالماضي البسيط بعد <bdi class="en">when</bdi>، وإذا بدأت الجملة بـ <bdi class="en">When</bdi> وضعنا فاصلة بعد الحدث القصير.</p>' +
        '<p><b>أفعال اليوم:</b> <bdi class="en">hit, cut, hurt</bdi> لا تتغير، و<bdi class="en">broke, fell, ran</bdi> ماضي <bdi class="en">break, fall, run</bdi>، و<bdi class="en">when I was fifteen</bdi> لتحديد الزمن.</p>'
    }
  ],

  gA: [
    { s: "On the way home, I ___ to the radio when the car in front of me stopped.", opts: ["listening", "was listening"], a: 1,
      whyEn: "The long action needs 'was' before verb-ing. 'I listening' has no 'be' verb, so it is not a full sentence.",
      why: "الحدث الطويل تأتي فيه was قبل الفعل المنتهي بـ ing، وI listening بلا فعل be فليست جملة تامة.", errCat: "be_verb" },
    { s: "We were sitting in heavy traffic when a truck ___ the car behind us.", opts: ["hit", "was hitting"], a: 0,
      whyEn: "'were sitting' is the long action. The truck did its action in one moment, so we use the past simple: hit.",
      why: "were sitting هو الحدث الطويل، أما اصطدام الشاحنة فوقع في لحظة، فيأتي بالماضي البسيط: hit.", errCat: "tense" },
    { s: "When I ___ twelve, I fell off a wall and hurt my back.", opts: ["was", "was being"], a: 0,
      whyEn: "Here 'When I was twelve' only tells the time in my life, so we use 'was' with the age. 'be' is a state, and it takes no -ing here.",
      why: "When I was twelve تحدد زمنًا من العمر، فنستعمل was مع السن، وbe هنا حالة لا تأخذ ing.", errCat: "be_verb" },
    { s: "Which sentence is correct?", opts: ["When my phone fell I was crossing the busy street.", "When my phone fell, I was crossing the busy street."], a: 1,
      whyEn: "The sentence starts with 'When', so we put a comma after the short action: When my phone fell, ...",
      why: "بدأت الجملة بـ When، فنضع فاصلة بعد الحدث القصير: When my phone fell,", errCat: "word_order" }
  ],

  gB: [
    { s: "I driving to the university when the traffic stopped.", ok: false, fix: "I was driving to the university when the traffic stopped.",
      whyEn: "The long action needs 'was' before verb-ing: I was driving. 'I driving' is a common mistake.",
      why: "الحدث الطويل تأتي فيه was قبل الفعل: I was driving، وI driving خطأ شائع.", errCat: "be_verb" },
    { s: "My cousin was drive to the farm when a sheep ran across the road.", ok: false, fix: "My cousin was driving to the farm when a sheep ran across the road.",
      whyEn: "After 'was', the long action needs -ing: was driving. 'was drive' mixes two forms.",
      why: "بعد was يأخذ الفعل في الحدث الطويل ing: was driving، أما was drive فتخلط بين صيغتين.", errCat: "be_verb" },
    { s: "We were standing at the bus stop when a motorbike was hitting the sign.", ok: false, fix: "We were standing at the bus stop when a motorbike hit the sign.",
      whyEn: "'were standing' is the long action. The motorbike's action happened in one moment, so it needs the past simple: hit.",
      why: "were standing هو الحدث الطويل، أما اصطدام الدراجة النارية فوقع في لحظة، فيأتي بالماضي البسيط: hit.", errCat: "tense" },
    { s: "When the ball broke the window, my sisters were cooking in the kitchen.", ok: true,
      whyEn: "Correct: the short action comes first in the past simple (broke), then a comma, then the long action (were cooking). 'my sisters' is plural, so we use 'were'.",
      why: "صحيحة: جاء الحدث القصير أولًا بالماضي البسيط (broke) ثم فاصلة ثم الحدث الطويل (were cooking)، وmy sisters جمع فنستعمل were.", errCat: "tense" }
  ],

  gC: [
    { pre: "My father", verb: "sleep", post: "in the back of the car when we had an accident.", ans: ["was sleeping"],
      whyEn: "Sleeping is the long action, and 'had an accident' is the short action in the middle of it. 'My father' is singular, so we use 'was'.",
      why: "النوم هو الحدث الطويل، وhad an accident هو الحدث القصير الواقع في أثنائه، وMy father مفرد فنستعمل was.", errCat: "tense" },
    { pre: "The children were playing on the stairs when Ali", verb: "fall", post: "and hurt his knee.", ans: ["fell"],
      whyEn: "Playing is the long action, so the short action takes the past simple. 'fall' is irregular: fell.",
      why: "اللعب هو الحدث الطويل، فيأتي الحدث القصير بالماضي البسيط، وfall فعل شاذ ماضيه fell.", errCat: "tense" },
    { pre: "When the glass", verb: "break", post: ", my mother was washing the dishes.", ans: ["broke"],
      whyEn: "After 'when', the short action takes the past simple. 'break' is irregular: broke, not breaked.",
      why: "بعد when يأتي الحدث القصير بالماضي البسيط، وbreak فعل شاذ ماضيه broke لا breaked.", errCat: "tense" },
    { pre: "My sisters", verb: "wait", post: "at the side of the road when a bus came very close and almost hit them.", ans: ["were waiting"],
      whyEn: "Waiting is the long action, and 'came' is the short action. 'My sisters' is plural, so we use 'were', not 'was'.",
      why: "الانتظار هو الحدث الطويل، وcame هو الحدث القصير، وMy sisters جمع فنستعمل were لا was.", errCat: "agreement" }
  ],

  gD: [
    { chips: ["when", "the rain started.", "We were walking", "along the beach"], ans: "We were walking along the beach when the rain started.",
      whyEn: "Long action (We were walking) + place (along the beach) + when + short action (the rain started).",
      why: "الحدث الطويل We were walking ثم المكان along the beach ثم when ثم الحدث القصير the rain started.", errCat: "word_order" },
    { chips: ["was fixing the roof", "he fell off.", "My uncle", "when"], ans: "My uncle was fixing the roof when he fell off.",
      whyEn: "Subject (My uncle) + long action (was fixing the roof) + when + short action (he fell off). The past of 'fall' is 'fell'.",
      why: "الفاعل My uncle ثم الحدث الطويل was fixing the roof ثم when ثم الحدث القصير he fell off، وماضي fall هو fell.", errCat: "word_order" },
    { chips: ["I was", "When the lights", "reading in bed.", "went out,"], ans: "When the lights went out, I was reading in bed.",
      whyEn: "The sentence starts with When + short action. Then comes a comma, then the long action: I was reading in bed.",
      why: "تبدأ الجملة بـ When مع الحدث القصير، ثم الفاصلة، ثم الحدث الطويل I was reading in bed.", errCat: "word_order" },
    { chips: ["was making", "dinner.", "When I cut my finger,", "my mother"], ans: "When I cut my finger, my mother was making dinner.",
      whyEn: "When + short action, then the long action: subject (my mother) + was making + object (dinner). 'cut' does not change in the past.",
      why: "When مع الحدث القصير، ثم الحدث الطويل: الفاعل my mother ثم was making ثم المفعول به dinner، وcut لا يتغير في الماضي.", errCat: "word_order" }
  ],

  /* ---------- المرحلة 4: الاستماع على ثلاث مراحل (مقطع حقيقي من ELLLO، ونصه المكتوب في صفحة المصدر) ---------- */
  listening: {
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
      optsEn: ["An accident that happened to them", "How to pass a driving test in their countries", "The news about one big accident last year"],
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
      { tf: true, q: "Helen had her accident many years after she got her licence.", a: false,
        whyEn: "False. At the start, Helen says her accident came a short time after she got her licence. She says driver's license, the North American name for it.",
        why: "خطأ؛ في أول المقطع تقول هيلين إن الحادث وقع بعد وقت قصير من حصولها على رخصة القيادة، وتسميها driver's license كما يقال في أمريكا الشمالية.", errCat: "reading" },
      { q: "Where did Helen's accident happen?", opts: ["Outside her school", "On a long road between two cities", "In a parking lot (a car park)"], a: 2,
        whyEn: "At the start, Helen says that the accident happened in a parking lot. British people call this place a car park.",
        why: "في أول المقطع تقول هيلين إنها كانت تقود في موقف سيارات، ويسميه البريطانيون car park.", errCat: "reading" },
      { q: "How old was Amir when he had his accident?", opts: ["Nine", "Sixteen", "Nineteen"], a: 0,
        whyEn: "Near the start, in the second story, Amir says he had his accident at the age of nine.",
        why: "قرب أول المقطع، في القصة الثانية، يقول أمير إن الحادث وقع له وهو في التاسعة.", errCat: "reading" },
      { q: "What did Lindsay decide after her accident?", opts: ["To sell her car and take the bus", "To drive carefully from then on", "To wait a year before she drove again"], a: 1,
        whyEn: "In the middle, at the end of the third story, Lindsay says she decided to be very careful when she drives.",
        why: "في وسط المقطع، في آخر القصة الثالثة، تقول ليندسي إنها قررت أن تكون حذرة جدًا في قيادتها.", errCat: "reading" },
      { q: "Why did Paul and his girlfriend rent a motorbike?", opts: ["To go diving in another area", "To visit a friend in the capital", "To take photos of the mountains"], a: 0,
        whyEn: "In the middle, in the fourth story, Paul says they wanted to ride across the island in Thailand and go diving there.",
        why: "في وسط المقطع، في القصة الرابعة، يقول بول إنهما أرادا الذهاب إلى الجهة الأخرى من الجزيرة في تايلند ليمارسا الغوص.", errCat: "reading" },
      { q: "What does Paul say about the roads there?", opts: ["They were very busy.", "They were new and wide.", "They were a bit dangerous."], a: 2,
        whyEn: "In the middle, in the fourth story, Paul says the roads there were not very safe.",
        why: "في وسط المقطع، في القصة الرابعة، يقول بول إن الطرق هناك لم تكن آمنة كثيرًا.", errCat: "reading" },
      { q: "Matthew had his accident on his bicycle, on the way home. What did he break?", opts: ["His leg", "His arm", "His front wheel"], a: 1,
        whyEn: "Near the end, in the fifth story, Matthew says that he broke his arm. He was sixteen at the time.",
        why: "قرب آخر المقطع، في القصة الخامسة، يقول ماثيو إن ذراعه انكسرت، وكان في السادسة عشرة.", errCat: "reading" },
      { q: "What was the street like in Shalini's story?", opts: ["It was busy.", "It was quiet.", "It was closed."], a: 0,
        whyEn: "At the end, in the last story, Shalini says she was going out onto a busy street.",
        why: "في آخر المقطع، في القصة الأخيرة، تقول شاليني إنها كانت تدخل بسيارتها شارعًا مزدحمًا.", errCat: "reading" }
    ]
  },

  writing: {
    taskEn: "Write at least 4 separate sentences about a small accident or a bad moment on the road. It can be true, or you can make it up. In at least 2 sentences, use a long action and a short action with when (I was driving when a dog ran in front of me. When my brother came, I was sitting in my car.). Use at least 2 words from today's lesson (for example: accident, injured, serious). Write 'I' with a capital letter.",
    task: "اكتب 4 جمل منفصلة على الأقل عن حادث صغير أو موقف سيئ على الطريق، حقيقيًا كان أو من خيالك. استعمل في جملتين على الأقل حدثًا طويلًا وحدثًا قصيرًا مع when (I was driving when a dog ran in front of me. When my brother came, I was sitting in my car.)، واستعمل كلمتين على الأقل من كلمات الدرس (مثل accident وinjured وserious)، واكتب الضمير I بحرف كبير.",
    placeholder: "I was driving … when …\nWhen …, I was …",
    checks: [
      { k: "sentences", tEn: "At least 4 separate sentences (end each with a period .), and 'I' is always a capital", t: "4 جمل منفصلة على الأقل (بنقطة في نهاية كل جملة)، والضمير I بحرف كبير دائمًا",
        ok: function(a, text){ return a.sentences >= 4 && !/\bi\b/.test(String(text || '')); } },
      { k: "when", tEn: "At least 2 sentences with was / were + verb-ing and when", t: "جملتان على الأقل فيهما was / were مع فعل بـ ing، وwhen", ex: "I was driving when a dog ran in front of me.",
        ok: function(a, text){
          return String(text || '').split(/[.!?]+/).filter(function(x){
            return /\bwhen\b/i.test(x) && /\b(?:was|were)\s+(?!(?:morning|evening|nothing|something|anything|everything)\b)[a-z]+ing\b/i.test(x); }).length >= 2; } },
      { k: "form", tEn: "was / were before verb-ing, no 'was drive', and a comma when a sentence starts with When", t: "was / were قبل الفعل بـ ing، ولا was drive، وفاصلة إذا بدأت الجملة بـ When", ex: "I was driving (not: I driving, was drive) · When the car stopped, I was …",
        ok: function(a, text){
          var s = ' ' + String(text || '').replace(/[‘’]/g, "'") + ' ';
          if (/\b(?:I|you|he|she|we|they)\s+(?:driving|riding|walking|running|going|crossing|turning|sitting|waiting|working)\b/i.test(s.replace(/\b(?:was|were)\s+(?:I|you|he|she|we|they)\b/gi, ' '))) return false;
          if (/\b(?:was|were)\s+(?:drive|ride|walk|go|cross|turn|sit|wait|work|fall|break)\b/i.test(s)) return false;
          return !s.split(/[.!?]+/).some(function(x){ return /^\s*when\b/i.test(x) && !/^\s*when\s+(?:did|do|does)\b/i.test(x) && x.indexOf(',') < 0; }); } },
      { k: "vocab", tEn: "At least 2 words or phrases from today's lesson", t: "كلمتان أو عبارتان على الأقل من درس اليوم", ex: "accident · injured · serious · rent · fall off · control · driving licence",
        ok: function(a, text){
          var s = String(text || '').replace(/[‘’]/g, "'");
          var found = [/\baccidents?\b/i, /\binjured\b/i, /\bserious\b/i, /\brent(?:s|ed|ing)?\b/i, /\b(?:fall|falls|falling|fell|fallen)\s+off\b/i,
            /\bcontrol(?:s|led|ling)?\b/i, /\b(?:driving|driver's)\s+licen[cs]e\b/i]
            .filter(function(r){ return r.test(s); }).length;
          return found >= 2 || ((a && a.used) || []).length >= 2; } }
    ],
    modelMarked: "Last winter, I had a small {accident} on the way to the university. I <<c:was driving>> on a busy road when a goat <<s:ran>> in front of my car. I turned quickly, and my car <<s:hit>> a wall. When the police <<s:came>>, I <<c:was standing>> near my car. Nobody was {injured}, and the accident was not {serious}.",
    model: "Last winter, I had a small accident on the way to the university. I was driving on a busy road when a goat ran in front of my car. I turned quickly, and my car hit a wall. When the police came, I was standing near my car. Nobody was injured, and the accident was not serious.",
    legendEn: "Light blue = short action (past simple) · Terracotta = long action (was / were + verb-ing)",
    legendAr: "الأزرق الفاتح للحدث القصير (الماضي البسيط)، والطوبي للحدث الطويل (was / were مع ing).",
    acceptExamples: [
      "Last summer, I rented a bike in Turkey. I was riding near the sea when a dog ran in front of me. I fell off the bike and hurt my hand. When my friend came, I was sitting on the road.",
      "I had a small accident yesterday. I was walking to the university when I fell. I cut my hand, but it wasn’t serious. When my brother called, I was waiting at the clinic.",
      "We were driving to Abha when a big truck hit our car. It was a serious accident. When the police arrived, we were standing near the road. My father was injured, but he is fine now.",
      "When I was riding to work, a car hit my bike. I fell off and broke my arm. I was waiting for my brother when the police came. It wasn’t a serious accident, but I was injured. When did it happen? It happened in May."
    ]
  },

  askChips: [
    "متى أستعمل الماضي المستمر ومتى أستعمل الماضي البسيط؟",
    "هل أضع when مع الحدث الطويل أم القصير؟",
    "متى أضع فاصلة في الجملة التي فيها when؟",
    "كيف أعرف أن hit في الماضي وهي لا تتغير؟"
  ],

  quiz: [
    { s: "Which sentence is correct?", opts: ["I talking to my friend when the taxi stopped.", "I was talking to my friend when the taxi stopped.", "I was talk to my friend when the taxi stopped."], a: 1, tag: "Grammar · قواعد",
      whyEn: "The long action needs 'was' + verb-ing: was talking. 'I talking' has no 'was', and 'was talk' has no -ing.",
      why: "الحدث الطويل يأتي بـ was مع الفعل بـ ing: was talking، أما I talking فبلا was، وwas talk بلا ing.", errCat: "be_verb" },
    { s: "My grandfather was getting out of the car when he ___ his glasses.", opts: ["broke", "breaked", "was breaking"], a: 0, tag: "Grammar · قواعد",
      whyEn: "'was getting out' is the long action, so the short action takes the past simple. The past of 'break' is 'broke'.",
      why: "was getting out هو الحدث الطويل، فيأتي الحدث القصير بالماضي البسيط، وماضي break هو broke.", errCat: "tense" },
    { s: "We ___ in a small restaurant in Istanbul when a waiter fell with all the plates.", opts: ["was eating", "eat", "were eating"], a: 2, tag: "Grammar · قواعد",
      whyEn: "Eating is the long action, and 'We' takes 'were': we were eating. 'was' does not go with 'we', and 'eat' is present.",
      why: "الأكل هو الحدث الطويل، وWe تأخذ were: we were eating، ولا تأتي was مع we، وeat مضارع.", errCat: "agreement" },
    { s: "An old man was getting on the bus when he ___ and hurt his back.", opts: ["falled", "fell", "falling"], a: 1, tag: "Grammar · قواعد",
      whyEn: "This is the short action, so it takes the past simple. 'fall' is irregular: fell. 'falled' is not a word.",
      why: "هذا هو الحدث القصير، فيأتي بالماضي البسيط، وfall فعل شاذ ماضيه fell، أما falled فليست كلمة.", errCat: "tense" },
    { s: "Which sentence is correct?", opts: ["When the bus arrived we were talking about the exam.", "When the bus was arrive, we talked about the exam.", "When the bus arrived, we were talking about the exam."], a: 2, tag: "Grammar · قواعد",
      whyEn: "When + short action in the past simple (arrived), then a comma, then the long action (were talking).",
      why: "When مع الحدث القصير بالماضي البسيط (arrived)، ثم فاصلة، ثم الحدث الطويل (were talking).", errCat: "word_order" },
    { s: "A little boy ___ after his ball, and the driver stopped just in time.", opts: ["ran", "runned", "run"], a: 0, tag: "Grammar · قواعد",
      whyEn: "The story is in the past ('stopped'), and the past of 'run' is 'ran'. 'runned' is not a word, and 'run' here would be present.",
      why: "القصة في الماضي (stopped)، وماضي run هو ran، أما runned فليست كلمة، وrun هنا مضارع.", errCat: "tense" },
    { s: "When my father ___ young, he hurt his leg in a football match.", opts: ["were", "was being", "was"], a: 2, tag: "Grammar · قواعد",
      whyEn: "'When my father was young' tells the time in his life, so we use 'was'. 'my father' is singular, and 'be' takes no -ing here.",
      why: "When my father was young تحدد زمنًا من حياته، فنستعمل was، وmy father مفرد، وbe هنا لا تأخذ ing.", errCat: "be_verb" },
    { s: "The police said that nobody was ___ in the accident, and everyone went home.", opts: ["rented", "injured", "serious"], a: 1, tag: "Vocabulary · مفردات",
      whyEn: "'injured' means hurt in the body. The people went home because nobody was hurt. 'serious' describes the accident here, not the people: a serious accident.",
      why: "injured تعني أن جسمه أصيب، وقد عاد الجميع إلى بيوتهم لأنه لم يُصب أحد، أما serious فوصف للحادث هنا لا للناس: a serious accident.", errCat: "vocab" },
    { s: "The island is big, so we want to ___ a car for a week and see all of it.", opts: ["rent", "control", "fall off"], a: 0, tag: "Vocabulary · مفردات",
      whyEn: "'rent' means pay to use something for a time, like a car for one week.",
      why: "rent تعني أن تدفع لتنتفع بشيء مدة من الزمن، كسيارة لأسبوع واحد.", errCat: "vocab" },
    { s: "By law, you need ___ to drive a car on the road.", opts: ["a sick leave note", "an annual leave form", "a driving licence"], a: 2, tag: "Legal Track · المسار القانوني",
      whyEn: "A 'driving licence' is the official document that gives you the right to drive. 'sick leave' and 'annual leave' are kinds of time off work.",
      why: "driving licence الوثيقة الرسمية التي تمنحك حق القيادة، أما sick leave وannual leave فنوعان من الإجازة من العمل.", errCat: "vocab" }
  ]
};
})();
