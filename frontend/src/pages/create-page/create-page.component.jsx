import CreateForm from '../../components/create-form/create-form.components';
import './create-page.styles.css'

const CreatePage = ({history}) => {
  return (
    <div>
    <h1>Create A phone</h1>
      <CreateForm history={history}/>
    </div>
  )
}

export default CreatePage
