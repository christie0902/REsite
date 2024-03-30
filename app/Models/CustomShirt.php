<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomShirt extends Model
{
    use HasFactory;

    protected $table = 'custom_shirts';
    protected $fillable = ['order_id', 'image_url', 'size', 'quantity', 'price'];

    public function order()
    {
        return $this->belongsTo(Order::class);
    }
    public function user()
    {
        return $this->order->user;
    }
}
