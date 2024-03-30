<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;

class OrderController extends Controller
{
    public function show($orderId)
    {
        $order = Order::with(['items.product', 'items.productVariant', 'user', 'user.addresses', 'customShirts'])
            ->where('id', $orderId)
            ->firstOrFail();

        
        $primaryAddress = $order->user->addresses->where('is_primary', true)->first();
        $order->user->primary_address = $primaryAddress;

        // Transform order items
        $transformedItems = $order->items->map(function ($item) {
            $variantDescription = $item->productVariant ? "{$item->productVariant->variant_type}: {$item->productVariant->variant_value}" : null;
            
            return [
                'id' => $item->id,
                'product_id' => $item->product_id,
                'image_url' => $item->product->image_url ?? null,
                'name' => $item->product->name ?? "Custom T-Shirt",
                'variant_description' => $variantDescription,
                'quantity' => $item->quantity,
                'price' => $item->price,
                'is_custom_shirt' => false, // Manually add the flag
            ];
        });

        $customShirtsData = $order->customShirts->map(function ($customShirt) {
            return [
                'id' => $customShirt->id,
                'image_url' => $customShirt->image_url,
                'name' => "Custom Shirt",
                'size' => $customShirt->size,
                'quantity' => $customShirt->quantity,
                'price' => $customShirt->price,
                'is_custom_shirt' => true, 
            ];
        });

        $response = [
            'order' => $order,
            'items' => $transformedItems,
            'custom_shirts' => $customShirtsData,
        ];

        return response()->json($response);
    }
}
