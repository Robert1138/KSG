<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Useraccount; 


class UseraccountController extends Controller
{
    public function index() {
        
        date_default_timezone_set('America/Los_Angeles');
        $date = date('Y-m-d H:i:s');
        echo $date;

        return Useraccount::all();
        //  return Useraccount::where('Id','=','1')->get();
        // return Login::select('Id','Username','Lawyer','Email')->get();
       
    }

    public function show($id) {
         
        $account = Useraccount::where('Id','=',$id)->get();
        return $account;
    }


    public function store($father, $mother, $sister_TG, $brother_TG, $daughter, $son, $sister_DA, $brotherInLaw_DA, $brother_DA, $sisterInLaw_DA, $cousin, $form_TG, $form_DA, $paid, $datePaid, $dateJoined) {

    }


    public function update($father, $mother, $sister_TG, $brother_TG, $daughter, $son, $sister_DA, $brotherInLaw_DA, $brother_DA, $sisterInLaw_DA, $cousin, $form_TG, $form_DA, $paid, $datePaid, $dateJoined) {

    }



}