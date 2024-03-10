<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ReviewsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $reviews = [
            [
                'product_id' => 1,
                'user_id' => 1,
                'comment' => 'Really love the design and fit!',
                'rating' => 5,
                'created_at' => \Carbon\Carbon::now(),
                'updated_at' => \Carbon\Carbon::now(),
            ],
            [
                'product_id' => 1,
                'user_id' => 2,
                'comment' => 'Comfortable but expected a bit more vibrant colors.',
                'rating' => 4,
                'created_at' => \Carbon\Carbon::now(),
                'updated_at' => \Carbon\Carbon::now(),
            ],
            [
                'product_id' => 2,
                'user_id' => 3,
                'comment' => 'The attention to detail is incredible! A must-have for any RE fan.',
                'rating' => 5,
                'created_at' => \Carbon\Carbon::now(),
                'updated_at' => \Carbon\Carbon::now(),
            ],
            [
                'product_id' => 2,
                'user_id' => 1,
                'comment' => 'Impressive quality and likeness to Jill. Highly recommend.',
                'rating' => 5,
                'created_at' => \Carbon\Carbon::now(),
                'updated_at' => \Carbon\Carbon::now(),
            ],
            [
                'product_id' => 3,
                'user_id' => 4,
                'comment' => 'Absolutely love this jacket! The quality is top-notch, and it feels like it was taken straight out of Resident Evil 4. Worth every penny for fans of the game.',
                'rating' => 5,
                'created_at' => \Carbon\Carbon::now(),
                'updated_at' => \Carbon\Carbon::now(),
            ],
            [
                'product_id' => 6,
                'user_id' => 1, 
                'comment' => 'The craftsmanship on this Nemesis statue is unbelievable. Every detail is perfect, truly a centerpiece of my collection.',
                'rating' => 5,
                'created_at' => \Carbon\Carbon::now(),
                'updated_at' => \Carbon\Carbon::now(),
            ],
            [
                'product_id' => 6,
                'user_id' => 2, 
                'comment' => 'As a hardcore Resident Evil fan, this statue exceeded my expectations. It’s menacing and majestic all at once. Absolutely worth it!',
                'rating' => 5,
                'created_at' => \Carbon\Carbon::now(),
                'updated_at' => \Carbon\Carbon::now(),
            ],
            [
                'product_id' => 6, 
                'user_id' => 3, 
                'comment' => 'Incredible detail and quality. It feels like Nemesis is going to come alive. A masterpiece for any collector.',
                'rating' => 5,
                'created_at' => \Carbon\Carbon::now(),
                'updated_at' => \Carbon\Carbon::now(),
            ],
        ];

        DB::table('reviews')->insert($reviews);
    }
}
