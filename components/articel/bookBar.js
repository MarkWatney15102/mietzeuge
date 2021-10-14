import axios from 'axios';

import $ from 'jquery';

import styles from '../../styles/BookBar.module.css';

const BookBar = ({ articelId, pricePerDay, deposit, additionalCost }) => {
    const saveArticelRequest = (e) => {
        const days = $('#days').val() ?? "";
        const startDay = $('#startDay').val() ?? "";
        axios.post("http://127.0.0.1:43921/articel/request/" + articelId, {days: days, startDay: startDay});
    }

    return <>
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">Mieten</h2>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-xs-12">
                        <div className={styles.priceContainer}>
                            <div className={styles.daylyPriceContainer}>
                                <h5 className={styles.priceLabel}>Kosten pro Tage:</h5>
                                <p className={styles.price}>{pricePerDay}€</p>
                            </div>
                            <div className={styles.priceKaution}>
                                <h6 className={styles.priceLabel}>Kaution</h6>
                                <p className={styles.priceKaution}>{deposit}€</p>
                            </div>
                            <p className={styles.additionalCosts}>zzgl. {additionalCost}%</p>
                        </div>
                        <div class="input-group">
                            <input type="number" class="form-control" name="days" id="days" min="1" />
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">Tage</span>
                            </div>
                        </div>
                        <br />
                        <label>Datum des Mietanfangs</label>
                        <input type="date" class="form-control" name="startDay" id="startDay" />
                        <br />
                        <button class="btn btn-outline-success btn-block w-100" onClick={saveArticelRequest} >Mietanfrage stellen</button>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default BookBar;