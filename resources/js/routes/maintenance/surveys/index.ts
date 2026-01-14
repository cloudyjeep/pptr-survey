import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\MaintenanceController::index
* @see app/Http/Controllers/MaintenanceController.php:10
* @route '/maintenance/surveys'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/maintenance/surveys',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MaintenanceController::index
* @see app/Http/Controllers/MaintenanceController.php:10
* @route '/maintenance/surveys'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MaintenanceController::index
* @see app/Http/Controllers/MaintenanceController.php:10
* @route '/maintenance/surveys'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MaintenanceController::index
* @see app/Http/Controllers/MaintenanceController.php:10
* @route '/maintenance/surveys'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MaintenanceController::index
* @see app/Http/Controllers/MaintenanceController.php:10
* @route '/maintenance/surveys'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MaintenanceController::index
* @see app/Http/Controllers/MaintenanceController.php:10
* @route '/maintenance/surveys'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MaintenanceController::index
* @see app/Http/Controllers/MaintenanceController.php:10
* @route '/maintenance/surveys'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\MaintenanceController::create
* @see app/Http/Controllers/MaintenanceController.php:15
* @route '/maintenance/surveys/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/maintenance/surveys/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MaintenanceController::create
* @see app/Http/Controllers/MaintenanceController.php:15
* @route '/maintenance/surveys/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MaintenanceController::create
* @see app/Http/Controllers/MaintenanceController.php:15
* @route '/maintenance/surveys/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MaintenanceController::create
* @see app/Http/Controllers/MaintenanceController.php:15
* @route '/maintenance/surveys/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MaintenanceController::create
* @see app/Http/Controllers/MaintenanceController.php:15
* @route '/maintenance/surveys/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MaintenanceController::create
* @see app/Http/Controllers/MaintenanceController.php:15
* @route '/maintenance/surveys/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MaintenanceController::create
* @see app/Http/Controllers/MaintenanceController.php:15
* @route '/maintenance/surveys/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \App\Http\Controllers\MaintenanceController::rilis
* @see app/Http/Controllers/MaintenanceController.php:20
* @route '/maintenance/surveys/rilis'
*/
export const rilis = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: rilis.url(options),
    method: 'get',
})

rilis.definition = {
    methods: ["get","head"],
    url: '/maintenance/surveys/rilis',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MaintenanceController::rilis
* @see app/Http/Controllers/MaintenanceController.php:20
* @route '/maintenance/surveys/rilis'
*/
rilis.url = (options?: RouteQueryOptions) => {
    return rilis.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MaintenanceController::rilis
* @see app/Http/Controllers/MaintenanceController.php:20
* @route '/maintenance/surveys/rilis'
*/
rilis.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: rilis.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MaintenanceController::rilis
* @see app/Http/Controllers/MaintenanceController.php:20
* @route '/maintenance/surveys/rilis'
*/
rilis.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: rilis.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MaintenanceController::rilis
* @see app/Http/Controllers/MaintenanceController.php:20
* @route '/maintenance/surveys/rilis'
*/
const rilisForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: rilis.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MaintenanceController::rilis
* @see app/Http/Controllers/MaintenanceController.php:20
* @route '/maintenance/surveys/rilis'
*/
rilisForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: rilis.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MaintenanceController::rilis
* @see app/Http/Controllers/MaintenanceController.php:20
* @route '/maintenance/surveys/rilis'
*/
rilisForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: rilis.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

rilis.form = rilisForm

const surveys = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    rilis: Object.assign(rilis, rilis),
}

export default surveys