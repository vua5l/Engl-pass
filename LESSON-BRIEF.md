# دليل بناء الدروس ومراجعتها · English Passport

المرجع الحاكم للبناء داخل المستودع هو هذه الورقة وخرائط الوحدات في `maps/`، والقرار الأحدث يلغي الأقدم. والخطة الكاملة للكورس في مشروع Claude، وينقل المنسّق إلى هذه الورقة كل قرار فيها يمس البناء، فلا يحتاج الكاتب ولا المراجع ولا العمل الليلي إلى غيرها. النماذج: `lessons/u0/l1.js` إلى `l5.js`، و`lessons/u1/l1.js` إلى `l5.js` بعد مراجعتها المستقلة في 24 أكتوبر 2026، و`lessons/u2/l1.js` إلى `l5.js` بعد مراجعتها في 26 أكتوبر 2026 (دروس الاستماع: u0l2 وu0l4 وu1l2 وu1l3 وu2l2 وu2l4). ونماذج الوحدة 2 أقرب، لأن فيها `askChips` وتدريب الأفعال الشاذة.
**الكاتب يسلّم ملفًا واحدًا** `lessons/u<U>/l<N>.js` في المجلد الذي يحدده المنسّق لا في المستودع، ولا يعدّل غيره، ويلتزم بصفه في «خريطة الوحدة» (القسم 6). ويقرأ هذه الورقة، ووصف درسه في الخريطة، ودرسًا نموذجيًا واحدًا من نوع درسه، ولا يحتاج `README.md` ولا `CHANGELOG.md`.

## 1. المتعلم
- طالب قانون سعودي يدرس من الآيفون (شاشة صغيرة، سؤال في كل شاشة)، والدرس 60 دقيقة.
- بداية A2: الفهم قراءةً واستماعًا ثابت بسماعين وبلا وقت، والقواعد والكتابة في أول A2؛ قراءته أضعف من استماعه.
- أخطاؤه، وتُستهدف في التمارين: خلط الأزمنة (`don't understand` للماضي)، و`be` مع الفعل (`are teached`، `I am work`)، وإهمال المطابقة (`Is there any restaurants`)، وأدوات التعريف وحروف الجر (`is lawyer`، `good in`)، والإملاء (`studing`، `butefull`)، و`i` الصغيرة.
- يكتب جملة واحدة موصولة بدل 4–5 جمل، ولم يعرف `shelves` و`empty` و`tents` في القراءة.

## 2. المراحل الست (60 دقيقة)

| المرحلة | د | حقول الملف |
|---|---|---|
| 1. الاسترجاع النشط | 5 | `recall` |
| 2. عبارات جديدة | 8 | `vocab` + `legalPhrase` + `vocabGaps` |
| 3. قواعد | 12 | `gCards` + `gA` `gB` `gC` `gD` |
| 4. قراءة أو استماع | 17 | `reading` أو `listening` (واحد فقط) |
| 5. كتابة | 10 | `writing` |
| 6. اختبار وتحليل أخطاء | 8 | `quiz` |

## 3. هيكل الملف

```js
(function(){
LESSONS.u1l2 = {
  id: "u1l2", unit: 1, n: 2, mode: "listening",   // mode للتوثيق فقط
  en: "…", ar: "…", subEn: "…", canDoEn: "…", canDoAr: "…", descEn: "…", descAr: "…",
  goals: [ { en: "I can …", ar: "…" } ],           // ×4
  intro: { recall: { dEn: "…", d: "…", items: [ ["review", "English", "عربي"] ] },   // تمهيد لكل مرحلة
           vocab: {…}, grammar: {…}, reading: {…} /* حتى للاستماع */, writing: {…}, quiz: {…} },
  recall: [ { id: "rc-0", promptAr: "…", promptEn: "…", sentPre: "…", sentPost: "…", ans: ["word"],
              hint: "s _ _ g (8 letters)", spellNoteEn: "…", spellNote: "…", errCat: "spelling" } ],  // ×5
  legalPhrase: { /* حقول عنصر vocab نفسها، لكن: */ headword: "…", pos: "legal phrase", legal: true,
                 wikiFiles: ["En-us-x.ogg"] /* مصفوفة بدل wikiFile */ },
  vocab: [ { en: "…", pos: "noun", ar: "…", say: "…", ex: "…", exAr: "…", tipEn: "…", tip: "…",
             oxfordSlug: "…", wikiFile: "En-us-x.ogg", wikiCredit: "…" } ],                     // 5–7
  vocabGaps: [ { s: "… ___ …", opts: ["a", "b", "c"], a: 0, whyEn: "…", why: "…", errCat: "vocab" } ],  // ×8
  gCards: [ { tEn: "…", t: "…", enHtml: '…', arHtml: '…' },                    // 6 بطاقات: 4 شرح + الأخطاء + الخلاصة
            { tEn: "Common Arab Mistakes", t: "أخطاء العرب الشائعة", bilingual: true,
              enHtml: '<ul class="mist"><li><span class="no">…</span><span class="yes">…</span><p class="en-m" dir="ltr">…</p><p>…</p></li></ul>' },
            { tEn: "Summary", t: "الخلاصة", enHtml: '…', arHtml: '…' } ],
  gA: [ { s: "… ___ …", opts: ["a", "b"], a: 0, whyEn: "…", why: "…", errCat: "…" } ],   // 16 تمرينًا: 4 لكل مجموعة
  gB: [ { s: "…", ok: false, fix: "…", whyEn: "…", why: "…", errCat: "…" } /* + واحد ok: true */ ],
  gC: [ { pre: "…", verb: "not / watch", post: "…", ans: ["doesn't watch", "does not watch"], whyEn: "…", why: "…", errCat: "…" } ],
  gD: [ { chips: ["…", "…", "…", "…"], ans: "…", whyEn: "…", why: "…", errCat: "word_order" } ],
  reading: {                                         // يُعرض كإيميل
    title: "…", from: "…", fromMeta: "Name · Role", to: "…", lg1: "…", lg2: "…", lg3: "…", targetSeconds: 110, introEn: "…", intro: "…",
    paras: [ "Hi Sam,", "I <<s:work>> with {lawyers|lawyer} at a [[station|محطة]] …", "Best,<br>Name" ],
    predict: { qEn: "…", q: "…", optsEn: ["…", "…", "…"], opts: ["…", "…", "…"], a: 1, revealEn: "…", reveal: "…" },
    insight: { titleEn: "…", titleAr: "…", l1En: "…", ex1: "…", l2En: "…", ex2: "…", arHtml: "<p>…</p>" },
    questions: [ { q: "…", opts: ["…", "…", "…"], a: 0, ev: "اقتباس حرفي من paras", whyEn: "…", why: "…", errCat: "reading" },
                 { tf: true, q: "…", a: false, ev: "…", whyEn: "…", why: "…", errCat: "reading" } ] },   // ×8
  listening: {                                       // بدل reading
    title: "…", sourceTag: "LearnEnglish · Real recording · تسجيل حقيقي", sourceMeta: "…", speakers: "…",
    url: "https://…/صفحة-المقطع", audioWord: "…", targetSeconds: 90, introEn: "…", intro: "…",
    predict: {…}, insight: {…},
    questions: [ { q: "…", opts: ["…", "…", "…"], a: 0, whyEn: "Near the start, … says …", why: "…", errCat: "reading" } ] },  // ×8 بلا ev
  writing: { taskEn: "…", task: "…", placeholder: "…",
    checks: [ { k: "sentences", tEn: "…", t: "…", ex: "…", ok: function(a, text){ return a.sentences >= 4; } } /* ×4 */ ],
    model: "…", modelMarked: "…", legendEn: "…", legendAr: "…",
    acceptExamples: [ "…", "…" ] },                 // إجابات صحيحة أخرى غير النموذج، يجرّبها الفاحص على checks
  askChips: [ "…؟", "…؟", "…؟", "…؟" ],              // من الوحدة 2: أربعة أسئلة قصيرة بالفصحى عن قاعدة الدرس، تقترحها نافذة «اسأل المعلم»
  quiz: [ { s: "… ___ …", opts: ["a", "b", "c"], a: 0, tag: "Grammar · قواعد", whyEn: "…", why: "…", errCat: "tense" } ]   // ×10
};
})();
```

