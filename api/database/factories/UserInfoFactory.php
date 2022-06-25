<?php

namespace Database\Factories;

use App\Models\UserInfo;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\=UserInfo>
 */
class UserInfoFactory extends Factory
{   
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'surname' => $this->faker->name.'yan',
            'email' =>  $this->faker->email,
            'gender' => random_int(1,2),
            'type' => random_int(1,2),
            'age' => random_int(16,25),
            'password' => $this->faker->password(),
        ];
    }
}
