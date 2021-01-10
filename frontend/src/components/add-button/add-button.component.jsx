import './add-button.styles.css';

const AddButton = ({  history }) => {
  return (
    <button onClick={() => history.push('phone/create')} className='add-button'>
      +
    </button>
  );
};

export default AddButton;
