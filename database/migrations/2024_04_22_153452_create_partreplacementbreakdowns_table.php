<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('partreplacementbreakdowns', function (Blueprint $table) {
            $table->id();
            $table->string('name_partreplacementbreakdown')->nullable();
            $table->string('repair_amount_partreplacementbreakdown')->nullable();
            $table->string('garage_name_partreplacementbreakdown')->nullable();
            $table->string('garage_phone_partreplacementbreakdown')->nullable();
            $table->string('photo_faulty_device_trouble')->nullable();
            $table->text('location_of_the_failure_partreplacementbreakdown')->nullable();
            $table->text('old_photo_part_partreplacementbreakdown')->nullable();
            $table->text('new_photo_part_partreplacementbreakdown')->nullable();
            $table->foreignId('typebreakdown_id')->constrained('typebreakdowns')->onDelete('cascade');
            $table->foreignId('vehicle_id')->constrained('vehicles')->onDelete('cascade');
            $table->foreignId('company_id')->constrained('companies')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('partreplacementbreakdowns');
    }
};
