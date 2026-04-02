#!/bin/bash

set -e  # stop kalau ada error

echo "🚀 Starting Laravel deployment..."

PROJECT_DIR="/var/www/pptr-survey"

cd $PROJECT_DIR

echo "📦 Pull latest code..."
git pull origin main

echo "🧹 Cleaning old build..."
php artisan optimize:clear || true
rm -rf vendor

echo "⚙️ Setup environment..."
cp .env.production .env

echo "📥 Install PHP dependencies..."
composer install --no-dev --optimize-autoloader

echo "🔑 Generate app key (if not exists)..."
if ! grep -q "APP_KEY=base64" .env; then
  php artisan key:generate
else
  echo "APP_KEY already exists, skip..."
fi

# echo "🗄️ Run migrations..."
# php artisan migrate --force

echo "📦 Install & build frontend..."
npm install
npm run build

echo "⚡ Cache config..."
php artisan config:cache
php artisan route:cache
php artisan view:cache

echo "🔐 Set permissions..."
chown -R www-data:www-data storage bootstrap/cache
chmod -R 775 storage bootstrap/cache

mkdir -p storage/app/public/uploads/images
chmod -R 775 storage/app/public

if [ -f database/database.sqlite ]; then
  chmod 664 database/database.sqlite
  chown www-data:www-data database/database.sqlite
fi

echo "🔄 Restart services..."
systemctl restart php8.4-fpm
systemctl restart nginx

echo "🔄 optimize cache..."
php artisan config:clear
php artisan cache:clear
php artisan optimize:clear

echo "✅ Deployment finished!"