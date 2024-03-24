<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class OrderItemsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();
        $orders = DB::table('orders')->get();
        $products = DB::table('products')->pluck('id')->toArray();

        foreach ($orders as $order) {
            $numItems = rand(1, 3);
            for ($i = 0; $i < $numItems; $i++) {
                $selectedProductId = $faker->randomElement($products);
                $variants = DB::table('product_variants')->where('product_id', $selectedProductId)->pluck('id')->toArray();
                
                $productVariantId = !empty($variants) ? ($faker->boolean(75) ? $faker->randomElement($variants) : null) : null;

                DB::table('order_items')->insert([
                    'order_id' => $order->id,
                    'product_id' => $selectedProductId,
                    'product_variant_id' => $productVariantId, 
                    'quantity' => rand(1, 5),
                    'price' => $faker->randomFloat(2, 10, 200),
                    'created_at' => $order->created_at,
                    'updated_at' => $order->updated_at,
                ]);
            }
        }
    }
}
