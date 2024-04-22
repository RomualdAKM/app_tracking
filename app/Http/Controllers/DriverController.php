<?php

namespace App\Http\Controllers;

use App\Models\Driver;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class DriverController extends Controller
{
    public function save_driver(Request $request){

        $validator = Validator::make($request->all(), [
            'name_driver' => 'required',
            'first_name_driver' => 'required',
            'address_driver' => 'required',
            'number_driver' => 'required',
            'photo_driver' => 'required',  
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
        if ($request->hasFile('photo_driver')) {
            $fichier = $request->file('photo_driver');
            $file = time() . '.' . $fichier->getClientOriginalExtension();
            $upload_path = public_path('photo_driver');
            $fichier->move($upload_path, $file);
        } else {
            $file = null;
        }
        
        $Driver = new Driver();

        $Driver->company_id = '1';
        $Driver->name_driver =  $request->name_driver;
        $Driver->first_name_driver = $request->first_name_driver;
        $Driver->address_driver =  $request->address_driver;
        $Driver->number_driver =  $request->number_driver;
        $Driver->photo_driver =  $file;

        $Driver->save();


        $response = [
            'success' => true,
            'message' => 'Succés'
        ];    
    
        return response()->json(
            $response,
            200
        );

    }
    public function update_driver(Request $request,$id){

        $validator = Validator::make($request->all(), [
            'name_driver' => 'required',
            'first_name_driver' => 'required',
            'address_driver' => 'required',
            'number_driver' => 'required',
             
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
        if ($request->hasFile('photo_driver')) {
            $fichier = $request->file('photo_driver');
            $file = time() . '.' . $fichier->getClientOriginalExtension();
            $upload_path = public_path('photo_driver');
            $fichier->move($upload_path, $file);
        } else {
            $file = null;
        }
        
        $Driver =  Driver::find($id);

        $Driver->company_id = '1';
        $Driver->name_driver =  $request->name_driver;
        $Driver->first_name_driver = $request->first_name_driver;
        $Driver->address_driver =  $request->address_driver;
        $Driver->number_driver =  $request->number_driver;
        if($file){
            $Driver->photo_driver =  $file;
        }

        $Driver->save();


        $response = [
            'success' => true,
            'message' => 'Succés'
        ];    
    
        return response()->json(
            $response,
            200
        );

    }

    public function get_drivers_in_company(){

      
        //$drivers = Driver::where('company_id', Auth::user()->company_id)->latest()->get();
        $drivers = Driver::where('company_id', '1')->latest()->get();

        return $drivers;
    }

    

    public function get_driver($id){

        $drive = Driver::find($id);

        return $drive;
    }

    public function delete_driver($id){

        $driver = Driver::find($id);

        $driver->delete();
    }
}
