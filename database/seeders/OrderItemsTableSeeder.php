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
        $orders = DB::table('orders')->pluck('id');
        $products = DB::table('products')->pluck('id');

        foreach ($orders as $orderId) {
            // Each order will have 1 to 3 items
            $numItems = rand(1, 3);
            for ($i = 0; $i < $numItems; $i++) {
                DB::table('order_items')->insert([
                    'order_id' => $orderId,
                    'product_id' => $faker->randomElement($products),
                    'product_variant_id' => null, 
                    'quantity' => rand(1, 5),
                    'price' => $faker->randomFloat(2, 10, 200),
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }
    }
}
