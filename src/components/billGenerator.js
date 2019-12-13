import React from 'react'
import ItemPicker from './itemPicker'
import Taxes from './taxes'
import CashMemo from './cashMemo'

class BillGenerator extends React.Component {
    constructor(props) {
        super(props)
        
        this.items = [{'item' : 'Idli', 'price' : 30},
                      {'item' : 'Dosa', 'price' : 40},
                      {'item' : 'Tea', 'price' : 10},,
                      {'item' : 'Poha', 'price' : 20}  
                     ]

        this.state = {
            purchasedItems : []
        }
    }

    handlePurchasedItems = (items) => {
        this.setState({
            purchasedItems : items
        })
        //console.log('items form there : ', items)
        console.log('purchsed items, billGen : ', this.state.purchasedItems )
    }

    render() {
        //console.log(this.items)
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1 className='text-center my-5'>Bill Generator</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-7'>
                        <ItemPicker itemList = {this.items} callbackPurchasedItems = {this.handlePurchasedItems}/>
                    </div>
                    <div className = 'col-5'>
                        <Taxes/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <CashMemo purchasedItems = {this.state.purchasedItems}/>
                    </div>
                </div>
            </div>
        )
    }

}

export default BillGenerator