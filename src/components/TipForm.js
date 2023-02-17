import React, { useState } from 'react';
import './TipForm.css';

export default function TipForm() {
    const [bill, setBill] = useState(0);
    const [tip, setTip] = useState(0);
    const [split, setSplit] = useState(0);
    const [total, setTotal] = useState(0);
    const [splitTotal, setSplitTotal] = useState(0)
    const [finalTip, setFinalTip] = useState(0)

    const calculate = () => {
        const fullTip = parseFloat(bill * (tip / 100)).toFixed(2)
        const fullTotal = parseFloat(bill * ((tip / 100) + 1)).toFixed(2)
        const splitAmount = parseFloat(fullTotal / split).toFixed(2)

        setFinalTip(fullTip);
        setTotal(fullTotal)
        setSplitTotal(splitAmount)
    }

    return (
        <>
            <div className='tipForm'>
                <section className='bill'>
                    <h2>Enter your bill total: </h2>
                    <input type='number' value={bill} placeholder='0.00' onChange={(e) => setBill(e.target.value)} />
                </section>

                <h2>Enter your tip percentage: </h2>
                <section className='tip'>
                    <input type='number' value={tip} min='1' max='100' placeholder='0' onChange={(e) => setTip(e.target.value)} />
                </section>

                <h2>How many people are splitting the bill? </h2>
                <section className='split'>
                    <input type='number' value={split} placeholder='0' onChange={(e) => setSplit(e.target.value)} />
                </section>

                <input id='button' type='button' value='calculate' onClick={calculate} />
            </div>
            <section className='results'>
                {total > 0 ? <p>Total Tip: ${finalTip}</p> : ''}
                {total > 0 ? <p>Total Bill: ${total}</p> : ''}
                {total > 0 ? <h1>Total per Person: ${splitTotal}</h1> : ''}
            </section>
        </>
    )
}
