<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductVariant extends Model
{
    use HasFactory;
    protected $fillable = [
        'product_id',
        'variant_type',
        'variant_value',
        'stock_quantity',
        'sku'
    ];

    public function product ()
    {
        return $this->belongsTo(Product::class);
    }
}
