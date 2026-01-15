cp .env.production .env
composer install --no-dev --optimize-autoloader
php artisan key:generate

npm install
npm run build

php artisan optimize:clear
php artisan optimize

# php artisan config:clear
# php artisan cache:clear
# php artisan config:cache