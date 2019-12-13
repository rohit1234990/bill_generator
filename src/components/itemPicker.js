import React from 'react'

class ItemPicker extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            picked : [],
            item   : '',
            qty    : '',
            price  : ''
        }
    }

    handleChange = (event) => {
        //console.log('change occured ', event.target.name, event.target.value)
        this.setState({
            [event.target.name] : event.target.value
        })

        console.log(this.state)
    }

    itemAdded = (event) => {
        let bundle = {}
        console.log(this.state.item, this.state.qty)
        bundle['item']  = this.state.item
        bundle['qty']   = this.state.qty
        bundle['price'] = this.props.itemList.filter((elem) => {
                            return elem.item == this.state.item
                         })[0]['price']

        let _picked = this.state.picked
        _picked.push(bundle)
        this.setState({
            picked : _picked
        }) 
        
        this.props.callbackPurchasedItems(this.state.picked)
        console.log(this.state.picked) 
    }

    render() {
        return (
            <div className='border p-1'>
                <div className='d-flex'>
                    <select name = 'item' onChange = {this.handleChange} className='form-control mr-5'>
                        <option value='select'>Select Item</option>
                        {/* {console.log('itempicker : ', this.props.itemList)} */}
                        {this.props.itemList.map((item) => {
                        return <option value={item.item}>{item.item}</option>
                        })}
                    </select>
                    <select name = 'qty' onChange = {this.handleChange} className='form-control'>
                        <option value='select'>Select Qty</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                <button onClick = {this.itemAdded} className='btn btn-outline-primary ml-3'>+</button>
                </div>
                
            </div>
        )
    }
}

export default ItemPicker