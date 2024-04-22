<?php

namespace App\Http\Controllers;

use App\Models\Procurement;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class ProcurementController extends Controller
{
    public function save_procurement(Request $request){

        $validator = Validator::make($request->all(), [
            'date_procurement' => 'required',
            'quantity_procurement' => 'required',
            'identity_procurement' => 'required',
            'cost_procurement' => 'required',
            'station_procurement' => 'required',  
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

        $Procurement = new Procurement();

        $Procurement->company_id = '1';
        // $Procurement->company_id = Auth::user()->company_id;
        $Procurement->date_procurement =  $request->date_procurement;
        $Procurement->quantity_procurement = $request->quantity_procurement;
        $Procurement->identity_procurement =  $request->identity_procurement;
        $Procurement->cost_procurement =  $request->cost_procurement;
        $Procurement->station_procurement =  $request->station_procurement;
        $Procurement->vehicle_id =  $request->vehicle_id;
 
        $Procurement->save();

        $response = [
            'success' => true,
            'message' => 'Succés'
        ];    
    
        return response()->json(
            $response,
            200
        );
    }
    public function update_procurement(Request $request,$id){

        //dd($request->all());

        $validator = Validator::make($request->all(), [
            'date_procurement' => 'required',
            'quantity_procurement' => 'required',
            'identity_procurement' => 'required',
            'cost_procurement' => 'required',
            'station_procurement' => 'required',  
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

        $Procurement = Procurement::find($id);

        $Procurement->company_id = '1';
        // $Procurement->company_id = Auth::user()->company_id;
        $Procurement->date_procurement =  $request->date_procurement;
        $Procurement->quantity_procurement = $request->quantity_procurement;
        $Procurement->identity_procurement =  $request->identity_procurement;
        $Procurement->cost_procurement =  $request->cost_procurement;
        $Procurement->station_procurement =  $request->station_procurement;
        $Procurement->vehicle_id =  $request->vehicle_id;
 
        $Procurement->save();

        $response = [
            'success' => true,
            'message' => 'Succés'
        ];    
    
        return response()->json(
            $response,
            200
        );
    }

    public function get_procurements_in_company(){

        //$procurements = Procurement::where('company_id', Auth::user()->company_id)->with('vehicle')->get();
        $procurements = Procurement::where('company_id', '1')->with('vehicle')->get();

        return $procurements;

    }

    public function delete_procurement($id){

        $procurement = Procurement::find($id);

        $procurement->delete();

    }

    public function get_procurement($id){

        $procurement = Procurement::find($id);

        return $procurement;
    
    }

}
