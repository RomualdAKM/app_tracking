<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Typebreakdown;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class TypebreakdownController extends Controller
{
   public function save_type_breakdown(Request $request){

    $validator = Validator::make($request->all(), [
        'name_type_breakdown' => 'required',
     
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

    $Typebreakdown = new Typebreakdown();

    $Typebreakdown->company_id = '1';
    // $Typebreakdown->company_id = Auth::user()->company_id;
    $Typebreakdown->name_type_breakdown =  $request->name_type_breakdown;
    $Typebreakdown->description_type_breakdown =  $request->description_type_breakdown;
    $Typebreakdown->save();

    $response = [
        'success' => true,
        'message' => 'Succés'
    ];    

    return response()->json(
        $response,
        200
    );

   }

   public function update_type_breakdown(Request $request,$id){
    $validator = Validator::make($request->all(), [
        'name_type_breakdown' => 'required',
     
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

    $Typebreakdown = Typebreakdown::find($id);

    $Typebreakdown->company_id = '1';
    // $Typebreakdown->company_id = Auth::user()->company_id;
    $Typebreakdown->name_type_breakdown =  $request->name_type_breakdown;
    $Typebreakdown->description_type_breakdown =  $request->description_type_breakdown;
    $Typebreakdown->save();

    $response = [
        'success' => true,
        'message' => 'Succés'
    ];    

    return response()->json(
        $response,
        200
    );

   }


   public function get_typebreakdowns_in_company(){

    $typebreakdown = Typebreakdown::latest('created_at')->where('company_id', '1')->get();
   //$typebreakdown = Typebreakdown::latest('created_at')->where('company_id', Auth::user()->company_id)->get();

    return  $typebreakdown;

   }

   public function get_typebreakdown($id){

    $typebreakdown = Typebreakdown::find($id);

    return  $typebreakdown;

   }

   public function delete_typebreakdown($id){

    $typebreakdown = Typebreakdown::find($id);

    $typebreakdown->delete();

   }

}
