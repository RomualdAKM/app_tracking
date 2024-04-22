<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>TRACKING</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <!-- BEGIN: CSS Assets-->
        <link rel="stylesheet" href="{{ asset('dist/css/vendors/litepicker.css')}}">
        <link rel="stylesheet" href="{{ asset('dist/css/vendors/tiny-slider.css')}}">
        <link rel="stylesheet" href="{{ asset('dist/css/vendors/tippy.css')}}">
        <link rel="stylesheet" href="{{ asset('dist/css/vendors/simplebar.css')}}">
        <link rel="stylesheet" href="{{ asset('dist/css/themes/echo.css')}}">
        <link rel="stylesheet" href="{{ asset('dist/css/app.css')}}">
        {{-- <link rel="stylesheet" href="dist/css/themes/hurricane.css"> --}}

        <!-- END: CSS Assets-->
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">

        <style>
            
        </style>
        
    </head>
    <body>
        <div id="app">

        </div>
        <script src="{{ mix('js/app.js') }}"></script>
        <script src="{{ asset('dist/js/vendors/dom.js')}}"></script>
        <script src="{{ asset('dist/js/vendors/tailwind-merge.js')}}"></script>
        <script src="{{ asset('dist/js/vendors/lucide.js')}}"></script>
        <script src="{{ asset('dist/js/vendors/dayjs.js')}}"></script>
        <script src="{{ asset('dist/js/vendors/litepicker.js')}}"></script>
        <script src="{{ asset('dist/js/vendors/tiny-slider.js')}}"></script>
        <script src="{{ asset('dist/js/vendors/popper.js')}}"></script>
        <script src="{{ asset('dist/js/vendors/dropdown.js')}}"></script>
        <script src="{{ asset('dist/js/vendors/tippy.js')}}"></script>
        <script src="{{ asset('dist/js/vendors/simplebar.js')}}"></script>
        <script src="{{ asset('dist/js/vendors/transition.js')}}"></script>
        <script src="{{ asset('dist/js/vendors/chartjs.js')}}"></script>
        <script src="{{ asset('dist/js/vendors/modal.js')}}"></script>
        <script src="{{ asset('dist/js/components/base/theme-color.js')}}"></script>
        <script src="{{ asset('dist/js/components/base/lucide.js')}}"></script>
        <script src="{{ asset('dist/js/components/base/litepicker.js')}}"></script>
        <script src="{{ asset('dist/js/components/base/tiny-slider.js')}}"></script>
        <script src="{{ asset('dist/js/utils/colors.js')}}"></script>
        <script src="{{ asset('dist/js/utils/helper.js')}}"></script>
        <script src="{{ asset('dist/js/components/report-line-chart.js')}}"></script>
        <script src="{{ asset('dist/js/components/report-donut-chart-3.js')}}"></script>
        <script src="{{ asset('dist/js/components/base/tippy.js')}}"></script>
        <script src="{{ asset('dist/js/themes/echo.js')}}"></script>
        <script src="{{ asset('dist/js/components/quick-search.js')}}"></script> 
        <!-- END: Vendor JS Assets-->
    </body>
</html>
