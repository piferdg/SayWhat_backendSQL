
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('countries').del()
    .then(function () {
      // Inserts seed entries
      return knex('countries').insert([
        {
          countryName: 'Spain',
          currency: 'Euro',
          primary_language: 'Spanish',
          siteOne: 'Madrid',
          siteTwo: '',
          siteThree: '',
          wiki_url: 'https://en.wikipedia.org/wiki/Spain',
        },
        {
          countryName: 'France',
          currency: 'Euro',
          primary_language: 'French',
          siteOne: 'Notre-Dame',
          siteTwo: '',
          siteThree: '',
          wiki_url: 'https://en.wikipedia.org/wiki/France'
        },
        {
          countryName: 'Russia',
          currency: 'Ruble',
          primary_language: 'Russian',
          siteOne: 'Red Square',
          siteTwo: '',
          siteThree: '',
          wiki_url: 'https://en.wikipedia.org/wiki/Russia'
        },
        {
          countryName: 'China',
          currency: 'Renminbi',
          primary_language: 'Chinese Simplified',
          siteOne: 'Great Wall of China',
          siteTwo: '',
          siteThree: '',
          wiki_url: 'https://en.wikipedia.org/wiki/China'
        },
        {
          countryName: 'Egypt',
          currency: 'Egyptian pound',
          primary_language: 'Arabic',
          siteOne: 'Great Pyramids of Giza',
          siteTwo: '',
          siteThree: '',
          wiki_url: 'https://en.wikipedia.org/wiki/Egypt'
        },
        {
          countryName: 'Turkey',
          currency: 'Lira',
          primary_language: 'Turkish',
          siteOne: 'Istanbul',
          siteTwo: '',
          siteThree: '',
          wiki_url: 'https://en.wikipedia.org/wiki/Turkey'
        },
        {
          countryName: 'Greece',
          currency: 'Euro',
          primary_language: 'Greek',
          siteOne: 'Athens',
          siteTwo: '',
          siteThree: '',
          wiki_url: 'https://en.wikipedia.org/wiki/Greece'
        },
        {
          countryName: 'Japan',
          currency: 'Yen',
          primary_language: 'Japanese',
          siteOne: 'Tokyo',
          siteTwo: '',
          siteThree: '',
          wiki_url: 'https://en.wikipedia.org/wiki/Japan'
        },
        {
          countryName: 'Morocco',
          currency: 'Moroccan dirham',
          primary_language: 'Arabic',
          siteOne: 'Casablanca',
          siteTwo: '',
          siteThree: '',
          wiki_url: 'https://en.wikipedia.org/wiki/Morocco'
        },
        {
          countryName: 'Portugal',
          currency: 'Euro',
          primary_language: 'Portuguese',
          siteOne: 'Porto',
          siteTwo: '',
          siteThree: '',
          wiki_url: 'https://en.wikipedia.org/wiki/Portugal'
        },
        {
          countryName: 'Mexico',
          currency: 'Peso',
          primary_language: 'Spanish',
          siteOne: 'Chichen Itza',
          siteTwo: '',
          siteThree: '',
          wiki_url: 'https://en.wikipedia.org/wiki/Mexico'
        },
        {
          countryName: 'Belize',
          currency: 'Belize dollar',
          primary_language: 'Spanish',
          siteOne: 'Ambergris Caye',
          siteTwo: '',
          siteThree: '',
          wiki_url: 'https://en.wikipedia.org/wiki/Belize'
        },
        {
          countryName: 'Brazil',
          currency: 'Real',
          primary_language: 'Portuguese',
          siteOne: 'Christ the Redeemer',
          siteTwo: '',
          siteThree: '',
          wiki_url: 'https://en.wikipedia.org/wiki/Brazil'
        },
        {
          countryName: 'Netherlands',
          currency: 'Euro',
          primary_language: 'Dutch',
          siteOne: 'Van Gogh Museum',
          siteTwo: '',
          siteThree: '',
          wiki_url: 'https://en.wikipedia.org/wiki/Netherlands'
        },
        {
          countryName: 'Vietnam',
          currency: 'Dong',
          primary_language: 'Vietnamese',
          siteOne: 'Ha Long Bay',
          siteTwo: '',
          siteThree: '',
          wiki_url: 'https://en.wikipedia.org/wiki/Vietnam'
        },
        {
          countryName: 'India',
          currency: 'Indian rupee',
          primary_language: 'Hindi',
          siteOne: 'Taj Mahal',
          siteTwo: '',
          siteThree: '',
          wiki_url: 'https://en.wikipedia.org/wiki/India'
        },
        {
          countryName: 'Germany',
          currency: 'Euro',
          primary_language: 'German',
          siteOne: 'Neuschwanstein Castle',
          siteTwo: '',
          siteThree: '',
          wiki_url: 'https://en.wikipedia.org/wiki/Germany'
        },
        {
          countryName: 'Italy',
          currency: 'Euro',
          primary_language: 'Italian',
          siteOne: 'Colosseum',
          siteTwo: '',
          siteThree: '',
          wiki_url: 'https://en.wikipedia.org/wiki/Italy'
        },
      ]);
    });
};
