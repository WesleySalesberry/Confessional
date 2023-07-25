interface IMessageProps {
  message: string,
  isError: boolean
}

const Message = (props: IMessageProps) => {
  return (
    <div className={`rounded h-8 ${props.isError ? 'bg-red-700' : 'bg-green-400'}`}>
      <div className={`text-center pt-1 ${props.isError ? 'text-white' : 'text-gray-900'}`}>
        <h1 className="font-bold">{props.message}</h1>
      </div>
    </div>
  )
}

export default Message;