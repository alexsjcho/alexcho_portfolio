const getBasePath = () => {
  const isProduction = process.env.NODE_ENV === 'production'
  const repository = 'alexcho_portfolio' // replace with your repository name
  return isProduction ? `/${repository}` : ''
}

export default getBasePath 