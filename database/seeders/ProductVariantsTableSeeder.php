<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class ProductVariantsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();
        $products = DB::table('products')->get();

        foreach ($products as $product) {
            switch ($product->category_id) {
                case 1: // Apparel
                    $sizes = ['S', 'M', 'L', 'XL'];
                    foreach ($sizes as $size) {
                        $this->insertVariant($product->id, 'size', $size, $faker);
                    }
                    break;
                case 2: // Collectibles
                    $editions = ['Standard', 'Limited Edition'];
                    foreach ($editions as $edition) {
                        $this->insertVariant($product->id, 'edition', $edition, $faker);
                    }
                    break;
                case 3: // Electronics
                    $colors = ['Black', 'White', 'Silver'];
                    foreach ($colors as $color) {
                        $this->insertVariant($product->id, 'color', $color, $faker);
                    }
                    break;
            }
        }
    }

    private function insertVariant($productId, $type, $value, $faker)
    {
        DB::table('product_variants')->insert([
            'product_id' => $productId,
            'sku' => $faker->unique()->bothify('SKU###???'),
            'variant_type' => $type,
            'variant_value' => $value,
            'price' => null,
            'stock_quantity' => $faker->numberBetween(10, 100),
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
