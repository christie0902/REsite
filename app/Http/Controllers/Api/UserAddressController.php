<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

class UserAddressController extends Controller
{
    public function show(Request $request)
    {
        $user = $request->user();
        
        $address = $user->addresses()->where('is_primary', true)->first();
        
        if ($address) {
            return response()->json($address);
        } else {
            return response()->json(['message' => 'No address found'], 404);
        }
    }
}
