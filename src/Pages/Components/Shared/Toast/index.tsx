import { AlertsContext } from '@/Pages/Components/Shared/Toast/AlertsProvider.context'
import { ToastProps } from '@/Pages/Components/Shared/Toast/model'
import { Toast } from 'bootstrap'
import { useContext, useEffect, useState } from 'react'

export function AppToast() {
  const toastData = useContext(AlertsContext)

  const [data, setData] = useState<ToastProps | null>(null)

  const localType = data?.type === 'error' ? 'bg-danger p-2 text-white' : ''

  useEffect(() => {
    if (toastData) {
      const { title, show, icon, msg, type } = toastData.state
      setData({
        show,
        type,
        title: title || 'Bemol',
        msg: msg || '',
        icon: icon || 'bell',
      })
    }
  }, [toastData?.state])

  useEffect(() => {
    if (data && data.show) {
      const toastLiveExample = document.getElementById('liveToast')
      const toast = new Toast(toastLiveExample!)
      toast.show()
    }
  }, [data])

  return (
    <div className='toast-container position-fixed top-0 end-0 p-3'>
      <div
        id='liveToast'
        className={`toast ${localType}`}
        role='alert'
        aria-live='assertive'
        aria-atomic='true'
      >
        <div className='toast-header'>
          <i className={`bi bi-${data?.icon}-fill`}></i>
          <strong className='ms-2 me-auto'>{data?.title}</strong>
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='toast'
            aria-label='Close'
          ></button>
        </div>
        <div className='toast-body'>{data?.msg}</div>
      </div>
    </div>
  )
}
