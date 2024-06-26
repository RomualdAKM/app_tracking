<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Partreplacementbreakdown;
use Illuminate\Support\Facades\Validator;

class PartreplacementbreakdownController extends Controller
{

    public function save_partreplacementbreakdown(Request $request){

        $validator = Validator::make($request->all(), [
            'name_partreplacementbreakdown' => 'required',
            'repair_amount_partreplacementbreakdown' => 'required',
            'garage_name_partreplacementbreakdown' => 'required',
            'garage_phone_partreplacementbreakdown' => 'required',
            'location_of_the_failure_partreplacementbreakdown' => 'required',  
            'photo_faulty_device_trouble' => 'required',  
            'old_photo_part_partreplacementbreakdown' => 'required',  
            'new_photo_part_partreplacementbreakdown' => 'required',  
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

        $file1 = '';
        if ($request->hasFile('photo_faulty_device_trouble')) {
            $fichier = $request->file('photo_faulty_device_trouble');
            $file1 = time() . '.' . $fichier->getClientOriginalExtension();
            $upload_path = public_path('photo_faulty_device_trouble');
            $fichier->move($upload_path, $file1);
        } else {
            $file1 = null;
        }
        $file2 = '';
        if ($request->hasFile('old_photo_part_partreplacementbreakdown')) {
            $fichier = $request->file('old_photo_part_partreplacementbreakdown');
            $file2 = time() . '.' . $fichier->getClientOriginalExtension();
            $upload_path = public_path('old_photo_part_partreplacementbreakdown');
            $fichier->move($upload_path, $file2);
        } else {
            $file2 = null;
        }
        $file3 = '';
        if ($request->hasFile('new_photo_part_partreplacementbreakdown')) {
            $fichier = $request->file('new_photo_part_partreplacementbreakdown');
            $file3 = time() . '.' . $fichier->getClientOriginalExtension();
            $upload_path = public_path('new_photo_part_partreplacementbreakdown');
            $fichier->move($upload_path, $file3);
        } else {
            $file3 = null;
        }
        
        $partreplacementbreakdown = new Partreplacementbreakdown();
    
       
        $partreplacementbreakdown->company_id = Auth::user()->company_id;
        $partreplacementbreakdown->name_partreplacementbreakdown =  $request->name_partreplacementbreakdown;
        $partreplacementbreakdown->repair_amount_partreplacementbreakdown = $request->repair_amount_partreplacementbreakdown;
        $partreplacementbreakdown->garage_name_partreplacementbreakdown =  $request->garage_name_partreplacementbreakdown;
        $partreplacementbreakdown->garage_phone_partreplacementbreakdown =  $request->garage_phone_partreplacementbreakdown;
        $partreplacementbreakdown->location_of_the_failure_partreplacementbreakdown =  $request->location_of_the_failure_partreplacementbreakdown;
        $partreplacementbreakdown->vehicle_id =  $request->vehicle_id;
        $partreplacementbreakdown->typebreakdown_id =  $request->typebreakdown_id;
        $partreplacementbreakdown->photo_faulty_device_trouble =  $file1;
        $partreplacementbreakdown->new_photo_part_partreplacementbreakdown =  $file2;
        $partreplacementbreakdown->old_photo_part_partreplacementbreakdown =  $file3;
    
        $partreplacementbreakdown->save();
    
        $response = [
            'success' => true,
            'message' => 'Succés'
        ];    
    
        return response()->json(
            $response,
            200
        );

    }
    
    public function update_partreplacementbreakdown(Request $request,$id){

        $validator = Validator::make($request->all(), [
            'name_partreplacementbreakdown' => 'required',
            'repair_amount_partreplacementbreakdown' => 'required',
            'garage_name_partreplacementbreakdown' => 'required',
            'garage_phone_partreplacementbreakdown' => 'required',
            'location_of_the_failure_partreplacementbreakdown' => 'required',  
            // 'photo_faulty_device_trouble' => 'required',  
            // 'old_photo_part_partreplacementbreakdowns' => 'required',  
            // 'new_photo_part_partreplacementbreakdowns' => 'required',  
            // 'vehicle_id' => 'required',  
            // 'typebreakdown_id' => 'required',  
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

        $file1 = '';
        if ($request->hasFile('photo_faulty_device_trouble')) {
            $fichier = $request->file('photo_faulty_device_trouble');
            $file1 = time() . '.' . $fichier->getClientOriginalExtension();
            $upload_path = public_path('photo_faulty_device_trouble');
            $fichier->move($upload_path, $file1);
        } else {
            $file1 = null;
        }
        $file2 = '';
        if ($request->hasFile('old_photo_part_partreplacementbreakdown')) {
            $fichier = $request->file('old_photo_part_partreplacementbreakdown');
            $file2 = time() . '.' . $fichier->getClientOriginalExtension();
            $upload_path = public_path('old_photo_part_partreplacementbreakdown');
            $fichier->move($upload_path, $file2);
        } else {
            $file2 = null;
        }
        $file3 = '';
        if ($request->hasFile('new_photo_part_partreplacementbreakdown')) {
            $fichier = $request->file('new_photo_part_partreplacementbreakdown');
            $file3 = time() . '.' . $fichier->getClientOriginalExtension();
            $upload_path = public_path('new_photo_part_partreplacementbreakdown');
            $fichier->move($upload_path, $file3);
        } else {
            $file3 = null;
        }
        
        $partreplacementbreakdown =  Partreplacementbreakdown::find($id);
    
      
        $partreplacementbreakdown->company_id = Auth::user()->company_id;
        $partreplacementbreakdown->name_partreplacementbreakdown =  $request->name_partreplacementbreakdown;
        $partreplacementbreakdown->repair_amount_partreplacementbreakdown = $request->repair_amount_partreplacementbreakdown;
        $partreplacementbreakdown->garage_name_partreplacementbreakdown =  $request->garage_name_partreplacementbreakdown;
        $partreplacementbreakdown->garage_phone_partreplacementbreakdown =  $request->garage_phone_partreplacementbreakdown;
        $partreplacementbreakdown->location_of_the_failure_partreplacementbreakdown =  $request->location_of_the_failure_partreplacementbreakdown;
        $partreplacementbreakdown->vehicle_id =  $request->vehicle_id;
        $partreplacementbreakdown->typebreakdown_id =  $request->typebreakdown_id;
        if($file1){
            
            $partreplacementbreakdown->photo_faulty_device_trouble =  $file1;
        }
        if($file2){

            $partreplacementbreakdown->new_photo_part_partreplacementbreakdowns =  $file2;
        }
        if($file3){

            $partreplacementbreakdown->old_photo_part_partreplacementbreakdowns =  $file3;
        }
    
        $partreplacementbreakdown->save();
    
        $response = [
            'success' => true,
            'message' => 'Succés'
        ];    
    
        return response()->json(
            $response,
            200
        );

    }

    public function get_partreplacementbreakdowns_in_company(){

    $partreplacementbreakdowns = Partreplacementbreakdown::where('company_id', Auth::user()->company_id)->with(['vehicle','typebreakdown'])->get();
    //$partreplacementbreakdowns = Partreplacementbreakdown::where('company_id', '1')->with(['vehicle','typebreakdown'])->get();

    return $partreplacementbreakdowns;

    }

    public function get_partreplacementbreakdown($id){

        $partreplacementbreakdown = Partreplacementbreakdown::where('id', $id)->with(['vehicle','typebreakdown'])->first();

        return $partreplacementbreakdown;
    }

    public function delete_partreplacementbreakdown($id){

        $partreplacementbreakdown = Partreplacementbreakdown::find($id);

        $partreplacementbreakdown->delete();

    }

    
   public function get_count_partre_placement_breakdown_by_month($vehicleId){


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
    $countPartreplacementBreakdownByMonth = [];
    
    // Parcourir les mois
    foreach ($months as $key => $month) {
        if($vehicleId == 0){

            // Compter le nombre de défaillances pour l'année et le mois en cours
            $count = Partreplacementbreakdown::where('company_id', Auth::user()->company_id)
                ->whereYear('created_at', $year)
                ->whereMonth('created_at', $key)
                ->count();

        }else{
            // Compter le nombre de défaillances pour l'année et le mois en cours
            $count = Partreplacementbreakdown::where('company_id', Auth::user()->company_id)
            ->where('vehicle_id',$vehicleId)
            ->whereYear('created_at', $year)
            ->whereMonth('created_at', $key)
            ->count();

        }
        
        // Ajouter la valeur au tableau sans clé
        $countPartreplacementBreakdownByMonth[] = $count;
    }
   // dd($Simplebreakdowns);
    //return $Simplebreakdowns;

    return response()->json([
        'countPartreplacementBreakdownByMonth' => $countPartreplacementBreakdownByMonth
    ]);
}


}
