import AddNumber from '../components/AddNumber'
import store from '../store'

export const AddNumberContainer = () => {
  return (
    <AddNumber
      onClick={(size) => {
        store.dispatch({ type: 'INCREMENT', size })
      }}
    />
  )
}

export default AddNumberContainer
