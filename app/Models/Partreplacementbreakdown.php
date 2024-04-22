<?php

namespace App\Models;

use App\Models\Vehicle;
use App\Models\Typebreakdown;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Partreplacementbreakdown extends Model
{
    use HasFactory;

    public function vehicle():BelongsTo{

        return $this->belongsTo(Vehicle::class);
        
    }
    
    public function typebreakdown():BelongsTo{

        return $this->belongsTo(Typebreakdown::class);
        
    }
}
