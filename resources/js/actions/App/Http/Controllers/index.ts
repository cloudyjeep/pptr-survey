import SurveyController from './SurveyController'
import MaintenanceController from './MaintenanceController'
import Api from './Api'
import Settings from './Settings'

const Controllers = {
    SurveyController: Object.assign(SurveyController, SurveyController),
    MaintenanceController: Object.assign(MaintenanceController, MaintenanceController),
    Api: Object.assign(Api, Api),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers