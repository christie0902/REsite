<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DiscountsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $discounts = [
            ['rate' => 10.00, 'type' => 'Percentage Off'],
            ['rate' => 5.00, 'type' => 'Percentage Off'],
            ['rate' => 20.00, 'type' => 'Percentage Off'],
            ['rate' => 15.00, 'type' => 'Fixed Amount Off'],
            ['rate' => 50.00, 'type' => 'Fixed Amount Off'],
        ];

        DB::table('discounts')->insert($discounts);
    }
}
