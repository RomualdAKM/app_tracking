<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TripController;
use App\Http\Controllers\DriverController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\VehicleController;
use App\Http\Controllers\PriorityController;
use App\Http\Controllers\ProcurementController;
use App\Http\Controllers\TypebreakdownController;
use App\Http\Controllers\SimplebreakdownController;
use App\Http\Controllers\PartreplacementbreakdownController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(AuthController::class)->group(function(){
    Route::post('register','register');
    Route::post('login','login');
    Route::get('get_info_auth_user','get_info_auth_user');
   
});

Route::controller(CompanyController::class)->group(function(){

    Route::post('save_company','save_company');
    Route::post('update_company/{id}','update_company');
    Route::get('get_companies','get_companies');
    Route::get('delete_company/{id}','delete_company');
    Route::get('get_company/{id}','get_company');

});

Route::controller(DriverController::class)->group(function(){

    Route::post('save_driver','save_driver');
    Route::post('update_driver/{id}','update_driver');
    Route::get('get_drivers_in_company','get_drivers_in_company');
    Route::get('delete_driver/{id}','delete_driver');
    Route::get('get_driver/{id}','get_driver');

});
Route::controller(VehicleController::class)->group(function(){

    Route::post('save_vehicle','save_vehicle');
    Route::post('update_vehicle/{id}','update_vehicle');
    Route::get('get_vehicles_in_company','get_vehicles_in_company');
    Route::get('delete_vehicle/{id}','delete_vehicle');
    Route::get('get_vehicle/{id}','get_vehicle');
  
});

Route::controller(ProcurementController::class)->group(function(){

     Route::post('save_procurement','save_procurement');
     Route::post('update_procurement/{id}','update_procurement');
     Route::get('get_procurements_in_company','get_procurements_in_company');
     Route::get('delete_procurement/{id}','delete_procurement');
     Route::get('get_procurement/{id}','get_procurement');
     Route::get('get_count_procurement_by_month/{vehicleId}','get_count_procurement_by_month');

  
});

Route::controller(TripController::class)->group(function(){

     Route::post('save_trip','save_trip');
    Route::post('update_trip/{id}','update_trip');
      Route::get('get_trips_in_company','get_trips_in_company');
      Route::get('delete_trip/{id}','delete_trip');
    Route::get('get_trip/{id}','get_trip');
    Route::get('get_count_trip_by_month/{vehicleId}','get_count_trip_by_month');
  
});
Route::controller(TypebreakdownController::class)->group(function(){

     Route::post('save_type_breakdown','save_type_breakdown');
     Route::post('update_type_breakdown/{id}','update_type_breakdown');
     Route::get('get_typebreakdowns_in_company','get_typebreakdowns_in_company');
     Route::get('delete_typebreakdown/{id}','delete_typebreakdown');
     Route::get('get_typebreakdown/{id}','get_typebreakdown');
  
});

Route::controller(SimplebreakdownController::class)->group(function(){

      Route::post('save_simplebreakdown','save_simplebreakdown');
      Route::post('update_simplebreakdown/{id}','update_simplebreakdown');
      Route::get('get_simplebreakdowns_in_company','get_simplebreakdowns_in_company');
      Route::get('delete_simplebreakdown/{id}','delete_simplebreakdown');
      Route::get('get_simplebreakdown/{id}','get_simplebreakdown');
      Route::get('get_count_simple_breakdown_by_month/{vehicleId}','get_count_simple_breakdown_by_month');
  
});

Route::controller(PartreplacementbreakdownController::class)->group(function(){

      Route::post('save_partreplacementbreakdown','save_partreplacementbreakdown');
       Route::post('update_partreplacementbreakdown/{id}','update_partreplacementbreakdown');
       Route::get('get_partreplacementbreakdowns_in_company','get_partreplacementbreakdowns_in_company');
       Route::get('delete_partreplacementbreakdown/{id}','delete_partreplacementbreakdown');
       Route::get('get_partreplacementbreakdown/{id}','get_partreplacementbreakdown');
       Route::get('get_count_partre_placement_breakdown_by_month/{vehicleId}','get_count_partre_placement_breakdown_by_month');
  
});


Route::controller(PriorityController::class)->group(function(){

    //insurance
    Route::post('save_insurance','save_insurance');
    Route::post('update_insurance/{id}','update_insurance');
    Route::get('get_insurances_in_company','get_insurances_in_company');
    Route::get('fetch_vehicles_without_insurance','fetch_vehicles_without_insurance');
    Route::get('delete_insurance/{id}','delete_insurance');
    Route::get('get_insurance/{id}','get_insurance');
    
    //technical_inspections
     Route::post('save_technicalinspection','save_technicalinspection');
     Route::post('update_technicalinspection/{id}','update_technicalinspection');
     Route::get('get_technical_inspections_in_company','get_technical_inspections_in_company');
     Route::get('fetch_vehicles_without_technicalinspection','fetch_vehicles_without_technicalinspection');
     Route::get('delete_technical_inspection/{id}','delete_technical_inspection');
     Route::get('get_technical_inspection/{id}','get_technical_inspection');

    //Motor Vehicle Tax
     Route::post('save_MotorVehicleTax','save_MotorVehicleTax');
     Route::post('update_MotorVehicleTax/{id}','update_MotorVehicleTax');
     Route::get('get_motor_vehicle_taxs_in_company','get_motor_vehicle_taxs_in_company');
     Route::get('fetch_vehicles_without_MotorVehicleTax','fetch_vehicles_without_MotorVehicleTax');
     Route::get('delete_motor_vehicle_tax/{id}','delete_motor_vehicle_tax');
     Route::get('get_motor_vehicle_tax/{id}','get_motor_vehicle_tax');
  
});
