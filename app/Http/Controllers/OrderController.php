<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;

class OrderController extends Controller
{
    public function show($orderId)
{
    $order = Order::with(['items.product', 'items.productVariant', 'user', 'user.addresses'])
    ->where('id', $orderId)
    ->first();

    if (!$order) {
    return response()->json(['message' => 'Order not found'], 404);
    }

    // Extract the primary address from the user's addresses
    $primaryAddress = $order->user->addresses->where('is_primary', true)->first();
    $order->user->primary_address = $primaryAddress;

    foreach ($order->items as $item) {
        $variantDescription = '';
        if ($item->productVariant) {
            $variantDescription = $item->productVariant->variant_type . ': ' . $item->productVariant->variant_value;
        }
        $item->variant_description = $variantDescription;
    }

    return response()->json($order);
}
}
