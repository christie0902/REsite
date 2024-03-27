<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;

class FileUploadController extends Controller
{
    public function showUploadForm()
    {
        return view('upload');
    }

    public function storeUploads(Request $request)
    {
        $dataUrl = $request->input('image');

        $uploadedResult = Cloudinary::upload($dataUrl)->getSecurePath();
        // Add uploadedResult to custom shirts table with user id
        return response()->json(['url' => $uploadedResult]);
    }
}
