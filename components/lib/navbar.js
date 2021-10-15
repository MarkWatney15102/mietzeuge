import user from '../../lib/user/user';
import NavbarUserProfile from '../user/navbarUserProfile';
import Search from './search';

export default function Navbar() {
    const userLogedIn = user.isUserLogedIn();

    let userProfile = '';

    if(userLogedIn) {
        userProfile = <NavbarUserProfile />
    }

    return <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Home</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/articel/list">Artikel Liste</a>
                        </li>
                    </ul>
                    <Search />
                    {userProfile}
                </div>
            </div>
        </nav>
    </>;
}