<?php

namespace App\Http\Controllers;

use App\Models\Trip;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class TripController extends Controller
{
    public function save_trip(Request $request){

        $validator = Validator::make($request->all(), [
            'place_of_departure_trip' => 'required',
            'destination_trip' => 'required',
            'date_of_departure_trip' => 'required',
            'date_destination_trip' => 'required',
            'observation' => 'required',  
            'vehicle_id' => 'required',  
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

        $Trip = new Trip();

        $Trip->company_id = Auth::user()->company_id;
     
        $Trip->place_of_departure_trip =  $request->place_of_departure_trip;
        $Trip->destination_trip = $request->destination_trip;
        $Trip->date_of_departure_trip =  $request->date_of_departure_trip;
        $Trip->date_destination_trip =  $request->date_destination_trip;
        $Trip->observation =  $request->observation;
        $Trip->vehicle_id =  $request->vehicle_id;
        $Trip->save();

        $response = [
            'success' => true,
            'message' => 'Succés'
        ];    
    
        return response()->json(
            $response,
            200
        );

    }
    public function update_trip(Request $request,$id){

        $validator = Validator::make($request->all(), [
            'place_of_departure_trip' => 'required',
            'destination_trip' => 'required',
            'date_of_departure_trip' => 'required',
            'date_destination_trip' => 'required',
            'observation' => 'required',  
            // 'vehicle_id' => 'required',  
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

        $Trip =  Trip::find($id);

        $Trip->company_id = Auth::user()->company_id;
       
        $Trip->place_of_departure_trip =  $request->place_of_departure_trip;
        $Trip->destination_trip = $request->destination_trip;
        $Trip->date_of_departure_trip =  $request->date_of_departure_trip;
        $Trip->date_destination_trip =  $request->date_destination_trip;
        $Trip->observation =  $request->observation;
        $Trip->vehicle_id =  $request->vehicle_id;
        $Trip->save();

        $response = [
            'success' => true,
            'message' => 'Succés'
        ];    
    
        return response()->json(
            $response,
            200
        );

    }

    public function get_trips_in_company(){

        $Trips = Trip::where('company_id', Auth::user()->company_id)->with('vehicle')->get();
     

        return $Trips;
    }

    public function delete_trip($id){

        $trip = Trip::find($id);
        
        $trip->delete();
    }
    public function get_trip($id){

        $trip = Trip::find($id);

        return $trip;
    }


}
