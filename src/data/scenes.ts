import { Scene } from '../types/game';

export const scenes: Record<string, Scene> = {
  intro: {
    id: 'intro',
    background: 'bus_stop',
    dialogs: [
      { character: null, text: 'Раннее утро в Сатпаеве. Зима, холодно, но солнечно...' },
      { character: null, text: 'Я, Бибарыс, как обычно жду 101-й автобус до Жезказгана.' },
      { character: 'Бибарыс', text: '(Эх, опять эти 40 минут в дороге до Политеха...)', emotion: 'neutral' },
      { character: null, text: 'Автобус подъезжает. Народу много, как всегда.' },
      { character: null, text: 'Захожу внутрь и ищу свободное место...' },
      { character: null, text: 'И тут я замечаю её — девушку с красивыми глазами, сидящую у окна.' },
      { character: null, text: 'Место рядом с ней свободно.' },
    ],
    choices: [
      { text: 'Сесть рядом с ней', nextScene: 'sit_next_to_her', affection: { character: 'nargiz', value: 10 } },
      { text: 'Пройти дальше, найти другое место', nextScene: 'sit_alone', affection: { character: 'nargiz', value: 0 } },
    ]
  },

  sit_next_to_her: {
    id: 'sit_next_to_her',
    background: 'bus',
    dialogs: [
      { character: 'Бибарыс', text: 'Можно присесть?', emotion: 'neutral' },
      { character: 'Наргиз', text: 'Да, конечно.', emotion: 'neutral' },
      { character: null, text: 'Она слегка улыбается и убирает сумку.' },
      { character: null, text: 'Садусь. Автобус трогается.' },
      { character: 'Бибарыс', text: '(Какой приятный парфюм... Стоп, о чём я думаю?!)', emotion: 'blush' },
      { character: null, text: 'Молчание. За окном проплывают степи Казахстана.' },
      { character: 'Бибарыс', text: '(Надо бы что-то сказать...)', emotion: 'nervous' },
    ],
    choices: [
      { text: 'Ты тоже до Жезказгана?', nextScene: 'start_conversation', affection: { character: 'nargiz', value: 5 } },
      { text: 'Сидеть молча, смотреть в телефон', nextScene: 'silent_ride', affection: { character: 'nargiz', value: -5 } },
    ]
  },

  sit_alone: {
    id: 'sit_alone',
    background: 'bus',
    dialogs: [
      { character: null, text: 'Прохожу дальше, нахожу место у выхода.' },
      { character: 'Бибарыс', text: '(Наверное, неловко было бы подсаживаться...)', emotion: 'neutral' },
      { character: null, text: 'Автобус едет. Смотрю в окно...' },
      { character: null, text: 'Но почему-то взгляд возвращается к той девушке.' },
      { character: null, text: 'На полпути автобус останавливается — водитель объявляет техническую паузу.' },
      { character: null, text: 'Все выходят размяться. Она тоже.' },
    ],
    nextScene: 'bus_stop_meeting'
  },

  start_conversation: {
    id: 'start_conversation',
    background: 'bus',
    dialogs: [
      { character: 'Наргиз', text: 'Да, учусь в Медицинском колледже.', emotion: 'neutral' },
      { character: 'Бибарыс', text: 'О, круто! А я в Политехническом.', emotion: 'happy' },
      { character: 'Наргиз', text: 'Программист?', emotion: 'curious' },
      { character: 'Бибарыс', text: 'Типа того. Бибарыс, кстати.', emotion: 'happy' },
      { character: 'Наргиз', text: 'Наргиз.', emotion: 'happy' },
      { character: null, text: 'Она протягивает руку. Рукопожатие мягкое и тёплое.' },
      { character: 'Бибарыс', text: '(У неё красивая улыбка...)', emotion: 'blush' },
      { character: 'Наргиз', text: 'Ты тоже из Сатпаева?', emotion: 'curious' },
      { character: 'Бибарыс', text: 'Ага, с 23-го микрорайона.', emotion: 'happy' },
      { character: 'Наргиз', text: 'Я с 15-го! Оказывается, мы соседи почти.', emotion: 'happy' },
    ],
    nextScene: 'arriving_jezkazgan'
  },

  silent_ride: {
    id: 'silent_ride',
    background: 'bus',
    dialogs: [
      { character: null, text: 'Достаю телефон, скролю ленту...' },
      { character: null, text: 'Но всё равно иногда поглядываю на неё.' },
      { character: null, text: 'Она читает учебник — кажется, анатомия.' },
      { character: 'Бибарыс', text: '(Медик, что ли? Интересно...)', emotion: 'curious' },
      { character: null, text: 'Автобус подъезжает к остановке в Жезказгане.' },
      { character: 'Наргиз', text: 'Извини, можно пройти?', emotion: 'neutral' },
      { character: 'Бибарыс', text: 'Да, конечно!', emotion: 'nervous' },
      { character: null, text: 'Она выходит. Я смотрю ей вслед...' },
      { character: 'Бибарыс', text: '(Эх, надо было заговорить...)', emotion: 'sad' },
    ],
    nextScene: 'next_day'
  },

  bus_stop_meeting: {
    id: 'bus_stop_meeting',
    background: 'steppe',
    dialogs: [
      { character: null, text: 'Стою у автобуса, смотрю на бескрайнюю степь.' },
      { character: 'Наргиз', text: 'Красиво, да?', emotion: 'happy' },
      { character: null, text: 'Она стоит рядом, тоже смотрит на горизонт.' },
      { character: 'Бибарыс', text: 'Ага... Особенно когда солнце такое.', emotion: 'happy' },
      { character: 'Наргиз', text: 'Ты из Сатпаева? Вроде не видела тебя раньше.', emotion: 'curious' },
      { character: 'Бибарыс', text: 'Бибарыс. Учусь в Политехе в Жезказгане.', emotion: 'happy' },
      { character: 'Наргиз', text: 'Наргиз. Медицинский колледж.', emotion: 'happy' },
      { character: null, text: 'Она улыбается. Ветер развевает её волосы.' },
    ],
    choices: [
      { text: 'Будущий врач? Круто!', nextScene: 'compliment_doctor', affection: { character: 'nargiz', value: 10 } },
      { text: 'Я обычно в наушниках, поэтому не замечаю', nextScene: 'joke_headphones', affection: { character: 'nargiz', value: 5 } },
    ]
  },

  compliment_doctor: {
    id: 'compliment_doctor',
    background: 'steppe',
    dialogs: [
      { character: 'Наргиз', text: 'Спасибо! Мечтаю стать хирургом.', emotion: 'happy' },
      { character: 'Бибарыс', text: 'Серьёзно?! Это же сложно!', emotion: 'excited' },
      { character: 'Наргиз', text: 'Да, но мне нравится. А ты что хочешь?', emotion: 'curious' },
      { character: 'Бибарыс', text: 'Разработчиком хочу стать. Игры делать или приложения.', emotion: 'happy' },
      { character: 'Наргиз', text: 'О, тогда сделаешь мне приложение для клиники?', emotion: 'happy' },
      { character: 'Бибарыс', text: 'Договорились!', emotion: 'excited' },
      { character: null, text: 'Мы смеёмся. Водитель сигналит — пора ехать дальше.' },
    ],
    nextScene: 'arriving_jezkazgan'
  },

  joke_headphones: {
    id: 'joke_headphones',
    background: 'steppe',
    dialogs: [
      { character: 'Наргиз', text: '*смеётся* Понятно, интроверт!', emotion: 'happy' },
      { character: 'Бибарыс', text: 'Не совсем, просто музыка помогает проснуться.', emotion: 'happy' },
      { character: 'Наргиз', text: 'Что слушаешь?', emotion: 'curious' },
      { character: 'Бибарыс', text: 'Всё подряд. От казахских до K-pop.', emotion: 'happy' },
      { character: 'Наргиз', text: 'О, я тоже люблю разное! Может, посоветуешь что-то?', emotion: 'excited' },
      { character: null, text: 'Водитель сигналит — пора ехать дальше.' },
    ],
    nextScene: 'arriving_jezkazgan'
  },

  arriving_jezkazgan: {
    id: 'arriving_jezkazgan',
    background: 'jezkazgan',
    dialogs: [
      { character: null, text: 'Автобус въезжает в Жезказган. Знакомые улицы...' },
      { character: 'Наргиз', text: 'Мне тут выходить. Медколледж рядом.', emotion: 'neutral' },
      { character: 'Бибарыс', text: 'А мне до следующей.', emotion: 'neutral' },
      { character: null, text: 'Она встаёт и собирается выходить.' },
      { character: null, text: 'Моё сердце стучит. Надо что-то сказать!' },
    ],
    choices: [
      { text: 'Подожди! Можно твой номер?', nextScene: 'ask_number', affection: { character: 'nargiz', value: 15 } },
      { text: 'Увидимся... наверное?', nextScene: 'shy_goodbye', affection: { character: 'nargiz', value: 5 } },
    ]
  },

  ask_number: {
    id: 'ask_number',
    background: 'jezkazgan',
    dialogs: [
      { character: 'Наргиз', text: '...', emotion: 'blush' },
      { character: null, text: 'Она замирает на секунду, потом улыбается.' },
      { character: 'Наргиз', text: 'Конечно. Записывай.', emotion: 'happy' },
      { character: null, text: 'Дрожащими руками достаю телефон и записываю номер.' },
      { character: 'Бибарыс', text: 'Я напишу!', emotion: 'excited' },
      { character: 'Наргиз', text: 'Буду ждать.', emotion: 'blush' },
      { character: null, text: 'Она выходит. Я смотрю через окно, как она уходит.' },
      { character: 'Бибарыс', text: '(ДА! У меня получилось!)', emotion: 'excited' },
    ],
    nextScene: 'college_day'
  },

  shy_goodbye: {
    id: 'shy_goodbye',
    background: 'jezkazgan',
    dialogs: [
      { character: 'Наргиз', text: 'Да, на 101-м каждый день видимся.', emotion: 'happy' },
      { character: null, text: 'Она машет рукой и выходит.' },
      { character: 'Бибарыс', text: '(Блин, надо было номер попросить...)', emotion: 'sad' },
      { character: 'Бибарыс', text: '(Ладно, завтра точно подойду!)', emotion: 'nervous' },
    ],
    nextScene: 'next_day'
  },

  next_day: {
    id: 'next_day',
    background: 'bus_stop',
    dialogs: [
      { character: null, text: 'Следующее утро. Я стою на остановке раньше обычного.' },
      { character: 'Бибарыс', text: '(Сегодня точно заговорю нормально!)', emotion: 'nervous' },
      { character: null, text: 'Автобус подъезжает. Захожу и ищу её глазами...' },
      { character: null, text: 'Вот она! И место рядом свободно!' },
      { character: 'Бибарыс', text: 'Привет! Можно?', emotion: 'happy' },
      { character: 'Наргиз', text: 'О, привет! Садись!', emotion: 'happy' },
      { character: null, text: 'Она рада меня видеть. Сердце подпрыгивает.' },
    ],
    choices: [
      { text: 'Вчера не успел спросить номер...', nextScene: 'ask_number_day2', affection: { character: 'nargiz', value: 10 } },
      { text: 'Как учёба в медколледже?', nextScene: 'college_talk', affection: { character: 'nargiz', value: 10 } },
    ]
  },

  ask_number_day2: {
    id: 'ask_number_day2',
    background: 'bus',
    dialogs: [
      { character: 'Наргиз', text: '*улыбается* Я ждала, что спросишь.', emotion: 'blush' },
      { character: 'Бибарыс', text: '!', emotion: 'blush' },
      { character: null, text: 'Она диктует номер. Руки всё ещё дрожат, но я записываю.' },
      { character: 'Наргиз', text: 'Давай вечером созвонимся?', emotion: 'happy' },
      { character: 'Бибарыс', text: 'Обязательно!', emotion: 'excited' },
    ],
    nextScene: 'college_day'
  },

  college_talk: {
    id: 'college_talk',
    background: 'bus',
    dialogs: [
      { character: 'Наргиз', text: 'Сложно, но интересно! Сейчас проходим анатомию.', emotion: 'happy' },
      { character: 'Бибарыс', text: 'Это где кости и мышцы изучают?', emotion: 'curious' },
      { character: 'Наргиз', text: 'Ага! Хочешь, расскажу интересные факты?', emotion: 'excited' },
      { character: 'Бибарыс', text: 'Давай!', emotion: 'happy' },
      { character: null, text: 'Она с увлечением рассказывает. Я слушаю, не отрываясь.' },
      { character: null, text: 'Время пролетает незаметно...' },
    ],
    nextScene: 'arriving_jezkazgan'
  },

  college_day: {
    id: 'college_day',
    background: 'polytechnic',
    dialogs: [
      { character: null, text: 'Политехнический колледж Жезказгана. Мой второй дом.' },
      { character: null, text: 'Но сегодня я думаю только о ней...' },
      { character: null, text: 'Друг Ариф замечает мой рассеянный взгляд.' },
      { character: 'Ариф', text: 'Эй, Бибарыс! Ты чего такой довольный?', emotion: 'curious' },
      { character: 'Бибарыс', text: 'Да так... познакомился с кое-кем.', emotion: 'blush' },
      { character: 'Ариф', text: 'О-о-о! Давай рассказывай!', emotion: 'excited' },
    ],
    choices: [
      { text: 'Рассказать про Наргиз', nextScene: 'tell_friend', affection: { character: 'nargiz', value: 0 } },
      { text: 'Потом, сейчас пара начинается', nextScene: 'focus_study', affection: { character: 'nargiz', value: 0 } },
    ]
  },

  tell_friend: {
    id: 'tell_friend',
    background: 'polytechnic',
    dialogs: [
      { character: 'Бибарыс', text: 'В автобусе познакомились. Она в Медколледже учится.', emotion: 'happy' },
      { character: 'Ариф', text: 'Медик? Серьёзно? Везёт!', emotion: 'excited' },
      { character: 'Бибарыс', text: 'Ага, Наргиз её зовут. Красивое имя, да?', emotion: 'blush' },
      { character: 'Ариф', text: 'Бро, ты уже влюбился по уши!', emotion: 'happy' },
      { character: 'Бибарыс', text: 'Да ладно тебе...', emotion: 'blush' },
      { character: null, text: 'Но в душе понимаю — Асхат прав.' },
    ],
    nextScene: 'evening_choice'
  },

  focus_study: {
    id: 'focus_study',
    background: 'polytechnic',
    dialogs: [
      { character: 'Ариф', text: 'Ладно-ладно, но потом расскажешь!', emotion: 'curious' },
      { character: null, text: 'Пара по программированию. Пишем код...' },
      { character: null, text: 'Но мысли всё равно возвращаются к ней.' },
      { character: 'Бибарыс', text: '(Интересно, чем она сейчас занимается?)', emotion: 'curious' },
      { character: null, text: 'Телефон вибрирует. Сообщение от неизвестного номера.' },
      { character: null, text: '"Привет! Это Наргиз. Как пары? 😊"' },
      { character: 'Бибарыс', text: '(!!! Она написала первой!)', emotion: 'excited' },
    ],
    nextScene: 'evening_choice'
  },

  evening_choice: {
    id: 'evening_choice',
    background: 'satpaev_evening',
    dialogs: [
      { character: null, text: 'Вечер. Я вернулся в Сатпаев на 101-м.' },
      { character: null, text: 'Наргиз вышла раньше — её остановка ближе.' },
      { character: null, text: 'Мы переписываемся весь вечер.' },
      { character: null, text: 'Она присылает фото заката из своего окна.' },
      { character: 'Наргиз', text: 'Смотри, какой красивый!', emotion: 'happy' },
      { character: 'Бибарыс', text: '(Хочу увидеть этот закат вместе с ней...)', emotion: 'blush' },
    ],
    choices: [
      { text: 'Предложить встретиться завтра после пар', nextScene: 'ask_date', affection: { character: 'nargiz', value: 20 } },
      { text: 'Продолжить переписку', nextScene: 'keep_texting', affection: { character: 'nargiz', value: 10 } },
    ]
  },

  ask_date: {
    id: 'ask_date',
    background: 'satpaev_evening',
    dialogs: [
      { character: 'Бибарыс', text: '(Набираю сообщение... стираю... опять набираю...)', emotion: 'nervous' },
      { character: null, text: '"Слушай, может завтра после пар погуляем в Сатпаеве?"' },
      { character: null, text: 'Отправлено. Сердце замирает.' },
      { character: null, text: '...' },
      { character: null, text: '"Печатает..."' },
      { character: 'Наргиз', text: 'Я думала, ты никогда не спросишь! Давай! 💕', emotion: 'excited' },
      { character: 'Бибарыс', text: '(!!!)', emotion: 'excited' },
    ],
    nextScene: 'ending_romance'
  },

  keep_texting: {
    id: 'keep_texting',
    background: 'satpaev_evening',
    dialogs: [
      { character: null, text: 'Мы переписываемся до поздней ночи.' },
      { character: null, text: 'Узнаю, что она любит читать, слушать Димаша...' },
      { character: null, text: '...и мечтает однажды уехать учиться в Алматы.' },
      { character: 'Наргиз', text: 'Спокойной ночи, Бибарыс 🌙', emotion: 'happy' },
      { character: 'Бибарыс', text: 'Спокойной ночи, Наргиз ✨', emotion: 'happy' },
      { character: null, text: 'Засыпаю с улыбкой на лице.' },
      { character: null, text: 'Впереди ещё много поездок на 101-м...' },
    ],
    ending: 'Начало чего-то прекрасного 💫'
  },

  ending_romance: {
    id: 'ending_romance',
    background: 'satpaev_park',
    dialogs: [
      { character: null, text: 'На следующий день. Парк в Сатпаеве.' },
      { character: null, text: 'Она уже ждёт меня у входа.' },
      { character: 'Наргиз', text: 'Привет!', emotion: 'excited' },
      { character: 'Бибарыс', text: 'Привет! Ты... красиво выглядишь.', emotion: 'blush' },
      { character: 'Наргиз', text: '*краснеет* Спасибо...', emotion: 'blush' },
      { character: null, text: 'Мы гуляем по парку, разговариваем обо всём.' },
      { character: null, text: 'Смеёмся, спорим, мечтаем...' },
      { character: null, text: 'Солнце садится, окрашивая небо в розовый.' },
      { character: 'Наргиз', text: 'Знаешь, я рада, что ты сел рядом в том автобусе.', emotion: 'happy' },
      { character: 'Бибарыс', text: 'Я тоже. Очень рад.', emotion: 'happy' },
      { character: null, text: 'Это только начало нашей истории...' },
      { character: null, text: 'Истории, которая началась в автобусе 101.' },
    ],
    ending: 'Любовь на маршруте 101 💕'
  }
};
