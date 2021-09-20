//import { register } from "../lib/user";

export default function Register() {
    return <>
      <div class="row">
          <div class="col-md-6 offset-md-3">
              <div class="card">
                  <div class="card-body">
                        <form method="post" onSubmit={register}>
                            <label for="email">Email Adresse</label>
                            <input type="email" class="form-control" name="email" id="email" placeholder="Email Adresse" />
                            <label for="password">Passwort</label>
                            <input type="password" class="form-control" name="password" id="password" placeholder="Passwort" />
                            <label for="password">Passwort wiederholen</label>
                            <input type="password" class="form-control" name="password2" id="password2" placeholder="Passwort wiederholen" />

                            <input type="submit" class="btn btn-outline-success" value="Registrieren" />
                        </form>
                  </div>
              </div>
          </div>
      </div>
    </>;
  }
  