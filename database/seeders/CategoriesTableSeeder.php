<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriesTableSeeder extends Seeder
{
    public function run()
    {
        // Top-level Categories
        $topLevelCategories = [
            'Apparel' => 'Clothing and Apparel',
            'Figures & Models' => 'Collectible Figures and Models',
            'Gifts & Collectibles' => 'Unique Gifts and Collectibles',
            'Sale & Clearance' => 'Discounted Items and Clearance Sales',
            'New Arrivals' => 'Recently Added Products and Latest Releases',
        ];

        // Subcategories, keyed by parent category name
        $subcategories = [
            'Apparel' => [
                ['name' => 'T-shirts', 'description' => 'Comfortable and Stylish T-shirts'],
                ['name' => 'Hoodies', 'description' => 'Warm and Cozy Hoodies'],
                ['name' => 'Jackets', 'description' => 'Durable and Fashionable Jackets'],
                ['name' => 'Accessories', 'description' => 'Essential and Trendy Accessories'],
            ],
            'Figures & Models' => [
                ['name' => 'Action Figures', 'description' => 'Articulated Action Figures'],
                ['name' => 'Statues', 'description' => 'Detailed Collectible Statues'],
            ],
            'Gifts & Collectibles' => [
                ['name' => 'Limited Edition Items', 'description' => 'Exclusive Limited Edition Merchandise'],
                ['name' => 'Gift Sets', 'description' => 'Perfect Gift Sets for Any Occasion'],
                ['name' => 'Exclusive Merchandise', 'description' => 'Exclusive Items Available Only Here'],
                ['name' => 'Special Editions', 'description' => 'Special Edition Products for Collectors'],
            ],
        ];

        foreach ($topLevelCategories as $name => $description) {
            $categoryId = DB::table('categories')->insertGetId([
                'name' => $name,
                'description' => $description,
                'created_at' => now(),
                'updated_at' => now(),
            ]);

           
            if (array_key_exists($name, $subcategories)) {
                foreach ($subcategories[$name] as $subcategory) {
                    DB::table('categories')->insert([
                        'name' => $subcategory['name'],
                        'description' => $subcategory['description'],
                        'parent_id' => $categoryId,
                        'created_at' => now(),
                        'updated_at' => now(),
                    ]);
                }
            }
        }
    }
}