import config from './app/config'
import server from './interfaces/http/server'

server.listen(config.server.port, () => {
  console.log('Server is listening PORT:', config.server.port)
})
