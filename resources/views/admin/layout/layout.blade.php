<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="{{ asset('css/layout.css') }}">
    @stack('styles')
    
</head>
<body>

<div class="wrapper">
    <!-- Sidebar -->
    <nav class="side-nav">
        
        <div class="top-menu">
            <div class="logo">
                <img src="https://res.cloudinary.com/diwszstai/image/upload/v1710794902/site-assets/threejs_uqluzs.png" alt="logo">
                <h1>RE MALL</h1>
            </div>
            
            <a href="{{ route('admin.dashboard') }}" class="{{ Request::is('admin/dashboard') ? 'active' : '' }}">
                <div class="menu-item">
                    <i class="fa-solid fa-chart-line"></i>
                    <span>Dashboard</span>
                </div>
            </a>

            <a href="{{ route('admin.products.index') }}" class="{{ Request::is('admin/products', 'admin/products/add', 'admin/products/*') ? 'active' : '' }}">
                <div class="menu-item">
                    <i class="fa-solid fa-shirt"></i>
                    <span>Products</span>
                </div>
            </a>

            <a href="#" class="{{ Request::is('admin/inventory') ? 'active' : '' }}">
                <div class="menu-item">
                    <i class="fa-solid fa-boxes-stacked"></i>
                    <span>Inventory</span>
                </div>
            </a>

            <a href="#" class="{{ Request::is('admin/orders') ? 'active' : '' }}">
                <div class="menu-item">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span>Orders</span>
                </div>
            </a>

            <a href="#" class="{{ Request::is('admin/payment') ? 'active' : '' }}">
                <div class="menu-item">
                    <i class="fa-solid fa-credit-card"></i>
                    <span>Payment</span>
                </div>
            </a>

            <a href="#" class="{{ Request::is('admin/customer') ? 'active' : '' }}">
                <div class="menu-item">
                    <i class="fa-solid fa-user"></i>
                    <span>Customers</span>
                </div>
            </a>
            

        <div class="bottom-menu">

            <a href="{{ route('storefront') }}">
                <div class="menu-item">
                    <i class="fa-solid fa-shop"></i>
                    <span>Storefront</span>
                </div>
            </a>

            <a href="#" class="{{ Request::is('admin/setting') ? 'active' : '' }}">
                <div class="menu-item">
                    <i class="fa-solid fa-gear"></i>
                    <span>Settings</span>
                </div>
            </a>

            <form action="/logout" method="POST" style="margin: 0; padding: 0; background: transparent;">
                @csrf
                <button type="submit" class="logout-button" style="background: transparent; border: none; padding: 20; font-size: 1.1rem; margin-bottom: 10px; color:white;">
                    <div class="menu-item" style="width: 100%;">
                        <i class="fa-solid fa-right-from-bracket" style="margin-right: 15px;"></i>
                        <span>Logout</span>
                    </div>
                </button>
            </form>

        </div>
    </nav> 

    <!-- Page Content -->
    <div id="content">
        @yield('content')
    </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels"></script>
<script>Chart.register(ChartDataLabels);</script>
<script src="https://kit.fontawesome.com/f019794326.js" crossorigin="anonymous"></script>
</body>
</html>