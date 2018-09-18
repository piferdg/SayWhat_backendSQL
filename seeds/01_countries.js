
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('countries').del()
    .then(function () {
      // Inserts seed entries
      return knex('countries').insert([
        {
          countryName: 'Spain',
          currency: 'Euro',
          attractionOne: 'The Alhambra',
          attractionTwo: 'Sagrada Familia',
          attractionThree: 'Mezquita of Cordoba'
        },
        {
          countryName: 'France',
          currency: 'Euro',
          attractionOne: 'Eiffel Tower',
          attractionTwo: 'Louvre',
          attractionThree: 'Notre-Dame de Paris'
        },
        {
          countryName: 'Russia',
          currency: 'Ruble',
          attractionOne: 'Moscow Kremlin',
          attractionTwo: 'Red Square',
          attractionThree: 'Hermitage Museum'
        },
        {
          countryName: 'China',
          currency: 'Renminbi',
          attractionOne: 'Forbidden City',
          attractionTwo: 'Great Wall of China',
          attractionThree: 'Terracotta Army'
        },
        {
          countryName: 'Egypt',
          currency: 'Egyptian pound',
          attractionOne: 'Pyramids of Giza',
          attractionTwo: '',
          attractionThree: ''
        },
        {
          countryName: 'Turkey',
          currency: 'Lira',
          attractionOne: 'Sultan Ahmed Mosque',
          attractionTwo: 'Hagia Sophia',
          attractionThree: ''
        },
        {
          countryName: 'Greece',
          currency: 'Euro',
          attractionOne: 'Acropolis of Athens',
          attractionTwo: '',
          attractionThree: ''
        },
        {
          countryName: 'Japan',
          currency: 'Yen',
          attractionOne: 'Mount Fuji',
          attractionTwo: '',
          attractionThree: ''
        },
        {
          countryName: 'Morocco',
          currency: 'Moroccan dirham',
          attractionOne: 'Casablanca',
          attractionTwo: '',
          attractionThree: ''
        },
        {
          countryName: 'Portugal',
          currency: 'Euro',
          attractionOne: 'Porto',
          attractionTwo: '',
          attractionThree: ''
        },
        {
          countryName: 'Mexico',
          currency: 'Peso',
          attractionOne: 'Tulum',
          attractionTwo: '',
          attractionThree: ''
        },
        {
          countryName: 'Belize',
          currency: 'Belize dollar',
          attractionOne: '',
          attractionTwo: '',
          attractionThree: ''
        },
        {
          countryName: 'Brazil',
          currency: 'Real',
          attractionOne: 'Ambergris Caye',
          attractionTwo: 'Caracol',
          attractionThree: ''
        },
        {
          countryName: 'Netherlands',
          currency: 'Euro',
          attractionOne: 'Amsterdam',
          attractionTwo: 'Van Gogh House',
          attractionThree: ''
        },
        {
          countryName: 'Vietnam',
          currency: 'Dong',
          attractionOne: 'Halong Bay',
          attractionTwo: '',
          attractionThree: ''
        },
        {
          countryName: 'India',
          currency: 'Indian rupee',
          attractionOne: 'Taj Mahal',
          attractionTwo: 'Mahabodhi Temple',
          attractionThree: 'Mysore Palace'
        },
        {
          countryName: 'Germany',
          currency: 'Euro',
          attractionOne: 'Cologne',
          attractionTwo: 'Dresden',
          attractionThree: ''
        },
        {
          countryName: 'Italy',
          currency: 'Euro',
          attractionOne: 'The Colosseum',
          attractionTwo: 'Florence Cathedral',
          attractionThree: ''
        },
      ]);
    });
};
