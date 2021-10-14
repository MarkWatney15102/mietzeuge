export default function ListElement({data}) {
    const uri = '/items/' + data['ID'];
    return <>
        <br/>
        <div class="card">
            <div class="card-body">
                <a href={uri}><h3 class="card-title">{data['title']}</h3></a>
            </div>
        </div>
    </>;
}