<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="{{ asset('css/layout.css') }}">
</head>
<body>

<div class="wrapper">
    <!-- Sidebar -->
    <nav class="side-nav">
        <a href="{{ route('dashboard') }}" class="{{ Request::is('dashboard') ? 'active' : '' }}">Dashboard</a>
        <a href="{{ route('admin.products.index') }}" class="{{ Request::is('products') ? 'active' : '' }}">Products</a>
        <a href="#" class="{{ Request::is('payment') ? 'active' : '' }}">Payment</a>
        <a href="#" class="{{ Request::is('customer') ? 'active' : '' }}">Customer</a>
        <a href="#" class="{{ Request::is('messages') ? 'active' : '' }}">Messages</a>
        <a href="#" class="{{ Request::is('setting') ? 'active' : '' }}">Setting</a>
        <a href="#">Logout</a>
    </nav> 

    <!-- Page Content -->
    <div id="content">
        @yield('content')
    </div>
</div>

</body>
</html>