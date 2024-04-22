<?php

namespace App\Http\Controllers;

use App\Models\Vehicle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class VehicleController extends Controller
{
    public function save_vehicle(Request $request){

        $validator = Validator::make($request->all(), [
            'registration_number_vehicle' => 'required',
            'brand_vehicle' => 'required',
            'consumption_vehicle' => 'required',
            'fuel_system_type_vehicle' => 'required',
            'photo_vehicle' => 'required',  
            'driver_id' => 'required',  
        ]);
    
        if ($validator->fails()) {
            $response = [
                'success' => false,
                'message' => $validator->errors()
            ];
            return response()->json(
                $response,
                200
            );
        }

        $file = '';
        if ($request->hasFile('photo_vehicle')) {
            $fichier = $request->file('photo_vehicle');
            $file = time() . '.' . $fichier->getClientOriginalExtension();
            $upload_path = public_path('photo_vehicle');
            $fichier->move($upload_path, $file);
        } else {
            $file = null;
        }
        
        $Vehicle = new Vehicle();

        $Vehicle->company_id = '1';
        //$Vehicle->company_id = Auth::user()->company_id;
        $Vehicle->registration_number_vehicle =  $request->registration_number_vehicle;
        $Vehicle->brand_vehicle = $request->brand_vehicle;
        $Vehicle->driver_id = $request->driver_id;
        $Vehicle->consumption_vehicle =  $request->consumption_vehicle;
        $Vehicle->fuel_system_type_vehicle =  $request->fuel_system_type_vehicle;
        $Vehicle->photo_vehicle =  $file;

        $Vehicle->save();

        $response = [
            'success' => true,
            'message' => 'Succés'
        ];    
    
        return response()->json(
            $response,
            200
        );

    }
    public function update_vehicle(Request $request,$id){

        $validator = Validator::make($request->all(), [
            'registration_number_vehicle' => 'required',
            'brand_vehicle' => 'required',
            'consumption_vehicle' => 'required',
            'fuel_system_type_vehicle' => 'required',
            // 'photo_vehicle' => 'required',  
            'driver_id' => 'required',  
        ]);
    
        if ($validator->fails()) {
            $response = [
                'success' => false,
                'message' => $validator->errors()
            ];
            return response()->json(
                $response,
                200
            );
        }

        $file = '';
        if ($request->hasFile('photo_vehicle')) {
            $fichier = $request->file('photo_vehicle');
            $file = time() . '.' . $fichier->getClientOriginalExtension();
            $upload_path = public_path('photo_vehicle');
            $fichier->move($upload_path, $file);
        } else {
            $file = null;
        }
        
        $Vehicle = Vehicle::find($id);

        $Vehicle->company_id = '1';
        //$Vehicle->company_id = Auth::user()->company_id;
        $Vehicle->registration_number_vehicle =  $request->registration_number_vehicle;
        $Vehicle->brand_vehicle = $request->brand_vehicle;
        $Vehicle->driver_id = $request->driver_id;
        $Vehicle->consumption_vehicle =  $request->consumption_vehicle;
        $Vehicle->fuel_system_type_vehicle =  $request->fuel_system_type_vehicle;
        if($file){
            
            $Vehicle->photo_vehicle =  $file;
        }

        $Vehicle->save();

        $response = [
            'success' => true,
            'message' => 'Succés'
        ];    
    
        return response()->json(
            $response,
            200
        );

    }


    public function get_vehicles_in_company(){

         //$drivers = Driver::where('company_id', Auth::user()->company_id)->latest()->get();
         $vehicles = Vehicle::where('company_id', '1')->with('driver')->latest()->get();

         return $vehicles;
    }

    public function get_vehicle($id){

        $vehicle = Vehicle::find($id);

       return $vehicle;

    }
    
    public function delete_vehicle($id){

        $vehicle = Vehicle::find($id);

        $vehicle->delete();

    }

}
