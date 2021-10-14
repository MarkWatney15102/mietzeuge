export default function ArticelDescription({description, category}) {
    return <>
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-xs-12">
                        <p>Kategorie: {category}</p>
                        <p>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>;
}