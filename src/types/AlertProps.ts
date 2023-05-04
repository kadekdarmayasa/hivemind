import { ReactNode } from "react"

export type AlertProps = {
  show: boolean,
  icon: ReactNode,
  message: string,
  type: 'success' | 'failed',
}