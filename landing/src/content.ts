export type Lang = 'en' | 'ru' | 'de' | 'fr' | 'es' | 'zh'

export interface LanguageOption {
  code: Lang
  native: string
  short: string
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'en', native: 'English', short: 'EN' },
  { code: 'ru', native: 'Русский', short: 'RU' },
  { code: 'de', native: 'Deutsch', short: 'DE' },
  { code: 'fr', native: 'Français', short: 'FR' },
  { code: 'es', native: 'Español', short: 'ES' },
  { code: 'zh', native: '中文', short: 'ZH' },
]

export const LANG_CODES = LANGUAGES.map((item) => item.code)

export function isLang(value: string | null | undefined): value is Lang {
  return !!value && (LANG_CODES as string[]).includes(value)
}

export interface ScreenCopy {
  label: string
  title: string
  text: string
}

export interface Content {
  meta: {
    title: string
    description: string
    ogLocale: string
  }
  langLabel: string
  nav: {
    app: string
    ai: string
    plans: string
    languages: string
    faq: string
  }
  headerCta: string
  hero: {
    eyebrow: string
    title: string
    lede: string
    cta: string
    secondary: string
    meta: string
    floatLabel: string
    floatTitle: string
    floatSub: string
    streak: string
  }
  pillars: {
    label: string
    title: string
    items: Array<{ title: string; text: string }>
  }
  screens: {
    label: string
    title: string
    lead: string
    items: ScreenCopy[]
  }
  ai: {
    label: string
    title: string
    body: string
    features: string[]
    prompts: string[]
    link: string
  }
  plans: {
    label: string
    title: string
    body: string
    stats: Array<{ value: string; label: string }>
  }
  progress: {
    label: string
    title: string
    body: string
    chips: string[]
    link: string
  }
  languages: {
    label: string
    title: string
    lead: string
  }
  faq: {
    label: string
    title: string
    items: Array<{ q: string; a: string }>
  }
  cta: {
    eyebrow: string
    title: string
    body: string
    button: string
  }
  footer: {
    tagline: string
    telegram: string
    github: string
    author: string
  }
}

const en: Content = {
  meta: {
    title: 'Yoggy — yoga, meditation and breathing in Telegram',
    description:
      'A calm yoga and mindfulness coach in Telegram. Guided practices, weekly plans, gentle check-ins, progress and an AI assistant — no install, no separate account.',
    ogLocale: 'en_US',
  },
  langLabel: 'Language',
  nav: {
    app: 'App',
    ai: 'AI assistant',
    plans: 'Plans',
    languages: 'Languages',
    faq: 'FAQ',
  },
  headerCta: 'Open in Telegram',
  hero: {
    eyebrow: 'Yoga & mindfulness · Telegram Mini App',
    title: 'A calmer practice,\n*one day at a time.*',
    lede:
      'Yoggy is a quiet coach inside Telegram. Guided yoga, meditation and breathing, a weekly plan that bends with your life, and an assistant that listens in plain words.',
    cta: 'Open Yoggy in Telegram',
    secondary: 'See the app',
    meta: 'Free to start · No install · iOS · Android · Desktop',
    floatLabel: 'Today’s check-in',
    floatTitle: 'Mood 4/5 · Energy 4/5',
    floatSub: 'Sleep 7.5 h · Water 1.6 L',
    streak: '7-day streak',
  },
  pillars: {
    label: 'A different pace',
    title: 'Built for the days you *actually* have.',
    items: [
      {
        title: 'Practice, not performance',
        text: 'Guidance for the body you have today. Skip a day — nothing breaks, nothing turns red.',
      },
      {
        title: 'A plan you can keep',
        text: 'Short sessions on busy days, longer ones when there is room. The week bends with you.',
      },
      {
        title: 'How you feel, recorded',
        text: 'Mood, energy, tension, sleep and water. Small notes that turn into a real picture.',
      },
    ],
  },
  screens: {
    label: 'Inside the app',
    title: 'Six screens, *no noise.*',
    lead:
      'Everything opens in the Telegram you already use. Take a look at the parts you will touch every day.',
    items: [
      {
        label: 'Today',
        title: 'A calm start',
        text: 'A greeting, a quote and one practice that fits the day you are having.',
      },
      {
        label: 'Practices',
        title: '65 guided practices',
        text: 'Yoga, meditation, breathing and gentle stretching — filtered by goal, level and length.',
      },
      {
        label: 'Plans',
        title: 'A rhythm for the week',
        text: 'Choose a ready plan or let the assistant shape one around your schedule.',
      },
      {
        label: 'Progress',
        title: 'Quiet progress',
        text: 'Minutes, practice days and streaks. No leaderboard, no pressure.',
      },
      {
        label: 'AI assistant',
        title: 'Ask in plain words',
        text: '“Build me a 7-day plan for better sleep.” Done in seconds, synced everywhere.',
      },
      {
        label: 'Diary',
        title: 'One gentle record',
        text: 'Check-ins and sessions in one place, with the full picture of how you feel.',
      },
    ],
  },
  ai: {
    label: 'AI assistant',
    title: 'Ask for a plan.\n*It appears.*',
    body:
      'Describe the week you want — “gentle, 15 minutes, before bed, my lower back is sensitive” — and the assistant shapes a plan around it. It can move practices, log a session, save a check-in or answer what changed.',
    features: [
      'Builds and edits weekly plans',
      'Logs practices and check-ins',
      'Shares one history with the bot',
    ],
    prompts: [
      '“Build a 7-day plan for sleep”',
      '“Move today’s practice to Saturday”',
      '“How was my week?”',
    ],
    link: 'Try it in Telegram',
  },
  plans: {
    label: 'Plans',
    title: 'A week that\n*fits your week.*',
    body:
      'Start with a ready-made plan for calm, sleep, energy or flexibility — or ask Yoggy to make one. Every day knows its practice and length, and you can remove a plan without losing your place.',
    stats: [
      { value: '21', label: 'ready plans' },
      { value: '5–30', label: 'minutes a day' },
      { value: '6', label: 'languages' },
    ],
  },
  progress: {
    label: 'Progress & check-ins',
    title: 'Progress,\n*without the pressure.*',
    body:
      'Minutes practiced. Days that felt like practice. How your mood, energy and tension moved. Yoggy keeps the record and never turns it into a competition.',
    chips: ['Sleep quality', 'Tension', 'Energy', 'Mood'],
    link: 'Start your first check-in',
  },
  languages: {
    label: 'Languages',
    title: 'Six languages.\n*One quiet practice.*',
    lead:
      'The bot and the app follow your Telegram language. You can change it anytime in your profile.',
  },
  faq: {
    label: 'Questions',
    title: 'Before you\n*begin.*',
    items: [
      {
        q: 'Do I need to install anything?',
        a: 'No. Yoggy lives in Telegram: open the bot, tap Start, and the Mini App opens with a button in the chat. It works on iOS, Android, desktop and web.',
      },
      {
        q: 'Is Yoggy free?',
        a: 'Yes — you can start and keep a full practice with the free bot and Mini App. There are no ads inside your practice.',
      },
      {
        q: 'What can the AI assistant do?',
        a: 'It builds and changes weekly plans, adds or moves practices, records sessions and check-ins, and answers questions about your progress. It asks before anything is deleted.',
      },
      {
        q: 'Where is my data stored?',
        a: 'On Yoggy’s own servers. Your check-ins, notes and practice history are visible only to you. You can export or delete your account from the profile.',
      },
      {
        q: 'What if I miss a day?',
        a: 'Nothing happens. There is no punishment, no broken streak screen and no guilt copy. The plan simply waits for you.',
      },
      {
        q: 'Is this medical advice?',
        a: 'No. Yoggy offers general wellbeing practices. If you are pregnant, injured or managing a condition, check with a professional before starting.',
      },
    ],
  },
  cta: {
    eyebrow: 'Ready when you are',
    title: 'Your next practice\nis *one message away.*',
    body:
      'Open the bot, answer a few gentle questions, and pick your first practice. It takes about a minute.',
    button: 'Open @AiYoggyBot',
  },
  footer: {
    tagline: 'A quiet practice in Telegram.',
    telegram: 'Telegram',
    github: 'GitHub',
    author: 'Ivan Burenin',
  },
}

