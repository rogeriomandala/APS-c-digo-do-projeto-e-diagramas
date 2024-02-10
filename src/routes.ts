import { Router } from 'express';
import ActivityController from './controllers/ActivityController';
import ConfigPageController from './controllers/ConfigPageController';
import AnalyticsController from './controllers/AnalyticsController';
import ActivityParamController from './controllers/ActivityParamController';


const routes = Router();

// Activity Provider
routes.get(`/`, ActivityController.getWelcomeMessage);

// Configuration Page
routes.get(`/configuracao-atividade.html`, ConfigPageController.getConfigurationPage);

// Activity Configuration Parameters
routes.get(`/json-params-atividade`, ActivityParamController.getActivityParams);
routes.post(`/json-params-atividade`, ActivityParamController.setActivityParams);

// analytics
routes.post(`/analytics-atividade/`, AnalyticsController.getAnalyticsActivity);
routes.get(`/lista-analytics-atividade`, AnalyticsController.getAnalytics);
routes.post(`/lista-analytics-atividade`, AnalyticsController.setAnalytics);

// activities
routes.get(`/atividades`, ActivityController.getActivities);
routes.get(`/deploy-atividade/:activityID`, ActivityController.getActivityURL);
routes.post(`/atividade/:activityID`, ActivityController.setActivity);


export default routes;
