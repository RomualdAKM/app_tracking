<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
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

        $Procurement->company_id = Auth::user()->company_id;
       
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

        $Procurement->company_id = Auth::user()->company_id;
       
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

       
        $procurements = Procurement::where('company_id', Auth::user()->company_id)->with('vehicle')->get();

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

    public function get_count_procurement_by_month($vehicleId){


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
        $countTripByMonth = [];
        
        // Parcourir les mois
        foreach ($months as $key => $month) {
            if($vehicleId == 0){
    
                // Compter le nombre de défaillances pour l'année et le mois en cours
                $count = Procurement::where('company_id', Auth::user()->company_id)
                    ->whereYear('created_at', $year)
                    ->whereMonth('created_at', $key)
                    ->count();
    
            }else{
                // Compter le nombre de défaillances pour l'année et le mois en cours
                $count = Procurement::where('company_id', Auth::user()->company_id)
                    ->where('vehicle_id',$vehicleId)
                    ->whereYear('created_at', $year)
                    ->whereMonth('created_at', $key)
                    ->count();
            }
            
            // Ajouter la valeur au tableau sans clé
            $countProcurementByMonth[] = $count;
        }
    
    
        return response()->json([
            'countProcurementByMonth' => $countProcurementByMonth
        ]);
    }

}
