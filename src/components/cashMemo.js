import React from 'react'

class CashMemo extends React.Component {
    constructor(props) {
        super(props)
        
        
    }

    render() {
        console.log('cash memo : ', this.props.purchasedItems)
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h2>Cash Memo</h2>
                    </div>
                    <div className='col-12'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Item Name</th>
                                    <th>Qty</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.purchasedItems.map((item) => {
                                    return <tr>
                                        <td>{item.item}</td>
                                        <td>{item.qty}</td>
                                        <td>{item.price}</td>
                                        <td>{item.qty * item.price}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default CashMemo