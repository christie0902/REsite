<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="{{ asset('css/list.css') }}">
<title>Product Table</title>
</head>
<body>
  <div class="top-bar">
    <form action="" method="post">
    <input type="text" id="search-product" placeholder="Search in products" />
    <button>Search</button>
  </form>
    <button id="add-product">+ Add Product</button>
    <button id="import-csv">Import CSV</button>
</div>
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
            <td>{{htmlspecialchars($product["category"]["name"])}}</td>
            <td class="stock">{{htmlspecialchars($product["stock_quantity"])}}</td>
            <td class="price">${{htmlspecialchars($product["price"])}}</td>
            <td>
                <div class="action-icons">
                    <img src="{{ asset('icon-img/edit-icon.png') }}" alt="Edit" title="Edit" class="icon" />
                    <img src="{{ asset('icon-img/delete-icon.png') }}" alt="Delete" title="Delete" class="icon"/>
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