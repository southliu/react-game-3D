interface IProps {
  children: JSX.Element;
}

/**
 * 全屏组件
 */
function FullScreen(props: IProps) {
  const { children } = props

  return (
    <div className="bg-black w-screen h-screen">
      { children }
    </div>
  )
}

export default FullScreen