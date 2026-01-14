import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\SurveyApiController::uploadImage
* @see app/Http/Controllers/Api/SurveyApiController.php:13
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
* @see app/Http/Controllers/Api/SurveyApiController.php:13
* @route '/api/upload-image'
*/
uploadImage.url = (options?: RouteQueryOptions) => {
    return uploadImage.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SurveyApiController::uploadImage
* @see app/Http/Controllers/Api/SurveyApiController.php:13
* @route '/api/upload-image'
*/
uploadImage.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadImage.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\SurveyApiController::uploadImage
* @see app/Http/Controllers/Api/SurveyApiController.php:13
* @route '/api/upload-image'
*/
const uploadImageForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: uploadImage.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\SurveyApiController::uploadImage
* @see app/Http/Controllers/Api/SurveyApiController.php:13
* @route '/api/upload-image'
*/
uploadImageForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: uploadImage.url(options),
    method: 'post',
})

uploadImage.form = uploadImageForm

/**
* @see \App\Http\Controllers\Api\SurveyApiController::storeSurveyResponse
* @see app/Http/Controllers/Api/SurveyApiController.php:35
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
* @see app/Http/Controllers/Api/SurveyApiController.php:35
* @route '/api/survey-responses'
*/
storeSurveyResponse.url = (options?: RouteQueryOptions) => {
    return storeSurveyResponse.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SurveyApiController::storeSurveyResponse
* @see app/Http/Controllers/Api/SurveyApiController.php:35
* @route '/api/survey-responses'
*/
storeSurveyResponse.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeSurveyResponse.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\SurveyApiController::storeSurveyResponse
* @see app/Http/Controllers/Api/SurveyApiController.php:35
* @route '/api/survey-responses'
*/
const storeSurveyResponseForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeSurveyResponse.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\SurveyApiController::storeSurveyResponse
* @see app/Http/Controllers/Api/SurveyApiController.php:35
* @route '/api/survey-responses'
*/
storeSurveyResponseForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeSurveyResponse.url(options),
    method: 'post',
})

storeSurveyResponse.form = storeSurveyResponseForm

const SurveyApiController = { uploadImage, storeSurveyResponse }

export default SurveyApiController