const ru: Content = {
  meta: {
    title: 'Yoggy — йога, медитация и дыхание в Telegram',
    description:
      'Спокойный коуч по йоге и осознанности в Telegram. Практики, планы на неделю, чек-ины, прогресс и ИИ-ассистент — без установки и отдельного аккаунта.',
    ogLocale: 'ru_RU',
  },
  langLabel: 'Язык',
  nav: {
    app: 'Приложение',
    ai: 'ИИ-ассистент',
    plans: 'Планы',
    languages: 'Языки',
    faq: 'Вопросы',
  },
  headerCta: 'Открыть в Telegram',
  hero: {
    eyebrow: 'Йога и осознанность · Telegram Mini App',
    title: 'Спокойная практика,\n*день за днём.*',
    lede:
      'Yoggy — тихий коуч в Telegram. Йога, медитация и дыхание с подсказками, план на неделю, который подстраивается под жизнь, и ассистент, который понимает обычные слова.',
    cta: 'Открыть Yoggy в Telegram',
    secondary: 'Посмотреть приложение',
    meta: 'Бесплатно · Без установки · iOS · Android · Desktop',
    floatLabel: 'Чек-ин на сегодня',
    floatTitle: 'Настроение 4/5 · Энергия 4/5',
    floatSub: 'Сон 7,5 ч · Вода 1,6 л',
    streak: '7 дней подряд',
  },
  pillars: {
    label: 'Другой темп',
    title: 'Для тех дней, которые *действительно* есть.',
    items: [
      {
        title: 'Практика, а не результат',
        text: 'Подсказки для тела, которое есть сегодня. Пропустили день — ничего не сломалось и не стало красным.',
      },
      {
        title: 'План, который можно держать',
        text: 'Короткие практики в занятые дни, длинные — когда есть место. Неделя подстраивается вместе с вами.',
      },
      {
        title: 'Как вы себя чувствуете',
        text: 'Настроение, энергия, напряжение, сон и вода. Маленькие заметки, из которых складывается картина.',
      },
    ],
  },
  screens: {
    label: 'Внутри приложения',
    title: 'Шесть экранов, *ни одного лишнего.*',
    lead:
      'Всё открывается в Telegram, который уже есть. Посмотрите на то, с чем будете работать каждый день.',
    items: [
      {
        label: 'Сегодня',
        title: 'Спокойное начало',
        text: 'Приветствие, цитата и одна практика, которая подходит сегодняшнему дню.',
      },
      {
        label: 'Практики',
        title: '65 практик с подсказками',
        text: 'Йога, медитация, дыхание и мягкая растяжка — с фильтрами по цели, уровню и длительности.',
      },
      {
        label: 'Планы',
        title: 'Ритм на неделю',
        text: 'Выберите готовый план или попросите ассистента собрать его под ваше расписание.',
      },
      {
        label: 'Прогресс',
        title: 'Тихий прогресс',
        text: 'Минуты, дни практики и серии. Без таблицы лидеров и давления.',
      },
      {
        label: 'ИИ-ассистент',
        title: 'Скажите обычными словами',
        text: '«Собери план на 7 дней для лучшего сна». Готово за секунды и синхронизировано везде.',
      },
      {
        label: 'Дневник',
        title: 'Одна спокойная запись',
        text: 'Чек-ины и практики в одном месте — с полной картиной того, как вы себя чувствуете.',
      },
    ],
  },
  ai: {
    label: 'ИИ-ассистент',
    title: 'Попросите план.\n*Он появится.*',
    body:
      'Опишите неделю, которую хотите: «мягко, по 15 минут, перед сном, спина чувствительная» — и ассистент соберёт план. Он может перенести практику, записать сессию, сохранить чек-ин или объяснить, что изменилось.',
    features: [
      'Собирает и меняет планы на неделю',
      'Записывает практики и чек-ины',
      'Одна история с ботом',
    ],
    prompts: [
      '«Собери план на 7 дней для сна»',
      '«Перенеси сегодняшнюю практику на субботу»',
      '«Как прошла неделя?»',
    ],
    link: 'Попробовать в Telegram',
  },
  plans: {
    label: 'Планы',
    title: 'Неделя, которая\n*подходит вам.*',
    body:
      'Начните с готового плана для спокойствия, сна, энергии или гибкости — или попросите Yoggy собрать свой. Каждый день знает свою практику и длительность, а план можно снять без потери места.',
    stats: [
      { value: '21', label: 'готовый план' },
      { value: '5–30', label: 'минут в день' },
      { value: '6', label: 'языков' },
    ],
  },
  progress: {
    label: 'Прогресс и чек-ины',
    title: 'Прогресс,\n*без давления.*',
    body:
      'Минуты практики. Дни, которые ощущались как практика. Как менялись настроение, энергия и напряжение. Yoggy ведёт запись и не превращает её в соревнование.',
    chips: ['Качество сна', 'Напряжение', 'Энергия', 'Настроение'],
    link: 'Начать первый чек-ин',
  },
  languages: {
    label: 'Языки',
    title: 'Шесть языков.\n*Одна спокойная практика.*',
    lead:
      'Бот и приложение следуют языку вашего Telegram. Его можно изменить в профиле.',
  },
  faq: {
    label: 'Вопросы',
    title: 'Перед тем как\n*начать.*',
    items: [
      {
        q: 'Нужно ли что-то устанавливать?',
        a: 'Нет. Yoggy живёт в Telegram: откройте бота, нажмите Start — и Mini App откроется кнопкой в чате. Работает на iOS, Android, в desktop и вебе.',
      },
      {
        q: 'Yoggy бесплатен?',
        a: 'Да — начать и вести полноценную практику можно с бесплатным ботом и Mini App. Внутри практики нет рекламы.',
      },
      {
        q: 'Что умеет ИИ-ассистент?',
        a: 'Собирает и меняет планы на неделю, добавляет и переносит практики, записывает сессии и чек-ины, отвечает на вопросы о прогрессе. Перед удалением спрашивает.',
      },
      {
        q: 'Где хранятся данные?',
        a: 'На серверах Yoggy. Чек-ины, заметки и история практик видны только вам. Аккаунт можно экспортировать или удалить в профиле.',
      },
      {
        q: 'А если я пропущу день?',
        a: 'Ничего не случится. Нет наказаний, экрана сломанной серии и чувства вины. План просто ждёт вас.',
      },
      {
        q: 'Это медицинский совет?',
        a: 'Нет. Yoggy предлагает общие практики для самочувствия. Если вы беременны, травмированы или наблюдаетесь у врача, сначала посоветуйтесь со специалистом.',
      },
    ],
  },
  cta: {
    eyebrow: 'Готовы, когда готовы вы',
    title: 'Следующая практика —\n*в одном сообщении.*',
    body:
      'Откройте бота, ответьте на несколько мягких вопросов и выберите первую практику. Это займёт около минуты.',
    button: 'Открыть @AiYoggyBot',
  },
  footer: {
    tagline: 'Тихая практика в Telegram.',
    telegram: 'Telegram',
    github: 'GitHub',
    author: 'Ivan Burenin',
  },
}

