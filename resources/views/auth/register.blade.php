@if (count($errors) > 0)
<div class="alert alert-danger">
    <ul>
        @foreach ($errors->all() as $error)
            <li>{{ $error }}</li>
        @endforeach
    </ul>
</div>
@endif

<form action="{{ route('register') }}" method="post">
 
 @csrf

 <input type="text" name="name" value="{{ old('name') }}" placeholder="Enter your name">

 <input type="email" name="email" value="{{ old('email') }}" placeholder="Enter your email">

 <input type="password" name="password" value="" placeholder="Enter your password">

 <input type="password" name="password_confirmation" value="" placeholder="Confirm your password">

 <button>Register</button>

</form>