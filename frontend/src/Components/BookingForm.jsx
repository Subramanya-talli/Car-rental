import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext';
const BookingForm = () => {
     const { user, token, setToken } = useContext(AppContext);
  return (
    <div>BookingForm</div>
  )
}

export default BookingForm