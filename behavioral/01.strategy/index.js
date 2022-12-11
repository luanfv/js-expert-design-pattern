import ContextStrategy from './src/base/contextStrategy.js';
import MongoStrategy from './src/strategies/mongoDBStrategy.js';
import PostgresStrategy from './src/strategies/postgresDBStrategy.js';

const postgresConnectionString = 'postgres://luanfv:12345678@localhost:5432/heroes';
const postgresContext = new ContextStrategy(new PostgresStrategy(postgresConnectionString));
await postgresContext.connect();

const mongoConnectionString = 'mongodb://luanfv:87654321@localhost:27017/heroes';
const mongoContext = new ContextStrategy(new MongoStrategy(mongoConnectionString));
await mongoContext.connect();

const data = [{
    name: 'luan',
    type: 'transaction',
}, {
    name: 'maria',
    type: 'activityLog',
}];

const contextTypes = {
    transaction: postgresContext,
    activityLog: mongoContext,
};

data.forEach(async ({ name, type }) => {
    const context = contextTypes[type];

    await context.create({ name: name + Date.now() });

    console.log(type, context.dbStrategy.constructor.name);
    console.log(await context.read());
});

// await postgresContext.create({ name: data[0].name });
// console.log(await postgresContext.read());

// await mongoContext.create({ name: data[1].name });
// console.log(await mongoContext.read());
