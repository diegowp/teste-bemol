export interface ToastProps {
  show: boolean
  type: 'success' | 'error'
  title?: string
  msg?: string
  icon?: string
}
