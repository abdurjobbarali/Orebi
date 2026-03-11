

const Container = ({children, className}) => {
  return (
   <div className={` flex items-center max-w-330 m-auto ${className}`}>{children}</div>
  )
}

export default Container