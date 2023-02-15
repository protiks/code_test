const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const OpenNewWindow = (url: string): (() => void) => () => openInNewTab(url)



export default OpenNewWindow 