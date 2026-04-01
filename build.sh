# JANGAN LUPA CREDENTIAL GOOGLE DI SET DULU
# 

rm .env
rm -f composer.lock vendor

cp .env.production .env
# composer install --no-dev --optimize-autoloader

composer install --no-dev
php artisan key:generate

npm install
npm run build

php artisan optimize:clear
php artisan optimize

chmod -R 775 storage bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache
chown -R apache:apache storage bootstrap/cache

chmod 664 database/database.sqlite
chmod 775 database
chmod 775 database
chown www-data:www-data database/database.sqlite

mkdir -p storage/app/public/uploads/images
chmod -R 775 storage/app/public



# php artisan config:clear
# php artisan cache:clear
# php artisan config:cache