<?php

namespace App\Http\Controllers;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\ProductVariant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\CustomShirt;


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
            // Check if product is a custom shirt
            foreach ($cartItems as $item) {
                if ($item['isCustom'] ?? false) {
                   
                    $customShirt = CustomShirt::create([
                        'order_id' => $order->id,
                        'image_url' => $item['image_url'],
                        'size' => $item['selectedSize'],
                        'quantity' => $item['quantity'],
                        'price' => $item['price'],
                    ]);
                    $order->items()->create([
                        'product_id' => "31",
                        'custom_shirt_id' => $customShirt->id,
                        'quantity' => $item['quantity'],
                        'price' => $item['price'],
                    ]);
                } else {

                                $variant = ProductVariant::where('product_id', $item['id'])
                                ->when(isset($item['selectedSize']), function($query) use ($item) {
                                    return $query->where('variant_type', 'size')->where('variant_value', $item['selectedSize']);
                                })
                                ->when(isset($item['selectedColor']), function($query) use ($item) {
                                    return $query->where('variant_type', 'color')->where('variant_value', $item['selectedColor']);
                                })
                                ->when(isset($item['selectedEdition']), function($query) use ($item) {
                                    return $query->where('variant_type', 'edition')->where('variant_value', $item['selectedEdition']);
                                })
                                ->first();

                        $product_variant_id = optional($variant)->id;

                        $order->items()->create([
                            'product_id' => $item['id'],
                            'product_variant_id' => $product_variant_id,
                            'quantity' => $item['quantity'],
                            'price' => $item['price'],
                            ]);
                }
            }

            DB::commit();

            return response()->json([
                'success' => true, 
                'message' => 'Payment successful and order created.',
                'orderId' => $order->id,
            ]);
        } catch (\Exception $e) {
            dd($e);
            DB::rollBack();
            return response()->json(['success' => false, 'message' => 'An error occurred, please try again.'], 500);
        }
    }
}
