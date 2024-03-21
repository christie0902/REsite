<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    public function products() {
        return $this->hasMany(Product::class);
    }

    public function parent()
    {
        return $this->belongsTo(Category::class, 'parent_id');
    }

    // Children relationship
    public function children()
    {
        return $this->hasMany(Category::class, 'parent_id');
    }

    // Recursive children relationship for nested children
    public function childrenRecursive()
    {
        return $this->children()->with('childrenRecursive');
    }
    protected $fillable = [
        'name', 'description'
    ];
}
