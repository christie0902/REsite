<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="{{ asset('css/list.css') }}">
<title>Product Table</title>
</head>
<body>

  @if(session('success_message'))
  <div class="alert alert-success">
      {{ session('success_message') }}
  </div>
  @endif

  <div class="top-bar">
    {{-- Search bar --}}
    <form action="{{ route('admin.products.index') }}" method="get">
      <input type="text" id="search-product" name="search-product" placeholder="Search in products" value="{{ request()->input('search-product') }}">
      <button type="submit">Search</button>
  </form>

    <button id="add-product">+ Add Product</button>
    <button id="import-csv">Import CSV</button>
  </div>

@if(request()->has('search-product') && !empty(request()->input('search-product')))
    <p>{{ $products->total() }} results for "{{ request()->input('search-product') }}"</p>
@else
    <p>Showing all products ({{ $products->total() }})</p>
@endif

<table>
  <thead>
    <tr>
      <th></th>
      <th>Product</th>
      <th>Category</th>
      <th class="stock">Stock</th>
      <th class="price">Price</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <!-- Product block -->
    @foreach ($products as $product)
        <tr>
            <td><input type="checkbox"></td>
            <td>
              <img src={{$product["image_url"]}} alt="Product Image" class="product-image">
              {{ htmlspecialchars($product["name"]) }}
          </td>
            <td>{{$product["category"]["name"]}}</td>
            <td class="stock">{{htmlspecialchars($product["stock_quantity"])}}</td>
            <td class="price">${{htmlspecialchars($product["price"])}}</td>
            <td>
                <div class="action-icons">
                    <img src="{{ asset('icon-img/edit-icon.png') }}" alt="Edit" title="Edit" class="icon" />

                    <form action="{{ route('admin.products.delete', $product->id) }}" method="post" onsubmit="return confirm('Are you sure you want to delete this product?');">
                      @csrf
                      @method('DELETE')
                      <button type="submit" class="icon-button" style="background: none; border: none; padding: 0; cursor: pointer;">
                          <img src="{{ asset('icon-img/delete-icon.png') }}" alt="Delete" title="Delete" class="icon"/>
                      </button>
                  </form>

                </div>
            </td>
        </tr>
    @endforeach
    <!-- End of block -->
  </tbody>
</table>
<div class="pagination">
    {{ $products->links() }} <!-- Pagination links -->
  </div>
</body>
</html>