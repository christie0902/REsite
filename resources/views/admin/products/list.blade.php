<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Product Table</title>
<style>
    body {
      font-family: 'Arial', sans-serif;
      background-color: #f4f4f4;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      background-color: #fff;
      margin-top: 20px;
    }
    th, td {
      text-align: left;
      padding: 12px;
      border-bottom: 1px solid #ddd;
    }
    th {
      background-color: #f8f8f8;
    }
    .action-icons {
      display: flex;
      justify-content: flex-start;
    }
    .action-icons img {
      margin-right: 5px;
      cursor: pointer;
      width: 50px;
    }
    .stock {
      text-align: center;
    }
    .price {
      text-align: right;
      padding-right: 20px;
    }
    .pagination {
      margin-top: 15px;
      display: flex;
      justify-content: center;
    }
    svg {
        width: 30px;
        margin-bottom: -10px;
    }
    div a {
        margin:10px;
        padding-left: 10px;
        text-decoration: none;
    }
  </style>
</head>
<body>
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
            <td>{{htmlspecialchars($product["name"])}}</td>
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