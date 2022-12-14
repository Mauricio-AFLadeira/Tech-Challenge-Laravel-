# :chart_with_downwards_trend: Tech-Challenge

## Technologies
    - [PHP](https://www.php.net)
    - [Laravel](https://laravel.com)
    - [MySql](https://www.mysql.com)
    - [Node](https://nodejs.org/en/) - 18.12.1
    - [XAMPP](http://localhost/dashboard/)

## Requirements
    
    Clone this repo:

    ```
    git clone https://github.com/Mauricio-AFLadeira/Tech-Challenge-Laravel-.git
    ```

    In this path https://github.com/settings/developers:

        1- Select "OAuth App"
        2- Create new OAuth App
        3- Copy your Client ID e generate a new client secret
        4- Use your keys Client ID e Client secret at the .env as the steps bellow

## Setup

    Inside the project directory:

    *At the ```cmd```, type in order:

    1)

    ```
    cp .env.example .env
    ```

    2)

    ```
    composer install
    ```

    3)

    ```
    php artisan key:generate
    ```

    4)

    ```
    php artisan migrate
    ```
    
    5)

    ```
    npm install
    ```

    *At the ```.env```:

    ```
    CLIENT_ID="keyClientID"

    CLIENT_SECRET="keyClientSecrect"
    ```

## Running

    1- Start XAMPP, turn on Apache and MySQL

    2- Open the ```cmd```:

    ```
    npm run dev
    ```

    3- Open other ```cmd```:

    ```
    php artisan serve
    ```

### access (http://127.0.0.1:800)