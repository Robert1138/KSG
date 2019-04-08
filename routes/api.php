<?php

use Illuminate\Http\Request;
use App\Models\Login; 


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/test',function(){
    
    $test = "this text";

    $logins = Login::all();

    echo $logins;

    /*
    try {
        DB::connection()->getPdo();
        $test = "db is connected";
    } catch (\Exception $e) {
        $test = "failure";
        die("Could not connect to the database.  Please check your configuration. error:" . $e );
    }
    */





    return $test;

});





// return all user info
Route::get('users', 'LoginController@index');
// return info for specific user
Route::get('user/{Username}', 'LoginController@show');
// delete user by Id
Route::delete('delete/{id}', 'LoginController@delete');
// add a user 
Route::post('user/{username}/{password}/{isLawyer}/{email}','LoginController@store');

// return all user account info
//Route::get('account', 'UseraccountController@index');


////////// USERACCOUNT Routes
Route::get('accounts', 'UseraccountController@index');
Route::get('account/{id}','UseraccountController@show');