const de: Content = {
  meta: {
    title: 'Yoggy — Yoga, Meditation und Atmen in Telegram',
    description:
      'Ein ruhiger Yoga- und Achtsamkeitscoach in Telegram. Geführte Praktiken, Wochenpläne, Check-ins, Fortschritt und ein KI-Assistent — ohne Installation.',
    ogLocale: 'de_DE',
  },
  langLabel: 'Sprache',
  nav: {
    app: 'App',
    ai: 'KI-Assistent',
    plans: 'Pläne',
    languages: 'Sprachen',
    faq: 'FAQ',
  },
  headerCta: 'In Telegram öffnen',
  hero: {
    eyebrow: 'Yoga & Achtsamkeit · Telegram Mini App',
    title: 'Eine ruhigere Praxis,\n*Tag für Tag.*',
    lede:
      'Yoggy ist ein leiser Coach in Telegram. Geführtes Yoga, Meditation und Atmen, ein Wochenplan, der sich deinem Leben anpasst, und ein Assistent, der einfache Worte versteht.',
    cta: 'Yoggy in Telegram öffnen',
    secondary: 'Die App ansehen',
    meta: 'Kostenlos starten · Keine Installation · iOS · Android · Desktop',
    floatLabel: 'Heutiger Check-in',
    floatTitle: 'Stimmung 4/5 · Energie 4/5',
    floatSub: 'Schlaf 7,5 Std. · Wasser 1,6 L',
    streak: '7 Tage in Folge',
  },
  pillars: {
    label: 'Ein anderes Tempo',
    title: 'Für die Tage, die du *wirklich* hast.',
    items: [
      {
        title: 'Praxis statt Leistung',
        text: 'Hinweise für den Körper, den du heute hast. Einen Tag aussetzen — nichts bricht, nichts wird rot.',
      },
      {
        title: 'Ein Plan, der bleibt',
        text: 'Kurze Einheiten an vollen Tagen, längere, wenn Platz ist. Die Woche beugt sich mit dir.',
      },
      {
        title: 'Wie du dich fühlst',
        text: 'Stimmung, Energie, Anspannung, Schlaf und Wasser. Kleine Notizen, die ein echtes Bild ergeben.',
      },
    ],
  },
  screens: {
    label: 'In der App',
    title: 'Sechs Ansichten, *kein Lärm.*',
    lead:
      'Alles öffnet sich in deinem Telegram. Schau dir an, was du jeden Tag berühren wirst.',
    items: [
      {
        label: 'Heute',
        title: 'Ein ruhiger Start',
        text: 'Begrüßung, Zitat und eine Praxis, die zum heutigen Tag passt.',
      },
      {
        label: 'Praktiken',
        title: '65 geführte Praktiken',
        text: 'Yoga, Meditation, Atmen und sanftes Dehnen — gefiltert nach Ziel, Level und Länge.',
      },
      {
        label: 'Pläne',
        title: 'Ein Rhythmus für die Woche',
        text: 'Wähle einen fertigen Plan oder lass den Assistenten einen um deinen Zeitplan bauen.',
      },
      {
        label: 'Fortschritt',
        title: 'Ruhiger Fortschritt',
        text: 'Minuten, Übungstage und Serien. Keine Rangliste, kein Druck.',
      },
      {
        label: 'KI-Assistent',
        title: 'Sprich einfach',
        text: '„Baue mir einen 7-Tage-Plan für besseren Schlaf.“ In Sekunden fertig, überall synchron.',
      },
      {
        label: 'Tagebuch',
        title: 'Ein sanfter Eintrag',
        text: 'Check-ins und Einheiten an einem Ort — mit dem ganzen Bild deines Befindens.',
      },
    ],
  },
  ai: {
    label: 'KI-Assistent',
    title: 'Frag nach einem Plan.\n*Er erscheint.*',
    body:
      'Beschreibe die Woche, die du willst — „sanft, 15 Minuten, vor dem Schlaf, mein unterer Rücken ist empfindlich“ — und der Assistent baut sie. Er verschiebt Praktiken, trägt eine Einheit ein, speichert einen Check-in oder erklärt, was sich geändert hat.',
    features: [
      'Baut und ändert Wochenpläne',
      'Trägt Praktiken und Check-ins ein',
      'Eine gemeinsame Historie mit dem Bot',
    ],
    prompts: [
      '„Baue einen 7-Tage-Plan für Schlaf“',
      '„Verschiebe die heutige Praxis auf Samstag“',
      '„Wie war meine Woche?“',
    ],
    link: 'In Telegram ausprobieren',
  },
  plans: {
    label: 'Pläne',
    title: 'Eine Woche, die\n*zu deiner passt.*',
    body:
      'Starte mit einem fertigen Plan für Ruhe, Schlaf, Energie oder Flexibilität — oder lass Yoggy einen bauen. Jeder Tag kennt seine Praxis und Länge, und du kannst einen Plan entfernen, ohne deinen Platz zu verlieren.',
    stats: [
      { value: '21', label: 'fertige Pläne' },
      { value: '5–30', label: 'Minuten pro Tag' },
      { value: '6', label: 'Sprachen' },
    ],
  },
  progress: {
    label: 'Fortschritt & Check-ins',
    title: 'Fortschritt,\n*ohne Druck.*',
    body:
      'Geübte Minuten. Tage, die sich wie Praxis anfühlten. Wie sich Stimmung, Energie und Anspannung bewegten. Yoggy führt das Protokoll und macht daraus keinen Wettkampf.',
    chips: ['Schlafqualität', 'Anspannung', 'Energie', 'Stimmung'],
    link: 'Ersten Check-in starten',
  },
  languages: {
    label: 'Sprachen',
    title: 'Sechs Sprachen.\n*Eine ruhige Praxis.*',
    lead:
      'Bot und App folgen deiner Telegram-Sprache. Du kannst sie jederzeit im Profil ändern.',
  },
  faq: {
    label: 'Fragen',
    title: 'Bevor du\n*beginnst.*',
    items: [
      {
        q: 'Muss ich etwas installieren?',
        a: 'Nein. Yoggy lebt in Telegram: Bot öffnen, Start tippen, und die Mini App öffnet sich per Button im Chat. Sie läuft auf iOS, Android, Desktop und im Web.',
      },
      {
        q: 'Ist Yoggy kostenlos?',
        a: 'Ja — du kannst mit dem kostenlosen Bot und der Mini App starten und eine vollständige Praxis führen. In der Praxis gibt es keine Werbung.',
      },
      {
        q: 'Was kann der KI-Assistent?',
        a: 'Er baut und ändert Wochenpläne, fügt Praktiken hinzu oder verschiebt sie, trägt Einheiten und Check-ins ein und beantwortet Fragen zum Fortschritt. Vor dem Löschen fragt er nach.',
      },
      {
        q: 'Wo liegen meine Daten?',
        a: 'Auf Yoggy-Servern. Check-ins, Notizen und Praxisverlauf siehst nur du. Du kannst dein Konto im Profil exportieren oder löschen.',
      },
      {
        q: 'Was, wenn ich einen Tag verpasse?',
        a: 'Nichts. Es gibt keine Strafe, keinen Bildschirm mit gebrochener Serie und keine Schuldgefühle. Der Plan wartet einfach auf dich.',
      },
      {
        q: 'Ist das medizinischer Rat?',
        a: 'Nein. Yoggy bietet allgemeine Wohlfühlpraktiken. Wenn du schwanger bist, verletzt bist oder eine Erkrankung behandelst, sprich vorher mit einer Fachperson.',
      },
    ],
  },
  cta: {
    eyebrow: 'Bereit, wenn du es bist',
    title: 'Deine nächste Praxis\nist *eine Nachricht entfernt.*',
    body:
      'Öffne den Bot, beantworte ein paar sanfte Fragen und wähle deine erste Praxis. Es dauert etwa eine Minute.',
    button: '@AiYoggyBot öffnen',
  },
  footer: {
    tagline: 'Eine ruhige Praxis in Telegram.',
    telegram: 'Telegram',
    github: 'GitHub',
    author: 'Ivan Burenin',
  },
}

