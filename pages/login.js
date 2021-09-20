import { login, logout } from "../lib/user";
import { auth } from '../lib/firebase.config';

export default function Login() {
  return <>
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-body">
                    <form method="post" onSubmit={login}>
                        <label for="email">Email Adresse</label>
                        <input type="email" class="form-control" name="email" id="email" />
                        <label for="password">Passwort</label>
                        <input type="password" class="form-control" name="password" id="password" />

                        <input type="submit" class="btn btn-outline-success" value="Login" />
                    </form>
                </div>
            </div>
        </div>
        <button class="btn btn-danger" onClick={logout}>Logout</button>
    </div>
  </>;
}
