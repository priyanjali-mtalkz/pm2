// module.exports = 
// {
//     apps: [
//         {
//             name : "covidData",
//             script : "./getcovid19Data.py",
//             watch : true,
//             "ignore_watch" : ["node_modules","public"],
//             "instances" : 1,
//             "exec_mode" : "fork",
//             "env" : {
//                 "DB_NAME" : "Covid19",

//             }

//         }
//     ]
// }

// 

module.exports = {
    apps : [{
      name: 'echo-python',
      cmd: 'getcovid19Data.py',
      args: 'arg1 arg2',
      autorestart: false,
      watch: true,
      pid: '/path/to/pid/file.pid',
      instances: 4,
      max_memory_restart: '1G',
      env: {
        ENV: 'development',
        PORT : 8008
      },
      env_production : {
        ENV: 'production',
        PORT : 8888
      }
    }, {
      name: 'echo-python-3',
      cmd: 'getcovid19Data.py',
      interpreter: 'python3'
    }]
  };
  