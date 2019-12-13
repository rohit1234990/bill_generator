import React from 'react'

class Taxes extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {

        }
    }

    render() {
        return (
            <div className='border p-2'>
                <div className='row'>
                    <div className = 'col-12'>
                        <h4 className = 'text-center'>Tax & Discounts</h4>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <label>GST :</label>
                    </div>
                    <div className='col-6'>
                        <input type='text' value = '14' placeholder='In Percentage' className='form-control'></input>
                    </div>
                </div>        
                <div className='row mt-1'>
                    <div className='col-6'>
                        <label>Other :</label>
                    </div>
                    <div className='col-6'>
                        <input type='text' value = '0' placeholder='In Percentage' className='form-control'></input>
                    </div>
                </div>      
                <div className='row mt-4'>
                    <div className='col-6'>
                        <label>Discount :</label>
                    </div>
                    <div className='col-6'>
                        <input type='text' placeholder='In Rupees' className='form-control'></input>
                    </div>
                </div>        
                <div className='row mt-1'>
                    <div className='col-6'>
                        <label>Other :</label>
                    </div>
                    <div className='col-6'>
                        <input type='text' placeholder='In Rupees' className='form-control'></input>
                    </div>
                </div>  
                <div className='row mt-3'>
                    <div className = 'col'>
                        <button className='form-control btn btn-primary' >generate</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Taxes