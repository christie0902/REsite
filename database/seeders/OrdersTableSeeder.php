<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;
use App\Models\User;

class OrdersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();
        $userIds = User::pluck('id')->toArray();
        $statuses = ['pending', 'completed', 'cancelled', 'refunded'];

        foreach ($userIds as $userId) {
            for ($i = 0; $i < 6; $i++) {
                for ($j = 0; $j < rand(1, 3); $j++) {
                    $date = $faker->dateTimeBetween($startDate = "-6 months", $endDate = "now");
                    DB::table('orders')->insert([
                        'user_id' => $userId,
                        'total_price' => $faker->randomFloat(2, 10, 500),
                        'status' => $faker->randomElement($statuses),
                        'created_at' => $date,
                        'updated_at' => $date,
                    ]);
                }
            }
        }
    }
}
