const AnimatedButton = ({ children, ...rest }) => {
  return (
    <button
      className="group relative z-20 overflow-hidden rounded-lg bg-white px-20 py-5 dark:bg-react"
      {...rest}
    >
      <span className="absolute inset-px z-10 flex items-center justify-center rounded-lg bg-white dark:bg-react">
        {children}
      </span>
      <span className="absolute top-1/2 left-1/2 z-0 h-44 w-44 -translate-x-1/2 -translate-y-1/2 animate-disco rounded-full bg-gradient-to-br from-react-link to-white group-hover:from-rose-500 dark:to-react"></span>
    </button>
  )
}

export default AnimatedButton
