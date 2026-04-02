# JANGAN LUPA CREDENTIAL GOOGLE DI SET DULU
# 


php artisan config:clear
php artisan cache:clear
php artisan config:cache

rm .env
rm -rf composer.lock vendor package-lock.json

cp .env.production .env
# composer install --no-dev --optimize-autoloader

composer install --no-dev
php artisan key:generate

npm install
npm run build

php artisan optimize:clear
php artisan optimize

sudo chmod -R 775 storage bootstrap/cache
sudo chown -R www-data:www-data storage bootstrap/cache
sudo chown -R www-data:www-data storage bootstrap/cache

sudo chown -R www-data:www-data /var/www/pptr-survey
sudo chmod -R 775 /var/www/pptr-survey/storage
sudo chmod -R 775 /var/www/pptr-survey/bootstrap/cache

sudo chmod 664 database/database.sqlite
sudo chmod 775 database
sudo chown www-data:www-data database/database.sqlite

mkdir -p storage/app/public/uploads/images
sudo chmod -R 775 storage/app/public

sudo systemctl restart nginx
sudo systemctl restart php8.4-fpm

php artisan config:clear
php artisan cache:clear
php artisan config:cache