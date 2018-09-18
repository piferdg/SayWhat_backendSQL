
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('languages').del()
    .then(function () {
      // Inserts seed entries
      return knex('languages').insert([
        {
          languageName: 'Afrikaans',
          languageCode: 'af'
        },
        {
          languageName: 'Albanian',
          languageCode: 'sq'
        },
        {
          languageName: 'Arabic',
          languageCode: 'ar'
        },
        {
          languageName: 'Azerbaijani',
          languageCode: 'az'
        },
        {
          languageName: 'Basque',
          languageCode: 'eu'
        },
        {
          languageName: 'Bengali',
          languageCode: 'bn'
        },
        {
          languageName: 'Belarusian',
          languageCode: 'be'
        },
        {
          languageName: 'Bulgarian',
          languageCode: 'bg'
        },
        {
          languageName: 'Catalan',
          languageCode: 'ca'
        },
        {
          languageName: 'Chinese Simplified',
          languageCode: 'zh-CN'
        },
        {
          languageName: 'Chinese Traditional',
          languageCode: 'zh-TW'
        },
        {
          languageName: 'Croatian',
          languageCode: 'hr'
        },
        {
          languageName: 'Czech',
          languageCode: 'cs'
        },
        {
          languageName: 'Danish',
          languageCode: 'da'
        },
        {
          languageName: 'Dutch',
          languageCode: 'nl'
        },
        {
          languageName: 'English',
          languageCode: 'en'
        },
        {
          languageName: 'Esperanto',
          languageCode: 'eo'
        },
        {
          languageName: 'Estonian',
          languageCode: 'et'
        },
        {
          languageName: 'Filipino',
          languageCode: 'tl'
        },
        {
          languageName: 'Finnish',
          languageCode: 'fi'
        },
        {
          languageName: 'French',
          languageCode: 'fr'
        },
        {
          languageName: 'Galician',
          languageCode: 'gl'
        },
        {
          languageName: 'Georgian',
          languageCode: 'ka'
        },
        {
          languageName: 'German',
          languageCode: 'de'
        },
        {
          languageName: 'Greek',
          languageCode: 'el'
        },
        {
          languageName: 'Gujarati',
          languageCode: 'gu'
        },
        {
          languageName: 'Haitian Creole',
          languageCode: 'ht'
        },
        {
          languageName: 'Hebrew',
          languageCode: 'iw'
        },
        {
          languageName: 'Hindi',
          languageCode: 'hi'
        },
        {
          languageName: 'Hungarian',
          languageCode: 'hu'
        },
        {
          languageName: 'Icelandic',
          languageCode: 'is'
        },
        {
          languageName: 'Indonesian',
          languageCode: 'id'
        },
        {
          languageName: 'Irish',
          languageCode: 'ga'
        },
        {
          languageName: 'Italian',
          languageCode: 'it'
        },
        {
          languageName: 'Japanese',
          languageCode: 'ja'
        },
        {
          languageName: 'Kannada',
          languageCode: 'kn'
        },
        {
          languageName: 'Korean',
          languageCode: 'ko'
        },
        {
          languageName: 'Latin',
          languageCode: 'la'
        },
        {
          languageName: 'Latvian',
          languageCode: 'lv'
        },
        {
          languageName: 'Lithuanian',
          languageCode: 'lt'
        },
        {
          languageName: 'Macedonian',
          languageCode: 'mk'
        },
        {
          languageName: 'Malay',
          languageCode: 'ms'
        },
        {
          languageName: 'Maltese',
          languageCode: 'mt'
        },
        {
          languageName: 'Norwegian',
          languageCode: 'no'
        },
        {
          languageName: 'Persian',
          languageCode: 'fa'
        },
        {
          languageName: 'Polish',
          languageCode: 'pl'
        },
        {
          languageName: 'Portuguese',
          languageCode: 'pt'
        },
        {
          languageName: 'Romanian',
          languageCode: 'ro'
        },
        {
          languageName: 'Russian',
          languageCode: 'ru'
        },
        {
          languageName: 'Serbian',
          languageCode: 'sr'
        },
        {
          languageName: 'Slovak',
          languageCode: 'sk'
        },
        {
          languageName: 'Slovenian',
          languageCode: 'sl'
        },
        {
          languageName: 'Spanish',
          languageCode: 'es'
        },
        {
          languageName: 'Swahili',
          languageCode: 'sw'
        },
        {
          languageName: 'Swedish',
          languageCode: 'sv'
        },
        {
          languageName: 'Tamil',
          languageCode: 'ta'
        },
        {
          languageName: 'Telugu',
          languageCode: 'te'
        },
        {
          languageName: 'Thai',
          languageCode: 'th'
        },
        {
          languageName: 'Turkish',
          languageCode: 'tr'
        },
        {
          languageName: 'Ukrainian',
          languageCode: 'uk'
        },
        {
          languageName: 'Urdu',
          languageCode: 'ur'
        },
        {
          languageName: 'Vietnamese',
          languageCode: 'vi'
        },
        {
          languageName: 'Welsh',
          languageCode: 'cy'
        },
        {
          languageName: 'Yiddish',
          languageCode: 'yi'
        }
      ]);
    });
};
