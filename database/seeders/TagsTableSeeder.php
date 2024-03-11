<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TagsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tags = [
            ['name' => 'Apparel'],
            ['name' => 'Collectibles'],
            ['name' => 'Action Figures'],
            ['name' => 'Home Decor'],
            ['name' => 'Gaming Merchandise'],
            ['name' => 'Limited Edition'],
            ['name' => 'Survival Gear'],
            ['name' => 'Fan Favorites'],
            ['name' => 'Cosplay'],
            ['name' => 'Memorabilia'],
        ];

        foreach ($tags as $tag) {
            DB::table('tags')->insert($tag);
        }
    }
}
