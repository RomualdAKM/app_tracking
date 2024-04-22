<?php

namespace App\Http\Controllers;

use App\Models\Priority;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class PriorityController extends Controller
{
    public function save_insurance(Request $request){

        $validator = Validator::make($request->all(), [
            'company_priority' => 'required',
            'date_priority' => 'required',
            'document_photo' => 'required',
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

        $file = '';
        if ($request->hasFile('document_photo')) {
            $fichier = $request->file('document_photo');
            $file = time() . '.' . $fichier->getClientOriginalExtension();
            $upload_path = public_path('document_photo');
            $fichier->move($upload_path, $file);
        } else {
            $file = null;
        }
        
        $Priority = new Priority();

        $Priority->company_id = '1';
        // $Priority->company_id = Auth::user()->company_id;
        $Priority->company_priority =  $request->company_priority;
        $Priority->date_priority = $request->date_priority;
        $Priority->type_priority =  "Assurance";
        $Priority->vehicle_id =  $request->vehicle_id;
        $Priority->document_photo =  $file;
        $Priority->save();

        $response = [
            'success' => true,
            'message' => 'Succés'
        ];    
    
        return response()->json(
            $response,
            200
        );

    }
    public function save_technicalinspection(Request $request){

        $validator = Validator::make($request->all(), [
            'company_priority' => 'required',
            'date_priority' => 'required',
            'document_photo' => 'required',
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

        $file = '';
        if ($request->hasFile('document_photo')) {
            $fichier = $request->file('document_photo');
            $file = time() . '.' . $fichier->getClientOriginalExtension();
            $upload_path = public_path('document_photo');
            $fichier->move($upload_path, $file);
        } else {
            $file = null;
        }
        
        $Priority = new Priority();

        $Priority->company_id = '1';
        // $Priority->company_id = Auth::user()->company_id;
        $Priority->company_priority =  $request->company_priority;
        $Priority->date_priority = $request->date_priority;
        $Priority->type_priority =  "Visite technique";
        $Priority->vehicle_id =  $request->vehicle_id;
        $Priority->document_photo =  $file;
        $Priority->save();

        $response = [
            'success' => true,
            'message' => 'Succés'
        ];    
    
        return response()->json(
            $response,
            200
        );

    }
    public function save_MotorVehicleTax(Request $request){

        $validator = Validator::make($request->all(), [
            'company_priority' => 'required',
            'date_priority' => 'required',
            'document_photo' => 'required',
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

        $file = '';
        if ($request->hasFile('document_photo')) {
            $fichier = $request->file('document_photo');
            $file = time() . '.' . $fichier->getClientOriginalExtension();
            $upload_path = public_path('document_photo');
            $fichier->move($upload_path, $file);
        } else {
            $file = null;
        }
        
        $Priority = new Priority();

        $Priority->company_id = '1';
        // $Priority->company_id = Auth::user()->company_id;
        $Priority->company_priority =  $request->company_priority;
        $Priority->date_priority = $request->date_priority;
        $Priority->type_priority =  "TVM";
        $Priority->vehicle_id =  $request->vehicle_id;
        $Priority->document_photo =  $file;
        $Priority->save();

        $response = [
            'success' => true,
            'message' => 'Succés'
        ];    
    
        return response()->json(
            $response,
            200
        );

    }
    public function update_insurance(Request $request,$id){

        $validator = Validator::make($request->all(), [
            'company_priority' => 'required',
            'date_priority' => 'required',
            // 'document_photo' => 'required',
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

        $file = '';
        if ($request->hasFile('document_photo')) {
            $fichier = $request->file('document_photo');
            $file = time() . '.' . $fichier->getClientOriginalExtension();
            $upload_path = public_path('document_photo');
            $fichier->move($upload_path, $file);
        } else {
            $file = null;
        }
        
        $Priority =  Priority::find($id);

        $Priority->company_id = '1';
        // $Priority->company_id = Auth::user()->company_id;
        $Priority->company_priority =  $request->company_priority;
        $Priority->date_priority = $request->date_priority;
        // $Priority->type_priority =  "Assurance";
        $Priority->vehicle_id =  $request->vehicle_id;

        if($file){

            $Priority->document_photo =  $file;

        }

        $Priority->save();

        $response = [
            'success' => true,
            'message' => 'Succés'
        ];    
    
        return response()->json(
            $response,
            200
        );

    }
    public function update_technicalinspection(Request $request,$id){

        $validator = Validator::make($request->all(), [
            'company_priority' => 'required',
            'date_priority' => 'required',
            // 'document_photo' => 'required',
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

        $file = '';
        if ($request->hasFile('document_photo')) {
            $fichier = $request->file('document_photo');
            $file = time() . '.' . $fichier->getClientOriginalExtension();
            $upload_path = public_path('document_photo');
            $fichier->move($upload_path, $file);
        } else {
            $file = null;
        }
        
        $Priority =  Priority::find($id);

        $Priority->company_id = '1';
        // $Priority->company_id = Auth::user()->company_id;
        $Priority->company_priority =  $request->company_priority;
        $Priority->date_priority = $request->date_priority;
        // $Priority->type_priority =  "Assurance";
        $Priority->vehicle_id =  $request->vehicle_id;

        if($file){

            $Priority->document_photo =  $file;

        }

        $Priority->save();

        $response = [
            'success' => true,
            'message' => 'Succés'
        ];    
    
        return response()->json(
            $response,
            200
        );

    }
    public function update_MotorVehicleTax(Request $request,$id){

        $validator = Validator::make($request->all(), [
            'company_priority' => 'required',
            'date_priority' => 'required',
            // 'document_photo' => 'required',
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

        $file = '';
        if ($request->hasFile('document_photo')) {
            $fichier = $request->file('document_photo');
            $file = time() . '.' . $fichier->getClientOriginalExtension();
            $upload_path = public_path('document_photo');
            $fichier->move($upload_path, $file);
        } else {
            $file = null;
        }
        
        $Priority =  Priority::find($id);

        $Priority->company_id = '1';
        // $Priority->company_id = Auth::user()->company_id;
        $Priority->company_priority =  $request->company_priority;
        $Priority->date_priority = $request->date_priority;
        // $Priority->type_priority =  "Assurance";
        $Priority->vehicle_id =  $request->vehicle_id;

        if($file){

            $Priority->document_photo =  $file;

        }

        $Priority->save();

        $response = [
            'success' => true,
            'message' => 'Succés'
        ];    
    
        return response()->json(
            $response,
            200
        );

    }

    public function get_insurances_in_company(){

        $insurances = Priority::where('company_id', '1')
                                ->where('type_priority','Assurance')
                                ->with('vehicle')
                                ->get();
        // $insurances = Priority::where('company_id', Auth::user()->company_id)
        //                         ->where('type_priority','Assurance')
                                    // ->white('vehicle')

        //                         ->get();
        
        return $insurances;

    }
    public function get_technical_inspections_in_company(){

        $technical_inspections = Priority::where('company_id', '1')
                                ->where('type_priority','Visite technique')
                                ->with('vehicle')
                                ->get();
        // $insurances = Priority::where('company_id', Auth::user()->company_id)
        //                         ->where('type_priority','Visite technique')
                                    // ->white('vehicle')

        //                         ->get();
        
        return $technical_inspections;

    }
    public function get_motor_vehicle_taxs_in_company(){

        $technical_inspections = Priority::where('company_id', '1')
                                ->where('type_priority','TVM')
                                ->with('vehicle')
                                ->get();
        // $insurances = Priority::where('company_id', Auth::user()->company_id)
        //                         ->where('type_priority','Visite technique')
                                    // ->white('vehicle')

        //                         ->get();
        
        return $technical_inspections;

    }

    public function fetch_vehicles_without_insurance(){

        $insurances = Priority::where('company_id', '1')
                                ->where('type_priority','Assurance')
                                ->with('vehicle')
                                ->get()
                                ->pluck('vehicle_id')
                                ->toArray();

        $vehicles = \App\Models\Vehicle::where('company_id', '1')
                                ->whereNotIn('id', $insurances)

        // $insurances = Priority::where('company_id',  Auth::user()->company_id)
        //                         ->where('type_priority','Assurance')
        //                         ->with('vehicle')
        //                         ->get()
        //                         ->pluck('vehicle_id')
        //                         ->toArray();

        // $vehicles = \App\Models\Vehicle::where('company_id',  Auth::user()->company_id)
        //                         ->whereNotIn('id', $insurances)
                                ->get();
        
        return $vehicles;

    }

    public function fetch_vehicles_without_technicalinspection(){

        $technicalinspections = Priority::where('company_id', '1')
                                ->where('type_priority','Visite technique')
                                ->with('vehicle')
                                ->get()
                                ->pluck('vehicle_id')
                                ->toArray();

        $vehicles = \App\Models\Vehicle::where('company_id', '1')
                                ->whereNotIn('id', $technicalinspections)

        // $insurances = Priority::where('company_id',  Auth::user()->company_id)
        //                         ->where('type_priority','Visite technique')
        //                         ->with('vehicle')
        //                         ->get()
        //                         ->pluck('vehicle_id')
        //                         ->toArray();

        // $vehicles = \App\Models\Vehicle::where('company_id',  Auth::user()->company_id)
        //                         ->whereNotIn('id', $insurances)
                                ->get();
        
        return $vehicles;

    }
    public function fetch_vehicles_without_MotorVehicleTax(){

        $MotorVehicleTaxs = Priority::where('company_id', '1')
                                ->where('type_priority','TVM')
                                ->with('vehicle')
                                ->get()
                                ->pluck('vehicle_id')
                                ->toArray();

        $vehicles = \App\Models\Vehicle::where('company_id', '1')
                                ->whereNotIn('id', $MotorVehicleTaxs)

        // $MotorVehicleTaxs = Priority::where('company_id',  Auth::user()->company_id)
        //                         ->where('type_priority','TVM')
        //                         ->with('vehicle')
        //                         ->get()
        //                         ->pluck('vehicle_id')
        //                         ->toArray();

        // $vehicles = \App\Models\Vehicle::where('company_id',  Auth::user()->company_id)
        //                         ->whereNotIn('id', $MotorVehicleTaxs)
                                ->get();
        
        return $vehicles;

    }


    public function get_insurance($id){

        $Priority = Priority::find($id);

        return $Priority;
    }
    public function get_technical_inspection($id){

        $Priority = Priority::find($id);

        return $Priority;
    }
    public function get_motor_vehicle_tax($id){

        $Priority = Priority::find($id);

        return $Priority;
    }
    public function delete_insurance($id){

        $Priority = Priority::find($id);

        $Priority->delete();
    }

    public function delete_technical_inspection($id){

        $Priority = Priority::find($id);

        $Priority->delete();
    }
    public function delete_motor_vehicle_tax($id){

        $Priority = Priority::find($id);

        $Priority->delete();
    }

}
