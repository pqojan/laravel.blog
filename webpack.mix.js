const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.styles([
'resources/assets/admin/plugins/fontawesome-free/css/all.min.css',
'resources/assets/admin/plugins/css/adminlte.min.css',
], 'public/assets/admin/css/admin.css');


mix.scripts([
'resources/assets/admin/plugins/jquery/jquery.min.js',
'resources/assets/admin/plugins/bootstrap/js/bootstrap.bundle.min.js',
'resources/assets/admin/plugins/js/adminlte.min.js',
'resources/assets/admin/plugins/js/demo.js',

],'public/assets/admin/js/admin.js');

mix.copyDirectory('resources/assets/admin/plugins/fontawesome-free/webfonts','public/assets/admin/plugins/webfonts');
mix.copyDirectory('resources/assets/admin/plugins/img','public/assets/admin/plugins/img')