<?php

/**
 * Created by Reliese Model.
 * Date: Thu, 21 Mar 2019 01:32:10 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class Legalform
 * 
 * @property int $Id
 * @property string $Username
 * @property boolean $Uploadedform
 *
 * @package App\Models
 */
class Legalform extends Eloquent
{
	protected $primaryKey = 'Id';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'Id' => 'int',
		'Uploadedform' => 'boolean'
	];

	protected $fillable = [
		'Username',
		'Uploadedform'
	];
}
