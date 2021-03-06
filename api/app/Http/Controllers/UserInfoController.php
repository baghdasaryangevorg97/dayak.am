<?php

namespace App\Http\Controllers;
use App\Models\UserInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;



class UserInfoController extends Controller
{
     function __construct()
	{
		// $this->middleware('auth:api', ['except' => ['login', 'register']]);
		function generateRandomString($length)
		{
			$characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
			$charactersLength = strlen($characters);
			$randomString = '';
			for ($i = 0; $i < $length; $i++) {
				$randomString .= $characters[rand(0, $charactersLength - 1)];
			}
			return $randomString;
		}
	}
    protected function respondWithToken($token)
	{
		return response()->json([
			'access_token' => $token,
			'token_type' => 'bearer',
			'expires_in' => auth('api')->factory()->getTTL() * 60 * 60 * 7,
            // 'userInfo' =>  auth()->userInfo()
		]);
	}

    public function signUp(Request $request){
        $data = $request->all();

        $validate = Validator::make($data, [
			'name' => 'required|max:255',
			'surName' => 'required|max:255',
			'email' => 'required|email|unique:user_infos,email',
			'gender' => 'required|not_in:0',
			'type' => 'required|not_in:0',
			'age' => 'required|gte:16',
			'password' => 'required|min:6',
			'password2' => 'required|same:password',
		], [], [
            'password2' => 'confirm password',
        ]);

        if ($validate->fails()) {
			return response(['error' => $validate->errors()], 422);
		}

        $newUser = new UserInfo();
        $newUser->name = $data['name'];
        $newUser->surname = $data['surName'];
        $newUser->email = $data['email'];
        $newUser->gender = $data['gender'];
        $newUser->type = $data['type'];
        $newUser->age = $data['age'];
        $newUser->password = Hash::make($data['password']);
        $newUser->save();
        $userInfo = UserInfo::all();
        return response()->json($userInfo);
    }

    public function signinForm(Request $request) {
        $data = $request->all();

        $validate = Validator::make($data, [
			'email' => 'required|email',
			'password' => 'required|min:6',
		]);

        if ($validate->fails()) {
			return response(['error' => $validate->errors()], 422);
		}
        $mailUser = $data['email'];
        $passwordUser = $data['password'];
        $userInfo = UserInfo::where('email', $mailUser)->first();
        $credentials = $request->only('email', 'password');
        if($userInfo) {
            if (Hash::check($passwordUser, $userInfo['password'])) {
                // return $this->respondWithToken($token);
                // return response()->json(['status' => 'success'], 200)->header('Authorization', $token);
                if (!$token = auth()->attempt($validate->validated())) {
					return response()->json(['error' => 'Unauthorized'], 401);
				}
                return $this->respondWithToken($token);
                // $credentials = $request->only('email', 'password');
                // if ($token = $this->guard()->attempt($credentials)) {
                //     return response()->json(['status' => 'success'], 200)->header('Authorization', $token);
                // }
                // return response()->json(['error' => 'login_error'], 401);
            }
            else {
                return response(['error' => ['both' => 'Incorrect Email or Password']], 422);
            }
        }

 
        return response(['error' => ['both' => 'Incorrect Email or Password']], 422);
    }

    // public function logout()
    // {
    //     $this->guard()->logout();
    //     return response()->json([
    //         'status' => 'success',
    //         'msg' => 'Logged out Successfully.'
    //     ], 200);
    // }

    //   public function user(Request $request)
    // {
    //     $user = User::find(Auth::user()->id);
    //     return response()->json([
    //         'status' => 'success',
    //         'data' => $user
    //     ]);
    // }
    // public function refresh()
    // {
    //     if ($token = $this->guard()->refresh()) {
    //         return response()
    //             ->json(['status' => 'successs'], 200)
    //             ->header('Authorization', $token);
    //     }
    //     return response()->json(['error' => 'refresh_token_error'], 401);
    // }
    /**
     * Return auth guard
     */
    // private function guard()
    // {
    //     return Auth::guard();
    // }
}
