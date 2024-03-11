<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class InventoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();
        $productVariants = DB::table('product_variants')->get(); 

        foreach ($productVariants as $variant) {
            DB::table('inventories')->insert([
                'product_variant_id' => $variant->id,
                'quantity' => $faker->numberBetween(0, 100),
                'last_stock_update' => $faker->dateTimeBetween('-30 days', 'now'),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
