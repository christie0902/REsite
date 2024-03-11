<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    public function category() {
        return $this->belongsTo(Category::class);
    }

    public function discount() {
        return $this->belongsTo(Discount::class);
    }

    public function images() {
        return $this->hasMany(Image::class);
    }

    public function wishlists() {
        return $this->hasMany(Wishlist::class);
    }

    public function reviews() {
        return $this->hasMany(Review::class);
    }
    public function cartItems() {
        return $this->hasMany(CartItem::class);
    }
    public function variants() {
        return $this->hasMany(Product_Variant::class);
    }

    protected $fillable = [
        'name', 'description', 'price', 'category_id', 'discount_id', 'image_url', 'stock_quantity', 'sku', 'is_featured', 'promotion_start_date', 'promotion_end_date', 'weight', 'dimensions', 'status',
    ];
}

