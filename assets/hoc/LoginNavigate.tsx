import {useRouter} from 'next/router'
import {FC, PropsWithChildren, useEffect, useState} from 'react'
import Modal from 'components/Modal/Modal'
import {useAuth} from '../context/AuthContext'

export const LoginNavigate: FC<PropsWithChildren> = ({children}) => {
  const router = useRouter()
  const {isAuth} = useAuth()
  const [modalIsOpen, setModalIsOpen] = useState(false)

  useEffect(() => {
    if (!isAuth) {
      setModalIsOpen(true)
    }
  }, [isAuth])

  const handleCloseModal = () => {
    setModalIsOpen(false)
    router.push('/')
  }

  return (
    <>
      {isAuth ? children : null}
      <Modal isOpen={modalIsOpen} onClose={handleCloseModal}/>
    </>
  )
}