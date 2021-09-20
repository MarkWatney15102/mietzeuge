import styles from '../../styles/BookBar.module.css';

export default function BookBar() {
    return <>
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">Mieten</h2>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-xs-12">
                        <form method="post">
                            <div className={styles.priceContainer}>
                                <div className={styles.daylyPriceContainer}>
                                    <h5 className={styles.priceLabel}>Kosten pro Tage:</h5>
                                    <p className={styles.price}>13,70€</p>
                                </div>
                                <div className={styles.priceKaution}>
                                    <h6 className={styles.priceLabel}>Kaution</h6>
                                    <p className={styles.priceKaution}>15€</p>
                                </div>
                                <p className={styles.additionalCosts}>zzgl. 2%</p>
                            </div>
                            <div class="input-group">
                                <input type="number" class="form-control" name="days" id="days" min="1" />
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">Tage</span>
                                </div>
                            </div>
                            <br />
                            <label>Datum des Mietanfangs</label>
                            <input type="date" class="form-control" name="dateFrom" id="dateFrom" />
                            <br />
                            <input type="submit" class="btn btn-outline-success btn-block w-100" value="Mietanfrage stellen" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>;
}