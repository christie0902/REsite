<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('order_items', function (Blueprint $table) {
            $table->unsignedBigInteger('custom_shirt_id')->nullable()->after('product_variant_id');
            $table->foreign('custom_shirt_id')->references('id')->on('custom_shirts');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('order_items', function (Blueprint $table) {
            $table->dropForeign(['custom_shirt_id']);
            $table->dropColumn('custom_shirt_id');
        });
    }
};
