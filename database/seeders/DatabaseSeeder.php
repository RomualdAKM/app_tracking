<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Company::factory()->create([
           
            'name_company' => 'Super',          
            'number_company' => '0000000000',               
            'email_company' => 'vibecrodevs@gmail.com',
            'logo_company' => 'logo_tracking.png',
        
        ]);

        \App\Models\User::factory()->create([
           
            'name' => 'Super',         
            'number' => '0000000000',               
            'email' => 'vibecrodevs@gmail.com',
            'role' => 'admin',
            'company_id' => '1',
            'password' => Hash::make('motdepasse'),
        
        ]);
    }
}
