import '../scss/component/PriceFilter.scss';


export const PriceFilter = ({lowToHigh, highToLow}) => {

        
    return (
        <div className="filter-search">
            <div className='search-box'>
                <label className='search-label'>Search:</label>
                <input
                    className='input'
                    type='search'
                    placeholder='Search here...'
                />
            </div>
            <div className='price-filter-container'>
                <label className='price-filter'>Sorted by:</label>
                    <select className='select-box'>
                        <option value='select'>Select</option>
                        <option value='asc' onChange={lowToHigh}>Low to High</option>
                        <option value='desc' onChange={highToLow}>High to Low</option>
                    </select>
                
            </div>
        </div>
    )
}