<?php

/**
 * Created by Reliese Model.
 * Date: Thu, 21 Mar 2019 01:32:10 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class Useraccount
 * 
 * @property int $Id
 * @property string $Father
 * @property string $Mother
 * @property string $Sister_TG
 * @property string $Brother_TG
 * @property string $Daughter
 * @property string $Son
 * @property string $Sister_DA
 * @property string $Brotherinlaw_DA
 * @property string $Brother_DA
 * @property string $Sisterinlaw_DA
 * @property string $Cousin
 * @property boolean $Form_TG
 * @property boolean $Form_DA
 * @property bool $Paid
 * @property string $DatePaid
 * @property string $DateJoined
 *
 * @package App\Models
 */
class Useraccount extends Eloquent
{
	protected $table = 'useraccount';
	protected $primaryKey = 'Id';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'Id' => 'int',
		'Form_TG' => 'boolean',
		'Form_DA' => 'boolean',
		'Paid' => 'bool'
	];

	protected $fillable = [
		'Father',
		'Mother',
		'Sister_TG',
		'Brother_TG',
		'Daughter',
		'Son',
		'Sister_DA',
		'Brotherinlaw_DA',
		'Brother_DA',
		'Sisterinlaw_DA',
		'Cousin',
		'Form_TG',
		'Form_DA',
		'Paid',
		'DatePaid',
		'DateJoined'
	];
}
