import * as S from './styled'

interface LoaderProps {
  enabled: boolean
}

export function Loader({ enabled }: LoaderProps) {
  return enabled ? (
    <S.LoadWrapper>
      <div className='spinner-grow text-primary' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </S.LoadWrapper>
  ) : null
}
