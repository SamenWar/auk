import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js', "resources/js/category.js", "resources/js/lot.js", 'resources/js/crud_files/postCat.js','resources/js/crud_files/postLot.js'],
            refresh: true,
        }),
    ],
});
