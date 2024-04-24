<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CompanyController extends Controller
{
    public function save_company(Request $request){

        $validator = Validator::make($request->all(), [
            'name_company' => 'required',
            'number_company' => 'required',
            'email_company' => 'required',
            'logo_company' => 'required',
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
        if ($request->hasFile('logo_company')) {
            $fichier = $request->file('logo_company');
            $file = time() . '.' . $fichier->getClientOriginalExtension();
            $upload_path = public_path('logo_company');
            $fichier->move($upload_path, $file);
        } else {
            $file = null;
        }
        
        $company = new Company();

        $company->name_company =  $request->name_company;
        $company->number_company = $request->number_company;
        $company->email_company =  $request->email_company;
        $company->logo_company =  $file;

        $company->save();


        $response = [
            'success' => true,
            'message' => 'Succés'
        ];    
    
        return response()->json(
            $response,
            200
        );
    }
    public function update_company(Request $request,$id){

        $validator = Validator::make($request->all(), [
            'name_company' => 'required',
            'number_company' => 'required',
            'email_company' => 'required',
            // 'logo_company' => 'required',
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
        if ($request->hasFile('logo_company')) {
            $fichier = $request->file('logo_company');
            $file = time() . '.' . $fichier->getClientOriginalExtension();
            $upload_path = public_path('logo_company');
            $fichier->move($upload_path, $file);
        } else {
            $file = null;
        }
        
        $company =  Company::find($id);

        $company->name_company =  $request->name_company;
        $company->number_company = $request->number_company;
        $company->email_company =  $request->email_company;

        if($file){

            $company->logo_company =  $file;
        }

        $company->save();


        $response = [
            'success' => true,
            'message' => 'Succés'
        ];    
    
        return response()->json(
            $response,
            200
        );
    }

    public function get_companies(){

        $companies = Company::all();

        return $companies;
    }
    public function get_company($id){

        $company = Company::find($id);

        return $company;
    }


    public function delete_company($id){


        $company = Company::find($id);

        $company->delete();
    }
}