اختياري: `groupEn`/`group` (عنوان مجموعة التمرين)، و`hlLabel` (زر التظليل) و`art` (رسم الإيميل) في `reading`. حقول `a` في `ok(a, text)`: `sentences` و`used` و`cont` و`sig`. أيقونات `intro`: `review pen spark cards quiz book clock mail speaker`. قيم `errCat`: `tense be_verb agreement articles_prep stative word_order spelling vocab reading`. الفاصلة العليا داخل نص بين ' تُكتب \'. اجعل `en` و`subEn` و`ar` مطابقة لـ `unit<U>Lessons`، واكتب `intro` أخيرًا لتطابق أعداده الواقع، وشغّل `node --check`.

## 4. قواعد المحتوى

**عامة.** الإنجليزي أولًا بمستوى A2 المبسّط وتحته عربي صغير فصيح (لا لهجة ولا «الحين»). لا إيموجي ولا ✗ ✓ (استعمل `yes` و`no`). الجمل بمواضيع يومية (أسرة، جامعة، سفر، صحة، تسوق)، والقانوني منها ربع أو أقل. لكل عنصر `whyEn` يشرح السبب لا الجواب وحده، و`why` بالعربي، و`errCat`. وزّع موضع الجواب الصحيح على كل الخيارات، ولا تضع «كلاهما».

**الاسترجاع.** 5 عناصر تُكتب من الذاكرة، من الدرس السابق، منها واحد `isLegal: true` لعبارته القانونية. `hint` عدد الحروف وأولها وآخرها فقط.

**المفردات.** `vocab` (5–7) + `legalPhrase` = 6–8 عبارات من نص الدرس أو مقطعه، من Oxford 3000/5000 (فحص داخلي لا يُكتب؛ وما فوقهما يُشرح بـ `[[ ]]` ولا يدخل `vocab`). الأولوية للمتلازمات (`do research`) وتُشرح في `tipEn`/`tip`. `say` نطق بحروف عربية، و`oxfordSlug` رمز الكلمة في Oxford Learner's (`court_1`). لا يوضع `wikiFile` إلا لتسجيل بشري موجود في Wikimedia Commons، ولا صوت آلي. ويُؤخذ اسمه من بيانات Wiktionary في kaikki.org (`https://kaikki.org/dictionary/English/meaning/<الحرف>/<أول حرفين>/<الكلمة>.html`) كما هو، ولا يُخمَّن على نمط `En-us-<word>.ogg`: فقد وُجد في 26 أكتوبر خمسة أسماء مخمَّنة لا ملفات لها. والبريطاني (`En-uk-`) مقدَّم إن وُجد، ولا يُذكر في `wikiCredit` مسجّل ولا رخصة لم يُتحقق منهما. وفحص GitHub يؤكد وجود الملف عند الرفع.

**القواعد.** الشرح في `enHtml` بإنجليزي مبسّط وعربيه في `arHtml` فقط (يظهر بزر «اعرض بالعربي»). بطاقة «أخطاء العرب الشائعة» ثنائية اللغة (أربعة أخطاء من أخطائه). أصناف HTML المسموحة فقط: `bi-h en en-p xbox xtag s c xen tbl hs hc tip pairs yes no sigs sig sig-ar spell s-en uses en-uses vlist mist en-m sumc formula`.

| المجموعة | نوع التمرين | الشكل |
|---|---|---|
| gA | اختيار من متعدد (بديلان، وثلاثة في u0l5) | `s` فيه `___` أو اختيار جملة |
| gB | صح أو فيه خطأ: واحدة `ok: true` وثلاث `ok: false` | `fix` للخاطئة |
| gC | كتابة الصيغة، والتلميح في `verb` | `ans` تضم كل الصيغ الصحيحة؛ `exact: true` للحرف الكبير (وفي `recall` أيضًا) |
| gD | ترتيب كلمات (4 قطع) | `ans` القطع بمسافة واحدة؛ ترتيب صحيح واحد فقط |

الجمل جديدة: لا تتكرر جملة (ولا تعديل طفيف عليها) بين `gCards` و`ex` و`legalPhrase.ex` و`writing.model` والتمارين و`quiz` و`unitTests[<U>]`.

**القراءة.** إيميل نحو 150–230 كلمة، أعلى من A2 بقليل، فيه كل كلمات الدرس معلَّمة بـ `{word|key}` وعبارته القانونية إن صحّ السياق، وتتكرر القاعدة معلَّمة بـ `<<s:…>>` و`<<c:…>>` و`<<t:…>>`، والكلمات الصعبة بـ `[[word|المعنى]]`. قراءة أولى للفكرة العامة بمؤقت مريح (`targetSeconds` نحو 80–120 كلمة في الدقيقة) دون لمس الكلمات، ثم ثانية باللمس. 8 أسئلة (واحد أو اثنان `tf`) لكل منها `ev`.

**الاستماع.** تسجيل بشري حقيقي من LearnEnglish أو BBC أو ELLLO يُختار أولًا ويُبنى الدرس حوله (البريطاني مفضّل). لمرحلة A2: ELLLO أولًا (مستوياته ليست CEFR فافحصه)، ثم LearnEnglish A2؛ فـ BBC 6 Minute English يبدأ من B1. وصفحات LearnEnglish تحظر فحص GitHub (403) وتفتح للمتعلم، فيُقدَّم عليها ELLLO عند التساوي. اقرأ نصه في صفحة المصدر للفحص فقط: القاعدة فيه، وسرعته مناسبة، ومنه الكلمات. `url` صفحة المقطع نفسه لا الفهرس، ومدته حتى 4 دقائق؛ وإن لم تفتح فأبلغ المنسّق ولا تخمّن رابطًا. لا `paras` ولا `transcriptParas` ولا `transcript` ولا جملة منسوخة. ثلاث مراحل: (1) فكرة عامة بلا نص (`predict`)؛ (2) استماع ثانٍ و8 أسئلة بكلماتنا بلا `ev` (الأسماء والأرقام فقط من المقطع)، و`whyEn`/`why` تذكر موضع الجواب: أول المقطع أو وسطه أو آخره؛ (3) النص في صفحة المصدر مع الترديد. وفي `insight.arHtml`: الأمثلة من كتابتنا. ولا يُسمّى حوار مؤلَّف «تسجيل حقيقي».

**الكتابة.** 4 جمل منفصلة على الأقل بالقاعدة وكلمتين أو ثلاث من الدرس. اكتب `checks` خاصة بدرسك دائمًا (الافتراضية تطلب مضارعًا مستمرًا وكلمات روتين): أربعة، أولها `sentences` وآخرها `vocab`، وتقبل `model` وكل صيغة صحيحة معتادة (`don't` وعلامة ’). تُحسب الجملة إن بلغت 3 كلمات. و`model` 4 جمل فأكثر. وأضف في `writing.acceptExamples` إجابتين أو ثلاثًا صحيحة غير النموذج، بصيغ يكتبها المتعلم عادة، فيجرّبها الفاحص على `checks` كما يجرّب النموذج.

**الاختبار.** 10 أسئلة بالضبط، النجاح 8 (80%)، والمحرك يخلط الخيارات: 6–7 `Grammar · قواعد`، و2–3 `Vocabulary · مفردات`، وواحد `Legal Track · المسار القانوني` لعبارة الدرس.

## 5. الوحدة 3

الموضوع: «لحظات لا تُنسى» (Moments to Remember)، وكان في الخطة «لحظات في تاريخ العلم»، فتغيّر ليناسب المقطعين الحقيقيين، وبقي العلم في u3l1 وu3l3. القاعدة: الماضي المستمر (Past Continuous) في الإثبات والنفي والسؤال، ومع when وwhile، ومقابل الماضي البسيط. وهو في British Council | EAQUALS Core Inventory من قواعد A2، ويعود في B1، ومن وظائف A2 فيه «وصف التجارب الماضية وسرد القصص». ولم يصب المتعلم في التشخيص شيئًا من أسئلة الوحدة 3، فالشرح من الصفر بخطوات صغيرة، ويُبنى على was / were (u0l3)، وإملاء ing (u0l5 وu1l1)، وأفعال الحالة (u1l4)، والماضي البسيط بشاذه (الوحدة 2).

