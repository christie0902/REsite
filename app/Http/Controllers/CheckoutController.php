<?php

namespace App\Http\Controllers;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CheckoutController extends Controller
{
    public function process(Request $request)
    {
        $request->validate([
            'paymentData' => 'required|array',
            'cart' => 'required|array',
        ]);
    
        $paymentData = $request->paymentData;
        $cartItems = $request->cart;
        $userId = auth()->id();
      
        sleep(2); // Simulating processing time

        DB::beginTransaction();
        try {
            
            $order = Order::create([
                'user_id' => $userId,
                'total_price' => $paymentData['total'],
                'status' => 'completed',
            ]);

            foreach ($cartItems as $item) {
                $order->items()->create([
                    'product_id' => $item['product_id'],
                    'product_variant_id' => $item['product_variant_id'] ?? null,
                    'quantity' => $item['quantity'],
                    'price' => $item['price'],
                ]);
            }

            DB::commit();

            return response()->json(['success' => true, 'message' => 'Payment successful and order created.']);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['success' => false, 'message' => 'An error occurred, please try again.'], 500);
        }
    }
}
