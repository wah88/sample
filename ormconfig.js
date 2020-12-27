module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 54321,
  username: 'postgres',
  password: 'p@ssw0rd',
  database: 'postgres',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};