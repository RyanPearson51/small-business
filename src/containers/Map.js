import { connect } from 'react-redux'
import Map from '../components/Map'

const mapStateToProps = (state) => {
    return {
        listings: state.listings
    }
}

export default connect(mapStateToProps)(Map)