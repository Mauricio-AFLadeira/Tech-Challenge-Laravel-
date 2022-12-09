<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Auth;
use Exception;
use App\Models\User;

class GitHubController extends Controller
{
    public function gitRedirect()
    {
        return Socialite::driver('github')->redirect();
    }

    public function gitCallback()
    {
        try {

            $user = Socialite::driver('github')->user();

            //$user = $gitHub;


            $searchUser = User::where('github_id', $user->id)->first();

            if ($searchUser) {

                Auth::login($searchUser);

                return redirect('/welcome');
            } else {
                $gitUser = User::create([
                    'name' => $user->name,
                    'email' => $user->email,
                    'github_id' => $user->id,
                    'auth_type' => 'github',
                    'password' => encrypt('gitpwd059')
                ]);

                Auth::login($gitUser);

                return redirect('/welcome');
            }
        } catch (Exception $e) {
            dd($e->getMessage());
        }
    }
}
