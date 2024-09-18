<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\Simplebreakdown;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class SimplebreakdownController extends Controller
{
   public function save_simplebreakdown(Request $request){

    $validator = Validator::make($request->all(), [
        'name_simplebreakdown' => 'required',
        'repair_amount_simplebreakdown' => 'required',
        'garage_name_simplebreakdown' => 'required',
        'garage_phone_simplebreakdown' => 'required',
        'location_of_the_failure_simplebreakdown' => 'required',  
        'photo_faulty_device_trouble' => 'required',  
        'vehicle_id' => 'required',  
        'typebreakdown_id' => 'required',  
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
    if ($request->hasFile('photo_faulty_device_trouble')) {
        $fichier = $request->file('photo_faulty_device_trouble');
        $file = time() . '.' . $fichier->getClientOriginalExtension();
        $upload_path = public_path('photo_faulty_device_trouble');
        $fichier->move($upload_path, $file);
    } else {
        $file = null;
    }
    
    $Simplebreakdown = new Simplebreakdown();

    $Simplebreakdown->company_id = Auth::user()->company_id;
 
    $Simplebreakdown->name_simplebreakdown =  $request->name_simplebreakdown;
    $Simplebreakdown->repair_amount_simplebreakdown = $request->repair_amount_simplebreakdown;
    $Simplebreakdown->garage_name_simplebreakdown =  $request->garage_name_simplebreakdown;
    $Simplebreakdown->garage_phone_simplebreakdown =  $request->garage_phone_simplebreakdown;
    $Simplebreakdown->location_of_the_failure_simplebreakdown =  $request->location_of_the_failure_simplebreakdown;
    $Simplebreakdown->vehicle_id =  $request->vehicle_id;
    $Simplebreakdown->typebreakdown_id =  $request->typebreakdown_id;
    $Simplebreakdown->photo_faulty_device_trouble =  $file;

    $Simplebreakdown->save();

    $response = [
        'success' => true,
        'message' => 'Succés'
    ];    

    return response()->json(
        $response,
        200
    );
   }

   public function update_simplebreakdown(Request $request,$id){

    $validator = Validator::make($request->all(), [
        'name_simplebreakdown' => 'required',
        'repair_amount_simplebreakdown' => 'required',
        'garage_name_simplebreakdown' => 'required',
        'garage_phone_simplebreakdown' => 'required',
        'location_of_the_failure_simplebreakdown' => 'required',  
        // 'photo_faulty_device_trouble' => 'required',  
        'vehicle_id' => 'required',  
        'typebreakdown_id' => 'required',  
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
    if ($request->hasFile('photo_faulty_device_trouble')) {
        $fichier = $request->file('photo_faulty_device_trouble');
        $file = time() . '.' . $fichier->getClientOriginalExtension();
        $upload_path = public_path('photo_faulty_device_trouble');
        $fichier->move($upload_path, $file);
    } else {
        $file = null;
    }
    
    $Simplebreakdown = Simplebreakdown::find($id);

    $Simplebreakdown->company_id = Auth::user()->company_id;
  
    $Simplebreakdown->name_simplebreakdown =  $request->name_simplebreakdown;
    $Simplebreakdown->repair_amount_simplebreakdown = $request->repair_amount_simplebreakdown;
    $Simplebreakdown->garage_name_simplebreakdown =  $request->garage_name_simplebreakdown;
    $Simplebreakdown->garage_phone_simplebreakdown =  $request->garage_phone_simplebreakdown;
    $Simplebreakdown->location_of_the_failure_simplebreakdown =  $request->location_of_the_failure_simplebreakdown;
    $Simplebreakdown->vehicle_id =  $request->vehicle_id;
    $Simplebreakdown->typebreakdown_id =  $request->typebreakdown_id;
    if($file){
        $Simplebreakdown->photo_faulty_device_trouble =  $file;
    }
    $Simplebreakdown->save();

    $response = [
        'success' => true,
        'message' => 'Succés'
    ];    

    return response()->json(
        $response,
        200
    );
   }

   public function get_simplebreakdowns_in_company(){

    
    $Simplebreakdowns = Simplebreakdown::where('company_id', Auth::user()->company_id)->with(['vehicle','typebreakdown'])->get();

    return $Simplebreakdowns;

   }

   public function get_simplebreakdown($id){

    $Simplebreakdowns = Simplebreakdown::find($id);

    return $Simplebreakdowns;


   }
   public function delete_simplebreakdown($id){

    $Simplebreakdowns = Simplebreakdown::find($id);

    $Simplebreakdowns->delete();


   }

   public function get_count_simple_breakdown_by_month($vehicleId){

    // Obtenir la date actuelle
    $now = Carbon::now();
    
    // Obtenir l'année actuelle
    $year = $now->year;
    
    // Créer un tableau pour stocker les mois
    $months = [];
    
    // Boucler sur les 12 mois de l'année
    for ($i = 1; $i <= 12; $i++) {
        // Créer une instance de Carbon avec l'année et le mois, puis formater la date
        $months[$i] = Carbon::createFromDate($year, $i)->format('M');
    }
    
    // Tableau pour stocker le nombre de défaillances par mois
    $Simplebreakdowns = [];
    
    // Parcourir les mois
    foreach ($months as $key => $month) {
        if ($vehicleId == 0) {
           
            // Compter le nombre de défaillances pour l'année et le mois en cours
            $count = Simplebreakdown::where('company_id', Auth::user()->company_id)
                ->whereYear('created_at', $year)
                ->whereMonth('created_at', $key)
                ->count();
        }else{
            // Compter le nombre de défaillances pour l'année et le mois en cours
            $count = Simplebreakdown::where('company_id', Auth::user()->company_id)
            ->where('vehicle_id', $vehicleId)
            ->whereYear('created_at', $year)
            ->whereMonth('created_at', $key)
            ->count();

        }
        
        // Ajouter la valeur au tableau sans clé
        $Simplebreakdowns[] = $count;
    }
   // dd($Simplebreakdowns);
    //return $Simplebreakdowns;

    return response()->json([
        'Simplebreakdowns' => $Simplebreakdowns
    ]);
}
}