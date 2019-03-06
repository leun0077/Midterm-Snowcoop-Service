module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'mysql',
  database: 'snowcoop',
  entities: ['src/**/**/**.entity{.ts,.js}'],
  migrations: ['database/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'database/migrations',
  },
  synchronize: true,
};
