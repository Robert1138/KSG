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