module.exports = {
  
    "development": {
      "username": "root",
      "password": 'Cadiz3052!!',
      "database": "user_db",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "test": {
      "username": "root",
      "password": 'Cadiz3052!!',
      "database": "user_db",
      "host": "127.0.0.1",
      "dialect": "mysql",
      "logging": false
    },
    "production": {
      "use_env_variable": "JAWSDB_URL",
      "dialect": "mysql"
    }
  }