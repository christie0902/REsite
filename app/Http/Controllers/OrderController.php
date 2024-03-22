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

    return response()->json($order);
}
}
