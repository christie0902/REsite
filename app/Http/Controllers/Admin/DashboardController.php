<?php

namespace App\Http\Controllers\Admin;
use Carbon\Carbon;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\OrderItem;

class DashboardController extends Controller
{
    public function dashboard()
    {
        $todaysSales = $this->getTodaysSales();
        $monthlyRevenue = $this->getMonthlyRevenue();
        $mostSoldItems = $this->getMostSoldItems();
        $latestOrders = $this->getLatestOrders();

        return view('admin.dashboard.dashboard', compact('todaysSales', 'monthlyRevenue', 'mostSoldItems', 'latestOrders'));
    }

        public function getTodaysSales()
    {
        $today = Carbon::today();
        $salesToday = Order::whereDate('created_at', $today)
                            ->sum('total_price');

        return $salesToday;
    }

    public function getMonthlyRevenue()
    {
        $monthlyRevenue = Order::selectRaw('MONTH(created_at) as month, SUM(total_price) as total')
                            ->groupBy('month')
                            ->get();

        return $monthlyRevenue;
    }

    public function getMostSoldItems()
    {
        $mostSoldItems = OrderItem::join('orders', 'order_items.order_id', '=', 'orders.id')
                                ->selectRaw('product_id, SUM(quantity) as total_quantity')
                                ->groupBy('product_id')
                                ->orderByDesc('total_quantity')
                                ->take(5)
                                ->get();

        // You might also want to join with the `products` table to get the product names.
        return $mostSoldItems;
    }

    public function getLatestOrders()
    {
        $latestOrders = Order::orderByDesc('created_at')
                            ->with('user')
                            ->take(10)
                            ->get();

        return $latestOrders;
    }
}
