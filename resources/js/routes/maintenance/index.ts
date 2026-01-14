import surveys from './surveys'
import users from './users'

const maintenance = {
    surveys: Object.assign(surveys, surveys),
    users: Object.assign(users, users),
}

export default maintenance