const fr: Content = {
  meta: {
    title: 'Yoggy — yoga, méditation et respiration dans Telegram',
    description:
      'Un coach calme de yoga et de pleine conscience dans Telegram. Pratiques guidées, programmes hebdomadaires, check-ins, progrès et assistant IA — sans installation.',
    ogLocale: 'fr_FR',
  },
  langLabel: 'Langue',
  nav: {
    app: 'App',
    ai: 'Assistant IA',
    plans: 'Plans',
    languages: 'Langues',
    faq: 'FAQ',
  },
  headerCta: 'Ouvrir dans Telegram',
  hero: {
    eyebrow: 'Yoga & pleine conscience · Telegram Mini App',
    title: 'Une pratique plus calme,\n*un jour à la fois.*',
    lede:
      "Yoggy est un coach discret dans Telegram. Yoga, méditation et respiration guidés, un programme de la semaine qui s'adapte à votre vie et un assistant qui comprend les mots simples.",
    cta: 'Ouvrir Yoggy dans Telegram',
    secondary: "Voir l'app",
    meta: 'Gratuit pour commencer · Sans installation · iOS · Android · Desktop',
    floatLabel: 'Check-in du jour',
    floatTitle: 'Humeur 4/5 · Énergie 4/5',
    floatSub: 'Sommeil 7,5 h · Eau 1,6 L',
    streak: "7 jours d'affilée",
  },
  pillars: {
    label: 'Un autre rythme',
    title: 'Pour les jours que vous avez *vraiment*.',
    items: [
      {
        title: 'La pratique, pas la performance',
        text: "Des indications pour le corps que vous avez aujourd'hui. Un jour manqué — rien ne casse, rien ne devient rouge.",
      },
      {
        title: 'Un programme tenable',
        text: "Des séances courtes les jours chargés, plus longues quand il y a de la place. La semaine s'adapte avec vous.",
      },
      {
        title: 'Ce que vous ressentez',
        text: 'Humeur, énergie, tension, sommeil et eau. De petites notes qui forment une vraie image.',
      },
    ],
  },
  screens: {
    label: "Dans l'app",
    title: 'Six écrans, *aucun bruit.*',
    lead:
      'Tout s’ouvre dans le Telegram que vous utilisez déjà. Parcourez ce que vous toucherez chaque jour.',
    items: [
      {
        label: "Aujourd'hui",
        title: 'Un début calme',
        text: 'Un accueil, une citation et une pratique qui correspond à la journée.',
      },
      {
        label: 'Pratiques',
        title: '65 pratiques guidées',
        text: 'Yoga, méditation, respiration et étirements doux — filtrés par objectif, niveau et durée.',
      },
      {
        label: 'Plans',
        title: 'Un rythme pour la semaine',
        text: "Choisissez un plan prêt ou laissez l'assistant en créer un autour de votre emploi du temps.",
      },
      {
        label: 'Progrès',
        title: 'Des progrès tranquilles',
        text: 'Minutes, jours de pratique et séries. Sans classement ni pression.',
      },
      {
        label: 'Assistant IA',
        title: 'Demandez simplement',
        text: '« Crée-moi un plan de 7 jours pour mieux dormir. » Prêt en quelques secondes, synchronisé partout.',
      },
      {
        label: 'Journal',
        title: 'Une trace douce',
        text: 'Check-ins et séances au même endroit, avec l’image complète de votre ressenti.',
      },
    ],
  },
  ai: {
    label: 'Assistant IA',
    title: 'Demandez un plan.\n*Il apparaît.*',
    body:
      "Décrivez la semaine que vous voulez — « douce, 15 minutes, avant le coucher, mon bas du dos est sensible » — et l'assistant la construit. Il déplace des pratiques, enregistre une séance, sauvegarde un check-in ou explique ce qui a changé.",
    features: [
      'Crée et modifie les programmes de la semaine',
      'Enregistre les pratiques et les check-ins',
      'Un historique partagé avec le bot',
    ],
    prompts: [
      '« Crée un plan de 7 jours pour le sommeil »',
      "« Déplace la pratique d'aujourd'hui à samedi »",
      '« Comment s’est passée ma semaine ? »',
    ],
    link: 'Essayer dans Telegram',
  },
  plans: {
    label: 'Plans',
    title: 'Une semaine qui\n*vous ressemble.*',
    body:
      'Commencez avec un plan prêt pour le calme, le sommeil, l’énergie ou la souplesse — ou demandez à Yoggy de le créer. Chaque jour connaît sa pratique et sa durée, et vous pouvez retirer un plan sans perdre votre place.',
    stats: [
      { value: '21', label: 'plans prêts' },
      { value: '5–30', label: 'minutes par jour' },
      { value: '6', label: 'langues' },
    ],
  },
  progress: {
    label: 'Progrès & check-ins',
    title: 'Des progrès,\n*sans pression.*',
    body:
      'Les minutes pratiquées. Les jours qui ressemblaient à de la pratique. L’évolution de l’humeur, de l’énergie et de la tension. Yoggy garde la trace sans en faire une compétition.',
    chips: ['Qualité du sommeil', 'Tension', 'Énergie', 'Humeur'],
    link: 'Commencer votre premier check-in',
  },
  languages: {
    label: 'Langues',
    title: 'Six langues.\n*Une pratique calme.*',
    lead:
      "Le bot et l'app suivent la langue de votre Telegram. Vous pouvez la changer dans votre profil.",
  },
  faq: {
    label: 'Questions',
    title: 'Avant de\n*commencer.*',
    items: [
      {
        q: 'Dois-je installer quelque chose ?',
        a: "Non. Yoggy vit dans Telegram : ouvrez le bot, appuyez sur Start, et la Mini App s'ouvre avec un bouton dans le chat. Elle fonctionne sur iOS, Android, desktop et web.",
      },
      {
        q: 'Yoggy est-il gratuit ?',
        a: "Oui — vous pouvez commencer et tenir une pratique complète avec le bot et la Mini App gratuits. Il n'y a pas de publicité dans votre pratique.",
      },
      {
        q: "Que fait l'assistant IA ?",
        a: "Il crée et modifie les programmes de la semaine, ajoute ou déplace des pratiques, enregistre des séances et des check-ins, et répond aux questions sur vos progrès. Il demande avant de supprimer.",
      },
      {
        q: 'Où sont mes données ?',
        a: 'Sur les serveurs de Yoggy. Vos check-ins, notes et historique de pratique ne sont visibles que par vous. Vous pouvez exporter ou supprimer votre compte depuis le profil.',
      },
      {
        q: 'Et si je manque un jour ?',
        a: 'Rien ne se passe. Pas de punition, pas d’écran de série brisée, pas de culpabilité. Le plan vous attend.',
      },
      {
        q: 'Est-ce un avis médical ?',
        a: 'Non. Yoggy propose des pratiques générales de bien-être. Si vous êtes enceinte, blessée ou suivie pour une condition, demandez conseil à un professionnel avant de commencer.',
      },
    ],
  },
  cta: {
    eyebrow: 'Prêt quand vous l’êtes',
    title: 'Votre prochaine pratique\nest *à un message.*',
    body:
      'Ouvrez le bot, répondez à quelques questions douces et choisissez votre première pratique. Cela prend environ une minute.',
    button: 'Ouvrir @AiYoggyBot',
  },
  footer: {
    tagline: 'Une pratique calme dans Telegram.',
    telegram: 'Telegram',
    github: 'GitHub',
    author: 'Ivan Burenin',
  },
}

