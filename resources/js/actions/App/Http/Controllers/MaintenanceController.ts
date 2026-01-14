import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MaintenanceController::surveysList
* @see app/Http/Controllers/MaintenanceController.php:10
* @route '/maintenance/surveys'
*/
export const surveysList = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: surveysList.url(options),
    method: 'get',
})

surveysList.definition = {
    methods: ["get","head"],
    url: '/maintenance/surveys',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MaintenanceController::surveysList
* @see app/Http/Controllers/MaintenanceController.php:10
* @route '/maintenance/surveys'
*/
surveysList.url = (options?: RouteQueryOptions) => {
    return surveysList.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MaintenanceController::surveysList
* @see app/Http/Controllers/MaintenanceController.php:10
* @route '/maintenance/surveys'
*/
surveysList.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: surveysList.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MaintenanceController::surveysList
* @see app/Http/Controllers/MaintenanceController.php:10
* @route '/maintenance/surveys'
*/
surveysList.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: surveysList.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MaintenanceController::surveysList
* @see app/Http/Controllers/MaintenanceController.php:10
* @route '/maintenance/surveys'
*/
const surveysListForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: surveysList.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MaintenanceController::surveysList
* @see app/Http/Controllers/MaintenanceController.php:10
* @route '/maintenance/surveys'
*/
surveysListForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: surveysList.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MaintenanceController::surveysList
* @see app/Http/Controllers/MaintenanceController.php:10
* @route '/maintenance/surveys'
*/
surveysListForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: surveysList.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

surveysList.form = surveysListForm

/**
* @see \App\Http\Controllers\MaintenanceController::surveysCreate
* @see app/Http/Controllers/MaintenanceController.php:15
* @route '/maintenance/surveys/create'
*/
export const surveysCreate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: surveysCreate.url(options),
    method: 'get',
})

surveysCreate.definition = {
    methods: ["get","head"],
    url: '/maintenance/surveys/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MaintenanceController::surveysCreate
* @see app/Http/Controllers/MaintenanceController.php:15
* @route '/maintenance/surveys/create'
*/
surveysCreate.url = (options?: RouteQueryOptions) => {
    return surveysCreate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MaintenanceController::surveysCreate
* @see app/Http/Controllers/MaintenanceController.php:15
* @route '/maintenance/surveys/create'
*/
surveysCreate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: surveysCreate.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MaintenanceController::surveysCreate
* @see app/Http/Controllers/MaintenanceController.php:15
* @route '/maintenance/surveys/create'
*/
surveysCreate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: surveysCreate.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MaintenanceController::surveysCreate
* @see app/Http/Controllers/MaintenanceController.php:15
* @route '/maintenance/surveys/create'
*/
const surveysCreateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: surveysCreate.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MaintenanceController::surveysCreate
* @see app/Http/Controllers/MaintenanceController.php:15
* @route '/maintenance/surveys/create'
*/
surveysCreateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: surveysCreate.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MaintenanceController::surveysCreate
* @see app/Http/Controllers/MaintenanceController.php:15
* @route '/maintenance/surveys/create'
*/
surveysCreateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: surveysCreate.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

surveysCreate.form = surveysCreateForm

/**
* @see \App\Http\Controllers\MaintenanceController::surveysRelease
* @see app/Http/Controllers/MaintenanceController.php:20
* @route '/maintenance/surveys/rilis'
*/
export const surveysRelease = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: surveysRelease.url(options),
    method: 'get',
})

surveysRelease.definition = {
    methods: ["get","head"],
    url: '/maintenance/surveys/rilis',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MaintenanceController::surveysRelease
* @see app/Http/Controllers/MaintenanceController.php:20
* @route '/maintenance/surveys/rilis'
*/
surveysRelease.url = (options?: RouteQueryOptions) => {
    return surveysRelease.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MaintenanceController::surveysRelease
* @see app/Http/Controllers/MaintenanceController.php:20
* @route '/maintenance/surveys/rilis'
*/
surveysRelease.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: surveysRelease.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MaintenanceController::surveysRelease
* @see app/Http/Controllers/MaintenanceController.php:20
* @route '/maintenance/surveys/rilis'
*/
surveysRelease.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: surveysRelease.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MaintenanceController::surveysRelease
* @see app/Http/Controllers/MaintenanceController.php:20
* @route '/maintenance/surveys/rilis'
*/
const surveysReleaseForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: surveysRelease.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MaintenanceController::surveysRelease
* @see app/Http/Controllers/MaintenanceController.php:20
* @route '/maintenance/surveys/rilis'
*/
surveysReleaseForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: surveysRelease.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MaintenanceController::surveysRelease
* @see app/Http/Controllers/MaintenanceController.php:20
* @route '/maintenance/surveys/rilis'
*/
surveysReleaseForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: surveysRelease.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

surveysRelease.form = surveysReleaseForm

/**
* @see \App\Http\Controllers\MaintenanceController::usersList
* @see app/Http/Controllers/MaintenanceController.php:25
* @route '/maintenance/users/list'
*/
export const usersList = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: usersList.url(options),
    method: 'get',
})

usersList.definition = {
    methods: ["get","head"],
    url: '/maintenance/users/list',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MaintenanceController::usersList
* @see app/Http/Controllers/MaintenanceController.php:25
* @route '/maintenance/users/list'
*/
usersList.url = (options?: RouteQueryOptions) => {
    return usersList.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MaintenanceController::usersList
* @see app/Http/Controllers/MaintenanceController.php:25
* @route '/maintenance/users/list'
*/
usersList.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: usersList.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MaintenanceController::usersList
* @see app/Http/Controllers/MaintenanceController.php:25
* @route '/maintenance/users/list'
*/
usersList.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: usersList.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MaintenanceController::usersList
* @see app/Http/Controllers/MaintenanceController.php:25
* @route '/maintenance/users/list'
*/
const usersListForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: usersList.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MaintenanceController::usersList
* @see app/Http/Controllers/MaintenanceController.php:25
* @route '/maintenance/users/list'
*/
usersListForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: usersList.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MaintenanceController::usersList
* @see app/Http/Controllers/MaintenanceController.php:25
* @route '/maintenance/users/list'
*/
usersListForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: usersList.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

usersList.form = usersListForm

const MaintenanceController = { surveysList, surveysCreate, surveysRelease, usersList }

export default MaintenanceController