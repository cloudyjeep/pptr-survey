cp .env.production .env
php artisan config:clear
php artisan cache:clear
php artisan config:cache
php artisan key:generate