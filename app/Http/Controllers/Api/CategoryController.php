<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    public function index()
{
    $categories = Category::all();
    
    $groupedCategories = $categories->groupBy('parent_id');
    
    // foreach ($categories as $category) {
    //     if ($category->parent_id !== null && isset($groupedCategories[$category->id])) {
    //         $category->children = $groupedCategories[$category->id];
    //     }
    // }
    
    // $parentCategories = $groupedCategories[null];
    
    return $groupedCategories;
}
}
