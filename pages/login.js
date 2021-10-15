import $ from 'jquery';
import axios from 'axios';
import Cookies from 'universal-cookie';

import Success from '../components/login/success';
import Failed from '../components/login/failed';

export default function Login() {
    const loginAction = (e) => {
        const username = $('#username').val();
        const password = $('#password').val();

        axios.post(
            'http://127.0.0.1:43921/auth/login',
            {
                username: username,
                password: password
            }
        ).then((res) => {
            if (res.data.auth) {
                const cookie = new Cookies();
                cookie.set('UID', res.data.uid, { path: '/' });
                cookie.set('TOKEN', res.data.token, { path: '/' });
                if ($('#login-success-info').hasClass('hidden')) {
                    $('#login-success-info').removeClass('hidden');
                }
            } else {
                if ($('#login-failed-info').hasClass('hidden')) {
                    $('#login-failed-info').removeClass('hidden');
                }
            }
        });
    };

    return <>
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <Success />
                <Failed />

                <div class="card">
                    <div class="card-body">
                        <label for="email">Benutzername</label>
                        <input type="email" class="form-control" name="username" id="username" />
                        <label for="password">Passwort</label>
                        <input type="password" class="form-control" name="password" id="password" />

                        <button class="btn btn-outline-success w-100" onClick={loginAction}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    </>;
}
