@extends('admin.layout.layout')
@push('styles')
    <link rel="stylesheet" href="{{ asset('css/product.css') }}">
@endpush

@section('content')
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

        <h1>Add Product</h1>
        <form action="{{ route('admin.products.store') }}" method="post" enctype="multipart/form-data">
            @csrf
    
            {{-- Basic Information --}}
            <div class="form-group">
                <label for="productName">Product Name</label>
                <input type="text" id="productName" name="name" required class="form-control" placeholder="Product Name" value="{{ old('name') }}">
            </div>

            <div class="form-group">
                <label for="category">Category:</label>
                <select name="category_id" id="category" class="form-control" required>
                    <option value="">Select a Category</option>
                    @foreach ($categories as $category)
                        <option value="{{ $category->id }}" @if(old('category_id') == $category->id) selected @endif>{{ $category->name }}</option>
                        @if ($category->children)
                            @foreach ($category->children as $child)
                                <option value="{{ $child->id }}">-- {{ $child->name }}</option>
                            @endforeach
                        @endif
                    @endforeach
                </select>
            </div>

            <div class="form-group">
                <label for="productDescription">Descriptions</label>
                <textarea id="productDescription" name="description" class="form-control" placeholder="Descriptions" rows="8">{{ old('description') }}</textarea>
            </div>

            {{-- Product Image --}}
            <div class="form-group">
                <label for="productImage">Product Image</label>
                <input type="file" id="productImage" name="product_images[]" accept="image/png, image/jpeg" class="form-control-file" multiple="multiple">
                <div id="imagePreview"></div>
            </div>

            {{-- Variants Section --}}
            <div class="form-group">
                <label>Variants:</label>
                <div id="variants-container">
                    <!-- Variant groups will be dynamically added here -->
                </div>
                <button type="button" id="addVariant" style="background-color: #17a2b8; color: white; border: 1px solid #17a2b8; padding: 5px 10px; font-size: 14px; border-radius: 5px; cursor: pointer; text-align: center; display: inline-block; transition: background-color 0.3s, border-color 0.3s;">Add Variant</button>
            </div>

            {{-- Size & SKU --}}
    

            <div class="form-group">
                <label for="sku">SKU</label>
                <input type="text" id="sku" name="sku" required class="form-control" placeholder="SKU" value="{{ old('sku')}}">
            </div>
    
            {{-- <div class="form-group">
                <label for="hasSizes">Has Sizes:</label>
                <input type="checkbox" id="hasSizes" name="hasSizes" value="1" {{ old('hasSizes') ? 'checked' : '' }} class="form-control-checkbox">
                <span>Check if the product has sizes</span>
            </div> --}}

            {{-- Stock & Pricing --}}
            <div class="form-group">
                <label for="productStock">Stock</label>
                <input type="number" id="productStock" name="stock_quantity" required class="form-control" placeholder="Stock" value="{{ old('stock_quantity')}}">
            </div>
    
            <div class="form-group">
                <label for="productPrice">Price</label>
                <input type="text" id="productPrice" name="price" required class="form-control" placeholder="Price" value="{{ old('price') }}">
            </div>
    
           
    
            {{-- Visibility --}}
            <div class="form-group">
                <label class="visibility-label">Visibility:</label>
                <div class="visibility-options">
                    <input type="radio" id="visibilityPublished" name="status" value="active" {{ old('status', 'active') == 'active' ? 'checked' : '' }}>
                    <label for="visibilityPublished">Published</label>
                    <input type="radio" id="visibilityScheduled" name="status" value="scheduled" {{ old('status') == 'scheduled' ? 'checked' : '' }}>
                    <label for="visibilityScheduled">Scheduled</label>
                    <input type="radio" id="visibilityHidden" name="status" value="inactive" {{ old('status') == 'inactive' ? 'checked' : '' }}>
                    <label for="visibilityHidden">Hidden</label>
                </div>
            </div>
    
            <div class="form-group">
                <label for="discount">Discount:</label>
                <select name="discount_id" id="discount" class="form-control">
                    <option value="">No Discount</option>
                    @foreach ($discounts as $discount)
                    <option value="{{ $discount->id }}">{{ $discount->type }} - {{ $discount->type === "Percentage Off" ? $discount->rate . '%' : '$' . $discount->rate }}</option>
                    @endforeach
                </select>
            </div>

            {{-- Schedule a Discount (if applicable) --}}
            <div class="form-group">
                <label for="promotionStartDate">Promotion Start Date</label>
                <input type="date" id="promotionStartDate" name="promotion_start_date" class="form-control" value="{{ old('promotion_start_date') }}">
            </div>
    
            <div class="form-group">
                <label for="promotionEndDate">Promotion End Date</label>
                <input type="date" id="promotionEndDate" name="promotion_end_date" class="form-control" value="{{ old('promotion_end_date') }}">
            </div>
    
            {{-- Submit Button --}}
            <button type="submit" class="btn btn-primary">Add Product</button>
        </form>
    </div>

    <script>
        document.getElementById('productImage').addEventListener('change', function() {
            const preview = document.getElementById('imagePreview');
            preview.innerHTML = '';
            for(let file of this.files) {
                const img = document.createElement('img');
                img.src = URL.createObjectURL(file);
                img.height = 100;
                img.width = 100;
                img.style.objectFit = "contain";
                preview.appendChild(img);
            }
        });

        document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('addVariant').addEventListener('click', function() {
            const container = document.getElementById('variants-container');
            const variantGroupIndex = container.getElementsByClassName('variant-group').length;
            
            const variantGroupHtml = `
                <div class="variant-group">
                    <select name="variants[${variantGroupIndex}][type]" class="form-control variant-type-select">
                        <option value="">Select Variant Type</option>
                        <option value="size">Size</option>
                        <option value="color">Color</option>
                        <option value="edition">Edition</option>
                    </select>
                    <input type="text" name="variants[${variantGroupIndex}][value]" class="form-control variant-value-input" placeholder="Value" style="display: none;">
                    <input type="text" name="variants[${variantGroupIndex}][stock_quantity]" class="form-control" placeholder="Stock quantity">
                    <button type="button" onclick="removeVariant(this)" style="background-color: #dc3545; color: white; border: 1px solid #dc3545; padding: 5px 10px; font-size: 16px; border-radius: 5px; cursor: pointer; text-align: center; display: inline-block; margin-bottom: 3px;">Remove</button>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', variantGroupHtml);
            
            const newlyAddedGroup = container.lastElementChild;
            const typeSelect = newlyAddedGroup.querySelector('.variant-type-select');
            const valueInput = newlyAddedGroup.querySelector('.variant-value-input');
            
            typeSelect.addEventListener('change', function() {
                if (this.value) {
                    valueInput.style.display = '';
                    valueInput.placeholder = `Enter ${this.value.charAt(0).toUpperCase() + this.value.slice(1)}`;
                } else {
                    valueInput.style.display = 'none';
                }
            });
        });
    });

    function removeVariant(element) {
        element.parentElement.remove();
    }
        </script>
    @endsection