const es: Content = {
  meta: {
    title: 'Yoggy — yoga, meditación y respiración en Telegram',
    description:
      'Un coach tranquilo de yoga y atención plena en Telegram. Prácticas guiadas, planes semanales, check-ins, progreso y un asistente con IA, sin instalar nada.',
    ogLocale: 'es_ES',
  },
  langLabel: 'Idioma',
  nav: {
    app: 'App',
    ai: 'Asistente IA',
    plans: 'Planes',
    languages: 'Idiomas',
    faq: 'FAQ',
  },
  headerCta: 'Abrir en Telegram',
  hero: {
    eyebrow: 'Yoga y atención plena · Telegram Mini App',
    title: 'Una práctica más tranquila,\n*día a día.*',
    lede:
      'Yoggy es un coach silencioso en Telegram. Yoga, meditación y respiración guiadas, un plan semanal que se adapta a tu vida y un asistente que entiende palabras sencillas.',
    cta: 'Abrir Yoggy en Telegram',
    secondary: 'Ver la app',
    meta: 'Gratis para empezar · Sin instalación · iOS · Android · Desktop',
    floatLabel: 'Check-in de hoy',
    floatTitle: 'Ánimo 4/5 · Energía 4/5',
    floatSub: 'Sueño 7,5 h · Agua 1,6 L',
    streak: '7 días seguidos',
  },
  pillars: {
    label: 'Otro ritmo',
    title: 'Para los días que *realmente* tienes.',
    items: [
      {
        title: 'Práctica, no rendimiento',
        text: 'Indicaciones para el cuerpo que tienes hoy. Si te saltas un día, nada se rompe ni se vuelve rojo.',
      },
      {
        title: 'Un plan que puedes mantener',
        text: 'Sesiones cortas en días ocupados, más largas cuando hay espacio. La semana se adapta contigo.',
      },
      {
        title: 'Cómo te sientes',
        text: 'Ánimo, energía, tensión, sueño y agua. Pequeñas notas que forman una imagen real.',
      },
    ],
  },
  screens: {
    label: 'Dentro de la app',
    title: 'Seis pantallas, *sin ruido.*',
    lead:
      'Todo se abre en el Telegram que ya usas. Mira las partes que tocarás cada día.',
    items: [
      {
        label: 'Hoy',
        title: 'Un comienzo tranquilo',
        text: 'Un saludo, una cita y una práctica que encaja con el día.',
      },
      {
        label: 'Prácticas',
        title: '65 prácticas guiadas',
        text: 'Yoga, meditación, respiración y estiramientos suaves, con filtros por objetivo, nivel y duración.',
      },
      {
        label: 'Planes',
        title: 'Un ritmo para la semana',
        text: 'Elige un plan listo o deja que el asistente cree uno alrededor de tu horario.',
      },
      {
        label: 'Progreso',
        title: 'Progreso tranquilo',
        text: 'Minutos, días de práctica y rachas. Sin clasificación ni presión.',
      },
      {
        label: 'Asistente IA',
        title: 'Pide con palabras sencillas',
        text: '«Crea un plan de 7 días para dormir mejor». Listo en segundos y sincronizado en todas partes.',
      },
      {
        label: 'Diario',
        title: 'Un registro amable',
        text: 'Check-ins y sesiones en un solo lugar, con la imagen completa de cómo te sientes.',
      },
    ],
  },
  ai: {
    label: 'Asistente IA',
    title: 'Pide un plan.\n*Aparece.*',
    body:
      'Describe la semana que quieres — «suave, 15 minutos, antes de dormir, mi zona lumbar es sensible» — y el asistente la crea. Puede mover prácticas, registrar una sesión, guardar un check-in o explicar qué cambió.',
    features: [
      'Crea y edita planes semanales',
      'Registra prácticas y check-ins',
      'Un historial compartido con el bot',
    ],
    prompts: [
      '«Crea un plan de 7 días para dormir»',
      '«Mueve la práctica de hoy al sábado»',
      '«¿Cómo fue mi semana?»',
    ],
    link: 'Probarlo en Telegram',
  },
  plans: {
    label: 'Planes',
    title: 'Una semana que\n*encaja contigo.*',
    body:
      'Empieza con un plan listo para calma, sueño, energía o flexibilidad, o pide a Yoggy que cree uno. Cada día conoce su práctica y duración, y puedes quitar un plan sin perder tu lugar.',
    stats: [
      { value: '21', label: 'planes listos' },
      { value: '5–30', label: 'minutos al día' },
      { value: '6', label: 'idiomas' },
    ],
  },
  progress: {
    label: 'Progreso y check-ins',
    title: 'Progreso,\n*sin presión.*',
    body:
      'Minutos practicados. Días que se sintieron como práctica. Cómo cambiaron el ánimo, la energía y la tensión. Yoggy lleva el registro y no lo convierte en competición.',
    chips: ['Calidad del sueño', 'Tensión', 'Energía', 'Ánimo'],
    link: 'Empezar tu primer check-in',
  },
  languages: {
    label: 'Idiomas',
    title: 'Seis idiomas.\n*Una práctica tranquila.*',
    lead:
      'El bot y la app siguen el idioma de tu Telegram. Puedes cambiarlo en tu perfil.',
  },
  faq: {
    label: 'Preguntas',
    title: 'Antes de\n*empezar.*',
    items: [
      {
        q: '¿Tengo que instalar algo?',
        a: 'No. Yoggy vive en Telegram: abre el bot, pulsa Start y la Mini App se abre con un botón en el chat. Funciona en iOS, Android, escritorio y web.',
      },
      {
        q: '¿Yoggy es gratis?',
        a: 'Sí — puedes empezar y mantener una práctica completa con el bot y la Mini App gratuitos. No hay anuncios dentro de tu práctica.',
      },
      {
        q: '¿Qué puede hacer el asistente IA?',
        a: 'Crea y cambia planes semanales, añade o mueve prácticas, registra sesiones y check-ins, y responde preguntas sobre tu progreso. Pregunta antes de borrar.',
      },
      {
        q: '¿Dónde se guardan mis datos?',
        a: 'En los servidores de Yoggy. Tus check-ins, notas e historial solo los ves tú. Puedes exportar o eliminar tu cuenta desde el perfil.',
      },
      {
        q: '¿Y si me salto un día?',
        a: 'No pasa nada. No hay castigos, ni pantalla de racha rota, ni culpa. El plan simplemente te espera.',
      },
      {
        q: '¿Es consejo médico?',
        a: 'No. Yoggy ofrece prácticas generales de bienestar. Si estás embarazada, lesionada o en tratamiento, consulta a un profesional antes de empezar.',
      },
    ],
  },
  cta: {
    eyebrow: 'Listo cuando tú lo estés',
    title: 'Tu próxima práctica\nestá *a un mensaje.*',
    body:
      'Abre el bot, responde unas preguntas amables y elige tu primera práctica. Tarda alrededor de un minuto.',
    button: 'Abrir @AiYoggyBot',
  },
  footer: {
    tagline: 'Una práctica tranquila en Telegram.',
    telegram: 'Telegram',
    github: 'GitHub',
    author: 'Ivan Burenin',
  },
}

