import PropTypes from 'prop-types';

function Main(props) {
    return (
        <>
            <h1>Main Container</h1>
        </>
    )
}

const propType = {
    id: PropTypes.string
}

const props = {
    id: 'test'
}

Main.propTypes = propType;

Main.defaultProps = props;

// PropTypes.checkPropTypes(propType, props, 'prop', 'Main', (err) => {
//     console.log(err, "adfds");
// });

export default Main;