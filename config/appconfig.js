module.exports = {
    logger: require('tracer').colorConsole({
      format: [
        '{{timestamp}} <{{title}}> {{message}} (in {{file}}:{{line}})', //default format
        {
          error: '{{timestamp}} <{{title}}> {{message}} (in {{file}}:{{line}})' // error format
        }
      ],
      dateformat: 'HH:MM:ss.L',
      preprocess: function(data) {
        data.title = data.title.toUpperCase()
      },
      level: process.env.LOG_LEVEL || 'trace'
    }),
  }

  var openWeather = {
    host: 'api.openweathermap.org',
    port: 80,
    path: '',
    method: 'GET',
    key: ''
  }
  