<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>


     <!-- Favicon  -->
     <link rel="icon" href="{{ asset('assets/img/favicon.png')}}" />
     <!-- Icon Font -->
     <link rel="stylesheet" href="{{ asset('assets/fonts/iconfonts/font-awesome/stylesheet.css')}}" />
     <!-- Site font -->
     <link rel="stylesheet" href="{{ asset('assets/fonts/webfonts/inter/stylesheet.css')}}" />
     <link rel="stylesheet" href="{{ asset('assets/fonts/webfonts/plus-jakarta-sans/stylesheet.css')}}" />
 
     <!-- Vendor CSS -->
     <link rel="stylesheet" href="{{ asset('assets/css/vendors/swiper-bundle.min.css')}}" />
     <link rel="stylesheet" href="{{ asset('assets/css/vendors/jos.css')}}" />
     <link rel="stylesheet" href="{{ asset('assets/css/vendors/menu.css')}}" />
 
     <!-- Custom CSS -->
     <link rel="stylesheet" href="{{ asset('assets/css/custom.css')}}" />
 
     <!-- Development css -->
     <link href="{{ asset('assets/css/style.css')}}" rel="stylesheet" />
     <link rel="stylesheet" href="{{ mix('css/app.css') }}">


 
</head>
<body>
    <div id="app">

    </div>
    <script src="{{ mix('js/app.js') }}"></script>

    <!--Vendor js-->
    <script src="{{ asset('assets/js/vendors/counterup.js')}}" type="module"></script>
    <script src="{{ asset('assets/js/vendors/swiper-bundle.min.js')}}"></script>
    <script src="{{ asset('assets/js/vendors/fslightbox.js')}}"></script>
    <script src="{{ asset('assets/js/vendors/jos.min.js')}}"></script>
    <script src="{{ asset('assets/js/vendors/menu.js')}}"></script>

    <!-- Main js -->
    <script src="{{ asset('assets/js/main.js')}}"></script>
</body>
</html>