import ecoleEric from './2020-10-02-eric-ecole.pdf'

const peoples = {
  eric: {
    emoji: "🧔🏻",
    lastname: "Daspet",
    firstname: "Eric",
    birthday: "17/06/1979",
    placeofbirth: "Annecy",
    address: "1 rue Julien Baudrand",
    zipcode: "69500",
    city: "Bron",
    reasons: ['achats', 'sante', 'sport_animaux', 'enfants'],
  },
  sandrine: {
    emoji: "👩🏻",
    lastname: "Sandrine",
    firstname: "Rutigliano - Daspet",
    birthday: "13/01/1979",
    placeofbirth: "Cluses",
    address: "1 rue Julien Baudrand",
    zipcode: "69500",
    city: "Bron",
    reasons: ['travail', 'achats', 'sante', 'sport_animaux', 'enfants'],
  },
  matt: {
    emoji: "👦🏻",
    lastname: "Matt",
    firstname: "Daspet",
    birthday: "29/04/2010",
    placeofbirth: "Givors",
    address: "1 rue Julien Baudrand",
    zipcode: "69500",
    city: "Bron",
    reasons: ['achats', 'sante', 'sport_animaux', 'enfants'],
  }
}
const times = {
  "🔄": undefined,
  "⏪": -30,
  "◀️": -10,
  "⏰": 0,
  "▶️": +10,
  "📝": "",
}
const reasons = {
  travail: "🏭",
  achats: "🛒",
  sante: "🌡",
  famille: "👨‍👩‍👦",
  //handicap: "🧑‍🦽",
  sport_animaux: "🏃",
  //convocation: "👮",
  //missions: "🏛",
  enfants: "🏫",
}
const attachments = [
  { profile: 'eric', reason: 'enfants', file: ecoleEric },
]

export { peoples, reasons, attachments, times }
