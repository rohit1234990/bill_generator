import React from 'react'

class CashMemo extends React.Component {
    constructor(props) {
        super(props)
          
    }

    getTaxAmount() {
        var sum = 0
        for(let i = 0; i < this.props.purchasedItems.length; i++) {
            sum = sum + (this.props.purchasedItems[i].price * this.props.purchasedItems[i].qty)
        }

        // apply discout
        console.log('received taxDiscount : ', this.props.taxDiscount)
        
        let taxAmount1 = sum * Number(this.props.taxDiscount.gst) * 0.01
        let taxAmount2 = sum * Number(this.props.taxDiscount.otherTax) * 0.01
        
        return taxAmount1 + taxAmount2
    }



    getTotalBillAmount() {
        var sum = 0
        for(let i = 0; i < this.props.purchasedItems.length; i++) {
            sum = sum + (this.props.purchasedItems[i].price * this.props.purchasedItems[i].qty)
        }

        // apply discout
        console.log('received taxDiscount : ', this.props.taxDiscount)
        
        let taxAmount1 = sum * Number(this.props.taxDiscount.gst) * 0.01
        let taxAmount2 = sum * Number(this.props.taxDiscount.otherTax) * 0.01
        let discount = Number(this.props.taxDiscount.discount) + Number(this.props.taxDiscount.otherDiscount)

        sum = sum + taxAmount1 + taxAmount2
        sum = sum - discount
        
        return Math.round(sum)
    }

    render() {
        console.log('purchsed items : ', this.props.purchasedItems)
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
                            <tfoot>
                                <tr>
                                    <td></td><td></td>
                                    <td><b>Tax Paid:</b></td>
                                    <td><b>{this.getTaxAmount()}</b></td>
                                </tr>

                                <tr>
                                    <td></td><td></td>
                                    <td><b>Discount:</b></td>
                                    <td><b>{(Number(this.props.taxDiscount.discount) + Number(this.props.taxDiscount.otherDiscount)) * -1}</b></td>
                                </tr>
                                <tr>
                                    <td></td><td></td>
                                    <td><b>Total:</b></td>
                                    <td><b>{this.getTotalBillAmount()}</b></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default CashMemo