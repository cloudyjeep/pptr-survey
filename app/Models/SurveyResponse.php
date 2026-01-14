<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SurveyResponse extends Model
{
    use HasFactory;

    protected $table = 'survey_responses';

    protected $casts = [
        'survey_response' => 'json',
    ];

    protected $fillable = [
        'survey_response',
        'created_by',
    ];
}
