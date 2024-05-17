<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Company;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Mail\ForgotPasswordMail;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request){

        //validator
        $validator = Validator::make($request->all(),[
          'name' => 'required',
          'email' => 'required|email',
          'company_email' => 'required|email',
          'number' => 'required',
          'password' => 'required',
          'company_email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'exists:companies,email_company'],
          'c_password' => 'required|same:password'
        ]);
  
          if($validator->fails()){
              $response = [
                  'success' => false,
                  'message' => $validator->errors()
              ];
              return response()->json(
                  $response,200
              );
          }
  
          $input = $request->all();
          $input['password'] = bcrypt($input['password']);
         // $user = User::create($input);
         $company = Company::where('email_company',$request->company_email)->first();
  
         $user = new User();
         $user->name = $request->name;
         $user->email = $request->email;
         $user->number = $request->number;
         $user->company_id = $company->id;
         $user->role = 'admin';
         $user->password = $input['password'];
         $user->save();
  
          $success['token'] = $user->createToken('MyApp')->plainTextToken;
          $success['name'] = $user->name;
  
          $response = [
              'success' => true,
              'data' => $success,
              'message' => "User register successfully"
          ];
  
          return response()->json($response,200);
  
          }

          public function login(Request $request){

            if (Auth::attempt([
                'email' => $request->email,
                'password' => $request->password
            ])) {
                 $user = $request->user();
                $success['token'] = $user->createToken('MyApp')->plainTextToken;
                $success['name'] = $user->name;

                $response = [
                    'success' => true,
                    'data' => $success,
                    'message' => "Login successfully"
                ];
                return response()->json($response, 200);
            }else {
                $response = [
                    'success' => false,
                    'message' => "Coordinate not found"
                ];
                return response()->json($response);
            }

        }

        public function get_info_auth_user(){

            $authIdUser = Auth::user()->id;

            $user = User::where('id',$authIdUser)->with('company')->first();

            // dd($user);

            return $user;

        }


        public function forgot_password(Request $request){

            $validator = Validator()->make($request->all(),[
                'email' => 'required|email|exists:users,email'
            ]);
    
            if ($validator->fails()) {
                $response = [
                    'success' => false,
                    'message' => $validator->errors()
                ];
                return response()->json(
                    $response
                );
            }
    
            $newPassword = Str::random(8);
    
            $user = User::where('email',$request->email)->first();

            if($user){
                
                Mail::to($user->email)->send(new ForgotPasswordMail($newPassword));
            }
    
            $input['password'] = bcrypt($newPassword);
            $user->password = $input['password'];
    
            $user->save();
    
            $response = [
                'success' => true,
                'message' => 'Vous Avez recu un nouveau mot de passe, Veillez consulter votre Email'
            ];
            return response()->json(
                $response,
                200
            );
        }


        public function reset_password(Request $request){

            $validator = Validator::make($request->all(), [
                'password' => 'required',
                'c_password' => 'required|same:password'
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
    
            $input = $request->all();
            $input['password'] = bcrypt($input['password']);
    
            $user_id = Auth::user()->id;
    
            $user = User::find( $user_id);
            $user->password = $input['password'];
            $user->save();
    
            $response = [
                'success' => true,
                'message' => "reset password  successfully"
            ];
            return response()->json(
                $response,
                200
            );
        }
}