النوع كما في الخريطة (القسم 6): u3l1 وu3l3 وu3l5 قراءة، وu3l2 وu3l4 استماع. ويُبنى كل درس على ما قبله: الإثبات واللحظة المحددة (u3l1)، ثم الحدث الطويل يقطعه حدث قصير مع when (u3l2)، ثم النفي والسؤال (u3l3)، ثم while (u3l4)، ثم السرد في إفادة شاهد داخل إيميل (u3l5)، ثم `u3l6` Unit Review & Test بلا ملف درس (`unitTests[3]` في `content.js`).

**أفعال الحالة:** لا تأتي في الماضي المستمر كما لا تأتي في المضارع المستمر (I knew لا I was knowing)، ومنها understand (u3l3) وcost (u3l4) وmean بمعنى «يعني» (u3l5) من الأفعال الشاذة. وما يُشرح عن when وwhile يخص الفعل الأساسي، حدثًا كان أو حالة، فلا يُربط بأفعال الحدث وحدها، كما صُحّح في الوحدة 2.

**الأفعال الشاذة:** القائمة 60 فعلًا في `irregularVerbs` بـ `content.js`، ويتدرّب عليها المتعلم في تبويب الكلمات بالتكرار المتباعد. دُرّب منها 33 في الوحدة 2، والسبعة والعشرون الباقية في الوحدة 3: ستة لكل من u3l1 وu3l2 وu3l3، وخمسة لـ u3l4، وأربعة لـ u3l5، كما في عمود الخريطة، فتكتمل بها القائمة. تُشرح في بطاقات الدرس بصيغتها الثانية، وتدخل تمارينه واختباره، وتعود في الدروس التالية. وأفعال الوحدة 2 تعود أيضًا، لأن الحدث القصير في القاعدة ماضٍ بسيط.

الوحدتان 1 «الحياة والعمل حول العالم» و2 «رحلات عظيمة» مبنيتان، وخريطتاهما في القسم 6 وفي `maps/u1.json` و`maps/u2.json`.

## 6. خريطة الوحدة (يملؤها المنسّق قبل أن يبدأ أي كاتب)

وجود `…` مكان قيمة في صف الكاتب يعني التوقف وسؤال المنسّق، أما في آخر مثال فاختصار. خريطتا الوحدتين 3 و2 كتبهما المنسّق في 26 أكتوبر 2026، وخريطة الوحدة 1 في 24 أكتوبر، وكلها ملزمة للكتّاب والمراجعين.

**النسخة الآلية:** لكل خريطة ملف `maps/u<N>.json` يكتبه المنسّق مع الجدول قبل أن يبدأ أي كاتب، بما في الجدول بلا زيادة، فإذا تغيّر أحدهما غُيّر الآخر معه (صيغته في `maps/README.md`، ونموذجه `maps/u1.json`).
- تُكتب الكلمات في `vocab` و`legalPhrase` كما سيكتبها الكاتب في `en`، وما بين القوسين شرح أو متلازمة لا يُقارن: `"research (do research)"` تطابق `en: "research"`.
- في `recycled` كلمة إنجليزية لكل عنصر ومصدرها بين قوسين: `"get home (u1l2)"`.
- `node tests/map-check.js --unit <N>` يقارن كل درس بصفه: الكلمات والعبارة بلا نقص ولا زيادة، والنوع، ورابط المقطع (ERROR)، وظهور الكلمات المعاد تدويرها فيما يقرؤه المتعلم (WARN). ويبقى للمراجع محور القاعدة ومواضيع الجمل وجودة التدوير والاسترجاع.

### الوحدة 3

