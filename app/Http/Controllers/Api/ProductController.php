<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Product;
use App\Models\ProductVariant;
use App\Models\Tag;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $tagIds = $request->query('tags') ? explode(',', $request->query('tags')) : [];
        $query = Product::query();

        if (!empty($tagIds)) {
        $query->whereHas('tags', function ($query) use ($tagIds) {
            $query->whereIn('tags.id', $tagIds);
        });
    }

        $products = $query->with('tags')->paginate();

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
            ->where('name', 'like', '%' . $search_query . '%')->get();

        return response()->json($result);
    }
  
    public function filterByColor($color)
    {
        $query = ProductVariant::query();

        $query->where('variant_type', 'color')
            ->where('variant_value', $color);


        $productIds = $query->pluck('product_id')->unique();

        $products = Product::whereIn('id', $productIds)->get();

        return response()->json($products);
    }

    public function getDetails($id)
    {
        $product = Product::with(['variants' => function ($query) {
            $query->select('id', 'product_id', 'variant_type', 'variant_value');
        }, 'images' => function ($query) {
            $query->select('id', 'product_id', 'url', 'is_primary');
        }])
        ->select('id', 'name', 'description', 'price', 'weight', 'dimensions', 'rating', 'review_count', 'image_url')
        ->findOrFail($id);
    
        $sizes = [];
        $colors = [];
    
        if ($product->variants->isNotEmpty()) {
            foreach ($product->variants as $variant) {
                if ($variant->variant_type === 'size') {
                    $sizes[] = $variant->variant_value;
                } elseif ($variant->variant_type === 'color') {
                    $colors[] = $variant->variant_value;
                }
            }
        } 
    
        $images = $product->images->pluck('url')->toArray();
    
        return response()->json([
            'name' => $product->name,
            'description' => $product->description,
            'price' => $product->price,
            'sizes' => $sizes,
            'colors' => $colors,
            'primary_image' => $product->image_url,
            'images' => $images,
            'weight' => $product->weight,
            'dimension' => $product->dimensions,
            'rating' => $product->rating,
            'review_count' => $product->review_count,
        ]);
    }
}
