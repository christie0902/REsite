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
        $thisMonthOrdersCount = $this->getMonthlyOrdersCount();
        $thisMonthRevenue = $this->getThisMonthRevenue();
        $monthlyRevenue = $this->getMonthlyRevenue();
        $mostSoldItems = $this->getMostSoldItems();
        $latestOrders = $this->getLatestOrders();

        return view('admin.dashboard.dashboard', compact('todaysSales', 'monthlyRevenue', 'mostSoldItems', 'latestOrders', 'thisMonthOrdersCount', 'thisMonthRevenue'));
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
        $sixMonthsAgo = Carbon::now()->subMonths(6)->startOfMonth();
        $currentMonth = Carbon::now()->endOfMonth();

        $monthlyRevenue = Order::selectRaw('YEAR(created_at) as year, MONTH(created_at) as month, SUM(total_price) as total')
                                ->whereBetween('created_at', [$sixMonthsAgo, $currentMonth])
                                ->groupBy('year', 'month')
                                ->orderBy('year', 'asc')
                                ->orderBy('month', 'asc')
                                ->get();

        return $monthlyRevenue;
    }

    public function getMostSoldItems()
    {
        $mostSoldItems = OrderItem::join('orders', 'order_items.order_id', '=', 'orders.id')
                        ->join('products', 'order_items.product_id', '=', 'products.id')
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
