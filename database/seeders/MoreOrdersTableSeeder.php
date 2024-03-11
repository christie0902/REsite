<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class MoreOrdersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();
        $statuses = ['pending', 'completed', 'cancelled', 'refunded'];

        for ($i = 2; $i <= 11; $i++) {
            DB::table('orders')->insert([
                'user_id' => $i,
                'total_price' => $faker->randomFloat(2, 10, 500),
                'status' => $faker->randomElement($statuses),
                'created_at' => $faker->dateTimeBetween('-1 month', 'now'),
                'updated_at' => $faker->dateTimeBetween('-1 month', 'now'),
            ]);
        }
    }
}
