import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\MaintenanceController::list
* @see app/Http/Controllers/MaintenanceController.php:25
* @route '/maintenance/users/list'
*/
export const list = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: list.url(options),
    method: 'get',
})

list.definition = {
    methods: ["get","head"],
    url: '/maintenance/users/list',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MaintenanceController::list
* @see app/Http/Controllers/MaintenanceController.php:25
* @route '/maintenance/users/list'
*/
list.url = (options?: RouteQueryOptions) => {
    return list.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MaintenanceController::list
* @see app/Http/Controllers/MaintenanceController.php:25
* @route '/maintenance/users/list'
*/
list.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: list.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MaintenanceController::list
* @see app/Http/Controllers/MaintenanceController.php:25
* @route '/maintenance/users/list'
*/
list.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: list.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MaintenanceController::list
* @see app/Http/Controllers/MaintenanceController.php:25
* @route '/maintenance/users/list'
*/
const listForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: list.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MaintenanceController::list
* @see app/Http/Controllers/MaintenanceController.php:25
* @route '/maintenance/users/list'
*/
listForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: list.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MaintenanceController::list
* @see app/Http/Controllers/MaintenanceController.php:25
* @route '/maintenance/users/list'
*/
listForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: list.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

list.form = listForm

const users = {
    list: Object.assign(list, list),
}

export default users