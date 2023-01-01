<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\category_lot>
 */
class CategoryLotFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'lot_id' => fake()->numberBetween(1, 1000),
            'category_id' => fake()->numberBetween(1, 100),
        ];
    }
}
