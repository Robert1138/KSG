<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Useraccount; 


class UseraccountController extends Controller
{
    public function index() {
        
        //date_default_timezone_set('America/Los_Angeles');
        //$date = date('Y-m-d H:i:s');
        //echo $date;

        return response()->json(Useraccount::all());
        //  return Useraccount::where('Id','=','1')->get();
        // return Login::select('Id','Username','Lawyer','Email')->get();
       
    }

    public function show($id) {
         
        $account = Useraccount::where('Id','=',$id)->get();
        return response()->json($account);
    }

    // untested
    public function store($id, $father, $mother, $sister_TG, $brother_TG, $daughter, $son, $sister_DA, $brotherInLaw_DA, $brother_DA, $sisterInLaw_DA, $cousin, $form_TG, $form_DA, $paid, $datePaid, $dateJoined) {

        $useraccount = new Useraccount;
        $useraccount->Id = $id;
        $useraccount->Father = $father;
        $useraccount->Mother = $mother;
        $useraccount->Sister_TG = $sister_TG;
        $useraccount->Brother_TG = $brother_TG;
        $useraccount->Daugther = $daughter;
        $useraccount->Son = $son;
        $useraccount->Sister_DA = $sister_DA;
        $useraccount->Brotherinlaw_DA = $brotherInLaw_DA;
        $useraccount->Brother_DA = $brother_DA;
        $useraccount->Sisterinlaw_DA = $sisterInLaw_DA;
        $useraccount->Cousin = $cousin;
        $useraccount->Form_TG = $form_TG;
        $useraccount->Form_DA = $form_DA;
        $useraccount->Paid = $paid;
        $useraccount->DatePaid = $datePaid;
        $useraccount->DateJoined = $dateJoined;
        $useraccount->save();

        return $useraccount;
    }


    public function update($id, $father, $mother, $sister_TG, $brother_TG, $daughter, $son, $sister_DA, $brotherInLaw_DA, $brother_DA, $sisterInLaw_DA, $cousin, $form_TG, $form_DA, $paid, $datePaid, $dateJoined) {
        
          Useraccount::where('id', $id)->update(['Father' => $father,'Mother'=>$mother,'Sister_TG'=>$sister_TG,'Brother_TG'=>$brother_TG,'Daughter'=>$daughter,'Son'=>$son,'Sister_DA'=>$sister_DA,'Brotherinlaw_DA'=>$brotherInLaw_DA,'Brother_DA'=>$brother_DA,'Sisterinlaw_DA'=>$sisterInLaw_DA,'Cousin'=>$cousin, 'Form_TG'=>$form_TG,'Form_DA'=>$form_DA,'Paid'=> $paid,'DatePaid'=>$datePaid,'DateJoined'=>$dateJoined]);
          
          return 204; 

    }



}