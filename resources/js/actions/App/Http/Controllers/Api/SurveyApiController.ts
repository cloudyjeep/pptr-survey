import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\SurveyApiController::uploadImage
* @see app/Http/Controllers/Api/SurveyApiController.php:16
* @route '/api/upload-image'
*/
export const uploadImage = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadImage.url(options),
    method: 'post',
})

uploadImage.definition = {
    methods: ["post"],
    url: '/api/upload-image',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\SurveyApiController::uploadImage
* @see app/Http/Controllers/Api/SurveyApiController.php:16
* @route '/api/upload-image'
*/
uploadImage.url = (options?: RouteQueryOptions) => {
    return uploadImage.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SurveyApiController::uploadImage
* @see app/Http/Controllers/Api/SurveyApiController.php:16
* @route '/api/upload-image'
*/
uploadImage.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadImage.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\SurveyApiController::uploadImage
* @see app/Http/Controllers/Api/SurveyApiController.php:16
* @route '/api/upload-image'
*/
const uploadImageForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: uploadImage.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\SurveyApiController::uploadImage
* @see app/Http/Controllers/Api/SurveyApiController.php:16
* @route '/api/upload-image'
*/
uploadImageForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: uploadImage.url(options),
    method: 'post',
})

uploadImage.form = uploadImageForm

/**
* @see \App\Http\Controllers\Api\SurveyApiController::storeSurveyResponse
* @see app/Http/Controllers/Api/SurveyApiController.php:51
* @route '/api/survey-responses'
*/
export const storeSurveyResponse = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeSurveyResponse.url(options),
    method: 'post',
})

storeSurveyResponse.definition = {
    methods: ["post"],
    url: '/api/survey-responses',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\SurveyApiController::storeSurveyResponse
* @see app/Http/Controllers/Api/SurveyApiController.php:51
* @route '/api/survey-responses'
*/
storeSurveyResponse.url = (options?: RouteQueryOptions) => {
    return storeSurveyResponse.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SurveyApiController::storeSurveyResponse
* @see app/Http/Controllers/Api/SurveyApiController.php:51
* @route '/api/survey-responses'
*/
storeSurveyResponse.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeSurveyResponse.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\SurveyApiController::storeSurveyResponse
* @see app/Http/Controllers/Api/SurveyApiController.php:51
* @route '/api/survey-responses'
*/
const storeSurveyResponseForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeSurveyResponse.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\SurveyApiController::storeSurveyResponse
* @see app/Http/Controllers/Api/SurveyApiController.php:51
* @route '/api/survey-responses'
*/
storeSurveyResponseForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeSurveyResponse.url(options),
    method: 'post',
})

storeSurveyResponse.form = storeSurveyResponseForm

/**
* @see \App\Http\Controllers\Api\SurveyApiController::viewImage
* @see app/Http/Controllers/Api/SurveyApiController.php:38
* @route '/api/files/{id}'
*/
export const viewImage = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: viewImage.url(args, options),
    method: 'get',
})

viewImage.definition = {
    methods: ["get","head"],
    url: '/api/files/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\SurveyApiController::viewImage
* @see app/Http/Controllers/Api/SurveyApiController.php:38
* @route '/api/files/{id}'
*/
viewImage.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return viewImage.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SurveyApiController::viewImage
* @see app/Http/Controllers/Api/SurveyApiController.php:38
* @route '/api/files/{id}'
*/
viewImage.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: viewImage.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\SurveyApiController::viewImage
* @see app/Http/Controllers/Api/SurveyApiController.php:38
* @route '/api/files/{id}'
*/
viewImage.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: viewImage.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\SurveyApiController::viewImage
* @see app/Http/Controllers/Api/SurveyApiController.php:38
* @route '/api/files/{id}'
*/
const viewImageForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: viewImage.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\SurveyApiController::viewImage
* @see app/Http/Controllers/Api/SurveyApiController.php:38
* @route '/api/files/{id}'
*/
viewImageForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: viewImage.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\SurveyApiController::viewImage
* @see app/Http/Controllers/Api/SurveyApiController.php:38
* @route '/api/files/{id}'
*/
viewImageForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: viewImage.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

viewImage.form = viewImageForm

const SurveyApiController = { uploadImage, storeSurveyResponse, viewImage }

export default SurveyApiController