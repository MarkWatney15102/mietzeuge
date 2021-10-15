import Articel from "./articel";

export default function ArticelList ({articel, username}) {
    let articels = [];
    for (let k in articel) {
        articels.push(articel[k]);
    }
    return <>
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                    {
                        Object.keys(articels).map(
                            (key, index) => {
                                return <Articel data={articels[key]} username={username} />
                            }
                        )
                    }
                    </div>
                </div>
            </div>
        </div>
    </>;
}