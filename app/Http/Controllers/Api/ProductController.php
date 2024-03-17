<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Product;


class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with('category')->paginate(6);
        return response()->json($products);
    }

    public function featured()
    {
        $ftProducts = Product::with('category')->where('is_featured', true)->get();
        return response()->json($ftProducts);
    }

    public function show($id)
    {
        $product = Product::with(['category', 'reviews'])->find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        return response()->json($product);
    }

    public function search($search_query)
    {
        $result = Product::with('category')
            ->where(function ($query) use ($search_query) {
                $query->where('name', 'like', '%' . $search_query . '%')
                    ->orWhereHas('category', function($query) use ($search_query) {
                        $query->where('name', 'like', '%' . $search_query . '%');
                    });
            })
            ->get();

        return response()->json($result);
    }
}
