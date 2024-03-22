<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;

class AddressSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        $usersCount = 17; 
        $addressesPerUser = 2;

        for ($userId = 1; $userId <= $usersCount; $userId++) {
            for ($i = 1; $i <= $addressesPerUser; $i++) {
                DB::table('addresses')->insert([
                    'user_id' => $userId,
                    'address_line1' => $faker->streetAddress,
                    'address_line2' => $faker->optional()->secondaryAddress,
                    'city' => $faker->city,
                    'state' => $faker->state,
                    'postal_code' => $faker->postcode,
                    'country' => $faker->country,
                    'is_primary' => ($i === 1), // Set the first address as primary
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }
    }
}
