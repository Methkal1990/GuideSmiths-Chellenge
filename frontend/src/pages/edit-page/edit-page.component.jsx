import EditForm from '../../components/edit-form/edit-form.component';
import './edit-page.styles.css';

const EditPage = ({ history, match }) => {
  const phoneid = match.params.phoneid;
  return (
    <div>
    <h1>Edit A Phone</h1>
      <EditForm history={history} phoneid={phoneid} />
    </div>
  );
};

export default EditPage;
