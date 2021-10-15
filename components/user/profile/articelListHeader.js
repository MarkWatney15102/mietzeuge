export default function ArticelListHeader({articelCount}) {
    return <>
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <p>Aktive Artikel: {articelCount}</p>
                    </div>
                </div>
            </div>
        </div>
    </>;
}