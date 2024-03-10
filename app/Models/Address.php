<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;
    public function user() {
        return $this->belongsTo(User::class);
    }
    protected $fillable = [
        'user_id', 'address_line1', 'address_line2', 'city', 'state', 'postal_code', 'country', 'is_primary',
    ];
}
