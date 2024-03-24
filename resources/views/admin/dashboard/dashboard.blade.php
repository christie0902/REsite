@extends('admin.layout.layout')
@push('styles')
  <link rel="stylesheet" href="{{ asset('css/dashboard.css') }}">
@endpush

@section('content')
    <div class="dashboard-container">
    
        <!-- Today's Sales -->
        <div class="sales-card">
            <div class="card-title">
                Today's Sales
            </div>
            <div class="sales-amount">
                ${{ number_format($todaysSales, 2) }}
            </div>
        </div>

        <!-- Monthly Revenue - this would be a chart, you will need to setup Chart.js or similar -->
        <div class="revenue-card">
            <div class="card-title">
                Revenue (Last 6 Months)
            </div>
            
            <div class="chart-container">
                <!-- You would use a Chart.js canvas element here -->
                <canvas id="revenueChart"></canvas>
            </div>
        </div>

        <!-- Most Sold Items -->
        <div class="items-card">
            <div class="card-title">
                Most Sold Items
            </div>
            <!-- Placeholder for items list -->
            <ul class="sold-items-list">
                @foreach($mostSoldItems as $item)
                <li class="item-detail">
                        {{ $item->product->name }} ({{ $item->total_quantity }})
                    </li>
                @endforeach
            </ul>
        </div>
    </div>

    <!-- Latest Orders Table -->
    <div class="orders-title">
        Latest Orders
    </div>
    <table class="orders-table">
                <thead>
                    <tr class="order-header-row">
                        <th class="order-header">ID</th>
                        <th class="order-header">Date</th>
                        <th class="order-header">Customer Name</th>
                        <th class="order-header">Status</th>
                        <th class="order-header">Amount</th>
                        <th class="order-header">Actions</th>
                    </tr>
                </thead>
                <tbody>
                        @foreach($latestOrders as $order)
                        <tr class="order-row">
                            <td class="order-data">
                                    {{ $order->id }}
                                </td>
                                <td class="order-data">
                                    {{ $order->created_at->format('M d, Y') }}
                                </td>
                                <td class="order-data">
                                    {{ $order->user->name }}
                                </td>
                                <td class="order-data">
                                    <span class="{{ $order->status }}-status">
                                        {{ ucfirst($order->status) }}
                                    </span>
                                </td>
                                <td class="order-data">
                                    ${{ number_format($order->total_price, 2) }}
                                </td>
                                <td class="order-data">
                                    <i class="fa-solid fa-ellipsis"></i>
                                </td>
                            </tr>
                        @endforeach
                </tbody>
    </table>
@endsection