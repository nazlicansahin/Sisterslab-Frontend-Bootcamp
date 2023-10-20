import PropTypes from 'prop-types';
DataList.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired
    })).isRequired,
    text: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  };
  


const DataList = (props) => {
    console.log(props);
    const { title, data, text, number } = props;
  
    return (
      <>
        <div>{title}</div>
        <div>
          Hello {data.name} age is {data.age}
        </div>
        <div>
            {text} {number}
            
          {/* <ul>
            {data.map((data, index) => {
              return <li key={index}>{text}</li>;
            })}
          </ul> */}
        </div>
      </>
    );
  };
  
  export default DataList;