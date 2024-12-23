interface UnknownProps {
  onClickToReport: () => void
}

export function Unknown(props: UnknownProps) {
  return (
    <div className='flex flex-col items-center'>
      <div className='rounded-lg bg-red-300 text-red-800'>
        <p className='pl-2 pr-2 pt-1 pb-1'>Unknown</p>
      </div>
      <div className='flex justify-center'>
        <p
          className='underline cursor-pointer'
          onClick={props.onClickToReport}
        >
          Do you want to report?
        </p>
      </div>
    </div>
  )
}