<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{ asset('css/product.css') }}">
    <title>Edit products</title>
</head>
<body>
    @if (count($errors) > 0)
    <div>
        @foreach ($errors->all() as $error)
            <p>{{ $error }}</p>
        @endforeach
    </div>
    @endif

    <div class="container">
        <div class="nav-buttons">
            <a href="{{ route('admin.products.index') }}" 
            style="text-decoration: none; 
            font-size: 16px; ">&lt; Back to List</a>
        </div>

        <h1>Edit Product {{$product->id}}</h1>
        <form action="{{ route('admin.products.update', $product->id)}}" method="post" enctype="multipart/form-data">
            @csrf
            @method('PUT')

            
            {{-- Basic Information --}}
            <div class="form-group">
                <label for="productName">Product Name</label>
                <input type="text" id="productName" name="name" required class="form-control" placeholder="Product Name" value="{{ $product->name ?? old('name') }}">
            </div>
        
            <div class="form-group">
                <label for="category">Category:</label>
                <select name="category_id" id="category" class="form-control" required>
                    <option value="">Select a Category</option>
                    @foreach ($categories as $category)
                        <option value="{{ $category->id }}" @if($product->category_id == $category->id) selected @endif>{{ $category->name }}</option>
                        @if ($category->children)
                            @foreach ($category->children as $child)
                                <option value="{{ $child->id }}" @if($product->category_id == $child->id) selected @endif>-- {{ $child->name }}</option>
                            @endforeach
                        @endif
                    @endforeach
                </select>
            </div>
        
            <div class="form-group">
                <label for="productDescription">Descriptions</label>
                <textarea id="productDescription" name="description" class="form-control" placeholder="Descriptions" rows="8">{{ $product->description ?? old('description') }}</textarea>
            </div>
        
            {{-- Product Image --}}
            <div class="form-group">
                <label for="productImage">Product Images</label>
                @foreach($product->images as $image)
                    <div class="existing-image">
                        <img src="{{ $image->url }}" alt="Product Image">
                        <input type="checkbox" name="deleted_images[]" value="{{ $image->id }}"> Delete
                    </div>
                @endforeach
                <input type="file" id="productImage" name="product_images[]" accept="image/png, image/jpeg" class="form-control-file" multiple="multiple">
            </div>
            
            {{-- Variants Section --}}
            {{-- Add new variants --}}
            <div class="form-group">
                <label>Variants:</label>
                <div id="new-variants-container"></div>
                <button type="button" id="addNewVariant" style="background-color: #17a2b8; color: white; border: 1px solid #17a2b8; padding: 5px 10px; font-size: 14px; border-radius: 5px; cursor: pointer; text-align: center; display: inline-block; transition: background-color 0.3s, border-color 0.3s;">Add Variant</button>
            </div>

            {{-- Existing variants --}}
            <div class="form-group">
                <label>Variants:</label>
                @foreach ($product->variants as $index => $variant)
                <div class="variant-group" id="variant-group-{{ $index }}">
                    <select name="variants[existing][{{ $variant->id }}][type]" class="form-control">
                        <option value="size" @if($variant->variant_type == 'size') selected @endif>Size</option>
                        <option value="color" @if($variant->variant_type == 'color') selected @endif>Color</option>
                        <option value="edition" @if($variant->variant_type == 'edition') selected @endif>Edition</option>
                    </select>
                    <input type="text" name="variants[existing][{{ $variant->id }}][value]" class="form-control" placeholder="Value" value="{{ $variant->variant_value }}">
                    <input type="text" name="variants[existing][{{ $variant->id }}][sku]" class="form-control" placeholder="SKU" value="{{ $variant->sku }}">
                    <input type="number" name="variants[existing][{{ $variant->id }}][stock_quantity]" class="form-control" placeholder="Stock Quantity" value="{{ $variant->stock_quantity }}">

                    <button type="button" onclick="removeVariantGroup(this)" data-variant-id="{{ $variant->id }}">Remove</button>
                </div>
                @endforeach
            </div>

            {{-- Size & SKU --}}
        
            <div class="form-group">
                <label for="sku">SKU</label>
                <input type="text" id="sku" name="sku" required class="form-control" placeholder="SKU" value="{{ $product->sku ?? old('sku')}}">
            </div>
        
            {{-- Stock & Pricing --}}
            <div class="form-group">
                <label for="productStock">Stock</label>
                <input type="number" id="productStock" name="stock_quantity" required class="form-control" placeholder="Stock" value="{{ $product->stock_quantity ?? old('stock_quantity')}}">
            </div>
        
            <div class="form-group">
                <label for="productPrice">Price</label>
                <input type="text" id="productPrice" name="price" required class="form-control" placeholder="Price" value="{{ $product->price ?? old('price') }}">
            </div>
        
            {{-- Visibility --}}
            <div class="form-group">
                <label class="visibility-label">Visibility:</label>
                <div class="visibility-options">
                    <input type="radio" id="visibilityPublished" name="status" value="active" {{ ($product->status ?? old('status', 'active')) == 'active' ? 'checked' : '' }}>
                    <label for="visibilityPublished">Published</label>
                    <input type="radio" id="visibilityScheduled" name="status" value="scheduled" {{ ($product->status ?? old('status')) == 'scheduled' ? 'checked' : '' }}>
                    <label for="visibilityScheduled">Scheduled</label>
                    <input type="radio" id="visibilityHidden" name="status" value="inactive" {{ ($product->status ?? old('status')) == 'inactive' ? 'checked' : '' }}>
                    <label for="visibilityHidden">Hidden</label>
                </div>
            </div>
        
            <div class="form-group">
                <label for="discount">Discount:</label>
                <select name="discount_id" id="discount" class="form-control">
                    <option value="">No Discount</option>
                    @foreach ($discounts as $discount)
                    <option value="{{ $discount->id }}" @if($product->discount_id == $discount->id) selected @endif>{{ $discount->type }} - {{ $discount->type === "Percentage Off" ? $discount->rate . '%' : '$' . $discount->rate }}</option>
                    @endforeach
                </select>
            </div>
        
            {{-- Schedule a Discount (if applicable) --}}
            <div class="form-group">
                <label for="promotionStartDate">Promotion Start Date</label>
                <input type="date" id="promotionStartDate" name="promotion_start_date" class="form-control" value="{{ $product->promotion_start_date ?? old('promotion_start_date') }}">
            </div>
        
            <div class="form-group">
                <label for="promotionEndDate">Promotion End Date</label>
                <input type="date" id="promotionEndDate" name="promotion_end_date" class="form-control" value="{{ $product->promotion_end_date ?? old('promotion_end_date') }}">
            </div>
        
            {{-- Submit Button --}}
            <button type="submit" class="btn btn-primary">{{ $product->id ? 'Update Product' : 'Add Product' }}</button>
        </form>
    </div>

    <script>
    document.addEventListener("DOMContentLoaded", function() {
        let newVariantIndex = 0;

        document.getElementById('addNewVariant').addEventListener('click', function() {
            const container = document.getElementById('new-variants-container');
            const variantGroupHtml = `
                <div class="variant-group">
                    <select name="variants[new][${newVariantIndex}][type]" class="form-control">
                        <option value="">Select Variant Type</option>
                        <option value="size">Size</option>
                        <option value="color">Color</option>
                        <option value="edition">Edition</option>
                    </select>
                    <input type="text" name="variants[new][${newVariantIndex}][value]" class="form-control" placeholder="Value">
                    <input type="number" name="variants[new][${newVariantIndex}][stock_quantity]" class="form-control" placeholder="Stock Quantity">
                    <button type="button" onclick="removeVariantGroup(this)">Remove</button>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', variantGroupHtml);
            newVariantIndex++;
            })

            function removeVariantGroup(button) {
                const variantId = button.getAttribute('data-variant-id');
                if (variantId) {
                    const input = document.createElement('input');
                    input.type = 'hidden';
                    input.name = 'deleted_variants[]';
                    input.value = variantId;
                    document.forms[0].appendChild(input);
                }
                button.parentElement.remove(); 
            }
    })
    </script>
</body>
</html>
