<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @method static paginate()
 */
class Lot extends Model
{

    protected $fillable = ['name', 'description'];
    use HasFactory;
    public function categories()
    {
        return $this->belongsToMany(Category::class, 'category_lots');
    }
}
