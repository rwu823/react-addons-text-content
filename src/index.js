function getText(rootChild) {
  let res = ''
  const rr = (child) => {
    if (typeof child === 'string') {
      res += child
    } else if (Array.isArray(child)) {
      child.forEach(c => rr(c))
    } else if(child && child.props.children) {
      const {children} = child.props

      if (Array.isArray(children)) {
        children.forEach(c => rr(c) )
      } else {
        rr(children)
      }
    }
  }

  rr(rootChild)

  return res
}

module.exports = getText
