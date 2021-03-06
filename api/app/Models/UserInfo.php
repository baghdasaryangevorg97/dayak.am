<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class UserInfo extends Authenticatable implements JWTSubject
// class UserInfo extends Authenticatable implements JWTSubject
{
    use Notifiable;
    // use HasApiTokens, HasFactory, NotiFiable;
    protected $collection = 'dayakam';
    protected $fillable = [
        'name',
        'surname',
        'email',
        'gender',
        'type',
        'age',
        'password',
    ];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }
    
    public function getJWTCustomClaims()
    {
        return [];
    }
}
