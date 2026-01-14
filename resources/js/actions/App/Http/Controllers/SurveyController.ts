import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\SurveyController::index
* @see app/Http/Controllers/SurveyController.php:13
* @route '/surveys'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/surveys',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SurveyController::index
* @see app/Http/Controllers/SurveyController.php:13
* @route '/surveys'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SurveyController::index
* @see app/Http/Controllers/SurveyController.php:13
* @route '/surveys'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SurveyController::index
* @see app/Http/Controllers/SurveyController.php:13
* @route '/surveys'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\SurveyController::index
* @see app/Http/Controllers/SurveyController.php:13
* @route '/surveys'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SurveyController::index
* @see app/Http/Controllers/SurveyController.php:13
* @route '/surveys'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SurveyController::index
* @see app/Http/Controllers/SurveyController.php:13
* @route '/surveys'
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

const SurveyController = { index }

export default SurveyController