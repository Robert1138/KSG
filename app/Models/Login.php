<?php

/**
 * Created by Reliese Model.
 * Date: Thu, 21 Mar 2019 01:32:10 +0000.
 */

 namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class Login
 * 
 * @property int $Id
 * @property string $Username
 * @property string $Password
 * @property bool $Lawyer
 * @property string $Email
 *
 * @package App\Models
 */
class Login extends Eloquent
{
	protected $table = 'login';
	protected $primaryKey = 'Id';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'Id' => 'int',
		'Lawyer' => 'bool'
	];

	protected $fillable = [
		'Username',
		'Password',
		'Lawyer',
		'Email'
	];
}
