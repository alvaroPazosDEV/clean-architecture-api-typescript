import express, { Application } from 'express';
import cors from 'cors';
import { apiRouter } from './express/routes';
import { errorHandler } from './express/middlewares/errorHandler';
import { DatabaseService } from '../application/contracts/DatabaseService';
import { NotificationService } from '../application/contracts/NotificationService';
import { InMemoryDatabaseService } from './inMemoryDatabase/InMemoryDatabaseService';
import { EmailNotificationService } from './externalServices/EmailNotificationService';

const app: Application = express();
const port: number = 3000;

export interface AppDependencies {
  databaseService: DatabaseService;
  notificationService: NotificationService;
}

const dependencies: AppDependencies = {
  databaseService: new InMemoryDatabaseService(),
  notificationService: new EmailNotificationService(),
};

dependencies.databaseService.connect().then(
  (): void => {
    app.use(express.json());
    app.use(cors());
    app.use('/api', apiRouter(dependencies));
    app.use(errorHandler);
    app.listen(port, (): void => console.log(`Running on port: ${port}`));
  },
  (err): void => console.log('Db is not ready')
);