const zh: Content = {
  meta: {
    title: 'Yoggy — 在 Telegram 里练瑜伽、冥想与呼吸',
    description:
      'Telegram 里安静的瑜伽与正念教练：引导练习、每周计划、状态打卡、进度和 AI 助手，无需安装。',
    ogLocale: 'zh_CN',
  },
  langLabel: '语言',
  nav: {
    app: '应用',
    ai: 'AI 助手',
    plans: '计划',
    languages: '语言',
    faq: '常见问题',
  },
  headerCta: '在 Telegram 打开',
  hero: {
    eyebrow: '瑜伽与正念 · Telegram 小程序',
    title: '更安静的练习，\n*一天一天来。*',
    lede:
      'Yoggy 是 Telegram 里安静的教练。引导式瑜伽、冥想和呼吸，随生活调整的每周计划，还有一个听得懂简单话语的助手。',
    cta: '在 Telegram 打开 Yoggy',
    secondary: '看看应用',
    meta: '免费开始 · 无需安装 · iOS · Android · 桌面',
    floatLabel: '今日打卡',
    floatTitle: '心情 4/5 · 精力 4/5',
    floatSub: '睡眠 7.5 小时 · 饮水 1.6 升',
    streak: '连续 7 天',
  },
  pillars: {
    label: '另一种节奏',
    title: '为*真正*拥有的日子而做。',
    items: [
      {
        title: '是练习，不是表现',
        text: '根据今天身体的状况给出引导。漏掉一天也没关系，不会变红，也不会断掉。',
      },
      {
        title: '能坚持的计划',
        text: '忙碌的日子短一点，有空时长一点。一周跟着你调整。',
      },
      {
        title: '记录你的感受',
        text: '心情、精力、紧张、睡眠和饮水。小小的记录，慢慢变成真实的画面。',
      },
    ],
  },
  screens: {
    label: '应用里',
    title: '六个界面，*没有噪音。*',
    lead: '一切都在你已经在用的 Telegram 里打开。看看每天会用到的地方。',
    items: [
      {
        label: '今天',
        title: '安静的开始',
        text: '问候、一句话，以及一个适合今天的练习。',
      },
      {
        label: '练习',
        title: '65 个引导练习',
        text: '瑜伽、冥想、呼吸和轻柔拉伸，可按目标、水平和时长筛选。',
      },
      {
        label: '计划',
        title: '一周的节奏',
        text: '选择现成计划，或让助手围绕你的时间安排来制定。',
      },
      {
        label: '进度',
        title: '安静的进度',
        text: '练习分钟、练习天数和连续天数。没有排行榜，也没有压力。',
      },
      {
        label: 'AI 助手',
        title: '用简单的话说',
        text: '「帮我做一个改善睡眠的 7 天计划。」几秒完成，处处同步。',
      },
      {
        label: '日记',
        title: '一份温柔的记录',
        text: '打卡和练习放在一起，完整看到自己的状态。',
      },
    ],
  },
  ai: {
    label: 'AI 助手',
    title: '说出你的计划。\n*它就会出现。*',
    body:
      '描述你想要的一周——「温和一点，每次 15 分钟，睡前，腰有点敏感」——助手就会安排好。它可以移动练习、记录一次练习、保存打卡，或解释改了什么。',
    features: ['制定和调整每周计划', '记录练习和打卡', '与机器人共享同一段对话'],
    prompts: ['「做一个 7 天睡眠计划」', '「把今天的练习移到周六」', '「我这周怎么样？」'],
    link: '在 Telegram 试试',
  },
  plans: {
    label: '计划',
    title: '一周，\n*刚好适合你。*',
    body:
      '可以从平静、睡眠、精力或柔韧性计划开始，也可以让 Yoggy 为你制定。每一天都有对应的练习和时长，取消计划也不会丢掉进度。',
    stats: [
      { value: '21', label: '现成计划' },
      { value: '5–30', label: '每天分钟' },
      { value: '6', label: '种语言' },
    ],
  },
  progress: {
    label: '进度与打卡',
    title: '进度，\n*没有压力。*',
    body:
      '练习过的分钟。像练习一样的日子。心情、精力和紧张如何变化。Yoggy 只做记录，不把它变成比赛。',
    chips: ['睡眠质量', '紧张', '精力', '心情'],
    link: '开始第一次打卡',
  },
  languages: {
    label: '语言',
    title: '六种语言。\n*一种安静的练习。*',
    lead: '机器人和应用会跟随你的 Telegram 语言。也可以随时在个人资料里更改。',
  },
  faq: {
    label: '问题',
    title: '开始\n*之前。*',
    items: [
      {
        q: '需要安装什么吗？',
        a: '不需要。Yoggy 就在 Telegram 里：打开机器人，点 Start，小程序会通过聊天里的按钮打开。支持 iOS、Android、桌面和网页。',
      },
      {
        q: 'Yoggy 免费吗？',
        a: '是的，可以免费使用机器人和小程序完成完整练习。练习过程中没有广告。',
      },
      {
        q: 'AI 助手能做什么？',
        a: '制定和调整每周计划，添加或移动练习，记录练习和打卡，回答关于进度的问题。删除前会先确认。',
      },
      {
        q: '我的数据存在哪里？',
        a: '在 Yoggy 的服务器上。打卡、笔记和练习历史只有你能看到。可以在个人资料里导出或删除账号。',
      },
      {
        q: '如果漏掉一天呢？',
        a: '什么也不会发生。没有惩罚，没有断掉的连续天数，也没有愧疚感。计划会等你。',
      },
      {
        q: '这是医疗建议吗？',
        a: '不是。Yoggy 提供的是一般的身心练习。如果你怀孕、受伤或正在接受治疗，请先咨询专业人士。',
      },
    ],
  },
  cta: {
    eyebrow: '你准备好了就开始',
    title: '下一次练习，\n*只差一条消息。*',
    body: '打开机器人，回答几个温和的问题，选择第一次练习。大约一分钟。',
    button: '打开 @AiYoggyBot',
  },
  footer: {
    tagline: 'Telegram 里安静的练习。',
    telegram: 'Telegram',
    github: 'GitHub',
    author: 'Ivan Burenin',
  },
}

export const CONTENT: Record<Lang, Content> = { en, ru, de, fr, es, zh }
