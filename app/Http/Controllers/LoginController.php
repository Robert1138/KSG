<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Login; 


class LoginController extends Controller
{
    // returns all login for every user
    public function index() {

    // return Login::all();
        return Login::select('Id','Username','Lawyer','Email')->get();
   
}

    // return login info for one user
    public function show($username) {

        $account = Login::where("Username","=",$username)->get();
         //return Login::findOrFail($Id);
         return $account; 
    }

    // insert a user into the database 
    public function store($username, $password, $isLawyer, $email) {

       $id = Login::max('Id');


       $user = new Login;
       $user->Id = $id + 1;
       $user->Username = $username;
       $user->Password = $password;
       $user->Lawyer = $isLawyer;
       $user->Email = $email;
       $user->save();

       return $user;
    }

    // delete by id
    public function delete(Request $request, $id) {

        $user = Login::find($id);
        $user->delete();
        return "204";
    }

}
