import React, { useEffect } from 'react'
import UserPanel from '../../components/AdminTools/UserPanel'
import BookingPanel from '../../components/AdminTools/BookingPanel'
import { useNavigate } from 'react-router-dom'

const AdminPage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const userLog = localStorage.getItem('token')
    if (!userLog) {
      navigate('/login')
    }
  }, [])
  return (
    <>
    <UserPanel/>
    <BookingPanel/>
    </>
  )
}

export default AdminPage