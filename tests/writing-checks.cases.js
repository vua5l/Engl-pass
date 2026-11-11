/*
 * Correct and wrong sentences for the writing-check library in app.js (WCHECK_LIB). Run by tests/writing-checks.test.js.
 * جمل صحيحة وخاطئة تُجرَّب عليها مكتبة فحوص الكتابة: كل نص في pass يجب أن يقبله الفحص، وكل نص في fail يجب أن يرفضه.
 * وإذا رفض الفحص جملة صحيحة كتبها المتعلم، فأضفها هنا في pass ثم أصلح المكتبة حتى ينجح الاختبار.
 *
 *   analyze  عدد الجمل الذي يعدّه المحرك (سطر الختام في الإيميل ليس جملة).
 *   checks   { check: الفحص بصيغة الدرس، vocab: كلمات الدرس إن احتاجها، pass: [...]، fail: [...] }.
 *   refused  صيغ خاطئة للمكتبة، يجب أن تُرفض فيمنعها الفاحص.
 *   texts    النص الذي يظهر للمتعلم تحت مربع الكتابة.
 */
module.exports = {
  analyze: [
    { text: 'I study law. I live in Riyadh. My brother is a doctor. We visit our uncle on Fridays.', sentences: 4 },
    { text: "Dear Dr Nasser,\nI'm writing to ask about the project. I'm Majed, a law student. I usually go to the library. I need the deadline.\nBest regards,\nMajed", sentences: 4 },
    { text: "Dear Dr Nasser,\nI'm writing to ask about the project. I'm Majed, a law student. I usually go to the library. I need the deadline.\nKind regards, Majed Al-Otaibi", sentences: 4 },
    { text: "Hi Sara,\nI'm writing because I can't come tomorrow. I'm sick today. My mother is with me. I will call you later. Best regards Omar", sentences: 4 },
    { text: "Dear Ms Collins,\nI'm writing to introduce myself. I am a new student. I study law. Thank you for your help.\nYours sincerely,\nSaad", sentences: 4 },
    { text: "Hello Ali,\nThe meeting is at ten. Please bring the files. The judge is late. We start at eleven.\nThanks, see you", sentences: 4 },
    { text: "Dear Dr Hassan,\nI'm writing to ask about my grade. I studied hard. I passed the first test. I need your advice.\nBest regards,\nDr. Usama Ali", sentences: 4 },
    { text: 'I study law. I live in Riyadh. My brother is a doctor. Thank you very much.', sentences: 4 },
    { text: 'I study law. I live in Riyadh. Best Buy is a big shop. We visit our uncle.', sentences: 4 },
    { text: 'I study law. I live in Riyadh. Thanks for the books. We visit our uncle.', sentences: 4 },
    { text: 'I study law and I live in Riyadh and my brother is a doctor and we visit our uncle on Fridays', sentences: 1 }
  ],

  checks: [
    /* ---------- sentences ---------- */
    { check: { use: 'sentences', n: 4 },
      pass: ['I study law. I live in Riyadh. My brother is a doctor. We visit our uncle on Fridays.',
             'Is it hard? Yes, it is. I like it! My classes start at eight.'],
      fail: ['I study law. I live in Riyadh. My brother is a doctor.',
             'I study law and I live in Riyadh and my brother is a doctor and we visit our uncle on Fridays']
    },
    { check: { use: 'sentences', n: 4, capitalI: true },
      pass: ["I study law. I'm in Riyadh. My brother is a doctor. We visit our uncle on Fridays."],
      fail: ['i study law. I live in Riyadh. My brother is a doctor. We visit our uncle on Fridays.',
             "I study law. i'm in Riyadh. My brother is a doctor. We visit our uncle on Fridays."]
    },
    { check: { use: 'sentences', n: 2, runOn: true },
      pass: ['I study law at the university. I live in Riyadh with my family.',
             'I study law at King Saud University in Riyadh. I live with my family near the campus. My brother is a doctor in a big hospital.'],
      fail: ['I study law at King Saud University in Riyadh and I live with my family near the university and my brother is a doctor in a big hospital in the city. We visit our uncle.']
    },

    /* ---------- tense: presentSimple ---------- */
    { check: { use: 'tense', tense: 'presentSimple', n: 2 },
      pass: ['I usually wake up at six. My sister works in a bank.',
             "We don't work on Fridays. He lives near the university.",
             'They often eat out. I read the news every morning.',
             'Ahmed studies law. The class starts at eight.',
             'My friends play football on Fridays. I prefer basketball.',
             'Does she teach at the university? She has a car.',
             'I need a new laptop. You know the answer.',
             'Lawyers help people. Judges work in courts.',
             'Ahmed and Sara study law. Children go to school at seven.'],
      fail: ['I am a student. My sister is a doctor.',
             'This bag is mine. Sometimes I went home.',
             'I went to the court yesterday. We visited my uncle.',
             'I usually wake up at six. I am work in a bank.',
             "He don't work on Fridays. My sister works in a bank.",
             'I am knowing the answer. She lives in Abha.',
             'I usually wake up at six.',
             'I usually wake up at six. Is she work in a bank?',
             'Thank you for your help. I am happy.']
    },
    /* ---------- tense: presentContinuous ---------- */
    { check: { use: 'tense', tense: 'presentContinuous', n: 1 },
      pass: ["I'm reading a report now.",
             'My brother is working in Jeddah this month.',
             'Are you studying for the exam?',
             'Is Sara waiting outside?',
             "They aren't sleeping.",
             'We are relaxing at home.',
             "It's raining in Abha.",
             'What is your brother doing?',
             'You are working hard, and you look tired.',
             'They are building a new mall.',
             'My parents are welcoming the guests.',
             'We are both working today.'],
      fail: ['This book is interesting.',
             'There is a meeting today.',
             'It is relaxing here.',
             'I am work now.',
             'I working now. She is reading.',
             'She is reading, and you sitting there.',
             'My sister\'s wedding is in May.',
             'I am knowing the answer.',
             'I read the news every day.']
    },
    /* ---------- tense: present (any) ---------- */
    { check: { use: 'tense', tense: 'present', n: 1 },
      pass: ['I am a student.', 'I study law.', "We're reading a story.", 'My father works at 7 am.', 'My mother is understanding and kind.'],
      fail: ['I was a student.', 'We went home.', 'I was at work at 7 am.']
    },
    /* ---------- tense: pastSimple ---------- */
    { check: { use: 'tense', tense: 'pastSimple', n: 2 },
      pass: ['I went to Jeddah last week. We visited the old town.',
             "It was hot. We didn't stay long.",
             'Did you see the judge? Yes, I saw him.',
             'My family moved to Abha in 2019. I read a book there yesterday.',
             'We were at home. They had dinner.',
             'I used to play football. My father worked in a bank.',
             'The court was closed. The lawyers waited outside.',
             'I saw you walking with your brother. All we could do was go to bed.',
             'Yesterday I did my homework, cleaned my room and went out. It was a long day.',
             'Last week my friend Sayed visited me. We went to the mall.',
             "My grandfather's will was clear. All I wanted was sleep."],
      fail: ['I go to Jeddah every week. We visit the old town.',
             'I read books every day. I put my bag here.',
             'I am interested in law. The street is crowded.',
             "I didn't went to Jeddah. We visited the old town.",
             'Did you saw the judge? I saw him yesterday.',
             'I was go to the court. We visited the old town.',
             'I buyed a book. We visited the old town.',
             'I was walking home. They were waiting.',
             'I have visited Abha. She has finished the report.',
             'My brother is married. He lives in a crowded city.']
    },
    /* ---------- tense: pastContinuous ---------- */
    { check: { use: 'tense', tense: 'pastContinuous', n: 1 },
      pass: ['They were building a house.',
             'We were welcoming our guests.',
             'My mother was entertaining the guests.',
             'My father was quietly reading the news.',
             'My brother was at home studying.',
             'We were all watching TV.',
             'I was walking home when it started to rain.',
             'They were waiting outside.',
             'What were you doing at eight?',
             'Were they sleeping?',
             'I was relaxing on the beach.',
             "We weren't listening."],
      fail: ['It was interesting.',
             'The film was boring.',
             'It was relaxing.',
             'I walked home.',
             'I was knowing the answer.',
             'I was walk home when it rained.',
             'I was walking when they arriving.']
    },
    /* The continuous tenses count verbs, so two of them may sit in one sentence (u3l1: "at least 2 Past Continuous verbs"). */
    { check: { use: 'tense', tense: 'pastContinuous', n: 2 },
      pass: ['Last night was special. At nine, my father was cooking and my brother was watching TV. I felt happy. We ate together.'],
      fail: ['At nine, my father was cooking. Then we ate.']
    },
    /* ---------- tense: goingTo ---------- */
    { check: { use: 'tense', tense: 'goingTo', n: 1 },
      pass: ["I'm going to visit my uncle next week.",
             "It's going to rain.",
             'Are you going to study tonight?',
             'My brother is going to buy a car.',
             "We aren't going to stay long.",
             'Is Sara going to come?'],
      fail: ["I'm going to the market.",
             'We are going to Jeddah tomorrow.',
             'I going to visit my uncle.',
             "I'm going to visited my uncle.",
             'I will visit my uncle.',
             "She's going to goes home."]
    },
    /* ---------- tense: will ---------- */
    { check: { use: 'tense', tense: 'will', n: 1 },
      pass: ["I'll call you tomorrow.",
             'It will be hot in Riyadh.',
             'Will you help me?',
             "I won't be late.",
             'The court will probably decide next week.',
             'Maybe it will rain.',
             'I will work in a law firm.',
             "After university, I'll work as a lawyer."],
      fail: ['He wrote his will last year.',
             "I'm going to call you.",
             'I will to call you tomorrow.',
             'She will went to the court.',
             'He will goes to Jeddah.']
    },
    /* ---------- tense: presentPerfect ---------- */
    { check: { use: 'tense', tense: 'presentPerfect', n: 1 },
      pass: ['I have visited Abha twice.',
             'She has never seen snow.',
             'Have you ever been to London?',
             "We've finished the report.",
             "He's already gone home.",
             "They haven't eaten yet.",
             'What have you done?',
             'The man who helped you has left.',
             'She has showed me the way.'],
      fail: ['I visited Abha last year.',
             'I have a car.',
             'I have to study.',
             'I have went to Abha.',
             'He have seen the judge.',
             "It's closed.",
             'Have you ever went to London?']
    },
    /* ---------- tense with clean:false (the wrong forms are not checked) ---------- */
    { check: { use: 'tense', tense: 'pastSimple', n: 1, clean: false },
      pass: ["I didn't went to Jeddah. We visited the old town."],
      fail: ['I go to Jeddah every week.']
    },

    /* ---------- words ---------- */
    { check: { use: 'words', n: 2 }, vocab: ['lawyer', 'court', 'client', 'sign a contract'],
      pass: ['My lawyer is in court today.', 'We signed a contract with the client.', 'The lawyers met two clients.'],
      fail: ['My brother is at home.', 'The lawyer is here.']
    },
    { check: { use: 'words', n: 2, list: ['relax', 'go shopping', 'cheap'] },
      pass: ['We relaxed and went shopping.', 'It was cheap and we relaxed.'],
      fail: ['We went home.', 'We relaxed at home.']
    },

    /* ---------- email ---------- */
    { check: { use: 'email' },
      pass: ["Dear Dr Hassan,\nI'm writing to ask about the deadline. I need more time.\nBest regards,\nSaad",
             "Hi Sara,\nI am writing because I can't come tomorrow. I'm sick.\nThanks,\nOmar",
             "Hello Mr Ali,\nI'm writing to introduce myself. I am a new student in your class.\nThank you for your help.\nMajed",
             "Good morning Ms Collins,\nI'm writing to you about the meeting. Is it on Monday? Kind regards, Fahad",
             "Hey Sami,\nI'm writing to invite you to my party. It is on Friday.\nTalk soon,\nFahad",
             "Hi Noura,\nI'm writing to say thank you for the book.\nSee you soon,\nReem"],
      fail: ["I'm writing to ask about the deadline. I need more time.\nBest regards,\nSaad",
             'Dear Dr Hassan,\nI need more time for the project.\nBest regards,\nSaad',
             "Dear Dr Hassan,\nI'm writing to ask about the deadline. I need more time.",
             "Dear Sara,\nI'm writing to ask about the meeting. Is it on Monday?\nLovely weather today"]
    },
    { check: { use: 'email', parts: ['greeting', 'closing'] },
      pass: ['Dear Sara,\nThe meeting is at ten.\nKind regards,\nAli'],
      fail: ['The meeting is at ten.\nKind regards,\nAli']
    },

    /* ---------- sequence ---------- */
    { check: { use: 'sequence', n: 2 },
      pass: ['First, I wake up at six. Then I have breakfast.',
             'I wake up at six, and after that I pray. Finally, I go to the university.',
             'At first, I was nervous. Two hours later, I felt better.',
             'Firstly, read the contract. Secondly, sign it.',
             'Next, we went to the court. In the end, we won the case.'],
      fail: ['This is my first job. I wake up at six.',
             'Next week I will travel. I wake up at six.',
             'At the end of the day, I sleep. I wake up at six.',
             'First, I wake up at six.',
             'Next to my house is a park. I wake up at six.']
    },

    /* ---------- phrases (a lesson's own structure, here comparatives) ---------- */
    { check: { use: 'phrases', k: 'compare', tEn: "At least 2 comparisons with 'than'", t: 'مقارنتان على الأقل بـ than',
               any: [/\b[a-z]+er\s+than\b/i, /\b(?:more|less)\s+[a-z]+\s+than\b/i, /\bworse\s+than\b/i],
               not: [/\b(?:is|are|am|was|were|'s|'re|'m)\s+(?:much\s+|a\s+lot\s+)?more\s+[a-z]+er\b/i,
                     /\b(?:is|are|am|was|were|'s|'re|'m)\s+(?:much\s+|a\s+lot\s+)?[a-z]+er\s+from\b/i], n: 2 },
      pass: ['Abha is cooler than Riyadh. Riyadh is more crowded than Abha.',
             'Riyadh is bigger than Abha, and it is hotter than Jeddah.',
             'Jeddah has more water than Riyadh. Abha is cooler than Riyadh.',
             'A teacher from Abha told me that it is colder than Taif. Riyadh is hotter than Abha.',
             'Abha is better than Riyadh. Riyadh is worse than Jeddah.'],
      fail: ['Riyadh is bigger than Abha.',
             'Riyadh is bigger than Abha. Riyadh is bigger than Abha.',
             'Riyadh is bigger than Abha. It is more bigger than Jeddah.',
             'Riyadh is bigger from Abha. Abha is cooler than Riyadh.']
    },
    { check: { use: 'phrases', k: 'asas', tEn: "One sentence with 'not as … as'", t: 'جملة بـ not as … as', any: ['not as … as'] },
      pass: ['Abha is not as hot as Riyadh.', 'Jeddah is not as big and busy as Riyadh.'],
      fail: ['Abha is not hot.', 'Abha is as hot as Riyadh.']
    },
    { check: { use: 'phrases', k: 'must', tEn: "Two rules with 'must' or 'have to'", t: 'قاعدتان بـ must أو have to', any: ['must', 'have to', 'has to'], n: 2 },
      pass: ['Students must wear an ID card. We have to arrive at eight.'],
      fail: ['Students must wear an ID card. They must be quiet.', 'Students should wear an ID card.']
    }
  ],

  refused: [
    { use: 'tense', tense: 'future' },
    { use: 'tense' },
    { use: 'sentences', n: 0 },
    { use: 'sentences', n: 2.5 },
    { use: 'nonsense' },
    { use: 'phrases', any: ['than'] },
    { use: 'phrases', k: 'x', tEn: 'x', t: 'x', any: [] },
    { use: 'phrases', k: 'x', tEn: 'x', t: 'x', any: ['  '] },
    { use: 'email', parts: ['sign'] },
    { use: 'words', list: [] },
    { use: 'words', n: 3, list: ['a', 'b'] },
    { use: 'tense', tense: 'pastSimple', clen: false },
    { use: 'sentences', min: 5 }
  ],

  /* سؤال الكلمة في المراجعة المتباعدة (wordQuestion): الفراغ للعبارة كلها، وما يُقبل جوابًا وما يُرفض. */
  questions: [
    { word: { en: 'lawyer', ex: 'My cousin is a lawyer in Riyadh.' }, blank: 'lawyer', accept: ['lawyer', 'Lawyer'], reject: ['lawyr', 'lawyers'] },
    { word: { en: 'case', ex: 'There are two important cases today.' }, blank: 'cases', accept: ['cases', 'case'], reject: ['casses', 'a case'] },
    { word: { en: 'wake up', headword: 'wake', ex: 'My sister wakes up at six.' }, blank: 'wakes up', accept: ['wakes up', 'wake up'], reject: ['wake', 'wakes', 'up'] },
    { word: { en: 'give legal advice', headword: 'advice', ex: 'Lawyers give legal advice to their clients.' }, blank: 'give legal advice', accept: ['give legal advice'], reject: ['advice', 'legal advice'] },
    { word: { en: 'watch a match', ex: 'My brothers watched a football match at a café near our house.' }, blank: null, accept: ['watch a match'], reject: ['match'] }
  ],

  texts: [
    { check: { use: 'sentences', n: 4 }, k: 'sentences',
      tEn: 'At least 4 separate sentences (end each with a period .)', t: '4 جمل منفصلة على الأقل (بنقطة في نهاية كل جملة)' },
    { check: { use: 'sentences', n: 5, capitalI: true },
      tEn: "At least 5 separate sentences (end each with a period .), and 'I' is always a capital",
      t: '5 جمل منفصلة على الأقل (بنقطة في نهاية كل جملة)، والضمير I بحرف كبير دائمًا' },
    { check: { use: 'tense', tense: 'pastSimple', n: 2 }, k: 'pastSimple',
      tEn: "At least 2 sentences in the Past Simple, not 'didn't went' or 'I was go'",
      t: "جملتان على الأقل بالماضي البسيط، دون didn't went أو I was go" },
    { check: { use: 'tense', tense: 'presentContinuous', n: 1, clean: false },
      tEn: 'At least 1 verb with am / is / are + verb-ing', t: 'فعل واحد على الأقل بالمضارع المستمر: am / is / are مع الفعل وing' },
    { check: { use: 'tense', tense: 'pastContinuous', n: 2 },
      tEn: "At least 2 verbs with was / were + verb-ing, not 'didn't went' or 'I was go'",
      t: "فعلان على الأقل بالماضي المستمر: was / were مع الفعل وing، دون didn't went أو I was go" },
    { check: { use: 'words', n: 3 }, lesson: { vocab: [{ en: 'climate' }, { en: 'noisy' }], legalPhrase: { en: 'city council' } }, k: 'vocab',
      tEn: "At least 3 words/phrases from today's lesson", t: '3 كلمات أو عبارات على الأقل من درس اليوم', ex: 'climate · noisy · city council' },
    { check: { use: 'email' }, k: 'parts',
      tEn: "Email parts: a greeting, your purpose with 'I'm writing to', and a closing",
      t: "أجزاء الإيميل: تحية، والغرض بـ I'm writing to، وختام" },
    { check: { use: 'sequence', n: 2 }, k: 'sequence',
      tEn: 'At least 2 different sequence words (First, Then, After that, Finally)', t: 'كلمتا ترتيب على الأقل (First وThen وAfter that وFinally)' },
    { check: { use: 'tense', tense: 'will', n: 2, tEn: 'Two predictions with will', t: 'توقعان بـ will', k: 'predict' }, k: 'predict',
      tEn: 'Two predictions with will', t: 'توقعان بـ will' }
  ]
};
