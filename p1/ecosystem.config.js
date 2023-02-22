// 

module.exports = {
  apps : [{
    name: 'echo-python',
    cmd: 'hello.py',
    args: 'arg1 arg2',
    autorestart: false,
    watch: true,
    pid: '/path/to/pid/file.pid',
    instances: 4,
    max_memory_restart: '1G',
    env: {
      ENV: 'development',
      PORT : 5555
    },
    env_production : {
      ENV: 'production',
      PORT : 5001
    }
  }, {
    name: 'echo-python-3',
    cmd: 'hello.py',
    interpreter: 'python3'
  }]
};
