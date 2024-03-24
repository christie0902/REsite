<?php

namespace App\Http\Controllers\Admin;
use Carbon\Carbon;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\OrderItem;


class DashboardController extends Controller
{
    public function dashboard(Request $request)
    {
        $months = $request->input('months', 6);

        $todaysSales = $this->getTodaysSales();
        $thisMonthOrdersCount = $this->getMonthlyOrdersCount();
        $thisMonthRevenue = $this->getThisMonthRevenue();
        $monthlyRevenue = $this->getMonthlyRevenue($months);
        $mostSoldItems = $this->getMostSoldItems($months);
        $latestOrders = $this->getLatestOrders();

        return view('admin.dashboard.dashboard', compact('todaysSales', 'monthlyRevenue', 'mostSoldItems', 'latestOrders', 'thisMonthOrdersCount', 'thisMonthRevenue', 'months'));
    }

        public function getTodaysSales()
    {
        $today = Carbon::today();
        $salesToday = Order::whereDate('created_at', $today)
                            ->sum('total_price');

        return $salesToday;
    }

    public function getMonthlyRevenue($months = 6)
    {
        $start = Carbon::now()->subMonths($months-1)->startOfMonth();
        $currentMonth = Carbon::now()->endOfMonth();

        $monthlyRevenue = Order::selectRaw('YEAR(created_at) as year, MONTH(created_at) as month, SUM(total_price) as total')
                                ->whereBetween('created_at', [$start, $currentMonth])
                                ->groupBy('year', 'month')
                                ->orderBy('year', 'asc')
                                ->orderBy('month', 'asc')
                                ->get();

        return $monthlyRevenue;
    }

    public function getMostSoldItems($months = 6)
    {
        $start = Carbon::now()->subMonths($months-1)->startOfMonth();
        $end = Carbon::now()->endOfMonth();

        $mostSoldItems = OrderItem::join('orders', 'order_items.order_id', '=', 'orders.id')
                            ->join('products', 'order_items.product_id', '=', 'products.id')
                            ->whereBetween('orders.created_at', [$start, $end])
                            ->selectRaw('products.name, SUM(order_items.quantity) as total_quantity')
                            ->groupBy('order_items.product_id', 'products.name')
                            ->orderByDesc('total_quantity')
                            ->take(10)
                            ->get();
        
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

    public function getMonthlyOrdersCount()
    {
        $startOfMonth = Carbon::now()->startOfMonth();
        $endOfMonth = Carbon::now()->endOfMonth();

        $ordersCount = Order::whereBetween('created_at', [$startOfMonth, $endOfMonth])
                            ->count();

        return $ordersCount;
    }

public function getThisMonthRevenue()
    {
        $startOfMonth = Carbon::now()->startOfMonth();
        $endOfMonth = Carbon::now()->endOfMonth();

        $revenueThisMonth = Order::whereBetween('created_at', [$startOfMonth, $endOfMonth])
                                ->sum('total_price');

        return $revenueThisMonth;
    }
}
