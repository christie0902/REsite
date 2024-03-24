@extends('admin.layout.layout')
@push('styles')
  <link rel="stylesheet" href="{{ asset('css/dashboard.css') }}">
@endpush

@section('content')
    <!-- Today's Sales -->
    <div class="top-bar">
        <div class="sales-card">
            <div class="card-title">
                Today's Sales
            </div>
            <div class="sales-amount">
                ${{ number_format($todaysSales, 2) }}
            </div>
        </div>

        {{-- This month's revenue --}}
        <div class="sales-card">
            <div class="card-title">
                Revenue this month
            </div>
            <div class="sales-amount">
                ${{ number_format($thisMonthRevenue, 2) }}
            </div>
        </div>
        {{-- This month's orders --}}
        <div class="sales-card">
            <div class="card-title">
                Orders this month
            </div>
            <div class="sales-amount">
                {{ number_format($thisMonthOrdersCount, 0) }}
            </div>
        </div>

         {{-- Month filter --}}
        <form action="{{ route('admin.dashboard') }}" method="GET">
            <select name="months" id="timeframeSelect">
                <option value="3" @if ($months == 3) selected @endif>Last 3 Months</option>
                <option value="6" @if ($months == 6) selected @endif>Last 6 Months</option>
                <option value="12" @if ($months == 12) selected @endif>Last 12 Months</option>
            </select>
            <button type="submit">Update</button>
        </form>
    </div>

   

    <div class="dashboard-container">
        <!-- Monthly Revenue - this would be a chart, you will need to setup Chart.js or similar -->
        <div class="revenue-card">
            <div class="card-title">
                Revenue (Last {{$months}} Months)
            </div>
            
            <div class="chart-container" style="width:100%; height:350px">
                <canvas id="monthlyRevenueChart"></canvas>
            </div>
        </div>

        <!-- Most Sold Items -->
        <div class="items-card">
            <div class="card-title">
                Best sellers
            </div>
            <!-- Placeholder for items list -->
            <div class="chart-container" style="width:100%; height:350px">
                <canvas id="mostSoldItemsChart"></canvas>
            </div>
        </div>
    </div>

    <!-- Latest Orders Table -->
    <div class="table-container">
        <div class="orders-title">
            Latest Orders
        </div>
        <table class="orders-table">
                    <thead>
                        <tr class="order-header-row">
                            <th class="order-header">#</th>
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
                                <td class="order-data">{{ $loop->iteration }}</td>
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
    </div>   
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            //  ctx then becomes an object that holds the properties and methods used to draw and manipulate graphics on the canvas. 
            const ctx = document.getElementById('monthlyRevenueChart').getContext('2d');
            const monthlyRevenueChart = new Chart(ctx, {
                type: 'bar', // or 'line', 'doughnut', etc.
                data: {
                    labels: [
                        // mktime() is a PHP function that returns the Unix timestamp for a date.  mktime(hour, minute, second, month, day, year). "F" is the format character for the full textual representation of a month (e.g., January through December).
                        @foreach($monthlyRevenue as $data)
                        "{{ date("F", mktime(0, 0, 0, $data->month, 1)) }} {{ $data->year }}",
                        @endforeach
                    ],
                    datasets: [{
                        label: 'Monthly Revenue',
                        data: [
                            @foreach($monthlyRevenue as $data)
                            {{ $data->total }},
                            @endforeach
                        ],
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)', 
                        borderWidth: 1,
                        bar: {
                            minBarLength: 2,
                        }
                    }]
                },
                options: {
                    
                    scales: {
                        x: {
                            categoryPercentage: 0.8,
                            barPercentage: 0.9,
                        },
                        y: {
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        legend: {
                            display: true,
                            position: 'top',
                        },
                        datalabels: {
                            formatter: (value, context) => {
                                return `$${value}`;
                            },
                        }
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                }
            });
        });

        document.addEventListener('DOMContentLoaded', function() {
        const ctx = document.getElementById('mostSoldItemsChart').getContext('2d');
        const mostSoldItemsChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [@foreach($mostSoldItems as $item) "{{ $item->name }}", @endforeach],
                datasets: [{
                    label: 'Total Quantity Sold',
                    data: [@foreach($mostSoldItems as $item) {{ $item->total_quantity }}, @endforeach],
                    backgroundColor:  'rgba(204, 204, 0, 0.2)',
                    borderColor: 'rgba(204, 204, 0, 1)',
                    borderWidth: 1,
                    datalabels: {
                        align: 'end',
                        anchor: 'end',
                    }
                }]
            },
            options: {
                indexAxis: 'y',
                elements: {
                    bar: {
                        borderWidth: 2,
                    }
                }
            },
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    datalabels: {
                    color: '#444',
                    formatter: (value, context) => {
                        return value;
                    }
                },
                    legend: {
                        position: 'right',
                    },
            }
        });
    });
    // dd the variable from view
    // console.log(@json($mostSoldItems));
        </script>
@endsection