| id | العنوان | `mode` | المقطع (رابطه) أو موضوع النص | الكلمات (`vocab`) | العبارة القانونية | محور القاعدة ضمن قاعدة الوحدة | الأفعال الشاذة (`irregularVerbs`) | الاسترجاع (`recall`) | معاد تدويره (يظهر في النص أو التمارين، لا كجديد) | مواضيع جمل التمارين |
|---|---|---|---|---|---|---|---|---|---|---|
| u3l1 | A Night to Remember | reading | إيميل من لمى، طالبة قانون في الرياض، إلى صديقتها البريطانية صوفي عن ليلة إطلاق رحلة Axiom Mission 2 في مايو 2023: انطلق الصاروخ من فلوريدا وكان الوقت في الرياض بعد منتصف الليل، فتصف ما كانت أسرتها تفعله في تلك اللحظة أمام الشاشة (الجلوس والوقوف وإمساك الهاتف وصبّ القهوة ولبس الثوب)، وأن ريانة برناوي، العالمة التي تبحث في الخلايا الجذعية للسرطان، صارت أول امرأة سعودية في الفضاء ومعها علي القرني، وبقيا في محطة الفضاء الدولية نحو ثمانية أيام يجريان تجارب علمية، وأن الأمير سلطان بن سلمان كان أول عربي في الفضاء سنة 1985، وما تعلمته لمى في كلية القانون: القانون الدولي لا يسمح لأي دولة أن تملك القمر. ولا يُقال إن ريانة وعليًّا أول سعوديين في الفضاء، فقد سبقهما الأمير سلطان، ولا إن أحدًا لا يملك القمر: المعاهدة تمنع الدول، وملكية الأفراد محل خلاف. لا أرقام فيه إلا 2023 و1985 ونحو ثمانية أيام، وwhen فيه مرة أو مرتين للعرض فقط، 150–230 كلمة | space (go into space) · experiment (do an experiment) · moment (at that moment) · proud (proud of) · screen (in front of the screen) · make history | international law (under international law) | الماضي المستمر في الإثبات من الصفر بخطوات صغيرة: الصيغة was / were + الفعل مع ing (I / he / she / it was، وyou / we / they were)، وإملاء ing مراجعةً لـ u0l5 وu1l1 (making، sitting، lying)، والاستعمال الأول: حدث كان جاريًا في لحظة محددة من الماضي (At midnight, we were sitting… / At that moment…)، والثاني: وصف المشهد في القصة، ومقابلته بالماضي البسيط للحدث المكتمل (I watched the launch مقابل I was watching the launch at midnight)، وأفعال الحالة لا تأخذ ing في الماضي أيضًا (I knew لا I was knowing، مراجعة u1l4)، وخطأ العرب الشائع: «كنتُ أفعل» للعادة في الماضي تأتي بالماضي البسيط لا بالمستمر (When I was a child, I played football every day لا I was playing football every day)، ويُؤطَّر التمرين بزمن طويل كهذا، لأن المستمر يصح لعادة مؤقتة، وكلمات الزمن: at midnight، at that moment، this time last year مع حدث جارٍ في السياق، وall night تصلح للزمنين فلا تكون وحدها دليل الجواب | sit · stand · hold · wear · drink · read | من u2l5: tour guide، view، ancient، souvenir، والقانونية apply for a visa | scientist (u1l1)، research (u1l1)، journey (u2l1)، stay (u2l1)، return (u2l1)، flight (u2l3)، amazing (u2l5)، take photos (u2l5) | الفضاء والعلوم، سهرات الأسرة، التلفاز والأخبار، الدراسة في الجامعة، إنجازات وطنية |
| u3l2 | Accidents Happen | listening | [ELLLO Mixer #78 «Vehicle Accidents»](https://elllo.org/english/Mixer076/T078-Accident.htm): ستة متحدثين يحكي كل منهم حادثًا مرّ به في نحو نصف دقيقة: هيلين وشاليني (كندا)، وأمير (إيران)، وليندسي (الولايات المتحدة)، وبول وماثيو (إنجلترا): سيارة تصدم سيارة هيلين في موقف سيارات، وأمير يقود سيارة أمه وعمره تسع سنين، ودراجة نارية مستأجرة تنزلق ببول وصديقته في جزيرة بتايلند، وماثيو يكسر ذراعه على دراجته الهوائية، وليندسي تقول إن الخطأ كله خطؤها، وشاليني تقول إنه عُدّ خطأها وإن لم توافق، ودفعت هي، فلا يُسأل عن رأيها في الخطأ. ويصل المتحدثون الحدث الطويل بالقصير بـ and أو so أو بلا رابط، ولا تأتي when في المقطع إلا للزمن (When I was sixteen عند ماثيو)، فلا يُنسب إلى متحدث أنه قال when للحدث القصير. Intermediate B1 (المستوى 4 في ELLLO)، 3:34 من ملف الصوت نفسه (`targetSeconds: 214`) | accident (have an accident) · injured (be injured) · serious (a serious accident) · rent (rent a motorbike) · fall off (fall off a bike) · control (control the bike) | driving licence (get a driving licence) | الماضي المستمر مع الماضي البسيط: حدث طويل جارٍ (الخلفية) يقطعه حدث قصير (I was driving when a car hit me)، وwhen + الماضي البسيط للحدث القصير، والفاصلة إذا بدأت الجملة بـ when (When the car hit me, I was turning left)، وأي الحدثين طويل وأيهما قصير، وwhen I was sixteen للزمن، وتصحيح I driving وI was drive، والمستمر للحدث القصير (a car was hitting me). ويصح when مع الحدث الطويل أيضًا (When I was running for the bus, I fell)، فلا يُعدّ خطأً، وتفصيله في u3l4 | hit · break · fall · hurt · run · cut | من u3l1: space، experiment، moment، proud أو screen، والقانونية international law | safe (u1l1)، careful (u0l5)، busy (u0l1)، dangerous (u2l1)، decide (u2l1)، traffic (u0l3)، on the way home (u1l3)، island (u2l4) | الطرق والقيادة، الدراجات الهوائية والنارية، الإجازات في الخارج، السلامة، الطريق إلى الجامعة |
| u3l3 | Happy Accidents | reading | إيميل من عمر، طالب صيدلة في جدة، إلى صديقه البريطاني جاك بعد محاضرة عن اكتشافات جاءت بالصدفة: ألكسندر فليمنغ سنة 1928 كان يدرس البكتيريا، فترك أطباقها في مختبره وسافر في إجازة الصيف، فنما عفن في أحدها، ولما رجع لاحظ أن البكتيريا لا تنمو حول العفن، ولم يكن يبحث عن البنسلين، فاكتشفه بالصدفة وفاز بجائزة نوبل سنة 1945 مع فلوري وتشين؛ وبيرسي سبنسر كان يعمل يومًا قرب جهاز رادار في مختبر شركة Raytheon حين لاحظ أن الشوكولاتة في جيبه تذوب، ولم يكن يطبخ، فاخترع فرن المايكرويف، وحصلت شركته على براءة الاختراع سنة 1950. ويسأل جاك عما كان يفعله حين جاءته أحسن فكرة. يكثر فيه النفي wasn't / weren't + ing والسؤال بـ Was / Were وWhat was he doing when…، ولا يُنسب إلى فليمنغ موقف من براءة البنسلين، ولا تُذكر مدة إجازته ولا سنة يوم سبنسر، فالمصادر تختلف فيهما، ولا أرقام فيه إلا 1928 و1945 و1950، 150–230 كلمة | discover (discover penicillin) · invent (invent the microwave oven) · by accident · notice (notice something strange) · melt (the chocolate was melting) · lab (in the lab) | get a patent | النفي والسؤال في الماضي المستمر: wasn't / weren't + ing (He wasn't cooking)، وWas / Were + الفاعل + ing؟ والإجابات القصيرة Yes, I was / No, they weren't (لا Yes, I did)، وأسئلة What / Where / Why + was / were + ing، ومنها What were you doing when…? مع when + الماضي البسيط من u3l2، ومقابلة Did you see…? بـ Were you watching…?، وتصحيح Did you was working وWere you work وI didn't was sleeping، وunderstand فعل حالة يأتي understood ولا يأتي was understanding | understand · forget · keep · put · win · teach | من u3l2: accident، injured، serious، rent أو fall off أو control، والقانونية driving licence | scientist (u1l1)، research (u1l1)، strange (u1l1)، go on holiday (u2l2)، return (u2l1)، experiment (u3l1)، moment (u3l1)، serious (u3l2) | العلوم والاختراعات، المختبرات والبحث، الطب والصحة، المطبخ والطبخ، الأفكار الكبيرة |
| u3l4 | Caught in a Storm | listening | [ELLLO Mixer #97 «Natural Disaster»](https://elllo.org/english/Mixer076/T097-Disaster.htm): ستة متحدثين يجيبون: هل مررت بكارثة طبيعية؟ توم وجيس ودورون (المملكة المتحدة)، وجورج (الولايات المتحدة)، وPernais (جامايكا، بهذا الرسم في الصفحة، ولا يُذكر له ضمير)، ومايك (سنغافورة): إعصار في هونغ كونغ يختبئ منه توم في كابينة هاتف، وإعصار في هاواي، وحريق ودخان ورجل عجوز ينقذ Pernais، وانهيار أرضي رآه مايك وهو يقود، وعاصفة ثلجية في رحلة تخييم في النرويج؛ وتذكر جيس قنبلة في مانشستر لا كارثة طبيعية. Intermediate B1 (المستوى 4 في ELLLO)، 2:44 من ملف الصوت نفسه (`targetSeconds: 164`) | natural disaster · flood (the street flooded) · smoke · heavy (heavy rain / heavy snow) · rescue (rescue someone) · frightening | state of emergency (declare a state of emergency) | while مع الماضي المستمر: حدثان طويلان في الوقت نفسه (While I was cooking, my brother was studying)، وwhile + الحدث الطويل مع حدث قصير في الماضي البسيط (While we were having dinner, the lights went out)، والفرق بين when وwhile: الحدث القصير والزمن بعد when وحدها (when the phone rang، when I was sixteen)، والحدث الطويل بعد while أو when (While / When I was walking home, it started to rain)، فلا يُبنى تمرين يصح فيه الاثنان، والفاصلة، ومطابقة was / were مع الفاعل الجمع (we were camping لا we was camping)، وتصحيح while للحدث القصير (while the phone rang). وwhile مع الماضي البسيط لحدث طويل صحيح، كجملة توم، فلا يُعدّ خطأً ولا يُبنى عليه سؤال، وcost فعل حالة: cost لا was costing | shut · catch · build · cost · let | من u3l3: discover، invent، by accident، notice أو melt أو lab، والقانونية get a patent | dangerous (u2l1)، nature (u2l4)، safe (u1l1)، injured (u3l2)، serious (u3l2)، notice (u3l3)، moment (u3l1) | الطقس والفصول، العواصف والسيول، التخييم والسفر، الطوارئ ومساعدة الناس، الأخبار |
| u3l5 | I Saw It Happen | reading | إيميل من تركي، طالب قانون في جامعة الملك سعود، إلى صديقه البريطاني أوليفر عن حادث رآه مساء أمس في الرياض: كان واقفًا عند موقف الحافلة على زاوية شارع قرب الجامعة، والمطر غزير والناس يركضون، وكانت سيارة تسير بسرعة حين صدمت دراجة توصيل، ولم يُصب أحد إصابة خطيرة، وجاءت سيارة الإسعاف والشرطة، وطلب منه الشرطي إفادة شاهد، فكتب ما رآه بالترتيب (First / Then / After that / Finally)، وفي آخره ما تعلّمه: الشاهد يصف ما رآه بالضبط لا ما يظنه. وهو نموذج لكتابة المتعلم، 150–230 كلمة | suddenly · police officer · describe (describe what happened) · exactly · ambulance · corner (on the corner) | witness statement (give a witness statement) | مراجعة الوحدة في سرد ما رآه الشاهد: الخلفية بالماضي المستمر (It was raining. People were running)، والأحداث بالماضي البسيط بترتيبها (First / Then / After that / Finally من u2l5)، وwhen وwhile في موضعيهما، والزمن والمكان في أول الإفادة (At about 6 pm, on the corner of…)، والفرق بين ما رآه الشاهد وما يظنه (I saw… مقابل I think…)، مع أجزاء الإيميل: التحية والغرض والتفاصيل والختام، وmean فعل حالة بمعنى «يعني»: meant لا was meaning | set · sell · lend · mean | من u3l4: natural disaster، flood، smoke، heavy أو rescue أو frightening، والقانونية state of emergency | witness (u0l2)، traffic (u0l3)، accident (u3l2)، injured (u3l2)، driving licence (u3l2)، notice (u3l3)، moment (u3l1)، heavy (u3l4) | السلامة على الطريق، الشرطة والقانون، الحياة الجامعية، الإيميلات إلى الأصدقاء، مساعدة الآخرين |

قرارات المنسّق في خريطة الوحدة 3 (26 أكتوبر 2026):
- **المطابقة مع Core Inventory:** الماضي المستمر من قواعد A2 فيه، ويعود في B1، ومن وظائف A2 «وصف التجارب الماضية وسرد القصص».
- **نوع الدروس:** u3l1 وu3l3 وu3l5 قراءة، وu3l2 وu3l4 استماع، فيبقى التوزيع 3 أيام قراءة ويومين استماع.
- **البحث عن المقاطع:** لا درس في قوائم ELLLO لمستوى A2 (Views A2، وGrammar Talks لـ A2 وللمستوى 3) مبني على الماضي المستمر، ولا في قائمتي LearnEnglish لـ A2 وB1 (24 درسًا، وقُرئ نص ما يُحتمل منها). ودرس ELLLO «B2-11 Past Continuous» غني بالقاعدة، لكنه رسوم متحركة بأصوات بلا أسماء لم يُتحقق أنها بشرية، والخطة تمنع الصوت الآلي، فتُرك. وتُرك #1133 «Crime Story» (المستوى 6، أصعب من اللازم) و#1321 «Car Smash Ups» (B2) و#427 «Earthquake» (لا ماضي مستمر فيه تقريبًا).
- **المقطعان** من سلسلة Mixer بمستوى B1 (المستوى 4 في ELLLO)، بمتحدثين حقيقيين بأسمائهم وبلدانهم، وقرأ المنسّق نص كل منهما كاملًا في صفحته: في #78 يأتي الحدث الطويل ثم القصير عند أكثر المتحدثين (محور u3l2)، وفي #97 جاءت while مع الماضي المستمر مرتين في قصة مايك، وحدثان طويلان معًا في قصة دورون (محور u3l4). ومدتاهما من ملفي الصوت نفسيهما. وفي #78 يصل المتحدثون الحدثين بـ and أو so، ولا تأتي when إلا للزمن، فيبيّن الدرس في `listening.insight` (بعد الأسئلة) بأمثلة من كتابتنا كيف تُقال القصة نفسها بـ when، ولا تُروى قصص المتحدثين في المفردات والقواعد قبل الاستماع لئلا تكشف أجوبته.
- **المستوى واللهجات:** المقطعان أعلى من مقاطع الوحدة 2 (B1 لا A2)، وفي كل منهما ست قصص قصيرة بلهجات مختلفة، والبريطانيون اثنان من ستة في #78 وثلاثة في #97. فتُكتب الأسئلة لكل متحدث على حدة، بكلمات بسيطة، ويُذكر في الشرح اسم المتحدث وموضع جوابه، ويكشف سؤال الفكرة العامة نوع القصص لا تفاصيلها. وفي #78 لغة أمير فيها أخطاء فلا يُبنى سؤال على تراكيبه، وفي #97 قصة مايك غير واضحة في بعضها فلا يُسأل إلا عن الواضح منها (رأى الانهيار وهو يقود). وفي كل صفحة اختبار من ELLLO، فلا تُنقل أسئلته ولا تُحاكى.
- **الموضوع:** صار «لحظات لا تُنسى» (Moments to Remember) بدل «لحظات في تاريخ العلم»، لأن المقطعين الحقيقيين اللذين يحملان القاعدة عن حوادث السير والكوارث الطبيعية، والخطة تجيز تغيير الموضوع ليناسب المقطع. وبقي العلم في u3l1 (رحلة الفضاء السعودية) وu3l3 (اكتشافات بالصدفة)، والطبيعة في u3l4، ويُغيَّر اسم الوحدة في `units` بـ `content.js`. وفي ثلاثة دروس حوادث (u3l2 وu3l3 وu3l5)، فتختلف مواضيع جملها كما في صفوفها.
- **وقائع نصّي u3l1 وu3l3** تحقق منها المنسّق: انطلقت Axiom Mission 2 في 21 مايو 2023 الساعة 21:37 بتوقيت غرينتش (00:37 بتوقيت الرياض)، وبقي طاقمها في محطة الفضاء الدولية نحو ثمانية أيام؛ وريانة برناوي عالمة تبحث في الخلايا الجذعية للسرطان في مستشفى الملك فيصل التخصصي؛ والأمير سلطان بن سلمان أول عربي ومسلم في الفضاء على المكوك Discovery في 17 يونيو 1985؛ ومعاهدة الفضاء الخارجي (1967) تمنع أن تملك دولة القمر. وفليمنغ ترك طبق البكتيريا قبل إجازة الصيف سنة 1928 (ورجع في 3 سبتمبر، ومدة الإجازة مختلف فيها)، ونال جائزة نوبل 1945 مع فلوري وتشين؛ وسبنسر كان قرب جهاز magnetron في مختبر Raytheon (والمصادر تختلف في سنة ذلك اليوم)، وقُدّم طلب البراءة في 8 أكتوبر 1945 ومُنحت لـ Raytheon في 24 يناير 1950. ولا يُكتب في النص من الأرقام إلا ما في صفه.
- **العبارات القانونية:** international law (لا تملك دولة القمر)، وdriving licence (تقولها هيلين بصيغة أمريكا الشمالية driver's license، فيُعلَّم البريطاني ويُذكر الآخر في `tip`)، وget a patent (وكلمة patent من C1 في Oxford 5000، وهي الوحيدة فوق B2، واختيرت لأنها قلب الاختراع في القانون)، وstate of emergency (من الكوارث، ومن القانون الدستوري)، وwitness statement (تبني على witness من u0l2، والماضي المستمر لغة إفادات الشهود).
- **الكلمات:** فحص المنسّق مستوى كل كلمة في Oxford Learner's: كلها في Oxford 3000 إلا ambulance وpatent من Oxford 5000، وأُبعدت freezing وluckily لأنهما ليستا في القائمتين، وstorm لأنها لا تُقال في المقطع.

### الوحدة 2 (مبنية)

| id | العنوان | `mode` | المقطع (رابطه) أو موضوع النص | الكلمات (`vocab`) | العبارة القانونية | محور القاعدة ضمن قاعدة الوحدة | الأفعال الشاذة (`irregularVerbs`) | الاسترجاع (`recall`) | معاد تدويره (يظهر في النص أو التمارين، لا كجديد) | مواضيع جمل التمارين |
|---|---|---|---|---|---|---|---|---|---|---|
| u2l1 | The Traveller from Tangier | reading | إيميل من يوسف، طالب في طنجة، إلى صديقه السعودي فهد، يحكي قصة ابن بطوطة ابن مدينته: بدأ رحلته سنة 1325 للحج وعمره 21 سنة، وعبر شمال أفريقيا برًّا، ووصل إلى القاهرة ثم مكة، ثم سافر نحو 30 سنة ونحو 120,000 كيلومتر، ودرس الفقه الإسلامي وعمل قاضيًا في دلهي وفي جزر المالديف، ثم رجع إلى المغرب وأملى قصة رحلته على كاتب. بالأفعال المنتظمة وwas / were، وما لا بد منه من الشاذ يُشرح بـ [[ ]] ولا يُدرَّب، ولا أرقام فيه إلا هذه، 150–230 كلمة | journey (a long journey) · decide (decide to travel) · arrive (arrive in Cairo) · cross (cross the desert) · dangerous · stay (stay for two years) · return (return home) | Islamic law | الماضي البسيط للأفعال المنتظمة في الإثبات: إضافة ed وإملاؤها (ed، وd بعد e، وy إلى ied بعد حرف ساكن، ومضاعفة الحرف الأخير: stopped وplanned وtravelled بالبريطانية)، ونطقها /t/ و/d/ و/ɪd/ (و/ɪd/ بعد t وd وحدهما)، والفعل واحد مع كل الضمائر، ومراجعة was وwere، وكلمات الزمن: in 1325, ago, for 30 years, then | be (was / were) فقط | من u1l5: colleague، schedule، attach، reply أو deadline، والقانونية sick leave | judge (u0)، foreign (u1l4)، local (u1l4)، custom / customs (u1l4)، miss (u1l1)، strange (u1l1) | السفر والرحلات، التاريخ، الحج والعمرة، المدن والبلدان، الدراسة |
| u2l2 | How Was Your Holiday? | listening | [ELLLO Views #1258 «Greek Holiday»](https://elllo.org/english/1251/1258-Hana_Daniel-Holidays.htm): هنا (المملكة المتحدة) تحكي لدانيال (تشيلي) عن عطلة أسرتها في اليونان: المسبح والشاطئ والتسوق مع أمها، وبطولة كرة قدم ورقص كل ليلة. A2، نحو 1:50 (تقدير من طول النص) (`targetSeconds: 110`) | go on holiday · swimming pool · relax · go shopping · have fun · watch a match | annual leave | الأفعال الشاذة في الماضي البسيط في الإثبات: صيغة ثانية تُحفظ بلا ed (went, had, said, bought, ate, saw, took, came) بأنماطها الصوتية، والفعل واحد مع كل الضمائر، وwent لا was went ولا goed، وwas مع الصفة والمكان (It was perfect)، ومقابلتها بالمنتظم (relaxed) | go · have · say · buy · eat · see · take · come | من u2l1: journey، decide، arrive، cross أو dangerous، والقانونية Islamic law | journey (u2l1)، arrive (u2l1)، stay (u2l1)، return (u2l1)، eat out (u1l3)، local (u1l4) | العطلات، الشاطئ والسباحة، التسوق، الرياضة والمباريات، الأسرة |
| u2l3 | The Trip That Went Wrong | reading | إيميل من فيصل، طالب سعودي، إلى صديقه عن رحلة نهاية أسبوع إلى إدنبرة مع زميله: تأخرت الطائرة، ولم تصل الحقيبة، وضلّا الطريق، ولم يشتريا تذكرة الترام قبل الركوب فدفعا غرامة، ولم يكن الفندق كما في الصور؛ ثم ما جرى حسنًا في آخر الرحلة. يكثر فيه النفي didn't + الفعل المجرد وwasn't / weren't مقابل الإثبات، 150–230 كلمة | flight · luggage · delayed (the flight was delayed) · get lost · on time · book (book a room) | pay a fine | النفي في الماضي البسيط: didn't + الفعل المجرد مع الأفعال كلها، المنتظمة والشاذة (didn't go لا didn't went ولا didn't goed)، وwasn't / weren't مع be (لا didn't be)، والجمع بين الإثبات والنفي بـ but، وتصحيح I was go وI didn't went | lose · find · know · think · pay · sleep · leave · make | من u2l2: go on holiday، swimming pool، relax، have fun أو watch a match، والقانونية annual leave | journey (u2l1)، arrive (u2l1)، decide (u2l1)، go on holiday (u2l2)، relax (u2l2)، strange (u1l1)، late (u0) | الطيران والقطارات، الفنادق والحجز، التأخير والمواعيد، الجامعة، العمل |
| u2l4 | Where Did You Go? | listening | [ELLLO Views #1257 «Traveling to Taiwan»](https://elllo.org/english/1251/1257-Daniel_Hana-Vacations.htm): هنا (المملكة المتحدة) تسأل دانيال (تشيلي) عن رحلته ثمانية أيام في تايوان من الشمال إلى الجنوب: الطبيعة والطعام والأسعار، ولماذا اختار آسيا. A2، نحو 2:05 (تقدير من طول النص)، ووصف الصفحة يخطئ فيجعل هنا هي المسافرة (`targetSeconds: 125`) | island · nature · cheap · choose (choose a place) · hear about · vacation (= holiday) | report a crime | السؤال في الماضي البسيط: Did + الفاعل + الفعل المجرد (Did you go…? لا Did you went…?)، والإجابات القصيرة Yes, I did / No, I didn't، وأسئلة Where / What / Who / Why / How long + did، وأسئلة was / were (How was the food? Where were you?) | do · hear · choose · spend · fly · drive · meet · speak | من u2l3: flight، luggage، delayed، get lost أو on time، والقانونية pay a fine | go on holiday (u2l2)، have fun (u2l2)، flight (u2l3)، book (u2l3)، stay (u2l1)، culture (u1l4)، local (u1l4) | الرحلات والبلدان، الطعام، الطبيعة، الأسعار والتسوق، الأصدقاء |
| u2l5 | A Weekend in AlUla | reading | إيميل من نورة إلى صديقتها البريطانية إيما عن رحلة نهاية أسبوع إلى العُلا مع أسرتها، بالترتيب: First ثم Then وAfter that وFinally، وما فعلوه (الحِجر وجبل الفيل ومرايا) وما لم يفعلوه، وسؤالان لإيما بـ Did you…?، ودعوتها إلى زيارة السعودية بعد أن تقدّم على التأشيرة. نموذج لكتابة المتعلم، 150–230 كلمة | tour guide · view (the view was amazing) · ancient · amazing · souvenir · take photos | apply for a visa | مراجعة الوحدة في سرد رحلة: كلمات الترتيب First / Then / After that / Finally، وكلمات الزمن last weekend / two days ago، والجمع بين المنتظم والشاذ والنفي والسؤال في إيميل، مع أجزائه: التحية والغرض والتفاصيل والختام | write · send · tell · feel · give · bring · begin · become | من u2l4: island، nature، cheap، choose أو hear about، والقانونية report a crime | journey (u2l1)، decide (u2l1)، flight (u2l3)، on time (u2l3)، have fun (u2l2)، nature (u2l4)، attach (u1l5)، reply (u1l5) | السياحة الداخلية، المواقع الأثرية، الصور والذكريات، الضيافة، الإيميلات |

قرارات المنسّق في خريطة الوحدة 2 (26 أكتوبر 2026):
- **نوع الدروس:** u2l1 وu2l3 وu2l5 قراءة، وu2l2 وu2l4 استماع، فيبقى التوزيع 3 أيام قراءة ويومين استماع.
- **المقطعان** من ELLLO Views بمستوى A2، وفيهما صوتان عرفهما المتعلم في u1l3: هنا (بريطانية) ودانيال (تشيلي). وفحص مساعد في 26 أكتوبر قوائم LearnEnglish لـ A2 وB1 فلم يجد مقطعًا غالبُه الماضي البسيط عن رحلة. ومدتا المقطعين تقدير من طول النص، لأن صفحات ELLLO لا تذكر المدة.
- **نقص المقطعين تكمله التمارين:** #1258 قليل الأفعال الشاذة (went وhad وsaid وwas)، فتأتي التمارين ببقية أفعال الدرس الثمانية. و#1257 أسئلته كلها Wh-، بلا Did you…? ولا إجابات قصيرة، فتأتي بها التمارين. و#1567 «Weekend Talk» أغنى بالماضي لكنه نحو 5–6 دقائق، فوق حد الأربع.
- **نص u2l1 تاريخي:** لا أرقام فيه إلا 1325 و21 سنة ونحو 30 سنة ونحو 120,000 كيلومتر، ولا يُنسب إلى ابن بطوطة ما لم يثبت.
- **العبارات القانونية:** Islamic law (درسه ابن بطوطة وعمل قاضيًا)، وannual leave (تقابل sick leave من u1l5)، وpay a fine، وreport a crime، وapply for a visa.

### الوحدة 1 (مبنية)

| id | العنوان | `mode` | المقطع (رابطه) أو موضوع النص | الكلمات (`vocab`) | العبارة القانونية | محور القاعدة ضمن قاعدة الوحدة | الاسترجاع (`recall`) | معاد تدويره (يظهر في النص أو التمارين، لا كجديد) | مواضيع جمل التمارين |
|---|---|---|---|---|---|---|---|---|---|
| u1l1 | Hello from Antarctica | reading | إيميل نور من محطة أبحاث في القارة القطبية (النص كما هو) | scientist · research (do research) · data (collect / check the data) · measure (measure the temperature) · safe · strange · miss (miss my family) | sign a contract | المضارع البسيط مقابل المستمر: العادة والحقيقة مقابل الآن والمؤقت، وإملاء s وing، وكلمات الزمن | من u0l5: careful وuseful وcheck وأنماط ing وful، والقانونية official document | من الأسبوع التأسيسي: busy, late, helpful, check | علوم وطقس وأسرة وجامعة وتقنية |
| u1l2 | What's a Typical Day for You? | listening | [ELLLO Views #1554 «My Day»](https://elllo.org/english/1551/1554-Nat-Verbs-Schedule.htm): تود يسأل ناتالي (إنجلترا)، وهي معلمة، عن يومها. A2، نحو 4:10 (`targetSeconds: 250`) | typical (a typical day) · wake up · get out of bed · canteen · last (each class lasts an hour) · get changed | working hours | الأسئلة والإجابات القصيرة في المضارع البسيط والمستمر: Do / Does + الفعل المجرد، وIs / Are + ing، وأسئلة What time / Where / How many، وYes, I do / No, she isn't | من u1l1: scientist, do research, measure, safe أو strange، والقانونية sign a contract | من u1l1: safe, strange, miss؛ ومن التأسيسي: busy, late, helpful | الوظائف وأماكن العمل، وجداول الجامعة والمدرسة، وروتين الأسرة، والمواصلات |
| u1l3 | How Often Do You Cook? | listening | [ELLLO Views #1555 «Eating Habits»](https://elllo.org/english/1551/1555-DanielHana-YNQs-Cooking.htm): هنا (المملكة المتحدة) ودانيال (تشيلي) يتحدثان عن الطبخ والأكل خارج البيت. A2، 2:44 (`targetSeconds: 164`) | eat out · takeaway · on the way home · invite (invite my friends over) · have people over (for dinner) · roommate | break the law | كلمات التكرار وموقعها: always / usually / often / sometimes / rarely / never، قبل الفعل الأساسي وبعد am / is / are، وHow often…? والجواب every day / once a week في آخر الجملة، وDo you ever…? (يُبنى على ما علّمه u1l1 من موقع usually) | من u1l2: typical, wake up, get out of bed, canteen, last، والقانونية working hours | من u1l2: typical, canteen, get home؛ ومن u1l1: strange؛ ومن التأسيسي: busy, late | الطعام والطبخ والمطاعم وزيارات الأصدقاء والتسوق والرياضة |
| u1l4 | Habits and Cultures | reading | إيميل من طالب سعودي يدرس في اليابان إلى أخيه عن عادات الناس هناك وما يعرفه ويحتاجه ويفضّله، 150–230 كلمة | culture · custom · local · greet · foreign · gift | against the law | أفعال الحالة: know / understand / want / need / prefer / like / love / believe / think (رأيًا) تبقى في المضارع البسيط، مقابل أفعال الحدث في المستمر (I'm cooking / I like cooking)، وthink وhave بمعنييهما | من u1l3: eat out, takeaway, on the way home, invite, have people over، والقانونية break the law | من u1l3: eat out, invite, takeaway؛ ومن u1l1: miss, strange؛ ومن التأسيسي: polite, helpful | السفر والبلدان والعادات واللغات والأعياد والتحية والهدايا |
| u1l5 | Your First Work Email | reading | إيميل متدرّب جديد في شركة إلى مديرته في أسبوعه الأول: يعرّف بنفسه، وروتينه، وما يعمل عليه هذا الأسبوع، وسؤال، ومرفق، 150–230 كلمة. وهو نموذج لكتابة المتعلم | colleague · schedule · attach · reply · deadline · introduce (introduce myself) | sick leave | المضارع البسيط والمستمر في إيميل العمل (مراجعة الوحدة): I'm writing to + فعل، والعادة مقابل هذا الأسبوع، وأفعال الحالة في الطلب (I need / I want to know)، وكلمات التكرار؛ مع أجزاء الإيميل: التحية والغرض والتفاصيل والختام | من u1l4: culture, custom, local, greet, foreign أو gift، والقانونية against the law | من u1l4: culture, local؛ ومن u1l2: working hours, typical؛ ومن u1l3: invite؛ ومن التأسيسي: polite, draft, check, explain | إيميلات العمل والجامعة، والاجتماعات والمشاريع والمحاضرات والمواعيد |

قرارات المنسّق في خريطة الوحدة 1 (24 أكتوبر 2026):
- **نوع الدروس:** u1l1 وu1l4 وu1l5 قراءة، وu1l2 وu1l3 استماع، فيبقى التوزيع 3 أيام قراءة ويومين استماع. والسبب أن مقطع #1555 مبني على كلمات التكرار نفسها، ونص u1l4 نكتبه فيحمل أفعال الحالة كلها.
- **المقطعان مختلفان** كما في الأسبوع التأسيسي، ويتكرر كل مقطع داخل درسه ثلاث مرات بمهام مختلفة، وتعود كلماته في الدرس التالي. والمقطعان من سلسلة ELLLO الجديدة بمستوى A2 والمتحدثة الأساسية فيهما بريطانية.
- **العناوين:** «The Night Shift» صار «What's a Typical Day for You?» و«How Often Do You Sleep Well?» صار «How Often Do You Cook?» ليوافقا المقطعين، والخطة تجيز تغيير الموضوع ليناسب المقطع.
- **محور u1l5:** مراجعة قاعدة الوحدة داخل إيميل العمل، فله بطاقاته الست وتمارينه الستة عشر كبقية الدروس.
- **الكلمات المحذوفة من u1l1** (team, lab, temperature, health, culture) تبقى في نصه شرحًا بـ `[[ ]]`، وculture صارت من كلمات u1l4.

### للكاتب والمراجع والمنسّق في كل وحدة

- **الكاتب:** لا يضع في `vocab` و`legalPhrase` و`vocabGaps` و`{ }` إلا كلمات صفه، وما زاد من النص يُشرح بـ `[[ ]]` فقط؛ ولا تتكرر كلمة مستهدفة بين درسين ولا مع أي درس سابق (والفاحص يمنعها). ويدرّب أفعال عمود `irregularVerbs` في صفه، ولا يقدّم غيرها من الشاذ كجديد. الاسترجاع من صف الدرس السابق. المقطع هو المسمّى في صفه، وإلا اختار مقطعًا بموضوعه يحمل كلماته، فإن لم يجده أبلغ المنسّق ولا يغيّر الكلمات. ولا يعدّل الخريطة.
- **المراجع:** يطابق الدرس بصفه: الكلمات والعبارة بلا زيادة، ونوع الدرس، ومحور القاعدة، وظهور الكلمات المعاد تدويرها، ومواضيع الجمل. المخالفة في الكلمات أو العبارة أو القاعدة `high`، وفي التدوير أو المواضيع `medium`.
- **المنسّق:** عند اكتمال الدروس يفحصها نهائيًا: جمل مكررة (بين الدروس وفي `unitTests[<U>]`)، وكلمة جديدة مكررة، وارتفاع الصعوبة (طول النص وسرعة المقطع والجمل والكلمات داخل A2)، والتدوير (كلمات العمود موجودة فعلًا وتعود في اللاحقة).

## 7. قائمة الفحص قبل النشر

بنود الخطة: (1) الهدف يوافق A2؛ (2) الكلمات والقواعد مناسبة؛ (3) الإجابات والشروح صحيحة؛ (4) التعليمات واضحة؛ (5) الأسئلة متنوعة؛ (6) مصادر الصوت تفتح؛ (7) حفظ التقدم ومختبر الأخطاء يعملان؛ (8) نسب النجاح صحيحة (10 أسئلة والنجاح 8)؛ (9) لا يتكرر مثال من الشرح في الأسئلة؛ (10) بطاقة كامبلي جاهزة. المنسّق يتحقق من 7 (`tests/site.test.js`) و10 (من ملف الدرس)، والمراجع من الباقي (القسم 9).

ملاحظة تسليم الكاتب: رابط المقطع وما فحصه فيه، وكل `wikiFile` لم يُتحقق منه، وأي خروج عن الدليل.

**فحص الكاتب الذاتي قبل التسليم:**
1. شغّل `node tests/content-check.js --unit <U>` و`node tests/map-check.js --unit <U>` في نسخة المستودع التي يعطيك إياها المنسّق وفيها درسك في مكانه، وأصلح كل ERROR، وراجع كل WARN، وأرفق النتيجة بملاحظة التسليم.
2. افحص نفسك من أخطاء الوحدة 1 الجسيمة، فقد أسقطت ثلاثة دروس من خمسة في المراجعة الأولى:
   - سؤال يصح فيه جوابان: جرّب كل خيار في كل سؤال.
   - شرح أو تلميح يكشف جواب السؤال نفسه أو السؤال التالي.
   - فحوص كتابة ترفض جوابًا صحيحًا: جرّب النموذج وإجابات `acceptExamples`.
   - استرجاع يرفض جوابًا صحيحًا: ضع في `ans` كل صيغة صحيحة.
   - سؤال الفكرة العامة يكشف أجوبة الأسئلة التي بعده.
   - جملة قريبة من جملة في درس سابق: راجع سطور near-overlap في نتيجة الفاحص.
   - معلومة لا تصح اليوم: كل تاريخ أو رقم أو حكم قانوني أو إجراء رسمي في النص أو الأمثلة يُتحقق منه، فقد وجد المراجعون في الوحدة 2 خطأ تاريخيًا في الخريطة نفسها، ومثالين يخالفان الواقع (التنازل عن الإجازة السنوية في نظام العمل، والتأشيرة إلى بريطانيا).
   - قاعدة تُربط بأفعال الحدث وحدها وهي تشمل أفعال الحالة، أو فعل حالة في صيغة مستمرة (was knowing)، وقد وجده المراجعون في u2l3 وu2l4.

## 8. ضمانات الجودة

- يكتب الدروس ويراجعها نموذج Opus وحده، بقرار صاحب الموقع في 24 أكتوبر 2026، ولا يُستعمل غيره إلا بإذنه.
- المراجع نسخة أخرى لم تشارك في كتابة الدرس الذي يراجعه.
- يشغّل الكاتب الفاحصين `tests/content-check.js` و`tests/map-check.js` قبل التسليم، ويعيدهما المنسّق قبل المراجعة، ولا يُراجع درس فيه ERROR. وأخطاء الفاحص المانعة: أعداد الخطة كلها (6–8 كلمات جديدة مع العبارة، و6 بطاقات، و16 تمرينًا، و8 أسئلة قراءة أو استماع، و10 أسئلة اختبار، و4 جمل كتابة، و20 سؤالًا في اختبار الوحدة)، و`checks` ترفض `model` أو `acceptExamples`، وكلمة جديدة سبق تقديمها في أي درس، وملف درس لا تذكره `content.js`. وينبّه على عُرف الأعداد: 5 استرجاع، و8 فراغات مفردات، و4 أهداف، و4 فحوص كتابة. ونجاح الفاحصين لا يغني عن المراجع.
- المنسّق وحده يدمج الدرس في المستودع، ويشغّل `node tools/register-lessons.js` ليكتب سطوره وأرقام الإصدار في `index.html`، ويشغّل الاختبار الشامل `tests/site.test.js`، ويوثّق في `CHANGELOG.md`، وينشر؛ فلا يعدّل الكتّاب ولا المراجعون المستودع.
- وتعمل فحوص GitHub عند كل رفع: الفاحصان، وروابط المقاطع وملفات النطق (`tests/link-check.js`)، ومطابقة `index.html` لـ `content.js` على `main`، وحارس العمل الليلي.

## 9. المراجع المستقل

**الشرط:** نسخة لم تكتب الدرس، تعمل من الملف وهذا الدليل وخريطة الوحدة وصفحة المقطع ونتيجة الفاحصين، ولا تعدّله.

**ما يُفحص:**
1. الأعداد والبنية: أعداد القسم 3 يتولاها الفاحص، وعليك `node --check`، وأرقام `intro`، وتوازن `<<>>` و`{}` و`[[ ]]`.
2. جواب واحد صحيح لكل سؤال: جرّب كل خيار؛ و`ans` في gC تضم كل الصيغ الصحيحة، ولـ gD ترتيب صحيح واحد؛ ولا تلميح أو نص يكشف الجواب.
3. الشرح صحيح ويذكر السبب، والعربي فصيح، و`ev` اقتباس حرفي.
4. الجمل جديدة: ابحث عن كل جملة تمرين في البطاقات و`ex` واختبار الوحدة، وقارن بنفسك سطور near-overlap في نتيجة الفاحص.
5. المفردات: المستوى والمتلازمات، وروابط Oxford تفتح الكلمة الصحيحة.
6. الاستماع: افتح `url` وقارن الأسئلة بالمقطع، ولا نص منسوخًا.
7. `checks` تقبل صيغًا صحيحة أخرى غير `model` (الفاحص يجرّب `model` و`acceptExamples`)، وما جرّبته فاقترح إضافته إلى `acceptExamples` في الإصلاح.
8. اللغة: A2 مبسّط، ولا إيموجي، والقانوني ربع أو أقل.
9. الملاءمة: أخطاء المتعلم مستهدفة، والزمن يناسب 60 دقيقة على الجوال.
10. المطابقة: الكلمات والعبارة والنوع والمقطع يفحصها `tests/map-check.js`، وعليك محور القاعدة ومواضيع الجمل في صفه من خريطة الوحدة (القسم 6).

**التقرير** لكل درس:
```
u1l2 — الحكم: PASS | PASS WITH FIXES | FAIL
1. [high] gB-2 — المشكلة. الإصلاح: النص البديل بحروفه.
2. [medium] vocab[3].tip — …
3. [low] …
```
المرجع معرّف المحرك من الصفر (`rc-0` `vg-3` `gA-1` `gD-2` `rq-4` `lq-4` `qz-7`) أو مسار الحقل. **high:** جواب خاطئ أو مزدوج، شرح خاطئ، خروج عن أعداد الخطة أو عن عشرة أسئلة الاختبار، نص منسوخ، رابط لا يفتح، `checks` ترفض `model`. **medium:** مثال مكرر، تلميح كاشف، مستوى غير مناسب، `errCat` خاطئ، قانوني فوق الربع، خروج عن عُرف الأعداد. **low:** أسلوب وترتيب خيارات. أي `high` يعني FAIL وإعادة مراجعة بعد الإصلاح، والإصلاح نص بديل محدد لا نصيحة عامة.

## 10. للمنسّق: تعارضات وفجوات

1. (حُلّ في 24 أكتوبر) نوع دروس الوحدة 1 ومحور u1l5 ثبّتهما المنسّق في الخريطة (القسم 6).
2. (حُلّ في 24 أكتوبر) لكل درس استماع مقطعه، كما في الأسبوع التأسيسي، ويتكرر المقطع داخل درسه بثلاث مهام وتعود كلماته في الدرس التالي.
3. (حُلّ في 24 أكتوبر) u1l1 روجع بمعايير 23 أكتوبر.
4. (حُلّ في 25 أكتوبر) مطابقة الخريطة في كلماتها وعبارتها ونوعها ومقطعها يفحصها `tests/map-check.js`، ويبقى للمراجع محور القاعدة ومواضيع الجمل. وعتبة التشابه 0.8 باقية للتنبيه، وصارت المقارنة تشمل الوحدة السابقة، ويعرض الفاحص الجمل المتقاربة من 0.5 سطورَ near-overlap ليقارنها المراجع بنفسه، فقد وجد المراجعون في الوحدة 1 جملًا متقاربة بنحو 0.5–0.6.
5. (حُلّ في 25 أكتوبر) الاختبار الشامل يأخذ قائمة الدروس ودروس الاستماع ودقائق لوحة التقدم من `content.js`، فلا يُحدَّث بيده.
6. (حُلّ في 24 أكتوبر) `camblyUnits[1]` و`unitTests[1]` كُتبا من جديد بعد بناء الدروس الخمسة.
7. الخطة تريد لهجة بريطانية أساسًا ومقطع u0l2 أمريكي؛ وقراءة الطلاقة (إعادة نصوص سابقة) غير موجودة في المحرك.
8. الخريطة تثبّت كلمات الاستماع قبل اختيار المقطع والخطة تأخذها منه؛ فيسمّي المنسّق المقطع في صفه قبل الكتابة.
9. صفحات Wikimedia Commons لا تُفتح من بيئة العمل (WebFetch يردّ `url_not_found`)، فيتحقق الكاتب والمراجع من اسم ملف النطق من بيانات Wiktionary في kaikki.org، ويجرّب صاحب الموقع الأزرار الجديدة على جواله.
